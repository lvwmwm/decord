// Module ID: 9489
// Function ID: 73941
// Name: openGuildHighlightNotificationForPush
// Dependencies: []
// Exports: openGuildHighlightNotificationForPush

// Module 9489 (openGuildHighlightNotificationForPush)
let closure_3 = require(dependencyMap[0]).NotificationUserFeedbackReasons;
const AnalyticEvents = require(dependencyMap[1]).AnalyticEvents;
const _module = require(dependencyMap[7]);
const result = _module.fileFinishedImporting("modules/notifications/native/GuildHighlightsNotificationsActionCreators.tsx");

export const openGuildHighlightNotificationForPush = function openGuildHighlightNotificationForPush(guild_id1, message, notificationType, MESSAGE_EMBED, arg4) {
  const require = guild_id1;
  const importDefault = message;
  const dependencyMap = notificationType;
  const constants = MESSAGE_EMBED;
  const AnalyticEvents = arg4;
  let obj = importDefault(dependencyMap[2]);
  obj = { guildId: guild_id1 };
  obj = {};
  const obj1 = { value: constants.TOO_MANY };
  const intl = require(dependencyMap[5]).intl;
  obj1.label = intl.string(require(dependencyMap[5]).t.pLeQp0);
  const items = [obj1, , , , ];
  const obj2 = { value: constants.IRRELEVANT_CHANNEL };
  const intl2 = require(dependencyMap[5]).intl;
  obj2.label = intl2.string(require(dependencyMap[5]).t.Lu4n25);
  items[1] = obj2;
  const obj3 = { value: constants.IRRELEVANT_USER };
  const intl3 = require(dependencyMap[5]).intl;
  obj3.label = intl3.string(require(dependencyMap[5]).t.TF6AhF);
  items[2] = obj3;
  const obj4 = { value: constants.IRRELEVANT_TOPIC };
  const intl4 = require(dependencyMap[5]).intl;
  obj4.label = intl4.string(require(dependencyMap[5]).t.s+8J8f);
  items[3] = obj4;
  const obj5 = { value: constants.SENSITIVE_OR_OFFENSIVE_TOPIC };
  const intl5 = require(dependencyMap[5]).intl;
  obj5.label = intl5.string(require(dependencyMap[5]).t.fEUR7Y);
  items[4] = obj5;
  obj.reasons = items;
  obj.onFeedbackShown = function onFeedbackShown(arg0, self) {
    let obj = self(arg2[6]);
    obj = { type: arg2, location: arg3, guild_id: arg0, channel_id: self.channel_id, message_id: self.id };
    const merged = Object.assign(arg4);
    obj.track(arg4.FEEDBACK_FORM_VIEWED, obj);
  };
  obj.onFeedbackCompleted = function onFeedbackCompleted(rating) {
    let obj = arg1(arg2[6]);
    obj = { type: arg2, location: arg3, rating: rating.rating };
    let value;
    if (null != rating.reason) {
      value = iter.value;
    }
    obj.reason = value;
    obj.guild_id = rating;
    ({ channel_id: obj2.channel_id, id: obj2.message_id } = arg1);
    const merged = Object.assign(arg4);
    obj.track(arg4.FEEDBACK_FORM_SUBMITTED, obj);
  };
  obj.feedbackSettings = obj;
  obj.openLazy(require(dependencyMap[4])(dependencyMap[3], dependencyMap.paths), "GuildHighlightsNotifications", obj);
};
