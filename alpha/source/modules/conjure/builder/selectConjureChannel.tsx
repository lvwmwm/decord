// Module ID: 14834
// Function ID: 14835
// Name: selectConjureChannel
// Dependencies: [5213, 5166, 6933, 2]
// Exports: default

// Module 14834 (selectConjureChannel)
import ChannelConstants from "ChannelConstants" /* 5166 */;
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 6933 */;
import SelectedChannelStore from "SelectedChannelStore" /* 5213 */;
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
