// Module ID: 14239
// Function ID: 14240
// Name: WebAuthnSuccessStep
// Dependencies: [19, 21, 1485, 5936, 14221, 14240, 1115, 2]
// Exports: default

// Module 14239 (WebAuthnSuccessStep)
import Fragment from "Fragment" /* 21 */;
import NavigatorHeader from "NavigatorHeader" /* 5936 */;
import PasskeyUpsellActionCreatorsDefault from "PasskeyUpsellActionCreators" /* 14221 */;
import UserSettingsAccountBackupCodesDefault from "UserSettingsAccountBackupCodes" /* 14240 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let navigation;

const jsx = Fragment.jsx;
let result = size.fileFinishedImporting("modules/webauthn/native/nav_steps/WebAuthnSuccessStep.tsx");

export default function WebAuthnSuccessStep() {
  let obj = navigation(1485);
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
  const intl = navigation(1115).intl;
  return <tmp3 onGenerate={null} headerLabel={intl.format(navigation(1115).t.iVTs6i, {})} />;
};
