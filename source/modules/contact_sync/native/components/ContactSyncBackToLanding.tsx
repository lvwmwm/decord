// Module ID: 11720
// Function ID: 90989
// Name: ContactSyncBackToLanding
// Dependencies: []
// Exports: default

// Module 11720 (ContactSyncBackToLanding)
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("modules/contact_sync/native/components/ContactSyncBackToLanding.tsx");

export default function ContactSyncBackToLanding(arg0) {
  const require = arg0;
  closure_1 = require(closure_1[0]).useNavigation();
  const obj = require(closure_1[0]);
  return require(closure_1[1]).getHeaderBackButton(() => {
    if (null != arg0.navigateToLandingPage) {
      const result = arg0.navigateToLandingPage();
    } else {
      arg0(closure_1[2]).goBackToLanding(closure_1);
      const obj = arg0(closure_1[2]);
    }
  }, true)(arg0);
};
