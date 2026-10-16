// Module ID: 19003
// Function ID: 19004
// Name: NavigationTTIDispatcherManager
// Dependencies: [2068, 5494, 2119, 17601, 12550, 12730, 7030, 2]

// Module 19003 (NavigationTTIDispatcherManager)
import NavigationSpanTrackerDefault from "NavigationSpanTracker" /* 12550 */;
import navigationTTIEnabled from "navigationTTIEnabled" /* 17601 */;
import ChannelStore from "ChannelStore" /* 2068 */;
import MessageStore from "MessageStore" /* 5494 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2119 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7030 */;
import size from "module_2" /* 2 */;

let tmp;
const NavigationTTIDefinition = tmp(12730);
function handleChannelSelect(arg0) {
  let channelId;
  let fromChannelId;
  let fromGuildId;
  let guildId;
  let isAppStartupNavigation;
  let obj3;
  let opensChannel;
  let type;
  ({ guildId, channelId, fromGuildId, fromChannelId } = arg0);
  ({ isAppStartupNavigation, opensChannel } = arg0);
  const obj = navigationTTIEnabled;
  if (obj.isNavigationTTIEnabled()) {
    if (null != channelId) {
      if (false !== opensChannel) {
        if (true !== isAppStartupNavigation) {
          if (guildId == null) {
            guildId = null;
          }
          if (undefined === fromChannelId) {
            let lastSelectedChannelId = SelectedChannelStore.getLastSelectedChannelId();
            if (lastSelectedChannelId == null) {
              lastSelectedChannelId = null;
            }
            fromChannelId = lastSelectedChannelId;
          }
          if (undefined === fromGuildId) {
            const channel = ChannelStore.getChannel(fromChannelId);
            let guildId1;
            if (channel != null) {
              guildId1 = channel.getGuildId();
            }
            if (guildId1 == null) {
              guildId1 = null;
            }
            fromGuildId = guildId1;
          }
          const obj2 = { definition: NavigationTTIDefinition.CHANNEL_NAVIGATION_TTI, destinationKey: channelId, properties: obj3 };
          const beginNavigation = NavigationSpanTrackerDefault.beginNavigation;
          NavigationSpanTrackerDefault;
          obj3 = { trigger: "navigation", from_guild_id: fromGuildId, to_guild_id: guildId, from_channel_id: fromChannelId, to_channel_id: channelId, channel_type: type, changed_guild: fromGuildId !== guildId, warm_message_cache: MessageStore.hasPresent(channelId) };
          const channel1 = ChannelStore.getChannel(channelId);
          type = undefined;
          if (channel1 != null) {
            type = channel1.type;
          }
          if (type == null) {
            type = null;
          }
          beginNavigation(obj2);
        }
      }
    }
  }
}
class NavigationTTIDispatcherManager extends AutomaticLifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    const obj = { CHANNEL_SELECT: handleChannelSelect };
    applyArgumentsResult.actions = obj;
    return applyArgumentsResult;
  }
}
const navigationTTIDispatcherManager = new NavigationTTIDispatcherManager();
const result = size.fileFinishedImporting("modules/tti_analytics/native/navigation/NavigationTTIDispatcherManager.tsx");

export default navigationTTIDispatcherManager;
export { handleChannelSelect };
