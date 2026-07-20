// Module ID: 13455
// Function ID: 102183
// Name: UserProfileDisplayNameStylesEditButton
// Dependencies: []
// Exports: default

// Module 13455 (UserProfileDisplayNameStylesEditButton)
let closure_3 = importDefault(dependencyMap[0]);
({ useCallback: closure_4, useMemo: closure_5 } = arg1(dependencyMap[1]));
const View = arg1(dependencyMap[2]).View;
const tmp2 = arg1(dependencyMap[1]);
({ AnalyticEvents: closure_7, UserSettingsSections: closure_8 } = arg1(dependencyMap[3]));
const ContentDismissActionType = arg1(dependencyMap[4]).ContentDismissActionType;
const jsx = arg1(dependencyMap[5]).jsx;
let obj = arg1(dependencyMap[6]);
obj = {};
obj = { st: "<string:1090519624>", stickyHeadersNotSupportedForHorizontal: "2026-04-social-layer-storefront-mobile-purchasing", alignSelf: "<string:3628267361>", margin: "<string:2197815725>", descriptionEllipsis: "<string:1375731975>", getChatInputMinHeight: "<string:2583738129>", REVIEW_REQUEST_DEFERRED: "<string:1345143057>", borderRadius: importDefault(dependencyMap[7]).radii.xs, backgroundColor: importDefault(dependencyMap[7]).colors.BACKGROUND_MOD_MUTED };
obj.ggContainer = obj;
const tmp3 = arg1(dependencyMap[3]);
obj.noneIcon = { tintColor: importDefault(dependencyMap[7]).colors.TEXT_SUBTLE };
const obj1 = { tintColor: importDefault(dependencyMap[7]).colors.TEXT_SUBTLE };
obj.newBadge = { paddingTop: 0, marginLeft: importDefault(dependencyMap[7]).space.PX_4 };
let closure_11 = obj.createStyles(obj);
const obj2 = { paddingTop: 0, marginLeft: importDefault(dependencyMap[7]).space.PX_4 };
const result = arg1(dependencyMap[25]).fileFinishedImporting("modules/user_profile/native/UserProfileDisplayNameStylesEditButton.tsx");

