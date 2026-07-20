// Module ID: 888
// Function ID: 9806
// Name: aggregateExceptionsFromError
// Dependencies: []
// Exports: applyAggregateErrorsToEvent

// Module 888 (aggregateExceptionsFromError)
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
function applyExceptionGroupFieldsForParentException(type, exception_id) {
  let tmp = "AggregateError" === type.type;
  if (tmp) {
    let obj = { is_exception_group: true };
    tmp = obj;
  }
  obj = { exception_id };
  type.mechanism = Object.assign({ alignItems: false, justifyContent: false }, type.mechanism, tmp, obj);
}
function applyExceptionGroupFieldsForChildException(mechanism, source, exception_id, parent_id) {
  mechanism.mechanism = Object.assign({ handled: true }, mechanism.mechanism, { type: "chained", source, exception_id, parent_id });
}
let closure_2 = require(dependencyMap[0]);
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const applyAggregateErrorsToEvent = function applyAggregateErrorsToEvent(arg0, arg1, arg2, arg3, exception, originalException) {
  exception = exception.exception;
  if (null != exception) {
    if (exception.values) {
      if (originalException) {
        const _Error = Error;
        if (obj.isInstanceOf(originalException.originalException, Error)) {
          let tmp4;
          if (exception.exception.values.length > 0) {
            tmp4 = exception.exception.values[exception.exception.values.length - 1];
          }
          if (tmp4) {
            exception.exception.values = aggregateExceptionsFromError(arg0, arg1, arg3, originalException.originalException, arg2, exception.exception.values, tmp4, 0);
          }
        }
        const obj = require(dependencyMap[1]);
      }
    }
  }
};
