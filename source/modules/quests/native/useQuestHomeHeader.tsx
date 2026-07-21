// Module ID: 13779
// Function ID: 104119
// Name: QuestHomeHeaderTitle
// Dependencies: []
// Exports: default

// Module 13779 (QuestHomeHeaderTitle)
function QuestHomeHeaderTitle() {
  const tmp = callback3();
  let obj = { style: tmp.headerTitleContainer };
  const items = [callback(arg1(dependencyMap[8]).QuestsIcon, {}), ];
  obj = { style: tmp.headerTitle };
  const intl = arg1(dependencyMap[10]).intl;
  obj.children = intl.string(arg1(dependencyMap[10]).t.JALI2K);
  items[1] = callback(arg1(dependencyMap[9]).Heading, obj);
  obj.children = items;
  return callback2(View, obj);
}
function QuestHomeHeaderRight(isVirtualCurrencyEnabled) {
  isVirtualCurrencyEnabled = isVirtualCurrencyEnabled.isVirtualCurrencyEnabled;
  let obj = Object.create(null);
  obj.isVirtualCurrencyEnabled = 0;
  const merged = Object.assign(isVirtualCurrencyEnabled, obj);
  obj = arg1(dependencyMap[11]);
  const balance = obj.useFetchVirtualCurrencyBalance().balance;
  const arg1 = balance;
  [][0] = balance;
  obj = { style: callback3().headerRightContainer };
  if (isVirtualCurrencyEnabled) {
    const obj1 = { balance, onPress: tmp4 };
    isVirtualCurrencyEnabled = callback(arg1(dependencyMap[18]).BalanceWidgetPillButton, obj1);
  }
  const items = [isVirtualCurrencyEnabled, ];
  const merged1 = Object.assign(merged);
  items[1] = callback(FiltersButton, {});
  obj.children = items;
  return closure_9(View, obj);
}
function FiltersButton(setSelectedSortMethod) {
  setSelectedSortMethod = setSelectedSortMethod.setSelectedSortMethod;
  const arg1 = setSelectedSortMethod;
  const setSelectedFilters = setSelectedSortMethod.setSelectedFilters;
  const importDefault = setSelectedFilters;
  const selectedFilters = setSelectedSortMethod.selectedFilters;
  const dependencyMap = selectedFilters;
  const selectedSortMethod = setSelectedSortMethod.selectedSortMethod;
  const React = selectedSortMethod;
  let tmp = selectedFilters.length > 0;
  if (!tmp) {
    tmp = selectedSortMethod !== QuestHomeSortMethods.SUGGESTED;
  }
  const colors = importDefault(dependencyMap[7]).colors;
  let str = "tertiary";
  if (tmp) {
    str = "primary";
  }
  const items = [setSelectedSortMethod, setSelectedFilters, selectedFilters, selectedSortMethod];
  const callback = React.useCallback(() => {
    let obj = setSelectedFilters(selectedFilters[12]);
    obj = { onSortMethodChange: setSelectedSortMethod, onFiltersChange: setSelectedFilters, initialSortMethod: selectedSortMethod, initialFilters: selectedFilters };
    obj.openLazy(setSelectedSortMethod(selectedFilters[14])(selectedFilters[19], selectedFilters.paths), "QuestHomeSortingFilteringBottomSheet", obj);
  }, items);
  const obj = { icon: callback(arg1(dependencyMap[21]).FiltersHorizontalIcon, { size: "sm", color: tmp ? colors.WHITE : colors.INTERACTIVE_TEXT_DEFAULT }), size: "sm", variant: str, onPress: callback };
  const intl = arg1(dependencyMap[10]).intl;
  obj.accessibilityLabel = intl.string(arg1(dependencyMap[10]).t.UdhTtk);
  obj.scaleAmountInPx = 4;
  return callback(arg1(dependencyMap[20]).BaseIconButton, obj);
}
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const QuestHomeSortMethods = arg1(dependencyMap[2]).QuestHomeSortMethods;
const AnalyticEvents = arg1(dependencyMap[3]).AnalyticEvents;
let closure_7 = arg1(dependencyMap[4]).CollectiblesMobileShopScreen;
({ jsx: closure_8, jsxs: closure_9 } = arg1(dependencyMap[5]));
let obj = arg1(dependencyMap[6]);
obj = {};
obj = { "Null": true, "Null": true, "Null": true, marginTop: importDefault(dependencyMap[7]).space.PX_8, paddingLeft: importDefault(dependencyMap[7]).space.PX_8, gap: importDefault(dependencyMap[7]).space.PX_8 };
obj.headerTitleContainer = obj;
obj.headerTitle = { flexShrink: 1 };
const obj1 = { top: true, bottom: true, left: true, gap: importDefault(dependencyMap[7]).space.PX_8, marginTop: importDefault(dependencyMap[7]).space.PX_8 };
obj.headerRightContainer = obj1;
let closure_10 = obj.createStyles(obj);
const tmp2 = arg1(dependencyMap[5]);
const result = arg1(dependencyMap[24]).fileFinishedImporting("modules/quests/native/useQuestHomeHeader.tsx");

export default function useQuestHomeHeader(setSelectedSortMethod) {
  setSelectedSortMethod = setSelectedSortMethod.setSelectedSortMethod;
  const arg1 = setSelectedSortMethod;
  const setSelectedFilters = setSelectedSortMethod.setSelectedFilters;
  const importDefault = setSelectedFilters;
  const selectedFilters = setSelectedSortMethod.selectedFilters;
  const dependencyMap = selectedFilters;
  const selectedSortMethod = setSelectedSortMethod.selectedSortMethod;
  const React = selectedSortMethod;
  const navigation = arg1(dependencyMap[22]).useNavigation();
  const View = navigation;
  const obj = arg1(dependencyMap[22]);
  const enabled = arg1(dependencyMap[23]).useVirtualCurrencyMobileEnabled().enabled;
  const QuestHomeSortMethods = enabled;
  const items = [navigation, enabled, setSelectedSortMethod, setSelectedFilters, selectedFilters, selectedSortMethod];
  const layoutEffect = React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle() {
        return callback(closure_11, {});
      },
      headerRight() {
        return callback(closure_12, { isVirtualCurrencyEnabled: closure_5, setSelectedSortMethod: closure_0, setSelectedFilters: closure_1, selectedFilters: closure_2, selectedSortMethod: closure_3 });
      }
    });
  }, items);
};
