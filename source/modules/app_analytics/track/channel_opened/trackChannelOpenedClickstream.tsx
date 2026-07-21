// Module ID: 7011
// Function ID: 56241
// Name: trackChannelOpenedClickstream
// Dependencies: []
// Exports: default

// Module 7011 (trackChannelOpenedClickstream)
let closure_2 = importDefault(dependencyMap[0]);
({ ChannelTypes: closure_3, AnalyticEvents: closure_4 } = arg1(dependencyMap[1]));
const StaticChannelRoute = arg1(dependencyMap[2]).StaticChannelRoute;
const tmp2 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/app_analytics/track/channel_opened/trackChannelOpenedClickstream.tsx");

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
                      let obj = arg1(dependencyMap[3]);
                      obj = { channel_id: channelId };
                      const channel = channel.getChannel(channelId);
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
