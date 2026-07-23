// Module ID: 7017
// Function ID: 56298
// Name: trackChannelOpenedClickstream
// Dependencies: [1348, 653, 1355, 6700, 2]
// Exports: default

// Module 7017 (trackChannelOpenedClickstream)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import ME from "ME";
import { StaticChannelRoute } from "set";

let closure_3;
let closure_4;
const require = arg1;
({ ChannelTypes: closure_3, AnalyticEvents: closure_4 } = ME);
const result = require("set").fileFinishedImporting("modules/app_analytics/track/channel_opened/trackChannelOpenedClickstream.tsx");

export default function trackChannelOpenedClickstream(channelId) {
  channelId = channelId.channelId;
  if (StaticChannelRoute.CHANNEL_BROWSER !== channelId) {
    if (StaticChannelRoute.GUILD_HOME !== channelId) {
      if (StaticChannelRoute.GUILD_SHOP !== channelId) {
        if (StaticChannelRoute.GAME_SHOP !== channelId) {
          if (StaticChannelRoute.MEMBER_APPLICATIONS !== channelId) {
            if (StaticChannelRoute.ROLE_SUBSCRIPTIONS !== channelId) {
              if (StaticChannelRoute.CUSTOMIZE_COMMUNITY !== channelId) {
                if (StaticChannelRoute.MEMBER_SAFETY !== channelId) {
                  if (StaticChannelRoute.GUILD_ONBOARDING !== channelId) {
                    if (StaticChannelRoute.GUILD_BOOSTS !== channelId) {
                      let obj = require(6700) /* _createForOfIteratorHelperLoose */;
                      obj = { channel_id: channelId };
                      channel = channel.getChannel(channelId);
                      let type;
                      if (null != channel) {
                        type = channel.type;
                      }
                      if (null == type) {
                        type = constants.UNKNOWN;
                      }
                      obj.channel_type = type;
                      obj.trackClickstream(constants2.CHANNEL_OPENED_CLICKSTREAM, obj);
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
};