export default function UserProfileDisplayNameStylesEditButton(user) {
  user = user.user;
  const arg1 = user;
  const guildId = user.guildId;
  const importDefault = guildId;
  const isTryItOut = user.isTryItOut;
  const dependencyMap = isTryItOut;
  let tmp7;
  let View;
  let displayNameStylesEffectConfig;
  const tmp = callback2();
  const callback = tmp;
  let obj = arg1(dependencyMap[8]);
  const nativeStackNavigation = obj.useNativeStackNavigation();
  let obj1 = arg1(dependencyMap[9]);
  const isDisplayNameStylesFlywheelSettersEnabled = obj1.useIsDisplayNameStylesFlywheelSettersEnabled("UserProfileDisplayNameStylesEditButton");
  let obj2 = arg1(dependencyMap[10]);
  if (isDisplayNameStylesFlywheelSettersEnabled) {
    const items = [arg1(dependencyMap[11]).DismissibleContent.DISPLAY_NAME_STYLES_FLYWHEEL_MOBILE_NEW_BADGE_PROFILE_PAGE];
    let items1 = items;
  } else {
    items1 = [];
  }
  const tmp6 = callback(obj2.useSelectedDismissibleContent(items1, undefined, true), 2);
  tmp7 = tmp6[1];
  const guildMemberOrUserPendingDisplayNameStyles = arg1(dependencyMap[12]).useGuildMemberOrUserPendingDisplayNameStyles(user, guildId);
  let tryItOutDisplayNameStyles = guildMemberOrUserPendingDisplayNameStyles.pendingDisplayNameStyles;
  obj = { userId: user.id, guildId };
  const obj4 = arg1(dependencyMap[12]);
  if (isTryItOut) {
    tryItOutDisplayNameStyles = guildMemberOrUserPendingDisplayNameStyles.tryItOutDisplayNameStyles;
  }
  obj.pendingDisplayNameStyles = tryItOutDisplayNameStyles;
  obj.ignoreDisabledStylesSetting = true;
  const tmp9Result = importDefault(dependencyMap[13])(obj);
  View = tmp9Result;
  const tmp9 = importDefault(dependencyMap[13]);
  let effectId;
  if (null != tmp9Result) {
    effectId = tmp9Result.effectId;
  }
  if (null == effectId) {
    effectId = arg1(dependencyMap[15]).DisplayNameEffect.SOLID;
  }
  displayNameStylesEffectConfig = arg1(dependencyMap[14]).useDisplayNameStylesEffectConfig(effectId);
  const items2 = [guildId, isTryItOut, nativeStackNavigation, tmp7];
  const items3 = [displayNameStylesEffectConfig, tmp9Result];
  const obj6 = arg1(dependencyMap[14]);
  const tmp16 = tmp7(() => {
    if (null == tmp9Result) {
      const intl2 = user(isTryItOut[17]).intl;
      let stringResult = intl2.string(user(isTryItOut[17]).t.PoWNfe);
    } else {
      const intl = user(isTryItOut[17]).intl;
      const _HermesInternal = HermesInternal;
      stringResult = "" + intl.string(guildId(isTryItOut[18])(tmp9Result.fontId)) + " + " + displayNameStylesEffectConfig.name;
    }
    return stringResult;
  }, items3);
  const items4 = [tmp9Result, guildId, user.id, tmp];
  const items5 = [tmp9Result];
  const tmp15 = nativeStackNavigation(() => {
    let obj = guildId(isTryItOut[16]);
    obj.track(displayNameStylesEffectConfig.DISPLAY_NAME_STYLES_FROM_SETTINGS);
    obj = { guildId, isTryItOut };
    nativeStackNavigation.navigate(constants.DISPLAY_NAME_STYLES, obj);
    tmp7(constants2.TAKE_ACTION);
  }, items2);
  const tmp17 = nativeStackNavigation(() => {
    if (null == tmp9Result) {
      let obj = { source: guildId(isTryItOut[20]), style: tmp.noneIcon };
      let tmp9 = callback(user(isTryItOut[19]).Icon, obj);
    } else {
      obj = { style: callback.ggContainer };
      obj = { "Null": "display", "Null": false, height: 600, paddingTop: 16, alignItems: 20, paddingHorizontal: "experimental/heading-sm/bold", userId: user.id, guildId, pendingDisplayNameStyles: tmp9Result };
      obj.children = callback(guildId(isTryItOut[21]), obj);
      tmp9 = callback(tmp9Result, obj);
    }
    return tmp9;
  }, items4);
  obj = {};
  const intl = arg1(dependencyMap[17]).intl;
  obj.label = intl.string(importDefault(dependencyMap[24]).86GtGH);
  let tmp20;
  if (tmp6[0] === arg1(dependencyMap[11]).DismissibleContent.DISPLAY_NAME_STYLES_FLYWHEEL_MOBILE_NEW_BADGE_PROFILE_PAGE) {
    obj1 = { aria-hidden: true };
    obj2 = {};
    const intl2 = arg1(dependencyMap[17]).intl;
    obj2.text = intl2.string(arg1(dependencyMap[17]).t.y2b7CA);
    obj2.style = tmp.newBadge;
    obj1.children = jsx(arg1(dependencyMap[19]).TextBadge, obj2);
    tmp20 = <View {...obj1} />;
  }
  obj.labelTrailing = tmp20;
  obj.buttonText = tmp16;
  obj.accessibilityValue = { text: tmp16 };
  obj.onPress = tmp15;
  obj.leading = tmp17();
  obj.trailing = nativeStackNavigation(() => {
    let tmp = null;
    if (null != tmp9Result) {
      const obj = {};
      let colors;
      if (null != tmp9Result) {
        colors = tmp9Result.colors;
      }
      if (null == colors) {
        colors = [];
      }
      obj.colors = colors;
      let effectId;
      if (null != tmp9Result) {
        effectId = tmp9Result.effectId;
      }
      obj.effectId = effectId;
      tmp = closure_10(guildId(isTryItOut[22]), obj);
      const tmp2 = closure_10;
      const tmp5 = guildId(isTryItOut[22]);
    }
    return tmp;
  }, items5)();
  return jsx(arg1(dependencyMap[23]).UserProfileEditFormButton, obj);
};
