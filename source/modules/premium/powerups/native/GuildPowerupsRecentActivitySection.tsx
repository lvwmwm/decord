// Module ID: 11612
// Function ID: 90207
// Name: GuildPowerupsRecentActivityRow
// Dependencies: [27, 4122, 33, 4130, 689, 11613, 3800, 6884, 566, 7650, 8013, 11616, 11618, 1273, 4126, 11620, 11614, 1212, 2]
// Exports: default

// Module 11612 (GuildPowerupsRecentActivityRow)
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
function GuildPowerupsRecentActivityRow(row) {
  let boost;
  let phase;
  let roleColor;
  let roleColorStrings;
  let sortKey;
  row = row.row;
  ({ boost, phase, sortKey } = row);
  const tmp = callback3();
  let obj = require(11613) /* useMaybeGetSortedBoosts */;
  const getBoostUserConfig = obj.useGetBoostUserConfig(boost);
  ({ roleColor, roleColorStrings } = getBoostUserConfig);
  if (row.isExpiringBoostsEnabled) {
    let tmp3Result = tmp3(3800);
    const _Date = Date;
    const date = new Date(sortKey);
    let calendarFormatResult = tmp3Result.calendarFormat(date);
  } else {
    tmp3Result = tmp3(6884);
    calendarFormatResult = tmp3Result.getRelativeTimestamp(sortKey, true);
  }
  let obj3 = require(566) /* initialize */;
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj3.useStateFromStores(items, () => outer1_4.roleStyle);
  if ("username" === stateFromStores) {
    if (null != roleColor) {
      obj = { color: roleColor };
    }
    let obj5 = require(7650) /* processColorStringsInternal */;
    const processColorStringsArray = obj5.useProcessColorStringsArray(roleColorStrings);
    let obj6 = require(7650) /* processColorStringsInternal */;
    const isRoleStyleAndRoleColorsEligibleForERC = obj6.useIsRoleStyleAndRoleColorsEligibleForERC(boost.guildId, boost.userId, stateFromStores, processColorStringsArray);
    if ("gave" === phase) {
      let BoostGemSlashIcon = require(8013) /* BoostGemIcon */.BoostGemIcon;
    } else if ("expiring" === phase) {
      BoostGemSlashIcon = require(11616) /* BoostTier1Icon */.BoostTier1Icon;
    } else {
      BoostGemSlashIcon = require(11618) /* BoostGemSlashIcon */.BoostGemSlashIcon;
    }
    obj = { style: tmp.boostRowContainer };
    if ("gave" === phase) {
      const obj1 = { color: importDefault(689).unsafe_rawColors.GUILD_BOOSTING_PINK, size: "sm" };
      let obj2 = obj1;
    } else {
      obj2 = { size: "sm" };
    }
    const items1 = [callback(BoostGemSlashIcon, obj2), , ];
    obj3 = { style: tmp.boostMessage };
    let tmp36 = "dot" === stateFromStores;
    if (tmp36) {
      tmp36 = null != roleColor;
    }
    if (tmp36) {
      const obj4 = { size: "small", color: roleColor, colors: roleColorStrings };
      tmp36 = callback(require(1273) /* Button */.RoleDot, obj4);
    }
    const items2 = [tmp36, , , ];
    obj5 = { variant: "text-md/medium", color: "interactive-text-active", lineClamp: 1 };
    const items3 = [tmp.username, {}];
    obj5.style = items3;
    let tmp44;
    if (isRoleStyleAndRoleColorsEligibleForERC) {
      tmp44 = processColorStringsArray;
    }
    obj5.gradientColors = tmp44;
    obj5.children = getBoostUserConfig.username;
    items2[1] = callback(require(4126) /* Text */.Text, obj5);
    items2[2] = callback(require(4126) /* Text */.Text, { variant: "text-md/medium", color: "interactive-text-active", children: " " });
    obj6 = { variant: "text-md/medium", lineClamp: 1, style: tmp.messageText, children: importDefault(11620)(row) };
    items2[3] = callback(require(4126) /* Text */.Text, obj6);
    obj3.children = items2;
    items1[1] = closure_6(View, obj3);
    const obj7 = { variant: "text-xs/semibold", style: tmp.timestamp, children: calendarFormatResult };
    items1[2] = callback(require(4126) /* Text */.Text, obj7);
    obj.children = items1;
    return closure_6(View, obj);
  }
}
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
let obj = {};
obj = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_16, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16 };
obj.sectionContainer = obj;
obj.boostContainer = { gap: require("_createForOfIteratorHelperLoose").space.PX_12, marginTop: require("_createForOfIteratorHelperLoose").space.PX_16 };
obj.boostRowContainer = { flexDirection: "row", alignItems: "center", gap: 8 };
obj.boostMessage = { flex: 1, flexDirection: "row", alignItems: "center" };
obj.username = { maxWidth: 170, flexShrink: 1 };
obj.messageText = { flexShrink: 0 };
obj.timestamp = { flexShrink: 0 };
let closure_7 = _createForOfIteratorHelperLoose.createStyles(obj);
let obj1 = { gap: require("_createForOfIteratorHelperLoose").space.PX_12, marginTop: require("_createForOfIteratorHelperLoose").space.PX_16 };
const result = require("jsxProd").fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsRecentActivitySection.tsx");

export default function GuildPowerupsRecentActivitySection(guildId) {
  const tmp = callback3();
  const arr = importDefault(11613)(guildId.guildId, 10);
  let obj = _require(11614);
  _require = obj.useExpiringBoostsEnabled("GuildPowerupsRecentActivity");
  let tmp2 = null;
  if (0 !== arr.length) {
    obj = { style: tmp.sectionContainer };
    obj = { variant: "heading-lg/semibold", color: "text-subtle" };
    const intl = _require(1212).intl;
    obj.children = intl.string(_require(1212).t.yM9Krm);
    const items = [callback(_require(4126).Text, obj), ];
    const obj1 = { style: tmp.boostContainer, children: arr.map((boost) => outer1_5(outer1_8, { row: boost, isExpiringBoostsEnabled: closure_0 }, "boost-" + boost.boost.id)) };
    items[1] = callback(View, obj1);
    obj.children = items;
    tmp2 = callback2(View, obj);
  }
  return tmp2;
};
