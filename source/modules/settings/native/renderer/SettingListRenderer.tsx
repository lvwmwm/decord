// Module ID: 13430
// Function ID: 101957
// Name: SearchListSectionLabel
// Dependencies: []

// Module 13430 (SearchListSectionLabel)
function SearchListSectionLabel(label) {
  label = label.label;
  let obj = { style: callback().spacer };
  let tmp3 = label;
  if ("string" === typeof label) {
    obj = { title: label };
    tmp3 = jsx(arg1(dependencyMap[8]).TableRowGroupTitle, obj);
  }
  obj.children = tmp3;
  return <View {...obj} />;
}
function SearchListSectionSubLabel(subLabel) {
  subLabel = subLabel.subLabel;
  let obj = { style: callback().subLabel };
  if ("string" === typeof subLabel) {
    obj = { children: subLabel };
    let tmp4 = jsx(arg1(dependencyMap[9]).TextWithIOSLinkWorkaround, obj);
  } else {
    const _Array = Array;
    tmp4 = subLabel;
  }
  obj.children = tmp4;
  return <View {...obj} />;
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
    return <SearchListSectionLabel {...obj} />;
  } else if (ListItemType.SECTION_FOOTER === type) {
    obj = { subLabel: item.label };
    return <SearchListSectionSubLabel {...obj} />;
  } else if (ListItemType.SETTING_SEARCH_RESULT === type) {
    return arg1(dependencyMap[10]).renderSettingSearchResultItem(item);
  } else if (ListItemType.SECTION_ROW === type) {
    return arg1(dependencyMap[10]).renderSettingItem(item);
  } else if (ListItemType.SECTION_ROW_PLACEHOLDER === type) {
    obj = arg1(dependencyMap[10]);
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
const importAllResult = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
const ListItemType = arg1(dependencyMap[4]).ListItemType;
const jsx = arg1(dependencyMap[5]).jsx;
let obj = {};
obj = { backgroundColor: importDefault(dependencyMap[7]).colors.MOBILE_ACTIONSHEET_BACKGROUND, flexGrow: 1 };
obj.container = obj;
obj.contentContainer = { paddingHorizontal: 16 };
obj.searchResultsHeader = { paddingBottom: 24 };
obj.spacer = { paddingTop: 24 };
obj.subLabel = { marginTop: 8 };
let closure_9 = arg1(dependencyMap[6]).createStyles(obj);
const obj2 = arg1(dependencyMap[6]);
const memoResult = importAllResult.memo((node) => {
  node = node.node;
  const arg1 = node;
  const tmp = callback();
  const field = closure_6.useField("blocklist");
  const importDefault = field;
  const items = [field, node];
  const memo = importAllResult.useMemo(() => node(closure_2[12]).toSettingListItems(node, field), items);
  const ref = importAllResult.useRef(null);
  let obj = arg1(dependencyMap[13]);
  obj.useAutoScrollToSearchResultSetting(ref, memo, node.scrollTarget);
  obj = { style: tmp.container };
  obj = { ref, ListHeaderComponent: node.ListHeaderComponent };
  const obj1 = {};
  const merged = Object.assign(tmp.contentContainer);
  obj1["paddingBottom"] = importDefault(dependencyMap[11])().bottom + importDefault(dependencyMap[7]).space.PX_16;
  obj.contentContainerStyle = obj1;
  obj.scrollIndicatorInsets = { right: 0.01 };
  obj.keyExtractor = keyExtractor;
  obj.renderItem = renderItem;
  obj.data = memo;
  obj.getItemType = getItemType;
  obj.children = jsx(arg1(dependencyMap[14]).FlashList, obj);
  return <View {...obj} />;
});
const memoResult1 = importAllResult.memo((node) => {
  node = node.node;
  const arg1 = node;
  const tmp = callback();
  const importDefault = tmp;
  let obj = arg1(dependencyMap[15]);
  const settingSearchResults = obj.useSettingSearchResults();
  const settings = settingSearchResults.settings;
  const dependencyMap = settings;
  const isLoading = settingSearchResults.isLoading;
  const placeholderCount = settingSearchResults.placeholderCount;
  const View = placeholderCount;
  const state = React.useState((query) => "" === query.query.trim());
  const React = state;
  const field = closure_6.useField("blocklist");
  closure_6 = field;
  const items = [field, node];
  const memo = importAllResult.useMemo(() => node(settings[12]).toSettingListItems(node, field), items);
  const ListItemType = memo;
  const items1 = [settings, isLoading, placeholderCount];
  const memo1 = importAllResult.useMemo(() => node(settings[12]).getScoredSettingListSearchResultItems(settings, isLoading, placeholderCount), items1);
  const jsx = memo1;
  const items2 = [memo, memo1, state];
  const memo2 = importAllResult.useMemo(() => state ? memo : memo1, items2);
  const callback = memo2;
  const items3 = [tmp.searchResultsHeader, state];
  const items4 = [state, isLoading, memo2.length];
  const memo3 = importAllResult.useMemo(() => {
    if (state) {
      let searchResultsHeader = {};
    } else {
      searchResultsHeader = tmp.searchResultsHeader;
    }
    return searchResultsHeader;
  }, items3);
  const memo4 = importAllResult.useMemo(() => {
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
  obj["paddingBottom"] = importDefault(dependencyMap[11])().bottom + importDefault(dependencyMap[7]).space.PX_16;
  obj.contentContainerStyle = obj;
  obj.ListHeaderComponentStyle = memo3;
  obj.ListHeaderComponent = importDefault(dependencyMap[17]);
  obj.ListEmptyComponent = memo4;
  obj.onScroll = arg1(dependencyMap[18]).dismissGlobalKeyboard;
  obj.scrollIndicatorInsets = { right: 0.01 };
  obj.keyExtractor = keyExtractor;
  obj.renderItem = renderItem;
  obj.data = memo2;
  obj.getItemType = getItemType;
  return jsx(arg1(dependencyMap[14]).FlashList, obj);
});
const result = arg1(dependencyMap[19]).fileFinishedImporting("modules/settings/native/renderer/SettingListRenderer.tsx");

export const SettingsList = memoResult;
export const SearchableSettingsList = memoResult1;
