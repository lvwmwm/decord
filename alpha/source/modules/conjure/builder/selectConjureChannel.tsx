// Module ID: 12529
// Function ID: 12530
// Name: selectConjureChannel
// Dependencies: [4875, 4831, 6635, 2]
// Exports: default

// Module 12529 (selectConjureChannel)
import ChannelConstants from "ChannelConstants" /* 4831 */;
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 6635 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4875 */;
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
