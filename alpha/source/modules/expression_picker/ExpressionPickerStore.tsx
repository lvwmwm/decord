// Module ID: 19166
// Function ID: 19167
// Name: ExpressionPickerStore
// Dependencies: [1228, 6029, 1254, 5212, 1259, 2]
// Exports: closeExpressionPicker, openExpressionPicker, setExpressionPickerView, setSearchQuery, setShowEmojiPacks, toggleExpressionPicker, toggleMultiExpressionPicker

// Module 19166 (ExpressionPickerStore)
import ExpressionPickerConstants from "ExpressionPickerConstants" /* 1228 */;
import uniqueIdDefault from "uniqueId" /* 6029 */;
import module_1254_mod from "module_1254" /* 1254 */;
import combine from "combine" /* 5212 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

const ExpressionPickerViewType = ExpressionPickerConstants.ExpressionPickerViewType;
let obj = { activeView: null, lastActiveView: null, activeViewType: null, activeChannelId: null, showEmojiPacks: false, searchQuery: "", isSearchSuggestion: false, pickerId: uniqueIdDefault("uid_"), isNitroLockedSectionVisible: false, areOnlyNitroLockedSectionsVisible: false };
let closure_3 = Object.freeze(obj);
let module_1254 = module_1254_mod;
module_1254 = module_1254.createWithEqualityFn();
let obj2 = {
  name: "expression-picker-last-active-view",
  partialize(lastActiveView) {
    return { lastActiveView: lastActiveView.lastActiveView };
  }
};
const withEqualityFnResult = module_1254(combine.persist(() => closure_3, obj2));
const result = size.fileFinishedImporting("modules/expression_picker/ExpressionPickerStore.tsx");

export function openExpressionPicker(arg0, arg1, arg2, arg3) {
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
    let prop;
    const obj2 = { activeView, activeViewType, activeChannelId, showEmojiPacks: flag, showSelectedEmojiPackId: prop, lastActiveView: obj.getState().activeView };
    flag = undefined;
    const setState = withEqualityFnResult.setState;
    obj = withEqualityFnResult;
    if (closure_1_3 != null) {
      flag = tmp.showEmojiPacks;
    }
    if (flag == null) {
      flag = false;
    }
    prop = undefined;
    if (closure_1_3 != null) {
      prop = tmp.showSelectedEmojiPackId;
    }
    return setState(obj2);
  });
}
export function closeExpressionPicker(arg0, arg1) {
  const state = withEqualityFnResult.getState();
  let tmp2 = undefined !== arg0 && arg0 !== state.activeViewType;
  if (!tmp2) {
    tmp2 = undefined !== arg1 && arg1 !== state.activeChannelId;
  }
  if (!tmp2) {
    if (null !== state.activeView) {
      const obj = state(1259);
      obj.batchUpdates(() => {
        const obj = { activeView: null, activeViewType: null, activeChannelId: null, showEmojiPacks: false, showSelectedEmojiPackId: "Array", lastActiveView: state1.activeView };
        return state.setState(obj);
      });
    }
  }
}
export function toggleMultiExpressionPicker(arg0, arg1) {
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
    const obj3 = state1(1259);
    obj3.batchUpdates(() => {
      let flag;
      let obj;
      let prop;
      const obj2 = { activeView, activeViewType, activeChannelId, showEmojiPacks: flag, showSelectedEmojiPackId: prop, lastActiveView: obj.getState().activeView };
      flag = undefined;
      const setState = withEqualityFnResult.setState;
      obj = withEqualityFnResult;
      if (closure_1_3 != null) {
        flag = tmp.showEmojiPacks;
      }
      if (flag == null) {
        flag = false;
      }
      prop = undefined;
      if (closure_1_3 != null) {
        prop = tmp.showSelectedEmojiPackId;
      }
      return setState(obj2);
    });
  } else {
    if (state.activeViewType === arg0) {
      if (state.activeChannelId === arg1) {
        state1 = obj.getState();
        if (null !== state1.activeView) {
          const obj4 = state1(1259);
          obj4.batchUpdates(() => {
            const obj = { activeView: null, activeViewType: null, activeChannelId: null, showEmojiPacks: false, showSelectedEmojiPackId: "Array", lastActiveView: state1.activeView };
            return state.setState(obj);
          });
        }
      }
    }
    const activeView = state.activeView;
    closure_1 = arg0;
    closure_2 = arg1;
    let c3;
    const obj2 = state1(1259);
    obj2.batchUpdates(() => {
      let flag;
      let obj;
      let prop;
      const obj2 = { activeView, activeViewType, activeChannelId, showEmojiPacks: flag, showSelectedEmojiPackId: prop, lastActiveView: obj.getState().activeView };
      flag = undefined;
      const setState = withEqualityFnResult.setState;
      obj = withEqualityFnResult;
      if (closure_1_3 != null) {
        flag = tmp.showEmojiPacks;
      }
      if (flag == null) {
        flag = false;
      }
      prop = undefined;
      if (closure_1_3 != null) {
        prop = tmp.showSelectedEmojiPackId;
      }
      return setState(obj2);
    });
  }
}
export function toggleExpressionPicker(activeView, activeViewType, activeChannelId) {
  let obj = withEqualityFnResult;
  const state = withEqualityFnResult.getState();
  if (state.activeView === activeView) {
    if (state.activeViewType === activeViewType) {
      if (state.activeChannelId === activeChannelId) {
        const state1 = obj.getState();
        if (null !== state1.activeView) {
          const obj3 = require("react-native");
          obj3.batchUpdates(() => {
            const obj = { activeView: null, activeViewType: null, activeChannelId: null, showEmojiPacks: false, showSelectedEmojiPackId: "Array", lastActiveView: state1.activeView };
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
    let prop;
    const obj2 = { activeView, activeViewType, activeChannelId, showEmojiPacks: flag, showSelectedEmojiPackId: prop, lastActiveView: obj.getState().activeView };
    flag = undefined;
    const setState = withEqualityFnResult.setState;
    obj = withEqualityFnResult;
    if (closure_1_3 != null) {
      flag = tmp.showEmojiPacks;
    }
    if (flag == null) {
      flag = false;
    }
    prop = undefined;
    if (closure_1_3 != null) {
      prop = tmp.showSelectedEmojiPackId;
    }
    return setState(obj2);
  });
}
export function setExpressionPickerView(activeView) {
  _require = activeView;
  let obj = require("react-native");
  obj.batchUpdates(() => {
    const obj = { activeView, lastActiveView: withEqualityFnResult.getState().activeView, showEmojiPacks: false, showSelectedEmojiPackId: "ti" };
    return withEqualityFnResult.setState(obj);
  });
}
export function setShowEmojiPacks(showEmojiPacks) {
  _require = showEmojiPacks;
  let obj = require("react-native");
  obj.batchUpdates(() => {
    const obj = { showEmojiPacks, showSelectedEmojiPackId: "a" };
    return withEqualityFnResult.setState(obj);
  });
}
export function setSearchQuery(searchQuery) {
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
}
export const useExpressionPickerStore = withEqualityFnResult;
