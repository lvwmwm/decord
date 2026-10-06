// Module ID: 16868
// Function ID: 16869
// Name: ExpressionPickerStore
// Dependencies: [1230, 5041, 1255, 4708, 1260, 2]
// Exports: closeExpressionPicker, openExpressionPicker, setExpressionPickerView, setSearchQuery, toggleExpressionPicker, toggleMultiExpressionPicker

// Module 16868 (ExpressionPickerStore)
import ExpressionPickerConstants from "ExpressionPickerConstants" /* 1230 */;
import uniqueIdDefault from "uniqueId" /* 5041 */;
import module_1255_mod from "module_1255" /* 1255 */;
import combine from "combine" /* 4708 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

const ExpressionPickerViewType = ExpressionPickerConstants.ExpressionPickerViewType;
let obj = { activeView: null, lastActiveView: null, activeViewType: null, activeChannelId: null, searchQuery: "", isSearchSuggestion: false, pickerId: uniqueIdDefault("uid_"), isNitroLockedSectionVisible: false, areOnlyNitroLockedSectionsVisible: false };
let closure_3 = Object.freeze(obj);
let module_1255 = module_1255_mod;
module_1255 = module_1255.createWithEqualityFn();
let obj2 = {
  name: "expression-picker-last-active-view",
  partialize(lastActiveView) {
    return { lastActiveView: lastActiveView.lastActiveView };
  }
};
const withEqualityFnResult = module_1255(combine.persist(() => closure_3, obj2));
const result = size.fileFinishedImporting("modules/expression_picker/ExpressionPickerStore.tsx");

export const openExpressionPicker = function openExpressionPicker(arg0, arg1, arg2) {
  let closure_0;
  let closure_1;
  _require = arg0;
  dependencyMap = arg1;
  let closure_2 = arg2;
  const obj = require("react-native");
  obj.batchUpdates(() => {
    const obj = { activeView, activeViewType, activeChannelId, lastActiveView: withEqualityFnResult.getState().activeView };
    return withEqualityFnResult.setState(obj);
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
      const obj = state(1260);
      obj.batchUpdates(() => {
        const obj = { activeView: null, activeViewType: null, activeChannelId: null, lastActiveView: state1.activeView };
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
    const obj3 = state1(1260);
    obj3.batchUpdates(() => {
      const obj = { activeView, activeViewType, activeChannelId, lastActiveView: withEqualityFnResult.getState().activeView };
      return withEqualityFnResult.setState(obj);
    });
  } else {
    if (state.activeViewType === arg0) {
      if (state.activeChannelId === arg1) {
        state1 = obj.getState();
        if (null !== state1.activeView) {
          const obj4 = state1(1260);
          obj4.batchUpdates(() => {
            const obj = { activeView: null, activeViewType: null, activeChannelId: null, lastActiveView: state1.activeView };
            return state.setState(obj);
          });
        }
      }
    }
    const activeView = state.activeView;
    closure_1 = arg0;
    closure_2 = arg1;
    const obj2 = state1(1260);
    obj2.batchUpdates(() => {
      const obj = { activeView, activeViewType, activeChannelId, lastActiveView: withEqualityFnResult.getState().activeView };
      return withEqualityFnResult.setState(obj);
    });
  }
};
export const toggleExpressionPicker = function toggleExpressionPicker(activeView, activeViewType, activeChannelId) {
  let obj = withEqualityFnResult;
  const state = withEqualityFnResult.getState();
  if (state.activeView === activeView) {
    if (state.activeViewType === activeViewType) {
      if (state.activeChannelId === activeChannelId) {
        const state1 = obj.getState();
        if (null !== state1.activeView) {
          const obj3 = require("react-native");
          obj3.batchUpdates(() => {
            const obj = { activeView: null, activeViewType: null, activeChannelId: null, lastActiveView: state1.activeView };
            return state.setState(obj);
          });
        }
      }
    }
  }
  _require = activeView;
  dependencyMap = activeViewType;
  const obj2 = require("react-native");
  obj2.batchUpdates(() => {
    const obj = { activeView, activeViewType, activeChannelId, lastActiveView: withEqualityFnResult.getState().activeView };
    return withEqualityFnResult.setState(obj);
  });
};
export const setExpressionPickerView = function setExpressionPickerView(activeView) {
  _require = activeView;
  let obj = require("react-native");
  obj.batchUpdates(() => {
    const obj = { activeView, lastActiveView: withEqualityFnResult.getState().activeView };
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
