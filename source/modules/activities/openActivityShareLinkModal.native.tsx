// Module ID: 13817
// Function ID: 13818
// Name: ACTIVITY_SHARE_LINK_MODAL
// Dependencies: [4207, 4549, 13818, 2007, 2]
// Exports: closeActivityShareLinkModal, openActivityShareLinkModal

// Module 13817 (ACTIVITY_SHARE_LINK_MODAL)
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
  let obj = require(4207) /* getBestActiveInput */;
  obj.dismissKeyboard();
  obj = { applicationId, customId, linkId, message, onShare };
  importDefault(4549).pushLazy(require(2007) /* asyncRequireImpl */(13818, dependencyMap.paths), obj, ACTIVITY_SHARE_LINK_MODAL, { presentation: "modal" });
};
export const closeActivityShareLinkModal = function closeActivityShareLinkModal() {
  importDefault(4549).popWithKey(ACTIVITY_SHARE_LINK_MODAL);
};
