// Module ID: 12634
// Function ID: 12635
// Name: ContactSyncBackToLanding
// Dependencies: [1498, 5579, 12608, 2]
// Exports: default

// Module 12634 (ContactSyncBackToLanding)
import set from "set" /* 2 */;

let result = set.fileFinishedImporting("modules/contact_sync/native/components/ContactSyncBackToLanding.tsx");

export default function ContactSyncBackToLanding(arg0) {
  const _require = arg0;
  dependencyMap = _require(1498).useNavigation();
  const obj = _require(1498);
  return _require(5579).getHeaderBackButton(() => {
    if (null != lib.navigateToLandingPage) {
      const result = lib.navigateToLandingPage();
    } else {
      lib(table[2]).goBackToLanding(table);
      const obj2 = lib(table[2]);
    }
  }, true)(arg0);
};
