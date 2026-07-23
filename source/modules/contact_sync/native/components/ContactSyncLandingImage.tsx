// Module ID: 11718
// Function ID: 91008
// Name: ContactSyncLandingImage
// Dependencies: [31, 27, 33, 4130, 11719, 11720, 2]
// Exports: default

// Module 11718 (ContactSyncLandingImage)
import "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_2;
let closure_3;
let closure_4;
let closure_5;
let closure_6;
({ Image: closure_2, View: closure_3 } = get_ActivityIndicator);
({ jsx: closure_4, Fragment: closure_5, jsxs: closure_6 } = jsxProd);
let closure_7 = _createForOfIteratorHelperLoose.createStyles({ leftContainer: { zIndex: 2, height: 106, width: 102, position: "absolute" }, landingImageLeft: { left: 58, top: -92 }, rightContainer: { position: "absolute", height: 113, width: 103 }, landingImageRight: { left: 134, top: -99 } });
const result = require("jsxProd").fileFinishedImporting("modules/contact_sync/native/components/ContactSyncLandingImage.tsx");

export default function ContactSyncLandingImage() {
  const tmp = callback3();
  let obj = {};
  obj = { style: tmp.leftContainer };
  obj = { resizeMode: "contain", style: tmp.landingImageLeft, source: importDefault(11719) };
  obj.children = callback(closure_2, obj);
  const items = [callback(closure_3, obj), ];
  const obj1 = { style: tmp.rightContainer, children: callback(closure_2, { resizeMode: "contain", style: tmp.landingImageRight, source: importDefault(11720) }) };
  items[1] = callback(closure_3, obj1);
  obj.children = items;
  return callback2(closure_5, obj);
};
