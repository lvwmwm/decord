// Module ID: 11461
// Function ID: 89305
// Name: openAcceptMessageRequestConfirmModal
// Dependencies: []
// Exports: onMarkAsNotSpamConfirmationModal, openAcceptMessageRequestConfirmModal

// Module 11461 (openAcceptMessageRequestConfirmModal)
let closure_3 = require(dependencyMap[0]).MESSAGE_REQUEST_ACCEPT_CONFIRMATION_MODAL;
const AnalyticEvents = require(dependencyMap[1]).AnalyticEvents;
const _module = require(dependencyMap[9]);
const result = _module.fileFinishedImporting("modules/message_request/MessageRequestModalActionCreators.native.tsx");

export const openAcceptMessageRequestConfirmModal = function openAcceptMessageRequestConfirmModal(arg0) {
  let channelId;
  let onCancel;
  let onConfirm;
  ({ channelId, onConfirm, onCancel } = arg0);
  let obj = importDefault(dependencyMap[2]);
  obj = { type: closure_3, channel_id: channelId };
  obj.track(AnalyticEvents.OPEN_MODAL, obj);
  obj = {};
  const intl = require(dependencyMap[4]).intl;
  obj.title = intl.string(require(dependencyMap[4]).t.66tnno);
  const intl2 = require(dependencyMap[4]).intl;
  obj.body = intl2.string(require(dependencyMap[4]).t.c/k4SW);
  const intl3 = require(dependencyMap[4]).intl;
  obj.cancelText = intl3.string(require(dependencyMap[4]).t.ETE/oC);
  const intl4 = require(dependencyMap[4]).intl;
  obj.confirmText = intl4.string(require(dependencyMap[4]).t.cY+Oob);
  obj.onConfirm = onConfirm;
  obj.onCancel = onCancel;
  obj.confirmColor = importDefault(dependencyMap[5]).Colors.BRAND;
  importDefault(dependencyMap[3]).show(obj);
};
export const onMarkAsNotSpamConfirmationModal = function onMarkAsNotSpamConfirmationModal(arg0) {
  let channel;
  let onCancel;
  let onConfirm;
  ({ onConfirm, onCancel, channel } = arg0);
  importDefault(dependencyMap[6]).openLazy(require(dependencyMap[8])(dependencyMap[7], dependencyMap.paths), "SpamMessageHamActionSheet", { channel, onConfirm, onCancel });
};
