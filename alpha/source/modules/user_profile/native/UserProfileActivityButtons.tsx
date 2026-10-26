// Module ID: 14317
// Function ID: 14318
// Name: UserProfileActivityButtons
// Dependencies: [5, 19, 4822, 4823, 6500, 5194, 4845, 11194, 4903, 4913, 4874, 6498, 5630, 1087, 8828, 21, 4971, 587, 558, 576, 7253, 4892, 14318, 573, 6662, 14319, 7812, 1128, 8577, 5210, 6672, 11360, 5244, 10651, 1202, 8623, 11341, 5660, 14321, 8749, 5151, 7878, 7867, 6502, 1417, 9609, 7490, 8832, 11345, 1386, 8860, 2]
// Exports: CustomActivityButton

// Module 14317 (UserProfileActivityButtons)
import Fragment from "Fragment" /* 21 */;
import useStateFromStores from "useStateFromStores" /* 573 */;
import nativeDefault from "native" /* 587 */;
import intl5 from "intl" /* 1128 */;
import native from "native" /* 1202 */;
import embeddedActivityLocationUtils from "embeddedActivityLocationUtils" /* 4892 */;
import RootNavigationRef from "RootNavigationRef" /* 5151 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5210 */;
import components_Button_Button from "components/Button/Button" /* 5244 */;
import LinkingDefault from "Linking" /* 5660 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6672 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 7253 */;
import PrivateChannelCallUtils from "PrivateChannelCallUtils" /* 7867 */;
import StageChannelModalActionCreators from "StageChannelModalActionCreators" /* 7878 */;
import isStreamingDefault from "isStreaming" /* 8749 */;
import authorizeConnectionDefault from "authorizeConnection" /* 9609 */;
import GamesActionCreatorsDefault from "GamesActionCreators" /* 11360 */;
import getActivityChannelIdDefault from "getActivityChannelId" /* 14318 */;
import getActivityJoinability from "getActivityJoinability" /* 14319 */;
import getStreamURLDefault from "getStreamURL" /* 14321 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 4822 */;
import ChannelStore from "ChannelStore" /* 4823 */;
import ConnectedAccountsStore from "ConnectedAccountsStore" /* 6500 */;
import GuildMemberCountStore from "GuildMemberCountStore" /* 5194 */;
import GuildStore from "GuildStore" /* 4845 */;
import LocalActivityStore from "LocalActivityStore" /* 11194 */;
import PermissionStore from "PermissionStore" /* 4903 */;
import RelationshipStore from "RelationshipStore" /* 4913 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4874 */;
import SelfPresenceStore from "SelfPresenceStore" /* 6498 */;
import VoiceStateStore from "VoiceStateStore" /* 5630 */;
import Constants from "Constants" /* 1087 */;
import SpotifyConstants from "SpotifyConstants" /* 8828 */;
import createStyles from "createStyles" /* 4971 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const getActivityJoinabilityDefault = getActivityJoinability;
let _require, c4, c5, channelId, hideAllActionSheetsResult, importDefault, obj1, popAllResult;

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
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function JoinActivityButton(user) {
  let activity;
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
    channelId = tmp6;
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
              return closure_5.getChannel(closure_7);
            }
          }
          const items2 = [stateFromStores];
          cResult[9] = stateFromStores;
          cResult[10] = U;
          class E {
            constructor() {
              obj = { channelId: closure_6, userId: user.id, activity };
              return closure_1(closure_2[22])(obj);
            }
          }
          tmp18 = items2;
          tmp17 = U;
        } else {
          class U {
            constructor() {
              return closure_5.getChannel(closure_7);
            }
          }
          tmp18 = cResult[11];
        }
        class E {
          constructor() {
            obj = { channelId: closure_6, userId: user.id, activity };
            return closure_1(closure_2[22])(obj);
          }
        }
        const stateFromStores1 = obj3.useStateFromStores(tmp15, tmp17, tmp18);
        const tmpResult3 = user(activity[24]);
        const isChannelContentGated = tmpResult3.useIsChannelContentGated(stateFromStores1);
        const _Symbol3 = Symbol;
        if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
          class U {
            constructor() {
              return closure_5.getChannel(closure_7);
            }
          }
          const items3 = [analyticsLocations, isChannelContentGated, stateFromStores, , , , , , , ];
          class E {
            constructor() {
              obj = { channelId: closure_6, userId: user.id, activity };
              return closure_1(closure_2[22])(obj);
            }
          }
          items3[4] = SelectedChannelStore;
          items3[5] = VoiceStateStore;
          items3[6] = PermissionStore;
          items3[7] = LocalActivityStore;
          class D {
            constructor() {
              obj = { isEmbedded: true, user, currentUser, activity, application, channelId: closure_7, isContentGated: closure_8, ChannelStore: closure_5, GuildStore: closure_8, GuildMemberCountStore: closure_7, RelationshipStore: closure_11, SelectedChannelStore: closure_12, VoiceStateStore: closure_14, PermissionStore: closure_10, LocalActivityStore: closure_9, SelfPresenceStore: closure_13, EmbeddedActivitiesStore: closure_4 };
              return closure_1(closure_2[25])(obj);
            }
          }
          items3[8] = SelfPresenceStore;
          items3[9] = onAction;
          cResult[12] = items3;
        } else {
          class U {
            constructor() {
              return closure_5.getChannel(closure_7);
            }
          }
        }
        if (cResult[13] === activity) {
          class U {
            constructor() {
              return closure_5.getChannel(closure_7);
            }
          }
        }
        class D {
          constructor() {
            obj = { isEmbedded: true, user, currentUser, activity, application, channelId: closure_7, isContentGated: closure_8, ChannelStore: closure_5, GuildStore: closure_8, GuildMemberCountStore: closure_7, RelationshipStore: closure_11, SelectedChannelStore: closure_12, VoiceStateStore: closure_14, PermissionStore: closure_10, LocalActivityStore: closure_9, SelfPresenceStore: closure_13, EmbeddedActivitiesStore: closure_4 };
            return closure_1(closure_2[25])(obj);
          }
        }
        cResult[13] = activity;
        cResult[14] = application;
        cResult[15] = stateFromStores;
        cResult[16] = currentUser;
        cResult[17] = isChannelContentGated;
        cResult[18] = user;
        cResult[19] = D;
      }
    }
    class E {
      constructor() {
        obj = { channelId: closure_6, userId: user.id, activity };
        return closure_1(closure_2[22])(obj);
      }
    }
    cResult[4] = activity;
    cResult[5] = tmp6;
    cResult[6] = user.id;
    cResult[7] = E;
  }
  const getEmbeddedActivityForUserId = onAction.getEmbeddedActivityForUserId;
  const id = user.id;
  if (application != null) {
    class U {
      constructor() {
        return closure_5.getChannel(closure_7);
      }
    }
  }
  let embeddedActivityForUserId = getEmbeddedActivityForUserId(id, undefined);
  let getEmbeddedActivityLocationChannelId = tmp(activity[21]).getEmbeddedActivityLocationChannelId;
  user(activity[21]);
  if (embeddedActivityForUserId != null) {
    class U {
      constructor() {
        return closure_5.getChannel(closure_7);
      }
    }
  }
  let embeddedActivityLocationChannelId = getEmbeddedActivityLocationChannelId(undefined);
  if (application != null) {
    class U {
      constructor() {
        return closure_5.getChannel(closure_7);
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
  channelId = undefined;
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
  let getEmbeddedActivityLocationChannelId = user(activity[21]).getEmbeddedActivityLocationChannelId;
  user(activity[21]);
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
        const Button = tmp6(tmp2[32]).Button;
        if (stateFromStores2 === tmp6(activity[25]).ActivityJoinability.JOINED) {
          const intl2 = tmp6(tmp2[27]).intl;
          stringResult = intl2.string(tmp6(tmp2[27]).t.DPfdsq);
        } else {
          const intl = tmp6(tmp2[27]).intl;
          stringResult = intl.string(tmp6(tmp2[27]).t["4i2vj+"]);
        }
        let obj = {
          text: stringResult,
          icon: jsx(tmp6(activity[28]).AppsIcon, { size: "sm", color: "white" }),
          variant: "active",
          disabled: stateFromStores2 === tmp6(activity[25]).ActivityJoinability.JOINED,
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
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function JoinGameActivityButton(user) {
  let activity;
  let first;
  let obj = user(activity[19]);
  const cResult = obj.c(18);
  user = user.user;
  const currentUser = user.currentUser;
  activity = user.activity;
  const application = user.application;
  const onAction = user.onAction;
  const analyticsLocations = currentUser(activity[20])().analyticsLocations;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [analyticsLocations, GuildStore, GuildMemberCountStore, RelationshipStore, SelectedChannelStore, VoiceStateStore, PermissionStore, LocalActivityStore, SelfPresenceStore, onAction];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === activity) {
    if (cResult[2] === application) {
      if (cResult[3] === currentUser) {
        let tmp15;
        if (cResult[4] === user) {
          tmp15 = cResult[5];
        }
        const tmpResult = user(activity[23]);
        const stateFromStores = tmpResult.useStateFromStores(first, tmp15);
        if (null != application) {
          if (stateFromStores !== user(activity[25]).ActivityJoinability.CANNOT_JOIN) {
            let tmp18;
            if (cResult[6] !== stateFromStores) {
              if (stateFromStores === user(activity[25]).ActivityJoinability.JOINED) {
                const string2 = tmp(tmp2[27]).intl.string;
                class B {
                  constructor() {
                    tmp = onAction({ action: "PRESS_JOIN_BUTTON" });
                    obj = closure_1(closure_2[29]);
                    hideAllActionSheetsResult = obj.hideAllActionSheets();
                    obj2 = closure_1(closure_2[30]);
                    popAllResult = obj2.popAll();
                    obj3 = closure_1(closure_2[31]);
                    obj1 = { userId: user.id, sessionId: activity.session_id, applicationId: application.id, channelId: null, messageId: null, activity, source: "UserProfile", analyticsLocations };
                    joined = obj3.join(obj1);
                    return;
                  }
                }
              } else {
                const string = tmp(tmp2[27]).intl.string;
                class B {
                  constructor() {
                    tmp = onAction({ action: "PRESS_JOIN_BUTTON" });
                    obj = closure_1(closure_2[29]);
                    hideAllActionSheetsResult = obj.hideAllActionSheets();
                    obj2 = closure_1(closure_2[30]);
                    popAllResult = obj2.popAll();
                    obj3 = closure_1(closure_2[31]);
                    obj1 = { userId: user.id, sessionId: activity.session_id, applicationId: application.id, channelId: null, messageId: null, activity, source: "UserProfile", analyticsLocations };
                    joined = obj3.join(obj1);
                    return;
                  }
                }
              }
              class B {
                constructor() {
                  tmp = onAction({ action: "PRESS_JOIN_BUTTON" });
                  obj = closure_1(closure_2[29]);
                  hideAllActionSheetsResult = obj.hideAllActionSheets();
                  obj2 = closure_1(closure_2[30]);
                  popAllResult = obj2.popAll();
                  obj3 = closure_1(closure_2[31]);
                  obj1 = { userId: user.id, sessionId: activity.session_id, applicationId: application.id, channelId: null, messageId: null, activity, source: "UserProfile", analyticsLocations };
                  joined = obj3.join(obj1);
                  return;
                }
              }
              cResult[7] = tmp19;
              tmp18 = tmp19;
            } else {
              tmp18 = cResult[7];
            }
            if (cResult[8] === activity) {
              if (cResult[9] === analyticsLocations) {
                if (cResult[10] === application.id) {
                  if (cResult[11] === onAction) {
                    let tmp21;
                    if (cResult[12] === user.id) {
                      tmp21 = cResult[13];
                    }
                    class B {
                      constructor() {
                        tmp = onAction({ action: "PRESS_JOIN_BUTTON" });
                        obj = closure_1(closure_2[29]);
                        hideAllActionSheetsResult = obj.hideAllActionSheets();
                        obj2 = closure_1(closure_2[30]);
                        popAllResult = obj2.popAll();
                        obj3 = closure_1(closure_2[31]);
                        obj1 = { userId: user.id, sessionId: activity.session_id, applicationId: application.id, channelId: null, messageId: null, activity, source: "UserProfile", analyticsLocations };
                        joined = obj3.join(obj1);
                        return;
                      }
                    }
                    cResult[14] = tmp18;
                    cResult[15] = stateFromStores === tmp20;
                    cResult[16] = tmp21;
                    cResult[17] = jsx(user(activity[32]).Button, { text: tmp18, variant: "active", disabled: stateFromStores === tmp20, onPress: tmp21 });
                    const tmp25 = jsx(user(activity[32]).Button, { text: tmp18, variant: "active", disabled: stateFromStores === tmp20, onPress: tmp21 });
                  }
                }
              }
            }
            class B {
              constructor() {
                tmp = onAction({ action: "PRESS_JOIN_BUTTON" });
                obj = closure_1(closure_2[29]);
                hideAllActionSheetsResult = obj.hideAllActionSheets();
                obj2 = closure_1(closure_2[30]);
                popAllResult = obj2.popAll();
                obj3 = closure_1(closure_2[31]);
                obj1 = { userId: user.id, sessionId: activity.session_id, applicationId: application.id, channelId: null, messageId: null, activity, source: "UserProfile", analyticsLocations };
                joined = obj3.join(obj1);
                return;
              }
            }
            cResult[8] = activity;
            cResult[9] = analyticsLocations;
            cResult[10] = application.id;
            cResult[11] = onAction;
            cResult[12] = user.id;
            cResult[13] = B;
            tmp21 = B;
          }
        }
        return null;
      }
    }
  }
  class I {
    constructor() {
      obj = { user, currentUser, activity, application, channelId: null, isEmbedded: false, isContentGated: false, ChannelStore: closure_5, GuildStore: closure_8, GuildMemberCountStore: closure_7, RelationshipStore: closure_11, SelectedChannelStore: closure_12, VoiceStateStore: closure_14, PermissionStore: closure_10, LocalActivityStore: closure_9, SelfPresenceStore: closure_13, EmbeddedActivitiesStore: closure_4 };
      return closure_1(closure_2[25])(obj);
    }
  }
  cResult[1] = activity;
  cResult[2] = application;
  cResult[3] = currentUser;
  cResult[4] = user;
  cResult[5] = I;
  tmp15 = I;
}) : (function JoinGameActivityButton(onAction) {
  let activity;
  let application;
  let currentUser;
  let require;
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
      const Button = tmp2(5244).Button;
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
              const obj4 = { userId: require.id, sessionId: dependencyMap.session_id, applicationId: application.id, channelId: null, messageId: null, activity: dependencyMap, source: "UserProfile", analyticsLocations };
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
  if (sync_id(10651)(activity)) {
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
        const tmp11 = <Icon size={tmp(1202).Icon.Sizes.SMALL} source={tmp5(8623)} disableColor style={tmp4.icon} />;
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
        const tmp16 = jsx(tmp(5244).Button, { text: tmp7, icon: tmp9, variant: "secondary", onPress: tmp12 });
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
            return { value: "IconComponent", done: "+352" };
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
                obj4 = closure_0(dependencyMap[36]);
                return obj5;
              }
            } else if (1 === c4) {
              c3 = 0;
              c5 = 3;
              return { value: "IconComponent", done: "+352" };
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
              const obj8 = closure_0(dependencyMap[36]);
              if (closure_0) {
                openUrlResult = obj8.openUrl(closure_0, constants2.TRACK, closure_1);
              } else {
                obj8.attributeInstall();
                const obj = sync_id(dependencyMap[37]);
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
  if (sync_id(10651)(activity)) {
    tmp4 = null;
    if (null != sync_id) {
      const Button = components_Button_Button.Button;
      const intl = intl5.intl;
      let obj2 = { platform: activity.name };
      let obj3 = { size: native.Icon.Sizes.SMALL, source: tmp2(8623), disableColor: true, style: tmp.icon };
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
            return { value: "IconComponent", done: "+352" };
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
              return { value: "IconComponent", done: "+352" };
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
                const obj = tmp(closure_2[37]);
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
      const tmp13 = jsx(onAction(5244).Button, {
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
                const tmp13 = jsx(tmp(tmp2[32]).Button, { text: tmp8, variant: str, grow: true, onPress: tmp10 });
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
  const Button = channel(newestAnalyticsLocation[32]).Button;
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
      const tmp5Result = tmp5(onAction[43]);
      const value = tmp5Result.get(type);
      _require = value;
      const Button = tmp(tmp2[32]).Button;
      const intl = tmp(tmp2[27]).intl;
      let obj2 = { platform: value.name };
      const formatToPlainStringResult = intl.formatToPlainString(tmp(onAction[27]).t.XWSHTb, obj2);
      const Icon = tmp(tmp2[34]).Icon;
      const SMALL = tmp(tmp2[34]).Icon.Sizes.SMALL;
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
    const Button = tmp4(tmp3[32]).Button;
    const intl = tmp4(tmp3[27]).intl;
    const obj3 = { platform: value.name };
    ({ size: type(newestAnalyticsLocation[34]).Icon.Sizes.SMALL, source: tmp4Result.makeSource(value.icon.whitePNG), disableColor: true, style: tmp.icon });
    const Icon = tmp4(tmp3[34]).Icon;
    tmp4Result = type(newestAnalyticsLocation[44]);
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
                  return { value: "IconComponent", done: "+352" };
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
                        return { value: "IconComponent", done: "+352" };
                      } else {
                        tmp = id.button_urls[closure_129_2];
                        if (typeof tmp !== "string") {
                          c3 = 0;
                          c5 = 3;
                          return { value: "IconComponent", done: "+352" };
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
                                                  const obj = activity(index[37]);
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
                          return { value: "IconComponent", done: "+352" };
                        }
                      }
                    }
                    c5 = 3;
                    return { value: "IconComponent", done: "+352" };
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
