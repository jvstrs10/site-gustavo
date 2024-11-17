// Função para adicionar imagens ao contêiner
function addImagesToContainer(imageContainerId, totalImages, folderPath) {
    const imageContainer = document.getElementById(imageContainerId);

    for (let i = 1; i <= totalImages; i++) {
        const img = document.createElement("img");
        img.src = `${folderPath}/${i}.jpg`;
        img.classList.add("image-style");
        imageContainer.appendChild(img);
    }
}

// Mostrar ou esconder resenha completa
function toggleReview(reviewId) {
    const reviewContent = document.getElementById(reviewId);
    reviewContent.style.display = reviewContent.style.display === 'none' ? 'block' : 'none';
}

// Adicionar comentários
function addComment() {
    const commentInput = document.getElementById('comment');
    const commentText = commentInput.value;

    if (commentText) {
        const commentList = document.getElementById('comments-list');
        const newComment = document.createElement('p');
        newComment.textContent = commentText;

        commentList.appendChild(newComment);
        commentInput.value = '';
    }
}

// Número total de imagens
const totalImages = 61;
const imageContainer = document.getElementById("imageContainer");

for (let i = 1; i <= totalImages; i++) {
    // Cria o elemento de imagem
    const img = document.createElement("img");

    // Define o caminho da imagem com base nos nomes dos arquivos numerados
    img.src = `img/1/${i}.jpg`;

    // Define uma classe para estilização (opcional)
    img.classList.add("image-style");

    // Adiciona a imagem ao contêiner
    imageContainer.appendChild(img);
}


// Número total de imagens
const totalImages2 = 64;
const imageContainer2 = document.getElementById("imageContainer2");

for (let i = 1; i <= totalImages2; i++) {
    // Cria o elemento de imagem
    const img = document.createElement("img");

    // Define o caminho da imagem com base nos nomes dos arquivos numerados
    img.src = `img/2/${i}.jpg`;

    // Define uma classe para estilização (opcional)
    img.classList.add("image-style");

    // Adiciona a imagem ao contêiner
    imageContainer2.appendChild(img);
}
