// Module ID: 17691
// Function ID: 17692
// Name: NavigationTTIDispatcherManager
// Dependencies: [2051, 5057, 2102, 16173, 16181, 16439, 6540, 2]

// Module 17691 (NavigationTTIDispatcherManager)
import navigationTTIEnabled from "navigationTTIEnabled" /* 16173 */;
import NavigationSpanTrackerDefault from "NavigationSpanTracker" /* 16181 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import MessageStore from "MessageStore" /* 5057 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2102 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6540 */;
import size from "module_2" /* 2 */;

let tmp;
const NavigationTTIDefinition = tmp(16439);
function handleChannelSelect(opensChannel) {
  let channelId;
  let fromChannelId;
  let fromGuildId;
  let guildId;
  let obj3;
  let type;
  ({ guildId, channelId, fromGuildId, fromChannelId } = opensChannel);
  opensChannel = opensChannel.opensChannel;
  const obj = navigationTTIEnabled;
  if (obj.isNavigationTTIEnabled()) {
    if (null != channelId) {
      if (false !== opensChannel) {
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
