// Module ID: 17012
// Function ID: 17013
// Name: TwoFASetupEnterCode
// Dependencies: [32, 19, 2117, 17006, 21, 5170, 17009, 1499, 504, 7222, 17013, 1113, 17005, 7388, 1187, 17014, 7055, 2]
// Exports: default

// Module 17012 (TwoFASetupEnterCode)
import MFAUtils from "MFAUtils" /* 7222 */;
import TwoFAConstants from "TwoFAConstants" /* 17006 */;
import MFAActionCreatorsDefault from "MFAActionCreators" /* 17013 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import AppStateStore from "AppStateStore" /* 2117 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5170 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, current, importDefault, navigation;

let metroImportAll;
let metroImportDefault;
const TwoFAModalSetupSections = TwoFAConstants.TwoFAModalSetupSections;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let closure_9 = createStyles.createStyles({ container: { flex: 1, justifyContent: "center", alignItems: "center" } });
const result = size.fileFinishedImporting("modules/user_settings/account/native/mfa_modal_flow/TwoFASetupEnterCode.tsx");

export default function TwoFASetupEnterCode(set) {
  let SafeAreaPaddingView;
  let closure_3;
  let first;
  let intl;
  let items2;
  let items3;
  let obj5;
  let ref;
  let ref1;
  _require = set;
  let tmp = closure_9();
  let obj = require("TwoFASetupStyles");
  const twoFASetupStyles = obj.useTwoFASetupStyles();
  importDefault = ref.useRef(set);
  const effect = ref.useEffect(() => {
    ref.current = current;
  });
  let obj2 = require("useNavigation");
  navigation = obj2.useNavigation();
  let obj3 = require("get initialized");
  const items = [ref1];
  const stateFromStores = obj3.useStateFromStores(items, () => ref1.getState());
  [first, _slicedToArray] = ref.useState(false);
  ref = ref.useRef(null);
  ref1 = ref.useRef(null);
  const items1 = [navigation];
  const callback = ref.useCallback((code) => {
    const totpSecret = ref.current.totpSecret;
    const obj = MFAUtils;
    const encodeTotpSecretResult = obj.encodeTotpSecret(totpSecret);
    closure_3(true);
    const obj2 = MFAActionCreatorsDefault;
    const obj3 = { code, secret: encodeTotpSecretResult };
    const enableResult = obj2.enable(obj3);
    const nextPromise = enableResult.then(() => {
      navigation.push(constants.SUCCESS);
    });
    nextPromise.catch((error) => {
      let message;
      const tmp = closure_1_4;
      if (null != error.body) {
        message = error.body.message;
      } else {
        const intl = closure_0(navigation[11]).intl;
        message = intl.string(closure_0(navigation[11]).t["1u5B+G"]);
      }
      tmp.current = message;
      current = ref.current;
      if (current != null) {
        current.clear();
      }
      closure_1_3(false);
    });
  }, items1);
  const obj4 = { children: closure_8(SafeAreaPaddingView, obj5) };
  const TwoFASetupModalScreen = require("TwoFASetupModal").TwoFASetupModalScreen;
  obj5 = { bottom: true, style: tmp.container, children: items3 };
  SafeAreaPaddingView = require("common/SafeAreaView").SafeAreaPaddingView;
  const obj6 = { style: items2, children: intl.string(require("intl").t.HZPBOd) };
  items2 = [, ];
  ({ modalHeader: arr3[0], text: arr3[1] } = twoFASetupStyles);
  const LegacyText = require("native").LegacyText;
  intl = require("intl").intl;
  items3 = [closure_7(LegacyText, obj6), ];
  const obj7 = { style: { maxHeight: 520 }, ref: ref1, showActivityIndicator: first, handleSubmit: callback, error: require("useRefValue")(ref), appState: stateFromStores };
  const tmp11 = require("MFACodeInput");
  items3[1] = closure_7(tmp11, obj7);
  return closure_7(TwoFASetupModalScreen, obj4);
};
