// Module ID: 11159
// Function ID: 86882
// Name: ForumPostUsername
// Dependencies: [31, 27, 4122, 11155, 33, 4130, 9173, 1358, 10876, 11160, 566, 7739, 1273, 4126, 2]
// Exports: ForumPostAuthor, ForumPostMessageAuthor

// Module 11159 (ForumPostUsername)
import "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { useForumChannelStore } from "set";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_6;
let closure_7;
const require = arg1;
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
  if (useForumChannelStore({ thread }.thread.parent_id).layoutType === require(1358) /* set */.ForumLayout.GRID) {
    num = 72;
  }
  const diff = importDefault(10876)() - require(11160) /* GIFIcon */.GRID_HORIZONTAL_PADDING - num;
  let obj = require(566) /* initialize */;
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_4.roleStyle);
  if ("username" === stateFromStores) {
    if (null != authorColor) {
      obj = { color: authorColor };
    }
    if (hasUnreads) {
      obj = {};
    } else {
      obj = { opacity: 0.8 };
    }
    let obj3 = require(7739) /* processColorStringsInternal */;
    const processColorStringsArray = obj3.useProcessColorStringsArray(authorColors);
    const tmp10 = require(7739) /* processColorStringsInternal */;
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
        obj3.children = callback(require(1273) /* Button */.RoleDot, obj4);
        tmp23 = callback(View, obj3);
      }
      const items3 = [tmp23, ];
      const obj5 = { variant: "text-sm/semibold", color: "mobile-text-heading-primary", gradientColors: null, lineClamp: 1 };
      let tmp32;
      if (tmp17) {
        tmp32 = processColorStringsArray;
      }
      obj5.gradientColors = tmp32;
      const items4 = [{}, textStyle, tmp.authorName];
      obj5.style = items4;
      const items5 = [authorName, suffix];
      obj5.children = items5;
      items3[1] = closure_7(require(4126) /* Text */.Text, obj5);
      obj1.children = items3;
      tmp19Result = closure_7(View, obj1);
      const tmp19 = closure_7;
      const tmp20 = View;
      const tmp29 = closure_7;
    }
    return tmp19Result;
  }
}
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
let closure_8 = _createForOfIteratorHelperLoose.createStyles({ authorContainer: { flexDirection: "row", alignItems: "center", justifyContent: "center", marginEnd: 8 }, roleDotContainer: { alignItems: "center", justifyContent: "center", marginEnd: 2, marginBottom: 4 }, authorName: { overflow: "hidden", flexWrap: "nowrap" } });
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/forums/native/posts/ForumPostUsername.tsx");

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
  let obj = require(9173) /* sortForumPostReactionsByPopularityDesc */;
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
  let obj = require(9173) /* sortForumPostReactionsByPopularityDesc */;
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
