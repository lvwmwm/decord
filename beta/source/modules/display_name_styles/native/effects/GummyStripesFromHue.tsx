// Module ID: 14896
// Function ID: 14897
// Name: GummyStripesFromHue
// Dependencies: [32, 19, 21, 4836, 1389, 4566, 14155, 2]
// Exports: default

// Module 14896 (GummyStripesFromHue)
import ColorPickerUtils from "ColorPickerUtils" /* 14155 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
function AnimatedStripe(hue) {
  hue = hue.hue;
  const shift = hue.shift;
  const saturation = hue.saturation;
  const lightness = hue.lightness;
  let stripeOverlap = hue.overlap;
  const tmp = closure_6();
  let obj = hue(saturation[5]);
  const fn = function c() {
    const result = (hue.get() + shift) % 360;
    const obj = ColorPickerUtils;
    const obj2 = { h: (result + 360) % 360, s: saturation, l: lightness };
    const tmp2 = _slicedToArray(obj.hslToRgbWorklet(obj2), 3);
    const obj3 = { backgroundColor: "rgb(" + tmp2[0] + ", " + tmp2[1] + ", " + tmp2[2] + ")" };
    return obj3;
  };
  let obj2 = { hue, shift, hslToRgbWorklet: hue(saturation[6]).hslToRgbWorklet, saturation, lightness };
  fn.__closure = obj2;
  fn.__workletHash = 8497009401863;
  fn.__initData = __initData;
  const animatedStyle = obj.useAnimatedStyle(fn);
  const style = [tmp.stripe, , ];
  const View = shift(saturation[5]).View;
  const tmp3 = closure_4;
  if (stripeOverlap) {
    stripeOverlap = tmp.stripeOverlap;
  }
  style[1] = stripeOverlap;
  style[2] = animatedStyle;
  return tmp3(View, { style });
}
({ jsx: closure_4, Fragment: hasOwnProperty } = Fragment);
let closure_6 = createStyles.createStyles({ stripe: { flex: 1 }, stripeOverlap: { marginLeft: -1 } });
const __initData = { code: "function GummyStripesFromHueTsx1(){const{hue,shift,hslToRgbWorklet,saturation,lightness}=this.__closure;const h=((hue.get()+shift)%360+360)%360;const[r,g,b]=hslToRgbWorklet({h:h,s:saturation,l:lightness});return{backgroundColor:\"rgb(\"+r+\", \"+g+\", \"+b+\")\"};}" };
let result = size.fileFinishedImporting("modules/display_name_styles/native/effects/GummyStripesFromHue.tsx");

export default function GummyStripesFromHue(hue) {
  let GUMMY_STRIPES;
  hue = hue.hue;
  let obj = {
    children: GUMMY_STRIPES.map((hueShift, index) => {
      const obj = { hue, shift: hueShift.hueShift, saturation: hueShift.saturation, lightness: hueShift.lightness, overlap: index > 0 };
      return React3(AnimatedStripe, obj, index);
    })
  };
  GUMMY_STRIPES = hue(1389).GUMMY_STRIPES;
  return closure_4(closure_5, obj);
};
