// Module ID: 12117
// Function ID: 12118
// Name: ContactSyncBackToLanding
// Dependencies: [1499, 5309, 12091, 2]
// Exports: default

// Module 12117 (ContactSyncBackToLanding)
let result = require("handleNameInputScreenOrSuggestions").fileFinishedImporting("modules/contact_sync/native/components/ContactSyncBackToLanding.tsx");

export default function ContactSyncBackToLanding(arg0) {
  const _require = arg0;
  const dependencyMap = _require(1499).useNavigation();
  const obj = _require(1499);
  return _require(5309).getHeaderBackButton(() => {
    if (null != lib.navigateToLandingPage) {
      const result = lib.navigateToLandingPage();
    } else {
      lib(table[2]).goBackToLanding(table);
      const obj2 = lib(table[2]);
    }
  }, true)(arg0);
};
