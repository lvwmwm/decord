// Module ID: 13296
// Function ID: 100968
// Name: ACTIVITY_SHARE_LINK_MODAL
// Dependencies: []
// Exports: closeActivityShareLinkModal, openActivityShareLinkModal

// Module 13296 (ACTIVITY_SHARE_LINK_MODAL)
const _module = require(dependencyMap[4]);
const result = _module.fileFinishedImporting("modules/activities/openActivityShareLinkModal.native.tsx");

export const ACTIVITY_SHARE_LINK_MODAL = "ACTIVITY_SHARE_LINK_MODAL";
export const openActivityShareLinkModal = function openActivityShareLinkModal(arg0) {
  let applicationId;
  let customId;
  let linkId;
  let message;
  let onShare;
  ({ applicationId, customId, linkId, message, onShare } = arg0);
  let obj = require(dependencyMap[0]);
  obj.dismissKeyboard();
  obj = { applicationId, customId, linkId, message, onShare };
  obj = { presentation: "modal" };
  importDefault(dependencyMap[1]).pushLazy(require(dependencyMap[3])(dependencyMap[2], dependencyMap.paths), obj, "ACTIVITY_SHARE_LINK_MODAL", obj);
};
export const closeActivityShareLinkModal = function closeActivityShareLinkModal() {
  importDefault(dependencyMap[1]).popWithKey("ACTIVITY_SHARE_LINK_MODAL");
};
