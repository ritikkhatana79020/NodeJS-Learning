const fs = require('fs');

//Reading files
fs.readFile('./docs/blog1.txt', (err,data)=>{
   if(err){
       console.log(err);
   }
   console.log(data.toString());
});


//Writing files

//First let's replace content of an existing file
fs.writeFile('./docs/blog1.txt','My Name is Ritik',()=>{
    console.log("Rewrite the entire content");
}); 

//Create a new file and write content inside that
fs.writeFile('./docs/blog2.txt','This is new file created..',()=>{
    console.log("New file created!!!!!!");
});



//Directories

//make a directory

if(!fs.existsSync('./assets')){
    //mkdir stands for make directory
    fs.mkdir('./assets', (err)=>{
        if(err){
            console.log(err);
        }
        console.log("Folder Created!!!");
    });
}else{
    //rmdir stands for remove directory
    fs.rmdir('./assets', (err)=>{
        if(err){
            console.log(err);
        }
        console.log("Folder Removed!!");
    });
}


//Delete file

if(fs.existsSync('./docs/deleteme.txt')){
    fs.unlink('./docs/deleteme.txt', (err)=>{
       if(err){
           console.log(err);
       }
        console.log("Deleted.");
    });
}

//Append File Method
fs.appendFile('./docs/blog1.txt','--kese ho dost',(err)=>{   
    
    if(err){
        console.log(err);
    }

    console.log("Done!!");

});

