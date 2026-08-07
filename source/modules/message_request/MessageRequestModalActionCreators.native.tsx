// Module ID: 11740
// Function ID: 11741
// Name: openAcceptMessageRequestConfirmModal
// Dependencies: [11737, 676, 698, 4641, 1236, 4730, 4270, 11741, 1988, 2]
// Exports: onMarkAsNotSpamConfirmationModal, openAcceptMessageRequestConfirmModal

// Module 11740 (openAcceptMessageRequestConfirmModal)
import { MESSAGE_REQUEST_ACCEPT_CONFIRMATION_MODAL as closure_3 } from "MESSAGE_REQUEST_ACCEPT_CONFIRMATION_MODAL";
import { AnalyticEvents } from "ME";

const result = require("expandEventProperties").fileFinishedImporting("modules/message_request/MessageRequestModalActionCreators.native.tsx");

export const openAcceptMessageRequestConfirmModal = function openAcceptMessageRequestConfirmModal(arg0) {
  let channelId;
  let onCancel;
  let onConfirm;
  ({ channelId, onConfirm, onCancel } = arg0);
  let obj = importDefault(698);
  obj = { type: closure_3, channel_id: channelId };
  obj.track(AnalyticEvents.OPEN_MODAL, obj);
  obj = { title: null, body: null, cancelText: null, confirmText: null, onConfirm: null, onCancel: null, confirmColor: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[0] = intl.string(require(1236) /* getSystemLocale */.t["66tnno"]);
  const intl2 = require(1236) /* getSystemLocale */.intl;
  obj[1] = intl2.string(require(1236) /* getSystemLocale */.t["c/k4SW"]);
  const intl3 = require(1236) /* getSystemLocale */.intl;
  obj[2] = intl3.string(require(1236) /* getSystemLocale */.t["ETE/oC"]);
  const intl4 = require(1236) /* getSystemLocale */.intl;
  obj[3] = intl4.string(require(1236) /* getSystemLocale */.t["cY+Oob"]);
  obj[4] = onConfirm;
  obj[5] = onCancel;
  obj[6] = importDefault(4730).Colors.BRAND;
  importDefault(4641).show(obj);
};
export const onMarkAsNotSpamConfirmationModal = function onMarkAsNotSpamConfirmationModal(arg0) {
  let channel;
  let onCancel;
  let onConfirm;
  ({ onConfirm, onCancel, channel } = arg0);
  importDefault(4270).openLazy(require(1988) /* asyncRequireImpl */(11741, dependencyMap.paths), "SpamMessageHamActionSheet", { channel, onConfirm, onCancel });
};
