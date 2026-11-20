// Module ID: 13815
// Function ID: 13816
// Name: selectConjureChannel
// Dependencies: [5209, 5162, 6925, 2]
// Exports: default

// Module 13815 (selectConjureChannel)
import ChannelConstants from "ChannelConstants" /* 5162 */;
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 6925 */;
import SelectedChannelStore from "SelectedChannelStore" /* 5209 */;
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
