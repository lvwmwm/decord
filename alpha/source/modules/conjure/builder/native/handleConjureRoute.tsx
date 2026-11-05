// Module ID: 12275
// Function ID: 12276
// Name: handleConjureRoute
// Dependencies: [4999, 5327, 5324, 12276, 2]
// Exports: default

// Module 12275 (handleConjureRoute)
import ChannelConstants from "ChannelConstants" /* 4999 */;
import useChatLayout from "useChatLayout" /* 5327 */;
import openConjureModalDefault from "openConjureModal" /* 12276 */;
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
        const tmp8Result = tmp8(5324);
        tmp8Result.navigateToRootTab(obj);
      }
      openConjureModalDefault(guildId);
      return true;
    }
  }
  return false;
};
