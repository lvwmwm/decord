// Module ID: 8438
// Function ID: 67032
// Name: getStyle
// Dependencies: [31, 27, 33, 8439, 8441]

// Module 8438 (getStyle)
import result from "result";
import { NativeEventEmitter } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import getNativeComponent from "getNativeComponent";
import getNativeComponent from "getNativeComponent";

let closure_2;
let closure_3;
let closure_4;
({ useCallback: closure_2, useEffect: closure_3, useRef: closure_4 } = result);
getNativeComponent = getNativeComponent.getNativeComponent();
getNativeComponent = getNativeComponent.getNativeModule();
const memoResult = require("result").memo((date) => {
  const _require = date;
  const current = callback3(Math.random().toString()).current;
  const items = [date, current];
  let tmp = callback((nativeEvent) => {
    let tmp = nativeEvent;
    nativeEvent = nativeEvent.nativeEvent;
    if (null != nativeEvent) {
      tmp = nativeEvent;
    }
    const id = tmp.id;
    if (null === id) {
      if (date.onDateChange) {
        date.onDateChange(tmp5);
      }
      if (date.onDateStringChange) {
        date.onDateStringChange(tmp2);
      }
    }
  }, items);
  callback = tmp;
  const items1 = [date, current];
  let tmp2 = callback((nativeEvent) => {
    let tmp = nativeEvent;
    nativeEvent = nativeEvent.nativeEvent;
    if (null != nativeEvent) {
      tmp = nativeEvent;
    }
    const id = tmp.id;
    let tmp2 = null !== id;
    if (tmp2) {
      tmp2 = id !== current;
    }
    if (!tmp2) {
      if (date.onStateChange) {
        date.onStateChange(tmp.spinnerState);
      }
    }
  }, items1);
  const callback2 = tmp2;
  const items2 = [tmp, tmp2];
  callback2(() => {
    const obj = new outer1_5(outer1_8);
    obj.addListener("dateChange", closure_2);
    obj.addListener("spinnerStateChange", closure_3);
    return () => {
      obj.removeAllListeners("dateChange");
      obj.removeAllListeners("spinnerStateChange");
    };
  }, items2);
  const str = Math.random();
  const merged = Object.assign({}, date, { date: toIsoWithTimeZoneOffset(date.date), id: current, minimumDate: toIsoWithTimeZoneOffset(date.minimumDate), maximumDate: toIsoWithTimeZoneOffset(date.maximumDate), timezoneOffsetInMinutes: getTimezoneOffsetInMinutes(date), style: getStyle(date), onChange: tmp, onStateChange: tmp2 });
  let obj = { date: toIsoWithTimeZoneOffset(date.date), id: current, minimumDate: toIsoWithTimeZoneOffset(date.minimumDate), maximumDate: toIsoWithTimeZoneOffset(date.maximumDate), timezoneOffsetInMinutes: getTimezoneOffsetInMinutes(date), style: getStyle(date), onChange: tmp, onStateChange: tmp2 };
  const modal = _require(current[4]).useModal({ props: merged, id: current });
  let tmp6 = null;
  if (!date.modal) {
    const _Object = Object;
    tmp6 = <getNativeComponent {...Object.assign({}, merged)} />;
  }
  return tmp6;
});
function getStyle(mode) {
  const obj = {};
  let num = 310;
  if ("time" === mode.mode) {
    num = 240;
  }
  obj.width = num;
  obj.height = 180;
  const items = [obj, mode.style];
  return items;
}
function getTimezoneOffsetInMinutes(timeZoneOffsetInMinutes) {
  return null != timeZoneOffsetInMinutes.timeZoneOffsetInMinutes ? timeZoneOffsetInMinutes.timeZoneOffsetInMinutes : undefined;
}
function toIsoWithTimeZoneOffset(date) {
  return date ? date.toISOString() : undefined;
}
function fromIsoWithTimeZoneOffset(arg0) {
  return new Date(arg0);
}

export default memoResult;
export const DatePickerAndroid = memoResult;
