// Module ID: 8843
// Function ID: 8844
// Name: useChatBottomManagerUIStore
// Dependencies: [510, 560, 4701, 2]
// Exports: updateChatInputContainerHeight, updateIsAtBottom, updateShouldShowJumpToPresentButton, updateShowingAutoComplete, updateSmallSuggestionBarHeight, useBestActiveChatInputContainerHeight, useChatInputContainerHeight, useChatIsAtBottom, useChatShowingAutoComplete, useSmallSuggestionBarHeight

// Module 8843 (useChatBottomManagerUIStore)
import Storage3 from "Storage" /* 510 */;
import ChatInputUtils from "ChatInputUtils" /* 4701 */;
import module_560 from "module_560" /* 560 */;
import size from "module_2" /* 2 */;

let map, set, showJumpToPresentButtonChannelId, showingAutoComplete;

let chatInputContainerHeight = "chatInputContainerHeight";
let __closure = module_560.create(() => {
  const obj = { chatInputContainerHeight: new Map(), showingAutoComplete: new Map(), showJumpToPresentButtonChannelId: new Map(), isAtBottom: new Map(), smallSuggestionBarHeight: new Map() };
  new Map();
  new Map();
  new Map();
  new Map();
  new Map();
  return obj;
});
let result = size.fileFinishedImporting("modules/chat_input/native/useChatBottomManagerUIStore.tsx");

export default __closure;
export const updateChatInputContainerHeight = function updateChatInputContainerHeight(num, arg1) {
  let closure_0 = num;
  let closure_1 = arg1;
  if (typeof num === "number") {
    const Storage = Storage3.Storage;
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
    let tmp3;
    set = showJumpToPresentButtonChannelId.set;
    const tmp2 = closure_1;
    if (closure_2) {
      tmp3 = closure_0;
    }
    const result = set(tmp2, tmp3);
    return { showJumpToPresentButtonChannelId };
  });
};
export const useChatInputContainerHeight = function useChatInputContainerHeight(arg0) {
  let closure_0 = arg0;
  return obj((chatInputContainerHeight) => {
    chatInputContainerHeight = chatInputContainerHeight.chatInputContainerHeight;
    let value = chatInputContainerHeight.get(closure_0);
    if (value == null) {
      const Storage = Storage3.Storage;
      let num2 = Storage.get(chatInputContainerHeight, 0);
      if (num2 == null) {
        num2 = 0;
      }
      value = num2;
    }
    return value;
  });
};
export const updateSmallSuggestionBarHeight = function updateSmallSuggestionBarHeight(arg0, arg1) {
  let obj;
  let closure_0 = arg0;
  let closure_1 = arg1;
  obj.setState(function(smallSuggestionBarHeight) {
    smallSuggestionBarHeight = smallSuggestionBarHeight.smallSuggestionBarHeight;
    const tmp = ref;
    if (smallSuggestionBarHeight.get(ref) === closure_1) {
      return smallSuggestionBarHeight;
    } else {
      const _Map = Map;
      const self = this;
      const self2 = this;
      map = new Map(smallSuggestionBarHeight.smallSuggestionBarHeight);
      const result = map.set(tmp, tmp2);
      return { smallSuggestionBarHeight: map };
    }
  });
};
export const useSmallSuggestionBarHeight = function useSmallSuggestionBarHeight(arg0) {
  let closure_0 = arg0;
  return obj((smallSuggestionBarHeight) => {
    smallSuggestionBarHeight = smallSuggestionBarHeight.smallSuggestionBarHeight;
    let num = smallSuggestionBarHeight.get(closure_0);
    if (num == null) {
      num = 0;
    }
    return num;
  });
};
export const useChatShowingAutoComplete = function useChatShowingAutoComplete(arg0) {
  let closure_0 = arg0;
  return obj((showingAutoComplete) => {
    showingAutoComplete = showingAutoComplete.showingAutoComplete;
    let flag = showingAutoComplete.get(closure_0);
    if (flag == null) {
      flag = false;
    }
    return flag;
  });
};
export const updateIsAtBottom = function updateIsAtBottom(arg0, arg1) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  obj.setState(function(isAtBottom) {
    isAtBottom = isAtBottom.isAtBottom;
    const tmp = closure_0;
    if (isAtBottom.get(closure_0) === closure_1) {
      return isAtBottom;
    } else {
      const _Map = Map;
      const self = this;
      const self2 = this;
      map = new Map(isAtBottom.isAtBottom);
      const result = map.set(tmp, tmp2);
      return { isAtBottom: map };
    }
  });
};
export const useChatIsAtBottom = function useChatIsAtBottom(arg0) {
  let closure_0 = arg0;
  return obj((isAtBottom) => {
    isAtBottom = isAtBottom.isAtBottom;
    let flag = isAtBottom.get(closure_0);
    if (flag == null) {
      flag = false;
    }
    return flag;
  });
};
export const useBestActiveChatInputContainerHeight = function useBestActiveChatInputContainerHeight() {
  let obj;
  return obj((chatInputContainerHeight) => {
    let value;
    const obj = ChatInputUtils;
    const highestActiveScreenIndex = obj.getHighestActiveScreenIndex();
    if (null == highestActiveScreenIndex) {
      const Storage2 = tmp(tmp2[0]).Storage;
      let num4 = Storage2.get(closure_1_2, 0);
      if (num4 == null) {
        num4 = 0;
      }
      value = num4;
    } else {
      chatInputContainerHeight = chatInputContainerHeight.chatInputContainerHeight;
      value = chatInputContainerHeight.get(highestActiveScreenIndex);
      if (value == null) {
        const Storage = tmp(tmp2[0]).Storage;
        let num2 = Storage.get(closure_1_2, 0);
        if (num2 == null) {
          num2 = 0;
        }
        value = num2;
      }
    }
    return value;
  });
};
