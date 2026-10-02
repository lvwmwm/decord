// Module ID: 9050
// Function ID: 9051
// Name: GuildScheduledEventHeaderUtils
// Dependencies: [6950, 2057, 8941, 588, 9051, 1127, 8971, 9052, 2]
// Exports: getGuildScheduledEventHeaderProps

// Module 9050 (GuildScheduledEventHeaderUtils)
import nativeDefault from "native" /* 588 */;
import GuildScheduledEventsConstants from "GuildScheduledEventsConstants" /* 2057 */;
import ScheduleUtils from "ScheduleUtils" /* 8941 */;
import AssetRegistryDefault from "AssetRegistry" /* 9051 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 9052 */;
import GuildScheduledEventStore from "GuildScheduledEventStore" /* 6950 */;
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
    const intl4 = tmp(1127).intl;
    let stringResult = intl4.string(tmp(1127).t["X2K3/4"]);
    if (isStage) {
      tmp8Result = tmp8(8971);
    }
    let entity_type;
    if (event != null) {
      entity_type = event.entity_type;
    }
    if (entity_type === constants.EXTERNAL) {
      const intl5 = tmp(1127).intl;
      stringResult = intl5.string(tmp(1127).t.TxqPQR);
    }
    ICON_FEEDBACK_CRITICAL = tmp8(588).colors.ICON_FEEDBACK_POSITIVE;
    stringResult1 = stringResult;
    tmp8Result3 = tmp8Result;
  } else if (tmp7) {
    tmp8Result3 = tmp8(9052);
    stringResult1 = startDateTimeString;
    ICON_FEEDBACK_CRITICAL = ICON_SUBTLE;
  } else if (currentOrPastEvent) {
    tmp8Result3 = tmp8(9052);
    const intl3 = tmp(1127).intl;
    stringResult1 = intl3.string(tmp(1127).t.WINqKV);
    ICON_FEEDBACK_CRITICAL = ICON_SUBTLE;
  } else {
    tmp8Result3 = tmp8Result;
    stringResult1 = startDateTimeString;
    ICON_FEEDBACK_CRITICAL = ICON_SUBTLE;
    if (upcomingEvent) {
      let formatToPlainStringResult;
      const tmp8Result4 = AssetRegistryDefault2;
      if (diffMinutes > 0) {
        const intl2 = tmp(1127).intl;
        const obj2 = { minutes: diffMinutes };
        formatToPlainStringResult = intl2.formatToPlainString(tmp(1127).t.PQlCWk, obj2);
      } else {
        const intl = tmp(1127).intl;
        formatToPlainStringResult = intl.string(tmp(1127).t.WINqKV);
      }
      stringResult1 = formatToPlainStringResult;
      tmp8Result3 = tmp8Result4;
      ICON_FEEDBACK_CRITICAL = ICON_SUBTLE;
    }
  }
  if (isCanceled) {
    ICON_FEEDBACK_CRITICAL = tmp8(588).colors.ICON_FEEDBACK_CRITICAL;
  }
  const obj3 = { icon: tmp8Result3, text: stringResult1, color: internal.resolveSemanticColor(theme, ICON_FEEDBACK_CRITICAL), shouldChangeTextColor: tmp17 };
  internal = tmp8(588).internal;
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
