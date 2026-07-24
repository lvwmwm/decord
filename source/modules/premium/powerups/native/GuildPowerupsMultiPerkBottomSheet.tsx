// Module ID: 11607
// Function ID: 90285
// Name: GuildPowerupsMultiPerkCard
// Dependencies: [27, 33, 4130, 689, 666, 3840, 4066, 11575, 11561, 11558, 11581, 11608, 11582, 11594, 11595, 11599, 11585, 1273, 1212, 4126, 11586, 4543, 2230, 1557, 11609, 5187, 5189, 11612, 11605, 2]
// Exports: default

// Module 11607 (GuildPowerupsMultiPerkCard)
import { View } from "GuildPowerupsSectionHeader";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
function GuildPowerupsMultiPerkCard(arg0) {
  let forceStaticImage;
  let guildId;
  let isNewPerk;
  let powerup;
  ({ guildId, powerup, isNewPerk, forceStaticImage } = arg0);
  let obj = require(3840) /* isThemeLight */;
  const tmp = callback2(obj.isThemeLight(onActivate(4066)()));
  const tmp2 = onActivate(11575)(guildId);
  const tmp3 = onActivate(11561)(guildId, powerup);
  let obj1 = require(11581) /* useCalculatePowerupCardStatus */;
  const calculatePowerupCardStatus = obj1.useCalculatePowerupCardStatus(powerup, tmp3, onActivate(11558)(guildId, powerup, "GuildPowerupsMultiPerkBottomSheet"));
  let obj2 = require(11561) /* usePowerupsActiveStatuses */;
  const result = obj2.isPowerupActiveStatusActive(tmp3);
  require = result;
  const tmp7 = onActivate(11582)(powerup, true, forceStaticImage);
  const disabled = onActivate(11594)(guildId, powerup, result).disabled;
  const tmp8 = onActivate(11595)(guildId, powerup);
  onActivate = tmp8.onActivate;
  const dependencyMap = onActivate(11599)(guildId, powerup);
  obj = {};
  const items = [tmp.container, ];
  let disabled2 = disabled;
  if (disabled) {
    disabled2 = tmp2;
  }
  if (disabled2) {
    disabled2 = tmp.disabled;
  }
  items[1] = disabled2;
  obj.style = items;
  obj = {};
  const items1 = [tmp.imageContainer, , , ];
  let type;
  if (null != calculatePowerupCardStatus) {
    type = calculatePowerupCardStatus.type;
  }
  items1[1] = "active" === type && tmp.imageContainerActive;
  let type1;
  if (null != calculatePowerupCardStatus) {
    type1 = calculatePowerupCardStatus.type;
  }
  items1[2] = "expiring" === type1 && tmp.imageContainerExpiring;
  let type2;
  if (null != calculatePowerupCardStatus) {
    type2 = calculatePowerupCardStatus.type;
  }
  items1[3] = "removing" === type2 && tmp.imageContainerRemoving;
  obj.style = items1;
  obj1 = {};
  let str = "";
  const tmp10 = View;
  const tmp11 = closure_5;
  const tmp12 = View;
  const tmp16 = callback;
  const tmp4 = onActivate(11558)(guildId, powerup, "GuildPowerupsMultiPerkBottomSheet");
  const tmp9 = closure_5;
  if (null != tmp7) {
    str = tmp7;
  }
  obj1.imageUrl = str;
  obj1.isAnimated = !forceStaticImage;
  obj1.style = tmp.image;
  const items2 = [tmp16(onActivate(11585), obj1), ];
  if (isNewPerk) {
    obj2 = {};
    const intl = require(1212) /* getSystemLocale */.intl;
    obj2.text = intl.string(require(1212) /* getSystemLocale */.t.y2b7CA);
    obj2.style = tmp.badge;
    isNewPerk = callback(require(1273) /* Button */.TextBadge, obj2);
  }
  items2[1] = isNewPerk;
  obj.children = items2;
  const items3 = [tmp11(tmp12, obj), ];
  const obj3 = { style: tmp.bodyContainer };
  const obj4 = { style: tmp.titleContainer };
  const tmp17 = onActivate(11585);
  const tmp21 = closure_5;
  const tmp22 = View;
  const tmp23 = closure_5;
  const tmp24 = View;
  const items4 = [callback(require(4126) /* Text */.Text, { variant: "heading-md/semibold", color: onActivate(11608)(result).textColor, children: powerup.title }), ];
  if (null != calculatePowerupCardStatus) {
    const obj6 = { status: calculatePowerupCardStatus };
    let tmp28 = callback(require(11586) /* GuildPowerupCardFooterActive */.GuildPowerupCardFooterStatus, obj6);
  } else {
    const obj7 = { cost: powerup.cost };
    tmp28 = callback(require(11586) /* GuildPowerupCardFooterActive */.GuildPowerupCardFooterCost, obj7);
  }
  items4[1] = tmp28;
  obj4.children = items4;
  const items5 = [tmp23(tmp24, obj4), ];
  if (!tmp2) {
    items5[1] = tmp2;
    obj3.children = items5;
    items3[1] = tmp21(tmp22, obj3);
    obj.children = items3;
    return tmp9(tmp10, obj);
  } else {
    const obj8 = { disabled, loading: tmp8.isLoading };
    let str2 = "primary";
    if (result) {
      str2 = "secondary";
    }
    obj8.variant = str2;
    const intl2 = require(1212) /* getSystemLocale */.intl;
    const tmp39 = onActivate(2230);
    obj8.text = intl2.string(result ? tmp39.TZsu1U : tmp39.gSxlHf);
    obj8.onPress = function onPress() {
      if (closure_0) {
        callback();
      } else {
        onActivate();
      }
    };
    callback(require(4543) /* Button */.Button, obj8);
    const tmp32 = callback;
  }
}
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
let closure_6 = _createForOfIteratorHelperLoose.createStyles((arg0) => {
  let obj = {};
  obj = { gap: importDefault(689).space.PX_8 };
  obj.container = obj;
  obj = { gap: importDefault(689).space.PX_24, marginHorizontal: importDefault(689).space.PX_16 };
  obj.cardsContainer = obj;
  obj.titleContainer = { flexDirection: "column", gap: 4 };
  obj.bodyContainer = { justifyContent: "space-between", alignItems: "center", flexDirection: "row" };
  const obj1 = { borderRadius: importDefault(689).radii.md, borderWidth: 1, borderColor: importDefault(689).colors.BACKGROUND_MOD_MUTED, borderStyle: "solid" };
  let str = "#ffffff";
  if (arg0) {
    str = "#000000";
  }
  const tmp = importDefault(666);
  const tmpResult = importDefault(666)(str);
  obj1.backgroundColor = importDefault(666)(str).alpha(0.04).hex();
  obj.imageContainer = obj1;
  const obj2 = {};
  const alphaResult = importDefault(666)(str).alpha(0.04);
  const tmp2 = importDefault(666);
  const tmp2Result = importDefault(666)(importDefault(689).unsafe_rawColors.GREEN_360);
  obj2.borderColor = importDefault(666)(importDefault(689).unsafe_rawColors.GREEN_360).alpha(0.35).hex();
  obj.imageContainerActive = obj2;
  const obj3 = {};
  const alphaResult1 = importDefault(666)(importDefault(689).unsafe_rawColors.GREEN_360).alpha(0.35);
  const tmp3 = importDefault(666);
  const tmp3Result = importDefault(666)(importDefault(689).unsafe_rawColors.YELLOW_300);
  obj3.borderColor = importDefault(666)(importDefault(689).unsafe_rawColors.YELLOW_300).alpha(0.35).hex();
  obj.imageContainerExpiring = obj3;
  const obj4 = {};
  const alphaResult2 = importDefault(666)(importDefault(689).unsafe_rawColors.YELLOW_300).alpha(0.35);
  const tmp4 = importDefault(666);
  const tmp4Result = importDefault(666)(importDefault(689).unsafe_rawColors.YELLOW_300);
  obj4.borderColor = importDefault(666)(importDefault(689).unsafe_rawColors.YELLOW_300).alpha(0.35).hex();
  obj.imageContainerRemoving = obj4;
  obj.image = { width: "75%", height: 180, resizeMode: "contain" };
  obj.disabled = { opacity: 0.5 };
  const alphaResult3 = importDefault(666)(importDefault(689).unsafe_rawColors.YELLOW_300).alpha(0.35);
  obj.badge = { position: "absolute", top: importDefault(689).space.PX_8, right: importDefault(689).space.PX_8 };
  return obj;
});
let obj = {};
obj = { gap: require("_createForOfIteratorHelperLoose").space.PX_24, marginHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16 };
obj.cardsContainer = obj;
obj.disabledReasonContainer = { marginHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, marginBottom: require("_createForOfIteratorHelperLoose").space.PX_16 };
let closure_7 = _createForOfIteratorHelperLoose.createStyles(obj);
let obj1 = { marginHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, marginBottom: require("_createForOfIteratorHelperLoose").space.PX_16 };
let result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsMultiPerkBottomSheet.tsx");

