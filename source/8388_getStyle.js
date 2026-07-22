// Module ID: 8388
// Function ID: 66767
// Name: getStyle
// Dependencies: []

// Module 8388 (getStyle)
const _module = require(dependencyMap[0]);
({ useCallback: closure_2, useEffect: closure_3, useRef: closure_4 } = _module);
const NativeEventEmitter = require(dependencyMap[1]).NativeEventEmitter;
const jsx = require(dependencyMap[2]).jsx;
const _module1 = require(dependencyMap[3]);
const nativeComponent = _module1.getNativeComponent();
const _module2 = require(dependencyMap[3]);
const nativeModule = _module2.getNativeModule();
const memoResult = importDefault(dependencyMap[0]).memo((date) => {
  const require = date;
  const current = callback(Math.random().toString()).current;
  const dependencyMap = current;
  const items = [date, current];
  const tmp = tmp((nativeEvent) => {
    let tmp = nativeEvent;
    nativeEvent = nativeEvent.nativeEvent;
    if (null != nativeEvent) {
      tmp = nativeEvent;
    }
    const id = tmp.id;
    if (null === id) {
      if (nativeEvent.onDateChange) {
        nativeEvent.onDateChange(tmp5);
      }
      if (nativeEvent.onDateStringChange) {
        nativeEvent.onDateStringChange(tmp2);
      }
    }
  }, items);
  const items1 = [date, current];
  const tmp2 = tmp((nativeEvent) => {
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
      if (nativeEvent.onStateChange) {
        nativeEvent.onStateChange(tmp.spinnerState);
      }
    }
  }, items1);
  const items2 = [tmp, tmp2];
  tmp2(() => {
    const obj = new closure_5(closure_8);
    const arg0 = obj;
    obj.addListener("dateChange", tmp);
    obj.addListener("spinnerStateChange", tmp2);
    return () => {
      obj.removeAllListeners("dateChange");
      obj.removeAllListeners("spinnerStateChange");
    };
  }, items2);
  const str = Math.random();
  const merged = Object.assign({}, date, { date: toIsoWithTimeZoneOffset(date.date), id: current, minimumDate: toIsoWithTimeZoneOffset(date.minimumDate), maximumDate: toIsoWithTimeZoneOffset(date.maximumDate), timezoneOffsetInMinutes: getTimezoneOffsetInMinutes(date), style: getStyle(date), onChange: tmp, onStateChange: tmp2 });
  const obj = { date: toIsoWithTimeZoneOffset(date.date), id: current, minimumDate: toIsoWithTimeZoneOffset(date.minimumDate), maximumDate: toIsoWithTimeZoneOffset(date.maximumDate), timezoneOffsetInMinutes: getTimezoneOffsetInMinutes(date), style: getStyle(date), onChange: tmp, onStateChange: tmp2 };
  const modal = require(dependencyMap[4]).useModal({ props: merged, id: current });
  let tmp6 = null;
  if (!date.modal) {
    const _Object = Object;
    tmp6 = <closure_7 {...Object.assign({}, merged)} />;
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
