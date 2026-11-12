// Module ID: 14906
// Function ID: 14907
// Name: ContactSyncBackToLanding
// Dependencies: [1499, 7427, 14879, 2]
// Exports: default

// Module 14906 (ContactSyncBackToLanding)
import ContactSyncModalActionCreators from "ContactSyncModalActionCreators" /* 14879 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

let result = size.fileFinishedImporting("modules/contact_sync/native/components/ContactSyncBackToLanding.tsx");

export default function ContactSyncBackToLanding(arg0) {
  let closure_0;
  let closure_1;
  _require = arg0;
  let obj = require("useNavigation");
  dependencyMap = obj.useNavigation();
  let obj2 = require("NavigatorHeader");
  return obj2.getHeaderBackButton(() => {
    const obj = closure_0;
    if (null != closure_0.navigateToLandingPage) {
      const result = obj.navigateToLandingPage();
    } else {
      const obj2 = ContactSyncModalActionCreators;
      obj2.goBackToLanding(closure_1);
    }
  }, true)(arg0);
};
