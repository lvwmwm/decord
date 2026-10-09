// Module ID: 13105
// Function ID: 13106
// Name: UserProfileActivityButtons
// Dependencies: [5, 19, 2063, 2064, 5758, 4981, 2086, 10613, 4709, 4719, 2115, 5756, 5112, 1085, 8442, 21, 5091, 587, 558, 576, 6848, 4698, 13106, 573, 13107, 7426, 1126, 8217, 10812, 5055, 5376, 10766, 10223, 1200, 8261, 10749, 4765, 13109, 8368, 5941, 4938, 7492, 7481, 5760, 1415, 9177, 7087, 8446, 10753, 1384, 8474, 2]
// Exports: CustomActivityButton

// Module 13105 (UserProfileActivityButtons)
import Fragment from "Fragment" /* 21 */;
import useStateFromStores from "useStateFromStores" /* 573 */;
import nativeDefault from "native" /* 587 */;
import intl5 from "intl" /* 1126 */;
import native from "native" /* 1200 */;
import LinkingDefault from "Linking" /* 4765 */;
import RootNavigationRef from "RootNavigationRef" /* 4938 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5055 */;
import components_Button_Button from "components/Button/Button" /* 5376 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5941 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 6848 */;
import PrivateChannelCallUtils from "PrivateChannelCallUtils" /* 7481 */;
import StageChannelModalActionCreators from "StageChannelModalActionCreators" /* 7492 */;
import isStreamingDefault from "isStreaming" /* 8368 */;
import authorizeConnectionDefault from "authorizeConnection" /* 9177 */;
import GamesActionCreatorsDefault from "GamesActionCreators" /* 10766 */;
import handleJoinEmbeddedActivityDefault from "handleJoinEmbeddedActivity" /* 10812 */;
import getActivityChannelIdDefault from "getActivityChannelId" /* 13106 */;
import getActivityJoinability from "getActivityJoinability" /* 13107 */;
import getStreamURLDefault from "getStreamURL" /* 13109 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2063 */;
import ChannelStore from "ChannelStore" /* 2064 */;
import ConnectedAccountsStore_mod from "ConnectedAccountsStore" /* 5758 */;
import GuildMemberCountStore from "GuildMemberCountStore" /* 4981 */;
import GuildStore from "GuildStore" /* 2086 */;
import LocalActivityStore from "LocalActivityStore" /* 10613 */;
import PermissionStore from "PermissionStore" /* 4709 */;
import RelationshipStore from "RelationshipStore" /* 4719 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2115 */;
import SelfPresenceStore from "SelfPresenceStore" /* 5756 */;
import VoiceStateStore from "VoiceStateStore" /* 5112 */;
import Constants from "Constants" /* 1085 */;
import SpotifyConstants from "SpotifyConstants" /* 8442 */;
import createStyles from "createStyles" /* 5091 */;
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
  let obj = user(activity[19]);
  const cResult = obj.c(27);
  user = user.user;
  const currentUser = user.currentUser;
  activity = user.activity;
  const application = user.application;
  const onAction = user.onAction;
  const analyticsLocations = currentUser(activity[20])().analyticsLocations;
  let id1;
  const first = cResult[0];
  const tmp4 = currentUser;
  if (application != null) {
    id1 = application.id;
  }
  if (first === id1) {
    let tmp7;
    let tmp16;
    if (cResult[1] === user.id) {
      tmp7 = cResult[2];
    }
    ConnectedAccountsStore = tmp7;
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const items = [];
      cResult[3] = items;
      tmp16 = items;
    } else {
      tmp16 = cResult[3];
    }
    if (cResult[4] === activity) {
      if (cResult[5] === tmp7) {
        let tmp17;
        let tmp19;
        if (cResult[6] === user.id) {
          tmp17 = cResult[7];
        }
        const tmpResult = user(activity[23]);
        const stateFromStores = tmpResult.useStateFromStores(tmp16, tmp17);
        const _Symbol2 = Symbol;
        if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
          const items1 = [analyticsLocations, GuildStore, stateFromStores, , , , , , , ];
          class U {
            constructor() {
              const obj = { isEmbedded: true, user, currentUser, activity, application, channelId: stateFromStores, ChannelStore, GuildStore, GuildMemberCountStore, RelationshipStore, SelectedChannelStore, VoiceStateStore, PermissionStore, LocalActivityStore, SelfPresenceStore, EmbeddedActivitiesStore };
              return getActivityJoinabilityDefault(obj);
            }
          }
          items1[4] = SelectedChannelStore;
          items1[5] = VoiceStateStore;
          items1[6] = PermissionStore;
          items1[7] = LocalActivityStore;
          items1[8] = SelfPresenceStore;
          items1[9] = onAction;
          cResult[8] = items1;
          tmp19 = items1;
        } else {
          tmp19 = cResult[8];
        }
        if (cResult[9] === activity) {
          if (cResult[10] === application) {
            if (cResult[11] === stateFromStores) {
              if (cResult[12] === currentUser) {
                let tmp30;
                if (cResult[13] === user) {
                  tmp30 = cResult[14];
                }
                const tmpResult3 = user(activity[23]);
                const stateFromStores1 = tmpResult3.useStateFromStores(tmp19, tmp30);
                if (tmp4(activity[25])(activity)) {
                  if (null != application) {
                    if (stateFromStores1 !== user(activity[24]).ActivityJoinability.CANNOT_JOIN) {
                      let tmp32;
                      let tmp34;
                      if (cResult[15] !== stateFromStores1) {
                        let stringResult;
                        if (stateFromStores1 === user(activity[24]).ActivityJoinability.JOINED) {
                          const intl2 = tmp(tmp2[26]).intl;
                          stringResult = intl2.string(tmp(tmp2[26]).t.DPfdsq);
                        } else {
                          const intl = tmp(tmp2[26]).intl;
                          stringResult = intl.string(tmp(tmp2[26]).t["4i2vj+"]);
                        }
                        cResult[15] = stateFromStores1;
                        cResult[16] = stringResult;
                        tmp32 = stringResult;
                      } else {
                        tmp32 = cResult[16];
                      }
                      const _Symbol3 = Symbol;
                      if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
                        const tmp36 = jsx(user(activity[27]).AppsIcon, { size: "sm", color: "white" });
                        cResult[17] = tmp36;
                        tmp34 = tmp36;
                      } else {
                        tmp34 = cResult[17];
                      }
                      if (cResult[18] === analyticsLocations) {
                        if (cResult[19] === application.id) {
                          if (cResult[20] === stateFromStores) {
                            let tmp38;
                            if (cResult[21] === onAction) {
                              tmp38 = cResult[22];
                            }
                            if (cResult[23] === tmp32) {
                              if (cResult[24] === stateFromStores1 === tmp37) {
                                let tmp40;
                                if (cResult[25] === tmp38) {
                                  tmp40 = cResult[26];
                                }
                                return tmp40;
                              }
                            }
                            class U {
                              constructor() {
                                const obj = { isEmbedded: true, user, currentUser, activity, application, channelId: stateFromStores, ChannelStore, GuildStore, GuildMemberCountStore, RelationshipStore, SelectedChannelStore, VoiceStateStore, PermissionStore, LocalActivityStore, SelfPresenceStore, EmbeddedActivitiesStore };
                                return getActivityJoinabilityDefault(obj);
                              }
                            }
                            const tmp42 = jsx(user(activity[30]).Button, { text: tmp32, icon: tmp34, variant: "active", disabled: stateFromStores1 === tmp37, onPress: null });
                            cResult[23] = tmp32;
                            cResult[24] = stateFromStores1 === tmp37;
                            cResult[25] = tmp38;
                            cResult[26] = tmp42;
                            tmp40 = tmp42;
                          }
                        }
                      }
                      const fn = function x() {
                        onAction({ action: "PRESS_JOIN_BUTTON" });
                        const obj = { applicationId: application.id, activityChannelId: stateFromStores, locationObject: {}, analyticsLocations };
                        handleJoinEmbeddedActivityDefault(obj);
                        const obj2 = ActionSheetActionCreatorsDefault;
                        obj2.hideAllActionSheets();
                      };
                      cResult[18] = analyticsLocations;
                      class U {
                        constructor() {
                          const obj = { isEmbedded: true, user, currentUser, activity, application, channelId: stateFromStores, ChannelStore, GuildStore, GuildMemberCountStore, RelationshipStore, SelectedChannelStore, VoiceStateStore, PermissionStore, LocalActivityStore, SelfPresenceStore, EmbeddedActivitiesStore };
                          return getActivityJoinabilityDefault(obj);
                        }
                      }
                      cResult[19] = application.id;
                      cResult[20] = stateFromStores;
                      cResult[21] = onAction;
                      cResult[22] = fn;
                      tmp38 = fn;
                    }
                  }
                }
                return null;
              }
            }
          }
        }
        class U {
          constructor() {
            const obj = { isEmbedded: true, user, currentUser, activity, application, channelId: stateFromStores, ChannelStore, GuildStore, GuildMemberCountStore, RelationshipStore, SelectedChannelStore, VoiceStateStore, PermissionStore, LocalActivityStore, SelfPresenceStore, EmbeddedActivitiesStore };
            return getActivityJoinabilityDefault(obj);
          }
        }
        cResult[9] = activity;
        cResult[10] = application;
        cResult[11] = stateFromStores;
        cResult[12] = currentUser;
        cResult[13] = user;
        cResult[14] = U;
        tmp30 = U;
      }
    }
    class E {
      constructor() {
        const obj = { channelId, userId: user.id, activity };
        return getActivityChannelIdDefault(obj);
      }
    }
    cResult[4] = activity;
    cResult[5] = tmp7;
    cResult[6] = user.id;
    cResult[7] = E;
    tmp17 = E;
  }
  let id2;
  const getEmbeddedActivityForUserId = onAction.getEmbeddedActivityForUserId;
  const id = user.id;
  if (application != null) {
    id2 = application.id;
  }
  const embeddedActivityForUserId = getEmbeddedActivityForUserId(id, id2);
  let _location;
  const getEmbeddedActivityLocationChannelId = tmp(tmp2[21]).getEmbeddedActivityLocationChannelId;
  user(activity[21]);
  if (embeddedActivityForUserId != null) {
    _location = embeddedActivityForUserId.location;
  }
  const embeddedActivityLocationChannelId = getEmbeddedActivityLocationChannelId(_location);
  let id3;
  if (application != null) {
    id3 = application.id;
  }
  cResult[0] = id3;
  cResult[1] = user.id;
  cResult[2] = embeddedActivityLocationChannelId;
  tmp7 = embeddedActivityLocationChannelId;
}) : (function JoinActivityButton(user) {
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
  const getEmbeddedActivityLocationChannelId = user(tmp2[21]).getEmbeddedActivityLocationChannelId;
  user(activity[21]);
  if (embeddedActivityForUserId != null) {
    _location = embeddedActivityForUserId.location;
  }
  channelId = getEmbeddedActivityLocationChannelId(_location);
  const tmp6Result = user(activity[23]);
  closure_7 = tmp6Result.useStateFromStores([], () => {
    const obj = { channelId, userId: user.id, activity };
    return getActivityChannelIdDefault(obj);
  });
  const items = [analyticsLocations, GuildStore, closure_7, RelationshipStore, SelectedChannelStore, VoiceStateStore, PermissionStore, LocalActivityStore, SelfPresenceStore, tmp3];
  const tmp6Result2 = user(activity[23]);
  const stateFromStores = tmp6Result2.useStateFromStores(items, () => {
    const obj = { isEmbedded: true, user, currentUser: importDefault, activity, application, channelId, ChannelStore, GuildStore, GuildMemberCountStore, RelationshipStore, SelectedChannelStore, VoiceStateStore, PermissionStore, LocalActivityStore, SelfPresenceStore, EmbeddedActivitiesStore };
    return getActivityJoinabilityDefault(obj);
  });
  let tmp12Result = null;
  if (tmp(activity[25])(activity)) {
    tmp12Result = null;
    if (null != application) {
      tmp12Result = null;
      if (stateFromStores !== user(activity[24]).ActivityJoinability.CANNOT_JOIN) {
        let stringResult;
        const Button = tmp6(tmp2[30]).Button;
        if (stateFromStores === user(activity[24]).ActivityJoinability.JOINED) {
          const intl2 = tmp6(tmp2[26]).intl;
          stringResult = intl2.string(tmp6(tmp2[26]).t.DPfdsq);
        } else {
          const intl = tmp6(tmp2[26]).intl;
          stringResult = intl.string(tmp6(tmp2[26]).t["4i2vj+"]);
        }
        let obj = {
          text: stringResult,
          icon: jsx(user(tmp2[27]).AppsIcon, { size: "sm", color: "white" }),
          variant: "active",
          disabled: stateFromStores === user(tmp2[24]).ActivityJoinability.JOINED,
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
            if (stateFromStores !== user(activity[24]).ActivityJoinability.CANNOT_JOIN) {
              let tmp20;
              if (cResult[9] !== stateFromStores) {
                if (stateFromStores === user(activity[24]).ActivityJoinability.JOINED) {
                  const string2 = tmp(tmp2[26]).intl.string;
                  class U {
                    constructor() {
                      onAction({ action: "PRESS_JOIN_BUTTON" });
                      const obj = GamesActionCreatorsDefault;
                      const obj2 = { userId: user.id, sessionId: activity.session_id, application, channelId: null, messageId: null, applicationActivity: activity, source: "UserProfile", analyticsLocations };
                      const joined = obj.join(obj2);
                      const obj3 = ActionSheetActionCreatorsDefault;
                      obj3.hideAllActionSheets();
                    }
                  }
                } else {
                  const string = tmp(tmp2[26]).intl.string;
                  class U {
                    constructor() {
                      onAction({ action: "PRESS_JOIN_BUTTON" });
                      const obj = GamesActionCreatorsDefault;
                      const obj2 = { userId: user.id, sessionId: activity.session_id, application, channelId: null, messageId: null, applicationActivity: activity, source: "UserProfile", analyticsLocations };
                      const joined = obj.join(obj2);
                      const obj3 = ActionSheetActionCreatorsDefault;
                      obj3.hideAllActionSheets();
                    }
                  }
                }
                class U {
                  constructor() {
                    onAction({ action: "PRESS_JOIN_BUTTON" });
                    const obj = GamesActionCreatorsDefault;
                    const obj2 = { userId: user.id, sessionId: activity.session_id, application, channelId: null, messageId: null, applicationActivity: activity, source: "UserProfile", analyticsLocations };
                    const joined = obj.join(obj2);
                    const obj3 = ActionSheetActionCreatorsDefault;
                    obj3.hideAllActionSheets();
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
                          const obj = GamesActionCreatorsDefault;
                          const obj2 = { userId: user.id, sessionId: activity.session_id, application, channelId: null, messageId: null, applicationActivity: activity, source: "UserProfile", analyticsLocations };
                          const joined = obj.join(obj2);
                          const obj3 = ActionSheetActionCreatorsDefault;
                          obj3.hideAllActionSheets();
                        }
                      }
                      cResult[17] = tmp20;
                      cResult[18] = stateFromStores === tmp22;
                      cResult[19] = tmp23;
                      cResult[20] = jsx(user(activity[30]).Button, { text: tmp20, variant: "active", disabled: stateFromStores === tmp22, onPress: tmp23 });
                      const tmp27 = jsx(user(activity[30]).Button, { text: tmp20, variant: "active", disabled: stateFromStores === tmp22, onPress: tmp23 });
                    }
                  }
                }
              }
              class U {
                constructor() {
                  onAction({ action: "PRESS_JOIN_BUTTON" });
                  const obj = GamesActionCreatorsDefault;
                  const obj2 = { userId: user.id, sessionId: activity.session_id, application, channelId: null, messageId: null, applicationActivity: activity, source: "UserProfile", analyticsLocations };
                  const joined = obj.join(obj2);
                  const obj3 = ActionSheetActionCreatorsDefault;
                  obj3.hideAllActionSheets();
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
      const obj = { user, currentUser, activity, application, channelId: null, isEmbedded: false, ChannelStore, GuildStore, GuildMemberCountStore, RelationshipStore, SelectedChannelStore, VoiceStateStore, PermissionStore, LocalActivityStore, SelfPresenceStore, EmbeddedActivitiesStore };
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
    const obj = { user: require, currentUser: importDefault, activity: dependencyMap, application, channelId: null, isEmbedded: false, ChannelStore, GuildStore, GuildMemberCountStore, RelationshipStore, SelectedChannelStore, VoiceStateStore, PermissionStore, LocalActivityStore, SelfPresenceStore, EmbeddedActivitiesStore };
    return getActivityJoinabilityDefault(obj);
  });
  let tmp6Result = null;
  if (null != application) {
    tmp6Result = null;
    if (stateFromStores !== getActivityJoinability.ActivityJoinability.CANNOT_JOIN) {
      let stringResult;
      const Button = tmp2(5376).Button;
      const tmp6 = jsx;
      if (stateFromStores === getActivityJoinability.ActivityJoinability.JOINED) {
        const intl2 = tmp2(1126).intl;
        stringResult = intl2.string(tmp2(1126).t.DPfdsq);
      } else {
        const intl = tmp2(1126).intl;
        stringResult = intl.string(tmp2(1126).t.VJlc0S);
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
  if (sync_id(10223)(activity)) {
    tmp6 = null;
    if (null != sync_id) {
      let tmp7;
      let tmp9;
      if (cResult[0] !== activity.name) {
        const intl = tmp(1126).intl;
        let obj2 = { platform: activity.name };
        const formatToPlainStringResult = intl.formatToPlainString(tmp(1126).t.LEgD7t, obj2);
        cResult[0] = activity.name;
        cResult[1] = formatToPlainStringResult;
        tmp7 = formatToPlainStringResult;
      } else {
        tmp7 = cResult[1];
      }
      if (cResult[2] !== tmp4.icon) {
        const Icon = tmp(1200).Icon;
        const tmp11 = <Icon size={tmp(1200).Icon.Sizes.SMALL} source={tmp5(8261)} disableColor style={tmp4.icon} />;
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
        const tmp16 = jsx(tmp(5376).Button, { text: tmp7, icon: tmp9, variant: "secondary", onPress: tmp12 });
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
                obj4 = closure_0(dependencyMap[35]);
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
              const obj8 = closure_0(dependencyMap[35]);
              if (closure_0) {
                openUrlResult = obj8.openUrl(closure_0, constants2.TRACK, closure_1);
              } else {
                obj8.attributeInstall();
                const obj = sync_id(dependencyMap[36]);
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
  if (sync_id(10223)(activity)) {
    tmp4 = null;
    if (null != sync_id) {
      const Button = components_Button_Button.Button;
      const intl = intl5.intl;
      let obj2 = { platform: activity.name };
      let obj3 = { size: native.Icon.Sizes.SMALL, source: tmp2(8261), disableColor: true, style: tmp.icon };
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
                const obj = tmp(closure_2[36]);
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
        const intl = tmp(1126).intl;
        const stringResult = intl.string(onAction(1126).t.I6JG46);
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
      const tmp13 = jsx(onAction(5376).Button, {
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
                class T {
                  constructor() {
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
                  }
                }
                const tmp13 = jsx(tmp(tmp2[30]).Button, { text: null, variant: str, grow: true, onPress: tmp10 });
                cResult[17] = tmp8;
                cResult[18] = str;
                cResult[19] = tmp10;
                cResult[20] = tmp13;
                tmp11 = tmp13;
              }
            }
          }
          class T {
            constructor() {
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
            }
          }
          cResult[12] = channel;
          cResult[13] = tmp4;
          cResult[14] = newestAnalyticsLocation;
          cResult[15] = onAction;
          cResult[16] = T;
          tmp10 = T;
        }
      }
      const tmp9 = isInChannel ? tmp6() : tmp7();
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
  const Button = channel(newestAnalyticsLocation[30]).Button;
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
      const tmp5Result = tmp5(onAction[43]);
      const value = tmp5Result.get(type);
      _require = value;
      const Button = tmp(tmp2[30]).Button;
      const intl = tmp(tmp2[26]).intl;
      let obj2 = { platform: value.name };
      const formatToPlainStringResult = intl.formatToPlainString(tmp(onAction[26]).t.XWSHTb, obj2);
      const Icon = tmp(tmp2[33]).Icon;
      const SMALL = tmp(tmp2[33]).Icon.Sizes.SMALL;
      const tmpResult2 = tmp(onAction[44]);
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
                const obj = type(onAction[46]);
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
    const tmp2Result = tmp2(newestAnalyticsLocation[43]);
    const value = tmp2Result.get(type);
    c3 = value;
    const Button = tmp4(tmp3[30]).Button;
    const intl = tmp4(tmp3[26]).intl;
    const obj3 = { platform: value.name };
    ({ size: type(newestAnalyticsLocation[33]).Icon.Sizes.SMALL, source: tmp4Result.makeSource(value.icon.whitePNG), disableColor: true, style: tmp.icon });
    const Icon = tmp4(tmp3[33]).Icon;
    tmp4Result = type(newestAnalyticsLocation[44]);
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
          const obj = type(newestAnalyticsLocation[46]);
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
      if (activity(index[47])(activity)) {
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
                      obj9 = id(tmp17[48]);
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
                          const obj8 = tmp(tmp17[49]);
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
                              let obj = tmp(tmp17[49]);
                              href = obj.format(tmp17);
                              const obj7 = {
                                href,
                                onConfirm() {
                                                  const obj = activity(index[36]);
                                                  return obj.openURL(href);
                                                },
                                trusted: false
                              };
                              const obj2 = id(tmp17[50]);
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
