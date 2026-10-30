// Module ID: 16849
// Function ID: 16850
// Name: useQuestHomeHeader
// Dependencies: [19, 17, 6775, 1072, 1074, 21, 5009, 575, 14676, 5619, 1114, 9532, 5253, 14460, 1995, 1253, 7345, 7712, 14449, 16850, 8021, 12768, 1498, 14716, 2]
// Exports: default

// Module 16849 (useQuestHomeHeader)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import CollectiblesShopConstants from "CollectiblesShopConstants" /* 1074 */;
import intl3 from "intl" /* 1114 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1253 */;
import asyncRequire from "asyncRequire" /* 1995 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
import Text_Text from "Text/Text" /* 5619 */;
import QuestConstants from "QuestConstants" /* 6775 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7345 */;
import QuestsIcon from "QuestsIcon" /* 14676 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let navigation;

let c9;
let metroImportAll;
let obj2;
let obj3;
function QuestHomeHeaderTitle() {
  let intl;
  let items;
  const tmp = closure_10();
  const obj = { style: tmp.headerTitleContainer, children: items };
  items = [metroImportAll(QuestsIcon.QuestsIcon, { size: "md", color: "icon-strong" }), ];
  const obj2 = { variant: "redesign/heading-18/bold", color: "mobile-text-heading-primary", maxFontSizeMultiplier: 2, lineClamp: 1, style: tmp.headerTitle, children: intl.string(intl3.t.JALI2K) };
  const Heading = Text_Text.Heading;
  intl = intl3.intl;
  items[1] = metroImportAll(Heading, obj2);
  return React4(View, obj);
}
function QuestHomeHeaderRight(isVirtualCurrencyEnabled) {
  let constants2;
  let items;
  isVirtualCurrencyEnabled = isVirtualCurrencyEnabled.isVirtualCurrencyEnabled;
  const merged = Object.assign(isVirtualCurrencyEnabled, Object.assign({ isVirtualCurrencyEnabled: 0 }));
  let balance;
  const tmp3 = balance;
  const tmp2 = closure_10();
  let obj = balance(9532);
  balance = obj.useFetchVirtualCurrencyBalance().balance;
  [][0] = balance;
  let obj2 = { style: tmp2.headerRightContainer, children: items };
  const tmp6 = closure_9;
  const tmp7 = View;
  if (isVirtualCurrencyEnabled) {
    let obj3 = { balance, onPress: tmp5 };
    isVirtualCurrencyEnabled = closure_8(tmp3(14449).BalanceWidgetPillButton, obj3);
  }
  items = [isVirtualCurrencyEnabled, ];
  let obj4 = {};
  const merged1 = Object.assign(merged);
  items[1] = closure_8(FiltersButton, obj4);
  return tmp6(tmp7, obj2);
}
function FiltersButton(setSelectedSortMethod) {
  let INTERACTIVE_TEXT_DEFAULT;
  let intl;
  let tmp3;
  setSelectedSortMethod = setSelectedSortMethod.setSelectedSortMethod;
  const setSelectedFilters = setSelectedSortMethod.setSelectedFilters;
  const selectedFilters = setSelectedSortMethod.selectedFilters;
  const selectedSortMethod = setSelectedSortMethod.selectedSortMethod;
  const colors = setSelectedFilters(selectedFilters[7]).colors;
  if (selectedFilters.length > 0 || selectedSortMethod !== QuestHomeSortMethods.SUGGESTED) {
    INTERACTIVE_TEXT_DEFAULT = colors.WHITE;
    tmp3 = tmp2;
  } else {
    INTERACTIVE_TEXT_DEFAULT = colors.INTERACTIVE_TEXT_DEFAULT;
    tmp3 = tmp2;
  }
  let str = "tertiary";
  if (selectedFilters.length > 0 || selectedSortMethod !== QuestHomeSortMethods.SUGGESTED) {
    str = "primary";
  }
  const items = [setSelectedSortMethod, setSelectedFilters, selectedFilters, selectedSortMethod];
  const callback = selectedSortMethod.useCallback(() => {
    const obj = ActionSheetActionCreatorsDefault;
    const obj2 = { onSortMethodChange: setSelectedSortMethod, onFiltersChange: setSelectedFilters, initialSortMethod: selectedSortMethod, initialFilters: selectedFilters };
    obj.openLazy(asyncRequire(16850, dependencyMap.paths), "QuestHomeSortingFilteringBottomSheet", obj2);
  }, items);
  let obj = { icon: closure_8(setSelectedSortMethod(tmp3[21]).FiltersHorizontalIcon, { size: "sm", color: INTERACTIVE_TEXT_DEFAULT }), size: "sm", variant: str, onPress: callback, accessibilityLabel: intl.string(setSelectedSortMethod(tmp3[10]).t.UdhTtk), scaleAmountInPx: 4 };
  const BaseIconButton = setSelectedSortMethod(tmp3[20]).BaseIconButton;
  intl = setSelectedSortMethod(tmp3[10]).intl;
  return closure_8(BaseIconButton, obj);
}
const View = react_native.View;
const QuestHomeSortMethods = QuestConstants.QuestHomeSortMethods;
const AnalyticEvents = Constants.AnalyticEvents;
let closure_7 = CollectiblesShopConstants.CollectiblesMobileShopScreen;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { headerTitleContainer: obj2, headerTitle: { flexShrink: 1 }, headerRightContainer: obj3 };
obj2 = { width: "100%", flexDirection: "row", alignItems: "center", marginTop: nativeDefault.space.PX_8, paddingLeft: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", justifyContent: "flex-end", alignItems: "center", gap: nativeDefault.space.PX_8, marginTop: nativeDefault.space.PX_8 };
let closure_10 = createStyles(obj);
let result = size.fileFinishedImporting("modules/quests/native/useQuestHomeHeader.tsx");

export default function useQuestHomeHeader(setSelectedSortMethod) {
  setSelectedSortMethod = setSelectedSortMethod.setSelectedSortMethod;
  const setSelectedFilters = setSelectedSortMethod.setSelectedFilters;
  const selectedFilters = setSelectedSortMethod.selectedFilters;
  const selectedSortMethod = setSelectedSortMethod.selectedSortMethod;
  let obj = setSelectedSortMethod(selectedFilters[22]);
  navigation = obj.useNavigation();
  const obj2 = setSelectedSortMethod(selectedFilters[23]);
  const enabled = obj2.useVirtualCurrencyMobileEnabled().enabled;
  const items = [navigation, enabled, setSelectedSortMethod, setSelectedFilters, selectedFilters, selectedSortMethod];
  const layoutEffect = selectedSortMethod.useLayoutEffect(() => {
    let isVirtualCurrencyEnabled;
    let obj = {
      headerTitle() {
        return closure_1_8(closure_1_11, {});
      },
      headerRight() {
        const obj = { isVirtualCurrencyEnabled, setSelectedSortMethod, setSelectedFilters, selectedFilters, selectedSortMethod };
        return closure_2_8(QuestHomeHeaderRight, obj);
      }
    };
    navigation.setOptions(obj);
  }, items);
};
