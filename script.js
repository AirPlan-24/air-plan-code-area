// Función para enviar mensaje en el chatbot
function sendMessage() {
    const message = document.getElementById("chat-input").value;
    const chatBox = document.getElementById("chat-box");
    
    if (message.trim() === "") {
        alert("Por favor, escribe un mensaje.");
        return;
    }

    // Mostrar el mensaje del usuario
    chatBox.innerHTML += `<p><strong>Tú:</strong> ${message}</p>`;
    document.getElementById("chat-input").value = ''; // Limpiar el campo de texto

    // Respuesta automática del ChatBot (simulando una respuesta simple)
    setTimeout(() => {
        chatBox.innerHTML += `<p><strong>BAI (ChatBot):</strong> ¡Hola! ¿En qué te puedo ayudar con tus viajes?</p>`;
        chatBox.scrollTop = chatBox.scrollHeight; // Desplazar al final
    }, 1000);
}

// Función para buscar productos con filtros
function filterProducts(event) {
    event.preventDefault();
    const fecha = document.getElementById("fecha").value;
    const noches = document.getElementById("noches").value;
    const precio = document.getElementById("precio").value;
    
    // Aquí podemos agregar lógica más compleja para filtrar productos,
    // pero por ahora solo mostramos un mensaje con los datos seleccionados
    alert(`Buscando productos con las siguientes opciones:\nFecha: ${fecha}\nNoches: ${noches}\nPrecio: ${precio}`);
}

// Función para mostrar notificaciones en el panel
function updateNotifications() {
    const notifications = [
        "Nuevo seguidor: Juan Pérez",
        "Comentario en tu reseña: ¡Qué gran viaje!",
        "Reseña nueva de tu producto favorito"
    ];

    const notificationsPanel = document.getElementById("notificaciones");
    const notificationList = notificationsPanel.querySelector("ul");
    
    notificationList.innerHTML = ""; // Limpiar notificaciones previas
    
    notifications.forEach(notification => {
        const li = document.createElement("li");
        li.textContent = notification;
        notificationList.appendChild(li);
    });
}

// Función para gestionar configuración de notificaciones
function saveNotificationSettings(event) {
    event.preventDefault();
    
    const emailNotifications = document.getElementById("notificaciones-email").checked;
    const smsNotifications = document.getElementById("notificaciones-sms").checked;
    
    alert(`Configuración guardada:\nNotificaciones por email: ${emailNotifications ? 'Sí' : 'No'}\nNotificaciones por SMS: ${smsNotifications ? 'Sí' : 'No'}`);
}

// Evento de envío de mensaje en el chatbot
document.getElementById("chatbot button").addEventListener("click", sendMessage);

// Evento para el formulario de filtros de productos
document.querySelector("form").addEventListener("submit", filterProducts);

// Evento para guardar configuración de notificaciones
document.querySelector("form").addEventListener("submit", saveNotificationSettings);

// Actualizar notificaciones cuando la página cargue
window.onload = updateNotifications;
