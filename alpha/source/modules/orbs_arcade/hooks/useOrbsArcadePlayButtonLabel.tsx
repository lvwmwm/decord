// Module ID: 16458
// Function ID: 16459
// Name: useOrbsArcadePlayButtonLabel
// Dependencies: [16434, 558, 576, 504, 1125, 2]

// Module 16458 (useOrbsArcadePlayButtonLabel)
import OrbsArcadeStore from "OrbsArcadeStore" /* 16434 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useOrbsArcadePlayButtonLabel(id) {
  let first;
  _require = id;
  let tmp = _require;
  const obj = require("react");
  const cResult = obj.c(18);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [OrbsArcadeStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === id.id) {
    let tmp6;
    let tmp7;
    let tmp14;
    if (cResult[2] === id.numFreePlays) {
      tmp6 = cResult[3];
      tmp7 = cResult[4];
    }
    const tmpResult = tmp(504);
    const stateFromStores = tmpResult.useStateFromStores(first, tmp6, tmp7);
    const tmp11 = null != id.orbCost && id.orbCost > 0 && null != stateFromStores && stateFromStores <= 0;
    if (tmp11) {
      let tmp18;
      if (cResult[5] !== id.orbCost) {
        const intl3 = tmp(1125).intl;
        const obj2 = { count: id.orbCost };
        const formatToPlainStringResult = intl3.formatToPlainString(tmp(1125).t.oSWYca, obj2);
        cResult[5] = id.orbCost;
        cResult[6] = formatToPlainStringResult;
        tmp18 = formatToPlainStringResult;
      } else {
        tmp18 = cResult[6];
      }
      if (cResult[7] === tmp11) {
        let tmp20;
        if (cResult[8] === tmp18) {
          tmp20 = cResult[9];
        }
        tmp14 = tmp20;
      }
      const obj3 = { text: tmp18, isPaidPlay: tmp11 };
      cResult[7] = tmp11;
      cResult[8] = tmp18;
      cResult[9] = obj3;
      tmp20 = obj3;
    } else {
      let tmp12;
      if (null != id.orbCost && id.orbCost > 0) {
        if (null != stateFromStores) {
          let tmp15;
          if (cResult[10] !== stateFromStores) {
            const intl2 = tmp(1125).intl;
            const obj4 = { count: stateFromStores };
            const formatToPlainStringResult1 = intl2.formatToPlainString(tmp(1125).t.onJEzB, obj4);
            cResult[10] = stateFromStores;
            cResult[11] = formatToPlainStringResult1;
            tmp15 = formatToPlainStringResult1;
          } else {
            tmp15 = cResult[11];
          }
          if (cResult[12] === tmp11) {
            let tmp17;
            if (cResult[13] === tmp15) {
              tmp17 = cResult[14];
            }
            tmp14 = tmp17;
          }
          const obj5 = { text: tmp15, isPaidPlay: tmp11 };
          cResult[12] = tmp11;
          cResult[13] = tmp15;
          cResult[14] = obj5;
          tmp17 = obj5;
        }
      }
      const _Symbol = Symbol;
      if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(1125).intl;
        const stringResult = intl.string(tmp(1125).t["7/xnly"]);
        cResult[15] = stringResult;
        tmp12 = stringResult;
      } else {
        tmp12 = cResult[15];
      }
      if (cResult[16] !== tmp11) {
        const obj6 = { text: tmp12, isPaidPlay: tmp11 };
        cResult[16] = tmp11;
        cResult[17] = obj6;
        tmp14 = obj6;
      } else {
        tmp14 = cResult[17];
      }
    }
    return tmp14;
  }
  const fn = function l() {
    const gameStateForGame = OrbsArcadeStore.getGameStateForGame(id.id);
    let prop;
    const tmp = id;
    if (gameStateForGame != null) {
      prop = gameStateForGame.numFreePlaysRemaining;
    }
    if (prop == null) {
      prop = tmp.numFreePlays;
    }
    return prop;
  };
  const items1 = [, ];
  ({ id: arr2[0], numFreePlays: arr2[1] } = id);
  cResult[1] = id.id;
  cResult[2] = id.numFreePlays;
  cResult[3] = fn;
  cResult[4] = items1;
  tmp7 = items1;
  tmp6 = fn;
}) : (function useOrbsArcadePlayButtonLabel(orbCost) {
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
    const obj2 = { text: intl3.formatToPlainString(tmp(1125).t.oSWYca, obj3), isPaidPlay: tmp5 };
    intl3 = tmp(1125).intl;
    obj6 = obj2;
    obj3 = { count: orbCost.orbCost };
  } else {
    if (null != orbCost.orbCost && orbCost.orbCost > 0) {
      if (null != stateFromStores) {
        const obj4 = { text: intl2.formatToPlainString(tmp(1125).t.onJEzB, obj5), isPaidPlay: tmp5 };
        intl2 = tmp(1125).intl;
        obj6 = obj4;
        obj5 = { count: stateFromStores };
      }
    }
    obj6 = { text: intl.string(tmp(1125).t["7/xnly"]), isPaidPlay: tmp5 };
    intl = tmp(1125).intl;
  }
  return obj6;
});
const result = size.fileFinishedImporting("modules/orbs_arcade/hooks/useOrbsArcadePlayButtonLabel.tsx");

export default tmp2;
