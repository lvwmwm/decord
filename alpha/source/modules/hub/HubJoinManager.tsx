// Module ID: 13608
// Function ID: 13609
// Name: HubJoinManager
// Dependencies: [4843, 1087, 2004, 584, 7433, 2]

// Module 13608 (HubJoinManager)
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1087 */;
import transitionToGuild from "transitionToGuild" /* 7433 */;
import GuildStore from "GuildStore" /* 4843 */;
import LifecycleManager from "LifecycleManager" /* 2004 */;
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
