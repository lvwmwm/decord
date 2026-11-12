// Module ID: 13028
// Function ID: 13029
// Name: handleConjureRoute
// Dependencies: [5099, 5432, 5429, 13029, 2]
// Exports: default

// Module 13028 (handleConjureRoute)
import ChannelConstants from "ChannelConstants" /* 5099 */;
import useChatLayout from "useChatLayout" /* 5432 */;
import openConjureModalDefault from "openConjureModal" /* 13029 */;
import size from "module_2" /* 2 */;

const StaticChannelRoute = ChannelConstants.StaticChannelRoute;
const result = size.fileFinishedImporting("modules/conjure/builder/native/handleConjureRoute.tsx");

export default function handleConjureRoute(guildId, channelId, arg2, arg3) {
  if (channelId === StaticChannelRoute.CONJURE) {
    const obj3 = useChatLayout;
    const tmp8 = require;
    if (!obj3.getChatLayout().isChatLockedOpen) {
      if (true === arg2) {
        if (true !== arg3) {
          return false;
        }
      } else if (null == arg2) {
        const obj = { screen: "guilds", guildId, channelId };
        const tmp8Result = tmp8(5429);
        tmp8Result.navigateToRootTab(obj);
      }
      openConjureModalDefault(guildId);
      return true;
    }
  }
  return false;
};
