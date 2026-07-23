// Module ID: 11602
// Function ID: 90174
// Name: GuildPowerupPerksSection
// Dependencies: [27, 33, 4130, 689, 11585, 1212, 2230, 11603, 11605, 11607, 2]
// Exports: default

// Module 11602 (GuildPowerupPerksSection)
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
let closure_6;
({ jsx: closure_4, Fragment: closure_5, jsxs: closure_6 } = jsxProd);
let obj = {};
obj = { flexDirection: "column", gap: require("_createForOfIteratorHelperLoose").space.PX_16 };
obj.container = obj;
let closure_7 = _createForOfIteratorHelperLoose.createStyles(obj);
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsPerksSection.tsx");

export default function GuildPowerupPerksSection(arg0) {
  let listings;
  let require;
  ({ guildId: require, listings } = arg0);
  let obj = {};
  obj = {};
  const tmp = callback3();
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.title = intl.string(importDefault(2230).TV3Vm8);
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj.description = intl2.string(importDefault(2230).STx9hp);
  const items = [callback(importDefault(11585), obj), ];
  obj = {
    style: tmp.container,
    children: listings.map((type) => {
      type = type.type;
      if ("singlePerk" === type) {
        let obj = { guildId: closure_0 };
        ({ powerup: obj3.powerup, badge: obj3.badge } = type);
        return outer1_4(outer1_1(outer1_2[7]), obj, type.powerup.skuId);
      } else if ("multiPerk" === type) {
        obj = { guildId: closure_0, listing: type };
        const _HermesInternal2 = HermesInternal;
        return outer1_4(outer1_1(outer1_2[8]), obj, "" + type.group + "-" + arg1);
      } else if ("gameServer" === type) {
        obj = { guildId: closure_0 };
        const _HermesInternal = HermesInternal;
        return outer1_4(outer1_1(outer1_2[9]), obj, "game-server-" + arg1);
      } else {
        return null;
      }
    })
  };
  items[1] = callback(View, obj);
  obj.children = items;
  return callback2(closure_5, obj);
};
