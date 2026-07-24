// Module ID: 13952
// Function ID: 106646
// Name: isFilterOptionEqual
// Dependencies: [57, 31, 27, 4976, 33, 4130, 689, 5121, 4965, 4543, 1212, 4528, 3976, 4098, 10493, 5187, 5186, 5189, 4541, 7654, 7653, 5501, 9132, 9504, 2]
// Exports: default

// Module 13952 (isFilterOptionEqual)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { View } from "get ActivityIndicator";
import { QuestHomeSortMethods } from "QuestsExperimentLocations";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_7;
let closure_8;
const require = arg1;
function isFilterOptionEqual(group, group2) {
  return group.group === group2.group && group.filter === group2.filter;
}
function FilterFooter(inline) {
  let onConfirm;
  let onLayout;
  let onReset;
  let flag = inline.inline;
  ({ onConfirm, onReset, onLayout } = inline);
  if (flag === undefined) {
    flag = false;
  }
  const tmp = _createForOfIteratorHelperLoose();
  let obj = {};
  if (flag) {
    let footerInline = tmp.footerInline;
  } else {
    footerInline = [, ];
    ({ footer: arr[0], content: arr[1] } = tmp);
  }
  obj.style = footerInline;
  obj.onLayout = onLayout;
  obj = { bottom: true };
  obj = { direction: "vertical", style: tmp.footerButtonGroup };
  const obj1 = { size: "lg", grow: true };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj1.text = intl.string(require(1212) /* getSystemLocale */.t.i4jeWR);
  obj1.onPress = onConfirm;
  const items = [callback2(require(4543) /* Button */.Button, obj1), ];
  const obj2 = { size: "lg", grow: true, text: null, onPress: null, variant: "secondary" };
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj2.text = intl2.string(require(1212) /* getSystemLocale */.t.yBZMsQ);
  obj2.onPress = onReset;
  items[1] = callback2(require(4543) /* Button */.Button, obj2);
  obj.children = items;
  obj.children = callback3(require(4965) /* ButtonGroup */.ButtonGroup, obj);
  obj.children = callback2(require(5121) /* SafeAreaPaddingView */.SafeAreaPaddingView, obj);
  return callback2(View, obj);
}
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.content = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.bodyContainer = { flex: 1, minHeight: 0 };
_createForOfIteratorHelperLoose.footerInline = { paddingTop: require("_createForOfIteratorHelperLoose").space.PX_16 };
let obj1 = { paddingTop: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.footer = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.MOBILE_ACTIONSHEET_BACKGROUND };
_createForOfIteratorHelperLoose.footerButtonGroup = { paddingBottom: 0 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let closure_10 = [];
let obj2 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.MOBILE_ACTIONSHEET_BACKGROUND };
const result = require("get ActivityIndicator").fileFinishedImporting("modules/quests/native/QuestHomeSortingFilteringBottomSheet.tsx");

