function buscador(texto, palabra){
    
    let x = 0, y=0;
   
    for (i=0;i< texto.length;i++)
        {
        if(texto[i] == palabra[0])
            {
            for(j=i;j< i+palabra.length;j++)
               {
                if(texto[j]==palabra[j-i])
                  {
                    y++;
                  }
                if (y==palabra.length){
                    x++;
                }
            }
            y=0;
        }
    }
   return "'"+palabra+"' encontrada "+x+" veces.";
}

console.log(buscador('hola, que buena ola Laomir', 'o' + 'l' + 'a'));
console.log(buscador('hola, que buena ola Laomir', 'a' + 'o'));

