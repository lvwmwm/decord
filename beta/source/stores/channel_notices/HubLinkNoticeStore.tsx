// Module ID: 13302
// Function ID: 13303
// Name: HubLinkNoticeStore
// Dependencies: [6635, 2067, 1074, 504, 573, 2]

// Module 13302 (HubLinkNoticeStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import Constants from "Constants" /* 1074 */;
import HotspotStore from "hotspot/HotspotStore" /* 6635 */;
import GuildStore from "GuildStore" /* 2067 */;
import size from "module_2" /* 2 */;

function checkGuildIsHub(id) {
  const guild = GuildStore.getGuild(id);
  let tmp2 = null != guild;
  if (tmp2) {
    const features = guild.features;
    let flag = features.has(GuildFeatures.HUB);
    if (flag) {
      c3 = true;
      flag = true;
    }
    tmp2 = flag;
  }
  return tmp2;
}
function handleHotspotUpdates() {
  return true;
}
const GuildFeatures = Constants.GuildFeatures;
let c3 = false;
const Store = get_initializedDefault.Store;
class HubLinkNoticeStore extends Store {
  initialize() {
    this.waitFor(GuildStore, HotspotStore);
    const items = [HotspotStore];
    this.syncWith(items, handleHotspotUpdates);
  }
  channelNoticePredicate(features) {
    features = features.features;
    const hasItem = features.has(GuildFeatures.LINKED_TO_HUB) && !c3;
    return hasItem;
  }
}
const prototype = HubLinkNoticeStore.prototype;
HubLinkNoticeStore.displayName = "HubLinkNoticeStore";
let obj = {
  CONNECTION_OPEN: function handleConnectionOpen(arg0) {
    const obj = arg0.guilds[Symbol.iterator]();
    while (obj !== undefined) {
      if (checkGuildIsHub(tmp.id)) {
        obj.return();
        let flag = true;
        return true;
      }
    }
    return false;
  },
  GUILD_CREATE: function handleGuildCreate(guild) {
    guild = GuildStore.getGuild(guild.guild.id);
    let tmp2 = null != guild;
    if (tmp2) {
      const features = guild.features;
      let flag = features.has(GuildFeatures.HUB);
      if (flag) {
        c3 = true;
        flag = true;
      }
      tmp2 = flag;
    }
    return tmp2;
  }
};
const hubLinkNoticeStore = new HubLinkNoticeStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("stores/channel_notices/HubLinkNoticeStore.tsx");

export default hubLinkNoticeStore;
