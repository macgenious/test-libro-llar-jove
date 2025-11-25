// Casual Reader Test JavaScript

// Namespace para las funciones del test de lectores casuales
window.casualReaderFunctions = {};

// Preguntas para el test de lectores casuales
const casualReaderQuestions = [
    {
        id: 1,
        text: '¿Qué tipo de libros prefieres leer en tu tiempo libre?',
        options: [
            { letter: 'A', text: 'Novelas ligeras y entretenidas', category: 'FICCIÓN' },
            { letter: 'B', text: 'Libros de no ficción y aprendizaje', category: 'UTILITARISTA' },
            { letter: 'C', text: 'Clásicos de la literatura', category: 'CLÁSICO' }
        ]
    },
    {
        id: 2,
        text: '¿Cuánto tiempo sueles dedicar a la lectura?',
        options: [
            { letter: 'A', text: 'Menos de 30 minutos al día', category: 'CORTOS' },
            { letter: 'B', text: 'Entre 30 minutos y 1 hora al día', category: 'SIN PRISA' },
            { letter: 'C', text: 'Solo leo los fines de semana', category: 'DE FINDE' }
        ]
    },
    {
        id: 3,
        text: '¿Qué buscas principalmente cuando lees un libro?',
        options: [
            { letter: 'A', text: 'Entretenimiento y desconexión', category: 'ENTRETENIDOS' },
            { letter: 'B', text: 'Aprender algo nuevo', category: 'ACADÉMICOS' },
            { letter: 'C', text: 'Reflexionar sobre temas profundos', category: 'REFLEXIVOS' }
        ]
    },
    {
        id: 4,
        text: '¿Qué formato prefieres para leer?',
        options: [
            { letter: 'A', text: 'Libros físicos tradicionales', category: 'CLÁSICO' },
            { letter: 'B', text: 'E-books o lectura digital', category: 'CORTOS' },
            { letter: 'C', text: 'Audiolibros', category: 'SIN PRISA' }
        ]
    },
    {
        id: 5,
        text: '¿Qué extensión de libro prefieres?',
        options: [
            { letter: 'A', text: 'Libros cortos (menos de 200 páginas)', category: 'CORTOS' },
            { letter: 'B', text: 'Libros de extensión media (200-400 páginas)', category: 'SIN PRISA' },
            { letter: 'C', text: 'No me importa la extensión si la historia es buena', category: 'DE FINDE' }
        ]
    },
    {
        id: 6,
        text: '¿Dónde prefieres leer habitualmente?',
        options: [
            { letter: 'A', text: 'En casa, en un ambiente tranquilo', category: 'REFLEXIVOS' },
            { letter: 'B', text: 'En cualquier lugar, aprovechando momentos libres', category: 'CORTOS' },
            { letter: 'C', text: 'En bibliotecas o cafeterías', category: 'ACADÉMICOS' }
        ]
    },
    {
        id: 7,
        text: '¿Cómo descubres nuevos libros para leer?',
        options: [
            { letter: 'A', text: 'Recomendaciones de amigos o familiares', category: 'ENTRETENIDOS' },
            { letter: 'B', text: 'Reseñas en internet o redes sociales', category: 'UTILITARISTA' },
            { letter: 'C', text: 'Visitas a librerías o bibliotecas', category: 'UTILITARISTA' }
        ]
    },
    {
        id: 8,
        text: '¿Qué haces cuando un libro te resulta difícil de entender?',
        options: [
            { letter: 'A', text: 'Lo abandono y busco otro más accesible', category: 'FICCIÓN' },
            { letter: 'B', text: 'Persisto y busco información adicional para comprenderlo', category: 'REFLEXIVOS' },
            { letter: 'C', text: 'Lo leo lentamente, reflexionando sobre cada parte', category: 'CLÁSICO' }
        ]
    },
    {
        id: 9,
        text: '¿Qué género literario te atrae más?',
        options: [
            { letter: 'A', text: 'Novela histórica o biografías', category: 'UTILITARISTA' },
            { letter: 'B', text: 'Ciencia ficción o fantasía', category: 'FICCIÓN' },
            { letter: 'C', text: 'Ensayo o filosofía', category: 'REFLEXIVOS' }
        ]
    },
    {
        id: 10,
        text: '¿Prefieres leer autores...?',
        options: [
            { letter: 'A', text: 'Contemporáneos y actuales', category: 'ENTRETENIDOS' },
            { letter: 'B', text: 'Clásicos y consagrados', category: 'CLÁSICO' },
            { letter: 'C', text: 'De diferentes épocas, según la temática', category: 'ACADÉMICOS' }
        ]
    }
];

