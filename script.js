let request = new XMLHttpRequest();
request.open('GET',"https://restcountries.eu/rest/v2/all",true);
request.send();

request.onload = ()=>{
       let data = JSON.parse(request.response);
data.forEach((element) => {
    

let cname = element.name;
let cflag = element.flag;
let ccapital = element.capital;
let ccode = element.alpha2Code+","+element.alpha3Code;
let cregion = element.region;
let clatlong = element.latlng;


let card = document.createElement("div");
card.className=' row col-sm-3 card';

document.querySelector('body').appendChild(card);

let head = document.createElement("h5");
head.className='card-title ctitle';
let countryName = document.createTextNode(cname);
head.appendChild(countryName);
card.appendChild(head);

let image = document.createElement("img");
image.className='card-img-top';
image.setAttribute('src',cflag);
card.appendChild(image);

let row1 = document.createElement("div");
card.appendChild(row1);

let p1left = document.createElement("p")
p1left.className='cap1'
let countrycapital = document.createTextNode("Capital :");
p1left.appendChild(countrycapital);
row1.appendChild(p1left);

let p1right = document.createElement("p");
p1right.className='btn btn-success btn-sm cap2';
let ccap = document.createTextNode(" "+ccapital);
p1right.appendChild(ccap);
row1.appendChild(p1right);

let row2 = document.createElement("div");
card.appendChild(row2);

let p2left= document.createElement("p")
p2left.className='cod1';
let countrycode = document.createTextNode("Code :"+" ");
p2left.appendChild(countrycode);
row2.appendChild(p2left);

let p2right= document.createElement("p")  
p2right.className='cod2';
let cocode = document.createTextNode(+" "+ccode);
p2right.appendChild(cocode);
row2.appendChild(p2right);

let row3 = document.createElement("div");
card.appendChild(row3);

let p3left = document.createElement("p")
p3left.className='reg1';
let countryregion = document.createTextNode("Region :"+" ");
p3left.appendChild(countryregion);
row3.appendChild(p3left);

let p3right = document.createElement("p")
p3right.className='reg2';
let coregion = document.createTextNode(" "+cregion);
p3right.appendChild(coregion);
row3.appendChild(p3right);

let row4 = document.createElement("div");
card.appendChild(row4);


let p4left = document.createElement("p")
p4left.className='lat1';
let countrylatlong = document.createTextNode("latlong :"+" ");
p4left.appendChild(countrylatlong);
row4.appendChild(p4left);


let p4right = document.createElement("p")
p4right.className='lat2';
let colatlong = document.createTextNode(" "+clatlong);
p4right.appendChild(colatlong);
row4.appendChild(p4right);

});
}