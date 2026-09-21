// Module ID: 12326
// Function ID: 12327
// Name: AppLauncherUserOption
// Dependencies: [32, 19, 4750, 21, 4758, 580, 504, 12318, 1879, 4725, 12327, 1984, 12327, 1181, 12322, 11222, 12324, 4754, 2]
// Exports: default

// Module 12326 (AppLauncherUserOption)
import nativeDefault from "native" /* 580 */;
import KeyboardManagerUtils from "KeyboardManagerUtils" /* 1879 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1984 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4725 */;
import AppLauncherSelectOptionFormRowDefault from "AppLauncherSelectOptionFormRow" /* 12318 */;
import AppLauncherUserListActionSheet from "AppLauncherUserListActionSheet" /* 12327 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4750 */;

require = fn;
let jsx = fn(21).jsx;
const createStyles = fn(4758);
let obj2 = { iconWrapper: { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE } };
let closure_7 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/app_launcher/native/options/user/AppLauncherUserOption.tsx");

export default function AppLauncherUserOption(option) {
  option = option.option;
  ({ initialValue: importDefault, onUserPress: dependencyMap, onActionSheetDismiss: _slicedToArray, channel } = option);
  const onPress = option.onPress;
  jsx = undefined;
  c7 = undefined;
  ({ style, autoFocus, hasError } = option);
  const guild_id = channel.guild_id;
  const tmp = c7();
  const items = [onPress];
  const stateFromStores = option(504).useStateFromStores(items, () => onPress.useReducedMotion);
  let obj = option(504);
  [tmp6, c6] = channel.useState(() => {
    let userId = null;
    if (null != importDefault) {
      userId = null;
      if ("userMention" === tmp.type) {
        userId = tmp.userId;
      }
    }
    return userId;
  });
  const tmp5 = _slicedToArray(channel.useState(() => {
    let userId = null;
    if (null != importDefault) {
      userId = null;
      if ("userMention" === tmp.type) {
        userId = tmp.userId;
      }
    }
    return userId;
  }), 2);
  [tmp8, c7] = channel.useState(null);
  let obj2 = { style, option, hasError, selected: null, onPress: null, leading: null, selectedItemName: null, autoFocus: null };
  let tmp12 = null != tmp8;
  const tmp7 = _slicedToArray(channel.useState(null), 2);
  if (!tmp12) {
    tmp12 = null != tmp6;
  }
  obj2.selected = tmp12;
  obj2.onPress = function onPress() {
    if (onPress != null) {
      tmp();
    }
    const result = KeyboardManagerUtils.dismissGlobalKeyboard();
    const obj2 = ActionSheetActionCreatorsDefault;
    obj2.openLazy(asyncRequireImpl(12327, dependencyMap.paths), AppLauncherUserListActionSheet.APP_LAUNCHER_USER_LIST_ACTION_SHEET_KEY, {
      option,
      channel,
      onUserPress(user) {
        user = user.user;
        if (typeof user === "string") {
          closure_1_6(user);
        } else {
          closure_1_6(user.id);
          closure_1_7(user);
        }
        closure_1_2({ user });
      },
      onActionSheetDismiss
    });
  };
  if (null != tmp8) {
    const obj3 = { user: tmp8, guildId: guild_id, animate: !stateFromStores, size: tmp2(1181).AvatarSizes.REFRESH_MEDIUM_32 };
    let tmp9Result = tmp9(tmp2(1181).Avatar, obj3);
  } else {
    const obj4 = { icon: tmp9(tmp2(11222).UserCircleIcon, { size: "sm", color: "interactive-text-default" }), wrapperStyle: tmp.iconWrapper };
    tmp9Result = tmp9(tmp10(12322), obj4);
    const tmp10Result = tmp10(12322);
  }
  obj2.leading = tmp9Result;
  if (null != tmp8) {
    const obj5 = { guildId: guild_id, user: tmp8 };
    let tmp9Result2 = tmp9(tmp10(12324), obj5);
  } else {
    tmp9Result2 = null;
    if (null != tmp6) {
      const obj6 = { variant: "text-md/medium", color: "text-default", children: tmp6 };
      tmp9Result2 = tmp9(tmp2(4754).Text, obj6);
    }
  }
  obj2.selectedItemName = tmp9Result2;
  obj2.autoFocus = autoFocus;
  return jsx(AppLauncherSelectOptionFormRowDefault, obj2);
};
