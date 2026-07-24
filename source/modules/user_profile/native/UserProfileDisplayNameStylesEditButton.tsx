// Module ID: 13636
// Function ID: 104741
// Name: UserProfileDisplayNameStylesEditButton
// Dependencies: [57, 31, 27, 653, 1345, 33, 4130, 689, 1456, 8560, 5802, 1334, 7935, 4361, 8563, 1862, 675, 1212, 13637, 1273, 7956, 8558, 13638, 13640, 2556, 2]
// Exports: default

// Module 13636 (UserProfileDisplayNameStylesEditButton)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { View } from "get ActivityIndicator";
import ME from "ME";
import { ContentDismissActionType } from "ContentDismissActionType";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
let closure_7;
let closure_8;
const require = arg1;
({ useCallback: closure_4, useMemo: closure_5 } = result);
({ AnalyticEvents: closure_7, UserSettingsSections: closure_8 } = ME);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { height: 48, width: 48, borderRadius: require("_createForOfIteratorHelperLoose").radii.xs, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_MUTED, alignItems: "center", justifyContent: "center", paddingBottom: 4 };
_createForOfIteratorHelperLoose.ggContainer = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.noneIcon = { tintColor: require("_createForOfIteratorHelperLoose").colors.TEXT_SUBTLE };
let obj1 = { tintColor: require("_createForOfIteratorHelperLoose").colors.TEXT_SUBTLE };
_createForOfIteratorHelperLoose.newBadge = { paddingTop: 0, marginLeft: require("_createForOfIteratorHelperLoose").space.PX_4 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj2 = { paddingTop: 0, marginLeft: require("_createForOfIteratorHelperLoose").space.PX_4 };
result = require("get ActivityIndicator").fileFinishedImporting("modules/user_profile/native/UserProfileDisplayNameStylesEditButton.tsx");

export default function UserProfileDisplayNameStylesEditButton(user) {
  user = user.user;
  const guildId = user.guildId;
  const isTryItOut = user.isTryItOut;
  let callback2;
  let c6;
  let displayNameStylesEffectConfig;
  let tmp = _createForOfIteratorHelperLoose();
  const callback = tmp;
  let obj = user(isTryItOut[8]);
  const nativeStackNavigation = obj.useNativeStackNavigation();
  let obj1 = user(isTryItOut[9]);
  const isDisplayNameStylesFlywheelSettersEnabled = obj1.useIsDisplayNameStylesFlywheelSettersEnabled("UserProfileDisplayNameStylesEditButton");
  let obj2 = user(isTryItOut[10]);
  if (isDisplayNameStylesFlywheelSettersEnabled) {
    const items = [user(isTryItOut[11]).DismissibleContent.DISPLAY_NAME_STYLES_FLYWHEEL_MOBILE_NEW_BADGE_PROFILE_PAGE];
    let items1 = items;
  } else {
    items1 = [];
  }
  const tmp6 = callback(obj2.useSelectedDismissibleContent(items1, undefined, true), 2);
  callback2 = tmp7;
  const guildMemberOrUserPendingDisplayNameStyles = user(isTryItOut[12]).useGuildMemberOrUserPendingDisplayNameStyles(user, guildId);
  let tryItOutDisplayNameStyles = guildMemberOrUserPendingDisplayNameStyles.pendingDisplayNameStyles;
  obj = { userId: user.id, guildId };
  const obj4 = user(isTryItOut[12]);
  if (isTryItOut) {
    tryItOutDisplayNameStyles = guildMemberOrUserPendingDisplayNameStyles.tryItOutDisplayNameStyles;
  }
  obj.pendingDisplayNameStyles = tryItOutDisplayNameStyles;
  obj.ignoreDisabledStylesSetting = true;
  const tmp9Result = guildId(isTryItOut[13])(obj);
  c6 = tmp9Result;
  let tmp9 = guildId(isTryItOut[13]);
  let effectId;
  if (null != tmp9Result) {
    effectId = tmp9Result.effectId;
  }
  if (null == effectId) {
    effectId = user(isTryItOut[15]).DisplayNameEffect.SOLID;
  }
  displayNameStylesEffectConfig = user(isTryItOut[14]).useDisplayNameStylesEffectConfig(effectId);
  const items2 = [guildId, isTryItOut, nativeStackNavigation, tmp6[1]];
  const items3 = [displayNameStylesEffectConfig, tmp9Result];
  const obj6 = user(isTryItOut[14]);
  const tmp16 = callback2(() => {
    if (null == _undefined2) {
      const intl2 = user(isTryItOut[17]).intl;
      let stringResult = intl2.string(user(isTryItOut[17]).t.PoWNfe);
    } else {
      const intl = user(isTryItOut[17]).intl;
      const _HermesInternal = HermesInternal;
      stringResult = "" + intl.string(guildId(isTryItOut[18])(_undefined2.fontId)) + " + " + displayNameStylesEffectConfig.name;
    }
    return stringResult;
  }, items3);
  const items4 = [tmp9Result, guildId, user.id, tmp];
  const items5 = [tmp9Result];
  const tmp15 = nativeStackNavigation(() => {
    let obj = guildId(isTryItOut[16]);
    obj.track(displayNameStylesEffectConfig.DISPLAY_NAME_STYLES_FROM_SETTINGS);
    obj = { guildId, isTryItOut };
    nativeStackNavigation.navigate(outer1_8.DISPLAY_NAME_STYLES, obj);
    _undefined(outer1_9.TAKE_ACTION);
  }, items2);
  const tmp17 = nativeStackNavigation(() => {
    if (null == c6) {
      let obj = { source: guildId(isTryItOut[20]), style: tmp.noneIcon };
      let tmp9 = outer1_10(user(isTryItOut[19]).Icon, obj);
    } else {
      obj = { style: outer1_10.ggContainer };
      obj = { userId: user.id, guildId, userName: "Gg", pendingDisplayNameStyles: c6, ignoreDisabledStylesSetting: true, variant: "heading-xl/semibold" };
      obj.children = outer1_10(guildId(isTryItOut[21]), obj);
      tmp9 = outer1_10(c6, obj);
    }
    return tmp9;
  }, items4);
  obj = {};
  let intl = user(isTryItOut[17]).intl;
  obj.label = intl.string(guildId(isTryItOut[24])["86GtGH"]);
  let tmp20;
  if (tmp6[0] === user(isTryItOut[11]).DismissibleContent.DISPLAY_NAME_STYLES_FLYWHEEL_MOBILE_NEW_BADGE_PROFILE_PAGE) {
    obj1 = { "aria-hidden": true };
    obj2 = {};
    let intl2 = user(isTryItOut[17]).intl;
    obj2.text = intl2.string(user(isTryItOut[17]).t.y2b7CA);
    obj2.style = tmp.newBadge;
    obj1.children = jsx(user(isTryItOut[19]).TextBadge, {});
    tmp20 = <c6 aria-hidden />;
  }
  obj.labelTrailing = tmp20;
  obj.buttonText = tmp16;
  obj.accessibilityValue = { text: tmp16 };
  obj.onPress = tmp15;
  obj.leading = tmp17();
  obj.trailing = nativeStackNavigation(() => {
    let tmp = null;
    if (null != _undefined2) {
      const obj = {};
      let colors;
      if (null != _undefined2) {
        colors = _undefined2.colors;
      }
      if (null == colors) {
        colors = [];
      }
      obj.colors = colors;
      let effectId;
      if (null != _undefined2) {
        effectId = _undefined2.effectId;
      }
      obj.effectId = effectId;
      tmp = outer1_10(guildId(isTryItOut[22]), obj);
      const tmp2 = outer1_10;
      const tmp5 = guildId(isTryItOut[22]);
    }
    return tmp;
  }, items5)();
  return jsx(user(isTryItOut[23]).UserProfileEditFormButton, {});
};
