document.addEventListener("DOMContentLoaded", function () {
    // Welcome Screen Animation
    setTimeout(() => {
        document.getElementById("welcome-screen").style.display = "none";
        document.querySelector(".container").style.display = "block";
    }, 2500);

    // Theme Toggle
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;

    function updateTheme() {
        if (localStorage.getItem("theme") === "dark") {
            body.classList.add("dark-mode");
            themeToggle.textContent = "☀️ Light Mode";
        } else {
            body.classList.remove("dark-mode");
            themeToggle.textContent = "🌙 Dark Mode";
        }
    }

    updateTheme();

    themeToggle.addEventListener("click", () => {
        const newTheme = body.classList.toggle("dark-mode") ? "dark" : "light";
        localStorage.setItem("theme", newTheme);
        updateTheme();
    });

    // Connect Wallet (MetaMask)
    const connectWalletBtn = document.getElementById("connectWallet");
    const walletAddressDisplay = document.getElementById("walletAddress");

    async function connectWallet() {
        if (!window.ethereum) {
            alert("MetaMask not detected! Please install MetaMask.");
            return;
        }

        try {
            const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
            walletAddressDisplay.textContent = accounts[0];
            walletAddressDisplay.style.color = "#27ae60";
        } catch (error) {
            console.error("Wallet connection failed", error);
            walletAddressDisplay.textContent = "Connection Failed";
            walletAddressDisplay.style.color = "red";
        }
    }

    connectWalletBtn.addEventListener("click", connectWallet);
});