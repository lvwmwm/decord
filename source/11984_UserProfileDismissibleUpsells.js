// Module ID: 11984
// Function ID: 92629
// Name: UserProfileDismissibleUpsells
// Dependencies: []
// Exports: default

// Module 11984 (UserProfileDismissibleUpsells)
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = importDefault(dependencyMap[2]);
const TrackUserProfileActions = arg1(dependencyMap[3]).TrackUserProfileActions;
const ContentDismissActionType = arg1(dependencyMap[5]).ContentDismissActionType;
({ jsx: closure_8, jsxs: closure_9 } = arg1(dependencyMap[6]));
const items = [...arg1(dependencyMap[4]).Gradients.PREMIUM_GUILD];
let closure_10 = items.reverse();
let obj = arg1(dependencyMap[7]);
obj = {};
obj = { value: true, alignItems: null, borderRadius: importDefault(dependencyMap[8]).radii.lg, backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_SURFACE_HIGH };
obj.upsellContainer = obj;
const tmp2 = arg1(dependencyMap[6]);
obj.customProfileThemeUpsellContainer = { backgroundColor: importDefault(dependencyMap[8]).colors.PROFILE_GRADIENT_OVERLAY_SYNCED_WITH_USER_THEME };
obj.header = {};
obj.upsellButtonsContainer = { "Bool(false)": true, "Bool(false)": true, "Bool(false)": true, "Null": true, "Null": true, "Null": true };
obj.upsellButton = { flex: 1 };
let closure_11 = obj.createStyles(obj);
const obj1 = { backgroundColor: importDefault(dependencyMap[8]).colors.PROFILE_GRADIENT_OVERLAY_SYNCED_WITH_USER_THEME };
const result = arg1(dependencyMap[23]).fileFinishedImporting("modules/user_profile/native/UserProfileDismissibleUpsells.tsx");

