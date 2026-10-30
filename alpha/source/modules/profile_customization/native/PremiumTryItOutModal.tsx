// Module ID: 16496
// Function ID: 16497
// Name: PremiumTryItOutModal
// Dependencies: [19, 1384, 1072, 1386, 21, 504, 7320, 7345, 16414, 16464, 1253, 8750, 1114, 6992, 7552, 9507, 16497, 11447, 2]
// Exports: default

// Module 16496 (PremiumTryItOutModal)
import Fragment from "Fragment" /* 21 */;
import intl3 from "intl" /* 1114 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1253 */;
import PremiumConstants from "PremiumConstants" /* 1386 */;
import NavigatorHeader from "NavigatorHeader" /* 6992 */;
import maybeFetchUserProfileDefault from "maybeFetchUserProfile" /* 8750 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1384 */;
import Constants from "Constants" /* 1072 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
({ AnalyticEvents: hasOwnProperty, AnalyticsPages: metroRequire } = Constants);
const PremiumUpsellTypes = PremiumConstants.PremiumUpsellTypes;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/profile_customization/native/PremiumTryItOutModal.tsx");

export default function PremiumTryItOutModal(initialTarget) {
  initialTarget = initialTarget.initialTarget;
  const onClose = initialTarget.onClose;
  let stateFromStores;
  let shuffleButtonLocation;
  let obj = initialTarget(stateFromStores[5]);
  const items = [shuffleButtonLocation];
  stateFromStores = obj.useStateFromStores(items, () => shuffleButtonLocation.getCurrentUser());
  let tmp2 = onClose(stateFromStores[6]);
  const tmp2Result = tmp2(onClose(stateFromStores[7]).USER_SETTINGS_TRY_OUT_PREMIUM);
  const sourceAnalyticsLocations = tmp2Result.sourceAnalyticsLocations;
  const analyticsLocations = tmp2Result.analyticsLocations;
  let obj2 = initialTarget(stateFromStores[8]);
  shuffleButtonLocation = obj2.useTryItOutMobileRefreshConfig("PremiumTryItOutModal").shuffleButtonLocation;
  const tmp4 = onClose(stateFromStores[9])();
  let closure_5 = tmp4;
  const items1 = [sourceAnalyticsLocations];
  const effect = sourceAnalyticsLocations.useEffect(() => {
    let obj3;
    const obj2 = { type: PremiumUpsellTypes.PREMIUM_PROFILE_TRY_IT_OUT, location: obj3, location_stack: sourceAnalyticsLocations };
    obj3 = { page: metroRequire.USER_SETTINGS };
    const obj = AnalyticsUtilsDefault;
    obj.track(hasOwnProperty.PREMIUM_UPSELL_VIEWED, obj2);
  }, items1);
  const items2 = [stateFromStores];
  const effect1 = sourceAnalyticsLocations.useEffect(() => {
    if (null != stateFromStores) {
      const tmp3 = maybeFetchUserProfileDefault;
      tmp3(stateFromStores.id, stateFromStores.getAvatarURL(undefined, 80), {});
    }
  }, items2);
  const items3 = [stateFromStores, initialTarget, onClose, tmp4, shuffleButtonLocation];
  const memo = sourceAnalyticsLocations.useMemo(() => {
    let fn;
    let intl;
    let obj2;
    let onPress;
    const root = {
      title: intl.string(intl3.t.PxUx8e),
      headerLeft: obj2.getHeaderCloseButton(onClose),
      headerRight: fn,
      render() {
        let tmp2 = null;
        if (null != closure_1_2) {
          tmp2 = jsx(onClose(stateFromStores[16]), { currentUser: tmp, initialTarget });
        }
        return tmp2;
      }
    };
    intl = intl3.intl;
    fn = undefined;
    obj2 = NavigatorHeader;
    if ("header" === shuffleButtonLocation) {
      fn = () => {
        const HeaderActionButton = initialTarget(stateFromStores[14]).HeaderActionButton;
        const intl = initialTarget(stateFromStores[12]).intl;
        const intl2 = initialTarget(stateFromStores[12]).intl;
        return <HeaderActionButton IconComponent={initialTarget(stateFromStores[15]).DiceIcon} IconComponentSize="md" onPress={onPress} accessibilityLabel={intl.string(initialTarget(stateFromStores[12]).t.VzqqFC)} accessibilityHint={intl2.string(initialTarget(stateFromStores[12]).t.bBRdiB)} />;
      };
    }
    return { root };
  }, items3);
  const AnalyticsLocationProvider = initialTarget(stateFromStores[6]).AnalyticsLocationProvider;
  return <AnalyticsLocationProvider value={analyticsLocations}>{null}</AnalyticsLocationProvider>;
};
