// Module ID: 14860
// Function ID: 14861
// Name: ScheduledMessageNotifications
// Dependencies: [1072, 5839, 1113, 5866, 9904, 14861, 7415, 6092, 6801, 9906, 2118, 2]
// Exports: handleScheduleMessageError, showScheduleMessageDeleteFailureToast, showScheduleMessageDeleteSuccessToast, showScheduleMessageFailureToast, showScheduleMessageSentNowFailureToast, showScheduleMessageSentNowSuccessToast, showScheduleMessageSuccessToast, showScheduledMessageEditFailureToast, showScheduledMessageEditSuccessToast

// Module 14860 (ScheduledMessageNotifications)
import Constants from "Constants" /* 1072 */;
import intl6 from "intl" /* 1113 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5839 */;
import ClockIcon from "ClockIcon" /* 5866 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 6092 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7415 */;
import ScheduledMessageUtils from "ScheduledMessageUtils" /* 9904 */;
import openScheduledMessagesLimitUpsellDefault from "openScheduledMessagesLimitUpsell" /* 14861 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const AbortCodes = Constants.AbortCodes;
const result = size.fileFinishedImporting("modules/scheduled_messages/ScheduledMessageNotifications.native.tsx");

export function showScheduleMessageSuccessToast(scheduledTimestamp) {
  let date;
  let formatToPlainString;
  let obj2;
  let prop;
  const obj = { text: formatToPlainString(prop, obj2), icon: ClockIcon.ClockIcon, iconColor: "status-positive" };
  const open = ToastActionCreatorsDefault.open;
  ToastActionCreatorsDefault;
  const intl = intl6.intl;
  formatToPlainString = intl.formatToPlainString;
  obj2 = { timestamp: date.valueOf() };
  prop = intl6.t["CvHu/j"];
  date = new Date(scheduledTimestamp);
  open("SCHEDULED_MESSAGE_CREATE_SUCCESS", obj);
}
export function showScheduleMessageFailureToast(error) {
  let intl;
  let obj2;
  const obj = { text: intl.formatToPlainString(intl6.t.PsJmUe, obj2), variant: "critical" };
  const open = ToastActionCreatorsDefault.open;
  ToastActionCreatorsDefault;
  intl = intl6.intl;
  obj2 = { error };
  open("SCHEDULED_MESSAGE_CREATE_FAILURE", obj);
}
export function handleScheduleMessageError(body) {
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let obj4;
  let obj5;
  let paths;
  body = body.body;
  let code;
  if (body != null) {
    code = body.code;
  }
  if (code === AbortCodes.TOO_MANY_SCHEDULED_MESSAGES) {
    const obj3 = ScheduledMessageUtils;
    const scheduledMessagesLimit = obj3.getScheduledMessagesLimit();
    if (scheduledMessagesLimit.isUpgradable) {
      const items = [];
      const tmp12Result = openScheduledMessagesLimitUpsellDefault;
      items[0] = AnalyticsLocationDefault.SCHEDULED_MESSAGES_ROADBLOCK;
      tmp12Result(items);
    } else {
      const obj2 = {
        title: intl2.string(intl6.t.RLdUVh),
        body: intl3.formatToPlainString(intl6.t["3AMt7r"], obj4),
        confirmText: intl4.string(intl6.t.BddRzS),
        cancelText: intl5.string(intl6.t.lv6bDa),
        onCancel() {
              const obj = require("ModalActionCreators");
              return obj.pushLazy(require("asyncRequire")(paths[9], paths.paths), {}, "scheduled-messages-modal", { presentation: "modal" });
            },
        isDismissable: false
      };
      const show = AlertActionCreatorsDefault.show;
      AlertActionCreatorsDefault;
      intl2 = tmp8(1113).intl;
      intl3 = tmp8(1113).intl;
      obj4 = { max: tmp11 };
      intl4 = tmp8(1113).intl;
      intl5 = tmp8(1113).intl;
      show(obj2);
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
    let obj = { text: intl.formatToPlainString(intl6.t.PsJmUe, obj5), variant: "critical" };
    const open = ToastActionCreatorsDefault.open;
    ToastActionCreatorsDefault;
    intl = intl6.intl;
    obj5 = { error: message };
    open("SCHEDULED_MESSAGE_CREATE_FAILURE", obj);
  }
}
export function showScheduledMessageEditSuccessToast() {
  let intl;
  const obj = { text: intl.string(intl6.t.MXsMRk), icon: ClockIcon.ClockIcon, iconColor: "status-positive" };
  const open = ToastActionCreatorsDefault.open;
  ToastActionCreatorsDefault;
  intl = intl6.intl;
  open("SCHEDULED_MESSAGE_UPDATE_SUCCESS", obj);
}
export function showScheduledMessageEditFailureToast(message) {
  let intl;
  let obj2;
  const obj = { text: intl.formatToPlainString(intl6.t.slM6In, obj2), variant: "critical" };
  const open = ToastActionCreatorsDefault.open;
  ToastActionCreatorsDefault;
  intl = intl6.intl;
  obj2 = { error: message };
  open("SCHEDULED_MESSAGE_UPDATE_FAILURE", obj);
}
export function showScheduleMessageDeleteSuccessToast() {
  let intl;
  const obj = { text: intl.string(intl6.t["JF/LWn"]), icon: ClockIcon.ClockIcon, iconColor: "status-positive" };
  const open = ToastActionCreatorsDefault.open;
  ToastActionCreatorsDefault;
  intl = intl6.intl;
  open("SCHEDULED_MESSAGE_DELETE_SUCCESS", obj);
}
export function showScheduleMessageDeleteFailureToast(message) {
  let intl;
  let obj2;
  const obj = { text: intl.formatToPlainString(intl6.t.sUvyW3, obj2), variant: "critical" };
  const open = ToastActionCreatorsDefault.open;
  ToastActionCreatorsDefault;
  intl = intl6.intl;
  obj2 = { error: message };
  open("SCHEDULED_MESSAGE_DELETE_FAILURE", obj);
}
export function showScheduleMessageSentNowSuccessToast() {
  let intl;
  const obj = { text: intl.string(intl6.t["BHCm/d"]), icon: ClockIcon.ClockIcon, iconColor: "status-positive" };
  const open = ToastActionCreatorsDefault.open;
  ToastActionCreatorsDefault;
  intl = intl6.intl;
  open("SCHEDULED_MESSAGE_SEND_NOW_SUCCESS", obj);
}
export function showScheduleMessageSentNowFailureToast(message) {
  let intl;
  let obj2;
  const obj = { text: intl.formatToPlainString(intl6.t["uy++C+"], obj2), variant: "critical" };
  const open = ToastActionCreatorsDefault.open;
  ToastActionCreatorsDefault;
  intl = intl6.intl;
  obj2 = { error: message };
  open("SCHEDULED_MESSAGE_SEND_NOW_FAILURE", obj);
}
