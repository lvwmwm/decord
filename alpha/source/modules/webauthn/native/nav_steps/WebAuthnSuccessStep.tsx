// Module ID: 16592
// Function ID: 16593
// Name: WebAuthnSuccessStep
// Dependencies: [19, 21, 558, 576, 16568, 1125, 2]

// Module 16592 (WebAuthnSuccessStep)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import intl2 from "intl" /* 1125 */;
import UserSettingsAccountBackupCodesDefault from "UserSettingsAccountBackupCodes" /* 16568 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function WebAuthnSuccessStep() {
  let first;
  const obj = react2;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    UserSettingsAccountBackupCodesDefault;
    const intl = tmp(1125).intl;
    const tmp8 = <tmp7 onGenerate={null} headerLabel={intl.format(intl2.t.iVTs6i, {})} />;
    cResult[0] = tmp8;
    first = tmp8;
  } else {
    first = cResult[0];
  }
  return first;
}) : (function WebAuthnSuccessStep() {
  UserSettingsAccountBackupCodesDefault;
  const intl = intl2.intl;
  return <tmp onGenerate={null} headerLabel={intl.format(intl2.t.iVTs6i, {})} />;
});
const result = size.fileFinishedImporting("modules/webauthn/native/nav_steps/WebAuthnSuccessStep.tsx");

export default tmp3;
