// Module ID: 13785
// Function ID: 104135
// Name: parseSortMethod
// Dependencies: []
// Exports: default

// Module 13785 (parseSortMethod)
function parseSortMethod(arg0) {
  let SUGGESTED = arg0;
  if (null == arg0) {
    SUGGESTED = constants.SUGGESTED;
  } else {
    const _Object = Object;
    const values = Object.values(constants);
  }
  return SUGGESTED;
}
function parseFilters(str) {
  if (null == str) {
    return closure_10;
  } else {
    const parts = str.split(",");
    const mapped = parts.map((arg0) => callback(arg0));
    let found = mapped.filter((arg0) => null != arg0);
    if (found.length <= 0) {
      found = closure_10;
    }
    return found;
  }
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
({ QuestHomeSortMethods: closure_6, getQuestHomeFilterOptionItem: closure_7 } = arg1(dependencyMap[3]));
const jsx = arg1(dependencyMap[4]).jsx;
let obj = arg1(dependencyMap[5]);
obj = {};
obj = { backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_BASE_LOWEST };
obj.container = obj;
let closure_9 = obj.createStyles(obj);
let closure_10 = [];
const tmp2 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/quests/native/QuestHomeSetting.tsx");

export default function QuestHomeSetting() {
  let tmp6;
  let tmp7;
  const tmp2 = callback(React.useState(() => callback2(store.getField("sort"))), 2);
  const first = tmp2[0];
  const arg1 = tmp4;
  const tmp = callback2();
  [tmp6, tmp7] = callback(React.useState(() => callback3(store.getField("filter"))), 2);
  const importDefault = tmp7;
  const effect = React.useEffect(() => store.subscribe((self) => ({ sort: self.sort, filter: self.filter }), (self, self2) => {
    if (self.sort !== self2.sort) {
      callback(callback3(self.sort));
    }
    if (self.filter !== self2.filter) {
      callback2(callback4(self.filter));
    }
  }, { equalityFn: tmp4(closure_2[8]).shallow, fireImmediately: true }), []);
  const tmp5 = callback(React.useState(() => callback3(store.getField("filter"))), 2);
  const callback = React.useCallback(() => {
    tmp7(closure_10);
  }, []);
  const effect1 = React.useEffect(() => () => {
    callback(closure_2[9]).close();
    closure_5.resetState();
  }, []);
  const field = closure_5.useField("scrollToQuestId");
  importDefault(dependencyMap[10])({ setSelectedSortMethod: tmp2[1], setSelectedFilters: tmp7, selectedFilters: tmp6, selectedSortMethod: first });
  const tmp9 = function useFinishedNavigating() {
    const navigation = navigation(closure_2[7]).useNavigation();
    const tmp2 = callback(React.useState(false), 2);
    let closure_1 = tmp2[1];
    const items = [navigation];
    const effect = React.useEffect(() => navigation.addListener("transitionEnd", () => callback(true)), items);
    return tmp2[0];
  }();
  return jsx(importDefault(dependencyMap[11]), {
    containerStyle: tmp.container,
    isNavigationComplete: function useFinishedNavigating() {
      const navigation = navigation(closure_2[7]).useNavigation();
      const tmp2 = callback(React.useState(false), 2);
      let closure_1 = tmp2[1];
      const items = [navigation];
      const effect = React.useEffect(() => navigation.addListener("transitionEnd", () => callback(true)), items);
      return tmp2[0];
    }(),
    scrollToQuestId: field,
    sortMethod: first,
    filters: tmp6,
    onClearFilters: callback
  });
};
