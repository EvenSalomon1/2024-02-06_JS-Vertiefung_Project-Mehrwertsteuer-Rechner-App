function change() {
  const betrag = document.querySelector("label[for='betrag']");
  const ergebnisBetrag = document.querySelector(".h4change");
  const wählenNettoBrutto = document.querySelector(
    "input[name='radio']:checked"
  ).value;

  if (wählenNettoBrutto === "aufschlagen") {
    betrag.innerHTML = "Nettobetrag (Preis ohne Mehrwertsteuer) in Euro";
    ergebnisBetrag.innerHTML = "Bruttobetrag (Endpreis)";
  } else {
    betrag.innerHTML = "Bruttobetrag (Preis inklusive Mehrwertsteuer) in Euro";
    ergebnisBetrag.innerHTML = "Nettobetrag";
  }
}

function main(event) {
  event.preventDefault();

  const wählenNettoBrutto = document.querySelector(
    "input[name='radio']:checked"
  ).value;
  const wählenProzent = document.querySelector(
    "input[name='check']:checked"
  ).value;
  const inputBetrag = Number(
    document.querySelector("input[type='number']").value
  );
  const outputMehrwertsteuerbetrag = document.querySelector(".output-one");
  const outputNettoBrutto = document.querySelector(".output-two");

  if (wählenNettoBrutto === "aufschlagen") {
    if (wählenProzent === "19") {
      const resultMehrwertsteuer = inputBetrag * 0.19;
      const resultEndpreis = inputBetrag + resultMehrwertsteuer;
      outputMehrwertsteuerbetrag.innerHTML = resultMehrwertsteuer.toFixed(2);
      outputNettoBrutto.innerHTML = resultEndpreis.toFixed(2);
    } else {
      const resultMehrwertsteuer = inputBetrag * 0.07;
      const resultEndpreis = inputBetrag + resultMehrwertsteuer;
      outputMehrwertsteuerbetrag.innerHTML = resultMehrwertsteuer.toFixed(2);
      outputNettoBrutto.innerHTML = resultEndpreis.toFixed(2);
    }
  } else {
    if (wählenProzent === "19") {
      const resultEndpreis = inputBetrag / 1.19;
      const resultMehrwertsteuer = inputBetrag - resultEndpreis;
      outputMehrwertsteuerbetrag.innerHTML = resultMehrwertsteuer.toFixed(2);
      outputNettoBrutto.innerHTML = resultEndpreis.toFixed(2);
    } else {
      const resultEndpreis = inputBetrag / 1.07;
      const resultMehrwertsteuer = inputBetrag - resultEndpreis;
      outputMehrwertsteuerbetrag.innerHTML = resultMehrwertsteuer.toFixed(2);
      outputNettoBrutto.innerHTML = resultEndpreis.toFixed(2);
    }
  }
}
