// Module ID: 15040
// Function ID: 15041
// Name: WebAuthnSuccessStep
// Dependencies: [19, 21, 1484, 5927, 15026, 15041, 1115, 2]
// Exports: default

// Module 15040 (WebAuthnSuccessStep)
import NavigatorHeader from "NavigatorHeader" /* 5927 */;
import PasskeyUpsellActionCreatorsDefault from "PasskeyUpsellActionCreators" /* 15026 */;
import UserSettingsAccountBackupCodesDefault from "UserSettingsAccountBackupCodes" /* 15041 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/webauthn/native/nav_steps/WebAuthnSuccessStep.tsx");

export default function WebAuthnSuccessStep() {
  navigation = navigation(1484).useNavigation();
  const items = [navigation];
  const layoutEffect = noop.useLayoutEffect(() => {
    const obj = {
      headerLeft: NavigatorHeader.getHeaderCloseButton(() => {
        navigation.popToTop();
        const result = PasskeyUpsellActionCreatorsDefault.closePasskeyUpsellModal();
      })
    };
    navigation.setOptions(obj);
  }, items);
  const obj2 = { onGenerate: null, headerLabel: null };
  let obj = navigation(1484);
  const intl = navigation(1115).intl;
  obj2.headerLabel = intl.format(navigation(1115).t.iVTs6i, {});
  return jsx(UserSettingsAccountBackupCodesDefault, { onGenerate: null, headerLabel: null });
};