// Recomendaciones basadas en las respuestas del test de lectores casuales
const casualReaderRecommendations = {
    'FICCIÓN': {
        title: 'El Lector de Ficción Casual',
        description: 'Disfrutas de la lectura como una forma de entretenimiento y escapismo. Prefieres historias accesibles que te permitan desconectar.',
        books: [
            { title: 'El código Da Vinci', author: 'Dan Brown' },
            { title: 'The Amazing Spiderman', author: 'Stan Lee' },
            { title: 'Beastars', author: 'Paru Itagaki' },
            { title: "Jojo's steel ball", author: 'Hirohiko Araki' }
        ]
    },
    'UTILITARISTA': {
        title: 'El Lector Práctico',
        description: 'Valoras los libros que te aportan conocimientos útiles y perspectivas nuevas sobre el mundo real.',
        books: [
            { title: 'Encuentra tu persona vitamina', author: 'Marian Rojas Estape' },
            { title: 'Hábitos atómicos', author: 'James Clear' },
            { title: "Can't hurt me", author: 'David Goggins' },
            { title: 'Pensar rápido, pensar despacio', author: 'Daniel Kahneman' }
        ]
    },
    'CLÁSICO': {
        title: 'El Lector Clásico',
        description: 'Aprecias las obras que han resistido el paso del tiempo y que ofrecen reflexiones profundas sobre la condición humana.',
        books: [
            { title: 'Cien años de soledad', author: 'Gabriel García Márquez' },
            { title: 'Orgullo y prejuicio', author: 'Jane Austen' },
            { title: 'La Odisea', author: 'Homero' },
            { title: 'Rebelión en la Granja', author: 'George Orwell' }
        ]
    },
    'CORTOS': {
        title: 'El Lector de Momentos',
        description: 'Prefieres lecturas que puedas disfrutar en sesiones cortas, adaptándose a tu estilo de vida ocupado.',
        books: [
            { title: 'El principito', author: 'Antoine de Saint-Exupéry' },
            { title: 'La liebre y la tortuga', author: 'Esopo' },
            { title: 'Jack the ripper', author: 'Gabriel García Márquez' },
            { title: 'El viejo y el mar', author: 'Ernest Hemingway' }
        ]
    },
    'SIN PRISA': {
        title: 'El Lector Equilibrado',
        description: 'Dedicas un tiempo específico a la lectura cada día, valorando historias que puedas seguir a un ritmo constante.',
        books: [
            { title: 'El nombre del viento', author: 'Patrick Rothfuss' },
            { title: 'Hamlet', author: 'William Shakespeare' },
            { title: 'Sapiens: De animales a dioses', author: 'Yuval Noah Harari' },
            { title: 'El psicoanalista', author: 'John Katzenbach' }
        ]
    },
    'DE FINDE': {
        title: 'El Lector de Fin de Semana',
        description: 'Reservas tus momentos de lectura para los fines de semana, cuando puedes sumergirte completamente en una historia.',
        books: [
            { title: 'La verdad sobre el caso Harry Quebert', author: 'Joël Dicker' },
            { title: 'Los pilares de la Tierra', author: 'Ken Follett' },
            { title: 'El tiempo entre costuras', author: 'María Dueñas' },
            { title: 'La trilogía del Baztán', author: 'Dolores Redondo' }
        ]
    },
    'ENTRETENIDOS': {
        title: 'El Lector por Placer',
        description: 'Buscas en la lectura principalmente una forma de entretenimiento y evasión de la rutina diaria.',
        books: [
            { title: 'La chica del tren', author: 'Paula Hawkins' },
            { title: 'A dos metros de ti', author: 'Rachael Lippincott' },
            { title: 'El viaje de Marcos', author: 'Óscar Hernández Campano' },
            { title: 'Origen', author: 'Dan Brown' }
        ]
    },
    'ACADÉMICOS': {
        title: 'El Lector Curioso',
        description: 'Te gusta aprender cosas nuevas a través de la lectura, ampliando tus conocimientos y perspectivas.',
        books: [
            { title: 'Breves respuestas a las grandes preguntas', author: 'Stephen Hawking' },
            { title: 'El gen egoísta', author: 'Richard Dawkins' },
            { title: 'El poder de los hábitos', author: 'Charles Duhigg' },
            { title: 'El mundo y sus demonios', author: 'Carl Sagan' }
        ]
    },
    'REFLEXIVOS': {
        title: 'El Lector Reflexivo',
        description: 'Valoras los libros que te hacen pensar y reflexionar sobre grandes temas y cuestiones existenciales.',
        books: [
            { title: 'La metamorfosis', author: 'Franz Kafka' },
            { title: 'Siddharta', author: 'Hermann Hesse' },
            { title: 'Un mundo feliz', author: 'Aldous Huxley' },
            { title: 'El extranjero', author: 'Albert Camus' }
        ]
    }
};

