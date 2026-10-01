// Module ID: 9266
// Function ID: 9267
// Name: GuildScheduledEventHeaderUtils
// Dependencies: [7134, 2050, 9139, 576, 9267, 1115, 8268, 9268, 2]
// Exports: getGuildScheduledEventHeaderProps

// Module 9266 (GuildScheduledEventHeaderUtils)
import nativeDefault from "native" /* 576 */;
import GuildScheduledEventsConstants from "GuildScheduledEventsConstants" /* 2050 */;
import _modDef9267 from "module_9267" /* 9267 */;
import GuildScheduledEventStore from "GuildScheduledEventStore" /* 7134 */;
import size from "module_2" /* 2 */;

({ isGuildEventEnded: c3, isGuildScheduledEventActive: closure_4 } = GuildScheduledEventStore);
const constants = GuildScheduledEventsConstants.GuildScheduledEventEntityTypes;
const result = size.fileFinishedImporting("modules/guild_scheduled_events/native/GuildScheduledEventHeaderUtils.tsx");

export const getGuildScheduledEventHeaderProps = function getGuildScheduledEventHeaderProps(eventTimeData) {
  ({ startDateTimeString, diffMinutes, currentOrPastEvent, upcomingEvent } = eventTimeData.eventTimeData);
  ({ event, recurrenceId } = eventTimeData);
  ({ isStage, theme, isCanceled } = eventTimeData);
  if (null != recurrenceId) {
    let tmp5 = obj.getNextRecurrenceIdInEvent(event) === recurrenceId;
    if (tmp5) {
      tmp5 = React4(event);
    }
    let tmp4 = tmp5;
  } else {
    tmp4 = React4(event);
  }
  const tmp7 = React3(event);
  const ICON_SUBTLE = nativeDefault.colors.ICON_SUBTLE;
  let tmp8Result = _modDef9267;
  if (tmp4) {
    const intl4 = tmp(1115).intl;
    let stringResult = intl4.string(tmp(1115).t["X2K3/4"]);
    if (isStage) {
      tmp8Result = tmp8(8268);
    }
    let entity_type;
    if (event != null) {
      entity_type = event.entity_type;
    }
    if (entity_type === constants.EXTERNAL) {
      const intl5 = tmp(1115).intl;
      stringResult = intl5.string(tmp(1115).t.TxqPQR);
    }
    let ICON_FEEDBACK_CRITICAL = tmp8(576).colors.ICON_FEEDBACK_POSITIVE;
    let stringResult1 = stringResult;
    let tmp8Result3 = tmp8Result;
  } else if (tmp7) {
    tmp8Result3 = tmp8(9268);
    stringResult1 = startDateTimeString;
    ICON_FEEDBACK_CRITICAL = ICON_SUBTLE;
  } else if (currentOrPastEvent) {
    tmp8Result3 = tmp8(9268);
    const intl3 = tmp(1115).intl;
    stringResult1 = intl3.string(tmp(1115).t.WINqKV);
    ICON_FEEDBACK_CRITICAL = ICON_SUBTLE;
  } else {
    tmp8Result3 = tmp8Result;
    stringResult1 = startDateTimeString;
    ICON_FEEDBACK_CRITICAL = ICON_SUBTLE;
    if (upcomingEvent) {
      if (diffMinutes > 0) {
        const intl2 = tmp(1115).intl;
        const obj2 = { minutes: diffMinutes };
        let formatToPlainStringResult = intl2.formatToPlainString(tmp(1115).t.PQlCWk, obj2);
      } else {
        const intl = tmp(1115).intl;
        formatToPlainStringResult = intl.string(tmp(1115).t.WINqKV);
      }
      stringResult1 = formatToPlainStringResult;
      tmp8Result3 = tmp8(9268);
      ICON_FEEDBACK_CRITICAL = ICON_SUBTLE;
      const tmp8Result4 = tmp8(9268);
    }
  }
  if (isCanceled) {
    ICON_FEEDBACK_CRITICAL = tmp8(576).colors.ICON_FEEDBACK_CRITICAL;
  }
  const obj3 = { icon: tmp8Result3, text: stringResult1, color: null, shouldChangeTextColor: null };
  const internal = tmp8(576).internal;
  obj3.color = internal.resolveSemanticColor(theme, ICON_FEEDBACK_CRITICAL);
  let tmp17 = !tmp7;
  if (!tmp7) {
    if (!tmp4) {
      tmp4 = currentOrPastEvent;
    }
    if (!tmp4) {
      tmp4 = upcomingEvent;
    }
    tmp17 = tmp4;
  }
  obj3.shouldChangeTextColor = tmp17;
  return obj3;
};
