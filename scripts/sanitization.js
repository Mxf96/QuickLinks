// Fonction pour échapper les entrées utilisateur
function escapeHtml(unsafe) {
    return unsafe
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

// Exemple d'utilisation
const userInput = '<script>alert("XSS")</script>';
const safeInput = escapeHtml(userInput);
console.log(safeInput); // Affiche &lt;script&gt;alert(&quot;XSS&quot;)&lt;/script&gt;
