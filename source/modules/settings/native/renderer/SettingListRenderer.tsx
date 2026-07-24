// Module ID: 13602
// Function ID: 104470
// Name: SearchListSectionLabel
// Dependencies: [31, 27, 13603, 13604, 10128, 33, 4130, 689, 5501, 4126, 13605, 1557, 13606, 14627, 7527, 14628, 14631, 14632, 1820, 2]

// Module 13602 (SearchListSectionLabel)
import importAllResult from "result";
import { View } from "get ActivityIndicator";
import zustandStore from "zustandStore";
import closure_6 from "zustandStore";
import { ListItemType } from "GUILD_SELECT_ALL_SERVERS_OPTION_ID";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
function SearchListSectionLabel(label) {
  label = label.label;
  let obj = { style: callback().spacer };
  let tmp3 = label;
  if ("string" === typeof label) {
    obj = { title: label };
    tmp3 = jsx(require(5501) /* TableRowGroupTitle */.TableRowGroupTitle, { title: label });
  }
  obj.children = tmp3;
  return <View style={callback().spacer} />;
}
function SearchListSectionSubLabel(subLabel) {
  subLabel = subLabel.subLabel;
  let obj = { style: callback().subLabel };
  if ("string" === typeof subLabel) {
    obj = { variant: "text-xs/normal", color: "text-muted", children: subLabel };
    let tmp4 = jsx(require(4126) /* Text */.Text, { variant: "text-xs/normal", color: "text-muted", children: subLabel });
  } else {
    const _Array = Array;
    tmp4 = subLabel;
  }
  obj.children = tmp4;
  return <View style={callback().subLabel} />;
}
function getItemType(type) {
  type = type.type;
  if (ListItemType.SECTION_HEADER !== type) {
    if (ListItemType.SECTION_FOOTER !== type) {
      if (ListItemType.SECTION_ROW !== type) {
        if (ListItemType.SETTING_SEARCH_RESULT !== type) {
          return ListItemType.SECTION_ROW_PLACEHOLDER === type ? type.type : undefined;
        }
      }
      const _HermesInternal = HermesInternal;
      return "" + type.type + "-" + type.setting;
    }
  }
  return type.type;
}
function renderItem(item) {
  item = item.item;
  const type = item.type;
  if (ListItemType.SECTION_HEADER === type) {
    let obj = { label: item.label };
    return <SearchListSectionLabel label={item.label} />;
  } else if (ListItemType.SECTION_FOOTER === type) {
    obj = { subLabel: item.label };
    return <SearchListSectionSubLabel subLabel={item.label} />;
  } else if (ListItemType.SETTING_SEARCH_RESULT === type) {
    return require(13605) /* formatSettingsRowTrailing */.renderSettingSearchResultItem(item);
  } else if (ListItemType.SECTION_ROW === type) {
    return require(13605) /* formatSettingsRowTrailing */.renderSettingItem(item);
  } else if (ListItemType.SECTION_ROW_PLACEHOLDER === type) {
    obj = require(13605) /* formatSettingsRowTrailing */;
    return obj.renderSettingSearchResultPlaceholderItem(item);
  }
}
function keyExtractor(type) {
  let label = arg1;
  type = type.type;
  if (ListItemType.SECTION_HEADER !== type) {
    if (ListItemType.SECTION_FOOTER !== type) {
      if (ListItemType.SECTION_ROW !== type) {
        if (ListItemType.SETTING_SEARCH_RESULT !== type) {
          if (ListItemType.SECTION_ROW_PLACEHOLDER === type) {
            const _HermesInternal = HermesInternal;
            return "" + type.type + "-" + label;
          }
        }
      }
      const _HermesInternal2 = HermesInternal;
      return "" + type.type + "-" + type.setting;
    }
  }
  if ("string" === typeof type.label) {
    label = type.label;
  }
  return "" + type.type + "-" + label;
}
let obj = {};
obj = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.MOBILE_ACTIONSHEET_BACKGROUND, flexGrow: 1 };
obj.container = obj;
obj.contentContainer = { paddingHorizontal: 16 };
obj.searchResultsHeader = { paddingBottom: 24 };
obj.spacer = { paddingTop: 24 };
obj.subLabel = { marginTop: 8 };
let closure_9 = _createForOfIteratorHelperLoose.createStyles(obj);
const memoResult = importAllResult.memo((node) => {
  node = node.node;
  const tmp = callback();
  const field = closure_6.useField("blocklist");
  const items = [field, node];
  const memo = importAllResult.useMemo(() => node(outer1_2[12]).toSettingListItems(node, field), items);
  const ref = importAllResult.useRef(null);
  let obj = node(14627);
  obj.useAutoScrollToSearchResultSetting(ref, memo, node.scrollTarget);
  obj = { style: tmp.container };
  obj = { ref, ListHeaderComponent: node.ListHeaderComponent };
  const obj1 = {};
  const merged = Object.assign(tmp.contentContainer);
  obj1["paddingBottom"] = field(1557)().bottom + field(689).space.PX_16;
  obj.contentContainerStyle = obj1;
  obj.scrollIndicatorInsets = { right: 0.01 };
  obj.keyExtractor = keyExtractor;
  obj.renderItem = renderItem;
  obj.data = memo;
  obj.getItemType = getItemType;
  obj.children = jsx(node(7527).FlashList, { ref, ListHeaderComponent: node.ListHeaderComponent });
  return <View ref={ref} ListHeaderComponent={node.ListHeaderComponent} />;
});
const memoResult1 = importAllResult.memo((node) => {
  node = node.node;
  let tmp = memo2();
  const importDefault = tmp;
  let obj = node(settings[15]);
  const settingSearchResults = obj.useSettingSearchResults();
  settings = settingSearchResults.settings;
  const isLoading = settingSearchResults.isLoading;
  const placeholderCount = settingSearchResults.placeholderCount;
  state = state.useState((query) => "" === query.query.trim());
  field = field.useField("blocklist");
  const items = [field, node];
  const memo = isLoading.useMemo(() => node(settings[12]).toSettingListItems(node, field), items);
  const items1 = [settings, isLoading, placeholderCount];
  const memo1 = isLoading.useMemo(() => node(settings[12]).getScoredSettingListSearchResultItems(settings, isLoading, placeholderCount), items1);
  const items2 = [memo, memo1, state];
  memo2 = isLoading.useMemo(() => state ? memo : memo1, items2);
  const items3 = [tmp.searchResultsHeader, state];
  const items4 = [state, isLoading, memo2.length];
  const memo3 = isLoading.useMemo(() => {
    if (state) {
      let searchResultsHeader = {};
    } else {
      searchResultsHeader = tmp.searchResultsHeader;
    }
    return searchResultsHeader;
  }, items3);
  const memo4 = isLoading.useMemo(() => {
    let tmp = null;
    if (!state) {
      tmp = null;
      if (!isLoading) {
        tmp = null;
        if (0 === memo2.length) {
          tmp = memo1(tmp(settings[16]), {});
        }
      }
    }
    return tmp;
  }, items4);
  obj = { keyboardShouldPersistTaps: "always" };
  obj = {};
  const merged = Object.assign(tmp.contentContainer);
  obj["paddingBottom"] = importDefault(settings[11])().bottom + importDefault(settings[7]).space.PX_16;
  obj.contentContainerStyle = obj;
  obj.ListHeaderComponentStyle = memo3;
  obj.ListHeaderComponent = importDefault(settings[17]);
  obj.ListEmptyComponent = memo4;
  obj.onScroll = node(settings[18]).dismissGlobalKeyboard;
  obj.scrollIndicatorInsets = { right: 0.01 };
  obj.keyExtractor = keyExtractor;
  obj.renderItem = renderItem;
  obj.data = memo2;
  obj.getItemType = getItemType;
  return memo1(node(settings[14]).FlashList, obj);
});
const result = require("zustandStore").fileFinishedImporting("modules/settings/native/renderer/SettingListRenderer.tsx");

export const SettingsList = memoResult;
export const SearchableSettingsList = memoResult1;
