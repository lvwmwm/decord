// Module ID: 12852
// Function ID: 12853
// Name: GuildPowerupsPerksSection
// Dependencies: [17, 21, 4788, 576, 12835, 1115, 2514, 12853, 12855, 12857, 2]
// Exports: default

// Module 12852 (GuildPowerupsPerksSection)
import _mod17 from "module_17" /* 17 */;
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import _modDef2514 from "module_2514" /* 2514 */;
import GuildPowerupsSectionHeaderDefault from "GuildPowerupsSectionHeader" /* 12835 */;
import GuildPowerupsSinglePerkCardDefault from "GuildPowerupsSinglePerkCard" /* 12853 */;
import GuildPowerupsMultiPerkCardDefault from "GuildPowerupsMultiPerkCard" /* 12855 */;
import GuildPowerupsGameServerCardDefault from "GuildPowerupsGameServerCard" /* 12857 */;
import jsxProd from "jsxProd" /* 21 */;
import createStyles from "createStyles" /* 4788 */;
import size from "module_2" /* 2 */;

const View = _mod17.View;
({ jsx: closure_4, Fragment: hasOwnProperty, jsxs: metroRequire } = jsxProd);
let obj = { container: { flexDirection: "column", gap: nativeDefault.space.PX_16 } };
let closure_7 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsPerksSection.tsx");

export default function GuildPowerupPerksSection(arg0) {
  ({ guildId: require, listings } = arg0);
  let obj = { children: null };
  let obj2 = { title: null, description: null };
  const tmp = closure_7();
  const intl = util.intl;
  obj2.title = intl.string(_modDef2514.TV3Vm8);
  const intl2 = util.intl;
  obj2.description = intl2.string(_modDef2514.STx9hp);
  const items = [closure_4(GuildPowerupsSectionHeaderDefault, obj2), ];
  items[1] = closure_4(View, {
    style: tmp.container,
    children: listings.map((type, index) => {
      type = type.type;
      if ("singlePerk" === type) {
        const obj2 = { guildId, powerup: null, badge: null };
        ({ powerup: obj3.powerup, badge: obj3.badge } = type);
        return React4(GuildPowerupsSinglePerkCardDefault, obj2, type.powerup.skuId);
      } else if ("multiPerk" === type) {
        const obj5 = { guildId, listing: type };
        const _HermesInternal2 = HermesInternal;
        return React4(GuildPowerupsMultiPerkCardDefault, obj5, "" + type.group + "-" + index);
      } else if ("gameServer" === type) {
        const obj = { guildId };
        const _HermesInternal = HermesInternal;
        return React4(GuildPowerupsGameServerCardDefault, obj, "game-server-" + index);
      } else {
        return null;
      }
    })
  });
  obj.children = items;
  return closure_6(closure_5, obj);
};
