// Module ID: 8333
// Function ID: 66070
// Dependencies: []

// Module 8333
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
({ ENTITY_TYPES_REQUIRED_CHANNEL_ID: closure_6, ENTITY_TYPES_REQUIRED_ENTITY_METADATA: closure_7, GuildScheduledEventStatus: closure_8, MAX_RSVP_USER_DISPLAY_COUNT: closure_9 } = arg1(dependencyMap[3]));
const tmp2 = arg1(dependencyMap[3]);
({ Endpoints: closure_10, Routes: closure_11 } = arg1(dependencyMap[4]));
const obj = {
  startEvent(arg0, arg1) {
    const HTTP = arg1(dependencyMap[5]).HTTP;
    let obj = { url: closure_10.GUILD_EVENT(arg1, arg0), body: obj };
    obj = { status: constants.ACTIVE, rejectWithError: arg1(dependencyMap[5]).rejectWithMigratedError() };
    return HTTP.patch(obj);
  },
  endEvent(arg0, arg1) {
    const HTTP = arg1(dependencyMap[5]).HTTP;
    let obj = { url: closure_10.GUILD_EVENT(arg1, arg0), body: obj };
    obj = { status: constants.COMPLETED, rejectWithError: arg1(dependencyMap[5]).rejectWithMigratedError() };
    return HTTP.patch(obj);
  },
  joinVoiceEvent(arg0, channelId) {
    const voiceChannel = importDefault(dependencyMap[6]).selectVoiceChannel(channelId);
    const obj = importDefault(dependencyMap[6]);
    channelId(dependencyMap[7]).transitionTo(closure_11.CHANNEL(arg0, channelId));
  },
  saveEvent(arg0, entityType) {
    let channelId = null;
    if (set.has(entityType.entityType)) {
      channelId = entityType.channelId;
    }
    let entityMetadata = null;
    if (set2.has(entityType.entityType)) {
      entityMetadata = entityType.entityMetadata;
    }
    if (null == entityType.image) {
      const image = entityType.image;
    } else {
      let obj = /^data:/;
    }
    obj = { name: entityType.name, description: entityType.description, image };
    ({ privacyLevel: obj2.privacy_level, scheduledStartTime: obj2.scheduled_start_time, scheduledEndTime: obj2.scheduled_end_time, entityType: obj2.entity_type } = entityType);
    obj.channel_id = channelId;
    obj.entity_metadata = entityMetadata;
    obj.recurrence_rule = entityType(dependencyMap[8]).recurrenceRuleToServer(entityType.recurrenceRule);
    const HTTP = entityType(dependencyMap[5]).HTTP;
    obj = { url: closure_10.GUILD_EVENT(arg2, arg0), body: obj };
    const obj3 = entityType(dependencyMap[8]);
    obj.rejectWithError = entityType(dependencyMap[5]).rejectWithMigratedError();
    return HTTP.patch(obj);
  },
  createGuildEvent(first, id) {
    let obj = { name: first.name, description: first.description, image: first.image, privacy_level: first.privacyLevel, scheduled_start_time: first.scheduledStartTime, scheduled_end_time: first.scheduledEndTime, entity_type: first.entityType, channel_id: first.channelId, entity_metadata: first.entityMetadata, recurrence_rule: id(dependencyMap[8]).recurrenceRuleToServer(first.recurrenceRule) };
    const HTTP = id(dependencyMap[5]).HTTP;
    obj = { url: closure_10.GUILD_EVENTS_FOR_GUILD(id), body: obj };
    const obj2 = id(dependencyMap[8]);
    obj.rejectWithError = id(dependencyMap[5]).rejectWithMigratedError();
    return HTTP.post(obj);
  },
  fetchGuildEvent(guildId, guildEventId) {
    guildEventId = guildId;
    const importDefault = guildEventId;
    // CreateGeneratorClosureLongIndex (0x67)
    return callback(tmp)();
  },
  fetchGuildEventsForGuild(first) {
    const arg1 = first;
    // CreateGeneratorClosureLongIndex (0x67)
    return callback(tmp)();
  },
  fetchGuildEventUserCounts(arg0, arg1, found) {
    arg1 = arg0;
    const importDefault = arg1;
    const dependencyMap = found;
    // CreateGeneratorClosureLongIndex (0x67)
    return callback(tmp)();
  },
  cancelGuildEvent(arg0, arg1) {
    const HTTP = arg1(dependencyMap[5]).HTTP;
    let obj = { url: closure_10.GUILD_EVENT(arg1, arg0), body: obj };
    obj = { status: constants.CANCELED, rejectWithError: arg1(dependencyMap[5]).rejectWithMigratedError() };
    return HTTP.patch(obj);
  },
  deleteGuildEvent(arg0, arg1) {
    const HTTP = arg1(dependencyMap[5]).HTTP;
    const obj = { url: closure_10.GUILD_EVENT(arg1, arg0), rejectWithError: arg1(dependencyMap[5]).rejectWithMigratedError() };
    return HTTP.del(obj);
  },
  getGuildEventsForCurrentUser(guild_id) {
    const arg1 = guild_id;
    // CreateGeneratorClosureLongIndex (0x67)
    return callback(tmp)();
  },
  createRsvpForGuildEvent(arg0, arg1, arg2, arg3) {
    arg1 = arg0;
    const importDefault = arg1;
    const dependencyMap = arg2;
    const callback = arg3;
    // CreateGeneratorClosureLongIndex (0x67)
    return callback(tmp)();
  },
  deleteRsvpForGuildEvent(arg0, arg1, arg2) {
    arg1 = arg0;
    const importDefault = arg1;
    const dependencyMap = arg2;
    // CreateGeneratorClosureLongIndex (0x67)
    return callback(tmp)();
  },
  updateRsvp(arg0, arg1, arg2, arg3, arg4) {
    arg1 = arg0;
    const importDefault = arg1;
    const dependencyMap = arg2;
    const callback = arg3;
    let closure_4 = arg4;
    let closure_5 = this;
    // CreateGeneratorClosureLongIndex (0x67)
    return callback(tmp)();
  },
  fetchUsersForGuildEvent(arg0, arg1, arg2) {
    let tmp2 = arg3;
    arg1 = arg0;
    const importDefault = arg1;
    const dependencyMap = arg2;
    if (arg3 === undefined) {
      tmp2 = closure_9;
    }
    const callback = tmp2;
    // CreateGeneratorClosureLongIndex (0x67)
    return callback(tmp)();
  },
  createGuildEventException(arg0, guild_id, id) {
    let is_canceled;
    let original_scheduled_start_time;
    let scheduled_end_time;
    let scheduled_start_time;
    ({ original_scheduled_start_time, scheduled_start_time, scheduled_end_time, is_canceled } = arg0);
    const HTTP = guild_id(dependencyMap[5]).HTTP;
    const obj = { url: closure_10.GUILD_EVENT_EXCEPTIONS(guild_id, id), body: { original_scheduled_start_time, scheduled_start_time, scheduled_end_time, is_canceled }, rejectWithError: guild_id(dependencyMap[5]).rejectWithMigratedError() };
    return HTTP.post(obj);
  },
  updateGuildEventException(arg0, guild_id, id, event_exception_id) {
    let is_canceled;
    let scheduled_end_time;
    let scheduled_start_time;
    ({ scheduled_start_time, scheduled_end_time, is_canceled } = arg0);
    const HTTP = guild_id(dependencyMap[5]).HTTP;
    const obj = { url: closure_10.GUILD_EVENT_EXCEPTION(guild_id, id, event_exception_id), body: { scheduled_start_time, scheduled_end_time, is_canceled }, rejectWithError: guild_id(dependencyMap[5]).rejectWithMigratedError() };
    return HTTP.patch(obj);
  },
  deleteGuildEventException(guild_id, id, event_exception_id) {
    const HTTP = id(dependencyMap[5]).HTTP;
    const obj = { url: closure_10.GUILD_EVENT_EXCEPTION(guild_id, id, event_exception_id), rejectWithError: id(dependencyMap[5]).rejectWithMigratedError() };
    return HTTP.del(obj);
  },
  deleteRecurrence(guild_id, id, event_exception_id, arg3) {
    const self = this;
    if (null != arg3) {
      let obj = {};
      ({ scheduled_start_time: obj4.scheduled_start_time, scheduled_end_time: obj4.scheduled_end_time } = arg3);
      obj.is_canceled = true;
      return self.updateGuildEventException(obj, guild_id, id, event_exception_id);
    } else {
      obj = importDefault(dependencyMap[12]);
      obj = {};
      const _Date = Date;
      const date = new Date(obj.extractTimestamp(event_exception_id));
      obj.original_scheduled_start_time = date.toISOString();
      obj.is_canceled = true;
      return self.createGuildEventException(obj, guild_id, id);
    }
  }
};
const tmp3 = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[13]).fileFinishedImporting("modules/guild_scheduled_events/GuildScheduledEventsActionCreators.tsx");

export default obj;
