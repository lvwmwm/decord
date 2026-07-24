// Module ID: 12797
// Function ID: 99585
// Name: _isNativeReflectConstruct
// Dependencies: [57, 6, 7, 15, 17, 18, 6984, 4206, 22, 12798, 6990, 4227, 4297, 2]

// Module 12797 (_isNativeReflectConstruct)
import _slicedToArray from "_slicedToArray";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import sleep from "sleep";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import tmp2 from "TypedEventEmitter";

const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function explodePlayoutMetrics(obj) {
  obj = {};
  for (const key10016 in arg0) {
    let tmp12 = key10016;
    let obj2 = arg0[key10016];
    let tmp13 = require;
    let tmp14 = dependencyMap;
    if (obj2 instanceof require(6984) /* _createForOfIteratorHelperLoose */.Histogram) {
      let report = obj2.getReport([75, 95, 99]);
      let _Math = Math;
      let text = `${key10016}_mean`;
      obj[`${key10016}_mean`] = Math.round(report.mean);
      let _Math2 = Math;
      let text1 = `${key10016}_p75`;
      obj[`${key10016}_p75`] = Math.round(report.percentiles[75]);
      let _Math3 = Math;
      let text2 = `${key10016}_p95`;
      obj[`${key10016}_p95`] = Math.round(report.percentiles[95]);
      let _Math4 = Math;
      let text3 = `${key10016}_p99`;
      obj[`${key10016}_p99`] = Math.round(report.percentiles[99]);
      let _Math5 = Math;
      let text4 = `${key10016}_max`;
      obj[`${key10016}_max`] = Math.round(report.max);
      continue;
    } else {
      let num = 0;
      let text5 = `${key10016}_mean`;
      if (null != obj2) {
        num = obj2.mean;
      }
      obj[text5] = num;
      let num2 = 0;
      let text6 = `${key10016}_p75`;
      if (null != obj2) {
        num2 = obj2.p75;
      }
      obj[text6] = num2;
      let num3 = 0;
      let text7 = `${key10016}_p95`;
      if (null != obj2) {
        num3 = obj2.p95;
      }
      obj[text7] = num3;
      let num4 = 0;
      let text8 = `${key10016}_p99`;
      if (null != obj2) {
        num4 = obj2.p99;
      }
      obj[text8] = num4;
      let num5 = 0;
      let text9 = `${key10016}_max`;
      if (null != obj2) {
        num5 = obj2.max;
      }
      obj[text9] = num5;
      continue;
    }
    continue;
  }
  return obj;
}
function handleCounter(lastValue) {
  let accumulated;
  let obj = arg1;
  if (null == arg1) {
    obj = { accumulated: 0, lastValue: 0 };
  }
  ({ accumulated, lastValue } = obj);
  obj = {};
  if (lastValue > lastValue) {
    let sum = accumulated + lastValue;
  } else {
    sum = accumulated + (lastValue - lastValue);
  }
  obj.accumulated = sum;
  obj.lastValue = lastValue;
  return obj;
}
let obj = { InputDeviceSampleRateChanged: "input-device-sample-rate-changed" };
let result = require("_defineProperties").fileFinishedImporting("lib/VoiceQuality.tsx");

export default tmp2;
export const VoiceQualityEvent = obj;
