// Module ID: 14536
// Function ID: 14537
// Name: ContactSyncBackToLanding
// Dependencies: [1499, 7067, 14509, 2]
// Exports: default

// Module 14536 (ContactSyncBackToLanding)
import ContactSyncModalActionCreators from "ContactSyncModalActionCreators" /* 14509 */;
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