// Variables para el estado del test de lectores casuales
let currentCasualQuestion = 0;
let casualUserAnswers = [];
let casualReaderCategories = {};

/**
 * Inicia el test de lectores casuales
 * Oculta la pantalla de introducción y muestra la pantalla de preguntas
 */
window.casualReaderFunctions.showCasualReaderTest = function() {
    // Reiniciar variables
    currentCasualQuestion = 0;
    casualUserAnswers = [];
    casualReaderCategories = {};
    
    // Ocultar pantalla de introducción y mostrar pantalla de preguntas
    document.getElementById('intro-screen').classList.remove('active');
    document.getElementById('questions-screen').classList.add('active');
    
    // Configurar el botón de retroceso para el test de lectores casuales
    const backBtn = document.getElementById('back-btn');
    if (window.goBack) {
        backBtn.removeEventListener('click', window.goBack);
        backBtn.addEventListener('click', goBackCasual);
    }
    
    // Configurar los manejadores de eventos para los botones
    if (window.casualReaderFunctions.setHandlers) {
        window.casualReaderFunctions.setHandlers();
    }
    
    // Renderizar la primera pregunta
    renderCasualQuestion();
    updateCasualProgress();
};

/**
 * Renderiza la pregunta actual del test de lectores casuales
 */
function renderCasualQuestion() {
    const questionContainer = document.getElementById('question-container');
    const currentQuestion = casualReaderQuestions[currentCasualQuestion];
    
    // Limpiar el contenedor
    questionContainer.innerHTML = '';
    
    // Crear el elemento de la pregunta
    const questionElement = document.createElement('div');
    questionElement.className = 'question';

    
    
    // Añadir el texto de la pregunta
    const questionText = document.createElement('h3');
    questionText.textContent = currentQuestion.text;
    questionElement.appendChild(questionText);
    
    // Crear contenedor para las opciones
    const optionsContainer = document.createElement('div');
    optionsContainer.className = 'options';
    
    // Añadir cada opción
    currentQuestion.options.forEach(option => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        
        const optionButton = document.createElement('button');
        optionButton.className = 'option-btn';
        optionButton.innerHTML = `${option.text}`;
        
        // Añadir evento de clic
        optionButton.addEventListener('click', () => selectCasualOption(option));
        
        optionElement.appendChild(optionButton);
        optionsContainer.appendChild(optionElement);
    });
    
    // Añadir las opciones al elemento de la pregunta
    questionElement.appendChild(optionsContainer);
    
    // Añadir la pregunta al contenedor
    questionContainer.appendChild(questionElement);
}

/**
 * Maneja la selección de una opción en el test de lectores casuales
 * @param {Object} option - La opción seleccionada
 */
function selectCasualOption(option) {
    // Marcar visualmente la opción seleccionada
    const optionButtons = document.querySelectorAll('.option-btn');
    optionButtons.forEach(btn => btn.classList.remove('selected'));
    
    // Encontrar y marcar el botón seleccionado que contiene la letra de la opción
    const optionButtons2 = document.querySelectorAll('.option-btn');
    optionButtons2.forEach(btn => {
        if (btn.innerHTML.includes(`<span class="option-letter">${option.letter}</span>`)) {
            btn.classList.add('selected');
        }
    });
    
    // Pequeña pausa para mostrar la selección antes de avanzar
    setTimeout(() => {
        // Guardar la respuesta
        casualUserAnswers.push({
            questionId: casualReaderQuestions[currentCasualQuestion].id,
            selectedCategory: option.category
        });
        
        // Actualizar contadores de categorías
        if (!casualReaderCategories[option.category]) {
            casualReaderCategories[option.category] = 1;
        } else {
            casualReaderCategories[option.category]++;
        }
        
        // Avanzar a la siguiente pregunta o mostrar resultados
        currentCasualQuestion++;
        
        if (currentCasualQuestion < casualReaderQuestions.length) {
            renderCasualQuestion();
            updateCasualProgress();
        } else {
            showCasualResults();
        }
    }, 300);
}

