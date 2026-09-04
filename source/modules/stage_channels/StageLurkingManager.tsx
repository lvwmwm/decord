// Module ID: 12859
// Function ID: 12860
// Name: _initialize
// Dependencies: [1386, 4302, 4669, 706, 7259, 1394, 2]

// Module 12859 (_initialize)
import dispatcherDefault from "dispatcher" /* 706 */;
import initializeDefault from "initialize" /* 4669 */;
import closure_3 from "ensureGuildLoaded" /* 1386 */;
import closure_4 from "handleConnectionOpen" /* 4302 */;

let require = arg1;
initializeDefault;
class StageLurkingManager extends tmp2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult.handleVoiceChannelSelect = function handleVoiceChannelSelect(arg0) {
      ({ channelId, guildId } = arg0);
      if (null != channelId) {
        const channel = closure_1_3.getChannel(channelId);
      }
      applyArgumentsResult.terminate();
      let tmp3 = null;
      if (null != channelId) {
        if (guildId == null) {
          guildId = null;
        }
        tmp3 = guildId;
      }
      const result = applyArgumentsResult.handleDisconnectFromStageChannel(tmp3);
    };
    applyArgumentsResult.handleDisconnectFromStageChannel = function handleDisconnectFromStageChannel(arg0) {
      guildId = guildId.getGuildId();
      const items = [guildId, arg0];
      applyArgumentsResult(7259).stopLurkingAll(items.filter(applyArgumentsResult(1394).isNotNullish));
    };
    applyArgumentsResult.handleLogout = function handleLogout() {
      applyArgumentsResult.terminate();
      const result = applyArgumentsResult.handleDisconnectFromStageChannel(null);
    };
    return applyArgumentsResult;
  }
}
const prototype = StageLurkingManager.prototype;
prototype["_initialize"] = function _initialize() {
  const subscription = dispatcherDefault.subscribe("VOICE_CHANNEL_SELECT", this.handleVoiceChannelSelect);
  const obj = dispatcherDefault;
  const subscription1 = dispatcherDefault.subscribe("LOGOUT", this.handleLogout);
};
prototype["_terminate"] = function _terminate() {
  dispatcherDefault.unsubscribe("VOICE_CHANNEL_SELECT", this.handleVoiceChannelSelect);
  const obj = dispatcherDefault;
  dispatcherDefault.unsubscribe("LOGOUT", this.handleLogout);
};
const stageLurkingManager = new StageLurkingManager();
let result = require("set").fileFinishedImporting("modules/stage_channels/StageLurkingManager.tsx");

export default stageLurkingManager;
