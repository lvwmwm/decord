// Module ID: 13645
// Function ID: 104793
// Name: WebAuthnSuccessStep
// Dependencies: [31, 33, 1456, 5087, 13630, 13646, 1212, 2]
// Exports: default

// Module 13645 (WebAuthnSuccessStep)
import result from "result";
import { jsx } from "jsxProd";

const require = arg1;
let result = require("useNavigation").fileFinishedImporting("modules/webauthn/native/nav_steps/WebAuthnSuccessStep.tsx");

export default function WebAuthnSuccessStep() {
  let obj = navigation(1456);
  navigation = obj.useNavigation();
  const items = [navigation];
  const layoutEffect = React.useLayoutEffect(() => {
    const obj = {
      headerLeft: navigation(outer1_2[3]).getHeaderCloseButton(() => {
        outer1_0.popToTop();
        const result = outer2_1(outer2_2[4]).closePasskeyUpsellModal();
      })
    };
    navigation.setOptions(obj);
  }, items);
  obj = { onGenerate: null };
  const intl = navigation(1212).intl;
  obj.headerLabel = intl.format(navigation(1212).t.iVTs6i, {});
  return jsx(importDefault(13646), { onGenerate: null });
};
