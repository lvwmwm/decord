// Module ID: 13289
// Function ID: 13290
// Name: MessageRequestModalActionCreators
// Dependencies: [13286, 1087, 1267, 5895, 1128, 5964, 5196, 13290, 2002, 2]
// Exports: onMarkAsNotSpamConfirmationModal, openAcceptMessageRequestConfirmModal

// Module 13289 (MessageRequestModalActionCreators)
import Constants from "Constants" /* 1087 */;
import intl5 from "intl" /* 1128 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1267 */;
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5196 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5895 */;
import AlertDefault from "Alert" /* 5964 */;
import MessageRequestConstants from "MessageRequestConstants" /* 13286 */;
import size from "module_2" /* 2 */;

const type = MessageRequestConstants.MESSAGE_REQUEST_ACCEPT_CONFIRMATION_MODAL;
const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/message_request/MessageRequestModalActionCreators.native.tsx");

export const openAcceptMessageRequestConfirmModal = function openAcceptMessageRequestConfirmModal(arg0) {
  let channelId;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let onCancel;
  let onConfirm;
  ({ channelId, onConfirm, onCancel } = arg0);
  const obj = AnalyticsUtilsDefault;
  const obj2 = { type, channel_id: channelId };
  obj.track(AnalyticEvents.OPEN_MODAL, obj2);
  const obj3 = { title: intl.string(intl5.t["66tnno"]), body: intl2.string(intl5.t["c/k4SW"]), cancelText: intl3.string(intl5.t["ETE/oC"]), confirmText: intl4.string(intl5.t["cY+Oob"]), onConfirm, onCancel, confirmColor: AlertDefault.Colors.BRAND, isDismissable: false };
  const show = actions_AlertActionCreatorsDefault.show;
  actions_AlertActionCreatorsDefault;
  intl = intl5.intl;
  intl2 = intl5.intl;
  intl3 = intl5.intl;
  intl4 = intl5.intl;
  show(obj3);
};
export const onMarkAsNotSpamConfirmationModal = function onMarkAsNotSpamConfirmationModal(arg0) {
  let channel;
  let onCancel;
  let onConfirm;
  ({ onConfirm, onCancel, channel } = arg0);
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(13290, dependencyMap.paths), "SpamMessageHamActionSheet", { channel, onConfirm, onCancel });
};
