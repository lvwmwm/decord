// Module ID: 8915
// Function ID: 70341
// Name: SecureFramesUserVerificationBottomSheet
// Dependencies: [57, 31, 27, 4202, 1849, 8899, 653, 33, 4130, 689, 8903, 8916, 8878, 8905, 566, 8908, 7889, 4319, 8897, 8907, 8694, 8917, 4098, 3831, 4091, 1212, 5187, 5186, 5501, 4126, 8909, 4541, 4543, 2]
// Exports: default

// Module 8915 (SecureFramesUserVerificationBottomSheet)
import _slicedToArray from "_slicedToArray";
import Stack from "Stack";
import get_ActivityIndicator from "RedesignBottomSheetTitleHeaderBase";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import SECURE_FRAMES_LINKING_BOTTOM_SHEET_KEY from "SECURE_FRAMES_LINKING_BOTTOM_SHEET_KEY";
import { AnalyticsLocations } from "ME";
import jsxProd from "set";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_13;
let closure_14;
let closure_5;
let closure_6;
let closure_9;
const require = arg1;
({ ActivityIndicator: closure_5, View: closure_6 } = get_ActivityIndicator);
({ AnalyticsSecureFramesUserVerification: closure_9, SECURE_FRAMES_PUBLIC_KEY_VERSION: closure_10, USER_VERIFIED_TOAST_KEY: closure_11 } = SECURE_FRAMES_LINKING_BOTTOM_SHEET_KEY);
({ jsx: closure_13, jsxs: closure_14 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { height: 80, width: 80, borderRadius: 40, alignItems: "center", justifyContent: "center", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_STRONG, marginBottom: 16 };
_createForOfIteratorHelperLoose.iconContainer = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.icon = { height: 48, width: 48 };
_createForOfIteratorHelperLoose.content = { padding: 16, justifyContent: "center", alignItems: "center" };
_createForOfIteratorHelperLoose.subtitle = { textAlign: "center", marginTop: 8, marginBottom: 40 };
_createForOfIteratorHelperLoose.buttons = { marginTop: 40 };
_createForOfIteratorHelperLoose.helpMessage = { marginTop: 16 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let result = require("get ActivityIndicator").fileFinishedImporting("modules/rtc/native/SecureFramesUserVerificationBottomSheet.tsx");

export default function SecureFramesUserVerificationBottomSheet(userId) {
  let tmp14;
  let tmp15;
  userId = userId.userId;
  const channelId = userId.channelId;
  const fingerprint = userId.fingerprint;
  let tmp = _createForOfIteratorHelperLoose();
  let callback = tmp;
  let obj = userId(fingerprint[10]);
  const secureFramesPairwiseFingerprint = obj.useSecureFramesPairwiseFingerprint({ userId });
  const userKey = secureFramesPairwiseFingerprint.userKey;
  const fingerprint2 = secureFramesPairwiseFingerprint.fingerprint;
  let obj1 = userId(fingerprint[11]);
  const isSecureFramesUIEnabled = obj1.useIsSecureFramesUIEnabled({ channelId });
  let obj2 = userId(fingerprint[12]);
  const isUserSecureFramesVerified = obj2.useIsUserSecureFramesVerified({ userId, channelId });
  let obj3 = userId(fingerprint[13]);
  const isPersistentSecureFramesFingerprint = obj3.useIsPersistentSecureFramesFingerprint({ userId });
  const isOtherUserKeyPersistent = isPersistentSecureFramesFingerprint.isOtherUserKeyPersistent;
  let loading = isPersistentSecureFramesFingerprint.loading;
  let obj4 = userId(fingerprint[14]);
  const items = [isUserSecureFramesVerified];
  const stateFromStores = obj4.useStateFromStores(items, () => isUserSecureFramesVerified.isConnected());
  let obj5 = userId(fingerprint[14]);
  const items1 = [isUserSecureFramesVerified];
  const stateFromStores1 = obj5.useStateFromStores(items1, () => isUserSecureFramesVerified.isUserConnected(userId));
  let obj6 = userId(fingerprint[15]);
  const isSecureFramesKeyInconsistent = obj6.useIsSecureFramesKeyInconsistent({ userId });
  const items2 = [fingerprint, channelId, fingerprint2, stateFromStores, isSecureFramesKeyInconsistent, stateFromStores1, isSecureFramesUIEnabled, isUserSecureFramesVerified];
  const memo = userKey.useMemo(() => {
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
  const items3 = [userId];
  const effect = userKey.useEffect(() => {
    const user = userId(fingerprint[16]).getUser(userId);
  }, items3);
  let obj7 = userId(fingerprint[14]);
  const items4 = [isOtherUserKeyPersistent];
  const stateFromStores2 = obj7.useStateFromStores(items4, () => isOtherUserKeyPersistent.getUser(userId));
  let obj8 = channelId(fingerprint[17]);
  const name = obj8.useName(userId.guildId, channelId, stateFromStores2);
  const items5 = [memo, name];
  const items6 = [channelId, memo, userId];
  [tmp14, tmp15] = callback(userKey.useMemo(() => userId(fingerprint[18]).getUserVerifyStateText(memo, name), items5), 2);
  const effect1 = userKey.useEffect(() => {
    if (stateFromStores.OTHER_USER_ALREADY_VERIFIED !== memo) {
      if (stateFromStores.MATCH !== tmp) {
        let obj = userId(fingerprint[19]);
        obj = { channelId, userId, reason: memo, keyVersion: stateFromStores1 };
        const result = obj.trackE2EEUserVerificationFailed(obj);
      }
    }
  }, items6);
  const items7 = [memo, tmp.icon];
  let memo1 = userKey.useMemo(() => {
    if (stateFromStores.OTHER_USER_ALREADY_VERIFIED !== memo) {
      if (stateFromStores.MATCH !== tmp) {
        let obj = { style: tmp.icon, color: channelId(fingerprint[9]).colors.TEXT_FEEDBACK_CRITICAL };
        return name(userId(fingerprint[21]).XLargeBoldIcon, obj);
      }
    }
    obj = { style: tmp.icon, color: channelId(fingerprint[9]).colors.TEXT_FEEDBACK_POSITIVE };
    return name(userId(fingerprint[20]).CheckmarkLargeBoldIcon, obj);
  }, items7);
  callback = userKey.useCallback(() => {
    channelId(fingerprint[22]).hideActionSheet();
  }, []);
  const items8 = [channelId, userKey, isOtherUserKeyPersistent, name, userId];
  const callback1 = userKey.useCallback(() => {
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
  obj = { title: null, leading: name(userId(fingerprint[28]).ActionSheetCloseButton, { onPress: callback }) };
  obj.header = name(userId(fingerprint[27]).BottomSheetTitleHeader, obj);
  obj1 = { style: tmp.content };
  obj2 = { style: tmp.iconContainer };
  if (!loading) {
    obj2.children = memo1;
    const items9 = [tmp20(tmp22, obj2), , , , ];
    obj3 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", children: tmp14 };
    items9[1] = name(userId(fingerprint[29]).Text, obj3);
    obj4 = { style: tmp.subtitle, variant: "text-md/medium", color: "text-default", children: tmp15 };
    items9[2] = name(userId(fingerprint[29]).Text, obj4);
    obj5 = { style: tmp.helpMessage, userId, userKey };
    items9[3] = name(channelId(fingerprint[30]), obj5);
    obj6 = { spacing: 12, style: tmp.buttons };
    obj7 = { variant: "primary", onPress: callback1 };
    let intl = userId(fingerprint[25]).intl;
    obj7.text = intl.string(userId(fingerprint[25]).t["0tvNAn"]);
    if (!loading) {
      loading = memo !== stateFromStores.MATCH;
    }
    obj7.disabled = loading;
    const items10 = [name(userId(fingerprint[32]).Button, obj7), ];
    obj8 = { variant: "secondary", onPress: callback };
    const intl2 = userId(fingerprint[25]).intl;
    obj8.text = intl2.string(userId(fingerprint[25]).t["ETE/oC"]);
    items10[1] = name(userId(fingerprint[32]).Button, obj8);
    obj6.children = items10;
    items9[4] = closure_14(userId(fingerprint[31]).Stack, obj6);
    obj1.children = items9;
    obj.children = tmp21(tmp22, obj1);
    return tmp20(userId(fingerprint[26]).BottomSheet, obj);
  }
  memo1 = name(fingerprint2, {});
};
