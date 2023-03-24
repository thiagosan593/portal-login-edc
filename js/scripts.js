const currentStudent = document.querySelector("#container-current-student")
const formerStudent = document.querySelector("#container-former-student")
const exAluno = document.querySelector("#exAluno")
const voltarbtn = document.querySelector("#voltar")


const toggleForms = () => {
    currentStudent.classList.toggle("hide");
    formerStudent.classList.toggle("hide");
};


exAluno.addEventListener("click", () => {
   toggleForms()
})

voltarbtn.addEventListener("click", () => {
   toggleForms()
})