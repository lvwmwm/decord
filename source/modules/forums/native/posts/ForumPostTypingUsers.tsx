// Module ID: 11132
// Function ID: 86617
// Name: ForumPostTypingUsers
// Dependencies: []
// Exports: default

// Module 11132 (ForumPostTypingUsers)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_4, jsxs: closure_5 } = arg1(dependencyMap[2]));
let obj = arg1(dependencyMap[3]);
obj = { container: { positionBottom: null, positionRight: 0, text: 360, state: 0 }, lastTypingUser: { marginEnd: 0 } };
obj = { borderRadius: importDefault(dependencyMap[4]).radii.round };
obj.typingUser = obj;
const obj1 = { 9223372036854775807: "e341a934511095337dabafab8c60034b", 9223372036854775807: "empty_photos", 9223372036854775807: "png", 0: 54, 0: 660, 9223372036854775807: "100%", 0: 275, 9223372036854775807: "relative", 0: "flex", backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_BASE_LOWEST, paddingVertical: importDefault(dependencyMap[4]).space.PX_4, borderRadius: importDefault(dependencyMap[4]).radii.lg };
obj.dots = obj1;
obj.typingText = { flexShrink: 1 };
const tmp3 = arg1(dependencyMap[2]);
obj.borderColor = { color: importDefault(dependencyMap[4]).colors.CARD_BACKGROUND_DEFAULT };
const obj2 = { color: importDefault(dependencyMap[4]).colors.CARD_BACKGROUND_DEFAULT };
obj.borderColorPressed = { color: importDefault(dependencyMap[4]).colors.CARD_PRIMARY_PRESSED_BG };
let closure_6 = obj.createStyles(obj);
let closure_7 = { code: "function ForumPostTypingUsersTsx1(){const{forumPostPressedIn,borderColorPressed,borderColor}=this.__closure;return{borderColor:forumPostPressedIn.value?borderColorPressed:borderColor};}" };
const obj3 = { color: importDefault(dependencyMap[4]).colors.CARD_PRIMARY_PRESSED_BG };
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/forums/native/posts/ForumPostTypingUsers.tsx");

export default function ForumPostTypingUsers(hasUnreads) {
  let thread;
  let typingUserIds;
  ({ thread, typingUserIds } = hasUnreads);
  let callback;
  const tmp = callback();
  const arg1 = tmp;
  let obj = arg1(dependencyMap[5]);
  const facepileUsers = obj.useFacepileUsers(thread, typingUserIds);
  const importDefault = facepileUsers;
  obj = { channelId: thread.id, guildId: thread.getGuildId(), typingUserIds };
  const color = tmp.borderColor.color;
  const dependencyMap = color;
  const color2 = tmp.borderColorPressed.color;
  const View = color2;
  const tmp2 = importDefault(dependencyMap[6]);
  let obj2 = arg1(dependencyMap[7]);
  const forumPostContainerPressedIn = obj2.useForumPostContainerPressedIn();
  const tmp2Result = importDefault(dependencyMap[6])(obj);
  const fn = function _() {
    return { borderColor: forumPostContainerPressedIn.value ? color2 : color };
  };
  fn.__closure = { forumPostPressedIn: forumPostContainerPressedIn, borderColorPressed: color2, borderColor: color };
  fn.__workletHash = 6320844933544;
  fn.__initData = closure_7;
  const animatedStyle = arg1(dependencyMap[8]).useAnimatedStyle(fn);
  let str = "text-muted";
  if (hasUnreads.hasUnreads) {
    str = "text-default";
  }
  const guildId = thread.getGuildId();
  callback = guildId;
  let tmp7 = null;
  if (null != guildId) {
    tmp7 = null;
    if (0 !== facepileUsers.length) {
      obj = { style: tmp.container };
      const items = [
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
      obj1.children = forumPostContainerPressedIn(arg1(dependencyMap[9]).Ellipsis, {});
      items[1] = forumPostContainerPressedIn(importDefault(dependencyMap[8]).View, obj1);
      obj2 = { variant: "text-sm/semibold", color: str, style: tmp.typingText, lineClamp: 1, children: tmp2Result };
      items[2] = forumPostContainerPressedIn(arg1(dependencyMap[10]).Text, obj2);
      obj.children = items;
      tmp7 = animatedStyle(View, obj);
    }
  }
  return tmp7;
};
