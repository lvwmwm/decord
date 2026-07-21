// Module ID: 15360
// Function ID: 116988
// Dependencies: []

// Module 15360
let closure_3 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
const NitroHomeSectionId = arg1(dependencyMap[3]).NitroHomeSectionId;
const ContentDismissActionType = arg1(dependencyMap[4]).ContentDismissActionType;
const jsx = arg1(dependencyMap[5]).jsx;
const memoResult = importAllResult.memo(function SubscriberNitroIcon(onPress) {
  onPress = onPress.onPress;
  const arg1 = onPress;
  let showReferralNotificationDot = onPress.showReferralNotificationDot;
  let importDefault;
  let dependencyMap;
  let callback;
  let obj = arg1(dependencyMap[6]);
  if (showReferralNotificationDot) {
    showReferralNotificationDot = obj.useIsEligibleSenderForReferralProgram(!showReferralNotificationDot);
  }
  importDefault = showReferralNotificationDot;
  const items = [closure_5];
  const items1 = [showReferralNotificationDot];
  const stateFromStores = arg1(dependencyMap[7]).useStateFromStores(items, () => referralsRemaining.getReferralsRemaining({ bypassFetch: !showReferralNotificationDot }), items1);
  const obj2 = arg1(dependencyMap[7]);
  let prop = null;
  if (showReferralNotificationDot) {
    prop = null;
    if (null != stateFromStores) {
      prop = null;
      if (stateFromStores > 0) {
        prop = arg1(dependencyMap[9]).DismissibleContent.REFERRAL_PROGRAM_ENTRYPOINT_NITRO_BUTTON_NOTIFICATION;
      }
    }
  }
  obj = { cooldownDurationMs: arg1(dependencyMap[10]).REFERRAL_NITRO_BUTTON_RED_DOT_COOLDOWN_MS };
  const tmp5 = callback(arg1(dependencyMap[8]).useSelectedTimeRecurringDismissibleContent(prop, obj, undefined, true), 2);
  dependencyMap = tmp6;
  const tmp7 = tmp5[0] === arg1(dependencyMap[9]).DismissibleContent.REFERRAL_PROGRAM_ENTRYPOINT_NITRO_BUTTON_NOTIFICATION;
  callback = tmp7;
  const items2 = [tmp7, tmp5[1], onPress];
  callback = importAllResult.useCallback(() => {
    if (tmp7) {
      tmp6(constants2.TAKE_ACTION);
      const obj = { scrollToSectionId: constants.REFERRAL_PROGRAM };
      state.setState(obj);
    }
  }, items2);
  obj = {};
  const obj3 = arg1(dependencyMap[8]);
  obj.IconComponent = arg1(dependencyMap[12]).NitroWheelIcon;
  const intl = arg1(dependencyMap[13]).intl;
  obj.accessibilityLabel = intl.string(arg1(dependencyMap[13]).t.Ipxkog);
  obj.onPress = callback;
  obj.showRedDot = tmp7;
  return jsx(importDefault(dependencyMap[11]), obj);
});
const result = arg1(dependencyMap[14]).fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/YouScreenNavIconNitroSubscriber.tsx");

export default memoResult;
