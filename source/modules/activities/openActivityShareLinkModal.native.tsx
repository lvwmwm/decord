// Module ID: 14410
// Function ID: 14411
// Name: ACTIVITY_SHARE_LINK_MODAL
// Dependencies: [4343, 4731, 14411, 2008, 2]
// Exports: closeActivityShareLinkModal, openActivityShareLinkModal

// Module 14410 (ACTIVITY_SHARE_LINK_MODAL)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2008 */;
import getBestActiveInput from "getBestActiveInput" /* 4343 */;
import _modDef4731 from "module_4731" /* 4731 */;

const ACTIVITY_SHARE_LINK_MODAL = "ACTIVITY_SHARE_LINK_MODAL";
const result = set.fileFinishedImporting("modules/activities/openActivityShareLinkModal.native.tsx");

export const ACTIVITY_SHARE_LINK_MODAL = "ACTIVITY_SHARE_LINK_MODAL";
export const openActivityShareLinkModal = function openActivityShareLinkModal(arg0) {
  ({ applicationId, customId, linkId, message, onShare } = arg0);
  let obj = getBestActiveInput;
  obj.dismissKeyboard();
  obj = { applicationId, customId, linkId, message, onShare };
  _modDef4731.pushLazy(asyncRequireImpl(14411, dependencyMap.paths), obj, ACTIVITY_SHARE_LINK_MODAL, { presentation: "modal" });
};
export const closeActivityShareLinkModal = function closeActivityShareLinkModal() {
  _modDef4731.popWithKey(ACTIVITY_SHARE_LINK_MODAL);
};
