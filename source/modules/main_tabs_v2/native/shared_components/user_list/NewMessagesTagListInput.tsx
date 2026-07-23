// Module ID: 11412
// Function ID: 88778
// Dependencies: [31, 27, 1849, 33, 4130, 689, 477, 1324, 1327, 8822, 8425, 4660, 1212, 11413, 11254, 4126, 3843, 2]

// Module 11412
import importAllResult from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import set from "set";
import set from "_isNativeReflectConstruct";

const require = arg1;
let num = 0;
let obj = {};
obj = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, paddingBottom: require("_createForOfIteratorHelperLoose").space.PX_8, backgroundColor: require("_createForOfIteratorHelperLoose").colors.MOBILE_ACTIONSHEET_BACKGROUND };
obj.searchBarContainer = obj;
_createForOfIteratorHelperLoose = { marginLeft: require("_createForOfIteratorHelperLoose").space.PX_12 };
if (set.isAndroid()) {
  num = 2;
}
_createForOfIteratorHelperLoose.marginBottom = num;
obj.header = _createForOfIteratorHelperLoose;
obj.showSearchButton = { marginHorizontal: require("_createForOfIteratorHelperLoose").space.PX_12 };
let obj2 = { marginHorizontal: require("_createForOfIteratorHelperLoose").space.PX_12 };
obj.searchBar = { borderRadius: require("_createForOfIteratorHelperLoose").radii.md };
let closure_7 = _createForOfIteratorHelperLoose.createStyles(obj);
let obj3 = { borderRadius: require("_createForOfIteratorHelperLoose").radii.md };
const result = set.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/NewMessagesTagListInput.tsx");

export default importAllResult.memo(function NewMessagesTagListInput(forceSearchResults) {
  let autoFocus;
  let hasQuery;
  let onChangeText;
  let onFocus;
  let onForceSearchResults;
  let require;
  let selectedUserIds;
  let tagListInputRef;
  ({ onSelectUser: require, selectedUserIds } = forceSearchResults);
  ({ autoFocus, onChangeText, onFocus, hasQuery, onForceSearchResults, tagListInputRef } = forceSearchResults);
  const tmp = callback();
  let obj = require(memo[7]);
  const items = [selectedUserIds];
  memo = importAllResult.useMemo(() => {
    const mapped = null != selectedUserIds ? selectedUserIds : [].map(outer1_5.getUser);
    const found = mapped.filter(outer1_0(memo[8]).isNotNullish);
    return found.map(selectedUserIds(memo[9]));
  }, items);
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
      let intl = require(memo[12]).intl;
      const string = intl.string;
      const t = require(memo[12]).t;
      if (forceSearchResults) {
        let stringResult = string(t["4wv+DE"]);
      } else {
        stringResult = string(t.fTcQm2);
      }
      obj1.accessibilityLabel = stringResult;
      obj1.onPress = onForceSearchResults;
      obj1.style = tmp.showSearchButton;
      let str2 = require;
      if (forceSearchResults) {
        let CirclePlusIcon = str2(tmp14[13]).ChevronLargeRightIcon;
      } else {
        CirclePlusIcon = str2(tmp14[14]).CirclePlusIcon;
      }
      const obj2 = {};
      str2 = "xs";
      obj2.size = "xs";
      obj1.children = <CirclePlusIcon />;
      jsx(require(memo[11]).PressableOpacity, { accessibilityRole: "button" });
      const tmp13 = jsx;
      const tmp7 = jsx;
    }
  }
  obj.footer = tmp6;
  const obj3 = { style: tmp.header, variant: "text-sm/medium", color: "text-muted", accessible: false };
  const intl2 = require(memo[12]).intl;
  obj3.children = intl2.string(require(memo[12]).t.kHyiXs);
  obj.icon = jsx(require(memo[15]).Text, { style: tmp.header, variant: "text-sm/medium", color: "text-muted", accessible: false });
  obj.onChangeText = onChangeText;
  obj.onFocus = onFocus;
  obj.onRemove = function onRemove(arg0) {
    const user = outer1_5.getUser(tmp.id);
    if (null != user) {
      callback(user);
      const AccessibilityAnnouncer = outer1_0(memo[16]).AccessibilityAnnouncer;
      const intl = outer1_0(memo[12]).intl;
      const obj = { text: tmp.text };
      AccessibilityAnnouncer.announce(intl.formatToPlainString(outer1_0(memo[12]).t.srlxB8, obj));
    }
  };
  const intl3 = require(memo[12]).intl;
  obj.placeholder = intl3.string(require(memo[12]).t.CaEER6);
  obj.tags = memo;
  obj.ref = tagListInputRef;
  obj.children = jsx(selectedUserIds(memo[10]), {});
  return <View />;
});
