// Module ID: 14719
// Function ID: 14720
// Name: UserProfilePremiumTryItOutSection
// Dependencies: [19, 17, 21, 5090, 587, 558, 576, 6841, 6865, 14720, 9328, 9329, 1126, 8198, 14742, 14750, 2]

// Module 14719 (UserProfilePremiumTryItOutSection)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 6841 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6865 */;
import openPremiumModalDefault from "openPremiumModal" /* 9328 */;
import PremiumFeaturesCards from "PremiumFeaturesCards" /* 9329 */;
import usePremiumTryItOutPresetShuffleDefault from "usePremiumTryItOutPresetShuffle" /* 14720 */;
import UserProfileTryItOutFieldsDefault from "UserProfileTryItOutFields" /* 14742 */;
import UserProfileUpsellCardV2Default from "UserProfileUpsellCardV2" /* 14750 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5090 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
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
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function UserProfilePremiumTryItOutSection(arg0) {
  let analyticsLocations;
  let cardInner;
  let container;
  let currentUser;
  let items;
  let items1;
  let onLayout;
  let onPreviewPremium;
  let tmp11;
  let tmp13;
  let tmp17;
  let tmp8;
  let tmp9;
  let tmp = analyticsLocations;
  let obj = analyticsLocations(576);
  const cResult = obj.c(26);
  ({ currentUser, onLayout, onPreviewPremium } = arg0);
  const tmp4 = closure_7();
  const tmp6 = useAnalyticsLocationsDefault;
  analyticsLocations = tmp6(AnalyticsLocationDefault.USER_SETTINGS_TRY_OUT_PREMIUM).analyticsLocations;
  usePremiumTryItOutPresetShuffleDefault();
  if (cResult[0] !== analyticsLocations) {
    const fn = function o() {
      const obj = { analyticsLocations, premiumFeatureCardOrder: PremiumFeaturesCards.PremiumFeatureCardOrder.TIER_2_LEADING };
      const tmp = openPremiumModalDefault;
      tmp(obj);
    };
    cResult[0] = analyticsLocations;
    cResult[1] = fn;
    tmp8 = fn;
  } else {
    tmp8 = cResult[1];
  }
  ({ container, cardInner } = tmp4);
  if (cResult[2] !== tmp8) {
    const intl = tmp(1126).intl;
    const obj2 = { onClick: tmp8 };
    const formatResult = intl.format(tmp(1126).t.TmfgI2, obj2);
    cResult[2] = tmp8;
    cResult[3] = formatResult;
    tmp9 = formatResult;
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = tmp(1126).intl;
    const stringResult = intl2.string(tmp(1126).t.PxUx8e);
    cResult[4] = stringResult;
    tmp11 = stringResult;
  } else {
    tmp11 = cResult[4];
  }
  if (cResult[5] !== tmp4.dividerLine) {
    const obj3 = { style: tmp4.dividerLine };
    const tmp16 = closure_5(View, obj3);
    cResult[5] = tmp4.dividerLine;
    cResult[6] = tmp16;
    tmp13 = tmp16;
  } else {
    tmp13 = cResult[6];
  }
  if (cResult[7] !== tmp4.lockIcon) {
    const obj4 = { size: "xs", color: nativeDefault.colors.ICON_MUTED, style: tmp4.lockIcon };
    const LockIcon = tmp(8198).LockIcon;
    const tmp19 = closure_5(LockIcon, obj4);
    cResult[7] = tmp4.lockIcon;
    cResult[8] = tmp19;
    tmp17 = tmp19;
  } else {
    tmp17 = cResult[8];
  }
  if (cResult[9] === tmp4.lockCircle) {
    let tmp20;
    if (cResult[10] === tmp17) {
      tmp20 = cResult[11];
    }
    if (cResult[12] === tmp4.divider) {
      if (cResult[13] === tmp13) {
        let tmp22;
        let tmp26;
        if (cResult[14] === tmp20) {
          tmp22 = cResult[15];
        }
        if (cResult[16] !== currentUser) {
          const obj5 = { currentUser, mode: "entrypoint" };
          const tmp28 = closure_5(UserProfileTryItOutFieldsDefault, obj5);
          cResult[16] = currentUser;
          cResult[17] = tmp28;
          tmp26 = tmp28;
        } else {
          tmp26 = cResult[17];
        }
        if (cResult[18] === onLayout) {
          if (cResult[19] === onPreviewPremium) {
            if (cResult[20] === tmp4.cardInner) {
              if (cResult[21] === tmp4.container) {
                if (cResult[22] === tmp26) {
                  if (cResult[23] === tmp9) {
                    let tmp29;
                    if (cResult[24] === tmp22) {
                      tmp29 = cResult[25];
                    }
                    return tmp29;
                  }
                }
              }
            }
          }
        }
        const obj6 = { style: container, innerStyle: cardInner, text: tmp9, textAlign: "center", buttonText: tmp11, onButtonPress: onPreviewPremium, onLayout, children: items };
        items = [tmp22, tmp26];
        const tmp31 = closure_6(UserProfileUpsellCardV2Default, obj6);
        cResult[18] = onLayout;
        cResult[19] = onPreviewPremium;
        cResult[20] = tmp4.cardInner;
        cResult[21] = tmp4.container;
        cResult[22] = tmp26;
        cResult[23] = tmp9;
        cResult[24] = tmp22;
        cResult[25] = tmp31;
        tmp29 = tmp31;
      }
    }
    const obj7 = { style: tmp4.divider, children: items1 };
    items1 = [tmp13, tmp20];
    const tmp25 = closure_6(View, obj7);
    cResult[12] = tmp4.divider;
    cResult[13] = tmp13;
    cResult[14] = tmp20;
    cResult[15] = tmp25;
    tmp22 = tmp25;
  }
  const obj8 = { style: tmp4.lockCircle, children: tmp17 };
  const tmp21 = closure_5(View, obj8);
  cResult[9] = tmp4.lockCircle;
  cResult[10] = tmp17;
  cResult[11] = tmp21;
  tmp20 = tmp21;
}) : (function UserProfilePremiumTryItOutSection(arg0) {
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
  const tmp2 = useAnalyticsLocationsDefault;
  const analyticsLocations = tmp2(AnalyticsLocationDefault.USER_SETTINGS_TRY_OUT_PREMIUM).analyticsLocations;
  usePremiumTryItOutPresetShuffleDefault();
  const items = [analyticsLocations];
  const callback = react.useCallback(() => {
    const obj = { analyticsLocations, premiumFeatureCardOrder: PremiumFeaturesCards.PremiumFeatureCardOrder.TIER_2_LEADING };
    const tmp = openPremiumModalDefault;
    tmp(obj);
  }, items);
  let obj = { style: tmp.container, innerStyle: tmp.cardInner, text: intl.format(analyticsLocations(1126).t.TmfgI2, { onClick: callback }), textAlign: "center", buttonText: intl2.string(analyticsLocations(1126).t.PxUx8e), onButtonPress: onPreviewPremium, onLayout, children: items2 };
  const tmp5 = UserProfileUpsellCardV2Default;
  intl = analyticsLocations(1126).intl;
  intl2 = analyticsLocations(1126).intl;
  const obj2 = { style: tmp.divider, children: items1 };
  items1 = [, ];
  const obj3 = { style: tmp.dividerLine };
  items1[0] = closure_5(View, obj3);
  const obj4 = { style: tmp.lockCircle, children: closure_5(LockIcon, obj5) };
  obj5 = { size: "xs", color: nativeDefault.colors.ICON_MUTED, style: tmp.lockIcon };
  LockIcon = analyticsLocations(8198).LockIcon;
  items1[1] = closure_5(View, obj4);
  items2 = [closure_6(View, obj2), closure_5(UserProfileTryItOutFieldsDefault, { currentUser, mode: "entrypoint" })];
  return closure_6(tmp5, obj);
});
size = size_mod;
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfilePremiumTryItOutSection.tsx");

export default tmp4;
