//excercise 1

let challenge = "30 Days Of JavaScript";

console.log(challenge);

console.log(challenge.length);

let a = challenge.toUpperCase();
console.log(a);
let b = challenge.toLowerCase();
console.log(b);

let c = challenge.substr(0,2);
console.log(c);

let d = challenge.slice(3,21);
console.log(d);

let e = challenge.includes("Script");
console.log(e);

let f = challenge.split();
console.log(f);

let g = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
let h = g.split(",");
console.log(h);

let i = challenge.replace("JavaScript","Python");
console.log(i);

console.log(challenge.charAt(15));

console.log(challenge.charCodeAt('J'));

console.log(challenge.indexOf('a'));

console.log(challenge.lastIndexOf('a'));

let j = 'You cannot end a sentence with because because because is a conjunction';
console.log(j.indexOf("because"));

console.log(j.lastIndexOf("because"));

let k =  ' 30 Days Of JavaScript ';
console.log(k);
console.log(k.trim(" "));

let l = challenge.startsWith("30");
console.log(l);

let m = challenge.endsWith("JavaScript");
console.log(m);

console.log(challenge.match('a'));

let n1 = '30 Days of';
let n2 = 'JavaScript';
let n3 = n1.concat(n2);
console.log(n1);
console.log(n2);
console.log(n3);

console.log(challenge.repeat(2));

//Exercise 2
console.log("The quote \'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another.");

console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.");

let o = '10';
let p = 10;

console.log(o);
console.log(p);
let q = parseInt(p);
console.log(o);
console.log(q);

let r = parseFloat('9.8');
console.log(p);
console.log(r);
let s = parseInt(r);
console.log(s);


let t = 'python';
let u = 'jargon';
console.log(t.includes('on'));
console.log(u.includes('on'));

let v = 'I hope this course is not full of jargon.';
console.log(v.includes('jargon'));

let w = Math.floor(Math.random(k)*101);
console.log(w);

let x = Math.floor(Math.random()*(101))+50;
console.log(x);

let y = Math.floor(Math.random()*256);
console.log(y);

console.log("1\t1\t1\t1\t1\n2\t1\t2\t4\t8\n3\t1\t3\t9\t27\n4\t1\t4\t16\t64\n5\t1\t5\t25\t125");

let z = 'You cannot end a sentence with because because because is a conjunction';
console.log(z.substr(z.indexOf('because'),23));

//Excercise 3
let str1 = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';
let str2 = (str1.match(/love/gi) || []).length;
console.log(str2);

console.log((z.match(/because/gi) || []).length);

const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';
let lol = sentence.replace(/[^a-zA-Z0-9 ]/g,"");
console.log(lol);