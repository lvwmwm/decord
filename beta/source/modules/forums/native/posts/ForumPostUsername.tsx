// Module ID: 11487
// Function ID: 11488
// Name: ForumPostUsername
// Dependencies: [19, 17, 4825, 11483, 21, 4836, 7310, 2055, 11020, 11488, 504, 7403, 1177, 4832, 2]
// Exports: ForumPostAuthor, ForumPostMessageAuthor

// Module 11487 (ForumPostUsername)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import native from "native" /* 1177 */;
import ForumLayout from "ForumLayout" /* 2055 */;
import ForumHooks from "ForumHooks" /* 7310 */;
import enhanced_role_colors_EnhancedRoleColorUtils from "enhanced_role_colors/EnhancedRoleColorUtils" /* 7403 */;
import useChatWidthDefault from "useChatWidth" /* 11020 */;
import ForumChannelStore from "ForumChannelStore" /* 11483 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4825 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let metroImportDefault;
let metroRequire;
function ForumPostUsername(arg0) {
  let authorColor;
  let authorColors;
  let authorId;
  let authorName;
  let containerStyle;
  let hasUnreads;
  let items1;
  let items2;
  let items3;
  let items4;
  let items5;
  let obj5;
  let roleDotStyle;
  let roleStyle;
  let suffix;
  let textStyle;
  let thread;
  ({ thread, authorId, authorName, authorColor, authorColors } = arg0);
  ({ containerStyle, roleDotStyle, textStyle, suffix, hasUnreads } = arg0);
  const tmp = closure_8();
  let num = 158;
  if (useForumChannelStore(thread.parent_id).layoutType === ForumLayout.ForumLayout.GRID) {
    num = 72;
  }
  const tmp4 = useChatWidthDefault();
  const diff = tmp4 - tmp2(11488).GRID_HORIZONTAL_PADDING - num;
  const items = [AccessibilityStore];
  const tmp2Result = get_initialized;
  const stateFromStores = tmp2Result.useStateFromStores(items, () => roleStyle.roleStyle);
  if ("username" === stateFromStores) {
    const tmp9 = hasUnreads ? {} : { opacity: 0.8 };
    const tmp2Result3 = enhanced_role_colors_EnhancedRoleColorUtils;
    const processColorStringsArray = tmp2Result3.useProcessColorStringsArray(authorColors);
    const guild_id = thread.guild_id;
    const useIsRoleStyleAndRoleColorsEligibleForERC = enhanced_role_colors_EnhancedRoleColorUtils.useIsRoleStyleAndRoleColorsEligibleForERC;
    let tmp20Result = null;
    const tmp2Result4 = enhanced_role_colors_EnhancedRoleColorUtils;
    if (null != authorName) {
      const obj2 = { style: items1, accessibilityRole: "button", children: items3 };
      const obj3 = { maxWidth: diff };
      const merged = Object.assign(tmp.authorContainer);
      items1 = [obj3, tmp9, containerStyle];
      let tmp24 = "dot" === stateFromStores && null != authorColor;
      if (tmp24) {
        const obj4 = { style: items2, children: metroRequire(native.RoleDot, obj5) };
        items2 = [tmp.roleDotContainer, roleDotStyle];
        obj5 = { size: "small", color: authorColor, colors: authorColors };
        tmp24 = metroRequire(tmp21, obj4);
      }
      items3 = [tmp24, ];
      let tmp26;
      const Text = tmp2(4832).Text;
      if (tmp18) {
        tmp26 = processColorStringsArray;
      }
      const obj6 = { variant: "text-sm/semibold", color: "mobile-text-heading-primary", gradientColors: tmp26, lineClamp: 1, style: items4, children: items5 };
      items4 = [{}, textStyle, tmp.authorName];
      items5 = [authorName, suffix];
      items3[1] = metroImportDefault(Text, obj6);
      tmp20Result = tmp20(tmp21, obj2);
    }
    return tmp20Result;
  }
}
const View = react_native.View;
const useForumChannelStore = ForumChannelStore.useForumChannelStore;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let closure_8 = createStyles.createStyles({ authorContainer: { flexDirection: "row", alignItems: "center", justifyContent: "center", marginEnd: 8 }, roleDotContainer: { alignItems: "center", justifyContent: "center", marginEnd: 2, marginBottom: 4 }, authorName: { overflow: "hidden", flexWrap: "nowrap" } });
const result = size.fileFinishedImporting("modules/forums/native/posts/ForumPostUsername.tsx");

export const ForumPostAuthor = function ForumPostAuthor(thread) {
  let author;
  let colorString;
  let colorStrings;
  let containerStyle;
  let hasUnreads;
  let id;
  let roleDotStyle;
  let suffix;
  let textStyle;
  let user;
  thread = thread.thread;
  ({ hasUnreads, suffix, containerStyle, roleDotStyle, textStyle } = thread);
  const obj = ForumHooks;
  const forumPostAuthor = obj.useForumPostAuthor(thread);
  ({ user, author } = forumPostAuthor);
  let nick;
  if (author != null) {
    nick = author.nick;
  }
  if (nick == null) {
    let username;
    if (user != null) {
      username = user.username;
    }
    nick = username;
  }
  if (author != null) {
    colorString = author.colorString;
  }
  if (author != null) {
    colorStrings = author.colorStrings;
  }
  let tmp5Result = null;
  if (null != user) {
    const obj2 = { thread, authorId: id, authorName: nick, authorColor: colorString, authorColors: colorStrings, suffix, containerStyle, roleDotStyle, textStyle, hasUnreads };
    id = undefined;
    const tmp5 = metroRequire;
    const tmp6 = ForumPostUsername;
    if (user != null) {
      id = user.id;
    }
    tmp5Result = tmp5(tmp6, obj2);
  }
  return tmp5Result;
};
export const ForumPostMessageAuthor = function ForumPostMessageAuthor(thread) {
  let authorColor;
  let authorColors;
  let authorName;
  let containerStyle;
  let hasUnreads;
  let id;
  let message;
  let roleDotStyle;
  let suffix;
  let textStyle;
  thread = thread.thread;
  ({ message, hasUnreads, suffix, containerStyle, roleDotStyle, textStyle } = thread);
  const obj = ForumHooks;
  const forumPostMessageAuthor = obj.useForumPostMessageAuthor(message, thread);
  const user = forumPostMessageAuthor.user;
  const obj2 = { thread, authorId: id, authorName, authorColor, authorColors, suffix, containerStyle, roleDotStyle, textStyle, hasUnreads };
  id = undefined;
  ({ authorName, authorColor, authorColors } = forumPostMessageAuthor);
  const tmp2 = metroRequire;
  const tmp3 = ForumPostUsername;
  if (user != null) {
    id = user.id;
  }
  return tmp2(tmp3, obj2);
};
