// Module ID: 11990
// Function ID: 11991
// Name: ContactSyncBackToLanding
// Dependencies: [1480, 5269, 11964, 2]
// Exports: default

// Module 11990 (ContactSyncBackToLanding)
let result = require("handleNameInputScreenOrSuggestions").fileFinishedImporting("modules/contact_sync/native/components/ContactSyncBackToLanding.tsx");

export default function ContactSyncBackToLanding(arg0) {
  const _require = arg0;
  const dependencyMap = _require(1480).useNavigation();
  const obj = _require(1480);
  return _require(5269).getHeaderBackButton(() => {
    if (null != lib.navigateToLandingPage) {
      const result = lib.navigateToLandingPage();
    } else {
      lib(table[2]).goBackToLanding(table);
      const obj2 = lib(table[2]);
    }
  }, true)(arg0);
};
