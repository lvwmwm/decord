// Module ID: 13537
// Function ID: 13538
// Name: ACTIVITY_SHARE_LINK_MODAL
// Dependencies: [4048, 4395, 13538, 1959, 2]
// Exports: closeActivityShareLinkModal, openActivityShareLinkModal

// Module 13537 (ACTIVITY_SHARE_LINK_MODAL)
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
  let obj = require(4048) /* getBestActiveInput */;
  obj.dismissKeyboard();
  obj = { applicationId, customId, linkId, message, onShare };
  importDefault(4395).pushLazy(require(1959) /* asyncRequireImpl */(13538, dependencyMap.paths), obj, ACTIVITY_SHARE_LINK_MODAL, { presentation: "modal" });
};
export const closeActivityShareLinkModal = function closeActivityShareLinkModal() {
  importDefault(4395).popWithKey(ACTIVITY_SHARE_LINK_MODAL);
};
