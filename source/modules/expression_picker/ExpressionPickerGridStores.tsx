// Module ID: 9367
// Function ID: 73135
// Name: createStore
// Dependencies: [677, 3999, 682, 2]
// Exports: default

// Module 9367 (createStore)
function createStore() {
  function getState() {
    return withEqualityFnResult.getState();
  }
  let obj = require(getState[0]);
  const withEqualityFn = obj.createWithEqualityFn();
  const withEqualityFnResult = withEqualityFn(require(getState[1]).subscribeWithSelector(() => outer1_2));
  require = withEqualityFnResult;
  obj = {
    useStore: withEqualityFnResult,
    getState,
    subscribe(arg0, arg1) {
      return withEqualityFnResult.subscribe(arg0, arg1);
    },
    setInspectedExpressionPosition(arg0, arg1, arg2) {
      let closure_0 = arg0;
      let closure_1 = arg1;
      let closure_2 = arg2;
      withEqualityFnResult(getState[2]).batchUpdates(() => {
        const inspectedExpressionPosition = { rowIndex: closure_1, columnIndex: state, source: closure_2 };
        return state.setState({ inspectedExpressionPosition, hasInteracted: true });
      });
    },
    setActiveCategoryIndex(arg0) {
      let closure_0 = arg0;
      withEqualityFnResult(getState[2]).batchUpdates(() => state.setState({ activeCategoryIndex: state }));
    },
    setSearchPlaceholder(arg0) {
      let closure_0 = arg0;
      withEqualityFnResult(getState[2]).batchUpdates(() => state.setState({ searchPlaceholder: state }));
    },
    resetStoreState() {
      withEqualityFnResult(getState[2]).batchUpdates(() => outer1_0.setState(outer2_2));
    },
    setBottomPosition(arg0) {
      let closure_0 = arg0;
      withEqualityFnResult(getState[2]).batchUpdates(() => state.setState({ bottomPosition: state }));
    },
    setAnalyticsId(replaced) {
      let closure_0 = replaced;
      withEqualityFnResult(getState[2]).batchUpdates(() => state.setState({ analyticsId: state }));
    },
    getAnalyticsId() {
      return getState().analyticsId;
    }
  };
  return obj;
}
let obj = { inspectedExpressionPosition: { rowIndex: 0, columnIndex: 0 }, hasInteracted: false, activeCategoryIndex: 0, searchPlaceholder: null, bottomPosition: null, analyticsId: null };
let closure_2 = Object.freeze(obj);
const store = createStore();
const store1 = createStore();
const store2 = createStore();
const store3 = createStore();
const result = require("batchUpdates").fileFinishedImporting("modules/expression_picker/ExpressionPickerGridStores.tsx");

export default createStore;
export const INACTIVE_CATEGORY_INDEX = -1;
export const EmojiPickerStore = store;
export const StickerPickerStore = store1;
export const SoundboardPickerStore = store2;
export const ApplicationCommandDiscoveryPickerStore = store3;
