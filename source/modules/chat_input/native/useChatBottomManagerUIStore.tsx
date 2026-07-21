// Module ID: 9305
// Function ID: 72755
// Name: getChatInputContainerHeight
// Dependencies: []
// Exports: updateChatInputContainerHeight, updateIsAtBottom, updateShouldShowJumpToPresentButton, updateShowingAutoComplete, useBestActiveChatInputContainerHeight, useChatInputContainerHeight, useChatIsAtBottom, useChatShowingAutoComplete

// Module 9305 (getChatInputContainerHeight)
function getChatInputContainerHeight() {
  let num = 0;
  const Storage = require(dependencyMap[0]).Storage;
  const value = Storage.get(closure_2, 0);
  if (null != value) {
    num = value;
  }
  return num;
}
let closure_2 = "chatInputContainerHeight";
const _module = require(dependencyMap[1]);
const obj = _module.create(() => {
  const obj = { chatInputContainerHeight: new Map() };
  const map = new Map();
  obj.showingAutoComplete = new Map();
  const map1 = new Map();
  obj.showJumpToPresentButtonChannelId = new Map();
  const map2 = new Map();
  obj.isAtBottom = new Map();
  return obj;
});
const _module1 = require(dependencyMap[3]);
const result = _module1.fileFinishedImporting("modules/chat_input/native/useChatBottomManagerUIStore.tsx");

export default obj;
export const updateChatInputContainerHeight = function updateChatInputContainerHeight(arg0, arg1) {
  const require = arg0;
  const dependencyMap = arg1;
  if ("number" === typeof arg0) {
    const Storage = require(dependencyMap[0]).Storage;
    const result = Storage.set(closure_2, arg1);
  }
  obj.setState((chatInputContainerHeight) => {
    chatInputContainerHeight = new Map(chatInputContainerHeight.chatInputContainerHeight);
    const result = chatInputContainerHeight.set(chatInputContainerHeight, arg1);
    return { chatInputContainerHeight };
  });
};
export const updateShowingAutoComplete = function updateShowingAutoComplete(arg0, arg1) {
  const require = arg0;
  const dependencyMap = arg1;
  obj.setState((showingAutoComplete) => {
    showingAutoComplete = new Map(showingAutoComplete.showingAutoComplete);
    const result = showingAutoComplete.set(showingAutoComplete, arg1);
    return { showingAutoComplete };
  });
};
export const updateShouldShowJumpToPresentButton = function updateShouldShowJumpToPresentButton(arg0, arg1, arg2) {
  const require = arg0;
  const dependencyMap = arg1;
  let closure_2 = arg2;
  obj.setState((showJumpToPresentButtonChannelId) => {
    showJumpToPresentButtonChannelId = new Map(showJumpToPresentButtonChannelId.showJumpToPresentButtonChannelId);
    let tmp2;
    if (arg2) {
      tmp2 = showJumpToPresentButtonChannelId;
    }
    const result = showJumpToPresentButtonChannelId.set(arg1, tmp2);
    return { showJumpToPresentButtonChannelId };
  });
};
export const useChatInputContainerHeight = function useChatInputContainerHeight(arg0) {
  const require = arg0;
  return obj((chatInputContainerHeight) => {
    chatInputContainerHeight = chatInputContainerHeight.chatInputContainerHeight;
    let value = chatInputContainerHeight.get(chatInputContainerHeight);
    if (null == value) {
      value = callback();
    }
    return value;
  });
};
export const useChatShowingAutoComplete = function useChatShowingAutoComplete(arg0) {
  const require = arg0;
  return obj((showingAutoComplete) => {
    showingAutoComplete = showingAutoComplete.showingAutoComplete;
    const value = showingAutoComplete.get(showingAutoComplete);
    return null != value && value;
  });
};
export const updateIsAtBottom = function updateIsAtBottom(arg0, arg1) {
  const require = arg0;
  const dependencyMap = arg1;
  obj.setState((isAtBottom) => {
    isAtBottom = isAtBottom.isAtBottom;
    if (isAtBottom.get(isAtBottom) === arg1) {
      return isAtBottom;
    } else {
      const _Map = Map;
      const map = new Map(isAtBottom.isAtBottom);
      const result = map.set(isAtBottom, arg1);
      const obj = { isAtBottom: map };
      return obj;
    }
  });
};
export const useChatIsAtBottom = function useChatIsAtBottom(arg0) {
  const require = arg0;
  return obj((isAtBottom) => {
    isAtBottom = isAtBottom.isAtBottom;
    const value = isAtBottom.get(isAtBottom);
    return null != value && value;
  });
};
export const useBestActiveChatInputContainerHeight = function useBestActiveChatInputContainerHeight() {
  return obj((chatInputContainerHeight) => {
    const highestActiveScreenIndex = callback(closure_1[2]).getHighestActiveScreenIndex();
    if (null == highestActiveScreenIndex) {
      let value = callback2();
    } else {
      chatInputContainerHeight = chatInputContainerHeight.chatInputContainerHeight;
      value = chatInputContainerHeight.get(highestActiveScreenIndex);
      if (null == value) {
        value = callback2();
      }
    }
    return value;
  });
};
