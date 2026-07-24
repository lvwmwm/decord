// Module ID: 11173
// Function ID: 86949
// Name: ForumPostTypingUsers
// Dependencies: [31, 27, 33, 4130, 689, 9173, 11174, 11175, 3991, 1273, 4126, 2]
// Exports: default

// Module 11173 (ForumPostTypingUsers)
import "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
let require = arg1;
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
_createForOfIteratorHelperLoose = { container: { display: "flex", flexDirection: "row", alignItems: "center", flex: 1 }, lastTypingUser: { marginEnd: 0 } };
_createForOfIteratorHelperLoose = { marginEnd: -8, borderWidth: 2, borderRadius: require("_createForOfIteratorHelperLoose").radii.round };
_createForOfIteratorHelperLoose.typingUser = _createForOfIteratorHelperLoose;
let obj1 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWEST, paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_4, paddingLeft: 4, borderRadius: require("_createForOfIteratorHelperLoose").radii.lg, marginStart: -8, borderWidth: 4, marginEnd: 8, marginTop: -1, marginBottom: -1 };
_createForOfIteratorHelperLoose.dots = obj1;
_createForOfIteratorHelperLoose.typingText = { flexShrink: 1 };
_createForOfIteratorHelperLoose.borderColor = { color: require("_createForOfIteratorHelperLoose").colors.CARD_BACKGROUND_DEFAULT };
let obj2 = { color: require("_createForOfIteratorHelperLoose").colors.CARD_BACKGROUND_DEFAULT };
_createForOfIteratorHelperLoose.borderColorPressed = { color: require("_createForOfIteratorHelperLoose").colors.CARD_PRIMARY_PRESSED_BG };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let closure_7 = { code: "function ForumPostTypingUsersTsx1(){const{forumPostPressedIn,borderColorPressed,borderColor}=this.__closure;return{borderColor:forumPostPressedIn.value?borderColorPressed:borderColor};}" };
const obj3 = { color: require("_createForOfIteratorHelperLoose").colors.CARD_PRIMARY_PRESSED_BG };
const result = require("jsxProd").fileFinishedImporting("modules/forums/native/posts/ForumPostTypingUsers.tsx");

export default function ForumPostTypingUsers(hasUnreads) {
  let thread;
  let typingUserIds;
  ({ thread, typingUserIds } = hasUnreads);
  let guildId;
  const tmp = guildId();
  const require = tmp;
  let obj = require(color[5]);
  const facepileUsers = obj.useFacepileUsers(thread, typingUserIds);
  obj = { channelId: thread.id, guildId: thread.getGuildId(), typingUserIds };
  color = tmp.borderColor.color;
  const color2 = tmp.borderColorPressed.color;
  const tmp2 = facepileUsers(color[6]);
  let obj2 = require(color[7]);
  const forumPostContainerPressedIn = obj2.useForumPostContainerPressedIn();
  const tmp2Result = facepileUsers(color[6])(obj);
  const fn = function _() {
    return { borderColor: forumPostContainerPressedIn.value ? color2 : color };
  };
  fn.__closure = { forumPostPressedIn: forumPostContainerPressedIn, borderColorPressed: color2, borderColor: color };
  fn.__workletHash = 6320844933544;
  fn.__initData = closure_7;
  const animatedStyle = require(color[8]).useAnimatedStyle(fn);
  let str = "text-muted";
  if (hasUnreads.hasUnreads) {
    str = "text-default";
  }
  guildId = thread.getGuildId();
  let tmp7 = null;
  if (null != guildId) {
    tmp7 = null;
    if (0 !== facepileUsers.length) {
      obj = { style: tmp.container };
      let items = [
        facepileUsers.map((getAvatarSource) => {
              let obj = {};
              const items = [forumPostContainerPressedIn.typingUser, animatedStyle, ];
              let lastTypingUser = arg1 === facepileUsers.length - 1;
              if (lastTypingUser) {
                lastTypingUser = tmp.lastTypingUser;
              }
              items[2] = lastTypingUser;
              obj.style = items;
              obj = { source: getAvatarSource.getAvatarSource(guildId), size: forumPostContainerPressedIn(color[9]).AvatarSizes.SIZE_16 };
              obj.children = forumPostContainerPressedIn(forumPostContainerPressedIn(color[9]).Avatar, obj);
              return forumPostContainerPressedIn(facepileUsers(color[8]).View, obj, getAvatarSource.id);
            }),
  ,

      ];
      const obj1 = {};
      const items1 = [tmp.dots, animatedStyle];
      obj1.style = items1;
      obj1.children = forumPostContainerPressedIn(require(color[9]).Ellipsis, {});
      items[1] = forumPostContainerPressedIn(facepileUsers(color[8]).View, obj1);
      obj2 = { variant: "text-sm/semibold", color: str, style: tmp.typingText, lineClamp: 1, children: tmp2Result };
      items[2] = forumPostContainerPressedIn(require(color[10]).Text, obj2);
      obj.children = items;
      tmp7 = animatedStyle(color2, obj);
    }
  }
  return tmp7;
};
