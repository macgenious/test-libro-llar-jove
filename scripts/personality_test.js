// Book Personality Test JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const introScreen = document.getElementById('intro-screen');
    const questionsScreen = document.getElementById('questions-screen');
    const resultsScreen = document.getElementById('results-screen');
    const startTestBtn = document.getElementById('start-test-btn');
    const backBtn = document.getElementById('back-btn');
    const closeResultsBtn = document.getElementById('close-results-btn');
    const retakeTestBtn = document.getElementById('retake-test-btn');
    const shareResultBtn = document.getElementById('share-books-btn');
    const questionContainer = document.getElementById('question-container');
    const progressFill = document.getElementById('progress-fill');
    const questionCounter = document.getElementById('question-counter');
    const progressMessage = document.getElementById('progress-message');
    
    // Personality traits elements
    const personalityTitle = document.getElementById('personality-title');
    const personalityDescription = document.getElementById('personality-description');
    const personalityCode = document.querySelector('.personality-code');
    const iePercentage = document.getElementById('ie-percentage');
    const nsPercentage = document.getElementById('ns-percentage');
    const tfPercentage = document.getElementById('tf-percentage');
    const pjPercentage = document.getElementById('pj-percentage');
    const ieChart = document.getElementById('ie-chart');
    const nsChart = document.getElementById('ns-chart');
    const tfChart = document.getElementById('tf-chart');
    const pjChart = document.getElementById('pj-chart');
    const bookRecommendations = document.getElementById('book-recommendations');
    




    // Test Data - 16 questions based on MBTI dimensions
    const questions = [

        {
            id: 0,
            text: '¿Qué tipo de lector te consideras?',
            options: [
                { letter: 'A', text: 'Un lector ocasional, que lee 2 o menos libros al mes'},
                { letter: 'B', text: 'Un lector intenso, que lee varios 3 o más libros al mes'},
            ]
        },

        // Introversion (I) vs. Extraversion (E) questions
        {
            id: 1,
            text: '¿Cómo prefieres pasar tu tiempo libre?',
            options: [
                { letter: 'A', text: 'Leyendo un libro o en actividades tranquilas', trait: 'I' },
                { letter: 'B', text: 'Saliendo con un grupo grande de amigos', trait: 'E' },
                { letter: 'C', text: 'En actividades al aire libre con pocos amigos', trait: 'S' }
            ]
        },
        {
            id: 2,
            text: 'Cuando lees un libro, ¿qué te resulta más atractivo?',
            options: [
                { letter: 'A', text: 'Las reflexiones filosóficas profundas', trait: 'I' },
                { letter: 'B', text: 'Las interacciones dinámicas entre personajes', trait: 'E' },
                { letter: 'C', text: 'Los detalles del mundo y su construcción', trait: 'N' }
            ]
        },
        {
            id: 3,
            text: '¿Qué tipo de protagonista prefieres?',
            options: [
                { letter: 'A', text: 'Un pensador solitario y estratégico', trait: 'I' },
                { letter: 'B', text: 'Un líder carismático y social', trait: 'E' },
                { letter: 'C', text: 'Un rebelde que desafía las normas', trait: 'P' }
            ]
        },
        {
            id: 4,
            text: '¿Qué escenario te resulta más interesante en una historia?',
            options: [
                { letter: 'A', text: 'Un viaje de autodescubrimiento personal', trait: 'I' },
                { letter: 'B', text: 'Una aventura con un grupo diverso', trait: 'E' },
                { letter: 'C', text: 'Una misión con un objetivo claro', trait: 'J' }
            ]
        },
        
        // Intuition (N) vs. Sensing (S) questions
        {
            id: 5,
            text: '¿Qué valoras más en una historia?',
            options: [
                { letter: 'A', text: 'Los significados simbólicos ocultos', trait: 'N' },
                { letter: 'B', text: 'Las descripciones precisas y realistas', trait: 'S' },
                { letter: 'C', text: 'El desarrollo emocional de los personajes', trait: 'F' }
            ]
        },
        {
            id: 6,
            text: '¿Qué género literario te atrae más?',
            options: [
                { letter: 'A', text: 'Ciencia ficción especulativa', trait: 'N' },
                { letter: 'B', text: 'Novela histórica detallada', trait: 'S' },
                { letter: 'C', text: 'Drama psicológico', trait: 'F' }
            ]
        },
        {
            id: 7,
            text: '¿Qué prefieres en el desarrollo de una trama?',
            options: [
                { letter: 'A', text: 'Giros inesperados y conceptos innovadores', trait: 'N' },
                { letter: 'B', text: 'Una progresión lógica y realista', trait: 'S' },
                { letter: 'C', text: 'Momentos de tensión emocional', trait: 'F' }
            ]
        },
        {
            id: 8,
            text: '¿Qué te gusta más encontrar en un libro?',
            options: [
                { letter: 'A', text: 'Teorías y conceptos abstractos', trait: 'N' },
                { letter: 'B', text: 'Hechos y experiencias tangibles', trait: 'S' },
                { letter: 'C', text: 'Dilemas morales complejos', trait: 'T' }
            ]
        },
        
        // Thinking (T) vs. Feeling (F) questions
        {
            id: 9,
            text: '¿Qué te impacta más en una historia?',
            options: [
                { letter: 'A', text: 'La lógica impecable de la trama', trait: 'T' },
                { letter: 'B', text: 'Las relaciones emotivas entre personajes', trait: 'F' },
                { letter: 'C', text: 'Los misterios sin resolver', trait: 'N' }
            ]
        },
        {
            id: 10,
            text: '¿Qué tipo de conflicto te interesa más?',
            options: [
                { letter: 'A', text: 'Dilemas éticos complejos', trait: 'T' },
                { letter: 'B', text: 'Conflictos emocionales intensos', trait: 'F' },
                { letter: 'C', text: 'Desafíos estratégicos', trait: 'J' }
            ]
        },
        {
            id: 11,
            text: '¿Qué buscas en el desenlace de un libro?',
            options: [
                { letter: 'A', text: 'Una resolución lógica y coherente', trait: 'T' },
                { letter: 'B', text: 'Un final emocionalmente satisfactorio', trait: 'F' },
                { letter: 'C', text: 'Un giro sorprendente e inesperado', trait: 'P' }
            ]
        },
        {
            id: 12,
            text: '¿Qué aspecto te atrae más de un personaje?',
            options: [
                { letter: 'A', text: 'Su capacidad de razonamiento analítico', trait: 'T' },
                { letter: 'B', text: 'Su profundidad emocional', trait: 'F' },
                { letter: 'C', text: 'Su adaptabilidad al cambio', trait: 'P' }
            ]
        },
        
        // Judging (J) vs. Perceiving (P) questions
        {
            id: 13,
            text: '¿Cómo prefieres que sea la estructura de un libro?',
            options: [
                { letter: 'A', text: 'Organizada y con un arco narrativo claro', trait: 'J' },
                { letter: 'B', text: 'Flexible y abierta a interpretaciones', trait: 'P' },
                { letter: 'C', text: 'Experimental y no convencional', trait: 'N' }
            ]
        },
        {
            id: 14,
            text: '¿Qué tipo de final prefieres?',
            options: [
                { letter: 'A', text: 'Que resuelva todas las tramas pendientes', trait: 'J' },
                { letter: 'B', text: 'Que deje espacio a la interpretación', trait: 'P' },
                { letter: 'C', text: 'Que plantee nuevas preguntas', trait: 'N' }
            ]
        },
        {
            id: 15,
            text: '¿Qué valoras más en el ritmo de lectura?',
            options: [
                { letter: 'A', text: 'Una progresión metódica y planificada', trait: 'J' },
                { letter: 'B', text: 'Un flujo natural y espontáneo', trait: 'P' },
                { letter: 'C', text: 'Una narrativa dinámica y variada', trait: 'E' }
            ]
        },
        {
            id: 16,
            text: '¿Cómo te gusta que sea el autor?',
            options: [
                { letter: 'A', text: 'Metódico y estructurado', trait: 'J' },
                { letter: 'B', text: 'Espontáneo e improvisador', trait: 'P' },
                { letter: 'C', text: 'Innovador y experimental', trait: 'N' }
            ]
        }
    ];
    
    // Import casual reader data from casual_reader_test.js
    // These variables will be populated when casual_reader_test.js loads
    
    /**
     * MBTI Personality Types Book Recommendations
     * Maps 16 personality types to curated book recommendations
     * Based on the Myers-Briggs Type Indicator (MBTI) framework
     * 
     * Each personality type contains:
     * @property {string} title - Personality-based reader archetype
     * @property {string} description - Reading preferences based on personality traits
     * @property {Array} books - Carefully selected books matching the personality type
     */
    const personalityTypes = {
        'INTJ': {
            title: 'El Estratega Literario',
            description: 'Te atraen los libros con complejidad intelectual y visiones del futuro. Disfrutas de tramas elaboradas que desafían tu mente analítica.',
            books: [
                { title: '1984', author: 'George Orwell' },
                { title: 'El nombre de la rosa', author: 'Umberto Eco' },
                { title: 'Dune', author: 'Frank Herbert' },
                { title: 'Fundación', author: 'Isaac Asimov' }
            ]
        },
        'INTP': {
            title: 'El Explorador Intelectual',
            description: 'Te gusta explorar ideas complejas y conceptos abstractos. Buscas libros que desafíen tu intelecto y te hagan reflexionar profundamente.',
            books: [
                { title: 'El mundo de Sofía', author: 'Jostein Gaarder' },
                { title: 'Crimen y castigo', author: 'Fiódor Dostoyevski' },
                { title: 'Los renglones torcidos de Dios', author: 'Torcuato Luca de Tena' },
                { title: 'Cosmos', author: 'Carl Sagan' }
            ]
        },
        'ENTJ': {
            title: 'El Líder Literario',
            description: 'Te atraen historias de liderazgo, estrategia y logros. Disfrutas de libros que muestran cómo superar obstáculos y alcanzar objetivos ambiciosos.',
            books: [
                { title: 'El arte de la guerra', author: 'Sun Tzu' },
                { title: 'Steve Jobs', author: 'Walter Isaacson' },
                { title: 'Los pilares de la Tierra', author: 'Ken Follett' },
                { title: 'El Padrino', author: 'Mario Puzo' }
            ]
        },
        'ENTP': {
            title: 'El Innovador Literario',
            description: 'Te atraen los libros que desafían convenciones y presentan ideas revolucionarias. Disfrutas de historias con giros inesperados y conceptos originales.',
            books: [
                { title: 'El juego de Ender', author: 'Orson Scott Card' },
                { title: 'Ready Player One', author: 'Ernest Cline' },
                { title: 'Freakonomics', author: 'Steven D. Levitt' },
                { title: 'Armas, gérmenes y acero', author: 'Jared Diamond' }
            ]
        },
        'INFJ': {
            title: 'El Idealista Literario',
            description: 'Te atraen historias con profundidad emocional y significado. Buscas libros que exploren la condición humana y promuevan valores positivos.',
            books: [
                { title: 'To Kill a Mockingbird', author: 'Harper Lee' },
                { title: 'Invisible', author: 'Eloy Moreno' },
                { title: 'El niño con el pijama de rayas', author: 'John Boyne' },
                { title: 'Hombres buenos', author: 'Arturo Pérez-Reverte' }
            ]
        },
        'INFP': {
            title: 'El Soñador Literario',
            description: 'Te atraen historias con riqueza emocional y personajes auténticos. Disfrutas de libros que exploran la identidad y los valores personales.',
            books: [
                { title: 'Aristóteles y Dante descubren los secretos del universo', author: 'Benjamin Alire Saenz' },
                { title: 'Mujercitas', author: 'Louisa May Alcott' },
                { title: 'El jardín secreto', author: 'Frances Hodgson Burnett' },
                { title: 'Demian', author: 'Hermann Hesse' }
            ]
        },
        'ENFJ': {
            title: 'El Mentor Literario',
            description: 'Te atraen historias inspiradoras sobre crecimiento personal y conexiones humanas. Disfrutas de libros que muestran el impacto positivo en los demás.',
            books: [
                { title: 'Los miserables', author: 'Victor Hugo' },
                { title: 'Meditaciones', author: 'Marco Aurelio' },
                { title: 'Wonder', author: 'R.J. Palacio' },
                { title: 'La ladrona de libros', author: 'Markus Zusak' }
            ]
        },
        'ENFP': {
            title: 'El Entusiasta Literario',
            description: 'Te atraen historias llenas de posibilidades y aventuras. Disfrutas de libros con personajes carismáticos y tramas que celebran la diversidad.',
            books: [
                { title: 'La sombra del viento', author: 'Carlos Ruiz Zafón' },
                { title: 'Big Magic', author: 'Elizabeth Gilbert' },
                { title: 'Las ventajas de ser invisible', author: 'Stephen Chbosky' },
                { title: 'Un mundo sin fin', author: 'Ken Follett' }
            ]
        },
        'ISTJ': {
            title: 'El Guardián Literario',
            description: 'Te atraen historias bien estructuradas con atención al detalle. Disfrutas de libros con narrativas claras y precisas que respetan las tradiciones.',
            books: [
                { title: 'Sherlock Holmes', author: 'Arthur Conan Doyle' },
                { title: 'El código Da Vinci', author: 'Dan Brown' },
                { title: 'La chica del tren', author: 'Paula Hawkins' },
                { title: 'El silencio de los corderos', author: 'Thomas Harris' }
            ]
        },
        'ISTP': {
            title: 'El Artesano Literario',
            description: 'Te atraen historias prácticas con personajes hábiles y resolutivos. Disfrutas de libros con acción y soluciones ingeniosas a problemas concretos.',
            books: [
                { title: 'La carretera', author: 'Cormac McCarthy' },
                { title: 'El viejo y el mar', author: 'Ernest Hemingway' },
                { title: 'Jurassic Park', author: 'Michael Crichton' },
                { title: 'El marciano', author: 'Andy Weir' }
            ]
        },
        'ESTP': {
            title: 'El Aventurero Literario',
            description: 'Te atraen historias de acción y aventura con ritmo rápido. Disfrutas de libros con protagonistas audaces que viven el momento.',
            books: [
                { title: 'El código Da Vinci', author: 'Dan Brown' },
                { title: 'Juego de tronos', author: 'George R.R. Martin' },
                { title: 'El corredor del laberinto', author: 'James Dashner' },
                { title: 'Cazadores de sombras', author: 'Cassandra Clare' }
            ]
        },
        'ESTJ': {
            title: 'El Ejecutivo Literario',
            description: 'Te atraen historias con estructuras claras y personajes decididos. Disfrutas de libros que muestran el valor del orden y la responsabilidad.',
            books: [
                { title: 'El padrino', author: 'Mario Puzo' },
                { title: 'Matar a un ruiseñor', author: 'Harper Lee' },
                { title: 'La insoportable levedad del ser', author: 'Milan Kundera' },
                { title: 'El poder del ahora', author: 'Eckhart Tolle' }
            ]
        },
        'ISFJ': {
            title: 'El Defensor Literario',
            description: 'Te atraen historias con personajes leales y compasivos. Disfrutas de libros que exploran relaciones profundas y valores tradicionales.',
            books: [
                { title: 'Los puentes de Madison', author: 'Robert James Waller' },
                { title: 'Como agua para chocolate', author: 'Laura Esquivel' },
                { title: 'El cuaderno de Noah', author: 'Nicholas Sparks' },
                { title: 'La casa de los espíritus', author: 'Isabel Allende' }
            ]
        },
        'ISFP': {
            title: 'El Artista Literario',
            description: 'Te atraen historias con belleza estética y sensibilidad. Disfrutas de libros que exploran la experiencia humana a través de los sentidos.',
            books: [
                { title: 'El retrato de Dorian Gray', author: 'Oscar Wilde' },
                { title: 'Memorias de una geisha', author: 'Arthur Golden' },
                { title: 'La elegancia del erizo', author: 'Muriel Barbery' },
                { title: 'El perfume', author: 'Patrick Süskind' }
            ]
        },
        'ESFP': {
            title: 'El Animador Literario',
            description: 'Te atraen historias vibrantes y llenas de vida. Disfrutas de libros con personajes carismáticos y situaciones sociales dinámicas.',
            books: [
                { title: 'El gran Gatsby', author: 'F. Scott Fitzgerald' },
                { title: 'Desayuno con diamantes', author: 'Truman Capote' },
                { title: 'Cometas en el cielo', author: 'Khaled Hosseini' },
                { title: 'Comer, rezar, amar', author: 'Elizabeth Gilbert' }
            ]
        },
        'ESFJ': {
            title: 'El Cónsul Literario',
            description: 'Te atraen historias sobre comunidades y relaciones interpersonales. Disfrutas de libros que celebran la armonía social y los valores compartidos.',
            books: [
                { title: 'Bajo la misma estrella', author: 'John Green' },
                { title: 'Pequeñas grandes cosas', author: 'Jodi Picoult' },
                { title: 'El club de la buena estrella', author: 'Amy Tan' },
                { title: 'Antes de ti', author: 'Jojo Moyes' }
            ]
        }
    };
    
    /**
     * Application State Variables
     * These variables track the current state of the test and user's progress
     * 
     * @property {number} currentQuestionIndex - Tracks which question is currently displayed
     * @property {Array} userAnswers - Stores the user's selected answers
     * @property {Object} personalityPreferences - Tracks the accumulated scores for each personality dimension
     */
    let currentQuestionIndex = 0;
    let userAnswers = [];
    let personalityPreferences = {
        'Introvert': 0, 'Extrovert': 0,
        'Intuitive': 0, 'Sensing': 0,
        'Thinking': 0, 'Feeling': 0,
        'Judging': 0, 'Perceiving': 0
    };
    
    /**
     * Event Listeners
     * Set up user interaction handlers for navigation and test flow
     */
    startTestBtn.addEventListener('click', startTest);
    backBtn.addEventListener('click', goBack);
    closeResultsBtn.addEventListener('click', closeResults);
    retakeTestBtn.addEventListener('click', retakeTest);
    shareResultBtn.addEventListener('click', shareBooks);
    
    /**
     * Test Navigation Functions
     * These functions control the flow between different screens of the application
     */
    
    /**
     * Starts the personality test
     * Hides the intro screen and displays the questions screen
     */
    function startTest() {
        introScreen.classList.remove('active');
        questionsScreen.classList.add('active');
        renderQuestion();
        updateProgress();
    }
    
    /**
     * Navigates to the previous question or back to intro screen
     * Allows users to change their previous answers
     * Exposed to window object for access from casual_reader_test.js
     */
    function goBack() {
        if (currentQuestionIndex > 0) {
            currentQuestionIndex--;
            renderQuestion();
            updateProgress();
        } else {
            questionsScreen.classList.remove('active');
            introScreen.classList.add('active');
        }
    }
    
    // Expose functions to window object for access from casual_reader_test.js
    window.goBack = goBack;
    window.renderQuestion = renderQuestion;
    window.updateProgress = updateProgress;
    window.currentQuestionIndex = currentQuestionIndex;
    
    /**
     * Closes the results screen and returns to the intro screen
     * Resets the test state for a fresh start
     */
    function closeResults() {
        resultsScreen.classList.remove('active');
        introScreen.classList.add('active');
        resetTest();
    }
    
    /**
     * Allows the user to take the test again
     * Resets all test data and returns to the intro screen
     */
    function retakeTest() {
        resultsScreen.classList.remove('active');
        introScreen.classList.add('active');
        resetTest();
    }
    
    /**
     * Resets all test state variables to their initial values
     * Called when restarting the test
     */
    function resetTest() {
        currentQuestionIndex = 0;
        userAnswers = [];
        traitCounts = {
            'I': 0, 'E': 0,
            'N': 0, 'S': 0,
            'T': 0, 'F': 0,
            'J': 0, 'P': 0
        };
    }
    
    /**
     * Sharing Functionality
     * Creates a shareable image of the user's personality profile and book recommendations
     * Uses HTML5 Canvas API to generate a downloadable PNG image
     */
    function shareBooks() {
        // Create a canvas element
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        
        // Set canvas dimensions
        canvas.width = 800;
        canvas.height = 600;
        
        // Set background
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Add title
        ctx.fillStyle = '#333333';
        ctx.font = 'bold 24px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('Your Book Personality Profile', canvas.width/2, 40);
        
        // Add personality type
        const personalityTitle = document.getElementById('personality-title').textContent;
        ctx.font = '20px Arial';
        ctx.fillText(personalityTitle, canvas.width/2, 80);
        
        // Add trait percentages
        const traits = [
            { name: 'Introversión vs. Extroversión', id: 'ie' },
            { name: 'Intuición vs. Sensación', id: 'ns' },
            { name: 'Pensamiento vs. Sentimiento', id: 'tf' },
            { name: 'Percepción vs. Juicio', id: 'pj' }
        ];
        
        let yOffset = 140;
        traits.forEach(trait => {
            const percentage = document.getElementById(`${trait.id}-percentage`).textContent;
            ctx.font = '16px Arial';
            ctx.textAlign = 'left';
            ctx.fillText(`${trait.name}: ${percentage}`, 50, yOffset);
            yOffset += 40;
        });
        
        // Add book recommendations
        ctx.font = 'bold 20px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('Recommended Books', canvas.width/2, yOffset + 20);
        
        const bookElements = document.querySelectorAll('.book-card');
        yOffset += 60;
        
        bookElements.forEach((book, index) => {
            const title = book.querySelector('.book-title').book.title;
            const author = book.querySelector('.book-author').book.author;
            ctx.font = '16px Arial';
            ctx.textAlign = 'left';
            ctx.fillText(`${index + 1}. ${title} by ${author}`, 50, yOffset);
            yOffset += 30;
        });
        
        // Add footer
        ctx.font = '14px Arial';
        ctx.textAlign = 'center';
        ctx.fillStyle = '#666666';
        ctx.fillText('Test de personalidad de libro Test - La llar jove - La Pobla de Vallbona', canvas.width/2, canvas.height - 30);
        
        // Convert canvas to image and trigger download
        const link = document.createElement('a');
        link.download = 'my-book-personality.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
    }
    
    /**
     * Question Rendering
     * Displays the current question and its answer options to the user
     * Handles the dynamic creation of question cards and attaches event listeners
     */
    function renderQuestion() {
        const question = questions[currentQuestionIndex];
        
        questionContainer.innerHTML = `
            <div class="question-card">
                <h3 class="question-text">${question.text}</h3>
                <div class="answer-options">
                    ${question.options.map(option => `
                        <div class="answer-option ${userAnswers[currentQuestionIndex] === option.letter ? 'selected' : ''}" data-letter="${option.letter}" data-trait="${option.trait}">
                            <span class="option-text">${option.text}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
        
        // Add event listeners to answer options
        const answerOptions = document.querySelectorAll('.answer-option');
        answerOptions.forEach(option => {
            option.addEventListener('click', () => selectAnswer(option));
        });
        
        // Only show question counter after first question

        if (currentQuestionIndex > 0) {
            questionCounter.textContent = `${currentQuestionIndex}/${questions.length - 1}`;
            questionCounter.style.display = 'block';
        } else {
            questionCounter.style.display = 'none';
        }
    }
    
    /**
     * Answer Selection Handler
     * Processes the user's answer selection and determines the next step in the test flow
     * Handles different paths based on user choices (casual reader vs. personality test)
     * 
     * @param {HTMLElement} selectedOption - The option element that the user clicked
     */
    function selectAnswer(selectedOption) {
        // Remove selected class from all options
        const answerOptions = document.querySelectorAll('.answer-option');
        answerOptions.forEach(option => option.classList.remove('selected'));
        
        // Add selected class to clicked option
        selectedOption.classList.add('selected');
        
        // Save answer
        const letter = selectedOption.dataset.letter;
        // Remove unused trait declarations
        userAnswers[currentQuestionIndex] = letter;
        
        // Move to next question after a short delay
        setTimeout(() => {
            // Check if this is the first question (reading habits question)
            if (currentQuestionIndex === 0) {
                if (letter === 'A') {
                    // User selected option A (casual reader) - show casual reader test
                    showCasualReaderTest();
                    return;
                }
                // If user selected option B, continue with the regular personality test
                currentQuestionIndex++;
                renderQuestion();
                updateProgress();
            } else if (currentQuestionIndex < questions.length - 1) {
                currentQuestionIndex++;
                renderQuestion();
                updateProgress();
            } else {
                // If this is the last question, calculate and show results
                calculateResults();
                showResults();
            }
        }, 500);
    }
    
    /**
     * Progress Tracking
     * Updates the visual progress bar and displays contextual messages based on test progress
     * Provides feedback to the user about their position in the test
     */
    function updateProgress() {
        // Skip progress calculation for first question
        if (currentQuestionIndex === 0) {
            progressFill.style.width = '0%';
            progressMessage.textContent = "Determinando tipo de lector...";
            return;
        }

        // Calculate progress only for questions after the first one
        const remainingQuestions = questions.length - 1; // Exclude first question
        const currentProgress = currentQuestionIndex - 1; // Adjust for zero-based index
        const progress = ((currentProgress + 1) / remainingQuestions) * 100;
        
        progressFill.style.width = `${progress}%`;
        
        // Update progress message based on completion percentage
        if (progress < 25) {
            progressMessage.textContent = "Descubriendo tu personalidad lectora...";
        } else if (progress < 50) {
            progressMessage.textContent = "Analizando tus preferencias literarias...";
        } else if (progress < 75) {
            progressMessage.textContent = "Buscando libros que te encantarán...";
        } else {
            progressMessage.textContent = "¡Casi listo! Preparando tus recomendaciones...";
        }
    }
    
    /**
     * Results Calculation
     * Analyzes user answers to determine their personality type
     * Counts occurrences of each trait and calculates the dominant traits
     */
    function calculateResults() {
        // Reset personality preferences
        personalityPreferences = {
            'Introvert': 0, 'Extrovert': 0,
            'Intuitive': 0, 'Sensing': 0,
            'Thinking': 0, 'Feeling': 0,
            'Judging': 0, 'Perceiving': 0
        };
        
        // Count traits from user answers
        questions.forEach((question, index) => {
            const userAnswer = userAnswers[index];
            if (userAnswer) {
                const selectedOption = question.options.find(option => option.letter === userAnswer);
                if (selectedOption) {
                    const traitMap = {
                        'I': 'Introvert',
                        'E': 'Extrovert',
                        'N': 'Intuitive',
                        'S': 'Sensing',
                        'T': 'Thinking',
                        'F': 'Feeling',
                        'J': 'Judging',
                        'P': 'Perceiving'
                    };
                    personalityPreferences[traitMap[selectedOption.trait]]++;
                }
            }
        });
    }
    
    /**
     * Personality Type Calculation
     * Determines the user's MBTI personality type based on their answers
     * Compares the counts of opposing traits to find the dominant ones
     * 
     * @returns {string} Four-letter MBTI personality type code (e.g., "INTJ")
     */
    function calculatePersonalityType() {
        // Determine personality type based on preferences
        const personalityType = [
            personalityPreferences['Introvert'] >= personalityPreferences['Extrovert'] ? 'I' : 'E',
            personalityPreferences['Intuitive'] >= personalityPreferences['Sensing'] ? 'N' : 'S',
            personalityPreferences['Thinking'] >= personalityPreferences['Feeling'] ? 'T' : 'F',
            personalityPreferences['Judging'] >= personalityPreferences['Perceiving'] ? 'J' : 'P'
        ].join('');
        
        return personalityType;
    }
    
    /**
     * Results Display
     * Shows the personality test results screen with the user's personality type,
     * trait distributions, and book recommendations
     */
    function showResults() {
        questionsScreen.classList.remove('active');
        resultsScreen.classList.add('active');
        
        // Calculate personality type
        const personalityType = calculatePersonalityType();
        
        // Get personality data
        const personality = personalityTypes[personalityType];
        
        // Update UI with personality information
        personalityTitle.textContent = personality.title;
        personalityDescription.textContent = personality.description;
        personalityCode.textContent = personalityType;
        
        // Calculate and display trait percentages
        const introExtroTotal = personalityPreferences['Introvert'] + personalityPreferences['Extrovert'];
        const intuitSenseTotal = personalityPreferences['Intuitive'] + personalityPreferences['Sensing'];
        const thinkFeelTotal = personalityPreferences['Thinking'] + personalityPreferences['Feeling'];
        const judgePerceiveTotal = personalityPreferences['Judging'] + personalityPreferences['Perceiving'];
        
        const introExtroValue = Math.round((personalityPreferences[personalityType[0] === 'I' ? 'Introvert' : 'Extrovert'] / introExtroTotal) * 100);
        const intuitSenseValue = Math.round((personalityPreferences[personalityType[1] === 'N' ? 'Intuitive' : 'Sensing'] / intuitSenseTotal) * 100);
        const thinkFeelValue = Math.round((personalityPreferences[personalityType[2] === 'T' ? 'Thinking' : 'Feeling'] / thinkFeelTotal) * 100);
        const judgePerceiveValue = Math.round((personalityPreferences[personalityType[3] === 'J' ? 'Judging' : 'Perceiving'] / judgePerceiveTotal) * 100);
        
        iePercentage.textContent = `${introExtroValue}%`;
        nsPercentage.textContent = `${intuitSenseValue}%`;
        tfPercentage.textContent = `${thinkFeelValue}%`;
        pjPercentage.textContent = `${judgePerceiveValue}%`;
        
        // Update chart classes based on percentages
        ieChart.className = `chart-circle ${introExtroValue >= 70 ? 'high' : introExtroValue >= 50 ? 'medium' : 'low'}`;
        nsChart.className = `chart-circle ${intuitSenseValue >= 70 ? 'high' : intuitSenseValue >= 50 ? 'medium' : 'low'}`;
        tfChart.className = `chart-circle ${thinkFeelValue >= 70 ? 'high' : thinkFeelValue >= 50 ? 'medium' : 'low'}`;
        pjChart.className = `chart-circle ${judgePerceiveValue >= 70 ? 'high' : judgePerceiveValue >= 50 ? 'medium' : 'low'}`;
        
        // Display book recommendations
        renderBookRecommendations(personality.books);
    }
    
    /**
     * Book Recommendations Rendering
     * Creates and displays book recommendation cards based on personality type
     * 
     * @param {Array} books - Array of book objects with title and author properties
     */
    function renderBookRecommendations(books) {
        // Clear previous recommendations
        bookRecommendations.innerHTML = '';
        
        // Add minimal book entries
        books.forEach(book => {
            const bookEntry = document.createElement('div');
            bookEntry.className = 'book-entry';
            
            bookEntry.innerHTML = `<span class="book-title">${book.title}</span> <br> <span class="book-author"> ${book.author}</span>`;
            bookRecommendations.appendChild(bookEntry);
        });
    }
    
    /**
     * Casual Reader Test Implementation
     * A separate test flow for users who identify as casual readers
     * Uses different questions and categorization than the main personality test
     */
    
    /**
     * Initializes and displays the casual reader assessment
     * Called when a user identifies as a casual reader in the first question
     * Uses the functions exported from casual_reader_test.js
     */
    function showCasualReaderTest() {
        // Use the function from casual_reader_test.js
        if (window.casualReaderFunctions && window.casualReaderFunctions.showCasualReaderTest) {
            window.casualReaderFunctions.showCasualReaderTest();
        } else {
            console.error('Casual reader functions not available');
        }
    }
    
    // Initialize the app
    // The app starts with the intro screen visible and waits for user interaction
});