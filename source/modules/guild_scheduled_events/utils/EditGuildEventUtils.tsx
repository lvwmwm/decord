// Module ID: 8338
// Function ID: 66129
// Name: recurrenceRuleToServer
// Dependencies: []
// Exports: convertToFakeGuildEvent, getInitialGuildEventData, isEditingEvent

// Module 8338 (recurrenceRuleToServer)
function recurrenceRuleToServer(recurrenceRule) {
  let byMonthDay;
  let tmp = null;
  if (null != recurrenceRule) {
    const obj = {};
    ({ start: obj.start, end: obj.end, frequency: obj.frequency, interval: obj.interval, byWeekday: obj.by_weekday, byNWeekday: obj.by_n_weekday, byMonth: obj.by_month, byMonthDay } = recurrenceRule);
    let length;
    if (null != byMonthDay) {
      length = byMonthDay.length;
    }
    let num2 = 0;
    if (null != length) {
      num2 = length;
    }
    byMonthDay = null;
    if (num2 > 0) {
      byMonthDay = recurrenceRule.byMonthDay;
    }
    obj.by_month_day = byMonthDay;
    ({ byYearDay: obj.by_year_day, count: obj.count } = recurrenceRule);
    tmp = obj;
  }
  return tmp;
}
function recurrenceRuleFromServer(recurrence_rule) {
  let tmp = null;
  if (null != recurrence_rule) {
    const obj = {};
    const _Date = Date;
    const date = new Date(recurrence_rule.start);
    obj.start = date.toISOString();
    let toISOStringResult = null;
    if (null != recurrence_rule.end) {
      const _Date2 = Date;
      const date1 = new Date(recurrence_rule.end);
      toISOStringResult = date1.toISOString();
    }
    obj.end = toISOStringResult;
    ({ frequency: obj.frequency, interval: obj.interval, by_weekday: obj.byWeekday, by_n_weekday: obj.byNWeekday, by_month: obj.byMonth, by_month_day: obj.byMonthDay, by_year_day: obj.byYearDay, count: obj.count } = recurrence_rule);
    tmp = obj;
  }
  return tmp;
}
function eventExceptionsToServer(eventExceptions) {
  return eventExceptions.map((eventExceptionId) => ({ event_exception_id: eventExceptionId.eventExceptionId, event_id: eventExceptionId.eventId, guild_id: eventExceptionId.guildId, scheduled_start_time: eventExceptionId.scheduledStartTime, scheduled_end_time: eventExceptionId.scheduledEndTime, is_canceled: eventExceptionId.isCanceled }));
}
function isExistingGuildEvent(initialGuildEvent) {
  let tmp = null != initialGuildEvent;
  if (tmp) {
    tmp = "id" in initialGuildEvent;
  }
  return tmp;
}
let closure_2 = importDefault(dependencyMap[0]);
({ GuildScheduledEventEntityTypes: closure_3, GuildScheduledEventStatus: closure_4, GuildScheduledEventPrivacyLevel: closure_5, FAKE_EVENT_ID: closure_6 } = arg1(dependencyMap[1]));
const tmp2 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/guild_scheduled_events/utils/EditGuildEventUtils.tsx");

