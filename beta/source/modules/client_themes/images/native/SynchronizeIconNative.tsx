// Module ID: 14822
// Function ID: 14823
// Name: SynchronizeIconNative
// Dependencies: [19, 21, 7909, 2]
// Exports: default

// Module 14822 (SynchronizeIconNative)
import inlineStyles from "inlineStyles" /* 7909 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import size_mod from "module_2" /* 2 */;

const inlineStylesDefault = inlineStyles;

let c3;
let closure_4;
({ jsx: c3, jsxs: closure_4 } = Fragment);
let size = size_mod;
const result = size.fileFinishedImporting("modules/client_themes/images/native/SynchronizeIconNative.tsx");

export default function SynchronizeIcon(iconStyles) {
  let G3;
  let items;
  let items1;
  let obj3;
  const fill = iconStyles.fill;
  size = { style: iconStyles.iconStyles, x: "0px", y: "0px", width: "24", height: "24", viewBox: "0 0 24 24", fill, children: items };
  const obj = { id: "Frame_-_24px", children: _false(inlineStyles.Rect, { y: "0", fill: "none", width: "24", height: "24" }) };
  const tmp = inlineStylesDefault;
  const G = inlineStyles.G;
  items = [_false(G, obj), ];
  const obj2 = { id: "Filled_Icons", children: React3(G3, obj3) };
  const G2 = inlineStyles.G;
  obj3 = { children: items1 };
  G3 = inlineStyles.G;
  items1 = [_false(inlineStyles.Path, { fill, d: "M6.351,6.351C7.824,4.871,9.828,4,12,4c4.411,0,8,3.589,8,8h2c0-5.515-4.486-10-10-10 C9.285,2,6.779,3.089,4.938,4.938L3,3v6h6L6.351,6.351z" }), _false(inlineStyles.Path, { fill, d: "M17.649,17.649C16.176,19.129,14.173,20,12,20c-4.411,0-8-3.589-8-8H2c0,5.515,4.486,10,10,10 c2.716,0,5.221-1.089,7.062-2.938L21,21v-6h-6L17.649,17.649z" })];
  items[1] = _false(G2, obj2);
  return React3(tmp, size);
};
