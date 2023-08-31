let month = prompt(" en quel mois sommme-nous");
month = month.toUpperCase;
if (
  month === "SEPTEMBRE" ||
  month === "OCTOBRE" ||
  month === "NOVEMBRE" ||
  month === "9" ||
  month === "10" ||
  month === "11"
) {
  console.log("on au automne");
} else if (
  month === "DECEMBRE" ||
  month === "JANVIER" ||
  month === "FEVRIER" ||
  month === "12" ||
  month === "1" ||
  month === "2"
) {
  console.log("on est en hiver");
} else if (
  month === "MARS" ||
  month === "AVRIL" ||
  month === "MAI" ||
  month === "3" ||
  month === "4" ||
  month === "5"
) {
  console.log("on est en printemps");
} else if (
  month === "JUIN" ||
  month === "JUILLET" ||
  month === "AOUT" ||
  month === "6" ||
  month === "7" ||
  month === "8"
) {
  console.log("on est en ete");
} else {
  console.log("veuillez entrer le mois a nouveau");
}
