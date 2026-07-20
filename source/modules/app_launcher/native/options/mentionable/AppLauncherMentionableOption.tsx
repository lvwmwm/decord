// Module ID: 11284
// Function ID: 87821
// Name: MentionableIcon
// Dependencies: []
// Exports: default

// Module 11284 (MentionableIcon)
function MentionableIcon(mentionable) {
  mentionable = mentionable.mentionable;
  let obj = arg1(dependencyMap[9]);
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  obj = {};
  const tmp = callback2();
  obj.icon = jsx(arg1(dependencyMap[11]).UserCircleIcon, {});
  obj.wrapperStyle = tmp.iconWrapper;
  const tmp4 = jsx(importDefault(dependencyMap[10]), obj);
  if (null == mentionable) {
    return tmp4;
  } else {
    const type = mentionable.type;
    if (arg1(dependencyMap[12]).MentionableItemTypes.USER === type) {
      obj = { user: mentionable.result.user, guildId: mentionable.guildId, animate: !stateFromStores, size: arg1(dependencyMap[13]).AvatarSizes.REFRESH_MEDIUM_32 };
      return jsx(arg1(dependencyMap[13]).Avatar, obj);
    } else if (arg1(dependencyMap[12]).MentionableItemTypes.ROLE === type) {
      const obj1 = { role: mentionable.result };
      return jsx(arg1(dependencyMap[14]).RoleIcon, obj1);
    } else {
      const GLOBAL = arg1(dependencyMap[12]).MentionableItemTypes.GLOBAL;
      return tmp4;
    }
  }
  const tmp3 = importDefault(dependencyMap[10]);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
const StatusTypes = arg1(dependencyMap[5]).StatusTypes;
const jsx = arg1(dependencyMap[6]).jsx;
let obj = arg1(dependencyMap[7]);
obj = {};
obj = { backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_MOD_SUBTLE };
obj.iconWrapper = obj;
let closure_10 = obj.createStyles(obj);
const result = arg1(dependencyMap[20]).fileFinishedImporting("modules/app_launcher/native/options/mentionable/AppLauncherMentionableOption.tsx");

export default function AppLauncherMentionableOption(option) {
  let autoFocus;
  let channel;
  let hasError;
  let style;
  option = option.option;
  const arg1 = option;
  const initialValue = option.initialValue;
  const importDefault = initialValue;
  const onMentionablePress = option.onMentionablePress;
  const dependencyMap = onMentionablePress;
  ({ onActionSheetDismiss: closure_3, channel } = option);
  const React = channel;
  const onPress = option.onPress;
  const guild_id = channel.guild_id;
  let closure_6 = guild_id;
  ({ style, autoFocus, hasError } = option);
  const tmp = callback(React.useState(() => {
    if (null != initialValue) {
      if ("roleMention" === initialValue.type) {
        const role = guild_id.getRole(guild_id, initialValue.roleId);
        if (null != role) {
          let obj = { type: option(onMentionablePress[12]).MentionableItemTypes.ROLE, result: role };
          return obj;
        }
      } else if ("userMention" === initialValue.type) {
        const user = first.getUser(initialValue.userId);
        if (null != user) {
          obj = { type: option(onMentionablePress[12]).MentionableItemTypes.USER };
          obj = { user, score: 0, status: constants.UNKNOWN, nick: "" };
          obj.result = obj;
          return obj;
        }
      } else if ("textMention" === initialValue.type) {
        const obj1 = { type: option(onMentionablePress[12]).MentionableItemTypes.GLOBAL };
        const obj2 = {};
        ({ text: obj5.text, text: obj5.test } = initialValue);
        obj2.description = "";
        obj1.result = obj2;
        return obj1;
      }
    }
    return null;
  }), 2);
  const first = tmp[0];
  let closure_7 = first;
  let closure_8 = tmp[1];
  const items = [onMentionablePress, option.name, initialValue, first];
  const effect = React.useEffect(() => {
    let tmp = null != initialValue;
    if (tmp) {
      tmp = null == first;
    }
    if (tmp) {
      const obj = { mentionable: null };
      onMentionablePress(obj);
    }
  }, items);
  const items1 = [first, guild_id];
  const memo = React.useMemo(() => {
    if (null == first) {
      return null;
    } else {
      const type = first.type;
      if (option(onMentionablePress[12]).MentionableItemTypes.USER === type) {
        const obj = { guildId: guild_id, user: first.result.user };
        return callback(initialValue(onMentionablePress[15]), obj);
      } else if (option(onMentionablePress[12]).MentionableItemTypes.ROLE === type) {
        return first.result.name;
      } else if (option(onMentionablePress[12]).MentionableItemTypes.GLOBAL === type) {
        return first.result.text;
      }
    }
  }, items1);
  const obj = { style, option, hasError, selected: null != first };
  let tmp7;
  if (null != first) {
    tmp7 = memo;
  }
  obj.selectedItemName = tmp7;
  obj.leading = <MentionableIcon mentionable={first} guildId={guild_id} />;
  obj.onPress = function onPress() {
    if (null != onPress) {
      onPress();
    }
    let obj = initialValue(onMentionablePress[17]);
    obj = {
      option,
      channel,
      onMentionablePress(mentionable) {
        mentionable = mentionable.mentionable;
        callback2(mentionable);
        callback({ mentionable });
      },
      onActionSheetDismiss: closure_3
    };
    obj.openLazy(option(onMentionablePress[19])(onMentionablePress[18], onMentionablePress.paths), option(onMentionablePress[12]).APP_LAUNCHER_MENTIONABLE_LIST_ACTION_SHEET_KEY, obj);
  };
  obj.autoFocus = autoFocus;
  return jsx(importDefault(dependencyMap[16]), obj);
};
