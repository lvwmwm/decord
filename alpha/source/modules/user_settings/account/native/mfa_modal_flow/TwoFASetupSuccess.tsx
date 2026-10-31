// Module ID: 16654
// Function ID: 16655
// Name: TwoFASetupSuccess
// Dependencies: [5, 32, 19, 17, 21, 5014, 575, 6748, 1113, 16643, 7116, 16644, 5717, 16655, 5624, 1187, 5634, 2]
// Exports: default

// Module 16654 (TwoFASetupSuccess)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl5 from "intl" /* 1113 */;
import native from "native" /* 1187 */;
import Text_Text from "Text/Text" /* 5624 */;
import components_Button_Button from "components/Button/Button" /* 5634 */;
import FastImageDefault from "FastImage" /* 5717 */;
import NativeCeremoniesDefault from "NativeCeremonies" /* 7116 */;
import TwoFASetupModal from "TwoFASetupModal" /* 16644 */;
import AssetRegistry from "AssetRegistry" /* 16655 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size_mod from "module_2" /* 2 */;

let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
let size;
const View = react_native.View;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { alignSelf: "stretch", flex: 1, alignItems: "center", justifyContent: "flex-start", flexDirection: "column" }, flex: { flex: 1 }, image: { width: 190, height: 70 }, success: { marginTop: 33 }, successBody: obj2, divider: size, buttonWrapper: { alignSelf: "stretch", margin: 16, marginTop: 0 }, ctaDescription: obj3, errorText: obj4 };
obj2 = { fontSize: 14, textAlign: "center", marginHorizontal: 20, marginTop: 4, color: nativeDefault.colors.TEXT_STRONG };
createStyles = createStyles.createStyles;
size = { height: 2, width: 48, margin: 32, backgroundColor: nativeDefault.colors.BORDER_STRONG };
obj3 = { fontSize: 14, textAlign: "center", marginTop: 4, marginHorizontal: 16, color: nativeDefault.colors.TEXT_STRONG };
obj4 = { fontSize: 14, textAlign: "center", marginHorizontal: 16, marginTop: 8, color: nativeDefault.colors.TEXT_FEEDBACK_CRITICAL };
let closure_9 = createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/user_settings/account/native/mfa_modal_flow/TwoFASetupSuccess.tsx");

export default function TwoFASetupSuccess() {
  let intl;
  let intl2;
  let intl3;
  let items;
  let items1;
  let setError;
  let stringResult;
  let tmp3;
  let tmp5;
  let tmp = closure_9();
  [tmp3, require] = _slicedToArray(react.useState(false), 2);
  const tmp2 = _slicedToArray(react.useState(false), 2);
  [tmp5, importDefault] = _slicedToArray(react.useState(""), 2);
  const tmp4 = _slicedToArray(react.useState(""), 2);
  const callback = react.useCallback(() => {
    let setRegistering = function _onRegisterSuccess() {
      let obj = _asyncToGenerator(async (arg0, value) => {
        let c0;
        let c1;
        let closure_2;
        let obj;
        let closure_0 = arg0;
        const finishRegisterWebAuthnCredential = setRegistering(closure_2_2[7]).finishRegisterWebAuthnCredential;
        const tmp24 = setRegistering(closure_2_2[7]);
        const intl = setRegistering(closure_2_2[8]).intl;
        await finishRegisterWebAuthnCredential(intl.string(setRegistering(closure_2_2[8]).t["8H5RmH"]), c0, c1);
        if (2 === c5) {
          let c4 = 0;
          obj(body.body.message);
        } else if (arg0 === 1) {
          let c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          c6 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          obj = setError(closure_2_2[9]);
          obj.close();
          c4 = 0;
        }
        await "HermesInternal";
        ({ ticket: c0, credential: c1 } = closure_0);
        return "flexDirection";
      });
      return obj(...arguments);
    };
    const tmp = importDefault("");
    setRegistering = NativeCeremoniesDefault;
    const obj2 = {
      setRegistering,
      setError: importDefault,
      onRegisterSuccess(arg0) {
        return obj(...arguments);
      }
    };
    setRegistering.registerPasskey(obj2);
  }, []);
  let obj = { style: tmp.container, children: items };
  let obj2 = { style: tmp.flex };
  const TwoFASetupModalScreen = TwoFASetupModal.TwoFASetupModalScreen;
  items = [closure_7(View, obj2), , , , , , , ];
  const obj3 = { source: AssetRegistry, style: tmp.image };
  const tmp12 = FastImageDefault;
  items[1] = closure_7(tmp12, obj3);
  const obj4 = { style: tmp.success, variant: "text-lg/semibold", color: "mobile-text-heading-primary", children: intl.string(intl5.t.Awk3Gw) };
  const Text = Text_Text.Text;
  intl = intl5.intl;
  items[2] = closure_7(Text, obj4);
  const obj5 = { style: tmp.successBody, children: intl2.string(intl5.t["0d1bXM"]) };
  const LegacyText = native.LegacyText;
  intl2 = intl5.intl;
  items[3] = closure_7(LegacyText, obj5);
  let obj6 = { style: tmp.divider };
  items[4] = closure_7(View, obj6);
  const obj7 = { style: tmp.ctaDescription, children: intl3.string(intl5.t.okgGTu) };
  const LegacyText2 = native.LegacyText;
  intl3 = intl5.intl;
  items[5] = closure_7(LegacyText2, obj7);
  const obj8 = { style: tmp.buttonWrapper, children: items1 };
  const Button = components_Button_Button.Button;
  const intl4 = intl5.intl;
  const string = intl4.string;
  const t = intl5.t;
  if (tmp3) {
    stringResult = string(t.wePEBF);
  } else {
    stringResult = string(t.NIFmCJ);
  }
  items1 = [tmp7(Button, { text: stringResult, onPress: callback, disabled: tmp3, loading: tmp3, grow: true }), ];
  let tmp7Result = "" !== tmp5;
  if (tmp7Result) {
    const obj9 = { style: tmp.errorText, children: tmp5 };
    tmp7Result = tmp7(native.LegacyText, obj9);
  }
  items1[1] = tmp7Result;
  const obj10 = { children: closure_8(View, obj) };
  items[6] = closure_8(View, obj8);
  const obj11 = { style: tmp.flex };
  items[7] = closure_7(View, obj11);
  return closure_7(TwoFASetupModalScreen, obj10);
};
