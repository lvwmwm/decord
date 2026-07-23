// Module ID: 10333
// Function ID: 79750
// Name: BugReporterFeatureActionSheet
// Dependencies: [57, 31, 27, 33, 4130, 689, 4126, 10323, 5165, 4098, 7520, 5160, 22, 5045, 8832, 8833, 5187, 5186, 1212, 5772, 9244, 2]
// Exports: default

// Module 10333 (BugReporterFeatureActionSheet)
import _slicedToArray from "_slicedToArray";
import importAllResult from "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_6;
let closure_7;
const require = arg1;
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
let obj = {};
obj = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_12 };
obj.list = obj;
_createForOfIteratorHelperLoose = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_12 };
obj.searchBar = _createForOfIteratorHelperLoose;
obj.sectionHeader = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, justifyContent: "center" };
let closure_8 = _createForOfIteratorHelperLoose.createStyles(obj);
let closure_9 = importAllResult.memo((arg0) => {
  let height;
  let title;
  ({ title, height } = arg0);
  let obj = {};
  const items = [callback3().sectionHeader, { height }];
  obj.style = items;
  obj = { variant: "text-sm/bold", color: "text-muted", children: title };
  obj.children = callback(require(4126) /* Text */.Text, obj);
  return callback(View, obj);
});
let closure_10 = importAllResult.memo((item) => {
  let end;
  let feature;
  let start;
  item = item.item;
  const setFeature = item.setFeature;
  ({ feature, start, end } = item);
  let obj = item(10323);
  const featureId = obj.getFeatureId(item);
  const featureId1 = item(10323).getFeatureId(feature);
  obj = {
    start,
    end,
    label: item.name,
    onPress() {
      setFeature(item);
      setFeature(outer1_2[9]).hideActionSheet();
    }
  };
  obj = { selected: featureId === featureId1 };
  obj.trailing = callback(item(7520).FormRadio, obj);
  return callback(item(5165).TableRow, obj);
});
const obj2 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, justifyContent: "center" };
const result = require("get ActivityIndicator").fileFinishedImporting("modules/bug_reporter/native/components/BugReporterFeatureActionSheet.tsx");

export default function BugReporterFeatureActionSheet(features) {
  features = features.features;
  const feature = features.feature;
  const setFeature = features.setFeature;
  let tmp = callback3();
  const tmp2 = first(items.useState(""), 2);
  first = tmp2[0];
  items = [features, first];
  const memo = items.useMemo(() => {
    const found = features.filter((asana_inbox_id) => {
      let tmp = null != asana_inbox_id.asana_inbox_id;
      if (tmp) {
        let isEmptyResult = feature(setFeature[12]).isEmpty(outer1_3);
        if (!isEmptyResult) {
          let formatted1;
          const formatted = outer1_3.toLowerCase();
          if (null != asana_inbox_id.name) {
            formatted1 = str.toLowerCase();
          }
          let str2 = "";
          if (null != formatted1) {
            str2 = formatted1;
          }
          isEmptyResult = feature(setFeature[13])(formatted, str2);
          const tmp8 = feature(setFeature[13]);
        }
        if (!isEmptyResult) {
          let formatted3;
          const formatted2 = outer1_3.toLowerCase();
          if (null != asana_inbox_id.squad) {
            formatted3 = str3.toLowerCase();
          }
          let str4 = "";
          if (null != formatted3) {
            str4 = formatted3;
          }
          isEmptyResult = feature(setFeature[13])(formatted2, str4);
          const tmp14 = feature(setFeature[13]);
        }
        tmp = isEmptyResult;
        const obj = feature(setFeature[12]);
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
  const tmp6 = feature(setFeature[15])();
  const View = tmp6;
  const items1 = [items, setFeature, feature];
  const items2 = [tmp6, items];
  const callback = items.useCallback((arg0, arg1) => outer1_6(outer1_10, { item: items[arg0].data[arg1], feature, setFeature, start: 0 === arg1, end: arg1 === items[arg0].data.length - 1 }), items1);
  const callback1 = items.useCallback((arg0) => outer1_6(outer1_9, { title: items[arg0].title, height: closure_5 }), items2);
  let obj = { scrollable: true, startExpanded: true };
  obj = {};
  const intl = features(setFeature[18]).intl;
  obj.title = intl.string(features(setFeature[18]).t["77VVd8"]);
  obj.header = callback(features(setFeature[17]).BottomSheetTitleHeader, obj);
  obj = { style: tmp.searchBar, children: callback(features(setFeature[19]).SearchField, { size: "md", onChange: tmp2[1] }) };
  const items3 = [callback(View, obj), ];
  const obj1 = { style: tmp.list, inActionSheet: true, sections: memo.sections, itemSize: feature(setFeature[14])(), estimatedListSize: "windowSize", renderItem: callback, renderSectionHeader: callback1, sectionHeaderSize: tmp6 };
  const tmp5 = feature(setFeature[14])();
  obj1.insetEnd = feature(setFeature[5]).space.PX_16 + feature(setFeature[11])().insets.bottom;
  items3[1] = callback(feature(setFeature[20]), obj1);
  obj.children = items3;
  return callback2(features(setFeature[16]).BottomSheet, obj);
};
