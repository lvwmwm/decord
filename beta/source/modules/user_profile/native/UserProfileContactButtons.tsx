// Module ID: 12695
// Function ID: 12696
// Name: UserProfileContactButtons
// Dependencies: [19, 17, 4479, 1074, 21, 4836, 576, 5281, 6583, 7635, 12637, 504, 4678, 12696, 4769, 1115, 12117, 9195, 10787, 4800, 5039, 4849, 12698, 7363, 5385, 7305, 12699, 2]
// Exports: default

// Module 12695 (UserProfileContactButtons)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 4849 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5039 */;
import components_Button_Button from "components/Button/Button" /* 5281 */;
import RelationshipActionCreatorsDefault from "RelationshipActionCreators" /* 9195 */;
import navigateToLastChannelDefault from "navigateToLastChannel" /* 10787 */;
import UserProfileAlertUtils from "UserProfileAlertUtils" /* 12117 */;
import ConfirmStartCall from "ConfirmStartCall" /* 12699 */;
import react from "react" /* 19 */;
import RelationshipStore from "RelationshipStore" /* 4479 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
function FlatFriendButton(label) {
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
  const obj = { text: label, icon: metroRequire(icon, { color: CONTROL_SECONDARY_TEXT_DEFAULT, size: "xs" }), accessibilityLabel: label, variant: str, size: "md", grow: true };
  const Button = components_Button_Button.Button;
  const merged1 = Object.assign(merged);
  return metroRequire(Button, obj);
}
function FriendRequestButton(user) {
  let ButtonComponent;
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
  const newestAnalyticsLocation = trackUserProfileAction(6583)().newestAnalyticsLocation;
  let obj = user(7635);
  trackUserProfileAction = obj.useUserProfileAnalyticsContext().trackUserProfileAction;
  if (_location == null) {
    _location = newestAnalyticsLocation;
  }
  dependencyMap = { location: _location };
  const tmp3Result = user(12637);
  const gameFriendsForUser = tmp3Result.useGameFriendsForUser(user.id);
  const items = [userDisplayName];
  const tmp3Result2 = user(504);
  stateFromStores = tmp3Result2.useStateFromStores(items, () => RelationshipStore.getRelationshipType(user.id));
  const tmpResult = tmp(4678);
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
          UserPlusIcon = tmp3(12696).UserClockIcon;
        } else {
          UserPlusIcon = tmp3(4769).UserPlusIcon;
        }
        const intl = tmp3(1115).intl;
        const string = intl.string;
        const t = tmp3(1115).t;
        if (stateFromStores === RelationshipTypes.PENDING_OUTGOING) {
          stringResult = string(t["fMm5q/"]);
        } else {
          stringResult = string(t["7815ae"]);
        }
        const intl2 = tmp3(1115).intl;
        const string2 = intl2.string;
        const t2 = tmp3(1115).t;
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
                          const obj = trackUserProfileAction(closure_2[17]);
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
        return closure_6(ButtonComponent, obj2);
      }
    }
  }
  return null;
}
const View = react_native.View;
const RelationshipTypes = Constants.RelationshipTypes;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { threeButtonLayout: obj2, flexGrow: { flex: 1 }, iconButtonGroup: obj3 };
obj2 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12 };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", gap: nativeDefault.space.PX_12 };
let closure_8 = createStyles(obj);
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileContactButtons.tsx");

export default function UserProfileContactButtons(user) {
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
  ({ disableMessage, disableCalls, hasCustomProfileTheme, style } = user);
  let onPress;
  const _location = user.location;
  let obj = user(onPress[9]);
  const trackUserProfileAction = obj.useUserProfileAnalyticsContext().trackUserProfileAction;
  const tmp3 = closure_8();
  let obj2 = user(onPress[11]);
  const items = [RelationshipStore];
  const stateFromStores = obj2.useStateFromStores(items, () => RelationshipStore.getRelationshipType(user.id));
  let obj3 = user(onPress[10]);
  const gameFriendsForUser = obj3.useGameFriendsForUser(user.id);
  const tmp6 = trackUserProfileAction(onPress[22])(user.id, false, () => {
    trackUserProfileAction({ action: "VOICE_CALL" });
    navigateToLastChannelDefault();
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideAllActionSheets();
    const obj2 = ModalActionCreatorsDefault;
    obj2.popAll();
  });
  onPress = tmp6.handlePress;
  ({ text, inCall, accessibilityHint } = tmp6);
  let str = "secondary";
  if (hasCustomProfileTheme) {
    str = "primary";
  }
  const colors = tmp5(tmp2[6]).colors;
  const tmp7 = hasCustomProfileTheme ? colors.WHITE : colors.CONTROL_SECONDARY_TEXT_DEFAULT;
  function handleMessage() {
    trackUserProfileAction({ action: "SEND_MESSAGE" });
    navigateToLastChannelDefault();
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideAllActionSheets();
    const obj2 = ModalActionCreatorsDefault;
    obj2.popAll();
    const obj3 = ChannelActionCreatorsDefault;
    const obj4 = { recipientIds: user.id };
    obj3.openPrivateChannel(obj4);
  }
  if (stateFromStores !== RelationshipTypes.FRIEND) {
    if (stateFromStores !== RelationshipTypes.BLOCKED) {
      if (stateFromStores !== RelationshipTypes.PENDING_INCOMING) {
        let tmp9Result;
        if (0 === gameFriendsForUser.length) {
          let obj4 = { style: items1, children: items2 };
          items1 = [tmp3.threeButtonLayout, style];
          const obj5 = { style: tmp3.flexGrow, children: closure_6(FriendRequestButton, obj6) };
          obj6 = { user, location: _location, hasCustomProfileTheme, ButtonComponent: FlatFriendButton };
          items2 = [closure_6(View, obj5), ];
          const obj7 = { style: tmp3.iconButtonGroup, children: items3 };
          const obj8 = { icon: closure_6(user(onPress[24]).ChatIcon, obj9), accessibilityLabel: intl7.string(user(onPress[15]).t.zROXEV), accessibilityHint: formatToPlainString2(zFfSFQ2, obj10), variant: str, size: "md", onPress: handleMessage, disabled: disableMessage };
          const IconButton = tmp(tmp2[23]).IconButton;
          obj9 = { color: tmp7, size: "xs" };
          intl7 = tmp(tmp2[15]).intl;
          const intl8 = tmp(tmp2[15]).intl;
          formatToPlainString2 = intl8.formatToPlainString;
          obj10 = { name: tmp5Result.getName(user) };
          zFfSFQ2 = tmp(tmp2[15]).t.zFfSFQ;
          tmp5Result = trackUserProfileAction(onPress[12]);
          items3 = [closure_6(IconButton, obj8), ];
          const obj11 = { icon: closure_6(user(onPress[25]).PhoneCallIcon, obj12), accessibilityLabel: intl9.string(user(onPress[15]).t.JJogjm), accessibilityHint, variant: str, size: "md", onPress, disabled: disableCalls };
          const IconButton2 = tmp(tmp2[23]).IconButton;
          obj12 = { color: tmp7, size: "xs" };
          intl9 = tmp(tmp2[15]).intl;
          const tmp16 = closure_6;
          if (accessibilityHint == null) {
            const intl10 = tmp(tmp2[15]).intl;
            accessibilityHint = intl10.string(tmp(tmp2[15]).t.focH1t);
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
          items2[1] = closure_7(View, obj7);
          tmp9Result = tmp14(tmp15, obj4, "three-button-group");
        }
        return tmp9Result;
      }
    }
  }
  const obj13 = { style: items4, children: items5 };
  items4 = [{ flexDirection: "row", gap: trackUserProfileAction(tmp2[6]).space.PX_12 }, style];
  const obj15 = { style: { flex: 1 }, children: closure_6(Button, obj16) };
  obj16 = { text: intl.string(user(onPress[15]).t.zROXEV), icon: closure_6(user(onPress[24]).ChatIcon, { color: tmp7, size: "xs" }), accessibilityLabel: intl2.string(user(onPress[15]).t.zROXEV), accessibilityHint: formatToPlainString(zFfSFQ, obj17), variant: str, size: "md", grow: true, onPress: handleMessage, disabled: disableMessage };
  ({ flexDirection: "row", gap: trackUserProfileAction(onPress[6]).space.PX_12 });
  Button = tmp(tmp2[7]).Button;
  intl = tmp(tmp2[15]).intl;
  intl2 = tmp(tmp2[15]).intl;
  const intl3 = tmp(tmp2[15]).intl;
  formatToPlainString = intl3.formatToPlainString;
  obj17 = { name: tmp5Result2.getName(user) };
  zFfSFQ = tmp(tmp2[15]).t.zFfSFQ;
  tmp5Result2 = trackUserProfileAction(onPress[12]);
  items5 = [closure_6(View, obj15), ];
  const obj18 = { style: { flex: 1 }, children: closure_6(Button2, obj19) };
  obj19 = { text: intl4.string(user(onPress[15]).t.JJogjm), icon: closure_6(user(onPress[25]).PhoneCallIcon, { color: tmp7, size: "xs" }), accessibilityLabel: intl5.string(user(onPress[15]).t.JJogjm), accessibilityHint: stringResult, variant: str, size: "md", grow: true, onPress: fn2, disabled: disableCalls || null == text };
  Button2 = tmp(tmp2[7]).Button;
  intl4 = tmp(tmp2[15]).intl;
  intl5 = tmp(tmp2[15]).intl;
  stringResult = accessibilityHint;
  const tmp9 = closure_7;
  if (accessibilityHint == null) {
    const intl6 = tmp(tmp2[15]).intl;
    stringResult = intl6.string(tmp(tmp2[15]).t.focH1t);
  }
  fn2 = onPress;
  if (!inCall) {
    fn2 = () => {
      const obj = ConfirmStartCall;
      return obj.confirmStartCall(fn);
    };
  }
  items5[1] = closure_6(View, obj18);
  tmp9Result = tmp9(tmp10, obj13, "two-button-group");
};
