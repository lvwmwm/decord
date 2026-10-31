// Module ID: 16647
// Function ID: 16648
// Name: TwoFASetupLanding
// Dependencies: [19, 17, 21, 5014, 16648, 16644, 7292, 5717, 16649, 5624, 1113, 2]
// Exports: default

// Module 16647 (TwoFASetupLanding)
import react_native from "react-native" /* 17 */;
import intl3 from "intl" /* 1113 */;
import Text_Text from "Text/Text" /* 5624 */;
import FastImageDefault from "FastImage" /* 5717 */;
import common_SafeAreaView from "common/SafeAreaView" /* 7292 */;
import TwoFASetupModal from "TwoFASetupModal" /* 16644 */;
import TwoFASetupStyles from "TwoFASetupStyles" /* 16648 */;
import AssetRegistryDefault from "AssetRegistry" /* 16649 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let closure_6 = createStyles.createStyles({ container: { flex: 1, alignItems: "center", justifyContent: "center" }, authIcon: { width: 120, height: 120, marginBottom: 32 } });
const result = size.fileFinishedImporting("modules/user_settings/account/native/mfa_modal_flow/TwoFASetupLanding.tsx");

export default function TwoFASetupLanding() {
  let SafeAreaPaddingView;
  let intl;
  let intl2;
  let items;
  let items1;
  let obj3;
  let obj4;
  const tmp = closure_6();
  const obj = TwoFASetupStyles;
  const twoFASetupStyles = obj.useTwoFASetupStyles();
  const obj2 = { children: React3(View, obj3) };
  obj3 = { style: tmp.container, children: hasOwnProperty(SafeAreaPaddingView, obj4) };
  const TwoFASetupModalScreen = TwoFASetupModal.TwoFASetupModalScreen;
  obj4 = { bottom: true, style: tmp.container, children: items };
  SafeAreaPaddingView = common_SafeAreaView.SafeAreaPaddingView;
  const obj5 = { source: AssetRegistryDefault, style: tmp.authIcon };
  const tmp3 = FastImageDefault;
  items = [React3(tmp3, obj5), , ];
  const obj6 = { variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: intl.string(intl3.t["9E74Dx"]) };
  const Heading = Text_Text.Heading;
  intl = intl3.intl;
  items[1] = React3(Heading, obj6);
  const obj7 = { variant: "text-md/normal", style: items1, children: intl2.format(intl3.t.A7Aehw, { googleAuthURL: "https://support.google.com/accounts/answer/1066447?hl=en", authyURL: "https://www.authy.com/" }) };
  items1 = [, ];
  ({ modalBody: arr2[0], text: arr2[1] } = twoFASetupStyles);
  const Text = Text_Text.Text;
  intl2 = intl3.intl;
  items[2] = React3(Text, obj7);
  return React3(TwoFASetupModalScreen, obj2);
};
