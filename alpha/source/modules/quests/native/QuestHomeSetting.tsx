// Module ID: 15082
// Function ID: 15083
// Name: QuestHomeSetting
// Dependencies: [32, 19, 10573, 5977, 21, 5090, 587, 558, 576, 1502, 4690, 6671, 15083, 15087, 2]

// Module 15082 (QuestHomeSetting)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import useNavigation from "useNavigation" /* 1502 */;
import _slicedToArray2 from "_slicedToArray" /* 4690 */;
import useQuestHomeHeaderDefault from "useQuestHomeHeader" /* 15083 */;
import QuestHomeDefault from "QuestHome" /* 15087 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import QuestHomeNavigationStore from "QuestHomeNavigationStore" /* 10573 */;
import QuestConstants from "QuestConstants" /* 5977 */;
import createStyles from "createStyles" /* 5090 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let importDefault, navigation;

let metroImportDefault;
let metroRequire;
let obj2;
const f119202 = (item) => closure_1_7(item);
const f119203 = (item) => null != item;
({ QuestHomeSortMethods: metroRequire, getQuestHomeFilterOptionItem: metroImportDefault } = QuestConstants);
const jsx = Fragment.jsx;
let obj = { container: obj2 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
let closure_9 = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? (function useFinishedNavigating() {
  let closure_129_1;
  let tmp4;
  let tmp5;
  let tmp6;
  const obj = react2;
  const cResult = obj.c(3);
  const obj2 = useNavigation;
  navigation = obj2.useNavigation();
  [tmp4, closure_129_1] = react.useState(false);
  _slicedToArray(react.useState(false), 2);
  const obj3 = react;
  if (cResult[0] !== navigation) {
    const fn = function o() {
      return navigation.addListener("transitionEnd", () => closure_1_1(true));
    };
    const items = [navigation];
    cResult[0] = navigation;
    cResult[1] = fn;
    cResult[2] = items;
    tmp6 = items;
    tmp5 = fn;
  } else {
    tmp5 = cResult[1];
    tmp6 = cResult[2];
  }
  const effect = obj3.useEffect(tmp5, tmp6);
  return tmp4;
}) : (function useFinishedNavigating() {
  let closure_1;
  let first;
  const obj = useNavigation;
  navigation = obj.useNavigation();
  [first, closure_1] = react.useState(false);
  const items = [navigation];
  const effect = react.useEffect(() => navigation.addListener("transitionEnd", () => closure_1_1(true)), items);
  return first;
});
let closure_11 = [];
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function QuestHomeSetting() {
  let closure_0;
  let closure_1;
  let first;
  let obj4;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp17;
  let tmp18;
  let tmp19;
  let tmp7;
  let tmp8;
  let tmp9;
  let tmp = dependencyMap;
  let obj = react2;
  const cResult = obj.c(16);
  const tmp3 = closure_9();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function l() {
      let SUGGESTED = QuestHomeNavigationStore.getField("sort");
      if (null == SUGGESTED) {
        SUGGESTED = constants.SUGGESTED;
      } else {
        const _Object = Object;
        const values = Object.values(constants);
      }
      return SUGGESTED;
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  [tmp7, tmp8] = react.useState(first);
  const require = tmp8;
  _slicedToArray(react.useState(first), 2);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function v() {
      let found;
      const str = QuestHomeNavigationStore.getField("filter");
      if (null == str) {
        found = closure_1_11;
      } else {
        const parts = str.split(",");
        const mapped = parts.map(f119202);
        found = mapped.filter(f119203);
        if (found.length <= 0) {
          found = closure_1_11;
        }
      }
      return found;
    };
    cResult[1] = fn2;
    tmp9 = fn2;
  } else {
    tmp9 = cResult[1];
  }
  [tmp11, tmp12] = _slicedToArray(react.useState(tmp9), 2);
  importDefault = tmp12;
  _slicedToArray(react.useState(tmp9), 2);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    class E {
      constructor() {
        obj = { equalityFn: closure_0(closure_2[10]).shallow, fireImmediately: true };
        return closure_5.subscribe((self) => ({ sort: self.sort, filter: self.filter }), (self, self2) => {
          if (self.sort !== self2.sort) {
            let SUGGESTED = self.sort;
            const tmp = closure_1_0;
            if (null == SUGGESTED) {
              SUGGESTED = constants.SUGGESTED;
            } else {
              const _Object = Object;
              const values = Object.values(constants);
            }
            tmp(SUGGESTED);
          }
          if (self.filter !== self2.filter) {
            let found;
            const tmp7 = closure_1_1;
            if (null == self.filter) {
              found = closure_2_11;
            } else {
              const parts = str.split(",");
              const mapped = parts.map(f119202);
              found = mapped.filter(f119203);
              if (found.length <= 0) {
                found = closure_2_11;
              }
            }
            tmp7(found);
          }
        }, obj);
      }
    }
    const items = [];
    cResult[2] = E;
    cResult[3] = items;
    tmp14 = items;
    tmp13 = E;
  } else {
    class E {
      constructor() {
        obj = { equalityFn: closure_0(closure_2[10]).shallow, fireImmediately: true };
        return closure_5.subscribe((self) => ({ sort: self.sort, filter: self.filter }), (self, self2) => {
          if (self.sort !== self2.sort) {
            let SUGGESTED = self.sort;
            const tmp = closure_1_0;
            if (null == SUGGESTED) {
              SUGGESTED = constants.SUGGESTED;
            } else {
              const _Object = Object;
              const values = Object.values(constants);
            }
            tmp(SUGGESTED);
          }
          if (self.filter !== self2.filter) {
            let found;
            const tmp7 = closure_1_1;
            if (null == self.filter) {
              found = closure_2_11;
            } else {
              const parts = str.split(",");
              const mapped = parts.map(f119202);
              found = mapped.filter(f119203);
              if (found.length <= 0) {
                found = closure_2_11;
              }
            }
            tmp7(found);
          }
        }, obj);
      }
    }
    tmp14 = cResult[3];
  }
  const effect = obj2.useEffect(tmp13, tmp14);
  const tmp16 = closure_10();
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    class N {
      constructor() {
        tmp12(closure_11);
      }
    }
    cResult[4] = N;
    tmp17 = N;
  } else {
    class N {
      constructor() {
        tmp12(closure_11);
      }
    }
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    class H {
      constructor() {
        return () => {
          const obj = closure_1_1(closure_1_2[11]);
          obj.close();
          closure_1_5.resetState();
        };
      }
    }
    const items1 = [];
    cResult[5] = H;
    cResult[6] = items1;
    tmp19 = items1;
    tmp18 = H;
  } else {
    class H {
      constructor() {
        return () => {
          const obj = closure_1_1(closure_1_2[11]);
          obj.close();
          closure_1_5.resetState();
        };
      }
    }
    tmp19 = cResult[6];
  }
  const effect1 = obj2.useEffect(tmp18, tmp19);
  const field = QuestHomeNavigationStore.useField("scrollToQuestId");
  if (cResult[7] === tmp11) {
    class H {
      constructor() {
        return () => {
          const obj = closure_1_1(closure_1_2[11]);
          obj.close();
          closure_1_5.resetState();
        };
      }
    }
    useQuestHomeHeaderDefault(obj4);
    const tmp22 = importDefault;
    if (cResult[10] === tmp16) {
      class H {
        constructor() {
          return () => {
            const obj = closure_1_1(closure_1_2[11]);
            obj.close();
            closure_1_5.resetState();
          };
        }
      }
    }
    cResult[10] = tmp16;
    cResult[11] = field;
    cResult[12] = tmp11;
    cResult[13] = tmp7;
    cResult[14] = tmp3.container;
    cResult[15] = jsx(tmp22(15087), { containerStyle: tmp3.container, isNavigationComplete: tmp16, scrollToQuestId: field, sortMethod: tmp7, filters: tmp11, onClearFilters: tmp17 });
    const tmp26 = jsx(tmp22(15087), { containerStyle: tmp3.container, isNavigationComplete: tmp16, scrollToQuestId: field, sortMethod: tmp7, filters: tmp11, onClearFilters: tmp17 });
  }
  obj4 = { setSelectedSortMethod: tmp8, setSelectedFilters: tmp12, selectedFilters: tmp11, selectedSortMethod: tmp7 };
  cResult[7] = tmp11;
  cResult[8] = tmp7;
  cResult[9] = obj4;
}) : (function QuestHomeSetting() {
  let closure_0;
  let closure_1;
  let tmp3;
  let tmp4;
  let tmp6;
  let tmp7;
  const f119211 = () => {
    let SUGGESTED = QuestHomeNavigationStore.getField("sort");
    if (null == SUGGESTED) {
      SUGGESTED = constants.SUGGESTED;
    } else {
      const _Object = Object;
      const values = Object.values(constants);
    }
    return SUGGESTED;
  };
  const f119212 = () => {
    let found;
    const str = QuestHomeNavigationStore.getField("filter");
    if (null == str) {
      found = closure_1_11;
    } else {
      const parts = str.split(",");
      const mapped = parts.map(f119202);
      found = mapped.filter(f119203);
      if (found.length <= 0) {
        found = closure_1_11;
      }
    }
    return found;
  };
  let tmp = closure_9();
  [tmp3, tmp4] = _slicedToArray(react.useState(f119211), 2);
  const require = tmp4;
  const tmp2 = _slicedToArray(react.useState(f119211), 2);
  [tmp6, tmp7] = _slicedToArray(react.useState(f119212), 2);
  importDefault = tmp7;
  const tmp5 = _slicedToArray(react.useState(f119212), 2);
  const effect = react.useEffect(() => {
    const obj = { equalityFn: _slicedToArray2.shallow, fireImmediately: true };
    return QuestHomeNavigationStore.subscribe((self) => ({ sort: self.sort, filter: self.filter }), (self, self2) => {
      if (self.sort !== self2.sort) {
        let SUGGESTED = self.sort;
        const tmp = closure_1_0;
        if (null == SUGGESTED) {
          SUGGESTED = constants.SUGGESTED;
        } else {
          const _Object = Object;
          const values = Object.values(constants);
        }
        tmp(SUGGESTED);
      }
      if (self.filter !== self2.filter) {
        let found;
        const tmp7 = closure_1_1;
        if (null == self.filter) {
          found = closure_2_11;
        } else {
          const parts = str.split(",");
          const mapped = parts.map(f119202);
          found = mapped.filter(f119203);
          if (found.length <= 0) {
            found = closure_2_11;
          }
        }
        tmp7(found);
      }
    }, obj);
  }, []);
  const tmp9 = closure_10();
  const callback = react.useCallback(() => {
    tmp7(closure_11);
  }, []);
  const effect1 = react.useEffect(() => () => {
    const obj = closure_1_1(closure_1_2[11]);
    obj.close();
    closure_1_5.resetState();
  }, []);
  const field = QuestHomeNavigationStore.useField("scrollToQuestId");
  useQuestHomeHeaderDefault({ setSelectedSortMethod: tmp4, setSelectedFilters: tmp7, selectedFilters: tmp6, selectedSortMethod: tmp3 });
  return jsx(QuestHomeDefault, { containerStyle: tmp.container, isNavigationComplete: tmp9, scrollToQuestId: field, sortMethod: tmp3, filters: tmp6, onClearFilters: callback });
});
const result = size.fileFinishedImporting("modules/quests/native/QuestHomeSetting.tsx");

export default tmp3;
