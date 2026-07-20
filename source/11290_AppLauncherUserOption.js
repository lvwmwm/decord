// Module ID: 11290
// Function ID: 87864
// Name: AppLauncherUserOption
// Dependencies: []
// Exports: default

// Module 11290 (AppLauncherUserOption)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
const jsx = arg1(dependencyMap[3]).jsx;
let obj = arg1(dependencyMap[4]);
obj = {};
obj = { backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_MOD_SUBTLE };
obj.iconWrapper = obj;
let closure_7 = obj.createStyles(obj);
const result = arg1(dependencyMap[18]).fileFinishedImporting("modules/app_launcher/native/options/user/AppLauncherUserOption.tsx");

export default function AppLauncherUserOption(option) {
  let autoFocus;
  let channel;
  let hasError;
  let style;
  let tmp6;
  option = option.option;
  const arg1 = option;
  ({ initialValue: closure_1, onUserPress: closure_2, onActionSheetDismiss: closure_3, channel } = option);
  const React = channel;
  const onPress = option.onPress;
  ({ style, autoFocus, hasError } = option);
  const guild_id = channel.guild_id;
  let obj = arg1(dependencyMap[6]);
  const items = [onPress];
  const stateFromStores = obj.useStateFromStores(items, () => onPress.useReducedMotion);
  const tmp3 = callback(React.useState(() => {
    let userId = null;
    if (null != lib) {
      userId = null;
      if ("userMention" === lib.type) {
        userId = lib.userId;
      }
    }
    return userId;
  }), 2);
  const first = tmp3[0];
  const jsx = tmp3[1];
  const tmp = callback2();
  [tmp6, closure_7] = callback(React.useState(null), 2);
  obj = { style, option, hasError };
  let tmp9 = null != tmp6;
  const tmp5 = callback(React.useState(null), 2);
  const tmp7 = jsx;
  if (!tmp9) {
    tmp9 = null != first;
  }
  obj.selected = tmp9;
  obj.onPress = function onPress() {
    if (null != onPress) {
      onPress();
    }
    let obj = option(paths[8]);
    const result = obj.dismissGlobalKeyboard();
    const obj2 = lib(paths[9]);
    obj = {
      option,
      channel,
      onUserPress(user) {
        user = user.user;
        if ("string" === typeof user) {
          callback2(user);
        } else {
          callback2(user.id);
          callback3(user);
        }
        callback({ user });
      },
      onActionSheetDismiss: closure_3
    };
    obj2.openLazy(option(paths[11])(paths[10], paths.paths), option(paths[12]).APP_LAUNCHER_USER_LIST_ACTION_SHEET_KEY, obj);
  };
  if (null != tmp6) {
    obj = { user: tmp6, guildId: guild_id, animate: !stateFromStores, size: arg1(dependencyMap[13]).AvatarSizes.REFRESH_MEDIUM_32 };
    let tmp15 = jsx(arg1(dependencyMap[13]).Avatar, obj);
  } else {
    const obj1 = { icon: jsx(arg1(dependencyMap[15]).UserCircleIcon, {}), wrapperStyle: tmp.iconWrapper };
    tmp15 = jsx(importDefault(dependencyMap[14]), obj1);
    const tmp13 = importDefault(dependencyMap[14]);
  }
  obj.leading = tmp15;
  if (null != tmp6) {
    const obj2 = { guildId: guild_id, user: tmp6 };
    let tmp19 = jsx(importDefault(dependencyMap[16]), obj2);
  } else {
    tmp19 = null;
    if (null != first) {
      const obj3 = { children: first };
      tmp19 = jsx(arg1(dependencyMap[17]).Text, obj3);
    }
  }
  obj.selectedItemName = tmp19;
  obj.autoFocus = autoFocus;
  return tmp7(importDefault(dependencyMap[7]), obj);
};
