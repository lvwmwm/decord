// Module ID: 9364
// Function ID: 9365
// Name: ExpressionPickerGridStores
// Dependencies: [1266, 4950, 1271, 2]
// Exports: default

// Module 9364 (ExpressionPickerGridStores)
import react_native from "react-native" /* 1271 */;
import module_1266_mod from "module_1266" /* 1266 */;
import combine_mod from "combine" /* 4950 */;
import size from "module_2" /* 2 */;

const f100630 = () => closure_1_2;
let closure_2 = Object.freeze({ inspectedExpressionPosition: { rowIndex: 0, columnIndex: 0 }, hasInteracted: false, activeCategoryIndex: 0, searchPlaceholder: null, bottomPosition: null, analyticsId: null });
let module_1266 = module_1266_mod;
module_1266 = module_1266.createWithEqualityFn();
let combine = combine_mod;
let withEqualityFnResult = module_1266(combine.subscribeWithSelector(f100630));
let store = {
  useStore: withEqualityFnResult,
  getState() {
    return require.getState();
  },
  subscribe(arg0, arg1) {
    return require.subscribe(arg0, arg1);
  },
  setInspectedExpressionPosition(columnIndex, rowIndex, source) {
    let obj = react_native;
    obj.batchUpdates(() => {
      let obj2;
      const obj = { inspectedExpressionPosition: obj2, hasInteracted: true };
      obj2 = { rowIndex, columnIndex, source };
      return require.setState(obj);
    });
  },
  setActiveCategoryIndex(activeCategoryIndex) {
    let obj = react_native;
    obj.batchUpdates(() => {
      const obj = { activeCategoryIndex };
      return require.setState(obj);
    });
  },
  setSearchPlaceholder(searchPlaceholder) {
    let obj = react_native;
    obj.batchUpdates(() => {
      const obj = { searchPlaceholder };
      return require.setState(obj);
    });
  },
  resetStoreState() {
    let state;
    const obj = react_native;
    obj.batchUpdates(() => state.setState(closure_2_2));
  },
  setBottomPosition(bottomPosition) {
    let obj = react_native;
    obj.batchUpdates(() => {
      const obj = { bottomPosition };
      return require.setState(obj);
    });
  },
  setAnalyticsId(replaced) {
    const analyticsId = replaced;
    let obj = react_native;
    obj.batchUpdates(() => {
      const obj = { analyticsId };
      return require.setState(obj);
    });
  },
  getAnalyticsId() {
    return require.getState().analyticsId;
  }
};
module_1266 = module_1266_mod;
module_1266 = module_1266.createWithEqualityFn();
combine = combine_mod;
const withEqualityFn1Result = module_1266(combine.subscribeWithSelector(f100630));
const store1 = {
  useStore: withEqualityFn1Result,
  getState() {
    return require.getState();
  },
  subscribe(arg0, arg1) {
    return require.subscribe(arg0, arg1);
  },
  setInspectedExpressionPosition(columnIndex, rowIndex, source) {
    let obj = react_native;
    obj.batchUpdates(() => {
      let obj2;
      const obj = { inspectedExpressionPosition: obj2, hasInteracted: true };
      obj2 = { rowIndex, columnIndex, source };
      return require.setState(obj);
    });
  },
  setActiveCategoryIndex(activeCategoryIndex) {
    let obj = react_native;
    obj.batchUpdates(() => {
      const obj = { activeCategoryIndex };
      return require.setState(obj);
    });
  },
  setSearchPlaceholder(searchPlaceholder) {
    let obj = react_native;
    obj.batchUpdates(() => {
      const obj = { searchPlaceholder };
      return require.setState(obj);
    });
  },
  resetStoreState() {
    let state;
    const obj = react_native;
    obj.batchUpdates(() => state.setState(closure_2_2));
  },
  setBottomPosition(bottomPosition) {
    let obj = react_native;
    obj.batchUpdates(() => {
      const obj = { bottomPosition };
      return require.setState(obj);
    });
  },
  setAnalyticsId(replaced) {
    const analyticsId = replaced;
    let obj = react_native;
    obj.batchUpdates(() => {
      const obj = { analyticsId };
      return require.setState(obj);
    });
  },
  getAnalyticsId() {
    return require.getState().analyticsId;
  }
};
module_1266 = module_1266_mod;
module_1266 = module_1266.createWithEqualityFn();
combine = combine_mod;
const withEqualityFn2Result = module_1266(combine.subscribeWithSelector(f100630));
const store2 = {
  useStore: withEqualityFn2Result,
  getState() {
    return require.getState();
  },
  subscribe(arg0, arg1) {
    return require.subscribe(arg0, arg1);
  },
  setInspectedExpressionPosition(columnIndex, rowIndex, source) {
    let obj = react_native;
    obj.batchUpdates(() => {
      let obj2;
      const obj = { inspectedExpressionPosition: obj2, hasInteracted: true };
      obj2 = { rowIndex, columnIndex, source };
      return require.setState(obj);
    });
  },
  setActiveCategoryIndex(activeCategoryIndex) {
    let obj = react_native;
    obj.batchUpdates(() => {
      const obj = { activeCategoryIndex };
      return require.setState(obj);
    });
  },
  setSearchPlaceholder(searchPlaceholder) {
    let obj = react_native;
    obj.batchUpdates(() => {
      const obj = { searchPlaceholder };
      return require.setState(obj);
    });
  },
  resetStoreState() {
    let state;
    const obj = react_native;
    obj.batchUpdates(() => state.setState(closure_2_2));
  },
  setBottomPosition(bottomPosition) {
    let obj = react_native;
    obj.batchUpdates(() => {
      const obj = { bottomPosition };
      return require.setState(obj);
    });
  },
  setAnalyticsId(replaced) {
    const analyticsId = replaced;
    let obj = react_native;
    obj.batchUpdates(() => {
      const obj = { analyticsId };
      return require.setState(obj);
    });
  },
  getAnalyticsId() {
    return require.getState().analyticsId;
  }
};
module_1266 = module_1266_mod;
module_1266 = module_1266.createWithEqualityFn();
combine = combine_mod;
const withEqualityFn3Result = module_1266(combine.subscribeWithSelector(f100630));
let c0 = withEqualityFn3Result;
const store3 = {
  useStore: withEqualityFn3Result,
  getState() {
    return require.getState();
  },
  subscribe(arg0, arg1) {
    return require.subscribe(arg0, arg1);
  },
  setInspectedExpressionPosition(columnIndex, rowIndex, source) {
    let obj = react_native;
    obj.batchUpdates(() => {
      let obj2;
      const obj = { inspectedExpressionPosition: obj2, hasInteracted: true };
      obj2 = { rowIndex, columnIndex, source };
      return require.setState(obj);
    });
  },
  setActiveCategoryIndex(activeCategoryIndex) {
    let obj = react_native;
    obj.batchUpdates(() => {
      const obj = { activeCategoryIndex };
      return require.setState(obj);
    });
  },
  setSearchPlaceholder(searchPlaceholder) {
    let obj = react_native;
    obj.batchUpdates(() => {
      const obj = { searchPlaceholder };
      return require.setState(obj);
    });
  },
  resetStoreState() {
    let state;
    const obj = react_native;
    obj.batchUpdates(() => state.setState(closure_2_2));
  },
  setBottomPosition(bottomPosition) {
    let obj = react_native;
    obj.batchUpdates(() => {
      const obj = { bottomPosition };
      return require.setState(obj);
    });
  },
  setAnalyticsId(replaced) {
    const analyticsId = replaced;
    let obj = react_native;
    obj.batchUpdates(() => {
      const obj = { analyticsId };
      return require.setState(obj);
    });
  },
  getAnalyticsId() {
    return require.getState().analyticsId;
  }
};
const result = size.fileFinishedImporting("modules/expression_picker/ExpressionPickerGridStores.tsx");

