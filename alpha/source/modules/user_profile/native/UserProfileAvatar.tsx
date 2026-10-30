// Module ID: 8820
// Function ID: 8821
// Name: UserProfileAvatar
// Dependencies: [19, 17, 8746, 7371, 21, 8806, 8821, 8753, 8824, 1114, 2]
// Exports: OpenableUserProfileAvatar

// Module 8820 (UserProfileAvatar)
import react_native from "react-native" /* 17 */;
import Constants from "Constants" /* 7371 */;
import Constants2 from "Constants" /* 8746 */;
import UserProfileSharedStylesDefault from "UserProfileSharedStyles" /* 8806 */;
import HeaderAvatarDefault from "HeaderAvatar" /* 8821 */;
import openUserProfileAvatarMediaViewerDefault from "openUserProfileAvatarMediaViewer" /* 8824 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import size_mod from "module_2" /* 2 */;

let c9;
let metroImportAll;
let metroImportDefault;
class UserProfileAvatar {
  constructor(size) {
    let items;
    let items1;
    let items2;
    size = size.size;
    const backgroundColor = size.backgroundColor;
    if (size === undefined) {
      size = AVATAR_SIZE_VARIANT;
    }
    const ref = size.ref;
    const merged = Object.assign(size, Object.assign({ backgroundColor: 0, size: 0, ref: 0 }));
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
  }
}
const View = react_native.View;
const TrackUserProfileActions = Constants2.TrackUserProfileActions;
const AVATAR_SIZE_VARIANT = Constants.AVATAR_SIZE_VARIANT;
({ jsx: metroImportDefault, Fragment: metroImportAll, jsxs: c9 } = Fragment);
let size = size_mod;
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileAvatar.tsx");

export default UserProfileAvatar;
export function OpenableUserProfileAvatar(animate) {
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
  const tmp8 = UserProfileAvatar;
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
}
