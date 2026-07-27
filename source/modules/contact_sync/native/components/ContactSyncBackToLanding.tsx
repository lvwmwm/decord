// Module ID: 11729
// Function ID: 91044
// Name: ContactSyncBackToLanding
// Dependencies: [1456, 5087, 11703, 2]
// Exports: default

// Module 11729 (ContactSyncBackToLanding)
let result = require("handleNameInputScreenOrSuggestions").fileFinishedImporting("modules/contact_sync/native/components/ContactSyncBackToLanding.tsx");

export default function ContactSyncBackToLanding(arg0) {
  const _require = arg0;
  const dependencyMap = _require(1456).useNavigation();
  let obj = _require(1456);
  return _require(5087).getHeaderBackButton(() => {
    if (null != lib.navigateToLandingPage) {
      const result = lib.navigateToLandingPage();
    } else {
      lib(table[2]).goBackToLanding(table);
      const obj = lib(table[2]);
    }
  }, true)(arg0);
};
