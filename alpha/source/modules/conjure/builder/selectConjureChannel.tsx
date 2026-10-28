// Module ID: 12576
// Function ID: 12577
// Name: selectConjureChannel
// Dependencies: [4907, 4863, 6669, 2]
// Exports: default

// Module 12576 (selectConjureChannel)
import ChannelConstants from "ChannelConstants" /* 4863 */;
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 6669 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4907 */;
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
