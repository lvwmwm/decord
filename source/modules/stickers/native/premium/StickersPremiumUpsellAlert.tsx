// Module ID: 9660
// Function ID: 75174
// Name: PerkRow
// Dependencies: [31, 27, 5619, 653, 1851, 33, 9661, 1212, 689, 9662, 9663, 4130, 1273, 4126, 686, 6658, 7432, 1450, 5462, 4561, 675, 8183, 4660, 7696, 9664, 2]
// Exports: default

// Module 9660 (PerkRow)
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import ME from "ME";
import GuildFeatures from "GuildFeatures";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_12;
let closure_13;
let closure_14;
let closure_15;
let closure_4;
let closure_5;
let closure_6;
let closure_8;
let closure_9;
const require = arg1;
function PerkRow(perk) {
  perk = perk.perk;
  const tmp = callback2();
  let obj = {};
  const items = [tmp.perkRow, ];
  let lastPerkRow;
  if (perk.isLastPerk) {
    lastPerkRow = tmp.lastPerkRow;
  }
  items[1] = lastPerkRow;
  obj.style = items;
  obj = { style: tmp.perkIcon, source: perk.icon, disableColor: null == perk.color, color: perk.color };
  const items1 = [callback(require(1273) /* Button */.Icon, obj), ];
  obj = { style: tmp.perkText, variant: "text-md/medium", color: "interactive-text-active", children: perk.description() };
  items1[1] = callback(require(4126) /* Text */.Text, obj);
  obj.children = items1;
  return closure_15(closure_4, obj);
}
({ View: closure_4, Image: closure_5, ScrollView: closure_6 } = get_ActivityIndicator);
({ AnalyticEvents: closure_8, AnalyticsSections: closure_9, AnalyticsObjects: closure_10 } = ME);
({ SubscriptionPlans: closure_11, NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM: closure_12, PRICE_PLACEHOLDER: closure_13 } = GuildFeatures);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
let obj = {
  icon: require("registerAsset"),
  description() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.uAfKTe);
  },
  color: require("_createForOfIteratorHelperLoose").unsafe_rawColors.PREMIUM_PERK_PURPLE
};
let items = [obj, , ];
obj = {
  icon: require("registerAsset"),
  description() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.formatToPlainString(require(1212) /* getSystemLocale */.t.aVSVBO, { numFreeGuildSubscriptions: closure_12 });
  }
};
items[1] = obj;
obj = {
  icon: require("registerAsset"),
  description() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.pqHIf7);
  },
  color: require("_createForOfIteratorHelperLoose").unsafe_rawColors.PREMIUM_PERK_GREEN
};
items[2] = obj;
let obj1 = { alert: { paddingTop: 18 }, shortHeightAlert: { height: 500 }, content: { alignItems: "center" }, closeContainer: { flexDirection: "row-reverse", width: "100%", marginBottom: 16 }, description: { textAlign: "center", lineHeight: 20 } };
let obj2 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, marginTop: 16, marginBottom: 0, paddingHorizontal: 12, paddingVertical: 8, width: "100%" };
obj1.perks = obj2;
_createForOfIteratorHelperLoose = { paddingVertical: 10, borderBottomColor: require("_createForOfIteratorHelperLoose").unsafe_rawColors.PRIMARY_560, borderBottomWidth: 1, flexDirection: "row", alignItems: "center" };
obj1.perkRow = _createForOfIteratorHelperLoose;
obj1.lastPerkRow = { borderBottomWidth: 0 };
obj1.perkIcon = { width: 24, marginRight: 20 };
obj1.perkText = { lineHeight: 20, flexShrink: 1 };
obj1.imageHeader = { marginBottom: 12 };
let closure_17 = _createForOfIteratorHelperLoose.createStyles(obj1);
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/stickers/native/premium/StickersPremiumUpsellAlert.tsx");

export default function StickersPremiumUpsellAlert(arg0) {
  let onClose;
  let require;
  ({ onClose, analyticsLocation: require } = arg0);
  let analyticsLocations;
  const tmp = callback2();
  const effect = React.useEffect(() => {
    if (!outer1_7.isReady()) {
      analyticsLocations(outer1_2[14]).wait(() => analyticsLocations(outer2_2[15]).loadProducts());
      const obj = analyticsLocations(outer1_2[14]);
    }
  }, []);
  const tmp3 = analyticsLocations(7432)(PREMIUM_MONTH_TIER_2.PREMIUM_MONTH_TIER_2);
  let priceString;
  if (null != tmp3) {
    priceString = tmp3.priceString;
  }
  analyticsLocations = analyticsLocations(5462)().analyticsLocations;
  let obj = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.cancelText = intl.string(require(1212) /* getSystemLocale */.t.f3Pet9);
  obj.confirmColor = require(1273) /* Button */.ButtonColors.GREEN;
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj.confirmText = intl2.string(require(1212) /* getSystemLocale */.t.o3Tnif);
  obj.onConfirm = function onConfirm() {
    let obj = analyticsLocations(outer1_2[20]);
    obj = {};
    obj = {};
    const merged = Object.assign(closure_0);
    obj["section"] = outer1_9.STICKER_PREMIUM_TIER_2_UPSELL_MODAL;
    obj["object"] = outer1_10.BUTTON_CTA;
    obj.location = obj;
    obj.track(outer1_8.PREMIUM_PROMOTION_OPENED, obj);
    analyticsLocations(outer1_2[21])({ analyticsLocations });
  };
  obj.onClose = onClose;
  obj.onCancel = onClose;
  const items = [tmp.alert, ];
  let shortHeightAlert = null;
  if (analyticsLocations(1450)().height <= 580) {
    shortHeightAlert = tmp.shortHeightAlert;
  }
  items[1] = shortHeightAlert;
  obj.style = items;
  obj = { style: tmp.closeContainer };
  obj = { accessibilityRole: "button", accessibilityLabel: "close", onPress: onClose };
  const obj1 = { source: analyticsLocations(7696) };
  obj.children = callback(require(1273) /* Button */.Icon, obj1);
  obj.children = callback(require(4660) /* PressableBase */.PressableOpacity, obj);
  const items1 = [callback(closure_4, obj), ];
  const obj2 = {};
  const obj3 = {
    style: tmp.content,
    onStartShouldSetResponder() {
      return true;
    }
  };
  const tmp5 = closure_15;
  const tmp6 = analyticsLocations(4561);
  const items2 = [callback(closure_5, { source: analyticsLocations(9664), style: tmp.imageHeader }), , ];
  const obj5 = { style: tmp.description, variant: "text-md/medium" };
  const intl3 = require(1212) /* getSystemLocale */.intl;
  const obj6 = {};
  if (null == priceString) {
    priceString = closure_13;
  }
  obj6.monthlyPrice = priceString;
  obj5.children = intl3.format(require(1212) /* getSystemLocale */.t.TBsJfQ, obj6);
  items2[1] = callback(require(4126) /* Text */.Text, obj5);
  const obj4 = { source: analyticsLocations(9664), style: tmp.imageHeader };
  const tmp10 = closure_15;
  const tmp11 = closure_4;
  const tmp12 = callback;
  const tmp8 = callback;
  const tmp9 = closure_6;
  items2[2] = callback(closure_4, { style: tmp.perks, children: items.map((perk) => outer1_14(outer1_18, { perk, isLastPerk: arg1 === outer1_16.length - 1 }, arg1)) });
  obj3.children = items2;
  obj2.children = tmp10(tmp11, obj3);
  items1[1] = tmp8(tmp9, obj2);
  obj.children = items1;
  return tmp5(tmp6, obj);
};
