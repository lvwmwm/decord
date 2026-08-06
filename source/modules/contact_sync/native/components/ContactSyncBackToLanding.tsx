// Module ID: 11975
// Function ID: 11976
// Name: ContactSyncBackToLanding
// Dependencies: [1480, 5253, 11949, 2]
// Exports: default

// Module 11975 (ContactSyncBackToLanding)
let result = require("handleNameInputScreenOrSuggestions").fileFinishedImporting("modules/contact_sync/native/components/ContactSyncBackToLanding.tsx");

export default function ContactSyncBackToLanding(arg0) {
  const _require = arg0;
  const dependencyMap = _require(1480).useNavigation();
  const obj = _require(1480);
  return _require(5253).getHeaderBackButton(() => {
    if (null != lib.navigateToLandingPage) {
      const result = lib.navigateToLandingPage();
    } else {
      lib(table[2]).goBackToLanding(table);
      const obj2 = lib(table[2]);
    }
  }, true)(arg0);
};
