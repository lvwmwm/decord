// Module ID: 12178
// Function ID: 95398
// Name: FlatFriendButton
// Dependencies: [31, 27, 3767, 653, 33, 4130, 689, 4543, 5462, 8310, 12012, 566, 3969, 12179, 4068, 1212, 11680, 8962, 10913, 4098, 4337, 4140, 12181, 7533, 4629, 9123, 10142, 2]
// Exports: default

// Module 12178 (FlatFriendButton)
import "result";
import { View } from "set";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { RelationshipTypes } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_6;
let closure_7;
const require = arg1;
function FlatFriendButton(label) {
  let hasCustomProfileTheme;
  let icon;
  let isPending;
  label = label.label;
  let obj = { icon: 0, label: 0, hasCustomProfileTheme: 0, isPending: 0 };
  ({ icon, hasCustomProfileTheme, isPending } = label);
  Object.setPrototypeOf(null);
  const merged = Object.assign(label, obj);
  if (false === isPending) {
    let str = "primary";
  } else {
    str = "secondary";
  }
  if ("primary" === str) {
    let CONTROL_SECONDARY_TEXT_DEFAULT = importDefault(689).colors.WHITE;
  } else {
    CONTROL_SECONDARY_TEXT_DEFAULT = importDefault(689).colors.CONTROL_SECONDARY_TEXT_DEFAULT;
  }
  obj = { text: label };
  obj = { color: CONTROL_SECONDARY_TEXT_DEFAULT, size: "xs" };
  obj.icon = callback(icon, obj);
  obj.accessibilityLabel = label;
  obj.variant = str;
  obj.size = "md";
  obj.grow = true;
  const merged1 = Object.assign(merged);
  return callback(require(4543) /* Button */.Button, obj);
}
function FriendRequestButton(user) {
  let ButtonComponent;
  let hasCustomProfileTheme;
  user = user.user;
  const _location = user.location;
  let obj;
  let stateFromStores;
  let _isNativeReflectConstruct;
  ({ hasCustomProfileTheme, ButtonComponent } = user);
  let newestAnalyticsLocation = trackUserProfileAction(obj[8])().newestAnalyticsLocation;
  obj = user(obj[9]);
  trackUserProfileAction = obj.useUserProfileAnalyticsContext().trackUserProfileAction;
  obj = {};
  if (null != _location) {
    newestAnalyticsLocation = _location;
  }
  obj.location = newestAnalyticsLocation;
  const gameFriendsForUser = user(obj[10]).useGameFriendsForUser(user.id);
  const obj3 = user(obj[10]);
  const items = [_isNativeReflectConstruct];
  stateFromStores = user(obj[11]).useStateFromStores(items, () => relationshipType.getRelationshipType(user.id));
  let obj4 = user(obj[11]);
  _isNativeReflectConstruct = trackUserProfileAction(obj[12]).useName(user);
  if (stateFromStores !== RelationshipTypes.FRIEND) {
    if (stateFromStores !== RelationshipTypes.BLOCKED) {
      if (gameFriendsForUser.length > 0) {
        return null;
      } else if (stateFromStores === RelationshipTypes.PENDING_INCOMING) {
        return null;
      } else {
        if (stateFromStores === RelationshipTypes.PENDING_OUTGOING) {
          let UserPlusIcon = tmp13(tmp14[13]).UserClockIcon;
        } else {
          UserPlusIcon = tmp13(tmp14[14]).UserPlusIcon;
        }
        const intl = user(obj[15]).intl;
        const string = intl.string;
        const t = user(obj[15]).t;
        if (stateFromStores === RelationshipTypes.PENDING_OUTGOING) {
          let stringResult = string(t["fMm5q/"]);
        } else {
          stringResult = string(t["7815ae"]);
        }
        const intl2 = user(obj[15]).intl;
        const string2 = intl2.string;
        const t2 = user(obj[15]).t;
        if (stateFromStores === RelationshipTypes.PENDING_OUTGOING) {
          let string2Result = string2(t2.H0Ql7N);
        } else {
          string2Result = string2(t2.gc9aSx);
        }
        obj = {
          icon: UserPlusIcon,
          label: stringResult,
          accessibilityHint: string2Result,
          onPress() {
                  if (stateFromStores === outer1_5.PENDING_OUTGOING) {
                    let obj = {
                      userDisplayName: _isNativeReflectConstruct,
                      onConfirm() {
                          outer1_1({ action: "CANCEL_FRIEND_REQUEST" });
                          obj = trackUserProfileAction(obj[17]);
                          obj.cancelFriendRequest(outer1_0.id, outer1_2);
                        }
                    };
                    const result = user(obj[16]).confirmCancelFriendRequest(obj);
                    const obj4 = user(obj[16]);
                  } else {
                    obj = { action: "SEND_FRIEND_REQUEST" };
                    trackUserProfileAction(obj);
                    obj = { userId: user.id };
                    obj.context = obj;
                    trackUserProfileAction(obj[17]).addRelationship(obj);
                    const obj2 = trackUserProfileAction(obj[17]);
                  }
                },
          hasCustomProfileTheme,
          isPending: stateFromStores === RelationshipTypes.PENDING_OUTGOING
        };
        return callback(ButtonComponent, obj);
      }
    }
  }
  return null;
}
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { flexDirection: "row", alignItems: "center", gap: require("_createForOfIteratorHelperLoose").space.PX_12 };
_createForOfIteratorHelperLoose.threeButtonLayout = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.flexGrow = { flex: 1 };
_createForOfIteratorHelperLoose.iconButtonGroup = { flexDirection: "row", gap: require("_createForOfIteratorHelperLoose").space.PX_12 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj1 = { flexDirection: "row", gap: require("_createForOfIteratorHelperLoose").space.PX_12 };
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/user_profile/native/UserProfileContactButtons.tsx");

export default function UserProfileContactButtons(user) {
  let accessibilityHint;
  let disableCalls;
  let disableMessage;
  let hasCustomProfileTheme;
  let inCall;
  let style;
  let text;
  user = user.user;
  ({ disableMessage, disableCalls, hasCustomProfileTheme, style } = user);
  let trackUserProfileAction;
  function closeUserProfile() {
    trackUserProfileAction(fn[18])();
    trackUserProfileAction(fn[19]).hideActionSheet();
  }
  function handleMessage() {
    trackUserProfileAction({ action: "SEND_MESSAGE" });
    if (null != closeUserProfile) {
      closeUserProfile();
    }
    let obj = trackUserProfileAction(fn[20]);
    obj.popAll();
    obj = { recipientIds: user.id };
    trackUserProfileAction(fn[21]).openPrivateChannel(obj);
  }
  let obj = user(fn[9]);
  trackUserProfileAction = obj.useUserProfileAnalyticsContext().trackUserProfileAction;
  const tmp = _createForOfIteratorHelperLoose();
  let obj1 = user(fn[11]);
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj1.useStateFromStores(items, () => outer1_4.getRelationshipType(user.id));
  let obj2 = user(fn[10]);
  const gameFriendsForUser = obj2.useGameFriendsForUser(user.id);
  const tmp3 = trackUserProfileAction(fn[22])(user.id, false, () => {
    trackUserProfileAction({ action: "VOICE_CALL" });
    if (null != closeUserProfile) {
      closeUserProfile();
    }
  });
  fn = tmp3.handlePress;
  ({ text, inCall, accessibilityHint } = tmp3);
  let str = "secondary";
  if (hasCustomProfileTheme) {
    str = "primary";
  }
  const colors = trackUserProfileAction(fn[6]).colors;
  const tmp4 = hasCustomProfileTheme ? colors.WHITE : colors.CONTROL_SECONDARY_TEXT_DEFAULT;
  if (stateFromStores !== RelationshipTypes.FRIEND) {
    if (stateFromStores !== RelationshipTypes.BLOCKED) {
      if (stateFromStores !== RelationshipTypes.PENDING_INCOMING) {
        if (0 === gameFriendsForUser.length) {
          obj = {};
          const items1 = [tmp.threeButtonLayout, style];
          obj.style = items1;
          obj = { style: tmp.flexGrow };
          obj1 = { user, location: user.location, hasCustomProfileTheme, ButtonComponent: FlatFriendButton };
          obj.children = callback(FriendRequestButton, obj1);
          const items2 = [callback(closeUserProfile, obj), ];
          obj2 = { style: tmp.iconButtonGroup };
          const obj3 = {};
          const obj4 = { color: tmp4, size: "xs" };
          obj3.icon = callback(user(fn[24]).ChatIcon, obj4);
          const intl7 = user(fn[15]).intl;
          obj3.accessibilityLabel = intl7.string(user(fn[15]).t.zROXEV);
          const intl8 = user(fn[15]).intl;
          const obj5 = { name: trackUserProfileAction(fn[12]).getName(user) };
          obj3.accessibilityHint = intl8.formatToPlainString(user(fn[15]).t.zFfSFQ, obj5);
          obj3.variant = str;
          obj3.size = "md";
          obj3.onPress = handleMessage;
          obj3.disabled = disableMessage;
          const items3 = [callback(user(fn[23]).IconButton, obj3), ];
          const obj6 = {};
          const obj7 = { color: tmp4, size: "xs" };
          obj6.icon = callback(user(fn[25]).PhoneCallIcon, obj7);
          const intl9 = user(fn[15]).intl;
          obj6.accessibilityLabel = intl9.string(user(fn[15]).t.JJogjm);
          if (null == accessibilityHint) {
            const intl10 = user(fn[15]).intl;
            accessibilityHint = intl10.string(user(fn[15]).t.focH1t);
          }
          obj6.accessibilityHint = accessibilityHint;
          obj6.variant = str;
          obj6.size = "md";
          if (!inCall) {
            fn = () => user(fn[26]).confirmStartCall(fn);
          }
          obj6.onPress = fn;
          if (!disableCalls) {
            disableCalls = null == text;
          }
          obj6.disabled = disableCalls;
          items3[1] = callback(user(fn[23]).IconButton, obj6);
          obj2.children = items3;
          items2[1] = closure_7(closeUserProfile, obj2);
          obj.children = items2;
          let tmp7Result = tmp16(tmp17, obj, "three-button-group");
          const obj19 = trackUserProfileAction(fn[12]);
          const tmp27 = callback;
        }
        return tmp7Result;
      }
    }
  }
  let obj8 = {};
  const items4 = [{ flexDirection: "row", gap: trackUserProfileAction(fn[6]).space.PX_12 }, style];
  obj8.style = items4;
  const obj10 = { style: { flex: 1 } };
  const obj11 = {};
  const intl = user(fn[15]).intl;
  obj11.text = intl.string(user(fn[15]).t.zROXEV);
  obj11.icon = callback(user(fn[24]).ChatIcon, { color: tmp4, size: "xs" });
  const intl2 = user(fn[15]).intl;
  obj11.accessibilityLabel = intl2.string(user(fn[15]).t.zROXEV);
  const intl3 = user(fn[15]).intl;
  const obj12 = {};
  obj8 = trackUserProfileAction(fn[12]);
  obj12.name = obj8.getName(user);
  obj11.accessibilityHint = intl3.formatToPlainString(user(fn[15]).t.zFfSFQ, obj12);
  obj11.variant = str;
  obj11.size = "md";
  obj11.grow = true;
  obj11.onPress = handleMessage;
  obj11.disabled = disableMessage;
  obj10.children = callback(user(fn[7]).Button, obj11);
  const items5 = [callback(closeUserProfile, obj10), ];
  const obj13 = { style: { flex: 1 } };
  const obj14 = {};
  const intl4 = user(fn[15]).intl;
  obj14.text = intl4.string(user(fn[15]).t.JJogjm);
  obj14.icon = callback(user(fn[25]).PhoneCallIcon, { color: tmp4, size: "xs" });
  const intl5 = user(fn[15]).intl;
  obj14.accessibilityLabel = intl5.string(user(fn[15]).t.JJogjm);
  let stringResult = accessibilityHint;
  if (null == accessibilityHint) {
    const intl6 = user(fn[15]).intl;
    stringResult = intl6.string(user(fn[15]).t.focH1t);
  }
  obj14.accessibilityHint = stringResult;
  obj14.variant = str;
  obj14.size = "md";
  obj14.grow = true;
  let fn2 = fn;
  if (!inCall) {
    fn2 = () => user(fn[26]).confirmStartCall(fn);
  }
  obj14.onPress = fn2;
  let tmp14 = disableCalls;
  if (!disableCalls) {
    tmp14 = null == text;
  }
  obj14.disabled = tmp14;
  obj13.children = callback(user(fn[7]).Button, obj14);
  items5[1] = callback(closeUserProfile, obj13);
  obj8.children = items5;
  tmp7Result = closure_7(tmp8, obj8, "two-button-group");
};
