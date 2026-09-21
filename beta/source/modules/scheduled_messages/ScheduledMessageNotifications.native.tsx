// Module ID: 8091
// Function ID: 8092
// Name: ScheduledMessageNotifications
// Dependencies: [1074, 4454, 1115, 4718, 6858, 8088, 8092, 7427, 5108, 4959, 12465, 1980, 2]
// Exports: handleScheduleMessageError, showScheduleMessageDeleteFailureToast, showScheduleMessageDeleteSuccessToast, showScheduleMessageFailureToast, showScheduleMessageSentNowFailureToast, showScheduleMessageSentNowSuccessToast, showScheduleMessageSuccessToast, showScheduledMessageEditFailureToast, showScheduledMessageEditSuccessToast

// Module 8091 (ScheduledMessageNotifications)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1115 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4454 */;
import ClockIcon from "ClockIcon" /* 4718 */;
import CircleXIcon from "CircleXIcon" /* 6858 */;
import ScheduledMessageUtils from "ScheduledMessageUtils" /* 8088 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const AbortCodes = Constants.AbortCodes;
const result = size.fileFinishedImporting("modules/scheduled_messages/ScheduledMessageNotifications.native.tsx");

export const showScheduleMessageSuccessToast = function showScheduleMessageSuccessToast(arg0) {
  const obj2 = { key: "SCHEDULED_MESSAGE_CREATE_SUCCESS", content: null, IconComponent: null, iconColor: "status-positive" };
  const intl = util.intl;
  const obj3 = { timestamp: null };
  const obj = ToastActionCreatorsDefault;
  obj3.timestamp = new Date(arg0).valueOf();
  obj2.content = intl.formatToPlainString(util.t["CvHu/j"], obj3);
  obj2.IconComponent = ClockIcon.ClockIcon;
  obj.open(obj2);
};
export const showScheduleMessageFailureToast = function showScheduleMessageFailureToast(error) {
  const obj2 = { key: "SCHEDULED_MESSAGE_CREATE_FAILURE", content: null, IconComponent: null, iconColor: "icon-feedback-critical" };
  const intl = util.intl;
  obj2.content = intl.formatToPlainString(util.t.PsJmUe, { error });
  obj2.IconComponent = CircleXIcon.CircleXIcon;
  ToastActionCreatorsDefault.open(obj2);
};
export const handleScheduleMessageError = function handleScheduleMessageError(body) {
  body = body.body;
  let code;
  if (body != null) {
    code = body.code;
  }
  if (code === AbortCodes.TOO_MANY_SCHEDULED_MESSAGES) {
    const scheduledMessagesLimit = ScheduledMessageUtils.getScheduledMessagesLimit("ScheduledMessagesCreateRoadblock");
    if (scheduledMessagesLimit.isUpgradable) {
      const items = [tmp11(7427).SCHEDULED_MESSAGES_ROADBLOCK];
      tmp11(8092)(items);
      const tmp11Result = tmp11(8092);
    } else {
      const obj2 = { title: null, body: null, confirmText: null, cancelText: null, onCancel: null, isDismissable: false };
      const intl2 = tmp7(1115).intl;
      obj2.title = intl2.string(tmp7(1115).t.RLdUVh);
      const intl3 = tmp7(1115).intl;
      const obj3 = { max: tmp10 };
      obj2.body = intl3.formatToPlainString(tmp7(1115).t["3AMt7r"], obj3);
      const intl4 = tmp7(1115).intl;
      obj2.confirmText = intl4.string(tmp7(1115).t.BddRzS);
      const intl5 = tmp7(1115).intl;
      obj2.cancelText = intl5.string(tmp7(1115).t.lv6bDa);
      obj2.onCancel = function onCancel() {
        return require("ModalActionCreators").pushLazy(require("asyncRequireImpl")(paths[10], paths.paths), {}, "scheduled-messages-modal", { presentation: "modal" });
      };
      tmp11(5108).show(obj2);
      const tmp11Result2 = tmp11(5108);
    }
  } else {
    const body2 = body.body;
    let message;
    if (body2 != null) {
      message = body2.message;
    }
    if (message == null) {
      message = body.message;
    }
    const obj5 = { key: "SCHEDULED_MESSAGE_CREATE_FAILURE", content: null, IconComponent: null, iconColor: "icon-feedback-critical" };
    const intl = util.intl;
    const obj6 = { error: message };
    obj5.content = intl.formatToPlainString(util.t.PsJmUe, obj6);
    obj5.IconComponent = CircleXIcon.CircleXIcon;
    ToastActionCreatorsDefault.open(obj5);
  }
};
export const showScheduledMessageEditSuccessToast = function showScheduledMessageEditSuccessToast() {
  const obj2 = { key: "SCHEDULED_MESSAGE_UPDATE_SUCCESS", content: null, IconComponent: null, iconColor: "status-positive" };
  const intl = util.intl;
  obj2.content = intl.string(util.t.MXsMRk);
  obj2.IconComponent = ClockIcon.ClockIcon;
  ToastActionCreatorsDefault.open(obj2);
};
export const showScheduledMessageEditFailureToast = function showScheduledMessageEditFailureToast(message) {
  const obj2 = { key: "SCHEDULED_MESSAGE_UPDATE_FAILURE", content: null, IconComponent: null, iconColor: "icon-feedback-critical" };
  const intl = util.intl;
  obj2.content = intl.formatToPlainString(util.t.slM6In, { error: message });
  obj2.IconComponent = CircleXIcon.CircleXIcon;
  ToastActionCreatorsDefault.open(obj2);
};
export const showScheduleMessageDeleteSuccessToast = function showScheduleMessageDeleteSuccessToast() {
  const obj2 = { key: "SCHEDULED_MESSAGE_DELETE_SUCCESS", content: null, IconComponent: null, iconColor: "status-positive" };
  const intl = util.intl;
  obj2.content = intl.string(util.t["JF/LWn"]);
  obj2.IconComponent = ClockIcon.ClockIcon;
  ToastActionCreatorsDefault.open(obj2);
};
export const showScheduleMessageDeleteFailureToast = function showScheduleMessageDeleteFailureToast(message) {
  const obj2 = { key: "SCHEDULED_MESSAGE_DELETE_FAILURE", content: null, IconComponent: null, iconColor: "icon-feedback-critical" };
  const intl = util.intl;
  obj2.content = intl.formatToPlainString(util.t.sUvyW3, { error: message });
  obj2.IconComponent = CircleXIcon.CircleXIcon;
  ToastActionCreatorsDefault.open(obj2);
};
export const showScheduleMessageSentNowSuccessToast = function showScheduleMessageSentNowSuccessToast() {
  const obj2 = { key: "SCHEDULED_MESSAGE_SEND_NOW_SUCCESS", content: null, IconComponent: null, iconColor: "status-positive" };
  const intl = util.intl;
  obj2.content = intl.string(util.t["BHCm/d"]);
  obj2.IconComponent = ClockIcon.ClockIcon;
  ToastActionCreatorsDefault.open(obj2);
};
export const showScheduleMessageSentNowFailureToast = function showScheduleMessageSentNowFailureToast(message) {
  const obj2 = { key: "SCHEDULED_MESSAGE_SEND_NOW_FAILURE", content: null, IconComponent: null, iconColor: "icon-feedback-critical" };
  const intl = util.intl;
  obj2.content = intl.formatToPlainString(util.t["uy++C+"], { error: message });
  obj2.IconComponent = CircleXIcon.CircleXIcon;
  ToastActionCreatorsDefault.open(obj2);
};
