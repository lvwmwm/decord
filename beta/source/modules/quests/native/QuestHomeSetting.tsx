// Module ID: 14533
// Function ID: 14534
// Name: QuestHomeSetting
// Dependencies: [32, 19, 10679, 5756, 21, 4836, 576, 1485, 4452, 6411, 14534, 14538, 2]
// Exports: default

// Module 14533 (QuestHomeSetting)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import useNavigation from "useNavigation" /* 1485 */;
import _slicedToArray2 from "_slicedToArray" /* 4452 */;
import useQuestHomeHeaderDefault from "useQuestHomeHeader" /* 14534 */;
import QuestHomeDefault from "QuestHome" /* 14538 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import QuestHomeNavigationStore from "QuestHomeNavigationStore" /* 10679 */;
import QuestConstants from "QuestConstants" /* 5756 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let importDefault, navigation;

let metroImportDefault;
let metroRequire;
let obj2;
({ QuestHomeSortMethods: metroRequire, getQuestHomeFilterOptionItem: metroImportDefault } = QuestConstants);
const jsx = Fragment.jsx;
let obj = { container: obj2 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
let closure_9 = createStyles.createStyles(obj);
let closure_10 = [];
const result = size.fileFinishedImporting("modules/quests/native/QuestHomeSetting.tsx");

export default function QuestHomeSetting() {
  let closure_0;
  let closure_1;
  let first;
  let tmp3;
  let tmp4;
  let tmp6;
  let tmp7;
  const f99846 = (item) => closure_1_7(item);
  const f99847 = (item) => null != item;
  const f99848 = () => {
    let SUGGESTED = QuestHomeNavigationStore.getField("sort");
    if (null == SUGGESTED) {
      SUGGESTED = constants.SUGGESTED;
    } else {
      const _Object = Object;
      const values = Object.values(constants);
    }
    return SUGGESTED;
  };
  const f99849 = () => {
    let found;
    const str = QuestHomeNavigationStore.getField("filter");
    if (null == str) {
      found = closure_1_10;
    } else {
      const parts = str.split(",");
      const mapped = parts.map(f99846);
      found = mapped.filter(f99847);
      if (found.length <= 0) {
        found = closure_1_10;
      }
    }
    return found;
  };
  let tmp = closure_9();
  [tmp3, tmp4] = _slicedToArray(react.useState(f99848), 2);
  require = tmp4;
  const tmp2 = _slicedToArray(react.useState(f99848), 2);
  [tmp6, tmp7] = _slicedToArray(react.useState(f99849), 2);
  importDefault = tmp7;
  const tmp5 = _slicedToArray(react.useState(f99849), 2);
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
          found = closure_2_10;
        } else {
          const parts = str.split(",");
          const mapped = parts.map(f99846);
          found = mapped.filter(f99847);
          if (found.length <= 0) {
            found = closure_2_10;
          }
        }
        tmp7(found);
      }
    }, obj);
  }, []);
  tmp7 = undefined;
  let obj = useNavigation;
  navigation = obj.useNavigation();
  [first, tmp7] = react.useState(false);
  const items = [navigation];
  const effect1 = react.useEffect(() => navigation.addListener("transitionEnd", () => closure_1_1(true)), items);
  const callback = react.useCallback(() => {
    tmp7(closure_10);
  }, []);
  const effect2 = react.useEffect(() => () => {
    const obj = closure_1_1(closure_1_2[9]);
    obj.close();
    closure_1_5.resetState();
  }, []);
  const field = QuestHomeNavigationStore.useField("scrollToQuestId");
  useQuestHomeHeaderDefault({ setSelectedSortMethod: tmp4, setSelectedFilters: tmp7, selectedFilters: tmp6, selectedSortMethod: tmp3 });
  return jsx(QuestHomeDefault, { containerStyle: tmp.container, isNavigationComplete: first, scrollToQuestId: field, sortMethod: tmp3, filters: tmp6, onClearFilters: callback });
};
