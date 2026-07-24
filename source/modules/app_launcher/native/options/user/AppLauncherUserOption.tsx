// Module ID: 11336
// Function ID: 88202
// Name: AppLauncherUserOption
// Dependencies: [57, 31, 4122, 33, 4130, 689, 566, 11328, 1820, 4098, 11337, 1934, 11337, 1273, 11331, 7607, 11334, 4126, 2]
// Exports: default

// Module 11336 (AppLauncherUserOption)
import _slicedToArray from "_slicedToArray";
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_SUBTLE };
_createForOfIteratorHelperLoose.iconWrapper = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/app_launcher/native/options/user/AppLauncherUserOption.tsx");

export default function AppLauncherUserOption(option) {
  let _createForOfIteratorHelperLoose;
  let autoFocus;
  let channel;
  let _slicedToArray;
  let dependencyMap;
  let hasError;
  let importDefault;
  let style;
  let tmp6;
  option = option.option;
  ({ initialValue: importDefault, onUserPress: dependencyMap, onActionSheetDismiss: _slicedToArray, channel } = option);
  const onPress = option.onPress;
  ({ style, autoFocus, hasError } = option);
  const guild_id = channel.guild_id;
  let obj = option(566);
  const items = [onPress];
  const stateFromStores = obj.useStateFromStores(items, () => onPress.useReducedMotion);
  const tmp3 = callback(channel.useState(() => {
    let userId = null;
    if (null != closure_1) {
      userId = null;
      if ("userMention" === closure_1.type) {
        userId = closure_1.userId;
      }
    }
    return userId;
  }), 2);
  const first = tmp3[0];
  const jsx = tmp3[1];
  const tmp = _createForOfIteratorHelperLoose();
  [tmp6, _createForOfIteratorHelperLoose] = callback(channel.useState(null), 2);
  obj = { style, option, hasError };
  let tmp9 = null != tmp6;
  const tmp5 = callback(channel.useState(null), 2);
  const tmp7 = jsx;
  if (!tmp9) {
    tmp9 = null != first;
  }
  obj.selected = tmp9;
  obj.onPress = function onPress() {
    if (null != onPress) {
      onPress();
    }
    let obj = option(outer1_2[8]);
    const result = obj.dismissGlobalKeyboard();
    const obj2 = outer1_1(outer1_2[9]);
    obj = {
      option,
      channel,
      onUserPress(user) {
        user = user.user;
        if ("string" === typeof user) {
          outer1_6(user);
        } else {
          outer1_6(user.id);
          outer1_7(user);
        }
        outer1_2({ user });
      },
      onActionSheetDismiss: _slicedToArray
    };
    obj2.openLazy(option(outer1_2[11])(outer1_2[10], outer1_2.paths), option(outer1_2[12]).APP_LAUNCHER_USER_LIST_ACTION_SHEET_KEY, obj);
  };
  if (null != tmp6) {
    obj = { user: tmp6, guildId: guild_id, animate: !stateFromStores, size: option(1273).AvatarSizes.REFRESH_MEDIUM_32 };
    let tmp15 = jsx(option(1273).Avatar, { user: tmp6, guildId: guild_id, animate: !stateFromStores, size: option(1273).AvatarSizes.REFRESH_MEDIUM_32 });
  } else {
    const obj1 = { icon: jsx(option(7607).UserCircleIcon, { size: "sm", color: "interactive-text-default" }), wrapperStyle: tmp.iconWrapper };
    tmp15 = jsx(importDefault(11331), { icon: jsx(option(7607).UserCircleIcon, { size: "sm", color: "interactive-text-default" }), wrapperStyle: tmp.iconWrapper });
    const tmp13 = importDefault(11331);
  }
  obj.leading = tmp15;
  if (null != tmp6) {
    let obj2 = { guildId: guild_id, user: tmp6 };
    let tmp19 = jsx(importDefault(11334), { guildId: guild_id, user: tmp6 });
  } else {
    tmp19 = null;
    if (null != first) {
      const obj3 = { variant: "text-md/medium", color: "text-default", children: first };
      tmp19 = jsx(option(4126).Text, { variant: "text-md/medium", color: "text-default", children: first });
    }
  }
  obj.selectedItemName = tmp19;
  obj.autoFocus = autoFocus;
  return tmp7(importDefault(11328), obj);
};
