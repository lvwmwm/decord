// Module ID: 13813
// Function ID: 13814
// Name: selectConjureChannel
// Dependencies: [5209, 5162, 6935, 2]
// Exports: default

// Module 13813 (selectConjureChannel)
import ChannelConstants from "ChannelConstants" /* 5162 */;
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 6935 */;
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
