// Module ID: 13436
// Function ID: 102070
// Name: UserProfileUpsellButton
// Dependencies: []
// Exports: default

// Module 13436 (UserProfileUpsellButton)
let closure_3 = importAll(dependencyMap[0]);
({ AnalyticsPages: closure_4, UpsellTypes: closure_5, AnalyticsSections: closure_6, AnalyticEvents: closure_7 } = arg1(dependencyMap[1]));
const PremiumUpsellTypes = arg1(dependencyMap[2]).PremiumUpsellTypes;
const jsx = arg1(dependencyMap[3]).jsx;
const tmp2 = arg1(dependencyMap[1]);
let closure_10 = arg1(dependencyMap[4]).createStyles({ nitroWheel: { marginRight: 2 } });
const obj = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/user_profile/native/UserProfileUpsellButton.tsx");

export default function UserProfileUpsellButton(analyticsObject) {
  analyticsObject = analyticsObject.analyticsObject;
  const arg1 = analyticsObject;
  let label = analyticsObject.label;
  const analyticsLocations = importDefault(dependencyMap[5])().analyticsLocations;
  const importDefault = analyticsLocations;
  let obj = arg1(dependencyMap[6]);
  const nitroTrialCtaOverride = obj.useNitroTrialCtaOverride("user_profile_upsell_button");
  const items = [analyticsLocations, analyticsObject];
  const effect = React.useEffect(() => {
    let obj = analyticsLocations(closure_2[7]);
    obj = { type: constants5.CUSTOM_PROFILE_SETTINGS_BANNER_BUTTON, location: obj, location_stack: analyticsLocations };
    obj = { page: constants.USER_SETTINGS, section: constants3.USER_PROFILE, object: analyticsObject };
    obj.track(constants4.PREMIUM_UPSELL_VIEWED, obj);
  }, items);
  obj = {
    onPress() {
      let obj = analyticsLocations(closure_2[9]);
      obj = { initialUpsellKey: constants2.CUSTOM_PROFILES, analyticsLocation: obj, analyticsLocations, analyticsProperties: obj1 };
      obj = { page: constants.USER_SETTINGS, section: constants3.USER_PROFILE, object: analyticsObject };
      const result = obj.handleShowUpsellAlert(obj);
    },
    variant: "active"
  };
  if (null != nitroTrialCtaOverride) {
    label = nitroTrialCtaOverride;
  }
  if (null == label) {
    const intl = arg1(dependencyMap[10]).intl;
    label = intl.string(arg1(dependencyMap[10]).t.pj0XBN);
  }
  obj.text = label;
  obj = { style: callback().nitroWheel };
  obj.icon = jsx(arg1(dependencyMap[11]).NitroWheelIcon, obj);
  return jsx(arg1(dependencyMap[8]).Button, obj);
};
