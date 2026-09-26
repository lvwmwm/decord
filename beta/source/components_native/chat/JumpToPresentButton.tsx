// Module ID: 12549
// Function ID: 12550
// Name: JumpToPresentButton
// Dependencies: [19, 17, 9686, 5526, 5008, 21, 4788, 576, 1364, 4489, 504, 9802, 1115, 12550, 12551, 12552, 2]
// Exports: default

// Module 12549 (JumpToPresentButton)
import nativeDefault from "native" /* 576 */;
import useToken from "useToken" /* 4489 */;
import noop from "module_19" /* 19 */;
import useChatBottomManagerUIStore_mod from "useChatBottomManagerUIStore" /* 9686 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 5526 */;
import MessageStore from "MessageStore" /* 5008 */;

require = fn;
const View = fn(17).View;
let useChatBottomManagerUIStore = fn(9686);
({ useChatInputContainerHeight: closure_4, useSmallSuggestionBarHeight: hasOwnProperty } = useChatBottomManagerUIStore);
let useChatBottomManagerUIStore = useChatBottomManagerUIStore_mod;
const jsx = fn(21).jsx;
const createStyles = fn(4788);
let obj2 = { container: { borderRadius: nativeDefault.radii.round, position: "absolute", right: nativeDefault.modules.mobile.JUMP_TO_PRESENT_RIGHT_SPACING }, containerIOS: { bottom: "100%", pointerEvents: "box-none" } };
let closure_10 = createStyles.createStyles(obj2);
const PlatformUtils = fn(1364);
let closure_11 = PlatformUtils.isIOS() ? ((arg0) => {
  const obj = { marginBottom: null };
  const token = useToken.useToken(nativeDefault.modules.mobile.JUMP_TO_PRESENT_BOTTOM_SPACING);
  obj.marginBottom = token + hasOwnProperty(arg0);
  return obj;
}) : ((arg0) => {
  const obj2 = { bottom: null };
  const token = useToken.useToken(nativeDefault.modules.mobile.JUMP_TO_PRESENT_BOTTOM_SPACING);
  const sum = React4(arg0) + token;
  obj2.bottom = sum + hasOwnProperty(arg0);
  return obj2;
});
const size = fn(2);
const result = size.fileFinishedImporting("components_native/chat/JumpToPresentButton.tsx");

export default function JumpToPresentButton(channelId) {
  channelId = channelId.channelId;
  const screenIndex = channelId.screenIndex;
  let tmp = closure_10();
  const tmp2 = closure_11(screenIndex);
  const items = [GatewayConnectionStore];
  dependencyMap = channelId(504).useStateFromStores(items, () => connected.isConnected(), []);
  let tmp5 = useChatBottomManagerUIStore((showingAutoComplete) => {
    let tmp = closure_2;
    if (tmp) {
      showingAutoComplete = showingAutoComplete.showingAutoComplete;
      value = showingAutoComplete.get(screenIndex);
      let tmp5 = !value;
      if (!value) {
        const showJumpToPresentButtonChannelId = showingAutoComplete.showJumpToPresentButtonChannelId;
        tmp5 = showJumpToPresentButtonChannelId.get(tmp3) === channelId;
      }
      tmp = tmp5;
      tmp3 = screenIndex;
    }
    return tmp;
  });
  const obj = channelId(504);
  const isVoicePanelMounted = channelId(9802).useIsVoicePanelMounted(channelId);
  const obj2 = channelId(9802);
  const isVoicePanelOpen = channelId(9802).useIsVoicePanelOpen(channelId);
  const obj3 = channelId(9802);
  const items1 = [MessageStore];
  const stateFromStores = channelId(504).useStateFromStores(items1, () => null != MessageStore.getMessages(channelId).jumpReturnTargetId);
  if (!tmp5) {
    return null;
  }
  const obj4 = channelId(504);
  let tmp10 = tmp2;
  if (tmp3Result.isIOS()) {
    const items2 = [tmp.containerIOS, tmp2];
    tmp10 = items2;
  }
  const intl = tmp3(1115).intl;
  const string = intl.string;
  const t = tmp3(1115).t;
  if (stateFromStores) {
    let stringResult = string(t.dpjpOp);
  } else {
    stringResult = string(t.gpoQsB);
  }
  const obj5 = { style: null, children: null };
  const items3 = [tmp.container, tmp10];
  obj5.style = items3;
  if (tmp5) {
    const obj6 = { accessibilityLabel: stringResult, icon: screenIndex(12551), onPress: channelId.onJumpToPresent };
    let tmp12Result = tmp12(screenIndex(12550), obj6);
    const tmp16 = screenIndex(12550);
  } else {
    tmp12Result = tmp12(tmp3(12552).MemoedVoicePanelDismissChatButton, {});
  }
  obj5.children = tmp12Result;
  return <View style={null}>{null}</View>;
};
