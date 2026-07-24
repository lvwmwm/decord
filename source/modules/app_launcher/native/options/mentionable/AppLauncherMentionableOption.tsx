// Module ID: 11330
// Function ID: 88159
// Name: MentionableIcon
// Dependencies: [57, 31, 4122, 1910, 1849, 482, 33, 4130, 689, 566, 11331, 7607, 11332, 1273, 11333, 11334, 11328, 4098, 11332, 1934, 2]
// Exports: default

// Module 11330 (MentionableIcon)
import _slicedToArray from "_slicedToArray";
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_createForOfIteratorHelperLoose";
import closure_7 from "_isNativeReflectConstruct";
import { StatusTypes } from "sum";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
function MentionableIcon(mentionable) {
  mentionable = mentionable.mentionable;
  let obj = require(566) /* initialize */;
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_5.useReducedMotion);
  obj = {};
  const tmp = _createForOfIteratorHelperLoose();
  obj.icon = jsx(require(7607) /* UserCircleIcon */.UserCircleIcon, { size: "sm", color: "interactive-text-default" });
  obj.wrapperStyle = tmp.iconWrapper;
  const tmp4 = jsx(importDefault(11331), {});
  if (null == mentionable) {
    return tmp4;
  } else {
    const type = mentionable.type;
    if (require(11332) /* AppLauncherMentionableListActionSheet */.MentionableItemTypes.USER === type) {
      obj = { user: mentionable.result.user, guildId: mentionable.guildId, animate: !stateFromStores, size: require(1273) /* Button */.AvatarSizes.REFRESH_MEDIUM_32 };
      return jsx(require(1273) /* Button */.Avatar, { user: mentionable.result.user, guildId: mentionable.guildId, animate: !stateFromStores, size: require(1273) /* Button */.AvatarSizes.REFRESH_MEDIUM_32 });
    } else if (require(11332) /* AppLauncherMentionableListActionSheet */.MentionableItemTypes.ROLE === type) {
      const obj1 = { role: mentionable.result };
      return jsx(require(11333) /* getRoleColor */.RoleIcon, { role: mentionable.result });
    } else {
      const GLOBAL = require(11332) /* AppLauncherMentionableListActionSheet */.MentionableItemTypes.GLOBAL;
      return tmp4;
    }
  }
  const tmp3 = importDefault(11331);
}
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_SUBTLE };
_createForOfIteratorHelperLoose.iconWrapper = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/app_launcher/native/options/mentionable/AppLauncherMentionableOption.tsx");

export default function AppLauncherMentionableOption(option) {
  let autoFocus;
  let channel;
  let _slicedToArray;
  let hasError;
  let style;
  option = option.option;
  const initialValue = option.initialValue;
  const onMentionablePress = option.onMentionablePress;
  ({ onActionSheetDismiss: _slicedToArray, channel } = option);
  const onPress = option.onPress;
  const guild_id = channel.guild_id;
  ({ style, autoFocus, hasError } = option);
  let tmp = callback(channel.useState(() => {
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
  let closure_8 = tmp[1];
  const items = [onMentionablePress, option.name, initialValue, first];
  const effect = channel.useEffect(() => {
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
  const memo = channel.useMemo(() => {
    if (null == first) {
      return null;
    } else {
      const type = first.type;
      if (option(onMentionablePress[12]).MentionableItemTypes.USER === type) {
        const obj = { guildId: guild_id, user: first.result.user };
        return outer1_9(initialValue(onMentionablePress[15]), obj);
      } else if (option(onMentionablePress[12]).MentionableItemTypes.ROLE === type) {
        return first.result.name;
      } else if (option(onMentionablePress[12]).MentionableItemTypes.GLOBAL === type) {
        return first.result.text;
      }
    }
  }, items1);
  let obj = { style, option, hasError, selected: null != first };
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
        outer1_8(mentionable);
        outer1_2({ mentionable });
      },
      onActionSheetDismiss: _slicedToArray
    };
    obj.openLazy(option(onMentionablePress[19])(onMentionablePress[18], onMentionablePress.paths), option(onMentionablePress[12]).APP_LAUNCHER_MENTIONABLE_LIST_ACTION_SHEET_KEY, obj);
  };
  obj.autoFocus = autoFocus;
  return jsx(initialValue(onMentionablePress[16]), { style, option, hasError, selected: null != first });
};
