let creatBtn = document.querySelector(".creat");
let clipBoard = document.querySelector(".copy");
let text = document.querySelector(".text");

document.addEventListener("DOMContentLoaded", () => {
    async function updateQuote() {
        // Fetch a random quote from the Quotable API
        const response = await fetch("https://api.quotable.io/random");
        const data = await response.json();
        if (response.ok) {
            // Update DOM elements
            text.innerHTML = `
                    <p class="quote">
                        ${data.content}
                    </p>
                    <span class="author">${data.author}</span>
                `;
        } else {
            text.innerHTML = `<p class="quote">An error occured</p>`;
            console.log(data);
        }
        clipBoard.addEventListener("click", function () {
            navigator.clipboard.writeText(
                `${data.content} Quote by ${data.author}`
            );
            Swal.fire({
                title: "Good job!",
                text: "Quote has been copied to clipboard successfully!",
                icon: "success",
            });
        });
    }
    creatBtn.addEventListener("click", updateQuote);
    updateQuote();
});
