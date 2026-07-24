// Module ID: 14214
// Function ID: 109295
// Name: SynchronizeIcon
// Dependencies: [31, 33, 8063, 2]
// Exports: default

// Module 14214 (SynchronizeIcon)
import "result";
import jsxProd from "jsxProd";

let closure_3;
let closure_4;
const require = arg1;
({ jsx: closure_3, jsxs: closure_4 } = jsxProd);
const result = require("inlineStyles").fileFinishedImporting("modules/client_themes/images/native/SynchronizeIconNative.tsx");

export default function SynchronizeIcon(iconStyles) {
  const fill = iconStyles.fill;
  let obj = { style: iconStyles.iconStyles, x: "0px", y: "0px", width: "24", height: "24", viewBox: "0 0 24 24", fill };
  obj = { id: "Frame_-_24px", children: callback(require(8063) /* inlineStyles */.Rect, { y: "0", fill: "none", width: "24", height: "24" }) };
  const items = [callback(require(8063) /* inlineStyles */.G, obj), ];
  obj = { id: "Filled_Icons" };
  const obj1 = {};
  const items1 = [callback(require(8063) /* inlineStyles */.Path, { fill, d: "M6.351,6.351C7.824,4.871,9.828,4,12,4c4.411,0,8,3.589,8,8h2c0-5.515-4.486-10-10-10 C9.285,2,6.779,3.089,4.938,4.938L3,3v6h6L6.351,6.351z" }), callback(require(8063) /* inlineStyles */.Path, { fill, d: "M17.649,17.649C16.176,19.129,14.173,20,12,20c-4.411,0-8-3.589-8-8H2c0,5.515,4.486,10,10,10 c2.716,0,5.221-1.089,7.062-2.938L21,21v-6h-6L17.649,17.649z" })];
  obj1.children = items1;
  obj.children = callback2(require(8063) /* inlineStyles */.G, obj1);
  items[1] = callback(require(8063) /* inlineStyles */.G, obj);
  obj.children = items;
  return callback2(importDefault(8063), obj);
};
