const abetka = "абвгдеєжзиіїйклмнопрстуфхцчшщьюя"
document.querySelector("h1").onmouseover = event => {
  let count = 0;
  const time = setInterval(() => {
    event.target.innerText = event.target.innerText.split("")
      .map((_, i) => {

      if (i >= Math.abs(count - event.target.dataset.value.length))
        return event.target.dataset.value[i]; 

      return abetka[Math.floor(Math.random() * 31)];
    })
    .join(""); 
    count += 0.25;
    if (count > event.target.dataset.value.length) clearInterval(time);
  }, 40);
}