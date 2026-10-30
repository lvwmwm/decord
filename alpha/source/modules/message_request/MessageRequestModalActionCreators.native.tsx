// Module ID: 13969
// Function ID: 13970
// Name: MessageRequestModalActionCreators
// Dependencies: [13966, 1072, 1253, 5954, 1114, 6025, 5253, 13970, 1995, 2]
// Exports: onMarkAsNotSpamConfirmationModal, openAcceptMessageRequestConfirmModal

// Module 13969 (MessageRequestModalActionCreators)
import Constants from "Constants" /* 1072 */;
import intl5 from "intl" /* 1114 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1253 */;
import asyncRequire from "asyncRequire" /* 1995 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5954 */;
import AlertDefault from "Alert" /* 6025 */;
import MessageRequestConstants from "MessageRequestConstants" /* 13966 */;
import size from "module_2" /* 2 */;

const type = MessageRequestConstants.MESSAGE_REQUEST_ACCEPT_CONFIRMATION_MODAL;
const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/message_request/MessageRequestModalActionCreators.native.tsx");

export function openAcceptMessageRequestConfirmModal(arg0) {
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
}
export function onMarkAsNotSpamConfirmationModal(arg0) {
  let channel;
  let onCancel;
  let onConfirm;
  ({ onConfirm, onCancel, channel } = arg0);
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(13970, dependencyMap.paths), "SpamMessageHamActionSheet", { channel, onConfirm, onCancel });
}