export default function QuestHomeSortingFilteringBottomSheet(onSortMethodChange) {
  let initialFilters;
  let initialSortMethod;
  onSortMethodChange = onSortMethodChange.onSortMethodChange;
  const onFiltersChange = onSortMethodChange.onFiltersChange;
  ({ initialSortMethod, initialFilters } = onSortMethodChange);
  let obj = onSortMethodChange(first[11]);
  let isScreenReaderEnabled = obj.useIsScreenReaderEnabled();
  const tmp3 = callback(first1.useState(initialSortMethod), 2);
  first = tmp3[0];
  callback = tmp5;
  const tmp6 = callback(first1.useState(initialFilters), 2);
  first1 = tmp6[0];
  let closure_5 = tmp6[1];
  const tmp8 = callback(first1.useState(0), 2);
  let closure_6 = tmp8[1];
  let tmp9 = null;
  const ref = first1.useRef(null);
  callback = first1.useCallback((nativeEvent) => {
    lib(nativeEvent.nativeEvent.layout.height);
  }, []);
  const callback3 = first1.useCallback((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    callback((arr) => {
      if (closure_1) {
        const items = [];
        const arraySpreadResult = HermesBuiltin.arraySpread(arr, 0);
        items[arraySpreadResult] = closure_0;
        const sum = arraySpreadResult + 1;
        let found = items;
      } else {
        found = arr.filter((arg0) => !outer3_11(arg0, outer1_0));
      }
      return found;
    });
  }, []);
  const callback1 = first1.useCallback(() => {
    tmp5(lib.SUGGESTED);
    callback(outer1_10);
    const current = ref.current;
    if (null != current) {
      current.setValue(lib.SUGGESTED);
    }
    const AccessibilityAnnouncer = onSortMethodChange(first[12]).AccessibilityAnnouncer;
    const intl = onSortMethodChange(first[10]).intl;
    AccessibilityAnnouncer.announce(intl.string(onSortMethodChange(first[10]).t.bK5N8u));
  }, []);
  let items = [onSortMethodChange, onFiltersChange, first, first1];
  const callback2 = first1.useCallback(() => {
    onSortMethodChange(first);
    onFiltersChange(first1);
    onFiltersChange(first[13]).hideActionSheet("QuestHomeSortingFilteringBottomSheet");
  }, items);
  let obj1 = onSortMethodChange(first[14]);
  const questHomeSortOptions = obj1.useQuestHomeSortOptions();
  let obj2 = onSortMethodChange(first[14]);
  const questHomeFilterOptions = obj2.useQuestHomeFilterOptions();
  obj = {};
  obj = {};
  let intl = onSortMethodChange(first[10]).intl;
  obj.title = intl.string(onSortMethodChange(first[10]).t.UdhTtk);
  obj.header = ref(onSortMethodChange(first[16]).BottomSheetTitleHeader, obj);
  if (!isScreenReaderEnabled) {
    obj1 = { onConfirm: callback2, onReset: callback1, onLayout: callback };
    tmp9 = ref(FilterFooter, obj1);
  }
  obj.footer = tmp9;
  obj.scrollable = true;
  obj.startExpanded = true;
  obj2 = {};
  let tmp18;
  if (!isScreenReaderEnabled) {
    const obj3 = { paddingBottom: tmp8[0] };
    tmp18 = obj3;
  }
  obj2.contentContainerStyle = tmp18;
  const items1 = [, ];
  ({ content: arr4[0], bodyContainer: arr4[1] } = _createForOfIteratorHelperLoose());
  obj2.style = items1;
  const obj4 = { spacing: onFiltersChange(first[6]).space.PX_32 };
  const obj5 = { groupRef: ref, hasIcons: false, defaultValue: first, onChange: tmp3[1] };
  const intl2 = onSortMethodChange(first[10]).intl;
  obj5.title = intl2.string(onSortMethodChange(first[10]).t.tZXJIS);
  obj5.children = questHomeSortOptions.map((label) => ref(onSortMethodChange(first[20]).TableRadioRow, { label: label.label, value: label.value }, arg1));
  const items2 = [
    ref(onSortMethodChange(first[19]).TableRadioGroup, obj5),
    questHomeFilterOptions.map((heading) => {
      let obj = { title: heading.heading, hasIcons: false };
      const options = heading.options;
      obj.children = options.map((arg0, arg1) => {
        let closure_0 = arg0;
        const obj = {
          label: onSortMethodChange(first[23]).getFilterTypeText(arg0.filter),
          onPress(arg0) {
            return outer2_8(closure_0, arg0);
          },
          checked: outer1_4.some((arg0) => outer3_11(arg0, closure_0))
        };
        return ref(onSortMethodChange(first[22]).TableCheckboxRow, obj, arg1);
      });
      return ref(onSortMethodChange(first[21]).TableRowGroup, obj, arg1);
    })
  ];
  obj4.children = items2;
  const items3 = [callback3(onSortMethodChange(first[18]).Stack, obj4), ];
  if (isScreenReaderEnabled) {
    const obj6 = { onConfirm: callback2, onReset: callback1, inline: true };
    isScreenReaderEnabled = ref(FilterFooter, obj6);
  }
  items3[1] = isScreenReaderEnabled;
  obj2.children = items3;
  obj.children = callback3(onSortMethodChange(first[17]).BottomSheetScrollView, obj2);
  return ref(onSortMethodChange(first[15]).BottomSheet, obj);
};
