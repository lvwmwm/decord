// Module ID: 788
// Function ID: 789
// Name: applyAggregateErrorsToEvent
// Dependencies: [703]
// Exports: applyAggregateErrorsToEvent

// Module 788 (applyAggregateErrorsToEvent)
import _mod703 from "module_703" /* 703 */;

const require = globalThis.__r;
let _require, dependencyMap, length;

function aggregateExceptionsFromError(fn, arg1, arg2, errors, source, arg5, mechanism, exception_id) {
  let closure_1;
  let closure_2;
  _require = fn;
  dependencyMap = arg1;
  aggregateExceptionsFromError = arg2;
  let closure_4 = source;
  let closure_5 = mechanism;
  if (arg5.length >= arg2 + 1) {
    return arg5;
  } else {
    let items = [];
    HermesBuiltin.arraySpread(items, arg5, 0);
    length = items;
    let obj3 = require("module_703");
    const _Error = Error;
    if (obj3.isInstanceOf(errors[source], Error)) {
      let _Array = Array;
      const tmp2 = Array.isArray(errors.errors) && { is_exception_group: true };
      let obj = { handled: true, type: "auto.core.linked_errors", exception_id };
      let merged = Object.assign(tmp2);
      let merged1 = Object.assign(mechanism.mechanism);
      mechanism.mechanism = obj;
      const tmp8 = fn(arg1, errors[source]);
      length = length.length;
      let obj2 = { handled: true, type: "chained", source, exception_id: length, parent_id: exception_id };
      let merged2 = Object.assign(tmp8.mechanism);
      tmp8.mechanism = obj2;
      const items1 = [tmp8];
      let tmp14 = length;
      const tmp13 = errors[source];
      HermesBuiltin.arraySpread(items1, length, 1);
      length = aggregateExceptionsFromError(fn, arg1, arg2, tmp13, source, items1, tmp8, length);
    }
    const _Array2 = Array;
    if (Array.isArray(errors.errors)) {
      errors = errors.errors;
      const item = errors.forEach((item, index) => {
        let combined;
        const obj = _mod703;
        if (obj.isInstanceOf(item, Error)) {
          const _Array = Array;
          const obj2 = { handled: true, type: "auto.core.linked_errors", exception_id };
          const tmp5 = Array.isArray(errors.errors) && { is_exception_group: true };
          const merged = Object.assign(tmp5);
          const merged1 = Object.assign(tmp2.mechanism);
          mechanism.mechanism = obj2;
          const tmp14 = fn(closure_1, item);
          length = length.length;
          const _HermesInternal = HermesInternal;
          const obj3 = { handled: true, type: "chained", source: combined, exception_id: length, parent_id: exception_id };
          combined = "errors[" + index + "]";
          const merged2 = Object.assign(tmp14.mechanism);
          tmp14.mechanism = obj3;
          const items = [tmp14];
          HermesBuiltin.arraySpread(items, length, 1);
          length = aggregateExceptionsFromError(fn, closure_1, closure_2, item, source, items, tmp14, length);
        }
      });
    }
    return length;
  }
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const applyAggregateErrorsToEvent = function applyAggregateErrorsToEvent(arg0, arg1, arg2, arg3, exception, originalException) {
  exception = exception.exception;
  let values;
  if (exception != null) {
    values = exception.values;
  }
  if (values) {
    const tmp2 = originalException;
    if (tmp2) {
      const _Error = Error;
      const obj = _mod703;
      if (obj.isInstanceOf(originalException.originalException, Error)) {
        let tmp6;
        if (exception.exception.values.length > 0) {
          tmp6 = exception.exception.values[exception.exception.values.length - 1];
        }
        if (tmp6) {
          exception.exception.values = aggregateExceptionsFromError(arg0, arg1, arg3, originalException.originalException, arg2, exception.exception.values, tmp6, 0);
        }
      }
    }
  }
};
