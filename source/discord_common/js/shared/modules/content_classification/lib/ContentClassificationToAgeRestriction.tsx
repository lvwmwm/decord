// Module ID: 6866
// Function ID: 54361
// Name: _createForOfIteratorHelperLoose
// Dependencies: [6867, 6868, 483, 6869, 6870, 6871, 6872, 6873, 6874, 2]
// Exports: contentClassificationToAgeRestriction

// Module 6866 (_createForOfIteratorHelperLoose)
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
function contentClassificationToAgeRestrictionConclusion(data) {
  let iter3;
  if (null == data) {
    return obj;
  } else {
    const items = [];
    data = data.data;
    if (data.type === obj.MINIMAL) {
      if (null != data.discord_classifications) {
        items.push(_conclusionFromDiscordContentClassificationFlags(require(6867) /* AgeRestrictionSource */.AgeRestrictionSource.DISCORD_CLASSIFICATION, data.discord_classifications));
      }
    } else if (null != data.manual_classifications) {
      items.push(_conclusionFromDiscordContentClassificationFlags(require(6867) /* AgeRestrictionSource */.AgeRestrictionSource.MANUAL_CLASSIFICATION, data.manual_classifications));
    } else if (null != data.automated_classifications) {
      items.push(_conclusionFromDiscordContentClassificationFlags(require(6867) /* AgeRestrictionSource */.AgeRestrictionSource.AUTOMATED_CLASSIFICATION, data.automated_classifications));
    }
    if (null != data.agency_ratings) {
      if (null == data.agency_ratings.esrb) {
        if (null == data.agency_ratings.pegi) {
          if (null == data.agency_ratings.gop) {
            if (null != data.agency_ratings.igdb) {
              items.push((function _conclusionFromIGDB(igdb) {
                let themes = igdb.themes;
                if (null == themes) {
                  themes = [];
                }
                const AgeRestrictionStatus = outer1_0(outer1_2[1]).AgeRestrictionStatus;
                const someResult = themes.some((arg0) => {
                  const ADULT_THEMES = outer2_0(outer2_2[7]).ContentRatingIGDBThemeSets.ADULT_THEMES;
                  return ADULT_THEMES.has(arg0);
                });
                return { source: outer1_0(outer1_2[0]).AgeRestrictionSource.AGENCY_CLASSIFICATION_IGDB, status: tmp2 };
              })(data.agency_ratings.igdb));
            }
          } else {
            const IS_ADULT = require(6872) /* set */.ContentRatingGOPClassificationSets.IS_ADULT;
            const hasItem = IS_ADULT.has(data.agency_ratings.gop.classification);
            let AgeRestrictionStatus3 = require(6868) /* AgeRestrictionStatus */.AgeRestrictionStatus;
            obj = { source: require(6867) /* AgeRestrictionSource */.AgeRestrictionSource.AGENCY_CLASSIFICATION_GOP, status: hasItem ? AgeRestrictionStatus3.ADULT : AgeRestrictionStatus3.EVERYONE };
            AgeRestrictionStatus3 = items.push(obj);
            const tmp15 = hasItem ? AgeRestrictionStatus3.ADULT : AgeRestrictionStatus3.EVERYONE;
          }
        } else {
          const IS_ADULT_ONLY2 = require(6871) /* set */.ContentRatingPEGIRatingSets.IS_ADULT_ONLY;
          const hasItem1 = IS_ADULT_ONLY2.has(data.agency_ratings.pegi.rating);
          let AgeRestrictionStatus2 = require(6868) /* AgeRestrictionStatus */.AgeRestrictionStatus;
          obj = { source: require(6867) /* AgeRestrictionSource */.AgeRestrictionSource.AGENCY_CLASSIFICATION_PEGI, status: hasItem1 ? AgeRestrictionStatus2.ADULT : AgeRestrictionStatus2.EVERYONE };
          AgeRestrictionStatus2 = items.push(obj);
          const tmp12 = hasItem1 ? AgeRestrictionStatus2.ADULT : AgeRestrictionStatus2.EVERYONE;
        }
      } else {
        const IS_ADULT_ONLY = require(6870) /* set */.ContentRatingESRBRatingSets.IS_ADULT_ONLY;
        const hasItem2 = IS_ADULT_ONLY.has(data.agency_ratings.esrb.rating);
        let AgeRestrictionStatus = require(6868) /* AgeRestrictionStatus */.AgeRestrictionStatus;
        obj = { source: require(6867) /* AgeRestrictionSource */.AgeRestrictionSource.AGENCY_CLASSIFICATION_ESRB, status: hasItem2 ? AgeRestrictionStatus.ADULT : AgeRestrictionStatus.EVERYONE };
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
          let tmp24 = importAll;
          let tmp25 = dependencyMap;
          let obj4 = importAll(6874);
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
  let obj = importAll(483);
  const deserializeResult = obj.deserialize(automated_classifications);
  obj = { source: AUTOMATED_CLASSIFICATION };
  if (obj2.has(deserializeResult, require(6869) /* frozen */.DiscordContentClassificationFlags.EMERGENCY_ONLY_USE_IF_YOU_HAVE_TO_FORCE_MARK_AGE_RESTRICTED)) {
    obj.status = require(6868) /* AgeRestrictionStatus */.AgeRestrictionStatus.ADULT;
    let tmp8 = obj;
  } else {
    const obj4 = importAll(483);
    const AgeRestrictionStatus = require(6868) /* AgeRestrictionStatus */.AgeRestrictionStatus;
    obj.status = importAll(483).hasAny(deserializeResult, require(6869) /* frozen */.DiscordContentClassificationFlagMasks.RESTRICTED_TO_ADULT) ? AgeRestrictionStatus.ADULT : AgeRestrictionStatus.EVERYONE;
    tmp8 = obj;
    const hasAnyResult = importAll(483).hasAny(deserializeResult, require(6869) /* frozen */.DiscordContentClassificationFlagMasks.RESTRICTED_TO_ADULT);
  }
  return tmp8;
}
let obj = { FULL: "full", MINIMAL: "minimal" };
obj = { source: require("AgeRestrictionSource").AgeRestrictionSource.NO_CLASSIFICATION, status: require("AgeRestrictionStatus").AgeRestrictionStatus.EVERYONE };
const result = require("fromHexReverseArray").fileFinishedImporting("../discord_common/js/shared/modules/content_classification/lib/ContentClassificationToAgeRestriction.tsx");

export const ContentClassificationVariant = obj;
export const contentClassificationToAgeRestriction = function contentClassificationToAgeRestriction(data) {
  return contentClassificationToAgeRestrictionConclusion(data).status;
};
export { contentClassificationToAgeRestrictionConclusion };
