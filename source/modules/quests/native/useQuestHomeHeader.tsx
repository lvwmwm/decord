// Module ID: 13951
// Function ID: 106632
// Name: QuestHomeHeaderTitle
// Dependencies: [31, 27, 4976, 653, 655, 33, 4130, 689, 13948, 4126, 1212, 8764, 4098, 9830, 1934, 675, 5482, 6773, 9818, 13952, 7534, 13953, 1456, 12241, 2]
// Exports: default

// Module 13951 (QuestHomeHeaderTitle)
import result from "result";
import { View } from "get ActivityIndicator";
import { QuestHomeSortMethods } from "QuestsExperimentLocations";
import { AnalyticEvents } from "ME";
import { CollectiblesMobileShopScreen as closure_7 } from "items";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_8;
let closure_9;
const require = arg1;
function QuestHomeHeaderTitle() {
  const tmp = _createForOfIteratorHelperLoose();
  let obj = { style: tmp.headerTitleContainer };
  const items = [callback(require(13948) /* QuestsIcon */.QuestsIcon, { size: "md", color: "icon-strong" }), ];
  obj = { variant: "redesign/heading-18/bold", color: "mobile-text-heading-primary", maxFontSizeMultiplier: 2, lineClamp: 1, style: tmp.headerTitle };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.children = intl.string(require(1212) /* getSystemLocale */.t.JALI2K);
  items[1] = callback(require(4126) /* Text */.Heading, obj);
  obj.children = items;
  return callback2(View, obj);
}
function QuestHomeHeaderRight(isVirtualCurrencyEnabled) {
  isVirtualCurrencyEnabled = isVirtualCurrencyEnabled.isVirtualCurrencyEnabled;
  let obj = Object.create(null);
  obj.isVirtualCurrencyEnabled = 0;
  const merged = Object.assign(isVirtualCurrencyEnabled, obj);
  obj = balance(8764);
  balance = obj.useFetchVirtualCurrencyBalance().balance;
  [][0] = balance;
  obj = { style: _createForOfIteratorHelperLoose().headerRightContainer };
  if (isVirtualCurrencyEnabled) {
    let obj1 = { balance, onPress: tmp4 };
    isVirtualCurrencyEnabled = callback(balance(9818).BalanceWidgetPillButton, obj1);
  }
  let items = [isVirtualCurrencyEnabled, ];
  const merged1 = Object.assign(merged);
  items[1] = callback(FiltersButton, {});
  obj.children = items;
  return closure_9(View, obj);
}
function FiltersButton(setSelectedSortMethod) {
  setSelectedSortMethod = setSelectedSortMethod.setSelectedSortMethod;
  const setSelectedFilters = setSelectedSortMethod.setSelectedFilters;
  const selectedFilters = setSelectedSortMethod.selectedFilters;
  const selectedSortMethod = setSelectedSortMethod.selectedSortMethod;
  let tmp = selectedFilters.length > 0;
  if (!tmp) {
    tmp = selectedSortMethod !== QuestHomeSortMethods.SUGGESTED;
  }
  const colors = setSelectedFilters(selectedFilters[7]).colors;
  let str = "tertiary";
  if (tmp) {
    str = "primary";
  }
  const items = [setSelectedSortMethod, setSelectedFilters, selectedFilters, selectedSortMethod];
  const callback = selectedSortMethod.useCallback(() => {
    let obj = setSelectedFilters(selectedFilters[12]);
    obj = { onSortMethodChange: setSelectedSortMethod, onFiltersChange: setSelectedFilters, initialSortMethod: selectedSortMethod, initialFilters: selectedFilters };
    obj.openLazy(setSelectedSortMethod(selectedFilters[14])(selectedFilters[19], selectedFilters.paths), "QuestHomeSortingFilteringBottomSheet", obj);
  }, items);
  let obj = { icon: callback(setSelectedSortMethod(selectedFilters[21]).FiltersHorizontalIcon, { size: "sm", color: tmp ? colors.WHITE : colors.INTERACTIVE_TEXT_DEFAULT }), size: "sm", variant: str, onPress: callback };
  const intl = setSelectedSortMethod(selectedFilters[10]).intl;
  obj.accessibilityLabel = intl.string(setSelectedSortMethod(selectedFilters[10]).t.UdhTtk);
  obj.scaleAmountInPx = 4;
  return callback(setSelectedSortMethod(selectedFilters[20]).BaseIconButton, obj);
}
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { width: "100%", flexDirection: "row", alignItems: "center", marginTop: require("_createForOfIteratorHelperLoose").space.PX_8, paddingLeft: require("_createForOfIteratorHelperLoose").space.PX_8, gap: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.headerTitleContainer = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.headerTitle = { flexShrink: 1 };
let obj1 = { flexDirection: "row", justifyContent: "flex-end", alignItems: "center", gap: require("_createForOfIteratorHelperLoose").space.PX_8, marginTop: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.headerRightContainer = obj1;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let result = require("QuestsExperimentLocations").fileFinishedImporting("modules/quests/native/useQuestHomeHeader.tsx");

export default function useQuestHomeHeader(setSelectedSortMethod) {
  setSelectedSortMethod = setSelectedSortMethod.setSelectedSortMethod;
  const setSelectedFilters = setSelectedSortMethod.setSelectedFilters;
  const selectedFilters = setSelectedSortMethod.selectedFilters;
  const selectedSortMethod = setSelectedSortMethod.selectedSortMethod;
  const navigation = setSelectedSortMethod(selectedFilters[22]).useNavigation();
  const obj = setSelectedSortMethod(selectedFilters[22]);
  const enabled = setSelectedSortMethod(selectedFilters[23]).useVirtualCurrencyMobileEnabled().enabled;
  const items = [navigation, enabled, setSelectedSortMethod, setSelectedFilters, selectedFilters, selectedSortMethod];
  const layoutEffect = selectedSortMethod.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle() {
        return outer2_8(outer2_11, {});
      },
      headerRight() {
        return outer2_8(outer2_12, { isVirtualCurrencyEnabled: outer1_5, setSelectedSortMethod: outer1_0, setSelectedFilters: outer1_1, selectedFilters: outer1_2, selectedSortMethod: outer1_3 });
      }
    });
  }, items);
};
