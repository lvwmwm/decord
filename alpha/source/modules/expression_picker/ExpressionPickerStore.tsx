// Module ID: 18508
// Function ID: 18509
// Name: ExpressionPickerStore
// Dependencies: [1243, 6673, 1269, 5164, 1274, 2]
// Exports: closeExpressionPicker, openExpressionPicker, setExpressionPickerView, setSearchQuery, setShowEmojiPacks, toggleExpressionPicker, toggleMultiExpressionPicker

// Module 18508 (ExpressionPickerStore)
import ExpressionPickerConstants from "ExpressionPickerConstants" /* 1243 */;
import uniqueIdDefault from "uniqueId" /* 6673 */;
import module_1269_mod from "module_1269" /* 1269 */;
import combine from "combine" /* 5164 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

const ExpressionPickerViewType = ExpressionPickerConstants.ExpressionPickerViewType;
let obj = { activeView: null, lastActiveView: null, activeViewType: null, activeChannelId: null, showEmojiPacks: false, searchQuery: "", isSearchSuggestion: false, pickerId: uniqueIdDefault("uid_"), isNitroLockedSectionVisible: false, areOnlyNitroLockedSectionsVisible: false };
let closure_3 = Object.freeze(obj);
let module_1269 = module_1269_mod;
module_1269 = module_1269.createWithEqualityFn();
let obj2 = {
  name: "expression-picker-last-active-view",
  partialize(lastActiveView) {
    return { lastActiveView: lastActiveView.lastActiveView };
  }
};
const withEqualityFnResult = module_1269(combine.persist(() => closure_3, obj2));
const result = size.fileFinishedImporting("modules/expression_picker/ExpressionPickerStore.tsx");

export const openExpressionPicker = function openExpressionPicker(arg0, arg1, arg2, arg3) {
  let closure_0;
  let closure_1;
  _require = arg0;
  dependencyMap = arg1;
  let closure_2 = arg2;
  closure_3 = arg3;
  const obj = require("react-native");
  obj.batchUpdates(() => {
    let flag;
    let obj;
    const obj2 = { activeView, activeViewType, activeChannelId, showEmojiPacks: flag, lastActiveView: obj.getState().activeView };
    flag = undefined;
    const setState = withEqualityFnResult.setState;
    obj = withEqualityFnResult;
    if (showEmojiPacks != null) {
      flag = showEmojiPacks.showEmojiPacks;
    }
    if (flag == null) {
      flag = false;
    }
    return setState(obj2);
  });
};
export const closeExpressionPicker = function closeExpressionPicker(arg0, arg1) {
  const state = withEqualityFnResult.getState();
  let tmp2 = undefined !== arg0 && arg0 !== state.activeViewType;
  if (!tmp2) {
    tmp2 = undefined !== arg1 && arg1 !== state.activeChannelId;
  }
  if (!tmp2) {
    if (null !== state.activeView) {
      const obj = state(1274);
      obj.batchUpdates(() => {
        const obj = { activeView: null, activeViewType: null, activeChannelId: null, showEmojiPacks: false, lastActiveView: state1.activeView };
        return state.setState(obj);
      });
    }
  }
};
export const toggleMultiExpressionPicker = function toggleMultiExpressionPicker(arg0, arg1) {
  let state1;
  const state = withEqualityFnResult.getState();
  const obj = withEqualityFnResult;
  if (null == state.activeView) {
    let EMOJI = state.lastActiveView;
    if (EMOJI == null) {
      EMOJI = ExpressionPickerViewType.EMOJI;
    }
    let closure_1 = arg0;
    let closure_2 = arg1;
    const obj3 = state1(1274);
    obj3.batchUpdates(() => {
      let flag;
      let obj;
      const obj2 = { activeView, activeViewType, activeChannelId, showEmojiPacks: flag, lastActiveView: obj.getState().activeView };
      flag = undefined;
      const setState = withEqualityFnResult.setState;
      obj = withEqualityFnResult;
      if (showEmojiPacks != null) {
        flag = showEmojiPacks.showEmojiPacks;
      }
      if (flag == null) {
        flag = false;
      }
      return setState(obj2);
    });
  } else {
    if (state.activeViewType === arg0) {
      if (state.activeChannelId === arg1) {
        state1 = obj.getState();
        if (null !== state1.activeView) {
          const obj4 = state1(1274);
          obj4.batchUpdates(() => {
            const obj = { activeView: null, activeViewType: null, activeChannelId: null, showEmojiPacks: false, lastActiveView: state1.activeView };
            return state.setState(obj);
          });
        }
      }
    }
    const activeView = state.activeView;
    closure_1 = arg0;
    closure_2 = arg1;
    let c3;
    const obj2 = state1(1274);
    obj2.batchUpdates(() => {
      let flag;
      let obj;
      const obj2 = { activeView, activeViewType, activeChannelId, showEmojiPacks: flag, lastActiveView: obj.getState().activeView };
      flag = undefined;
      const setState = withEqualityFnResult.setState;
      obj = withEqualityFnResult;
      if (showEmojiPacks != null) {
        flag = showEmojiPacks.showEmojiPacks;
      }
      if (flag == null) {
        flag = false;
      }
      return setState(obj2);
    });
  }
};
export const toggleExpressionPicker = function toggleExpressionPicker(activeView, activeViewType, activeChannelId) {
  let showEmojiPacks;
  let obj = withEqualityFnResult;
  const state = withEqualityFnResult.getState();
  if (state.activeView === activeView) {
    if (state.activeViewType === activeViewType) {
      if (state.activeChannelId === activeChannelId) {
        const state1 = obj.getState();
        if (null !== state1.activeView) {
          const obj3 = require("react-native");
          obj3.batchUpdates(() => {
            const obj = { activeView: null, activeViewType: null, activeChannelId: null, showEmojiPacks: false, lastActiveView: state1.activeView };
            return state.setState(obj);
          });
        }
      }
    }
  }
  _require = activeView;
  dependencyMap = activeViewType;
  let obj2 = require("react-native");
  obj2.batchUpdates(() => {
    let flag;
    let obj;
    const obj2 = { activeView, activeViewType, activeChannelId, showEmojiPacks: flag, lastActiveView: obj.getState().activeView };
    flag = undefined;
    const setState = withEqualityFnResult.setState;
    obj = withEqualityFnResult;
    if (showEmojiPacks != null) {
      flag = showEmojiPacks.showEmojiPacks;
    }
    if (flag == null) {
      flag = false;
    }
    return setState(obj2);
  });
};
export const setExpressionPickerView = function setExpressionPickerView(activeView) {
  _require = activeView;
  let obj = require("react-native");
  obj.batchUpdates(() => {
    const obj = { activeView, lastActiveView: withEqualityFnResult.getState().activeView, showEmojiPacks: false };
    return withEqualityFnResult.setState(obj);
  });
};
export const setShowEmojiPacks = function setShowEmojiPacks(showEmojiPacks) {
  _require = showEmojiPacks;
  let obj = require("react-native");
  obj.batchUpdates(() => {
    const obj = { showEmojiPacks };
    return withEqualityFnResult.setState(obj);
  });
};
export const setSearchQuery = function setSearchQuery(searchQuery) {
  _require = searchQuery;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  let obj = require("react-native");
  obj.batchUpdates(() => {
    const obj = { searchQuery, isSearchSuggestion: flag };
    return withEqualityFnResult.setState(obj);
  });
};
export const useExpressionPickerStore = withEqualityFnResult;
