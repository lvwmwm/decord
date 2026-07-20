// Module ID: 12021
// Function ID: 92919
// Name: UserProfileIncomingFriendRequest
// Dependencies: []
// Exports: default

// Module 12021 (UserProfileIncomingFriendRequest)
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_5, jsxs: closure_6 } = arg1(dependencyMap[2]));
let obj = arg1(dependencyMap[3]);
obj = { container: {}, buttons: {}, gameIcon: { paddingTop: 2 } };
obj = { borderWidth: 1, borderColor: importDefault(dependencyMap[4]).colors.BORDER_STRONG };
obj.friendRequestNote = obj;
let closure_7 = obj.createStyles(obj);
const tmp2 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[17]).fileFinishedImporting("modules/user_profile/native/UserProfileIncomingFriendRequest.tsx");

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
  const arg1 = isGameRelationship;
  ({ applicationId, showUserProfile } = style);
  let importDefault;
  let dependencyMap;
  let React;
  let View;
  let getOrFetchApplication;
  let tmp = callback2();
  importDefault = tmp;
  let obj = arg1(dependencyMap[6]);
  const trackUserProfileAction = obj.useUserProfileAnalyticsContext().trackUserProfileAction;
  dependencyMap = trackUserProfileAction;
  let obj1 = arg1(dependencyMap[8]);
  obj = { userId: user.id, applicationId, isGameRelationship, location: importDefault(dependencyMap[7])().newestAnalyticsLocation, onConfirm: showUserProfile, onCancel: showUserProfile };
  const friendRequestActions = obj1.useFriendRequestActions(obj);
  const acceptFriendRequest = friendRequestActions.acceptFriendRequest;
  React = acceptFriendRequest;
  const cancelFriendRequest = friendRequestActions.cancelFriendRequest;
  View = cancelFriendRequest;
  let obj3 = importDefault(dependencyMap[9]);
  let name = obj3.useName(guildId, channelId, user);
  const items = [acceptFriendRequest, isGameRelationship, trackUserProfileAction];
  let string = React.useCallback(() => {
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
  const callback = React.useCallback(() => {
    cancelFriendRequest();
    const obj = {};
    let str = "IGNORE_FRIEND_REQUEST";
    if (isGameRelationship) {
      str = "IGNORE_GAME_FRIEND_REQUEST";
    }
    obj.action = str;
    trackUserProfileAction(obj);
  }, items1);
  let obj4 = arg1(dependencyMap[10]);
  getOrFetchApplication = obj4.useGetOrFetchApplication(applicationId);
  if (null != applicationId) {
    if (intl == getOrFetchApplication) {
      return null;
    }
  }
  obj = { style: items2 };
  const items2 = [tmp.container, importDefault(dependencyMap[5])().card, style.style];
  let tmp12 = getOrFetchApplication;
  let Text = arg1(dependencyMap[11]).Text;
  obj1 = { INTEGRATION_CREATE: null, ConstraintReasonCode: null };
  intl = arg1(dependencyMap[12]).intl;
  let intl2 = intl.format;
  if (null != applicationId) {
    const t = arg1(dependencyMap[12]).t;
    const obj2 = { username: name };
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
        obj.source = tmp(trackUserProfileAction[14]).getApplicationIconSource(obj);
        obj.size = isGameRelationship(trackUserProfileAction[13]).AvatarSizes.XXSMALL;
        obj.style = tmp.gameIcon;
        tmp = getOrFetchApplication(isGameRelationship(trackUserProfileAction[13]).Avatar, obj, getOrFetchApplication.id);
        const obj2 = tmp(trackUserProfileAction[14]);
      }
      return tmp;
    };
    obj1.children = intl2(isGameRelationship ? t.syHjLL : t.V15uUI, obj2);
    let tmp15 = obj1;
    const tmp18 = isGameRelationship ? t.syHjLL : t.V15uUI;
  } else {
    obj3 = { username: name };
    obj1.children = intl2(arg1(dependencyMap[12]).t.uIomXw, obj3);
    tmp15 = obj1;
  }
  const items3 = [tmp12(Text, tmp15), , ];
  obj4 = { userId: user.id, styles: tmp.friendRequestNote, analyticsLocation: "User Profile" };
  items3[1] = getOrFetchApplication(importDefault(dependencyMap[15]), obj4);
  user = callback;
  tmp12 = View;
  const obj5 = { style: tmp.buttons };
  intl = arg1;
  const obj6 = { st: true, borderWidth: "/assets/design/components/Icon/native/redesign/generated/images" };
  intl = arg1(dependencyMap[12]).intl;
  obj6.text = intl.string(arg1(dependencyMap[12]).t.Zcibdf);
  obj6.onPress = string;
  const items4 = [getOrFetchApplication(arg1(dependencyMap[16]).Button, obj6), ];
  obj1 = arg1(dependencyMap[16]).Button;
  const obj7 = {};
  intl2 = arg1(dependencyMap[12]).intl;
  string = intl2.string;
  isGameRelationship = string(arg1(dependencyMap[12]).t.xuio0C);
  obj7.text = isGameRelationship;
  obj7.onPress = callback;
  tmp = getOrFetchApplication(obj1, obj7);
  items4[1] = tmp;
  obj5.children = items4;
  Text = callback(View, obj5);
  items3[2] = Text;
  obj.children = items3;
  callback(View, obj);
};
