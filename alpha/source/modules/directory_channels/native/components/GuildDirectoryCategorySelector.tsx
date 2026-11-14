// Module ID: 15123
// Function ID: 15124
// Name: GuildDirectoryCategorySelector
// Dependencies: [19, 17, 14709, 14702, 21, 5306, 575, 1113, 5902, 671, 7994, 504, 7983, 14713, 13262, 15124, 2]
// Exports: default

// Module 15123 (GuildDirectoryCategorySelector)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl2 from "intl" /* 1113 */;
import GuildDirectoryActionCreatorsAll from "GuildDirectoryActionCreators" /* 14713 */;
import react from "react" /* 19 */;
import GuildDirectoryStore from "GuildDirectoryStore" /* 14709 */;
import GuildDirectoryConstants from "GuildDirectoryConstants" /* 14702 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5306 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let c10;
let c9;
let metroImportAll;
let metroImportDefault;
let obj2;
const View = react_native.View;
({ DirectoryEntryCategories: metroImportDefault, getHubCategories: metroImportAll } = GuildDirectoryConstants);
({ jsx: c9, jsxs: c10 } = Fragment);
let obj = { categoriesListWrapper: obj2 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, paddingTop: 12 };
let closure_11 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryCategorySelector.tsx");

export default function GuildDirectoryCategorySelector(channel) {
  let categoryCounts;
  let items5;
  let onLayout;
  let ref;
  channel = channel.channel;
  ({ onCategorySelected: importDefault, categoryCounts } = channel);
  const allEntriesCount = channel.allEntriesCount;
  let stateFromStores;
  let memo;
  let tmp3 = allEntriesCount;
  const tmp = closure_11();
  const tmp4 = require("useMeasuredLayout")();
  const width = tmp4.width;
  let num = 0;
  ({ ref, onLayout } = tmp4);
  if (undefined !== width) {
    num = width;
  }
  let obj = channel(tmp3[11]);
  let items = [GuildDirectoryStore];
  stateFromStores = obj.useStateFromStores(items, () => GuildDirectoryStore.getCurrentCategoryId(channel.id));
  const items1 = [channel.id];
  memo = stateFromStores.useMemo(() => {
    let intl;
    const id = channel.id;
    const obj = { value: metroImportDefault.ALL, label: intl.string(intl2.t.hEAa2a), idealSize: 70 };
    intl = intl2.intl;
    const items = [obj, ...closure_2_8(id)];
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
  const obj2 = channel(tmp3[12]);
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
    pageWidth: num
  };
  const segmentedControlState = obj2.useSegmentedControlState(obj3);
  const obj4 = channel(tmp3[8]);
  const token = obj4.useToken(tmp2(tmp3[6]).colors.BACKGROUND_BASE_LOW);
  const items4 = [token, ];
  const obj5 = require("module_671")(token);
  const alphaResult = obj5.alpha(0);
  items4[1] = alphaResult.hex();
  const obj6 = { style: tmp.categoriesListWrapper, ref, onLayout, children: items5 };
  items5 = [closure_9(channel(tmp3[14]).Tabs, { state: segmentedControlState }), closure_9(tmp2(tmp3[15]), { state: segmentedControlState, colors: items4 })];
  return closure_10(memo, obj6);
};
