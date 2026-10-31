// Module ID: 14884
// Function ID: 14885
// Name: UserProfileActivityButtons
// Dependencies: [5, 19, 4862, 4863, 6572, 5242, 4885, 11524, 4946, 4956, 4917, 6570, 5679, 1072, 8911, 21, 5014, 575, 7326, 4935, 563, 14885, 6734, 14886, 7883, 5634, 1113, 8678, 5258, 6744, 11692, 10762, 1187, 8724, 11673, 5709, 14888, 8831, 5199, 7950, 7939, 6574, 1409, 9720, 7563, 8915, 11677, 1377, 8940, 2]
// Exports: ConnectPlatformButton, CustomActivityButton, JoinActivityButton, JoinGameActivityButton, PlayOnSpotifyButton, VoiceChannelButtons, WatchActivityButton

// Module 14884 (UserProfileActivityButtons)
import Fragment from "Fragment" /* 21 */;
import useStateFromStores from "useStateFromStores" /* 563 */;
import nativeDefault from "native" /* 575 */;
import intl5 from "intl" /* 1113 */;
import native from "native" /* 1187 */;
import embeddedActivityLocationUtils from "embeddedActivityLocationUtils" /* 4935 */;
import RootNavigationRef from "RootNavigationRef" /* 5199 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5258 */;
import components_Button_Button from "components/Button/Button" /* 5634 */;
import LinkingDefault from "Linking" /* 5709 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6744 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 7326 */;
import PrivateChannelCallUtils from "PrivateChannelCallUtils" /* 7939 */;
import StageChannelModalActionCreators from "StageChannelModalActionCreators" /* 7950 */;
import isStreamingDefault from "isStreaming" /* 8831 */;
import authorizeConnectionDefault from "authorizeConnection" /* 9720 */;
import GamesActionCreatorsDefault from "GamesActionCreators" /* 11692 */;
import getActivityChannelIdDefault from "getActivityChannelId" /* 14885 */;
import getActivityJoinability from "getActivityJoinability" /* 14886 */;
import getStreamURLDefault from "getStreamURL" /* 14888 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 4862 */;
import ChannelStore from "ChannelStore" /* 4863 */;
import ConnectedAccountsStore from "ConnectedAccountsStore" /* 6572 */;
import GuildMemberCountStore from "GuildMemberCountStore" /* 5242 */;
import GuildStore from "GuildStore" /* 4885 */;
import LocalActivityStore from "LocalActivityStore" /* 11524 */;
import PermissionStore from "PermissionStore" /* 4946 */;
import RelationshipStore from "RelationshipStore" /* 4956 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4917 */;
import SelfPresenceStore from "SelfPresenceStore" /* 6570 */;
import VoiceStateStore from "VoiceStateStore" /* 5679 */;
import Constants from "Constants" /* 1072 */;
import SpotifyConstants from "SpotifyConstants" /* 8911 */;
import createStyles from "createStyles" /* 5014 */;
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

