// Module ID: 6935
// Function ID: 55311
// Name: trackAppEmbedViewed
// Dependencies: [31, 653, 675, 6936, 6937, 2]
// Exports: trackAppEmbedClick, trackAppEmbedLinkSent, useTrackAppEmbedViewed

// Module 6935 (trackAppEmbedViewed)
import result from "result";
import { AnalyticEvents } from "ME";

const require = arg1;
function trackAppEmbedViewed(arg0) {
  let appEmbedState;
  let appId;
  let channelId;
  let customId;
  let guildId;
  let linkType;
  let messageId;
  let referrerId;
  ({ appId, linkType, referrerId, customId, guildId, channelId, messageId, appEmbedState } = arg0);
  importDefault(675).track(AnalyticEvents.APP_EMBED_VIEWED, { application_id: appId, link_type: linkType, referrer_id: referrerId, custom_id: customId, guild_id: guildId, channel_id: channelId, message_id: messageId, app_embed_state: appEmbedState });
}
const result = require("expandLocation").fileFinishedImporting("modules/applications/message_embed/web/appMessageEmbedTracking.tsx");

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
  importDefault(675).track(AnalyticEvents.APP_EMBED_CLICKED, { application_id: applicationId, link_type: linkType, area, referrer_id: referrerId, custom_id: customId, is_dead_end: isDeadEnd, message_id: messageId });
};
export { trackAppEmbedViewed };
export const useTrackAppEmbedViewed = function useTrackAppEmbedViewed(id) {
  _require = _require(6936).trackingConfigWithDefaults(id);
  let closure_1 = React.useRef(false);
  let obj = _require(6936);
  return _require(6937).useIsVisible((arg0) => {
    if (tmp) {
      ref.current = true;
      if (null != closure_0.onView) {
        closure_0.onView();
      }
      const obj = {};
      ({ id: obj.appId, linkType: obj.linkType, referrerId: obj.referrerId, activityCustomId: obj.customId, guildId: obj.guildId, channelId: obj.channelId, messageId: obj.messageId, appEmbedState: obj.appEmbedState } = closure_0);
      outer1_5(obj);
    }
  }, undefined);
};
export const trackAppEmbedLinkSent = function trackAppEmbedLinkSent(applicationId, ACTIVITY_INVITE, closure_5, customId) {
  let obj = importDefault(675);
  obj = { application_id: applicationId, link_type: ACTIVITY_INVITE, referrer_id: closure_5, custom_id: customId };
  obj.track(AnalyticEvents.APP_EMBED_LINK_SENT, obj);
};
