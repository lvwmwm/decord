// Module ID: 11955
// Function ID: 92400
// Name: JoinActivityButton
// Dependencies: [5, 31, 1347, 1348, 4812, 4051, 1838, 10444, 3758, 3767, 1906, 4810, 4146, 653, 8311, 33, 4130, 689, 5464, 3748, 624, 11956, 11957, 6982, 4543, 1212, 9075, 10522, 4098, 10917, 9081, 1273, 7823, 10900, 3827, 11959, 7882, 4337, 3982, 7477, 4341, 4814, 1392, 8970, 5796, 8315, 10904, 1443, 8336, 2]
// Exports: ConnectPlatformButton, CustomActivityButton, JoinActivityButton, JoinGameActivityButton, PlayOnSpotifyButton, VoiceChannelButtons, WatchActivityButton

// Module 11955 (JoinActivityButton)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import "Button";
import closure_4 from "_createForOfIteratorHelperLoose";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_createForOfIteratorHelperLoose";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import closure_12 from "_isNativeReflectConstruct";
import closure_13 from "_isNativeReflectConstruct";
import closure_14 from "_isNativeReflectConstruct";
import ME from "ME";
import spotifyUtmParams from "spotifyUtmParams";
import { jsx } from "_callSuper";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_15;
let closure_16;
let closure_17;
let closure_18;
const require = arg1;
({ PlatformTypes: closure_15, UserSettingsSections: closure_16 } = ME);
({ SpotifyEndpoints: closure_17, SpotifyResourceTypes: closure_18 } = spotifyUtmParams);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { tintColor: require("_createForOfIteratorHelperLoose").colors.CONTROL_SECONDARY_TEXT_DEFAULT };
_createForOfIteratorHelperLoose.icon = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/user_profile/native/UserProfileActivityButtons.tsx");

