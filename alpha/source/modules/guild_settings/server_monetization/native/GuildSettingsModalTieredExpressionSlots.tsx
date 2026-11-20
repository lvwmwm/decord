// Module ID: 19668
// Function ID: 19669
// Name: GuildSettingsModalTieredExpressionSlots
// Dependencies: [19, 1071, 21, 5810, 575, 12, 7228, 6925, 1112, 7575, 2]
// Exports: default

// Module 19668 (GuildSettingsModalTieredExpressionSlots)
import Constants from "Constants" /* 1071 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let importDefault;

let closure_4;
let hasOwnProperty;
let closure_3 = Constants.AppliedGuildBoostsRequiredForBoostedGuildTier;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
const result = size.fileFinishedImporting("modules/guild_settings/server_monetization/native/GuildSettingsModalTieredExpressionSlots.tsx");

export default function GuildSettingsModalTieredExpressionSlots(tiers) {
  let closure_4;
  let hasIcons;
  tiers = tiers.tiers;
  ({ guildTier: importDefault, hasIcons } = tiers);
  if (hasIcons === undefined) {
    hasIcons = true;
  }
  ({ renderUnlockedSubLabel: closure_3, renderSlot: closure_4 } = tiers);
  let obj = {
    spacing: require("native").space.PX_16,
    children: tiers.map((item, index) => {
      let IconComponent;
      let closure_1;
      let formatResult;
      let items;
      let numSlots;
      let tier;
      let title;
      let tmp6Result2;
      tiers = item;
      ({ tier, IconComponent } = item);
      ({ title, numSlots } = item);
      const tmp2 = closure_3[tier];
      const obj = require("module_12");
      importDefault = obj.sumBy(tiers.slice(0, index), "numSlots");
      const obj2 = { hasIcons, children: items };
      const TableRowGroup = tiers(hasIcons[6]).TableRowGroup;
      let tmp6Result;
      const TableRow = tiers(hasIcons[7]).TableRow;
      const tmp4 = closure_1_5;
      if (null != IconComponent) {
        let str = "premium-nitro-pink-text";
        if (importDefault < tier) {
          str = "icon-muted";
        }
        const obj3 = { color: str };
        tmp6Result = tmp6(IconComponent, obj3);
      }
      const obj4 = { icon: tmp6Result, label: title, subLabel: formatResult, trailing: tmp6Result2 };
      if (importDefault < tier) {
        const intl = tmp5(tmp3[8]).intl;
        const obj5 = { required: tmp2, decorator: "" };
        formatResult = intl.format(tmp5(tmp3[8]).t.t2Wbo1, obj5);
      } else if (closure_3 != null) {
        formatResult = closure_3(item);
      }
      tmp6Result2 = undefined;
      if (importDefault < tier) {
        tmp6Result2 = tmp6(tmp5(tmp3[9]).LockIcon, { color: "icon-muted" });
      }
      items = [closure_4(TableRow, obj4), ];
      const arr = Array.from({ length: numSlots });
      items[1] = arr.map((item, index) => closure_4(item, closure_1 + index));
      return tmp4(TableRowGroup, obj2, tier);
    })
  };
  const Stack = tiers(hasIcons[3]).Stack;
  return closure_4(Stack, obj);
};
