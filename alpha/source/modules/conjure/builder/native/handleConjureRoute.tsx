// Module ID: 11837
// Function ID: 11838
// Name: handleConjureRoute
// Dependencies: [4864, 5190, 5187, 11838, 2]
// Exports: default

// Module 11837 (handleConjureRoute)
import ChannelConstants from "ChannelConstants" /* 4864 */;
import useChatLayout from "useChatLayout" /* 5190 */;
import openConjureModalDefault from "openConjureModal" /* 11838 */;
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
        const tmp8Result = tmp8(5187);
        tmp8Result.navigateToRootTab(obj);
      }
      openConjureModalDefault(guildId);
      return true;
    }
  }
  return false;
};
