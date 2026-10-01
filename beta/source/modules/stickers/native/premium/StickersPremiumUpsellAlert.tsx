// Module ID: 9870
// Function ID: 9871
// Name: StickersPremiumUpsellAlert
// Dependencies: [19, 17, 6658, 1074, 1374, 21, 9871, 1115, 576, 9872, 9873, 4836, 1177, 4832, 573, 6839, 8665, 1479, 6583, 5300, 1241, 8695, 5435, 6413, 9874, 2]
// Exports: default

// Module 9870 (StickersPremiumUpsellAlert)
import nativeDefault from "native" /* 576 */;
import intl4 from "intl" /* 1115 */;
import native from "native" /* 1177 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import Text_Text from "Text/Text" /* 4832 */;
import openPremiumModalDefault from "openPremiumModal" /* 8695 */;
import AssetRegistryDefault from "AssetRegistry" /* 9871 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 9872 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 9873 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import IAPStore from "IAPStore" /* 6658 */;
import Constants from "Constants" /* 1074 */;
import PremiumConstants from "PremiumConstants" /* 1374 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c10;
let c9;
let closure_12;
let closure_14;
let closure_15;
let closure_4;
let hasOwnProperty;
let map1;
let metroImportAll;
let metroRequire;
let obj5;
let obj6;
let unpackModuleId;
function PerkRow(perk) {
  let items1;
  perk = perk.perk;
  const isLastPerk = perk.isLastPerk;
  const tmp = closure_17();
  items = [tmp.perkRow, ];
  let lastPerkRow;
  const tmp2 = closure_15;
  const tmp3 = React3;
  if (isLastPerk) {
    lastPerkRow = tmp.lastPerkRow;
  }
  const obj = { style: items, children: items1 };
  items[1] = lastPerkRow;
  items1 = [, ];
  const obj2 = { style: tmp.perkIcon, source: perk.icon, disableColor: null == perk.color, color: perk.color };
  items1[0] = authStore2(native.Icon, obj2);
  const obj3 = { style: tmp.perkText, variant: "text-md/medium", color: "interactive-text-active", children: perk.description() };
  const Text = Text_Text.Text;
  items1[1] = authStore2(Text, obj3);
  return tmp2(tmp3, obj);
}
({ View: closure_4, Image: hasOwnProperty, ScrollView: metroRequire } = react_native);
({ AnalyticEvents: metroImportAll, AnalyticsSections: c9, AnalyticsObjects: c10 } = Constants);
({ SubscriptionPlans: unpackModuleId, NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM: closure_12, PRICE_PLACEHOLDER: map1 } = PremiumConstants);
({ jsx: closure_14, jsxs: closure_15 } = Fragment);
let obj = {
  icon: AssetRegistryDefault,
  description() {
    const intl = intl4.intl;
    return intl.string(intl4.t.uAfKTe);
  },
  color: nativeDefault.unsafe_rawColors.PREMIUM_PERK_PURPLE
};
let items = [obj, , ];
let obj2 = {
  icon: AssetRegistryDefault2,
  description() {
    const intl = intl4.intl;
    const obj = { numFreeGuildSubscriptions };
    return intl.formatToPlainString(intl4.t.aVSVBO, obj);
  }
};
items[1] = obj2;
let obj3 = {
  icon: AssetRegistryDefault3,
  description() {
    const intl = intl4.intl;
    return intl.string(intl4.t.pqHIf7);
  },
  color: nativeDefault.unsafe_rawColors.PREMIUM_PERK_GREEN
};
items[2] = obj3;
let createStyles = createStyles_mod;
let obj4 = { alert: { paddingTop: 18 }, shortHeightAlert: { height: 500 }, content: { alignItems: "center" }, closeContainer: { flexDirection: "row-reverse", width: "100%", marginBottom: 16 }, description: { textAlign: "center", lineHeight: 20 }, perks: obj5, perkRow: obj6, lastPerkRow: { borderBottomWidth: 0 }, perkIcon: { width: 24, marginRight: 20 }, perkText: { lineHeight: 20, flexShrink: 1 }, imageHeader: { marginBottom: 12 } };
obj5 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.sm, marginTop: 16, marginBottom: 0, paddingHorizontal: 12, paddingVertical: 8, width: "100%" };
createStyles = createStyles.createStyles;
obj6 = { paddingVertical: 10, borderBottomColor: nativeDefault.unsafe_rawColors.PRIMARY_560, borderBottomWidth: 1, flexDirection: "row", alignItems: "center" };
let closure_17 = createStyles(obj4);
const result = size.fileFinishedImporting("modules/stickers/native/premium/StickersPremiumUpsellAlert.tsx");

export default function StickersPremiumUpsellAlert(arg0) {
  let Icon;
  let PressableOpacity;
  let TBsJfQ;
  let format;
  let intl;
  let intl2;
  let items1;
  let items2;
  let length;
  let obj3;
  let obj4;
  let onClose;
  let ready;
  ({ onClose, analyticsLocation: require } = arg0);
  let analyticsLocations;
  const tmp = closure_17();
  const effect = react.useEffect(() => {
    if (!ready.isReady()) {
      let obj = analyticsLocations(dependencyMap[14]);
      obj.wait(() => {
        const obj = analyticsLocations(closure_1_2[15]);
        return obj.loadProducts();
      });
    }
  }, []);
  const tmp5 = analyticsLocations(8665)(PREMIUM_MONTH_TIER_2.PREMIUM_MONTH_TIER_2);
  let priceString;
  if (tmp5 != null) {
    priceString = tmp5.priceString;
  }
  const height = tmp3(1479)().height;
  analyticsLocations = tmp3(6583)().analyticsLocations;
  let obj = {
    cancelText: intl.string(intl4.t.f3Pet9),
    confirmColor: native.ButtonColors.GREEN,
    confirmText: intl2.string(intl4.t.o3Tnif),
    onConfirm() {
      let obj2;
      const obj = { location: obj2 };
      obj2 = { section: React4.STICKER_PREMIUM_TIER_2_UPSELL_MODAL, object: constants.BUTTON_CTA };
      const track = AnalyticsUtilsDefault.track;
      const PREMIUM_PROMOTION_OPENED = metroImportAll.PREMIUM_PROMOTION_OPENED;
      AnalyticsUtilsDefault;
      const merged = Object.assign(require);
      track(PREMIUM_PROMOTION_OPENED, obj);
      const obj3 = { analyticsLocations };
      openPremiumModalDefault(obj3);
    },
    onClose,
    onCancel: onClose,
    style: items,
    children: items1
  };
  const tmp3Result = analyticsLocations(5300);
  intl = intl4.intl;
  intl2 = intl4.intl;
  items = [tmp.alert, ];
  let shortHeightAlert = null;
  if (height <= 580) {
    shortHeightAlert = tmp.shortHeightAlert;
  }
  items[1] = shortHeightAlert;
  let obj2 = { style: tmp.closeContainer, children: closure_14(PressableOpacity, obj3) };
  obj3 = { accessibilityRole: "button", accessibilityLabel: "close", onPress: onClose, children: closure_14(Icon, obj4) };
  PressableOpacity = tmp9(5435).PressableOpacity;
  obj4 = { source: analyticsLocations(6413) };
  Icon = tmp9(1177).Icon;
  items1 = [closure_14(closure_4, obj2), ];
  const obj5 = {
    style: tmp.content,
    onStartShouldSetResponder() {
      return true;
    },
    children: items2
  };
  items2 = [, , ];
  const obj6 = { source: analyticsLocations(9874), style: tmp.imageHeader };
  items2[0] = closure_14(closure_5, obj6);
  const obj7 = { style: tmp.description, variant: "text-md/medium", children: format(TBsJfQ, { monthlyPrice: priceString }) };
  const Text = tmp9(4832).Text;
  const intl3 = tmp9(1115).intl;
  format = intl3.format;
  TBsJfQ = tmp9(1115).t.TBsJfQ;
  const tmp13 = closure_6;
  if (priceString == null) {
    priceString = closure_13;
  }
  const obj8 = { children: closure_15(closure_4, obj5) };
  items2[1] = closure_14(Text, obj7);
  const obj9 = {
    style: tmp.perks,
    children: items.map((perk, index) => {
      const obj = { perk, isLastPerk: index === items.length - 1 };
      return closure_1_14(PerkRow, obj, index);
    })
  };
  items2[2] = closure_14(closure_4, obj9);
  items1[1] = closure_14(tmp13, obj8);
  return closure_15(tmp3Result, obj);
};
