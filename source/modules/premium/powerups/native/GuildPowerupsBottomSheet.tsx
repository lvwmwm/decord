// Module ID: 11541
// Function ID: 89883
// Name: GuildPowerupsBottomSheetHeader
// Dependencies: []
// Exports: default

// Module 11541 (GuildPowerupsBottomSheetHeader)
function GuildPowerupsBottomSheetHeader(arg0) {
  let guildId;
  let powerup;
  ({ guildId, powerup } = arg0);
  const tmp = callback3();
  const tmp2 = importDefault(dependencyMap[7])(guildId, powerup);
  let obj = require(dependencyMap[9]);
  const calculatePowerupCardStatus = obj.useCalculatePowerupCardStatus(powerup, tmp2, importDefault(dependencyMap[8])(guildId, powerup, "GuildPowerupsBottomSheet"));
  const tmp5 = importDefault(dependencyMap[10])(powerup, true);
  let str = "";
  if (null != tmp5) {
    str = tmp5;
  }
  let obj1 = require(dependencyMap[11]);
  const items = [closure_4];
  let str2;
  const stateFromStores = obj1.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  if (powerup.skuId === closure_5) {
    str2 = "+";
  }
  obj = {};
  if (powerup.type === constants.LEVEL) {
    obj = { style: tmp.gemContainer };
    let tmp14 = callback(importDefault(dependencyMap[12]), obj);
  } else if (tmp7 === tmp8) {
    obj1 = { style: tmp.image };
    const obj2 = { stateMachine: "SM_Auto" };
    const obj3 = { reducedMotion: stateFromStores };
    obj2.dataBinding = obj3;
    obj1.children = callback(require(dependencyMap[13]).GameServerHostingRive, obj2);
    tmp14 = callback(View, obj1);
  } else {
    const obj4 = { imageUrl: str, style: tmp.image, isAnimated: true };
    tmp14 = callback(importDefault(dependencyMap[14]), obj4);
  }
  const items1 = [tmp14, ];
  const obj5 = { style: tmp.headerContainer };
  const obj6 = { tooltipText: false, contain: false, children: powerup.title };
  const items2 = [callback(require(dependencyMap[15]).Text, obj6), ];
  const obj7 = { cost: powerup.cost, costDecorator: str2, status: calculatePowerupCardStatus, style: tmp.statusContainer };
  items2[1] = callback(require(dependencyMap[16]).GuildPowerupsCardFooter, obj7);
  obj5.children = items2;
  items1[1] = callback2(View, obj5);
  obj.children = items1;
  return callback2(View, obj);
}
function GuildPowerupsBottomSheetLevelBody(powerup) {
  const tmp = callback3();
  const require = tmp;
  const arr = importDefault(dependencyMap[17])(powerup.powerup);
  return callback(View, {
    style: tmp.levelContainer,
    children: importDefault(dependencyMap[17])(powerup.powerup).map((children) => {
      let obj = tmp(closure_2[18]);
      obj = { style: tmp.perkContainer };
      const iconForPerk = obj.getIconForPerk(children.perkIcon);
      obj = { style: tmp.perkText, variant: "text-md/medium", children: children.description };
      const items = [callback(tmp(closure_2[15]).Text, obj), callback(iconForPerk, { style: tmp.perkIcon })];
      obj.children = items;
      return callback2(closure_3, obj, "perk-" + arg1 + "-" + children.perkIcon);
    })
  });
}
function GuildPowerupsBottomSheetBody(powerup) {
  powerup = powerup.powerup;
  const tmp = callback3();
  const type = powerup.type;
  if (constants.PERK === type) {
    let obj = {};
    obj = { style: tmp.description, variant: "text-md/medium", children: powerup.description };
    const items = [callback(require(dependencyMap[15]).Text, obj), ];
    let tmp11 = null != powerup.deactivationCooldownPeriodDays;
    if (tmp11) {
      tmp11 = powerup.deactivationCooldownPeriodDays > 0;
    }
    if (tmp11) {
      const obj1 = { style: tmp.cooldownInfo };
      const obj2 = { size: "xs", color: importDefault(dependencyMap[6]).colors.TEXT_MUTED };
      const items1 = [callback(require(dependencyMap[19]).CircleInformationIcon, obj2), ];
      const obj3 = { cachedAt: "y", edpbxy: "isArray" };
      const intl = require(dependencyMap[20]).intl;
      const obj4 = { cooldownDays: powerup.deactivationCooldownPeriodDays };
      obj3.children = intl.formatToPlainString(importDefault(dependencyMap[21]).GMhQcE, obj4);
      items1[1] = callback(require(dependencyMap[15]).Text, obj3);
      obj1.children = items1;
      tmp11 = callback2(View, obj1);
    }
    items[1] = tmp11;
    obj.children = items;
    return callback2(closure_10, obj);
  } else if (constants.LEVEL === type) {
    obj = { powerup };
    return callback(GuildPowerupsBottomSheetLevelBody, obj);
  }
}
function GuildPowerupsBottomSheetFooter(arg0) {
  let disabled;
  let guildId;
  let isPowerupActive;
  let powerup;
  let reason;
  let showConfigureButton;
  let showToggleButton;
  ({ guildId, powerup } = arg0);
  let importDefault;
  let closure_2;
  const tmp = callback3();
  const tmp2 = importDefault(closure_2[22])(guildId);
  ({ showToggleButton, showConfigureButton, isPowerupActive } = importDefault(closure_2[23])(guildId, powerup));
  const require = isPowerupActive;
  if (showConfigureButton) {
    let result = powerup.skuId !== require(closure_2[24]).GUILD_POWERUP_TAG_SKU_ID;
    if (!result) {
      let obj = require(closure_2[25]);
      result = obj.canUseMobileServerTagSettings(guildId);
    }
    showConfigureButton = result;
  }
  const tmp3 = importDefault(closure_2[23])(guildId, powerup);
  ({ disabled, reason } = importDefault(closure_2[26])(guildId, powerup, isPowerupActive));
  const tmp10 = importDefault(closure_2[27])(guildId, powerup);
  importDefault = tmp10.onActivate;
  closure_2 = importDefault(closure_2[28])(guildId, powerup);
  if (tmp2) {
    let tmp15 = !showConfigureButton;
    const hasItem = set.has(powerup.skuId);
    if (tmp15) {
      tmp15 = isPowerupActive;
    }
    if (tmp15) {
      tmp15 = powerup.type === constants.PERK;
    }
    if (tmp15) {
      tmp15 = hasItem;
    }
    if (!tmp15) {
      tmp15 = powerup.skuId === closure_5;
    }
    obj = { style: tmp.footerContainer };
    if (tmp15) {
      obj = { style: tmp.description, variant: "text-md/bold" };
      const intl = require(closure_2[20]).intl;
      obj.children = intl.string(importDefault(closure_2[21]).jo5++h);
      tmp15 = callback(require(closure_2[15]).Text, obj);
    }
    const items = [tmp15, , , ];
    let tmp24 = disabled;
    if (disabled) {
      tmp24 = null != reason;
    }
    if (tmp24) {
      const obj1 = { text: reason };
      tmp24 = callback(importDefault(closure_2[30]), obj1);
    }
    items[1] = tmp24;
    if (showConfigureButton) {
      const obj2 = { variant: "primary" };
      const intl2 = require(closure_2[20]).intl;
      obj2.text = intl2.string(importDefault(closure_2[21]).g5Ds69);
      obj2.onPress = tmp11;
      showConfigureButton = callback(require(closure_2[31]).Button, obj2);
    }
    items[2] = showConfigureButton;
    if (showToggleButton) {
      showToggleButton = powerup.skuId !== closure_5;
    }
    if (!showToggleButton) {
      items[3] = showToggleButton;
      obj.children = items;
      return tmp18(tmp19, obj);
    } else {
      const obj3 = {};
      let str3 = "primary";
      if (isPowerupActive) {
        str3 = "secondary";
      }
      obj3.variant = str3;
      const intl3 = require(closure_2[20]).intl;
      const string = intl3.string;
      let TZsu1U = importDefault(closure_2[21]);
      if (isPowerupActive) {
        TZsu1U = TZsu1U.TZsu1U;
        let stringResult = string(TZsu1U);
      } else {
        stringResult = string(TZsu1U.gSxlHf);
      }
      obj3.text = stringResult;
      obj3.loading = tmp10.isLoading;
      obj3.disabled = disabled;
      obj3.onPress = function onPress() {
        if (isPowerupActive) {
          if (null != callback) {
            callback();
          }
        } else if (null != onActivate) {
          onActivate();
        }
      };
      callback(require(closure_2[31]).Button, obj3);
      const tmp34 = callback;
    }
    const tmp18 = closure_9;
    const tmp19 = View;
  } else {
    return null;
  }
}
const View = require(dependencyMap[0]).View;
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = require(dependencyMap[2]).GAME_SERVER_POWERUP_SKU_ID;
const _module = require(dependencyMap[3]);
({ GuildPowerupType: closure_6, GUILD_POWERUP_CONFIGURABLE_SKUS_DESKTOP: closure_7 } = _module);
const _module1 = require(dependencyMap[4]);
({ jsx: closure_8, jsxs: closure_9, Fragment: closure_10 } = _module1);
const _module2 = require(dependencyMap[5]);
let obj = {};
obj = { padding: importDefault(dependencyMap[6]).space.PX_16, gap: importDefault(dependencyMap[6]).space.PX_16 };
obj.container = obj;
obj.headerContainer = { marginTop: importDefault(dependencyMap[6]).space.PX_24, alignItems: "center" };
const obj1 = { marginTop: importDefault(dependencyMap[6]).space.PX_24, alignItems: "center" };
obj.statusContainer = { justifyContent: "center", gap: importDefault(dependencyMap[6]).space.PX_8 };
const obj2 = { justifyContent: "center", gap: importDefault(dependencyMap[6]).space.PX_8 };
obj.levelContainer = { flexDirection: "column", gap: importDefault(dependencyMap[6]).space.PX_8, marginTop: importDefault(dependencyMap[6]).space.PX_16 };
obj.perkContainer = { 9223372036854775807: "Array", 9223372036854775807: "isArray", 0: "accessibilityRole" };
obj.perkIcon = {};
const obj3 = { flexDirection: "column", gap: importDefault(dependencyMap[6]).space.PX_8, marginTop: importDefault(dependencyMap[6]).space.PX_16 };
obj.perkText = { marginStart: importDefault(dependencyMap[6]).space.PX_8 };
const obj4 = { marginStart: importDefault(dependencyMap[6]).space.PX_8 };
obj.footerContainer = { gap: importDefault(dependencyMap[6]).space.PX_12, marginTop: importDefault(dependencyMap[6]).space.PX_8 };
obj.image = { "Null": "CARD", "Null": "SenderStopped" };
const obj5 = { gap: importDefault(dependencyMap[6]).space.PX_12, marginTop: importDefault(dependencyMap[6]).space.PX_8 };
obj.description = { marginHorizontal: importDefault(dependencyMap[6]).space.PX_24, textAlign: "center" };
const obj6 = { marginHorizontal: importDefault(dependencyMap[6]).space.PX_24, textAlign: "center" };
obj.cooldownInfo = { gap: importDefault(dependencyMap[6]).space.PX_4, marginTop: importDefault(dependencyMap[6]).space.PX_8 };
const obj7 = { gap: importDefault(dependencyMap[6]).space.PX_4, marginTop: importDefault(dependencyMap[6]).space.PX_8 };
obj.gemContainer = { marginTop: importDefault(dependencyMap[6]).space.PX_16 };
let closure_11 = _module2.createStyles(obj);
const _module3 = require(dependencyMap[34]);
const result = _module3.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsBottomSheet.tsx");

export default function GuildPowerupsBottomSheet(arg0) {
  let guildId;
  let powerup;
  ({ guildId, powerup } = arg0);
  let obj = require(dependencyMap[32]);
  const logPowerupModalOpened = obj.useLogPowerupModalOpened(guildId, powerup, require(dependencyMap[32]).ModalType.DETAIL);
  obj = { startExpanded: true };
  obj = { style: callback3().container };
  const items = [callback(GuildPowerupsBottomSheetHeader, { guildId, powerup }), callback(GuildPowerupsBottomSheetBody, { guildId, powerup }), callback(GuildPowerupsBottomSheetFooter, { guildId, powerup })];
  obj.children = items;
  obj.children = callback2(View, obj);
  return callback(require(dependencyMap[33]).BottomSheet, obj);
};
