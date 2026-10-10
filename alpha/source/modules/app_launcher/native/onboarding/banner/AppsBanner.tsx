// Module ID: 11739
// Function ID: 11740
// Name: AppsBanner
// Dependencies: [19, 21, 558, 576, 11737, 1126, 2]

// Module 11739 (AppsBanner)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import intl2 from "intl" /* 1126 */;
import BannerBaseDefault from "BannerBase" /* 11737 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function AppsBaner() {
  let first;
  const obj = react2;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    BannerBaseDefault;
    const intl = tmp(1126).intl;
    const tmp8 = <tmp7 text={intl.string(intl2.t.sjRwMJ)} />;
    cResult[0] = tmp8;
    first = tmp8;
  } else {
    first = cResult[0];
  }
  return first;
}) : (function AppsBaner() {
  BannerBaseDefault;
  const intl = intl2.intl;
  return <tmp text={intl.string(intl2.t.sjRwMJ)} />;
});
const result = size.fileFinishedImporting("modules/app_launcher/native/onboarding/banner/AppsBanner.tsx");

export default tmp3;
