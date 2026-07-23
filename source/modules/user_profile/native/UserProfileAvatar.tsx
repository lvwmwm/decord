// Module ID: 8263
// Function ID: 65169
// Name: OpenableUserProfileAvatar
// Dependencies: [31, 27, 8264, 5512, 33, 8238, 7880, 8266, 8273, 1212, 2]
// Exports: OpenableUserProfileAvatar

// Module 8263 (OpenableUserProfileAvatar)
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
  const tmp3 = importDefault(8238)();
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
  items1[1] = callback(importDefault(7880), obj);
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
  const items = [flag, guildId, trackUserProfileAction, user];
  obj = { ref };
  const callback = ref.useCallback(() => {
    let obj = { action: outer1_5.VIEW_AVATAR };
    trackUserProfileAction(obj);
    obj = { user, guildId, animate: flag, originViewOrOriginLayout: ref.current, description: user.username };
    user(guildId[8])(obj);
  }, items);
  const merged1 = Object.assign(merged);
  obj["animate"] = flag;
  obj["user"] = user;
  obj["guildId"] = guildId;
  obj["onPress"] = callback;
  const intl = flag(guildId[9]).intl;
  obj["accessibilityLabel"] = intl.string(flag(guildId[9]).t.xB7MI3);
  return callback(closure_10, obj);
};
