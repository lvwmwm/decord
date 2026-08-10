// Module ID: 13989
// Function ID: 13990
// Name: WebAuthnSuccessStep
// Dependencies: [19, 21, 1480, 5270, 13974, 13990, 1236, 2]
// Exports: default

// Module 13989 (WebAuthnSuccessStep)
import noop from "noop";
import { jsx } from "jsxProd";

const require = arg1;
let result = require("useNavigation").fileFinishedImporting("modules/webauthn/native/nav_steps/WebAuthnSuccessStep.tsx");

export default function WebAuthnSuccessStep() {
  let obj = navigation(1480);
  navigation = obj.useNavigation();
  const items = [navigation];
  const layoutEffect = React.useLayoutEffect(() => {
    const obj = { headerLeft: null };
    obj[0] = navigation(outer1_2[3]).getHeaderCloseButton(() => {
      closure_0.popToTop();
      const result = outer1_1(outer1_2[4]).closePasskeyUpsellModal();
    });
    navigation.setOptions(obj);
  }, items);
  obj = { onGenerate: null, headerLabel: null };
  const intl = navigation(1236).intl;
  obj[1] = intl.format(navigation(1236).t.iVTs6i, {});
  return jsx(importDefault(13990), { onGenerate: null, headerLabel: null });
};
