// Module ID: 8510
// Function ID: 67906
// Name: UserProfileOverscrollBanner
// Dependencies: [31, 27, 33, 3991, 8511, 8260, 477, 2]
// Exports: default

// Module 8510 (UserProfileOverscrollBanner)
import "result";
import { StyleSheet } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import module_8511 from "module_8511";
import importDefaultResult from "module_3991";

let closure_4;
let closure_5;
const require = arg1;
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
const result = require("jsxProd").fileFinishedImporting("modules/user_profile/native/UserProfileOverscrollBanner.tsx");

export default function UserProfileOverscrollBanner(arg0) {
  let bannerAnimatedStyle;
  let bannerImageAnimatedStyle;
  let blurAnimatedProps;
  let privateBanner;
  let showBlur;
  let obj = { bannerAnimatedStyle: 0, bannerImageAnimatedStyle: 0, blurAnimatedProps: 0, showBlur: 0, privateBanner: 0 };
  ({ bannerAnimatedStyle, bannerImageAnimatedStyle, blurAnimatedProps, showBlur, privateBanner } = arg0);
  Object.setPrototypeOf(null);
  const merged = Object.assign(arg0, obj);
  obj = { style: bannerAnimatedStyle };
  const items = [privateBanner, ];
  obj = { style: bannerImageAnimatedStyle };
  const merged1 = Object.assign(merged);
  const items1 = [callback(importDefault(8260), {}), ];
  const obj1 = {};
  const tmp4 = importDefault(8260);
  let tmp6 = require(477) /* set */.isIOS() && showBlur;
  if (tmp6) {
    const obj2 = { animatedProps: blurAnimatedProps, style: StyleSheet.absoluteFillObject };
    tmp6 = callback(module_8511, obj2);
  }
  items1[1] = tmp6;
  obj.children = items1;
  items[1] = closure_5(importDefault(3991).View, obj);
  obj.children = items;
  return closure_5(importDefault(3991).View, obj);
};