export function JoinActivityButton(user) {
  let activity;
  let currentUser;
  user = user.user;
  ({ currentUser: importDefault, activity } = user);
  const application = user.application;
  const onAction = user.onAction;
  let channelId;
  let stateFromStores;
  let isContentGated;
  const analyticsLocations = require("useAnalyticsLocations")().analyticsLocations;
  let id1;
  const getEmbeddedActivityForUserId = onAction.getEmbeddedActivityForUserId;
  const id = user.id;
  const tmp = importDefault;
  const tmp3 = onAction;
  if (application != null) {
    id1 = application.id;
  }
  let embeddedActivityForUserId = getEmbeddedActivityForUserId(id, id1);
  const tmp6 = user;
  let _location;
  let getEmbeddedActivityLocationChannelId = user(activity[19]).getEmbeddedActivityLocationChannelId;
  user(activity[19]);
  if (embeddedActivityForUserId != null) {
    _location = embeddedActivityForUserId.location;
  }
  channelId = getEmbeddedActivityLocationChannelId(_location);
  const tmp6Result = tmp6(activity[20]);
  stateFromStores = tmp6Result.useStateFromStores([], () => {
    const obj = { channelId, userId: user.id, activity };
    return getActivityChannelIdDefault(obj);
  });
  const items = [analyticsLocations];
  const items1 = [stateFromStores];
  const tmp6Result4 = tmp6(activity[20]);
  const stateFromStores1 = tmp6Result4.useStateFromStores(items, () => ChannelStore.getChannel(stateFromStores), items1);
  const tmp6Result5 = tmp6(activity[22]);
  isContentGated = tmp6Result5.useIsChannelContentGated(stateFromStores1);
  const items2 = [analyticsLocations, isContentGated, stateFromStores, RelationshipStore, SelectedChannelStore, VoiceStateStore, PermissionStore, LocalActivityStore, SelfPresenceStore, tmp3];
  const tmp6Result6 = tmp6(activity[20]);
  const stateFromStores2 = tmp6Result6.useStateFromStores(items2, () => {
    const obj = { isEmbedded: true, user, currentUser: importDefault, activity, application, channelId: stateFromStores, isContentGated, ChannelStore, GuildStore, GuildMemberCountStore, RelationshipStore, SelectedChannelStore, VoiceStateStore, PermissionStore, LocalActivityStore, SelfPresenceStore, EmbeddedActivitiesStore };
    return getActivityJoinabilityDefault(obj);
  });
  let tmp14Result = null;
  if (tmp(activity[24])(activity)) {
    tmp14Result = null;
    if (null != application) {
      tmp14Result = null;
      if (stateFromStores2 !== tmp6(activity[23]).ActivityJoinability.CANNOT_JOIN) {
        let stringResult;
        const Button = tmp6(tmp2[25]).Button;
        if (stateFromStores2 === tmp6(activity[23]).ActivityJoinability.JOINED) {
          const intl2 = tmp6(tmp2[26]).intl;
          stringResult = intl2.string(tmp6(tmp2[26]).t.DPfdsq);
        } else {
          const intl = tmp6(tmp2[26]).intl;
          stringResult = intl.string(tmp6(tmp2[26]).t["4i2vj+"]);
        }
        let obj = {
          text: stringResult,
          icon: jsx(tmp6(activity[27]).AppsIcon, { size: "sm", color: "white" }),
          variant: "active",
          disabled: stateFromStores2 === tmp6(activity[23]).ActivityJoinability.JOINED,
          onPress() {
                  let embeddedActivityLocationChannelId;
                  onAction({ action: "PRESS_JOIN_BUTTON" });
                  const obj = ActionSheetActionCreatorsDefault;
                  obj.hideAllActionSheets();
                  const obj2 = ModalActionCreatorsDefault;
                  obj2.popAll();
                  const embeddedActivityForUserId = EmbeddedActivitiesStore.getEmbeddedActivityForUserId(user.id, application.id, true);
                  const obj3 = { userId: user.id, sessionId: activity.session_id, applicationId: application.id, activity, channelId: embeddedActivityLocationChannelId, embedded: true, analyticsLocations };
                  const join = GamesActionCreatorsDefault.join;
                  GamesActionCreatorsDefault;
                  let _location;
                  const getEmbeddedActivityLocationChannelId = embeddedActivityLocationUtils.getEmbeddedActivityLocationChannelId;
                  embeddedActivityLocationUtils;
                  if (embeddedActivityForUserId != null) {
                    _location = embeddedActivityForUserId.location;
                  }
                  embeddedActivityLocationChannelId = getEmbeddedActivityLocationChannelId(_location);
                  if (embeddedActivityLocationChannelId == null) {
                    embeddedActivityLocationChannelId = stateFromStores;
                  }
                  const joined = join(obj3);
                }
        };
        tmp14Result = tmp14(Button, obj);
      }
    }
  }
  return tmp14Result;
}
export function JoinGameActivityButton(onAction) {
  let activity;
  let application;
  let currentUser;
  let user;
  ({ user: require, currentUser: importDefault, activity: dependencyMap, application } = onAction);
  onAction = onAction.onAction;
  const analyticsLocations = useAnalyticsLocationsDefault().analyticsLocations;
  let obj = useStateFromStores;
  const items = [analyticsLocations, GuildStore, GuildMemberCountStore, RelationshipStore, SelectedChannelStore, VoiceStateStore, PermissionStore, LocalActivityStore, SelfPresenceStore, onAction];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const obj = { user: require, currentUser: importDefault, activity: dependencyMap, application, channelId: null, isEmbedded: false, isContentGated: false, ChannelStore, GuildStore, GuildMemberCountStore, RelationshipStore, SelectedChannelStore, VoiceStateStore, PermissionStore, LocalActivityStore, SelfPresenceStore, EmbeddedActivitiesStore };
    return getActivityJoinabilityDefault(obj);
  });
  let tmp6Result = null;
  if (null != application) {
    tmp6Result = null;
    if (stateFromStores !== getActivityJoinability.ActivityJoinability.CANNOT_JOIN) {
      let stringResult;
      const Button = tmp2(5634).Button;
      const tmp6 = jsx;
      if (stateFromStores === getActivityJoinability.ActivityJoinability.JOINED) {
        const intl2 = tmp2(1113).intl;
        stringResult = intl2.string(tmp2(1113).t.DPfdsq);
      } else {
        const intl = tmp2(1113).intl;
        stringResult = intl.string(tmp2(1113).t.VJlc0S);
      }
      let obj2 = {
        text: stringResult,
        variant: "active",
        disabled: stateFromStores === getActivityJoinability.ActivityJoinability.JOINED,
        onPress() {
              onAction({ action: "PRESS_JOIN_BUTTON" });
              const obj = ActionSheetActionCreatorsDefault;
              obj.hideAllActionSheets();
              const obj2 = ModalActionCreatorsDefault;
              obj2.popAll();
              const obj3 = GamesActionCreatorsDefault;
              const obj4 = { userId: require.id, sessionId: dependencyMap.session_id, applicationId: application.id, channelId: null, messageId: null, activity: dependencyMap, source: "UserProfile", analyticsLocations };
              const joined = obj3.join(obj4);
            }
      };
      tmp6Result = tmp6(Button, obj2);
    }
  }
  return tmp6Result;
}
export function PlayOnSpotifyButton(arg0) {
  let activity;
  ({ activity, onAction: require } = arg0);
  const sync_id = activity.sync_id;
  const tmp3 = dependencyMap;
  const tmp = closure_20();
  let tmp4 = null;
  const tmp2 = sync_id;
  if (sync_id(10762)(activity)) {
    tmp4 = null;
    if (null != sync_id) {
      const Button = components_Button_Button.Button;
      const intl = intl5.intl;
      let obj2 = { platform: activity.name };
      let obj3 = { size: native.Icon.Sizes.SMALL, source: tmp2(8724), disableColor: true, style: tmp.icon };
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
            return { value: "HermesInternal", done: "HermesInternal" };
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
              return { value: "HermesInternal", done: "HermesInternal" };
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
                const obj = tmp(closure_2[35]);
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
}
export function WatchActivityButton(arg0) {
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
}
export function VoiceChannelButtons(channel) {
  let isInChannel;
  let str;
  let stringResult;
  channel = channel.channel;
  ({ isInChannel, onAction: importDefault } = channel);
  let newestAnalyticsLocation;
  newestAnalyticsLocation = require("useAnalyticsLocations")().newestAnalyticsLocation;
  const isGuildStageVoiceResult = channel.isGuildStageVoice();
  let c3 = isGuildStageVoiceResult;
  const Button = channel(newestAnalyticsLocation[25]).Button;
  const isDMResult = channel.isDM();
  const tmp3 = jsx;
  if (isInChannel) {
    if (!isDMResult) {
      let string2Result;
      if (!channel.isGroupDM()) {
        const intl3 = tmp4(tmp[26]).intl;
        const string2 = intl3.string;
        const t2 = tmp4(tmp[26]).t;
        if (isGuildStageVoiceResult) {
          string2Result = string2(t2.Acqcot);
        } else {
          string2Result = string2(t2.BXxdl7);
        }
      }
      stringResult = string2Result;
    }
    const intl4 = tmp4(tmp[26]).intl;
    string2Result = intl4.string(tmp4(tmp[26]).t["7hwn2A"]);
  } else {
    if (!isDMResult) {
      if (!channel.isGroupDM()) {
        const intl = tmp4(tmp[26]).intl;
        const string = intl.string;
        const t = tmp4(tmp[26]).t;
        if (isGuildStageVoiceResult) {
          stringResult = string(t["7vb2cc"]);
        } else {
          stringResult = string(t["96ANUN"]);
        }
      }
    }
    const intl2 = tmp4(tmp[26]).intl;
    stringResult = intl2.string(tmp4(tmp[26]).t.ozoE2A);
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
}
export function ConnectPlatformButton(type) {
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
    const Button = tmp4(tmp3[25]).Button;
    const intl = tmp4(tmp3[26]).intl;
    const obj3 = { platform: value.name };
    ({ size: type(newestAnalyticsLocation[32]).Icon.Sizes.SMALL, source: tmp4Result.makeSource(value.icon.whitePNG), disableColor: true, style: tmp.icon });
    const Icon = tmp4(tmp3[32]).Icon;
    tmp4Result = type(newestAnalyticsLocation[42]);
    return <Button text={intl.formatToPlainString(type(newestAnalyticsLocation[26]).t.XWSHTb, obj3)} icon={null} variant="secondary" onPress={function onPress() {
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
}
export function CustomActivityButton(index) {
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
        const intl = tmp3(tmp4[26]).intl;
        stringResult = intl.string(tmp3(tmp4[26]).t.I6JG46);
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
                  return { value: "HermesInternal", done: "HermesInternal" };
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
                        return { value: "HermesInternal", done: "HermesInternal" };
                      } else {
                        tmp = id.button_urls[closure_129_2];
                        if (typeof tmp !== "string") {
                          c3 = 0;
                          c5 = 3;
                          return { value: "HermesInternal", done: "HermesInternal" };
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
                                                  const obj = activity(index[35]);
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
                          return { value: "HermesInternal", done: "HermesInternal" };
                        }
                      }
                    }
                    c5 = 3;
                    return { value: "HermesInternal", done: "HermesInternal" };
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
}
