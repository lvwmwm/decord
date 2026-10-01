// Module ID: 15730
// Function ID: 15731
// Name: MessagesItemAddFriendsWidget
// Dependencies: [5, 19, 17, 1074, 21, 12830, 576, 4836, 7826, 4527, 1115, 9275, 7178, 4693, 5435, 4832, 13399, 15731, 2]

// Module 15730 (MessagesItemAddFriendsWidget)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import intl5 from "intl" /* 1115 */;
import RootNavigationRef from "RootNavigationRef" /* 4693 */;
import Text_Text from "Text/Text" /* 4832 */;
import Pressables from "Pressables" /* 5435 */;
import InstantInviteActionCreatorsDefault from "InstantInviteActionCreators" /* 7826 */;
import IconActionButton from "IconActionButton" /* 12830 */;
import AssetRegistryDefault from "AssetRegistry" /* 13399 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 15731 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const IconActionButtonDefault = IconActionButton;
let c2, c4, c5;

let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
let obj5;
function getFriendInviteCode() {
  return obj(...arguments);
}
let obj = function _getFriendInviteCode() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let obj4;
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      let c3;
      try {
        let code;
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_1 = tmp;
            let closure_0 = tmp4;
            code = undefined;
            c3 = 1;
            c4 = 2;
            c5 = 1;
            const obj5 = { value: obj4.createFriendInvite(null, constants.ADD_FRIENDS_WIDGET), done: false };
            obj4 = InstantInviteActionCreatorsDefault;
            return obj5;
          }
        } else if (1 === c4) {
          c3 = 0;
          const presentError = closure_129_0(closure_129_2[9]).presentError;
          const tmp11 = closure_129_0(closure_129_2[9]);
          const intl = closure_129_0(closure_129_2[10]).intl;
          presentError(intl.string(closure_129_0(closure_129_2[10]).t.R0RpRX));
          c5 = 3;
          const obj6 = { value: undefined, done: true };
          return obj6;
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          c5 = 3;
          const obj7 = { value, done: true };
          return obj7;
        } else {
          code = value.code;
          c3 = 0;
          c5 = 3;
          obj = { value: code, done: true };
          return obj;
        }
      } catch (tmp18) {
        let closure_2 = tmp18;
        if (0 === c3) {
          c5 = 3;
          throw tmp18;
        } else {
          c4 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
function handleShare() {
  return obj(...arguments);
}
obj = function _handleShare() {
  obj = _asyncToGenerator(async (arg0, value) => {
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        let closure_0;
        c3 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_1 = tmp4;
            closure_0 = undefined;
            c2 = 1;
            c3 = 1;
            const obj4 = { value: getFriendInviteCode(), done: false };
            return obj4;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_0 = value;
          const tmp14 = closure_129_0(closure_129_2[11]);
          const handleOpenShareSheet = tmp14.handleOpenShareSheet;
          const intl = closure_129_0(closure_129_2[10]).intl;
          const formatToPlainString = intl.formatToPlainString;
          const obj5 = { link: closure_129_1(closure_129_2[12])(closure_0) };
          const PJf9P9 = closure_129_0(closure_129_2[10]).t.PJf9P9;
          handleOpenShareSheet(closure_0, null, formatToPlainString(PJf9P9, obj5), closure_129_6.ADD_FRIENDS_WIDGET);
          c3 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp6) {
        c3 = 3;
        throw tmp6;
      }
    }
  });
  return obj(...arguments);
};
function handleLink() {
  return obj(...arguments);
}
obj = function _handleLink() {
  obj = _asyncToGenerator(async (arg0, value) => {
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        let closure_0;
        c3 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_1 = tmp4;
            closure_0 = undefined;
            c2 = 1;
            c3 = 1;
            const obj4 = { value: getFriendInviteCode(), done: false };
            return obj4;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          closure_0 = value;
          obj = closure_129_0(closure_129_2[11]);
          obj.handleCopy(closure_0, null, closure_129_6.ADD_FRIENDS_WIDGET);
          c3 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp14) {
        c3 = 3;
        throw tmp14;
      }
    }
  });
  return obj(...arguments);
};
const View = react_native.View;
const InstantInviteSources = Constants.InstantInviteSources;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
const sum = IconActionButton.ICON_ACTION_BUTTON_SIZE + nativeDefault.space.PX_16;
let createStyles = createStyles_mod;
obj = { container: obj2, title: obj3, actions: obj4, actionIcon: obj5 };
obj2 = { height: sum, paddingHorizontal: nativeDefault.space.PX_8, justifyContent: "space-between", flexDirection: "row", alignItems: "center" };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", alignItems: "center", borderRadius: nativeDefault.radii.md, paddingHorizontal: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_12 };
obj4 = { paddingHorizontal: nativeDefault.space.PX_8, flexDirection: "row", justifyContent: "flex-end" };
obj5 = { marginEnd: 0, marginStart: nativeDefault.space.PX_8 };
let closure_9 = createStyles(obj);
const memoResult = react.memo(function MessagesItemAddFriendsWidget() {
  let Text;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items;
  let items1;
  let obj3;
  const tmp = closure_9();
  obj = { style: tmp.container, collapsable: false, children: items };
  const callback = react.useCallback(() => {
    obj = RootNavigationRef;
    const rootNavigationRef = obj.getRootNavigationRef();
    if (rootNavigationRef != null) {
      const current = rootNavigationRef.current;
      if (current != null) {
        const obj2 = { screen: "add-friends", params: { sourcePage: "Add Friends Widget", presentation: "card" } };
        current.navigate("friends", obj2);
      }
    }
  }, []);
  let obj2 = { accessibilityLabel: intl.string(intl5.t.afcl67), accessibilityRole: "button", onPress: callback, style: tmp.title, children: metroImportDefault(Text, obj3) };
  const PressableHighlight = Pressables.PressableHighlight;
  intl = intl5.intl;
  obj3 = { variant: "text-md/semibold", color: "text-default", lineClamp: 1, maxFontSizeMultiplier: 2, children: intl2.string(intl5.t.afcl67) };
  Text = Text_Text.Text;
  intl2 = intl5.intl;
  items = [metroImportDefault(PressableHighlight, obj2), ];
  const obj4 = { style: tmp.actions, children: items1 };
  const obj5 = { style: tmp.actionIcon, variant: "filled", source: AssetRegistryDefault, onPress: handleShare, accessibilityLabel: intl3.string(intl5.t.Ej3B3Y) };
  const tmp3 = IconActionButtonDefault;
  intl3 = intl5.intl;
  items1 = [metroImportDefault(tmp3, obj5), ];
  const obj6 = { style: tmp.actionIcon, variant: "filled", source: AssetRegistryDefault2, onPress: handleLink, accessibilityLabel: intl4.string(intl5.t.WqhZss) };
  const tmp4 = IconActionButtonDefault;
  intl4 = intl5.intl;
  items1[1] = metroImportDefault(tmp4, obj6);
  items[1] = metroImportAll(View, obj4);
  return metroImportAll(View, obj);
});
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/items/MessagesItemAddFriendsWidget.tsx");

export default memoResult;
export const MESSAGES_ITEM_ADD_FRIENDS_WIDGET_HEIGHT = sum;
