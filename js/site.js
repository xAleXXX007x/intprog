var form = document.forms[0];

form.addEventListener("submit", function(event) {
  event.preventDefault();
  
  new FormData(form);
});

form.addEventListener("formdata", event => {
  const data = event.formData;
  var discord = data.get("discord");
  var password = data.get("password");
  var passwordRep = data.get("passwordRep");

  const entries = [...data.entries()];
  console.log(entries);

  var errorText;

  if (!discord.match(".+#[0-9]{4}$")) {
    errorText = "Вы указали неверный Discord"
  } else if (password != passwordRep) {
    errorText = "Введённые пароли не совпадают"
  } else if (password.length < 6) {
    errorText = "Пароль должен содержать 6 и более символов"
  }

  if (errorText) {
    Swal.fire({
      title: 'Ошибка!',
      text: errorText,
      icon: 'error',
      confirmButtonText: 'ОК'
    });

    return;
  }

  Swal.fire({
    title: 'Добро пожаловать!',
    text: "Регистрация прошла успешно",
    icon: 'success',
    confirmButtonText: 'ОК'
  }).then((result) => {
    window.location = "index.html";
  });
});
