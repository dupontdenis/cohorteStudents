import { students } from "./studentsData.mjs";
import { transformStudentsToCards } from "./transformStudentsToCards.mjs";
import { renderElementsToDom } from "./renderToDom.mjs";

const { cohortesToHtml, studentsToHtml } = transformStudentsToCards(students);
console.log(cohortesToHtml, studentsToHtml);

const sectionUI = document.querySelector(".amphi");
renderElementsToDom(cohortesToHtml, sectionUI);
renderElementsToDom(studentsToHtml, sectionUI);
