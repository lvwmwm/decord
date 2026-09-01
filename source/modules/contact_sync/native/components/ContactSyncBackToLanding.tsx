// Module ID: 12240
// Function ID: 12241
// Name: ContactSyncBackToLanding
// Dependencies: [1499, 5495, 12214, 2]
// Exports: default

// Module 12240 (ContactSyncBackToLanding)
import set from "set" /* 2 */;

let result = set.fileFinishedImporting("modules/contact_sync/native/components/ContactSyncBackToLanding.tsx");

export default function ContactSyncBackToLanding(arg0) {
  const _require = arg0;
  dependencyMap = _require(1499).useNavigation();
  const obj = _require(1499);
  return _require(5495).getHeaderBackButton(() => {
    if (null != lib.navigateToLandingPage) {
      const result = lib.navigateToLandingPage();
    } else {
      lib(table[2]).goBackToLanding(table);
      const obj2 = lib(table[2]);
    }
  }, true)(arg0);
};
