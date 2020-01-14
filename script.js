let p= document.createElement("p");
p.innerText=arrLib.max([1, 3, 2, 5, 3]);
document.body.appendChild(p);

p= document.createElement("p");
p.innerText=arrLib.min([1, 3, 2, 5, 3]);
document.body.appendChild(p);

p= document.createElement("p");
p.innerText=arrLib.mean([1, 3, 2, 5, 3]);
document.body.appendChild(p);

p= document.createElement("p");
p.innerText=arrLib.sort([1, 3, 2, 1, 5, 3], "bubble");
document.body.appendChild(p);

p= document.createElement("p");
p.innerText=arrLib.sort([1, 3, 2, 1, 5, 3], "selection");
document.body.appendChild(p);

p= document.createElement("p");
p.innerText=arrLib.getMaxSubSum([-1, -2, -3]);
document.body.appendChild(p);
