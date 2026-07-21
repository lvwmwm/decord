// Module ID: 15621
// Function ID: 119277
// Name: openExpressionPicker
// Dependencies: []
// Exports: setExpressionPickerView, setSearchQuery, toggleExpressionPicker, toggleMultiExpressionPicker

// Module 15621 (openExpressionPicker)
function openExpressionPicker(arg0, arg1, arg2) {
  const require = arg0;
  const dependencyMap = arg1;
  const ExpressionPickerViewType = arg2;
  require(dependencyMap[4]).batchUpdates(() => store.setState({ activeView: arg0, activeViewType: arg1, activeChannelId: arg2, lastActiveView: store.getState().activeView }));
}
function closeExpressionPicker(arg0, arg1) {
  const state = withEqualityFnResult.getState();
  const require = state;
  let tmp2 = undefined !== arg0 && arg0 !== state.activeViewType;
  if (!tmp2) {
    tmp2 = undefined !== arg1 && arg1 !== state.activeChannelId;
    const tmp3 = undefined !== arg1 && arg1 !== state.activeChannelId;
  }
  if (!tmp2) {
    if (null !== state.activeView) {
      require(dependencyMap[4]).batchUpdates(() => {
        const obj = { "Bool(true)": false, "Bool(true)": false, "Bool(true)": null, lastActiveView: state.activeView };
        return state.setState(obj);
      });
      const obj = require(dependencyMap[4]);
    }
  }
}
const ExpressionPickerViewType = require(dependencyMap[0]).ExpressionPickerViewType;
let obj = { pickerId: importDefault(dependencyMap[1])("uid_") };
let closure_3 = Object.freeze(obj);
const _module = require(dependencyMap[2]);
const withEqualityFn = _module.createWithEqualityFn();
const _module1 = require(dependencyMap[3]);
obj = {
  name: "expression-picker-last-active-view",
  partialize(lastActiveView) {
    return { lastActiveView: lastActiveView.lastActiveView };
  }
};
const withEqualityFnResult = withEqualityFn(_module1.persist(() => closure_3, obj));
const _module2 = require(dependencyMap[5]);
const result = _module2.fileFinishedImporting("modules/expression_picker/ExpressionPickerStore.tsx");

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
  const require = arg0;
  require(dependencyMap[4]).batchUpdates(() => store.setState({ activeView: arg0, lastActiveView: store.getState().activeView }));
};
export const setSearchQuery = function setSearchQuery(arg0) {
  let flag = arg1;
  const require = arg0;
  if (arg1 === undefined) {
    flag = false;
  }
  const dependencyMap = flag;
  require(dependencyMap[4]).batchUpdates(() => state.setState({ searchQuery: arg0, isSearchSuggestion: flag }));
};
export const useExpressionPickerStore = withEqualityFnResult;
