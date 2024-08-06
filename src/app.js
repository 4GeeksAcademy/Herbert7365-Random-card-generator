/* eslint-disable */
import "bootstrap";
import "./style.css";

// Funcion para obtener un valor aleatorio de carta (0 to 12)
let generateRandomNumber = () => {
  let numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let randomIndex = Math.floor(Math.random() * numbers.length);
  return numbers[randomIndex];
};

// Funcion para obtener un palo al azar (de 1 a 4)
let generateRandomSuit = () => {
  let suits = ["diamond", "spade", "heart", "club"];
  let randomIndex = Math.floor(Math.random() * suits.length);
  return suits[randomIndex];
};

// Función para generar una carta virtual
function generateCard() {
  const cardNumber = document.getElementById("card-number");
  const cardSuitTop = document.getElementById("card-suit-top");
  const cardSuitBottom = document.getElementById("card-suit-bottom");

  cardNumber.textContent = generateRandomNumber();
  const randomSuit = generateRandomSuit();
  cardSuitTop.classList.add(`${randomSuit}`);
  cardSuitBottom.classList.add(`${randomSuit}`);
}

// Llama a la función al cargar la página
window.onload = generateCard;
