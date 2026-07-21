// Module ID: 11363
// Function ID: 88350
// Name: JumpToPresentButton
// Dependencies: []
// Exports: default

// Module 11363 (JumpToPresentButton)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = arg1(dependencyMap[2]).useChatInputContainerHeight;
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
const jsx = arg1(dependencyMap[5]).jsx;
let obj = arg1(dependencyMap[6]);
obj = {};
obj = { borderRadius: importDefault(dependencyMap[7]).radii.round, position: "absolute", right: importDefault(dependencyMap[7]).modules.mobile.JUMP_TO_PRESENT_RIGHT_SPACING };
obj.container = obj;
const obj1 = { 1449288664: "", -1401465942: "", -1394561895: "Array", marginBottom: importDefault(dependencyMap[7]).modules.mobile.JUMP_TO_PRESENT_BOTTOM_SPACING };
obj.containerIOS = obj1;
let closure_9 = obj.createStyles(obj);
let closure_10 = arg1(dependencyMap[8]).isIOS() ? () => null : (arg0) => {
  let obj = arg1(dependencyMap[9]);
  obj = {};
  const token = obj.useToken(importDefault(dependencyMap[7]).modules.mobile.JUMP_TO_PRESENT_BOTTOM_SPACING);
  obj.bottom = callback2(arg0) + token;
  return obj;
};
const obj5 = arg1(dependencyMap[8]);
const result = arg1(dependencyMap[18]).fileFinishedImporting("components_native/chat/JumpToPresentButton.tsx");

export default function JumpToPresentButton(channelId) {
  channelId = channelId.channelId;
  const arg1 = channelId;
  const screenIndex = channelId.screenIndex;
  const importDefault = screenIndex;
  const onJumpToPresent = channelId.onJumpToPresent;
  const tmp = callback3();
  const tmp2 = callback4(screenIndex);
  let obj = arg1(closure_2[11]);
  const items = [closure_6];
  closure_2 = obj.useStateFromStores(items, () => connected.isConnected(), []);
  const tmp4 = callback((showingAutoComplete) => {
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
  let obj1 = arg1(closure_2[12]);
  const isVoicePanelMounted = obj1.useIsVoicePanelMounted(channelId);
  const tmp3 = importDefault(closure_2[10])("JumpToPresentButton");
  const isVoicePanelOpen = arg1(closure_2[12]).useIsVoicePanelOpen(channelId);
  const obj3 = arg1(closure_2[12]);
  const items1 = [closure_7];
  const stateFromStores = arg1(closure_2[11]).useStateFromStores(items1, () => null != messages.getMessages(channelId).jumpReturnTargetId);
  if (!tmp4) {
    return null;
  }
  let containerIOS = tmp2;
  if (null == tmp2) {
    containerIOS = tmp.containerIOS;
  }
  const intl = arg1(closure_2[13]).intl;
  const string = intl.string;
  const t = arg1(closure_2[13]).t;
  if (stateFromStores) {
    let stringResult = string(t.dpjpOp);
  } else {
    stringResult = string(t.gpoQsB);
  }
  obj = { style: items2 };
  const items2 = [tmp.container, containerIOS];
  if (tmp4) {
    if (tmp3) {
      obj = { accessibilityLabel: stringResult };
      stringResult = importDefault(closure_2[15]);
      obj.icon = stringResult;
      obj.onPress = onJumpToPresent;
      let tmp12Result = tmp12(importDefault(closure_2[14]), obj);
      const tmp21 = importDefault(closure_2[14]);
    } else {
      obj1 = { accessibilityLabel: stringResult, onPress: onJumpToPresent, icon: importDefault(closure_2[15]), variant: "primary-overlay" };
      tmp12Result = tmp12(arg1(closure_2[16]).IconButton, obj1);
    }
  } else {
    obj.children = tmp12(arg1(closure_2[17]).MemoedVoicePanelDismissChatButton, {});
    return tmp10(tmp11, obj);
  }
};
