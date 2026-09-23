// Module ID: 8102
// Function ID: 8103
// Name: trackChannelOpenedClickstream
// Dependencies: [2042, 1074, 2049, 7793, 2]
// Exports: default

// Module 8102 (trackChannelOpenedClickstream)
import Clickstream from "Clickstream" /* 7793 */;
import ChannelStore from "ChannelStore" /* 2042 */;

require = fn;
const Constants = fn(1074);
({ ChannelTypes: c3, AnalyticEvents: closure_4 } = Constants);
const StaticChannelRoute = fn(2049).StaticChannelRoute;
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
