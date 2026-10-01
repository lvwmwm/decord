// Module ID: 12689
// Function ID: 12690
// Name: UserProfileIncomingFriendRequest
// Dependencies: [19, 17, 21, 4836, 576, 7687, 7635, 6583, 12690, 4988, 6589, 4832, 1115, 1177, 1397, 12691, 5281, 2]
// Exports: default

// Module 12689 (UserProfileIncomingFriendRequest)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1177 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1397 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let importDefault;

let hasOwnProperty;
let metroRequire;
let obj2;
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let obj = { container: { rowGap: 16, flexDirection: "column" }, buttons: { flexDirection: "row", columnGap: 12 }, gameIcon: { paddingTop: 2 }, friendRequestNote: obj2 };
obj2 = { borderWidth: 1, borderColor: nativeDefault.colors.BORDER_STRONG };
let closure_7 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileIncomingFriendRequest.tsx");

export default function UserProfileIncomingFriendRequest(style) {
  let applicationId;
  let channelId;
  let gameIcon;
  let guildId;
  let intl2;
  let intl3;
  let isGameRelationship;
  let items2;
  let items3;
  let items4;
  let name1;
  let showUserProfile;
  let tmp13Result;
  let user;
  ({ user, isGameRelationship } = style);
  ({ channelId, guildId } = style);
  if (isGameRelationship === undefined) {
    isGameRelationship = false;
  }
  ({ applicationId, showUserProfile } = style);
  let trackUserProfileAction;
  style = style.style;
  const tmp = closure_7();
  importDefault = tmp;
  let tmp2 = importDefault;
  const tmp4 = require("UserProfileSharedStyles")();
  let obj = isGameRelationship(trackUserProfileAction[6]);
  trackUserProfileAction = obj.useUserProfileAnalyticsContext().trackUserProfileAction;
  const newestAnalyticsLocation = require("useAnalyticsLocations")().newestAnalyticsLocation;
  let obj2 = isGameRelationship(trackUserProfileAction[8]);
  const obj3 = { userId: user.id, applicationId, isGameRelationship, location: newestAnalyticsLocation, onConfirm: showUserProfile, onCancel: showUserProfile };
  const friendRequestActions = obj2.useFriendRequestActions(obj3);
  const acceptFriendRequest = friendRequestActions.acceptFriendRequest;
  const cancelFriendRequest = friendRequestActions.cancelFriendRequest;
  let obj4 = require("NicknameUtils");
  const name = obj4.useName(guildId, channelId, user);
  const items = [acceptFriendRequest, isGameRelationship, trackUserProfileAction];
  const items1 = [cancelFriendRequest, isGameRelationship, trackUserProfileAction];
  const callback = acceptFriendRequest.useCallback(() => {
    acceptFriendRequest();
    let str = "ACCEPT_FRIEND_REQUEST";
    const tmp2 = trackUserProfileAction;
    if (isGameRelationship) {
      str = "ACCEPT_GAME_FRIEND_REQUEST";
    }
    tmp2({ action: str });
  }, items);
  const callback1 = acceptFriendRequest.useCallback(() => {
    cancelFriendRequest();
    let str = "IGNORE_FRIEND_REQUEST";
    const tmp2 = trackUserProfileAction;
    if (isGameRelationship) {
      str = "IGNORE_GAME_FRIEND_REQUEST";
    }
    tmp2({ action: str });
  }, items1);
  const obj5 = isGameRelationship(trackUserProfileAction[10]);
  const getOrFetchApplication = obj5.useGetOrFetchApplication(applicationId);
  if (null == applicationId) {
    let tmp16;
    const obj6 = { style: items2, children: items3 };
    items2 = [tmp.container, tmp4.card, style];
    const obj7 = { variant: "text-sm/semibold", color: "text-default", children: null };
    const Text = tmp5(tmp3[11]).Text;
    const intl = tmp5(tmp3[12]).intl;
    const format = intl.format;
    const t = tmp5(tmp3[12]).t;
    if (null != applicationId) {
      const obj8 = {
        username: name,
        applicationName: name1,
        applicationIcon() {
              let obj2;
              let obj4;
              let tmp2 = null;
              if (null != getOrFetchApplication) {
                const obj = { source: obj2.getApplicationIconSource(obj4), size: native.AvatarSizes.XXSMALL, style: gameIcon.gameIcon };
                const Avatar = native.Avatar;
                obj4 = { id: null, icon: null };
                ({ id: obj3.id, icon: obj3.icon } = getOrFetchApplication);
                obj2 = AvatarUtilsDefault;
                tmp2 = hasOwnProperty(Avatar, obj, tmp.id);
              }
              return tmp2;
            }
      };
      name1 = undefined;
      const tmp17 = isGameRelationship ? t.syHjLL : t.V15uUI;
      if (getOrFetchApplication != null) {
        name1 = getOrFetchApplication.name;
      }
      obj7.children = format(tmp17, obj8);
      tmp16 = obj7;
    } else {
      const obj9 = { username: name };
      obj7.children = format(t.uIomXw, obj9);
      tmp16 = obj7;
    }
    items3 = [getOrFetchApplication(Text, tmp16), , ];
    const obj10 = { userId: user.id, styles: tmp.friendRequestNote, analyticsLocation: "User Profile" };
    items3[1] = getOrFetchApplication(tmp2(trackUserProfileAction[15]), obj10);
    const obj11 = { style: tmp.buttons, children: items4 };
    const obj12 = { size: "sm", variant: "primary", text: intl2.string(isGameRelationship(trackUserProfileAction[12]).t.Zcibdf), onPress: callback };
    const Button = tmp5(tmp3[16]).Button;
    intl2 = tmp5(tmp3[12]).intl;
    items4 = [getOrFetchApplication(Button, obj12), ];
    const obj13 = { size: "sm", variant: "secondary", text: intl3.string(isGameRelationship(trackUserProfileAction[12]).t.xuio0C), onPress: callback1 };
    const Button2 = tmp5(tmp3[16]).Button;
    intl3 = tmp5(tmp3[12]).intl;
    items4[1] = getOrFetchApplication(Button2, obj13);
    items3[2] = closure_6(cancelFriendRequest, obj11);
    tmp13Result = tmp13(tmp14, obj6);
  } else {
    tmp13Result = null;
  }
  return tmp13Result;
};
