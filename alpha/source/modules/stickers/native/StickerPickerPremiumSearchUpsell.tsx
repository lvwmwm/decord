// Module ID: 9744
// Function ID: 9745
// Name: StickerPickerPremiumSearchUpsell
// Dependencies: [19, 1085, 1391, 21, 5090, 587, 558, 576, 6841, 9394, 9219, 9208, 9451, 1264, 4726, 1126, 9005, 9453, 2]

// Module 9744 (StickerPickerPremiumSearchUpsell)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 587 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1264 */;
import PremiumUtils from "PremiumUtils" /* 4726 */;
import react from "react" /* 19 */;
import Constants from "Constants" /* 1085 */;
import PremiumConstants from "PremiumConstants" /* 1391 */;
import createStyles from "createStyles" /* 5090 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let flag, importDefault, obj1, tmp12, tmp15, tmp3, tmp5, tmp6, tmp7, tmp8, trackResult;

let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
({ AnalyticEvents: closure_4, AnalyticsPages: hasOwnProperty, AnalyticsSections: metroRequire } = Constants);
({ PremiumSubscriptionSKUs: metroImportDefault, PremiumUpsellTypes: metroImportAll } = PremiumConstants);
const jsx = Fragment.jsx;
let obj = { nitroIcon: obj2 };
obj2 = { marginRight: nativeDefault.space.PX_8, alignSelf: "center" };
let closure_10 = createStyles.createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function StickerPickerPremiumSearchUpsell(guildId) {
  let analyticsLocations;
  let first;
  let loading;
  let onPress;
  let ref;
  let useTier0UpsellContent;
  const tmp = guildId;
  let obj = guildId(analyticsLocations[7]);
  const cResult = obj.c(14);
  guildId = guildId.guildId;
  const tmp4 = closure_10();
  let obj2 = useTier0UpsellContent;
  importDefault = useTier0UpsellContent.useRef(false);
  analyticsLocations = require("useAnalyticsLocations")().analyticsLocations;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmpResult = tmp(analyticsLocations[9]);
    const upsellType = tmpResult.getUpsellType(tmp(tmp2[10]).EntitlementFeatureNames.STICKERS_EVERYWHERE);
    cResult[0] = upsellType;
    first = upsellType;
  } else {
    first = cResult[0];
  }
  const tmpResult2 = tmp(analyticsLocations[11]);
  const premiumUpsellConfig = tmpResult2.usePremiumUpsellConfig(first, analyticsLocations);
  useTier0UpsellContent = premiumUpsellConfig.useTier0UpsellContent;
  ({ loading, onPress } = require("usePremiumFeatureUpsellGetNitro")(useTier0UpsellContent, premiumUpsellConfig.onViewAllPerks, constants2.PREMIUM_UPSELL_STICKERS_EVERYWHERE));
  const tmp9 = require("usePremiumFeatureUpsellGetNitro")(useTier0UpsellContent, premiumUpsellConfig.onViewAllPerks, constants2.PREMIUM_UPSELL_STICKERS_EVERYWHERE);
  if (cResult[1] === analyticsLocations) {
    if (cResult[2] === guildId) {
      let tmp10;
      let tmp11;
      let tmp14;
      let tmp13;
      let tmp17;
      if (cResult[3] === useTier0UpsellContent) {
        tmp10 = cResult[4];
        tmp11 = cResult[5];
      }
      const effect = obj2.useEffect(tmp10, tmp11);
      const _Symbol = Symbol;
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(tmp2[15]).intl;
        const stringResult = intl.string(tmp(analyticsLocations[15]).t.Mr9vVW);
        const intl2 = tmp(tmp2[15]).intl;
        const stringResult1 = intl2.string(tmp(analyticsLocations[15]).t.pj0XBN);
        cResult[6] = stringResult;
        cResult[7] = stringResult1;
        tmp14 = stringResult1;
        tmp13 = stringResult;
      } else {
        tmp13 = cResult[6];
        tmp14 = cResult[7];
      }
      if (cResult[8] !== tmp4.nitroIcon) {
        const NitroWheelIcon = tmp(tmp2[16]).NitroWheelIcon;
        const tmp19 = <NitroWheelIcon size="sm" color={require("native").colors.INTERACTIVE_TEXT_ACTIVE} style={tmp4.nitroIcon} />;
        cResult[8] = tmp4.nitroIcon;
        cResult[9] = tmp19;
        tmp17 = tmp19;
      } else {
        tmp17 = cResult[9];
      }
      if (cResult[10] === loading) {
        if (cResult[11] === onPress) {
          let tmp20;
          if (cResult[12] === tmp17) {
            tmp20 = cResult[13];
          }
          return tmp20;
        }
      }
      const tmp22 = jsx(require("PremiumExpressionPickerSearchUpsell"), { body: tmp13, ctaText: tmp14, icon: tmp17, loading, onPress });
      cResult[10] = loading;
      cResult[11] = onPress;
      cResult[12] = tmp17;
      cResult[13] = tmp22;
      tmp20 = tmp22;
    }
  }
  class L {
    constructor() {
      if (!closure_1.current) {
        flag = true;
        tmp.current = true;
        tmp2 = closure_1;
        tmp3 = closure_2;
        tmp4 = closure_1(closure_2[13]);
        tmp5 = AnalyticEvents;
        obj = { type: null, location: null, location_stack: null, sku_id: null };
        tmp6 = PremiumUpsellTypes;
        obj.type = PremiumUpsellTypes.STICKERS_EVERYWHERE_INLINE_UPSELL;
        tmp7 = guildId;
        tmp8 = null;
        track = tmp4.track;
        PREMIUM_UPSELL_VIEWED = AnalyticEvents.PREMIUM_UPSELL_VIEWED;
        if (null != guildId) {
          tmp10 = AnalyticsPages;
          DM_CHANNEL = AnalyticsPages.GUILD_CHANNEL;
        } else {
          tmp9 = AnalyticsPages;
          DM_CHANNEL = AnalyticsPages.DM_CHANNEL;
        }
        obj1 = { page: null, section: null };
        obj1.page = DM_CHANNEL;
        tmp11 = AnalyticsSections;
        obj1.section = AnalyticsSections.STICKER_PICKER_UPSELL;
        obj.location = obj1;
        tmp12 = analyticsLocations;
        obj.location_stack = analyticsLocations;
        tmp13 = closure_0;
        obj3 = closure_0(tmp3[14]);
        tmp14 = useTier0UpsellContent;
        tmp15 = PremiumSubscriptionSKUs;
        obj.sku_id = obj3.castPremiumSubscriptionAsSkuId(useTier0UpsellContent ? tmp15.TIER_0 : tmp15.TIER_2);
        trackResult = track(PREMIUM_UPSELL_VIEWED, obj);
      }
      return;
    }
  }
  const items = [analyticsLocations, guildId, useTier0UpsellContent];
  cResult[1] = analyticsLocations;
  cResult[2] = guildId;
  cResult[3] = useTier0UpsellContent;
  cResult[4] = L;
  cResult[5] = items;
  tmp11 = items;
  tmp10 = L;
}) : (function StickerPickerPremiumSearchUpsell(guildId) {
  let loading;
  let onPress;
  let ref;
  guildId = guildId.guildId;
  let analyticsLocations;
  let useTier0UpsellContent;
  const tmp = closure_10();
  importDefault = useTier0UpsellContent.useRef(false);
  analyticsLocations = require("useAnalyticsLocations")().analyticsLocations;
  const usePremiumUpsellConfig = guildId(analyticsLocations[11]).usePremiumUpsellConfig;
  const tmp2 = guildId(analyticsLocations[11]);
  let obj = guildId(analyticsLocations[9]);
  const premiumUpsellConfig = usePremiumUpsellConfig(obj.getUpsellType(guildId(analyticsLocations[10]).EntitlementFeatureNames.STICKERS_EVERYWHERE), analyticsLocations);
  useTier0UpsellContent = premiumUpsellConfig.useTier0UpsellContent;
  const tmp4 = require("usePremiumFeatureUpsellGetNitro")(useTier0UpsellContent, premiumUpsellConfig.onViewAllPerks, constants2.PREMIUM_UPSELL_STICKERS_EVERYWHERE);
  const items = [analyticsLocations, guildId, useTier0UpsellContent];
  ({ loading, onPress } = tmp4);
  const effect = useTier0UpsellContent.useEffect(() => {
    let obj2;
    let obj3;
    if (!ref.current) {
      let DM_CHANNEL;
      tmp.current = true;
      const obj = { type: metroImportAll.STICKERS_EVERYWHERE_INLINE_UPSELL, location: obj2, location_stack: analyticsLocations, sku_id: obj3.castPremiumSubscriptionAsSkuId(useTier0UpsellContent ? metroImportDefault.TIER_0 : metroImportDefault.TIER_2) };
      const track = AnalyticsUtilsDefault.track;
      const PREMIUM_UPSELL_VIEWED = constants.PREMIUM_UPSELL_VIEWED;
      AnalyticsUtilsDefault;
      if (null != guildId) {
        DM_CHANNEL = hasOwnProperty.GUILD_CHANNEL;
      } else {
        DM_CHANNEL = hasOwnProperty.DM_CHANNEL;
      }
      obj2 = { page: DM_CHANNEL, section: metroRequire.STICKER_PICKER_UPSELL };
      obj3 = PremiumUtils;
      track(PREMIUM_UPSELL_VIEWED, obj);
    }
  }, items);
  require("PremiumExpressionPickerSearchUpsell");
  const intl = guildId(analyticsLocations[15]).intl;
  const intl2 = guildId(analyticsLocations[15]).intl;
  let obj3 = { size: "sm", color: require("native").colors.INTERACTIVE_TEXT_ACTIVE, style: tmp.nitroIcon };
  const NitroWheelIcon = guildId(analyticsLocations[16]).NitroWheelIcon;
  return <tmp6 body={intl.string(guildId(analyticsLocations[15]).t.Mr9vVW)} ctaText={intl2.string(guildId(analyticsLocations[15]).t.pj0XBN)} icon={null} loading={loading} onPress={onPress} />;
});
const result = size.fileFinishedImporting("modules/stickers/native/StickerPickerPremiumSearchUpsell.tsx");

export default tmp4;
