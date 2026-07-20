// Module ID: 9611
// Function ID: 74881
// Name: PerkRow
// Dependencies: []
// Exports: default

// Module 9611 (PerkRow)
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
  const items1 = [callback(arg1(dependencyMap[12]).Icon, obj), ];
  obj = { style: tmp.perkText, children: perk.description() };
  items1[1] = callback(arg1(dependencyMap[13]).Text, obj);
  obj.children = items1;
  return closure_14(closure_4, obj);
}
let closure_3 = importAll(dependencyMap[0]);
({ View: closure_4, Image: closure_5, ScrollView: closure_6 } = arg1(dependencyMap[1]));
let closure_7 = importDefault(dependencyMap[2]);
const tmp2 = arg1(dependencyMap[1]);
({ AnalyticEvents: closure_8, AnalyticsSections: closure_9, AnalyticsObjects: closure_10 } = arg1(dependencyMap[3]));
const tmp3 = arg1(dependencyMap[3]);
({ SubscriptionPlans: closure_11, NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM: closure_12 } = arg1(dependencyMap[4]));
const tmp4 = arg1(dependencyMap[4]);
({ jsx: closure_13, jsxs: closure_14 } = arg1(dependencyMap[5]));
let obj = {
  icon: importDefault(dependencyMap[6]),
  description() {
    const intl = arg1(dependencyMap[7]).intl;
    return intl.string(arg1(dependencyMap[7]).t.uAfKTe);
  },
  color: importDefault(dependencyMap[8]).unsafe_rawColors.PREMIUM_PERK_PURPLE
};
const items = [obj, , ];
obj = {
  icon: importDefault(dependencyMap[9]),
  description() {
    const intl = arg1(dependencyMap[7]).intl;
    return intl.formatToPlainString(arg1(dependencyMap[7]).t.aVSVBO, { numFreeGuildSubscriptions: closure_12 });
  }
};
items[1] = obj;
obj = {
  icon: importDefault(dependencyMap[10]),
  description() {
    const intl = arg1(dependencyMap[7]).intl;
    return intl.string(arg1(dependencyMap[7]).t.pqHIf7);
  },
  color: importDefault(dependencyMap[8]).unsafe_rawColors.PREMIUM_PERK_GREEN
};
items[2] = obj;
let obj3 = arg1(dependencyMap[11]);
const obj1 = { alert: { paddingTop: 18 }, shortHeightAlert: { height: 500 }, content: { alignItems: "center" }, closeContainer: { handleResetDismissibilityClick: 1163547236, GameDetectionDebugLevel: 1091646939, EXAMPLE_DOMAIN: 151597 }, description: {} };
const obj2 = { alignItems: 50138112, flexGrow: 1498038784, zIndex: 1657405443, isGift: -1287520253, giftRecipient: 989856585, isSocialLayerStorefrontEnabled: 1140851451, render: 137835, backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_SURFACE_HIGH, borderRadius: importDefault(dependencyMap[8]).radii.sm };
obj1.perks = obj2;
obj3 = { <string:80385792>: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000014988829658595644, <string:80454656>: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000015911256348749364, <string:4281159936>: 1758216363932721300000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, <string:80795969>: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000006796460827503577, <string:4281226240>: 131072.0055866321, borderBottomColor: importDefault(dependencyMap[8]).unsafe_rawColors.PRIMARY_560 };
obj1.perkRow = obj3;
obj1.lastPerkRow = { borderBottomWidth: 0 };
obj1.perkIcon = {};
obj1.perkText = { has: null, colors: 0 };
obj1.imageHeader = { marginBottom: 12 };
let closure_16 = obj3.createStyles(obj1);
const tmp5 = arg1(dependencyMap[5]);
const result = arg1(dependencyMap[27]).fileFinishedImporting("modules/stickers/native/premium/StickersPremiumUpsellAlert.tsx");

