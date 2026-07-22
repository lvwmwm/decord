// Module ID: 11402
// Function ID: 88728
// Dependencies: []

// Module 11402
let num = 0;
const importAllResult = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = importDefault(dependencyMap[2]);
const jsx = arg1(dependencyMap[3]).jsx;
let obj1 = arg1(dependencyMap[4]);
let obj = {};
obj = { paddingHorizontal: importDefault(dependencyMap[5]).space.PX_16, paddingBottom: importDefault(dependencyMap[5]).space.PX_8, backgroundColor: importDefault(dependencyMap[5]).colors.MOBILE_ACTIONSHEET_BACKGROUND };
obj.searchBarContainer = obj;
obj1 = { marginLeft: importDefault(dependencyMap[5]).space.PX_12 };
if (obj6.isAndroid()) {
  num = 2;
}
obj1.marginBottom = num;
obj.header = obj1;
const obj6 = arg1(dependencyMap[6]);
obj.showSearchButton = { marginHorizontal: importDefault(dependencyMap[5]).space.PX_12 };
const obj2 = { marginHorizontal: importDefault(dependencyMap[5]).space.PX_12 };
obj.searchBar = { borderRadius: importDefault(dependencyMap[5]).radii.md };
let closure_7 = obj1.createStyles(obj);
const obj3 = { borderRadius: importDefault(dependencyMap[5]).radii.md };
const memoResult = importAllResult.memo(function NewMessagesTagListInput(forceSearchResults) {
  let autoFocus;
  let hasQuery;
  let onChangeText;
  let onFocus;
  let onForceSearchResults;
  let selectedUserIds;
  let tagListInputRef;
  ({ onSelectUser: closure_0, selectedUserIds } = forceSearchResults);
  const importDefault = selectedUserIds;
  ({ autoFocus, onChangeText, onFocus, hasQuery, onForceSearchResults, tagListInputRef } = forceSearchResults);
  const tmp = callback();
  let obj = arg1(dependencyMap[7]);
  const items = [selectedUserIds];
  const memo = importAllResult.useMemo(() => {
    const mapped = null != selectedUserIds ? selectedUserIds : [].map(user.getUser);
    const found = mapped.filter(callback(memo[8]).isNotNullish);
    return found.map(selectedUserIds(memo[9]));
  }, items);
  const dependencyMap = memo;
  obj = { style: tmp.searchBarContainer };
  obj = {};
  let searchBar;
  if (!obj.useMobileVisualRefreshConfig({ location: "NewMessagesTagListInput" }).enabled) {
    searchBar = tmp.searchBar;
  }
  obj.style = searchBar;
  obj.autoFocus = autoFocus;
  obj.focusOnAdd = true;
  let tmp6 = null;
  if (!hasQuery) {
    tmp6 = null;
    if (memo.length > 0) {
      const obj1 = { accessibilityRole: "button" };
      const intl = arg1(dependencyMap[12]).intl;
      const string = intl.string;
      const t = arg1(dependencyMap[12]).t;
      if (forceSearchResults) {
        let stringResult = string(t.4wv+DE);
      } else {
        stringResult = string(t.fTcQm2);
      }
      obj1.accessibilityLabel = stringResult;
      obj1.onPress = onForceSearchResults;
      obj1.style = tmp.showSearchButton;
      let str2 = arg1;
      if (forceSearchResults) {
        let CirclePlusIcon = str2(tmp14[13]).ChevronLargeRightIcon;
      } else {
        CirclePlusIcon = str2(tmp14[14]).CirclePlusIcon;
      }
      const obj2 = {};
      str2 = "xs";
      obj2.size = "xs";
      obj1.children = <CirclePlusIcon {...obj2} />;
      jsx(arg1(dependencyMap[11]).PressableOpacity, obj1);
      const tmp13 = jsx;
      const tmp7 = jsx;
    }
  }
  obj.footer = tmp6;
  const obj3 = { style: tmp.header };
  const intl2 = arg1(dependencyMap[12]).intl;
  obj3.children = intl2.string(arg1(dependencyMap[12]).t.kHyiXs);
  obj.icon = jsx(arg1(dependencyMap[15]).Text, obj3);
  obj.onChangeText = onChangeText;
  obj.onFocus = onFocus;
  obj.onRemove = function onRemove(arg0) {
    const user = user.getUser(tmp.id);
    if (null != user) {
      callback(user);
      const AccessibilityAnnouncer = callback(memo[16]).AccessibilityAnnouncer;
      const intl = callback(memo[12]).intl;
      const obj = { text: tmp.text };
      AccessibilityAnnouncer.announce(intl.formatToPlainString(callback(memo[12]).t.srlxB8, obj));
    }
  };
  const intl3 = arg1(dependencyMap[12]).intl;
  obj.placeholder = intl3.string(arg1(dependencyMap[12]).t.CaEER6);
  obj.tags = memo;
  obj.ref = tagListInputRef;
  obj.children = jsx(importDefault(dependencyMap[10]), obj);
  return <View {...obj} />;
});
const result = arg1(dependencyMap[17]).fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/NewMessagesTagListInput.tsx");

export default memoResult;
