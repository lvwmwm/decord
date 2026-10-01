// Module ID: 16185
// Function ID: 16186
// Name: UnavailableNotice
// Dependencies: [19, 17, 21, 4836, 576, 5899, 15875, 4832, 2]
// Exports: default

// Module 16185 (UnavailableNotice)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Text_Text from "Text/Text" /* 4832 */;
import FastImageDefault from "FastImage" /* 5899 */;
import AssetRegistryDefault from "AssetRegistry" /* 15875 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, brightTitle: obj3, unavailableContainer: { justifyContent: "center" }, unavailableInfo: { alignItems: "center", justifyContent: "center" }, unavailableDescription: { marginTop: 8, marginHorizontal: 16, textAlign: "center" }, joinCtaTitle: { alignSelf: "center", marginTop: 16, paddingHorizontal: 24, textAlign: "center" } };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles = createStyles.createStyles;
obj3 = { color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
let closure_6 = createStyles(obj);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/UnavailableNotice.tsx");

export default function UnavailableNotice(brightTitle) {
  let description;
  let items;
  let items1;
  let obj2;
  let title;
  let tmp4;
  brightTitle = brightTitle.brightTitle;
  ({ title, description } = brightTitle);
  const tmp = closure_6();
  const obj = { style: items, children: tmp4(View, obj2) };
  items = [, ];
  ({ container: arr[0], unavailableContainer: arr[1] } = tmp);
  obj2 = { style: tmp.unavailableInfo, children: items1 };
  const obj3 = { source: AssetRegistryDefault };
  const tmp6 = FastImageDefault;
  items1 = [React3(tmp6, obj3), , ];
  const items2 = [tmp.joinCtaTitle, ];
  const Text = Text_Text.Text;
  tmp4 = hasOwnProperty;
  if (brightTitle) {
    brightTitle = tmp.brightTitle;
  }
  items2[1] = brightTitle;
  items1[1] = React3(Text, { variant: "heading-lg/extrabold", color: "text-default", style: items2, children: title });
  const obj4 = { style: tmp.unavailableDescription, variant: "text-sm/medium", color: "text-default", children: description };
  items1[2] = React3(Text_Text.Text, obj4);
  return React3(View, obj);
};
