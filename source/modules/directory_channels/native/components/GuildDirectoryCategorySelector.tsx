// Module ID: 11775
// Function ID: 91380
// Name: GuildDirectoryCategorySelector
// Dependencies: []
// Exports: default

// Module 11775 (GuildDirectoryCategorySelector)
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
let closure_7 = importDefault(dependencyMap[3]);
({ DirectoryEntryCategories: closure_8, getHubCategories: closure_9 } = arg1(dependencyMap[4]));
const tmp2 = arg1(dependencyMap[4]);
({ jsx: closure_10, jsxs: closure_11 } = arg1(dependencyMap[5]));
let obj = arg1(dependencyMap[6]);
obj = {};
obj = { backgroundColor: importDefault(dependencyMap[7]).colors.BACKGROUND_SURFACE_HIGH, paddingTop: 12 };
obj.categoriesListWrapper = obj;
let closure_12 = obj.createStyles(obj);
const tmp3 = arg1(dependencyMap[5]);
const result = arg1(dependencyMap[16]).fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryCategorySelector.tsx");

export default function GuildDirectoryCategorySelector(channel) {
  let categoryCounts;
  let tmp3;
  channel = channel.channel;
  const arg1 = channel;
  ({ onCategorySelected: closure_1, categoryCounts } = channel);
  const importAll = categoryCounts;
  const allEntriesCount = channel.allEntriesCount;
  const dependencyMap = allEntriesCount;
  const tmp = callback4();
  [tmp3, closure_4] = callback(React.useState(0), 2);
  const callback = React.useCallback((nativeEvent) => {
    callback2(nativeEvent.nativeEvent.layout.width);
  }, []);
  let obj = arg1(dependencyMap[11]);
  const items = [closure_7];
  const stateFromStores = obj.useStateFromStores(items, () => currentCategoryId.getCurrentCategoryId(channel.id));
  const React = stateFromStores;
  const items1 = [channel.id];
  const memo = React.useMemo(() => {
    const obj = { value: constants.ALL };
    const intl = channel(allEntriesCount[8]).intl;
    obj.label = intl.string(channel(allEntriesCount[8]).t.hEAa2a);
    obj.idealSize = 70;
    const items = [obj, ...closure_9(closure_0.id)];
    return items;
  }, items1);
  const View = memo;
  const items2 = [memo, categoryCounts, allEntriesCount];
  const items3 = [memo, stateFromStores];
  const memo1 = React.useMemo(() => memo.map((label) => {
    const obj = { label: label.label, id: String(label.value) };
    if (label.value === constants.ALL) {
      let tmp3 = closure_3;
    } else if (null != closure_2) {
      tmp3 = closure_2[label.value];
    }
    obj.count = tmp3;
    obj.page = null;
    return obj;
  }), items2);
  const memo2 = React.useMemo(() => {
    const findIndexResult = memo.findIndex((value) => value.value === closure_5);
    let num = 0;
    if (-1 !== findIndexResult) {
      num = findIndexResult;
    }
    return num;
  }, items3);
  const tmp2 = callback(React.useState(0), 2);
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
  const segmentedControlState = arg1(dependencyMap[12]).useSegmentedControlState(obj);
  const obj2 = arg1(dependencyMap[12]);
  const token = arg1(dependencyMap[9]).useToken(importDefault(dependencyMap[7]).colors.BACKGROUND_BASE_LOW);
  const items4 = [token, ];
  const obj4 = arg1(dependencyMap[9]);
  const obj5 = importDefault(dependencyMap[10])(token);
  items4[1] = importDefault(dependencyMap[10])(token).alpha(0).hex();
  obj = { style: tmp.categoriesListWrapper, onLayout: callback };
  const items5 = [callback2(arg1(dependencyMap[14]).Tabs, { state: segmentedControlState }), callback2(importDefault(dependencyMap[15]), { state: segmentedControlState, colors: items4 })];
  obj.children = items5;
  return callback3(View, obj);
};
