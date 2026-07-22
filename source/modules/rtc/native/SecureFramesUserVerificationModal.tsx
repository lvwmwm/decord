// Module ID: 8895
// Function ID: 70213
// Name: SecureFramesUserVerificationModal
// Dependencies: []
// Exports: default

// Module 8895 (SecureFramesUserVerificationModal)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
({ ActivityIndicator: closure_5, View: closure_6 } = arg1(dependencyMap[2]));
let closure_7 = importDefault(dependencyMap[3]);
let closure_8 = importDefault(dependencyMap[4]);
const tmp2 = arg1(dependencyMap[2]);
({ USER_VERIFICATION_CHUNK_SIZE: closure_9, USER_VERIFICATION_LENGTH: closure_10, USER_VERIFICATION_NUM_COLUMNS: closure_11, USER_VERIFIED_TOAST_KEY: closure_12 } = arg1(dependencyMap[5]));
const tmp3 = arg1(dependencyMap[5]);
({ AnalyticsLocations: closure_13, AnalyticsSections: closure_14 } = arg1(dependencyMap[6]));
const ANDROID_FOREGROUND_RIPPLE = arg1(dependencyMap[7]).ANDROID_FOREGROUND_RIPPLE;
const tmp4 = arg1(dependencyMap[6]);
({ jsx: closure_16, jsxs: closure_17 } = arg1(dependencyMap[8]));
let obj = arg1(dependencyMap[9]);
obj = {};
obj = { "Bool(false)": "vertical", "Bool(false)": false, "Bool(false)": false, backgroundColor: importDefault(dependencyMap[10]).colors.BACKGROUND_BASE_LOW };
obj.container = obj;
obj.footer = {};
obj.footerText = { textAlign: "center" };
obj.header = {};
obj.subtitle = { textAlign: "center" };
obj.code = { marginTop: 24 };
obj.helpMessage = { marginBottom: 16 };
let closure_18 = obj.createStyles(obj);
const tmp5 = arg1(dependencyMap[8]);
const result = arg1(dependencyMap[37]).fileFinishedImporting("modules/rtc/native/SecureFramesUserVerificationModal.tsx");

