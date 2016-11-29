(() => {
    const uploadFile = (file, signedRequest, url) => {
        console.log("trying to upload", file, "with", signedRequest, "to", url)
        let xhr = new XMLHttpRequest()
        xhr.open('PUT', signedRequest)
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    document.getElementById('preview').src = url
                    document.getElementById('avatar-url').value = url
                } else {
                    alert('Could not upload file.')
                }
            }
        }
        xhr.send(file)
    }

    const getSignedRequest = (file) => {
        console.log("trying signed request of", file)
        let xhr = new XMLHttpRequest()
        xhr.open('GET', `/sign-s3?file-name=${file.name}&file-type=${file.type}`)
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    const response = JSON.parse(xhr.responseText)
                    uploadFile(file, response.signedRequest, response.url)
                } else {
                    alert('Could not get signed URL.')
                }
            }
        }
        xhr.send()
    }

    document.getElementById("file-input").onchange = () => {
        console.log("file-input changed, trying something!")
        const files = document.getElementById('file-input').files
        const file = files[0]
        if (file == null) {
            return alert('No file selected.')
        }
        getSignedRequest(file)
    }
})()
