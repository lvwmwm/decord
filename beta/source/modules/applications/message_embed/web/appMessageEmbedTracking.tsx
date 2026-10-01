// Module ID: 7107
// Function ID: 7108
// Name: appMessageEmbedTracking
// Dependencies: [19, 1074, 1241, 7108, 7109, 2]
// Exports: trackAppEmbedClick, trackAppEmbedLinkSent, trackAppEmbedViewed, useTrackAppEmbedViewed

// Module 7107 (appMessageEmbedTracking)
import Constants from "Constants" /* 1074 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, onView;

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/applications/message_embed/web/appMessageEmbedTracking.tsx");

export const ClickArea = { VIEW: "view", PLAY: "play", CLOUD_PLAY: "cloud_play", JOIN: "join", ADD_APP: "add_app", JOIN_SERVER: "join_server", INVITE: "invite", SYNC: "sync", CONTENT: "content", BANNER: "banner", STREAM: "stream", CONNECT_ACCOUNT: "connect_account" };
export const trackAppEmbedClick = function trackAppEmbedClick(arg0) {
  let applicationId;
  let area;
  let customId;
  let isDeadEnd;
  let linkType;
  let messageId;
  let referrerId;
  ({ applicationId, linkType, area, referrerId, customId, isDeadEnd, messageId } = arg0);
  const obj = AnalyticsUtilsDefault;
  obj.track(AnalyticEvents.APP_EMBED_CLICKED, { application_id: applicationId, link_type: linkType, area, referrer_id: referrerId, custom_id: customId, is_dead_end: isDeadEnd, message_id: messageId });
};
export const trackAppEmbedViewed = function trackAppEmbedViewed(arg0) {
  let appEmbedState;
  let appId;
  let channelId;
  let customId;
  let guildId;
  let linkType;
  let messageId;
  let referrerId;
  ({ appId, linkType, referrerId, customId, guildId, channelId, messageId, appEmbedState } = arg0);
  const obj = AnalyticsUtilsDefault;
  obj.track(AnalyticEvents.APP_EMBED_VIEWED, { application_id: appId, link_type: linkType, referrer_id: referrerId, custom_id: customId, guild_id: guildId, channel_id: channelId, message_id: messageId, app_embed_state: appEmbedState });
};
export const useTrackAppEmbedViewed = function useTrackAppEmbedViewed(id) {
  let obj = require("appMessageEmbedTrackingConfig");
  _require = obj.trackingConfigWithDefaults(id);
  const ref = react.useRef(false);
  let obj2 = require("useIntersectionObserver");
  return obj2.useIsVisible((arg0) => {
    let activityCustomId;
    let appEmbedState;
    let channelId;
    let guildId;
    let id;
    let linkType;
    let messageId;
    let referrerId;
    const current = ref.current;
    let tmp2 = !current;
    const tmp = ref;
    if (!current) {
      tmp2 = arg0;
    }
    if (tmp2) {
      tmp.current = true;
      const tmp3 = onView;
      onView = onView.onView;
      if (onView != null) {
        onView();
      }
      ({ id, linkType, referrerId, activityCustomId, guildId, channelId, messageId, appEmbedState } = tmp3);
      const obj2 = { application_id: id, link_type: linkType, referrer_id: referrerId, custom_id: activityCustomId, guild_id: guildId, channel_id: channelId, message_id: messageId, app_embed_state: appEmbedState };
      const obj = AnalyticsUtilsDefault;
      obj.track(AnalyticEvents.APP_EMBED_VIEWED, obj2);
    }
  }, undefined);
};
export const trackAppEmbedLinkSent = function trackAppEmbedLinkSent(applicationId, ACTIVITY_INVITE, id, customId) {
  const obj = AnalyticsUtilsDefault;
  const obj2 = { application_id: applicationId, link_type: ACTIVITY_INVITE, referrer_id: id, custom_id: customId };
  obj.track(AnalyticEvents.APP_EMBED_LINK_SENT, obj2);
};
