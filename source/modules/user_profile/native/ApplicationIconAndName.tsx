// Module ID: 11651
// Function ID: 90395
// Name: ApplicationIconAndName
// Dependencies: []
// Exports: default

// Module 11651 (ApplicationIconAndName)
const _module = require(dependencyMap[0]);
({ jsx: closure_3, Fragment: closure_4, jsxs: closure_5 } = _module);
const _module1 = require(dependencyMap[1]);
let closure_6 = _module1.createStyles((width) => {
  let obj = {};
  obj = { width, height: width, marginTop: -1, marginRight: 4, borderRadius: importDefault(dependencyMap[2]).radii.xs };
  obj.gameIcon = obj;
  return obj;
});
const _module2 = require(dependencyMap[5]);
const result = _module2.fileFinishedImporting("modules/user_profile/native/ApplicationIconAndName.tsx");

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
  const items = [closure_3(require(dependencyMap[3]).Icon, obj, application.id), ];
  const obj1 = { variant: textVariant.textVariant };
  let str2 = "";
  if (useComma) {
    str2 = ", ";
  }
  obj1.children = "" + application.name + str2;
  items[1] = closure_3(require(dependencyMap[4]).Text, obj1);
  obj.children = items;
  return closure_5(closure_4, obj);
};
