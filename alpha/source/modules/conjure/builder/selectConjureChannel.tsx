// Module ID: 12631
// Function ID: 12632
// Name: selectConjureChannel
// Dependencies: [4908, 4864, 6693, 2]
// Exports: default

// Module 12631 (selectConjureChannel)
import ChannelConstants from "ChannelConstants" /* 4864 */;
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 6693 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4908 */;
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
