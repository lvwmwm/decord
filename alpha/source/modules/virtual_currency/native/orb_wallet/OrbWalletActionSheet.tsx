// Module ID: 16889
// Function ID: 16890
// Name: OrbWalletActionSheet
// Dependencies: [19, 17, 1383, 15625, 16888, 1072, 1385, 21, 5014, 575, 16890, 7326, 16891, 504, 7351, 1113, 2172, 5624, 15627, 16892, 16893, 11416, 1252, 16901, 15626, 9553, 5258, 5080, 16904, 5272, 2]

// Module 16889 (OrbWalletActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import intl4 from "intl" /* 1113 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import PremiumConstants from "PremiumConstants" /* 1385 */;
import _modDef2172 from "module_2172" /* 2172 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5258 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7351 */;
import OrbChallengesStore2 from "OrbChallengesStore" /* 15625 */;
import OrbChallengeActionCreators from "OrbChallengeActionCreators" /* 15627 */;
import OrbWalletConstants from "OrbWalletConstants" /* 16888 */;
import OrbWalletCards from "OrbWalletCards" /* 16901 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1383 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let BottomSheet, _require, importDefault;

let closure_12;
let obj2;
let obj3;
let obj4;
let unpackModuleId;
function StatefulOrbChallengesCard(reopenWallet) {
  let closure_1;
  let intl;
  reopenWallet = reopenWallet.reopenWallet;
  let orbWalletAnalyticsPage;
  let tmp = closure_13();
  importDefault = tmp;
  let obj = reopenWallet(orbWalletAnalyticsPage[10]);
  orbWalletAnalyticsPage = obj.useOrbWalletAnalyticsPage();
  const analyticsLocations = require("useAnalyticsLocations")().analyticsLocations;
  let obj2 = reopenWallet(orbWalletAnalyticsPage[12]);
  const fetchOrbChallenges = obj2.useFetchOrbChallenges({ shouldFetch: true });
  const challengesForOrbWallet = fetchOrbChallenges.challengesForOrbWallet;
  const refetch = fetchOrbChallenges.refetch;
  const hasFetchedChallenges = fetchOrbChallenges.hasFetchedChallenges;
  let obj3 = reopenWallet(orbWalletAnalyticsPage[13]);
  const items = [refetch];
  const stateFromStores = obj3.useStateFromStores(items, () => {
    const currentUser = refetch.getCurrentUser();
    const tmp = null != currentUser && !currentUser.isClaimed();
    return tmp;
  });
  const items1 = [stateFromStores];
  const obj4 = reopenWallet(orbWalletAnalyticsPage[13]);
  const orbChallengesDisplayError = obj4.useStateFromStoresObject(items1, () => ({ orbChallengesDisplayError: stateFromStores.orbChallengesDisplayError })).orbChallengesDisplayError;
  const obj5 = reopenWallet(orbWalletAnalyticsPage[10]);
  const openNitroCheckoutFromOrbWallet = obj5.useOpenNitroCheckoutFromOrbWallet(require("AnalyticsLocation").ORB_CHALLENGE_DISCOVERY_CLICK);
  const items2 = [orbChallengesDisplayError, refetch, stateFromStores, tmp.tryAgainLink];
  const items3 = [stateFromStores];
  const memo = analyticsLocations.useMemo(() => {
    let intl;
    let tmp2;
    let tryAgainLink;
    if (null != orbChallengesDisplayError) {
      let stringResult;
      if (orbChallengesDisplayError.errorType === orbChallengesDisplayError.CLAIM_CHALLENGE) {
        const intl3 = intl4.intl;
        stringResult = intl3.string(_modDef2172.FYb5rH);
      } else {
        const intl2 = intl4.intl;
        const obj2 = {
          underlineHook(children) {
                const obj = {
                  variant: "text-sm/normal",
                  color: "text-default",
                  style: tryAgainLink.tryAgainLink,
                  onPress() {
                    return closure_1_5();
                  },
                  accessibilityRole: "button",
                  children
                };
                return closure_2_11(reopenWallet(orbWalletAnalyticsPage[17]).Text, obj);
              }
        };
        stringResult = intl2.format(_modDef2172.ggLzeg, obj2);
      }
      tmp2 = { type: "warning", message: stringResult, role: "status" };
      const obj3 = { type: "warning", message: stringResult, role: "status" };
    } else {
      tmp2 = null;
      if (stateFromStores) {
        let obj = { type: "info", message: intl.string(intl4.t.qxk9zo), role: "status" };
        intl = intl4.intl;
        tmp2 = obj;
      }
    }
    return tmp2;
  }, items2);
  const items4 = [challengesForOrbWallet, analyticsLocations, orbWalletAnalyticsPage, openNitroCheckoutFromOrbWallet, reopenWallet];
  const callback = analyticsLocations.useCallback((arg0) => {
    let resolved;
    const tmp = stateFromStores;
    if (tmp) {
      resolved = Promise.resolve();
    } else {
      const obj = OrbChallengeActionCreators;
      resolved = obj.claimOrbChallenge(arg0);
    }
    return resolved;
  }, items3);
  const memo1 = analyticsLocations.useMemo(() => {
    let openNitroCheckout;
    let pageType;
    return challengesForOrbWallet.map((achievementDefinitionId) => {
      let tmp = null;
      if (null != achievementDefinitionId.achievementDefinitionId) {
        tmp = reopenWallet(pageType[10]).ORB_CHALLENGE_DISCOVERY_CLICKS[achievementDefinitionId.achievementDefinitionId];
      }
      let closure_0 = tmp;
      let tmp4 = achievementDefinitionId;
      if (null != tmp) {
        let obj = {
          onDiscoveryClick() {
              const obj = reopenWallet(orbWalletAnalyticsPage[19]);
              const obj2 = { pageType, sectionType: closure_1(orbWalletAnalyticsPage[14]).ORB_WALLET, ctaObject: closure_1(orbWalletAnalyticsPage[14]).ORB_CHALLENGE_DISCOVERY_CLICK };
              obj.trackOrbsClick(obj2);
              const obj3 = { analyticsLocations, openNitroCheckout, reopenWallet };
              closure_0(obj3);
            }
        };
        const merged = Object.assign(achievementDefinitionId);
        tmp4 = obj;
      }
      return tmp4;
    });
  }, items4);
  const obj6 = { title: intl.string(require("module_2172").H6Ny8N), isLoading: !hasFetchedChallenges, inlineNoticeProps: memo, challenges: memo1, onClaim: callback };
  const OrbChallengesCard = reopenWallet(orbWalletAnalyticsPage[20]).OrbChallengesCard;
  intl = reopenWallet(orbWalletAnalyticsPage[15]).intl;
  return closure_11(OrbChallengesCard, obj6);
}
function OrbWalletContent(analyticsPage) {
  let balance;
  let isPremiumSubscriber;
  let items2;
  let items3;
  analyticsPage = analyticsPage.analyticsPage;
  const reopenWallet = analyticsPage.reopenWallet;
  let tmp = closure_13();
  let obj = balance(isPremiumSubscriber[25]);
  balance = obj.useFetchVirtualCurrencyBalance().balance;
  isPremiumSubscriber = undefined;
  let ref;
  let obj2 = balance(isPremiumSubscriber[21]);
  isPremiumSubscriber = obj2.useIsPremiumSubscriber(PremiumTypes.TIER_2);
  const analyticsLocations = analyticsPage(isPremiumSubscriber[11])().analyticsLocations;
  const items = [ref];
  const obj3 = balance(isPremiumSubscriber[13]);
  const stateFromStoresObject = obj3.useStateFromStoresObject(items, () => ({ challengesForOrbWallet: ref.challengesForOrbWallet, hasFetchedChallenges: ref.hasFetchedChallenges }));
  const challengesForOrbWallet = stateFromStoresObject.challengesForOrbWallet;
  const hasFetchedChallenges = stateFromStoresObject.hasFetchedChallenges;
  ref = analyticsLocations.useRef(false);
  const items1 = [hasFetchedChallenges, challengesForOrbWallet, isPremiumSubscriber, balance, analyticsLocations, analyticsPage];
  const effect = analyticsLocations.useEffect(() => {
    let found;
    let obj2;
    const tmp = hasFetchedChallenges && !ref.current;
    if (tmp) {
      ref.current = true;
      const obj = { location_stack: analyticsLocations, location_page: analyticsPage, location_section: AnalyticsLocationDefault.ORB_WALLET, location_object: AnalyticsLocationDefault.ORB_WALLET, wallet_primary_card_type: obj2.getWalletPrimaryCardType(isPremiumSubscriber, balance), wallet_visible_achievements: challengesForOrbWallet.map((achievementIdentifier) => achievementIdentifier.achievementIdentifier), wallet_visible_completed_achievements: found.map((achievementIdentifier) => achievementIdentifier.achievementIdentifier) };
      const track = AnalyticsUtilsDefault.track;
      const ORB_WALLET_VIEWED = AnalyticEvents.ORB_WALLET_VIEWED;
      AnalyticsUtilsDefault;
      obj2 = OrbWalletCards;
      found = challengesForOrbWallet.filter((achievementStatus) => achievementStatus.achievementStatus === balance(isPremiumSubscriber[24]).UserAchievementStatus.COMPLETED);
      track(ORB_WALLET_VIEWED, obj);
    }
  }, items1);
  const effect1 = analyticsLocations.useEffect(() => {
    const obj = balance(isPremiumSubscriber[18]);
    const result = obj.ackOrbChallengesUnread();
  }, []);
  const obj4 = { style: tmp.container, children: items3 };
  const obj5 = { style: tmp.section, children: items2 };
  items2 = [closure_11(balance(isPremiumSubscriber[20]).OrbBalanceHeader, { orbBalance: balance }), closure_11(balance(isPremiumSubscriber[23]).OrbWalletPrimaryCard, { orbBalance: balance })];
  items3 = [closure_12(challengesForOrbWallet, obj5), , , ];
  const obj6 = { style: tmp.section, children: closure_11(StatefulOrbChallengesCard, { reopenWallet }) };
  items3[1] = closure_11(challengesForOrbWallet, obj6);
  const obj7 = { style: tmp.divider };
  items3[2] = closure_11(challengesForOrbWallet, obj7);
  const obj8 = { style: tmp.section, children: closure_11(balance(isPremiumSubscriber[20]).OrbWalletFooter, {}) };
  items3[3] = closure_11(challengesForOrbWallet, obj8);
  return closure_12(challengesForOrbWallet, obj4);
}
const View = react_native.View;
let closure_7 = OrbChallengesStore2.OrbChallengesDisplayErrorType;
let closure_8 = OrbWalletConstants.ORB_WALLET_ACTION_SHEET_KEY;
const AnalyticEvents = Constants.AnalyticEvents;
const PremiumTypes = PremiumConstants.PremiumTypes;
({ jsx: unpackModuleId, jsxs: closure_12 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, section: obj3, tryAgainLink: { textDecorationLine: "underline" }, divider: obj4 };
obj2 = { width: "100%", paddingBottom: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16 };
obj4 = { height: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
let closure_13 = createStyles(obj);
class OrbWalletActionSheet {
  constructor(source) {
    let AnalyticsLocationsProvider;
    let Provider;
    let obj2;
    let obj3;
    let obj4;
    _require = source;
    source = source.source;
    const analyticsPage = source.analyticsPage;
    const themeOverride = source.themeOverride;
    let items = [source];
    let items1 = [source];
    const ref = react.useRef(null);
    const callback = react.useCallback(() => {
      const obj = ActionSheetActionCreatorsDefault;
      obj.openLazy(() => Promise.resolve(closure_1_16), closure_8, source);
    }, items);
    const items2 = [analyticsPage];
    const memo = react.useMemo(() => {
      let items1;
      if (typeof source === "string") {
        const items = [tmp, AnalyticsLocationDefault.ORB_WALLET];
        items1 = items;
      } else {
        items1 = [AnalyticsLocationDefault.ORB_WALLET];
      }
      return items1;
    }, items1);
    const memo1 = react.useMemo(() => ({ analyticsPage }), items2);
    let obj = { theme: themeOverride, children: closure_11(AnalyticsLocationsProvider, obj2) };
    const ThemeContextProvider = require("native").ThemeContextProvider;
    obj2 = { newLocations: memo, children: closure_11(Provider, obj3) };
    AnalyticsLocationsProvider = require("AnalyticsLocationsProvider").AnalyticsLocationsProvider;
    obj3 = { value: memo1, children: closure_11(BottomSheet, obj4) };
    Provider = require("OrbWalletUtils").OrbWalletAnalyticsContext.Provider;
    obj4 = { ref, startExpanded: true, children: closure_11(OrbWalletContent, { analyticsPage, reopenWallet: callback }) };
    BottomSheet = require("Sheet/BottomSheet").BottomSheet;
    return closure_11(ThemeContextProvider, obj);
  }
}
let result = size.fileFinishedImporting("modules/virtual_currency/native/orb_wallet/OrbWalletActionSheet.tsx");

export default OrbWalletActionSheet;
