// Module ID: 12815
// Function ID: 12816
// Name: selectConjureChannel
// Dependencies: [4917, 4870, 6706, 2]
// Exports: default

// Module 12815 (selectConjureChannel)
import ChannelConstants from "ChannelConstants" /* 4870 */;
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 6706 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4917 */;
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
