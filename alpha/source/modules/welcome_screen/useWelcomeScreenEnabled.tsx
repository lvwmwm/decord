// Module ID: 12465
// Function ID: 12466
// Name: useWelcomeScreenEnabled
// Dependencies: [2055, 2051, 2074, 2103, 1085, 558, 576, 504, 2]

// Module 12465 (useWelcomeScreenEnabled)
import Constants from "Constants" /* 1085 */;
import ChannelRecord from "ChannelRecord" /* 2055 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import GuildStore from "GuildStore" /* 2074 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2103 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

const isGuildTextChannelType = ChannelRecord.isGuildTextChannelType;
const GuildFeatures = Constants.GuildFeatures;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  let closure_0;
  let closure_1;
  let first;
  _require = arg0;
  dependencyMap = arg1;
  let tmp = _require;
  const obj = require("react");
  const cResult = obj.c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let tmp5 = ChannelStore;
    const items = [ChannelStore, , ];
    items[1] = GuildStore;
    items[2] = SelectedChannelStore;
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === arg0) {
    let tmp8;
    if (cResult[2] === arg1) {
      tmp8 = cResult[3];
    }
    const tmpResult = tmp(504);
    return tmpResult.useStateFromStores(first, tmp8);
  }
  const fn = function _() {
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
  };
  cResult[1] = arg0;
  cResult[2] = arg1;
  cResult[3] = fn;
  tmp8 = fn;
}) : ((arg0, arg1) => {
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
});
const result = size.fileFinishedImporting("modules/welcome_screen/useWelcomeScreenEnabled.tsx");

export default tmp2;