export default function createStore() {
  let obj = module_1266;
  const withEqualityFn = obj.createWithEqualityFn();
  let obj2 = combine;
  const withEqualityFnResult = withEqualityFn(obj2.subscribeWithSelector(f100630));
  require = withEqualityFnResult;
  const store = {
    useStore: withEqualityFnResult,
    getState() {
      return require.getState();
    },
    subscribe(arg0, arg1) {
      return require.subscribe(arg0, arg1);
    },
    setInspectedExpressionPosition(columnIndex, rowIndex, source) {
      let obj = react_native;
      obj.batchUpdates(() => {
        let obj2;
        const obj = { inspectedExpressionPosition: obj2, hasInteracted: true };
        obj2 = { rowIndex, columnIndex, source };
        return require.setState(obj);
      });
    },
    setActiveCategoryIndex(activeCategoryIndex) {
      let obj = react_native;
      obj.batchUpdates(() => {
        const obj = { activeCategoryIndex };
        return require.setState(obj);
      });
    },
    setSearchPlaceholder(searchPlaceholder) {
      let obj = react_native;
      obj.batchUpdates(() => {
        const obj = { searchPlaceholder };
        return require.setState(obj);
      });
    },
    resetStoreState() {
      let state;
      const obj = react_native;
      obj.batchUpdates(() => state.setState(closure_2_2));
    },
    setBottomPosition(bottomPosition) {
      let obj = react_native;
      obj.batchUpdates(() => {
        const obj = { bottomPosition };
        return require.setState(obj);
      });
    },
    setAnalyticsId(replaced) {
      const analyticsId = replaced;
      let obj = react_native;
      obj.batchUpdates(() => {
        const obj = { analyticsId };
        return require.setState(obj);
      });
    },
    getAnalyticsId() {
      return require.getState().analyticsId;
    }
  };
  return store;
};
export const INACTIVE_CATEGORY_INDEX = -1;
export const EmojiPickerStore = store;
export const StickerPickerStore = store1;
export const SoundboardPickerStore = store2;
export const ApplicationCommandDiscoveryPickerStore = store3;
