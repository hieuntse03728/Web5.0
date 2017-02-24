let fs = require('fs');

var Words = [];
var Numbers = [];
var Arr = [];
readfile = (file, callback) => {
    fs.readFile(file,'utf8', (err, data) => {
        if (err) throw err;
        //console.log(data);
        fun(data);
    })
};

var count=0;
fun = (data) => {
  var res = data.split(" ");
  res = data.split('\r\n');
  for (var i = 0; i < res.length; i++){
    Arr[count] = res[i].split(" ");
    count++;
  }
  count=0;
  for ( i = 0; i < res.length; i++){
    Words[count]=Arr[i][0];
    ++count;
  }
  count=0;
  for ( i = 0; i < res.length; i++){
    Numbers[count]=Arr[i][1];
    ++count;
  }
  for ( i = 0; i < res.length; i++){
    for( var j = i+1 ; j<res.length; j++){
      if (Words[i]==Words[j]){
        Words.splice(j,1);
        Numbers[i]=Number(Numbers[i])+Number(Numbers[j]);
        Numbers.splice(j,1);
      }
    }
  }
  count=0;
  //Words=Words.toString();
  console.log(Words);
  for ( i = 0; i < res.length; i++){
    Arr[count]=Words[i];
    count=count+2;
  }
  count=1;
  for ( i = 0; i < res.length; i++){
    Arr[count]=Numbers[i];
    count=count+2;
  }
  Arr= Arr.toString();
  count = 0;
  for ( i = 0; i < Arr.length; i++){
      Arr= Arr.replace(","," ");
  }
  console.log(Arr);
  writefile('output.txt',Arr);
};


writefile = (file,data) =>{
  fs.writeFile(file,data,(err) =>{
     if (err) throw err;
     console.log("Done");
  })
}



//test call function
//readfile('text.txt');
module.exports.readfile = readfile;
module.exports.writefile = writefile;
