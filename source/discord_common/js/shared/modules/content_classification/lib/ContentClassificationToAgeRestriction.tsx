// Module ID: 6862
// Function ID: 54319
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: contentClassificationToAgeRestriction

// Module 6862 (_createForOfIteratorHelperLoose)
function _createForOfIteratorHelperLoose(@@iterator) {
  let require = Symbol_iterator;
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
      require = tmp;
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
function contentClassificationToAgeRestrictionConclusion(data) {
  let iter3;
  if (null == data) {
    return obj;
  } else {
    const items = [];
    data = data.data;
    if (data.type === obj.MINIMAL) {
      if (null != data.discord_classifications) {
        items.push(_conclusionFromDiscordContentClassificationFlags(require(dependencyMap[0]).AgeRestrictionSource.DISCORD_CLASSIFICATION, data.discord_classifications));
      }
    } else if (null != data.manual_classifications) {
      items.push(_conclusionFromDiscordContentClassificationFlags(require(dependencyMap[0]).AgeRestrictionSource.MANUAL_CLASSIFICATION, data.manual_classifications));
    } else if (null != data.automated_classifications) {
      items.push(_conclusionFromDiscordContentClassificationFlags(require(dependencyMap[0]).AgeRestrictionSource.AUTOMATED_CLASSIFICATION, data.automated_classifications));
    }
    if (null != data.agency_ratings) {
      if (null == data.agency_ratings.esrb) {
        if (null == data.agency_ratings.pegi) {
          if (null == data.agency_ratings.gop) {
            if (null != data.agency_ratings.igdb) {
              items.push(function _conclusionFromIGDB(igdb) {
                let themes = igdb.themes;
                if (null == themes) {
                  themes = [];
                }
                const AgeRestrictionStatus = callback(closure_2[1]).AgeRestrictionStatus;
                const someResult = themes.some((arg0) => {
                  const ADULT_THEMES = callback(closure_2[7]).ContentRatingIGDBThemeSets.ADULT_THEMES;
                  return ADULT_THEMES.has(arg0);
                });
                return { source: callback(closure_2[0]).AgeRestrictionSource.AGENCY_CLASSIFICATION_IGDB, status: tmp2 };
              }(data.agency_ratings.igdb));
            }
          } else {
            const IS_ADULT = require(dependencyMap[6]).ContentRatingGOPClassificationSets.IS_ADULT;
            const hasItem = IS_ADULT.has(data.agency_ratings.gop.classification);
            let AgeRestrictionStatus3 = require(dependencyMap[1]).AgeRestrictionStatus;
            let obj = { source: require(dependencyMap[0]).AgeRestrictionSource.AGENCY_CLASSIFICATION_GOP, status: hasItem ? AgeRestrictionStatus3.ADULT : AgeRestrictionStatus3.EVERYONE };
            AgeRestrictionStatus3 = items.push(obj);
            const tmp15 = hasItem ? AgeRestrictionStatus3.ADULT : AgeRestrictionStatus3.EVERYONE;
          }
        } else {
          const IS_ADULT_ONLY2 = require(dependencyMap[5]).ContentRatingPEGIRatingSets.IS_ADULT_ONLY;
          const hasItem1 = IS_ADULT_ONLY2.has(data.agency_ratings.pegi.rating);
          let AgeRestrictionStatus2 = require(dependencyMap[1]).AgeRestrictionStatus;
          obj = { source: require(dependencyMap[0]).AgeRestrictionSource.AGENCY_CLASSIFICATION_PEGI, status: hasItem1 ? AgeRestrictionStatus2.ADULT : AgeRestrictionStatus2.EVERYONE };
          AgeRestrictionStatus2 = items.push(obj);
          const tmp12 = hasItem1 ? AgeRestrictionStatus2.ADULT : AgeRestrictionStatus2.EVERYONE;
        }
      } else {
        const IS_ADULT_ONLY = require(dependencyMap[4]).ContentRatingESRBRatingSets.IS_ADULT_ONLY;
        const hasItem2 = IS_ADULT_ONLY.has(data.agency_ratings.esrb.rating);
        let AgeRestrictionStatus = require(dependencyMap[1]).AgeRestrictionStatus;
        obj = { source: require(dependencyMap[0]).AgeRestrictionSource.AGENCY_CLASSIFICATION_ESRB, status: hasItem2 ? AgeRestrictionStatus.ADULT : AgeRestrictionStatus.EVERYONE };
        AgeRestrictionStatus = items.push(obj);
        const tmp9 = hasItem2 ? AgeRestrictionStatus.ADULT : AgeRestrictionStatus.EVERYONE;
      }
    }
    const tmp20 = _createForOfIteratorHelperLoose(items);
    const iter = tmp20();
    let iter2 = iter;
    let tmp21 = null;
    let tmp22 = null;
    if (!iter.done) {
      do {
        let value = iter2.value;
        let tmp23 = value;
        if (null != tmp21) {
          let tmp24 = closure_1;
          let tmp25 = closure_2;
          let obj4 = closure_1(closure_2[8]);
          tmp23 = tmp21;
          if (obj4.compare(value.status, tmp21.status) > 0) {
            tmp23 = value;
          }
        }
        iter3 = tmp20();
        tmp21 = tmp23;
        iter2 = iter3;
        tmp22 = tmp23;
      } while (!iter3.done);
    }
    if (null == tmp22) {
      tmp22 = obj;
    }
    return tmp22;
  }
}
function _conclusionFromDiscordContentClassificationFlags(AUTOMATED_CLASSIFICATION, automated_classifications) {
  let obj = importAll(dependencyMap[2]);
  const deserializeResult = obj.deserialize(automated_classifications);
  obj = { source: AUTOMATED_CLASSIFICATION };
  if (obj2.has(deserializeResult, require(dependencyMap[3]).DiscordContentClassificationFlags.EMERGENCY_ONLY_USE_IF_YOU_HAVE_TO_FORCE_MARK_AGE_RESTRICTED)) {
    obj.status = require(dependencyMap[1]).AgeRestrictionStatus.ADULT;
    let tmp8 = obj;
  } else {
    const obj4 = importAll(dependencyMap[2]);
    const AgeRestrictionStatus = require(dependencyMap[1]).AgeRestrictionStatus;
    obj.status = importAll(dependencyMap[2]).hasAny(deserializeResult, require(dependencyMap[3]).DiscordContentClassificationFlagMasks.RESTRICTED_TO_ADULT) ? AgeRestrictionStatus.ADULT : AgeRestrictionStatus.EVERYONE;
    tmp8 = obj;
    const hasAnyResult = importAll(dependencyMap[2]).hasAny(deserializeResult, require(dependencyMap[3]).DiscordContentClassificationFlagMasks.RESTRICTED_TO_ADULT);
  }
  return tmp8;
}
let obj = { FULL: "full", MINIMAL: "minimal" };
obj = { source: require(dependencyMap[0]).AgeRestrictionSource.NO_CLASSIFICATION, status: require(dependencyMap[1]).AgeRestrictionStatus.EVERYONE };
const _module = require(dependencyMap[9]);
const result = _module.fileFinishedImporting("../discord_common/js/shared/modules/content_classification/lib/ContentClassificationToAgeRestriction.tsx");

export const ContentClassificationVariant = obj;
export const contentClassificationToAgeRestriction = function contentClassificationToAgeRestriction(data) {
  return contentClassificationToAgeRestrictionConclusion(data).status;
};
export { contentClassificationToAgeRestrictionConclusion };