/**
 * Actualiza la barra de progreso del test de lectores casuales
 */
function updateCasualProgress() {
    const progressFill = document.getElementById('progress-fill');
    const questionCounter = document.getElementById('question-counter');
    const progressMessage = document.getElementById('progress-message');
    
    // Calcular el progreso
    const progress = (currentCasualQuestion / casualReaderQuestions.length) * 100;
    
    // Actualizar la barra de progreso
    progressFill.style.width = `${progress}%`;
    
    // Actualizar el contador de preguntas
    // Solo mostrar el contador después de la primera pregunta
    if (currentCasualQuestion >= 0) {
        questionCounter.textContent = `${currentCasualQuestion + 1}/${casualReaderQuestions.length}`;
        questionCounter.style.display = 'block';
    } else {
        questionCounter.style.display = 'none';
    }
    
    // Actualizar el mensaje de progreso
    if (progress < 33) {
        progressMessage.textContent = '¡Empezando!';
    } else if (progress < 66) {
        progressMessage.textContent = '¡Buen progreso!';
    } else {
        progressMessage.textContent = '¡Casi terminado!';
    }
}

/**
 * Muestra los resultados del test de lectores casuales
 */
function showCasualResults() {
    // Ocultar pantalla de preguntas y mostrar pantalla de resultados
    document.getElementById('questions-screen').classList.remove('active');
    document.getElementById('results-screen').classList.add('active');
    
    // Encontrar la categoría dominante
    let dominantCategory = '';
    let maxCount = 0;
    
    for (const category in casualReaderCategories) {
        if (casualReaderCategories[category] > maxCount) {
            maxCount = casualReaderCategories[category];
            dominantCategory = category;
        }
    }
    
    // Si no se encontró una categoría dominante, usar la primera respuesta
    if (!dominantCategory && casualUserAnswers.length > 0) {
        dominantCategory = casualUserAnswers[0].selectedCategory;
    }
    
    // Asegurarse de que la categoría existe en las recomendaciones
    if (!casualReaderRecommendations[dominantCategory]) {
        // Usar una categoría por defecto si la dominante no existe
        dominantCategory = 'FICCIÓN';
    }
    
    // Obtener las recomendaciones para la categoría dominante
    const recommendation = casualReaderRecommendations[dominantCategory];
    
    // Actualizar el título y descripción de la personalidad
    document.getElementById('personality-title').textContent = recommendation.title;
    document.getElementById('personality-description').textContent = recommendation.description;
    
    // Ocultar los gráficos de personalidad MBTI que no son relevantes para este test
    const personalityTraits = document.querySelector('.personality-traits');
    if (personalityTraits) {
        personalityTraits.style.display = 'none';
    }
    
    // Actualizar el código de personalidad para mostrar la categoría
    const personalityCode = document.querySelector('.personality-code');
    if (personalityCode) {
        personalityCode.textContent = dominantCategory.toUpperCase();
    }
    
    // Mostrar las recomendaciones de libros
    renderCasualReaderRecommendations(recommendation.books, dominantCategory);
    
    // Configurar los manejadores de eventos para los botones de resultados
    if (window.casualReaderFunctions.setHandlers) {
        window.casualReaderFunctions.setHandlers();
    }
}

/**
 * Renderiza las recomendaciones de libros para el test de lectores casuales
 * @param {Array} books - Array de objetos de libros con título y autor
 * @param {string} category - Categoría dominante del lector
 */
function renderCasualReaderRecommendations(books, category) {
    // Limpiar recomendaciones anteriores
    const bookRecommendations = document.getElementById('book-recommendations');
    bookRecommendations.innerHTML = '';
    
    // Obtener la categoría de lector actual
    const readerCategory = document.querySelector('.personality-code').textContent;
    
    // Añadir entradas de libros con estilo minimalista
    books.forEach(book => {
        const bookEntry = document.createElement('div');
        bookEntry.className = 'book-entry';
        
        // Crear estructura HTML minimalista
        bookEntry.innerHTML = `<span class="book-title">${book.title}</span> <br> <span class="book-author"> ${book.author}</span>`;
        
        bookRecommendations.appendChild(bookEntry);
    });
}