export default function GuildPowerupsMultiPerkBottomSheet(guildId) {
  guildId = guildId.guildId;
  const listing = guildId.listing;
  const tmp = callback3();
  const tmp2 = importDefault(11609)(guildId, listing);
  importDefault = tmp2;
  let tmp4Result = null;
  if (null != tmp2) {
    let obj = { scrollable: true, startExpanded: true, onDismiss: guildId.onDismiss };
    obj = {};
    obj = { paddingBottom: importDefault(1557)().bottom };
    obj.contentContainerStyle = obj;
    ({ title: obj4.title, description: obj4.description } = tmp2);
    const items = [callback(importDefault(11612), {}), , ];
    let tmp10 = null != tmp2.disabledReason;
    if (tmp10) {
      const obj2 = { style: tmp.disabledReasonContainer };
      const obj3 = { text: tmp2.disabledReason };
      obj2.children = callback(importDefault(11605), obj3);
      tmp10 = callback(View, obj2);
    }
    items[1] = tmp10;
    const obj4 = { style: tmp.cardsContainer };
    const powerups = listing.powerups;
    obj4.children = powerups.map((powerup) => outer1_4(outer1_8, { guildId, powerup, forceStaticImage: tmp2.forceStaticImages }, powerup.skuId));
    items[2] = callback(View, obj4);
    obj.children = items;
    obj.children = closure_5(guildId(5189).BottomSheetScrollView, obj);
    tmp4Result = callback(guildId(5187).BottomSheet, obj);
    const obj1 = {};
    const tmp4 = callback;
    const tmp7 = closure_5;
  }
  return tmp4Result;
};
