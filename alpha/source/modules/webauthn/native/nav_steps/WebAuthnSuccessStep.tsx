// Module ID: 14953
// Function ID: 14954
// Name: WebAuthnSuccessStep
// Dependencies: [19, 21, 1484, 5841, 14939, 14954, 1115, 2]
// Exports: default

// Module 14953 (WebAuthnSuccessStep)
import NavigatorHeader from "NavigatorHeader" /* 5841 */;
import PasskeyUpsellActionCreatorsDefault from "PasskeyUpsellActionCreators" /* 14939 */;
import UserSettingsAccountBackupCodesDefault from "UserSettingsAccountBackupCodes" /* 14954 */;
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
