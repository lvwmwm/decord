// Module ID: 9319
// Function ID: 72847
// Name: createStore
// Dependencies: []
// Exports: default

// Module 9319 (createStore)
function createStore() {
  function getState() {
    return withEqualityFnResult.getState();
  }
  const dependencyMap = getState;
  let obj = require(dependencyMap[0]);
  const withEqualityFn = obj.createWithEqualityFn();
  const withEqualityFnResult = withEqualityFn(require(dependencyMap[1]).subscribeWithSelector(() => closure_2));
  const require = withEqualityFnResult;
  obj = {
    useStore: withEqualityFnResult,
    getState,
    subscribe(arg0, arg1) {
      return withEqualityFnResult.subscribe(arg0, arg1);
    },
    setInspectedExpressionPosition(arg0, arg1, arg2) {
      const getState = arg1;
      arg0(getState[2]).batchUpdates(() => {
        const inspectedExpressionPosition = { rowIndex: arg1, columnIndex: arg0, source: arg2 };
        return arg0.setState({ inspectedExpressionPosition, hasInteracted: true });
      });
    },
    setActiveCategoryIndex(arg0) {
      arg0(getState[2]).batchUpdates(() => arg0.setState({ activeCategoryIndex: arg0 }));
    },
    setSearchPlaceholder(arg0) {
      arg0(getState[2]).batchUpdates(() => arg0.setState({ searchPlaceholder: arg0 }));
    },
    resetStoreState() {
      withEqualityFnResult(getState[2]).batchUpdates(() => state.setState(closure_2));
    },
    setBottomPosition(arg0) {
      arg0(getState[2]).batchUpdates(() => arg0.setState({ bottomPosition: arg0 }));
    },
    setAnalyticsId(replaced) {
      replaced(getState[2]).batchUpdates(() => arg0.setState({ analyticsId: arg0 }));
    },
    getAnalyticsId() {
      return getState().analyticsId;
    }
  };
  return obj;
}
let closure_2 = Object.freeze({ inspectedExpressionPosition: { -1167695235: false, 188516691: true } });
const store = createStore();
const store1 = createStore();
const store2 = createStore();
const store3 = createStore();
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("modules/expression_picker/ExpressionPickerGridStores.tsx");

export default createStore;
export const INACTIVE_CATEGORY_INDEX = -1;
export const EmojiPickerStore = store;
export const StickerPickerStore = store1;
export const SoundboardPickerStore = store2;
export const ApplicationCommandDiscoveryPickerStore = store3;
