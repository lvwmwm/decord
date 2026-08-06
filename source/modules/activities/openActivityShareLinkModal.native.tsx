// Module ID: 13666
// Function ID: 13667
// Name: ACTIVITY_SHARE_LINK_MODAL
// Dependencies: [4143, 4490, 13667, 1988, 2]
// Exports: closeActivityShareLinkModal, openActivityShareLinkModal

// Module 13666 (ACTIVITY_SHARE_LINK_MODAL)
const ACTIVITY_SHARE_LINK_MODAL = "ACTIVITY_SHARE_LINK_MODAL";
const result = require("ActivityShareLinkModal").fileFinishedImporting("modules/activities/openActivityShareLinkModal.native.tsx");

export const ACTIVITY_SHARE_LINK_MODAL = "ACTIVITY_SHARE_LINK_MODAL";
export const openActivityShareLinkModal = function openActivityShareLinkModal(arg0) {
  let applicationId;
  let customId;
  let linkId;
  let message;
  let onShare;
  ({ applicationId, customId, linkId, message, onShare } = arg0);
  let obj = require(4143) /* getBestActiveInput */;
  obj.dismissKeyboard();
  obj = { applicationId, customId, linkId, message, onShare };
  importDefault(4490).pushLazy(require(1988) /* asyncRequireImpl */(13667, dependencyMap.paths), obj, ACTIVITY_SHARE_LINK_MODAL, { presentation: "modal" });
};
export const closeActivityShareLinkModal = function closeActivityShareLinkModal() {
  importDefault(4490).popWithKey(ACTIVITY_SHARE_LINK_MODAL);
};
