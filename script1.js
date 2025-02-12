// Función que se llama cuando el usuario inicia sesión con Google
function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('Nombre: ' + profile.getName());
    console.log('Correo electrónico: ' + profile.getEmail());
    // Aquí puedes enviar los datos al backend o manejar el inicio de sesión
}
function facebookLogin() {
    FB.login(function(response) {
        if (response.status === 'connected') {
            // Usuario ha iniciado sesión
            console.log('ID de usuario: ' + response.authResponse.userID);
            console.log('Acceso token: ' + response.authResponse.accessToken);
            // Puedes realizar el inicio de sesión en tu backend aquí
        } else {
            console.log('Usuario no conectado a Facebook');
        }
    }, {scope: 'email'}); // Puedes añadir más permisos si los necesitas
}
// Inicializa el SDK de Facebook
window.fbAsyncInit = function() {
    FB.init({
        appId      : 'TU_APP_ID', // Reemplaza con tu appId de Facebook
        cookie     : true,
        xfbml      : true,
        version    : 'v10.0'
    });
};
