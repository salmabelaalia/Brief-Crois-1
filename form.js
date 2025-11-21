"use strict";

//  les éléments 
const addWorkerForm = document.querySelector("#addWorkerForm");
const workerNameInput = document.querySelector("#workerName");
const workerEmailInput = document.querySelector("#workerEmail");
const workerPhoneInput = document.querySelector("#workerPhone");
const workerRoleInput = document.querySelector("#workerRole");

// erreur
const nameError = document.createElement("div");
const emailError = document.createElement("div");
const phoneError = document.createElement("div");
const roleError = document.createElement("div");

// Regex 
const nameRegex = /^[a-zA-ZÀ-ÿ\s\-']{2,50}$/; // lettres, espaces, tirets, accents
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // format email
const phoneRegex = /^(?:(?:\+|00)33|0)[1-9](?:[\s.-]?\d{2}){4}$/; // téléphone FR
const roleRegex = /.+/; // au moins un caractère (non vide)

// design d'erreur
function setupErrorElements() {
    // Style des messages d'erreur
    const errorStyle = {
        color: "red",
        fontSize: "12px",
        marginTop: "5px",
        fontWeight: "bold"
    };
    
    // Configuration les erreurs
    [nameError, emailError, phoneError, roleError].forEach(errorElement => {
        Object.assign(errorElement.style, errorStyle);
    });
    
    // Ajout après chaque champ
    workerNameInput.parentNode.appendChild(nameError);
    workerEmailInput.parentNode.appendChild(emailError);
    workerPhoneInput.parentNode.appendChild(phoneError);
    workerRoleInput.parentNode.appendChild(roleError);
}

// fct de validation
function validateInput(input, regex, errorElement, errorMessage) {
    if (!regex.test(input.value.trim())) {
        // invalide
        input.classList.add("invalid");
        errorElement.textContent = errorMessage;
        return false;
    } else {
        // valide
        input.classList.remove("invalid");
        errorElement.textContent = "";
        return true;
    }
}

// ======= Validation en temps réel (oninput) =======
workerNameInput.addEventListener("input", () =>
    validateInput(
        workerNameInput, 
        nameRegex, 
        nameError, 
        "Nom invalide (lettres et espaces seulement)"
    )
);

workerEmailInput.addEventListener("input", () =>
    validateInput(
        workerEmailInput, 
        emailRegex, 
        emailError, 
        "Email invalide (ex: salma@gmail.com)"
    )
);

workerPhoneInput.addEventListener("input", () =>
    validateInput(
        workerPhoneInput, 
        phoneRegex, 
        phoneError, 
        "Téléphone invalide (ex: 06 05 63 04 77)"
    )
);

workerRoleInput.addEventListener("change", () =>
    validateInput(
        workerRoleInput, 
        roleRegex, 
        roleError, 
        "Veuillez sélectionner un rôle"
    )
);

//  CSS pour invalide
const style = document.createElement('style');
style.textContent = `
    .invalid {
        border-color: red !important;
        background-color: #ffe6e6 !important;
    }
`;
document.head.appendChild(style);

// Modification de handleAddWorker
function handleAddWorker(e) {
    e.preventDefault();

    // Validation finale au submit
    const isNameValid = validateInput(
        workerNameInput, 
        nameRegex, 
        nameError, 
        "Nom invalide (lettres et espaces seulement)"
    );
    
    const isEmailValid = validateInput(
        workerEmailInput, 
        emailRegex, 
        emailError, 
        "Email invalide (ex: salma@gmail.com)"
    );
    
    const isPhoneValid = validateInput(
        workerPhoneInput, 
        phoneRegex, 
        phoneError, 
        "Téléphone invalide (ex: 06 05 63 04 77)"
    );
    
    const isRoleValid = validateInput(
        workerRoleInput, 
        roleRegex, 
        roleError, 
        "Veuillez sélectionner un rôle"
    );

    // Si tout est valide
    if (isNameValid && isEmailValid && isPhoneValid && isRoleValid) {
        // Récupération des valeurs
        const name = workerNameInput.value.trim();
        const role = workerRoleInput.value;
        const photo = document.getElementById("workerPhoto").value.trim();
        const email = workerEmailInput.value.trim();
        const phone = workerPhoneInput.value.trim();

        // Récupération des expériences
        const experiences = [];
        document.querySelectorAll(".experience-item").forEach((item) => {
            const inputs = item.querySelectorAll("input");
            if (inputs[0].value && inputs[1].value) {
                experiences.push({
                    position: inputs[0].value.trim(),
                    period: inputs[1].value.trim(),
                });
            }
        });

        // Création de l'employé
        const worker = {
            id: nextWorkerId++,
            name: name,
            role: role,
            photo: photo || "",
            email: email,
            phone: phone,
            experiences: experiences,
            zone: null,
        };
        workers.push(worker);
        saveToStorage();
        renderAll();
        updateRequiredZones();
        closeAddModal();
                console.log("🟢 TOUS LES CHAMPS VALIDES - Début de l'ajout"); 

        alert("✅ Employé ajouté avec succès !");
    } else {
        alert("❌ Veuillez corriger les erreurs avant de soumettre");
    }
}

// Initialisation
document.addEventListener("DOMContentLoaded", () => {
    loadFromStorage();
    renderAll();
    updateRequiredZones();
    setupErrorElements(); 
});
