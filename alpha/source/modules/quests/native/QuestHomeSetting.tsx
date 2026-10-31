// Module ID: 16885
// Function ID: 16886
// Name: QuestHomeSetting
// Dependencies: [32, 19, 9679, 6781, 21, 5014, 575, 1497, 4929, 7161, 16886, 16907, 2]
// Exports: default

// Module 16885 (QuestHomeSetting)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import useNavigation from "useNavigation" /* 1497 */;
import _slicedToArray2 from "_slicedToArray" /* 4929 */;
import useQuestHomeHeaderDefault from "useQuestHomeHeader" /* 16886 */;
import QuestHomeDefault from "QuestHome" /* 16907 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import QuestHomeNavigationStore from "QuestHomeNavigationStore" /* 9679 */;
import QuestConstants from "QuestConstants" /* 6781 */;
import createStyles from "createStyles" /* 5014 */;
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
  const f110776 = (item) => closure_1_7(item);
  const f110777 = (item) => null != item;
  const f110778 = () => {
    let SUGGESTED = QuestHomeNavigationStore.getField("sort");
    if (null == SUGGESTED) {
      SUGGESTED = constants.SUGGESTED;
    } else {
      const _Object = Object;
      const values = Object.values(constants);
    }
    return SUGGESTED;
  };
  const f110779 = () => {
    let found;
    const str = QuestHomeNavigationStore.getField("filter");
    if (null == str) {
      found = closure_1_10;
    } else {
      const parts = str.split(",");
      const mapped = parts.map(f110776);
      found = mapped.filter(f110777);
      if (found.length <= 0) {
        found = closure_1_10;
      }
    }
    return found;
  };
  let tmp = closure_9();
  [tmp3, tmp4] = _slicedToArray(react.useState(f110778), 2);
  require = tmp4;
  const tmp2 = _slicedToArray(react.useState(f110778), 2);
  [tmp6, tmp7] = _slicedToArray(react.useState(f110779), 2);
  importDefault = tmp7;
  const tmp5 = _slicedToArray(react.useState(f110779), 2);
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
          const mapped = parts.map(f110776);
          found = mapped.filter(f110777);
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
