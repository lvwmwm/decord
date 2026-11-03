// Module ID: 12954
// Function ID: 12955
// Name: selectConjureChannel
// Dependencies: [5044, 4997, 6826, 2]
// Exports: default

// Module 12954 (selectConjureChannel)
import ChannelConstants from "ChannelConstants" /* 4997 */;
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 6826 */;
import SelectedChannelStore from "SelectedChannelStore" /* 5044 */;
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
