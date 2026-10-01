// Module ID: 14325
// Function ID: 14326
// Name: TwoFASetupSuccess
// Dependencies: [5, 32, 19, 17, 21, 4836, 576, 6014, 1115, 14315, 6368, 14316, 14326, 4832, 1177, 5281, 2]
// Exports: default

// Module 14325 (TwoFASetupSuccess)
import nativeDefault from "native" /* 576 */;
import intl5 from "intl" /* 1115 */;
import native from "native" /* 1177 */;
import Text_Text from "Text/Text" /* 4832 */;
import components_Button_Button from "components/Button/Button" /* 5281 */;
import NativeCeremoniesDefault from "NativeCeremonies" /* 6368 */;
import TwoFASetupModal from "TwoFASetupModal" /* 14316 */;
import AssetRegistry from "AssetRegistry" /* 14326 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let c9;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let size;
({ View: metroRequire, Image: metroImportDefault } = react_native);
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { alignSelf: "stretch", flex: 1, alignItems: "center", justifyContent: "flex-start", flexDirection: "column" }, flex: { flex: 1 }, image: { width: 190, height: 70 }, success: { marginTop: 33 }, successBody: obj2, divider: size, buttonWrapper: { alignSelf: "stretch", margin: 16, marginTop: 0 }, ctaDescription: obj3, errorText: obj4 };
obj2 = { fontSize: 14, textAlign: "center", marginHorizontal: 20, marginTop: 4, color: nativeDefault.colors.TEXT_STRONG };
createStyles = createStyles.createStyles;
size = { height: 2, width: 48, margin: 32, backgroundColor: nativeDefault.colors.BORDER_STRONG };
obj3 = { fontSize: 14, textAlign: "center", marginTop: 4, marginHorizontal: 16, color: nativeDefault.colors.TEXT_STRONG };
obj4 = { fontSize: 14, textAlign: "center", marginHorizontal: 16, marginTop: 8, color: nativeDefault.colors.TEXT_FEEDBACK_CRITICAL };
let closure_10 = createStyles(obj);
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
  let tmp = closure_10();
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
        return "flex";
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
  items = [closure_8(closure_6, obj2), , , , , , , ];
  const obj3 = { source: AssetRegistry, style: tmp.image };
  items[1] = closure_8(closure_7, obj3);
  const obj4 = { style: tmp.success, variant: "text-lg/semibold", color: "mobile-text-heading-primary", children: intl.string(intl5.t.Awk3Gw) };
  const Text = Text_Text.Text;
  intl = intl5.intl;
  items[2] = closure_8(Text, obj4);
  const obj5 = { style: tmp.successBody, children: intl2.string(intl5.t["0d1bXM"]) };
  const LegacyText = native.LegacyText;
  intl2 = intl5.intl;
  items[3] = closure_8(LegacyText, obj5);
  let obj6 = { style: tmp.divider };
  items[4] = closure_8(closure_6, obj6);
  const obj7 = { style: tmp.ctaDescription, children: intl3.string(intl5.t.okgGTu) };
  const LegacyText2 = native.LegacyText;
  intl3 = intl5.intl;
  items[5] = closure_8(LegacyText2, obj7);
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
  const obj10 = { children: closure_9(closure_6, obj) };
  items[6] = closure_9(closure_6, obj8);
  const obj11 = { style: tmp.flex };
  items[7] = closure_8(closure_6, obj11);
  return closure_8(TwoFASetupModalScreen, obj10);
};
