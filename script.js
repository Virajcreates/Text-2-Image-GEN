const token="ADD YOUR API KEY HERE"
const inputText = document.getElementById("input")
const image = document.getElementById("image")
const button = document.getElementById("button")

async function query() {
    image.src = "/loading_cat.gif"
	const response = await fetch(
		"https://api-inference.huggingface.co/models/black-forest-labs/FLUX.1-dev",
		{
			headers: {
				Authorization: `Bearer ${token}`,
				"Content-Type": "application/json",
			},
			method: "POST",
			body: JSON.stringify({"inputs": inputText.value}),
		}
	);
	const result = await response.blob();
	return result;
}

button.addEventListener('click', async function() {

    query().then((response) => {
        const obejectURL = URL.createObjectURL(response)
        image.src = obejectURL
    });
    
})