export const EditGuildEventScreens = { CHANNEL_SELECTOR: "ChannelSelector", DETAILS: "Details", PREVIEW: "Preview" };
export const isEditingEvent = function isEditingEvent(initialGuildEvent) {
  let id;
  if (null != initialGuildEvent) {
    id = initialGuildEvent.id;
  }
  return Boolean(id);
};
export { recurrenceRuleToServer };
export { recurrenceRuleFromServer };
export { isExistingGuildEvent };
export const convertToFakeGuildEvent = function convertToFakeGuildEvent(guildEvent, id) {
  let channelId;
  let description;
  let entityMetadata;
  let entityType;
  let eventExceptions;
  let image;
  let name;
  let privacyLevel;
  let recurrenceRule;
  let scheduledEndTime;
  let scheduledStartTime;
  let tmp = arg2;
  ({ description, entityMetadata, image } = guildEvent);
  const obj = {};
  ({ name, privacyLevel, channelId, scheduledStartTime, scheduledEndTime, entityType, recurrenceRule, eventExceptions } = guildEvent);
  if (null == arg2) {
    tmp = closure_6;
  }
  obj.id = tmp;
  obj.name = name;
  let tmp2 = null;
  if (null != description) {
    tmp2 = description;
  }
  obj.description = tmp2;
  obj.privacy_level = privacyLevel;
  obj.scheduled_start_time = scheduledStartTime;
  obj.scheduled_end_time = scheduledEndTime;
  obj.entity_type = entityType;
  let tmp3 = null;
  if (null != entityMetadata) {
    tmp3 = entityMetadata;
  }
  obj.entity_metadata = tmp3;
  let tmp4;
  if (null != image) {
    tmp4 = image;
  }
  obj.image = tmp4;
  obj.channel_id = channelId;
  obj.guild_id = id;
  obj.creator_id = id.getId();
  obj.status = constants2.SCHEDULED;
  obj.recurrence_rule = recurrenceRuleToServer(recurrenceRule);
  obj.guild_scheduled_event_exceptions = eventExceptionsToServer(eventExceptions);
  return obj;
};
export const getInitialGuildEventData = function getInitialGuildEventData(initialGuildEvent, targetChannel) {
  let obj = {};
  let name;
  if (null != initialGuildEvent) {
    name = initialGuildEvent.name;
  }
  let str = "";
  let str2 = "";
  if (null != name) {
    str2 = name;
  }
  obj.name = str2;
  let privacy_level;
  if (null != initialGuildEvent) {
    privacy_level = initialGuildEvent.privacy_level;
  }
  if (null == privacy_level) {
    privacy_level = constants3.GUILD_ONLY;
  }
  obj.privacyLevel = privacy_level;
  let description;
  if (null != initialGuildEvent) {
    description = initialGuildEvent.description;
  }
  if (null != description) {
    str = description;
  }
  obj.description = str;
  let scheduled_start_time;
  if (null != initialGuildEvent) {
    scheduled_start_time = initialGuildEvent.scheduled_start_time;
  }
  if (null == scheduled_start_time) {
    const initialEventStartDate = targetChannel(dependencyMap[2]).getInitialEventStartDate();
    scheduled_start_time = initialEventStartDate.toISOString();
    const obj2 = targetChannel(dependencyMap[2]);
  }
  obj.scheduledStartTime = scheduled_start_time;
  let entity_type;
  if (null != initialGuildEvent) {
    entity_type = initialGuildEvent.entity_type;
  }
  if (null == entity_type) {
    entity_type = constants.NONE;
  }
  obj.entityType = entity_type;
  let entity_metadata;
  if (null != initialGuildEvent) {
    entity_metadata = initialGuildEvent.entity_metadata;
  }
  let tmp11;
  if (null != entity_metadata) {
    tmp11 = entity_metadata;
  }
  obj.entityMetadata = tmp11;
  let channel_id;
  if (null != initialGuildEvent) {
    channel_id = initialGuildEvent.channel_id;
  }
  obj.channelId = channel_id;
  let creator_id;
  if (null != initialGuildEvent) {
    creator_id = initialGuildEvent.creator_id;
  }
  obj.creatorId = creator_id;
  let image;
  if (null != initialGuildEvent) {
    image = initialGuildEvent.image;
  }
  obj.image = image;
  let scheduled_end_time;
  if (null != initialGuildEvent) {
    scheduled_end_time = initialGuildEvent.scheduled_end_time;
  }
  obj.scheduledEndTime = scheduled_end_time;
  let recurrence_rule;
  if (null != initialGuildEvent) {
    recurrence_rule = initialGuildEvent.recurrence_rule;
  }
  obj.recurrenceRule = recurrenceRuleFromServer(recurrence_rule);
  let prop;
  if (null != initialGuildEvent) {
    prop = initialGuildEvent.guild_scheduled_event_exceptions;
  }
  if (null == prop) {
    prop = [];
  }
  obj.eventExceptions = prop.map((eventExceptionId) => ({ eventExceptionId: eventExceptionId.event_exception_id, eventId: eventExceptionId.event_id, guildId: eventExceptionId.guild_id, scheduledStartTime: eventExceptionId.scheduled_start_time, scheduledEndTime: eventExceptionId.scheduled_end_time, isCanceled: eventExceptionId.is_canceled }));
  if (isExistingGuildEvent(initialGuildEvent)) {
    let entity_type1;
    if (null != initialGuildEvent) {
      entity_type1 = initialGuildEvent.entity_type;
    }
    if (entity_type1 === constants.EXTERNAL) {
      const locationFromEvent = targetChannel(dependencyMap[3]).getLocationFromEvent(initialGuildEvent);
      if (null != locationFromEvent) {
        obj = { location: locationFromEvent };
        obj.entityMetadata = obj;
      }
      const obj4 = targetChannel(dependencyMap[3]);
    }
    return obj;
  }
  if (tmp20) {
    obj.channelId = targetChannel.id;
    if (targetChannel.isGuildStageVoice()) {
      obj.entityType = constants.STAGE_INSTANCE;
    } else if (targetChannel.isGuildVoice()) {
      obj.entityType = constants.VOICE;
    }
  }
};
