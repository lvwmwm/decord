// Module ID: 12665
// Function ID: 12666
// Name: UserProfileDismissibleUpsells
// Dependencies: [19, 17, 1372, 7628, 6852, 2042, 21, 4836, 576, 12666, 7635, 504, 4488, 10088, 2029, 1177, 4832, 1115, 5435, 5992, 5281, 8122, 11620, 2]
// Exports: default

// Module 12665 (UserProfileDismissibleUpsells)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import intl5 from "intl" /* 1115 */;
import native from "native" /* 1177 */;
import dismissible_content from "dismissible_content" /* 2029 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2042 */;
import XSmallIcon from "XSmallIcon" /* 5992 */;
import ColorConstants from "ColorConstants" /* 6852 */;
import Constants from "Constants" /* 7628 */;
import NitroWheelIcon from "NitroWheelIcon" /* 8122 */;
import ShopIcon from "ShopIcon" /* 11620 */;
import react_mod from "react" /* 19 */;
import UserStore from "UserStore" /* 1372 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c9;
let metroImportAll;
let obj2;
let obj3;
let react = react_mod;
const View = react_native.View;
const TrackUserProfileActions = Constants.TrackUserProfileActions;
const Gradients = ColorConstants.Gradients;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let items = [...Gradients.PREMIUM_GUILD];
let closure_10 = items.reverse();
let createStyles = createStyles_mod;
let obj = { upsellContainer: obj2, customProfileThemeUpsellContainer: obj3, header: { display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }, upsellButtonsContainer: { display: "flex", flexDirection: "row", justifyContent: "space-between", flexWrap: "wrap", gap: 10, marginTop: 12 }, upsellButton: { flex: 1 } };
obj2 = { paddingVertical: 16, paddingHorizontal: 12, borderRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.PROFILE_GRADIENT_OVERLAY_SYNCED_WITH_USER_THEME };
let closure_11 = createStyles(obj);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileDismissibleUpsells.tsx");

export default function UserProfileDismissibleUpsells(navigateToShop) {
  let colors;
  let items4;
  let tmp5Result;
  let upsellContainer;
  navigateToShop = navigateToShop.navigateToShop;
  const navigateToPremium = navigateToShop.navigateToPremium;
  const hasCustomProfileTheme = navigateToShop.hasCustomProfileTheme;
  let currentUser;
  react = closure_11();
  const tmp = navigateToShop;
  let obj = navigateToShop(hasCustomProfileTheme[9]);
  const isPrivacyNoticeVisible = obj.useIsPrivacyNoticeVisible();
  let obj2 = navigateToShop(hasCustomProfileTheme[10]);
  const trackUserProfileAction = obj2.useUserProfileAnalyticsContext().trackUserProfileAction;
  let obj3 = navigateToShop(hasCustomProfileTheme[11]);
  let items = [currentUser];
  const stateFromStores = obj3.useStateFromStores(items, () => currentUser.getCurrentUser());
  let obj4 = navigateToShop(hasCustomProfileTheme[12]);
  currentUser = obj4.isPremium(stateFromStores);
  let items1 = [navigateToShop, trackUserProfileAction];
  const onPress = react.useCallback(() => {
    const obj = { action: TrackUserProfileActions.VISIT_SHOP };
    trackUserProfileAction(obj);
    navigateToShop();
  }, items1);
  let items2 = [navigateToPremium, trackUserProfileAction];
  let closure_7 = react.useCallback(() => {
    const obj = { action: TrackUserProfileActions.GET_PREMIUM };
    trackUserProfileAction(obj);
    navigateToPremium();
  }, items2);
  const items3 = [navigateToPremium, trackUserProfileAction];
  let closure_8 = react.useCallback(() => {
    const obj = { action: TrackUserProfileActions.VIEW_PREMIUM_PERKS };
    trackUserProfileAction(obj);
    navigateToPremium();
  }, items3);
  if (isPrivacyNoticeVisible) {
    tmp5Result = tmp5(tmp6(tmp2[9]), {});
  } else {
    let obj5 = {
      contentTypes: items4,
      children(markAsDismissed) {
          let Button;
          let Button2;
          let intl;
          let intl2;
          let intl4;
          let items;
          let items1;
          let items2;
          let obj;
          let obj11;
          let obj9;
          markAsDismissed = markAsDismissed.markAsDismissed;
          let tmp11Result = null;
          if (markAsDismissed.visibleContent === dismissible_content.DismissibleContent.USER_PROFILE_PREMIUM_AND_SHOP_ENTRY_POINTS) {
            let stringResult;
            const obj2 = { borderWidth: 2, direction: native.GradientBorder.Direction.VERTICAL, colors, borderRadius: nativeDefault.radii.lg, children: React4(View, obj) };
            const GradientBorder = tmp(1177).GradientBorder;
            const obj3 = {};
            const merged = Object.assign(upsellContainer.upsellContainer);
            obj = { style: obj3, children: items1 };
            const tmp4 = hasCustomProfileTheme ? upsellContainer.customProfileThemeUpsellContainer : {};
            const merged1 = Object.assign(tmp4);
            const obj4 = { style: upsellContainer.header, children: items };
            const obj5 = { accessibilityRole: "header", variant: "text-sm/semibold", children: intl.string(intl5.t.EIYbj6) };
            const Text = tmp(4832).Text;
            intl = tmp(1115).intl;
            items = [metroImportAll(Text, obj5), ];
            const obj6 = {
              accessibilityRole: "button",
              accessibilityLabel: intl2.string(intl5.t["6Xcq+Y"]),
              onPress() {
                  return markAsDismissed(constants.USER_DISMISS);
                },
              children: metroImportAll(XSmallIcon.XSmallIcon, { size: "sm" })
            };
            const PressableOpacity = tmp(5435).PressableOpacity;
            intl2 = tmp(1115).intl;
            items[1] = metroImportAll(PressableOpacity, obj6);
            items1 = [React4(View, obj4), ];
            const obj7 = { style: upsellContainer.upsellButtonsContainer, children: items2 };
            const obj8 = { style: upsellContainer.upsellButton, children: metroImportAll(Button, obj9) };
            Button = tmp(5281).Button;
            const intl3 = tmp(1115).intl;
            const string = intl3.string;
            const t = tmp(1115).t;
            if (currentUser) {
              stringResult = string(t["0Q61kF"]);
            } else {
              stringResult = string(t.x6rkDp);
            }
            obj9 = { text: stringResult, onPress: currentUser ? metroImportAll : constants, icon: metroImportAll(NitroWheelIcon.NitroWheelIcon, { size: "sm" }), iconPosition: "start", variant: "secondary", shiny: true };
            items2 = [metroImportAll(View, obj8), ];
            const obj10 = { style: upsellContainer.upsellButton, children: metroImportAll(Button2, obj11) };
            obj11 = { text: intl4.string(intl5.t.pWG4ze), onPress, icon: metroImportAll(ShopIcon.ShopIcon, { size: "sm" }), iconPosition: "start", variant: "secondary" };
            Button2 = tmp(5281).Button;
            intl4 = tmp(1115).intl;
            items2[1] = metroImportAll(View, obj10);
            items1[1] = React4(View, obj7);
            tmp11Result = tmp11(GradientBorder, obj2);
          }
          return tmp11Result;
        }
    };
    items4 = [];
    const tmp6Result = navigateToPremium(hasCustomProfileTheme[13]);
    items4[0] = tmp(hasCustomProfileTheme[14]).DismissibleContent.USER_PROFILE_PREMIUM_AND_SHOP_ENTRY_POINTS;
    tmp5Result = tmp5(tmp6Result, obj5);
  }
  return tmp5Result;
};
