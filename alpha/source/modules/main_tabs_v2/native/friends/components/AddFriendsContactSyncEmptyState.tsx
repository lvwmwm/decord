// Module ID: 18796
// Function ID: 18797
// Name: AddFriendsContactSyncEmptyState
// Dependencies: [19, 17, 21, 5009, 575, 18797, 5619, 1114, 14198, 5629, 14194, 2]
// Exports: default

// Module 18796 (AddFriendsContactSyncEmptyState)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl4 from "intl" /* 1114 */;
import Text_Text from "Text/Text" /* 5619 */;
import components_Button_Button from "components/Button/Button" /* 5629 */;
import ContactSyncModalActionCreators from "ContactSyncModalActionCreators" /* 14194 */;
import ContactSyncUtils from "ContactSyncUtils" /* 14198 */;
import CompassSpotIllustration from "CompassSpotIllustration" /* 18797 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
const View = react_native.View;
({ jsx: c3, jsxs: closure_4 } = Fragment);
let createStyles = createStyles_mod;
let obj = { content: obj2, headerIllustration: obj3, title: obj4, subtitle: obj5, subtitleText: { textAlign: "center" }, trailing: obj6 };
obj2 = { alignItems: "center", marginTop: nativeDefault.space.PX_24, marginHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_12, backgroundColor: nativeDefault.colors.CARD_BACKGROUND_DEFAULT, borderRadius: nativeDefault.radii.lg };
createStyles = createStyles.createStyles;
obj3 = { marginTop: nativeDefault.space.PX_24, marginBottom: nativeDefault.space.PX_16 };
obj4 = { marginBottom: nativeDefault.space.PX_8, width: "100%", textAlign: "center" };
obj5 = { marginBottom: nativeDefault.space.PX_24, paddingHorizontal: nativeDefault.space.PX_48, width: "100%", alignContent: "center" };
obj6 = { width: "100%", paddingBottom: nativeDefault.space.PX_4, paddingHorizontal: nativeDefault.space.PX_12 };
let closure_5 = createStyles(obj);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/friends/components/AddFriendsContactSyncEmptyState.tsx");

export default function AddFriendsContactSyncEmptyState() {
  let Button;
  let OXdOPf;
  let Text;
  let format;
  let intl;
  let intl3;
  let items;
  let obj5;
  let obj6;
  let obj8;
  const tmp = closure_5();
  let obj = { style: tmp.content, children: items };
  items = [, , , ];
  const obj2 = { style: tmp.headerIllustration, children: _false(CompassSpotIllustration.CompassSpotIllustration, { width: 240, accessible: false }) };
  items[0] = _false(View, obj2);
  const obj3 = { style: tmp.title, variant: "heading-lg/bold", color: "mobile-text-heading-primary", children: intl.string(intl4.t["/G+nci"]) };
  const Heading = Text_Text.Heading;
  intl = intl4.intl;
  items[1] = _false(Heading, obj3);
  const obj4 = { style: tmp.subtitle, children: _false(Text, obj5) };
  obj5 = { style: tmp.subtitleText, variant: "text-sm/medium", children: format(OXdOPf, obj6) };
  Text = Text_Text.Text;
  const intl2 = intl4.intl;
  format = intl2.format;
  obj6 = { learnMoreHook: ContactSyncUtils.handleOpenLearnMoreLink };
  OXdOPf = intl4.t.OXdOPf;
  items[2] = _false(View, obj4);
  const obj7 = { style: tmp.trailing, children: _false(Button, obj8) };
  obj8 = {
    variant: "primary",
    size: "lg",
    text: intl3.string(intl4.t.QUXSpo),
    onPress: function handleNext() {
      const obj = ContactSyncModalActionCreators;
      obj.openContactSyncModal({}, "Add Friends Contact Sync Empty State");
    }
  };
  Button = components_Button_Button.Button;
  intl3 = intl4.intl;
  items[3] = _false(View, obj7);
  return React3(View, obj);
};
