// Module ID: 14484
// Function ID: 14485
// Name: HubJoinManager
// Dependencies: [5012, 1072, 2125, 572, 7646, 2]

// Module 14484 (HubJoinManager)
import DispatcherDefault from "Dispatcher" /* 572 */;
import Constants from "Constants" /* 1072 */;
import transitionToGuild from "transitionToGuild" /* 7646 */;
import GuildStore from "GuildStore" /* 5012 */;
import LifecycleManager from "LifecycleManager" /* 2125 */;
import size from "module_2" /* 2 */;

const GuildFeatures = Constants.GuildFeatures;
class HubJoinManager extends LifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    require = applyArgumentsResult;
    applyArgumentsResult.handleGuildCreate = function handleGuildCreate(guild) {
      guild = GuildStore.getGuild(guild.guild.id);
      let tmp2 = null != guild;
      if (tmp2) {
        const features = guild.features;
        let hasItem;
        if (features != null) {
          hasItem = features.has(GuildFeatures.HUB);
        }
        tmp2 = hasItem;
      }
      if (tmp2) {
        const onClose = require.onClose;
        if (onClose != null) {
          onClose();
        }
        const obj = transitionToGuild;
        obj.transitionToGuild(guild.id);
      }
    };
    return applyArgumentsResult;
  }
  _initialize(onClose) {
    this.onClose = onClose;
    const obj = DispatcherDefault;
    const subscription = obj.subscribe("GUILD_CREATE", this.handleGuildCreate);
  }
  _terminate() {
    const obj = DispatcherDefault;
    obj.unsubscribe("GUILD_CREATE", this.handleGuildCreate);
  }
}
const prototype = HubJoinManager.prototype;
const hubJoinManager = new HubJoinManager();
const result = size.fileFinishedImporting("modules/hub/HubJoinManager.tsx");

export default hubJoinManager;
