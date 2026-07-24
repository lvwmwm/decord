// Module ID: 897
// Function ID: 9863
// Name: _shouldDropEvent
// Dependencies: [800, 801, 863, 810]

// Module 897 (_shouldDropEvent)
import setupIntegration from "setupIntegration";

function _shouldDropEvent(message, message2) {
  let tmp2 = !tmp;
  if (!!message2) {
    message = message.message;
    message2 = message2.message;
    if (message) {
      if (!message) {
        if (message) {
          let flag = false;
          if (message === message2) {
            flag = false;
            if (_isSameFingerprint(message, message2)) {
              flag = false;
              if (_isSameStacktrace(message, message2)) {
                flag = true;
              }
            }
          }
        } else {
          flag = false;
        }
      } else {
        flag = false;
      }
    } else {
      flag = false;
    }
    let tmp5 = flag;
    if (!flag) {
      const iter = _getExceptionFromEvent(message2);
      const iter2 = _getExceptionFromEvent(message);
      let flag2 = false;
      if (iter) {
        flag2 = false;
        if (iter2) {
          flag2 = false;
          if (iter.type === iter2.type) {
            flag2 = false;
            if (iter.value === iter2.value) {
              flag2 = false;
              if (_isSameFingerprint(message, message2)) {
                flag2 = false;
                if (_isSameStacktrace(message, message2)) {
                  flag2 = true;
                }
              }
            }
          }
        }
      }
      tmp5 = flag2;
    }
    tmp2 = tmp5;
  }
  return tmp2;
}
function _isSameStacktrace(arg0, arg1) {
  const framesFromEvent = require(810) /* createStackParser */.getFramesFromEvent(arg0);
  const obj = require(810) /* createStackParser */;
  const framesFromEvent1 = require(810) /* createStackParser */.getFramesFromEvent(arg1);
  if (!framesFromEvent) {
    if (!framesFromEvent1) {
      return true;
    }
  }
  if (!framesFromEvent) {
    if (framesFromEvent1.length !== framesFromEvent.length) {
      return false;
    } else {
      let num = 0;
      if (0 < framesFromEvent1.length) {
        while (framesFromEvent1[num].filename === framesFromEvent[num].filename) {
          if (tmp.lineno !== tmp2.lineno) {
            break;
          } else if (tmp.colno !== tmp2.colno) {
            break;
          } else if (tmp.function !== tmp2.function) {
            break;
          } else {
            num = num + 1;
          }
        }
        return false;
      }
      return true;
    }
  }
  return false;
}
function _isSameFingerprint(fingerprint, fingerprint2) {
  fingerprint = fingerprint.fingerprint;
  fingerprint2 = fingerprint2.fingerprint;
  if (!fingerprint) {
    if (!fingerprint2) {
      return true;
    }
  }
  if (!fingerprint) {
    const joined = obj.join("");
    return joined === fingerprint2.join("");
  }
  return false;
}
function _getExceptionFromEvent(exception) {
  exception = exception.exception;
  let first;
  if (null != exception) {
    const values = exception.values;
    if (null != values) {
      first = values[0];
    }
  }
  return first;
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export { _shouldDropEvent };
export const dedupeIntegration = setupIntegration.defineIntegration(function _dedupeIntegration() {
  return {
    name: "Dedupe",
    processEvent(type) {
      if (type.type) {
        return type;
      } else if (outer1_2(tmp, closure_0)) {
        if (outer1_0(outer1_1[0]).DEBUG_BUILD) {
          const debug = outer1_0(outer1_1[1]).debug;
          debug.warn("Event dropped due to being a duplicate of previously captured event.");
        }
        return null;
      } else {
        closure_0 = tmp;
      }
    }
  };
});
