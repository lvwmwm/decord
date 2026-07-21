// Module ID: 7308
// Function ID: 58944
// Name: aggregateExceptionsFromError
// Dependencies: []
// Exports: applyAggregateErrorsToEvent

// Module 7308 (aggregateExceptionsFromError)
function aggregateExceptionsFromError(arg0, arg1, arg2, errors) {
  const require = arg0;
  const dependencyMap = arg1;
  const callback = arg2;
  const aggregateExceptionsFromError = arg4;
  const applyExceptionGroupFieldsForParentException = arg6;
  const applyExceptionGroupFieldsForChildException = arg7;
  if (arg5.length >= arg2 + 1) {
    return arg5;
  } else {
    let length = callback(arg5);
    const _Error = Error;
    if (obj.isInstanceOf(errors[arg4], Error)) {
      applyExceptionGroupFieldsForParentException(arg6, arg7);
      const tmp3 = arg0(arg1, errors[arg4]);
      length = length.length;
      applyExceptionGroupFieldsForChildException(tmp3, arg4, length, arg7);
      const items = [tmp3];
      length = aggregateExceptionsFromError(arg0, arg1, arg2, errors[arg4], arg4, items.concat(callback(length)), tmp3, length);
    }
    const _Array = Array;
    if (Array.isArray(errors.errors)) {
      errors = errors.errors;
      const item = errors.forEach((arg0, arg1) => {
        if (obj.isInstanceOf(arg0, Error)) {
          arg6(arg6, arg7);
          const tmp7 = arg0(arg1, arg0);
          let length = length.length;
          const _HermesInternal = HermesInternal;
          arg7(tmp7, "errors[" + arg1 + "]", length, arg7);
          const items = [tmp7];
          length = arg4(arg0, arg1, arg2, arg0, arg4, items.concat(arg2(length)), tmp7, length);
        }
      });
    }
    return length;
  }
}
function applyExceptionGroupFieldsForParentException(mechanism, exception_id) {
  mechanism.mechanism = mechanism.mechanism || {};
  let tmp = "AggregateError" === mechanism.type;
  if (tmp) {
    let obj = { is_exception_group: true };
    tmp = obj;
  }
  obj = { exception_id };
  mechanism.mechanism = Object.assign({}, mechanism.mechanism, tmp, obj);
}
function applyExceptionGroupFieldsForChildException(mechanism, source, exception_id, parent_id) {
  mechanism.mechanism = mechanism.mechanism || {};
  mechanism.mechanism = Object.assign({}, mechanism.mechanism, { type: "chained", source, exception_id, parent_id });
}
let closure_2 = require(dependencyMap[0]);

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
            tmp3.exception.values = function truncateAggregateExceptions(arr, arg1) {
              return arr.map((value) => {
                if (value.value) {
                  value.value = arg1(closure_1[2]).truncate(value.value, arg1);
                  const obj = arg1(closure_1[2]);
                }
                return value;
              });
            }(aggregateExceptionsFromError(arg0, arg1, tmp2, tmp4.originalException, tmp, tmp3.exception.values, tmp8, 0), num);
          }
        }
        const obj = require(dependencyMap[1]);
      }
    }
  }
};
