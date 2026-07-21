// Module ID: 8907
// Function ID: 70276
// Name: SecureFramesUserVerificationBottomSheet
// Dependencies: []
// Exports: default

// Module 8907 (SecureFramesUserVerificationBottomSheet)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
({ ActivityIndicator: closure_5, View: closure_6 } = arg1(dependencyMap[2]));
let closure_7 = importDefault(dependencyMap[3]);
let closure_8 = importDefault(dependencyMap[4]);
const tmp2 = arg1(dependencyMap[2]);
({ AnalyticsSecureFramesUserVerification: closure_9, SECURE_FRAMES_PUBLIC_KEY_VERSION: closure_10, USER_VERIFIED_TOAST_KEY: closure_11 } = arg1(dependencyMap[5]));
const AnalyticsLocations = arg1(dependencyMap[6]).AnalyticsLocations;
const tmp3 = arg1(dependencyMap[5]);
({ jsx: closure_13, jsxs: closure_14 } = arg1(dependencyMap[7]));
let obj = arg1(dependencyMap[8]);
obj = {};
obj = { integrationType: "337f717407aa04f32bdedf504de7310b", useIsUserSecureFramesVerified: "emoji", GET_SOUNDBOARD_SOUNDS: "png", handleSystemJoinMessageReplies: true, useIsActivitiesEnabledForCurrentPlatform: "/assets/modules/premium/native/images/perks", HAPPENING_NOW_CARD_WIDTH_NORMAL_WITH_MARGIN: 300, <string:4266785696>: 175, backgroundColor: importDefault(dependencyMap[9]).colors.BACKGROUND_MOD_STRONG };
obj.iconContainer = obj;
obj.icon = { <string:1632221346>: null, <string:2722977214>: null };
obj.content = {};
obj.subtitle = { <string:4221627596>: true, <string:1359674961>: true, <string:4183987831>: true };
obj.buttons = { marginTop: 40 };
obj.helpMessage = { marginTop: 16 };
let closure_15 = obj.createStyles(obj);
const tmp4 = arg1(dependencyMap[7]);
const result = arg1(dependencyMap[33]).fileFinishedImporting("modules/rtc/native/SecureFramesUserVerificationBottomSheet.tsx");

