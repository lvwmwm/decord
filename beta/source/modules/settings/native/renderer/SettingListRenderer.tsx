// Module ID: 14248
// Function ID: 14249
// Name: SettingListRenderer
// Dependencies: [19, 17, 14249, 14141, 11007, 21, 4836, 576, 5999, 4832, 14250, 1613, 14251, 14255, 8179, 14256, 14259, 14260, 1876, 2]

// Module 14248 (SettingListRenderer)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import Text_Text from "Text/Text" /* 4832 */;
import TableRowGroup from "TableRowGroup" /* 5999 */;
import SettingRendererConstants from "SettingRendererConstants" /* 11007 */;
import SettingRenderer from "SettingRenderer" /* 14250 */;
import SettingRendererUtils from "SettingRendererUtils" /* 14251 */;
import SettingsSearchEmptyStateDefault from "SettingsSearchEmptyState" /* 14259 */;
import react from "react" /* 19 */;
import UserSettingSearchStore from "UserSettingSearchStore" /* 14249 */;
import SettingBlocklistStore from "SettingBlocklistStore" /* 14141 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let importDefault, node, searchResultsHeader;

let obj2;
function SearchListSectionLabel(label) {
  label = label.label;
  let tmpResult = label;
  if (typeof label === "string") {
    const obj2 = { title: label };
    tmpResult = tmp(TableRowGroup.TableRowGroupTitle, obj2);
  }
  return <tmp2 style={closure_9().spacer}>{tmpResult}</tmp2>;
}
function SearchListSectionSubLabel(subLabel) {
  let tmpResult;
  subLabel = subLabel.subLabel;
  if (typeof subLabel === "string") {
    const obj2 = { variant: "text-xs/normal", color: "text-muted", children: subLabel };
    tmpResult = tmp(Text_Text.Text, obj2);
  } else {
    const _Array = Array;
    tmpResult = subLabel;
  }
  return <tmp2 style={closure_9().subLabel}>{tmpResult}</tmp2>;
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
    return <SearchListSectionLabel label={item.label} />;
  } else if (ListItemType.SECTION_FOOTER === type) {
    return <SearchListSectionSubLabel subLabel={item.label} />;
  } else if (ListItemType.SETTING_SEARCH_RESULT === type) {
    const obj3 = SettingRenderer;
    return obj3.renderSettingSearchResultItem(item);
  } else if (ListItemType.SECTION_ROW === type) {
    const obj2 = SettingRenderer;
    return obj2.renderSettingItem(item);
  } else if (ListItemType.SECTION_ROW_PLACEHOLDER === type) {
    const obj = SettingRenderer;
    return obj.renderSettingSearchResultPlaceholderItem(item);
  }
}
function keyExtractor(type, arg1) {
  type = type.type;
  if (ListItemType.SECTION_HEADER !== type) {
    if (ListItemType.SECTION_FOOTER !== type) {
      if (ListItemType.SECTION_ROW !== type) {
        if (ListItemType.SETTING_SEARCH_RESULT !== type) {
          if (ListItemType.SECTION_ROW_PLACEHOLDER === type) {
            const _HermesInternal = HermesInternal;
            return "" + type.type + "-" + arg1;
          }
        }
      }
      const _HermesInternal2 = HermesInternal;
      return "" + type.type + "-" + type.setting;
    }
  }
  let label = arg1;
  const type2 = type.type;
  if (typeof type.label === "string") {
    label = type.label;
  }
  return "" + type2 + "-" + label;
}
const View = react_native.View;
const ListItemType = SettingRendererConstants.ListItemType;
const jsx = Fragment.jsx;
let obj = { container: obj2, contentContainer: { paddingHorizontal: 16 }, searchResultsHeader: { paddingBottom: 24 }, spacer: { paddingTop: 24 }, subLabel: { marginTop: 8 } };
obj2 = { backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND, flexGrow: 1 };
let closure_9 = createStyles.createStyles(obj);
const memoResult = react.memo((node) => {
  node = node.node;
  let field;
  const tmp = closure_9();
  const bottom = field(1613)().bottom;
  field = SettingBlocklistStore.useField("blocklist");
  const items = [field, node];
  const memo = react.useMemo(() => {
    const obj = SettingRendererUtils;
    return obj.toSettingListItems(node, field);
  }, items);
  const ref = react.useRef(null);
  let obj = node(14255);
  obj.useAutoScrollToSearchResultSetting(ref, memo, node.scrollTarget);
  const obj4 = { paddingBottom: bottom + field(576).space.PX_16 };
  const FlashList = node(8179).FlashList;
  const merged = Object.assign(tmp.contentContainer);
  return <View style={tmp.container}>{null}</View>;
});
const memoResult1 = react.memo((node) => {
  let obj3;
  node = node.node;
  let settings;
  let state;
  let field;
  let memo2;
  let tmp = memo2();
  importDefault = tmp;
  const bottom = require("useSafeAreaInsets")().bottom;
  let obj = node(settings[15]);
  const settingSearchResults = obj.useSettingSearchResults();
  settings = settingSearchResults.settings;
  const isLoading = settingSearchResults.isLoading;
  const placeholderCount = settingSearchResults.placeholderCount;
  state = state.useState((query) => {
    const str = query.query;
    return "" === str.trim();
  });
  field = field.useField("blocklist");
  const items = [field, node];
  const memo = isLoading.useMemo(() => {
    const obj = SettingRendererUtils;
    return obj.toSettingListItems(node, field);
  }, items);
  const items1 = [settings, isLoading, placeholderCount];
  const memo1 = isLoading.useMemo(() => {
    const obj = SettingRendererUtils;
    return obj.getScoredSettingListSearchResultItems(settings, isLoading, placeholderCount);
  }, items1);
  const items2 = [memo, memo1, state];
  memo2 = isLoading.useMemo(() => state ? memo : memo1, items2);
  const items3 = [tmp.searchResultsHeader, state];
  const items4 = [state, isLoading, memo2.length];
  const memo3 = isLoading.useMemo(() => {
    const tmp = state;
    if (tmp) {
      searchResultsHeader = {};
    } else {
      searchResultsHeader = searchResultsHeader.searchResultsHeader;
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
          tmp = jsx(SettingsSearchEmptyStateDefault, {});
        }
      }
    }
    return tmp;
  }, items4);
  const obj2 = { keyboardShouldPersistTaps: "always", contentContainerStyle: obj3, ListHeaderComponentStyle: memo3, ListHeaderComponent: require("SettingSearchBar"), ListEmptyComponent: memo4, onScroll: node(settings[18]).dismissGlobalKeyboard, scrollIndicatorInsets: { right: 0.01 }, keyExtractor, renderItem, data: memo2, getItemType };
  obj3 = { paddingBottom: bottom + require("native").space.PX_16 };
  const FlashList = node(settings[14]).FlashList;
  const merged = Object.assign(tmp.contentContainer);
  return memo1(FlashList, obj2);
});
const result = size.fileFinishedImporting("modules/settings/native/renderer/SettingListRenderer.tsx");

export const SettingsList = memoResult;
export const SearchableSettingsList = memoResult1;
