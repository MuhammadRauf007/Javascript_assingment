let guestlist = ["Abdullah","Zohaib","Ali"];
let massage = "Do you like to eat dinner with me? ";
console.log(`${guestlist[0]},${massage}`);
console.log(`${guestlist[1]},${massage}`);
console.log(`${guestlist[2]},${massage}`);

console.log(guestlist[2],"\,will not join us.");
guestlist[2] = "Hassan";
console.log("Hassan will join us for dinner instead of Ali")
var  massage2 = "Are you ready for dinner today?"

console.log(`${guestlist[0]},${massage2}`);
console.log(`${guestlist[1]},${massage2}`);
console.log(`${guestlist[2]},${massage2}`);

console.log("Hello guys,i will inform you that we find a bigger dinner table .So, i decide to add three more guest");

guestlist.splice(0,0,"Hamza");
guestlist.splice(2,0,"Huzifa");
guestlist.push("Umair");

massage3 = "you are invited on dinner";
console.log(`${guestlist[0]},${massage3}`);
console.log(`${guestlist[1]},${massage3}`);
console.log(`${guestlist[2]},${massage3}`);
console.log(`${guestlist[3]},${massage3}`);
console.log(`${guestlist[4]},${massage3}`);
console.log(`${guestlist[5]},${massage3}`);