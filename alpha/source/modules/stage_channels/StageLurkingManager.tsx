// Module ID: 7493
// Function ID: 7494
// Name: StageLurkingManager
// Dependencies: [2064, 4900, 2002, 584, 7032, 1388, 2]

// Module 7493 (StageLurkingManager)
import DispatcherDefault from "Dispatcher" /* 584 */;
import GlobalUtils from "GlobalUtils" /* 1388 */;
import LurkerActionCreators from "LurkerActionCreators" /* 7032 */;
import ChannelStore from "ChannelStore" /* 2064 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4900 */;
import LifecycleManager from "LifecycleManager" /* 2002 */;
import size from "module_2" /* 2 */;

class StageLurkingManager extends LifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    require = applyArgumentsResult;
    applyArgumentsResult.handleVoiceChannelSelect = function handleVoiceChannelSelect(arg0) {
      let channelId;
      ({ channelId, guildId } = arg0);
      if (null != channelId) {
        const channel = ChannelStore.getChannel(channelId);
      }
      require.terminate();
      let tmp3 = null;
      const obj2 = require;
      if (null != channelId) {
        if (guildId == null) {
          guildId = null;
        }
        tmp3 = guildId;
      }
      const result = obj2.handleDisconnectFromStageChannel(tmp3);
    };
    applyArgumentsResult.handleDisconnectFromStageChannel = function handleDisconnectFromStageChannel(guildId) {
      guildId = guildId.getGuildId();
      const items = [guildId, guildId];
      const obj = LurkerActionCreators;
      obj.stopLurkingAll(items.filter(GlobalUtils.isNotNullish));
    };
    applyArgumentsResult.handleLogout = function handleLogout() {
      require.terminate();
      const result = require.handleDisconnectFromStageChannel(null);
    };
    return applyArgumentsResult;
  }
  _initialize() {
    const obj = DispatcherDefault;
    const subscription = obj.subscribe("VOICE_CHANNEL_SELECT", this.handleVoiceChannelSelect);
    const obj2 = DispatcherDefault;
    const subscription1 = obj2.subscribe("LOGOUT", this.handleLogout);
  }
  _terminate() {
    const obj = DispatcherDefault;
    obj.unsubscribe("VOICE_CHANNEL_SELECT", this.handleVoiceChannelSelect);
    const obj2 = DispatcherDefault;
    obj2.unsubscribe("LOGOUT", this.handleLogout);
  }
}
const prototype = StageLurkingManager.prototype;
const stageLurkingManager = new StageLurkingManager();
let result = size.fileFinishedImporting("modules/stage_channels/StageLurkingManager.tsx");

export default stageLurkingManager;
