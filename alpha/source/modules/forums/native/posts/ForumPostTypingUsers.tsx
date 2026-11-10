// Module ID: 14041
// Function ID: 14042
// Name: ForumPostTypingUsers
// Dependencies: [19, 17, 21, 5142, 575, 9964, 13990, 14042, 1652, 1187, 5753, 2]
// Exports: default

// Module 14041 (ForumPostTypingUsers)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import native from "native" /* 1187 */;
import _modDef1652 from "module_1652" /* 1652 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5142 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

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
let closure_7 = { code: "(function ForumPostTypingUsersTsx1(){let[forumPostPressedIn,borderColorPressed,borderColor]=this.__closure;return{borderColor:forumPostPressedIn.value?borderColorPressed:borderColor};})" };
const result = size.fileFinishedImporting("modules/forums/native/posts/ForumPostTypingUsers.tsx");

export default function ForumPostTypingUsers(hasUnreads) {
  let closure_0;
  let items2;
  let items3;
  let thread;
  let tmp10;
  let tmp11;
  let tmp8;
  let tmp9;
  let typingUserIds;
  ({ thread, typingUserIds } = hasUnreads);
  let animatedStyle;
  let guildId;
  hasUnreads = hasUnreads.hasUnreads;
  const tmp = closure_6();
  const _require = tmp;
  let obj = require("ForumHooks");
  const facepileUsers = obj.useFacepileUsers(thread, typingUserIds);
  let obj2 = { channelId: thread.id, guildId: thread.getGuildId(), typingUserIds };
  const color = tmp.borderColor.color;
  const color2 = tmp.borderColorPressed.color;
  const tmp5 = facepileUsers(animatedStyle[6]);
  const tmp5Result = tmp5(obj2);
  const obj3 = require("ForumPostContainer");
  const forumPostContainerPressedIn = obj3.useForumPostContainerPressedIn();
  let items = [closure_7, forumPostContainerPressedIn, color2, color];
  let c0;
  let c1;
  let c2;
  [tmp8, tmp9, tmp10, tmp11] = items;
  const obj4 = require("module_1652");
  const tmp4 = facepileUsers;
  class ForumPostTypingUsersTsx1 {
    constructor() {
      return { borderColor: _undefined.value ? c1 : c2 };
    }
  }
  const items1 = [tmp9, tmp10, tmp11];
  ForumPostTypingUsersTsx1.__closure = items1;
  ForumPostTypingUsersTsx1.__workletHash = 15202435957297;
  ForumPostTypingUsersTsx1.__initData = tmp8;
  animatedStyle = obj4.useAnimatedStyle(ForumPostTypingUsersTsx1);
  let str = "text-muted";
  if (hasUnreads) {
    str = "text-default";
  }
  guildId = thread.getGuildId();
  let tmp14 = null;
  if (null != guildId) {
    tmp14 = null;
    if (0 !== facepileUsers.length) {
      const obj5 = { style: tmp.container, children: items2 };
      items2 = [
        facepileUsers.map((getAvatarSource, index) => {
              let Avatar;
              let obj2;
              const items = [closure_0.typingUser, animatedStyle, ];
              let lastTypingUser = index === facepileUsers.length - 1;
              View = _modDef1652.View;
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
      const obj6 = { style: items3, children: closure_4(require("native").Ellipsis, {}) };
      items3 = [tmp.dots, animatedStyle];
      View = tmp4(tmp3[8]).View;
      items2[1] = closure_4(View, obj6);
      const obj7 = { variant: "body-sm/semibold", color: str, style: tmp.typingText, lineClamp: 1, children: tmp5Result };
      items2[2] = closure_4(require("Text/Text").Text, obj7);
      tmp14 = closure_5(guildId, obj5);
    }
  }
  return tmp14;
};
