// Module ID: 7702
// Function ID: 7703
// Name: UserProfileAvatar
// Dependencies: [19, 17, 7628, 6629, 21, 7687, 7703, 7635, 7706, 1115, 2]
// Exports: OpenableUserProfileAvatar

// Module 7702 (UserProfileAvatar)
import react_native from "react-native" /* 17 */;
import Constants from "Constants" /* 6629 */;
import Constants2 from "Constants" /* 7628 */;
import UserProfileSharedStylesDefault from "UserProfileSharedStyles" /* 7687 */;
import HeaderAvatarDefault from "HeaderAvatar" /* 7703 */;
import openUserProfileAvatarMediaViewerDefault from "openUserProfileAvatarMediaViewer" /* 7706 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import size_mod from "module_2" /* 2 */;

let c9;
let metroImportAll;
let metroImportDefault;
const View = react_native.View;
const TrackUserProfileActions = Constants2.TrackUserProfileActions;
const AVATAR_SIZE_VARIANT = Constants.AVATAR_SIZE_VARIANT;
({ jsx: metroImportDefault, Fragment: metroImportAll, jsxs: c9 } = Fragment);
const forwardRefResult = react.forwardRef((size, ref) => {
  let items;
  let items1;
  let items2;
  size = size.size;
  const backgroundColor = size.backgroundColor;
  if (size === undefined) {
    size = AVATAR_SIZE_VARIANT;
  }
  const merged = Object.assign(size, Object.assign({ backgroundColor: 0, size: 0 }));
  const tmp2 = UserProfileSharedStylesDefault();
  const obj2 = { style: items };
  items = [, , ];
  const obj = { children: items1 };
  ({ avatarBackground: arr[0], avatarPosition: arr[1] } = tmp2);
  items[2] = { backgroundColor };
  items1 = [metroImportDefault(View, obj2), ];
  const obj3 = { ref, style: items2, size };
  items2 = [, ];
  ({ avatar: arr3[0], avatarPosition: arr3[1] } = tmp2);
  const tmp3 = HeaderAvatarDefault;
  const merged1 = Object.assign(merged);
  items1[1] = metroImportDefault(tmp3, obj3);
  return React4(metroImportAll, obj);
});
let c10 = forwardRefResult;
let size = size_mod;
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileAvatar.tsx");

export default forwardRefResult;
export const OpenableUserProfileAvatar = function OpenableUserProfileAvatar(animate) {
  let accessibilityLabel;
  let tmp10;
  let flag = animate.animate;
  if (flag === undefined) {
    flag = true;
  }
  const user = animate.user;
  const guildId = animate.guildId;
  const merged = Object.assign(animate, Object.assign({ animate: 0, user: 0, guildId: 0 }));
  let ref;
  let obj = ref;
  ref = ref.useRef(null);
  let obj2 = flag(guildId[7]);
  const trackUserProfileAction = obj2.useUserProfileAnalyticsContext().trackUserProfileAction;
  const tmp5 = null != user.avatar || user.hasAvatarForGuild(guildId);
  const items = [flag, guildId, trackUserProfileAction, user];
  const obj3 = { ref, animate: flag, user, guildId, onPress: tmp10, accessibilityLabel };
  const callback = obj.useCallback(() => {
    const obj = { action: TrackUserProfileActions.VIEW_AVATAR };
    trackUserProfileAction(obj);
    const obj2 = { user, guildId, animate: flag, originViewOrOriginLayout: ref.current };
    openUserProfileAvatarMediaViewerDefault(obj2);
  }, items);
  const merged1 = Object.assign(merged);
  tmp10 = undefined;
  const tmp7 = closure_7;
  const tmp8 = closure_10;
  if (tmp5) {
    tmp10 = callback;
  }
  if (tmp5) {
    const intl = tmp3(tmp4[9]).intl;
    accessibilityLabel = intl.string(tmp3(tmp4[9]).t.xB7MI3);
  } else {
    accessibilityLabel = merged.accessibilityLabel;
  }
  return tmp7(tmp8, obj3);
};
