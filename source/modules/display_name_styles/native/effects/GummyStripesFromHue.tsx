// Module ID: 14285
// Function ID: 109681
// Name: AnimatedStripe
// Dependencies: [57, 31, 33, 4130, 1860, 3991, 13621, 2]
// Exports: default

// Module 14285 (AnimatedStripe)
import _slicedToArray from "_slicedToArray";
import "result";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
const require = arg1;
function AnimatedStripe(hue) {
  hue = hue.hue;
  const shift = hue.shift;
  const saturation = hue.saturation;
  const lightness = hue.lightness;
  let stripeOverlap = hue.overlap;
  const tmp = callback2();
  let obj = hue(saturation[5]);
  const fn = function c() {
    const result = (hue.get() + shift) % 360;
    let obj = hue(saturation[6]);
    obj = { h: (result + 360) % 360, s: saturation, l: lightness };
    const tmp2 = lightness(obj.hslToRgbWorklet(obj), 3);
    obj = { backgroundColor: "rgb(" + tmp2[0] + ", " + tmp2[1] + ", " + tmp2[2] + ")" };
    return obj;
  };
  obj = { hue, shift, hslToRgbWorklet: hue(saturation[6]).hslToRgbWorklet, saturation, lightness };
  fn.__closure = obj;
  fn.__workletHash = 8497009401863;
  fn.__initData = closure_7;
  const animatedStyle = obj.useAnimatedStyle(fn);
  obj = {};
  const items = [tmp.stripe, , ];
  if (stripeOverlap) {
    stripeOverlap = tmp.stripeOverlap;
  }
  items[1] = stripeOverlap;
  items[2] = animatedStyle;
  obj.style = items;
  return closure_4(shift(saturation[5]).View, obj);
}
({ jsx: closure_4, Fragment: closure_5 } = jsxProd);
let closure_6 = _createForOfIteratorHelperLoose.createStyles({ stripe: { flex: 1 }, stripeOverlap: { marginLeft: -1 } });
let closure_7 = { code: "function GummyStripesFromHueTsx1(){const{hue,shift,hslToRgbWorklet,saturation,lightness}=this.__closure;const h=((hue.get()+shift)%360+360)%360;const[r,g,b]=hslToRgbWorklet({h:h,s:saturation,l:lightness});return{backgroundColor:\"rgb(\"+r+\", \"+g+\", \"+b+\")\"};}" };
let result = require("jsxProd").fileFinishedImporting("modules/display_name_styles/native/effects/GummyStripesFromHue.tsx");

export default function GummyStripesFromHue(hue) {
  hue = hue.hue;
  const obj = {};
  const GUMMY_STRIPES = hue(1860).GUMMY_STRIPES;
  obj.children = GUMMY_STRIPES.map((hueShift) => outer1_4(outer1_8, { hue, shift: hueShift.hueShift, saturation: hueShift.saturation, lightness: hueShift.lightness, overlap: arg1 > 0 }, arg1));
  return callback(closure_5, obj);
};
