// Module ID: 12030
// Function ID: 12031
// Name: handleConjureRoute
// Dependencies: [4865, 5196, 5193, 12031, 2]
// Exports: default

// Module 12030 (handleConjureRoute)
import ChannelConstants from "ChannelConstants" /* 4865 */;
import useChatLayout from "useChatLayout" /* 5196 */;
import openConjureModalDefault from "openConjureModal" /* 12031 */;
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
        const tmp8Result = tmp8(5193);
        tmp8Result.navigateToRootTab(obj);
      }
      openConjureModalDefault(guildId);
      return true;
    }
  }
  return false;
};