export default function UserProfileDismissibleUpsells(navigateToShop) {
  navigateToShop = navigateToShop.navigateToShop;
  const arg1 = navigateToShop;
  const navigateToPremium = navigateToShop.navigateToPremium;
  const importDefault = navigateToPremium;
  const dependencyMap = navigateToShop.hasCustomProfileTheme;
  const React = callback();
  let obj = arg1(dependencyMap[9]);
  const isPrivacyNoticeVisible = obj.useIsPrivacyNoticeVisible();
  const trackUserProfileAction = arg1(dependencyMap[10]).useUserProfileAnalyticsContext().trackUserProfileAction;
  const View = trackUserProfileAction;
  const obj2 = arg1(dependencyMap[10]);
  const items = [closure_5];
  const stateFromStores = arg1(dependencyMap[11]).useStateFromStores(items, () => currentUser.getCurrentUser());
  const obj3 = arg1(dependencyMap[11]);
  closure_5 = arg1(dependencyMap[12]).isPremium(stateFromStores);
  const items1 = [navigateToShop, trackUserProfileAction];
  let closure_6 = React.useCallback(() => {
    trackUserProfileAction({ action: constants.VISIT_SHOP });
    navigateToShop();
  }, items1);
  const items2 = [navigateToPremium, trackUserProfileAction];
  let closure_7 = React.useCallback(() => {
    trackUserProfileAction({ action: constants.GET_PREMIUM });
    navigateToPremium();
  }, items2);
  const items3 = [navigateToPremium, trackUserProfileAction];
  let closure_8 = React.useCallback(() => {
    trackUserProfileAction({ action: constants.VIEW_PREMIUM_PERKS });
    navigateToPremium();
  }, items3);
  if (isPrivacyNoticeVisible) {
    let tmp3Result = tmp3(tmp4(tmp5[9]), {});
  } else {
    obj = {};
    const items4 = [arg1(tmp5[14]).DismissibleContent.USER_PROFILE_PREMIUM_AND_SHOP_ENTRY_POINTS];
    obj.contentTypes = items4;
    obj.children = function children(markAsDismissed) {
      const navigateToShop = markAsDismissed.markAsDismissed;
      if (markAsDismissed.visibleContent !== navigateToShop(hasCustomProfileTheme[14]).DismissibleContent.USER_PROFILE_PREMIUM_AND_SHOP_ENTRY_POINTS) {
        return null;
      } else {
        let obj = { borderWidth: 2, direction: navigateToShop(hasCustomProfileTheme[15]).GradientBorder.Direction.VERTICAL, colors: closure_10, borderRadius: navigateToPremium(hasCustomProfileTheme[8]).radii.lg };
        obj = {};
        const obj1 = {};
        const merged = Object.assign(closure_3.upsellContainer);
        if (hasCustomProfileTheme) {
          let prop = closure_3.customProfileThemeUpsellContainer;
        } else {
          prop = {};
        }
        const merged1 = Object.assign(prop);
        obj.style = obj1;
        const obj2 = { style: closure_3.header };
        let tmp8 = callback;
        const obj3 = {};
        let num2 = 17;
        const intl = navigateToShop(hasCustomProfileTheme[17]).intl;
        obj3.children = intl.string(navigateToShop(hasCustomProfileTheme[17]).t.EIYbj6);
        const items = [callback(navigateToShop(hasCustomProfileTheme[16]).Text, obj3), ];
        const obj4 = { accessibilityRole: "button" };
        const intl2 = navigateToShop(hasCustomProfileTheme[17]).intl;
        obj4.accessibilityLabel = intl2.string(navigateToShop(hasCustomProfileTheme[17]).t.6Xcq+Y);
        obj4.onPress = function onPress() {
          return markAsDismissed(constants.USER_DISMISS);
        };
        const obj5 = { size: "sm" };
        obj4.children = callback(navigateToShop(hasCustomProfileTheme[19]).XSmallIcon, obj5);
        items[1] = callback(navigateToShop(hasCustomProfileTheme[18]).PressableOpacity, obj4);
        obj2.children = items;
        const items1 = [callback2(trackUserProfileAction, obj2), ];
        let obj6 = { style: closure_3.upsellButtonsContainer };
        let obj7 = { style: closure_3.upsellButton };
        let num5 = 20;
        let string = navigateToShop(hasCustomProfileTheme[20]).Button;
        let obj8 = {};
        const intl3 = navigateToShop(hasCustomProfileTheme[17]).intl;
        const string2 = intl3.string;
        const t = navigateToShop(hasCustomProfileTheme[17]).t;
        if (closure_5) {
          let string2Result = string2(t.0Q61kF);
        } else {
          string2Result = string2(t.x6rkDp);
        }
        obj8.text = string2Result;
        obj8.onPress = closure_5 ? callback : closure_7;
        const obj9 = { size: "sm" };
        obj8.icon = callback(navigateToShop(hasCustomProfileTheme[21]).NitroWheelIcon, obj9);
        obj7.children = tmp8(string, obj8);
        obj7 = [, ];
        obj7[0] = tmp8(trackUserProfileAction, obj7);
        tmp8 = trackUserProfileAction;
        const obj10 = { style: closure_3.upsellButton };
        obj8 = navigateToShop(hasCustomProfileTheme[num5]).Button;
        const obj11 = {};
        const intl4 = navigateToShop(hasCustomProfileTheme[num2]).intl;
        string = intl4.string;
        num2 = string(navigateToShop(hasCustomProfileTheme[num2]).t.pWG4ze);
        obj11.text = num2;
        obj11.onPress = closure_6;
        const obj12 = { size: "sm" };
        obj11.icon = callback(navigateToShop(hasCustomProfileTheme[22]).ShopIcon, obj12);
        obj11.iconPosition = "start";
        obj11.variant = "secondary";
        num5 = callback(obj8, obj11);
        obj10.children = num5;
        obj7[1] = callback(trackUserProfileAction, obj10);
        obj6.children = obj7;
        obj6 = callback2(tmp6, obj6);
        items1[1] = obj6;
        obj.children = items1;
        obj = callback2(trackUserProfileAction, obj);
        obj.children = obj;
        callback(navigateToShop(hasCustomProfileTheme[15]).GradientBorder, obj);
        const tmp23 = callback;
        const tmp28 = callback2;
        const tmp29 = trackUserProfileAction;
        const tmp5 = callback2;
        const tmp8Result = tmp8(trackUserProfileAction, obj7);
      }
    };
    tmp3Result = tmp3(tmp4(tmp5[13]), obj);
    const tmp4Result = tmp4(tmp5[13]);
  }
  return tmp3Result;
};
