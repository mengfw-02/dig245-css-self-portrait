
/* javascript */

var bauhaus = `

Staaatliches Bauhaus (1919-1933)

      ..-""T-..
    ,'__   |   '.
   /   N|  |     !
  :     '  |      :
  [      __|      ]
  :      _I       :
   !   ___I      /
    '.  N]     ,'
      "-"!..--"

`;

console.log(bauhaus);

let elements = document.querySelectorAll("div");
console.log(`Total elements: ${elements.length} `);

document.addEventListener("mousemove", () => {
  let x = event.clientX;
  let y = event.clientY;
  var coor = "X: " + x + ", Y: " + y;
  document.getElementById("footer").innerHTML = [coor];
});
