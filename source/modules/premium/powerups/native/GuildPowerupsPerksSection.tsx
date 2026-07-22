// Module ID: 11592
// Function ID: 90125
// Name: GuildPowerupPerksSection
// Dependencies: []
// Exports: default

// Module 11592 (GuildPowerupPerksSection)
const View = require(dependencyMap[0]).View;
const _module = require(dependencyMap[1]);
({ jsx: closure_4, Fragment: closure_5, jsxs: closure_6 } = _module);
const _module1 = require(dependencyMap[2]);
let obj = {};
obj = { flexDirection: "column", gap: importDefault(dependencyMap[3]).space.PX_16 };
obj.container = obj;
let closure_7 = _module1.createStyles(obj);
const _module2 = require(dependencyMap[10]);
const result = _module2.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsPerksSection.tsx");

export default function GuildPowerupPerksSection(arg0) {
  let listings;
  ({ guildId: closure_0, listings } = arg0);
  let obj = {};
  obj = {};
  const tmp = callback3();
  const intl = require(dependencyMap[5]).intl;
  obj.title = intl.string(importDefault(dependencyMap[6]).TV3Vm8);
  const intl2 = require(dependencyMap[5]).intl;
  obj.description = intl2.string(importDefault(dependencyMap[6]).STx9hp);
  const items = [callback(importDefault(dependencyMap[4]), obj), ];
  obj = {
    style: tmp.container,
    children: listings.map((type) => {
      type = type.type;
      if ("singlePerk" === type) {
        let obj = { guildId: closure_0 };
        ({ powerup: obj3.powerup, badge: obj3.badge } = type);
        return callback2(callback(closure_2[7]), obj, type.powerup.skuId);
      } else if ("multiPerk" === type) {
        obj = { guildId: closure_0, listing: type };
        const _HermesInternal2 = HermesInternal;
        return callback2(callback(closure_2[8]), obj, "" + type.group + "-" + arg1);
      } else if ("gameServer" === type) {
        obj = { guildId: closure_0 };
        const _HermesInternal = HermesInternal;
        return callback2(callback(closure_2[9]), obj, "game-server-" + arg1);
      } else {
        return null;
      }
    })
  };
  items[1] = callback(View, obj);
  obj.children = items;
  return callback2(closure_5, obj);
};
