// Module ID: 12202
// Function ID: 95386
// Name: getGuildScheduledEventHeaderProps
// Dependencies: [6758, 1354, 8346, 689, 8460, 1212, 7593, 12203, 2]
// Exports: getGuildScheduledEventHeaderProps

// Module 12202 (getGuildScheduledEventHeaderProps)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { GuildScheduledEventEntityTypes as closure_5 } from "GUILD_EVENT_MAX_NAME_LENGTH";

let closure_3;
let closure_4;
({ isGuildEventEnded: closure_3, isGuildScheduledEventActive: closure_4 } = _isNativeReflectConstruct);
const result = require("getNextBucketedTime").fileFinishedImporting("modules/guild_scheduled_events/native/GuildScheduledEventHeaderUtils.tsx");

export const getGuildScheduledEventHeaderProps = function getGuildScheduledEventHeaderProps(eventTimeData) {
  let currentOrPastEvent;
  let diffMinutes;
  let event;
  let isCanceled;
  let isStage;
  let recurrenceId;
  let startDateTimeString;
  let theme;
  let upcomingEvent;
  ({ startDateTimeString, diffMinutes, currentOrPastEvent, upcomingEvent } = eventTimeData.eventTimeData);
  ({ event, recurrenceId } = eventTimeData);
  ({ isStage, theme, isCanceled } = eventTimeData);
  let obj = require(8346) /* getNextBucketedTime */;
  if (null != recurrenceId) {
    let tmp3 = obj.getNextRecurrenceIdInEvent(event) === recurrenceId;
    if (tmp3) {
      tmp3 = callback2(event);
    }
    let tmp2 = tmp3;
  } else {
    tmp2 = callback2(event);
  }
  const tmp5 = callback(event);
  const ICON_SUBTLE = importDefault(689).colors.ICON_SUBTLE;
  let tmp6 = importDefault(8460);
  if (tmp2) {
    const intl4 = require(1212) /* getSystemLocale */.intl;
    let stringResult = intl4.string(require(1212) /* getSystemLocale */.t["X2K3/4"]);
    if (isStage) {
      tmp6 = importDefault(7593);
    }
    let entity_type;
    if (null != event) {
      entity_type = event.entity_type;
    }
    if (entity_type === constants.EXTERNAL) {
      const intl5 = require(1212) /* getSystemLocale */.intl;
      stringResult = intl5.string(require(1212) /* getSystemLocale */.t.TxqPQR);
    }
    let ICON_FEEDBACK_CRITICAL = importDefault(689).colors.ICON_FEEDBACK_POSITIVE;
    let stringResult1 = stringResult;
    let tmp8 = tmp6;
  } else if (tmp5) {
    tmp8 = importDefault(12203);
    ICON_FEEDBACK_CRITICAL = ICON_SUBTLE;
    stringResult1 = startDateTimeString;
  } else if (currentOrPastEvent) {
    tmp8 = importDefault(12203);
    const intl3 = require(1212) /* getSystemLocale */.intl;
    stringResult1 = intl3.string(require(1212) /* getSystemLocale */.t.WINqKV);
    ICON_FEEDBACK_CRITICAL = ICON_SUBTLE;
  } else {
    ICON_FEEDBACK_CRITICAL = ICON_SUBTLE;
    stringResult1 = startDateTimeString;
    tmp8 = tmp6;
    if (upcomingEvent) {
      if (diffMinutes > 0) {
        const intl2 = require(1212) /* getSystemLocale */.intl;
        obj = { minutes: diffMinutes };
        let formatToPlainStringResult = intl2.formatToPlainString(require(1212) /* getSystemLocale */.t.PQlCWk, obj);
      } else {
        const intl = require(1212) /* getSystemLocale */.intl;
        formatToPlainStringResult = intl.string(require(1212) /* getSystemLocale */.t.WINqKV);
      }
      stringResult1 = formatToPlainStringResult;
      ICON_FEEDBACK_CRITICAL = ICON_SUBTLE;
      tmp8 = importDefault(12203);
      const tmp11 = importDefault(12203);
    }
  }
  if (isCanceled) {
    ICON_FEEDBACK_CRITICAL = importDefault(689).colors.ICON_FEEDBACK_CRITICAL;
  }
  obj = { icon: tmp8, text: stringResult1 };
  const internal = importDefault(689).internal;
  obj.color = internal.resolveSemanticColor(theme, ICON_FEEDBACK_CRITICAL);
  let tmp35 = !tmp5;
  if (tmp35) {
    if (!tmp2) {
      tmp2 = currentOrPastEvent;
    }
    if (!tmp2) {
      tmp2 = upcomingEvent;
    }
    tmp35 = tmp2;
  }
  obj.shouldChangeTextColor = tmp35;
  return obj;
};
