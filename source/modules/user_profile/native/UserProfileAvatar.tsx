// Module ID: 8251
// Function ID: 65095
// Name: OpenableUserProfileAvatar
// Dependencies: []
// Exports: OpenableUserProfileAvatar

// Module 8251 (OpenableUserProfileAvatar)
const importAllResult = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const TrackUserProfileActions = arg1(dependencyMap[2]).TrackUserProfileActions;
const AVATAR_SIZE_VARIANT = arg1(dependencyMap[3]).AVATAR_SIZE_VARIANT;
({ jsx: closure_7, Fragment: closure_8, jsxs: closure_9 } = arg1(dependencyMap[4]));
const forwardRefResult = importAllResult.forwardRef((backgroundColor, ref) => {
  let size = backgroundColor.size;
  if (size === undefined) {
    size = AVATAR_SIZE_VARIANT;
  }
  let obj = Object.create(null);
  obj.backgroundColor = 0;
  obj.size = 0;
  const merged = Object.assign(backgroundColor, obj);
  const tmp3 = importDefault(dependencyMap[5])();
  obj = {};
  const items = [, , ];
  ({ avatarBackground: arr[0], avatarPosition: arr[1] } = tmp3);
  items[2] = { backgroundColor: backgroundColor.backgroundColor };
  const items1 = [callback(View, { style: items }), ];
  obj = { ref, style: items2 };
  const items2 = [, ];
  ({ avatar: arr3[0], avatarPosition: arr3[1] } = tmp3);
  obj.size = size;
  const merged1 = Object.assign(merged);
  items1[1] = callback(importDefault(dependencyMap[6]), obj);
  obj.children = items1;
  return callback2(closure_8, obj);
});
const tmp2 = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/user_profile/native/UserProfileAvatar.tsx");

export default forwardRefResult;
export const OpenableUserProfileAvatar = function OpenableUserProfileAvatar(animate) {
  let flag = animate.animate;
  if (flag === undefined) {
    flag = true;
  }
  const arg1 = flag;
  const user = animate.user;
  const importDefault = user;
  const guildId = animate.guildId;
  const dependencyMap = guildId;
  let obj = {};
  Object.setPrototypeOf(null);
  const merged = Object.assign(animate, obj);
  let importAllResult;
  let View;
  const ref = importAllResult.useRef(null);
  importAllResult = ref;
  const trackUserProfileAction = arg1(dependencyMap[7]).useUserProfileAnalyticsContext().trackUserProfileAction;
  View = trackUserProfileAction;
  const items = [flag, guildId, trackUserProfileAction, user];
  obj = { ref };
  const callback = importAllResult.useCallback(() => {
    let obj = { action: constants.VIEW_AVATAR };
    trackUserProfileAction(obj);
    obj = { user, guildId, animate: flag, originViewOrOriginLayout: ref.current, description: user.username };
    user(guildId[8])(obj);
  }, items);
  const merged1 = Object.assign(merged);
  obj["animate"] = flag;
  obj["user"] = user;
  obj["guildId"] = guildId;
  obj["onPress"] = callback;
  const intl = arg1(dependencyMap[9]).intl;
  obj["accessibilityLabel"] = intl.string(arg1(dependencyMap[9]).t.xB7MI3);
  return callback(forwardRefResult, obj);
};
