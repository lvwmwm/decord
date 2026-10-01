// Module ID: 12606
// Function ID: 12607
// Name: UserProfileActivityButtons
// Dependencies: [5, 19, 2044, 2045, 5593, 4754, 2067, 8814, 4469, 4479, 2099, 5591, 4855, 1074, 7788, 21, 4836, 576, 6583, 4458, 563, 12607, 12608, 7158, 5281, 1115, 5374, 8826, 4800, 11265, 10350, 1177, 7598, 11248, 4525, 12610, 7705, 5039, 4693, 7841, 5043, 5595, 1397, 8528, 6800, 7792, 11252, 1366, 7818, 2]
// Exports: ConnectPlatformButton, CustomActivityButton, JoinActivityButton, JoinGameActivityButton, PlayOnSpotifyButton, VoiceChannelButtons, WatchActivityButton

// Module 12606 (UserProfileActivityButtons)
import Fragment from "Fragment" /* 21 */;
import useStateFromStores from "useStateFromStores" /* 563 */;
import nativeDefault from "native" /* 576 */;
import intl5 from "intl" /* 1115 */;
import native from "native" /* 1177 */;
import LinkingDefault from "Linking" /* 4525 */;
import RootNavigationRef from "RootNavigationRef" /* 4693 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5039 */;
import PrivateChannelCallUtils from "PrivateChannelCallUtils" /* 5043 */;
import components_Button_Button from "components/Button/Button" /* 5281 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 6583 */;
import isStreamingDefault from "isStreaming" /* 7705 */;
import StageChannelModalActionCreators from "StageChannelModalActionCreators" /* 7841 */;
import authorizeConnectionDefault from "authorizeConnection" /* 8528 */;
import handleJoinEmbeddedActivityDefault from "handleJoinEmbeddedActivity" /* 8826 */;
import GamesActionCreatorsDefault from "GamesActionCreators" /* 11265 */;
import getActivityChannelIdDefault from "getActivityChannelId" /* 12607 */;
import getActivityJoinability from "getActivityJoinability" /* 12608 */;
import getStreamURLDefault from "getStreamURL" /* 12610 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2044 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import ConnectedAccountsStore from "ConnectedAccountsStore" /* 5593 */;
import GuildMemberCountStore from "GuildMemberCountStore" /* 4754 */;
import GuildStore from "GuildStore" /* 2067 */;
import LocalActivityStore from "LocalActivityStore" /* 8814 */;
import PermissionStore from "PermissionStore" /* 4469 */;
import RelationshipStore from "RelationshipStore" /* 4479 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2099 */;
import SelfPresenceStore from "SelfPresenceStore" /* 5591 */;
import VoiceStateStore from "VoiceStateStore" /* 4855 */;
import Constants from "Constants" /* 1074 */;
import SpotifyConstants from "SpotifyConstants" /* 7788 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const getActivityJoinabilityDefault = getActivityJoinability;
let c4, c5, importDefault;

let closure_15;
let closure_16;
let closure_17;
let closure_18;
let obj2;
({ PlatformTypes: closure_15, UserSettingsSections: closure_16 } = Constants);
({ SpotifyEndpoints: closure_17, SpotifyResourceTypes: closure_18 } = SpotifyConstants);
const jsx = Fragment.jsx;
let obj = { icon: obj2 };
obj2 = { tintColor: nativeDefault.colors.CONTROL_SECONDARY_TEXT_DEFAULT };
let closure_20 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileActivityButtons.tsx");

export const JoinActivityButton = function JoinActivityButton(user) {
  let activity;
  let currentUser;
  user = user.user;
  ({ currentUser: importDefault, activity } = user);
  const application = user.application;
  const onAction = user.onAction;
  let channelId;
  let closure_7;
  const analyticsLocations = require("useAnalyticsLocations")().analyticsLocations;
  let id1;
  const getEmbeddedActivityForUserId = onAction.getEmbeddedActivityForUserId;
  const id = user.id;
  const tmp = importDefault;
  const tmp3 = onAction;
  if (application != null) {
    id1 = application.id;
  }
  const embeddedActivityForUserId = getEmbeddedActivityForUserId(id, id1);
  let _location;
  const getEmbeddedActivityLocationChannelId = user(tmp2[19]).getEmbeddedActivityLocationChannelId;
  user(activity[19]);
  if (embeddedActivityForUserId != null) {
    _location = embeddedActivityForUserId.location;
  }
  channelId = getEmbeddedActivityLocationChannelId(_location);
  const tmp6Result = user(activity[20]);
  closure_7 = tmp6Result.useStateFromStores([], () => {
    const obj = { channelId, userId: user.id, activity };
    return getActivityChannelIdDefault(obj);
  });
  const items = [analyticsLocations, GuildStore, closure_7, RelationshipStore, SelectedChannelStore, VoiceStateStore, PermissionStore, LocalActivityStore, SelfPresenceStore, tmp3];
  const tmp6Result2 = user(activity[20]);
  const stateFromStores = tmp6Result2.useStateFromStores(items, () => {
    const obj = { isEmbedded: true, user, currentUser: importDefault, activity, application, channelId, ChannelStore, GuildStore, GuildMemberCountStore, RelationshipStore, SelectedChannelStore, VoiceStateStore, PermissionStore, LocalActivityStore, SelfPresenceStore, EmbeddedActivitiesStore };
    return getActivityJoinabilityDefault(obj);
  });
  let tmp12Result = null;
  if (tmp(activity[23])(activity)) {
    tmp12Result = null;
    if (null != application) {
      tmp12Result = null;
      if (stateFromStores !== user(activity[22]).ActivityJoinability.CANNOT_JOIN) {
        let stringResult;
        const Button = tmp6(tmp2[24]).Button;
        if (stateFromStores === user(activity[22]).ActivityJoinability.JOINED) {
          const intl2 = tmp6(tmp2[25]).intl;
          stringResult = intl2.string(tmp6(tmp2[25]).t.DPfdsq);
        } else {
          const intl = tmp6(tmp2[25]).intl;
          stringResult = intl.string(tmp6(tmp2[25]).t["4i2vj+"]);
        }
        let obj = {
          text: stringResult,
          icon: jsx(user(tmp2[26]).AppsIcon, { size: "sm", color: "white" }),
          variant: "active",
          disabled: stateFromStores === user(tmp2[22]).ActivityJoinability.JOINED,
          onPress() {
                  onAction({ action: "PRESS_JOIN_BUTTON" });
                  const obj = { applicationId: application.id, activityChannelId, locationObject: {}, analyticsLocations };
                  handleJoinEmbeddedActivityDefault(obj);
                  const obj2 = ActionSheetActionCreatorsDefault;
                  obj2.hideAllActionSheets();
                }
        };
        tmp12Result = tmp12(Button, obj);
      }
    }
  }
  return tmp12Result;
};
export const JoinGameActivityButton = function JoinGameActivityButton(onAction) {
  let application;
  let currentUser;
  let session_id;
  let user;
  ({ user: require, currentUser: importDefault, activity: dependencyMap, application } = onAction);
  onAction = onAction.onAction;
  application = undefined;
  const analyticsLocations = useAnalyticsLocationsDefault().analyticsLocations;
  application = { id: application.id, deeplink_uri: application.deepLinkUri };
  let obj = useStateFromStores;
  const items = [analyticsLocations, GuildStore, GuildMemberCountStore, RelationshipStore, SelectedChannelStore, VoiceStateStore, PermissionStore, LocalActivityStore, SelfPresenceStore, onAction];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const obj = { user: require, currentUser: importDefault, activity: dependencyMap, application, channelId: null, isEmbedded: false, ChannelStore, GuildStore, GuildMemberCountStore, RelationshipStore, SelectedChannelStore, VoiceStateStore, PermissionStore, LocalActivityStore, SelfPresenceStore, EmbeddedActivitiesStore };
    return getActivityJoinabilityDefault(obj);
  });
  let tmp6Result = null;
  if (null != application) {
    tmp6Result = null;
    if (stateFromStores !== getActivityJoinability.ActivityJoinability.CANNOT_JOIN) {
      let stringResult;
      const Button = tmp2(5281).Button;
      const tmp6 = jsx;
      if (stateFromStores === getActivityJoinability.ActivityJoinability.JOINED) {
        const intl2 = tmp2(1115).intl;
        stringResult = intl2.string(tmp2(1115).t.DPfdsq);
      } else {
        const intl = tmp2(1115).intl;
        stringResult = intl.string(tmp2(1115).t.VJlc0S);
      }
      let obj2 = {
        text: stringResult,
        variant: "active",
        disabled: stateFromStores === getActivityJoinability.ActivityJoinability.JOINED,
        onPress() {
              onAction({ action: "PRESS_JOIN_BUTTON" });
              const obj = GamesActionCreatorsDefault;
              const obj2 = { userId: require.id, sessionId: dependencyMap.session_id, application, channelId: null, messageId: null, applicationActivity: dependencyMap, source: "UserProfile", analyticsLocations };
              const joined = obj.join(obj2);
              const obj3 = ActionSheetActionCreatorsDefault;
              obj3.hideAllActionSheets();
            }
      };
      tmp6Result = tmp6(Button, obj2);
    }
  }
  return tmp6Result;
};
export const PlayOnSpotifyButton = function PlayOnSpotifyButton(arg0) {
  let activity;
  ({ activity, onAction: require } = arg0);
  const sync_id = activity.sync_id;
  const tmp3 = dependencyMap;
  const tmp = closure_20();
  let tmp4 = null;
  const tmp2 = sync_id;
  if (sync_id(10350)(activity)) {
    tmp4 = null;
    if (null != sync_id) {
      const Button = components_Button_Button.Button;
      const intl = intl5.intl;
      let obj2 = { platform: activity.name };
      let obj3 = { size: native.Icon.Sizes.SMALL, source: tmp2(7598), disableColor: true, style: tmp.icon };
      const Icon = native.Icon;
      tmp4 = <Button text={intl.formatToPlainString(intl5.t.LEgD7t, obj2)} icon={null} variant="secondary" onPress={_asyncToGenerator(async (arg0, value) => {
        let closure_0;
        let closure_1;
        let obj4;
        if (c5 === 2) {
          c5 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj2 = { value, done: true };
            return obj2;
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          let c3;
          try {
            c5 = 2;
            if (0 === c4) {
              if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c5 = 3;
                const obj3 = { value, done: true };
                return obj3;
              } else {
                require = undefined;
                require({ action: "PRESS_PLAY_ON_SPOTIFY_BUTTON" });
                c3 = 1;
                c4 = 2;
                c5 = 1;
                const obj5 = { value: obj4.canOpenSpotifyUrl(), done: false };
                obj4 = require("UserActivitySpotify");
                return obj5;
              }
            } else if (1 === c4) {
              c3 = 0;
              c5 = 3;
              return { value: "HermesInternal", done: null };
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              c5 = 3;
              const obj6 = { value, done: true };
              return obj6;
            } else {
              let openUrlResult;
              require = value;
              const obj8 = require("UserActivitySpotify");
              if (require) {
                openUrlResult = obj8.openUrl(require, constants2.TRACK, closure_129_1);
              } else {
                obj8.attributeInstall();
                const obj = tmp(closure_2[34]);
                openUrlResult = obj.openURL(constants.APP_STORE);
              }
              c3 = 0;
              c5 = 3;
              const obj7 = { value: openUrlResult, done: true };
              return obj7;
            }
          } catch (tmp18) {
            closure_2 = tmp18;
            if (0 === c3) {
              c5 = 3;
              throw tmp18;
            } else {
              c4 = 1;
            }
          }
        }
      })} />;
    }
  }
  return tmp4;
};
export const WatchActivityButton = function WatchActivityButton(arg0) {
  let activity;
  let closure_1;
  ({ activity, onAction: require } = arg0);
  const tmp2 = getStreamURLDefault(activity);
  importDefault = tmp2;
  let tmp3 = null;
  if (isStreamingDefault(activity)) {
    tmp3 = null;
    if (null != tmp2) {
      const Button = components_Button_Button.Button;
      const intl = intl5.intl;
      tmp3 = <Button text={intl.string(intl5.t.I6JG46)} variant="secondary" onPress={function onPress() {
        require({ action: "PRESS_WATCH_BUTTON" });
        const obj = LinkingDefault;
        obj.openURL(closure_1);
      }} />;
    }
  }
  return tmp3;
};
export const VoiceChannelButtons = function VoiceChannelButtons(channel) {
  let isInChannel;
  let str;
  let stringResult;
  channel = channel.channel;
  ({ isInChannel, onAction: importDefault } = channel);
  let newestAnalyticsLocation;
  newestAnalyticsLocation = require("useAnalyticsLocations")().newestAnalyticsLocation;
  const isGuildStageVoiceResult = channel.isGuildStageVoice();
  let c3 = isGuildStageVoiceResult;
  const Button = channel(newestAnalyticsLocation[24]).Button;
  const isDMResult = channel.isDM();
  const tmp3 = jsx;
  if (isInChannel) {
    if (!isDMResult) {
      let string2Result;
      if (!channel.isGroupDM()) {
        const intl3 = tmp4(tmp[25]).intl;
        const string2 = intl3.string;
        const t2 = tmp4(tmp[25]).t;
        if (isGuildStageVoiceResult) {
          string2Result = string2(t2.Acqcot);
        } else {
          string2Result = string2(t2.BXxdl7);
        }
      }
      stringResult = string2Result;
    }
    const intl4 = tmp4(tmp[25]).intl;
    string2Result = intl4.string(tmp4(tmp[25]).t["7hwn2A"]);
  } else {
    if (!isDMResult) {
      if (!channel.isGroupDM()) {
        const intl = tmp4(tmp[25]).intl;
        const string = intl.string;
        const t = tmp4(tmp[25]).t;
        if (isGuildStageVoiceResult) {
          stringResult = string(t["7vb2cc"]);
        } else {
          stringResult = string(t["96ANUN"]);
        }
      }
    }
    const intl2 = tmp4(tmp[25]).intl;
    stringResult = intl2.string(tmp4(tmp[25]).t.ozoE2A);
  }
  let obj = {
    text: stringResult,
    variant: str,
    grow: true,
    onPress() {
      importDefault({ action: "PRESS_JOIN_CALL_BUTTON" });
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideAllActionSheets();
      const obj2 = ModalActionCreatorsDefault;
      obj2.popAll();
      const obj3 = RootNavigationRef;
      const rootNavigationRef = obj3.getRootNavigationRef();
      let isReadyResult;
      if (rootNavigationRef != null) {
        isReadyResult = rootNavigationRef.isReady();
      }
      let tmp7 = true === isReadyResult;
      if (tmp7) {
        const currentRoute = rootNavigationRef.getCurrentRoute();
        let name;
        if (currentRoute != null) {
          name = currentRoute.name;
        }
        tmp7 = "you" === name;
      }
      if (tmp7) {
        rootNavigationRef.goBack();
      }
      const tmp11 = c3;
      if (tmp11) {
        const tmp5Result = StageChannelModalActionCreators;
        tmp5Result.connectAndOpen(channel);
      } else {
        const tmp5Result2 = PrivateChannelCallUtils;
        tmp5Result2.openGuildVoiceModal(channel, newestAnalyticsLocation);
      }
    }
  };
  str = "active";
  if (isInChannel) {
    str = "secondary";
  }
  return tmp3(Button, obj);
};
export const ConnectPlatformButton = function ConnectPlatformButton(type) {
  let tmp4Result;
  type = type.type;
  const onAction = type.onAction;
  let newestAnalyticsLocation;
  let c3;
  let tmp = closure_20();
  newestAnalyticsLocation = onAction(newestAnalyticsLocation[18])().newestAnalyticsLocation;
  let obj = type(newestAnalyticsLocation[20]);
  const items = [ConnectedAccountsStore];
  const tmp2 = onAction;
  if (obj.useStateFromStores(items, () => null != ConnectedAccountsStore.getAccount(null, type))) {
    return null;
  } else {
    const tmp2Result = tmp2(newestAnalyticsLocation[41]);
    const value = tmp2Result.get(type);
    c3 = value;
    const Button = tmp4(tmp3[24]).Button;
    const intl = tmp4(tmp3[25]).intl;
    const obj3 = { platform: value.name };
    ({ size: type(newestAnalyticsLocation[31]).Icon.Sizes.SMALL, source: tmp4Result.makeSource(value.icon.whitePNG), disableColor: true, style: tmp.icon });
    const Icon = tmp4(tmp3[31]).Icon;
    tmp4Result = type(newestAnalyticsLocation[42]);
    return <Button text={intl.formatToPlainString(type(newestAnalyticsLocation[25]).t.XWSHTb, obj3)} icon={null} variant="secondary" onPress={function onPress() {
      let str = "PRESS_CONNECT_XBOX_BUTTON";
      const tmp = onAction;
      if (type === constants.PLAYSTATION) {
        str = "PRESS_CONNECT_PLAYSTATION_BUTTON";
      }
      tmp({ action: str });
      let obj = {
        platformType: type.type,
        location: newestAnalyticsLocation,
        onClose() {
          const obj = type(newestAnalyticsLocation[44]);
          const obj2 = { screen: constants.CONNECTIONS };
          return obj.openUserSettings(obj2);
        }
      };
      authorizeConnectionDefault(obj);
    }} />;
  }
};
export const CustomActivityButton = function CustomActivityButton(index) {
  let activity;
  ({ user: require, activity } = index);
  index = index.index;
  const onAction = index.onAction;
  let tmp = null;
  if (null != activity.buttons) {
    tmp = null;
    if (index < activity.buttons.length) {
      let stringResult;
      const tmp3 = require;
      const tmp4 = index;
      const Button = require("components/Button/Button").Button;
      const tmp2 = jsx;
      if (activity(index[45])(activity)) {
        const intl = tmp3(tmp4[25]).intl;
        stringResult = intl.string(tmp3(tmp4[25]).t.I6JG46);
      } else {
        stringResult = activity.buttons[index];
      }
      let obj = {
        text: stringResult,
        variant: "secondary",
        onPress: onAction(function*(arg0, value) {
              let closure_0;
              let closure_1;
              let closure_2;
              let obj9;
              if (c5 === 2) {
                c5 = 3;
                throw new TypeError("Generator functions may not be called on executing generators");
              } else if (tmp3 === 3) {
                if (arg0 === 1) {
                  throw value;
                } else if (arg0 === 2) {
                  const obj3 = { value, done: true };
                  return obj3;
                } else {
                  return { value: "HermesInternal", done: null };
                }
              } else {
                let tmp17;
                let c3;
                try {
                  let tmp;
                  let href;
                  c5 = 2;
                  if (0 === c4) {
                    if (arg0 === 1) {
                      c5 = 3;
                      throw value;
                    } else if (arg0 === 2) {
                      c5 = 3;
                      const obj4 = { value, done: true };
                      return obj4;
                    } else {
                      id = undefined;
                      tmp = undefined;
                      tmp17 = undefined;
                      href = undefined;
                      onAction({ action: "PRESS_CUSTOM_BUTTON" });
                      c3 = 1;
                      c4 = 2;
                      c5 = 1;
                      const obj5 = { value: obj9.getMetadata(activity, require.id), done: false };
                      obj9 = id(tmp17[46]);
                      return obj5;
                    }
                  } else {
                    if (1 === c4) {
                      c3 = 0;
                    } else if (arg0 === 1) {
                      c5 = 3;
                      throw value;
                    } else if (arg0 === 2) {
                      c3 = 0;
                      c5 = 3;
                      const obj6 = { value, done: true };
                      return obj6;
                    } else {
                      id = value;
                      if (id.button_urls.length <= closure_129_2) {
                        c3 = 0;
                        c5 = 3;
                        return { value: "HermesInternal", done: null };
                      } else {
                        tmp = id.button_urls[closure_129_2];
                        if (typeof tmp !== "string") {
                          c3 = 0;
                          c5 = 3;
                          return { value: "HermesInternal", done: null };
                        } else {
                          const obj8 = tmp(tmp17[47]);
                          tmp17 = obj8.safeParseWithQuery(tmp);
                          let protocol;
                          if (tmp17 != null) {
                            protocol = tmp17.protocol;
                          }
                          if (null != protocol) {
                            let hostname;
                            if (tmp17 != null) {
                              hostname = tmp17.hostname;
                            }
                            if (null != hostname) {
                              let obj = tmp(tmp17[47]);
                              href = obj.format(tmp17);
                              const obj7 = {
                                href,
                                onConfirm() {
                                                  const obj = activity(index[34]);
                                                  return obj.openURL(href);
                                                },
                                trusted: false
                              };
                              const obj2 = id(tmp17[48]);
                              obj2.handleClick(obj7);
                              c3 = 0;
                            }
                          }
                          c3 = 0;
                          c5 = 3;
                          return { value: "HermesInternal", done: null };
                        }
                      }
                    }
                    c5 = 3;
                    return { value: "HermesInternal", done: null };
                  }
                } catch (tmp17) {
                  if (0 === c3) {
                    c5 = 3;
                    throw tmp17;
                  } else {
                    c4 = 1;
                  }
                }
              }
            })
      };
      tmp = tmp2(Button, obj);
    }
  }
  return tmp;
};
