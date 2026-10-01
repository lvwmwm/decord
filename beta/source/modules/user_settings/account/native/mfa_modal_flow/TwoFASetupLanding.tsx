// Module ID: 14319
// Function ID: 14320
// Name: TwoFASetupLanding
// Dependencies: [19, 17, 21, 4836, 14320, 14316, 6544, 14321, 4832, 1115, 2]
// Exports: default

// Module 14319 (TwoFASetupLanding)
import intl3 from "intl" /* 1115 */;
import Text_Text from "Text/Text" /* 4832 */;
import common_SafeAreaView from "common/SafeAreaView" /* 6544 */;
import TwoFASetupModal from "TwoFASetupModal" /* 14316 */;
import TwoFASetupStyles from "TwoFASetupStyles" /* 14320 */;
import AssetRegistryDefault from "AssetRegistry" /* 14321 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let hasOwnProperty;
let metroRequire;
({ Image: c3, View: closure_4 } = react_native);
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let closure_7 = createStyles.createStyles({ container: { flex: 1, alignItems: "center", justifyContent: "center" }, authIcon: { width: 120, height: 120, marginBottom: 32 } });
const result = size.fileFinishedImporting("modules/user_settings/account/native/mfa_modal_flow/TwoFASetupLanding.tsx");

export default function TwoFASetupLanding() {
  let SafeAreaPaddingView;
  let intl;
  let intl2;
  let items;
  let items1;
  let obj3;
  let obj4;
  const tmp = closure_7();
  const obj = TwoFASetupStyles;
  const twoFASetupStyles = obj.useTwoFASetupStyles();
  const obj2 = { children: hasOwnProperty(React3, obj3) };
  obj3 = { style: tmp.container, children: metroRequire(SafeAreaPaddingView, obj4) };
  const TwoFASetupModalScreen = TwoFASetupModal.TwoFASetupModalScreen;
  obj4 = { bottom: true, style: tmp.container, children: items };
  const obj5 = { source: AssetRegistryDefault, style: tmp.authIcon };
  SafeAreaPaddingView = common_SafeAreaView.SafeAreaPaddingView;
  items = [hasOwnProperty(_false, obj5), , ];
  const obj6 = { variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: intl.string(intl3.t["9E74Dx"]) };
  const Heading = Text_Text.Heading;
  intl = intl3.intl;
  items[1] = hasOwnProperty(Heading, obj6);
  const obj7 = { variant: "text-md/normal", style: items1, children: intl2.format(intl3.t.A7Aehw, { googleAuthURL: "https://support.google.com/accounts/answer/1066447?hl=en", authyURL: "https://www.authy.com/" }) };
  items1 = [, ];
  ({ modalBody: arr2[0], text: arr2[1] } = twoFASetupStyles);
  const Text = Text_Text.Text;
  intl2 = intl3.intl;
  items[2] = hasOwnProperty(Text, obj7);
  return hasOwnProperty(TwoFASetupModalScreen, obj2);
};
