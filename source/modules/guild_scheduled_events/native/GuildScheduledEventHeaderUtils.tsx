// Module ID: 12088
// Function ID: 93235
// Name: getGuildScheduledEventHeaderProps
// Dependencies: []
// Exports: getGuildScheduledEventHeaderProps

// Module 12088 (getGuildScheduledEventHeaderProps)
const _module = require(dependencyMap[0]);
({ isGuildEventEnded: closure_3, isGuildScheduledEventActive: closure_4 } = _module);
let closure_5 = require(dependencyMap[1]).GuildScheduledEventEntityTypes;
const _module1 = require(dependencyMap[8]);
const result = _module1.fileFinishedImporting("modules/guild_scheduled_events/native/GuildScheduledEventHeaderUtils.tsx");

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
  let obj = require(dependencyMap[2]);
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
  const ICON_SUBTLE = importDefault(dependencyMap[3]).colors.ICON_SUBTLE;
  let tmp6 = importDefault(dependencyMap[4]);
  if (tmp2) {
    const intl4 = require(dependencyMap[5]).intl;
    let stringResult = intl4.string(require(dependencyMap[5]).t.X2K3/4);
    if (isStage) {
      tmp6 = importDefault(dependencyMap[6]);
    }
    let entity_type;
    if (null != event) {
      entity_type = event.entity_type;
    }
    if (entity_type === constants.EXTERNAL) {
      const intl5 = require(dependencyMap[5]).intl;
      stringResult = intl5.string(require(dependencyMap[5]).t.TxqPQR);
    }
    let ICON_FEEDBACK_CRITICAL = importDefault(dependencyMap[3]).colors.ICON_FEEDBACK_POSITIVE;
    let stringResult1 = stringResult;
    let tmp8 = tmp6;
  } else if (tmp5) {
    tmp8 = importDefault(dependencyMap[7]);
    ICON_FEEDBACK_CRITICAL = ICON_SUBTLE;
    stringResult1 = startDateTimeString;
  } else if (currentOrPastEvent) {
    tmp8 = importDefault(dependencyMap[7]);
    const intl3 = require(dependencyMap[5]).intl;
    stringResult1 = intl3.string(require(dependencyMap[5]).t.WINqKV);
    ICON_FEEDBACK_CRITICAL = ICON_SUBTLE;
  } else {
    ICON_FEEDBACK_CRITICAL = ICON_SUBTLE;
    stringResult1 = startDateTimeString;
    tmp8 = tmp6;
    if (upcomingEvent) {
      if (diffMinutes > 0) {
        const intl2 = require(dependencyMap[5]).intl;
        obj = { minutes: diffMinutes };
        let formatToPlainStringResult = intl2.formatToPlainString(require(dependencyMap[5]).t.PQlCWk, obj);
      } else {
        const intl = require(dependencyMap[5]).intl;
        formatToPlainStringResult = intl.string(require(dependencyMap[5]).t.WINqKV);
      }
      stringResult1 = formatToPlainStringResult;
      ICON_FEEDBACK_CRITICAL = ICON_SUBTLE;
      tmp8 = importDefault(dependencyMap[7]);
      const tmp11 = importDefault(dependencyMap[7]);
    }
  }
  if (isCanceled) {
    ICON_FEEDBACK_CRITICAL = importDefault(dependencyMap[3]).colors.ICON_FEEDBACK_CRITICAL;
  }
  obj = { icon: tmp8, text: stringResult1 };
  const internal = importDefault(dependencyMap[3]).internal;
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
