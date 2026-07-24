// Module ID: 12687
// Function ID: 98538
// Name: _createForOfIteratorHelperLoose
// Dependencies: [5, 5590, 653, 12688, 12686, 478, 4304, 675, 686, 2]
// Exports: detectLocalApps

// Module 12687 (_createForOfIteratorHelperLoose)
import isWindows from "isWindows";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import ME from "ME";

let closure_5;
let closure_6;
const require = arg1;
function _createForOfIteratorHelperLoose(iterable) {
  let closure_0 = iterable;
  iterable = "undefined" !== typeof Symbol;
  if (iterable) {
    const _Symbol = Symbol;
    iterable = iterable[Symbol.iterator];
  }
  if (!iterable) {
    iterable = iterable[Symbol.iterator];
  }
  if (iterable) {
    const iter = iterable.call(iterable);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = iterable;
    if (!Array.isArray(iterable)) {
      let tmp2;
      if (iterable) {
        if ("string" === typeof iterable) {
          tmp2 = _arrayLikeToArray(iterable, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(iterable).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = iterable.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(iterable, undefined);
              } else {
                let obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(iterable);
          const callResult = toString.call(iterable);
          tmp3 = "Object" === substr && iterable.constructor;
        }
      }
      tmp = tmp2;
      if (!tmp2) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        throw typeError;
      }
    }
    if (tmp) {
      closure_0 = tmp;
    }
    let c1 = 0;
    return () => {
      if (closure_1 >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = length[+closure_1];
      }
      return obj;
    };
  }
}
function _arrayLikeToArray(arg0, arg1) {
  let length;
  if (tmp) {
    length = arg0.length;
  }
  const ArrayResult = Array(length);
  for (let num = 0; num < length; num = num + 1) {
    ArrayResult[num] = arg0[num];
  }
  return ArrayResult;
}
function isGameCommunityUpsellMultiExperimentEnabled() {
  const GameCommunityUpsellMultiExperiment = require(12688) /* GAME_COMMUNITY_UPSELL_MULTI_EXPERIMENT */.GameCommunityUpsellMultiExperiment;
  return GameCommunityUpsellMultiExperiment.getConfig({ location: "LocalAppDetectionUtils" }).enabled;
}
function getDetectableApp(arg0) {
  if (require(12686) /* DetectableAppNames */.DetectableAppNames.ROBLOX === arg0) {
    return { androidScheme: "roblox", iosScheme: "roblox" };
  } else if (require(12686) /* DetectableAppNames */.DetectableAppNames.MINECRAFT === arg0) {
    let obj = { androidScheme: "minecraft", iosScheme: "minecraft", predicate: isGameCommunityUpsellMultiExperimentEnabled };
    return obj;
  } else if (require(12686) /* DetectableAppNames */.DetectableAppNames.FORTNITE === arg0) {
    obj = { androidScheme: "fortnite", iosScheme: "com.epicgames.fortnite", predicate: isGameCommunityUpsellMultiExperimentEnabled };
    return obj;
  } else if (require(12686) /* DetectableAppNames */.DetectableAppNames.GENSHIN === arg0) {
    const obj1 = { androidScheme: "genshin", iosScheme: "genshin", predicate: isGameCommunityUpsellMultiExperimentEnabled };
    return obj1;
  } else if (require(12686) /* DetectableAppNames */.DetectableAppNames.PUBG_MOBILE === arg0) {
    const obj2 = { androidScheme: "pubgmobile", iosScheme: "igame1320", predicate: isGameCommunityUpsellMultiExperimentEnabled };
    return obj2;
  } else if (require(12686) /* DetectableAppNames */.DetectableAppNames.CALL_OF_DUTY_MOBILE === arg0) {
    const obj3 = { androidScheme: "codm", iosScheme: "codm", predicate: isGameCommunityUpsellMultiExperimentEnabled };
    return obj3;
  } else if (require(12686) /* DetectableAppNames */.DetectableAppNames.CLASH_OF_CLANS === arg0) {
    const obj4 = { androidScheme: "clashofclans", iosScheme: "clashofclans", predicate: isGameCommunityUpsellMultiExperimentEnabled };
    return obj4;
  } else if (require(12686) /* DetectableAppNames */.DetectableAppNames.MOBILE_LEGENDS_BANG_BANG === arg0) {
    const obj5 = { androidScheme: "mobilelegends", iosScheme: "mobilelegends", predicate: isGameCommunityUpsellMultiExperimentEnabled };
    return obj5;
  } else if (require(12686) /* DetectableAppNames */.DetectableAppNames.GARENA_FREE_FIRE === arg0) {
    const obj6 = { androidScheme: "garenafreefire", iosScheme: "freefire", predicate: isGameCommunityUpsellMultiExperimentEnabled };
    return obj6;
  } else if (require(12686) /* DetectableAppNames */.DetectableAppNames.POKEMON_GO === arg0) {
    const obj7 = { androidScheme: "pokemongo", iosScheme: "pokemongo", predicate: isGameCommunityUpsellMultiExperimentEnabled };
    return obj7;
  } else if (require(12686) /* DetectableAppNames */.DetectableAppNames.POKEMON_TCG_POCKET === arg0) {
    const obj8 = { androidScheme: "pokemontcgp", iosScheme: "pokemontcgp", predicate: isGameCommunityUpsellMultiExperimentEnabled };
    return obj8;
  } else if (require(12686) /* DetectableAppNames */.DetectableAppNames.CLASH_ROYALE === arg0) {
    const obj9 = { androidScheme: "clashroyale", iosScheme: "clashroyale", predicate: isGameCommunityUpsellMultiExperimentEnabled };
    return obj9;
  } else if (require(12686) /* DetectableAppNames */.DetectableAppNames.AMONG_US === arg0) {
    const obj10 = { androidScheme: "amongus", iosScheme: "amongus", predicate: isGameCommunityUpsellMultiExperimentEnabled };
    return obj10;
  } else if (require(12686) /* DetectableAppNames */.DetectableAppNames.MONOPOLY_GO === arg0) {
    const obj11 = { androidScheme: "monopolygo", iosScheme: "monopolygo", predicate: isGameCommunityUpsellMultiExperimentEnabled };
    return obj11;
  } else if (require(12686) /* DetectableAppNames */.DetectableAppNames.BRAWL_STARS === arg0) {
    const obj12 = { androidScheme: "brawlstars", iosScheme: "brawlstars", predicate: isGameCommunityUpsellMultiExperimentEnabled };
    return obj12;
  } else if (require(12686) /* DetectableAppNames */.DetectableAppNames.BRAWLHALLA === arg0) {
    const obj13 = { androidScheme: "brawlhalla", iosScheme: null, predicate: isGameCommunityUpsellMultiExperimentEnabled };
    return obj13;
  } else if (require(12686) /* DetectableAppNames */.DetectableAppNames.WUTHERING_WAVES === arg0) {
    obj = { androidScheme: "wutheringwaves", iosScheme: "akioversea", predicate: isGameCommunityUpsellMultiExperimentEnabled };
    return obj;
  }
}
function _detectLocalApps() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
({ AnalyticEvents: closure_5, Consents: closure_6 } = ME);
const result = require("ME").fileFinishedImporting("modules/local_app_detection/native/LocalAppDetectionUtils.tsx");

export const detectLocalApps = function detectLocalApps(ALL_DETECTABLE_APP_NAMES) {
  return _detectLocalApps(...arguments);
};
