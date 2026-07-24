// Module ID: 8793
// Function ID: 69420
// Name: FractionalNitroPreview
// Dependencies: [31, 27, 653, 33, 4130, 689, 1212, 4554, 5085, 8794, 8795, 5154, 4126, 2]
// Exports: FractionalNitroPreview

// Module 8793 (FractionalNitroPreview)
import "result";
import { View } from "get ActivityIndicator";
import { VerticalGradient } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
let require = arg1;
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { flexDirection: "column", alignItems: "center", justifyContent: "center", padding: require("_createForOfIteratorHelperLoose").space.PX_24, borderRadius: require("_createForOfIteratorHelperLoose").radii.lg, overflow: "hidden", alignSelf: "center", gap: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.gradient = { position: "absolute", top: 0, left: 0, right: 0, bottom: 0 };
_createForOfIteratorHelperLoose.headerImage = { width: 211, height: 157, resizeMode: "cover" };
_createForOfIteratorHelperLoose.nitroIconContainer = { alignSelf: "flex-start" };
let obj1 = { display: "flex", flexDirection: "column", gap: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.benefits = obj1;
let obj2 = { display: "flex", flexDirection: "row", gap: require("_createForOfIteratorHelperLoose").space.PX_8, alignItems: "center" };
_createForOfIteratorHelperLoose.benefitRow = obj2;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("ME").fileFinishedImporting("modules/collectibles/native/FractionalNitroPreview.tsx");

export const FractionalNitroPreview = function FractionalNitroPreview() {
  const tmp = _createForOfIteratorHelperLoose();
  const require = tmp;
  let items = [require(1212) /* getSystemLocale */.t.E1NP2x, require(1212) /* getSystemLocale */.t.kpMomJ, require(1212) /* getSystemLocale */.t.xT1Vfn, require(1212) /* getSystemLocale */.t.myyAEr, require(1212) /* getSystemLocale */.t.zTk8Ul];
  let obj = { style: tmp.container };
  obj = { colors: ["#000000", "#36266d"], start: VerticalGradient.START, end: VerticalGradient.END, style: tmp.gradient };
  const items1 = [callback(importDefault(4554), obj), , , ];
  obj = {};
  const obj1 = { uri: importDefault(8794) };
  obj.source = obj1;
  obj.style = tmp.headerImage;
  items1[1] = callback(importDefault(5085), obj);
  const tmp2 = importDefault(5085);
  items1[2] = callback(View, { style: tmp.nitroIconContainer, children: callback(importDefault(8795), {}) });
  const obj2 = { style: tmp.nitroIconContainer, children: callback(importDefault(8795), {}) };
  items1[3] = callback(View, {
    style: tmp.benefits,
    children: items.map((arg0, arg1) => {
      let obj = { style: tmp.benefitRow };
      obj = { color: outer1_1(outer1_2[5]).colors.WHITE };
      const items = [outer1_5(tmp(outer1_2[11]).CheckmarkSmallIcon, obj), ];
      obj = { variant: "text-sm/medium", color: "text-overlay-light" };
      const intl = tmp(outer1_2[6]).intl;
      obj.children = intl.string(arg0);
      items[1] = outer1_5(tmp(outer1_2[12]).Text, obj);
      obj.children = items;
      return outer1_6(outer1_3, obj, arg1);
    })
  });
  obj.children = items1;
  return callback2(View, obj);
};
