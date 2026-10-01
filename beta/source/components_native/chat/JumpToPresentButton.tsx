// Module ID: 11749
// Function ID: 11750
// Name: JumpToPresentButton
// Dependencies: [19, 17, 8843, 5589, 5056, 21, 4836, 576, 1364, 4531, 504, 8963, 1115, 11750, 11751, 11752, 2]
// Exports: default

// Module 11749 (JumpToPresentButton)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import useToken from "useToken" /* 4531 */;
import react from "react" /* 19 */;
import useChatBottomManagerUIStore_mod from "useChatBottomManagerUIStore" /* 8843 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 5589 */;
import MessageStore from "MessageStore" /* 5056 */;
import createStyles from "createStyles" /* 4836 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import size from "module_2" /* 2 */;

let dependencyMap, showingAutoComplete;

let closure_4;
let hasOwnProperty;
let obj2;
const View = react_native.View;
let useChatBottomManagerUIStore = useChatBottomManagerUIStore_mod;
({ useChatInputContainerHeight: closure_4, useSmallSuggestionBarHeight: hasOwnProperty } = useChatBottomManagerUIStore);
useChatBottomManagerUIStore = useChatBottomManagerUIStore_mod;
const jsx = Fragment.jsx;
let obj = { container: obj2, containerIOS: { bottom: "100%", pointerEvents: "box-none" } };
obj2 = { borderRadius: nativeDefault.radii.round, position: "absolute", right: nativeDefault.modules.mobile.JUMP_TO_PRESENT_RIGHT_SPACING };
let closure_10 = createStyles.createStyles(obj);
let closure_11 = PlatformUtils.isIOS() ? ((arg0) => {
  let token;
  const obj = { marginBottom: token + hasOwnProperty(arg0) };
  const obj2 = useToken;
  token = obj2.useToken(nativeDefault.modules.mobile.JUMP_TO_PRESENT_BOTTOM_SPACING);
  return obj;
}) : ((arg0) => {
  let sum;
  const obj2 = { bottom: sum + hasOwnProperty(arg0) };
  const obj = useToken;
  const token = obj.useToken(nativeDefault.modules.mobile.JUMP_TO_PRESENT_BOTTOM_SPACING);
  sum = React3(arg0) + token;
  return obj2;
});
const result = size.fileFinishedImporting("components_native/chat/JumpToPresentButton.tsx");

export default function JumpToPresentButton(channelId) {
  let closure_2;
  let connected;
  let stringResult;
  let tmp12Result;
  channelId = channelId.channelId;
  const screenIndex = channelId.screenIndex;
  const onJumpToPresent = channelId.onJumpToPresent;
  let tmp = closure_10();
  const tmp2 = closure_11(screenIndex);
  let tmp3 = channelId;
  const items = [GatewayConnectionStore];
  const obj = channelId(504);
  dependencyMap = obj.useStateFromStores(items, () => connected.isConnected(), []);
  let tmp5 = useChatBottomManagerUIStore((showingAutoComplete) => {
    let tmp = closure_2;
    if (tmp) {
      showingAutoComplete = showingAutoComplete.showingAutoComplete;
      const value = showingAutoComplete.get(screenIndex);
      let tmp5 = !value;
      const tmp3 = screenIndex;
      if (tmp5) {
        const showJumpToPresentButtonChannelId = showingAutoComplete.showJumpToPresentButtonChannelId;
        tmp5 = showJumpToPresentButtonChannelId.get(tmp3) === channelId;
      }
      tmp = tmp5;
    }
    return tmp;
  });
  const obj2 = channelId(8963);
  const isVoicePanelMounted = obj2.useIsVoicePanelMounted(channelId);
  const obj3 = channelId(8963);
  const isVoicePanelOpen = obj3.useIsVoicePanelOpen(channelId);
  const items1 = [MessageStore];
  const obj4 = channelId(504);
  const stateFromStores = obj4.useStateFromStores(items1, () => null != MessageStore.getMessages(channelId).jumpReturnTargetId);
  if (!tmp5) {
    return null;
  }
  let tmp10 = tmp2;
  const tmp3Result = tmp3(1364);
  if (tmp3Result.isIOS()) {
    const items2 = [tmp.containerIOS, tmp2];
    tmp10 = items2;
  }
  const intl = tmp3(1115).intl;
  const string = intl.string;
  const t = tmp3(1115).t;
  if (stateFromStores) {
    stringResult = string(t.dpjpOp);
  } else {
    stringResult = string(t.gpoQsB);
  }
  const items3 = [tmp.container, tmp10];
  if (tmp5) {
    const obj6 = { accessibilityLabel: stringResult, icon: screenIndex(11751), onPress: onJumpToPresent };
    const tmp16 = screenIndex(11750);
    tmp12Result = tmp12(tmp16, obj6);
  } else {
    tmp12Result = tmp12(tmp3(11752).MemoedVoicePanelDismissChatButton, {});
  }
  return <tmp13 style={items3}>{tmp12Result}</tmp13>;
};
