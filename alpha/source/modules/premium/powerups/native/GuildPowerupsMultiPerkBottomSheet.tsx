// Module ID: 14106
// Function ID: 14107
// Name: GuildPowerupsMultiPerkBottomSheet
// Dependencies: [17, 21, 5014, 575, 671, 5036, 5253, 14072, 14061, 14057, 14078, 14107, 14079, 14093, 14094, 14098, 14082, 1187, 1113, 5624, 14083, 5634, 2570, 1625, 14108, 5272, 5275, 14111, 14104, 2]
// Exports: default

// Module 14106 (GuildPowerupsMultiPerkBottomSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import _modDef671 from "module_671" /* 671 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1625 */;
import _modDef2570 from "module_2570" /* 2570 */;
import themes from "themes" /* 5036 */;
import useThemeDefault from "useTheme" /* 5253 */;
import useGuildPowerupRollbackEnabledDefault from "useGuildPowerupRollbackEnabled" /* 14057 */;
import usePowerupActiveStatus from "usePowerupActiveStatus" /* 14061 */;
import useHasAllocateBoostPermissionDefault from "useHasAllocateBoostPermission" /* 14072 */;
import useCalculatePowerupCardStatus from "useCalculatePowerupCardStatus" /* 14078 */;
import useGetGuildPowerupBannerImageDefault from "useGetGuildPowerupBannerImage" /* 14079 */;
import GuildPowerupsImageDefault from "GuildPowerupsImage" /* 14082 */;
import useCanGuildPowerupBeToggledDefault from "useCanGuildPowerupBeToggled" /* 14093 */;
import useGuildPowerupOnActivateDefault from "useGuildPowerupOnActivate" /* 14094 */;
import useGuildPowerupOnShowDeactivateDefault from "useGuildPowerupOnShowDeactivate" /* 14098 */;
import GuildPowerupsDisabledWarningDefault from "GuildPowerupsDisabledWarning" /* 14104 */;
import useGuildPowerupColorConfigDefault from "useGuildPowerupColorConfig" /* 14107 */;
import usePowerupGroupConfigDefault from "usePowerupGroupConfig" /* 14108 */;
import GuildPowerupsSectionHeaderDefault from "GuildPowerupsSectionHeader" /* 14111 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

const usePowerupActiveStatusDefault = usePowerupActiveStatus;
let BottomSheet, importDefault;

let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
let tmp;
const intl3 = tmp(1113);
const native = tmp(1187);
const Text_Text = tmp(5624);
const components_Button_Button = tmp(5634);
const GuildPowerupsCardFooter = tmp(14083);
function GuildPowerupsMultiPerkCard(arg0) {
  let c1;
  let forceStaticImage;
  let guildId;
  let intl;
  let isLoading;
  let isNewPerk;
  let items2;
  let items3;
  let items4;
  let items5;
  let powerup;
  let str2;
  let string;
  let tmp19Result;
  let tmp3Result2;
  ({ guildId, powerup, isNewPerk, forceStaticImage } = arg0);
  c1 = undefined;
  let tmp = require;
  const obj = themes;
  const tmp4 = closure_6(obj.isThemeLight(useThemeDefault()));
  let tmp19Result2 = useHasAllocateBoostPermissionDefault(guildId);
  const tmp6 = usePowerupActiveStatusDefault(guildId, powerup);
  const tmp7 = useGuildPowerupRollbackEnabledDefault(guildId, powerup, "GuildPowerupsMultiPerkBottomSheet");
  const obj2 = useCalculatePowerupCardStatus;
  const calculatePowerupCardStatus = obj2.useCalculatePowerupCardStatus(powerup, tmp6, tmp7);
  const obj3 = usePowerupActiveStatus;
  const result = obj3.isPowerupActiveStatusActive(tmp6);
  let c0 = result;
  const textColor = useGuildPowerupColorConfigDefault(result).textColor;
  const tmp10 = useGetGuildPowerupBannerImageDefault(powerup, true, forceStaticImage);
  const disabled = useCanGuildPowerupBeToggledDefault(guildId, powerup, result).disabled;
  ({ onActivate: c1, isLoading } = useGuildPowerupOnActivateDefault(guildId, powerup));
  useGuildPowerupOnActivateDefault(guildId, powerup);
  let closure_2 = useGuildPowerupOnShowDeactivateDefault(guildId, powerup);
  const items = [tmp4.container, ];
  const obj4 = { style: items, children: items3 };
  const tmp14 = disabled && tmp19Result2 && tmp4.disabled;
  items[1] = tmp14;
  const items1 = [tmp4.imageContainer, , , ];
  let type;
  if (calculatePowerupCardStatus != null) {
    type = calculatePowerupCardStatus.type;
  }
  items1[1] = "active" === type && tmp4.imageContainerActive;
  let type1;
  if (calculatePowerupCardStatus != null) {
    type1 = calculatePowerupCardStatus.type;
  }
  items1[2] = "expiring" === type1 && tmp4.imageContainerExpiring;
  let type2;
  if (calculatePowerupCardStatus != null) {
    type2 = calculatePowerupCardStatus.type;
  }
  const obj5 = { style: items1, children: items2 };
  const tmp18 = "removing" === type2 && tmp4.imageContainerRemoving;
  items1[3] = tmp18;
  let str = tmp10;
  const tmp3Result = GuildPowerupsImageDefault;
  if (tmp10 == null) {
    str = "";
  }
  items2 = [, ];
  const obj6 = { imageUrl: str, isAnimated: !forceStaticImage, style: tmp4.image };
  items2[0] = React3(tmp3Result, obj6);
  if (isNewPerk) {
    const obj7 = { text: intl.string(intl3.t.y2b7CA), style: tmp4.badge };
    const TextBadge = native.TextBadge;
    intl = intl3.intl;
    isNewPerk = tmp19(TextBadge, obj7);
  }
  items2[1] = isNewPerk;
  items3 = [hasOwnProperty(View, obj5), ];
  const obj9 = { style: tmp4.titleContainer, children: items4 };
  items4 = [, ];
  const obj10 = { variant: "heading-md/semibold", color: textColor, children: powerup.title };
  const obj8 = { style: tmp4.bodyContainer, children: items5 };
  items4[0] = React3(Text_Text.Text, obj10);
  if (null != calculatePowerupCardStatus) {
    const obj11 = { status: calculatePowerupCardStatus };
    tmp19Result = tmp19(GuildPowerupsCardFooter.GuildPowerupCardFooterStatus, obj11);
  } else {
    const obj12 = { cost: powerup.cost };
    tmp19Result = tmp19(GuildPowerupsCardFooter.GuildPowerupCardFooterCost, obj12);
  }
  items4[1] = tmp19Result;
  items5 = [hasOwnProperty(View, obj9), ];
  if (tmp19Result2) {
    const obj13 = {
      disabled,
      loading: isLoading,
      variant: str2,
      text: string(result ? tmp3Result2.TZsu1U : tmp3Result2.gSxlHf),
      onPress() {
          const tmp = c0;
          if (tmp) {
            closure_2();
          } else {
            _undefined();
          }
        }
    };
    str2 = "primary";
    const Button = components_Button_Button.Button;
    if (result) {
      str2 = "secondary";
    }
    const intl2 = intl3.intl;
    string = intl2.string;
    tmp3Result2 = _modDef2570;
    tmp19Result2 = tmp19(Button, obj13);
  }
  items5[1] = tmp19Result2;
  items3[1] = hasOwnProperty(View, obj8);
  return hasOwnProperty(View, obj4);
}
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let closure_6 = createStyles.createStyles((arg0) => {
  let alphaResult;
  let alphaResult1;
  let alphaResult2;
  let alphaResult3;
  let obj4;
  let obj5;
  let obj6;
  let obj7;
  let rect;
  const obj = { container: { gap: nativeDefault.space.PX_8 }, cardsContainer: { gap: nativeDefault.space.PX_24, marginHorizontal: nativeDefault.space.PX_16 }, titleContainer: { flexDirection: "column", gap: 4 }, bodyContainer: { justifyContent: "space-between", alignItems: "center", flexDirection: "row" }, imageContainer: obj4, imageContainerActive: obj5, imageContainerExpiring: obj6, imageContainerRemoving: obj7, image: { width: "75%", height: 180, resizeMode: "contain" }, disabled: { opacity: 0.5 }, badge: rect };
  ({ gap: nativeDefault.space.PX_8 });
  ({ gap: nativeDefault.space.PX_24, marginHorizontal: nativeDefault.space.PX_16 });
  let str = "#ffffff";
  obj4 = { borderRadius: nativeDefault.radii.md, borderWidth: 1, borderColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, borderStyle: "solid", backgroundColor: alphaResult.hex() };
  const tmp3 = _modDef671;
  if (arg0) {
    str = "#000000";
  }
  const tmp3Result = tmp3(str);
  alphaResult = tmp3Result.alpha(0.04);
  obj5 = { borderColor: alphaResult1.hex() };
  const tmpResult = _modDef671;
  const tmpResultResult = tmpResult(nativeDefault.unsafe_rawColors.GREEN_360);
  alphaResult1 = tmpResultResult.alpha(0.35);
  obj6 = { borderColor: alphaResult2.hex() };
  const tmpResult3 = _modDef671;
  const tmpResult1Result = tmpResult3(nativeDefault.unsafe_rawColors.YELLOW_300);
  alphaResult2 = tmpResult1Result.alpha(0.35);
  obj7 = { borderColor: alphaResult3.hex() };
  const tmpResult4 = _modDef671;
  const tmpResult2Result = tmpResult4(nativeDefault.unsafe_rawColors.YELLOW_300);
  alphaResult3 = tmpResult2Result.alpha(0.35);
  rect = { position: "absolute", top: tmp(575).space.PX_8, right: tmp(575).space.PX_8 };
  return obj;
});
createStyles = createStyles_mod;
let obj = { cardsContainer: obj2, disabledReasonContainer: obj3 };
obj2 = { gap: nativeDefault.space.PX_24, marginHorizontal: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { marginHorizontal: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_16 };
let closure_7 = createStyles(obj);
let result = size.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsMultiPerkBottomSheet.tsx");

export default function GuildPowerupsMultiPerkBottomSheet(guildId) {
  let BottomSheetScrollView;
  let forceStaticImages;
  let items;
  let obj2;
  let obj3;
  let obj7;
  let powerups;
  let tmp8;
  guildId = guildId.guildId;
  const listing = guildId.listing;
  const onDismiss = guildId.onDismiss;
  const tmp = closure_7();
  const bottom = useSafeAreaInsetsDefault().bottom;
  const tmp4 = usePowerupGroupConfigDefault(guildId, listing);
  importDefault = tmp4;
  let tmp6Result2 = null;
  if (null != tmp4) {
    let obj = { scrollable: true, startExpanded: true, onDismiss, children: tmp8(BottomSheetScrollView, obj2) };
    BottomSheet = guildId(5272).BottomSheet;
    obj2 = { contentContainerStyle: obj3, children: items };
    obj3 = { paddingBottom: bottom };
    BottomSheetScrollView = guildId(5275).BottomSheetScrollView;
    const obj5 = { title: null, description: null };
    ({ title: obj4.title, description: obj4.description } = tmp4);
    items = [closure_4(GuildPowerupsSectionHeaderDefault, obj5), , ];
    let tmp6Result = null != tmp4.disabledReason;
    tmp8 = closure_5;
    if (tmp6Result) {
      const obj6 = { style: tmp.disabledReasonContainer, children: closure_4(GuildPowerupsDisabledWarningDefault, obj7) };
      obj7 = { text: tmp4.disabledReason };
      tmp6Result = tmp6(View, obj6);
    }
    items[1] = tmp6Result;
    const obj13 = {
      style: tmp.cardsContainer,
      children: powerups.map((powerup) => {
          const obj = { guildId, powerup, forceStaticImage: forceStaticImages.forceStaticImages };
          return React3(GuildPowerupsMultiPerkCard, obj, powerup.skuId);
        })
    };
    powerups = listing.powerups;
    items[2] = closure_4(View, obj13);
    tmp6Result2 = tmp6(BottomSheet, obj);
  }
  return tmp6Result2;
};
