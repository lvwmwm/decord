// Module ID: 10319
// Function ID: 79652
// Name: BugReporterFeatureActionSheet
// Dependencies: []
// Exports: default

// Module 10319 (BugReporterFeatureActionSheet)
let closure_3 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[3]));
let obj1 = arg1(dependencyMap[4]);
let obj = {};
obj = { paddingHorizontal: importDefault(dependencyMap[5]).space.PX_12 };
obj.list = obj;
obj1 = { paddingHorizontal: importDefault(dependencyMap[5]).space.PX_12 };
obj.searchBar = obj1;
const tmp2 = arg1(dependencyMap[3]);
obj.sectionHeader = { backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_BASE_LOW, justifyContent: "center" };
let closure_8 = obj1.createStyles(obj);
let closure_9 = importAllResult.memo((arg0) => {
  let height;
  let title;
  ({ title, height } = arg0);
  const obj = {};
  const items = [callback4().sectionHeader, { height }];
  obj.style = items;
  obj.children = callback2(arg1(dependencyMap[6]).Text, { children: title });
  return callback2(View, obj);
});
let closure_10 = importAllResult.memo((item) => {
  let end;
  let feature;
  let start;
  item = item.item;
  const arg1 = item;
  const importDefault = item.setFeature;
  ({ feature, start, end } = item);
  let obj = arg1(dependencyMap[7]);
  const featureId = obj.getFeatureId(item);
  const featureId1 = arg1(dependencyMap[7]).getFeatureId(feature);
  obj = {
    start,
    end,
    label: item.name,
    onPress() {
      setFeature(item);
      setFeature(closure_2[9]).hideActionSheet();
    }
  };
  obj = { selected: featureId === featureId1 };
  obj.trailing = callback2(arg1(dependencyMap[10]).FormRadio, obj);
  return callback2(arg1(dependencyMap[8]).TableRow, obj);
});
const obj2 = { backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_BASE_LOW, justifyContent: "center" };
const result = arg1(dependencyMap[21]).fileFinishedImporting("modules/bug_reporter/native/components/BugReporterFeatureActionSheet.tsx");

export default function BugReporterFeatureActionSheet(features) {
  features = features.features;
  const arg1 = features;
  const feature = features.feature;
  const importDefault = feature;
  const setFeature = features.setFeature;
  const dependencyMap = setFeature;
  const tmp = callback4();
  const tmp2 = callback(importAllResult.useState(""), 2);
  const first = tmp2[0];
  let callback = first;
  let items = [features, first];
  const memo = importAllResult.useMemo(() => {
    const found = features.filter((asana_inbox_id) => {
      let tmp = null != asana_inbox_id.asana_inbox_id;
      if (tmp) {
        let isEmptyResult = callback(closure_2[12]).isEmpty(closure_3);
        if (!isEmptyResult) {
          let formatted1;
          const formatted = closure_3.toLowerCase();
          if (null != asana_inbox_id.name) {
            formatted1 = str.toLowerCase();
          }
          let str2 = "";
          if (null != formatted1) {
            str2 = formatted1;
          }
          isEmptyResult = callback(closure_2[13])(formatted, str2);
          const tmp8 = callback(closure_2[13]);
        }
        if (!isEmptyResult) {
          let formatted3;
          const formatted2 = closure_3.toLowerCase();
          if (null != asana_inbox_id.squad) {
            formatted3 = str3.toLowerCase();
          }
          let str4 = "";
          if (null != formatted3) {
            str4 = formatted3;
          }
          isEmptyResult = callback(closure_2[13])(formatted2, str4);
          const tmp14 = callback(closure_2[13]);
        }
        tmp = isEmptyResult;
        const obj = callback(closure_2[12]);
      }
      return tmp;
    });
    let obj = feature(setFeature[12]);
    const entries = Object.entries(obj.groupBy(found, (squad) => squad.squad));
    obj = {};
    const mapped = entries.map((arg0) => {
      let arr;
      [, arr] = arg0;
      return arr.length;
    });
    obj.items = entries.map((arg0) => {
      let tmp;
      let tmp2;
      [tmp, tmp2] = arg0;
      return { title, data };
    });
    obj.sections = mapped;
    return obj;
  }, items);
  items = memo.items;
  const tmp6 = importDefault(dependencyMap[15])();
  const View = tmp6;
  const items1 = [items, setFeature, feature];
  const items2 = [tmp6, items];
  callback = importAllResult.useCallback((arg0, arg1) => callback(closure_10, { item: items[arg0].data[arg1], feature, setFeature, start: 0 === arg1, end: arg1 === items[arg0].data.length - 1 }), items1);
  const callback1 = importAllResult.useCallback((arg0) => callback(closure_9, { title: items[arg0].title, height: tmp6 }), items2);
  let obj = { 1891290120: null, -475247768: null };
  obj = {};
  const intl = arg1(dependencyMap[18]).intl;
  obj.title = intl.string(arg1(dependencyMap[18]).t.77VVd8);
  obj.header = callback2(arg1(dependencyMap[17]).BottomSheetTitleHeader, obj);
  obj = { style: tmp.searchBar, children: callback2(arg1(dependencyMap[19]).SearchField, { size: "md", onChange: tmp2[1] }) };
  const items3 = [callback2(View, obj), ];
  const obj1 = { style: tmp.list, inActionSheet: true, sections: memo.sections, itemSize: importDefault(dependencyMap[14])(), estimatedListSize: "windowSize", renderItem: callback, renderSectionHeader: callback1, sectionHeaderSize: tmp6 };
  const tmp5 = importDefault(dependencyMap[14])();
  obj1.insetEnd = importDefault(dependencyMap[5]).space.PX_16 + importDefault(dependencyMap[11])().insets.bottom;
  items3[1] = callback2(importDefault(dependencyMap[20]), obj1);
  obj.children = items3;
  return callback3(arg1(dependencyMap[16]).BottomSheet, obj);
};
