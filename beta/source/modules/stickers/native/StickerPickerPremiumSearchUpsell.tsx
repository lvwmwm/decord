// Module ID: 9879
// Function ID: 9880
// Name: StickerPickerPremiumSearchUpsell
// Dependencies: [19, 1074, 1374, 21, 4836, 576, 6583, 8614, 9421, 7273, 9422, 1241, 4488, 9774, 1115, 8122, 2]
// Exports: default

// Module 9879 (StickerPickerPremiumSearchUpsell)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import PremiumUtils from "PremiumUtils" /* 4488 */;
import react from "react" /* 19 */;
import Constants from "Constants" /* 1074 */;
import PremiumConstants from "PremiumConstants" /* 1374 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let importDefault;

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
const result = size.fileFinishedImporting("modules/stickers/native/StickerPickerPremiumSearchUpsell.tsx");

export default function StickerPickerPremiumSearchUpsell(guildId) {
  let loading;
  let onPress;
  let ref;
  guildId = guildId.guildId;
  let analyticsLocations;
  let useTier0UpsellContent;
  const tmp = closure_10();
  importDefault = useTier0UpsellContent.useRef(false);
  analyticsLocations = require("useAnalyticsLocations")().analyticsLocations;
  const usePremiumUpsellConfig = guildId(analyticsLocations[7]).usePremiumUpsellConfig;
  const tmp2 = guildId(analyticsLocations[7]);
  let obj = guildId(analyticsLocations[8]);
  const premiumUpsellConfig = usePremiumUpsellConfig(obj.getUpsellType(guildId(analyticsLocations[9]).EntitlementFeatureNames.STICKERS_EVERYWHERE), analyticsLocations);
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
  const intl = guildId(analyticsLocations[14]).intl;
  const intl2 = guildId(analyticsLocations[14]).intl;
  let obj3 = { size: "sm", color: require("native").colors.INTERACTIVE_TEXT_ACTIVE, style: tmp.nitroIcon };
  const NitroWheelIcon = guildId(analyticsLocations[15]).NitroWheelIcon;
  return <tmp6 body={intl.string(guildId(analyticsLocations[14]).t.Mr9vVW)} ctaText={intl2.string(guildId(analyticsLocations[14]).t.pj0XBN)} icon={null} loading={loading} onPress={onPress} />;
};
