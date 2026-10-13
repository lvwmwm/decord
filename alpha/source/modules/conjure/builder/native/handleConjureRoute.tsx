// Module ID: 11203
// Function ID: 11204
// Name: handleConjureRoute
// Dependencies: [2072, 4979, 4976, 11204, 2]
// Exports: default

// Module 11203 (handleConjureRoute)
import ChannelConstants from "ChannelConstants" /* 2072 */;
import useChatLayout from "useChatLayout" /* 4979 */;
import openConjureModalDefault from "openConjureModal" /* 11204 */;
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
        const tmp8Result = tmp8(4976);
        tmp8Result.navigateToRootTab(obj);
      }
      openConjureModalDefault(guildId);
      return true;
    }
  }
  return false;
};
