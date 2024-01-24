$(document).ready(function () {
    const apiKey = 'VGA0h4KMik7gdjSfKOLPfkSU8LtQSMPyrl09zUr4aHTaMeyKrn';
    const apiUrl = 'https://api.petfinder.com/v2/animals/';
    const placeholderImageUrl = 'placeholder.jpg';

    const urlParams = new URLSearchParams(window.location.search);
    const animalId = urlParams.get('id');

    // Obtenha um token de acesso usando suas credenciais
    $.ajax({
        type: 'POST',
        url: 'https://api.petfinder.com/v2/oauth2/token',
        data: {
            grant_type: 'client_credentials',
            client_id: apiKey,
            client_secret: '4uS2OFVhXd9TkJUkyRSIKiX9voH05py0jlg4HN1g'
        },
        success: function (response) {
            const accessToken = response.access_token;

            // Faça a solicitação real usando o token de acesso
            $.ajax({
                type: 'GET',
                url: apiUrl + animalId,
                headers: {
                    'Authorization': `Bearer ${accessToken}`
                },
                dataType: 'json',
                success: function (data) {
                    var animal = data.animal;

                    if (animal) {
                        displayAnimalDetails(animal);
                    } else {
                        console.error('Animal não encontrado.');
                    }
                },
                error: function (request, error) {
                    console.error('Erro na solicitação:', error);
                }
            });
        },
        error: function (request, error) {
            console.error('Erro na obtenção do token de acesso:', error);
        }
    });

    function displayAnimalDetails(animal) {
        var animalDetailsContainer = $('#detalhes');

        var detailsHTML = '<h1>' + animal.name + '</h1>';

        if (animal.photos && animal.photos.length > 0) {
            var imageUrl = animal.photos[0].large || animal.photos[0].medium || animal.photos[0].small;
            detailsHTML += '<img src="' + imageUrl + '" alt="' + animal.name + '" >';
        }

        detailsHTML += '<h2>' + animal.age + '</h2>';
        detailsHTML += '<p>' + animal.description + '</p>';
        detailsHTML += '<p>Localização: ' + animal.contact.address.city + ', ' + animal.contact.address.state + '</p>';
        detailsHTML += '<p>Email de Contato: <a href="mailto:' + animal.contact.email + '">' + animal.contact.email + '</a></p>';
        detailsHTML += '<p>Raça do cão: ' + animal.breed + '</p>';
        detailsHTML += '<p>Cuidados Especiais: ' + animal.special_needs + '</p>';
        detailsHTML += '<p>Status de Adoção: ' + animal.status + '</p>';
        animalDetailsContainer.append(detailsHTML);
    }
});

