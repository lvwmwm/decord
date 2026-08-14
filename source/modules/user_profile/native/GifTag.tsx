// Module ID: 8904
// Function ID: 8905
// Name: GifTag
// Dependencies: [17, 21, 4342, 712, 689, 4338, 1236, 2]
// Exports: default

// Module 8904 (GifTag)
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import importDefaultResult from "n";

let obj = { gifTag: null, gifTagText: null };
obj = { paddingHorizontal: require("Themes").space.PX_8, paddingVertical: 2, borderRadius: require("Themes").radii.xs, backgroundColor: null };
const importDefaultResultResult = require("n")(require("Themes").unsafe_rawColors.WHITE);
obj[3] = require("n")(require("Themes").unsafe_rawColors.WHITE).alpha(0.9).css();
obj[0] = obj;
const alphaResult = require("n")(require("Themes").unsafe_rawColors.WHITE).alpha(0.9);
obj[1] = { color: require("Themes").unsafe_rawColors.PRIMARY_800 };
let closure_4 = createCacheKey.createStyles(obj);
const obj1 = { color: require("Themes").unsafe_rawColors.PRIMARY_800 };
const result = require("createCacheKey").fileFinishedImporting("modules/user_profile/native/GifTag.tsx");

export default function GifTag(style) {
  const tmp = callback();
  let obj = { style: items, pointerEvents: "none", children: null };
  items = [tmp.gifTag, style.style];
  obj = { variant: "text-sm/bold", color: "none", style: tmp.gifTagText, children: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[3] = intl.string(require(1236) /* getSystemLocale */.t.I5gL2H);
  obj[2] = jsx(require(4338) /* Text */.Text, { variant: "text-sm/bold", color: "none", style: tmp.gifTagText, children: null });
  return <View variant="text-sm/bold" color="none" style={tmp.gifTagText}>{null}</View>;
};
