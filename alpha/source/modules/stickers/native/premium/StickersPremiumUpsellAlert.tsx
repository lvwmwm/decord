// Module ID: 10272
// Function ID: 10273
// Name: StickersPremiumUpsellAlert
// Dependencies: [19, 17, 7590, 1072, 1386, 21, 10273, 1114, 575, 10274, 10275, 5009, 1188, 5619, 7597, 9887, 1492, 7320, 6025, 1253, 9884, 6974, 8351, 5712, 10276, 2]
// Exports: default

// Module 10272 (StickersPremiumUpsellAlert)
import nativeDefault from "native" /* 575 */;
import intl4 from "intl" /* 1114 */;
import native from "native" /* 1188 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1253 */;
import Text_Text from "Text/Text" /* 5619 */;
import openPremiumModalDefault from "openPremiumModal" /* 9884 */;
import AssetRegistryDefault from "AssetRegistry" /* 10273 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 10274 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 10275 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import IAPStore from "IAPStore" /* 7590 */;
import Constants from "Constants" /* 1072 */;
import PremiumConstants from "PremiumConstants" /* 1386 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let c10;
let c9;
let closure_12;
let closure_14;
let closure_4;
let hasOwnProperty;
let map1;
let metroImportAll;
let metroImportDefault;
let obj5;
let obj6;
let unpackModuleId;
function PerkRow(perk) {
  let items1;
  perk = perk.perk;
  const isLastPerk = perk.isLastPerk;
  const tmp = closure_16();
  items = [tmp.perkRow, ];
  let lastPerkRow;
  const tmp2 = authStore3;
  const tmp3 = React3;
  if (isLastPerk) {
    lastPerkRow = tmp.lastPerkRow;
  }
  const obj = { style: items, children: items1 };
  items[1] = lastPerkRow;
  items1 = [, ];
  const obj2 = { style: tmp.perkIcon, source: perk.icon, disableColor: null == perk.color, color: perk.color };
  items1[0] = map1(native.Icon, obj2);
  const obj3 = { style: tmp.perkText, variant: "text-md/medium", color: "interactive-text-active", children: perk.description() };
  const Text = Text_Text.Text;
  items1[1] = map1(Text, obj3);
  return tmp2(tmp3, obj);
}
({ View: closure_4, ScrollView: hasOwnProperty } = react_native);
({ AnalyticEvents: metroImportDefault, AnalyticsSections: metroImportAll, AnalyticsObjects: c9 } = Constants);
({ SubscriptionPlans: c10, NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM: unpackModuleId, PRICE_PLACEHOLDER: closure_12 } = PremiumConstants);
({ jsx: map1, jsxs: closure_14 } = Fragment);
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
    const obj = { numFreeGuildSubscriptions: unpackModuleId };
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
let closure_16 = createStyles(obj4);
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
  const tmp = closure_16();
  const effect = react.useEffect(() => {
    if (!ready.isReady()) {
      const obj = analyticsLocations(dependencyMap[14]);
      const products = obj.loadProducts();
    }
  }, []);
  const tmp5 = analyticsLocations(9887)(PREMIUM_MONTH_TIER_2.PREMIUM_MONTH_TIER_2);
  let priceString;
  if (tmp5 != null) {
    priceString = tmp5.priceString;
  }
  const height = tmp3(1492)().height;
  analyticsLocations = tmp3(7320)().analyticsLocations;
  let obj = {
    cancelText: intl.string(intl4.t.f3Pet9),
    confirmColor: native.ButtonColors.GREEN,
    confirmText: intl2.string(intl4.t.o3Tnif),
    onConfirm() {
      let obj2;
      const obj = { location: obj2 };
      obj2 = { section: metroImportAll.STICKER_PREMIUM_TIER_2_UPSELL_MODAL, object: constants.BUTTON_CTA };
      const track = AnalyticsUtilsDefault.track;
      const PREMIUM_PROMOTION_OPENED = metroImportDefault.PREMIUM_PROMOTION_OPENED;
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
  const tmp3Result = analyticsLocations(6025);
  intl = intl4.intl;
  intl2 = intl4.intl;
  items = [tmp.alert, ];
  let shortHeightAlert = null;
  if (height <= 580) {
    shortHeightAlert = tmp.shortHeightAlert;
  }
  items[1] = shortHeightAlert;
  let obj2 = { style: tmp.closeContainer, children: closure_13(PressableOpacity, obj3) };
  obj3 = { accessibilityRole: "button", accessibilityLabel: "close", onPress: onClose, children: closure_13(Icon, obj4) };
  PressableOpacity = tmp9(6974).PressableOpacity;
  obj4 = { source: analyticsLocations(8351) };
  Icon = tmp9(1188).Icon;
  items1 = [closure_13(closure_4, obj2), ];
  const obj5 = {
    style: tmp.content,
    onStartShouldSetResponder() {
      return true;
    },
    children: items2
  };
  const obj6 = { source: analyticsLocations(10276), style: tmp.imageHeader };
  const tmp3Result2 = analyticsLocations(5712);
  items2 = [closure_13(tmp3Result2, obj6), , ];
  const obj7 = { style: tmp.description, variant: "text-md/medium", children: format(TBsJfQ, { monthlyPrice: priceString }) };
  const Text = tmp9(5619).Text;
  const intl3 = tmp9(1114).intl;
  format = intl3.format;
  TBsJfQ = tmp9(1114).t.TBsJfQ;
  const tmp13 = closure_5;
  if (priceString == null) {
    priceString = closure_12;
  }
  const obj8 = { children: closure_14(closure_4, obj5) };
  items2[1] = closure_13(Text, obj7);
  const obj9 = {
    style: tmp.perks,
    children: items.map((perk, index) => {
      const obj = { perk, isLastPerk: index === items.length - 1 };
      return closure_1_13(PerkRow, obj, index);
    })
  };
  items2[2] = closure_13(closure_4, obj9);
  items1[1] = closure_13(tmp13, obj8);
  return closure_14(tmp3Result, obj);
};
