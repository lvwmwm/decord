// Module ID: 11688
// Function ID: 11689
// Name: handleConjureRoute
// Dependencies: [4828, 5139, 5136, 11689, 2]
// Exports: default

// Module 11688 (handleConjureRoute)
import ChannelConstants from "ChannelConstants" /* 4828 */;
import useChatLayout from "useChatLayout" /* 5139 */;
import openConjureModalDefault from "openConjureModal" /* 11689 */;
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
        const tmp8Result = tmp8(5136);
        tmp8Result.navigateToRootTab(obj);
      }
      openConjureModalDefault(guildId);
      return true;
    }
  }
  return false;
};
