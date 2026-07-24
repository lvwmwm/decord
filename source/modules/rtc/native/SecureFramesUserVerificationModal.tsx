// Module ID: 8941
// Function ID: 70469
// Name: SecureFramesUserVerificationModal
// Dependencies: [57, 31, 27, 1348, 1849, 8938, 653, 1277, 33, 4130, 689, 566, 4319, 8942, 8943, 8917, 8944, 8936, 4337, 3831, 4091, 1212, 8945, 8946, 8376, 5462, 8537, 8947, 1273, 5121, 4660, 5091, 4126, 4541, 8948, 8950, 4543, 2]
// Exports: default

// Module 8941 (SecureFramesUserVerificationModal)
import _slicedToArray from "_slicedToArray";
import ArrowLargeLeftIcon from "ArrowLargeLeftIcon";
import get_ActivityIndicator from "useIsSecureFramesKeyInconsistent";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import SECURE_FRAMES_LINKING_BOTTOM_SHEET_KEY from "SECURE_FRAMES_LINKING_BOTTOM_SHEET_KEY";
import ME from "ME";
import { ANDROID_FOREGROUND_RIPPLE } from "semanticColor";
import jsxProd from "Stack";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_12;
let closure_13;
let closure_14;
let closure_16;
let closure_17;
let closure_5;
let closure_6;
let closure_9;
const require = arg1;
({ ActivityIndicator: closure_5, View: closure_6 } = get_ActivityIndicator);
({ USER_VERIFICATION_CHUNK_SIZE: closure_9, USER_VERIFICATION_LENGTH: closure_10, USER_VERIFICATION_NUM_COLUMNS: closure_11, USER_VERIFIED_TOAST_KEY: closure_12 } = SECURE_FRAMES_LINKING_BOTTOM_SHEET_KEY);
({ AnalyticsLocations: closure_13, AnalyticsSections: closure_14 } = ME);
({ jsx: closure_16, jsxs: closure_17 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { flex: 1, padding: 16, flexDirection: "column", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.footer = { flex: 1, gap: 16, justifyContent: "flex-end" };
_createForOfIteratorHelperLoose.footerText = { textAlign: "center" };
_createForOfIteratorHelperLoose.header = { height: 56, flexDirection: "row", alignItems: "center", justifyContent: "space-between" };
_createForOfIteratorHelperLoose.subtitle = { textAlign: "center" };
_createForOfIteratorHelperLoose.code = { marginTop: 24 };
_createForOfIteratorHelperLoose.helpMessage = { marginBottom: 16 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let result = require("get ActivityIndicator").fileFinishedImporting("modules/rtc/native/SecureFramesUserVerificationModal.tsx");

export default function SecureFramesUserVerificationModal(userId) {
  let tmp15;
  let tmp16;
  userId = userId.userId;
  const channelId = userId.channelId;
  const tmp = _createForOfIteratorHelperLoose();
  let obj = userId(name[11]);
  let items = [isOtherUserKeyPersistent];
  const stateFromStores = obj.useStateFromStores(items, () => isOtherUserKeyPersistent.getUser(userId));
  let obj1 = userId(name[11]);
  let items1 = [isCurrentUserKeyPersistent];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => {
    const channel = isCurrentUserKeyPersistent.getChannel(channelId);
    let guildId;
    if (null != channel) {
      guildId = channel.getGuildId();
    }
    return guildId;
  });
  let obj2 = channelId(name[12]);
  name = obj2.useName(stateFromStores1, null, stateFromStores);
  let obj3 = userId(name[13]);
  const secureFramesPairwiseFingerprint = obj3.useSecureFramesPairwiseFingerprint({ userId });
  const fingerprint = secureFramesPairwiseFingerprint.fingerprint;
  const userKey = secureFramesPairwiseFingerprint.userKey;
  let obj4 = userId(name[14]);
  obj = { fingerprintBase64: fingerprint, chunkSize: enabled, desiredLength: analyticsLocations };
  const readableSecureFramesFingerprint = obj4.useReadableSecureFramesFingerprint(obj);
  let obj6 = userId(name[15]);
  const isUserSecureFramesVerified = obj6.useIsUserSecureFramesVerified({ userId, channelId });
  let obj7 = userId(name[16]);
  const isPersistentSecureFramesFingerprint = obj7.useIsPersistentSecureFramesFingerprint({ userId });
  isCurrentUserKeyPersistent = isPersistentSecureFramesFingerprint.isCurrentUserKeyPersistent;
  isOtherUserKeyPersistent = isPersistentSecureFramesFingerprint.isOtherUserKeyPersistent;
  const items2 = [channelId, userKey, isOtherUserKeyPersistent, name, userId];
  let callback = userKey.useCallback(() => {
    if (null != userKey) {
      let obj = userId(name[17]);
      obj.addVerification(userId, userKey, isOtherUserKeyPersistent, channelId, outer1_13.E2EE_USER_VERIFY_MODAL);
      let arr = channelId(name[18]);
      arr = arr.pop();
      obj = { key: outer1_12, iconColor: "text-feedback-positive", IconComponent: userId(name[20]).CircleCheckIcon };
      const intl = userId(name[21]).intl;
      obj = { username: name };
      obj.content = intl.formatToPlainString(userId(name[21]).t.Gwu134, obj);
      channelId(name[19]).open(obj);
      const obj2 = channelId(name[19]);
    }
  }, items2);
  const items3 = [userKey, isOtherUserKeyPersistent, userId];
  const callback1 = userKey.useCallback(() => {
    if (null != userKey) {
      userId(name[17]).deleteVerification(userId, userKey, isOtherUserKeyPersistent);
      let arr = channelId(name[18]);
      arr = arr.pop();
      const obj = userId(name[17]);
    }
  }, items3);
  let obj8 = userId(name[22]);
  enabled = obj8.useSecureFramesDeeplinkExperiment({ location: "SecureFramesUserVerificationModal" }).enabled;
  const items4 = [channelId, readableSecureFramesFingerprint, fingerprint, enabled, userId];
  const callback2 = userKey.useCallback(() => {
    if (null != fingerprint) {
      if (null != readableSecureFramesFingerprint) {
        let tmp9;
        let arr = channelId(name[18]);
        arr = arr.pop();
        let obj = { userId, channelId };
        const result = userId(name[23]).trackE2EEUserVerificationShareClicked(obj);
        if (enabled) {
          obj = userId(name[17]);
          let userVerificationDeeplink = obj.getUserVerificationDeeplink(userId, fingerprint);
        } else {
          userVerificationDeeplink = readableSecureFramesFingerprint.join(" ");
        }
        tmp9 = userId(name[24]);
        obj = { message: userVerificationDeeplink };
        tmp9.showShareActionSheet(obj, outer1_14.SECURE_FRAMES_VOICE_BOTTOM_SHEET);
        const obj3 = userId(name[23]);
      }
    }
  }, items4);
  analyticsLocations = channelId(name[25])().analyticsLocations;
  const items5 = [analyticsLocations, channelId, userId];
  const callback3 = userKey.useCallback(() => {
    let arr = channelId(name[18]);
    arr = arr.pop();
    channelId(name[26])({ userId, channelId, isVoiceContext: true, sourceAnalyticsLocations: analyticsLocations });
  }, items5);
  let obj9 = userId(name[27]);
  obj = { channelId, userId, nickname: name, onAlertOpen: channelId(name[18]).pop };
  const alertIfSecureFramesKeyInconsistent = obj9.useAlertIfSecureFramesKeyInconsistent(obj);
  const items6 = [isUserSecureFramesVerified];
  const items7 = [isCurrentUserKeyPersistent, isOtherUserKeyPersistent, name];
  [tmp15, tmp16] = fingerprint(userKey.useMemo(() => {
    const intl = userId(name[21]).intl;
    const string = intl.string;
    const t = userId(name[21]).t;
    if (isUserSecureFramesVerified) {
      const items = [string(t.UNUuem), tmp(tmp2[28]).BadgeColors.INFO];
      let items1 = items;
    } else {
      items1 = [string(t.y2b7CA), tmp(tmp2[28]).BadgeColors.DANGER];
    }
    return items1;
  }, items6), 2);
  const items8 = [channelId, userId];
  const memo = userKey.useMemo(() => {
    let obj = userId(name[17]);
    obj = { isCurrentUserKeyPersistent, isOtherUserKeyPersistent, otherUserNickname: name };
    return obj.getUserVerificationFooterText(obj);
  }, items7);
  const effect = userKey.useEffect(() => {
    let obj = userId(name[23]);
    obj = { userId, channelId };
    const result = obj.trackE2EEUserVerificationViewed(obj);
  }, items8);
  obj1 = { top: true, bottom: true, style: tmp.container };
  obj2 = { style: tmp.header };
  obj3 = { accessibilityRole: "button" };
  let intl = userId(name[21]).intl;
  obj3.accessibilityLabel = intl.string(userId(name[21]).t.cpT0Cq);
  obj3.androidRippleConfig = ANDROID_FOREGROUND_RIPPLE;
  obj3.hitSlop = 8;
  obj3.onPress = callback3;
  obj3.children = callback(userId(name[31]).ArrowLargeLeftIcon, { size: "md" });
  const items9 = [callback(userId(name[30]).PressableOpacity, obj3), ];
  let tmp21 = null != fingerprint && null != readableSecureFramesFingerprint;
  if (tmp21) {
    obj4 = { accessibilityRole: "button" };
    const intl2 = userId(name[21]).intl;
    obj4.accessibilityLabel = intl2.string(userId(name[21]).t.RDE0Sc);
    obj4.androidRippleConfig = ANDROID_FOREGROUND_RIPPLE;
    obj4.hitSlop = 8;
    obj4.onPress = callback2;
    const obj5 = { variant: "text-md/semibold", color: "text-brand" };
    const intl3 = userId(name[21]).intl;
    obj5.children = intl3.string(userId(name[21]).t.RDE0Sc);
    obj4.children = callback(userId(name[32]).Text, obj5);
    tmp21 = callback(userId(name[30]).PressableOpacity, obj4);
  }
  items9[1] = tmp21;
  obj2.children = items9;
  const items10 = [callback2(isUserSecureFramesVerified, obj2), , , ];
  obj6 = { spacing: 8, justify: "center", align: "center", direction: "vertical" };
  obj7 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary" };
  const intl4 = userId(name[21]).intl;
  obj7.children = intl4.string(userId(name[21]).t["/WPGnF"]);
  const items11 = [callback(userId(name[32]).Text, obj7), ];
  obj8 = { style: tmp.subtitle, variant: "text-md/medium", color: "text-default" };
  const intl5 = userId(name[21]).intl;
  obj8.children = intl5.format(userId(name[21]).t.oc2kce, { username: name });
  items11[1] = callback(userId(name[32]).Text, obj8);
  obj6.children = items11;
  items10[1] = callback2(userId(name[33]).Stack, obj6);
  obj9 = { style: tmp.code };
  const items12 = [callback(channelId(name[34]), { style: tmp.helpMessage, userId, userKey }), ];
  const obj11 = {};
  const obj10 = { style: tmp.helpMessage, userId, userKey };
  const tmp14 = fingerprint(userKey.useMemo(() => {
    const intl = userId(name[21]).intl;
    const string = intl.string;
    const t = userId(name[21]).t;
    if (isUserSecureFramesVerified) {
      const items = [string(t.UNUuem), tmp(tmp2[28]).BadgeColors.INFO];
      let items1 = items;
    } else {
      items1 = [string(t.y2b7CA), tmp(tmp2[28]).BadgeColors.DANGER];
    }
    return items1;
  }, items6), 2);
  const tmp20 = isUserSecureFramesVerified;
  const tmp26 = callback2;
  const tmp27 = callback;
  const tmp28 = isUserSecureFramesVerified;
  const intl6 = userId(name[21]).intl;
  obj11.title = intl6.string(userId(name[21]).t["/WPGnF"]);
  obj11.chunks = readableSecureFramesFingerprint;
  obj11.columns = closure_11;
  if (null == readableSecureFramesFingerprint) {
    let tmp33 = callback(readableSecureFramesFingerprint, {});
  } else {
    const obj12 = { color: tmp16, text: tmp15 };
    tmp33 = callback(userId(name[28]).TextBadge, obj12);
  }
  obj11.trailing = tmp33;
  items12[1] = tmp27(channelId(name[35]), obj11);
  obj9.children = items12;
  items10[2] = tmp26(tmp28, obj9);
  const obj13 = { style: tmp.footer };
  const obj14 = { style: tmp.footerText, variant: "text-xs/normal", color: "text-default", children: memo };
  const items13 = [callback(userId(name[32]).Text, obj14), ];
  const obj15 = {};
  let loading = null == readableSecureFramesFingerprint;
  if (!loading) {
    loading = isPersistentSecureFramesFingerprint.loading;
  }
  obj15.disabled = loading;
  obj15.variant = "primary";
  if (isUserSecureFramesVerified) {
    callback = callback1;
  }
  obj15.onPress = callback;
  const intl7 = userId(name[21]).intl;
  let string = intl7.string;
  let t = userId(name[21]).t;
  if (isUserSecureFramesVerified) {
    let stringResult = string(t["Osb+/n"]);
  } else {
    stringResult = string(t["0tvNAn"]);
  }
  obj15.text = stringResult;
  items13[1] = callback(userId(name[36]).Button, obj15);
  obj13.children = items13;
  items10[3] = callback2(isUserSecureFramesVerified, obj13);
  obj1.children = items10;
  return callback2(userId(name[29]).SafeAreaPaddingView, obj1);
};
