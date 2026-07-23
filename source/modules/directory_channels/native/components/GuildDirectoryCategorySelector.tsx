// Module ID: 11793
// Function ID: 91477
// Name: GuildDirectoryCategorySelector
// Dependencies: [57, 31, 27, 10042, 10035, 33, 4130, 689, 1212, 3834, 666, 566, 8360, 10046, 11649, 11794, 2]
// Exports: default

// Module 11793 (GuildDirectoryCategorySelector)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import DirectoryEntryTypes from "DirectoryEntryTypes";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_8;
let closure_9;
const require = arg1;
({ DirectoryEntryCategories: closure_8, getHubCategories: closure_9 } = DirectoryEntryTypes);
({ jsx: closure_10, jsxs: closure_11 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH, paddingTop: 12 };
_createForOfIteratorHelperLoose.categoriesListWrapper = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("get ActivityIndicator").fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryCategorySelector.tsx");

export default function GuildDirectoryCategorySelector(channel) {
  let categoryCounts;
  let _slicedToArray;
  let importDefault;
  let tmp3;
  channel = channel.channel;
  ({ onCategorySelected: importDefault, categoryCounts } = channel);
  const allEntriesCount = channel.allEntriesCount;
  const tmp = _createForOfIteratorHelperLoose();
  [tmp3, _slicedToArray] = callback(stateFromStores.useState(0), 2);
  callback = stateFromStores.useCallback((nativeEvent) => {
    callback2(nativeEvent.nativeEvent.layout.width);
  }, []);
  let obj = channel(allEntriesCount[11]);
  let items = [_isNativeReflectConstruct];
  stateFromStores = obj.useStateFromStores(items, () => outer1_7.getCurrentCategoryId(channel.id));
  const items1 = [channel.id];
  const memo = stateFromStores.useMemo(() => {
    const obj = { value: outer1_8.ALL };
    const intl = channel(allEntriesCount[8]).intl;
    obj.label = intl.string(channel(allEntriesCount[8]).t.hEAa2a);
    obj.idealSize = 70;
    const items = [obj, ...outer1_9(channel.id)];
    return items;
  }, items1);
  const items2 = [memo, categoryCounts, allEntriesCount];
  const items3 = [memo, stateFromStores];
  const memo1 = stateFromStores.useMemo(() => memo.map((label) => {
    const obj = { label: label.label, id: String(label.value) };
    if (label.value === outer2_8.ALL) {
      let tmp3 = outer1_3;
    } else if (null != outer1_2) {
      tmp3 = outer1_2[label.value];
    }
    obj.count = tmp3;
    obj.page = null;
    return obj;
  }), items2);
  const memo2 = stateFromStores.useMemo(() => {
    const findIndexResult = memo.findIndex((value) => value.value === outer1_5);
    let num = 0;
    if (-1 !== findIndexResult) {
      num = findIndexResult;
    }
    return num;
  }, items3);
  const tmp2 = callback(stateFromStores.useState(0), 2);
  obj = {
    items: memo1,
    defaultIndex: memo2,
    onSetActiveIndex(arg0) {
      let value;
      if (null != memo[arg0]) {
        value = iter.value;
      }
      if (value !== stateFromStores) {
        const directoryCategory = categoryCounts(allEntriesCount[13]).selectDirectoryCategory(channel.id, value);
        callback();
        const obj = categoryCounts(allEntriesCount[13]);
      }
    },
    pageWidth: tmp3
  };
  const segmentedControlState = channel(allEntriesCount[12]).useSegmentedControlState(obj);
  const obj2 = channel(allEntriesCount[12]);
  const token = channel(allEntriesCount[9]).useToken(importDefault(allEntriesCount[7]).colors.BACKGROUND_BASE_LOW);
  const items4 = [token, ];
  const obj4 = channel(allEntriesCount[9]);
  const obj5 = importDefault(allEntriesCount[10])(token);
  items4[1] = importDefault(allEntriesCount[10])(token).alpha(0).hex();
  obj = { style: tmp.categoriesListWrapper, onLayout: callback };
  const items5 = [callback2(channel(allEntriesCount[14]).Tabs, { state: segmentedControlState }), callback2(importDefault(allEntriesCount[15]), { state: segmentedControlState, colors: items4 })];
  obj.children = items5;
  return callback3(memo, obj);
};
