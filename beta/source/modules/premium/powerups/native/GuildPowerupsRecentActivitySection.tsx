// Module ID: 12075
// Function ID: 12076
// Name: GuildPowerupsRecentActivitySection
// Dependencies: [17, 4825, 21, 4836, 576, 6401, 12076, 4512, 504, 7403, 8678, 12078, 12080, 1177, 4832, 12082, 1115, 2]
// Exports: default

// Module 12075 (GuildPowerupsRecentActivitySection)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 576 */;
import intl2 from "intl" /* 1115 */;
import DateUtils from "DateUtils" /* 4512 */;
import Text_Text from "Text/Text" /* 4832 */;
import ManaTypeConsolidationExperiment from "ManaTypeConsolidationExperiment" /* 6401 */;
import enhanced_role_colors_EnhancedRoleColorUtils from "enhanced_role_colors/EnhancedRoleColorUtils" /* 7403 */;
import useMaybeGetSortedBoosts from "useMaybeGetSortedBoosts" /* 12076 */;
import getBoostRowMessageTextDefault from "getBoostRowMessageText" /* 12082 */;
import AccessibilityStore from "AccessibilityStore" /* 4825 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const useMaybeGetSortedBoostsDefault = useMaybeGetSortedBoosts;

let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
function GuildPowerupsRecentActivityRow(row) {
  let boost;
  let items1;
  let items2;
  let items3;
  let phase;
  let roleColor;
  let roleColorStrings;
  let roleStyle;
  let sortKey;
  let str5;
  let tmp24;
  let username;
  row = row.row;
  const obj = ManaTypeConsolidationExperiment;
  const manaTypeConsolidationExperiment = obj.useManaTypeConsolidationExperiment("GuildPowerupsRecentActivityRow");
  ({ boost, phase, sortKey } = row);
  const tmp4 = closure_7();
  const obj2 = useMaybeGetSortedBoosts;
  const getBoostUserConfig = obj2.useGetBoostUserConfig(boost);
  ({ roleColor, roleColorStrings, username } = getBoostUserConfig);
  const calendarFormat = DateUtils.calendarFormat;
  DateUtils;
  const date = new Date(sortKey);
  const items = [AccessibilityStore];
  const calendarFormatResult = calendarFormat(date);
  const obj3 = get_initialized;
  const stateFromStores = obj3.useStateFromStores(items, () => roleStyle.roleStyle);
  if ("username" === stateFromStores) {
    let BoostGemSlashIcon;
    let obj7;
    const tmpResult = enhanced_role_colors_EnhancedRoleColorUtils;
    const processColorStringsArray = tmpResult.useProcessColorStringsArray(roleColorStrings);
    const tmpResult2 = enhanced_role_colors_EnhancedRoleColorUtils;
    const isRoleStyleAndRoleColorsEligibleForERC = tmpResult2.useIsRoleStyleAndRoleColorsEligibleForERC(boost.guildId, boost.userId, stateFromStores, processColorStringsArray);
    if ("gave" === phase) {
      BoostGemSlashIcon = tmp(8678).BoostGemIcon;
    } else if ("expiring" === phase) {
      BoostGemSlashIcon = tmp(12078).BoostTier1Icon;
    } else {
      BoostGemSlashIcon = tmp(12080).BoostGemSlashIcon;
    }
    const obj5 = { style: tmp4.boostRowContainer, children: items1 };
    if ("gave" === phase) {
      obj7 = { color: nativeDefault.unsafe_rawColors.GUILD_BOOSTING_PINK, size: "sm" };
      const obj6 = { color: nativeDefault.unsafe_rawColors.GUILD_BOOSTING_PINK, size: "sm" };
    } else {
      obj7 = { size: "sm" };
    }
    items1 = [hasOwnProperty(BoostGemSlashIcon, obj7), , ];
    let tmp20Result = "dot" === stateFromStores && null != roleColor;
    const obj8 = { style: tmp4.boostMessage, children: items2 };
    if (tmp20Result) {
      const obj9 = { size: "small", color: roleColor, colors: roleColorStrings };
      tmp20Result = tmp20(tmp(1177).RoleDot, obj9);
    }
    items2 = [tmp20Result, , , ];
    const obj10 = { variant: "text-md/medium", color: "interactive-text-active", lineClamp: 1, style: items3, gradientColors: tmp24, children: username };
    items3 = [tmp4.username, {}];
    tmp24 = undefined;
    const Text = tmp(4832).Text;
    if (isRoleStyleAndRoleColorsEligibleForERC) {
      tmp24 = processColorStringsArray;
    }
    items2[1] = hasOwnProperty(Text, obj10);
    items2[2] = hasOwnProperty(Text_Text.Text, { variant: "text-md/medium", color: "interactive-text-active", children: " " });
    const obj11 = { variant: "text-md/medium", lineClamp: 1, style: tmp4.messageText, children: getBoostRowMessageTextDefault(row) };
    const Text2 = tmp(4832).Text;
    items2[3] = hasOwnProperty(Text2, obj11);
    items1[1] = metroRequire(View, obj8);
    let str4 = "text-xs/semibold";
    const Text3 = tmp(4832).Text;
    if (manaTypeConsolidationExperiment) {
      str4 = "text-xs/medium";
    }
    const obj12 = { variant: str4, color: str5, style: tmp4.timestamp, children: calendarFormatResult };
    str5 = undefined;
    if (manaTypeConsolidationExperiment) {
      str5 = "text-subtle";
    }
    items1[2] = hasOwnProperty(Text3, obj12);
    return metroRequire(View, obj5);
  }
}
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { sectionContainer: obj2, boostContainer: obj3, boostRowContainer: { flexDirection: "row", alignItems: "center", gap: 8 }, boostMessage: { flex: 1, flexDirection: "row", alignItems: "center" }, username: { maxWidth: 170, flexShrink: 1 }, messageText: { flexShrink: 0 }, timestamp: { flexShrink: 0 } };
obj2 = { marginTop: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { gap: nativeDefault.space.PX_12, marginTop: nativeDefault.space.PX_16 };
let closure_7 = createStyles(obj);
const result = size.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsRecentActivitySection.tsx");

export default function GuildPowerupsRecentActivitySection(guildId) {
  let intl;
  let items;
  guildId = guildId.guildId;
  let obj = ManaTypeConsolidationExperiment;
  const manaTypeConsolidationExperiment = obj.useManaTypeConsolidationExperiment("GuildPowerupsRecentActivitySection");
  const tmp4 = closure_7();
  const arr = useMaybeGetSortedBoostsDefault(guildId, 10);
  let tmp6Result = null;
  if (0 !== arr.length) {
    let str = "text-subtle";
    const obj2 = { style: tmp4.sectionContainer, children: items };
    const Text = tmp(4832).Text;
    const tmp6 = metroRequire;
    if (manaTypeConsolidationExperiment) {
      str = "text-strong";
    }
    const obj3 = { variant: "heading-lg/semibold", color: str, children: intl.string(intl2.t.yM9Krm) };
    intl = tmp(1115).intl;
    items = [hasOwnProperty(Text, obj3), ];
    const obj4 = {
      style: tmp4.boostContainer,
      children: arr.map((row) => {
          const obj = { row };
          return closure_1_5(GuildPowerupsRecentActivityRow, obj, "boost-" + row.boost.id);
        })
    };
    items[1] = hasOwnProperty(View, obj4);
    tmp6Result = tmp6(tmp7, obj2);
  }
  return tmp6Result;
};
