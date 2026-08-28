// Module ID: 12173
// Function ID: 12174
// Name: ContactSyncBackToLanding
// Dependencies: [1500, 5460, 12147, 2]
// Exports: default

// Module 12173 (ContactSyncBackToLanding)
import set from "set" /* 2 */;

let result = set.fileFinishedImporting("modules/contact_sync/native/components/ContactSyncBackToLanding.tsx");

export default function ContactSyncBackToLanding(arg0) {
  const _require = arg0;
  dependencyMap = _require(1500).useNavigation();
  const obj = _require(1500);
  return _require(5460).getHeaderBackButton(() => {
    if (null != lib.navigateToLandingPage) {
      const result = lib.navigateToLandingPage();
    } else {
      lib(table[2]).goBackToLanding(table);
      const obj2 = lib(table[2]);
    }
  }, true)(arg0);
};
