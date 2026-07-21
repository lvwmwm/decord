// Module ID: 11942
// Function ID: 92321
// Name: JoinActivityButton
// Dependencies: []
// Exports: ConnectPlatformButton, CustomActivityButton, JoinActivityButton, JoinGameActivityButton, PlayOnSpotifyButton, VoiceChannelButtons, WatchActivityButton

// Module 11942 (JoinActivityButton)
let closure_3 = importDefault(dependencyMap[0]);
importAll(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = importDefault(dependencyMap[5]);
let closure_8 = importDefault(dependencyMap[6]);
let closure_9 = importDefault(dependencyMap[7]);
let closure_10 = importDefault(dependencyMap[8]);
let closure_11 = importDefault(dependencyMap[9]);
let closure_12 = importDefault(dependencyMap[10]);
let closure_13 = importDefault(dependencyMap[11]);
let closure_14 = importDefault(dependencyMap[12]);
({ PlatformTypes: closure_15, UserSettingsSections: closure_16 } = arg1(dependencyMap[13]));
const tmp3 = arg1(dependencyMap[13]);
({ SpotifyEndpoints: closure_17, SpotifyResourceTypes: closure_18 } = arg1(dependencyMap[14]));
const jsx = arg1(dependencyMap[15]).jsx;
let obj = arg1(dependencyMap[16]);
obj = {};
obj = { tintColor: importDefault(dependencyMap[17]).colors.CONTROL_SECONDARY_TEXT_DEFAULT };
obj.icon = obj;
let closure_20 = obj.createStyles(obj);
const tmp4 = arg1(dependencyMap[14]);
const result = arg1(dependencyMap[49]).fileFinishedImporting("modules/user_profile/native/UserProfileActivityButtons.tsx");

export const JoinActivityButton = function JoinActivityButton(user) {
  let activity;
  user = user.user;
  const arg1 = user;
  ({ currentUser: closure_1, activity } = user);
  const dependencyMap = activity;
  const application = user.application;
  let closure_3 = application;
  let embeddedActivityForUserId = user.onAction;
  let embeddedActivityLocationChannelId;
  let closure_7;
  const analyticsLocations = importDefault(dependencyMap[18])().analyticsLocations;
  let id;
  if (null != application) {
    id = application.id;
  }
  embeddedActivityForUserId = embeddedActivityForUserId.getEmbeddedActivityForUserId(user.id, id);
  let obj = arg1(dependencyMap[19]);
  let _location;
  if (null != embeddedActivityForUserId) {
    _location = embeddedActivityForUserId.location;
  }
  embeddedActivityLocationChannelId = obj.getEmbeddedActivityLocationChannelId(_location);
  closure_7 = arg1(dependencyMap[20]).useStateFromStores([], () => callback(activity[21])({ channelId: closure_6, userId: user.id, activity }));
  const obj2 = arg1(dependencyMap[20]);
  const items = [analyticsLocations, closure_8, closure_7, closure_11, closure_12, closure_14, closure_10, closure_9, closure_13, embeddedActivityForUserId];
  const stateFromStores = arg1(dependencyMap[20]).useStateFromStores(items, () => callback(activity[22])({ isEmbedded: true, user, currentUser: callback, activity, application, channelId: closure_7, ChannelStore: analyticsLocations, GuildStore: closure_8, GuildMemberCountStore: closure_7, RelationshipStore: closure_11, SelectedChannelStore: closure_12, VoiceStateStore: closure_14, PermissionStore: closure_10, LocalActivityStore: closure_9, SelfPresenceStore: closure_13, EmbeddedActivitiesStore: onAction }));
  let tmp6 = null;
  if (importDefault(dependencyMap[23])(activity)) {
    tmp6 = null;
    if (null != application) {
      tmp6 = null;
      if (stateFromStores !== arg1(dependencyMap[22]).ActivityJoinability.CANNOT_JOIN) {
        obj = {};
        if (stateFromStores === arg1(dependencyMap[22]).ActivityJoinability.JOINED) {
          const intl2 = arg1(dependencyMap[25]).intl;
          let stringResult = intl2.string(arg1(dependencyMap[25]).t.DPfdsq);
        } else {
          const intl = arg1(dependencyMap[25]).intl;
          stringResult = intl.string(arg1(dependencyMap[25]).t.4i2vj+);
        }
        obj.text = stringResult;
        obj.icon = jsx(arg1(dependencyMap[26]).AppsIcon, {});
        obj.variant = "active";
        obj.disabled = stateFromStores === arg1(dependencyMap[22]).ActivityJoinability.JOINED;
        obj.onPress = function onPress() {
          onAction({ action: "PRESS_JOIN_BUTTON" });
          callback(activity[27])({ applicationId: application.id, activityChannelId: closure_7, locationObject: {}, analyticsLocations });
          callback(activity[28]).hideActionSheet();
        };
        jsx(arg1(dependencyMap[24]).Button, obj);
        const tmp18 = jsx;
      }
    }
  }
  return tmp6;
};
export const JoinGameActivityButton = function JoinGameActivityButton(onAction) {
  let application;
  ({ user: closure_0, currentUser: closure_1, activity: closure_2, application } = onAction);
  let closure_3 = application;
  onAction = onAction.onAction;
  const analyticsLocations = importDefault(dependencyMap[18])().analyticsLocations;
  let closure_6 = { id: application.id, deeplink_uri: application.deepLinkUri };
  let obj = arg1(dependencyMap[20]);
  const items = [analyticsLocations, closure_8, closure_7, closure_11, closure_12, closure_14, closure_10, closure_9, closure_13, onAction];
  const stateFromStores = obj.useStateFromStores(items, () => callback(closure_2[22])({ user: closure_0, currentUser: callback, activity: closure_2, application, channelId: null, isEmbedded: false, ChannelStore: analyticsLocations, GuildStore: closure_8, GuildMemberCountStore: closure_7, RelationshipStore: closure_11, SelectedChannelStore: closure_12, VoiceStateStore: closure_14, PermissionStore: closure_10, LocalActivityStore: closure_9, SelfPresenceStore: closure_13, EmbeddedActivitiesStore: onAction }));
  let tmp2 = null;
  if (null != application) {
    tmp2 = null;
    if (stateFromStores !== arg1(dependencyMap[22]).ActivityJoinability.CANNOT_JOIN) {
      obj = {};
      if (stateFromStores === arg1(dependencyMap[22]).ActivityJoinability.JOINED) {
        const intl2 = arg1(dependencyMap[25]).intl;
        let stringResult = intl2.string(arg1(dependencyMap[25]).t.DPfdsq);
      } else {
        const intl = arg1(dependencyMap[25]).intl;
        stringResult = intl.string(arg1(dependencyMap[25]).t.VJlc0S);
      }
      obj.text = stringResult;
      obj.variant = "active";
      obj.disabled = stateFromStores === arg1(dependencyMap[22]).ActivityJoinability.JOINED;
      obj.onPress = function onPress() {
        onAction({ action: "PRESS_JOIN_BUTTON" });
        let obj = callback(session_id[29]);
        obj = { userId: id.id, sessionId: session_id.session_id, application: closure_6, channelId: null, messageId: null, applicationActivity: session_id, source: "UserProfile", analyticsLocations };
        const joined = obj.join(obj);
        callback(session_id[28]).hideActionSheet();
      };
      jsx(arg1(dependencyMap[24]).Button, obj);
      const tmp13 = jsx;
    }
  }
  return tmp2;
};
export const PlayOnSpotifyButton = function PlayOnSpotifyButton(arg0) {
  let activity;
  ({ activity, onAction: closure_0 } = arg0);
  const sync_id = activity.sync_id;
  const importDefault = sync_id;
  let tmp3 = null;
  if (importDefault(dependencyMap[30])(activity)) {
    tmp3 = null;
    if (null != sync_id) {
      let obj = {};
      const intl = arg1(dependencyMap[25]).intl;
      obj = { platform: activity.name };
      obj.text = intl.formatToPlainString(arg1(dependencyMap[25]).t.LEgD7t, obj);
      obj = { size: arg1(dependencyMap[31]).Icon.Sizes.SMALL, source: importDefault(dependencyMap[32]), disableColor: true, style: tmp2.icon };
      obj.icon = jsx(arg1(dependencyMap[31]).Icon, obj);
      obj.variant = "secondary";
      // CreateGeneratorClosureLongIndex (0x67)
      obj.onPress = callback(tmp);
      tmp3 = jsx(arg1(dependencyMap[24]).Button, obj);
    }
  }
  return tmp3;
};
export const WatchActivityButton = function WatchActivityButton(arg0) {
  let activity;
  ({ activity, onAction: closure_0 } = arg0);
  const tmp = importDefault(dependencyMap[35])(activity);
  const importDefault = tmp;
  let tmp2 = null;
  if (importDefault(dependencyMap[36])(activity)) {
    tmp2 = null;
    if (null != tmp) {
      const obj = {};
      const intl = arg1(dependencyMap[25]).intl;
      obj.text = intl.string(arg1(dependencyMap[25]).t.I6JG46);
      obj.variant = "secondary";
      obj.onPress = function onPress() {
        const tmp = callback({ action: "PRESS_WATCH_BUTTON" });
        tmp(closure_2[34]).openURL(tmp);
      };
      tmp2 = jsx(arg1(dependencyMap[24]).Button, obj);
    }
  }
  return tmp2;
};
export const VoiceChannelButtons = function VoiceChannelButtons(channel) {
  let isInChannel;
  channel = channel.channel;
  const arg1 = channel;
  ({ isInChannel, onAction: closure_1 } = channel);
  const dependencyMap = importDefault(dependencyMap[18])().newestAnalyticsLocation;
  const isGuildStageVoiceResult = channel.isGuildStageVoice();
  let closure_3 = isGuildStageVoiceResult;
  const obj = {};
  const isDMResult = channel.isDM();
  if (isInChannel) {
    if (!isDMResult) {
      if (!channel.isGroupDM()) {
        const intl3 = arg1(dependencyMap[25]).intl;
        const string2 = intl3.string;
        const t2 = arg1(dependencyMap[25]).t;
        if (isGuildStageVoiceResult) {
          let string2Result = string2(t2.Acqcot);
        } else {
          string2Result = string2(t2.BXxdl7);
        }
      }
    }
    const intl4 = arg1(dependencyMap[25]).intl;
    string2Result = intl4.string(arg1(dependencyMap[25]).t.7hwn2A);
  } else {
    if (!isDMResult) {
      if (!channel.isGroupDM()) {
        const intl = arg1(dependencyMap[25]).intl;
        const string = intl.string;
        const t = arg1(dependencyMap[25]).t;
        if (isGuildStageVoiceResult) {
          let stringResult = string(t.7vb2cc);
        } else {
          stringResult = string(t.96ANUN);
        }
      }
      obj.text = stringResult;
      let str = "active";
      if (isInChannel) {
        str = "secondary";
      }
      obj.variant = str;
      obj.grow = true;
      obj.onPress = function onPress() {
        callback({ action: "PRESS_JOIN_CALL_BUTTON" });
        callback(newestAnalyticsLocation[28]).hideActionSheet();
        const obj = callback(newestAnalyticsLocation[28]);
        callback(newestAnalyticsLocation[37]).popAll();
        const obj2 = callback(newestAnalyticsLocation[37]);
        const rootNavigationRef = channel(newestAnalyticsLocation[38]).getRootNavigationRef();
        let isReadyResult;
        if (null != rootNavigationRef) {
          isReadyResult = rootNavigationRef.isReady();
        }
        let tmp5 = true === isReadyResult;
        if (tmp5) {
          const currentRoute = rootNavigationRef.getCurrentRoute();
          let name;
          if (null != currentRoute) {
            name = currentRoute.name;
          }
          tmp5 = "you" === name;
        }
        if (tmp5) {
          rootNavigationRef.goBack();
        }
        if (isGuildStageVoiceResult) {
          let tmp9Result = tmp9(tmp10[39]);
          tmp9Result.connectAndOpen(channel);
        } else {
          tmp9Result = tmp9(tmp10[40]);
          tmp9Result.openGuildVoiceModal(channel, newestAnalyticsLocation);
        }
      };
      return jsx(arg1(dependencyMap[24]).Button, obj);
    }
    const intl2 = arg1(dependencyMap[25]).intl;
    stringResult = intl2.string(arg1(dependencyMap[25]).t.ozoE2A);
  }
};
export const ConnectPlatformButton = function ConnectPlatformButton(type) {
  type = type.type;
  const arg1 = type;
  const importDefault = type.onAction;
  let closure_3;
  const dependencyMap = importDefault(dependencyMap[18])().newestAnalyticsLocation;
  let obj = arg1(dependencyMap[20]);
  const items = [closure_6];
  if (obj.useStateFromStores(items, () => null != account.getAccount(null, type))) {
    return null;
  } else {
    let obj1 = importDefault(dependencyMap[41]);
    const value = obj1.get(type);
    closure_3 = value;
    obj = {};
    const intl = arg1(dependencyMap[25]).intl;
    obj = { platform: value.name };
    obj.text = intl.formatToPlainString(arg1(dependencyMap[25]).t.XWSHTb, obj);
    obj1 = { size: arg1(dependencyMap[31]).Icon.Sizes.SMALL, source: arg1(dependencyMap[42]).makeSource(value.icon.whitePNG), disableColor: true, style: tmp.icon };
    obj.icon = jsx(arg1(dependencyMap[31]).Icon, obj1);
    obj.variant = "secondary";
    obj.onPress = function onPress() {
      let obj = {};
      let str = "PRESS_CONNECT_XBOX_BUTTON";
      if (type === constants.PLAYSTATION) {
        str = "PRESS_CONNECT_PLAYSTATION_BUTTON";
      }
      obj.action = str;
      onAction(obj);
      obj = {
        platformType: value.type,
        location: newestAnalyticsLocation,
        onClose() {
          let obj = callback(closure_2[44]);
          obj = { screen: constants.CONNECTIONS };
          return obj.openUserSettings(obj);
        }
      };
      onAction(newestAnalyticsLocation[43])(obj);
    };
    return jsx(arg1(dependencyMap[24]).Button, obj);
  }
  const tmp = callback2();
};
export const CustomActivityButton = function CustomActivityButton(index) {
  let activity;
  ({ user: closure_0, activity } = index);
  const importDefault = activity;
  index = index.index;
  const dependencyMap = index;
  const callback = index.onAction;
  let tmp = null;
  if (null != activity.buttons) {
    tmp = null;
    if (index < activity.buttons.length) {
      const obj = {};
      if (importDefault(dependencyMap[45])(activity)) {
        const intl = arg1(dependencyMap[25]).intl;
        let stringResult = intl.string(arg1(dependencyMap[25]).t.I6JG46);
      } else {
        stringResult = activity.buttons[index];
      }
      obj.text = stringResult;
      obj.variant = "secondary";
      // CreateGeneratorClosureLongIndex (0x67)
      const tmp10 = callback(tmp10);
      obj.onPress = tmp10;
      jsx(arg1(dependencyMap[24]).Button, obj);
      const tmp2 = jsx;
    }
  }
  return tmp;
};
