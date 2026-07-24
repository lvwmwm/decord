// Module ID: 15793
// Function ID: 121815
// Name: openExpressionPicker
// Dependencies: [1314, 4338, 677, 3999, 682, 2]
// Exports: setExpressionPickerView, setSearchQuery, toggleExpressionPicker, toggleMultiExpressionPicker

// Module 15793 (openExpressionPicker)
import { ExpressionPickerViewType } from "ExpressionPickerViewType";
import useStoreWithEqualityFn from "useStoreWithEqualityFn";
import createJSONStorage from "createJSONStorage";

function openExpressionPicker(arg0, arg1, arg2) {
  const _require = arg0;
  const dependencyMap = arg1;
  let closure_2 = arg2;
  _require(682).batchUpdates(() => outer1_4.setState({ activeView: closure_0, activeViewType: closure_1, activeChannelId: closure_2, lastActiveView: outer1_4.getState().activeView }));
}
function closeExpressionPicker(arg0, arg1) {
  const state = withEqualityFnResult.getState();
  let tmp2 = undefined !== arg0 && arg0 !== state.activeViewType;
  if (!tmp2) {
    tmp2 = undefined !== arg1 && arg1 !== state.activeChannelId;
    const tmp3 = undefined !== arg1 && arg1 !== state.activeChannelId;
  }
  if (!tmp2) {
    if (null !== state.activeView) {
      state(682).batchUpdates(() => {
        const obj = { activeView: null, activeViewType: null, activeChannelId: null, lastActiveView: state.activeView };
        return outer1_4.setState(obj);
      });
      let obj = state(682);
    }
  }
}
let obj = { activeView: null, lastActiveView: null, activeViewType: null, activeChannelId: null, searchQuery: "", isSearchSuggestion: false, pickerId: require("uniqueId")("uid_"), isNitroLockedSectionVisible: false, areOnlyNitroLockedSectionsVisible: false };
let closure_3 = Object.freeze(obj);
useStoreWithEqualityFn = useStoreWithEqualityFn.createWithEqualityFn();
obj = {
  name: "expression-picker-last-active-view",
  partialize(lastActiveView) {
    return { lastActiveView: lastActiveView.lastActiveView };
  }
};
const withEqualityFnResult = useStoreWithEqualityFn(createJSONStorage.persist(() => closure_3, obj));
const result = require("useStoreWithEqualityFn").fileFinishedImporting("modules/expression_picker/ExpressionPickerStore.tsx");

export { openExpressionPicker };
export { closeExpressionPicker };
export const toggleMultiExpressionPicker = function toggleMultiExpressionPicker(arg0, arg1) {
  const state = withEqualityFnResult.getState();
  if (null == state.activeView) {
    let EMOJI = state.lastActiveView;
    if (null == EMOJI) {
      EMOJI = ExpressionPickerViewType.EMOJI;
    }
    openExpressionPicker(EMOJI, arg0, arg1);
    const tmp6 = openExpressionPicker;
  } else {
    if (state.activeViewType === arg0) {
      if (state.activeChannelId === arg1) {
        closeExpressionPicker();
      }
    }
    openExpressionPicker(state.activeView, arg0, arg1);
  }
};
export const toggleExpressionPicker = function toggleExpressionPicker(arg0, arg1, arg2) {
  const state = withEqualityFnResult.getState();
  if (state.activeView === arg0) {
    if (state.activeViewType === arg1) {
      if (state.activeChannelId === arg2) {
        closeExpressionPicker();
      }
    }
  }
  openExpressionPicker(arg0, arg1, arg2);
};
export const setExpressionPickerView = function setExpressionPickerView(arg0) {
  const _require = arg0;
  _require(682).batchUpdates(() => outer1_4.setState({ activeView: closure_0, lastActiveView: outer1_4.getState().activeView }));
};
export const setSearchQuery = function setSearchQuery(arg0) {
  let flag = arg1;
  const _require = arg0;
  if (arg1 === undefined) {
    flag = false;
  }
  _require(flag[4]).batchUpdates(() => outer1_4.setState({ searchQuery: closure_0, isSearchSuggestion: flag }));
};
export const useExpressionPickerStore = withEqualityFnResult;
