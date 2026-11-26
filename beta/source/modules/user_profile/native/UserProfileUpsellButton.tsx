// Module ID: 15849
// Function ID: 15850
// Name: UserProfileUpsellButton
// Dependencies: [19, 1071, 1388, 21, 4913, 7520, 9126, 1255, 5511, 10464, 1112, 8952, 2]
// Exports: default

// Module 15849 (UserProfileUpsellButton)
import Fragment from "Fragment" /* 21 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1255 */;
import PremiumConstants from "PremiumConstants" /* 1388 */;
import PremiumUpsellUtilsDefault from "PremiumUpsellUtils" /* 10464 */;
import react from "react" /* 19 */;
import Constants from "Constants" /* 1071 */;
import createStyles from "createStyles" /* 4913 */;
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
  analyticsLocations = analyticsLocations(7520)().analyticsLocations;
  let obj = analyticsObject(9126);
  let nitroTrialCtaOverride = obj.useNitroTrialCtaOverride();
  const items = [analyticsLocations, analyticsObject];
  const effect = react.useEffect(() => {
    let obj3;
    const obj2 = { type: PremiumUpsellTypes.CUSTOM_PROFILE_SETTINGS_BANNER_BUTTON, location: obj3, location_stack: analyticsLocations };
    obj3 = { page: constants.USER_SETTINGS, section: metroRequire.USER_PROFILE, object: analyticsObject };
    const obj = AnalyticsUtilsDefault;
    obj.track(metroImportDefault.PREMIUM_UPSELL_VIEWED, obj2);
  }, items);
  const Button = analyticsObject(5511).Button;
  if (nitroTrialCtaOverride == null) {
    nitroTrialCtaOverride = label;
  }
  if (nitroTrialCtaOverride == null) {
    const intl = tmp3(1112).intl;
    nitroTrialCtaOverride = intl.string(tmp3(1112).t.pj0XBN);
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
