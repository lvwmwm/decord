// Module ID: 5849
// Function ID: 5850
// Name: MemberVerificationAlert
// Dependencies: [19, 17, 21, 4836, 576, 5300, 4832, 2]
// Exports: default

// Module 5849 (MemberVerificationAlert)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Text_Text from "Text/Text" /* 4832 */;
import AlertDefault from "Alert" /* 5300 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let obj = { headerImage: obj2, header: { marginTop: 8, marginBottom: 8, textAlign: "center" }, subtitle: { lineHeight: 18, marginBottom: 8, textAlign: "center" }, buttons: { marginTop: 16, marginBottom: 8, gap: 12 } };
obj2 = { marginLeft: "auto", marginRight: "auto", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, borderRadius: nativeDefault.radii.round, padding: 12, marginTop: 8, marginBottom: 8 };
let closure_6 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/guild_member_verification/native/components/alerts/MemberVerificationAlert.tsx");

export default function MemberVerificationAlert(arg0) {
  let buttons;
  let header;
  let icon;
  let items;
  let subtitle;
  ({ icon, subtitle } = arg0);
  ({ header, buttons } = arg0);
  const merged = Object.assign(arg0, Object.assign({ header: 0, icon: 0, subtitle: 0, buttons: 0 }));
  const tmp2 = closure_6();
  const obj = { noDefaultButtons: true, children: items };
  const tmp5 = AlertDefault;
  const merged1 = Object.assign(merged);
  let tmp7 = null;
  const tmp3 = hasOwnProperty;
  if (null != icon) {
    const obj2 = { style: tmp2.headerImage, children: React3(icon, { size: "lg" }) };
    tmp7 = React3(View, obj2);
  }
  items = [tmp7, , , ];
  const obj3 = { style: tmp2.header, variant: "heading-lg/bold", color: "mobile-text-heading-primary", children: header };
  items[1] = React3(Text_Text.Heading, obj3);
  let tmp10Result = null;
  if (null != subtitle) {
    const obj4 = { style: tmp2.subtitle, variant: "text-sm/medium", color: "text-default", children: subtitle };
    tmp10Result = tmp10(Text_Text.Text, obj4);
  }
  items[2] = tmp10Result;
  const obj5 = { style: tmp2.buttons, children: buttons };
  items[3] = React3(View, obj5);
  return tmp3(tmp5, obj);
};
