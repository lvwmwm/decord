// Module ID: 12233
// Function ID: 12234
// Name: handleConjureRoute
// Dependencies: [4996, 5317, 5314, 12234, 2]
// Exports: default

// Module 12233 (handleConjureRoute)
import ChannelConstants from "ChannelConstants" /* 4996 */;
import useChatLayout from "useChatLayout" /* 5317 */;
import openConjureModalDefault from "openConjureModal" /* 12234 */;
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
        const tmp8Result = tmp8(5314);
        tmp8Result.navigateToRootTab(obj);
      }
      openConjureModalDefault(guildId);
      return true;
    }
  }
  return false;
};
