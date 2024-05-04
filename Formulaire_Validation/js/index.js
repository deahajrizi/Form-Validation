// On va chercher tous les éléments dont on a besoin dans le html
let form = document.querySelector('form')
let name = document.querySelector('#name')
let surname = document.querySelector('#surname')
let address = document.querySelector('#address')
let npa = document.querySelector('#npa')
let city = document.querySelector('#city')
let tel = document.querySelector('#tel')
let email = document.querySelector('#email')
let msg = document.querySelector('#msg')
let submitButton = document.querySelector('#submitButton')
let modalContainer = document.querySelector('#modalContainer')
let modalClose = document.querySelector('#modalCloseButton')

// Je crée un tableau avec mes inputs qui me servira pour la validation
let inputs = [
    name, surname, address, npa, city, tel, email, msg
]


// On va chercher les divs qui seront utilisés pour afficher les messages d'erreurs etc
let messageName = document.querySelector('#messageName')
let messageSurname = document.querySelector('#messageSurname')
let messageAddress = document.querySelector('#messageAddress')
let messageNPA = document.querySelector('#messageNPA')
let messageCity = document.querySelector('#messageCity')
let messageTel = document.querySelector('#messageTel')
let messageEmail = document.querySelector('#messageEmail')
let messageMsg = document.querySelector('#messageMsg')

//On crée les RegEx
let regExName = /^[A-Za-zÀ-ÿ]+-?\s*[A-Za-zÀ-ÿ]+$/
let regExAddress = /[A-Za-zÀ-ÿ0-9,\-\s]{2,100}/
let regExNPA = /[0-9]{4}/
let regExTel = /(\+|00)?\s?(41)?\s?(0?[0-9][0-9])\s?.?([0-9]{2})?([0-9]{3})\s?.?([0-9]{2})\s?.?([0-9]{2})/
let regExEmail = /^([a-z0-9][a-z0-9._-]*)@([a-z0-9][a-z0-9._-]*)\.[a-z]{2,}$/

// Création du message d'erreur et ce qu'il contient
let submitErrorMessage = document.createElement('div')
submitErrorMessage.textContent = "Veuillez remplir le formulaire correctement."
submitErrorMessage.id = 'submitErrorMessage'


// Fonction 'style' pour pouvoir changer la couleur de la bordure des inputs selon le message d'erreur
function style(input, color){
    input.style.cssText = `border: 2px solid ${color};`
}
// Lorsque l'on sort de l'input, vérifier si ce qui a été entré correspond au RegEx pour le 'name', si oui, changer la bordure
// en vert et ne rien afficher, si rien n'a été entré, changer la bordure en orange et afficher un message d'erreur,
// si non, bordure en rouge + message d'erreur
name.addEventListener('blur', function(){
    if(regExName.test(name.value)){
        style(name, 'green')
        messageName.textContent = ''
    } else if(name.value === ''){
        style(name, 'orange')
        messageName.textContent = 'Le nom est vide'
    } else {
        style(name, 'red')
        messageName.textContent = 'Le nom est invalide'
    }
})

// Même fonction pour chaque input
surname.addEventListener('blur', function(){
    if(regExName.test(surname.value)){
        style(surname, 'green')
        messageSurname.textContent = ''
    } else if(surname.value === ''){
        style(surname, 'orange')
        messageSurname.textContent = 'Le prénom est vide'
    } else {
        style(surname, 'red')
        messageSurname.textContent = 'Le prénom est invalide'
    }
})

address.addEventListener('blur', function(){
    if(regExAddress.test(address.value)){
        style(address, 'green')
        messageAddress.textContent = ""
    } else if(address.value === ''){
        style(address, 'orange')
        messageAddress.textContent = "L'adresse est vide"
    } else {
        style(address, 'red')
        messageAddress.textContent = "L'adresse est invalide"
    }
})


npa.addEventListener('blur', function(){
    if(regExNPA.test(npa.value)){
        style(npa, 'green')
        messageNPA.textContent = ""

    } else if(npa.value === ''){
        style(npa, 'orange')
        messageNPA.textContent = "Le code postal est vide"
    } else {
        style(npa, 'red')
        messageNPA.textContent = "Le code postal est invalide"
    }
})

city.addEventListener('blur', function(){
    if(regExName.test(city.value)){
        style(city, 'green')
        messageCity.textContent = ""

    } else if(city.value === ''){
        style(city, 'orange')
        messageCity.textContent = "La ville est vide"
    } else {
        style(city, 'red')
        messageCity.textContent = "La ville est invalide"
    }
})

tel.addEventListener('blur', function(){
    if(regExTel.test(tel.value)){
        style(tel, 'green')
        messageTel.textContent = ""

    } else if(tel.value === ''){
        style(tel, 'orange')
        messageTel.textContent = "Le numéro est vide"
    } else {
        style(tel, 'red')
        messageTel.textContent = "Le numéro est invalide"
    }
})

email.addEventListener('blur', function(){
    if(regExEmail.test(email.value)){
        style(email, 'green')
        messageEmail.textContent = ""

    } else if(email.value === ''){
        style(email, 'orange')
        messageEmail.textContent = "L'email est vide"
    } else {
        style(email, 'red')
        messageEmail.textContent = "L'email est invalide"
    }
})

msg.addEventListener('blur', function(){
    if(msg.value !== ''){
        style(msg, 'green')
        messageMsg.textContent = ""
    } else{
        style(msg, 'orange')
        messageMsg.textContent = "L'email est vide"
}})

// --------------------------- FONCTION VALIDATE ---------------------------
//Créer une fonction pour remettre la couleur de bordure de base afin de reset le formulaire
function defaultBorder (){
    for(let i = 0; i < inputs.length; i++){ // Boucler sur le tableau des inputs pour qu'il l'applique à chacun
        inputs[i].style.cssText = 'border-color: 1px solid steelblue;'
    }
}
// Lancement de fonction 'validate' lors du clic sur 'submit'
submitButton.addEventListener('click', function validate(e){
    e.preventDefault() // Annuler l'évènement par défaut -> rechargement de page lors du clic sur 'submit'
    // Si l'un des champs n'a pas de bordure verte (donc n'est pas valide), ne pas soumettre le formulaire
   if(name.style.borderColor !== 'green'  || surname.style.borderColor !== 'green'  || address.style.borderColor !== 'green' || npa.style.borderColor !== 'green' || city.style.borderColor !== 'green' || tel.style.borderColor !== 'green' || email.style.borderColor !== 'green' || msg.style.borderColor !== 'green'){
       form.appendChild(submitErrorMessage) // Insérer le message d'erreur dans le HTML
   } else {
       defaultBorder() // J'appelle ma fonction pour reset les bordures
       form.id = 'blur' // J'ajoute un effet blur
       modalContainer.className = 'showModal' // J'affiche le pop-up pour montrer que le message a été envoyé
       form.removeChild(submitErrorMessage) // J'enlève le message d'erreur s'il est présent
   }
})

modalClose.addEventListener('click', function closeModal(){ // Click sur le bouton 'fermer' du pop-up
    form.reset() // Je vide les inputs
    modalContainer.className = '' // Je lui enlève sa classe (qui l'affiche), donc il disparaît
    form.id = '' // J'enlève le blur
})

