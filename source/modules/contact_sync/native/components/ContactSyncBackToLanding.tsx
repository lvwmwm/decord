// Module ID: 11875
// Function ID: 11876
// Name: ContactSyncBackToLanding
// Dependencies: [1500, 6314, 11849, 2]
// Exports: default

// Module 11875 (ContactSyncBackToLanding)
let result = require("handleNameInputScreenOrSuggestions").fileFinishedImporting("modules/contact_sync/native/components/ContactSyncBackToLanding.tsx");

export default function ContactSyncBackToLanding(arg0) {
  const _require = arg0;
  const dependencyMap = _require(1500).useNavigation();
  const obj = _require(1500);
  return _require(6314).getHeaderBackButton(() => {
    if (null != lib.navigateToLandingPage) {
      const result = lib.navigateToLandingPage();
    } else {
      lib(table[2]).goBackToLanding(table);
      const obj2 = lib(table[2]);
    }
  }, true)(arg0);
};
