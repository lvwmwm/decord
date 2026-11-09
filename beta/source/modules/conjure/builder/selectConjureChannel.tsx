// Module ID: 13032
// Function ID: 13033
// Name: selectConjureChannel
// Dependencies: [5043, 4996, 6761, 2]
// Exports: default

// Module 13032 (selectConjureChannel)
import ChannelConstants from "ChannelConstants" /* 4996 */;
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 6761 */;
import SelectedChannelStore from "SelectedChannelStore" /* 5043 */;
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
