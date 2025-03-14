
function uploadFile() {
    const fileInput = document.getElementById('fileUpload');
    const fileList = fileInput.files;
    const uploadStatus = document.getElementById('uploadStatus');
    const postList = document.getElementById('postList');

    if (fileList.length === 0) {
        uploadStatus.textContent = "Pilih file terlebih dahulu!";
        return;
    }

    for (const file of fileList) {
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.href = "#";
        link.textContent = file.name;
        link.classList.add("text-blue-600", "hover:underline");

        listItem.appendChild(link);
        postList.appendChild(listItem);
    }

    uploadStatus.textContent = "File berhasil diunggah!";
    fileInput.value = ""; // Reset input file
}
