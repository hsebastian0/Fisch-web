const reactions = {
  sonrisa: { title: "Sonrisa", text: "El pez hace un sonido alegre y aparecen burbujas.", sound: "glub glub" },
  boca:    { title: "Boca abierta", text: "El pez suelta un sonido de sorpresa.", sound: "¡oh!" },
  cejas:   { title: "Cejas arriba", text: "Aparece un elemento nuevo sobre el pez.", sound: "¡pop!" }
};

const buttons = document.querySelectorAll(".expr button");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    buttons.forEach((b) => b.setAttribute("aria-pressed", "false"));
    btn.setAttribute("aria-pressed", "true");

    const r = reactions[btn.dataset.key];
    document.getElementById("r-title").textContent = r.title;
    document.getElementById("r-text").textContent = r.text;
    document.getElementById("r-sound").textContent = r.sound;
  });
});
