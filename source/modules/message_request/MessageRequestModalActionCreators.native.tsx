// Module ID: 11514
// Function ID: 89495
// Name: openAcceptMessageRequestConfirmModal
// Dependencies: [11511, 653, 675, 4506, 1212, 4596, 4133, 11515, 1935, 2]
// Exports: onMarkAsNotSpamConfirmationModal, openAcceptMessageRequestConfirmModal

// Module 11514 (openAcceptMessageRequestConfirmModal)
import { MESSAGE_REQUEST_ACCEPT_CONFIRMATION_MODAL as closure_3 } from "MESSAGE_REQUEST_ACCEPT_CONFIRMATION_MODAL";
import { AnalyticEvents } from "ME";

const result = require("expandLocation").fileFinishedImporting("modules/message_request/MessageRequestModalActionCreators.native.tsx");

export const openAcceptMessageRequestConfirmModal = function openAcceptMessageRequestConfirmModal(arg0) {
  let channelId;
  let onCancel;
  let onConfirm;
  ({ channelId, onConfirm, onCancel } = arg0);
  let obj = importDefault(675);
  obj = { type: closure_3, channel_id: channelId };
  obj.track(AnalyticEvents.OPEN_MODAL, obj);
  obj = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.title = intl.string(require(1212) /* getSystemLocale */.t["66tnno"]);
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj.body = intl2.string(require(1212) /* getSystemLocale */.t["c/k4SW"]);
  const intl3 = require(1212) /* getSystemLocale */.intl;
  obj.cancelText = intl3.string(require(1212) /* getSystemLocale */.t["ETE/oC"]);
  const intl4 = require(1212) /* getSystemLocale */.intl;
  obj.confirmText = intl4.string(require(1212) /* getSystemLocale */.t["cY+Oob"]);
  obj.onConfirm = onConfirm;
  obj.onCancel = onCancel;
  obj.confirmColor = importDefault(4596).Colors.BRAND;
  importDefault(4506).show(obj);
};
export const onMarkAsNotSpamConfirmationModal = function onMarkAsNotSpamConfirmationModal(arg0) {
  let channel;
  let onCancel;
  let onConfirm;
  ({ onConfirm, onCancel, channel } = arg0);
  importDefault(4133).openLazy(require(1935) /* maybeLoadBundle */(11515, dependencyMap.paths), "SpamMessageHamActionSheet", { channel, onConfirm, onCancel });
};
