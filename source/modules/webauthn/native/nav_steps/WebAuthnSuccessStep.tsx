// Module ID: 14678
// Function ID: 14679
// Name: WebAuthnSuccessStep
// Dependencies: [19, 21, 1483, 5624, 14663, 14679, 1114, 2]
// Exports: default

// Module 14678 (WebAuthnSuccessStep)
import CodeRowDefault from "CodeRow" /* 14679 */;
import closure_3 from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
let result = require("set").fileFinishedImporting("modules/webauthn/native/nav_steps/WebAuthnSuccessStep.tsx");

export default function WebAuthnSuccessStep() {
  let obj = navigation(1483);
  navigation = obj.useNavigation();
  const items = [navigation];
  const layoutEffect = React.useLayoutEffect(() => {
    const obj = {
      headerLeft: navigation(closure_1_2[3]).getHeaderCloseButton(() => {
        closure_0.popToTop();
        const result = closure_1_1(closure_1_2[4]).closePasskeyUpsellModal();
      })
    };
    navigation.setOptions(obj);
  }, items);
  obj = { onGenerate: null, headerLabel: null };
  const intl = navigation(1114).intl;
  obj[1] = intl.format(navigation(1114).t.iVTs6i, {});
  return jsx(CodeRowDefault, { onGenerate: null, headerLabel: null });
};
