// Module ID: 14373
// Function ID: 14374
// Name: UserProfileContactButtons
// Dependencies: [109, 19, 17, 4911, 1087, 21, 4969, 587, 558, 576, 5230, 7237, 8652, 14282, 504, 5018, 14374, 5658, 1128, 13466, 7398, 11135, 5196, 6658, 7395, 14376, 8527, 7943, 9690, 13951, 2]

// Module 14373 (UserProfileContactButtons)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1087 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5196 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6658 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 7395 */;
import RelationshipActionCreatorsDefault from "RelationshipActionCreators" /* 7398 */;
import navigateToLastChannelDefault from "navigateToLastChannel" /* 11135 */;
import UserProfileAlertUtils from "UserProfileAlertUtils" /* 13466 */;
import ConfirmStartCall from "ConfirmStartCall" /* 13951 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import RelationshipStore from "RelationshipStore" /* 4911 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4969 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let dependencyMap;

let c9;
let metroImportAll;
let obj2;
let obj3;
let tmp;
const components_Button_Button = tmp(5230);
let closure_3 = ["icon", "label", "hasCustomProfileTheme", "isPending"];
const View = react_native.View;
const RelationshipTypes = Constants.RelationshipTypes;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { threeButtonLayout: obj2, flexGrow: { flex: 1 }, iconButtonGroup: obj3 };
obj2 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12 };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", gap: nativeDefault.space.PX_12 };
let closure_10 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
const ButtonComponent = ReactCompilerGating.isReactCompilerEnabled() ? (function FlatFriendButton(arg0) {
  let CONTROL_SECONDARY_TEXT_DEFAULT;
  let hasCustomProfileTheme;
  let icon;
  let isPending;
  let label;
  let str;
  let tmp4;
  let tmp6;
  let tmp7;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(14);
  if (cResult[0] !== arg0) {
    ({ icon, label, hasCustomProfileTheme, isPending } = arg0);
    const tmp11 = _objectWithoutProperties(arg0, closure_3);
    cResult[0] = arg0;
    cResult[1] = icon;
    cResult[2] = hasCustomProfileTheme;
    cResult[3] = isPending;
    cResult[4] = label;
    cResult[5] = tmp11;
    tmp8 = tmp11;
    tmp7 = label;
    tmp6 = isPending;
    tmp4 = icon;
  } else {
    tmp4 = cResult[1];
    tmp6 = cResult[3];
    tmp7 = cResult[4];
    tmp8 = cResult[5];
  }
  if (false === tmp6) {
    str = "primary";
  } else {
    str = "secondary";
  }
  if ("primary" === str) {
    CONTROL_SECONDARY_TEXT_DEFAULT = nativeDefault.colors.WHITE;
  } else {
    CONTROL_SECONDARY_TEXT_DEFAULT = nativeDefault.colors.CONTROL_SECONDARY_TEXT_DEFAULT;
  }
  if (cResult[6] === tmp4) {
    let tmp14;
    if (cResult[7] === CONTROL_SECONDARY_TEXT_DEFAULT) {
      tmp14 = cResult[8];
    }
    if (cResult[9] === tmp7) {
      if (cResult[10] === tmp8) {
        if (cResult[11] === tmp14) {
          let tmp16;
          if (cResult[12] === str) {
            tmp16 = cResult[13];
          }
          return tmp16;
        }
      }
    }
    const obj2 = { text: tmp7, icon: tmp14, accessibilityLabel: tmp7, variant: str, size: "md", grow: true };
    const Button = components_Button_Button.Button;
    const merged = Object.assign(tmp8);
    const tmp21 = metroImportAll(Button, obj2);
    cResult[9] = tmp7;
    cResult[10] = tmp8;
    cResult[11] = tmp14;
    cResult[12] = str;
    cResult[13] = tmp21;
    tmp16 = tmp21;
  }
  const tmp15 = metroImportAll(tmp4, { color: CONTROL_SECONDARY_TEXT_DEFAULT, size: "xs" });
  cResult[6] = tmp4;
  cResult[7] = CONTROL_SECONDARY_TEXT_DEFAULT;
  cResult[8] = tmp15;
  tmp14 = tmp15;
}) : (function FlatFriendButton(label) {
  let CONTROL_SECONDARY_TEXT_DEFAULT;
  let hasCustomProfileTheme;
  let icon;
  let isPending;
  let str;
  label = label.label;
  ({ icon, hasCustomProfileTheme, isPending } = label);
  const merged = Object.assign(label, Object.assign({ icon: 0, label: 0, hasCustomProfileTheme: 0, isPending: 0 }));
  if (false === isPending) {
    str = "primary";
  } else {
    str = "secondary";
  }
  if ("primary" === str) {
    CONTROL_SECONDARY_TEXT_DEFAULT = nativeDefault.colors.WHITE;
  } else {
    CONTROL_SECONDARY_TEXT_DEFAULT = nativeDefault.colors.CONTROL_SECONDARY_TEXT_DEFAULT;
  }
  const obj = { text: label, icon: metroImportAll(icon, { color: CONTROL_SECONDARY_TEXT_DEFAULT, size: "xs" }), accessibilityLabel: label, variant: str, size: "md", grow: true };
  const Button = components_Button_Button.Button;
  const merged1 = Object.assign(merged);
  return metroImportAll(Button, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? (function FriendRequestButton(user) {
  let _location;
  let context;
  let hasCustomProfileTheme;
  let tmp5;
  let tmp6;
  let tmp8;
  let trackUserProfileAction;
  const tmp = user;
  let obj = user(576);
  const cResult = obj.c(23);
  user = user.user;
  ({ hasCustomProfileTheme, location: _location, ButtonComponent } = user);
  const newestAnalyticsLocation = trackUserProfileAction(7237)().newestAnalyticsLocation;
  let obj2 = user(8652);
  const tmp4 = trackUserProfileAction;
  trackUserProfileAction = obj2.useUserProfileAnalyticsContext().trackUserProfileAction;
  if (_location == null) {
    _location = newestAnalyticsLocation;
  }
  if (cResult[0] !== _location) {
    let obj3 = { location: _location };
    cResult[0] = _location;
    cResult[1] = obj3;
    tmp5 = obj3;
  } else {
    tmp5 = cResult[1];
  }
  dependencyMap = tmp5;
  const tmpResult = tmp(14282);
  const gameFriendsForUser = tmpResult.useGameFriendsForUser(user.id);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [RelationshipStore];
    cResult[2] = items;
    tmp6 = items;
  } else {
    tmp6 = cResult[2];
  }
  if (cResult[3] !== user.id) {
    const fn = function _() {
      return RelationshipStore.getRelationshipType(user.id);
    };
    cResult[3] = user.id;
    cResult[4] = fn;
    tmp8 = fn;
  } else {
    tmp8 = cResult[4];
  }
  const tmpResult2 = tmp(504);
  const stateFromStores = tmpResult2.useStateFromStores(tmp6, tmp8);
  const tmp4Result = tmp4(5018);
  const name = tmp4Result.useName(user);
  if (stateFromStores !== RelationshipTypes.FRIEND) {
    if (stateFromStores !== RelationshipTypes.BLOCKED) {
      if (gameFriendsForUser.length > 0) {
        return null;
      } else if (stateFromStores === RelationshipTypes.PENDING_INCOMING) {
        return null;
      } else {
        let UserPlusIcon;
        let tmp12;
        let tmp14;
        if (stateFromStores === RelationshipTypes.PENDING_OUTGOING) {
          UserPlusIcon = tmp(14374).UserClockIcon;
        } else {
          UserPlusIcon = tmp(5658).UserPlusIcon;
        }
        if (cResult[5] !== (stateFromStores === RelationshipTypes.PENDING_OUTGOING)) {
          let stringResult;
          const intl = tmp(1128).intl;
          const string = intl.string;
          const t = tmp(1128).t;
          if (stateFromStores === RelationshipTypes.PENDING_OUTGOING) {
            stringResult = string(t["fMm5q/"]);
          } else {
            stringResult = string(t["7815ae"]);
          }
          cResult[5] = stateFromStores === RelationshipTypes.PENDING_OUTGOING;
          cResult[6] = stringResult;
          tmp12 = stringResult;
        } else {
          tmp12 = cResult[6];
        }
        if (cResult[7] !== (stateFromStores === RelationshipTypes.PENDING_OUTGOING)) {
          let string2Result;
          const intl2 = tmp(1128).intl;
          const string2 = intl2.string;
          const t2 = tmp(1128).t;
          if (stateFromStores === RelationshipTypes.PENDING_OUTGOING) {
            string2Result = string2(t2.H0Ql7N);
          } else {
            string2Result = string2(t2.gc9aSx);
          }
          cResult[7] = stateFromStores === RelationshipTypes.PENDING_OUTGOING;
          cResult[8] = string2Result;
          tmp14 = string2Result;
        } else {
          tmp14 = cResult[8];
        }
        if (cResult[9] === tmp5) {
          if (cResult[10] === name) {
            if (cResult[11] === stateFromStores) {
              if (cResult[12] === trackUserProfileAction) {
                let tmp16;
                if (cResult[13] === user.id) {
                  tmp16 = cResult[14];
                }
                if (cResult[15] === ButtonComponent) {
                  if (cResult[16] === tmp14) {
                    if (cResult[17] === hasCustomProfileTheme) {
                      if (cResult[18] === UserPlusIcon) {
                        if (cResult[19] === stateFromStores === RelationshipTypes.PENDING_OUTGOING) {
                          if (cResult[20] === tmp12) {
                            let tmp17;
                            if (cResult[21] === tmp16) {
                              tmp17 = cResult[22];
                            }
                            return tmp17;
                          }
                        }
                      }
                    }
                  }
                }
                let obj4 = { icon: UserPlusIcon, label: tmp12, accessibilityHint: tmp14, onPress: tmp16, hasCustomProfileTheme, isPending: stateFromStores === RelationshipTypes.PENDING_OUTGOING };
                const tmp19 = closure_8(ButtonComponent, obj4);
                cResult[15] = ButtonComponent;
                cResult[16] = tmp14;
                cResult[17] = hasCustomProfileTheme;
                cResult[18] = UserPlusIcon;
                cResult[19] = stateFromStores === RelationshipTypes.PENDING_OUTGOING;
                cResult[20] = tmp12;
                cResult[21] = tmp16;
                cResult[22] = tmp19;
                tmp17 = tmp19;
              }
            }
          }
        }
        function onPress() {
          let id;
          if (stateFromStores === RelationshipTypes.PENDING_OUTGOING) {
            const obj2 = {
              userDisplayName: name,
              onConfirm() {
                  closure_1_1({ action: "CANCEL_FRIEND_REQUEST" });
                  const obj = trackUserProfileAction(closure_2[20]);
                  obj.cancelFriendRequest(id.id, closure_1_2);
                }
            };
            const obj3 = UserProfileAlertUtils;
            const result = obj3.confirmCancelFriendRequest(obj2);
          } else {
            trackUserProfileAction({ action: "SEND_FRIEND_REQUEST" });
            let obj = RelationshipActionCreatorsDefault;
            const obj4 = { userId: user.id, context };
            obj.addRelationship(obj4);
          }
        }
        cResult[9] = tmp5;
        cResult[10] = name;
        cResult[11] = stateFromStores;
        cResult[12] = trackUserProfileAction;
        cResult[13] = user.id;
        cResult[14] = onPress;
        tmp16 = onPress;
      }
    }
  }
  return null;
}) : (function FriendRequestButton(user) {
  let context;
  let hasCustomProfileTheme;
  user = user.user;
  let _location = user.location;
  let trackUserProfileAction;
  dependencyMap = undefined;
  let stateFromStores;
  let userDisplayName;
  ({ hasCustomProfileTheme, ButtonComponent } = user);
  const tmp = trackUserProfileAction;
  const newestAnalyticsLocation = trackUserProfileAction(7237)().newestAnalyticsLocation;
  let obj = user(8652);
  trackUserProfileAction = obj.useUserProfileAnalyticsContext().trackUserProfileAction;
  if (_location == null) {
    _location = newestAnalyticsLocation;
  }
  dependencyMap = { location: _location };
  const tmp3Result = user(14282);
  const gameFriendsForUser = tmp3Result.useGameFriendsForUser(user.id);
  const items = [RelationshipStore];
  const tmp3Result2 = user(504);
  stateFromStores = tmp3Result2.useStateFromStores(items, () => RelationshipStore.getRelationshipType(user.id));
  const tmpResult = tmp(5018);
  userDisplayName = tmpResult.useName(user);
  if (stateFromStores !== RelationshipTypes.FRIEND) {
    if (stateFromStores !== RelationshipTypes.BLOCKED) {
      if (gameFriendsForUser.length > 0) {
        return null;
      } else if (stateFromStores === RelationshipTypes.PENDING_INCOMING) {
        return null;
      } else {
        let UserPlusIcon;
        let stringResult;
        let string2Result;
        if (stateFromStores === RelationshipTypes.PENDING_OUTGOING) {
          UserPlusIcon = tmp3(14374).UserClockIcon;
        } else {
          UserPlusIcon = tmp3(5658).UserPlusIcon;
        }
        const intl = tmp3(1128).intl;
        const string = intl.string;
        const t = tmp3(1128).t;
        if (stateFromStores === RelationshipTypes.PENDING_OUTGOING) {
          stringResult = string(t["fMm5q/"]);
        } else {
          stringResult = string(t["7815ae"]);
        }
        const intl2 = tmp3(1128).intl;
        const string2 = intl2.string;
        const t2 = tmp3(1128).t;
        if (stateFromStores === RelationshipTypes.PENDING_OUTGOING) {
          string2Result = string2(t2.H0Ql7N);
        } else {
          string2Result = string2(t2.gc9aSx);
        }
        let obj2 = {
          icon: UserPlusIcon,
          label: stringResult,
          accessibilityHint: string2Result,
          onPress() {
                  let id;
                  if (stateFromStores === RelationshipTypes.PENDING_OUTGOING) {
                    const obj2 = {
                      userDisplayName,
                      onConfirm() {
                          closure_1_1({ action: "CANCEL_FRIEND_REQUEST" });
                          const obj = trackUserProfileAction(closure_2[20]);
                          obj.cancelFriendRequest(id.id, closure_1_2);
                        }
                    };
                    const obj3 = UserProfileAlertUtils;
                    const result = obj3.confirmCancelFriendRequest(obj2);
                  } else {
                    trackUserProfileAction({ action: "SEND_FRIEND_REQUEST" });
                    let obj = RelationshipActionCreatorsDefault;
                    const obj4 = { userId: user.id, context };
                    obj.addRelationship(obj4);
                  }
                },
          hasCustomProfileTheme,
          isPending: tmp9
        };
        return closure_8(ButtonComponent, obj2);
      }
    }
  }
  return null;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function UserProfileContactButtons(user) {
  let _location;
  let accessibilityHint;
  let disableCalls;
  let disableMessage;
  let first;
  let hasCustomProfileTheme;
  let inCall;
  let navigationReplace;
  let obj8;
  let style;
  let text;
  let tmp10;
  let tmp13Result;
  let tmp7;
  let trackUserProfileAction;
  let obj = user(trackUserProfileAction[9]);
  const cResult = obj.c(89);
  user = user.user;
  ({ disableMessage, navigationReplace } = user);
  ({ disableCalls, location: _location, hasCustomProfileTheme, style } = user);
  let obj2 = user(trackUserProfileAction[12]);
  trackUserProfileAction = obj2.useUserProfileAnalyticsContext().trackUserProfileAction;
  closure_10();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [RelationshipStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== user.id) {
    const fn = function c() {
      return RelationshipStore.getRelationshipType(user.id);
    };
    cResult[1] = user.id;
    cResult[2] = fn;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const tmpResult = user(trackUserProfileAction[14]);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp7);
  const tmpResult2 = user(trackUserProfileAction[13]);
  const gameFriendsForUser = tmpResult2.useGameFriendsForUser(user.id);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    function closeUserProfile() {
      navigationReplace(trackUserProfileAction[21])();
      const obj = navigationReplace(trackUserProfileAction[22]);
      obj.hideAllActionSheets();
      const obj2 = navigationReplace(trackUserProfileAction[23]);
      obj2.popAll();
    }
    cResult[3] = closeUserProfile;
    tmp10 = closeUserProfile;
  } else {
    tmp10 = cResult[3];
  }
  closure_3 = tmp10;
  if (cResult[4] === navigationReplace) {
    if (cResult[5] === trackUserProfileAction) {
      let tmp11;
      let tmp12;
      let tmp17;
      let tmp21;
      let tmp23;
      let tmp27;
      if (cResult[6] === user.id) {
        tmp11 = cResult[7];
      }
      if (cResult[8] !== trackUserProfileAction) {
        class G {
          constructor() {
            trackUserProfileAction({ action: "VOICE_CALL" });
            closure_3();
          }
        }
        cResult[8] = trackUserProfileAction;
        cResult[9] = G;
        tmp12 = G;
      } else {
        class G {
          constructor() {
            trackUserProfileAction({ action: "VOICE_CALL" });
            closure_3();
          }
        }
      }
      const tmp14 = navigationReplace(trackUserProfileAction[25])(user.id, false, tmp12);
      const handlePress = tmp14.handlePress;
      ({ text, inCall, accessibilityHint } = tmp14);
      if (hasCustomProfileTheme) {
        class G {
          constructor() {
            trackUserProfileAction({ action: "VOICE_CALL" });
            closure_3();
          }
        }
      }
      const colors = tmp13(tmp2[7]).colors;
      const tmp15 = hasCustomProfileTheme ? colors.WHITE : colors.CONTROL_SECONDARY_TEXT_DEFAULT;
      if (stateFromStores !== RelationshipTypes.FRIEND) {
        class G {
          constructor() {
            trackUserProfileAction({ action: "VOICE_CALL" });
            closure_3();
          }
        }
      }
      const _Symbol = Symbol;
      if (cResult[53] === Symbol.for("react.memo_cache_sentinel")) {
        class G {
          constructor() {
            trackUserProfileAction({ action: "VOICE_CALL" });
            closure_3();
          }
        }
        tmp18[1] = navigationReplace(trackUserProfileAction[7]).space.PX_12;
        cResult[53] = tmp18;
        tmp17 = tmp18;
      } else {
        class G {
          constructor() {
            trackUserProfileAction({ action: "VOICE_CALL" });
            closure_3();
          }
        }
      }
      if (cResult[54] !== style) {
        class G {
          constructor() {
            trackUserProfileAction({ action: "VOICE_CALL" });
            closure_3();
          }
        }
        tmp20[0] = tmp17;
        tmp20[1] = style;
        cResult[54] = style;
        cResult[55] = tmp20;
      } else {
        class G {
          constructor() {
            trackUserProfileAction({ action: "VOICE_CALL" });
            closure_3();
          }
        }
      }
      const _Symbol2 = Symbol;
      if (cResult[56] === Symbol.for("react.memo_cache_sentinel")) {
        class G {
          constructor() {
            trackUserProfileAction({ action: "VOICE_CALL" });
            closure_3();
          }
        }
        cResult[56] = tmp22;
        tmp21 = tmp22;
      } else {
        class G {
          constructor() {
            trackUserProfileAction({ action: "VOICE_CALL" });
            closure_3();
          }
        }
      }
      const _Symbol3 = Symbol;
      if (cResult[57] === Symbol.for("react.memo_cache_sentinel")) {
        class G {
          constructor() {
            trackUserProfileAction({ action: "VOICE_CALL" });
            closure_3();
          }
        }
        const stringResult = obj5.string(user(trackUserProfileAction[18]).t.zROXEV);
        cResult[57] = stringResult;
        tmp23 = stringResult;
      } else {
        class G {
          constructor() {
            trackUserProfileAction({ action: "VOICE_CALL" });
            closure_3();
          }
        }
      }
      if (cResult[58] !== tmp15) {
        class G {
          constructor() {
            trackUserProfileAction({ action: "VOICE_CALL" });
            closure_3();
          }
        }
        const obj3 = { color: tmp15, size: "xs" };
        cResult[58] = tmp15;
        cResult[59] = closure_8(user(trackUserProfileAction[26]).ChatIcon, obj3);
        const tmp26 = closure_8(user(trackUserProfileAction[26]).ChatIcon, obj3);
      } else {
        class G {
          constructor() {
            trackUserProfileAction({ action: "VOICE_CALL" });
            closure_3();
          }
        }
      }
      const _Symbol4 = Symbol;
      if (cResult[60] === Symbol.for("react.memo_cache_sentinel")) {
        class G {
          constructor() {
            trackUserProfileAction({ action: "VOICE_CALL" });
            closure_3();
          }
        }
        const stringResult1 = obj7.string(user(trackUserProfileAction[18]).t.zROXEV);
        cResult[60] = stringResult1;
        tmp27 = stringResult1;
      } else {
        class G {
          constructor() {
            trackUserProfileAction({ action: "VOICE_CALL" });
            closure_3();
          }
        }
      }
      if (cResult[61] !== user) {
        class G {
          constructor() {
            trackUserProfileAction({ action: "VOICE_CALL" });
            closure_3();
          }
        }
        const formatToPlainString = tmp30.formatToPlainString;
        const obj4 = { name: tmp13Result.getName(user) };
        const zFfSFQ = tmp(tmp2[18]).t.zFfSFQ;
        tmp13Result = navigationReplace(trackUserProfileAction[15]);
        cResult[61] = user;
        cResult[62] = formatToPlainString(zFfSFQ, obj4);
        const formatToPlainStringResult = formatToPlainString(zFfSFQ, obj4);
      } else {
        class G {
          constructor() {
            trackUserProfileAction({ action: "VOICE_CALL" });
            closure_3();
          }
        }
      }
      if (cResult[63] === disableMessage) {
        class G {
          constructor() {
            trackUserProfileAction({ action: "VOICE_CALL" });
            closure_3();
          }
        }
      }
      const obj6 = { style: tmp21, children: closure_8(user(trackUserProfileAction[10]).Button, obj8) };
      obj8 = { text: tmp23, icon: tmp25, accessibilityLabel: tmp27, accessibilityHint: tmp29, variant: "secondary", size: "md", grow: true, onPress: tmp11, disabled: disableMessage };
      cResult[63] = disableMessage;
      cResult[64] = tmp11;
      cResult[65] = tmp25;
      cResult[66] = tmp29;
      cResult[67] = "secondary";
      cResult[68] = closure_8(View, obj6);
      const tmp35 = closure_8(View, obj6);
    }
  }
  function handleMessage() {
    trackUserProfileAction({ action: "SEND_MESSAGE" });
    closure_3();
    const obj = ChannelActionCreatorsDefault;
    const obj2 = { recipientIds: user.id, navigationReplace };
    obj.openPrivateChannel(obj2);
  }
  cResult[4] = navigationReplace;
  cResult[5] = trackUserProfileAction;
  cResult[6] = user.id;
  cResult[7] = handleMessage;
  tmp11 = handleMessage;
}) : (function UserProfileContactButtons(user) {
  let Button;
  let Button2;
  let accessibilityHint;
  let disableCalls;
  let disableMessage;
  let fn2;
  let formatToPlainString;
  let formatToPlainString2;
  let hasCustomProfileTheme;
  let inCall;
  let intl;
  let intl2;
  let intl4;
  let intl5;
  let intl7;
  let intl9;
  let items1;
  let items2;
  let items3;
  let items4;
  let items5;
  let navigationReplace;
  let obj10;
  let obj12;
  let obj16;
  let obj17;
  let obj19;
  let obj6;
  let obj9;
  let stringResult;
  let style;
  let text;
  let tmp5Result;
  let tmp5Result2;
  let zFfSFQ;
  let zFfSFQ2;
  user = user.user;
  ({ disableMessage, navigationReplace: importDefault, disableCalls, hasCustomProfileTheme, style } = user);
  let trackUserProfileAction;
  const _location = user.location;
  let obj = user(trackUserProfileAction[12]);
  trackUserProfileAction = obj.useUserProfileAnalyticsContext().trackUserProfileAction;
  const tmp3 = closure_10();
  let obj2 = user(trackUserProfileAction[14]);
  const items = [RelationshipStore];
  const stateFromStores = obj2.useStateFromStores(items, () => RelationshipStore.getRelationshipType(user.id));
  let obj3 = user(trackUserProfileAction[13]);
  const gameFriendsForUser = obj3.useGameFriendsForUser(user.id);
  const tmp6 = require("usePrivateChannelCall")(user.id, false, () => {
    trackUserProfileAction({ action: "VOICE_CALL" });
    navigateToLastChannelDefault();
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideAllActionSheets();
    const obj2 = ModalActionCreatorsDefault;
    obj2.popAll();
  });
  let onPress = tmp6.handlePress;
  ({ text, inCall, accessibilityHint } = tmp6);
  let str = "secondary";
  if (hasCustomProfileTheme) {
    str = "primary";
  }
  const colors = tmp5(tmp2[7]).colors;
  const tmp7 = hasCustomProfileTheme ? colors.WHITE : colors.CONTROL_SECONDARY_TEXT_DEFAULT;
  function handleMessage() {
    trackUserProfileAction({ action: "SEND_MESSAGE" });
    navigateToLastChannelDefault();
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideAllActionSheets();
    const obj2 = ModalActionCreatorsDefault;
    obj2.popAll();
    const obj3 = ChannelActionCreatorsDefault;
    const obj4 = { recipientIds: user.id, navigationReplace: importDefault };
    obj3.openPrivateChannel(obj4);
  }
  if (stateFromStores !== RelationshipTypes.FRIEND) {
    if (stateFromStores !== RelationshipTypes.BLOCKED) {
      if (stateFromStores !== RelationshipTypes.PENDING_INCOMING) {
        let tmp9Result;
        if (0 === gameFriendsForUser.length) {
          let obj4 = { style: items1, children: items2 };
          items1 = [tmp3.threeButtonLayout, style];
          const obj5 = { style: tmp3.flexGrow, children: closure_8(closure_12, obj6) };
          obj6 = { user, location: _location, hasCustomProfileTheme, ButtonComponent };
          items2 = [closure_8(View, obj5), ];
          const obj7 = { style: tmp3.iconButtonGroup, children: items3 };
          const obj8 = { icon: closure_8(user(trackUserProfileAction[26]).ChatIcon, obj9), accessibilityLabel: intl7.string(user(trackUserProfileAction[18]).t.zROXEV), accessibilityHint: formatToPlainString2(zFfSFQ2, obj10), variant: str, size: "md", onPress: handleMessage, disabled: disableMessage };
          const IconButton = tmp(tmp2[27]).IconButton;
          obj9 = { color: tmp7, size: "xs" };
          intl7 = tmp(tmp2[18]).intl;
          const intl8 = tmp(tmp2[18]).intl;
          formatToPlainString2 = intl8.formatToPlainString;
          obj10 = { name: tmp5Result.getName(user) };
          zFfSFQ2 = tmp(tmp2[18]).t.zFfSFQ;
          tmp5Result = require("UserUtils");
          items3 = [closure_8(IconButton, obj8), ];
          const obj11 = { icon: closure_8(user(trackUserProfileAction[28]).PhoneCallIcon, obj12), accessibilityLabel: intl9.string(user(trackUserProfileAction[18]).t.JJogjm), accessibilityHint, variant: str, size: "md", onPress, disabled: disableCalls };
          const IconButton2 = tmp(tmp2[27]).IconButton;
          obj12 = { color: tmp7, size: "xs" };
          intl9 = tmp(tmp2[18]).intl;
          const tmp16 = closure_8;
          if (accessibilityHint == null) {
            const intl10 = tmp(tmp2[18]).intl;
            accessibilityHint = intl10.string(tmp(tmp2[18]).t.focH1t);
          }
          if (!inCall) {
            onPress = () => {
              const obj = ConfirmStartCall;
              return obj.confirmStartCall(fn);
            };
          }
          if (!disableCalls) {
            disableCalls = null == text;
          }
          items3[1] = tmp16(IconButton2, obj11);
          items2[1] = closure_9(View, obj7);
          tmp9Result = tmp14(tmp15, obj4, "three-button-group");
        }
        return tmp9Result;
      }
    }
  }
  const obj13 = { style: items4, children: items5 };
  items4 = [{ flexDirection: "row", gap: require("native").space.PX_12 }, style];
  const obj15 = { style: { flex: 1 }, children: closure_8(Button, obj16) };
  obj16 = { text: intl.string(user(trackUserProfileAction[18]).t.zROXEV), icon: closure_8(user(trackUserProfileAction[26]).ChatIcon, { color: tmp7, size: "xs" }), accessibilityLabel: intl2.string(user(trackUserProfileAction[18]).t.zROXEV), accessibilityHint: formatToPlainString(zFfSFQ, obj17), variant: str, size: "md", grow: true, onPress: handleMessage, disabled: disableMessage };
  ({ flexDirection: "row", gap: require("native").space.PX_12 });
  Button = tmp(tmp2[10]).Button;
  intl = tmp(tmp2[18]).intl;
  intl2 = tmp(tmp2[18]).intl;
  const intl3 = tmp(tmp2[18]).intl;
  formatToPlainString = intl3.formatToPlainString;
  obj17 = { name: tmp5Result2.getName(user) };
  zFfSFQ = tmp(tmp2[18]).t.zFfSFQ;
  tmp5Result2 = require("UserUtils");
  items5 = [closure_8(View, obj15), ];
  const obj18 = { style: { flex: 1 }, children: closure_8(Button2, obj19) };
  obj19 = { text: intl4.string(user(trackUserProfileAction[18]).t.JJogjm), icon: closure_8(user(trackUserProfileAction[28]).PhoneCallIcon, { color: tmp7, size: "xs" }), accessibilityLabel: intl5.string(user(trackUserProfileAction[18]).t.JJogjm), accessibilityHint: stringResult, variant: str, size: "md", grow: true, onPress: fn2, disabled: disableCalls || null == text };
  Button2 = tmp(tmp2[10]).Button;
  intl4 = tmp(tmp2[18]).intl;
  intl5 = tmp(tmp2[18]).intl;
  stringResult = accessibilityHint;
  const tmp9 = closure_9;
  if (accessibilityHint == null) {
    const intl6 = tmp(tmp2[18]).intl;
    stringResult = intl6.string(tmp(tmp2[18]).t.focH1t);
  }
  fn2 = onPress;
  if (!inCall) {
    fn2 = () => {
      const obj = ConfirmStartCall;
      return obj.confirmStartCall(fn);
    };
  }
  items5[1] = closure_8(View, obj18);
  tmp9Result = tmp9(tmp10, obj13, "two-button-group");
});
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileContactButtons.tsx");

export default tmp5;
