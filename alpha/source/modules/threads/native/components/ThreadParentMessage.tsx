// Module ID: 19236
// Function ID: 19237
// Name: ThreadParentMessage
// Dependencies: [19, 8677, 6309, 21, 9092, 504, 7364, 1099, 10996, 2]
// Exports: ThreadChannelStarterMessage, ThreadCreationStarterMessage

// Module 19236 (ThreadParentMessage)
import Fragment from "Fragment" /* 21 */;
import get_initialized from "get initialized" /* 504 */;
import router_utils from "router_utils" /* 1099 */;
import ReferencedMessageStore2 from "ReferencedMessageStore" /* 8677 */;
import RowGeneratorDefault from "RowGenerator" /* 9092 */;
import ChatItemDefault from "ChatItem" /* 10996 */;
import react from "react" /* 19 */;
import MessageStore from "MessageStore" /* 6309 */;
import size from "module_2" /* 2 */;

const ReferencedMessageStore = ReferencedMessageStore2;

let tmp;
const Pressables = tmp(7364);
const ReferencedMessageState = ReferencedMessageStore2.ReferencedMessageState;
const jsx = Fragment.jsx;
let rowGenerator = new RowGeneratorDefault();
rowGenerator.setOptions({ renderCodedLinks: false, renderGiftCode: false, renderActivityInstanceEmbed: false, renderActivityInviteEmbed: false, renderEmbeds: true, ignoreMentioned: true, inlineAttachmentMedia: true, inlineEmbedMedia: true, renderReactions: false, renderReplies: true, renderThreadEmbeds: false });
const result = size.fileFinishedImporting("modules/threads/native/components/ThreadParentMessage.tsx");

export function ThreadChannelStarterMessage(arg0) {
  ({ guildId: require, messageId: importDefault, channelId: dependencyMap } = arg0);
  rowGenerator = get_initialized;
  const items = [ReferencedMessageStore];
  const stateFromStores = rowGenerator.useStateFromStores(items, () => ReferencedMessageStore.getMessage(dependencyMap, importDefault));
  let state;
  if (stateFromStores != null) {
    state = stateFromStores.state;
  }
  let tmp5 = null;
  if (state === ReferencedMessageState.LOADED) {
    const PressableOpacity = Pressables.PressableOpacity;
    tmp5 = <PressableOpacity accessibilityRole="button" onPress={function onPress() {
      const obj = router_utils;
      obj.transitionToGuild(require, dependencyMap, importDefault);
    }}>{null}</PressableOpacity>;
  }
  return tmp5;
}
export function ThreadCreationStarterMessage(arg0) {
  ({ messageId: require, channelId: importDefault } = arg0);
  rowGenerator = get_initialized;
  const items = [MessageStore];
  const stateFromStores = rowGenerator.useStateFromStores(items, () => MessageStore.getMessage(importDefault, require));
  let tmp3 = null;
  if (null != stateFromStores) {
    tmp3 = jsx(ChatItemDefault, { rowGenerator, message: stateFromStores, style: { overflow: "visible" }, pointerEvents: "none" });
  }
  return tmp3;
}
