// Module ID: 13044
// Function ID: 13045
// Name: selectConjureChannel
// Dependencies: [5046, 4999, 6844, 2]
// Exports: default

// Module 13044 (selectConjureChannel)
import ChannelConstants from "ChannelConstants" /* 4999 */;
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 6844 */;
import SelectedChannelStore from "SelectedChannelStore" /* 5046 */;
import size from "module_2" /* 2 */;

const StaticChannelRoute = ChannelConstants.StaticChannelRoute;
const result = size.fileFinishedImporting("modules/conjure/builder/selectConjureChannel.tsx");

export default function selectConjureChannel(guildId, messageId) {
  const tmp = null != messageId && SelectedChannelStore.getCurrentlySelectedChannelId() !== StaticChannelRoute.CONJURE;
  if (tmp) {
    const obj2 = { guildId, channelId: StaticChannelRoute.CONJURE, messageId, opensChannel: false };
    const obj = SelectedChannelActionCreatorsDefault;
    const channel = obj.selectChannel(obj2);
  }
};
