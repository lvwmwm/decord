// Module ID: 14942
// Function ID: 14943
// Name: WebAuthnSuccessStep
// Dependencies: [19, 21, 558, 568, 1488, 5839, 14928, 14943, 1119, 2]

// Module 14942 (WebAuthnSuccessStep)
import NavigatorHeader from "NavigatorHeader" /* 5839 */;
import PasskeyUpsellActionCreatorsDefault from "PasskeyUpsellActionCreators" /* 14928 */;
import UserSettingsAccountBackupCodesDefault from "UserSettingsAccountBackupCodes" /* 14943 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/webauthn/native/nav_steps/WebAuthnSuccessStep.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = navigation(568).c(4);
  let obj = navigation(568);
  navigation = navigation(1488).useNavigation();
  if (cResult[0] !== navigation) {
    const fn = function s() {
      const obj = {
        headerLeft: NavigatorHeader.getHeaderCloseButton(() => {
          navigation.popToTop();
          const result = PasskeyUpsellActionCreatorsDefault.closePasskeyUpsellModal();
        })
      };
      navigation.setOptions(obj);
    };
    const items = [navigation];
    cResult[0] = navigation;
    cResult[1] = fn;
    cResult[2] = items;
    let tmp6 = items;
    let tmp5 = fn;
  } else {
    tmp5 = cResult[1];
    tmp6 = cResult[2];
  }
  const layoutEffect = noop.useLayoutEffect(tmp5, tmp6);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { onGenerate: null, headerLabel: null };
    const intl = tmp(1119).intl;
    obj3.headerLabel = intl.format(tmp(1119).t.iVTs6i, {});
    const tmp12 = jsx(UserSettingsAccountBackupCodesDefault, { onGenerate: null, headerLabel: null });
    cResult[3] = tmp12;
    let tmp8 = tmp12;
  } else {
    tmp8 = cResult[3];
  }
  return tmp8;
}) : (() => {
  navigation = navigation(1488).useNavigation();
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
  let obj = navigation(1488);
  const intl = navigation(1119).intl;
  obj2.headerLabel = intl.format(navigation(1119).t.iVTs6i, {});
  return jsx(UserSettingsAccountBackupCodesDefault, { onGenerate: null, headerLabel: null });
});
