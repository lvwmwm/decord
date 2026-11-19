// Module ID: 12686
// Function ID: 12687
// Name: FriendsAnimation
// Dependencies: [1388, 5848, 21, 1360, 1414, 504, 4848, 4929, 2]
// Exports: default

// Module 12686 (FriendsAnimation)
import Fragment from "Fragment" /* 21 */;
import get_initialized from "get initialized" /* 504 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1414 */;
import UserUtils from "UserUtils" /* 4848 */;
import CheckpointConstants from "CheckpointConstants" /* 5848 */;
import UserStore from "UserStore" /* 1388 */;
import PlatformUtils from "utils/PlatformUtils" /* 1360 */;
import size from "module_2" /* 2 */;

let obj2;
const CHECKPOINT_PRIMARY = CheckpointConstants.CHECKPOINT_PRIMARY;
const jsx = Fragment.jsx;
let closure_5 = { "Avatar01/Stroke": "#000000", "Avatar01/Fill": CHECKPOINT_PRIMARY, "Avatar02/Stroke": "#000000", "Avatar02/Fill": CHECKPOINT_PRIMARY, "Avatar03/Stroke": "#000000", "Avatar03/Fill": CHECKPOINT_PRIMARY, "Avatar04/Stroke": "#000000", "Avatar04/Fill": CHECKPOINT_PRIMARY, "Avatar05/Stroke": "#000000", "Avatar05/Fill": CHECKPOINT_PRIMARY, ConnectorColor: CHECKPOINT_PRIMARY };
let tmp2;
if (PlatformUtils.isIOS()) {
  let referencedAssets = { "unifont-17.0.03": obj2 };
  obj2 = { source: { fileName: "ggsans-800-extrabold.ttf" } };
  tmp2 = referencedAssets;
}
referencedAssets = tmp2;
const result = size.fileFinishedImporting("modules/checkpoint/native/components/screens/stats/friends/FriendsAnimation.tsx");

export default function FriendsAnimation(animationState) {
  let currentUser;
  let firstUser;
  let isReducedMotion;
  let obj4;
  let secondUser;
  let sidekickUser;
  let str4;
  let twoFriends;
  let userAvatarURL;
  let userAvatarURL1;
  let userAvatarURL2;
  let userAvatarURL3;
  let userAvatarURL4;
  ({ sidekickUser, firstUser, secondUser, twoFriends, isReducedMotion } = animationState);
  animationState = animationState.animationState;
  referencedAssets = get_initialized;
  const items = [UserStore];
  const stateFromStores = referencedAssets.useStateFromStores(items, () => currentUser.getCurrentUser());
  const obj2 = UserUtils;
  let str = obj2.useName(sidekickUser);
  if (str == null) {
    str = "";
  }
  const toLocaleUpperCaseResult = str.toLocaleUpperCase();
  const tmpResult = UserUtils;
  let str2 = tmpResult.useName(firstUser);
  if (str2 == null) {
    str2 = "";
  }
  const toLocaleUpperCaseResult1 = str2.toLocaleUpperCase();
  const tmpResult2 = UserUtils;
  let str3 = tmpResult2.useName(secondUser);
  if (str3 == null) {
    str3 = "";
  }
  const toLocaleUpperCaseResult2 = str3.toLocaleUpperCase();
  if (twoFriends) {
    let str5 = "twoFriends";
    if (isReducedMotion) {
      str5 = "twoFriends-reducedMotion";
    }
    str4 = str5;
  } else {
    str4 = "threeFriends";
    if (isReducedMotion) {
      str4 = "threeFriends-reducedMotion";
    }
  }
  const obj3 = { referencedAssets, defaultViewModelInstance: str4, dataBinding: obj4 };
  obj4 = { AnimationState: animationState, "Avatar01/img": userAvatarURL, "Avatar02/img": userAvatarURL1, "Avatar03/img": userAvatarURL2, "Avatar04/img": userAvatarURL3, "Avatar05/img": userAvatarURL4, "Avatar01/Username": toLocaleUpperCaseResult, "Avatar02/Username": toLocaleUpperCaseResult2, "Avatar03/Username": toLocaleUpperCaseResult1, "Avatar04/Username": toLocaleUpperCaseResult, twoFriends };
  const CheckpointFriendsRive = tmp(4929).CheckpointFriendsRive;
  const merged = Object.assign(closure_5);
  userAvatarURL = undefined;
  const tmp7 = jsx;
  if (null != sidekickUser) {
    const obj7 = AvatarUtilsDefault;
    userAvatarURL = obj7.getUserAvatarURL(sidekickUser, false, 64, "png");
  }
  userAvatarURL1 = undefined;
  if (null != secondUser) {
    const obj8 = AvatarUtilsDefault;
    userAvatarURL1 = obj8.getUserAvatarURL(secondUser, false, 64, "png");
  }
  userAvatarURL2 = undefined;
  if (null != firstUser) {
    const obj9 = AvatarUtilsDefault;
    userAvatarURL2 = obj9.getUserAvatarURL(firstUser, false, 64, "png");
  }
  userAvatarURL3 = undefined;
  if (null != sidekickUser) {
    const obj10 = AvatarUtilsDefault;
    userAvatarURL3 = obj10.getUserAvatarURL(sidekickUser, false, 64, "png");
  }
  userAvatarURL4 = undefined;
  if (null != stateFromStores) {
    const obj11 = AvatarUtilsDefault;
    userAvatarURL4 = obj11.getUserAvatarURL(stateFromStores, false, 64, "png");
  }
  return tmp7(CheckpointFriendsRive, obj3);
};
