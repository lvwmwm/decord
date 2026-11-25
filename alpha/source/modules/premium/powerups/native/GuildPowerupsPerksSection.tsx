// Module ID: 13507
// Function ID: 13508
// Name: GuildPowerupsPerksSection
// Dependencies: [17, 21, 5012, 575, 13490, 1112, 2878, 13508, 13510, 13512, 2]
// Exports: default

// Module 13507 (GuildPowerupsPerksSection)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl3 from "intl" /* 1112 */;
import _modDef2878 from "module_2878" /* 2878 */;
import GuildPowerupsSectionHeaderDefault from "GuildPowerupsSectionHeader" /* 13490 */;
import GuildPowerupsSinglePerkCardDefault from "GuildPowerupsSinglePerkCard" /* 13508 */;
import GuildPowerupsMultiPerkCardDefault from "GuildPowerupsMultiPerkCard" /* 13510 */;
import GuildPowerupsGameServerCardDefault from "GuildPowerupsGameServerCard" /* 13512 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5012 */;
import size from "module_2" /* 2 */;

let type;

let closure_4;
let hasOwnProperty;
let metroRequire;
let obj2;
const View = react_native.View;
({ jsx: closure_4, Fragment: hasOwnProperty, jsxs: metroRequire } = Fragment);
let obj = { container: obj2 };
obj2 = { flexDirection: "column", gap: nativeDefault.space.PX_16 };
let closure_7 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsPerksSection.tsx");

export default function GuildPowerupPerksSection(arg0) {
  let guildId;
  let intl;
  let intl2;
  let items;
  let listings;
  ({ guildId: require, listings } = arg0);
  let obj = { children: items };
  const tmp = closure_7();
  let obj2 = { title: intl.string(_modDef2878.TV3Vm8), description: intl2.string(_modDef2878.STx9hp) };
  const tmp2 = GuildPowerupsSectionHeaderDefault;
  intl = intl3.intl;
  intl2 = intl3.intl;
  items = [closure_4(tmp2, obj2), ];
  const obj3 = {
    style: tmp.container,
    children: listings.map((type, index) => {
      type = type.type;
      if ("singlePerk" === type) {
        const obj2 = { guildId: require, powerup: null, badge: null };
        ({ powerup: obj3.powerup, badge: obj3.badge } = type);
        return React3(GuildPowerupsSinglePerkCardDefault, obj2, type.powerup.skuId);
      } else if ("multiPerk" === type) {
        const _HermesInternal2 = HermesInternal;
        const obj5 = { guildId: require, listing: type };
        const tmp11 = GuildPowerupsMultiPerkCardDefault;
        return React3(tmp11, obj5, "" + type.group + "-" + index);
      } else if ("gameServer" === type) {
        const _HermesInternal = HermesInternal;
        const obj = { guildId: require };
        const tmp5 = GuildPowerupsGameServerCardDefault;
        return React3(tmp5, obj, "game-server-" + index);
      } else {
        return null;
      }
    })
  };
  items[1] = closure_4(View, obj3);
  return closure_6(closure_5, obj);
};
