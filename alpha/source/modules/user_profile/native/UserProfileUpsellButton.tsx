// Module ID: 16708
// Function ID: 16709
// Name: UserProfileUpsellButton
// Dependencies: [19, 1072, 1387, 21, 5143, 7465, 7771, 1252, 5770, 9941, 1113, 9681, 2]
// Exports: default

// Module 16708 (UserProfileUpsellButton)
import Fragment from "Fragment" /* 21 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import PremiumConstants from "PremiumConstants" /* 1387 */;
import PremiumUpsellUtilsDefault from "PremiumUpsellUtils" /* 9941 */;
import react from "react" /* 19 */;
import Constants from "Constants" /* 1072 */;
import createStyles from "createStyles" /* 5143 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
({ AnalyticsPages: closure_4, UpsellTypes: hasOwnProperty, AnalyticsSections: metroRequire, AnalyticEvents: metroImportDefault } = Constants);
const PremiumUpsellTypes = PremiumConstants.PremiumUpsellTypes;
const jsx = Fragment.jsx;
let closure_10 = createStyles.createStyles({ nitroWheel: { marginRight: 2 } });
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileUpsellButton.tsx");

export default function UserProfileUpsellButton(analyticsObject) {
  analyticsObject = analyticsObject.analyticsObject;
  let analyticsLocations;
  const label = analyticsObject.label;
  const tmp = closure_10();
  analyticsLocations = analyticsLocations(7465)().analyticsLocations;
  let obj = analyticsObject(7771);
  let nitroTrialCtaOverride = obj.useNitroTrialCtaOverride("user_profile_upsell_button");
  const items = [analyticsLocations, analyticsObject];
  const effect = react.useEffect(() => {
    let obj3;
    const obj2 = { type: PremiumUpsellTypes.CUSTOM_PROFILE_SETTINGS_BANNER_BUTTON, location: obj3, location_stack: analyticsLocations };
    obj3 = { page: constants.USER_SETTINGS, section: metroRequire.USER_PROFILE, object: analyticsObject };
    const obj = AnalyticsUtilsDefault;
    obj.track(metroImportDefault.PREMIUM_UPSELL_VIEWED, obj2);
  }, items);
  const Button = analyticsObject(5770).Button;
  if (nitroTrialCtaOverride == null) {
    nitroTrialCtaOverride = label;
  }
  if (nitroTrialCtaOverride == null) {
    const intl = tmp3(1113).intl;
    nitroTrialCtaOverride = intl.string(tmp3(1113).t.pj0XBN);
  }
  let obj3 = { color: "white", size: "sm", style: tmp.nitroWheel };
  return <Button onPress={function onPress() {
    let obj3;
    let obj4;
    const obj2 = { initialUpsellKey: hasOwnProperty.CUSTOM_PROFILES, analyticsLocation: obj3, analyticsLocations, analyticsProperties: obj4 };
    obj3 = { page: constants.USER_SETTINGS, section: metroRequire.USER_PROFILE, object: analyticsObject };
    obj4 = { type: PremiumUpsellTypes.CUSTOM_PROFILE_UPSELL };
    const obj = PremiumUpsellUtilsDefault;
    const result = obj.handleShowUpsellAlert(obj2);
  }} variant="active" text={nitroTrialCtaOverride} icon={null} />;
};
