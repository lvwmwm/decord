// Module ID: 11660
// Function ID: 11661
// Name: AppLauncherMentionableOption
// Dependencies: [32, 19, 4825, 2102, 1372, 1085, 21, 4836, 576, 504, 11661, 10378, 11662, 1177, 11663, 11664, 11658, 4800, 11662, 1981, 2]
// Exports: default

// Module 11660 (AppLauncherMentionableOption)
import Fragment from "Fragment" /* 21 */;
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1085 */;
import native from "native" /* 1177 */;
import asyncRequire from "asyncRequire" /* 1981 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import AppLauncherOptionIconDefault from "AppLauncherOptionIcon" /* 11661 */;
import AppLauncherMentionableListActionSheet from "AppLauncherMentionableListActionSheet" /* 11662 */;
import AppLauncherRoleListActionSheet from "AppLauncherRoleListActionSheet" /* 11663 */;
import UsernameTextDefault from "UsernameText" /* 11664 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4825 */;
import GuildRoleStore from "GuildRoleStore" /* 2102 */;
import UserStore from "UserStore" /* 1372 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let obj2;
function MentionableIcon(mentionable) {
  let useReducedMotion;
  mentionable = mentionable.mentionable;
  const guildId = mentionable.guildId;
  const items = [AccessibilityStore];
  const tmp = closure_10();
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  AppLauncherOptionIconDefault;
  const tmp7 = <tmp6 icon={null} wrapperStyle={tmp.iconWrapper} />;
  if (null == mentionable) {
    return tmp7;
  } else {
    const type = mentionable.type;
    if (AppLauncherMentionableListActionSheet.MentionableItemTypes.USER === type) {
      const Avatar = tmp2(1177).Avatar;
      return <Avatar user={mentionable.result.user} guildId={guildId} animate={!stateFromStores} size={native.AvatarSizes.REFRESH_MEDIUM_32} />;
    } else if (AppLauncherMentionableListActionSheet.MentionableItemTypes.ROLE === type) {
      return jsx(AppLauncherRoleListActionSheet.RoleIcon, { role: mentionable.result });
    } else {
      const GLOBAL = tmp2(11662).MentionableItemTypes.GLOBAL;
      return tmp7;
    }
  }
}
const StatusTypes = Constants.StatusTypes;
const jsx = Fragment.jsx;
let obj = { iconWrapper: obj2 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
let closure_10 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/app_launcher/native/options/mentionable/AppLauncherMentionableOption.tsx");

export default function AppLauncherMentionableOption(option) {
  let autoFocus;
  let channel;
  let closure_8;
  let hasError;
  let mentionable;
  let onActionSheetDismiss;
  let style;
  let tmp7;
  option = option.option;
  const initialValue = option.initialValue;
  const onMentionablePress = option.onMentionablePress;
  ({ onActionSheetDismiss: _slicedToArray, channel } = option);
  const onPress = option.onPress;
  mentionable = undefined;
  closure_8 = undefined;
  const guild_id = channel.guild_id;
  ({ style, autoFocus, hasError } = option);
  [mentionable, closure_8] = channel.useState(() => {
    let obj9;
    if (null != initialValue) {
      if ("roleMention" === initialValue.type) {
        const role = GuildRoleStore.getRole(guild_id, tmp.roleId);
        if (null != role) {
          const obj2 = { type: AppLauncherMentionableListActionSheet.MentionableItemTypes.ROLE, result: role };
          return obj2;
        }
      } else if ("userMention" === initialValue.type) {
        const user = UserStore.getUser(tmp.userId);
        if (null != user) {
          const obj = { type: AppLauncherMentionableListActionSheet.MentionableItemTypes.USER, result: obj3 };
          return obj;
        }
      } else if ("textMention" === initialValue.type) {
        const obj4 = { type: AppLauncherMentionableListActionSheet.MentionableItemTypes.GLOBAL, result: obj9 };
        obj9 = { text: null, test: null, description: "" };
        ({ text: obj5.text, text: obj5.test } = initialValue);
        return obj4;
      }
    }
    return null;
  });
  const items = [onMentionablePress, option.name, initialValue, mentionable];
  const effect = channel.useEffect(() => {
    const tmp = null != initialValue && null == first;
    if (tmp) {
      onMentionablePress({ mentionable: null });
    }
  }, items);
  const items1 = [mentionable, guild_id];
  const memo = channel.useMemo(() => {
    if (null == first) {
      return null;
    } else {
      const type = tmp.type;
      if (AppLauncherMentionableListActionSheet.MentionableItemTypes.USER === type) {
        return jsx(UsernameTextDefault, { guildId: guild_id, user: first.result.user });
      } else if (AppLauncherMentionableListActionSheet.MentionableItemTypes.ROLE === type) {
        return first.result.name;
      } else if (AppLauncherMentionableListActionSheet.MentionableItemTypes.GLOBAL === type) {
        return first.result.text;
      }
    }
  }, items1);
  let obj = {
    style,
    option,
    hasError,
    selected: null != mentionable,
    selectedItemName: tmp7,
    leading: tmp5(MentionableIcon, { mentionable, guildId: guild_id }),
    onPress() {
      if (onPress != null) {
        tmp();
      }
      const openLazy = ActionSheetActionCreatorsDefault.openLazy;
      ActionSheetActionCreatorsDefault;
      const obj = {
        option,
        channel,
        onMentionablePress(mentionable) {
          mentionable = mentionable.mentionable;
          closure_1_8(mentionable);
          onMentionablePress({ mentionable });
        },
        onActionSheetDismiss: _slicedToArray
      };
      const tmp4 = asyncRequire(11662, dependencyMap.paths);
      openLazy(tmp4, AppLauncherMentionableListActionSheet.APP_LAUNCHER_MENTIONABLE_LIST_ACTION_SHEET_KEY, obj);
    },
    autoFocus
  };
  tmp7 = undefined;
  const tmp6 = initialValue(onMentionablePress[16]);
  if (null != mentionable) {
    tmp7 = memo;
  }
  return jsx(tmp6, obj);
};
