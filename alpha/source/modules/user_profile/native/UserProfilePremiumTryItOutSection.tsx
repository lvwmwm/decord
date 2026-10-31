// Module ID: 16505
// Function ID: 16506
// Name: UserProfilePremiumTryItOutSection
// Dependencies: [19, 17, 21, 5014, 575, 7326, 16506, 9905, 9906, 16528, 1113, 8667, 16529, 2]
// Exports: default

// Module 16505 (UserProfilePremiumTryItOutSection)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 7326 */;
import openPremiumModalDefault from "openPremiumModal" /* 9905 */;
import PremiumFeaturesCards from "PremiumFeaturesCards" /* 9906 */;
import usePremiumTryItOutPresetShuffleDefault from "usePremiumTryItOutPresetShuffle" /* 16506 */;
import UserProfileUpsellCardV2Default from "UserProfileUpsellCardV2" /* 16528 */;
import UserProfileTryItOutFieldsDefault from "UserProfileTryItOutFields" /* 16529 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size_mod from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let obj4;
let rect;
let size;
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, cardInner: obj3, divider: obj4, dividerLine: rect, lockCircle: size, lockIcon: { marginTop: -2 } };
obj2 = { marginTop: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { paddingTop: nativeDefault.space.PX_24 };
obj4 = { height: 28, marginVertical: nativeDefault.space.PX_24, marginHorizontal: -nativeDefault.space.PX_16, justifyContent: "center", alignItems: "center" };
rect = { position: "absolute", left: 0, right: 0, top: 13.5, height: 1, backgroundColor: nativeDefault.colors.BORDER_NORMAL };
size = { width: 28, height: 28, alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.radii.round, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_NORMAL, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
let closure_7 = createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfilePremiumTryItOutSection.tsx");

export default function UserProfilePremiumTryItOutSection(arg0) {
  let LockIcon;
  let currentUser;
  let intl;
  let intl2;
  let items1;
  let items2;
  let obj5;
  let onLayout;
  let onPreviewPremium;
  ({ currentUser, onLayout, onPreviewPremium } = arg0);
  let tmp = closure_7();
  const analyticsLocations = useAnalyticsLocationsDefault().analyticsLocations;
  usePremiumTryItOutPresetShuffleDefault();
  const items = [analyticsLocations];
  const callback = react.useCallback(() => {
    const obj = { analyticsLocations, premiumFeatureCardOrder: PremiumFeaturesCards.PremiumFeatureCardOrder.TIER_2_LEADING };
    const tmp = openPremiumModalDefault;
    tmp(obj);
  }, items);
  let obj = { style: tmp.container, innerStyle: tmp.cardInner, text: intl.format(analyticsLocations(1113).t.TmfgI2, { onClick: callback }), textAlign: "center", buttonText: intl2.string(analyticsLocations(1113).t.PxUx8e), onButtonPress: onPreviewPremium, onLayout, children: items2 };
  const tmp4 = UserProfileUpsellCardV2Default;
  intl = analyticsLocations(1113).intl;
  intl2 = analyticsLocations(1113).intl;
  const obj2 = { style: tmp.divider, children: items1 };
  items1 = [, ];
  const obj3 = { style: tmp.dividerLine };
  items1[0] = closure_5(View, obj3);
  const obj4 = { style: tmp.lockCircle, children: closure_5(LockIcon, obj5) };
  obj5 = { size: "xs", color: nativeDefault.colors.ICON_MUTED, style: tmp.lockIcon };
  LockIcon = analyticsLocations(8667).LockIcon;
  items1[1] = closure_5(View, obj4);
  items2 = [closure_6(View, obj2), closure_5(UserProfileTryItOutFieldsDefault, { currentUser, mode: "entrypoint" })];
  return closure_6(tmp4, obj);
};
