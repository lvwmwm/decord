// Module ID: 11569
// Function ID: 89973
// Name: GuildPowerupsMultiPerkCard
// Dependencies: []
// Exports: default

// Module 11569 (GuildPowerupsMultiPerkCard)
function GuildPowerupsMultiPerkCard(arg0) {
  let forceStaticImage;
  let guildId;
  let isNewPerk;
  let powerup;
  ({ guildId, powerup, isNewPerk, forceStaticImage } = arg0);
  let obj = require(closure_2[5]);
  const tmp = callback2(obj.isThemeLight(importDefault(closure_2[6])()));
  const tmp2 = importDefault(closure_2[7])(guildId);
  const tmp3 = importDefault(closure_2[8])(guildId, powerup);
  let obj1 = require(closure_2[10]);
  const calculatePowerupCardStatus = obj1.useCalculatePowerupCardStatus(powerup, tmp3, importDefault(closure_2[9])(guildId, powerup, "GuildPowerupsMultiPerkBottomSheet"));
  let obj2 = require(closure_2[8]);
  const result = obj2.isPowerupActiveStatusActive(tmp3);
  const require = result;
  const tmp7 = importDefault(closure_2[12])(powerup, true, forceStaticImage);
  const disabled = importDefault(closure_2[13])(guildId, powerup, result).disabled;
  const tmp8 = importDefault(closure_2[14])(guildId, powerup);
  const importDefault = tmp8.onActivate;
  closure_2 = importDefault(closure_2[15])(guildId, powerup);
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
  const tmp4 = importDefault(closure_2[9])(guildId, powerup, "GuildPowerupsMultiPerkBottomSheet");
  const tmp9 = closure_5;
  if (null != tmp7) {
    str = tmp7;
  }
  obj1.imageUrl = str;
  obj1.isAnimated = !forceStaticImage;
  obj1.style = tmp.image;
  const items2 = [tmp16(importDefault(closure_2[16]), obj1), ];
  if (isNewPerk) {
    obj2 = {};
    const intl = require(closure_2[18]).intl;
    obj2.text = intl.string(require(closure_2[18]).t.y2b7CA);
    obj2.style = tmp.badge;
    isNewPerk = callback(require(closure_2[17]).TextBadge, obj2);
  }
  items2[1] = isNewPerk;
  obj.children = items2;
  const items3 = [tmp11(tmp12, obj), ];
  const obj3 = { style: tmp.bodyContainer };
  const obj4 = { style: tmp.titleContainer };
  const tmp17 = importDefault(closure_2[16]);
  const tmp21 = closure_5;
  const tmp22 = View;
  const tmp23 = closure_5;
  const tmp24 = View;
  const items4 = [callback(require(closure_2[19]).Text, { variant: "heading-md/semibold", color: importDefault(closure_2[11])(result).textColor, children: powerup.title }), ];
  if (null != calculatePowerupCardStatus) {
    const obj6 = { status: calculatePowerupCardStatus };
    let tmp28 = callback(require(closure_2[20]).GuildPowerupCardFooterStatus, obj6);
  } else {
    const obj7 = { cost: powerup.cost };
    tmp28 = callback(require(closure_2[20]).GuildPowerupCardFooterCost, obj7);
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
    const intl2 = require(closure_2[18]).intl;
    const tmp39 = importDefault(closure_2[22]);
    obj8.text = intl2.string(result ? tmp39.TZsu1U : tmp39.gSxlHf);
    obj8.onPress = function onPress() {
      if (result) {
        callback();
      } else {
        onActivate();
      }
    };
    callback(require(closure_2[21]).Button, obj8);
    const tmp32 = callback;
  }
}
const View = require(dependencyMap[0]).View;
const _module = require(dependencyMap[1]);
({ jsx: closure_4, jsxs: closure_5 } = _module);
const _module1 = require(dependencyMap[2]);
let closure_6 = _module1.createStyles((arg0) => {
  let obj = {};
  obj = { gap: importDefault(dependencyMap[3]).space.PX_8 };
  obj.container = obj;
  obj = { gap: importDefault(dependencyMap[3]).space.PX_24, marginHorizontal: importDefault(dependencyMap[3]).space.PX_16 };
  obj.cardsContainer = obj;
  obj.titleContainer = {};
  obj.bodyContainer = { "Bool(false)": null, "Bool(false)": null, "Bool(false)": null };
  const obj1 = { borderRadius: importDefault(dependencyMap[3]).radii.md, borderWidth: 1, borderColor: importDefault(dependencyMap[3]).colors.BACKGROUND_MOD_MUTED, borderStyle: "solid" };
  let str = "#ffffff";
  if (arg0) {
    str = "#000000";
  }
  const tmp = importDefault(dependencyMap[4]);
  const tmpResult = importDefault(dependencyMap[4])(str);
  obj1.backgroundColor = importDefault(dependencyMap[4])(str).alpha(0.04).hex();
  obj.imageContainer = obj1;
  const obj2 = {};
  const alphaResult = importDefault(dependencyMap[4])(str).alpha(0.04);
  const tmp2 = importDefault(dependencyMap[4]);
  const tmp2Result = importDefault(dependencyMap[4])(importDefault(dependencyMap[3]).unsafe_rawColors.GREEN_360);
  obj2.borderColor = importDefault(dependencyMap[4])(importDefault(dependencyMap[3]).unsafe_rawColors.GREEN_360).alpha(0.35).hex();
  obj.imageContainerActive = obj2;
  const obj3 = {};
  const alphaResult1 = importDefault(dependencyMap[4])(importDefault(dependencyMap[3]).unsafe_rawColors.GREEN_360).alpha(0.35);
  const tmp3 = importDefault(dependencyMap[4]);
  const tmp3Result = importDefault(dependencyMap[4])(importDefault(dependencyMap[3]).unsafe_rawColors.YELLOW_300);
  obj3.borderColor = importDefault(dependencyMap[4])(importDefault(dependencyMap[3]).unsafe_rawColors.YELLOW_300).alpha(0.35).hex();
  obj.imageContainerExpiring = obj3;
  const obj4 = {};
  const alphaResult2 = importDefault(dependencyMap[4])(importDefault(dependencyMap[3]).unsafe_rawColors.YELLOW_300).alpha(0.35);
  const tmp4 = importDefault(dependencyMap[4]);
  const tmp4Result = importDefault(dependencyMap[4])(importDefault(dependencyMap[3]).unsafe_rawColors.YELLOW_300);
  obj4.borderColor = importDefault(dependencyMap[4])(importDefault(dependencyMap[3]).unsafe_rawColors.YELLOW_300).alpha(0.35).hex();
  obj.imageContainerRemoving = obj4;
  obj.image = {};
  obj.disabled = { opacity: 0.5 };
  const alphaResult3 = importDefault(dependencyMap[4])(importDefault(dependencyMap[3]).unsafe_rawColors.YELLOW_300).alpha(0.35);
  obj.badge = { position: "absolute", top: importDefault(dependencyMap[3]).space.PX_8, right: importDefault(dependencyMap[3]).space.PX_8 };
  return obj;
});
const _module2 = require(dependencyMap[2]);
let obj = {};
obj = { gap: importDefault(dependencyMap[3]).space.PX_24, marginHorizontal: importDefault(dependencyMap[3]).space.PX_16 };
obj.cardsContainer = obj;
obj.disabledReasonContainer = { marginHorizontal: importDefault(dependencyMap[3]).space.PX_16, marginBottom: importDefault(dependencyMap[3]).space.PX_16 };
let closure_7 = _module2.createStyles(obj);
const _module3 = require(dependencyMap[29]);
const result = _module3.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsMultiPerkBottomSheet.tsx");

