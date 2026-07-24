// Module ID: 8307
// Function ID: 65397
// Name: OpenableUserProfileAvatar
// Dependencies: [31, 27, 8308, 5510, 33, 8282, 7967, 8310, 8317, 1212, 2]
// Exports: OpenableUserProfileAvatar

// Module 8307 (OpenableUserProfileAvatar)
import importAllResult from "result";
import { View } from "get ActivityIndicator";
import { TrackUserProfileActions } from "USER_PROFILE_TOOLTIP_DELAY";
import { AVATAR_SIZE_VARIANT } from "ARBITRARY_LARGE_OFFSET";
import jsxProd from "jsxProd";

let closure_7;
let closure_8;
let closure_9;
const require = arg1;
({ jsx: closure_7, Fragment: closure_8, jsxs: closure_9 } = jsxProd);
const forwardRefResult = importAllResult.forwardRef((backgroundColor, ref) => {
  let size = backgroundColor.size;
  if (size === undefined) {
    size = AVATAR_SIZE_VARIANT;
  }
  let obj = Object.create(null);
  obj.backgroundColor = 0;
  obj.size = 0;
  const merged = Object.assign(backgroundColor, obj);
  const tmp3 = importDefault(8282)();
  obj = {};
  const items = [, , ];
  ({ avatarBackground: arr[0], avatarPosition: arr[1] } = tmp3);
  items[2] = { backgroundColor: backgroundColor.backgroundColor };
  const items1 = [callback(View, { style: items }), ];
  obj = { ref, style: items2 };
  items2 = [, ];
  ({ avatar: arr3[0], avatarPosition: arr3[1] } = tmp3);
  obj.size = size;
  const merged1 = Object.assign(merged);
  items1[1] = callback(importDefault(7967), obj);
  obj.children = items1;
  return callback2(closure_8, obj);
});
const result = require("USER_PROFILE_TOOLTIP_DELAY").fileFinishedImporting("modules/user_profile/native/UserProfileAvatar.tsx");

export default forwardRefResult;
export const OpenableUserProfileAvatar = function OpenableUserProfileAvatar(animate) {
  let flag = animate.animate;
  if (flag === undefined) {
    flag = true;
  }
  const user = animate.user;
  const guildId = animate.guildId;
  let obj = { animate: 0, user: 0, guildId: 0 };
  Object.setPrototypeOf(null);
  const merged = Object.assign(animate, obj);
  let ref;
  let trackUserProfileAction;
  ref = ref.useRef(null);
  trackUserProfileAction = flag(guildId[7]).useUserProfileAnalyticsContext().trackUserProfileAction;
  const tmp4 = null != user.avatar || user.hasAvatarForGuild(guildId);
  const items = [flag, guildId, trackUserProfileAction, user];
  obj = { ref };
  const callback = ref.useCallback(() => {
    let obj = { action: outer1_5.VIEW_AVATAR };
    trackUserProfileAction(obj);
    obj = { user, guildId, animate: flag, originViewOrOriginLayout: ref.current };
    user(guildId[8])(obj);
  }, items);
  const merged1 = Object.assign(merged);
  obj["animate"] = flag;
  obj["user"] = user;
  obj["guildId"] = guildId;
  let tmp9;
  if (tmp4) {
    tmp9 = callback;
  }
  obj["onPress"] = tmp9;
  if (tmp4) {
    const intl = flag(guildId[9]).intl;
    let accessibilityLabel = intl.string(flag(guildId[9]).t.xB7MI3);
  } else {
    accessibilityLabel = merged.accessibilityLabel;
  }
  obj["accessibilityLabel"] = accessibilityLabel;
  return closure_7(closure_10, obj);
};
