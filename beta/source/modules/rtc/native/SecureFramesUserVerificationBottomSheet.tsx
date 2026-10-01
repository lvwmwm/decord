// Module ID: 9182
// Function ID: 9183
// Name: SecureFramesUserVerificationBottomSheet
// Dependencies: [32, 19, 17, 4859, 1372, 9165, 1074, 21, 4836, 576, 9169, 9183, 9144, 9172, 504, 9175, 7626, 4988, 9163, 9174, 8258, 9184, 4800, 4528, 4792, 1115, 6571, 6570, 6619, 4832, 9176, 5279, 5281, 2]
// Exports: default

// Module 9182 (SecureFramesUserVerificationBottomSheet)
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import intl3 from "intl" /* 1115 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4528 */;
import CircleCheckIcon from "CircleCheckIcon" /* 4792 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import UserActionCreators from "UserActionCreators" /* 7626 */;
import CheckmarkLargeBoldIcon2 from "CheckmarkLargeBoldIcon" /* 8258 */;
import SecureFramesUtils from "SecureFramesUtils" /* 9163 */;
import SecureFramesTracking from "SecureFramesTracking" /* 9174 */;
import XLargeBoldIcon2 from "XLargeBoldIcon" /* 9184 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4859 */;
import UserStore from "UserStore" /* 1372 */;
import SecureFramesConstants from "SecureFramesConstants" /* 9165 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let BottomSheet;

let c10;
let c9;
let closure_14;
let hasOwnProperty;
let map1;
let metroRequire;
let size;
let unpackModuleId;
let _slicedToArray = _slicedToArray_mod;
({ ActivityIndicator: hasOwnProperty, View: metroRequire } = react_native);
({ AnalyticsSecureFramesUserVerification: c9, SECURE_FRAMES_PUBLIC_KEY_VERSION: c10, USER_VERIFIED_TOAST_KEY: unpackModuleId } = SecureFramesConstants);
const AnalyticsLocations = Constants.AnalyticsLocations;
({ jsx: map1, jsxs: closure_14 } = Fragment);
let obj = { iconContainer: size, icon: { height: 48, width: 48 }, content: { padding: 16, justifyContent: "center", alignItems: "center" }, subtitle: { textAlign: "center", marginTop: 8, marginBottom: 40 }, buttons: { marginTop: 40 }, helpMessage: { marginTop: 16 } };
size = { height: 80, width: 80, borderRadius: 40, alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG, marginBottom: 16 };
let closure_15 = createStyles.createStyles(obj);
size = size_mod;
let result = size.fileFinishedImporting("modules/rtc/native/SecureFramesUserVerificationBottomSheet.tsx");

export default function SecureFramesUserVerificationBottomSheet(userId) {
  let BottomSheetTitleHeader;
  let closure_3;
  let intl;
  let intl2;
  let items10;
  let obj11;
  let tmp17;
  let tmp18;
  const f88289 = () => {
    const obj = SecureFramesUtils;
    return obj.getUserVerifyStateText(memo, name);
  };
  userId = userId.userId;
  const channelId = userId.channelId;
  const fingerprint = userId.fingerprint;
  const guildId = userId.guildId;
  let tmp = closure_15();
  _slicedToArray = tmp;
  let tmp2 = userId;
  let obj = userId(fingerprint[10]);
  const secureFramesPairwiseFingerprint = obj.useSecureFramesPairwiseFingerprint({ userId });
  const fingerprintUserKey = secureFramesPairwiseFingerprint.fingerprintUserKey;
  const fingerprint2 = secureFramesPairwiseFingerprint.fingerprint;
  const loading = secureFramesPairwiseFingerprint.loading;
  let obj2 = userId(fingerprint[11]);
  const isSecureFramesUIEnabled = obj2.useIsSecureFramesUIEnabled({ channelId });
  let obj3 = userId(fingerprint[12]);
  const isUserSecureFramesVerified = obj3.useIsUserSecureFramesVerified({ userId, channelId, userKey: fingerprintUserKey });
  let obj4 = userId(fingerprint[13]);
  const isPersistentSecureFramesFingerprint = obj4.useIsPersistentSecureFramesFingerprint({ userId, userKey: fingerprintUserKey });
  const isOtherUserKeyPersistent = isPersistentSecureFramesFingerprint.isOtherUserKeyPersistent;
  let loading2 = isPersistentSecureFramesFingerprint.loading;
  const items = [isUserSecureFramesVerified];
  const obj5 = userId(fingerprint[14]);
  const stateFromStores = obj5.useStateFromStores(items, () => isUserSecureFramesVerified.isConnected());
  const items1 = [isUserSecureFramesVerified];
  const obj6 = userId(fingerprint[14]);
  const stateFromStores1 = obj6.useStateFromStores(items1, () => RTCConnectionStore.isUserConnected(userId));
  const obj7 = userId(fingerprint[15]);
  const isSecureFramesKeyInconsistent = obj7.useIsSecureFramesKeyInconsistent({ userId });
  const items2 = [fingerprint, channelId, fingerprint2, stateFromStores, isSecureFramesKeyInconsistent, stateFromStores1, isSecureFramesUIEnabled, isUserSecureFramesVerified];
  const memo = fingerprintUserKey.useMemo(() => {
    if (null != channelId) {
      let CURRENT_USER_DISCONNECTED;
      const tmp = stateFromStores;
      if (tmp) {
        let OTHER_USER_DISCONNECTED;
        const tmp2 = stateFromStores1;
        if (tmp2) {
          let UNABLE_TO_VERIFY;
          const tmp4 = isSecureFramesUIEnabled;
          if (tmp4) {
            let MATCH;
            const tmp6 = isUserSecureFramesVerified;
            if (tmp6) {
              MATCH = stateFromStores.OTHER_USER_ALREADY_VERIFIED;
            } else {
              const tmp7 = isSecureFramesKeyInconsistent;
              if (tmp7) {
                MATCH = stateFromStores.OTHER_USER_INCONSISTENT_KEYS;
              } else if (fingerprint !== fingerprint2) {
                MATCH = stateFromStores.FINGERPRINT_MISMATCH;
              } else {
                MATCH = stateFromStores.MATCH;
              }
            }
            UNABLE_TO_VERIFY = MATCH;
          } else {
            UNABLE_TO_VERIFY = stateFromStores.UNABLE_TO_VERIFY;
          }
          OTHER_USER_DISCONNECTED = UNABLE_TO_VERIFY;
        } else {
          OTHER_USER_DISCONNECTED = stateFromStores.OTHER_USER_DISCONNECTED;
        }
        CURRENT_USER_DISCONNECTED = OTHER_USER_DISCONNECTED;
      }
      return CURRENT_USER_DISCONNECTED;
    }
    CURRENT_USER_DISCONNECTED = stateFromStores.CURRENT_USER_DISCONNECTED;
  }, items2);
  const items3 = [userId];
  const effect = fingerprintUserKey.useEffect(() => {
    const obj = UserActionCreators;
    const user = obj.getUser(userId);
  }, items3);
  const items4 = [isOtherUserKeyPersistent];
  const obj8 = userId(fingerprint[14]);
  const stateFromStores2 = obj8.useStateFromStores(items4, () => UserStore.getUser(userId));
  const obj9 = channelId(fingerprint[17]);
  const name = obj9.useName(guildId, channelId, stateFromStores2);
  const items5 = [memo, name];
  const items6 = [channelId, memo, userId];
  [tmp17, tmp18] = _slicedToArray(fingerprintUserKey.useMemo(f88289, items5), 2);
  const tmp16 = _slicedToArray(fingerprintUserKey.useMemo(f88289, items5), 2);
  const effect1 = fingerprintUserKey.useEffect(() => {
    if (stateFromStores.OTHER_USER_ALREADY_VERIFIED !== memo) {
      if (stateFromStores.MATCH !== memo) {
        const obj2 = { channelId, userId, reason: memo, keyVersion };
        const obj = SecureFramesTracking;
        const result = obj.trackE2EEUserVerificationFailed(obj2);
      }
    }
  }, items6);
  const items7 = [memo, tmp.icon];
  let memo1 = fingerprintUserKey.useMemo(() => {
    if (stateFromStores.OTHER_USER_ALREADY_VERIFIED !== memo) {
      if (stateFromStores.MATCH !== tmp) {
        const obj = { style: closure_3.icon, color: nativeDefault.colors.TEXT_FEEDBACK_CRITICAL };
        const XLargeBoldIcon = XLargeBoldIcon2.XLargeBoldIcon;
        return map1(XLargeBoldIcon, obj);
      }
    }
    const obj2 = { style: closure_3.icon, color: nativeDefault.colors.TEXT_FEEDBACK_POSITIVE };
    const CheckmarkLargeBoldIcon = CheckmarkLargeBoldIcon2.CheckmarkLargeBoldIcon;
    return map1(CheckmarkLargeBoldIcon, obj2);
  }, items7);
  const callback = fingerprintUserKey.useCallback(() => {
    const obj = channelId(fingerprint[22]);
    obj.hideActionSheet();
  }, []);
  const items8 = [channelId, fingerprintUserKey, isOtherUserKeyPersistent, name, userId];
  const callback1 = fingerprintUserKey.useCallback(() => {
    let intl;
    let obj4;
    const tmp2 = null != channelId && null != fingerprintUserKey;
    if (tmp2) {
      const obj = SecureFramesUtils;
      obj.addVerification(userId, fingerprintUserKey, isOtherUserKeyPersistent, channelId, AnalyticsLocations.DEEP_LINK);
      const obj2 = ActionSheetActionCreatorsDefault;
      obj2.hideActionSheet();
      const obj3 = { key: unpackModuleId, iconColor: "text-feedback-positive", IconComponent: CircleCheckIcon.CircleCheckIcon, content: intl.formatToPlainString(intl3.t.Gwu134, obj4) };
      const open = ToastActionCreatorsDefault.open;
      ToastActionCreatorsDefault;
      intl = intl3.intl;
      obj4 = { username: name };
      open(obj3);
    }
  }, items8);
  const obj10 = { startExpanded: true, header: name(BottomSheetTitleHeader, obj11), children: null };
  BottomSheet = userId(fingerprint[26]).BottomSheet;
  obj11 = { title: null, leading: name(userId(fingerprint[28]).ActionSheetCloseButton, { onPress: callback }) };
  BottomSheetTitleHeader = userId(fingerprint[27]).BottomSheetTitleHeader;
  const obj12 = { style: tmp.content, children: null };
  const obj13 = { style: tmp.iconContainer, children: null };
  const tmp14 = channelId;
  if (!loading2) {
    obj13.children = memo1;
    const items9 = [name(isSecureFramesUIEnabled, obj13), , , , ];
    const obj14 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", children: tmp17 };
    items9[1] = name(tmp2(fingerprint[29]).Text, obj14);
    const obj15 = { style: tmp.subtitle, variant: "text-md/medium", color: "text-default", children: tmp18 };
    items9[2] = name(tmp2(fingerprint[29]).Text, obj15);
    const obj16 = { style: tmp.helpMessage, userId, userKey: fingerprintUserKey };
    items9[3] = name(tmp14(fingerprint[30]), obj16);
    const obj17 = { spacing: 12, style: tmp.buttons, children: items10 };
    const Stack = tmp2(tmp3[31]).Stack;
    const obj18 = { variant: "primary", onPress: callback1, text: intl.string(tmp2(fingerprint[25]).t["0tvNAn"]), disabled: loading2 };
    const Button = tmp2(tmp3[32]).Button;
    intl = tmp2(tmp3[25]).intl;
    if (!loading2) {
      loading2 = memo !== stateFromStores.MATCH;
    }
    items10 = [name(Button, obj18), ];
    const obj19 = { variant: "secondary", onPress: callback, text: intl2.string(tmp2(fingerprint[25]).t["ETE/oC"]) };
    const Button2 = tmp2(tmp3[32]).Button;
    intl2 = tmp2(tmp3[25]).intl;
    items10[1] = name(Button2, obj19);
    items9[4] = closure_14(Stack, obj17);
    obj12.children = items9;
    obj10.children = closure_14(isSecureFramesUIEnabled, obj12);
    return name(BottomSheet, obj10);
  }
  memo1 = tmp23(fingerprint2, {});
};
