// Module ID: 16979
// Function ID: 16980
// Name: useOrbsArcadePlayButtonLabel
// Dependencies: [16954, 504, 1114, 2]
// Exports: default

// Module 16979 (useOrbsArcadePlayButtonLabel)
import OrbsArcadeStore from "OrbsArcadeStore" /* 16954 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const result = size.fileFinishedImporting("modules/orbs_arcade/hooks/useOrbsArcadePlayButtonLabel.tsx");

export default function useOrbsArcadePlayButtonLabel(orbCost) {
  let intl;
  let intl2;
  let intl3;
  let obj3;
  let obj5;
  let obj6;
  _require = orbCost;
  let tmp = _require;
  const items = [OrbsArcadeStore];
  const items1 = [, ];
  ({ id: arr2[0], numFreePlays: arr2[1] } = orbCost);
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, () => {
    const gameStateForGame = OrbsArcadeStore.getGameStateForGame(orbCost.id);
    let prop;
    const tmp = orbCost;
    if (gameStateForGame != null) {
      prop = gameStateForGame.numFreePlaysRemaining;
    }
    if (prop == null) {
      prop = tmp.numFreePlays;
    }
    return prop;
  }, items1);
  const tmp5 = null != orbCost.orbCost && orbCost.orbCost > 0 && null != stateFromStores && stateFromStores <= 0;
  if (tmp5) {
    const obj2 = { text: intl3.formatToPlainString(tmp(1114).t.oSWYca, obj3), isPaidPlay: tmp5 };
    intl3 = tmp(1114).intl;
    obj6 = obj2;
    obj3 = { count: orbCost.orbCost };
  } else {
    if (null != orbCost.orbCost && orbCost.orbCost > 0) {
      if (null != stateFromStores) {
        const obj4 = { text: intl2.formatToPlainString(tmp(1114).t.onJEzB, obj5), isPaidPlay: tmp5 };
        intl2 = tmp(1114).intl;
        obj6 = obj4;
        obj5 = { count: stateFromStores };
      }
    }
    obj6 = { text: intl.string(tmp(1114).t["7/xnly"]), isPaidPlay: tmp5 };
    intl = tmp(1114).intl;
  }
  return obj6;
};
