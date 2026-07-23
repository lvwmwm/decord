// Module ID: 15398
// Function ID: 117524
// Name: MessageContent
// Dependencies: [31, 27, 4122, 1917, 1849, 5683, 653, 482, 33, 4130, 689, 566, 7023, 4571, 5048, 4126, 1212, 3969, 5687, 4360, 21, 1273, 7779, 7650, 3994, 2]
// Exports: ThreadSubtext

// Module 15398 (MessageContent)
import importAllResult from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_9;
const require = arg1;
function MessageContent(arg0) {
  let View;
  let closure_3;
  let dependencyMap;
  let message;
  let thread;
  ({ thread, message } = arg0);
  let obj = message(5687);
  const items = [message.author.id];
  const subscribeGuildMembers = obj.useSubscribeGuildMembers({ [thread.guild_id]: items }, "ThreadBrowserRowSubtext");
  let obj1 = message(566);
  const items1 = [closure_7];
  const stateFromStores = obj1.useStateFromStores(items1, () => {
    let author = outer1_7.getUser(message.author.id);
    if (null == author) {
      author = message.author;
    }
    return author;
  });
  const tmp = callback3();
  const items2 = [_isNativeReflectConstruct];
  const importDefault = message(566).useStateFromStores(items2, () => roleStyle.roleStyle);
  const obj3 = message(566);
  ({ nick: dependencyMap, colorString: closure_3, colorStrings: View } = importDefault(4360)(message));
  let tmp4 = importDefault(4360)(message);
  const extractTimestampResult = importDefault(21).extractTimestamp(message.id);
  const obj4 = importDefault(21);
  const timestampString = message(7023).getTimestampString(extractTimestampResult);
  const obj5 = message(7023);
  const timestampAccessibilityLabel = message(7023).getTimestampAccessibilityLabel(extractTimestampResult);
  _isNativeReflectConstruct = importDefault(4571)(thread.guild_id, stateFromStores.id);
  obj = { user: stateFromStores, timestamp: timestampString, accessibilityLabel: timestampAccessibilityLabel };
  obj = { lineClamp: 1, ellipsizeMode: "tail", lineBreakMode: "tail", style: tmp.subtextContent, variant: "text-sm/medium", color: "text-default" };
  const intl = message(1212).intl;
  obj1 = {
    usernameHook(arg0, arg1) {
      const obj = {};
      let str = "";
      if (null != closure_2) {
        str = closure_2;
      }
      obj.nickname = str;
      let tmp3 = null;
      if ("username" === closure_1) {
        tmp3 = closure_3;
      }
      obj.usernameColor = tmp3;
      obj.roleColor = closure_3;
      let tmp4 = null;
      if (_isNativeReflectConstruct) {
        tmp4 = closure_4;
      }
      obj.roleColors = tmp4;
      let tmp5 = "dot" === closure_1;
      if (tmp5) {
        tmp5 = null != closure_3;
      }
      obj.shouldShowRoleDot = tmp5;
      return outer1_9(outer1_17, obj, arg1);
    },
    messageTextHook(arg0, arg1) {
      const obj = { children: callback(outer1_2[22])(message, { formatInline: true, allowGameMentions: true }).content };
      return outer1_9(message(outer1_2[21]).LegacyText, obj, arg1);
    }
  };
  obj.children = intl.format(message(1212).t.M79KAH, obj1);
  obj.children = callback(message(4126).Text, obj);
  return callback(SubstringRow, obj);
}
function SubstringRow(arg0) {
  let accessibilityLabel;
  let children;
  let timestamp;
  let user;
  ({ timestamp, accessibilityLabel } = arg0);
  ({ user, children } = arg0);
  const tmp = callback3();
  if (null == user) {
    let obj = { style: tmp.row };
    obj = { style: tmp.timestamp, accessibilityLabel, variant: "text-sm/medium", color: "text-muted", children: ` ${timestamp}` };
    obj.children = callback(require(4126) /* Text */.Text, obj);
    let tmp7 = callback(View, obj);
  } else {
    obj = { style: tmp.row };
    const items = [children, , ];
    const obj1 = { style: tmp.dividerDot };
    items[1] = callback(View, obj1);
    const obj2 = { style: tmp.timestamp, accessibilityLabel, variant: "text-sm/medium", color: "text-muted" };
    const _HermesInternal = HermesInternal;
    obj2.children = "" + timestamp;
    items[2] = callback(require(4126) /* Text */.Text, obj2);
    obj.children = items;
    tmp7 = callback2(View, obj);
  }
  return tmp7;
}
function Username(usernameColor) {
  let nickname;
  let roleColor;
  let roleColors;
  let shouldShowRoleDot;
  usernameColor = usernameColor.usernameColor;
  ({ roleColors, shouldShowRoleDot } = usernameColor);
  ({ nickname, roleColor } = usernameColor);
  const tmp = callback3();
  const importDefault = tmp;
  let items = [usernameColor, tmp];
  const memo = importAllResult.useMemo(() => {
    if (null != usernameColor) {
      const items = [tmp.username, ];
      const obj = { color: usernameColor };
      items[1] = obj;
      let username = items;
    } else {
      username = tmp.username;
    }
    return username;
  }, items);
  let obj = usernameColor(7650);
  const processColorStringsArray = obj.useProcessColorStringsArray(roleColors);
  let tmp3 = !shouldShowRoleDot;
  if (tmp3) {
    tmp3 = processColorStringsArray.length > 1;
  }
  obj = {};
  if (shouldShowRoleDot) {
    obj = { color: roleColor, colors: roleColors, size: "small" };
    shouldShowRoleDot = callback(usernameColor(1273).RoleDot, obj);
  }
  const items1 = [shouldShowRoleDot, ];
  const obj1 = { variant: "text-sm/semibold", color: "mobile-text-heading-primary", experimental_useNativeText: !usernameColor(3994).isFabric() };
  let tmp10;
  if (tmp3) {
    tmp10 = processColorStringsArray;
  }
  obj1.gradientColors = tmp10;
  obj1.style = memo;
  obj1.children = nickname;
  items1[1] = callback(usernameColor(4126).Text, obj1);
  obj.children = items1;
  return closure_10(closure_11, obj);
}
({ jsx: closure_9, jsxs: closure_10, Fragment: closure_11 } = jsxProd);
let items = [, ];
({ CHANNEL_NAME_CHANGE: arr[0], THREAD_STARTER_MESSAGE: arr[1] } = require("ME").MessageTypes);
let obj = { row: { flexDirection: "row" }, subtextContent: { lineHeight: 18, flexShrink: 1 }, timestamp: { lineHeight: 18 } };
obj = { fontSize: 14, lineHeight: 18, fontFamily: require("sum").Fonts.PRIMARY_SEMIBOLD, color: require("_createForOfIteratorHelperLoose").colors.TEXT_SUBTLE };
obj.username = obj;
_createForOfIteratorHelperLoose = { width: 4, height: 4, marginHorizontal: 4, borderRadius: 2, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_STRONG, alignSelf: "center" };
obj.dividerDot = _createForOfIteratorHelperLoose;
let closure_13 = _createForOfIteratorHelperLoose.createStyles(obj);
let closure_14 = importAllResult.memo((thread) => {
  thread = thread.thread;
  const accessibilityLabel = thread.accessibilityLabel;
  let c4;
  let c5;
  let closure_6;
  let closure_7;
  let obj = thread(stateFromStores1[11]);
  let items = [closure_7];
  const stateFromStores = obj.useStateFromStores(items, () => ref.getUser(thread.ownerId));
  let obj1 = thread(stateFromStores1[11]);
  const items1 = [closure_6];
  stateFromStores1 = obj1.useStateFromStores(items1, () => member.getMember(thread.guild_id, thread.ownerId));
  const tmp = callback3();
  const items2 = [c5];
  const importAllResult = thread(stateFromStores1[11]).useStateFromStores(items2, () => _undefined.roleStyle);
  let colorString;
  if (null != stateFromStores1) {
    colorString = stateFromStores1.colorString;
  }
  let tmp5 = null;
  if (null != colorString) {
    tmp5 = colorString;
  }
  c4 = tmp5;
  let colorStrings;
  if (null != stateFromStores1) {
    colorStrings = stateFromStores1.colorStrings;
  }
  let tmp7 = null;
  if (null != colorStrings) {
    tmp7 = colorStrings;
  }
  c5 = tmp7;
  let id;
  const obj3 = thread(stateFromStores1[11]);
  if (null != stateFromStores) {
    id = stateFromStores.id;
  }
  closure_6 = stateFromStores(stateFromStores1[13])(thread.guild_id, id);
  closure_7 = importAllResult.useRef(thread);
  const effect = importAllResult.useEffect(() => {
    closure_7.current = thread;
  });
  const items3 = [stateFromStores1, stateFromStores];
  const effect1 = importAllResult.useEffect(() => {
    if (null == stateFromStores) {
      const current = ref.current;
      const items = [current.ownerId];
      const membersById = stateFromStores(stateFromStores1[14]).requestMembersById(current.guild_id, items);
      const obj = stateFromStores(stateFromStores1[14]);
    }
  }, items3);
  obj = { user: stateFromStores, timestamp: thread.timestamp, accessibilityLabel };
  obj = { lineClamp: 1, ellipsizeMode: "tail", lineBreakMode: "tail", style: tmp.subtextContent, accessibilityLabel, variant: "text-sm/medium", color: "text-default" };
  const intl = thread(stateFromStores1[16]).intl;
  obj1 = {
    usernameHook(arg0, arg1) {
      const obj = {};
      let nick;
      if (null != stateFromStores1) {
        nick = stateFromStores1.nick;
      }
      if (null == nick) {
        nick = stateFromStores(stateFromStores1[17]).getName(stateFromStores);
        const obj2 = stateFromStores(stateFromStores1[17]);
      }
      let str = "";
      if (null != nick) {
        str = nick;
      }
      obj.nickname = str;
      let tmp8 = null;
      if ("username" === closure_3) {
        tmp8 = c4;
      }
      obj.usernameColor = tmp8;
      obj.roleColor = c4;
      let tmp9 = null;
      if (closure_6) {
        tmp9 = c5;
      }
      obj.roleColors = tmp9;
      let tmp10 = "dot" === closure_3;
      if (tmp10) {
        tmp10 = null != c4;
      }
      obj.shouldShowRoleDot = tmp10;
      return outer1_9(outer1_17, obj, arg1);
    }
  };
  obj.children = intl.format(thread(stateFromStores1[16]).t.imPXd5, obj1);
  obj.children = callback(thread(stateFromStores1[15]).Text, obj);
  return callback(SubstringRow, obj);
});
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/threads/native/components/ThreadBrowserRowSubtext.tsx");

export const ThreadSubtext = function ThreadSubtext(thread) {
  thread = thread.thread;
  const id = thread.id;
  let obj = id(566);
  const items = [closure_8];
  const items1 = [id];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_8.getMostRecentMessage(id), items1);
  const lastMessageTimestamp = id(7023).useLastMessageTimestamp(thread);
  if (null != stateFromStores) {
    if (!items.includes(stateFromStores.type)) {
      if (!thread.isArchivedThread()) {
        obj = { thread, message: stateFromStores };
        return callback(MessageContent, obj);
      }
    }
  }
  const obj2 = id(7023);
  const timestampString = id(7023).getTimestampString(lastMessageTimestamp);
  const obj4 = id(7023);
  obj = { thread, timestamp: timestampString, accessibilityLabel: id(7023).getTimestampAccessibilityLabel(lastMessageTimestamp) };
  return callback(closure_14, obj);
};
