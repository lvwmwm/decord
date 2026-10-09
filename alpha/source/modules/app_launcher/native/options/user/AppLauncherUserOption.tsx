// Module ID: 11846
// Function ID: 11847
// Name: AppLauncherUserOption
// Dependencies: [32, 19, 5080, 21, 5091, 587, 504, 11838, 1894, 5055, 11847, 2000, 11847, 1200, 11842, 10252, 11844, 5087, 2]
// Exports: default

// Module 11846 (AppLauncherUserOption)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 587 */;
import KeyboardManagerUtils from "KeyboardManagerUtils" /* 1894 */;
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5055 */;
import AppLauncherSelectOptionFormRowDefault from "AppLauncherSelectOptionFormRow" /* 11838 */;
import AppLauncherOptionIconDefault from "AppLauncherOptionIcon" /* 11842 */;
import AppLauncherUserListActionSheet from "AppLauncherUserListActionSheet" /* 11847 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5080 */;
import createStyles from "createStyles" /* 5091 */;
import size from "module_2" /* 2 */;

let obj2;
let jsx = Fragment.jsx;
let obj = { iconWrapper: obj2 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
let closure_7 = createStyles.createStyles(obj);
let result = size.fileFinishedImporting("modules/app_launcher/native/options/user/AppLauncherUserOption.tsx");

export default function AppLauncherUserOption(option) {
  let autoFocus;
  let c6;
  let c7;
  let channel;
  let hasError;
  let onActionSheetDismiss;
  let style;
  let tmp12;
  let tmp6;
  let tmp8;
  let tmp9Result;
  let tmp9Result2;
  option = option.option;
  ({ initialValue: importDefault, onUserPress: dependencyMap, onActionSheetDismiss: _slicedToArray, channel } = option);
  const onPress = option.onPress;
  jsx = undefined;
  c7 = undefined;
  ({ style, autoFocus, hasError } = option);
  const guild_id = channel.guild_id;
  const tmp = c7();
  let obj = option(504);
  const items = [onPress];
  const stateFromStores = obj.useStateFromStores(items, () => onPress.useReducedMotion);
  let tmp5 = _slicedToArray(channel.useState(() => {
    let userId = null;
    if (null != importDefault) {
      userId = null;
      if ("userMention" === importDefault.type) {
        userId = tmp.userId;
      }
    }
    return userId;
  }), 2);
  [tmp6, c6] = tmp5;
  [tmp8, c7] = _slicedToArray(channel.useState(null), 2);
  let obj2 = {
    style,
    option,
    hasError,
    selected: tmp12,
    onPress: function handleRowPress() {
      if (onPress != null) {
        tmp();
      }
      const obj = KeyboardManagerUtils;
      const result = obj.dismissGlobalKeyboard();
      const openLazy = ActionSheetActionCreatorsDefault.openLazy;
      const obj2 = {
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
        onActionSheetDismiss: _slicedToArray
      };
      const tmp5 = asyncRequire(11847, dependencyMap.paths);
      openLazy(tmp5, AppLauncherUserListActionSheet.APP_LAUNCHER_USER_LIST_ACTION_SHEET_KEY, obj2);
    },
    leading: tmp9Result,
    selectedItemName: tmp9Result2,
    autoFocus
  };
  tmp12 = null != tmp8;
  const tmp7 = _slicedToArray(channel.useState(null), 2);
  const tmp11 = AppLauncherSelectOptionFormRowDefault;
  if (!tmp12) {
    tmp12 = null != tmp6;
  }
  if (null != tmp8) {
    const obj3 = { user: tmp8, guildId: guild_id, animate: !stateFromStores, size: option(1200).AvatarSizes.REFRESH_MEDIUM_32 };
    const Avatar = tmp2(1200).Avatar;
    tmp9Result = tmp9(Avatar, obj3);
  } else {
    const obj4 = { icon: jsx(option(10252).UserCircleIcon, { size: "sm", color: "interactive-text-default" }), wrapperStyle: tmp.iconWrapper };
    const tmp10Result = AppLauncherOptionIconDefault;
    tmp9Result = tmp9(tmp10Result, obj4);
  }
  if (null != tmp8) {
    const obj5 = { guildId: guild_id, user: tmp8 };
    tmp9Result2 = tmp9(tmp10(11844), obj5);
  } else {
    tmp9Result2 = null;
    if (null != tmp6) {
      const obj6 = { variant: "text-md/medium", color: "text-default", children: tmp6 };
      tmp9Result2 = tmp9(tmp2(5087).Text, obj6);
    }
  }
  return jsx(tmp11, obj2);
};
