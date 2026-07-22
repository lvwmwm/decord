// Module ID: 11119
// Function ID: 86563
// Name: ForumPostUsername
// Dependencies: []
// Exports: ForumPostAuthor, ForumPostMessageAuthor

// Module 11119 (ForumPostUsername)
function ForumPostUsername(arg0) {
  let authorColor;
  let authorColors;
  let authorId;
  let authorName;
  let containerStyle;
  let hasUnreads;
  let roleDotStyle;
  let suffix;
  let textStyle;
  let thread;
  ({ thread, authorId, authorName, authorColor, authorColors } = arg0);
  ({ containerStyle, roleDotStyle, textStyle, suffix, hasUnreads } = arg0);
  const tmp = callback2();
  let num = 158;
  if (useForumChannelStore({ thread }.thread.parent_id).layoutType === arg1(dependencyMap[7]).ForumLayout.GRID) {
    num = 72;
  }
  const diff = importDefault(dependencyMap[8])() - arg1(dependencyMap[9]).GRID_HORIZONTAL_PADDING - num;
  let obj = arg1(dependencyMap[10]);
  const items = [closure_4];
  const stateFromStores = obj.useStateFromStores(items, () => roleStyle.roleStyle);
  if ("username" === stateFromStores) {
    if (null != authorColor) {
      obj = { color: authorColor };
    }
    if (hasUnreads) {
      obj = {};
    } else {
      obj = { opacity: 0.8 };
    }
    let obj3 = arg1(dependencyMap[11]);
    const processColorStringsArray = obj3.useProcessColorStringsArray(authorColors);
    const tmp10 = arg1(dependencyMap[11]);
    let tmp12;
    const useIsRoleStyleAndRoleColorsEligibleForERC = tmp10.useIsRoleStyleAndRoleColorsEligibleForERC;
    if (null != authorId) {
      tmp12 = authorId;
    }
    const guild_id = thread.guild_id;
    let tmp19Result = null;
    if (null != authorName) {
      const obj1 = {};
      const obj2 = { maxWidth: diff };
      const merged = Object.assign(tmp.authorContainer);
      const items1 = [obj2, obj, containerStyle];
      obj1.style = items1;
      obj1.accessibilityRole = "button";
      let tmp23 = "dot" === stateFromStores && null != authorColor;
      if (tmp23) {
        obj3 = {};
        const items2 = [tmp.roleDotContainer, roleDotStyle];
        obj3.style = items2;
        const obj4 = { size: "small", color: authorColor, colors: authorColors };
        obj3.children = callback(arg1(dependencyMap[12]).RoleDot, obj4);
        tmp23 = callback(View, obj3);
      }
      const items3 = [tmp23, ];
      const obj5 = { 276823: true, 285451: true, -1230751656: true, 1570975106: true };
      let tmp32;
      if (tmp17) {
        tmp32 = processColorStringsArray;
      }
      obj5.gradientColors = tmp32;
      const items4 = [{}, textStyle, tmp.authorName];
      obj5.style = items4;
      const items5 = [authorName, suffix];
      obj5.children = items5;
      items3[1] = closure_7(arg1(dependencyMap[13]).Text, obj5);
      obj1.children = items3;
      tmp19Result = closure_7(View, obj1);
      const tmp19 = closure_7;
      const tmp20 = View;
      const tmp29 = closure_7;
    }
    return tmp19Result;
  }
}
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_4 = importDefault(dependencyMap[2]);
const useForumChannelStore = arg1(dependencyMap[3]).useForumChannelStore;
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[4]));
const tmp3 = arg1(dependencyMap[4]);
let closure_8 = arg1(dependencyMap[5]).createStyles({ authorContainer: { 419998037: "content", -1318619413: "Array", 1639156690: "isArray", -936160966: "isArray" }, roleDotContainer: {}, authorName: { "Bool(true)": true, "Bool(true)": true } });
const obj = arg1(dependencyMap[5]);
const result = arg1(dependencyMap[14]).fileFinishedImporting("modules/forums/native/posts/ForumPostUsername.tsx");

export const ForumPostAuthor = function ForumPostAuthor(thread) {
  let author;
  let containerStyle;
  let hasUnreads;
  let roleDotStyle;
  let suffix;
  let textStyle;
  let user;
  thread = thread.thread;
  ({ hasUnreads, suffix, containerStyle, roleDotStyle, textStyle } = thread);
  let obj = arg1(dependencyMap[6]);
  const forumPostAuthor = obj.useForumPostAuthor(thread);
  ({ user, author } = forumPostAuthor);
  let nick;
  if (null != author) {
    nick = author.nick;
  }
  if (null == nick) {
    let username;
    if (null != user) {
      username = user.username;
    }
    nick = username;
  }
  if (null != author) {
    const colorString = author.colorString;
  }
  if (null != author) {
    const colorStrings = author.colorStrings;
  }
  let tmp5Result = null;
  if (null != user) {
    obj = { thread };
    let id;
    if (null != user) {
      id = user.id;
    }
    obj.authorId = id;
    obj.authorName = nick;
    obj.authorColor = colorString;
    obj.authorColors = colorStrings;
    obj.suffix = suffix;
    obj.containerStyle = containerStyle;
    obj.roleDotStyle = roleDotStyle;
    obj.textStyle = textStyle;
    obj.hasUnreads = hasUnreads;
    tmp5Result = closure_6(ForumPostUsername, obj);
    const tmp5 = closure_6;
    const tmp6 = ForumPostUsername;
  }
  return tmp5Result;
};
export const ForumPostMessageAuthor = function ForumPostMessageAuthor(thread) {
  let authorColor;
  let authorColors;
  let authorName;
  let containerStyle;
  let hasUnreads;
  let message;
  let roleDotStyle;
  let suffix;
  let textStyle;
  thread = thread.thread;
  ({ message, hasUnreads, suffix, containerStyle, roleDotStyle, textStyle } = thread);
  let obj = arg1(dependencyMap[6]);
  const forumPostMessageAuthor = obj.useForumPostMessageAuthor(message, thread);
  const user = forumPostMessageAuthor.user;
  obj = { thread };
  let id;
  ({ authorName, authorColor, authorColors } = forumPostMessageAuthor);
  if (null != user) {
    id = user.id;
  }
  obj.authorId = id;
  obj.authorName = authorName;
  obj.authorColor = authorColor;
  obj.authorColors = authorColors;
  obj.suffix = suffix;
  obj.containerStyle = containerStyle;
  obj.roleDotStyle = roleDotStyle;
  obj.textStyle = textStyle;
  obj.hasUnreads = hasUnreads;
  return closure_6(ForumPostUsername, obj);
};