export const JoinActivityButton = function JoinActivityButton(user) {
  let activity;
  let importDefault;
  user = user.user;
  ({ currentUser: importDefault, activity } = user);
  const application = user.application;
  const onAction = user.onAction;
  let embeddedActivityLocationChannelId;
  let closure_7;
  const analyticsLocations = importDefault(activity[18])().analyticsLocations;
  let id;
  if (null != application) {
    id = application.id;
  }
  const embeddedActivityForUserId = onAction.getEmbeddedActivityForUserId(user.id, id);
  let obj = user(activity[19]);
  let _location;
  if (null != embeddedActivityForUserId) {
    _location = embeddedActivityForUserId.location;
  }
  embeddedActivityLocationChannelId = obj.getEmbeddedActivityLocationChannelId(_location);
  closure_7 = user(activity[20]).useStateFromStores([], () => outer1_1(activity[21])({ channelId: closure_6, userId: user.id, activity }));
  const obj2 = user(activity[20]);
  const items = [analyticsLocations, closure_8, closure_7, closure_11, closure_12, closure_14, closure_10, closure_9, closure_13, onAction];
  const stateFromStores = user(activity[20]).useStateFromStores(items, () => outer1_1(activity[22])({ isEmbedded: true, user, currentUser: closure_1, activity, application, channelId: closure_7, ChannelStore: analyticsLocations, GuildStore: outer1_8, GuildMemberCountStore: closure_7, RelationshipStore: outer1_11, SelectedChannelStore: outer1_12, VoiceStateStore: outer1_14, PermissionStore: outer1_10, LocalActivityStore: outer1_9, SelfPresenceStore: outer1_13, EmbeddedActivitiesStore: onAction }));
  let tmp6 = null;
  if (importDefault(activity[23])(activity)) {
    tmp6 = null;
    if (null != application) {
      tmp6 = null;
      if (stateFromStores !== user(activity[22]).ActivityJoinability.CANNOT_JOIN) {
        obj = {};
        if (stateFromStores === user(activity[22]).ActivityJoinability.JOINED) {
          const intl2 = user(activity[25]).intl;
          let stringResult = intl2.string(user(activity[25]).t.DPfdsq);
        } else {
          const intl = user(activity[25]).intl;
          stringResult = intl.string(user(activity[25]).t["4i2vj+"]);
        }
        obj.text = stringResult;
        obj.icon = jsx(user(activity[26]).AppsIcon, { size: "sm", color: "white" });
        obj.variant = "active";
        obj.disabled = stateFromStores === user(activity[22]).ActivityJoinability.JOINED;
        obj.onPress = function onPress() {
          onAction({ action: "PRESS_JOIN_BUTTON" });
          outer1_1(activity[27])({ applicationId: application.id, activityChannelId: closure_7, locationObject: {}, analyticsLocations });
          outer1_1(activity[28]).hideActionSheet();
        };
        jsx(user(activity[24]).Button, {});
        const tmp18 = jsx;
      }
    }
  }
  return tmp6;
};
export const JoinGameActivityButton = function JoinGameActivityButton(onAction) {
  let application;
  let dependencyMap;
  let importDefault;
  let require;
  ({ user: require, currentUser: importDefault, activity: dependencyMap, application } = onAction);
  onAction = onAction.onAction;
  const analyticsLocations = importDefault(5464)().analyticsLocations;
  let closure_6 = { id: application.id, deeplink_uri: application.deepLinkUri };
  let obj = require(624) /* defaultAreStatesEqual */;
  const items = [analyticsLocations, closure_8, closure_7, closure_11, closure_12, closure_14, closure_10, closure_9, closure_13, onAction];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_1(outer1_2[22])({ user: closure_0, currentUser: closure_1, activity: closure_2, application, channelId: null, isEmbedded: false, ChannelStore: analyticsLocations, GuildStore: outer1_8, GuildMemberCountStore: outer1_7, RelationshipStore: outer1_11, SelectedChannelStore: outer1_12, VoiceStateStore: outer1_14, PermissionStore: outer1_10, LocalActivityStore: outer1_9, SelfPresenceStore: outer1_13, EmbeddedActivitiesStore: onAction }));
  let tmp2 = null;
  if (null != application) {
    tmp2 = null;
    if (stateFromStores !== require(11957) /* getActivityJoinability */.ActivityJoinability.CANNOT_JOIN) {
      obj = {};
      if (stateFromStores === require(11957) /* getActivityJoinability */.ActivityJoinability.JOINED) {
        const intl2 = require(1212) /* getSystemLocale */.intl;
        let stringResult = intl2.string(require(1212) /* getSystemLocale */.t.DPfdsq);
      } else {
        const intl = require(1212) /* getSystemLocale */.intl;
        stringResult = intl.string(require(1212) /* getSystemLocale */.t.VJlc0S);
      }
      obj.text = stringResult;
      obj.variant = "active";
      obj.disabled = stateFromStores === require(11957) /* getActivityJoinability */.ActivityJoinability.JOINED;
      obj.onPress = function onPress() {
        onAction({ action: "PRESS_JOIN_BUTTON" });
        let obj = outer1_1(outer1_2[29]);
        obj = { userId: id.id, sessionId: session_id.session_id, application: closure_6, channelId: null, messageId: null, applicationActivity: session_id, source: "UserProfile", analyticsLocations };
        const joined = obj.join(obj);
        outer1_1(outer1_2[28]).hideActionSheet();
      };
      jsx(require(4543) /* Button */.Button, {});
      const tmp13 = jsx;
    }
  }
  return tmp2;
};
export const PlayOnSpotifyButton = function PlayOnSpotifyButton(arg0) {
  let activity;
  let require;
  ({ activity, onAction: require } = arg0);
  const sync_id = activity.sync_id;
  let tmp3 = null;
  if (sync_id(9081)(activity)) {
    tmp3 = null;
    if (null != sync_id) {
      let obj = {};
      const intl = require(1212) /* getSystemLocale */.intl;
      obj = { platform: activity.name };
      obj.text = intl.formatToPlainString(require(1212) /* getSystemLocale */.t.LEgD7t, obj);
      obj = { size: require(1273) /* Button */.Icon.Sizes.SMALL, source: sync_id(7823), disableColor: true, style: tmp2.icon };
      obj.icon = jsx(require(1273) /* Button */.Icon, { size: require(1273) /* Button */.Icon.Sizes.SMALL, source: sync_id(7823), disableColor: true, style: tmp2.icon });
      obj.variant = "secondary";
      // CreateGeneratorClosureLongIndex (0x67)
      obj.onPress = callback(tmp);
      tmp3 = jsx(require(4543) /* Button */.Button, { size: require(1273) /* Button */.Icon.Sizes.SMALL, source: sync_id(7823), disableColor: true, style: tmp2.icon });
    }
  }
  return tmp3;
};
export const WatchActivityButton = function WatchActivityButton(arg0) {
  let activity;
  let require;
  ({ activity, onAction: require } = arg0);
  let tmp = importDefault(11959)(activity);
  importDefault = tmp;
  let tmp2 = null;
  if (importDefault(7882)(activity)) {
    tmp2 = null;
    if (null != tmp) {
      const obj = {};
      const intl = require(1212) /* getSystemLocale */.intl;
      obj.text = intl.string(require(1212) /* getSystemLocale */.t.I6JG46);
      obj.variant = "secondary";
      obj.onPress = function onPress() {
        const tmp = callback({ action: "PRESS_WATCH_BUTTON" });
        tmp(outer1_2[34]).openURL(tmp);
      };
      tmp2 = jsx(require(4543) /* Button */.Button, {});
    }
  }
  return tmp2;
};
export const VoiceChannelButtons = function VoiceChannelButtons(channel) {
  let importDefault;
  let isInChannel;
  channel = channel.channel;
  ({ isInChannel, onAction: importDefault } = channel);
  newestAnalyticsLocation = importDefault(newestAnalyticsLocation[18])().newestAnalyticsLocation;
  const isGuildStageVoiceResult = channel.isGuildStageVoice();
  let obj = {};
  const isDMResult = channel.isDM();
  if (isInChannel) {
    if (!isDMResult) {
      if (!channel.isGroupDM()) {
        const intl3 = channel(newestAnalyticsLocation[25]).intl;
        const string2 = intl3.string;
        const t2 = channel(newestAnalyticsLocation[25]).t;
        if (isGuildStageVoiceResult) {
          let string2Result = string2(t2.Acqcot);
        } else {
          string2Result = string2(t2.BXxdl7);
        }
      }
    }
    const intl4 = channel(newestAnalyticsLocation[25]).intl;
    string2Result = intl4.string(channel(newestAnalyticsLocation[25]).t["7hwn2A"]);
  } else {
    if (!isDMResult) {
      if (!channel.isGroupDM()) {
        const intl = channel(newestAnalyticsLocation[25]).intl;
        const string = intl.string;
        const t = channel(newestAnalyticsLocation[25]).t;
        if (isGuildStageVoiceResult) {
          let stringResult = string(t["7vb2cc"]);
        } else {
          stringResult = string(t["96ANUN"]);
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
        outer1_1(newestAnalyticsLocation[28]).hideActionSheet();
        const obj = outer1_1(newestAnalyticsLocation[28]);
        outer1_1(newestAnalyticsLocation[37]).popAll();
        const obj2 = outer1_1(newestAnalyticsLocation[37]);
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
        if (_isNativeReflectConstruct) {
          let tmp9Result = tmp9(tmp10[39]);
          tmp9Result.connectAndOpen(channel);
        } else {
          tmp9Result = tmp9(tmp10[40]);
          tmp9Result.openGuildVoiceModal(channel, newestAnalyticsLocation);
        }
      };
      return jsx(channel(newestAnalyticsLocation[24]).Button, obj);
    }
    const intl2 = channel(newestAnalyticsLocation[25]).intl;
    stringResult = intl2.string(channel(newestAnalyticsLocation[25]).t.ozoE2A);
  }
};
export const ConnectPlatformButton = function ConnectPlatformButton(type) {
  type = type.type;
  const onAction = type.onAction;
  let c3;
  newestAnalyticsLocation = onAction(newestAnalyticsLocation[18])().newestAnalyticsLocation;
  let obj = type(newestAnalyticsLocation[20]);
  const items = [closure_6];
  if (obj.useStateFromStores(items, () => null != outer1_6.getAccount(null, type))) {
    return null;
  } else {
    let obj1 = onAction(newestAnalyticsLocation[41]);
    const value = obj1.get(type);
    c3 = value;
    obj = {};
    const intl = type(newestAnalyticsLocation[25]).intl;
    obj = { platform: value.name };
    obj.text = intl.formatToPlainString(type(newestAnalyticsLocation[25]).t.XWSHTb, obj);
    obj1 = { size: type(newestAnalyticsLocation[31]).Icon.Sizes.SMALL, source: type(newestAnalyticsLocation[42]).makeSource(value.icon.whitePNG), disableColor: true, style: tmp.icon };
    obj.icon = jsx(type(newestAnalyticsLocation[31]).Icon, { size: type(newestAnalyticsLocation[31]).Icon.Sizes.SMALL, source: type(newestAnalyticsLocation[42]).makeSource(value.icon.whitePNG), disableColor: true, style: tmp.icon });
    obj.variant = "secondary";
    obj.onPress = function onPress() {
      let obj = {};
      let str = "PRESS_CONNECT_XBOX_BUTTON";
      if (type === outer1_15.PLAYSTATION) {
        str = "PRESS_CONNECT_PLAYSTATION_BUTTON";
      }
      obj.action = str;
      onAction(obj);
      obj = {
        platformType: _undefined.type,
        location: newestAnalyticsLocation,
        onClose() {
          let obj = type(newestAnalyticsLocation[44]);
          obj = { screen: outer2_16.CONNECTIONS };
          return obj.openUserSettings(obj);
        }
      };
      onAction(newestAnalyticsLocation[43])(obj);
    };
    return jsx(type(newestAnalyticsLocation[24]).Button, { platform: value.name });
  }
  tmp = _createForOfIteratorHelperLoose();
};
export const CustomActivityButton = function CustomActivityButton(index) {
  let activity;
  let require;
  ({ user: require, activity } = index);
  index = index.index;
  const onAction = index.onAction;
  let tmp = null;
  if (null != activity.buttons) {
    tmp = null;
    if (index < activity.buttons.length) {
      const obj = {};
      if (activity(index[45])(activity)) {
        const intl = require(index[25]).intl;
        let stringResult = intl.string(require(index[25]).t.I6JG46);
      } else {
        stringResult = activity.buttons[index];
      }
      obj.text = stringResult;
      obj.variant = "secondary";
      // CreateGeneratorClosureLongIndex (0x67)
      tmp10 = onAction(tmp10);
      obj.onPress = tmp10;
      jsx(require(index[24]).Button, {});
      const tmp2 = jsx;
    }
  }
  return tmp;
};
