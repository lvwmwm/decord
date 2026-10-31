// Module ID: 16886
// Function ID: 16887
// Name: useQuestHomeHeader
// Dependencies: [19, 17, 6781, 1072, 1074, 21, 5014, 575, 14714, 5624, 1113, 9554, 16887, 1252, 7351, 5258, 7719, 14487, 16906, 1994, 8029, 12803, 1497, 14754, 2]
// Exports: default

// Module 16886 (useQuestHomeHeader)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import CollectiblesShopConstants from "CollectiblesShopConstants" /* 1074 */;
import intl3 from "intl" /* 1113 */;
import asyncRequire from "asyncRequire" /* 1994 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5258 */;
import Text_Text from "Text/Text" /* 5624 */;
import QuestConstants from "QuestConstants" /* 6781 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7351 */;
import QuestsIcon from "QuestsIcon" /* 14714 */;
import react from "react" /* 19 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let navigation;

let c10;
let c9;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
function QuestHomeHeaderTitle() {
  let intl;
  let items;
  const tmp = closure_11();
  const obj = { style: tmp.headerTitleContainer, children: items };
  items = [React4(QuestsIcon.QuestsIcon, { size: "md", color: "icon-strong" }), ];
  const obj2 = { variant: "redesign/heading-18/bold", color: "mobile-text-heading-primary", maxFontSizeMultiplier: 2, lineClamp: 1, style: tmp.headerTitle, children: intl.string(intl3.t.JALI2K) };
  const Heading = Text_Text.Heading;
  intl = intl3.intl;
  items[1] = React4(Heading, obj2);
  return authStore(View, obj);
}
function QuestHomeHeaderRight(isVirtualCurrencyEnabled) {
  let constants2;
  let items1;
  isVirtualCurrencyEnabled = isVirtualCurrencyEnabled.isVirtualCurrencyEnabled;
  const merged = Object.assign(isVirtualCurrencyEnabled, Object.assign({ isVirtualCurrencyEnabled: 0 }));
  let balance;
  const tmp3 = balance;
  const tmp2 = closure_11();
  let obj = balance(9554);
  balance = obj.useFetchVirtualCurrencyBalance().balance;
  let obj2 = balance(16887);
  const orbBalanceEntrypoint = obj2.useOrbBalanceEntrypoint({ location: "MobileQuestHomeHeader" });
  const openBalanceWidgetActionSheet = orbBalanceEntrypoint.openBalanceWidgetActionSheet;
  let items = [balance, openBalanceWidgetActionSheet];
  const hasUnreadUpdate = orbBalanceEntrypoint.hasUnreadUpdate;
  let obj3 = { style: tmp2.headerRightContainer, children: items1 };
  const tmp7 = closure_10;
  const tmp8 = View;
  if (isVirtualCurrencyEnabled) {
    let obj4 = { balance, onPress: tmp6, showNotificationBadge: hasUnreadUpdate };
    isVirtualCurrencyEnabled = closure_9(tmp3(14487).BalanceWidgetPillButton, obj4);
  }
  items1 = [isVirtualCurrencyEnabled, ];
  const obj5 = {};
  const merged1 = Object.assign(merged);
  items1[1] = closure_9(FiltersButton, obj5);
  return tmp7(tmp8, obj3);
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
    obj.openLazy(asyncRequire(16906, dependencyMap.paths), "QuestHomeSortingFilteringBottomSheet", obj2);
  }, items);
  let obj = { icon: closure_9(setSelectedSortMethod(tmp3[21]).FiltersHorizontalIcon, { size: "sm", color: INTERACTIVE_TEXT_DEFAULT }), size: "sm", variant: str, onPress: callback, accessibilityLabel: intl.string(setSelectedSortMethod(tmp3[10]).t.UdhTtk), scaleAmountInPx: 4 };
  const BaseIconButton = setSelectedSortMethod(tmp3[20]).BaseIconButton;
  intl = setSelectedSortMethod(tmp3[10]).intl;
  return closure_9(BaseIconButton, obj);
}
const View = react_native.View;
const QuestHomeSortMethods = QuestConstants.QuestHomeSortMethods;
({ AnalyticEvents: metroRequire, AnalyticsPages: metroImportDefault } = Constants);
let closure_8 = CollectiblesShopConstants.CollectiblesMobileShopScreen;
({ jsx: c9, jsxs: c10 } = Fragment);
let createStyles = createStyles_mod;
let obj = { headerTitleContainer: obj2, headerTitle: { flexShrink: 1 }, headerRightContainer: obj3 };
obj2 = { width: "100%", flexDirection: "row", alignItems: "center", marginTop: nativeDefault.space.PX_8, paddingLeft: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", justifyContent: "flex-end", alignItems: "center", gap: nativeDefault.space.PX_8, marginTop: nativeDefault.space.PX_8 };
let closure_11 = createStyles(obj);
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
        return closure_1_9(closure_1_12, {});
      },
      headerRight() {
        const obj = { isVirtualCurrencyEnabled, setSelectedSortMethod, setSelectedFilters, selectedFilters, selectedSortMethod };
        return closure_2_9(QuestHomeHeaderRight, obj);
      }
    };
    navigation.setOptions(obj);
  }, items);
};
