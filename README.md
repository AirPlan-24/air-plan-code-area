<!DOCTYPE html>
<html lang="es">
<head>
<link rel="stylesheet" href="styles.css">

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Página Web de Viajes - AirPlan</title>
    <link rel="stylesheet" href="styles.css"> <!-- Aquí deberías enlazar tu archivo de estilos CSS -->
    <script src="https://cdn.jsdelivr.net/npm/@chatgpt/chatgpt.min.js"></script> <!-- Integración de Chatbot -->
</head>
<body>
<!-- Header -->
<header>
    <nav>
        <ul>
            <li><a href="Airplan.html">Inicio</a></li>
            <li><a href="login.html">Iniciar Sesión</a></li> <!-- Enlace a la página de inicio de sesión -->
        </ul>
    </nav>
</header>

    <!-- Header -->
    <header>
        <nav>
            <ul>
                <li><a href="#inicio">Inicio</a></li>
                <li><a href="#paquetes">Paquetes Destacados</a></li>
                <li><a href="#usuarios">Usuarios</a></li>
                <li><a href="#blog">Blog</a></li>
                <li><a href="#perfil">Perfil</a></li>
                <li><a href="#productos">Productos</a></li>
                <li><a href="#notificaciones">Notificaciones</a></li>
            </ul>
        </nav>
    </header>

    <!-- Apartado de inicio -->
    <section id="inicio">
        <h1>Bienvenidos a AirPlan</h1>
        <p>Explora nuevos destinos, compra paquetes y reserva tus aventuras de manera fácil y rápida.</p>
        <!-- Código QR para inicio de sesión -->
        <div class="qr-login">
            <p>Escanea el QR para iniciar sesión con AirPlan:</p>
            <img src="qr-code.png" alt="Código QR para inicio de sesión">
        </div>
    </section>

    <!-- Configuración de notificaciones -->
    <section id="configuracion">
        <h2>Configuración de Notificaciones</h2>
        <form>
            <label for="notificaciones-email">Recibir notificaciones por email</label>
            <input type="checkbox" id="notificaciones-email">
            <label for="notificaciones-sms">Recibir notificaciones por SMS</label>
            <input type="checkbox" id="notificaciones-sms">
            <button type="submit">Guardar Configuración</button>
        </form>
    </section>

    <!-- Términos y condiciones -->
    <section id="terminos">
        <h2>Términos y Condiciones</h2>
        <p>Aquí van los términos y condiciones del sitio web, incluyendo las políticas sobre cookies.</p>
        <button onclick="window.location.href='terminos.html'">Leer Términos</button>
    </section>

    <!-- Paquetes destacados -->
    <section id="paquetes">
        <h2>Paquetes Destacados</h2>
        <p>Estamos en Carnaval, aquí tienes nuestras opciones recomendadas:</p>
        <div class="paquete">
            <h3>Paquete 1: Carnaval en Río</h3>
            <button>Ver Paquete</button>
        </div>
        <div class="paquete">
            <h3>Paquete 2: Carnaval en Barranquilla</h3>
            <button>Ver Paquete</button>
        </div>
    </section>

    <!-- Usuarios -->
    <section id="usuarios">
        <h2>Usuarios</h2>
        <p>Conecta con otros usuarios, comparte tus reseñas y recomendaciones.</p>
        <div id="chatbot-container">
            <!-- ChatBot BAI integrado con versión ChatGPT 4.0 -->
            <div id="chatbot">
                <h3>Chat BAI - Asistente Virtual</h3>
                <div id="chat-box"></div>
                <input type="text" id="chat-input" placeholder="Escribe tu mensaje...">
                <button onclick="sendMessage()">Enviar</button>
            </div>
        </div>
    </section>

    <!-- Productos -->
    <section id="productos">
        <h2>Productos</h2>
        <p>Busca tus productos a través de filtros:</p>
        <form>
            <label for="fecha">Fecha de viaje:</label>
            <input type="date" id="fecha">
            <label for="noches">Número de noches:</label>
            <input type="number" id="noches">
            <label for="precio">Precio:</label>
            <input type="range" id="precio" min="100" max="1000">
            <button type="submit">Buscar</button>
        </form>
    </section>

    <!-- Blog -->
    <section id="blog">
        <h2>Blog</h2>
        <div class="entrada">
            <h3>¡Consejos para viajar al Caribe!</h3>
            <p>Lee nuestras últimas entradas y conoce los mejores consejos para tus viajes.</p>
            <button>Leer más</button>
        </div>
    </section>

    <!-- Perfil -->
    <section id="perfil">
        <h2>Mi Perfil</h2>
        <p>Con tu perfil podrás gestionar tus compras, preferencias y más.</p>
        <button>Ver Perfil</button>
    </section>

    <!-- Panel de Notificaciones -->
    <section id="notificaciones">
        <h2>Panel de Notificaciones</h2>
        <ul>
            <li>Nuevo seguidor: Juan Pérez</li>
            <li>Comentario en tu reseña: ¡Qué gran viaje!</li>
            <li>Reseña nueva de tu producto favorito</li>
        </ul>
    </section>

    <!-- Footer -->
    <footer>
        <p>&copy; 2025 AirPlan. Todos los derechos reservados.</p>
    </footer>

    <script>
        // Aquí va tu código JavaScript para funcionalidades interactivas
        function sendMessage() {
            let message = document.getElementById("chat-input").value;
            let chatBox = document.getElementById("chat-box");
            chatBox.innerHTML += `<p><strong>Tú:</strong> ${message}</p>`;
            document.getElementById("chat-input").value = ''; // Limpiar el campo de texto
        }
    </script>
<script src="script.js"></script>

</body>
</html>
