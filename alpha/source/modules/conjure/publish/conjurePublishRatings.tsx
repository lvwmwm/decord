// Module ID: 12484
// Function ID: 12485
// Name: conjurePublishRatings
// Dependencies: [32, 19, 3831, 1125, 510, 10721, 558, 576, 2]
// Exports: conjurePublishRatingLabel, conjurePublishRatingOptionLabel, conjurePublishRatingThanks, submitConjurePublishRatingFeedback

// Module 12484 (conjurePublishRatings)
import Storage4 from "Storage" /* 510 */;
import intl4 from "intl" /* 1125 */;
import _modDef3831 from "module_3831" /* 3831 */;
import ConjureAnalytics from "ConjureAnalytics" /* 10721 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

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
let obj = { 1: null, 2: _modDef3831.GhbsGA, 3: _modDef3831.cm0nwU, 4: _modDef3831.kGvlh2, 5: _modDef3831.dVBSUg };
obj[5] = _modDef3831.DKlgF7;
const set = new Set();
let closure_8 = 0;
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjurePublishRating(projectId) {
  let cta;
  let first;
  let tmp = projectId;
  let tmp2 = cta;
  obj = projectId(cta[7]);
  const cResult = obj.c(10);
  projectId = projectId.projectId;
  const turnId = projectId.turnId;
  cta = projectId.cta;
  const status = projectId.status;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function u() {
      return closure_1_8;
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  const syncExternalStore = react.useSyncExternalStore(subscribe, first);
  if (cResult[1] === projectId) {
    let tmp6;
    if (cResult[2] === turnId) {
      tmp6 = cResult[3];
    }
    if (cResult[4] === cta) {
      if (cResult[5] === projectId) {
        if (cResult[6] === status) {
          if (cResult[7] === tmp6) {
            let tmp9;
            if (cResult[8] === turnId) {
              tmp9 = cResult[9];
            }
            return tmp9;
          }
        }
      }
    }
    const obj2 = {
      rating: tmp6,
      rate(rating) {
          obj = { projectId, turnId, rating, cta, status };
          const tmp = submitConjurePublishRating(obj);
          let tmp2 = null;
          if (null != tmp) {
            tmp2 = null;
            if (rating <= 2) {
              tmp2 = tmp;
            }
          }
          return tmp2;
        }
    };
    cResult[4] = cta;
    cResult[5] = projectId;
    cResult[6] = status;
    cResult[7] = tmp6;
    cResult[8] = turnId;
    cResult[9] = obj2;
    tmp9 = obj2;
  }
  const Storage = tmp(tmp2[4]).Storage;
  let obj3 = Storage.get(conjurePublishRatings);
  if (obj3 == null) {
    obj3 = {};
  }
  let tmp8;
  if (obj3[projectId] != null) {
    tmp8 = tmp7[turnId];
  }
  if (tmp8 == null) {
    tmp8 = null;
  }
  cResult[1] = projectId;
  cResult[2] = turnId;
  cResult[3] = tmp8;
  tmp6 = tmp8;
}) : (function useConjurePublishRating(projectId) {
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
    rate(rating) {
      obj = { projectId, turnId, rating, cta: dependencyMap, status: _slicedToArray };
      const tmp = submitConjurePublishRating(obj);
      let tmp2 = null;
      if (null != tmp) {
        tmp2 = null;
        if (rating <= 2) {
          tmp2 = tmp;
        }
      }
      return tmp2;
    }
  };
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureRatingFeedback(arg0) {
  let closure_0;
  let str;
  let tmp3;
  let tmp4;
  _require = arg0;
  obj = require("react");
  const cResult = obj.c(9);
  [str, tmp3] = react.useState("");
  if (cResult[0] !== str) {
    let trimmed = str.trim();
    cResult[0] = str;
    cResult[1] = trimmed;
    tmp4 = trimmed;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] === arg0) {
    let tmp6;
    if (cResult[3] === str) {
      tmp6 = cResult[4];
    }
    if (cResult[5] === "" !== tmp4) {
      if (cResult[6] === tmp6) {
        let tmp8;
        if (cResult[7] === str) {
          tmp8 = cResult[8];
        }
        return tmp8;
      }
    }
    const obj2 = { text: str, setText: tmp3, canSend: "" !== tmp4, send: tmp6 };
    cResult[5] = "" !== tmp4;
    cResult[6] = tmp6;
    cResult[7] = str;
    cResult[8] = obj2;
    tmp8 = obj2;
  }
  const fn = function j() {
    const trimmed = str.trim();
    const substr = trimmed.slice(0, 256);
    const tmp = closure_0;
    if ("" !== substr) {
      obj = ConjureAnalytics;
      const result = obj.trackConjureRatingFeedbackSubmitted(tmp, substr);
    }
  };
  cResult[2] = arg0;
  cResult[3] = str;
  cResult[4] = fn;
  tmp6 = fn;
}) : (function useConjureRatingFeedback(arg0) {
  let closure_0 = arg0;
  let tmp = _slicedToArray(react.useState(""), 2);
  const str = tmp[0];
  obj = {
    text: str,
    setText: tmp[1],
    canSend: "" !== str.trim(),
    send() {
      const trimmed = str.trim();
      const substr = trimmed.slice(0, 256);
      const tmp = closure_0;
      if ("" !== substr) {
        obj = ConjureAnalytics;
        const result = obj.trackConjureRatingFeedbackSubmitted(tmp, substr);
      }
    }
  };
  return obj;
});
function conjurePublishRatingLabel(arg0) {
  const intl = intl4.intl;
  return intl.string(obj[arg0]);
}
function submitConjurePublishRatingFeedback(projectId, str) {
  const trimmed = str.trim();
  const substr = trimmed.slice(0, 256);
  if ("" !== substr) {
    obj = ConjureAnalytics;
    const result = obj.trackConjureRatingFeedbackSubmitted(projectId, substr);
  }
}
let result = size.fileFinishedImporting("modules/conjure/publish/conjurePublishRatings.tsx");

export const CONJURE_PUBLISH_RATINGS = [1, 2, 3, 4, 5];
export { conjurePublishRatingLabel };
export const conjurePublishRatingOptionLabel = function conjurePublishRatingOptionLabel(rating) {
  let intl2;
  const intl = intl4.intl;
  const formatToPlainString = intl.formatToPlainString;
  obj = { rating, label: intl2.string(obj[rating]) };
  const NU7Dex = _modDef3831.NU7Dex;
  intl2 = intl4.intl;
  return formatToPlainString(NU7Dex, obj);
};
export const conjurePublishRatingThanks = function conjurePublishRatingThanks(rating) {
  let stringResult;
  if (rating <= 2) {
    const intl3 = intl4.intl;
    stringResult = intl3.string(_modDef3831["nIc9/M"]);
  } else if (3 === rating) {
    const intl2 = intl4.intl;
    stringResult = intl2.string(_modDef3831.ausj8U);
  } else {
    const intl = intl4.intl;
    stringResult = intl.string(_modDef3831.HilSjw);
  }
  return stringResult;
};
export const CONJURE_RATING_FEEDBACK_MAX_LENGTH = 256;
export { submitConjurePublishRating };
export { submitConjurePublishRatingFeedback };
export const useConjurePublishRating = tmp3;
export const useConjureRatingFeedback = tmp4;
