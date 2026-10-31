// Module ID: 17036
// Function ID: 17037
// Name: useOrbsArcadePlayButtonLabel
// Dependencies: [17010, 504, 15052, 1113, 2]
// Exports: default

// Module 17036 (useOrbsArcadePlayButtonLabel)
import OrbsArcadeStore from "OrbsArcadeStore" /* 17010 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const result = size.fileFinishedImporting("modules/orbs_arcade/hooks/useOrbsArcadePlayButtonLabel.tsx");

export default function useOrbsArcadePlayButtonLabel(orbCost) {
  let heldRunChargeTotal;
  let intl;
  let intl2;
  let obj7;
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
  const obj2 = require("useVirtualCurrencyBalance");
  const virtualCurrencyBalance = obj2.useVirtualCurrencyBalance();
  const items2 = [OrbsArcadeStore];
  let num = orbCost.orbCost;
  const obj3 = require("get initialized");
  const stateFromStores1 = obj3.useStateFromStores(items2, () => heldRunChargeTotal.heldRunChargeTotal);
  if (num == null) {
    num = 0;
  }
  if (num > 0 && null != stateFromStores && stateFromStores <= 0) {
    let formatToPlainStringResult;
    const intl3 = tmp(1113).intl;
    if (null == virtualCurrencyBalance || virtualCurrencyBalance - stateFromStores1 >= num) {
      const obj4 = { count: num };
      formatToPlainStringResult = intl3.formatToPlainString(tmp(1113).t["L1yi/U"], obj4);
    } else {
      formatToPlainStringResult = intl3.string(tmp(1113).t.T1eNyO);
    }
    return { text: formatToPlainStringResult, isPaidPlay: num > 0 && null != stateFromStores && stateFromStores <= 0, canAffordPlay: null == virtualCurrencyBalance || virtualCurrencyBalance - stateFromStores1 >= num };
  } else {
    if (num > 0) {
      let obj8;
      if (null != stateFromStores) {
        const obj6 = { text: intl2.formatToPlainString(tmp(1113).t.onJEzB, obj7), isPaidPlay: num > 0 && null != stateFromStores && stateFromStores <= 0, canAffordPlay: true };
        intl2 = tmp(1113).intl;
        obj8 = obj6;
        obj7 = { count: stateFromStores };
      }
      return obj8;
    }
    obj8 = { text: intl.string(tmp(1113).t["7/xnly"]), isPaidPlay: num > 0 && null != stateFromStores && stateFromStores <= 0, canAffordPlay: true };
    intl = tmp(1113).intl;
  }
};
