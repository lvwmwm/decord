// Module ID: 19460
// Function ID: 19461
// Name: HexagonCampaignExpiringPromoSheet
// Dependencies: [19, 5195, 1072, 5016, 21, 16808, 6872, 5753, 7981, 10060, 10061, 16827, 10988, 17370, 1113, 4411, 5783, 10441, 2]
// Exports: default

// Module 19460 (HexagonCampaignExpiringPromoSheet)
import Fragment from "Fragment" /* 21 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 5016 */;
import HexagonCampaignConstants from "HexagonCampaignConstants" /* 5195 */;
import Text_Text from "Text/Text" /* 5783 */;
import QuestTypes from "QuestTypes" /* 6872 */;
import AnalyticsTypes from "AnalyticsTypes" /* 7981 */;
import openPremiumModalDefault from "openPremiumModal" /* 10060 */;
import PremiumFeaturesCards from "PremiumFeaturesCards" /* 10061 */;
import HexagonCampaignAnalytics from "HexagonCampaignAnalytics" /* 16808 */;
import react_mod from "react" /* 19 */;
import Constants from "Constants" /* 1072 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let importDefault;

let hasOwnProperty;
let metroRequire;
let react = react_mod;
const premiumEndDate = HexagonCampaignConstants.HEXAGON_CAMPAIGN_PREMIUM_CUTOFF_AT_MS;
({ AnalyticsObjects: hasOwnProperty, AnalyticsPages: metroRequire } = Constants);
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
const jsx = Fragment.jsx;
const EXPIRING_SOON_SHEET = HexagonCampaignAnalytics.HexagonCampaignContentSurface.EXPIRING_SOON_SHEET;
let result = size.fileFinishedImporting("modules/hexagon_campaign/native/HexagonCampaignExpiringPromoSheet.tsx");

export default function HexagonCampaignExpiringPromoSheet(markAsDismissed) {
  let intl3;
  let onPress;
  let ref;
  markAsDismissed = markAsDismissed.markAsDismissed;
  let callback;
  react = undefined;
  let obj = markAsDismissed(callback[5]);
  const trackHexagonCampaignContentViewed = obj.useTrackHexagonCampaignContentViewed(markAsDismissed(callback[6]).QuestContent.AD_PERK_MODAL, EXPIRING_SOON_SHEET, true);
  importDefault = react.useRef(false);
  const items = [markAsDismissed];
  callback = react.useCallback((arg0) => {
    if (!ref.current) {
      tmp.current = true;
      markAsDismissed(arg0);
    }
  }, items);
  let obj2 = markAsDismissed(callback[7]);
  const unmountEffect = obj2.useUnmountEffect(() => {
    callback(ContentDismissActionType.AUTO_DISMISS);
  });
  const items1 = [callback];
  const callback1 = react.useCallback(() => {
    let obj4;
    const obj = HexagonCampaignAnalytics;
    const obj2 = { content: QuestTypes.QuestContent.AD_PERK_MODAL, questContentCTA: AnalyticsTypes.QuestContentCTA.OPEN_NITRO_CHECKOUT };
    const result = obj.trackHexagonCampaignContentClicked(obj2);
    callback(ContentDismissActionType.TAKE_ACTION);
    const obj3 = { analyticsLocation: obj4, analyticsLocations: [], premiumFeatureCardOrder: PremiumFeaturesCards.PremiumFeatureCardOrder.TIER_2_LEADING };
    obj4 = { page: metroRequire.IN_APP, object: hasOwnProperty.PREMIUM_UPSELL_BUTTON };
    const tmp3 = openPremiumModalDefault;
    tmp3(obj3);
  }, items1);
  react = react.useCallback(() => {
    const obj = markAsDismissed(callback[5]);
    const obj2 = { content: markAsDismissed(callback[6]).QuestContent.AD_PERK_MODAL, questContentCTA: markAsDismissed(callback[8]).QuestContentCTA.LEARN_MORE };
    const result = obj.trackHexagonCampaignContentClicked(obj2);
    const obj3 = markAsDismissed(callback[11]);
    const result1 = obj3.openHexagonCampaignLearnMore();
  }, []);
  const items2 = [callback];
  const callback2 = react.useCallback(() => {
    callback(ContentDismissActionType.USER_DISMISS);
  }, items2);
  const PromoSheet = markAsDismissed(callback[12]).PromoSheet;
  const intl = markAsDismissed(callback[14]).intl;
  const intl2 = markAsDismissed(callback[14]).intl;
  let obj4 = {
    premiumEndDate,
    learnMoreHook(children, arg1) {
      return jsx(Text_Text.Text, { variant: "heading-md/medium", color: "text-link", accessibilityRole: "link", onPress, children }, arg1);
    }
  };
  ({ text: intl3.string(markAsDismissed(callback[14]).t.hIVbiP), onPress: callback1, shiny: false });
  require("NitroUpsellButton");
  intl3 = markAsDismissed(callback[14]).intl;
  return <PromoSheet illustration={null} title={intl.string(require("module_4411").sL4EQm)} description={intl2.format(require("module_4411")["8WoUjt"], obj4)} onDismiss={callback2} actions={null} />;
};
