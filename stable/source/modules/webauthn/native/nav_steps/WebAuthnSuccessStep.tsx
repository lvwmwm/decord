// Module ID: 14227
// Function ID: 14228
// Name: WebAuthnSuccessStep
// Dependencies: [19, 21, 558, 576, 1491, 5933, 14209, 14228, 1127, 2]

// Module 14227 (WebAuthnSuccessStep)
import Fragment from "Fragment" /* 21 */;
import NavigatorHeader from "NavigatorHeader" /* 5933 */;
import PasskeyUpsellActionCreatorsDefault from "PasskeyUpsellActionCreators" /* 14209 */;
import UserSettingsAccountBackupCodesDefault from "UserSettingsAccountBackupCodes" /* 14228 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let navigation;

const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let tmp5;
  let tmp6;
  let tmp8;
  let obj = navigation(576);
  const cResult = obj.c(4);
  let obj2 = navigation(1491);
  navigation = obj2.useNavigation();
  if (cResult[0] !== navigation) {
    const fn = function s() {
      let obj2;
      let obj = {
        headerLeft: obj2.getHeaderCloseButton(() => {
          navigation.popToTop();
          const obj = PasskeyUpsellActionCreatorsDefault;
          const result = obj.closePasskeyUpsellModal();
        })
      };
      const setOptions = navigation.setOptions;
      obj2 = NavigatorHeader;
      setOptions(obj);
    };
    const items = [navigation];
    cResult[0] = navigation;
    cResult[1] = fn;
    cResult[2] = items;
    tmp6 = items;
    tmp5 = fn;
  } else {
    tmp5 = cResult[1];
    tmp6 = cResult[2];
  }
  const layoutEffect = react.useLayoutEffect(tmp5, tmp6);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    UserSettingsAccountBackupCodesDefault;
    const intl = tmp(1127).intl;
    const tmp12 = <tmp11 onGenerate={null} headerLabel={intl.format(navigation(1127).t.iVTs6i, {})} />;
    cResult[3] = tmp12;
    tmp8 = tmp12;
  } else {
    tmp8 = cResult[3];
  }
  return tmp8;
}) : (() => {
  let obj = navigation(1491);
  navigation = obj.useNavigation();
  const items = [navigation];
  const layoutEffect = react.useLayoutEffect(() => {
    let obj2;
    let obj = {
      headerLeft: obj2.getHeaderCloseButton(() => {
        navigation.popToTop();
        const obj = PasskeyUpsellActionCreatorsDefault;
        const result = obj.closePasskeyUpsellModal();
      })
    };
    const setOptions = navigation.setOptions;
    obj2 = NavigatorHeader;
    setOptions(obj);
  }, items);
  UserSettingsAccountBackupCodesDefault;
  const intl = navigation(1127).intl;
  return <tmp3 onGenerate={null} headerLabel={intl.format(navigation(1127).t.iVTs6i, {})} />;
});
let result = size.fileFinishedImporting("modules/webauthn/native/nav_steps/WebAuthnSuccessStep.tsx");

export default tmp2;
