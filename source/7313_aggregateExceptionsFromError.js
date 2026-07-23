// Module ID: 7313
// Function ID: 58989
// Name: aggregateExceptionsFromError
// Dependencies: [65, 7243, 7245]
// Exports: applyAggregateErrorsToEvent

// Module 7313 (aggregateExceptionsFromError)
import _toConsumableArray from "_toConsumableArray";

function aggregateExceptionsFromError(arg0, arg1, arg2, errors) {
  const _require = arg0;
  const dependencyMap = arg1;
  const _toConsumableArray = arg2;
  const aggregateExceptionsFromError = arg4;
  const applyExceptionGroupFieldsForParentException = arg6;
  const applyExceptionGroupFieldsForChildException = arg7;
  if (arg5.length >= arg2 + 1) {
    return arg5;
  } else {
    let length = _toConsumableArray(arg5);
    const _Error = Error;
    if (obj.isInstanceOf(errors[arg4], Error)) {
      applyExceptionGroupFieldsForParentException(arg6, arg7);
      const tmp3 = arg0(arg1, errors[arg4]);
      length = length.length;
      applyExceptionGroupFieldsForChildException(tmp3, arg4, length, arg7);
      let items = [tmp3];
      length = aggregateExceptionsFromError(arg0, arg1, arg2, errors[arg4], arg4, items.concat(_toConsumableArray(length)), tmp3, length);
    }
    const _Array = Array;
    if (Array.isArray(errors.errors)) {
      errors = errors.errors;
      const item = errors.forEach((arg0, arg1) => {
        if (obj.isInstanceOf(arg0, Error)) {
          callback4(callback4, callback5);
          const tmp7 = callback(table, arg0);
          length = length.length;
          const _HermesInternal = HermesInternal;
          callback5(tmp7, "errors[" + arg1 + "]", length, callback5);
          const items = [tmp7];
          length = callback3(callback, table, callback2, arg0, callback3, items.concat(callback2(length)), tmp7, length);
        }
      });
    }
    return length;
  }
}
function applyExceptionGroupFieldsForParentException(mechanism, exception_id) {
  mechanism.mechanism = mechanism.mechanism || { type: "generic", handled: true };
  let tmp = "AggregateError" === mechanism.type;
  if (tmp) {
    let obj = { is_exception_group: true };
    tmp = obj;
  }
  obj = { exception_id };
  mechanism.mechanism = Object.assign({}, mechanism.mechanism, tmp, obj);
}
function applyExceptionGroupFieldsForChildException(mechanism, source, exception_id, parent_id) {
  mechanism.mechanism = mechanism.mechanism || { type: "generic", handled: true };
  mechanism.mechanism = Object.assign({}, mechanism.mechanism, { type: "chained", source, exception_id, parent_id });
}

export const applyAggregateErrorsToEvent = function applyAggregateErrorsToEvent(arg0, arg1) {
  let num = 250;
  if (arguments.length > 2) {
    num = 250;
    if (undefined !== arguments[2]) {
      num = arguments[2];
    }
  }
  if (arguments.length > 3) {
    const tmp = arguments[3];
  }
  if (arguments.length > 4) {
    const tmp2 = arguments[4];
  }
  let tmp3;
  if (arguments.length > 5) {
    tmp3 = arguments[5];
  }
  if (arguments.length > 6) {
    const tmp4 = arguments[6];
  }
  if (tmp3.exception) {
    if (tmp3.exception.values) {
      if (tmp4) {
        const _Error = Error;
        if (obj.isInstanceOf(tmp4.originalException, Error)) {
          let tmp8;
          if (tmp3.exception.values.length > 0) {
            tmp8 = tmp3.exception.values[tmp3.exception.values.length - 1];
          }
          if (tmp8) {
            tmp3.exception.values = (function truncateAggregateExceptions(arr, arg1) {
              let closure_0 = arg1;
              return arr.map((value) => {
                if (value.value) {
                  value.value = outer2_0(outer2_1[2]).truncate(value.value, closure_0);
                  const obj = outer2_0(outer2_1[2]);
                }
                return value;
              });
            })(aggregateExceptionsFromError(arg0, arg1, tmp2, tmp4.originalException, tmp, tmp3.exception.values, tmp8, 0), num);
          }
        }
        obj = require(7243) /* isBuiltin */;
      }
    }
  }
};