export default function StickersPremiumUpsellAlert(arg0) {
  let onClose;
  ({ onClose, analyticsLocation: closure_0 } = arg0);
  let importDefault;
  const tmp = callback2();
  const effect = React.useEffect(() => {
    if (!ready.isReady()) {
      analyticsLocations(closure_2[14]).wait(() => callback(closure_2[15]).loadProducts());
      const obj = analyticsLocations(closure_2[14]);
    }
  }, []);
  const tmp3 = importDefault(dependencyMap[16])(PREMIUM_MONTH_TIER_2.PREMIUM_MONTH_TIER_2);
  let priceString;
  if (null != tmp3) {
    priceString = tmp3.priceString;
  }
  importDefault = importDefault(dependencyMap[18])().analyticsLocations;
  let obj = {};
  const intl = arg1(dependencyMap[7]).intl;
  obj.cancelText = intl.string(arg1(dependencyMap[7]).t.f3Pet9);
  obj.confirmColor = arg1(dependencyMap[12]).ButtonColors.GREEN;
  const intl2 = arg1(dependencyMap[7]).intl;
  obj.confirmText = intl2.string(arg1(dependencyMap[7]).t.o3Tnif);
  obj.onConfirm = function onConfirm() {
    let obj = analyticsLocations(paths[20]);
    obj = {};
    obj = {};
    const merged = Object.assign(callback);
    obj["section"] = obj.STICKER_PREMIUM_TIER_2_UPSELL_MODAL;
    obj["object"] = constants2.BUTTON_CTA;
    obj.location = obj;
    obj.track(constants.PREMIUM_PROMOTION_OPENED, obj);
    analyticsLocations(paths[21]).pushLazy(callback(paths[23])(paths[22], paths.paths), { analyticsLocations });
  };
  obj.onClose = onClose;
  obj.onCancel = onClose;
  const items = [tmp.alert, ];
  let shortHeightAlert = null;
  if (importDefault(dependencyMap[17])().height <= 580) {
    shortHeightAlert = tmp.shortHeightAlert;
  }
  items[1] = shortHeightAlert;
  obj.style = items;
  obj = { style: tmp.closeContainer };
  obj = { "Null": "absolute", "Null": 0, onPress: onClose };
  const obj1 = { source: importDefault(dependencyMap[25]) };
  obj.children = callback(arg1(dependencyMap[12]).Icon, obj1);
  obj.children = callback(arg1(dependencyMap[24]).PressableOpacity, obj);
  const items1 = [callback(closure_4, obj), ];
  const obj2 = {};
  const obj3 = {
    style: tmp.content,
    onStartShouldSetResponder() {
      return true;
    }
  };
  const tmp5 = closure_14;
  const tmp6 = importDefault(dependencyMap[19]);
  const items2 = [callback(closure_5, { source: importDefault(dependencyMap[26]), style: tmp.imageHeader }), , ];
  const obj5 = { style: tmp.description, variant: "text-md/medium" };
  const intl3 = arg1(dependencyMap[7]).intl;
  const obj6 = {};
  let str = "$...";
  if (null != priceString) {
    str = priceString;
  }
  obj6.monthlyPrice = str;
  obj5.children = intl3.format(arg1(dependencyMap[7]).t.TBsJfQ, obj6);
  items2[1] = callback(arg1(dependencyMap[13]).Text, obj5);
  const obj4 = { source: importDefault(dependencyMap[26]), style: tmp.imageHeader };
  const tmp10 = closure_14;
  const tmp11 = closure_4;
  const tmp12 = callback;
  const tmp8 = callback;
  const tmp9 = closure_6;
  items2[2] = callback(closure_4, { style: tmp.perks, children: items.map((perk) => callback2(closure_17, { perk, isLastPerk: arg1 === length.length - 1 }, arg1)) });
  obj3.children = items2;
  obj2.children = tmp10(tmp11, obj3);
  items1[1] = tmp8(tmp9, obj2);
  obj.children = items1;
  return tmp5(tmp6, obj);
};
