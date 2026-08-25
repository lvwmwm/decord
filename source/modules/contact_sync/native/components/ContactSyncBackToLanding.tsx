// Module ID: 12258
// Function ID: 12259
// Name: ContactSyncBackToLanding
// Dependencies: [1500, 5376, 12232, 2]
// Exports: default

// Module 12258 (ContactSyncBackToLanding)
import set from "set" /* 2 */;

let result = set.fileFinishedImporting("modules/contact_sync/native/components/ContactSyncBackToLanding.tsx");

export default function ContactSyncBackToLanding(arg0) {
  const _require = arg0;
  dependencyMap = _require(1500).useNavigation();
  const obj = _require(1500);
  return _require(5376).getHeaderBackButton(() => {
    if (null != lib.navigateToLandingPage) {
      const result = lib.navigateToLandingPage();
    } else {
      lib(table[2]).goBackToLanding(table);
      const obj2 = lib(table[2]);
    }
  }, true)(arg0);
};
