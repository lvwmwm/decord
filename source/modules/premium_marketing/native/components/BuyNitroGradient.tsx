// Module ID: 7526
// Function ID: 60000
// Name: BuyNitroGradient
// Dependencies: [31, 1851, 33, 3991, 4554, 4131, 4134, 2]
// Exports: default

// Module 7526 (BuyNitroGradient)
import "result";
import { PremiumTypes } from "GuildFeatures";
import jsxProd from "jsxProd";
import LinearGradient from "LinearGradient";
import importDefaultResult from "module_3991";

let closure_4;
let closure_5;
let closure_6;
const require = arg1;
({ jsx: closure_4, Fragment: closure_5, jsxs: closure_6 } = jsxProd);
let closure_8 = { code: "function BuyNitroGradientTsx1(){const{withTiming,selectedTier,PremiumTypes,timingStandard}=this.__closure;return{opacity:withTiming(selectedTier===PremiumTypes.TIER_0?1:0,timingStandard)};}" };
const result = require("jsxProd").fileFinishedImporting("modules/premium_marketing/native/components/BuyNitroGradient.tsx");

export default function BuyNitroGradient(selectedTier) {
  let basicColors;
  let end;
  let nitroColors;
  let start;
  let style;
  selectedTier = selectedTier.selectedTier;
  ({ start, end, style } = selectedTier);
  ({ nitroColors, basicColors } = selectedTier);
  let obj = selectedTier(3991);
  const fn = function f() {
    const obj = {};
    let num = 0;
    if (selectedTier === outer1_3.TIER_0) {
      num = 1;
    }
    obj.opacity = selectedTier(outer1_2[5]).withTiming(num, selectedTier(outer1_2[6]).timingStandard);
    return obj;
  };
  obj = { withTiming: selectedTier(4131).withTiming, selectedTier, PremiumTypes, timingStandard: selectedTier(4134).timingStandard };
  fn.__closure = obj;
  fn.__workletHash = 14014615431537;
  fn.__initData = closure_8;
  obj = {};
  const animatedStyle = obj.useAnimatedStyle(fn);
  const items = [callback(importDefault(4554), { style, colors: nitroColors, start, end }), ];
  const items1 = [style, animatedStyle];
  items[1] = callback(LinearGradient, { style: items1, colors: basicColors, start, end });
  obj.children = items;
  return callback2(closure_5, obj);
};
