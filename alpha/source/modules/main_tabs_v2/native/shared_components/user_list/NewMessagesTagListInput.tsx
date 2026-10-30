// Module ID: 13867
// Function ID: 13868
// Name: NewMessagesTagListInput
// Dependencies: [19, 17, 1384, 21, 5009, 575, 1376, 1380, 10710, 9043, 6974, 1114, 13868, 11454, 5619, 5018, 2]

// Module 13867 (NewMessagesTagListInput)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import intl4 from "intl" /* 1114 */;
import GlobalUtils from "GlobalUtils" /* 1380 */;
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 5018 */;
import makeUserListPillDataDefault from "makeUserListPillData" /* 10710 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1384 */;
import createStyles_mod from "createStyles" /* 5009 */;
import PlatformUtils from "PlatformUtils" /* 1376 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let num;
let obj2;
let obj3;
let obj4;
const View = react_native.View;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { searchBarContainer: obj2, header: obj3, showSearchButton: obj4 };
obj2 = { paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_8, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
createStyles = createStyles.createStyles;
obj3 = { marginLeft: nativeDefault.space.PX_12, marginBottom: num };
num = 0;
if (PlatformUtils.isAndroid()) {
  num = 2;
}
obj4 = { marginHorizontal: nativeDefault.space.PX_12 };
let closure_7 = createStyles(obj);
const memoResult = react.memo(function NewMessagesTagListInput(forceSearchResults) {
  let autoFocus;
  let hasQuery;
  let intl2;
  let intl3;
  let onChangeText;
  let onFocus;
  let onForceSearchResults;
  let selectedUserIds;
  let tagListInputRef;
  let tmp2Result;
  ({ onSelectUser: require, selectedUserIds } = forceSearchResults);
  ({ autoFocus, onChangeText, onFocus, hasQuery, onForceSearchResults, tagListInputRef } = forceSearchResults);
  const tmp = closure_7();
  let items = [selectedUserIds];
  const memo = react.useMemo(() => {
    let items = selectedUserIds;
    if (selectedUserIds == null) {
      items = [];
    }
    const mapped = items.map(UserStore.getUser);
    const found = mapped.filter(GlobalUtils.isNotNullish);
    return found.map(makeUserListPillDataDefault);
  }, items);
  ({
    autoFocus,
    focusOnAdd: true,
    footer: tmp2Result,
    icon: null,
    onChangeText,
    onFocus,
    onRemove(arg0) {
      const user = UserStore.getUser(tmp.id);
      if (null != user) {
        require(user);
        const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
        const announce = AccessibilityAnnouncer.announce;
        const intl = intl4.intl;
        const obj = { text: memo[arg0].text };
        announce(intl.formatToPlainString(intl4.t.srlxB8, obj));
      }
    },
    placeholder: intl3.string(require("intl").t.CaEER6),
    tags: memo,
    ref: tagListInputRef
  });
  tmp2Result = null;
  selectedUserIds(memo[9]);
  if (!hasQuery) {
    tmp2Result = null;
    if (memo.length > 0) {
      let stringResult;
      const PressableOpacity = require("Pressables").PressableOpacity;
      let intl = require("intl").intl;
      const string = intl.string;
      const t = require("intl").t;
      if (forceSearchResults.forceSearchResults) {
        stringResult = string(t["4wv+DE"]);
      } else {
        stringResult = string(t.fTcQm2);
      }
      const obj3 = { accessibilityRole: "button", accessibilityLabel: stringResult, onPress: onForceSearchResults, style: tmp.showSearchButton, children: null };
      if (forceSearchResults.forceSearchResults) {
        let CirclePlusIcon = tmp7(tmp4[12]).ChevronLargeRightIcon;
      } else {
        CirclePlusIcon = tmp7(tmp4[13]).CirclePlusIcon;
      }
      tmp2Result = tmp2(PressableOpacity, obj3);
    }
  }
  ({ style: tmp.header, variant: "text-sm/medium", color: "text-muted", accessible: false, children: intl2.string(require("intl").t.kHyiXs) });
  const Text = require("Text/Text").Text;
  intl2 = require("intl").intl;
  intl3 = require("intl").intl;
  return <tmp3 style={tmp.searchBarContainer}>{null}</tmp3>;
});
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/NewMessagesTagListInput.tsx");

export default memoResult;
