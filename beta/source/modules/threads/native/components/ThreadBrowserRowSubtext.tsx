// Module ID: 16538
// Function ID: 16539
// Name: ThreadBrowserRowSubtext
// Dependencies: [19, 17, 4825, 2108, 1372, 6724, 1074, 1085, 21, 4836, 576, 504, 7200, 5310, 5832, 4832, 1115, 4678, 6729, 5083, 11, 1177, 7313, 7403, 2]
// Exports: ThreadSubtext

// Module 16538 (ThreadBrowserRowSubtext)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import Constants2 from "Constants" /* 1085 */;
import native from "native" /* 1177 */;
import UserUtilsDefault from "UserUtils" /* 4678 */;
import Text_Text from "Text/Text" /* 4832 */;
import useMessageAuthorDefault from "useMessageAuthor" /* 5083 */;
import useHasEnhancedRoleColorsDefault from "useHasEnhancedRoleColors" /* 5310 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 5832 */;
import renderMessageMarkupDefault from "renderMessageMarkup" /* 7313 */;
import enhanced_role_colors_EnhancedRoleColorUtils from "enhanced_role_colors/EnhancedRoleColorUtils" /* 7403 */;
import react_mod from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4825 */;
import GuildMemberStore from "GuildMemberStore" /* 2108 */;
import UserStore from "UserStore" /* 1372 */;
import ThreadMessageStore from "ThreadMessageStore" /* 6724 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let dependencyMap, importDefault;

let c10;
let c9;
let obj2;
let size;
let unpackModuleId;
function MessageContent(arg0) {
  let Text;
  let c2;
  let c3;
  let c4;
  let closure_1;
  let intl;
  let message;
  let obj8;
  let obj9;
  let roleColor;
  let thread;
  ({ thread, message } = arg0);
  dependencyMap = undefined;
  c3 = undefined;
  c4 = undefined;
  let roleStyle;
  let tmp = closure_13();
  let obj = message(6729);
  items = [message.author.id];
  const subscribeGuildMembers = obj.useSubscribeGuildMembers({ [thread.guild_id]: items }, "ThreadBrowserRowSubtext");
  const items1 = [UserStore];
  const obj2 = message(504);
  const stateFromStores = obj2.useStateFromStores(items1, () => {
    let author = UserStore.getUser(message.author.id);
    const tmp = message;
    if (author == null) {
      author = tmp.author;
    }
    return author;
  });
  const items2 = [roleStyle];
  const obj3 = message(504);
  importDefault = obj3.useStateFromStores(items2, () => roleStyle.roleStyle);
  let tmp4 = useMessageAuthorDefault(message);
  ({ nick: c2, colorString: c3, colorStrings: c4 } = tmp4);
  const obj4 = SnowflakeUtilsDefault;
  const extractTimestampResult = obj4.extractTimestamp(message.id);
  const obj5 = message(7200);
  const timestampString = obj5.getTimestampString(extractTimestampResult);
  const obj6 = message(7200);
  const timestampAccessibilityLabel = obj6.getTimestampAccessibilityLabel(extractTimestampResult);
  roleStyle = useHasEnhancedRoleColorsDefault(thread.guild_id, stateFromStores.id);
  const obj7 = { user: stateFromStores, timestamp: timestampString, accessibilityLabel: timestampAccessibilityLabel, children: closure_9(Text, obj8) };
  obj8 = { lineClamp: 1, ellipsizeMode: "tail", lineBreakMode: "tail", style: tmp.subtextContent, variant: "text-sm/medium", color: "text-default", children: intl.format(message(1115).t.M79KAH, obj9) };
  Text = message(4832).Text;
  intl = message(1115).intl;
  obj9 = {
    usernameHook(arg0, arg1) {
      let tmp4;
      let tmp6;
      let tmp7;
      let str = c2;
      const tmp = React4;
      const tmp2 = Username;
      if (c2 == null) {
        str = "";
      }
      const obj = { nickname: str, usernameColor: tmp4, roleColor, roleColors: tmp6, shouldShowRoleDot: tmp7 };
      tmp4 = null;
      const tmp3 = closure_1;
      if ("username" === closure_1) {
        tmp4 = roleColor;
      }
      tmp6 = null;
      const tmp5 = roleColor;
      if (roleStyle) {
        tmp6 = c4;
      }
      tmp7 = "dot" === tmp3 && null != tmp5;
      return tmp(tmp2, obj, arg1);
    },
    messageTextHook(arg0, arg1) {
      const obj = { children: renderMessageMarkupDefault(message, { formatInline: true, allowGameMentions: true }).content };
      const LegacyText = native.LegacyText;
      return React4(LegacyText, obj, arg1);
    }
  };
  return closure_9(SubstringRow, obj7);
}
function SubstringRow(arg0) {
  let accessibilityLabel;
  let children;
  let obj2;
  let timestamp;
  let tmp6;
  let user;
  ({ timestamp, accessibilityLabel } = arg0);
  ({ user, children } = arg0);
  const tmp = closure_13();
  if (null == user) {
    const obj = { style: tmp.row, children: React4(Text_Text.Text, obj2) };
    obj2 = { style: tmp.timestamp, accessibilityLabel, variant: "text-sm/medium", color: "text-muted", children: ` ${timestamp}` };
    tmp6 = React4(View, obj);
  } else {
    const obj3 = { style: tmp.row, children: items };
    items = [children, , ];
    const obj4 = { style: tmp.dividerDot };
    items[1] = React4(View, obj4);
    const _HermesInternal = HermesInternal;
    const obj5 = { style: tmp.timestamp, accessibilityLabel, variant: "text-sm/medium", color: "text-muted", children: "" + timestamp };
    const Text = Text_Text.Text;
    items[2] = React4(Text, obj5);
    tmp6 = authStore(View, obj3);
  }
  return tmp6;
}
function Username(usernameColor) {
  let nickname;
  let roleColor;
  let roleColors;
  let shouldShowRoleDot;
  usernameColor = usernameColor.usernameColor;
  ({ roleColors, shouldShowRoleDot } = usernameColor);
  ({ nickname, roleColor } = usernameColor);
  const tmp = closure_13();
  let closure_1 = tmp;
  items = [usernameColor, tmp];
  const memo = react.useMemo(() => {
    let username;
    if (null != usernameColor) {
      items = [user.username, ];
      const obj = { color: tmp };
      items[1] = obj;
      username = items;
    } else {
      username = user.username;
    }
    return username;
  }, items);
  let obj = enhanced_role_colors_EnhancedRoleColorUtils;
  const processColorStringsArray = obj.useProcessColorStringsArray(roleColors);
  const tmp5 = !shouldShowRoleDot && processColorStringsArray.length > 1;
  const tmp6 = authStore;
  const tmp7 = unpackModuleId;
  if (shouldShowRoleDot) {
    const obj2 = { color: roleColor, colors: roleColors, size: "small" };
    shouldShowRoleDot = React4(tmp3(1177).RoleDot, obj2);
  }
  const items1 = [shouldShowRoleDot, ];
  let tmp10;
  const Text = tmp3(4832).Text;
  const tmp9 = React4;
  if (tmp5) {
    tmp10 = processColorStringsArray;
  }
  const obj3 = { children: items1 };
  items1[1] = tmp9(Text, { variant: "text-sm/semibold", color: "mobile-text-heading-primary", gradientColors: tmp10, style: memo, children: nickname });
  return tmp6(tmp7, obj3);
}
let react = react_mod;
const View = react_native.View;
const MessageTypes = Constants.MessageTypes;
const Fonts = Constants2.Fonts;
({ jsx: c9, jsxs: c10, Fragment: unpackModuleId } = Fragment);
let items = [, ];
({ CHANNEL_NAME_CHANGE: arr[0], THREAD_STARTER_MESSAGE: arr[1] } = MessageTypes);
let createStyles = createStyles_mod;
let obj = { row: { flexDirection: "row" }, subtextContent: { lineHeight: 18, flexShrink: 1 }, timestamp: { lineHeight: 18 }, username: obj2, dividerDot: size };
obj2 = { fontSize: 14, lineHeight: 18, fontFamily: Fonts.PRIMARY_SEMIBOLD, color: nativeDefault.colors.TEXT_SUBTLE };
createStyles = createStyles.createStyles;
size = { width: 4, height: 4, marginHorizontal: 4, borderRadius: 2, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG, alignSelf: "center" };
let closure_13 = createStyles(obj);
let closure_14 = react.memo((thread) => {
  let Text;
  let closure_3;
  let intl;
  let obj5;
  let obj6;
  thread = thread.thread;
  const accessibilityLabel = thread.accessibilityLabel;
  let stateFromStores1;
  let colorStrings;
  let closure_6;
  let ref;
  const timestamp = thread.timestamp;
  let tmp2 = thread;
  let tmp = closure_13();
  let obj = thread(stateFromStores1[11]);
  items = [ref];
  const stateFromStores = obj.useStateFromStores(items, () => UserStore.getUser(thread.ownerId));
  let obj2 = thread(stateFromStores1[11]);
  const items1 = [closure_6];
  stateFromStores1 = obj2.useStateFromStores(items1, () => GuildMemberStore.getMember(thread.guild_id, thread.ownerId));
  const items2 = [colorStrings];
  const obj3 = thread(stateFromStores1[11]);
  react = obj3.useStateFromStores(items2, () => colorStrings.roleStyle);
  let colorString;
  if (stateFromStores1 != null) {
    colorString = stateFromStores1.colorString;
  }
  if (colorString == null) {
    colorString = null;
  }
  colorStrings = undefined;
  if (stateFromStores1 != null) {
    colorStrings = stateFromStores1.colorStrings;
  }
  if (colorStrings == null) {
    colorStrings = null;
  }
  let id;
  let tmp8 = stateFromStores(tmp3[13]);
  const guild_id = thread.guild_id;
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  closure_6 = tmp8(guild_id, id);
  ref = react.useRef(thread);
  const effect = react.useEffect(() => {
    ref.current = thread;
  });
  const items3 = [stateFromStores1, stateFromStores];
  const effect1 = react.useEffect(() => {
    if (null == stateFromStores) {
      const current = ref.current;
      items = [current.ownerId];
      const obj = GuildActionCreatorsDefault;
      const membersById = obj.requestMembersById(current.guild_id, items);
    }
  }, items3);
  const obj4 = { user: stateFromStores, timestamp, accessibilityLabel, children: closure_9(Text, obj5) };
  obj5 = { lineClamp: 1, ellipsizeMode: "tail", lineBreakMode: "tail", style: tmp.subtextContent, accessibilityLabel, variant: "text-sm/medium", color: "text-default", children: intl.format(tmp2(stateFromStores1[16]).t.imPXd5, obj6) };
  Text = tmp2(tmp3[15]).Text;
  intl = tmp2(tmp3[16]).intl;
  obj6 = {
    usernameHook(arg0, arg1) {
      let tmp10;
      let tmp7;
      let tmp9;
      let str;
      const tmp = React4;
      const tmp2 = Username;
      if (stateFromStores1 != null) {
        str = stateFromStores1.nick;
      }
      if (str == null) {
        const obj = UserUtilsDefault;
        str = obj.getName(stateFromStores);
      }
      if (str == null) {
        str = "";
      }
      const obj2 = { nickname: str, usernameColor: tmp7, roleColor: colorString, roleColors: tmp9, shouldShowRoleDot: tmp10 };
      tmp7 = null;
      const tmp6 = closure_3;
      if ("username" === closure_3) {
        tmp7 = colorString;
      }
      tmp9 = null;
      const tmp8 = colorString;
      if (closure_6) {
        tmp9 = colorStrings;
      }
      tmp10 = "dot" === tmp6 && null != tmp8;
      return tmp(tmp2, obj2, arg1);
    }
  };
  return closure_9(SubstringRow, obj4);
});
size = size_mod;
const result = size.fileFinishedImporting("modules/threads/native/components/ThreadBrowserRowSubtext.tsx");

export const ThreadSubtext = function ThreadSubtext(thread) {
  thread = thread.thread;
  const id = thread.id;
  items = [ThreadMessageStore];
  const items1 = [id];
  const obj = id(504);
  const stateFromStores = obj.useStateFromStores(items, () => ThreadMessageStore.getMostRecentMessage(id), items1);
  const obj2 = id(7200);
  const lastMessageTimestamp = obj2.useLastMessageTimestamp(thread);
  if (null != stateFromStores) {
    if (!items.includes(stateFromStores.type)) {
      if (!thread.isArchivedThread()) {
        const obj3 = { thread, message: stateFromStores };
        return closure_9(MessageContent, obj3);
      }
    }
  }
  const tmpResult = id(7200);
  const timestampString = tmpResult.getTimestampString(lastMessageTimestamp);
  const tmpResult2 = id(7200);
  const obj4 = { thread, timestamp: timestampString, accessibilityLabel: tmpResult2.getTimestampAccessibilityLabel(lastMessageTimestamp) };
  return closure_9(closure_14, obj4);
};
