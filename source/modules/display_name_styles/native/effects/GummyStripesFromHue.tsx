// Module ID: 14110
// Function ID: 107127
// Name: AnimatedStripe
// Dependencies: []
// Exports: default

// Module 14110 (AnimatedStripe)
function AnimatedStripe(hue) {
  hue = hue.hue;
  const arg1 = hue;
  const shift = hue.shift;
  const importDefault = shift;
  const saturation = hue.saturation;
  const dependencyMap = saturation;
  const lightness = hue.lightness;
  let closure_3 = lightness;
  let stripeOverlap = hue.overlap;
  const tmp = callback2();
  let obj = arg1(dependencyMap[5]);
  const fn = function c() {
    const result = (hue.get() + shift) % 360;
    let obj = hue(saturation[6]);
    obj = { h: (result + 360) % 360, s: saturation, l: lightness };
    const tmp2 = lightness(obj.hslToRgbWorklet(obj), 3);
    obj = { backgroundColor: "rgb(" + tmp2[0] + ", " + tmp2[1] + ", " + tmp2[2] + ")" };
    return obj;
  };
  obj = { hue, shift, hslToRgbWorklet: arg1(dependencyMap[6]).hslToRgbWorklet, saturation, lightness };
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
  return closure_4(importDefault(dependencyMap[5]).View, obj);
}
let closure_3 = importDefault(dependencyMap[0]);
importAll(dependencyMap[1]);
({ jsx: closure_4, Fragment: closure_5 } = arg1(dependencyMap[2]));
const tmp3 = arg1(dependencyMap[2]);
let closure_6 = arg1(dependencyMap[3]).createStyles({ stripe: { flex: 1 }, stripeOverlap: { marginLeft: -1 } });
let closure_7 = { code: "function GummyStripesFromHueTsx1(){const{hue,shift,hslToRgbWorklet,saturation,lightness}=this.__closure;const h=((hue.get()+shift)%360+360)%360;const[r,g,b]=hslToRgbWorklet({h:h,s:saturation,l:lightness});return{backgroundColor:\"rgb(\"+r+\", \"+g+\", \"+b+\")\"};}" };
const obj = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/display_name_styles/native/effects/GummyStripesFromHue.tsx");

export default function GummyStripesFromHue(hue) {
  const arg1 = hue.hue;
  const obj = {};
  const GUMMY_STRIPES = arg1(dependencyMap[4]).GUMMY_STRIPES;
  obj.children = GUMMY_STRIPES.map((hueShift) => callback(closure_8, { hue, shift: hueShift.hueShift, saturation: hueShift.saturation, lightness: hueShift.lightness, overlap: arg1 > 0 }, arg1));
  return callback(closure_5, obj);
};
