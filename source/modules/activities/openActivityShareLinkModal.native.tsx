// Module ID: 13463
// Function ID: 103451
// Name: ACTIVITY_SHARE_LINK_MODAL
// Dependencies: [3989, 4337, 13464, 1934, 2]
// Exports: closeActivityShareLinkModal, openActivityShareLinkModal

// Module 13463 (ACTIVITY_SHARE_LINK_MODAL)
const result = require("ActivityShareLinkModal").fileFinishedImporting("modules/activities/openActivityShareLinkModal.native.tsx");

export const ACTIVITY_SHARE_LINK_MODAL = "ACTIVITY_SHARE_LINK_MODAL";
export const openActivityShareLinkModal = function openActivityShareLinkModal(arg0) {
  let applicationId;
  let customId;
  let linkId;
  let message;
  let onShare;
  ({ applicationId, customId, linkId, message, onShare } = arg0);
  let obj = require(3989) /* getHighestActiveScreenIndex */;
  obj.dismissKeyboard();
  obj = { applicationId, customId, linkId, message, onShare };
  obj = { presentation: "modal" };
  importDefault(4337).pushLazy(require(1934) /* maybeLoadBundle */(13464, dependencyMap.paths), obj, "ACTIVITY_SHARE_LINK_MODAL", obj);
};
export const closeActivityShareLinkModal = function closeActivityShareLinkModal() {
  importDefault(4337).popWithKey("ACTIVITY_SHARE_LINK_MODAL");
};
