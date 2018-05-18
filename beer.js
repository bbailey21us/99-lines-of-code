var friends =["bill", "ted", "joe","josh", "nick"]




for (i=0;i<friends.length;i++){
    for(r=99;r>0;r--){
       var next =r-1;
       if(r===99){
           console.log(friends[i]+":");
       }
       else if(next===0){
           next="no more"
       } 
       console.log(r+" "+"lines of code in the file, "+r+" "+"lines of code;"+" "+friends[i]+" strikes one out, clears it all out "+next+" lines of code in the file" )
       
    }
}