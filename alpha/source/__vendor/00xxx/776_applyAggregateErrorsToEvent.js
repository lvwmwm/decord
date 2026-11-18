// Module ID: 776
// Function ID: 777
// Name: applyAggregateErrorsToEvent
// Dependencies: [691]
// Exports: applyAggregateErrorsToEvent

// Module 776 (applyAggregateErrorsToEvent)
import _mod691 from "module_691" /* 691 */;

const require = globalThis.__r;
let _require, dependencyMap, errors;

function aggregateExceptionsFromError(fn, stackParser, arg2, originalException, source, items, mechanism, length) {
  let closure_2;
  _require = fn;
  dependencyMap = stackParser;
  aggregateExceptionsFromError = arg2;
  let closure_4 = source;
  let closure_5 = mechanism;
  if (items.length >= arg2 + 1) {
    return items;
  } else {
    items = [];
    HermesBuiltin.arraySpread(items, items, 0);
    length = items;
    let obj3 = require("module_691");
    const _Error = Error;
    if (obj3.isInstanceOf(originalException[source], Error)) {
      let _Array = Array;
      const tmp2 = Array.isArray(originalException.errors) && { is_exception_group: true };
      let obj = { handled: true, type: "auto.core.linked_errors", exception_id: length };
      let merged = Object.assign(tmp2);
      let merged1 = Object.assign(mechanism.mechanism);
      mechanism.mechanism = obj;
      const tmp8 = fn(stackParser, originalException[source]);
      length = length.length;
      let obj2 = { handled: true, type: "chained", source, exception_id: length, parent_id: length };
      let merged2 = Object.assign(tmp8.mechanism);
      tmp8.mechanism = obj2;
      const items1 = [tmp8];
      let tmp14 = length;
      const tmp13 = originalException[source];
      HermesBuiltin.arraySpread(items1, length, 1);
      length = aggregateExceptionsFromError(fn, stackParser, arg2, tmp13, source, items1, tmp8, length);
    }
    const _Array2 = Array;
    if (Array.isArray(originalException.errors)) {
      errors = originalException.errors;
      const item = errors.forEach((item, index) => {
        let combined;
        const obj = _mod691;
        if (obj.isInstanceOf(item, Error)) {
          const _Array = Array;
          const obj2 = { handled: true, type: "auto.core.linked_errors", exception_id: length };
          const tmp5 = Array.isArray(originalException.errors) && { is_exception_group: true };
          const merged = Object.assign(tmp5);
          const merged1 = Object.assign(tmp2.mechanism);
          mechanism.mechanism = obj2;
          const tmp14 = fn(stackParser, item);
          length = length.length;
          const _HermesInternal = HermesInternal;
          const obj3 = { handled: true, type: "chained", source: combined, exception_id: length, parent_id: length };
          combined = "errors[" + index + "]";
          const merged2 = Object.assign(tmp14.mechanism);
          tmp14.mechanism = obj3;
          const items = [tmp14];
          HermesBuiltin.arraySpread(items, length, 1);
          length = aggregateExceptionsFromError(fn, stackParser, closure_2, item, source, items, tmp14, length);
        }
      });
    }
    return length;
  }
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export function applyAggregateErrorsToEvent(exceptionFromError, stackParser, source, arg3, exception, originalException) {
  exception = exception.exception;
  let values;
  if (exception != null) {
    values = exception.values;
  }
  if (values) {
    const tmp2 = originalException;
    if (tmp2) {
      const _Error = Error;
      const obj = _mod691;
      if (obj.isInstanceOf(originalException.originalException, Error)) {
        let tmp6;
        if (exception.exception.values.length > 0) {
          tmp6 = exception.exception.values[exception.exception.values.length - 1];
        }
        if (tmp6) {
          exception.exception.values = aggregateExceptionsFromError(exceptionFromError, stackParser, arg3, originalException.originalException, source, exception.exception.values, tmp6, 0);
        }
      }
    }
  }
}