export default function SecureFramesUserVerificationModal(userId) {
  let tmp15;
  let tmp16;
  userId = userId.userId;
  const arg1 = userId;
  const channelId = userId.channelId;
  const importDefault = channelId;
  const tmp = callback4();
  let obj = arg1(dependencyMap[11]);
  const items = [closure_8];
  const stateFromStores = obj.useStateFromStores(items, () => isOtherUserKeyPersistent.getUser(userId));
  let obj1 = arg1(dependencyMap[11]);
  const items1 = [closure_7];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => {
    const channel = isCurrentUserKeyPersistent.getChannel(channelId);
    let guildId;
    if (null != channel) {
      guildId = channel.getGuildId();
    }
    return guildId;
  });
  let obj2 = importDefault(dependencyMap[12]);
  const name = obj2.useName(stateFromStores1, null, stateFromStores);
  const dependencyMap = name;
  let obj3 = arg1(dependencyMap[13]);
  const secureFramesPairwiseFingerprint = obj3.useSecureFramesPairwiseFingerprint({ userId });
  const fingerprint = secureFramesPairwiseFingerprint.fingerprint;
  let callback = fingerprint;
  const userKey = secureFramesPairwiseFingerprint.userKey;
  const React = userKey;
  let obj4 = arg1(dependencyMap[14]);
  obj = { fingerprintBase64: fingerprint, chunkSize: enabled, desiredLength: analyticsLocations };
  const readableSecureFramesFingerprint = obj4.useReadableSecureFramesFingerprint(obj);
  let obj6 = arg1(dependencyMap[15]);
  const isUserSecureFramesVerified = obj6.useIsUserSecureFramesVerified({ userId, channelId });
  let obj7 = arg1(dependencyMap[16]);
  const isPersistentSecureFramesFingerprint = obj7.useIsPersistentSecureFramesFingerprint({ userId });
  const isCurrentUserKeyPersistent = isPersistentSecureFramesFingerprint.isCurrentUserKeyPersistent;
  closure_7 = isCurrentUserKeyPersistent;
  const isOtherUserKeyPersistent = isPersistentSecureFramesFingerprint.isOtherUserKeyPersistent;
  closure_8 = isOtherUserKeyPersistent;
  const items2 = [channelId, userKey, isOtherUserKeyPersistent, name, userId];
  callback = React.useCallback(() => {
    if (null != userKey) {
      let obj = userId(name[17]);
      obj.addVerification(userId, userKey, isOtherUserKeyPersistent, channelId, obj.E2EE_USER_VERIFY_MODAL);
      let arr = channelId(name[18]);
      arr = arr.pop();
      obj = { key: closure_12, iconColor: "text-feedback-positive", IconComponent: userId(name[20]).CircleCheckIcon };
      const intl = userId(name[21]).intl;
      obj = { username: name };
      obj.content = intl.formatToPlainString(userId(name[21]).t.Gwu134, obj);
      channelId(name[19]).open(obj);
      const obj2 = channelId(name[19]);
    }
  }, items2);
  const items3 = [userKey, isOtherUserKeyPersistent, userId];
  const callback1 = React.useCallback(() => {
    if (null != userKey) {
      userId(name[17]).deleteVerification(userId, userKey, isOtherUserKeyPersistent);
      let arr = channelId(name[18]);
      arr = arr.pop();
      const obj = userId(name[17]);
    }
  }, items3);
  let obj8 = arg1(dependencyMap[22]);
  const enabled = obj8.useSecureFramesDeeplinkExperiment({ location: "SecureFramesUserVerificationModal" }).enabled;
  const items4 = [channelId, readableSecureFramesFingerprint, fingerprint, enabled, userId];
  const callback2 = React.useCallback(() => {
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
        tmp9.showShareActionSheet(obj, constants.SECURE_FRAMES_VOICE_BOTTOM_SHEET);
        const obj3 = userId(name[23]);
      }
    }
  }, items4);
  const analyticsLocations = importDefault(dependencyMap[25])().analyticsLocations;
  const items5 = [analyticsLocations, channelId, userId];
  const callback3 = React.useCallback(() => {
    let arr = channelId(name[18]);
    arr = arr.pop();
    channelId(name[26])({ userId, channelId, isVoiceContext: true, sourceAnalyticsLocations: analyticsLocations });
  }, items5);
  let obj9 = arg1(dependencyMap[27]);
  obj = { channelId, userId, nickname: name, onAlertOpen: importDefault(dependencyMap[18]).pop };
  const alertIfSecureFramesKeyInconsistent = obj9.useAlertIfSecureFramesKeyInconsistent(obj);
  const items6 = [isUserSecureFramesVerified];
  const items7 = [isCurrentUserKeyPersistent, isOtherUserKeyPersistent, name];
  [tmp15, tmp16] = callback(React.useMemo(() => {
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
  const memo = React.useMemo(() => {
    let obj = userId(name[17]);
    obj = { isCurrentUserKeyPersistent, isOtherUserKeyPersistent, otherUserNickname: name };
    return obj.getUserVerificationFooterText(obj);
  }, items7);
  const effect = React.useEffect(() => {
    let obj = userId(name[23]);
    obj = { userId, channelId };
    const result = obj.trackE2EEUserVerificationViewed(obj);
  }, items8);
  obj1 = { "Null": null, "Null": null, style: tmp.container };
  obj2 = { style: tmp.header };
  obj3 = { accessibilityRole: "button" };
  const intl = arg1(dependencyMap[21]).intl;
  obj3.accessibilityLabel = intl.string(arg1(dependencyMap[21]).t.cpT0Cq);
  obj3.androidRippleConfig = ANDROID_FOREGROUND_RIPPLE;
  obj3.hitSlop = 8;
  obj3.onPress = callback3;
  obj3.children = callback2(arg1(dependencyMap[31]).ArrowLargeLeftIcon, { size: "md" });
  const items9 = [callback2(arg1(dependencyMap[30]).PressableOpacity, obj3), ];
  let tmp21 = null != fingerprint && null != readableSecureFramesFingerprint;
  if (tmp21) {
    obj4 = { accessibilityRole: "button" };
    const intl2 = arg1(dependencyMap[21]).intl;
    obj4.accessibilityLabel = intl2.string(arg1(dependencyMap[21]).t.RDE0Sc);
    obj4.androidRippleConfig = ANDROID_FOREGROUND_RIPPLE;
    obj4.hitSlop = 8;
    obj4.onPress = callback2;
    const obj5 = { cachedAt: true, edpbxy: true };
    const intl3 = arg1(dependencyMap[21]).intl;
    obj5.children = intl3.string(arg1(dependencyMap[21]).t.RDE0Sc);
    obj4.children = callback2(arg1(dependencyMap[32]).Text, obj5);
    tmp21 = callback2(arg1(dependencyMap[30]).PressableOpacity, obj4);
  }
  items9[1] = tmp21;
  obj2.children = items9;
  const items10 = [callback3(isUserSecureFramesVerified, obj2), , , ];
  obj6 = { resizeMode: true, alignSelf: true, borderRadius: true, maxWidth: true };
  obj7 = { cachedAt: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000011454504407100313, edpbxy: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004026493667951817 };
  const intl4 = arg1(dependencyMap[21]).intl;
  obj7.children = intl4.string(arg1(dependencyMap[21]).t./WPGnF);
  const items11 = [callback2(arg1(dependencyMap[32]).Text, obj7), ];
  obj8 = { style: tmp.subtitle };
  const intl5 = arg1(dependencyMap[21]).intl;
  obj8.children = intl5.format(arg1(dependencyMap[21]).t.oc2kce, { username: name });
  items11[1] = callback2(arg1(dependencyMap[32]).Text, obj8);
  obj6.children = items11;
  items10[1] = callback3(arg1(dependencyMap[33]).Stack, obj6);
  obj9 = { style: tmp.code };
  const items12 = [callback2(importDefault(dependencyMap[34]), { style: tmp.helpMessage, userId, userKey }), ];
  const obj11 = {};
  const obj10 = { style: tmp.helpMessage, userId, userKey };
  const tmp14 = callback(React.useMemo(() => {
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
  const tmp26 = callback3;
  const tmp27 = callback2;
  const tmp28 = isUserSecureFramesVerified;
  const intl6 = arg1(dependencyMap[21]).intl;
  obj11.title = intl6.string(arg1(dependencyMap[21]).t./WPGnF);
  obj11.chunks = readableSecureFramesFingerprint;
  obj11.columns = closure_11;
  if (null == readableSecureFramesFingerprint) {
    let tmp33 = callback2(readableSecureFramesFingerprint, {});
  } else {
    const obj12 = { color: tmp16, text: tmp15 };
    tmp33 = callback2(arg1(dependencyMap[28]).TextBadge, obj12);
  }
  obj11.trailing = tmp33;
  items12[1] = tmp27(importDefault(dependencyMap[35]), obj11);
  obj9.children = items12;
  items10[2] = tmp26(tmp28, obj9);
  const obj13 = { style: tmp.footer };
  const obj14 = { "Null": 24, "Null": 24, alignItems: null, style: tmp.footerText, children: memo };
  const items13 = [callback2(arg1(dependencyMap[32]).Text, obj14), ];
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
  const intl7 = arg1(dependencyMap[21]).intl;
  const string = intl7.string;
  const t = arg1(dependencyMap[21]).t;
  if (isUserSecureFramesVerified) {
    let stringResult = string(t.Osb+/n);
  } else {
    stringResult = string(t.0tvNAn);
  }
  obj15.text = stringResult;
  items13[1] = callback2(arg1(dependencyMap[36]).Button, obj15);
  obj13.children = items13;
  items10[3] = callback3(isUserSecureFramesVerified, obj13);
  obj1.children = items10;
  return callback3(arg1(dependencyMap[29]).SafeAreaPaddingView, obj1);
};
