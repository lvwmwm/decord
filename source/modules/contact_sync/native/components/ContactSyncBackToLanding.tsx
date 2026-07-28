// Module ID: 11768
// Function ID: 91195
// Name: ContactSyncBackToLanding
// Dependencies: [1456, 5121, 11742, 2]
// Exports: default

// Module 11768 (ContactSyncBackToLanding)
let result = require("handleNameInputScreenOrSuggestions").fileFinishedImporting("modules/contact_sync/native/components/ContactSyncBackToLanding.tsx");

export default function ContactSyncBackToLanding(arg0) {
  const _require = arg0;
  const dependencyMap = _require(1456).useNavigation();
  let obj = _require(1456);
  return _require(5121).getHeaderBackButton(() => {
    if (null != lib.navigateToLandingPage) {
      const result = lib.navigateToLandingPage();
    } else {
      lib(table[2]).goBackToLanding(table);
      const obj = lib(table[2]);
    }
  }, true)(arg0);
};
