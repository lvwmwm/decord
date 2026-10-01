// Module ID: 12274
// Function ID: 12275
// Name: GuildDirectoryCategorySelector
// Dependencies: [32, 19, 17, 11795, 11788, 21, 4836, 576, 1115, 4531, 672, 504, 9083, 11799, 12111, 12275, 2]
// Exports: default

// Module 12274 (GuildDirectoryCategorySelector)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import intl2 from "intl" /* 1115 */;
import GuildDirectoryActionCreatorsAll from "GuildDirectoryActionCreators" /* 11799 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import GuildDirectoryStore from "GuildDirectoryStore" /* 11795 */;
import GuildDirectoryConstants from "GuildDirectoryConstants" /* 11788 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let c10;
let c9;
let metroImportAll;
let obj2;
let unpackModuleId;
let _slicedToArray = _slicedToArray_mod;
const View = react_native.View;
({ DirectoryEntryCategories: metroImportAll, getHubCategories: c9 } = GuildDirectoryConstants);
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let obj = { categoriesListWrapper: obj2 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, paddingTop: 12 };
let closure_12 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryCategorySelector.tsx");

export default function GuildDirectoryCategorySelector(channel) {
  let _undefined;
  let c4;
  let categoryCounts;
  let items5;
  let tmp3;
  channel = channel.channel;
  ({ onCategorySelected: importDefault, categoryCounts } = channel);
  const allEntriesCount = channel.allEntriesCount;
  _slicedToArray = undefined;
  let stateFromStores;
  const tmp = closure_12();
  [tmp3, c4] = _slicedToArray(stateFromStores.useState(0), 2);
  const tmp2 = _slicedToArray(stateFromStores.useState(0), 2);
  const callback = stateFromStores.useCallback((nativeEvent) => {
    _undefined(nativeEvent.nativeEvent.layout.width);
  }, []);
  let obj = channel(allEntriesCount[11]);
  let items = [GuildDirectoryStore];
  stateFromStores = obj.useStateFromStores(items, () => GuildDirectoryStore.getCurrentCategoryId(channel.id));
  const items1 = [channel.id];
  const memo = stateFromStores.useMemo(() => {
    let intl;
    const id = channel.id;
    const obj = { value: metroImportAll.ALL, label: intl.string(intl2.t.hEAa2a), idealSize: 70 };
    intl = intl2.intl;
    const items = [obj, ...closure_2_9(id)];
    return items;
  }, items1);
  const items2 = [memo, categoryCounts, allEntriesCount];
  const items3 = [memo, stateFromStores];
  const memo1 = stateFromStores.useMemo(() => memo.map((label) => {
    let tmp3;
    const obj = { label: label.label, id: String(label.value), count: tmp3, page: null };
    if (label.value === constants.ALL) {
      tmp3 = allEntriesCount;
    } else if (categoryCounts != null) {
      tmp3 = tmp[label.value];
    }
    return obj;
  }), items2);
  const memo2 = stateFromStores.useMemo(() => {
    const findIndexResult = memo.findIndex((value) => value.value === stateFromStores);
    let num = 0;
    if (-1 !== findIndexResult) {
      num = findIndexResult;
    }
    return num;
  }, items3);
  const obj2 = channel(allEntriesCount[12]);
  const obj3 = {
    items: memo1,
    defaultIndex: memo2,
    onSetActiveIndex(arg0) {
      let value;
      if (memo[arg0] != null) {
        value = iter.value;
      }
      if (value !== stateFromStores) {
        const obj = GuildDirectoryActionCreatorsAll;
        const directoryCategory = obj.selectDirectoryCategory(channel.id, value);
        importDefault();
      }
    },
    pageWidth: tmp3
  };
  const segmentedControlState = obj2.useSegmentedControlState(obj3);
  const obj4 = channel(allEntriesCount[9]);
  const token = obj4.useToken(require("native").colors.BACKGROUND_BASE_LOW);
  const items4 = [token, ];
  const obj5 = require("module_672")(token);
  const alphaResult = obj5.alpha(0);
  items4[1] = alphaResult.hex();
  const obj6 = { style: tmp.categoriesListWrapper, onLayout: callback, children: items5 };
  items5 = [closure_10(channel(allEntriesCount[14]).Tabs, { state: segmentedControlState }), closure_10(require("TabsGradient"), { state: segmentedControlState, colors: items4 })];
  return closure_11(memo, obj6);
};
