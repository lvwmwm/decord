// Module ID: 10632
// Function ID: 10633
// Name: ActivityLaunchErrorLink
// Dependencies: [19, 21, 10633, 2]
// Exports: default

// Module 10632 (ActivityLaunchErrorLink)
import Fragment from "Fragment" /* 21 */;
import IntlLink from "IntlLink" /* 10633 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/activities/utils/ActivityLaunchErrorLink.native.tsx");

export default function ActivityLaunchErrorLink(arg0) {
  let children;
  let href;
  ({ href, children } = arg0);
  return jsx(IntlLink.IntlLink, { target, children });
};
