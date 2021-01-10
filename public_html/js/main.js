(function(){ //Para crear Funcion Anonima
   const colors = [
       { value: 'red', title: 'Rojo'},
       { value: 'green', title: 'Verde'},
       { value: 'yellow', title: 'Amarillo'}
   ];

   let htmlselect = '';
   
   //Esto es para tomar la referencia del elemento html por el ID
   const select = document.getElementById('color'); 
   
    for (let i = 0; i< colors.length; i++) {
        //console.log(`elemento ${i}:`, colors[i]);
        htmlselect += `<option value="${colors[i].value}">${colors[i].title}</option>`;
          
        /*const option = document.createElement('option'); 
        option.value = colors[i].value;
        option.text = colors[i].title;
        select.appendChild(option); */

    }

    select.innerHTML = htmlselect;
})(); 

