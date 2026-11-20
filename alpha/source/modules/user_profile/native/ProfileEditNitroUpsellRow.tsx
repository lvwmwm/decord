// Module ID: 15716
// Function ID: 15717
// Name: ProfileEditNitroUpsellRow
// Dependencies: [19, 1071, 1388, 21, 7400, 10339, 1255, 8425, 8427, 6925, 15715, 2]
// Exports: default

// Module 15716 (ProfileEditNitroUpsellRow)
import Fragment from "Fragment" /* 21 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1255 */;
import PremiumConstants from "PremiumConstants" /* 1388 */;
import openPremiumUpsellActionSheetDefault from "openPremiumUpsellActionSheet" /* 8425 */;
import EntitlementFeatureNames from "EntitlementFeatureNames" /* 8427 */;
import react from "react" /* 19 */;
import Constants from "Constants" /* 1071 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
({ AnalyticEvents: closure_4, AnalyticsPages: hasOwnProperty, AnalyticsSections: metroRequire, UpsellTypes: metroImportDefault } = Constants);
const PremiumUpsellTypes = PremiumConstants.PremiumUpsellTypes;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/user_profile/native/ProfileEditNitroUpsellRow.tsx");

export default function ProfileEditNitroUpsellRow(analyticsObject) {
  let label;
  let subLabel;
  analyticsObject = analyticsObject.analyticsObject;
  const skipRoadblock = analyticsObject.skipRoadblock;
  let analyticsLocations;
  let memo;
  ({ label, subLabel } = analyticsObject);
  analyticsLocations = skipRoadblock(analyticsLocations[4])().analyticsLocations;
  const items = [analyticsObject];
  memo = memo.useMemo(() => ({ page: hasOwnProperty.USER_SETTINGS, section: metroRequire.USER_PROFILE, object: analyticsObject }), items);
  let obj = analyticsObject(analyticsLocations[5]);
  const onViewAllPerks = obj.usePremiumUpsellConfig(constants4.CUSTOM_PROFILES, analyticsLocations, memo).onViewAllPerks;
  const items1 = [memo, analyticsLocations];
  const effect = memo.useEffect(() => {
    const obj = AnalyticsUtilsDefault;
    const obj2 = { type: PremiumUpsellTypes.CUSTOM_PROFILE_SETTINGS_BANNER_BUTTON, location: memo, location_stack: analyticsLocations };
    obj.track(onViewAllPerks.PREMIUM_UPSELL_VIEWED, obj2);
  }, items1);
  const items2 = [skipRoadblock, onViewAllPerks, analyticsLocations];
  const callback = memo.useCallback(() => {
    const tmp = skipRoadblock;
    if (tmp) {
      onViewAllPerks();
    } else {
      const tmp4 = openPremiumUpsellActionSheetDefault;
      tmp4(EntitlementFeatureNames.EntitlementFeatureNames.PROFILE_PREMIUM_FEATURES, analyticsLocations, "stack");
    }
  }, items2);
  const TableRow = analyticsObject(analyticsLocations[9]).TableRow;
  return <TableRow label={label} subLabel={null} onPress={callback} />;
};
