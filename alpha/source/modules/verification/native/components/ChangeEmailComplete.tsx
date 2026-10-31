// Module ID: 7168
// Function ID: 7169
// Name: ChangeEmailComplete
// Dependencies: [19, 17, 6997, 21, 5014, 575, 6995, 5717, 7078, 5624, 1113, 5634, 2]
// Exports: default

// Module 7168 (ChangeEmailComplete)
import nativeDefault from "native" /* 575 */;
import intl5 from "intl" /* 1113 */;
import Text_Text from "Text/Text" /* 5624 */;
import components_Button_Button from "components/Button/Button" /* 5634 */;
import FastImageDefault from "FastImage" /* 5717 */;
import EmailVerificationModalActionCreatorsDefault from "EmailVerificationModalActionCreators" /* 6995 */;
import ChangeEmailStore from "ChangeEmailStore" /* 6997 */;
import AssetRegistryDefault from "AssetRegistry" /* 7078 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
function handlePress() {
  resetChangeEmailStore();
  const obj = EmailVerificationModalActionCreatorsDefault;
  obj.close();
}
({ View: c3, ScrollView: closure_4 } = react_native);
const resetChangeEmailStore = ChangeEmailStore.resetChangeEmailStore;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { contentContainer: obj2, image: { height: 190, width: 220, resizeMode: "contain" }, title: { textAlign: "center" }, body: { textAlign: "center" }, bodyInner: { gap: 2 }, tooltip: obj3 };
obj2 = { flexGrow: 2, paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16, gap: 20, alignItems: "center" };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, width: "100%", padding: 12, borderWidth: 1, borderStyle: "solid", borderRadius: nativeDefault.radii.sm, borderColor: nativeDefault.colors.BORDER_SUBTLE };
const merged = Object.assign(nativeDefault.shadows.SHADOW_LOW);
let closure_8 = createStyles(obj);
const result = size.fileFinishedImporting("modules/verification/native/components/ChangeEmailComplete.tsx");

export default function ChangeEmailComplete(email) {
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items;
  let items1;
  email = email.email;
  const tmp = closure_8();
  const obj = { keyboardShouldPersistTaps: "handled", alwaysBounceVertical: false, contentContainerStyle: tmp.contentContainer, children: items };
  const obj2 = { style: tmp.image, source: AssetRegistryDefault };
  const tmp2 = FastImageDefault;
  items = [metroRequire(tmp2, obj2), , , ];
  const obj3 = { style: tmp.bodyInner, children: items1 };
  const obj4 = { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: intl.string(intl5.t["8O+nF7"]) };
  const Text = Text_Text.Text;
  intl = intl5.intl;
  items1 = [metroRequire(Text, obj4), ];
  const obj5 = { style: tmp.body, variant: "text-sm/medium", color: "text-default", children: intl2.format(intl5.t.Zvx0O3, { email }) };
  const Text2 = Text_Text.Text;
  intl2 = intl5.intl;
  items1[1] = metroRequire(Text2, obj5);
  items[1] = metroImportDefault(_false, obj3);
  const obj6 = { style: tmp.tooltip, variant: "text-sm/normal", children: intl3.string(intl5.t.yb7itQ) };
  const Text3 = Text_Text.Text;
  intl3 = intl5.intl;
  items[2] = metroRequire(Text3, obj6);
  const obj7 = { text: intl4.string(intl5.t.BddRzS), onPress: handlePress, grow: true };
  const Button = components_Button_Button.Button;
  intl4 = intl5.intl;
  items[3] = metroRequire(Button, obj7);
  return metroImportDefault(React3, obj);
};
