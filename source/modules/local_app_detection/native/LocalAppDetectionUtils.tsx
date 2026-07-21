// Module ID: 12517
// Function ID: 96033
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: detectLocalApps

// Module 12517 (_createForOfIteratorHelperLoose)
function _createForOfIteratorHelperLoose(@@iterator) {
  let arg1 = Symbol_iterator;
  @@iterator = "undefined" !== typeof Symbol;
  if (Symbol_iterator) {
    const _Symbol = Symbol;
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (!Symbol_iterator) {
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (Symbol_iterator) {
    const iter = Symbol_iterator.call(Symbol_iterator);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = Symbol_iterator;
    if (!Array.isArray(Symbol_iterator)) {
      let tmp2;
      if (Symbol_iterator) {
        if ("string" === typeof Symbol_iterator) {
          tmp2 = _arrayLikeToArray(Symbol_iterator, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(Symbol_iterator).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = Symbol_iterator.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(Symbol_iterator, undefined);
              } else {
                const obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(Symbol_iterator);
          const callResult = toString.call(Symbol_iterator);
          const tmp3 = "Object" === substr && Symbol_iterator.constructor;
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
      arg1 = tmp;
    }
    let closure_1 = 0;
    return () => {
      if (closure_1 >= tmp.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = tmp[+closure_1];
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
  const GameCommunityUpsellMultiExperiment = arg1(dependencyMap[3]).GameCommunityUpsellMultiExperiment;
  return GameCommunityUpsellMultiExperiment.getConfig({ location: "LocalAppDetectionUtils" }).enabled;
}
function getDetectableApp(arg0) {
  if (arg1(dependencyMap[4]).DetectableAppNames.ROBLOX === arg0) {
    return { "Null": 19490637348989045000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, "Null": -0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002194296860716435 };
  } else if (arg1(dependencyMap[4]).DetectableAppNames.MINECRAFT === arg0) {
    let obj = { "Null": 1358954496, "Null": -1603116208, predicate: isGameCommunityUpsellMultiExperimentEnabled };
    return obj;
  } else if (arg1(dependencyMap[4]).DetectableAppNames.FORTNITE === arg0) {
    obj = { predicate: isGameCommunityUpsellMultiExperimentEnabled };
    return obj;
  } else if (arg1(dependencyMap[4]).DetectableAppNames.GENSHIN === arg0) {
    const obj1 = { predicate: isGameCommunityUpsellMultiExperimentEnabled };
    return obj1;
  } else if (arg1(dependencyMap[4]).DetectableAppNames.PUBG_MOBILE === arg0) {
    const obj2 = { "Null": 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000022784756364311286, "Null": 13344981914868308000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, predicate: isGameCommunityUpsellMultiExperimentEnabled };
    return obj2;
  } else if (arg1(dependencyMap[4]).DetectableAppNames.CALL_OF_DUTY_MOBILE === arg0) {
    const obj3 = { predicate: isGameCommunityUpsellMultiExperimentEnabled };
    return obj3;
  } else if (arg1(dependencyMap[4]).DetectableAppNames.CLASH_OF_CLANS === arg0) {
    const obj4 = { predicate: isGameCommunityUpsellMultiExperimentEnabled };
    return obj4;
  } else if (arg1(dependencyMap[4]).DetectableAppNames.MOBILE_LEGENDS_BANG_BANG === arg0) {
    const obj5 = { predicate: isGameCommunityUpsellMultiExperimentEnabled };
    return obj5;
  } else if (arg1(dependencyMap[4]).DetectableAppNames.GARENA_FREE_FIRE === arg0) {
    const obj6 = { "Null": null, "Null": null, predicate: isGameCommunityUpsellMultiExperimentEnabled };
    return obj6;
  } else if (arg1(dependencyMap[4]).DetectableAppNames.POKEMON_GO === arg0) {
    const obj7 = { "Null": 123, "Null": 102, predicate: isGameCommunityUpsellMultiExperimentEnabled };
    return obj7;
  } else if (arg1(dependencyMap[4]).DetectableAppNames.POKEMON_TCG_POCKET === arg0) {
    const obj8 = { "Null": 54, "Null": 12, predicate: isGameCommunityUpsellMultiExperimentEnabled };
    return obj8;
  } else if (arg1(dependencyMap[4]).DetectableAppNames.CLASH_ROYALE === arg0) {
    const obj9 = { "Null": -79, "Null": 102, predicate: isGameCommunityUpsellMultiExperimentEnabled };
    return obj9;
  } else if (arg1(dependencyMap[4]).DetectableAppNames.AMONG_US === arg0) {
    const obj10 = { "Null": 123, "Null": 157, predicate: isGameCommunityUpsellMultiExperimentEnabled };
    return obj10;
  } else if (arg1(dependencyMap[4]).DetectableAppNames.MONOPOLY_GO === arg0) {
    const obj11 = { "Null": 62, "Null": 72, predicate: isGameCommunityUpsellMultiExperimentEnabled };
    return obj11;
  } else if (arg1(dependencyMap[4]).DetectableAppNames.BRAWL_STARS === arg0) {
    const obj12 = { "Null": -28, "Null": 161, predicate: isGameCommunityUpsellMultiExperimentEnabled };
    return obj12;
  } else if (arg1(dependencyMap[4]).DetectableAppNames.BRAWLHALLA === arg0) {
    const obj13 = { "Null": null, "Null": null, predicate: isGameCommunityUpsellMultiExperimentEnabled };
    return obj13;
  } else if (arg1(dependencyMap[4]).DetectableAppNames.WUTHERING_WAVES === arg0) {
    obj = { "Null": 3, "Null": 1024, predicate: isGameCommunityUpsellMultiExperimentEnabled };
    return obj;
  }
}
function _detectLocalApps() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _detectLocalApps = obj;
  return obj(...arguments);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
({ AnalyticEvents: closure_5, Consents: closure_6 } = arg1(dependencyMap[2]));
const tmp2 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/local_app_detection/native/LocalAppDetectionUtils.tsx");

export const detectLocalApps = function detectLocalApps(ALL_DETECTABLE_APP_NAMES) {
  return _detectLocalApps(...arguments);
};
