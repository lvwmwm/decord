// Module ID: 11501
// Function ID: 11502
// Name: ForumPostTypingUsers
// Dependencies: [19, 17, 21, 4836, 576, 7310, 11461, 11502, 4566, 1177, 4832, 2]
// Exports: default

// Module 11501 (ForumPostTypingUsers)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1177 */;
import ReanimatedRexportDefault from "ReanimatedRexport" /* 4566 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
let obj4;
let obj5;
let View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { display: "flex", flexDirection: "row", alignItems: "center", flex: 1 }, lastTypingUser: { marginEnd: 0 }, typingUser: obj2, dots: obj3, typingText: { flexShrink: 1 }, borderColor: obj4, borderColorPressed: obj5 };
obj2 = { marginEnd: -8, borderWidth: 2, borderRadius: nativeDefault.radii.round };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, paddingVertical: nativeDefault.space.PX_4, paddingLeft: 4, borderRadius: nativeDefault.radii.lg, marginStart: -8, borderWidth: 4, marginEnd: 8, marginTop: -1, marginBottom: -1 };
obj4 = { color: nativeDefault.colors.CARD_BACKGROUND_DEFAULT };
obj5 = { color: nativeDefault.colors.CARD_PRIMARY_PRESSED_BG };
let closure_6 = createStyles(obj);
const __initData = { code: "function ForumPostTypingUsersTsx1(){const{forumPostPressedIn,borderColorPressed,borderColor}=this.__closure;return{borderColor:forumPostPressedIn.value?borderColorPressed:borderColor};}" };
const result = size.fileFinishedImporting("modules/forums/native/posts/ForumPostTypingUsers.tsx");

export default function ForumPostTypingUsers(hasUnreads) {
  let closure_0;
  let items;
  let items1;
  let thread;
  let typingUserIds;
  ({ thread, typingUserIds } = hasUnreads);
  let color;
  let guildId;
  hasUnreads = hasUnreads.hasUnreads;
  const tmp = guildId();
  _require = tmp;
  let obj = require("ForumHooks");
  const facepileUsers = obj.useFacepileUsers(thread, typingUserIds);
  let obj2 = { channelId: thread.id, guildId: thread.getGuildId(), typingUserIds };
  const tmp5 = facepileUsers(color[6]);
  color = tmp.borderColor.color;
  const color2 = tmp.borderColorPressed.color;
  const tmp5Result = tmp5(obj2);
  const obj3 = require("ForumPostContainer");
  const forumPostContainerPressedIn = obj3.useForumPostContainerPressedIn();
  const fn = function _() {
    return { borderColor: forumPostContainerPressedIn.value ? color2 : color };
  };
  fn.__closure = { forumPostPressedIn: forumPostContainerPressedIn, borderColorPressed: color2, borderColor: color };
  fn.__workletHash = 6320844933544;
  fn.__initData = __initData;
  const obj4 = require("ReanimatedRexport");
  const animatedStyle = obj4.useAnimatedStyle(fn);
  let str = "text-muted";
  const tmp4 = facepileUsers;
  if (hasUnreads) {
    str = "text-default";
  }
  guildId = thread.getGuildId();
  let tmp10 = null;
  if (null != guildId) {
    tmp10 = null;
    if (0 !== facepileUsers.length) {
      const obj5 = { style: tmp.container, children: items };
      items = [
        facepileUsers.map((getAvatarSource, index) => {
              let Avatar;
              let obj2;
              const items = [closure_0.typingUser, animatedStyle, ];
              let lastTypingUser = index === facepileUsers.length - 1;
              View = ReanimatedRexportDefault.View;
              if (lastTypingUser) {
                lastTypingUser = closure_0.lastTypingUser;
              }
              items[2] = lastTypingUser;
              const obj = { style: items, children: React3(Avatar, obj2) };
              obj2 = { source: getAvatarSource.getAvatarSource(guildId), size: native.AvatarSizes.SIZE_16 };
              Avatar = native.Avatar;
              return React3(View, obj, getAvatarSource.id);
            }),
  ,

      ];
      const obj6 = { style: items1, children: forumPostContainerPressedIn(require("native").Ellipsis, {}) };
      items1 = [tmp.dots, animatedStyle];
      View = tmp4(tmp3[8]).View;
      items[1] = forumPostContainerPressedIn(View, obj6);
      const obj7 = { variant: "text-sm/semibold", color: str, style: tmp.typingText, lineClamp: 1, children: tmp5Result };
      items[2] = forumPostContainerPressedIn(require("Text/Text").Text, obj7);
      tmp10 = animatedStyle(color2, obj5);
    }
  }
  return tmp10;
};
