// Module ID: 11403
// Function ID: 88665
// Name: JumpToPresentButton
// Dependencies: [31, 27, 9349, 4808, 4349, 33, 4130, 689, 477, 3834, 1324, 566, 10662, 1212, 11404, 11405, 7533, 11406, 2]
// Exports: default

// Module 11403 (JumpToPresentButton)
import "result";
import { View } from "get ActivityIndicator";
import getChatInputContainerHeight from "getChatInputContainerHeight";
import { useChatInputContainerHeight as closure_5 } from "getChatInputContainerHeight";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import set from "set";
import set from "getChatInputContainerHeight";

const require = arg1;
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { borderRadius: require("_createForOfIteratorHelperLoose").radii.round, position: "absolute", right: require("_createForOfIteratorHelperLoose").modules.mobile.JUMP_TO_PRESENT_RIGHT_SPACING };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
let obj1 = { bottom: "100%", marginBottom: require("_createForOfIteratorHelperLoose").modules.mobile.JUMP_TO_PRESENT_BOTTOM_SPACING, pointerEvents: "box-none" };
_createForOfIteratorHelperLoose.containerIOS = obj1;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let closure_10 = set.isIOS() ? (() => null) : ((arg0) => {
  let obj = require(3834) /* map */;
  obj = {};
  const token = obj.useToken(importDefault(689).modules.mobile.JUMP_TO_PRESENT_BOTTOM_SPACING);
  obj.bottom = callback2(arg0) + token;
  return obj;
});
const result = set.fileFinishedImporting("components_native/chat/JumpToPresentButton.tsx");

export default function JumpToPresentButton(channelId) {
  channelId = channelId.channelId;
  const screenIndex = channelId.screenIndex;
  const onJumpToPresent = channelId.onJumpToPresent;
  const tmp = _createForOfIteratorHelperLoose();
  let tmp2 = callback3(screenIndex);
  let obj = channelId(566);
  const items = [_isNativeReflectConstruct];
  const dependencyMap = obj.useStateFromStores(items, () => outer1_6.isConnected(), []);
  let tmp4 = callback((showingAutoComplete) => {
    let tmp2 = !tmp;
    if (!!closure_2) {
      showingAutoComplete = showingAutoComplete.showingAutoComplete;
      let tmp4 = !showingAutoComplete.get(screenIndex);
      if (tmp4) {
        const showJumpToPresentButtonChannelId = showingAutoComplete.showJumpToPresentButtonChannelId;
        tmp4 = showJumpToPresentButtonChannelId.get(screenIndex) === channelId;
      }
      tmp2 = tmp4;
    }
    return tmp2;
  });
  let obj1 = channelId(10662);
  const isVoicePanelMounted = obj1.useIsVoicePanelMounted(channelId);
  const tmp3 = screenIndex(1324)("JumpToPresentButton");
  const isVoicePanelOpen = channelId(10662).useIsVoicePanelOpen(channelId);
  const obj3 = channelId(10662);
  const items1 = [closure_7];
  const stateFromStores = channelId(566).useStateFromStores(items1, () => null != outer1_7.getMessages(channelId).jumpReturnTargetId);
  if (!tmp4) {
    return null;
  }
  let containerIOS = tmp2;
  if (null == tmp2) {
    containerIOS = tmp.containerIOS;
  }
  const intl = channelId(1212).intl;
  const string = intl.string;
  const t = channelId(1212).t;
  if (stateFromStores) {
    let stringResult = string(t.dpjpOp);
  } else {
    stringResult = string(t.gpoQsB);
  }
  obj = { style: items2 };
  items2 = [tmp.container, containerIOS];
  if (tmp4) {
    if (tmp3) {
      obj = { accessibilityLabel: stringResult };
      stringResult = screenIndex(11405);
      obj.icon = stringResult;
      obj.onPress = onJumpToPresent;
      let tmp12Result = tmp12(screenIndex(11404), obj);
      const tmp21 = screenIndex(11404);
    } else {
      obj1 = { accessibilityLabel: stringResult, onPress: onJumpToPresent, icon: screenIndex(11405), variant: "primary-overlay" };
      tmp12Result = tmp12(channelId(7533).IconButton, obj1);
    }
  } else {
    obj.children = tmp12(channelId(11406).MemoedVoicePanelDismissChatButton, {});
    return tmp10(tmp11, obj);
  }
};