export default function GuildPowerupsMultiPerkBottomSheet(guildId) {
  guildId = guildId.guildId;
  const require = guildId;
  const listing = guildId.listing;
  const tmp = callback3();
  const tmp2 = importDefault(dependencyMap[24])(guildId, listing);
  const importDefault = tmp2;
  let tmp4Result = null;
  if (null != tmp2) {
    let obj = { 1891290120: null, -475247768: null, onDismiss: guildId.onDismiss };
    obj = {};
    obj = { paddingBottom: importDefault(dependencyMap[23])().bottom };
    obj.contentContainerStyle = obj;
    ({ title: obj4.title, description: obj4.description } = tmp2);
    const items = [callback(importDefault(dependencyMap[27]), {}), , ];
    let tmp10 = null != tmp2.disabledReason;
    if (tmp10) {
      const obj2 = { style: tmp.disabledReasonContainer };
      const obj3 = { text: tmp2.disabledReason };
      obj2.children = callback(importDefault(dependencyMap[28]), obj3);
      tmp10 = callback(View, obj2);
    }
    items[1] = tmp10;
    const obj4 = { style: tmp.cardsContainer };
    const powerups = listing.powerups;
    obj4.children = powerups.map((powerup) => callback(closure_8, { guildId, powerup, forceStaticImage: tmp2.forceStaticImages }, powerup.skuId));
    items[2] = callback(View, obj4);
    obj.children = items;
    obj.children = closure_5(require(dependencyMap[26]).BottomSheetScrollView, obj);
    tmp4Result = callback(require(dependencyMap[25]).BottomSheet, obj);
    const obj1 = {};
    const tmp4 = callback;
    const tmp7 = closure_5;
  }
  return tmp4Result;
};
