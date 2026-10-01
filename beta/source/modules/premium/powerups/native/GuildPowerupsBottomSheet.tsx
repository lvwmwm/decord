// Module ID: 12014
// Function ID: 12015
// Name: GuildPowerupsBottomSheet
// Dependencies: [17, 4825, 4724, 4725, 21, 4836, 576, 11996, 11992, 12015, 12016, 504, 12017, 4634, 12019, 4832, 12020, 12022, 12023, 4787, 1115, 2519, 12009, 12029, 4727, 9051, 12030, 12031, 12035, 12040, 12041, 5281, 12039, 6571, 2]
// Exports: default

// Module 12014 (GuildPowerupsBottomSheet)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 576 */;
import intl4 from "intl" /* 1115 */;
import _modDef2519 from "module_2519" /* 2519 */;
import GameServerHostingRive from "GameServerHostingRive" /* 4634 */;
import GameServerConstants from "GameServerConstants" /* 4725 */;
import Powerups from "Powerups" /* 4727 */;
import Text_Text from "Text/Text" /* 4832 */;
import components_Button_Button from "components/Button/Button" /* 5281 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 6571 */;
import useGuildPowerupRollbackEnabledDefault from "useGuildPowerupRollbackEnabled" /* 11992 */;
import usePowerupActiveStatusDefault from "usePowerupActiveStatus" /* 11996 */;
import useHasAllocateBoostPermissionDefault from "useHasAllocateBoostPermission" /* 12009 */;
import useCalculatePowerupCardStatus from "useCalculatePowerupCardStatus" /* 12015 */;
import useGetGuildPowerupBannerImageDefault from "useGetGuildPowerupBannerImage" /* 12016 */;
import GuildPowerupsCardFooter from "GuildPowerupsCardFooter" /* 12020 */;
import useGuildPowerupLevelPerksDefault from "useGuildPowerupLevelPerks" /* 12022 */;
import GuildBoostingMarketingUtils from "GuildBoostingMarketingUtils" /* 12023 */;
import useGuildPowerupCardFooterConfigDefault from "useGuildPowerupCardFooterConfig" /* 12029 */;
import GuildPowerupAnalytics from "GuildPowerupAnalytics" /* 12039 */;
import AccessibilityStore from "AccessibilityStore" /* 4825 */;
import GuildPowerupsConstants from "GuildPowerupsConstants" /* 4724 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let BottomSheet;

let c10;
let c9;
let hasOwnProperty;
let metroImportAll;
let metroRequire;
let obj10;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let obj9;
let tmp2;
const useCanGuildPowerupBeToggledDefault = tmp2(12030);
const useGuildPowerupOnActivateDefault = tmp2(12031);
const useGuildPowerupOnShowDeactivateDefault = tmp2(12035);
const GuildPowerupsDisabledWarningDefault = tmp2(12041);
function GuildPowerupsBottomSheetHeader(arg0) {
  let guildId;
  let items1;
  let items2;
  let obj4;
  let obj5;
  let powerup;
  let tmp14;
  let tmp15;
  let useReducedMotion;
  ({ guildId, powerup } = arg0);
  const tmp = closure_11();
  const tmp4 = usePowerupActiveStatusDefault(guildId, powerup);
  const tmp5 = useGuildPowerupRollbackEnabledDefault(guildId, powerup, "GuildPowerupsBottomSheet");
  const obj = useCalculatePowerupCardStatus;
  const calculatePowerupCardStatus = obj.useCalculatePowerupCardStatus(powerup, tmp4, tmp5);
  let str = useGetGuildPowerupBannerImageDefault(powerup, true);
  if (str == null) {
    str = "";
  }
  const items = [AccessibilityStore];
  let str2;
  const tmp6Result = get_initialized;
  const stateFromStores = tmp6Result.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const tmp9 = closure_7;
  if (powerup.skuId === closure_7) {
    str2 = "+";
  }
  if (powerup.type === hasOwnProperty.LEVEL) {
    const obj2 = { style: tmp.gemContainer };
    tmp15 = metroImportAll(tmp2(12017), obj2);
    tmp14 = metroImportAll;
  } else if (tmp10 === tmp9) {
    const obj3 = { style: tmp.image, children: metroImportAll(GameServerHostingRive.GameServerHostingRive, obj4) };
    obj4 = { stateMachine: "SM_Auto", dataBinding: obj5 };
    obj5 = { reducedMotion: stateFromStores };
    tmp15 = metroImportAll(tmp12, obj3);
    tmp14 = metroImportAll;
  } else {
    tmp14 = metroImportAll;
    const obj6 = { imageUrl: str, style: tmp.image, isAnimated: true };
    tmp15 = metroImportAll(tmp2(12019), obj6);
  }
  const obj7 = { children: items1 };
  items1 = [tmp15, ];
  const obj8 = { style: tmp.headerContainer, children: items2 };
  items2 = [, ];
  const obj9 = { variant: "heading-xl/bold", accessibilityRole: "header", children: powerup.title };
  items2[0] = tmp14(Text_Text.Text, obj9);
  const obj10 = { cost: powerup.cost, costDecorator: str2, status: calculatePowerupCardStatus, style: tmp.statusContainer };
  items2[1] = tmp14(GuildPowerupsCardFooter.GuildPowerupsCardFooter, obj10);
  items1[1] = React4(View, obj8);
  return React4(View, obj7);
}
function GuildPowerupsBottomSheetLevelBody(powerup) {
  powerup = powerup.powerup;
  const tmp = closure_11();
  let closure_0 = tmp;
  const arr = useGuildPowerupLevelPerksDefault(powerup);
  let obj = {
    style: tmp.levelContainer,
    children: arr.map((children, index) => {
      let items;
      const obj2 = { style: closure_0.perkContainer, children: items };
      const obj = GuildBoostingMarketingUtils;
      const iconForPerk = obj.getIconForPerk(children.perkIcon);
      items = [, ];
      const obj3 = { style: closure_0.perkText, variant: "text-md/medium", children: children.description };
      items[0] = metroImportAll(Text_Text.Text, obj3);
      const obj4 = { style: closure_0.perkIcon };
      items[1] = metroImportAll(iconForPerk, obj4);
      return React4(View, obj2, "perk-" + index + "-" + children.perkIcon);
    })
  };
  return closure_8(View, obj);
}
function GuildPowerupsBottomSheetBody(powerup) {
  let intl;
  let items1;
  let obj6;
  powerup = powerup.powerup;
  const tmp = closure_11();
  const type = powerup.type;
  if (hasOwnProperty.PERK === type) {
    const obj2 = { style: tmp.description, variant: "text-md/medium", children: powerup.description };
    const items = [metroImportAll(Text_Text.Text, obj2), ];
    let tmp5Result = null != powerup.deactivationCooldownPeriodDays;
    const tmp6 = authStore;
    if (tmp5Result) {
      tmp5Result = powerup.deactivationCooldownPeriodDays > 0;
    }
    if (tmp5Result) {
      const obj3 = { style: tmp.cooldownInfo, children: items1 };
      const obj4 = { size: "xs", color: nativeDefault.colors.TEXT_MUTED };
      const CircleInformationIcon = tmp8(4787).CircleInformationIcon;
      items1 = [metroImportAll(CircleInformationIcon, obj4), ];
      const obj5 = { variant: "text-sm/medium", color: "text-muted", children: intl.formatToPlainString(_modDef2519.GMhQcE, obj6) };
      const Text = tmp8(4832).Text;
      intl = tmp8(1115).intl;
      obj6 = { cooldownDays: powerup.deactivationCooldownPeriodDays };
      items1[1] = metroImportAll(Text, obj5);
      tmp5Result = tmp5(View, obj3);
    }
    const obj7 = { children: items };
    items[1] = tmp5Result;
    return React4(tmp6, obj7);
  } else if (tmp2.LEVEL === type) {
    const obj = { powerup };
    return metroImportAll(GuildPowerupsBottomSheetLevelBody, obj);
  }
}
function GuildPowerupsBottomSheetFooter(arg0) {
  let c1;
  let disabled;
  let guildId;
  let intl;
  let intl2;
  let isLoading;
  let isPowerupActive;
  let items;
  let powerup;
  let reason;
  let showConfigureButton;
  let showToggleButton;
  let stringResult;
  ({ guildId, powerup } = arg0);
  isPowerupActive = undefined;
  c1 = undefined;
  let closure_2;
  let tmp = closure_11();
  const tmp2 = importDefault;
  const tmp4 = useHasAllocateBoostPermissionDefault(guildId);
  const tmp5 = useGuildPowerupCardFooterConfigDefault(guildId, powerup);
  ({ showToggleButton, showConfigureButton, isPowerupActive } = tmp5);
  if (showConfigureButton) {
    let result = powerup.skuId !== Powerups.GUILD_POWERUP_TAG_SKU_ID;
    const tmp6 = require;
    if (!result) {
      const tmp6Result = tmp6(9051);
      result = tmp6Result.canUseMobileServerTagSettings(guildId);
    }
    showConfigureButton = result;
  }
  ({ disabled, reason } = useCanGuildPowerupBeToggledDefault(guildId, powerup, isPowerupActive));
  useCanGuildPowerupBeToggledDefault(guildId, powerup, isPowerupActive);
  ({ onActivate: c1, isLoading } = useGuildPowerupOnActivateDefault(guildId, powerup));
  useGuildPowerupOnActivateDefault(guildId, powerup);
  closure_2 = useGuildPowerupOnShowDeactivateDefault(guildId, powerup);
  if (tmp4) {
    let tmp14 = !showConfigureButton;
    const hasItem = metroRequire.has(powerup.skuId);
    if (!showConfigureButton) {
      tmp14 = isPowerupActive;
    }
    if (tmp14) {
      tmp14 = powerup.type === hasOwnProperty.PERK;
    }
    if (tmp14) {
      tmp14 = hasItem;
    }
    if (!tmp14) {
      tmp14 = powerup.skuId === closure_7;
    }
    const obj = { style: tmp.footerContainer, children: items };
    const tmp17 = React4;
    const tmp18 = View;
    if (tmp14) {
      const obj2 = { style: tmp.description, variant: "text-md/bold", children: intl.string(_modDef2519["jo5++h"]) };
      const Text = Text_Text.Text;
      intl = intl4.intl;
      tmp14 = metroImportAll(Text, obj2);
    }
    items = [tmp14, , , ];
    let tmp21 = disabled && null != reason;
    if (tmp21) {
      const obj3 = { text: reason };
      tmp21 = metroImportAll(GuildPowerupsDisabledWarningDefault, obj3);
    }
    items[1] = tmp21;
    if (showConfigureButton) {
      const obj4 = { variant: "primary", text: intl2.string(_modDef2519.g5Ds69), onPress: tmp10 };
      const Button = components_Button_Button.Button;
      intl2 = intl4.intl;
      showConfigureButton = metroImportAll(Button, obj4);
    }
    items[2] = showConfigureButton;
    if (showToggleButton) {
      showToggleButton = powerup.skuId !== closure_7;
    }
    if (showToggleButton) {
      let str = "primary";
      const Button2 = components_Button_Button.Button;
      const tmp27 = metroImportAll;
      const tmp28 = require;
      if (isPowerupActive) {
        str = "secondary";
      }
      const obj5 = {
        variant: str,
        text: stringResult,
        loading: isLoading,
        disabled,
        onPress() {
              const tmp = isPowerupActive;
              if (tmp) {
                if (closure_2 != null) {
                  tmp5();
                }
              } else if (c1 != null) {
                tmp2();
              }
            }
      };
      const intl3 = tmp28(1115).intl;
      const string = intl3.string;
      const tmp2Result = _modDef2519;
      if (isPowerupActive) {
        stringResult = string(tmp2Result.TZsu1U);
      } else {
        stringResult = string(tmp2Result.gSxlHf);
      }
      showToggleButton = tmp27(Button2, obj5);
    }
    items[3] = showToggleButton;
    return tmp17(tmp18, obj);
  } else {
    return null;
  }
}
const View = react_native.View;
({ GuildPowerupType: hasOwnProperty, GUILD_POWERUP_CONFIGURABLE_SKUS_DESKTOP: metroRequire } = GuildPowerupsConstants);
let closure_7 = GameServerConstants.GAME_SERVER_POWERUP_SKU_ID;
({ jsx: metroImportAll, jsxs: c9, Fragment: c10 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, headerContainer: obj3, statusContainer: obj4, levelContainer: obj5, perkContainer: { flexDirection: "row", alignItems: "center", justifyContent: "space-between" }, perkIcon: { width: 20, height: 20 }, perkText: obj6, footerContainer: obj7, image: { width: "100%", height: 160 }, description: obj8, cooldownInfo: obj9, gemContainer: obj10 };
obj2 = { padding: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { marginTop: nativeDefault.space.PX_24, alignItems: "center" };
obj4 = { justifyContent: "center", gap: nativeDefault.space.PX_8 };
obj5 = { flexDirection: "column", gap: nativeDefault.space.PX_8, marginTop: nativeDefault.space.PX_16 };
obj6 = { marginStart: nativeDefault.space.PX_8 };
obj7 = { gap: nativeDefault.space.PX_12, marginTop: nativeDefault.space.PX_8 };
obj8 = { marginHorizontal: nativeDefault.space.PX_24, textAlign: "center" };
obj9 = { flexDirection: "row", alignItems: "center", justifyContent: "center", gap: nativeDefault.space.PX_4, marginTop: nativeDefault.space.PX_8 };
obj10 = { marginTop: nativeDefault.space.PX_16 };
let closure_11 = createStyles(obj);
let result = size.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsBottomSheet.tsx");

export default function GuildPowerupsBottomSheet(arg0) {
  let guildId;
  let items;
  let obj3;
  let powerup;
  ({ guildId, powerup } = arg0);
  const tmp = closure_11();
  const obj = GuildPowerupAnalytics;
  const logPowerupModalOpened = obj.useLogPowerupModalOpened(guildId, powerup, GuildPowerupAnalytics.ModalType.DETAIL);
  const obj2 = { startExpanded: true, children: React4(View, obj3) };
  obj3 = { style: tmp.container, children: items };
  BottomSheet = Sheet_BottomSheet.BottomSheet;
  items = [metroImportAll(GuildPowerupsBottomSheetHeader, { guildId, powerup }), metroImportAll(GuildPowerupsBottomSheetBody, { guildId, powerup }), metroImportAll(GuildPowerupsBottomSheetFooter, { guildId, powerup })];
  return metroImportAll(BottomSheet, obj2);
};
