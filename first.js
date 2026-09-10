function timing(){
const time= document.getElementById("root");
const now= new Date();
const indiantime=now.toLocaleTimeString();
time.innerHTML=indiantime;
};

setInterval(timing,1000);

const time= document.getElementById("root");
time.style.fontSize="200px";
time.style.display="flex";
time.style.justifyContent="center";
time.style.alignItems="center";
time.style.height="100vh";



