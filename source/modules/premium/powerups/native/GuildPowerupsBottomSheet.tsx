// Module ID: 11551
// Function ID: 89932
// Name: GuildPowerupsBottomSheetHeader
// Dependencies: [27, 4122, 4019, 4018, 33, 4130, 689, 11531, 11528, 11552, 11553, 566, 11554, 3842, 11556, 4126, 11557, 11559, 11560, 4086, 1212, 2230, 11545, 11566, 4021, 8441, 11567, 11568, 11572, 11577, 11578, 4543, 11576, 5187, 2]
// Exports: default

// Module 11551 (GuildPowerupsBottomSheetHeader)
import { View } from "useGuildPowerupOnActivate";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { GAME_SERVER_POWERUP_SKU_ID as closure_5 } from "NewGamesCoachmarkContent";
import BoostedGuildTiers from "BoostedGuildTiers";
import jsxProd from "Background";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_6;
let closure_7;
let closure_8;
let closure_9;
function GuildPowerupsBottomSheetHeader(arg0) {
  let guildId;
  let powerup;
  ({ guildId, powerup } = arg0);
  const tmp = callback3();
  const tmp2 = importDefault(11531)(guildId, powerup);
  let obj = require(11552) /* useCalculatePowerupCardStatus */;
  const calculatePowerupCardStatus = obj.useCalculatePowerupCardStatus(powerup, tmp2, importDefault(11528)(guildId, powerup, "GuildPowerupsBottomSheet"));
  const tmp5 = importDefault(11553)(powerup, true);
  let str = "";
  if (null != tmp5) {
    str = tmp5;
  }
  let obj1 = require(566) /* initialize */;
  const items = [_isNativeReflectConstruct];
  let str2;
  const stateFromStores = obj1.useStateFromStores(items, () => outer1_4.useReducedMotion);
  if (powerup.skuId === closure_5) {
    str2 = "+";
  }
  obj = {};
  if (powerup.type === constants.LEVEL) {
    obj = { style: tmp.gemContainer };
    let tmp14 = callback(importDefault(11554), obj);
  } else if (tmp7 === tmp8) {
    obj1 = { style: tmp.image };
    const obj2 = { stateMachine: "SM_Auto" };
    const obj3 = { reducedMotion: stateFromStores };
    obj2.dataBinding = obj3;
    obj1.children = callback(require(3842) /* ManaContext */.GameServerHostingRive, obj2);
    tmp14 = callback(View, obj1);
  } else {
    const obj4 = { imageUrl: str, style: tmp.image, isAnimated: true };
    tmp14 = callback(importDefault(11556), obj4);
  }
  const items1 = [tmp14, ];
  const obj5 = { style: tmp.headerContainer };
  const obj6 = { variant: "heading-xl/bold", accessibilityRole: "header", children: powerup.title };
  const items2 = [callback(require(4126) /* Text */.Text, obj6), ];
  const obj7 = { cost: powerup.cost, costDecorator: str2, status: calculatePowerupCardStatus, style: tmp.statusContainer };
  items2[1] = callback(require(11557) /* GuildPowerupCardFooterActive */.GuildPowerupsCardFooter, obj7);
  obj5.children = items2;
  items1[1] = callback2(View, obj5);
  obj.children = items1;
  return callback2(View, obj);
}
function GuildPowerupsBottomSheetLevelBody(powerup) {
  const tmp = callback3();
  const require = tmp;
  const arr = importDefault(11559)(powerup.powerup);
  return callback(View, {
    style: tmp.levelContainer,
    children: importDefault(11559)(powerup.powerup).map((children) => {
      let obj = tmp(outer1_2[18]);
      obj = { style: tmp.perkContainer };
      const iconForPerk = obj.getIconForPerk(children.perkIcon);
      obj = { style: tmp.perkText, variant: "text-md/medium", children: children.description };
      const items = [outer1_8(tmp(outer1_2[15]).Text, obj), outer1_8(iconForPerk, { style: tmp.perkIcon })];
      obj.children = items;
      return outer1_9(outer1_3, obj, "perk-" + arg1 + "-" + children.perkIcon);
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
    const items = [callback(require(4126) /* Text */.Text, obj), ];
    let tmp11 = null != powerup.deactivationCooldownPeriodDays;
    if (tmp11) {
      tmp11 = powerup.deactivationCooldownPeriodDays > 0;
    }
    if (tmp11) {
      const obj1 = { style: tmp.cooldownInfo };
      const obj2 = { size: "xs", color: importDefault(689).colors.TEXT_MUTED };
      const items1 = [callback(require(4086) /* CircleInformationIcon */.CircleInformationIcon, obj2), ];
      const obj3 = { variant: "text-sm/medium", color: "text-muted" };
      const intl = require(1212) /* getSystemLocale */.intl;
      const obj4 = { cooldownDays: powerup.deactivationCooldownPeriodDays };
      obj3.children = intl.formatToPlainString(importDefault(2230).GMhQcE, obj4);
      items1[1] = callback(require(4126) /* Text */.Text, obj3);
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
  let onActivate;
  let dependencyMap;
  const tmp = callback3();
  const tmp2 = onActivate(11545)(guildId);
  ({ showToggleButton, showConfigureButton, isPowerupActive } = onActivate(11566)(guildId, powerup));
  if (showConfigureButton) {
    let result = powerup.skuId !== isPowerupActive(4021).GUILD_POWERUP_TAG_SKU_ID;
    if (!result) {
      let obj = isPowerupActive(8441);
      result = obj.canUseMobileServerTagSettings(guildId);
    }
    showConfigureButton = result;
  }
  const tmp3 = onActivate(11566)(guildId, powerup);
  ({ disabled, reason } = onActivate(11567)(guildId, powerup, isPowerupActive));
  const tmp10 = onActivate(11568)(guildId, powerup);
  onActivate = tmp10.onActivate;
  dependencyMap = onActivate(11572)(guildId, powerup);
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
      const intl = isPowerupActive(1212).intl;
      obj.children = intl.string(onActivate(2230)["jo5++h"]);
      tmp15 = callback(isPowerupActive(4126).Text, obj);
    }
    const items = [tmp15, , , ];
    let tmp24 = disabled;
    if (disabled) {
      tmp24 = null != reason;
    }
    if (tmp24) {
      const obj1 = { text: reason };
      tmp24 = callback(onActivate(11578), obj1);
    }
    items[1] = tmp24;
    if (showConfigureButton) {
      const obj2 = { variant: "primary" };
      const intl2 = isPowerupActive(1212).intl;
      obj2.text = intl2.string(onActivate(2230).g5Ds69);
      obj2.onPress = tmp11;
      showConfigureButton = callback(isPowerupActive(4543).Button, obj2);
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
      const intl3 = isPowerupActive(1212).intl;
      const string = intl3.string;
      let TZsu1U = onActivate(2230);
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
      callback(isPowerupActive(4543).Button, obj3);
      const tmp34 = callback;
    }
    tmp18 = closure_9;
    tmp19 = View;
  } else {
    return null;
  }
}
({ GuildPowerupType: closure_6, GUILD_POWERUP_CONFIGURABLE_SKUS_DESKTOP: closure_7 } = BoostedGuildTiers);
({ jsx: closure_8, jsxs: closure_9, Fragment: closure_10 } = jsxProd);
let obj = {};
obj = { padding: require("_createForOfIteratorHelperLoose").space.PX_16, gap: require("_createForOfIteratorHelperLoose").space.PX_16 };
obj.container = obj;
obj.headerContainer = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_24, alignItems: "center" };
let obj1 = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_24, alignItems: "center" };
obj.statusContainer = { justifyContent: "center", gap: require("_createForOfIteratorHelperLoose").space.PX_8 };
let obj2 = { justifyContent: "center", gap: require("_createForOfIteratorHelperLoose").space.PX_8 };
obj.levelContainer = { flexDirection: "column", gap: require("_createForOfIteratorHelperLoose").space.PX_8, marginTop: require("_createForOfIteratorHelperLoose").space.PX_16 };
obj.perkContainer = { flexDirection: "row", alignItems: "center", justifyContent: "space-between" };
obj.perkIcon = { width: 20, height: 20 };
let obj3 = { flexDirection: "column", gap: require("_createForOfIteratorHelperLoose").space.PX_8, marginTop: require("_createForOfIteratorHelperLoose").space.PX_16 };
obj.perkText = { marginStart: require("_createForOfIteratorHelperLoose").space.PX_8 };
let obj4 = { marginStart: require("_createForOfIteratorHelperLoose").space.PX_8 };
obj.footerContainer = { gap: require("_createForOfIteratorHelperLoose").space.PX_12, marginTop: require("_createForOfIteratorHelperLoose").space.PX_8 };
obj.image = { width: "100%", height: 160 };
let obj5 = { gap: require("_createForOfIteratorHelperLoose").space.PX_12, marginTop: require("_createForOfIteratorHelperLoose").space.PX_8 };
obj.description = { marginHorizontal: require("_createForOfIteratorHelperLoose").space.PX_24, textAlign: "center" };
let obj7 = { flexDirection: "row", alignItems: "center", justifyContent: "center", gap: require("_createForOfIteratorHelperLoose").space.PX_4, marginTop: require("_createForOfIteratorHelperLoose").space.PX_8 };
obj.cooldownInfo = obj7;
let obj6 = { marginHorizontal: require("_createForOfIteratorHelperLoose").space.PX_24, textAlign: "center" };
obj.gemContainer = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_16 };
let closure_11 = _createForOfIteratorHelperLoose.createStyles(obj);
const obj8 = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_16 };
let result = require("NewGamesCoachmarkContent").fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsBottomSheet.tsx");

export default function GuildPowerupsBottomSheet(arg0) {
  let guildId;
  let powerup;
  ({ guildId, powerup } = arg0);
  let obj = require(11576) /* ModalType */;
  const logPowerupModalOpened = obj.useLogPowerupModalOpened(guildId, powerup, require(11576) /* ModalType */.ModalType.DETAIL);
  obj = { startExpanded: true };
  obj = { style: callback3().container };
  const items = [callback(GuildPowerupsBottomSheetHeader, { guildId, powerup }), callback(GuildPowerupsBottomSheetBody, { guildId, powerup }), callback(GuildPowerupsBottomSheetFooter, { guildId, powerup })];
  obj.children = items;
  obj.children = callback2(View, obj);
  return callback(require(5187) /* Background */.BottomSheet, obj);
};
