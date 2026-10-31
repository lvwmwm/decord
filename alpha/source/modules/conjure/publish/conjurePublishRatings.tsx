// Module ID: 12771
// Function ID: 12772
// Name: conjurePublishRatings
// Dependencies: [32, 19, 3868, 1113, 510, 10873, 2]
// Exports: conjurePublishRatingLabel, conjurePublishRatingOptionLabel, conjurePublishRatingThanks, submitConjurePublishRatingFeedback, useConjurePublishRating, useConjureRatingFeedback

// Module 12771 (conjurePublishRatings)
import Storage4 from "Storage" /* 510 */;
import intl4 from "intl" /* 1113 */;
import _modDef3868 from "module_3868" /* 3868 */;
import ConjureAnalytics from "ConjureAnalytics" /* 10873 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

function subscribe(arg0) {
  let closure_0 = arg0;
  set.add(arg0);
  return () => set.delete(closure_0);
}
function submitConjurePublishRating(arg0) {
  let cta;
  let projectId;
  let rating;
  let status;
  let str;
  let surface;
  let turnId;
  ({ projectId, turnId, rating, cta, status } = arg0);
  const Storage = Storage4.Storage;
  obj = Storage.get(conjurePublishRatings);
  if (obj == null) {
    obj = {};
  }
  let tmp5;
  if (obj[projectId] != null) {
    tmp5 = tmp4[turnId];
  }
  if (tmp5 == null) {
    tmp5 = null;
  }
  if (null != tmp5) {
    return null;
  } else {
    const obj2 = { projectId, turnId, rating, publishReason: str, surface };
    str = cta.reason;
    if (str == null) {
      str = "first_publish";
    }
    surface = undefined;
    if (status != null) {
      surface = status.surface;
    }
    if (surface == null) {
      surface = cta.surface;
    }
    const tmpResult = ConjureAnalytics;
    const result = tmpResult.trackConjureRatingSubmitted(obj2);
    const Storage2 = tmp(510).Storage;
    let value2 = Storage2.get(tmp3);
    if (value2 == null) {
      value2 = {};
    }
    const Storage3 = tmp(510).Storage;
    const obj3 = {};
    const merged = Object.assign(value2);
    const obj4 = {};
    const merged1 = Object.assign(value2[projectId]);
    obj4[turnId] = rating;
    obj3[projectId] = obj4;
    const result1 = set(tmp3, obj3);
    closure_8 = closure_8 + 1;
    const item = set.forEach((fn) => fn());
    return obj2;
  }
}
const conjurePublishRatings = "conjurePublishRatings";
let obj = { 1: null, 2: _modDef3868.GhbsGA, 3: _modDef3868.cm0nwU, 4: _modDef3868.kGvlh2, 5: _modDef3868.dVBSUg };
obj[5] = _modDef3868.DKlgF7;
const set = new Set();
let closure_8 = 0;
let result = size.fileFinishedImporting("modules/conjure/publish/conjurePublishRatings.tsx");

export const CONJURE_PUBLISH_RATINGS = [1, 2, 3, 4, 5];
export function conjurePublishRatingLabel(arg0) {
  const intl = intl4.intl;
  return intl.string(obj[arg0]);
}
export function conjurePublishRatingOptionLabel(rating) {
  let intl2;
  const intl = intl4.intl;
  const formatToPlainString = intl.formatToPlainString;
  obj = { rating, label: intl2.string(obj[rating]) };
  const NU7Dex = _modDef3868.NU7Dex;
  intl2 = intl4.intl;
  return formatToPlainString(NU7Dex, obj);
}
export function conjurePublishRatingThanks(rating) {
  let stringResult;
  if (rating <= 2) {
    const intl3 = intl4.intl;
    stringResult = intl3.string(_modDef3868["nIc9/M"]);
  } else if (3 === rating) {
    const intl2 = intl4.intl;
    stringResult = intl2.string(_modDef3868.ausj8U);
  } else {
    const intl = intl4.intl;
    stringResult = intl.string(_modDef3868.HilSjw);
  }
  return stringResult;
}
export const CONJURE_RATING_FEEDBACK_MAX_LENGTH = 256;
export { submitConjurePublishRating };
export function submitConjurePublishRatingFeedback(projectId, str) {
  const trimmed = str.trim();
  const substr = trimmed.slice(0, 256);
  if ("" !== substr) {
    obj = ConjureAnalytics;
    const result = obj.trackConjureRatingFeedbackSubmitted(projectId, substr);
  }
}
export function useConjurePublishRating(projectId) {
  let cta;
  let status;
  projectId = projectId.projectId;
  const turnId = projectId.turnId;
  ({ cta: dependencyMap, status: _slicedToArray } = projectId);
  const syncExternalStore = react.useSyncExternalStore(subscribe, () => closure_1_8);
  const Storage = projectId(510).Storage;
  obj = Storage.get(conjurePublishRatings);
  if (obj == null) {
    obj = {};
  }
  let tmp2 = obj[projectId];
  let tmp3;
  if (tmp2 != null) {
    tmp3 = tmp2[turnId];
  }
  if (tmp3 == null) {
    tmp3 = null;
  }
  return {
    rating: tmp3,
    rate(stateFromStores) {
      obj = { projectId, turnId, rating: stateFromStores, cta: dependencyMap, status: _slicedToArray };
      const tmp = submitConjurePublishRating(obj);
      let tmp2 = null;
      if (null != tmp) {
        tmp2 = null;
        if (stateFromStores <= 2) {
          tmp2 = tmp;
        }
      }
      return tmp2;
    }
  };
}
export function useConjureRatingFeedback(rating) {
  let closure_0 = rating;
  let tmp = _slicedToArray(react.useState(""), 2);
  const str = tmp[0];
  obj = {
    text: str,
    setText: tmp[1],
    canSend: "" !== str.trim(),
    send() {
      const trimmed = str.trim();
      const substr = trimmed.slice(0, 256);
      const tmp = rating;
      if ("" !== substr) {
        obj = ConjureAnalytics;
        const result = obj.trackConjureRatingFeedbackSubmitted(tmp, substr);
      }
    }
  };
  return obj;
}
