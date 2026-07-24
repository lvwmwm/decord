// Module ID: 11688
// Function ID: 90682
// Name: ApplicationIconAndName
// Dependencies: [33, 4130, 689, 1273, 4126, 2]
// Exports: default

// Module 11688 (ApplicationIconAndName)
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_3;
let closure_4;
let closure_5;
({ jsx: closure_3, Fragment: closure_4, jsxs: closure_5 } = jsxProd);
let closure_6 = _createForOfIteratorHelperLoose.createStyles((width) => {
  let obj = {};
  obj = { width, height: width, marginTop: -1, marginRight: 4, borderRadius: importDefault(689).radii.xs };
  obj.gameIcon = obj;
  return obj;
});
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/user_profile/native/ApplicationIconAndName.tsx");

export default function ApplicationIconAndName(textVariant) {
  let application;
  let iconSize;
  let useComma;
  ({ application, iconSize, useComma } = textVariant);
  if (useComma === undefined) {
    useComma = false;
  }
  let obj = {};
  obj = { style: callback(iconSize).gameIcon, resizeMode: "contain" };
  obj = {};
  const iconURL = application.getIconURL(iconSize);
  let str = "";
  if (null != iconURL) {
    str = iconURL;
  }
  obj.uri = str;
  obj.source = obj;
  obj.disableColor = true;
  const items = [closure_3(require(1273) /* Button */.Icon, obj, application.id), ];
  const obj1 = { variant: textVariant.textVariant };
  let str2 = "";
  if (useComma) {
    str2 = ", ";
  }
  obj1.children = "" + application.name + str2;
  items[1] = closure_3(require(4126) /* Text */.Text, obj1);
  obj.children = items;
  return closure_5(closure_4, obj);
};
