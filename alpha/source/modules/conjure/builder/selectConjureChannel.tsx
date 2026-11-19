// Module ID: 18672
// Function ID: 18673
// Name: selectConjureChannel
// Dependencies: [4695, 4648, 6408, 2]
// Exports: default

// Module 18672 (selectConjureChannel)
import ChannelConstants from "ChannelConstants" /* 4648 */;
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 6408 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4695 */;
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
