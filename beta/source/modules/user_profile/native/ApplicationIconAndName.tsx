// Module ID: 12125
// Function ID: 12126
// Name: ApplicationIconAndName
// Dependencies: [21, 4836, 576, 1177, 4832, 2]
// Exports: default

// Module 12125 (ApplicationIconAndName)
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1177 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let c3;
let closure_4;
let hasOwnProperty;
let tmp5;
const Text_Text = tmp5(4832);
({ jsx: c3, Fragment: closure_4, jsxs: hasOwnProperty } = Fragment);
let closure_6 = createStyles.createStyles((width) => {
  const obj = { gameIcon: size };
  size = { width, height: width, marginTop: -1, marginRight: 4, borderRadius: nativeDefault.radii.xs };
  return obj;
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/user_profile/native/ApplicationIconAndName.tsx");

export default function ApplicationIconAndName(textVariant) {
  let application;
  let iconSize;
  let name;
  let str;
  let str2;
  let useComma;
  ({ application, iconSize, useComma } = textVariant);
  textVariant = textVariant.textVariant;
  if (useComma === undefined) {
    useComma = false;
  }
  const obj = { style: closure_6(iconSize).gameIcon, resizeMode: "contain", source: { uri: str }, disableColor: true };
  const Icon = native.Icon;
  str = application.getIconURL(iconSize);
  const tmp2 = hasOwnProperty;
  const tmp3 = React3;
  if (str == null) {
    str = "";
  }
  const items = [_false(Icon, obj, application.id), ];
  const obj2 = { variant: textVariant, children: "" + name + str2 };
  str2 = "";
  const Text = Text_Text.Text;
  name = application.name;
  if (useComma) {
    str2 = ", ";
  }
  const obj3 = { children: items };
  items[1] = _false(Text, obj2);
  return tmp2(tmp3, obj3);
};