export default function SecureFramesUserVerificationBottomSheet(userId) {
  let tmp14;
  let tmp15;
  userId = userId.userId;
  const arg1 = userId;
  const channelId = userId.channelId;
  const importDefault = channelId;
  const fingerprint = userId.fingerprint;
  const dependencyMap = fingerprint;
  const tmp = callback2();
  let callback = tmp;
  let obj = arg1(dependencyMap[10]);
  const secureFramesPairwiseFingerprint = obj.useSecureFramesPairwiseFingerprint({ userId });
  const userKey = secureFramesPairwiseFingerprint.userKey;
  const React = userKey;
  const fingerprint2 = secureFramesPairwiseFingerprint.fingerprint;
  let obj1 = arg1(dependencyMap[11]);
  const isSecureFramesUIEnabled = obj1.useIsSecureFramesUIEnabled({ channelId });
  let obj2 = arg1(dependencyMap[12]);
  const isUserSecureFramesVerified = obj2.useIsUserSecureFramesVerified({ userId, channelId });
  let closure_7 = isUserSecureFramesVerified;
  let obj3 = arg1(dependencyMap[13]);
  const isPersistentSecureFramesFingerprint = obj3.useIsPersistentSecureFramesFingerprint({ userId });
  const isOtherUserKeyPersistent = isPersistentSecureFramesFingerprint.isOtherUserKeyPersistent;
  let closure_8 = isOtherUserKeyPersistent;
  let loading = isPersistentSecureFramesFingerprint.loading;
  let obj4 = arg1(dependencyMap[14]);
  const items = [closure_7];
  const stateFromStores = obj4.useStateFromStores(items, () => isUserSecureFramesVerified.isConnected());
  let obj5 = arg1(dependencyMap[14]);
  const items1 = [closure_7];
  const stateFromStores1 = obj5.useStateFromStores(items1, () => isUserSecureFramesVerified.isUserConnected(userId));
  let obj6 = arg1(dependencyMap[15]);
  const isSecureFramesKeyInconsistent = obj6.useIsSecureFramesKeyInconsistent({ userId });
  const items2 = [fingerprint, channelId, fingerprint2, stateFromStores, isSecureFramesKeyInconsistent, stateFromStores1, isSecureFramesUIEnabled, isUserSecureFramesVerified];
  const memo = React.useMemo(() => {
    if (null != channelId) {
      if (stateFromStores) {
        if (!stateFromStores1) {
          const OTHER_USER_DISCONNECTED = stateFromStores.OTHER_USER_DISCONNECTED;
        }
        if (!isSecureFramesUIEnabled) {
          const UNABLE_TO_VERIFY = stateFromStores.UNABLE_TO_VERIFY;
        }
        if (isUserSecureFramesVerified) {
          let MATCH = stateFromStores.OTHER_USER_ALREADY_VERIFIED;
        } else if (isSecureFramesKeyInconsistent) {
          MATCH = stateFromStores.OTHER_USER_INCONSISTENT_KEYS;
        } else if (fingerprint !== fingerprint2) {
          MATCH = stateFromStores.FINGERPRINT_MISMATCH;
        } else {
          MATCH = stateFromStores.MATCH;
        }
      }
    }
    return stateFromStores.CURRENT_USER_DISCONNECTED;
  }, items2);
  const AnalyticsLocations = memo;
  const items3 = [userId];
  const effect = React.useEffect(() => {
    const user = userId(fingerprint[16]).getUser(userId);
  }, items3);
  let obj7 = arg1(dependencyMap[14]);
  const items4 = [closure_8];
  const stateFromStores2 = obj7.useStateFromStores(items4, () => isOtherUserKeyPersistent.getUser(userId));
  let obj8 = importDefault(dependencyMap[17]);
  const name = obj8.useName(userId.guildId, channelId, stateFromStores2);
  const items5 = [memo, name];
  const items6 = [channelId, memo, userId];
  [tmp14, tmp15] = callback(React.useMemo(() => userId(fingerprint[18]).getUserVerifyStateText(memo, name), items5), 2);
  const effect1 = React.useEffect(() => {
    if (stateFromStores.OTHER_USER_ALREADY_VERIFIED !== memo) {
      if (stateFromStores.MATCH !== tmp) {
        let obj = userId(fingerprint[19]);
        obj = { channelId, userId, reason: memo, keyVersion: stateFromStores1 };
        const result = obj.trackE2EEUserVerificationFailed(obj);
      }
    }
  }, items6);
  const items7 = [memo, tmp.icon];
  let memo1 = React.useMemo(() => {
    if (stateFromStores.OTHER_USER_ALREADY_VERIFIED !== memo) {
      if (stateFromStores.MATCH !== tmp) {
        let obj = { style: tmp.icon, color: channelId(fingerprint[9]).colors.TEXT_FEEDBACK_CRITICAL };
        return name(userId(fingerprint[21]).XLargeBoldIcon, obj);
      }
    }
    obj = { style: tmp.icon, color: channelId(fingerprint[9]).colors.TEXT_FEEDBACK_POSITIVE };
    return name(userId(fingerprint[20]).CheckmarkLargeBoldIcon, obj);
  }, items7);
  callback = React.useCallback(() => {
    channelId(fingerprint[22]).hideActionSheet();
  }, []);
  const items8 = [channelId, userKey, isOtherUserKeyPersistent, name, userId];
  const callback1 = React.useCallback(() => {
    let tmp = null != channelId;
    if (tmp) {
      tmp = null != userKey;
    }
    if (tmp) {
      let obj = userId(fingerprint[18]);
      obj.addVerification(userId, userKey, isOtherUserKeyPersistent, channelId, memo.DEEP_LINK);
      channelId(fingerprint[22]).hideActionSheet();
      const obj2 = channelId(fingerprint[22]);
      obj = { key: isSecureFramesKeyInconsistent, iconColor: "text-feedback-positive", IconComponent: userId(fingerprint[24]).CircleCheckIcon };
      const intl = userId(fingerprint[25]).intl;
      obj = { username: name };
      obj.content = intl.formatToPlainString(userId(fingerprint[25]).t.Gwu134, obj);
      channelId(fingerprint[23]).open(obj);
      const obj3 = channelId(fingerprint[23]);
    }
  }, items8);
  obj = { startExpanded: true };
  obj = { title: null, leading: name(arg1(dependencyMap[28]).ActionSheetCloseButton, { onPress: callback }) };
  obj.header = name(arg1(dependencyMap[27]).BottomSheetTitleHeader, obj);
  obj1 = { style: tmp.content };
  obj2 = { style: tmp.iconContainer };
  if (!loading) {
    obj2.children = memo1;
    const items9 = [tmp20(tmp22, obj2), , , , ];
    obj3 = { children: tmp14 };
    items9[1] = name(arg1(dependencyMap[29]).Text, obj3);
    obj4 = { style: tmp.subtitle, children: tmp15 };
    items9[2] = name(arg1(dependencyMap[29]).Text, obj4);
    obj5 = { style: tmp.helpMessage, userId, userKey };
    items9[3] = name(importDefault(dependencyMap[30]), obj5);
    obj6 = { spacing: 12, style: tmp.buttons };
    obj7 = { variant: "primary", onPress: callback1 };
    const intl = arg1(dependencyMap[25]).intl;
    obj7.text = intl.string(arg1(dependencyMap[25]).t.0tvNAn);
    if (!loading) {
      loading = memo !== stateFromStores.MATCH;
    }
    obj7.disabled = loading;
    const items10 = [name(arg1(dependencyMap[32]).Button, obj7), ];
    obj8 = { variant: "secondary", onPress: callback };
    const intl2 = arg1(dependencyMap[25]).intl;
    obj8.text = intl2.string(arg1(dependencyMap[25]).t.ETE/oC);
    items10[1] = name(arg1(dependencyMap[32]).Button, obj8);
    obj6.children = items10;
    items9[4] = closure_14(arg1(dependencyMap[31]).Stack, obj6);
    obj1.children = items9;
    obj.children = tmp21(tmp22, obj1);
    return tmp20(arg1(dependencyMap[26]).BottomSheet, obj);
  }
  memo1 = name(fingerprint2, {});
};
