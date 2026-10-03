// Module ID: 9272
// Function ID: 9273
// Name: GuildScheduledEventHeaderUtils
// Dependencies: [7037, 2057, 9163, 587, 9273, 1126, 9193, 9274, 2]
// Exports: getGuildScheduledEventHeaderProps

// Module 9272 (GuildScheduledEventHeaderUtils)
import nativeDefault from "native" /* 587 */;
import GuildScheduledEventsConstants from "GuildScheduledEventsConstants" /* 2057 */;
import ScheduleUtils from "ScheduleUtils" /* 9163 */;
import AssetRegistryDefault from "AssetRegistry" /* 9273 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 9274 */;
import GuildScheduledEventStore from "GuildScheduledEventStore" /* 7037 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
({ isGuildEventEnded: c3, isGuildScheduledEventActive: closure_4 } = GuildScheduledEventStore);
const constants = GuildScheduledEventsConstants.GuildScheduledEventEntityTypes;
const result = size.fileFinishedImporting("modules/guild_scheduled_events/native/GuildScheduledEventHeaderUtils.tsx");

export const getGuildScheduledEventHeaderProps = function getGuildScheduledEventHeaderProps(eventTimeData) {
  let ICON_FEEDBACK_CRITICAL;
  let currentOrPastEvent;
  let diffMinutes;
  let event;
  let internal;
  let isCanceled;
  let isStage;
  let recurrenceId;
  let startDateTimeString;
  let stringResult1;
  let theme;
  let tmp17;
  let tmp4;
  let tmp8Result3;
  let upcomingEvent;
  ({ startDateTimeString, diffMinutes, currentOrPastEvent, upcomingEvent } = eventTimeData.eventTimeData);
  ({ event, recurrenceId } = eventTimeData);
  ({ isStage, theme, isCanceled } = eventTimeData);
  const obj = ScheduleUtils;
  if (null != recurrenceId) {
    tmp4 = obj.getNextRecurrenceIdInEvent(event) === recurrenceId && React3(event);
    const tmp5 = obj.getNextRecurrenceIdInEvent(event) === recurrenceId && React3(event);
  } else {
    tmp4 = React3(event);
  }
  const tmp7 = _false(event);
  const ICON_SUBTLE = nativeDefault.colors.ICON_SUBTLE;
  let tmp8Result = AssetRegistryDefault;
  if (tmp4) {
    const intl4 = tmp(1126).intl;
    let stringResult = intl4.string(tmp(1126).t["X2K3/4"]);
    if (isStage) {
      tmp8Result = tmp8(9193);
    }
    let entity_type;
    if (event != null) {
      entity_type = event.entity_type;
    }
    if (entity_type === constants.EXTERNAL) {
      const intl5 = tmp(1126).intl;
      stringResult = intl5.string(tmp(1126).t.TxqPQR);
    }
    ICON_FEEDBACK_CRITICAL = tmp8(587).colors.ICON_FEEDBACK_POSITIVE;
    stringResult1 = stringResult;
    tmp8Result3 = tmp8Result;
  } else if (tmp7) {
    tmp8Result3 = tmp8(9274);
    stringResult1 = startDateTimeString;
    ICON_FEEDBACK_CRITICAL = ICON_SUBTLE;
  } else if (currentOrPastEvent) {
    tmp8Result3 = tmp8(9274);
    const intl3 = tmp(1126).intl;
    stringResult1 = intl3.string(tmp(1126).t.WINqKV);
    ICON_FEEDBACK_CRITICAL = ICON_SUBTLE;
  } else {
    tmp8Result3 = tmp8Result;
    stringResult1 = startDateTimeString;
    ICON_FEEDBACK_CRITICAL = ICON_SUBTLE;
    if (upcomingEvent) {
      let formatToPlainStringResult;
      const tmp8Result4 = AssetRegistryDefault2;
      if (diffMinutes > 0) {
        const intl2 = tmp(1126).intl;
        const obj2 = { minutes: diffMinutes };
        formatToPlainStringResult = intl2.formatToPlainString(tmp(1126).t.PQlCWk, obj2);
      } else {
        const intl = tmp(1126).intl;
        formatToPlainStringResult = intl.string(tmp(1126).t.WINqKV);
      }
      stringResult1 = formatToPlainStringResult;
      tmp8Result3 = tmp8Result4;
      ICON_FEEDBACK_CRITICAL = ICON_SUBTLE;
    }
  }
  if (isCanceled) {
    ICON_FEEDBACK_CRITICAL = tmp8(587).colors.ICON_FEEDBACK_CRITICAL;
  }
  const obj3 = { icon: tmp8Result3, text: stringResult1, color: internal.resolveSemanticColor(theme, ICON_FEEDBACK_CRITICAL), shouldChangeTextColor: tmp17 };
  internal = tmp8(587).internal;
  tmp17 = !tmp7;
  if (tmp17) {
    if (!tmp4) {
      tmp4 = currentOrPastEvent;
    }
    if (!tmp4) {
      tmp4 = upcomingEvent;
    }
    tmp17 = tmp4;
  }
  return obj3;
};
