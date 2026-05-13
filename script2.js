document.addEventListener('DOMContentLoaded', function() {
    const quizForm = document.getElementById('quizForm');
    const resultadosDiv = document.getElementById('resultados');
    

    const correctAnswers = {
        pregunta1: "Laufey",
        pregunta2: "Hacha Leviatán", 
        pregunta3: "Loki",
        pregunta4: "Ares",
        pregunta5: "Cristal de Jötunheim",
        pregunta6: "Baldur",
        pregunta7: "Jötunheim",
        pregunta8: "Conocimiento infinito",
        pregunta9: "Tyr",
        pregunta10: "El muérdago",
        pregunta11: "La máscara de Loki",
        pregunta12: "Su servicio a Ares"
    };
    
   
    const questionsText = {
        pregunta1: "1. ¿Cuál es el nombre real de la madre de Atreus?",
        pregunta2: "2. ¿Qué arma crearon los hermanos enanos para Faye?",
        pregunta3: "3. ¿Qué identidad oculta tiene Atreus según las profecías?",
        pregunta4: "4. ¿Quién era el dios griego que engañó a Kratos para matar a su familia?",
        pregunta5: "5. ¿Qué objeto utilizó Kratos para abrir caminos entre reinos?",
        pregunta6: "6. ¿Qué personaje está atrapado en un ciclo de resurrección sin poder morir?",
        pregunta7: "7. ¿Cuál es el nombre del reino de los gigantes?",
        pregunta8: "8. ¿Qué habilidad especial tiene Mimir?",
        pregunta9: "9. ¿Qué personaje ayuda a Kratos y Atreus a llegar a Jötunheim?",
        pregunta10: "10. ¿Cuál es la debilidad de Baldur?",
        pregunta11: "11. ¿Qué artefacto busca desesperadamente Odín?",
        pregunta12: "12. ¿Qué representa el tatuaje rojo en el cuerpo de Kratos?"
    };
    
    quizForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        let score = 0;
        const userAnswers = {};
        let allAnswered = true;
        
        console.log("Iniciando evaluación..."); 
        

        for (let i = 1; i <= 12; i++) {
            const questionName = `pregunta${i}`;
            const selectedOption = document.querySelector(`input[name="${questionName}"]:checked`);
            
            if (!selectedOption) {
                allAnswered = false;
                console.log(`Pregunta ${i} no respondida`); 
                break;
            }
            
            userAnswers[questionName] = selectedOption.value;
            console.log(`Pregunta ${i}: ${selectedOption.value}`); 
            
            if (selectedOption.value === correctAnswers[questionName]) {
                score++;
                console.log(`Pregunta ${i} CORRECTA`); 
            } else {
                console.log(`Pregunta ${i} INCORRECTA. Esperado: ${correctAnswers[questionName]}`); 
            }
        }
        
        if (!allAnswered) {
            resultadosDiv.innerHTML = '<p style="color: red; text-align: center;">Por favor, responde todas las preguntas antes de enviar.</p>';
            return;
        }
        
        console.log(`Puntuación final: ${score}/12`);

        showResults(score, userAnswers);
    });
    
    function showResults(score, userAnswers) {

        const percentage = (score / 12) * 100;
        
        let resultHTML = `<h3>Resultados del Quiz</h3>`;
        resultHTML += `<div class="puntuacion">Puntuación: ${score}/12 (${percentage.toFixed(1)}%)</div>`;
        

        if (percentage >= 90) {
            resultHTML += `<p class="correcta">¡Excelente! Eres un verdadero experto en God of War.</p>`;
        } else if (percentage >= 70) {
            resultHTML += `<p style="color: orange;">Buen trabajo, conoces bien la saga.</p>`;
        } else if (percentage >= 50) {
            resultHTML += `<p style="color: #d4af37;">No está mal, pero podrías repasar la historia.</p>`;
        } else {
            resultHTML += `<p class="incorrecta">Necesitas jugar más God of War.</p>`;
        }
        

        resultHTML += `<div class="detalle-respuesta">`;
        resultHTML += `<h4>Detalle de respuestas:</h4>`;
        
        for (let i = 1; i <= 12; i++) {
            const questionName = `pregunta${i}`;
            const userAnswer = userAnswers[questionName];
            const correctAnswer = correctAnswers[questionName];
            const isCorrect = userAnswer === correctAnswer;
            
            resultHTML += `<div class="respuesta-item ${isCorrect ? 'respuesta-correcta' : 'respuesta-incorrecta'}">`;
            resultHTML += `<strong>${questionsText[questionName]}</strong><br>`;
            resultHTML += `Tu respuesta: <span class="${isCorrect ? 'correcta' : 'incorrecta'}">${userAnswer}</span><br>`;
            
            if (!isCorrect) {
                resultHTML += `Respuesta correcta: <span class="correcta">${correctAnswer}</span>`;
            }
            
            resultHTML += `</div>`;
        }
        
        resultHTML += `</div>`;
        
        resultadosDiv.innerHTML = resultHTML;
        

        resultadosDiv.scrollIntoView({ behavior: 'smooth' });
    }
});
