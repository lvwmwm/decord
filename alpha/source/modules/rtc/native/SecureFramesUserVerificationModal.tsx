// Module ID: 9270
// Function ID: 9271
// Name: SecureFramesUserVerificationModal
// Dependencies: [19, 17, 4863, 1383, 9266, 1072, 1191, 21, 5014, 575, 504, 6041, 9271, 9273, 9246, 9274, 9265, 6744, 5712, 1113, 9275, 9268, 8931, 7326, 8750, 9276, 7292, 6980, 7002, 5624, 6027, 9277, 9279, 7306, 5634, 2]
// Exports: default

// Module 9270 (SecureFramesUserVerificationModal)
import nativeDefault from "native" /* 575 */;
import intl8 from "intl" /* 1113 */;
import FormConstants from "FormConstants" /* 1191 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5712 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6744 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 8750 */;
import showShareActionSheet from "showShareActionSheet" /* 8931 */;
import SecureFramesUtils from "SecureFramesUtils" /* 9265 */;
import SecureFramesTracking from "SecureFramesTracking" /* 9268 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ChannelStore from "ChannelStore" /* 4863 */;
import UserStore from "UserStore" /* 1383 */;
import SecureFramesConstants from "SecureFramesConstants" /* 9266 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let c10;
let c9;
let closure_12;
let closure_15;
let closure_16;
let closure_4;
let hasOwnProperty;
let map1;
let metroImportAll;
let obj2;
let unpackModuleId;
({ ActivityIndicator: closure_4, View: hasOwnProperty } = react_native);
({ USER_VERIFICATION_CHUNK_SIZE: metroImportAll, USER_VERIFICATION_LENGTH: c9, USER_VERIFICATION_NUM_COLUMNS: c10, USER_VERIFIED_TOAST_KEY: unpackModuleId } = SecureFramesConstants);
({ AnalyticsLocations: closure_12, AnalyticsSections: map1 } = Constants);
const ANDROID_FOREGROUND_RIPPLE = FormConstants.ANDROID_FOREGROUND_RIPPLE;
({ jsx: closure_15, jsxs: closure_16 } = Fragment);
let obj = { container: obj2, footer: { flex: 1, gap: 16, justifyContent: "flex-end" }, footerText: { textAlign: "center" }, header: { height: 56, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }, subtitle: { textAlign: "center" }, code: { marginTop: 24 }, helpMessage: { marginBottom: 16 } };
obj2 = { flex: 1, padding: 16, flexDirection: "column", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
let closure_17 = createStyles.createStyles(obj);
let result = size.fileFinishedImporting("modules/rtc/native/SecureFramesUserVerificationModal.tsx");

export default function SecureFramesUserVerificationModal(userId) {
  let Text;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let items10;
  let items11;
  let items12;
  let items13;
  let items9;
  let obj15;
  let stringResult;
  let tmp22Result2;
  userId = userId.userId;
  const channelId = userId.channelId;
  let name;
  let isUserSecureFramesVerified;
  let isCurrentUserKeyPersistent;
  let isOtherUserKeyPersistent;
  let enabled;
  let tmp = closure_17();
  let obj = userId(name[10]);
  const items = [isCurrentUserKeyPersistent];
  const stateFromStores = obj.useStateFromStores(items, () => UserStore.getUser(userId));
  let obj2 = userId(name[10]);
  const items1 = [isUserSecureFramesVerified];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => {
    const channel = ChannelStore.getChannel(channelId);
    let guildId;
    if (channel != null) {
      guildId = channel.getGuildId();
    }
    return guildId;
  });
  let obj3 = channelId(name[11]);
  name = obj3.useName(stateFromStores1, null, stateFromStores);
  let obj4 = userId(name[12]);
  const secureFramesPairwiseFingerprint = obj4.useSecureFramesPairwiseFingerprint({ userId });
  const fingerprint = secureFramesPairwiseFingerprint.fingerprint;
  const fingerprintUserKey = secureFramesPairwiseFingerprint.fingerprintUserKey;
  let obj5 = userId(name[13]);
  const obj6 = { fingerprintBase64: fingerprint, chunkSize: isOtherUserKeyPersistent, desiredLength: enabled };
  const readableSecureFramesFingerprint = obj5.useReadableSecureFramesFingerprint(obj6);
  const obj7 = userId(name[14]);
  isUserSecureFramesVerified = obj7.useIsUserSecureFramesVerified({ userId, channelId, userKey: fingerprintUserKey });
  const obj8 = userId(name[15]);
  const isPersistentSecureFramesFingerprint = obj8.useIsPersistentSecureFramesFingerprint({ userId, userKey: fingerprintUserKey });
  isCurrentUserKeyPersistent = isPersistentSecureFramesFingerprint.isCurrentUserKeyPersistent;
  isOtherUserKeyPersistent = isPersistentSecureFramesFingerprint.isOtherUserKeyPersistent;
  const items2 = [channelId, fingerprintUserKey, isOtherUserKeyPersistent, name, userId];
  const loading = isPersistentSecureFramesFingerprint.loading;
  let callback = fingerprint.useCallback(() => {
    let intl;
    let obj3;
    if (null != fingerprintUserKey) {
      const obj = SecureFramesUtils;
      obj.addVerification(userId, fingerprintUserKey, isOtherUserKeyPersistent, channelId, authStore2.E2EE_USER_VERIFY_MODAL);
      const arr = ModalActionCreatorsDefault;
      arr.pop();
      const obj2 = { text: intl.formatToPlainString(intl8.t.Gwu134, obj3), variant: "success" };
      const open = ToastActionCreatorsDefault.open;
      ToastActionCreatorsDefault;
      intl = intl8.intl;
      obj3 = { username: name };
      open(unpackModuleId, obj2);
    }
  }, items2);
  const items3 = [fingerprintUserKey, isOtherUserKeyPersistent, userId];
  const callback1 = fingerprint.useCallback(() => {
    if (null != fingerprintUserKey) {
      const obj = SecureFramesUtils;
      obj.deleteVerification(userId, tmp, isOtherUserKeyPersistent);
      const arr = ModalActionCreatorsDefault;
      arr.pop();
    }
  }, items3);
  const obj9 = userId(name[20]);
  enabled = obj9.useSecureFramesDeeplinkExperiment({ location: "SecureFramesUserVerificationModal" }).enabled;
  const items4 = [channelId, readableSecureFramesFingerprint, fingerprint, enabled, userId];
  const callback2 = fingerprint.useCallback(() => {
    if (null != fingerprint) {
      const obj4 = readableSecureFramesFingerprint;
      if (null != readableSecureFramesFingerprint) {
        let userVerificationDeeplink;
        const arr = ModalActionCreatorsDefault;
        arr.pop();
        const obj = { userId, channelId };
        const obj5 = SecureFramesTracking;
        const result = obj5.trackE2EEUserVerificationShareClicked(obj);
        const tmp12 = enabled;
        const tmp9 = userId;
        if (tmp12) {
          const tmp8Result = SecureFramesUtils;
          userVerificationDeeplink = tmp8Result.getUserVerificationDeeplink(tmp9, tmp);
        } else {
          userVerificationDeeplink = obj4.join(" ");
        }
        const obj2 = { message: userVerificationDeeplink };
        const tmp8Result2 = showShareActionSheet;
        tmp8Result2.showShareActionSheet(obj2, map1.SECURE_FRAMES_VOICE_BOTTOM_SHEET);
      }
    }
  }, items4);
  const analyticsLocations = channelId(name[23])().analyticsLocations;
  const items5 = [analyticsLocations, channelId, userId];
  const callback3 = fingerprint.useCallback(() => {
    const arr = ModalActionCreatorsDefault;
    arr.pop();
    const obj = { userId, channelId, isVoiceContext: true, sourceAnalyticsLocations: analyticsLocations };
    showUserProfileActionSheetDefault(obj);
  }, items5);
  const obj10 = userId(name[25]);
  const obj11 = { channelId, userId, nickname: name, onAlertOpen: channelId(name[17]).pop };
  const alertIfSecureFramesKeyInconsistent = obj10.useAlertIfSecureFramesKeyInconsistent(obj11);
  const items6 = [isUserSecureFramesVerified];
  const memo = fingerprint.useMemo(() => {
    let intl;
    let obj;
    let obj3;
    const tmp = isUserSecureFramesVerified;
    if (tmp) {
      const obj2 = { type: obj3, variant: "primary" };
      obj3 = { text: intl.string(intl8.t.UNUuem) };
      intl = intl8.intl;
      obj = obj2;
    } else {
      obj = { type: "new", variant: "notification" };
    }
    return obj;
  }, items6);
  const items7 = [isCurrentUserKeyPersistent, isOtherUserKeyPersistent, name];
  const items8 = [channelId, userId];
  const memo1 = fingerprint.useMemo(() => {
    const obj = SecureFramesUtils;
    const obj2 = { isCurrentUserKeyPersistent, isOtherUserKeyPersistent, otherUserNickname: name };
    return obj.getUserVerificationFooterText(obj2);
  }, items7);
  const effect = fingerprint.useEffect(() => {
    const obj = SecureFramesTracking;
    const obj2 = { userId, channelId };
    const result = obj.trackE2EEUserVerificationViewed(obj2);
  }, items8);
  const rect = { top: true, bottom: true, style: tmp.container, children: items10 };
  const obj12 = { style: tmp.header, children: items9 };
  const SafeAreaPaddingView = userId(name[26]).SafeAreaPaddingView;
  const obj13 = { accessibilityRole: "button", accessibilityLabel: intl.string(userId(name[19]).t.cpT0Cq), androidRippleConfig: ANDROID_FOREGROUND_RIPPLE, hitSlop: 8, onPress: callback3, children: closure_15(userId(name[28]).ArrowLargeLeftIcon, { size: "md" }) };
  const PressableOpacity = userId(name[27]).PressableOpacity;
  intl = userId(name[19]).intl;
  items9 = [closure_15(PressableOpacity, obj13), ];
  let tmp22Result = null != fingerprint && null != readableSecureFramesFingerprint;
  const tmp23 = ANDROID_FOREGROUND_RIPPLE;
  if (tmp22Result) {
    const obj14 = { accessibilityRole: "button", accessibilityLabel: intl2.string(userId(name[19]).t.RDE0Sc), androidRippleConfig: tmp23, hitSlop: 8, onPress: callback2, children: closure_15(Text, obj15) };
    const PressableOpacity2 = tmp2(tmp3[27]).PressableOpacity;
    intl2 = tmp2(tmp3[19]).intl;
    obj15 = { variant: "text-md/semibold", color: "text-brand", children: intl3.string(userId(name[19]).t.RDE0Sc) };
    Text = tmp2(tmp3[29]).Text;
    intl3 = tmp2(tmp3[19]).intl;
    tmp22Result = tmp22(PressableOpacity2, obj14);
  }
  items9[1] = tmp22Result;
  items10 = [closure_16(readableSecureFramesFingerprint, obj12), , , ];
  const obj16 = { spacing: 8, justify: "center", align: "center", direction: "vertical", children: items11 };
  const Stack = tmp2(tmp3[30]).Stack;
  const obj17 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", children: intl4.string(userId(name[19]).t["/WPGnF"]) };
  const Text2 = tmp2(tmp3[29]).Text;
  intl4 = tmp2(tmp3[19]).intl;
  items11 = [closure_15(Text2, obj17), ];
  const obj18 = { style: tmp.subtitle, variant: "text-md/medium", color: "text-default", children: intl5.format(userId(name[19]).t.oc2kce, { username: name }) };
  const Text3 = tmp2(tmp3[29]).Text;
  intl5 = tmp2(tmp3[19]).intl;
  items11[1] = closure_15(Text3, obj18);
  items10[1] = closure_16(Stack, obj16);
  const obj19 = { style: tmp.code, children: items12 };
  items12 = [, ];
  const obj20 = { style: tmp.helpMessage, userId, userKey: fingerprintUserKey };
  items12[0] = closure_15(channelId(name[31]), obj20);
  const obj21 = { title: intl6.string(userId(name[19]).t["/WPGnF"]), chunks: readableSecureFramesFingerprint, columns: analyticsLocations, trailing: tmp22Result2 };
  const tmp6Result = channelId(name[32]);
  intl6 = tmp2(tmp3[19]).intl;
  if (null == readableSecureFramesFingerprint) {
    tmp22Result2 = tmp22(fingerprintUserKey, {});
  } else {
    const obj22 = {};
    const Badge = tmp2(tmp3[33]).Badge;
    const merged = Object.assign(memo);
    tmp22Result2 = tmp22(Badge, obj22);
  }
  items12[1] = closure_15(tmp6Result, obj21);
  items10[2] = closure_16(readableSecureFramesFingerprint, obj19);
  const obj23 = { style: tmp.footer, children: items13 };
  items13 = [, ];
  const obj24 = { style: tmp.footerText, variant: "text-xs/normal", color: "text-default", children: memo1 };
  items13[0] = closure_15(userId(name[29]).Text, obj24);
  let tmp31 = null == readableSecureFramesFingerprint;
  const Button = tmp2(tmp3[34]).Button;
  if (!tmp31) {
    tmp31 = loading;
  }
  const obj25 = { disabled: tmp31, variant: "primary", onPress: callback, text: stringResult };
  if (isUserSecureFramesVerified) {
    callback = callback1;
  }
  const intl7 = tmp2(tmp3[19]).intl;
  const string = intl7.string;
  const t = tmp2(tmp3[19]).t;
  if (isUserSecureFramesVerified) {
    stringResult = string(t["Osb+/n"]);
  } else {
    stringResult = string(t["0tvNAn"]);
  }
  items13[1] = closure_15(Button, obj25);
  items10[3] = closure_16(readableSecureFramesFingerprint, obj23);
  return closure_16(SafeAreaPaddingView, rect);
};
