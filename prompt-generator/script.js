// script.js
function generatePrompt() {
    // Get answers from the form
    var answers = [];
    for (var i = 1; i <= 6; i++) {
        var answer = document.getElementById('question' + i).value;
        answers.push(answer.trim());
    }

    // Array of prompt templates
    var templates = [
        `Imagine a ${answers[0]} garden with a stunning variety of ${answers[1]}. The color theme of ${answers[2]} enhances its beauty.`,
        `Envision a garden shaped ${answers[0]}, filled with ${answers[1]}, and colored in shades of ${answers[2]}.`,
        `Picture a ${answers[0]} space where ${answers[1]} thrive amidst ${answers[2]} hues.`,
        `Visualize a garden, ${answers[0]} in size, boasting ${answers[1]} in a ${answers[2]} color scheme.`,
        `See a garden, ${answers[0]} and rich with ${answers[1]}, illuminated in ${answers[2]} tones.`,
        `A ${answers[0]} garden, home to ${answers[1]}, and bathed in ${answers[2]} colors.`,
        `In a ${answers[0]} layout, ${answers[1]} flourish, complemented by ${answers[2]} accents.`,
        `A ${answers[0]} garden space, where ${answers[1]} meet a palette of ${answers[2]}.`,
        `Imagine a ${answers[0]} area, where ${answers[1]} are set against a backdrop of ${answers[2]} shades.`,
        `Visualize a ${answers[0]} garden, where ${answers[1]} and ${answers[2]} colors create harmony.`
    ];

    // Select a random template and display the generated prompt
    var selectedTemplate = templates[Math.floor(Math.random() * templates.length)];
    document.getElementById('output').innerText = 'Generated Prompt: ' + selectedTemplate;
}
s