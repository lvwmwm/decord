// Module ID: 11066
// Function ID: 11067
// Name: ActivityLaunchErrorLink
// Dependencies: [19, 21, 558, 576, 11067, 2]

// Module 11066 (ActivityLaunchErrorLink)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp;
const IntlLink = tmp(11067);
const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function ActivityLaunchErrorLink(arg0) {
  let children;
  let href;
  const obj = react2;
  const cResult = obj.c(3);
  ({ href, children } = arg0);
  if (cResult[0] === children) {
    let tmp4;
    if (cResult[1] === href) {
      tmp4 = cResult[2];
    }
    return tmp4;
  }
  const tmp5 = jsx(IntlLink.IntlLink, { target: href, children });
  cResult[0] = children;
  cResult[1] = href;
  cResult[2] = tmp5;
  tmp4 = tmp5;
}) : (function ActivityLaunchErrorLink(arg0) {
  let children;
  let href;
  ({ href, children } = arg0);
  return jsx(IntlLink.IntlLink, { target, children });
});
const result = size.fileFinishedImporting("modules/activities/utils/ActivityLaunchErrorLink.native.tsx");

export default tmp3;
