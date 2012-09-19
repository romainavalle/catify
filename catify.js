/*  'https://encrypted-tbn2.google.com/images?q=tbn:ANd9GcRgY5MKBCOb2IcKerg_MK6mRPmoIPc-PUf9XDuUnX3NareRd00o',
  'https://encrypted-tbn1.google.com/images?q=tbn:ANd9GcStL94Wp0xrZ1qXusZgdQthK_WrYMfVvYj60opRFhc36UCYGIIr',
  'https://encrypted-tbn2.google.com/images?q=tbn:ANd9GcTHDVm85nyQJ3t8v-3BxnXQMTsllvya72vepse1GvZ0u1_cYVMi',
  'https://encrypted-tbn0.google.com/images?q=tbn:ANd9GcRlxujK7W76VfZprJZeR8Fiu2N3GfDuFp5gyiitszjQLR6ZCG7TaA',
  'https://encrypted-tbn2.google.com/images?q=tbn:ANd9GcRb7dl2ps7EzeF8xkSGzBUx3aMNvxSXNSMkiEIMjjdx66NGgTUD',
  'https://encrypted-tbn2.google.com/images?q=tbn:ANd9GcSSN2KGtpKXkzme_RqZgXR10K4w7RE-52RLtxFGM6YIho0nxLXb',
  'https://encrypted-tbn2.google.com/images?q=tbn:ANd9GcQjKhb-YnDjgt6pkfw9JkZidhmo4KDGX1gWy4INMhDqQZ3DPfWX',
  'https://encrypted-tbn1.google.com/images?q=tbn:ANd9GcT-UqkSVk8OdTISIG0E2jjgA2-yAVEp60j0VBpLXthGymu4CeTU',
  'https://encrypted-tbn3.google.com/images?q=tbn:ANd9GcQWNRzqvPPNL9b_uH5kG-LOtm44ArvIIXE04Uuy9rFeVUk5Q9Cy',
  'https://encrypted-tbn3.google.com/images?q=tbn:ANd9GcQbv5sbkyo3qTDzl8gNf7sxoeF8VIN5IT0Tec6UTytu3XX96IPo',
  'https://encrypted-tbn2.google.com/images?q=tbn:ANd9GcTi-HHIKsx4mxKZBA7Kx8iIy90ZrGQnfz8lam2YCnq4R1TGLUl0',
  'https://encrypted-tbn0.google.com/images?q=tbn:ANd9GcS4pKAhK9mhlBWzFd9Wkj6_tfiyHg8rRfM8d3l44SfDp33w_W3ZYQ',
  'https://encrypted-tbn2.google.com/images?q=tbn:ANd9GcSH0foULdMwYCNthtLGZIcd3aNS4rjR6dMOdGYBWMFPd21y9W3n',
  'https://encrypted-tbn2.google.com/images?q=tbn:ANd9GcRuXRGTTNcNBZyg6SSiFCIT0dY-EOwX3GC7pp8o5-ys15gtXrTM_g',
  'https://encrypted-tbn1.google.com/images?q=tbn:ANd9GcQstB9Ydl6HY7Ru74nRQqoT01pBhxtEv-rEkW2Lda8gmqfNgd2NhQ',
  'https://encrypted-tbn1.google.com/images?q=tbn:ANd9GcRgy5TXvSLkd54cLZMgCB8Wk9SFSgyoUFLmvhIr_dvdhfKj-v5Z',
  'https://encrypted-tbn1.google.com/images?q=tbn:ANd9GcRCvq-SGH34LwGj24zroN0FNkBNRpaVA54ru8MJ3v14_Zup3vhhxw',
  'https://encrypted-tbn3.google.com/images?q=tbn:ANd9GcTbB5hZgCdRMyWnoSyhDYYb4tWcjyuFnYFqoTah9cOcPbxH3D4R'



]
*/
function checkImg(){
  var img_array = document.getElementsByTagName('img');
  var width,height;
  alert("Enjoy")
  for (var i = 0; i < img_array.length; i++) {
    width = img_array[i].width;
    height = img_array[i].height;
    var img_obj = result_array[Math.floor(Math.random()*result_array.length)];

    img_array[i].src = img_obj.tbUrl;
    img_array[i].width = width;
    img_array[i].height = height;
  };
}


google.load('search', '1', {"callback": function() {googleLoaded()}});



var imageSearch;
var result_array = [],page = 1;

function searchComplete() {
  if (imageSearch.results && imageSearch.results.length > 0) {
    var results = imageSearch.results;
    for (var i = 0; i < results.length; i++) {
      result_array.push(results[i])   
    }
    if(page<7){
      
      setTimeout(function(){imageSearch.gotoPage(++page);},100)
    }else{
      checkImg()
    }          
  }
}

function googleLoaded() {     
  // Create an Image Search instance.

  alert("Loading image from google")
  imageSearch = new google.search.ImageSearch();


  // Set searchComplete as the callback function when a search is 
  // complete.  The imageSearch object will have results in it.
  imageSearch.setSearchCompleteCallback(this, searchComplete);

  imageSearch.setResultSetSize(8)
  // Find me a beautiful car.
  imageSearch.execute("cute cat");
  
}

 /* function doWork(){

    
  }
checkReady();*/
