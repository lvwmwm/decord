// Module ID: 11777
// Function ID: 11778
// Name: selectConjureChannel
// Dependencies: [4906, 4862, 6666, 2]
// Exports: default

// Module 11777 (selectConjureChannel)
import ChannelConstants from "ChannelConstants" /* 4862 */;
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 6666 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4906 */;
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
