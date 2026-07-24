// Module ID: 8388
// Function ID: 66370
// Dependencies: [5, 1194, 6758, 1354, 653, 507, 4944, 1198, 8389, 4369, 686, 8394, 21, 2]

// Module 8388
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import GUILD_EVENT_MAX_NAME_LENGTH from "GUILD_EVENT_MAX_NAME_LENGTH";
import ME from "ME";

let closure_10;
let closure_11;
let closure_6;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
({ ENTITY_TYPES_REQUIRED_CHANNEL_ID: closure_6, ENTITY_TYPES_REQUIRED_ENTITY_METADATA: closure_7, GuildScheduledEventStatus: closure_8, MAX_RSVP_USER_DISPLAY_COUNT: closure_9 } = GUILD_EVENT_MAX_NAME_LENGTH);
({ Endpoints: closure_10, Routes: closure_11 } = ME);
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/guild_scheduled_events/GuildScheduledEventsActionCreators.tsx");

export default {
  startEvent(arg0, arg1) {
    const HTTP = require(507) /* _isNativeReflectConstruct */.HTTP;
    obj = { url: closure_10.GUILD_EVENT(arg1, arg0), body: obj };
    obj = { status: constants.ACTIVE, rejectWithError: require(507) /* _isNativeReflectConstruct */.rejectWithMigratedError() };
    return HTTP.patch(obj);
  },
  endEvent(arg0, arg1) {
    const HTTP = require(507) /* _isNativeReflectConstruct */.HTTP;
    obj = { url: closure_10.GUILD_EVENT(arg1, arg0), body: obj };
    obj = { status: constants.COMPLETED, rejectWithError: require(507) /* _isNativeReflectConstruct */.rejectWithMigratedError() };
    return HTTP.patch(obj);
  },
  joinVoiceEvent(arg0, channelId) {
    const voiceChannel = importDefault(4944).selectVoiceChannel(channelId);
    const obj = importDefault(4944);
    require(1198) /* shouldNavigate */.transitionTo(closure_11.CHANNEL(arg0, channelId));
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
    obj.recurrence_rule = require(8389) /* recurrenceRuleToServer */.recurrenceRuleToServer(entityType.recurrenceRule);
    const HTTP = require(507) /* _isNativeReflectConstruct */.HTTP;
    obj = { url: closure_10.GUILD_EVENT(arg2, arg0), body: obj };
    const obj3 = require(8389) /* recurrenceRuleToServer */;
    obj.rejectWithError = require(507) /* _isNativeReflectConstruct */.rejectWithMigratedError();
    return HTTP.patch(obj);
  },
  createGuildEvent(first, id) {
    let obj = { name: first.name, description: first.description, image: first.image, privacy_level: first.privacyLevel, scheduled_start_time: first.scheduledStartTime, scheduled_end_time: first.scheduledEndTime, entity_type: first.entityType, channel_id: first.channelId, entity_metadata: first.entityMetadata, recurrence_rule: require(8389) /* recurrenceRuleToServer */.recurrenceRuleToServer(first.recurrenceRule) };
    const HTTP = require(507) /* _isNativeReflectConstruct */.HTTP;
    obj = { url: closure_10.GUILD_EVENTS_FOR_GUILD(id), body: obj };
    const obj2 = require(8389) /* recurrenceRuleToServer */;
    obj.rejectWithError = require(507) /* _isNativeReflectConstruct */.rejectWithMigratedError();
    return HTTP.post(obj);
  },
  fetchGuildEvent(guildId, guildEventId) {
    let closure_0 = guildId;
    let closure_1 = guildEventId;
    // CreateGeneratorClosureLongIndex (0x67)
    return callback(tmp)();
  },
  fetchGuildEventsForGuild(first) {
    let closure_0 = first;
    // CreateGeneratorClosureLongIndex (0x67)
    return callback(tmp)();
  },
  fetchGuildEventUserCounts(arg0, arg1, found) {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = found;
    // CreateGeneratorClosureLongIndex (0x67)
    return callback(tmp)();
  },
  cancelGuildEvent(arg0, arg1) {
    const HTTP = require(507) /* _isNativeReflectConstruct */.HTTP;
    obj = { url: closure_10.GUILD_EVENT(arg1, arg0), body: obj };
    obj = { status: constants.CANCELED, rejectWithError: require(507) /* _isNativeReflectConstruct */.rejectWithMigratedError() };
    return HTTP.patch(obj);
  },
  deleteGuildEvent(arg0, arg1) {
    const HTTP = require(507) /* _isNativeReflectConstruct */.HTTP;
    const obj = { url: closure_10.GUILD_EVENT(arg1, arg0), rejectWithError: require(507) /* _isNativeReflectConstruct */.rejectWithMigratedError() };
    return HTTP.del(obj);
  },
  getGuildEventsForCurrentUser(guild_id) {
    let closure_0 = guild_id;
    // CreateGeneratorClosureLongIndex (0x67)
    return callback(tmp)();
  },
  createRsvpForGuildEvent(arg0, arg1, arg2, arg3) {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    const callback = arg3;
    // CreateGeneratorClosureLongIndex (0x67)
    return callback(tmp)();
  },
  deleteRsvpForGuildEvent(arg0, arg1, arg2) {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    // CreateGeneratorClosureLongIndex (0x67)
    return callback(tmp)();
  },
  updateRsvp(arg0, arg1, arg2, arg3, arg4) {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    const callback = arg3;
    let closure_4 = arg4;
    const self = this;
    // CreateGeneratorClosureLongIndex (0x67)
    return callback(tmp)();
  },
  fetchUsersForGuildEvent(arg0, arg1, arg2) {
    let tmp2 = arg3;
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
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
    const HTTP = require(507) /* _isNativeReflectConstruct */.HTTP;
    const obj = { url: closure_10.GUILD_EVENT_EXCEPTIONS(guild_id, id), body: { original_scheduled_start_time, scheduled_start_time, scheduled_end_time, is_canceled }, rejectWithError: require(507) /* _isNativeReflectConstruct */.rejectWithMigratedError() };
    return HTTP.post(obj);
  },
  updateGuildEventException(arg0, guild_id, id, event_exception_id) {
    let is_canceled;
    let scheduled_end_time;
    let scheduled_start_time;
    ({ scheduled_start_time, scheduled_end_time, is_canceled } = arg0);
    const HTTP = require(507) /* _isNativeReflectConstruct */.HTTP;
    const obj = { url: closure_10.GUILD_EVENT_EXCEPTION(guild_id, id, event_exception_id), body: { scheduled_start_time, scheduled_end_time, is_canceled }, rejectWithError: require(507) /* _isNativeReflectConstruct */.rejectWithMigratedError() };
    return HTTP.patch(obj);
  },
  deleteGuildEventException(guild_id, id, event_exception_id) {
    const HTTP = require(507) /* _isNativeReflectConstruct */.HTTP;
    const obj = { url: closure_10.GUILD_EVENT_EXCEPTION(guild_id, id, event_exception_id), rejectWithError: require(507) /* _isNativeReflectConstruct */.rejectWithMigratedError() };
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
      obj = importDefault(21);
      obj = {};
      const _Date = Date;
      const date = new Date(obj.extractTimestamp(event_exception_id));
      obj.original_scheduled_start_time = date.toISOString();
      obj.is_canceled = true;
      return self.createGuildEventException(obj, guild_id, id);
    }
  }
};
