// Module ID: 12173
// Function ID: 95371
// Name: UserProfileIncomingFriendRequest
// Dependencies: [31, 27, 33, 4130, 689, 8282, 8310, 5462, 12174, 4319, 5468, 4126, 1212, 1273, 1392, 12175, 4543, 2]
// Exports: default

// Module 12173 (UserProfileIncomingFriendRequest)
import result from "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
const require = arg1;
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
_createForOfIteratorHelperLoose = { container: { rowGap: 16, flexDirection: "column" }, buttons: { flexDirection: "row", columnGap: 12 }, gameIcon: { paddingTop: 2 } };
_createForOfIteratorHelperLoose = { borderWidth: 1, borderColor: require("_createForOfIteratorHelperLoose").colors.BORDER_STRONG };
_createForOfIteratorHelperLoose.friendRequestNote = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("jsxProd").fileFinishedImporting("modules/user_profile/native/UserProfileIncomingFriendRequest.tsx");

export default function UserProfileIncomingFriendRequest(style) {
  let applicationId;
  let channelId;
  let guildId;
  let isGameRelationship;
  let showUserProfile;
  let user;
  ({ user, isGameRelationship } = style);
  ({ channelId, guildId } = style);
  if (isGameRelationship === undefined) {
    isGameRelationship = false;
  }
  ({ applicationId, showUserProfile } = style);
  let importDefault;
  let trackUserProfileAction;
  let acceptFriendRequest;
  let cancelFriendRequest;
  let getOrFetchApplication;
  let tmp = _createForOfIteratorHelperLoose();
  importDefault = tmp;
  let obj = isGameRelationship(trackUserProfileAction[6]);
  trackUserProfileAction = obj.useUserProfileAnalyticsContext().trackUserProfileAction;
  let obj1 = isGameRelationship(trackUserProfileAction[8]);
  obj = { userId: user.id, applicationId, isGameRelationship, location: importDefault(trackUserProfileAction[7])().newestAnalyticsLocation, onConfirm: showUserProfile, onCancel: showUserProfile };
  const friendRequestActions = obj1.useFriendRequestActions(obj);
  acceptFriendRequest = friendRequestActions.acceptFriendRequest;
  cancelFriendRequest = friendRequestActions.cancelFriendRequest;
  let obj3 = importDefault(trackUserProfileAction[9]);
  let name = obj3.useName(guildId, channelId, user);
  const items = [acceptFriendRequest, isGameRelationship, trackUserProfileAction];
  let string = acceptFriendRequest.useCallback(() => {
    acceptFriendRequest();
    const obj = {};
    let str = "ACCEPT_FRIEND_REQUEST";
    if (isGameRelationship) {
      str = "ACCEPT_GAME_FRIEND_REQUEST";
    }
    obj.action = str;
    trackUserProfileAction(obj);
  }, items);
  const items1 = [cancelFriendRequest, isGameRelationship, trackUserProfileAction];
  let intl = null;
  const callback = acceptFriendRequest.useCallback(() => {
    cancelFriendRequest();
    const obj = {};
    let str = "IGNORE_FRIEND_REQUEST";
    if (isGameRelationship) {
      str = "IGNORE_GAME_FRIEND_REQUEST";
    }
    obj.action = str;
    trackUserProfileAction(obj);
  }, items1);
  let obj4 = isGameRelationship(trackUserProfileAction[10]);
  getOrFetchApplication = obj4.useGetOrFetchApplication(applicationId);
  if (null != applicationId) {
    if (intl == getOrFetchApplication) {
      return null;
    }
  }
  obj = { style: items2 };
  items2 = [tmp.container, importDefault(trackUserProfileAction[5])().card, style.style];
  let tmp12 = getOrFetchApplication;
  let Text = isGameRelationship(trackUserProfileAction[11]).Text;
  obj1 = { variant: "text-sm/semibold", color: "text-default" };
  intl = isGameRelationship(trackUserProfileAction[12]).intl;
  let intl2 = intl.format;
  if (null != applicationId) {
    const t = isGameRelationship(trackUserProfileAction[12]).t;
    let obj2 = { username: name };
    name = intl == getOrFetchApplication;
    let name1;
    if (!name) {
      name1 = getOrFetchApplication.name;
    }
    obj2.applicationName = name1;
    obj2.applicationIcon = function applicationIcon() {
      let tmp = null;
      if (null != getOrFetchApplication) {
        let obj = {};
        obj = { id: getOrFetchApplication.id, icon: getOrFetchApplication.icon };
        obj.source = _undefined(trackUserProfileAction[14]).getApplicationIconSource(obj);
        obj.size = isGameRelationship(trackUserProfileAction[13]).AvatarSizes.XXSMALL;
        obj.style = _undefined.gameIcon;
        tmp = getOrFetchApplication(isGameRelationship(trackUserProfileAction[13]).Avatar, obj, getOrFetchApplication.id);
        const obj2 = _undefined(trackUserProfileAction[14]);
      }
      return tmp;
    };
    obj1.children = intl2(isGameRelationship ? t.syHjLL : t.V15uUI, obj2);
    let tmp15 = obj1;
    const tmp18 = isGameRelationship ? t.syHjLL : t.V15uUI;
  } else {
    obj3 = { username: name };
    obj1.children = intl2(isGameRelationship(trackUserProfileAction[12]).t.uIomXw, obj3);
    tmp15 = obj1;
  }
  const items3 = [tmp12(Text, tmp15), , ];
  obj4 = { userId: user.id, styles: tmp.friendRequestNote, analyticsLocation: "User Profile" };
  items3[1] = getOrFetchApplication(importDefault(trackUserProfileAction[15]), obj4);
  user = callback;
  tmp12 = cancelFriendRequest;
  const obj5 = { style: tmp.buttons };
  intl = isGameRelationship;
  const obj6 = { size: "sm", variant: "primary" };
  intl = isGameRelationship(trackUserProfileAction[12]).intl;
  obj6.text = intl.string(isGameRelationship(trackUserProfileAction[12]).t.Zcibdf);
  obj6.onPress = string;
  const items4 = [getOrFetchApplication(isGameRelationship(trackUserProfileAction[16]).Button, obj6), ];
  obj1 = isGameRelationship(trackUserProfileAction[16]).Button;
  const obj7 = { size: "sm", variant: "secondary" };
  intl2 = isGameRelationship(trackUserProfileAction[12]).intl;
  string = intl2.string;
  isGameRelationship = string(isGameRelationship(trackUserProfileAction[12]).t.xuio0C);
  obj7.text = isGameRelationship;
  obj7.onPress = callback;
  tmp = getOrFetchApplication(obj1, obj7);
  items4[1] = tmp;
  obj5.children = items4;
  Text = callback(cancelFriendRequest, obj5);
  items3[2] = Text;
  obj.children = items3;
  callback(cancelFriendRequest, obj);
};
