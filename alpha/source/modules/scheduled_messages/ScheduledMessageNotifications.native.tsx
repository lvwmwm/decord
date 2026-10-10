// Module ID: 12879
// Function ID: 12880
// Name: ScheduledMessageNotifications
// Dependencies: [1085, 4809, 1126, 5051, 9293, 12880, 6878, 5299, 5934, 9295, 2000, 2]
// Exports: handleScheduleMessageError, showScheduleMessageDeleteFailureToast, showScheduleMessageDeleteSuccessToast, showScheduleMessageFailureToast, showScheduleMessageSentNowFailureToast, showScheduleMessageSentNowSuccessToast, showScheduleMessageSuccessToast, showScheduledMessageEditFailureToast, showScheduledMessageEditSuccessToast

// Module 12879 (ScheduledMessageNotifications)
import Constants from "Constants" /* 1085 */;
import intl6 from "intl" /* 1126 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4809 */;
import ClockIcon from "ClockIcon" /* 5051 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5299 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6878 */;
import ScheduledMessageUtils from "ScheduledMessageUtils" /* 9293 */;
import openScheduledMessagesLimitUpsellDefault from "openScheduledMessagesLimitUpsell" /* 12880 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const AbortCodes = Constants.AbortCodes;
const result = size.fileFinishedImporting("modules/scheduled_messages/ScheduledMessageNotifications.native.tsx");

export const showScheduleMessageSuccessToast = function showScheduleMessageSuccessToast(scheduledTimestamp) {
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
};
export const showScheduleMessageFailureToast = function showScheduleMessageFailureToast(error) {
  let intl;
  let obj2;
  const obj = { text: intl.formatToPlainString(intl6.t.PsJmUe, obj2), variant: "critical" };
  const open = ToastActionCreatorsDefault.open;
  ToastActionCreatorsDefault;
  intl = intl6.intl;
  obj2 = { error };
  open("SCHEDULED_MESSAGE_CREATE_FAILURE", obj);
};
export const handleScheduleMessageError = function handleScheduleMessageError(body) {
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
    const scheduledMessagesLimit = obj3.getScheduledMessagesLimit("ScheduledMessagesCreateRoadblock");
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
      intl2 = tmp8(1126).intl;
      intl3 = tmp8(1126).intl;
      obj4 = { max: tmp11 };
      intl4 = tmp8(1126).intl;
      intl5 = tmp8(1126).intl;
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
};
export const showScheduledMessageEditSuccessToast = function showScheduledMessageEditSuccessToast() {
  let intl;
  const obj = { text: intl.string(intl6.t.MXsMRk), icon: ClockIcon.ClockIcon, iconColor: "status-positive" };
  const open = ToastActionCreatorsDefault.open;
  ToastActionCreatorsDefault;
  intl = intl6.intl;
  open("SCHEDULED_MESSAGE_UPDATE_SUCCESS", obj);
};
export const showScheduledMessageEditFailureToast = function showScheduledMessageEditFailureToast(message) {
  let intl;
  let obj2;
  const obj = { text: intl.formatToPlainString(intl6.t.slM6In, obj2), variant: "critical" };
  const open = ToastActionCreatorsDefault.open;
  ToastActionCreatorsDefault;
  intl = intl6.intl;
  obj2 = { error: message };
  open("SCHEDULED_MESSAGE_UPDATE_FAILURE", obj);
};
export const showScheduleMessageDeleteSuccessToast = function showScheduleMessageDeleteSuccessToast() {
  let intl;
  const obj = { text: intl.string(intl6.t["JF/LWn"]), icon: ClockIcon.ClockIcon, iconColor: "status-positive" };
  const open = ToastActionCreatorsDefault.open;
  ToastActionCreatorsDefault;
  intl = intl6.intl;
  open("SCHEDULED_MESSAGE_DELETE_SUCCESS", obj);
};
export const showScheduleMessageDeleteFailureToast = function showScheduleMessageDeleteFailureToast(message) {
  let intl;
  let obj2;
  const obj = { text: intl.formatToPlainString(intl6.t.sUvyW3, obj2), variant: "critical" };
  const open = ToastActionCreatorsDefault.open;
  ToastActionCreatorsDefault;
  intl = intl6.intl;
  obj2 = { error: message };
  open("SCHEDULED_MESSAGE_DELETE_FAILURE", obj);
};
export const showScheduleMessageSentNowSuccessToast = function showScheduleMessageSentNowSuccessToast() {
  let intl;
  const obj = { text: intl.string(intl6.t["BHCm/d"]), icon: ClockIcon.ClockIcon, iconColor: "status-positive" };
  const open = ToastActionCreatorsDefault.open;
  ToastActionCreatorsDefault;
  intl = intl6.intl;
  open("SCHEDULED_MESSAGE_SEND_NOW_SUCCESS", obj);
};
export const showScheduleMessageSentNowFailureToast = function showScheduleMessageSentNowFailureToast(message) {
  let intl;
  let obj2;
  const obj = { text: intl.formatToPlainString(intl6.t["uy++C+"], obj2), variant: "critical" };
  const open = ToastActionCreatorsDefault.open;
  ToastActionCreatorsDefault;
  intl = intl6.intl;
  obj2 = { error: message };
  open("SCHEDULED_MESSAGE_SEND_NOW_FAILURE", obj);
};
