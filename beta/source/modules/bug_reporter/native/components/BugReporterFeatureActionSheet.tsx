// Module ID: 9672
// Function ID: 9673
// Name: BugReporterFeatureActionSheet
// Dependencies: [32, 19, 17, 21, 4836, 576, 4832, 6000, 9647, 4800, 6402, 12, 5829, 6470, 9673, 6571, 6570, 1115, 6471, 6476, 2]
// Exports: default

// Module 9672 (BugReporterFeatureActionSheet)
import _modDef12 from "module_12" /* 12 */;
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import Text_Text from "Text/Text" /* 4832 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let BottomSheet, item;

let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
const View = react_native.View;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { list: obj2, searchBar: obj3, sectionHeader: obj4 };
obj2 = { paddingHorizontal: nativeDefault.space.PX_12 };
createStyles = createStyles.createStyles;
obj3 = { paddingHorizontal: nativeDefault.space.PX_12 };
obj4 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, justifyContent: "center" };
let closure_8 = createStyles(obj);
let closure_9 = react.memo((arg0) => {
  let height;
  let items;
  let title;
  ({ title, height } = arg0);
  const obj = { style: items, children: metroRequire(Text_Text.Text, { variant: "text-sm/bold", color: "text-muted", children: title }) };
  items = [closure_8().sectionHeader, { height }];
  return metroRequire(View, obj);
});
let closure_10 = react.memo((item) => {
  let end;
  let feature;
  let featureId;
  let obj2;
  let obj4;
  let start;
  item = item.item;
  const setFeature = item.setFeature;
  ({ feature, start, end } = item);
  let obj = {
    start,
    end,
    value: obj2.getFeatureId(item),
    label: item.name,
    legacyCompat_selected: featureId === obj4.getFeatureId(feature),
    legacyCompat_onPress() {
      setFeature(item);
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet();
    }
  };
  const TableRadioRow = item(6000).TableRadioRow;
  obj2 = item(9647);
  const obj3 = item(9647);
  featureId = obj3.getFeatureId(item);
  obj4 = item(9647);
  return closure_6(TableRadioRow, obj);
});
const result = size.fileFinishedImporting("modules/bug_reporter/native/components/BugReporterFeatureActionSheet.tsx");

export default function BugReporterFeatureActionSheet(features) {
  let BottomSheetTitleHeader;
  let intl;
  let items4;
  let obj2;
  features = features.features;
  const feature = features.feature;
  const setFeature = features.setFeature;
  let first;
  let items;
  let tmp = closure_8();
  const tmp2 = first(items.useState(""), 2);
  first = tmp2[0];
  const items1 = [, ];
  const tmp4 = tmp2[1];
  items1[0] = features;
  items1[1] = first;
  const insets = feature(setFeature[10])().insets;
  const memo = items.useMemo(() => {
    let mapped;
    const found = features.filter((asana_inbox_id) => {
      let tmp = null != asana_inbox_id.asana_inbox_id;
      if (tmp) {
        const obj = feature(setFeature[11]);
        let isEmptyResult = obj.isEmpty(first);
        if (!isEmptyResult) {
          let str3;
          const tmp2Result = feature(setFeature[12]);
          const formatted = str.toLowerCase();
          if (asana_inbox_id.name != null) {
            str3 = str2.toLowerCase();
          }
          if (str3 == null) {
            str3 = "";
          }
          isEmptyResult = tmp2Result(formatted, str3);
        }
        if (!isEmptyResult) {
          let str5;
          const tmp2Result2 = feature(setFeature[12]);
          const formatted1 = str.toLowerCase();
          if (asana_inbox_id.squad != null) {
            str5 = str4.toLowerCase();
          }
          if (str5 == null) {
            str5 = "";
          }
          isEmptyResult = tmp2Result2(formatted1, str5);
        }
        tmp = isEmptyResult;
      }
      return tmp;
    });
    let obj = _modDef12;
    const entries1 = entries(obj.groupBy(found, (squad) => squad.squad));
    const obj2 = {
      items: entries1.map((item) => {
        let tmp;
        let tmp2;
        [tmp, tmp2] = item;
        return { title, data };
      }),
      sections: mapped
    };
    mapped = entries1.map((item) => {
      let arr;
      [, arr] = item;
      return arr.length;
    });
    return obj2;
  }, items1);
  items = memo.items;
  const sections = memo.sections;
  const tmp6 = feature(setFeature[13])();
  const tmp7 = feature(setFeature[14])();
  const height = tmp7;
  const items2 = [items, setFeature, feature];
  const items3 = [tmp7, items];
  const callback = items.useCallback((arg0, arg1) => {
    const obj = { item: items[arg0].data[arg1], feature, setFeature, start: 0 === arg1, end: arg1 === items[arg0].data.length - 1 };
    return metroRequire(closure_10, obj);
  }, items2);
  const callback1 = items.useCallback((arg0) => {
    const obj = { title: items[arg0].title, height };
    return metroRequire(closure_9, obj);
  }, items3);
  let obj = { scrollable: true, startExpanded: true, header: closure_6(BottomSheetTitleHeader, obj2), children: items4 };
  BottomSheet = features(setFeature[15]).BottomSheet;
  obj2 = { title: intl.string(features(setFeature[17]).t["77VVd8"]) };
  BottomSheetTitleHeader = features(setFeature[16]).BottomSheetTitleHeader;
  intl = features(setFeature[17]).intl;
  items4 = [, ];
  const obj3 = { style: tmp.searchBar, children: closure_6(features(setFeature[18]).SearchField, { size: "md", onChange: tmp4 }) };
  items4[0] = closure_6(height, obj3);
  const obj4 = { style: tmp.list, inActionSheet: true, sections, itemSize: tmp6, estimatedListSize: "windowSize", renderItem: callback, renderSectionHeader: callback1, sectionHeaderSize: tmp7, insetEnd: feature(setFeature[5]).space.PX_16 + insets.bottom };
  const tmp10 = feature(setFeature[19]);
  items4[1] = closure_6(tmp10, obj4);
  return closure_7(BottomSheet, obj);
};
