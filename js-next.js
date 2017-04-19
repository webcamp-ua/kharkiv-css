color.addEventListener("change", (e)=>{
  let v = e.target.value;
  document.documentElement.style.setProperty("--color", v);
});
fontSize.addEventListener("change", (e)=>{
  let v = e.target.value;
  document.documentElement.style.setProperty("--font", v+"px");
});
