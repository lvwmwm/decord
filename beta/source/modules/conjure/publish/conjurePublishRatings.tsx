// Module ID: 13753
// Function ID: 13754
// Name: conjurePublishRatings
// Dependencies: [32, 19, 4131, 1113, 510, 7383, 2]
// Exports: conjurePublishRatingLabel, conjurePublishRatingOptionLabel, conjurePublishRatingThanks, submitConjurePublishRatingFeedback, useConjurePublishRating, useConjureRatingFeedback

// Module 13753 (conjurePublishRatings)
import Storage4 from "Storage" /* 510 */;
import intl4 from "intl" /* 1113 */;
import _modDef4131 from "module_4131" /* 4131 */;
import ConjureAnalytics from "ConjureAnalytics" /* 7383 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

function subscribe(arg0) {
  let closure_0 = arg0;
  set.add(arg0);
  return () => set.delete(closure_0);
}
function markConjurePublishRatingViewed(projectId) {
  let turnId;
  ({ projectId, turnId } = projectId);
  const Storage = Storage4.Storage;
  obj = Storage.get(conjurePublishRatings);
  if (obj == null) {
    obj = {};
  }
  let tmp4;
  if (obj[projectId] != null) {
    tmp4 = tmp3[turnId];
  }
  if (tmp4 == null) {
    tmp4 = null;
  }
  if (null == tmp4) {
    const Storage3 = tmp(510).Storage;
    let value2 = Storage3.get(conjurePublishRatingViews);
    const tmp14 = conjurePublishRatingViews;
    if (value2 == null) {
      value2 = {};
    }
    let tmp6;
    if (value2[projectId.projectId] != null) {
      tmp6 = tmp5[projectId.turnId];
    }
    if (true !== tmp6) {
      const tmpResult = ConjureAnalytics;
      const result = tmpResult.trackConjureRatingViewed(projectId);
      const Storage2 = tmp(510).Storage;
      const obj2 = {};
      set = Storage2.set;
      const merged = Object.assign(value2);
      const obj3 = {};
      const projectId2 = projectId.projectId;
      const merged1 = Object.assign(value2[projectId.projectId]);
      obj3[projectId.turnId] = true;
      obj2[projectId2] = obj3;
      const result1 = set(tmp14, obj2);
    }
  }
}
function submitConjurePublishRating(rating) {
  let cta;
  let placement;
  let projectId;
  let publishState;
  let status;
  let str;
  let surface;
  let turnId;
  rating = rating.rating;
  const merged = Object.assign(rating, Object.assign({ rating: 0 }));
  ({ projectId, turnId } = merged);
  const Storage = Storage4.Storage;
  obj = Storage.get(conjurePublishRatings);
  if (obj == null) {
    obj = {};
  }
  let tmp6;
  if (obj[projectId] != null) {
    tmp6 = tmp5[turnId];
  }
  if (tmp6 == null) {
    tmp6 = null;
  }
  if (null != tmp6) {
    return null;
  } else {
    ({ cta, status } = merged);
    const obj2 = { projectId: null, turnId: null, publishReason: str, surface, placement, publishState };
    ({ projectId: obj7.projectId, turnId: obj7.turnId } = merged);
    str = cta.reason;
    placement = merged.placement;
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
    publishState = undefined;
    if (status != null) {
      publishState = status.publishState;
    }
    if (publishState == null) {
      publishState = null;
    }
    const obj3 = { rating };
    const merged1 = Object.assign(obj2);
    const tmp2Result = ConjureAnalytics;
    const result = tmp2Result.trackConjureRatingSubmitted(obj3);
    const Storage2 = tmp2(510).Storage;
    let value2 = Storage2.get(tmp4);
    if (value2 == null) {
      value2 = {};
    }
    const Storage3 = tmp2(510).Storage;
    const obj4 = {};
    const merged2 = Object.assign(value2);
    const obj5 = {};
    const merged3 = Object.assign(value2[projectId]);
    obj5[turnId] = rating;
    obj4[projectId] = obj5;
    const result1 = set(tmp4, obj4);
    closure_9 = closure_9 + 1;
    const item = set.forEach((fn) => fn());
    return obj3;
  }
}
const conjurePublishRatings = "conjurePublishRatings";
const conjurePublishRatingViews = "conjurePublishRatingViews";
let obj = { 1: null, 2: _modDef4131.GhbsGA, 3: _modDef4131.cm0nwU, 4: _modDef4131.kGvlh2, 5: _modDef4131.dVBSUg };
obj[5] = _modDef4131.DKlgF7;
let set = new Set();
let closure_9 = 0;
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
  const NU7Dex = _modDef4131.NU7Dex;
  intl2 = intl4.intl;
  return formatToPlainString(NU7Dex, obj);
}
export function conjurePublishRatingThanks(rating) {
  let stringResult;
  if (rating <= 2) {
    const intl3 = intl4.intl;
    stringResult = intl3.string(_modDef4131["nIc9/M"]);
  } else if (3 === rating) {
    const intl2 = intl4.intl;
    stringResult = intl2.string(_modDef4131.ausj8U);
  } else {
    const intl = intl4.intl;
    stringResult = intl.string(_modDef4131.HilSjw);
  }
  return stringResult;
}
export const CONJURE_RATING_FEEDBACK_MAX_LENGTH = 256;
export { markConjurePublishRatingViewed };
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
  let placement;
  let projectId2;
  let status;
  let surface;
  let turnId2;
  _require = projectId;
  projectId = projectId.projectId;
  const turnId = projectId.turnId;
  obj = surface;
  const syncExternalStore = surface.useSyncExternalStore(subscribe, () => closure_1_9);
  ({ projectId: projectId2, turnId: turnId2, cta, status, placement } = projectId);
  let str = cta.reason;
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
  let publishState;
  if (status != null) {
    publishState = status.publishState;
  }
  if (publishState == null) {
    publishState = null;
  }
  const items = [projectId, turnId, str, surface, placement, publishState];
  const effect = obj.useEffect(() => {
    obj = { projectId, turnId, publishReason: str, surface, placement, publishState };
    markConjurePublishRatingViewed(obj);
  }, items);
  const Storage = require("Storage").Storage;
  let obj2 = Storage.get(placement);
  if (obj2 == null) {
    obj2 = {};
  }
  let tmp6;
  if (obj2[projectId] != null) {
    tmp6 = tmp5[turnId];
  }
  if (tmp6 == null) {
    tmp6 = null;
  }
  return {
    rating: tmp6,
    rate(stateFromStores) {
      obj = { rating: stateFromStores };
      const merged = Object.assign(projectId);
      const tmp2 = submitConjurePublishRating(obj);
      let tmp3 = null;
      if (null != tmp2) {
        tmp3 = null;
        if (stateFromStores <= 2) {
          tmp3 = tmp2;
        }
      }
      return tmp3;
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
