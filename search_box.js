function search_function(){
  var input, filter, breed_table, td, h3, i, text;
  input = document.querySelector(".searchInput");
  filter = input.value.toUpperCase();
  breed_table = document.querySelector(".breed_table");
  td = breed_table.getElementsByTagName("td");
  for( i=0; i<td.length; i++){
    h3 = td[i].getElementsByTagName("h3")[0];
    text = h3.textContent||h3.innerText;
    if(text.toUpperCase().indexOf(filter)>-1){
      td[i].style.display="";
    }else{
        td[i].style.display="none";
    }
  }
}
