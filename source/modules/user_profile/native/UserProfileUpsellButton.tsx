// Module ID: 13617
// Function ID: 104628
// Name: UserProfileUpsellButton
// Dependencies: [31, 653, 1851, 33, 4130, 5462, 6685, 675, 4543, 8028, 1212, 7486, 2]
// Exports: default

// Module 13617 (UserProfileUpsellButton)
import result from "result";
import ME from "ME";
import { PremiumUpsellTypes } from "GuildFeatures";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
let closure_6;
let closure_7;
const require = arg1;
({ AnalyticsPages: closure_4, UpsellTypes: closure_5, AnalyticsSections: closure_6, AnalyticEvents: closure_7 } = ME);
let closure_10 = _createForOfIteratorHelperLoose.createStyles({ nitroWheel: { marginRight: 2 } });
let result = require("GuildFeatures").fileFinishedImporting("modules/user_profile/native/UserProfileUpsellButton.tsx");

export default function UserProfileUpsellButton(analyticsObject) {
  analyticsObject = analyticsObject.analyticsObject;
  let label = analyticsObject.label;
  analyticsLocations = analyticsLocations(5462)().analyticsLocations;
  let obj = analyticsObject(6685);
  const nitroTrialCtaOverride = obj.useNitroTrialCtaOverride("user_profile_upsell_button");
  const items = [analyticsLocations, analyticsObject];
  const effect = React.useEffect(() => {
    let obj = analyticsLocations(outer1_2[7]);
    obj = { type: outer1_8.CUSTOM_PROFILE_SETTINGS_BANNER_BUTTON, location: obj, location_stack: analyticsLocations };
    obj = { page: outer1_4.USER_SETTINGS, section: outer1_6.USER_PROFILE, object: analyticsObject };
    obj.track(outer1_7.PREMIUM_UPSELL_VIEWED, obj);
  }, items);
  obj = {
    onPress() {
      let obj = analyticsLocations(outer1_2[9]);
      obj = { initialUpsellKey: outer1_5.CUSTOM_PROFILES, analyticsLocation: obj, analyticsLocations, analyticsProperties: obj1 };
      obj = { page: outer1_4.USER_SETTINGS, section: outer1_6.USER_PROFILE, object: analyticsObject };
      const result = obj.handleShowUpsellAlert(obj);
    },
    variant: "active"
  };
  if (null != nitroTrialCtaOverride) {
    label = nitroTrialCtaOverride;
  }
  if (null == label) {
    const intl = analyticsObject(1212).intl;
    label = intl.string(analyticsObject(1212).t.pj0XBN);
  }
  obj.text = label;
  obj = { color: "white", size: "sm", style: callback().nitroWheel };
  obj.icon = jsx(analyticsObject(7486).NitroWheelIcon, { color: "white", size: "sm", style: callback().nitroWheel });
  return jsx(analyticsObject(4543).Button, { color: "white", size: "sm", style: callback().nitroWheel });
};
