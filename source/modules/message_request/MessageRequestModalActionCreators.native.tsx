// Module ID: 12378
// Function ID: 12379
// Name: openAcceptMessageRequestConfirmModal
// Dependencies: [12375, 673, 695, 4866, 1233, 4955, 4448, 12379, 2008, 2]
// Exports: onMarkAsNotSpamConfirmationModal, openAcceptMessageRequestConfirmModal

// Module 12378 (openAcceptMessageRequestConfirmModal)
import set from "set" /* 2 */;
import ME from "ME" /* 673 */;
import expandEventPropertiesDefault from "expandEventProperties" /* 695 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2008 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4448 */;
import _modDef4866 from "module_4866" /* 4866 */;
import componentDidMountDefault from "componentDidMount" /* 4955 */;
import MESSAGE_REQUEST_ACCEPT_CONFIRMATION_MODAL from "MESSAGE_REQUEST_ACCEPT_CONFIRMATION_MODAL" /* 12375 */;

let closure_3 = MESSAGE_REQUEST_ACCEPT_CONFIRMATION_MODAL.MESSAGE_REQUEST_ACCEPT_CONFIRMATION_MODAL;
const AnalyticEvents = ME.AnalyticEvents;
const result = set.fileFinishedImporting("modules/message_request/MessageRequestModalActionCreators.native.tsx");

export const openAcceptMessageRequestConfirmModal = function openAcceptMessageRequestConfirmModal(arg0) {
  ({ channelId, onConfirm, onCancel } = arg0);
  let obj = expandEventPropertiesDefault;
  obj = { type: closure_3, channel_id: channelId };
  obj.track(AnalyticEvents.OPEN_MODAL, obj);
  obj = { title: null, body: null, cancelText: null, confirmText: null, onConfirm: null, onCancel: null, confirmColor: null };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t["66tnno"]);
  const intl2 = getSystemLocale.intl;
  obj[1] = intl2.string(getSystemLocale.t["c/k4SW"]);
  const intl3 = getSystemLocale.intl;
  obj[2] = intl3.string(getSystemLocale.t["ETE/oC"]);
  const intl4 = getSystemLocale.intl;
  obj[3] = intl4.string(getSystemLocale.t["cY+Oob"]);
  obj[4] = onConfirm;
  obj[5] = onCancel;
  obj[6] = componentDidMountDefault.Colors.BRAND;
  _modDef4866.show(obj);
};
export const onMarkAsNotSpamConfirmationModal = function onMarkAsNotSpamConfirmationModal(arg0) {
  ({ onConfirm, onCancel, channel } = arg0);
  ACTION_SHEET_HEIGHT_HALFDefault.openLazy(asyncRequireImpl(12379, dependencyMap.paths), "SpamMessageHamActionSheet", { channel, onConfirm, onCancel });
};
