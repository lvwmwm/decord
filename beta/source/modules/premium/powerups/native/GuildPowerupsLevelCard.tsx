// Module ID: 12061
// Function ID: 12062
// Name: GuildPowerupsLevelCard
// Dependencies: [19, 17, 4724, 1074, 12062, 21, 4836, 576, 5293, 8678, 6401, 12044, 12023, 4832, 1115, 2519, 11996, 12015, 12063, 12064, 12020, 2]
// Exports: default

// Module 12061 (GuildPowerupsLevelCard)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import LinearGradientDefault from "LinearGradient" /* 5293 */;
import ManaTypeConsolidationExperiment from "ManaTypeConsolidationExperiment" /* 6401 */;
import BoostGemIcon2 from "BoostGemIcon" /* 8678 */;
import usePowerupActiveStatusDefault from "usePowerupActiveStatus" /* 11996 */;
import useCalculatePowerupCardStatus from "useCalculatePowerupCardStatus" /* 12015 */;
import GuildPowerupsCardFooter from "GuildPowerupsCardFooter" /* 12020 */;
import GuildBoostingMarketingConstants from "GuildBoostingMarketingConstants" /* 12062 */;
import useGuildPowerupOnShowMoreDefault from "useGuildPowerupOnShowMore" /* 12063 */;
import react from "react" /* 19 */;
import GuildPowerupsConstants from "GuildPowerupsConstants" /* 4724 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let importDefault;

let c10;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let obj9;
let size;
let size1;
let tmp5;
let unpackModuleId;
const GuildPowerupsCardDefault = tmp5(12064);
function GuildLevelPowerupHeader(arg0) {
  let BoostGemIcon;
  let active;
  let items1;
  let items2;
  let items3;
  let items6;
  let nextActive;
  let obj9;
  let position;
  ({ active, nextActive, position } = arg0);
  const tmp = closure_12();
  if (active) {
    if (false !== nextActive) {
      const items = [tmp.boostContainerActive.backgroundColor, tmp.boostContainerActive.backgroundColor];
      items6 = items;
    }
    const obj = { style: tmp.progressContainer, children: items2 };
    const obj3 = { start: null, end: null, colors: items6, style: items1 };
    ({ START: obj2.start, END: obj2.end } = metroImportAll);
    items1 = [tmp.progress, , ];
    let progressStart = position === hasOwnProperty.START;
    const tmp2 = unpackModuleId;
    const tmp5 = importDefault;
    const tmp7 = LinearGradientDefault;
    const tmp9 = hasOwnProperty;
    if (progressStart) {
      progressStart = tmp.progressStart;
    }
    items1[1] = progressStart;
    items1[2] = position === tmp9.END && tmp.progressEnd;
    items2 = [authStore(tmp7, obj3), , ];
    const obj4 = { style: items3 };
    items3 = [, ];
    ({ boostContainer: arr6[0], boostContainerBackground: arr6[1] } = tmp);
    items2[1] = authStore(View, obj4);
    const items4 = [tmp.boostContainer, ];
    const tmp10 = active && tmp.boostContainerActive;
    items4[1] = tmp10;
    const obj5 = { style: items4, children: authStore(BoostGemIcon, obj9) };
    BoostGemIcon = BoostGemIcon2.BoostGemIcon;
    const colors = tmp5(576).colors;
    obj9 = { size: "xs", color: active ? colors.WHITE : colors.TEXT_MUTED };
    items2[2] = authStore(View, obj5);
    return tmp2(View, obj);
  }
  if (active) {
    if (false === nextActive) {
      const items5 = [tmp.boostContainerActive.backgroundColor, tmp.boostContainerInactive.backgroundColor];
      items6 = items5;
    }
  }
  items6 = [tmp.boostContainerInactive.backgroundColor, tmp.boostContainerInactive.backgroundColor];
}
class GuildPowerupLevelBody {
  constructor(index) {
    let Text;
    let closure_1;
    let intl;
    let items1;
    let obj4;
    let str;
    let tmp5;
    index = index.index;
    let manaTypeConsolidationExperiment;
    const isActive = index.isActive;
    let tmp = closure_12();
    importDefault = tmp;
    let tmp3 = manaTypeConsolidationExperiment;
    let tmp2 = index;
    let obj = index(manaTypeConsolidationExperiment[10]);
    manaTypeConsolidationExperiment = obj.useManaTypeConsolidationExperiment("GuildPowerupLevelBody");
    const tmp6 = require("useGuildPowerupColorConfig")(isActive);
    const textColor = tmp6.textColor;
    const iconColor = tmp6.iconColor;
    let items = [index, iconColor, textColor, tmp, manaTypeConsolidationExperiment];
    let obj2 = { style: tmp.perkRowContainer, children: items1 };
    items1 = [
      textColor.useMemo(() => {
        let color;
        let color2;
        let tmp = TIER_CARDS[index];
        if (null == tmp) {
          return [];
        } else {
          let substr;
          let tmp2 = metroImportDefault;
          if (tmp.tier === metroImportDefault.TIER_3) {
            const perks = tmp.perks;
            substr = perks.slice(0, -1);
          } else {
            substr = tmp.perks;
          }
          let mapped;
          if (substr != null) {
            mapped = substr.map((perkIcon, index) => {
              let items;
              let str;
              const obj2 = { style: closure_1_1.perkRowStyle, children: items };
              items = [, ];
              const obj = index(manaTypeConsolidationExperiment[12]);
              const obj3 = { color: color2, size: "sm" };
              items[0] = closure_2_10(obj.getIconForPerk(perkIcon.perkIcon), obj3);
              const obj4 = { color, style: closure_1_1.perkText, variant: str, children: perkIcon.getCopy() };
              str = "text-sm/medium";
              const Text = index(manaTypeConsolidationExperiment[13]).Text;
              const tmp = closure_2_11;
              const tmp2 = iconColor;
              const tmp3 = closure_2_10;
              if (closure_1_2) {
                str = "experimental/body-sm/normal";
              }
              items[1] = tmp3(Text, obj4);
              return tmp(tmp2, obj2, "perk-" + closure_1_0 + "-" + index);
            });
          }
          return mapped;
        }
      }, items),

    ];
    let obj3 = { style: tmp.perkRow, children: closure_10(Text, obj4) };
    obj4 = { color: textColor, variant: str, children: intl.string(tmp5(tmp3[15]).nIj3LZ) };
    str = "text-sm/medium";
    Text = index(manaTypeConsolidationExperiment[13]).Text;
    tmp5 = importDefault;
    const tmp7 = closure_11;
    if (manaTypeConsolidationExperiment) {
      str = "experimental/body-sm/normal";
    }
    intl = tmp2(tmp3[14]).intl;
    items1[1] = closure_10(iconColor, obj3);
    return tmp7(iconColor, obj2);
  }
}
const View = react_native.View;
({ LevelCardPosition: hasOwnProperty, PowerupActiveStatusType: metroRequire } = GuildPowerupsConstants);
({ BoostedGuildTiers: metroImportDefault, HorizontalGradient: metroImportAll } = Constants);
const TIER_CARDS = GuildBoostingMarketingConstants.TIER_CARDS;
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let createStyles = createStyles_mod;
let obj = { cardContainer: { flex: 1 }, card: { padding: 0, overflow: "hidden", flex: 1 }, progressContainer: obj2, progress: obj3, progressStart: obj4, progressEnd: obj5, boostContainerBackground: size, boostContainer: size1, boostContainerActive: obj6, boostContainerInactive: obj7, contentContainer: obj8, perkRowContainer: obj9, perkRow: { flexDirection: "row", alignItems: "center" }, perkRowStyle: { flexDirection: "row", alignItems: "center" }, perkText: { marginStart: nativeDefault.space.PX_8 }, footerContainer: { marginTop: "auto", paddingTop: nativeDefault.space.PX_16 } };
obj2 = { marginVertical: nativeDefault.space.PX_24, position: "relative" };
createStyles = createStyles.createStyles;
obj3 = { height: 6, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
obj4 = { marginStart: nativeDefault.space.PX_16 };
obj5 = { marginEnd: nativeDefault.space.PX_16, borderTopEndRadius: nativeDefault.radii.round, borderBottomEndRadius: nativeDefault.radii.round };
size = { backgroundColor: nativeDefault.colors.CARD_BACKGROUND_DEFAULT, width: 28, height: 28, start: nativeDefault.space.PX_16 - 2, top: -11 };
size1 = { padding: nativeDefault.space.PX_4, borderRadius: nativeDefault.radii.round, position: "absolute", width: 24, height: 24, top: -9, start: nativeDefault.space.PX_16, alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
obj6 = { backgroundColor: nativeDefault.unsafe_rawColors.GUILD_BOOSTING_PINK };
obj7 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
obj8 = { padding: nativeDefault.space.PX_16, paddingTop: 0, flex: 1 };
obj9 = { flexDirection: "column", marginTop: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_8 };
({ marginStart: nativeDefault.space.PX_8 });
({ marginTop: "auto", paddingTop: nativeDefault.space.PX_16 });
let closure_12 = createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsLevelCard.tsx");

export default function GuildPowerupsLevelCard(arg0) {
  let MIDDLE;
  let guildId;
  let index;
  let isScrollingRef;
  let items1;
  let items2;
  let nextPowerup;
  let obj8;
  let powerup;
  let str2;
  let tmp20;
  ({ guildId, powerup, nextPowerup, index, isScrollingRef } = arg0);
  const tmp = closure_12();
  const obj = ManaTypeConsolidationExperiment;
  const manaTypeConsolidationExperiment = obj.useManaTypeConsolidationExperiment("GuildPowerupsLevelCard");
  const tmp6 = usePowerupActiveStatusDefault(guildId, powerup);
  const tmp7 = usePowerupActiveStatusDefault(guildId, nextPowerup);
  const obj2 = useCalculatePowerupCardStatus;
  const calculatePowerupCardStatus = obj2.useCalculatePowerupCardStatus(powerup, tmp6, false);
  const type = tmp6.type;
  const INACTIVE = metroRequire.INACTIVE;
  const type2 = tmp7.type;
  const INACTIVE2 = metroRequire.INACTIVE;
  const tmp9 = useGuildPowerupOnShowMoreDefault(guildId, powerup);
  let closure_1 = tmp9;
  if (0 === index) {
    MIDDLE = hasOwnProperty.START;
  } else if (null == nextPowerup) {
    MIDDLE = hasOwnProperty.END;
  } else {
    MIDDLE = hasOwnProperty.MIDDLE;
  }
  const items = [isScrollingRef, tmp9];
  const callback = react.useCallback(() => {
    if (!isScrollingRef.current) {
      closure_1();
    }
  }, items);
  const obj4 = { position: MIDDLE, active: type !== INACTIVE, nextActive: tmp20 };
  tmp20 = undefined;
  const obj3 = { containerStyle: tmp.cardContainer, style: tmp.card, onPress: callback, status: calculatePowerupCardStatus, children: items1 };
  const tmp19 = GuildLevelPowerupHeader;
  const tmp5Result = GuildPowerupsCardDefault;
  if (null != nextPowerup) {
    tmp20 = type2 !== INACTIVE2;
  }
  items1 = [authStore(tmp19, obj4), ];
  let str;
  const obj5 = { style: tmp.contentContainer, children: items2 };
  const Text = tmp2(4832).Text;
  if (manaTypeConsolidationExperiment) {
    str = "text-strong";
  }
  const obj6 = { color: str, variant: str2, children: powerup.title };
  str2 = "heading-lg/semibold";
  if (manaTypeConsolidationExperiment) {
    str2 = "experimental/heading-md/semibold";
  }
  items2 = [authStore(Text, obj6), authStore(GuildPowerupLevelBody, { isActive: type !== INACTIVE, index }), ];
  const obj7 = { style: tmp.footerContainer, children: authStore(GuildPowerupsCardFooter.GuildPowerupsCardFooter, obj8) };
  obj8 = { cost: powerup.cost, status: calculatePowerupCardStatus };
  items2[2] = authStore(View, obj7);
  items1[1] = unpackModuleId(View, obj5);
  return unpackModuleId(tmp5Result, obj3);
};
export { GuildPowerupLevelBody };
