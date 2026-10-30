// Module ID: 14179
// Function ID: 14180
// Name: useWelcomeScreenEnabled
// Dependencies: [4862, 4858, 4880, 4912, 1072, 504, 2]
// Exports: default

// Module 14179 (useWelcomeScreenEnabled)
import Constants from "Constants" /* 1072 */;
import ChannelRecord from "ChannelRecord" /* 4862 */;
import ChannelStore from "ChannelStore" /* 4858 */;
import GuildStore from "GuildStore" /* 4880 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4912 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

const isGuildTextChannelType = ChannelRecord.isGuildTextChannelType;
const GuildFeatures = Constants.GuildFeatures;
const result = size.fileFinishedImporting("modules/welcome_screen/useWelcomeScreenEnabled.tsx");

export default function useWelcomeScreenEnabled(arg0, arg1) {
  let closure_0;
  let closure_1;
  _require = arg0;
  dependencyMap = arg1;
  const items = [ChannelStore, GuildStore, SelectedChannelStore];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => {
    const guild = GuildStore.getGuild(closure_1);
    let hasItem;
    const tmp = closure_1;
    if (guild != null) {
      const features = guild.features;
      hasItem = features.has(GuildFeatures.WELCOME_SCREEN_ENABLED);
    }
    if (true === hasItem) {
      const features2 = guild.features;
      const tmp5 = GuildFeatures;
      if (features2.has(GuildFeatures.COMMUNITY)) {
        const features3 = guild.features;
        if (features3.has(tmp5.GUILD_SERVER_GUIDE)) {
          return false;
        } else {
          const channel = ChannelStore.getChannel(closure_0);
          const tmp9 = closure_0 === SelectedChannelStore.getChannelId(tmp) && null != channel && channel.getGuildId() === guild.id && isGuildTextChannelType(channel.type);
          return tmp9;
        }
      }
    }
    return false;
  });
};
