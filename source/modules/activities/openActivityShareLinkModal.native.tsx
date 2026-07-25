// Module ID: 13474
// Function ID: 103578
// Name: ACTIVITY_SHARE_LINK_MODAL
// Dependencies: [3990, 4338, 13475, 1935, 2]
// Exports: closeActivityShareLinkModal, openActivityShareLinkModal

// Module 13474 (ACTIVITY_SHARE_LINK_MODAL)
const result = require("ActivityShareLinkModal").fileFinishedImporting("modules/activities/openActivityShareLinkModal.native.tsx");

export const ACTIVITY_SHARE_LINK_MODAL = "ACTIVITY_SHARE_LINK_MODAL";
export const openActivityShareLinkModal = function openActivityShareLinkModal(arg0) {
  let applicationId;
  let customId;
  let linkId;
  let message;
  let onShare;
  ({ applicationId, customId, linkId, message, onShare } = arg0);
  let obj = require(3990) /* getHighestActiveScreenIndex */;
  obj.dismissKeyboard();
  obj = { applicationId, customId, linkId, message, onShare };
  obj = { presentation: "modal" };
  importDefault(4338).pushLazy(require(1935) /* maybeLoadBundle */(13475, dependencyMap.paths), obj, "ACTIVITY_SHARE_LINK_MODAL", obj);
};
export const closeActivityShareLinkModal = function closeActivityShareLinkModal() {
  importDefault(4338).popWithKey("ACTIVITY_SHARE_LINK_MODAL");
};
