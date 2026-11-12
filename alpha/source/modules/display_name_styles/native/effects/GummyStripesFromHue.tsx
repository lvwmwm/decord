// Module ID: 17849
// Function ID: 17850
// Name: GummyStripesFromHue
// Dependencies: [32, 19, 21, 5243, 1393, 1652, 16951, 2]
// Exports: default

// Module 17849 (GummyStripesFromHue)
import _modDef1652 from "module_1652" /* 1652 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5243 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, importDefault, obj1;

let closure_4;
let hasOwnProperty;
function AnimatedStripe(overlap) {
  let _undefined;
  let _undefined2;
  let c1;
  let hue;
  let lightness;
  let saturation;
  let shift;
  let tmp4;
  let tmp5;
  let tmp6;
  let tmp7;
  let tmp8;
  let tmp9;
  let stripeOverlap = overlap.overlap;
  ({ hue, shift, saturation, lightness } = overlap);
  let tmp = closure_6();
  const items = [closure_7, hue, shift, , , ];
  const useAnimatedStyle = require("module_1652").useAnimatedStyle;
  require("module_1652");
  items[3] = require("ColorPickerUtils").hslToRgbWorklet;
  items[4] = saturation;
  items[5] = lightness;
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  let c3;
  let c4;
  [tmp4, tmp5, tmp6, tmp7, tmp8, tmp9] = items;
  class GummyStripesFromHueTsx1 {
    constructor() {
      obj = { h: ((closure_0.get() + closure_1) % 360 + 360) % 360, s: closure_3, l: closure_4 };
      tmp = closure_3(closure_2(obj), 3);
      obj1 = { backgroundColor: "rgb(" + tmp[0] + ", " + tmp[1] + ", " + tmp[2] + ")" };
      return obj1;
    }
  }
  const items1 = [tmp5, tmp6, tmp7, tmp8, tmp9];
  GummyStripesFromHueTsx1.__closure = items1;
  GummyStripesFromHueTsx1.__workletHash = 15518574329470;
  GummyStripesFromHueTsx1.__initData = tmp4;
  const animatedStyle = useAnimatedStyle(GummyStripesFromHueTsx1);
  const style = [tmp.stripe, , ];
  const View = _modDef1652.View;
  const tmp11 = c4;
  if (stripeOverlap) {
    stripeOverlap = tmp.stripeOverlap;
  }
  style[1] = stripeOverlap;
  style[2] = animatedStyle;
  return tmp11(View, { style });
}
({ jsx: closure_4, Fragment: hasOwnProperty } = Fragment);
let closure_6 = createStyles.createStyles({ stripe: { flex: 1 }, stripeOverlap: { marginLeft: -1 } });
let closure_7 = { code: "(function GummyStripesFromHueTsx1(){let[hue,shift,hslToRgbWorklet,saturation,lightness]=this.__closure;const h=((hue.get()+shift)%360+360)%360;const[r,g,b]=hslToRgbWorklet({h:h,s:saturation,l:lightness});return{backgroundColor:\"rgb(\"+r+\", \"+g+\", \"+b+\")\"};})" };
const result = size.fileFinishedImporting("modules/display_name_styles/native/effects/GummyStripesFromHue.tsx");

export default function GummyStripesFromHue(hue) {
  let GUMMY_STRIPES;
  hue = hue.hue;
  let obj = {
    children: GUMMY_STRIPES.map((hueShift, index) => {
      const obj = { hue, shift: hueShift.hueShift, saturation: hueShift.saturation, lightness: hueShift.lightness, overlap: index > 0 };
      return l(AnimatedStripe, obj, index);
    })
  };
  GUMMY_STRIPES = hue(1393).GUMMY_STRIPES;
  return l(closure_5, obj);
};
