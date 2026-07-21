// Module ID: 11601
// Function ID: 90145
// Name: GuildPowerupsRecentActivityRow
// Dependencies: []
// Exports: default

// Module 11601 (GuildPowerupsRecentActivityRow)
function GuildPowerupsRecentActivityRow(row) {
  let boost;
  let phase;
  let roleColor;
  let roleColorStrings;
  let sortKey;
  row = row.row;
  ({ boost, phase, sortKey } = row);
  const tmp = callback4();
  let obj = require(dependencyMap[5]);
  const getBoostUserConfig = obj.useGetBoostUserConfig(boost);
  ({ roleColor, roleColorStrings } = getBoostUserConfig);
  if (row.isExpiringBoostsEnabled) {
    let tmp3Result = tmp3(tmp4[6]);
    const _Date = Date;
    const date = new Date(sortKey);
    let calendarFormatResult = tmp3Result.calendarFormat(date);
  } else {
    tmp3Result = tmp3(tmp4[7]);
    calendarFormatResult = tmp3Result.getRelativeTimestamp(sortKey, true);
  }
  let obj3 = require(dependencyMap[8]);
  const items = [closure_4];
  const stateFromStores = obj3.useStateFromStores(items, () => roleStyle.roleStyle);
  if ("username" === stateFromStores) {
    if (null != roleColor) {
      obj = { color: roleColor };
    }
    let obj5 = require(dependencyMap[9]);
    const processColorStringsArray = obj5.useProcessColorStringsArray(roleColorStrings);
    let obj6 = require(dependencyMap[9]);
    const isRoleStyleAndRoleColorsEligibleForERC = obj6.useIsRoleStyleAndRoleColorsEligibleForERC(boost.guildId, boost.userId, stateFromStores, processColorStringsArray);
    if ("gave" === phase) {
      let BoostGemSlashIcon = require(dependencyMap[10]).BoostGemIcon;
    } else if ("expiring" === phase) {
      BoostGemSlashIcon = require(dependencyMap[11]).BoostTier1Icon;
    } else {
      BoostGemSlashIcon = require(dependencyMap[12]).BoostGemSlashIcon;
    }
    obj = { style: tmp.boostRowContainer };
    if ("gave" === phase) {
      const obj1 = { color: importDefault(dependencyMap[4]).unsafe_rawColors.GUILD_BOOSTING_PINK, size: "sm" };
      let obj2 = obj1;
    } else {
      obj2 = { size: "sm" };
    }
    const items1 = [callback2(BoostGemSlashIcon, obj2), , ];
    obj3 = { style: tmp.boostMessage };
    let tmp36 = "dot" === stateFromStores;
    if (tmp36) {
      tmp36 = null != roleColor;
    }
    if (tmp36) {
      const obj4 = { size: "small", color: roleColor, colors: roleColorStrings };
      tmp36 = callback2(require(dependencyMap[13]).RoleDot, obj4);
    }
    const items2 = [tmp36, , , ];
    obj5 = { <string:1643205302>: 1, <string:1415816450>: 1, <string:4283523744>: null };
    const items3 = [tmp.username, {}];
    obj5.style = items3;
    let tmp44;
    if (isRoleStyleAndRoleColorsEligibleForERC) {
      tmp44 = processColorStringsArray;
    }
    obj5.gradientColors = tmp44;
    obj5.children = getBoostUserConfig.username;
    items2[1] = callback2(require(dependencyMap[14]).Text, obj5);
    items2[2] = callback2(require(dependencyMap[14]).Text, {});
    obj6 = { style: tmp.messageText, children: importDefault(dependencyMap[15])(row) };
    items2[3] = callback2(require(dependencyMap[14]).Text, obj6);
    obj3.children = items2;
    items1[1] = closure_6(View, obj3);
    const obj7 = { variant: "text-xs/semibold", style: tmp.timestamp, children: calendarFormatResult };
    items1[2] = callback2(require(dependencyMap[14]).Text, obj7);
    obj.children = items1;
    return closure_6(View, obj);
  }
}
const View = require(dependencyMap[0]).View;
let closure_4 = importDefault(dependencyMap[1]);
const _module = require(dependencyMap[2]);
({ jsx: closure_5, jsxs: closure_6 } = _module);
const _module1 = require(dependencyMap[3]);
let obj = {};
obj = { marginTop: importDefault(dependencyMap[4]).space.PX_16, paddingHorizontal: importDefault(dependencyMap[4]).space.PX_16 };
obj.sectionContainer = obj;
obj.boostContainer = { gap: importDefault(dependencyMap[4]).space.PX_12, marginTop: importDefault(dependencyMap[4]).space.PX_16 };
obj.boostRowContainer = {};
obj.boostMessage = { "Null": null, "Null": "\u{1F469}\u{1F3FC}\u200D\u{1F9B1}", "Null": true };
obj.username = {};
obj.messageText = { flexShrink: 0 };
obj.timestamp = { flexShrink: 0 };
let closure_7 = _module1.createStyles(obj);
const _module2 = require(dependencyMap[18]);
const result = _module2.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsRecentActivitySection.tsx");

export default function GuildPowerupsRecentActivitySection(guildId) {
  const tmp = callback4();
  const arr = importDefault(dependencyMap[5])(guildId.guildId, 10);
  let obj = callback(dependencyMap[16]);
  const callback = obj.useExpiringBoostsEnabled("GuildPowerupsRecentActivity");
  let tmp2 = null;
  if (0 !== arr.length) {
    obj = { style: tmp.sectionContainer };
    obj = {};
    const intl = callback(dependencyMap[17]).intl;
    obj.children = intl.string(callback(dependencyMap[17]).t.yM9Krm);
    const items = [callback2(callback(dependencyMap[14]).Text, obj), ];
    const obj1 = { style: tmp.boostContainer, children: arr.map((boost) => callback(closure_8, { row: boost, isExpiringBoostsEnabled: closure_0 }, "boost-" + boost.boost.id)) };
    items[1] = callback2(View, obj1);
    obj.children = items;
    tmp2 = callback3(View, obj);
  }
  return tmp2;
};
