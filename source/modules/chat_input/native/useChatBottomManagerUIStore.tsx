// Module ID: 9313
// Function ID: 72809
// Name: getChatInputContainerHeight
// Dependencies: [587, 621, 3989, 2]
// Exports: updateChatInputContainerHeight, updateIsAtBottom, updateShouldShowJumpToPresentButton, updateShowingAutoComplete, useBestActiveChatInputContainerHeight, useChatInputContainerHeight, useChatIsAtBottom, useChatShowingAutoComplete

// Module 9313 (getChatInputContainerHeight)
import keys from "keys";

function getChatInputContainerHeight() {
  let num = 0;
  const Storage = require(587) /* Storage */.Storage;
  const value = Storage.get(chatInputContainerHeight, 0);
  if (null != value) {
    num = value;
  }
  return num;
}
let chatInputContainerHeight = "chatInputContainerHeight";
let obj = keys.create(() => {
  const obj = { chatInputContainerHeight: new Map() };
  const map = new Map();
  obj.showingAutoComplete = new Map();
  const map1 = new Map();
  obj.showJumpToPresentButtonChannelId = new Map();
  const map2 = new Map();
  obj.isAtBottom = new Map();
  return obj;
});
let result = require("getHighestActiveScreenIndex").fileFinishedImporting("modules/chat_input/native/useChatBottomManagerUIStore.tsx");

export default obj;
export const updateChatInputContainerHeight = function updateChatInputContainerHeight(arg0, arg1) {
  const _require = arg0;
  const dependencyMap = arg1;
  if ("number" === typeof arg0) {
    const Storage = _require(587).Storage;
    let result = Storage.set(chatInputContainerHeight, arg1);
  }
  obj.setState((chatInputContainerHeight) => {
    chatInputContainerHeight = new Map(chatInputContainerHeight.chatInputContainerHeight);
    const result = chatInputContainerHeight.set(closure_0, closure_1);
    return { chatInputContainerHeight };
  });
};
export const updateShowingAutoComplete = function updateShowingAutoComplete(arg0, arg1) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  obj.setState((showingAutoComplete) => {
    showingAutoComplete = new Map(showingAutoComplete.showingAutoComplete);
    const result = showingAutoComplete.set(closure_0, closure_1);
    return { showingAutoComplete };
  });
};
export const updateShouldShowJumpToPresentButton = function updateShouldShowJumpToPresentButton(arg0, arg1, arg2) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  let closure_2 = arg2;
  obj.setState((showJumpToPresentButtonChannelId) => {
    showJumpToPresentButtonChannelId = new Map(showJumpToPresentButtonChannelId.showJumpToPresentButtonChannelId);
    let tmp2;
    if (closure_2) {
      tmp2 = closure_0;
    }
    const result = showJumpToPresentButtonChannelId.set(closure_1, tmp2);
    return { showJumpToPresentButtonChannelId };
  });
};
export const useChatInputContainerHeight = function useChatInputContainerHeight(arg0) {
  let closure_0 = arg0;
  return obj((chatInputContainerHeight) => {
    chatInputContainerHeight = chatInputContainerHeight.chatInputContainerHeight;
    let value = chatInputContainerHeight.get(closure_0);
    if (null == value) {
      value = outer1_4();
    }
    return value;
  });
};
export const useChatShowingAutoComplete = function useChatShowingAutoComplete(arg0) {
  let closure_0 = arg0;
  return obj((showingAutoComplete) => {
    showingAutoComplete = showingAutoComplete.showingAutoComplete;
    const value = showingAutoComplete.get(closure_0);
    return null != value && value;
  });
};
export const updateIsAtBottom = function updateIsAtBottom(arg0, arg1) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  obj.setState((isAtBottom) => {
    isAtBottom = isAtBottom.isAtBottom;
    if (isAtBottom.get(closure_0) === closure_1) {
      return isAtBottom;
    } else {
      const _Map = Map;
      const map = new Map(isAtBottom.isAtBottom);
      const result = map.set(closure_0, closure_1);
      const obj = { isAtBottom: map };
      return obj;
    }
  });
};
export const useChatIsAtBottom = function useChatIsAtBottom(arg0) {
  let closure_0 = arg0;
  return obj((isAtBottom) => {
    isAtBottom = isAtBottom.isAtBottom;
    const value = isAtBottom.get(closure_0);
    return null != value && value;
  });
};
export const useBestActiveChatInputContainerHeight = function useBestActiveChatInputContainerHeight() {
  return obj((chatInputContainerHeight) => {
    const highestActiveScreenIndex = outer1_0(outer1_1[2]).getHighestActiveScreenIndex();
    if (null == highestActiveScreenIndex) {
      let value = outer1_4();
    } else {
      chatInputContainerHeight = chatInputContainerHeight.chatInputContainerHeight;
      value = chatInputContainerHeight.get(highestActiveScreenIndex);
      if (null == value) {
        value = outer1_4();
      }
    }
    return value;
  });
};
