document.addEventListener("DOMContentLoaded", function () {
  const ctaButton = document.querySelector(".cta-hero");
  const navLinks = document.querySelectorAll(".nav-link");

  function smoothScrollTo(targetId) {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }

  if (ctaButton) {
    ctaButton.addEventListener("click", function (e) {
      e.preventDefault();
      smoothScrollTo("planos");
    });
  }

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      if (href && href.startsWith("#") && href.length > 1) {
        e.preventDefault();
        const targetId = href.substring(1);
        smoothScrollTo(targetId);
      }
    });
  });

  const contactForm = document.getElementById("contactForm");
  const nomeInput = document.getElementById("nome");
  const emailInput = document.getElementById("email");
  const mensagemInput = document.getElementById("mensagem");
  const btnEnviar = document.getElementById("btnEnviar");

  function validateForm() {
    const nomeValido = nomeInput.value !== "";
    const emailValido =
      emailInput.value.includes("@") && emailInput.value.includes(".");
    const mensagemValida = mensagemInput.value !== "";

    if (nomeValido && emailValido && mensagemValida) {
      btnEnviar.disabled = false;
    } else {
      btnEnviar.disabled = true;
    }
  }

  if (contactForm) {
    [nomeInput, emailInput, mensagemInput].forEach((input) => {
      if (input) input.addEventListener("input", validateForm);
    });

    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!btnEnviar.disabled) {
        alert("Mensagem enviada com sucesso!");
        contactForm.reset();
        validateForm();
      }
    });
  }

  const btnVoltarTopo = document.getElementById("btnVoltarTopo");

  if (btnVoltarTopo) {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 300) {
        btnVoltarTopo.style.display = "block";
      } else {
        btnVoltarTopo.style.display = "none";
      }
    });

    btnVoltarTopo.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }
});
