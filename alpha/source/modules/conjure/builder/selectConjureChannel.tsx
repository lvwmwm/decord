// Module ID: 12780
// Function ID: 12781
// Name: selectConjureChannel
// Dependencies: [4912, 4865, 6700, 2]
// Exports: default

// Module 12780 (selectConjureChannel)
import ChannelConstants from "ChannelConstants" /* 4865 */;
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 6700 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4912 */;
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
