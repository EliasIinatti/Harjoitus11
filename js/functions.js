function naytaVastaukset() { 
    const v1 = document.getElementById("q1").value; 
    const v2 = document.getElementById("q2").value; 
    const v3 = document.getElementById("q3").value; 
    const v4 = document.getElementById("q4").value; 
    const v5 = document.getElementById("q5").value; 

    const tulos = ` 
        <p>1. Helmikuuta 2010: ${v1}</p> 
        <p>Logo on sininen: ${v2}</p> 
        <p>Ei: ${v3}</p> 
        <p>Kyllä, Azure Mobile App: ${v4}</p> 
        <p>Ei, mutta on olemassa kokeiluversioita: ${v5}</p> 
    `; 

    document.getElementById("vastaukset").innerHTML = tulos; 
}
