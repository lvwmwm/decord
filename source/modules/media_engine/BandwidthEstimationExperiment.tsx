// Module ID: 12753
// Function ID: 99422
// Name: _createForOfIteratorHelperLoose
// Dependencies: [4042, 2]

// Module 12753 (_createForOfIteratorHelperLoose)
import createExperiment from "createExperiment";

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
let obj = { kind: "user", id: "2024-06_rtc_pacer__simulcast", label: "RTC Pacer & Golive Simulcast", defaultConfig: { enabled: true, fullname: "bandwidth_estimation/trendline-window-duration-3750,robust-estimator/", simulcastEnabled: false } };
obj = { id: 1, label: "Golive Simulcast without prober 720p@500k", config: { enabled: true, fullname: "bandwidth_estimation/trendline-window-duration-3750,robust-estimator/", simulcastEnabled: true } };
const items = [obj, , , , , ];
const obj1 = { id: 2, label: "Golive Simulcast 720p@500k", config: { enabled: true, fullname: "bandwidth_estimation/trendline-window-duration-3750,robust-estimator/worker-pacer,worker-pacer-probe", simulcastEnabled: true } };
items[1] = obj1;
const obj2 = { id: 3, label: "Golive with pacing", config: { enabled: true, fullname: "bandwidth_estimation/trendline-window-duration-3750,robust-estimator/worker-pacer", simulcastEnabled: false } };
items[2] = obj2;
const obj3 = { id: 4, label: "Golive with pacing and probing", config: { enabled: true, fullname: "bandwidth_estimation/trendline-window-duration-3750,robust-estimator/worker-pacer,worker-pacer-probe", simulcastEnabled: false } };
items[3] = obj3;
const obj4 = { id: 5, label: "Golive Simulcast 720p@750k", config: { enabled: true, fullname: "bandwidth_estimation/trendline-window-duration-3750,robust-estimator/worker-pacer-probe,worker-lq-floor-750k", simulcastEnabled: true } };
items[4] = obj4;
const obj5 = { id: 6, label: "Golive Simulcast 720p@1000k", config: { enabled: true, fullname: "bandwidth_estimation/trendline-window-duration-3750,robust-estimator/worker-pacer-probe,worker-lq-floor-1000k", simulcastEnabled: true } };
items[5] = obj5;
obj.treatments = items;
let closure_0 = createExperiment.createExperiment(obj);
const result = require("set").fileFinishedImporting("modules/media_engine/BandwidthEstimationExperiment.tsx");

export default {
  getConfig(autoTrackExposure, arr) {
    currentConfig = currentConfig.getCurrentConfig({ location: "e1c55b_1" }, { autoTrackExposure });
    if (!this.supportsBandwidthEstimationExperimentFullname(currentConfig.fullname, arr)) {
      currentConfig.enabled = false;
    }
    return currentConfig;
  },
  supportsBandwidthEstimationExperimentFullname(fullname, arr) {
    const mediaEngineExperiments = this.getMediaEngineExperiments(fullname);
    if (null === mediaEngineExperiments) {
      return false;
    } else {
      const tmp3 = _createForOfIteratorHelperLoose(mediaEngineExperiments);
      let iter = tmp3();
      if (!iter.done) {
        while (arr.includes(iter.value)) {
          let iter2 = tmp3();
          iter = iter2;
        }
        return false;
      }
      return true;
    }
  },
  getMediaEngineExperiments(fullname) {
    const parts = fullname.split("/");
    let found = null;
    if (3 === parts.length) {
      found = null;
      if ("bandwidth_estimation" === parts[0]) {
        const parts1 = parts[1].split(",");
        found = parts1.filter((arg0) => 0 !== arg0.length);
        const str2 = parts[1];
      }
    }
    return found;
  }
};
