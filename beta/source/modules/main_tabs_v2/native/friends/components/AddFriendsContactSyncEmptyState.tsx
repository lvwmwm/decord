// Module ID: 16591
// Function ID: 16592
// Name: AddFriendsContactSyncEmptyState
// Dependencies: [19, 17, 21, 4836, 576, 12190, 4832, 1115, 12177, 5281, 12173, 2]
// Exports: default

// Module 16591 (AddFriendsContactSyncEmptyState)
import nativeDefault from "native" /* 576 */;
import intl4 from "intl" /* 1115 */;
import Text_Text from "Text/Text" /* 4832 */;
import components_Button_Button from "components/Button/Button" /* 5281 */;
import ContactSyncModalActionCreators from "ContactSyncModalActionCreators" /* 12173 */;
import ContactSyncUtils from "ContactSyncUtils" /* 12177 */;
import AssetRegistryDefault from "AssetRegistry" /* 12190 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let c3;
let closure_4;
let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let size;
({ View: c3, Image: closure_4 } = react_native);
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { content: obj2, headerImage: size, title: obj3, subtitle: obj4, subtitleText: { textAlign: "center" }, trailing: obj5 };
obj2 = { alignItems: "center", marginTop: nativeDefault.space.PX_24, marginHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_12, backgroundColor: nativeDefault.colors.CARD_BACKGROUND_DEFAULT, borderRadius: nativeDefault.radii.lg };
createStyles = createStyles.createStyles;
size = { height: 135, width: 216, marginTop: nativeDefault.space.PX_24, marginBottom: nativeDefault.space.PX_16 };
obj3 = { marginBottom: nativeDefault.space.PX_8, width: "100%", textAlign: "center" };
obj4 = { marginBottom: nativeDefault.space.PX_24, paddingHorizontal: nativeDefault.space.PX_48, width: "100%", alignContent: "center" };
obj5 = { width: "100%", paddingBottom: nativeDefault.space.PX_4, paddingHorizontal: nativeDefault.space.PX_12 };
let closure_7 = createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/friends/components/AddFriendsContactSyncEmptyState.tsx");

export default function AddFriendsContactSyncEmptyState() {
  let Button;
  let OXdOPf;
  let Text2;
  let format;
  let intl;
  let intl3;
  let items;
  let obj5;
  let obj6;
  let obj8;
  const tmp = closure_7();
  let obj = { style: tmp.content, children: items };
  items = [, , , ];
  const obj2 = { resizeMode: "contain", style: tmp.headerImage, source: AssetRegistryDefault };
  items[0] = hasOwnProperty(React3, obj2);
  const obj3 = { style: tmp.title, variant: "heading-lg/bold", color: "mobile-text-heading-primary", children: intl.string(intl4.t["/G+nci"]) };
  const Text = Text_Text.Text;
  intl = intl4.intl;
  items[1] = hasOwnProperty(Text, obj3);
  const obj4 = { style: tmp.subtitle, children: hasOwnProperty(Text2, obj5) };
  obj5 = { style: tmp.subtitleText, variant: "text-sm/medium", children: format(OXdOPf, obj6) };
  Text2 = Text_Text.Text;
  const intl2 = intl4.intl;
  format = intl2.format;
  obj6 = { learnMoreHook: ContactSyncUtils.handleOpenLearnMoreLink };
  OXdOPf = intl4.t.OXdOPf;
  items[2] = hasOwnProperty(_false, obj4);
  const obj7 = { style: tmp.trailing, children: hasOwnProperty(Button, obj8) };
  obj8 = {
    variant: "primary",
    size: "lg",
    text: intl3.string(intl4.t.QUXSpo),
    onPress() {
      const obj = ContactSyncModalActionCreators;
      obj.openContactSyncModal({}, "Add Friends Contact Sync Empty State");
    }
  };
  Button = components_Button_Button.Button;
  intl3 = intl4.intl;
  items[3] = hasOwnProperty(_false, obj7);
  return metroRequire(_false, obj);
};
