// Module ID: 14082
// Function ID: 14083
// Name: UserProfileActivityButtons
// Dependencies: [5, 19, 2067, 2068, 6017, 5116, 2090, 10974, 4845, 4855, 2119, 6015, 5212, 1087, 8732, 21, 5191, 587, 558, 576, 7130, 4834, 14083, 573, 6180, 14084, 7692, 1128, 8506, 5155, 6190, 11220, 11221, 11223, 5479, 11219, 10555, 1202, 8550, 11201, 4901, 14086, 8658, 5073, 7759, 7748, 6019, 1417, 9507, 7370, 8736, 11205, 1386, 8764, 2]
// Exports: CustomActivityButton

// Module 14082 (UserProfileActivityButtons)
import Fragment from "Fragment" /* 21 */;
import useStateFromStores from "useStateFromStores" /* 573 */;
import nativeDefault from "native" /* 587 */;
import intl5 from "intl" /* 1128 */;
import native from "native" /* 1202 */;
import embeddedActivityLocationUtils from "embeddedActivityLocationUtils" /* 4834 */;
import LinkingDefault from "Linking" /* 4901 */;
import RootNavigationRef from "RootNavigationRef" /* 5073 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5155 */;
import components_Button_Button from "components/Button/Button" /* 5479 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6190 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 7130 */;
import PrivateChannelCallUtils from "PrivateChannelCallUtils" /* 7748 */;
import StageChannelModalActionCreators from "StageChannelModalActionCreators" /* 7759 */;
import isStreamingDefault from "isStreaming" /* 8658 */;
import authorizeConnectionDefault from "authorizeConnection" /* 9507 */;
import GamesActionCreatorsDefault from "GamesActionCreators" /* 11219 */;
import canLaunchContextlessFrame from "canLaunchContextlessFrame" /* 11220 */;
import joinFrameActivityDefault from "joinFrameActivity" /* 11221 */;
import handleJoinEmbeddedActivityDefault from "handleJoinEmbeddedActivity" /* 11223 */;
import getActivityChannelIdDefault from "getActivityChannelId" /* 14083 */;
import getActivityJoinability from "getActivityJoinability" /* 14084 */;
import getStreamURLDefault from "getStreamURL" /* 14086 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2067 */;
import ChannelStore from "ChannelStore" /* 2068 */;
import ConnectedAccountsStore_mod from "ConnectedAccountsStore" /* 6017 */;
import GuildMemberCountStore from "GuildMemberCountStore" /* 5116 */;
import GuildStore from "GuildStore" /* 2090 */;
import LocalActivityStore from "LocalActivityStore" /* 10974 */;
import PermissionStore from "PermissionStore" /* 4845 */;
import RelationshipStore from "RelationshipStore" /* 4855 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2119 */;
import SelfPresenceStore from "SelfPresenceStore" /* 6015 */;
import VoiceStateStore from "VoiceStateStore" /* 5212 */;
import Constants from "Constants" /* 1087 */;
import SpotifyConstants from "SpotifyConstants" /* 8732 */;
import createStyles from "createStyles" /* 5191 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const getActivityJoinabilityDefault = getActivityJoinability;
let _require, c4, c5, importDefault;

let closure_15;
let closure_16;
let closure_17;
let closure_18;
let obj2;
let ConnectedAccountsStore = ConnectedAccountsStore_mod;
({ PlatformTypes: closure_15, UserSettingsSections: closure_16 } = Constants);
({ SpotifyEndpoints: closure_17, SpotifyResourceTypes: closure_18 } = SpotifyConstants);
const jsx = Fragment.jsx;
let obj = { icon: obj2 };
obj2 = { tintColor: nativeDefault.colors.CONTROL_SECONDARY_TEXT_DEFAULT };
let closure_20 = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function JoinActivityButton(user) {
  let activity;
  let channelId;
  let obj3;
  let obj = user(activity[19]);
  const cResult = obj.c(34);
  user = user.user;
  const currentUser = user.currentUser;
  activity = user.activity;
  const application = user.application;
  const onAction = user.onAction;
  const analyticsLocations = currentUser(activity[20])().analyticsLocations;
  let id1;
  const first = cResult[0];
  if (application != null) {
    id1 = application.id;
  }
  if (first === id1) {
    let tmp6;
    let tmp12;
    if (cResult[1] === user.id) {
      tmp6 = cResult[2];
    }
    ConnectedAccountsStore = tmp6;
    const tmp11 = globalThis;
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const items = [];
      cResult[3] = items;
      tmp12 = items;
    } else {
      tmp12 = cResult[3];
    }
    if (cResult[4] === activity) {
      if (cResult[5] === tmp6) {
        let tmp13;
        let tmp15;
        let tmp18;
        let tmp17;
        if (cResult[6] === user.id) {
          tmp13 = cResult[7];
        }
        const tmpResult = user(activity[23]);
        const stateFromStores = tmpResult.useStateFromStores(tmp12, tmp13);
        const _Symbol2 = Symbol;
        if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
          const items1 = [analyticsLocations];
          cResult[8] = items1;
          tmp15 = items1;
        } else {
          tmp15 = cResult[8];
        }
        if (cResult[9] !== stateFromStores) {
          class U {
            constructor() {
              return ChannelStore.getChannel(stateFromStores);
            }
          }
          const items2 = [stateFromStores];
          cResult[9] = stateFromStores;
          cResult[10] = U;
          class E {
            constructor() {
              const obj = { channelId, userId: user.id, activity };
              return getActivityChannelIdDefault(obj);
            }
          }
          tmp18 = items2;
          tmp17 = U;
        } else {
          class U {
            constructor() {
              return ChannelStore.getChannel(stateFromStores);
            }
          }
          tmp18 = cResult[11];
        }
        class E {
          constructor() {
            const obj = { channelId, userId: user.id, activity };
            return getActivityChannelIdDefault(obj);
          }
        }
        const stateFromStores1 = obj3.useStateFromStores(tmp15, tmp17, tmp18);
        const tmpResult3 = user(activity[24]);
        const isChannelContentGated = tmpResult3.useIsChannelContentGated(stateFromStores1);
        const _Symbol3 = Symbol;
        if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
          class U {
            constructor() {
              return ChannelStore.getChannel(stateFromStores);
            }
          }
          const items3 = [analyticsLocations, isChannelContentGated, stateFromStores, , , , , , , ];
          class E {
            constructor() {
              const obj = { channelId, userId: user.id, activity };
              return getActivityChannelIdDefault(obj);
            }
          }
          items3[4] = SelectedChannelStore;
          items3[5] = VoiceStateStore;
          items3[6] = PermissionStore;
          items3[7] = LocalActivityStore;
          items3[8] = SelfPresenceStore;
          items3[9] = onAction;
          cResult[12] = items3;
        } else {
          class U {
            constructor() {
              return ChannelStore.getChannel(stateFromStores);
            }
          }
        }
        if (cResult[13] === activity) {
          class U {
            constructor() {
              return ChannelStore.getChannel(stateFromStores);
            }
          }
        }
        const fn = function x() {
          const obj = { isEmbedded: true, user, currentUser, activity, application, channelId: stateFromStores, isContentGated: isChannelContentGated, ChannelStore, GuildStore, GuildMemberCountStore, RelationshipStore, SelectedChannelStore, VoiceStateStore, PermissionStore, LocalActivityStore, SelfPresenceStore, EmbeddedActivitiesStore };
          return getActivityJoinabilityDefault(obj);
        };
        cResult[13] = activity;
        cResult[14] = application;
        cResult[15] = stateFromStores;
        cResult[16] = currentUser;
        cResult[17] = isChannelContentGated;
        cResult[18] = user;
        cResult[19] = fn;
      }
    }
    class E {
      constructor() {
        const obj = { channelId, userId: user.id, activity };
        return getActivityChannelIdDefault(obj);
      }
    }
    cResult[4] = activity;
    cResult[5] = tmp6;
    cResult[6] = user.id;
    cResult[7] = E;
    tmp13 = E;
  }
  const getEmbeddedActivityForUserId = onAction.getEmbeddedActivityForUserId;
  const id = user.id;
  if (application != null) {
    class U {
      constructor() {
        return ChannelStore.getChannel(stateFromStores);
      }
    }
  }
  let embeddedActivityForUserId = getEmbeddedActivityForUserId(id, undefined);
  let getEmbeddedActivityLocationChannelId = tmp(tmp2[21]).getEmbeddedActivityLocationChannelId;
  user(activity[21]);
  if (embeddedActivityForUserId != null) {
    class U {
      constructor() {
        return ChannelStore.getChannel(stateFromStores);
      }
    }
  }
  let embeddedActivityLocationChannelId = getEmbeddedActivityLocationChannelId(undefined);
  if (application != null) {
    class U {
      constructor() {
        return ChannelStore.getChannel(stateFromStores);
      }
    }
  }
  cResult[0] = undefined;
  cResult[1] = user.id;
  cResult[2] = embeddedActivityLocationChannelId;
  tmp6 = embeddedActivityLocationChannelId;
}) : (function JoinActivityButton(user) {
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
  let tmp6 = user;
  let _location;
  let getEmbeddedActivityLocationChannelId = user(activity[21]).getEmbeddedActivityLocationChannelId;
  const tmp7 = user(activity[21]);
  if (embeddedActivityForUserId != null) {
    _location = embeddedActivityForUserId.location;
  }
  channelId = getEmbeddedActivityLocationChannelId(_location);
  const tmp6Result = tmp6(activity[23]);
  stateFromStores = tmp6Result.useStateFromStores([], () => {
    const obj = { channelId, userId: user.id, activity };
    return getActivityChannelIdDefault(obj);
  });
  const items = [analyticsLocations];
  const items1 = [stateFromStores];
  const tmp6Result4 = tmp6(activity[23]);
  const stateFromStores1 = tmp6Result4.useStateFromStores(items, () => ChannelStore.getChannel(stateFromStores), items1);
  const tmp6Result5 = tmp6(activity[24]);
  isContentGated = tmp6Result5.useIsChannelContentGated(stateFromStores1);
  const items2 = [analyticsLocations, isContentGated, stateFromStores, RelationshipStore, SelectedChannelStore, VoiceStateStore, PermissionStore, LocalActivityStore, SelfPresenceStore, tmp3];
  const tmp6Result6 = tmp6(activity[23]);
  const stateFromStores2 = tmp6Result6.useStateFromStores(items2, () => {
    const obj = { isEmbedded: true, user, currentUser: importDefault, activity, application, channelId: stateFromStores, isContentGated, ChannelStore, GuildStore, GuildMemberCountStore, RelationshipStore, SelectedChannelStore, VoiceStateStore, PermissionStore, LocalActivityStore, SelfPresenceStore, EmbeddedActivitiesStore };
    return getActivityJoinabilityDefault(obj);
  });
  let tmp14Result = null;
  if (tmp(activity[26])(activity)) {
    tmp14Result = null;
    if (null != application) {
      tmp14Result = null;
      if (stateFromStores2 !== tmp6(activity[25]).ActivityJoinability.CANNOT_JOIN) {
        let stringResult;
        const Button = tmp6(tmp2[34]).Button;
        if (stateFromStores2 === tmp6(activity[25]).ActivityJoinability.JOINED) {
          const intl2 = tmp6(tmp2[27]).intl;
          stringResult = intl2.string(tmp6(tmp2[27]).t.DPfdsq);
        } else {
          const intl = tmp6(tmp2[27]).intl;
          stringResult = intl.string(tmp6(tmp2[27]).t["4i2vj+"]);
        }
        let obj = {
          text: stringResult,
          icon: jsx(tmp6(tmp2[28]).AppsIcon, { size: "sm", color: "white" }),
          variant: "active",
          disabled: stateFromStores2 === tmp6(tmp2[25]).ActivityJoinability.JOINED,
          onPress() {
                  let embeddedActivityLocationChannelId;
                  onAction({ action: "PRESS_JOIN_BUTTON" });
                  const obj = ActionSheetActionCreatorsDefault;
                  obj.hideAllActionSheets();
                  const obj2 = ModalActionCreatorsDefault;
                  obj2.popAll();
                  const embeddedActivityForUserId = EmbeddedActivitiesStore.getEmbeddedActivityForUserId(user.id, application.id, true);
                  const tmp6 = user;
                  if (null == embeddedActivityForUserId) {
                    const obj3 = canLaunchContextlessFrame;
                    if (obj3.canLaunchContextlessFrame(application)) {
                      const obj4 = { application, userId: tmp6.id, activity, sessionId: activity.session_id };
                      joinFrameActivityDefault(obj4);
                    }
                  }
                  const obj5 = { applicationId: application.id, activityChannelId: embeddedActivityLocationChannelId, locationObject: {}, analyticsLocations };
                  let _location;
                  const tmp2Result = handleJoinEmbeddedActivityDefault;
                  const getEmbeddedActivityLocationChannelId = embeddedActivityLocationUtils.getEmbeddedActivityLocationChannelId;
                  embeddedActivityLocationUtils;
                  if (embeddedActivityForUserId != null) {
                    _location = embeddedActivityForUserId.location;
                  }
                  embeddedActivityLocationChannelId = getEmbeddedActivityLocationChannelId(_location);
                  if (embeddedActivityLocationChannelId == null) {
                    embeddedActivityLocationChannelId = stateFromStores;
                  }
                  tmp2Result(obj5);
                }
        };
        tmp14Result = tmp14(Button, obj);
      }
    }
  }
  return tmp14Result;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function JoinGameActivityButton(user) {
  let activity;
  let obj = user(activity[19]);
  const cResult = obj.c(21);
  user = user.user;
  const currentUser = user.currentUser;
  activity = user.activity;
  const application = user.application;
  const onAction = user.onAction;
  const analyticsLocations = currentUser(activity[20])().analyticsLocations;
  if (cResult[0] === application.deepLinkUri) {
    let tmp4;
    let tmp6;
    if (cResult[1] === application.id) {
      tmp4 = cResult[2];
    }
    ConnectedAccountsStore = tmp4;
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const items = [analyticsLocations, GuildStore, GuildMemberCountStore, RelationshipStore, SelectedChannelStore, VoiceStateStore, PermissionStore, LocalActivityStore, SelfPresenceStore, onAction];
      cResult[3] = items;
      tmp6 = items;
    } else {
      tmp6 = cResult[3];
    }
    if (cResult[4] === activity) {
      if (cResult[5] === application) {
        if (cResult[6] === currentUser) {
          let tmp17;
          if (cResult[7] === user) {
            tmp17 = cResult[8];
          }
          const tmpResult = user(activity[23]);
          const stateFromStores = tmpResult.useStateFromStores(tmp6, tmp17);
          if (null != application) {
            if (stateFromStores !== user(activity[25]).ActivityJoinability.CANNOT_JOIN) {
              let tmp20;
              if (cResult[9] !== stateFromStores) {
                if (stateFromStores === user(activity[25]).ActivityJoinability.JOINED) {
                  const string2 = tmp(tmp2[27]).intl.string;
                  class U {
                    constructor() {
                      onAction({ action: "PRESS_JOIN_BUTTON" });
                      const obj = ActionSheetActionCreatorsDefault;
                      obj.hideAllActionSheets();
                      const obj2 = ModalActionCreatorsDefault;
                      obj2.popAll();
                      const obj3 = GamesActionCreatorsDefault;
                      const obj4 = { userId: user.id, sessionId: activity.session_id, application, channelId: null, messageId: null, applicationActivity: activity, source: "UserProfile", analyticsLocations };
                      const joined = obj3.join(obj4);
                    }
                  }
                } else {
                  const string = tmp(tmp2[27]).intl.string;
                  class U {
                    constructor() {
                      onAction({ action: "PRESS_JOIN_BUTTON" });
                      const obj = ActionSheetActionCreatorsDefault;
                      obj.hideAllActionSheets();
                      const obj2 = ModalActionCreatorsDefault;
                      obj2.popAll();
                      const obj3 = GamesActionCreatorsDefault;
                      const obj4 = { userId: user.id, sessionId: activity.session_id, application, channelId: null, messageId: null, applicationActivity: activity, source: "UserProfile", analyticsLocations };
                      const joined = obj3.join(obj4);
                    }
                  }
                }
                class U {
                  constructor() {
                    onAction({ action: "PRESS_JOIN_BUTTON" });
                    const obj = ActionSheetActionCreatorsDefault;
                    obj.hideAllActionSheets();
                    const obj2 = ModalActionCreatorsDefault;
                    obj2.popAll();
                    const obj3 = GamesActionCreatorsDefault;
                    const obj4 = { userId: user.id, sessionId: activity.session_id, application, channelId: null, messageId: null, applicationActivity: activity, source: "UserProfile", analyticsLocations };
                    const joined = obj3.join(obj4);
                  }
                }
                cResult[10] = tmp21;
                tmp20 = tmp21;
              } else {
                tmp20 = cResult[10];
              }
              if (cResult[11] === activity) {
                if (cResult[12] === analyticsLocations) {
                  if (cResult[13] === tmp4) {
                    if (cResult[14] === onAction) {
                      let tmp23;
                      if (cResult[15] === user.id) {
                        tmp23 = cResult[16];
                      }
                      class U {
                        constructor() {
                          onAction({ action: "PRESS_JOIN_BUTTON" });
                          const obj = ActionSheetActionCreatorsDefault;
                          obj.hideAllActionSheets();
                          const obj2 = ModalActionCreatorsDefault;
                          obj2.popAll();
                          const obj3 = GamesActionCreatorsDefault;
                          const obj4 = { userId: user.id, sessionId: activity.session_id, application, channelId: null, messageId: null, applicationActivity: activity, source: "UserProfile", analyticsLocations };
                          const joined = obj3.join(obj4);
                        }
                      }
                      cResult[17] = tmp20;
                      cResult[18] = stateFromStores === tmp22;
                      cResult[19] = tmp23;
                      cResult[20] = jsx(user(activity[34]).Button, { text: tmp20, variant: "active", disabled: stateFromStores === tmp22, onPress: tmp23 });
                      const tmp27 = jsx(user(activity[34]).Button, { text: tmp20, variant: "active", disabled: stateFromStores === tmp22, onPress: tmp23 });
                    }
                  }
                }
              }
              class U {
                constructor() {
                  onAction({ action: "PRESS_JOIN_BUTTON" });
                  const obj = ActionSheetActionCreatorsDefault;
                  obj.hideAllActionSheets();
                  const obj2 = ModalActionCreatorsDefault;
                  obj2.popAll();
                  const obj3 = GamesActionCreatorsDefault;
                  const obj4 = { userId: user.id, sessionId: activity.session_id, application, channelId: null, messageId: null, applicationActivity: activity, source: "UserProfile", analyticsLocations };
                  const joined = obj3.join(obj4);
                }
              }
              cResult[11] = activity;
              cResult[12] = analyticsLocations;
              cResult[13] = tmp4;
              cResult[14] = onAction;
              cResult[15] = user.id;
              cResult[16] = U;
              tmp23 = U;
            }
          }
          return null;
        }
      }
    }
    const fn = function b() {
      const obj = { user, currentUser, activity, application, channelId: null, isEmbedded: false, isContentGated: false, ChannelStore, GuildStore, GuildMemberCountStore, RelationshipStore, SelectedChannelStore, VoiceStateStore, PermissionStore, LocalActivityStore, SelfPresenceStore, EmbeddedActivitiesStore };
      return getActivityJoinabilityDefault(obj);
    };
    cResult[4] = activity;
    cResult[5] = application;
    cResult[6] = currentUser;
    cResult[7] = user;
    cResult[8] = fn;
    tmp17 = fn;
  }
  let obj3 = { id: application.id, deeplink_uri: application.deepLinkUri };
  cResult[0] = application.deepLinkUri;
  cResult[1] = application.id;
  cResult[2] = obj3;
  tmp4 = obj3;
}) : (function JoinGameActivityButton(onAction) {
  let application;
  let currentUser;
  let require;
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
    const obj = { user: require, currentUser: importDefault, activity: dependencyMap, application, channelId: null, isEmbedded: false, isContentGated: false, ChannelStore, GuildStore, GuildMemberCountStore, RelationshipStore, SelectedChannelStore, VoiceStateStore, PermissionStore, LocalActivityStore, SelfPresenceStore, EmbeddedActivitiesStore };
    return getActivityJoinabilityDefault(obj);
  });
  let tmp6Result = null;
  if (null != application) {
    tmp6Result = null;
    if (stateFromStores !== getActivityJoinability.ActivityJoinability.CANNOT_JOIN) {
      let stringResult;
      const Button = tmp2(5479).Button;
      const tmp6 = jsx;
      if (stateFromStores === getActivityJoinability.ActivityJoinability.JOINED) {
        const intl2 = tmp2(1128).intl;
        stringResult = intl2.string(tmp2(1128).t.DPfdsq);
      } else {
        const intl = tmp2(1128).intl;
        stringResult = intl.string(tmp2(1128).t.VJlc0S);
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
              const obj4 = { userId: require.id, sessionId: dependencyMap.session_id, application, channelId: null, messageId: null, applicationActivity: dependencyMap, source: "UserProfile", analyticsLocations };
              const joined = obj3.join(obj4);
            }
      };
      tmp6Result = tmp6(Button, obj2);
    }
  }
  return tmp6Result;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? (function PlayOnSpotifyButton(arg0) {
  let activity;
  let onAction;
  const tmp = onAction;
  let obj = onAction(576);
  const cResult = obj.c(11);
  ({ activity, onAction } = arg0);
  const tmp4 = closure_20();
  const sync_id = activity.sync_id;
  let tmp6 = null;
  const tmp5 = sync_id;
  if (sync_id(10555)(activity)) {
    tmp6 = null;
    if (null != sync_id) {
      let tmp7;
      let tmp9;
      if (cResult[0] !== activity.name) {
        const intl = tmp(1128).intl;
        let obj2 = { platform: activity.name };
        const formatToPlainStringResult = intl.formatToPlainString(tmp(1128).t.LEgD7t, obj2);
        cResult[0] = activity.name;
        cResult[1] = formatToPlainStringResult;
        tmp7 = formatToPlainStringResult;
      } else {
        tmp7 = cResult[1];
      }
      if (cResult[2] !== tmp4.icon) {
        const Icon = tmp(1202).Icon;
        const tmp11 = <Icon size={tmp(1202).Icon.Sizes.SMALL} source={tmp5(8550)} disableColor style={tmp4.icon} />;
        cResult[2] = tmp4.icon;
        cResult[3] = tmp11;
        tmp9 = tmp11;
      } else {
        tmp9 = cResult[3];
      }
      if (cResult[4] === onAction) {
        let tmp12;
        if (cResult[5] === sync_id) {
          tmp12 = cResult[6];
        }
        if (cResult[7] === tmp7) {
          if (cResult[8] === tmp9) {
            let tmp14;
            if (cResult[9] === tmp12) {
              tmp14 = cResult[10];
            }
            tmp6 = tmp14;
          }
        }
        const tmp16 = jsx(tmp(5479).Button, { text: tmp7, icon: tmp9, variant: "secondary", onPress: tmp12 });
        cResult[7] = tmp7;
        cResult[8] = tmp9;
        cResult[9] = tmp12;
        cResult[10] = tmp16;
        tmp14 = tmp16;
      }
      let closure_0 = _asyncToGenerator(async (arg0, value) => {
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
            return { value: "IconComponent", done: null };
          }
        } else {
          let c3;
          try {
            let closure_1;
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
                closure_1 = tmp;
                closure_0 = undefined;
                closure_0({ action: "PRESS_PLAY_ON_SPOTIFY_BUTTON" });
                c3 = 1;
                c4 = 2;
                c5 = 1;
                const obj5 = { value: obj4.canOpenSpotifyUrl(), done: false };
                obj4 = closure_0(dependencyMap[39]);
                return obj5;
              }
            } else if (1 === c4) {
              c3 = 0;
              c5 = 3;
              return { value: "IconComponent", done: null };
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
              closure_0 = value;
              const obj8 = closure_0(dependencyMap[39]);
              if (closure_0) {
                openUrlResult = obj8.openUrl(closure_0, constants2.TRACK, closure_1);
              } else {
                obj8.attributeInstall();
                const obj = sync_id(dependencyMap[40]);
                openUrlResult = obj.openURL(constants.APP_STORE);
              }
              c3 = 0;
              c5 = 3;
              const obj7 = { value: openUrlResult, done: true };
              return obj7;
            }
          } catch (tmp18) {
            let closure_2 = tmp18;
            if (0 === c3) {
              c5 = 3;
              throw tmp18;
            } else {
              c4 = 1;
            }
          }
        }
      });
      function t3() {
        return closure_0(...arguments);
      }
      cResult[4] = onAction;
      cResult[5] = sync_id;
      cResult[6] = t3;
      tmp12 = t3;
    }
  }
  return tmp6;
}) : (function PlayOnSpotifyButton(arg0) {
  let activity;
  let require;
  ({ activity, onAction: require } = arg0);
  const sync_id = activity.sync_id;
  const tmp3 = dependencyMap;
  const tmp = closure_20();
  let tmp4 = null;
  const tmp2 = sync_id;
  if (sync_id(10555)(activity)) {
    tmp4 = null;
    if (null != sync_id) {
      const Button = components_Button_Button.Button;
      const intl = intl5.intl;
      let obj2 = { platform: activity.name };
      let obj3 = { size: native.Icon.Sizes.SMALL, source: tmp2(8550), disableColor: true, style: tmp.icon };
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
            return { value: "IconComponent", done: null };
          }
        } else {
          let c3;
          try {
            let require;
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
                _require({ action: "PRESS_PLAY_ON_SPOTIFY_BUTTON" });
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
              return { value: "IconComponent", done: null };
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
                const obj = tmp(closure_2[40]);
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
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp8 = ReactCompilerGating.isReactCompilerEnabled() ? (function WatchActivityButton(arg0) {
  let activity;
  let closure_1;
  let onAction;
  let tmp4;
  let obj = onAction(576);
  const cResult = obj.c(6);
  ({ activity, onAction } = arg0);
  if (cResult[0] !== activity) {
    const tmp6 = getStreamURLDefault(activity);
    cResult[0] = activity;
    cResult[1] = tmp6;
    tmp4 = tmp6;
  } else {
    tmp4 = cResult[1];
  }
  importDefault = tmp4;
  let tmp7 = null;
  if (isStreamingDefault(activity)) {
    tmp7 = null;
    if (null != tmp4) {
      let tmp9;
      const _Symbol = Symbol;
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(1128).intl;
        const stringResult = intl.string(onAction(1128).t.I6JG46);
        cResult[2] = stringResult;
        tmp9 = stringResult;
      } else {
        tmp9 = cResult[2];
      }
      if (cResult[3] === onAction) {
        let tmp11;
        if (cResult[4] === tmp4) {
          tmp11 = cResult[5];
        }
        tmp7 = tmp11;
      }
      const tmp13 = jsx(onAction(5479).Button, {
        text: tmp9,
        variant: "secondary",
        onPress() {
              onAction({ action: "PRESS_WATCH_BUTTON" });
              const obj = LinkingDefault;
              obj.openURL(closure_1);
            }
      });
      cResult[3] = onAction;
      cResult[4] = tmp4;
      cResult[5] = tmp13;
      tmp11 = tmp13;
    }
  }
  return tmp7;
}) : (function WatchActivityButton(arg0) {
  let activity;
  let closure_1;
  let require;
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
        _require({ action: "PRESS_WATCH_BUTTON" });
        const obj = LinkingDefault;
        obj.openURL(closure_1);
      }} />;
    }
  }
  return tmp3;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp9 = ReactCompilerGating.isReactCompilerEnabled() ? (function VoiceChannelButtons(channel) {
  let isInChannel;
  let newestAnalyticsLocation;
  let onAction;
  let tmp4;
  let obj = channel(newestAnalyticsLocation[19]);
  const cResult = obj.c(21);
  const tmp = channel;
  channel = channel.channel;
  ({ isInChannel, onAction } = channel);
  const tmp2 = newestAnalyticsLocation;
  newestAnalyticsLocation = onAction(newestAnalyticsLocation[20])().newestAnalyticsLocation;
  if (cResult[0] !== channel) {
    const isGuildStageVoiceResult = channel.isGuildStageVoice();
    cResult[0] = channel;
    cResult[1] = isGuildStageVoiceResult;
    tmp4 = isGuildStageVoiceResult;
  } else {
    tmp4 = cResult[1];
  }
  let closure_3 = tmp4;
  if (cResult[2] === channel) {
    let tmp6;
    if (cResult[3] === tmp4) {
      tmp6 = cResult[4];
    }
    if (cResult[5] === channel) {
      let tmp7;
      if (cResult[6] === tmp4) {
        tmp7 = cResult[7];
      }
      if (cResult[8] === isInChannel) {
        if (cResult[9] === tmp7) {
          let tmp8;
          if (cResult[10] === tmp6) {
            tmp8 = cResult[11];
          }
          let str = "active";
          if (isInChannel) {
            str = "secondary";
          }
          if (cResult[12] === channel) {
            if (cResult[13] === tmp4) {
              if (cResult[14] === newestAnalyticsLocation) {
                let tmp10;
                if (cResult[15] === onAction) {
                  tmp10 = cResult[16];
                }
                if (cResult[17] === tmp8) {
                  if (cResult[18] === str) {
                    let tmp11;
                    if (cResult[19] === tmp10) {
                      tmp11 = cResult[20];
                    }
                    return tmp11;
                  }
                }
                const tmp13 = jsx(tmp(tmp2[34]).Button, { text: tmp8, variant: str, grow: true, onPress: tmp10 });
                cResult[17] = tmp8;
                cResult[18] = str;
                cResult[19] = tmp10;
                cResult[20] = tmp13;
                tmp11 = tmp13;
              }
            }
          }
          const fn = function f() {
            onAction({ action: "PRESS_JOIN_CALL_BUTTON" });
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
            const tmp11 = closure_3;
            if (tmp11) {
              const tmp5Result = StageChannelModalActionCreators;
              tmp5Result.connectAndOpen(channel);
            } else {
              const tmp5Result2 = PrivateChannelCallUtils;
              tmp5Result2.openGuildVoiceModal(channel, newestAnalyticsLocation);
            }
          };
          cResult[12] = channel;
          cResult[13] = tmp4;
          cResult[14] = newestAnalyticsLocation;
          cResult[15] = onAction;
          cResult[16] = fn;
          tmp10 = fn;
        }
      }
      const tmp9 = isInChannel ? tmp6() : tmp7();
      cResult[8] = isInChannel;
      cResult[9] = tmp7;
      cResult[10] = tmp6;
      cResult[11] = tmp9;
      tmp8 = tmp9;
    }
    function renderJoinText() {
      const obj = channel;
      if (!channel.isDM()) {
        let stringResult;
        if (!obj.isGroupDM()) {
          const intl = intl5.intl;
          const string = intl.string;
          const t = intl5.t;
          if (closure_3) {
            stringResult = string(t["7vb2cc"]);
          } else {
            stringResult = string(t["96ANUN"]);
          }
        }
        return stringResult;
      }
      const intl2 = intl5.intl;
      stringResult = intl2.string(intl5.t.ozoE2A);
    }
    cResult[5] = channel;
    cResult[6] = tmp4;
    cResult[7] = renderJoinText;
    tmp7 = renderJoinText;
  }
  function renderOpenText() {
    const obj = channel;
    if (!channel.isDM()) {
      let stringResult;
      if (!obj.isGroupDM()) {
        const intl = intl5.intl;
        const string = intl.string;
        const t = intl5.t;
        if (closure_3) {
          stringResult = string(t.Acqcot);
        } else {
          stringResult = string(t.BXxdl7);
        }
      }
      return stringResult;
    }
    const intl2 = intl5.intl;
    stringResult = intl2.string(intl5.t["7hwn2A"]);
  }
  cResult[2] = channel;
  cResult[3] = tmp4;
  cResult[4] = renderOpenText;
  tmp6 = renderOpenText;
}) : (function VoiceChannelButtons(channel) {
  let isInChannel;
  let str;
  let stringResult;
  channel = channel.channel;
  ({ isInChannel, onAction: importDefault } = channel);
  let newestAnalyticsLocation;
  newestAnalyticsLocation = require("useAnalyticsLocations")().newestAnalyticsLocation;
  const isGuildStageVoiceResult = channel.isGuildStageVoice();
  let c3 = isGuildStageVoiceResult;
  const Button = channel(newestAnalyticsLocation[34]).Button;
  const isDMResult = channel.isDM();
  const tmp3 = jsx;
  if (isInChannel) {
    if (!isDMResult) {
      let string2Result;
      if (!channel.isGroupDM()) {
        const intl3 = tmp4(tmp[27]).intl;
        const string2 = intl3.string;
        const t2 = tmp4(tmp[27]).t;
        if (isGuildStageVoiceResult) {
          string2Result = string2(t2.Acqcot);
        } else {
          string2Result = string2(t2.BXxdl7);
        }
      }
      stringResult = string2Result;
    }
    const intl4 = tmp4(tmp[27]).intl;
    string2Result = intl4.string(tmp4(tmp[27]).t["7hwn2A"]);
  } else {
    if (!isDMResult) {
      if (!channel.isGroupDM()) {
        const intl = tmp4(tmp[27]).intl;
        const string = intl.string;
        const t = tmp4(tmp[27]).t;
        if (isGuildStageVoiceResult) {
          stringResult = string(t["7vb2cc"]);
        } else {
          stringResult = string(t["96ANUN"]);
        }
      }
    }
    const intl2 = tmp4(tmp[27]).intl;
    stringResult = intl2.string(tmp4(tmp[27]).t.ozoE2A);
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
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp10 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConnectPlatformButton(type) {
  let first;
  let onAction;
  let tmp8;
  let tmp = _require;
  let obj = require("react");
  const cResult = obj.c(25);
  type = type.type;
  onAction = type.onAction;
  const tmp4 = closure_20();
  const newestAnalyticsLocation = type(onAction[20])().newestAnalyticsLocation;
  const tmp5 = type;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ConnectedAccountsStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== type) {
    const fn = function o() {
      return null != ConnectedAccountsStore.getAccount(null, type);
    };
    cResult[1] = type;
    cResult[2] = fn;
    tmp8 = fn;
  } else {
    tmp8 = cResult[2];
  }
  let tmp9 = null;
  const tmpResult = tmp(tmp2[23]);
  if (!tmpResult.useStateFromStores(first, tmp8)) {
    let tmp15;
    let tmp14;
    let tmp13;
    let tmp11;
    let tmp10;
    if (cResult[3] !== type) {
      const tmp5Result = tmp5(onAction[46]);
      const value = tmp5Result.get(type);
      _require = value;
      const Button = tmp(tmp2[34]).Button;
      const intl = tmp(tmp2[27]).intl;
      let obj2 = { platform: value.name };
      const formatToPlainStringResult = intl.formatToPlainString(tmp(onAction[27]).t.XWSHTb, obj2);
      const Icon = tmp(tmp2[37]).Icon;
      const SMALL = tmp(tmp2[37]).Icon.Sizes.SMALL;
      const tmpResult2 = tmp(onAction[47]);
      const source = tmpResult2.makeSource(value.icon.whitePNG);
      cResult[3] = type;
      cResult[4] = Icon;
      cResult[5] = Button;
      cResult[6] = value;
      cResult[7] = SMALL;
      cResult[8] = source;
      cResult[9] = formatToPlainStringResult;
      tmp15 = formatToPlainStringResult;
      tmp14 = source;
      tmp13 = SMALL;
      tmp11 = Button;
      tmp10 = Icon;
    } else {
      tmp10 = cResult[4];
      tmp11 = cResult[5];
      _require = cResult[6];
      tmp13 = cResult[7];
      tmp14 = cResult[8];
      tmp15 = cResult[9];
    }
    if (cResult[10] === tmp10) {
      if (cResult[11] === tmp4.icon) {
        if (cResult[12] === tmp13) {
          let tmp19;
          if (cResult[13] === tmp14) {
            tmp19 = cResult[14];
          }
          if (cResult[15] === newestAnalyticsLocation) {
            if (cResult[16] === onAction) {
              if (cResult[17] === tmp12.type) {
                let tmp22;
                if (cResult[18] === type) {
                  tmp22 = cResult[19];
                }
                if (cResult[20] === tmp11) {
                  if (cResult[21] === tmp15) {
                    if (cResult[22] === tmp19) {
                      let tmp23;
                      if (cResult[23] === tmp22) {
                        tmp23 = cResult[24];
                      }
                      tmp9 = tmp23;
                    }
                  }
                }
                const tmp25 = <tmp11 text={tmp15} icon={tmp19} variant="secondary" onPress={tmp22} />;
                cResult[20] = tmp11;
                cResult[21] = tmp15;
                cResult[22] = tmp19;
                cResult[23] = tmp22;
                cResult[24] = tmp25;
                tmp23 = tmp25;
              }
            }
          }
          const fn2 = function p() {
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
                const obj = type(onAction[49]);
                const obj2 = { screen: constants.CONNECTIONS };
                return obj.openUserSettings(obj2);
              }
            };
            authorizeConnectionDefault(obj);
          };
          cResult[15] = newestAnalyticsLocation;
          cResult[16] = onAction;
          cResult[17] = tmp12.type;
          cResult[18] = type;
          cResult[19] = fn2;
          tmp22 = fn2;
        }
      }
    }
    const tmp21 = <tmp10 size={tmp13} source={tmp14} disableColor style={tmp4.icon} />;
    cResult[10] = tmp10;
    cResult[11] = tmp4.icon;
    cResult[12] = tmp13;
    cResult[13] = tmp14;
    cResult[14] = tmp21;
    tmp19 = tmp21;
  }
  return tmp9;
}) : (function ConnectPlatformButton(type) {
  let tmp4Result;
  type = type.type;
  const onAction = type.onAction;
  let newestAnalyticsLocation;
  let c3;
  let tmp = closure_20();
  newestAnalyticsLocation = onAction(newestAnalyticsLocation[20])().newestAnalyticsLocation;
  let obj = type(newestAnalyticsLocation[23]);
  const items = [ConnectedAccountsStore];
  const tmp2 = onAction;
  if (obj.useStateFromStores(items, () => null != ConnectedAccountsStore.getAccount(null, type))) {
    return null;
  } else {
    const tmp2Result = tmp2(newestAnalyticsLocation[46]);
    const value = tmp2Result.get(type);
    c3 = value;
    const Button = tmp4(tmp3[34]).Button;
    const intl = tmp4(tmp3[27]).intl;
    const obj3 = { platform: value.name };
    ({ size: type(newestAnalyticsLocation[37]).Icon.Sizes.SMALL, source: tmp4Result.makeSource(value.icon.whitePNG), disableColor: true, style: tmp.icon });
    const Icon = tmp4(tmp3[37]).Icon;
    tmp4Result = type(newestAnalyticsLocation[47]);
    return <Button text={intl.formatToPlainString(type(newestAnalyticsLocation[27]).t.XWSHTb, obj3)} icon={null} variant="secondary" onPress={function onPress() {
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
          const obj = type(newestAnalyticsLocation[49]);
          const obj2 = { screen: constants.CONNECTIONS };
          return obj.openUserSettings(obj2);
        }
      };
      authorizeConnectionDefault(obj);
    }} />;
  }
});
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileActivityButtons.tsx");

export const JoinActivityButton = tmp5;
export const JoinGameActivityButton = tmp6;
export const PlayOnSpotifyButton = tmp7;
export const WatchActivityButton = tmp8;
export const VoiceChannelButtons = tmp9;
export const ConnectPlatformButton = tmp10;
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
      let stringResult;
      const tmp3 = require;
      const tmp4 = index;
      const Button = require("components/Button/Button").Button;
      const tmp2 = jsx;
      if (activity(index[50])(activity)) {
        const intl = tmp3(tmp4[27]).intl;
        stringResult = intl.string(tmp3(tmp4[27]).t.I6JG46);
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
                  return { value: "IconComponent", done: null };
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
                      obj9 = id(tmp17[51]);
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
                        return { value: "IconComponent", done: null };
                      } else {
                        tmp = id.button_urls[closure_129_2];
                        if (typeof tmp !== "string") {
                          c3 = 0;
                          c5 = 3;
                          return { value: "IconComponent", done: null };
                        } else {
                          const obj8 = tmp(tmp17[52]);
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
                              let obj = tmp(tmp17[52]);
                              href = obj.format(tmp17);
                              const obj7 = {
                                href,
                                onConfirm() {
                                                  const obj = activity(index[40]);
                                                  return obj.openURL(href);
                                                },
                                trusted: false
                              };
                              const obj2 = id(tmp17[53]);
                              obj2.handleClick(obj7);
                              c3 = 0;
                            }
                          }
                          c3 = 0;
                          c5 = 3;
                          return { value: "IconComponent", done: null };
                        }
                      }
                    }
                    c5 = 3;
                    return { value: "IconComponent", done: null };
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
