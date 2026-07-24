// Module ID: 9533
// Function ID: 74215
// Name: openGuildHighlightNotificationForPush
// Dependencies: [9534, 653, 4098, 9535, 1934, 1212, 675, 2]
// Exports: openGuildHighlightNotificationForPush

// Module 9533 (openGuildHighlightNotificationForPush)
import { NotificationUserFeedbackReasons as closure_3 } from "NotificationUserFeedbackReasons";
import { AnalyticEvents } from "ME";

const result = require("showActionSheet").fileFinishedImporting("modules/notifications/native/GuildHighlightsNotificationsActionCreators.tsx");

export const openGuildHighlightNotificationForPush = function openGuildHighlightNotificationForPush(guild_id1, message, notificationType, MESSAGE_EMBED, arg4) {
  const _require = guild_id1;
  const importDefault = message;
  const dependencyMap = notificationType;
  const constants = MESSAGE_EMBED;
  let closure_4 = arg4;
  let obj = importDefault(4098);
  obj = { guildId: guild_id1 };
  obj = {};
  const obj1 = { value: constants.TOO_MANY };
  const intl = _require(1212).intl;
  obj1.label = intl.string(_require(1212).t.pLeQp0);
  const items = [obj1, , , , ];
  const obj2 = { value: constants.IRRELEVANT_CHANNEL };
  const intl2 = _require(1212).intl;
  obj2.label = intl2.string(_require(1212).t.Lu4n25);
  items[1] = obj2;
  const obj3 = { value: constants.IRRELEVANT_USER };
  const intl3 = _require(1212).intl;
  obj3.label = intl3.string(_require(1212).t.TF6AhF);
  items[2] = obj3;
  const obj4 = { value: constants.IRRELEVANT_TOPIC };
  const intl4 = _require(1212).intl;
  obj4.label = intl4.string(_require(1212).t["s+8J8f"]);
  items[3] = obj4;
  const obj5 = { value: constants.SENSITIVE_OR_OFFENSIVE_TOPIC };
  const intl5 = _require(1212).intl;
  obj5.label = intl5.string(_require(1212).t.fEUR7Y);
  items[4] = obj5;
  obj.reasons = items;
  obj.onFeedbackShown = function onFeedbackShown() {
    let obj = message(notificationType[6]);
    obj = { type: notificationType, location: closure_3, guild_id: closure_0, channel_id: message.channel_id, message_id: message.id };
    const merged = Object.assign(constants);
    obj.track(constants.FEEDBACK_FORM_VIEWED, obj);
  };
  obj.onFeedbackCompleted = function onFeedbackCompleted(rating) {
    let obj = message(notificationType[6]);
    obj = { type: notificationType, location: closure_3, rating: rating.rating };
    let value;
    if (null != rating.reason) {
      value = iter.value;
    }
    obj.reason = value;
    obj.guild_id = closure_0;
    ({ channel_id: obj2.channel_id, id: obj2.message_id } = message);
    const merged = Object.assign(constants);
    obj.track(constants.FEEDBACK_FORM_SUBMITTED, obj);
  };
  obj.feedbackSettings = obj;
  obj.openLazy(_require(1934)(9535, dependencyMap.paths), "GuildHighlightsNotifications", obj);
};
