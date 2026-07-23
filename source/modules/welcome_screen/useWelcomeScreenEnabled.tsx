// Module ID: 11687
// Function ID: 90652
// Name: useWelcomeScreenEnabled
// Dependencies: [1352, 1348, 1838, 1906, 653, 566, 2]
// Exports: default

// Module 11687 (useWelcomeScreenEnabled)
import { isGuildTextChannelType } from "_callSuper";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_5 from "_isNativeReflectConstruct";
import { GuildFeatures } from "ME";

const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/welcome_screen/useWelcomeScreenEnabled.tsx");

export default function useWelcomeScreenEnabled(arg0, arg1) {
  const _require = arg0;
  const dependencyMap = arg1;
  const items = [_isNativeReflectConstruct, _createForOfIteratorHelperLoose, closure_5];
  return _require(566).useStateFromStores(items, () => {
    const guild = outer1_4.getGuild(closure_1);
    let hasItem;
    if (null != guild) {
      const features = guild.features;
      hasItem = features.has(outer1_6.WELCOME_SCREEN_ENABLED);
    }
    if (true === hasItem) {
      const features2 = guild.features;
      if (features2.has(outer1_6.COMMUNITY)) {
        const features3 = guild.features;
        if (features3.has(outer1_6.GUILD_SERVER_GUIDE)) {
          return false;
        } else {
          const channel = outer1_3.getChannel(closure_0);
          let tmp10 = closure_0 === outer1_5.getChannelId(closure_1) && null != channel && channel.getGuildId() === guild.id;
          if (tmp10) {
            tmp10 = outer1_2(channel.type);
          }
          return tmp10;
        }
      }
    }
    return false;
  });
};