/**
 * Maneja el botón de retroceso en el test de lectores casuales
 */
function goBackCasual() {
    if (currentCasualQuestion > 0) {
        currentCasualQuestion--;
        renderCasualQuestion();
        updateCasualProgress();
    } else {
        // En vez de volver a la pantalla de introducción, ir a la primera pregunta del test principal
        document.getElementById('questions-screen').classList.remove('active');
        
        // Restaurar el comportamiento original del botón de retroceso
        const backBtn = document.getElementById('back-btn');
        backBtn.removeEventListener('click', goBackCasual);
        if (window.goBack) {
            backBtn.addEventListener('click', window.goBack);
        }
        
        // Iniciar el test principal
        if (typeof window.currentQuestionIndex !== 'undefined') {
            window.currentQuestionIndex = 0;
        }
        document.getElementById('questions-screen').classList.add('active');
        
        // Llamar a las funciones del test principal para renderizar la primera pregunta
        if (typeof window.renderQuestion === 'function' && typeof window.updateProgress === 'function') {
            window.renderQuestion();
            window.updateProgress();
        }
    }
}

/**
 * Cierra los resultados y vuelve a la pantalla de introducción
 */
function closeResults() {
    document.getElementById('results-screen').classList.remove('active');
    document.getElementById('intro-screen').classList.add('active');
    
    // Restaurar la visualización de los gráficos de personalidad para el test principal
    document.querySelector('.personality-traits').style.display = 'flex';
    
    // Restaurar el comportamiento original del botón de retroceso
    const backBtn = document.getElementById('back-btn');
    backBtn.removeEventListener('click', goBackCasual);
    if (window.goBack) {
        backBtn.addEventListener('click', window.goBack);
    }
}

/**
 * Reinicia el test de lectores casuales y vuelve a la página principal
 */
function retakeTest() {
    // Hide results screen
    document.getElementById('results-screen').classList.remove('active');
    
    // Reset test variables
    currentCasualQuestion = 0;
    casualUserAnswers = [];
    casualReaderCategories = {};
    
    // Show intro screen (main page) instead of questions screen
    document.getElementById('intro-screen').classList.add('active');
    
    // Restaurar la visualización de los gráficos de personalidad para el test principal
    const personalityTraits = document.querySelector('.personality-traits');
    if (personalityTraits) {
        personalityTraits.style.display = 'flex';
    }
    
    // Restaurar el comportamiento original del botón de retroceso
    const backBtn = document.getElementById('back-btn');
    backBtn.removeEventListener('click', goBackCasual);
    if (window.goBack) {
        backBtn.addEventListener('click', window.goBack);
    }
}

// Exponer funciones necesarias al objeto global para que puedan ser utilizadas por personality_test.js
document.addEventListener('DOMContentLoaded', function() {
    // Conectar los botones con las funciones del test de lectores casuales
    const closeResultsBtn = document.getElementById('close-results-btn');
    const retakeTestBtn = document.getElementById('retake-test-btn');
    const shareResultBtn = document.getElementById('share-books-btn');
    
    // Guardar las funciones originales
    const originalCloseResults = closeResultsBtn.onclick;
    const originalRetakeTest = retakeTestBtn.onclick;
    const originalShareBooks = shareResultBtn.onclick;
    
    // Función para restaurar los manejadores originales
    window.casualReaderFunctions.restoreHandlers = function() {
        closeResultsBtn.onclick = originalCloseResults;
        retakeTestBtn.onclick = originalRetakeTest;
        shareResultBtn.onclick = originalShareBooks;
    };
    
    // Función para establecer los manejadores del test de lectores casuales
    window.casualReaderFunctions.setHandlers = function() {
        closeResultsBtn.onclick = closeResults;
        retakeTestBtn.onclick = retakeTest;
        shareResultBtn.onclick = shareBooks;
    };
});

// Guardar referencia a la función goBack original para poder restaurarla
document.addEventListener('DOMContentLoaded', function() {
    if (window.goBack) {
        window.originalGoBack = window.goBack;
    }
});