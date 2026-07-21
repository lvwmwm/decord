// Module ID: 13778
// Function ID: 104111
// Name: isFilterOptionEqual
// Dependencies: []
// Exports: default

// Module 13778 (isFilterOptionEqual)
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
  const tmp = callback4();
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
  const obj1 = { 1644382730: false, -665385918: false };
  const intl = arg1(dependencyMap[10]).intl;
  obj1.text = intl.string(arg1(dependencyMap[10]).t.i4jeWR);
  obj1.onPress = onConfirm;
  const items = [callback2(arg1(dependencyMap[9]).Button, obj1), ];
  const obj2 = { 1644382730: false, -665385918: false, -1355657998: false, -2105708375: false, -241082440: false };
  const intl2 = arg1(dependencyMap[10]).intl;
  obj2.text = intl2.string(arg1(dependencyMap[10]).t.yBZMsQ);
  obj2.onPress = onReset;
  items[1] = callback2(arg1(dependencyMap[9]).Button, obj2);
  obj.children = items;
  obj.children = callback3(arg1(dependencyMap[8]).ButtonGroup, obj);
  obj.children = callback2(arg1(dependencyMap[7]).SafeAreaPaddingView, obj);
  return callback2(View, obj);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
const QuestHomeSortMethods = arg1(dependencyMap[3]).QuestHomeSortMethods;
({ jsx: closure_7, jsxs: closure_8 } = arg1(dependencyMap[4]));
let obj = arg1(dependencyMap[5]);
obj = {};
obj = { paddingHorizontal: importDefault(dependencyMap[6]).space.PX_16 };
obj.content = obj;
obj.bodyContainer = {};
const tmp2 = arg1(dependencyMap[4]);
obj.footerInline = { paddingTop: importDefault(dependencyMap[6]).space.PX_16 };
const obj1 = { paddingTop: importDefault(dependencyMap[6]).space.PX_16 };
obj.footer = { backgroundColor: importDefault(dependencyMap[6]).colors.MOBILE_ACTIONSHEET_BACKGROUND };
obj.footerButtonGroup = { paddingBottom: 0 };
let closure_9 = obj.createStyles(obj);
let closure_10 = [];
const obj2 = { backgroundColor: importDefault(dependencyMap[6]).colors.MOBILE_ACTIONSHEET_BACKGROUND };
const result = arg1(dependencyMap[24]).fileFinishedImporting("modules/quests/native/QuestHomeSortingFilteringBottomSheet.tsx");

export default function QuestHomeSortingFilteringBottomSheet(onSortMethodChange) {
  let initialFilters;
  let initialSortMethod;
  onSortMethodChange = onSortMethodChange.onSortMethodChange;
  const arg1 = onSortMethodChange;
  const onFiltersChange = onSortMethodChange.onFiltersChange;
  const importDefault = onFiltersChange;
  ({ initialSortMethod, initialFilters } = onSortMethodChange);
  let obj = arg1(dependencyMap[11]);
  let isScreenReaderEnabled = obj.useIsScreenReaderEnabled();
  const tmp3 = callback(React.useState(initialSortMethod), 2);
  const first = tmp3[0];
  const dependencyMap = first;
  let callback = tmp5;
  const tmp6 = callback(React.useState(initialFilters), 2);
  const first1 = tmp6[0];
  const React = first1;
  let closure_5 = tmp6[1];
  const tmp8 = callback(React.useState(0), 2);
  let closure_6 = tmp8[1];
  let tmp9 = null;
  const ref = React.useRef(null);
  callback = React.useCallback((nativeEvent) => {
    lib(nativeEvent.nativeEvent.layout.height);
  }, []);
  const callback3 = React.useCallback((arg0, arg1) => {
    const onSortMethodChange = arg0;
    const onFiltersChange = arg1;
    callback((arr) => {
      if (arg1) {
        const items = [];
        const arraySpreadResult = HermesBuiltin.arraySpread(arr, 0);
        items[arraySpreadResult] = arr;
        const sum = arraySpreadResult + 1;
        let found = items;
      } else {
        found = arr.filter((arg0) => !callback(arg0, closure_0));
      }
      return found;
    });
  }, []);
  const callback1 = React.useCallback(() => {
    tmp5(lib.SUGGESTED);
    callback(closure_10);
    const current = ref.current;
    if (null != current) {
      current.setValue(lib.SUGGESTED);
    }
    const AccessibilityAnnouncer = onSortMethodChange(first[12]).AccessibilityAnnouncer;
    const intl = onSortMethodChange(first[10]).intl;
    AccessibilityAnnouncer.announce(intl.string(onSortMethodChange(first[10]).t.bK5N8u));
  }, []);
  const items = [onSortMethodChange, onFiltersChange, first, first1];
  const callback2 = React.useCallback(() => {
    onSortMethodChange(first);
    onFiltersChange(first1);
    onFiltersChange(first[13]).hideActionSheet("QuestHomeSortingFilteringBottomSheet");
  }, items);
  let obj1 = arg1(dependencyMap[14]);
  const questHomeSortOptions = obj1.useQuestHomeSortOptions();
  let obj2 = arg1(dependencyMap[14]);
  const questHomeFilterOptions = obj2.useQuestHomeFilterOptions();
  obj = {};
  obj = {};
  const intl = arg1(dependencyMap[10]).intl;
  obj.title = intl.string(arg1(dependencyMap[10]).t.UdhTtk);
  obj.header = ref(arg1(dependencyMap[16]).BottomSheetTitleHeader, obj);
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
  ({ content: arr4[0], bodyContainer: arr4[1] } = callback4());
  obj2.style = items1;
  const obj4 = { spacing: importDefault(dependencyMap[6]).space.PX_32 };
  const obj5 = { groupRef: ref, hasIcons: false, defaultValue: first, onChange: tmp3[1] };
  const intl2 = arg1(dependencyMap[10]).intl;
  obj5.title = intl2.string(arg1(dependencyMap[10]).t.tZXJIS);
  obj5.children = questHomeSortOptions.map((label) => ref(onSortMethodChange(first[20]).TableRadioRow, { label: label.label, value: label.value }, arg1));
  const items2 = [
    ref(arg1(dependencyMap[19]).TableRadioGroup, obj5),
    questHomeFilterOptions.map((heading) => {
      const obj = { title: heading.heading, hasIcons: false };
      const options = heading.options;
      obj.children = options.map((arg0, arg1) => {
        const obj = {
          label: arg0(closure_2[23]).getFilterTypeText(arg0.filter),
          onPress(arg0) {
            return callback(arg0, arg0);
          },
          checked: closure_4.some((arg0) => callback2(arg0, arg0))
        };
        return callback(arg0(closure_2[22]).TableCheckboxRow, obj, arg1);
      });
      return ref(onSortMethodChange(first[21]).TableRowGroup, obj, arg1);
    })
  ];
  obj4.children = items2;
  const items3 = [callback3(arg1(dependencyMap[18]).Stack, obj4), ];
  if (isScreenReaderEnabled) {
    const obj6 = { onConfirm: callback2, onReset: callback1, inline: true };
    isScreenReaderEnabled = ref(FilterFooter, obj6);
  }
  items3[1] = isScreenReaderEnabled;
  obj2.children = items3;
  obj.children = callback3(arg1(dependencyMap[17]).BottomSheetScrollView, obj2);
  return ref(arg1(dependencyMap[15]).BottomSheet, obj);
};
