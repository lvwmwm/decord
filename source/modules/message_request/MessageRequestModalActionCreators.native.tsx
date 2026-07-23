// Module ID: 11479
// Function ID: 89404
// Name: openAcceptMessageRequestConfirmModal
// Dependencies: [11476, 653, 675, 4471, 1212, 4561, 4098, 11480, 1934, 2]
// Exports: onMarkAsNotSpamConfirmationModal, openAcceptMessageRequestConfirmModal

// Module 11479 (openAcceptMessageRequestConfirmModal)
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
  obj.confirmColor = importDefault(4561).Colors.BRAND;
  importDefault(4471).show(obj);
};
export const onMarkAsNotSpamConfirmationModal = function onMarkAsNotSpamConfirmationModal(arg0) {
  let channel;
  let onCancel;
  let onConfirm;
  ({ onConfirm, onCancel, channel } = arg0);
  importDefault(4098).openLazy(require(1934) /* maybeLoadBundle */(11480, dependencyMap.paths), "SpamMessageHamActionSheet", { channel, onConfirm, onCancel });
};
