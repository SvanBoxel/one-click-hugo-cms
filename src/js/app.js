// JS Goes here - ES6 supported
if (window.netlifyIdentity) {
<<<<<<< HEAD
  window.netlifyIdentity.on("init", (user) => {
=======
  window.netlifyIdentity.on("init", user => {
>>>>>>> f53574889f6352b6a60c79eccab163f751add0b3
    if (!user) {
      window.netlifyIdentity.on("login", () => {
        document.location.href = "/admin/";
      });
    }
  });
}
