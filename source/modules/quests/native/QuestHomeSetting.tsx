// Module ID: 13950
// Function ID: 106615
// Name: parseSortMethod
// Dependencies: [57, 31, 10947, 4976, 33, 4130, 689, 1456, 3743, 7375, 13951, 13955, 2]
// Exports: default

// Module 13950 (parseSortMethod)
import _slicedToArray from "_slicedToArray";
import result from "result";
import zustandStore from "zustandStore";
import QuestsExperimentLocations from "QuestsExperimentLocations";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_6;
let closure_7;
let require = arg1;
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
    const mapped = parts.map((arg0) => outer1_7(arg0));
    let found = mapped.filter((arg0) => null != arg0);
    if (found.length <= 0) {
      found = closure_10;
    }
    return found;
  }
}
({ QuestHomeSortMethods: closure_6, getQuestHomeFilterOptionItem: closure_7 } = QuestsExperimentLocations);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWEST };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let closure_10 = [];
const result = require("zustandStore").fileFinishedImporting("modules/quests/native/QuestHomeSetting.tsx");

export default function QuestHomeSetting() {
  let tmp6;
  let tmp7;
  let tmp2 = callback(React.useState(() => outer1_11(outer1_5.getField("sort"))), 2);
  const first = tmp2[0];
  const require = tmp4;
  const tmp = _createForOfIteratorHelperLoose();
  [tmp6, tmp7] = callback(React.useState(() => outer1_12(outer1_5.getField("filter"))), 2);
  const importDefault = tmp7;
  let effect = React.useEffect(() => outer1_5.subscribe((self) => ({ sort: self.sort, filter: self.filter }), (self, self2) => {
    if (self.sort !== self2.sort) {
      outer1_0(outer2_11(self.sort));
    }
    if (self.filter !== self2.filter) {
      outer1_1(outer2_12(self.filter));
    }
  }, { equalityFn: tmp4(outer1_2[8]).shallow, fireImmediately: true }), []);
  const tmp5 = callback(React.useState(() => outer1_12(outer1_5.getField("filter"))), 2);
  callback = React.useCallback(() => {
    tmp7(outer1_10);
  }, []);
  const effect1 = React.useEffect(() => () => {
    callback(outer2_2[9]).close();
    outer2_5.resetState();
  }, []);
  const field = zustandStore.useField("scrollToQuestId");
  importDefault(13951)({ setSelectedSortMethod: tmp2[1], setSelectedFilters: tmp7, selectedFilters: tmp6, selectedSortMethod: first });
  const tmp9 = (function useFinishedNavigating() {
    const navigation = tmp4(outer1_2[7]).useNavigation();
    const tmp2 = outer1_3(outer1_4.useState(false), 2);
    let closure_1 = tmp2[1];
    const items = [navigation];
    const effect = outer1_4.useEffect(() => navigation.addListener("transitionEnd", () => outer1_1(true)), items);
    return tmp2[0];
  })();
  return jsx(importDefault(13955), {
    containerStyle: tmp.container,
    isNavigationComplete: (function useFinishedNavigating() {
      const navigation = tmp4(outer1_2[7]).useNavigation();
      const tmp2 = outer1_3(outer1_4.useState(false), 2);
      let closure_1 = tmp2[1];
      const items = [navigation];
      const effect = outer1_4.useEffect(() => navigation.addListener("transitionEnd", () => outer1_1(true)), items);
      return tmp2[0];
    })(),
    scrollToQuestId: field,
    sortMethod: first,
    filters: tmp6,
    onClearFilters: callback
  });
};
