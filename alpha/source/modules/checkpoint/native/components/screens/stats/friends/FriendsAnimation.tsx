// Module ID: 12859
// Function ID: 12860
// Name: FriendsAnimation
// Dependencies: [17, 1386, 6365, 21, 1358, 5012, 1412, 504, 1494, 5068, 5149, 2]
// Exports: default

// Module 12859 (FriendsAnimation)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import get_initialized from "get initialized" /* 504 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1412 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1494 */;
import UserUtils from "UserUtils" /* 5068 */;
import CheckpointConstants from "CheckpointConstants" /* 6365 */;
import UserStore from "UserStore" /* 1386 */;
import PlatformUtils from "utils/PlatformUtils" /* 1358 */;
import createStyles from "createStyles" /* 5012 */;
import size_mod from "module_2" /* 2 */;

let obj2;
const View = react_native.View;
const CHECKPOINT_PRIMARY = CheckpointConstants.CHECKPOINT_PRIMARY;
const jsx = Fragment.jsx;
let closure_6 = { "Avatar01/Stroke": "#000000", "Avatar01/Fill": CHECKPOINT_PRIMARY, "Avatar02/Stroke": "#000000", "Avatar02/Fill": CHECKPOINT_PRIMARY, "Avatar03/Stroke": "#000000", "Avatar03/Fill": CHECKPOINT_PRIMARY, "Avatar04/Stroke": "#000000", "Avatar04/Fill": CHECKPOINT_PRIMARY, "Avatar05/Stroke": "#000000", "Avatar05/Fill": CHECKPOINT_PRIMARY, ConnectorColor: CHECKPOINT_PRIMARY };
let tmp2;
if (PlatformUtils.isIOS()) {
  let referencedAssets = { "unifont-17.0.03": obj2 };
  obj2 = { source: { fileName: "ggsans-800-extrabold.ttf" } };
  tmp2 = referencedAssets;
}
referencedAssets = tmp2;
let closure_8 = createStyles.createStyles({ overflow: { position: "absolute", left: "50%", top: "50%" } });
let size = size_mod;
let result = size.fileFinishedImporting("modules/checkpoint/native/components/screens/stats/friends/FriendsAnimation.tsx");

export default function FriendsAnimation(animationState) {
  let artboardFrame;
  let centerX;
  let centerY;
  let currentUser;
  let firstUser;
  let height;
  let isReducedMotion;
  let items2;
  let secondUser;
  let sidekickUser;
  let str4;
  let twoFriends;
  let userAvatarURL;
  let userAvatarURL1;
  let userAvatarURL2;
  let userAvatarURL3;
  let userAvatarURL4;
  let width;
  ({ sidekickUser, firstUser, secondUser, twoFriends, isReducedMotion, artboardFrame } = animationState);
  animationState = animationState.animationState;
  const tmp = closure_8();
  referencedAssets = get_initialized;
  const items = [UserStore];
  const stateFromStores = referencedAssets.useStateFromStores(items, () => currentUser.getCurrentUser());
  ({ width, height } = useWindowDimensionsDefault({ ignoreKeyboard: true }));
  useWindowDimensionsDefault({ ignoreKeyboard: true });
  const obj2 = UserUtils;
  let str = obj2.useName(sidekickUser);
  if (str == null) {
    str = "";
  }
  const toLocaleUpperCaseResult = str.toLocaleUpperCase();
  const tmp2Result = UserUtils;
  let str2 = tmp2Result.useName(firstUser);
  if (str2 == null) {
    str2 = "";
  }
  const toLocaleUpperCaseResult1 = str2.toLocaleUpperCase();
  const tmp2Result2 = UserUtils;
  let str3 = tmp2Result2.useName(secondUser);
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
  let str6;
  const CheckpointFriendsRive = tmp2(5149).CheckpointFriendsRive;
  if (null != artboardFrame) {
    str6 = "layout";
  }
  const obj4 = { AnimationState: animationState, "Avatar01/img": userAvatarURL, "Avatar02/img": userAvatarURL1, "Avatar03/img": userAvatarURL2, "Avatar04/img": userAvatarURL3, "Avatar05/img": userAvatarURL4, "Avatar01/Username": toLocaleUpperCaseResult, "Avatar02/Username": toLocaleUpperCaseResult2, "Avatar03/Username": toLocaleUpperCaseResult1, "Avatar04/Username": toLocaleUpperCaseResult, twoFriends };
  const merged = Object.assign(closure_6);
  userAvatarURL = undefined;
  if (null != sidekickUser) {
    const tmp5Result = AvatarUtilsDefault;
    userAvatarURL = tmp5Result.getUserAvatarURL(sidekickUser, false, 64, "png");
  }
  userAvatarURL1 = undefined;
  if (null != secondUser) {
    const tmp5Result5 = AvatarUtilsDefault;
    userAvatarURL1 = tmp5Result5.getUserAvatarURL(secondUser, false, 64, "png");
  }
  userAvatarURL2 = undefined;
  if (null != firstUser) {
    const tmp5Result6 = AvatarUtilsDefault;
    userAvatarURL2 = tmp5Result6.getUserAvatarURL(firstUser, false, 64, "png");
  }
  userAvatarURL3 = undefined;
  if (null != sidekickUser) {
    const tmp5Result7 = AvatarUtilsDefault;
    userAvatarURL3 = tmp5Result7.getUserAvatarURL(sidekickUser, false, 64, "png");
  }
  userAvatarURL4 = undefined;
  if (null != stateFromStores) {
    const tmp5Result8 = AvatarUtilsDefault;
    userAvatarURL4 = tmp5Result8.getUserAvatarURL(stateFromStores, false, 64, "png");
  }
  const tmp10Result = <CheckpointFriendsRive fit={str6} referencedAssets={referencedAssets} defaultViewModelInstance={str4} dataBinding={obj4} />;
  if (null == artboardFrame) {
    return tmp10Result;
  } else {
    ({ centerX, centerY } = artboardFrame);
    const result = artboardFrame.size / 375;
    const _Math = Math;
    const result1 = Math.max(centerX, width - centerX) / result;
    const _Math2 = Math;
    const result2 = Math.max(centerY, height - centerY) / result;
    const items1 = [tmp.overflow, ];
    size = { width: 2 * result1, height: 2 * result2, marginLeft: -result1, marginTop: -result2, transform: items2 };
    items2 = [{ scale: result }];
    const obj6 = { scale: result };
    items1[1] = size;
    return <View style={items1}>{tmp10Result}</View>;
  }
};
