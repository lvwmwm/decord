// Module ID: 11626
// Function ID: 11627
// Name: PublicGuildAnnouncementProfile
// Dependencies: [19, 17, 21, 5009, 575, 5267, 5712, 8494, 1188, 11627, 5619, 1114, 2]
// Exports: default

// Module 11626 (PublicGuildAnnouncementProfile)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl4 from "intl" /* 1114 */;
import native from "native" /* 1188 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 5267 */;
import Text_Text from "Text/Text" /* 5619 */;
import FastImageDefault from "FastImage" /* 5712 */;
import PublicGuildsUtils from "PublicGuildsUtils" /* 8494 */;
import AssetRegistryDefault from "AssetRegistry" /* 11627 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5009 */;
import size_mod from "module_2" /* 2 */;

let BottomSheet;

let closure_4;
let hasOwnProperty;
let size;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let obj = { content: { padding: 16 }, avatar: size, nameWrapper: { flexDirection: "row", alignItems: "center" }, headerText: { marginLeft: 8 }, description: { marginTop: 8 } };
size = { borderRadius: nativeDefault.radii.lg, height: 80, width: 80, marginVertical: 16 };
let closure_6 = createStyles.createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/public_guilds/native/components/PublicGuildAnnouncementProfile.tsx");

export default function PublicGuildAnnouncementProfile() {
  let intl;
  let intl2;
  let intl3;
  let items;
  let items1;
  let obj2;
  let obj4;
  const tmp = closure_6();
  const obj = { startExpanded: true, children: hasOwnProperty(View, obj2) };
  obj2 = { style: tmp.content, children: items };
  BottomSheet = Sheet_BottomSheet.BottomSheet;
  const obj3 = { style: tmp.avatar, source: obj4.getPublicSystemMessageAvatar() };
  const tmp2 = FastImageDefault;
  obj4 = PublicGuildsUtils;
  items = [React3(tmp2, obj3), , , ];
  const obj5 = { style: tmp.nameWrapper, children: items1 };
  const obj6 = { source: AssetRegistryDefault, disableColor: true };
  const Icon = native.Icon;
  items1 = [React3(Icon, obj6), ];
  const obj7 = { style: tmp.headerText, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: intl.string(intl4.t.xfAlNx) };
  const Text = Text_Text.Text;
  intl = intl4.intl;
  items1[1] = React3(Text, obj7);
  items[1] = hasOwnProperty(View, obj5);
  const obj8 = { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: intl2.string(intl4.t.BUZ0sl) };
  const Text2 = Text_Text.Text;
  intl2 = intl4.intl;
  items[2] = React3(Text2, obj8);
  const obj9 = { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: intl3.string(intl4.t.w5beJH) };
  const Text3 = Text_Text.Text;
  intl3 = intl4.intl;
  items[3] = React3(Text3, obj9);
  return React3(BottomSheet, obj);
};
