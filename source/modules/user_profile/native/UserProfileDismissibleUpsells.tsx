// Module ID: 12137
// Function ID: 95103
// Name: UserProfileDismissibleUpsells
// Dependencies: [31, 27, 1849, 8308, 6671, 1345, 33, 4130, 689, 12138, 8310, 566, 3776, 9678, 1334, 1273, 4126, 1212, 4660, 5119, 4543, 7486, 11290, 2]
// Exports: default

// Module 12137 (UserProfileDismissibleUpsells)
import result from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { TrackUserProfileActions } from "USER_PROFILE_TOOLTIP_DELAY";
import { ContentDismissActionType } from "ContentDismissActionType";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_8;
let closure_9;
const require = arg1;
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
let items = [...require("items").Gradients.PREMIUM_GUILD];
let closure_10 = items.reverse();
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { paddingVertical: 16, paddingHorizontal: 12, borderRadius: require("_createForOfIteratorHelperLoose").radii.lg, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH };
_createForOfIteratorHelperLoose.upsellContainer = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.customProfileThemeUpsellContainer = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.PROFILE_GRADIENT_OVERLAY_SYNCED_WITH_USER_THEME };
_createForOfIteratorHelperLoose.header = { display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" };
_createForOfIteratorHelperLoose.upsellButtonsContainer = { display: "flex", flexDirection: "row", justifyContent: "space-between", flexWrap: "wrap", gap: 10, marginTop: 12 };
_createForOfIteratorHelperLoose.upsellButton = { flex: 1 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj1 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.PROFILE_GRADIENT_OVERLAY_SYNCED_WITH_USER_THEME };
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/user_profile/native/UserProfileDismissibleUpsells.tsx");

export default function UserProfileDismissibleUpsells(navigateToShop) {
  navigateToShop = navigateToShop.navigateToShop;
  const navigateToPremium = navigateToShop.navigateToPremium;
  const hasCustomProfileTheme = navigateToShop.hasCustomProfileTheme;
  const React = _createForOfIteratorHelperLoose();
  let obj = navigateToShop(hasCustomProfileTheme[9]);
  const isPrivacyNoticeVisible = obj.useIsPrivacyNoticeVisible();
  const trackUserProfileAction = navigateToShop(hasCustomProfileTheme[10]).useUserProfileAnalyticsContext().trackUserProfileAction;
  let obj2 = navigateToShop(hasCustomProfileTheme[10]);
  let items = [_isNativeReflectConstruct];
  const stateFromStores = navigateToShop(hasCustomProfileTheme[11]).useStateFromStores(items, () => currentUser.getCurrentUser());
  let obj3 = navigateToShop(hasCustomProfileTheme[11]);
  _isNativeReflectConstruct = navigateToShop(hasCustomProfileTheme[12]).isPremium(stateFromStores);
  let items1 = [navigateToShop, trackUserProfileAction];
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
    const items4 = [navigateToShop(tmp5[14]).DismissibleContent.USER_PROFILE_PREMIUM_AND_SHOP_ENTRY_POINTS];
    obj.contentTypes = items4;
    obj.children = function children(markAsDismissed) {
      markAsDismissed = markAsDismissed.markAsDismissed;
      if (markAsDismissed.visibleContent !== navigateToShop(hasCustomProfileTheme[14]).DismissibleContent.USER_PROFILE_PREMIUM_AND_SHOP_ENTRY_POINTS) {
        return null;
      } else {
        let obj = { borderWidth: 2, direction: navigateToShop(hasCustomProfileTheme[15]).GradientBorder.Direction.VERTICAL, colors: outer1_10, borderRadius: navigateToPremium(hasCustomProfileTheme[8]).radii.lg };
        obj = {};
        const obj1 = {};
        const merged = Object.assign(result.upsellContainer);
        if (hasCustomProfileTheme) {
          let prop = result.customProfileThemeUpsellContainer;
        } else {
          prop = {};
        }
        const merged1 = Object.assign(prop);
        obj.style = obj1;
        const obj2 = { style: result.header };
        let tmp8 = callback;
        const obj3 = { accessibilityRole: "header", variant: "text-sm/semibold" };
        let num2 = 17;
        const intl = navigateToShop(hasCustomProfileTheme[17]).intl;
        obj3.children = intl.string(navigateToShop(hasCustomProfileTheme[17]).t.EIYbj6);
        const items = [callback(navigateToShop(hasCustomProfileTheme[16]).Text, obj3), ];
        const obj4 = { accessibilityRole: "button" };
        const intl2 = navigateToShop(hasCustomProfileTheme[17]).intl;
        obj4.accessibilityLabel = intl2.string(navigateToShop(hasCustomProfileTheme[17]).t["6Xcq+Y"]);
        obj4.onPress = function onPress() {
          return markAsDismissed(constants.USER_DISMISS);
        };
        const obj5 = { size: "sm" };
        obj4.children = callback(navigateToShop(hasCustomProfileTheme[19]).XSmallIcon, obj5);
        items[1] = callback(navigateToShop(hasCustomProfileTheme[18]).PressableOpacity, obj4);
        obj2.children = items;
        const items1 = [outer1_9(trackUserProfileAction, obj2), ];
        let obj6 = { style: result.upsellButtonsContainer };
        let obj7 = { style: result.upsellButton };
        let num5 = 20;
        let string = navigateToShop(hasCustomProfileTheme[20]).Button;
        let obj8 = { text: null, onPress: null, icon: null, iconPosition: "start", variant: "secondary", shiny: true };
        const intl3 = navigateToShop(hasCustomProfileTheme[17]).intl;
        const string2 = intl3.string;
        const t = navigateToShop(hasCustomProfileTheme[17]).t;
        if (_isNativeReflectConstruct) {
          let string2Result = string2(t["0Q61kF"]);
        } else {
          string2Result = string2(t.x6rkDp);
        }
        obj8.text = string2Result;
        obj8.onPress = _isNativeReflectConstruct ? callback : closure_7;
        const obj9 = { size: "sm" };
        obj8.icon = callback(navigateToShop(hasCustomProfileTheme[21]).NitroWheelIcon, obj9);
        obj7.children = tmp8(string, obj8);
        obj7 = [, ];
        obj7[0] = tmp8(trackUserProfileAction, obj7);
        tmp8 = trackUserProfileAction;
        const obj10 = { style: result.upsellButton };
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
        obj6 = outer1_9(tmp6, obj6);
        items1[1] = obj6;
        obj.children = items1;
        obj = outer1_9(trackUserProfileAction, obj);
        obj.children = obj;
        callback(navigateToShop(hasCustomProfileTheme[15]).GradientBorder, obj);
        const tmp23 = callback;
        const tmp28 = outer1_9;
        const tmp29 = trackUserProfileAction;
        const tmp5 = outer1_9;
        const tmp8Result = tmp8(trackUserProfileAction, obj7);
      }
    };
    tmp3Result = tmp3(tmp4(tmp5[13]), obj);
    const tmp4Result = tmp4(tmp5[13]);
  }
  return tmp3Result;
};
