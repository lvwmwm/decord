// Module ID: 7189
// Function ID: 7190
// Name: trackChannelOpenedClickstream
// Dependencies: [2044, 1074, 2051, 6880, 2]
// Exports: default

// Module 7189 (trackChannelOpenedClickstream)
import Clickstream from "Clickstream" /* 6880 */;
import ChannelStore from "ChannelStore" /* 2044 */;

require = fn;
const Constants = fn(1074);
({ ChannelTypes: c3, AnalyticEvents: closure_4 } = Constants);
const StaticChannelRoute = fn(2051).StaticChannelRoute;
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_analytics/track/channel_opened/trackChannelOpenedClickstream.tsx");

export default function trackChannelOpenedClickstream(channelId) {
  channelId = channelId.channelId;
  if (StaticChannelRoute.VIBEGRATIONS !== channelId) {
    if (tmp.CHANNEL_BROWSER !== channelId) {
      if (tmp.GUILD_HOME !== channelId) {
        if (tmp.GUILD_SHOP !== channelId) {
          if (tmp.GAME_SHOP !== channelId) {
            if (tmp.MEMBER_APPLICATIONS !== channelId) {
              if (tmp.ROLE_SUBSCRIPTIONS !== channelId) {
                if (tmp.CUSTOMIZE_COMMUNITY !== channelId) {
                  if (tmp.MEMBER_SAFETY !== channelId) {
                    if (tmp.GUILD_ONBOARDING !== channelId) {
                      if (tmp.GUILD_BOOSTS !== channelId) {
                        const obj2 = { channel_id: channelId, channel_type: null };
                        const channel = ChannelStore.getChannel(channelId);
                        let type;
                        if (channel != null) {
                          type = channel.type;
                        }
                        if (type == null) {
                          type = constants.UNKNOWN;
                        }
                        obj2.channel_type = type;
                        Clickstream.trackClickstream(constants2.CHANNEL_OPENED_CLICKSTREAM, obj2);
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
  }
};
