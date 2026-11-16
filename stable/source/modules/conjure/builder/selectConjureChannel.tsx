// Module ID: 13064
// Function ID: 13065
// Name: selectConjureChannel
// Dependencies: [5073, 5026, 6793, 2]
// Exports: default

// Module 13064 (selectConjureChannel)
import ChannelConstants from "ChannelConstants" /* 5026 */;
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 6793 */;
import SelectedChannelStore from "SelectedChannelStore" /* 5073 */;
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
