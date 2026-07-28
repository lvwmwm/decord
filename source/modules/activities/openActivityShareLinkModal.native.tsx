// Module ID: 13519
// Function ID: 103756
// Name: ACTIVITY_SHARE_LINK_MODAL
// Dependencies: [4024, 4372, 13520, 1935, 2]
// Exports: closeActivityShareLinkModal, openActivityShareLinkModal

// Module 13519 (ACTIVITY_SHARE_LINK_MODAL)
const result = require("ActivityShareLinkModal").fileFinishedImporting("modules/activities/openActivityShareLinkModal.native.tsx");

export const ACTIVITY_SHARE_LINK_MODAL = "ACTIVITY_SHARE_LINK_MODAL";
export const openActivityShareLinkModal = function openActivityShareLinkModal(arg0) {
  let applicationId;
  let customId;
  let linkId;
  let message;
  let onShare;
  ({ applicationId, customId, linkId, message, onShare } = arg0);
  let obj = require(4024) /* getHighestActiveScreenIndex */;
  obj.dismissKeyboard();
  obj = { applicationId, customId, linkId, message, onShare };
  obj = { presentation: "modal" };
  importDefault(4372).pushLazy(require(1935) /* maybeLoadBundle */(13520, dependencyMap.paths), obj, "ACTIVITY_SHARE_LINK_MODAL", obj);
};
export const closeActivityShareLinkModal = function closeActivityShareLinkModal() {
  importDefault(4372).popWithKey("ACTIVITY_SHARE_LINK_MODAL");
};
