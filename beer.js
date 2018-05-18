var friends =["bill", "ted", "joe","josh", "nick"]




for (i=0;i<friends.length;i++){
    for(r=99;r>0;r--){
       var number = r;
       var next =r-1;
       if(next===0){
           next="no more"
       } 
       console.log(number+" "+"lines of code in the file, "+number+" "+"lines of code;"+" "+friends[i]+" strikes one out, clears it all out "+next+" lines of code in the file" )
       
    }
}