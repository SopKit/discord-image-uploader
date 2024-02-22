document.addEventListener('DOMContentLoaded', function () {
    const fileInput = document.getElementById('fileInput');
    const uploadButton = document.getElementById('uploadButton');
    const responseDiv = document.getElementById('response');
    const uploadedImage = document.getElementById('uploadedImage');

    uploadButton.addEventListener('click', async function () {
        const file = fileInput.files[0];
        if (!file) {
            responseDiv.textContent = 'Please select a file.';
            return;
        }

        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await fetch('https://discord.com/api/webhooks/1209461004518432778/zMKaNOteB0b0M3Aq7WykfAk2KkODHFISU9Uh6GG7pvBJF1PGsYfSfpuB4TJgegtlnmnt', {
                method: 'POST',
                body: formData
            });
            const responseData = await response.json();
          console.log(responseData)
            responseDiv.innerHTML = `File uploaded successfully. URL: <i>${responseData.attachments[0].url}</i>`;
            uploadedImage.src = responseData.attachments[0].url;
        } catch (error) {
            console.error('Error uploading image:', error);
            responseDiv.textContent = 'Error uploading image.';
        }
    });
});
