// Module ID: 14284
// Function ID: 14285
// Name: GuildPowerupsRecentActivitySection
// Dependencies: [17, 5142, 21, 5141, 575, 14285, 4963, 504, 8543, 10051, 14287, 14289, 1187, 5747, 14291, 1113, 2]
// Exports: default

// Module 14284 (GuildPowerupsRecentActivitySection)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 575 */;
import intl2 from "intl" /* 1113 */;
import DateUtils from "DateUtils" /* 4963 */;
import Text_Text from "Text/Text" /* 5747 */;
import enhanced_role_colors_EnhancedRoleColorUtils from "enhanced_role_colors/EnhancedRoleColorUtils" /* 8543 */;
import useMaybeGetSortedBoosts from "useMaybeGetSortedBoosts" /* 14285 */;
import getBoostRowMessageTextDefault from "getBoostRowMessageText" /* 14291 */;
import AccessibilityStore from "AccessibilityStore" /* 5142 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5141 */;
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
  let tmp23;
  let username;
  row = row.row;
  ({ boost, phase, sortKey } = row);
  const tmp = closure_7();
  const obj = useMaybeGetSortedBoosts;
  const getBoostUserConfig = obj.useGetBoostUserConfig(boost);
  ({ roleColor, roleColorStrings, username } = getBoostUserConfig);
  const calendarFormat = DateUtils.calendarFormat;
  DateUtils;
  const date = new Date(sortKey);
  const items = [AccessibilityStore];
  const calendarFormatResult = calendarFormat(date);
  const obj2 = get_initialized;
  const stateFromStores = obj2.useStateFromStores(items, () => roleStyle.roleStyle);
  if ("username" === stateFromStores) {
    let BoostGemSlashIcon;
    let obj6;
    const tmp2Result = enhanced_role_colors_EnhancedRoleColorUtils;
    const processColorStringsArray = tmp2Result.useProcessColorStringsArray(roleColorStrings);
    const tmp2Result2 = enhanced_role_colors_EnhancedRoleColorUtils;
    const isRoleStyleAndRoleColorsEligibleForERC = tmp2Result2.useIsRoleStyleAndRoleColorsEligibleForERC(boost.guildId, boost.userId, stateFromStores, processColorStringsArray);
    if ("gave" === phase) {
      BoostGemSlashIcon = tmp2(10051).BoostGemIcon;
    } else if ("expiring" === phase) {
      BoostGemSlashIcon = tmp2(14287).BoostTier1Icon;
    } else {
      BoostGemSlashIcon = tmp2(14289).BoostGemSlashIcon;
    }
    const obj4 = { style: tmp.boostRowContainer, children: items1 };
    if ("gave" === phase) {
      obj6 = { color: nativeDefault.unsafe_rawColors.GUILD_BOOSTING_PINK, size: "sm" };
      const obj5 = { color: nativeDefault.unsafe_rawColors.GUILD_BOOSTING_PINK, size: "sm" };
    } else {
      obj6 = { size: "sm" };
    }
    items1 = [hasOwnProperty(BoostGemSlashIcon, obj6), , ];
    let tmp19Result = "dot" === stateFromStores && null != roleColor;
    const obj7 = { style: tmp.boostMessage, children: items2 };
    if (tmp19Result) {
      const obj8 = { size: "small", color: roleColor, colors: roleColorStrings };
      tmp19Result = tmp19(tmp2(1187).RoleDot, obj8);
    }
    items2 = [tmp19Result, , , ];
    const obj9 = { variant: "text-md/medium", color: "interactive-text-active", lineClamp: 1, style: items3, gradientColors: tmp23, children: username };
    items3 = [tmp.username, {}];
    tmp23 = undefined;
    const Text = tmp2(5747).Text;
    if (isRoleStyleAndRoleColorsEligibleForERC) {
      tmp23 = processColorStringsArray;
    }
    items2[1] = hasOwnProperty(Text, obj9);
    items2[2] = hasOwnProperty(Text_Text.Text, { variant: "text-md/medium", color: "interactive-text-active", children: " " });
    const obj10 = { variant: "text-md/medium", lineClamp: 1, style: tmp.messageText, children: getBoostRowMessageTextDefault(row) };
    const Text2 = tmp2(5747).Text;
    items2[3] = hasOwnProperty(Text2, obj10);
    items1[1] = metroRequire(View, obj7);
    const obj11 = { variant: "text-xs/medium", color: "text-subtle", style: tmp.timestamp, children: calendarFormatResult };
    items1[2] = hasOwnProperty(Text_Text.Text, obj11);
    return metroRequire(View, obj4);
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
  const tmp = closure_7();
  const arr = useMaybeGetSortedBoostsDefault(guildId, 10);
  let tmp3 = null;
  if (0 !== arr.length) {
    let obj = { style: tmp.sectionContainer, children: items };
    const obj2 = { variant: "heading-lg/semibold", color: "text-strong", children: intl.string(intl2.t.yM9Krm) };
    const Text = Text_Text.Text;
    intl = intl2.intl;
    items = [hasOwnProperty(Text, obj2), ];
    const obj3 = {
      style: tmp.boostContainer,
      children: arr.map((row) => {
          const obj = { row };
          return closure_1_5(GuildPowerupsRecentActivityRow, obj, "boost-" + row.boost.id);
        })
    };
    items[1] = hasOwnProperty(View, obj3);
    tmp3 = metroRequire(View, obj);
  }
  return tmp3;
};
