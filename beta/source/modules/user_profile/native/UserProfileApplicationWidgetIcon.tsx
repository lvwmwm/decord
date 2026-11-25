// Module ID: 10350
// Function ID: 10351
// Name: UserProfileApplicationWidgetIcon
// Dependencies: [21, 4913, 575, 5600, 2]
// Exports: default

// Module 10350 (UserProfileApplicationWidgetIcon)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import FastImageDefault from "FastImage" /* 5600 */;
import createStyles from "createStyles" /* 4913 */;
import size_mod from "module_2" /* 2 */;

let size;
const jsx = Fragment.jsx;
const obj = { appIcon: size };
size = { width: 16, height: 16, borderRadius: nativeDefault.radii.xs, overflow: "hidden" };
let closure_3 = createStyles.createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileApplicationWidgetIcon.tsx");

export default function UserProfileApplicationWidgetIcon(application) {
  application = application.application;
  let iconURL;
  const tmp = closure_3();
  if (application != null) {
    iconURL = application.getIconURL(16);
  }
  let tmp3 = null;
  if (null != iconURL) {
    const obj2 = { uri: iconURL };
    tmp3 = jsx(FastImageDefault, { source: obj2, style: tmp.appIcon });
  }
  return tmp3;
};
