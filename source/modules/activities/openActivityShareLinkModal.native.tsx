// Module ID: 13821
// Function ID: 13822
// Name: ACTIVITY_SHARE_LINK_MODAL
// Dependencies: [4205, 4572, 13822, 2007, 2]
// Exports: closeActivityShareLinkModal, openActivityShareLinkModal

// Module 13821 (ACTIVITY_SHARE_LINK_MODAL)
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
  let obj = require(4205) /* getBestActiveInput */;
  obj.dismissKeyboard();
  obj = { applicationId, customId, linkId, message, onShare };
  importDefault(4572).pushLazy(require(2007) /* asyncRequireImpl */(13822, dependencyMap.paths), obj, ACTIVITY_SHARE_LINK_MODAL, { presentation: "modal" });
};
export const closeActivityShareLinkModal = function closeActivityShareLinkModal() {
  importDefault(4572).popWithKey(ACTIVITY_SHARE_LINK_MODAL);
};
