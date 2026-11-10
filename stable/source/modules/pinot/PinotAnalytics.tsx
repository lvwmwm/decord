// Module ID: 11335
// Function ID: 11336
// Name: PinotAnalytics
// Dependencies: [1072, 1252, 11336, 2]
// Exports: trackPinotNoticeAction, trackPinotNoticeViewed, trackPinotSettingsViewed

// Module 11335 (PinotAnalytics)
import Constants from "Constants" /* 1072 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import PinotDraft from "PinotDraft" /* 11336 */;
import size from "module_2" /* 2 */;

let includedChannelIds;

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/pinot/PinotAnalytics.tsx");

export function trackPinotNoticeViewed(noticeType) {
  let obj;
  const track = AnalyticsUtilsDefault.track;
  const SWP_NOTICE_VIEWED = AnalyticEvents.SWP_NOTICE_VIEWED;
  AnalyticsUtilsDefault;
  if ("member_channel" === noticeType.noticeType) {
    const obj3 = { guild_id: null, channel_id: null, channel_type: null, notice_type: noticeType.noticeType };
    ({ guild_id: obj2.guild_id, id: obj2.channel_id, type: obj2.channel_type } = noticeType.channel);
    obj = obj3;
  } else {
    obj = { guild_id: null, notice_type: null };
    ({ guildId: obj.guild_id, noticeType: obj.notice_type } = noticeType);
  }
  track(SWP_NOTICE_VIEWED, obj);
}
export function trackPinotNoticeAction(noticeType, dismiss) {
  let obj;
  const track = AnalyticsUtilsDefault.track;
  const SWP_NOTICE_ACTION = AnalyticEvents.SWP_NOTICE_ACTION;
  AnalyticsUtilsDefault;
  if ("member_channel" === noticeType.noticeType) {
    const obj3 = { guild_id: null, channel_id: null, channel_type: null, notice_type: noticeType.noticeType };
    ({ guild_id: obj2.guild_id, id: obj2.channel_id, type: obj2.channel_type } = noticeType.channel);
    obj = obj3;
  } else {
    obj = { guild_id: null, notice_type: null };
    ({ guildId: obj.guild_id, noticeType: obj.notice_type } = noticeType);
  }
  const obj5 = { action: dismiss };
  const merged = Object.assign(obj);
  track(SWP_NOTICE_ACTION, obj5);
}
export function trackPinotSettingsViewed(guild_id, view, feature_key, channels, arg4) {
  let found;
  let closure_0 = arg4;
  const obj = PinotDraft;
  const eligibleChannelIdsResult = obj.eligibleChannelIds(channels);
  if (null != arg4) {
    found = eligibleChannelIdsResult.filter((item) => {
      includedChannelIds = includedChannelIds.includedChannelIds;
      return includedChannelIds.has(item);
    });
  } else {
    channels = channels.channels;
    found = channels.filter((eligible) => eligible.eligible && eligible.included);
  }
  const obj2 = AnalyticsUtilsDefault;
  const obj3 = { guild_id, view, feature_key, feature_enabled: channels.enabled, eligible_channel_count: eligibleChannelIdsResult.length, included_channel_count: found.length };
  obj2.track(AnalyticEvents.SWP_SETTINGS_VIEWED, obj3);
}
