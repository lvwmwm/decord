// Module ID: 15273
// Function ID: 115307
// Name: MessageContent
// Dependencies: []
// Exports: ThreadSubtext

// Module 15273 (MessageContent)
function MessageContent(arg0) {
  let message;
  let thread;
  ({ thread, message } = arg0);
  const arg1 = message;
  let obj = arg1(dependencyMap[18]);
  const items = [message.author.id];
  const subscribeGuildMembers = obj.useSubscribeGuildMembers({ [thread.guild_id]: items }, "ThreadBrowserRowSubtext");
  let obj1 = arg1(dependencyMap[11]);
  const items1 = [closure_7];
  const stateFromStores = obj1.useStateFromStores(items1, () => {
    let author = user.getUser(message.author.id);
    if (null == author) {
      author = message.author;
    }
    return author;
  });
  const tmp = callback3();
  const items2 = [closure_5];
  const importDefault = arg1(dependencyMap[11]).useStateFromStores(items2, () => roleStyle.roleStyle);
  const obj3 = arg1(dependencyMap[11]);
  ({ nick: closure_2, colorString: closure_3, colorStrings: closure_4 } = importDefault(dependencyMap[19])(message));
  const tmp4 = importDefault(dependencyMap[19])(message);
  const extractTimestampResult = importDefault(dependencyMap[20]).extractTimestamp(message.id);
  const obj4 = importDefault(dependencyMap[20]);
  const timestampString = arg1(dependencyMap[12]).getTimestampString(extractTimestampResult);
  const obj5 = arg1(dependencyMap[12]);
  const timestampAccessibilityLabel = arg1(dependencyMap[12]).getTimestampAccessibilityLabel(extractTimestampResult);
  closure_5 = importDefault(dependencyMap[13])(thread.guild_id, stateFromStores.id);
  obj = { user: stateFromStores, timestamp: timestampString, accessibilityLabel: timestampAccessibilityLabel };
  obj = { end: true, label: true, start: true, showPrivateThreads: true, showCreateThreads: true, avatar: true, style: tmp.subtextContent };
  const intl = arg1(dependencyMap[16]).intl;
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
      if (closure_5) {
        tmp4 = closure_4;
      }
      obj.roleColors = tmp4;
      let tmp5 = "dot" === closure_1;
      if (tmp5) {
        tmp5 = null != closure_3;
      }
      obj.shouldShowRoleDot = tmp5;
      return closure_9(closure_17, obj, arg1);
    },
    messageTextHook(arg0, arg1) {
      const obj = { children: callback(closure_2[22])(message, { l: null, View: null }).content };
      return callback2(message(closure_2[21]).LegacyText, obj, arg1);
    }
  };
  obj.children = intl.format(arg1(dependencyMap[16]).t.M79KAH, obj1);
  obj.children = callback(arg1(dependencyMap[15]).Text, obj);
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
    obj.children = callback(arg1(dependencyMap[15]).Text, obj);
    let tmp7 = callback(View, obj);
  } else {
    obj = { style: tmp.row };
    const items = [children, , ];
    const obj1 = { style: tmp.dividerDot };
    items[1] = callback(View, obj1);
    const obj2 = { style: tmp.timestamp, accessibilityLabel, variant: "text-sm/medium", color: "text-muted" };
    const _HermesInternal = HermesInternal;
    obj2.children = "" + timestamp;
    items[2] = callback(arg1(dependencyMap[15]).Text, obj2);
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
  const arg1 = usernameColor;
  ({ roleColors, shouldShowRoleDot } = usernameColor);
  ({ nickname, roleColor } = usernameColor);
  const tmp = callback3();
  const importDefault = tmp;
  const items = [usernameColor, tmp];
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
  let obj = arg1(dependencyMap[23]);
  const processColorStringsArray = obj.useProcessColorStringsArray(roleColors);
  let tmp3 = !shouldShowRoleDot;
  if (tmp3) {
    tmp3 = processColorStringsArray.length > 1;
  }
  obj = {};
  if (shouldShowRoleDot) {
    obj = { color: roleColor, colors: roleColors, size: "small" };
    shouldShowRoleDot = callback(arg1(dependencyMap[21]).RoleDot, obj);
  }
  const items1 = [shouldShowRoleDot, ];
  const obj1 = { hasMaxConnections: "r", isBoostOnlySubscription: "accessibilityRole", experimental_useNativeText: !arg1(dependencyMap[24]).isFabric() };
  let tmp10;
  if (tmp3) {
    tmp10 = processColorStringsArray;
  }
  obj1.gradientColors = tmp10;
  obj1.style = memo;
  obj1.children = nickname;
  items1[1] = callback(arg1(dependencyMap[15]).Text, obj1);
  obj.children = items1;
  return closure_10(closure_11, obj);
}
const importAllResult = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
({ jsx: closure_9, jsxs: closure_10, Fragment: closure_11 } = arg1(dependencyMap[8]));
const items = [, ];
({ CHANNEL_NAME_CHANGE: arr[0], THREAD_STARTER_MESSAGE: arr[1] } = arg1(dependencyMap[6]).MessageTypes);
let obj1 = arg1(dependencyMap[9]);
let obj = { row: { flexDirection: "row" }, subtextContent: {}, timestamp: { lineHeight: 18 } };
obj = { fontFamily: arg1(dependencyMap[7]).Fonts.PRIMARY_SEMIBOLD, color: importDefault(dependencyMap[10]).colors.TEXT_SUBTLE };
obj.username = obj;
obj1 = { backgroundColor: importDefault(dependencyMap[10]).colors.BACKGROUND_MOD_STRONG };
obj.dividerDot = obj1;
let closure_13 = obj1.createStyles(obj);
let closure_14 = importAllResult.memo((thread) => {
  thread = thread.thread;
  const arg1 = thread;
  const accessibilityLabel = thread.accessibilityLabel;
  let View;
  let closure_5;
  let closure_6;
  let closure_7;
  let obj = arg1(dependencyMap[11]);
  const items = [closure_7];
  const stateFromStores = obj.useStateFromStores(items, () => ref.getUser(thread.ownerId));
  const importDefault = stateFromStores;
  let obj1 = arg1(dependencyMap[11]);
  const items1 = [closure_6];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => member.getMember(thread.guild_id, thread.ownerId));
  const dependencyMap = stateFromStores1;
  const tmp = callback3();
  const items2 = [closure_5];
  const React = arg1(dependencyMap[11]).useStateFromStores(items2, () => tmp7.roleStyle);
  let colorString;
  if (null != stateFromStores1) {
    colorString = stateFromStores1.colorString;
  }
  let tmp5 = null;
  if (null != colorString) {
    tmp5 = colorString;
  }
  View = tmp5;
  let colorStrings;
  if (null != stateFromStores1) {
    colorStrings = stateFromStores1.colorStrings;
  }
  let tmp7 = null;
  if (null != colorStrings) {
    tmp7 = colorStrings;
  }
  closure_5 = tmp7;
  let id;
  const obj3 = arg1(dependencyMap[11]);
  if (null != stateFromStores) {
    id = stateFromStores.id;
  }
  closure_6 = importDefault(dependencyMap[13])(thread.guild_id, id);
  closure_7 = React.useRef(thread);
  const effect = React.useEffect(() => {
    closure_7.current = thread;
  });
  const items3 = [stateFromStores1, stateFromStores];
  const effect1 = React.useEffect(() => {
    if (null == stateFromStores) {
      const current = ref.current;
      const items = [current.ownerId];
      const membersById = stateFromStores(stateFromStores1[14]).requestMembersById(current.guild_id, items);
      const obj = stateFromStores(stateFromStores1[14]);
    }
  }, items3);
  obj = { user: stateFromStores, timestamp: thread.timestamp, accessibilityLabel };
  obj = { style: tmp.subtextContent, accessibilityLabel };
  const intl = arg1(dependencyMap[16]).intl;
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
        const tmp7 = stateFromStores;
      }
      let str = "";
      if (null != nick) {
        str = nick;
      }
      obj.nickname = str;
      let tmp8 = null;
      if ("username" === closure_3) {
        tmp8 = tmp5;
      }
      obj.usernameColor = tmp8;
      obj.roleColor = tmp5;
      let tmp9 = null;
      if (closure_6) {
        tmp9 = tmp7;
      }
      obj.roleColors = tmp9;
      let tmp10 = "dot" === closure_3;
      if (tmp10) {
        tmp10 = null != tmp5;
      }
      obj.shouldShowRoleDot = tmp10;
      return closure_9(closure_17, obj, arg1);
    }
  };
  obj.children = intl.format(arg1(dependencyMap[16]).t.imPXd5, obj1);
  obj.children = callback(arg1(dependencyMap[15]).Text, obj);
  return callback(SubstringRow, obj);
});
const tmp2 = arg1(dependencyMap[8]);
const result = arg1(dependencyMap[25]).fileFinishedImporting("modules/threads/native/components/ThreadBrowserRowSubtext.tsx");

export const ThreadSubtext = function ThreadSubtext(thread) {
  thread = thread.thread;
  const id = thread.id;
  const arg1 = id;
  let obj = arg1(dependencyMap[11]);
  const items = [closure_8];
  const items1 = [id];
  const stateFromStores = obj.useStateFromStores(items, () => mostRecentMessage.getMostRecentMessage(id), items1);
  const lastMessageTimestamp = arg1(dependencyMap[12]).useLastMessageTimestamp(thread);
  if (null != stateFromStores) {
    if (!items.includes(stateFromStores.type)) {
      if (!thread.isArchivedThread()) {
        obj = { thread, message: stateFromStores };
        return callback(MessageContent, obj);
      }
    }
  }
  const obj2 = arg1(dependencyMap[12]);
  const timestampString = arg1(dependencyMap[12]).getTimestampString(lastMessageTimestamp);
  const obj4 = arg1(dependencyMap[12]);
  obj = { thread, timestamp: timestampString, accessibilityLabel: arg1(dependencyMap[12]).getTimestampAccessibilityLabel(lastMessageTimestamp) };
  return callback(closure_14, obj);
};
