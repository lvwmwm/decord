// Module ID: 1305
// Function ID: 15230
// Name: reflectionScalarDefault
// Dependencies: [1297, 1302, 1291]

// Module 1305 (reflectionScalarDefault)
const require = arg1;
const dependencyMap = arg6;
arg5.reflectionScalarDefault = function reflectionScalarDefault(T, L) {
  if (arguments.length > 1) {
    if (undefined !== arguments[1]) {
      let STRING = arguments[1];
    }
    if (require(1297) /* RepeatType */.ScalarType.BOOL === T) {
      return false;
    } else {
      if (require(1297) /* RepeatType */.ScalarType.UINT64 !== T) {
        if (require(1297) /* RepeatType */.ScalarType.FIXED64 !== T) {
          if (require(1297) /* RepeatType */.ScalarType.INT64 !== T) {
            if (require(1297) /* RepeatType */.ScalarType.SFIXED64 !== T) {
              if (require(1297) /* RepeatType */.ScalarType.SINT64 !== T) {
                if (require(1297) /* RepeatType */.ScalarType.DOUBLE !== T) {
                  if (require(1297) /* RepeatType */.ScalarType.FLOAT !== T) {
                    if (require(1297) /* RepeatType */.ScalarType.BYTES === T) {
                      const _Uint8Array = Uint8Array;
                      const uint8Array = new Uint8Array(0);
                      return uint8Array;
                    } else if (require(1297) /* RepeatType */.ScalarType.STRING === T) {
                      return "";
                    } else {
                      return 0;
                    }
                  }
                }
                return 0;
              }
            }
          }
          return require(1302) /* reflectionLongConvert */.reflectionLongConvert(require(1291) /* _callSuper */.PbLong.ZERO, STRING);
        }
      }
      return require(1302) /* reflectionLongConvert */.reflectionLongConvert(require(1291) /* _callSuper */.PbULong.ZERO, STRING);
    }
  }
  STRING = require(1297) /* RepeatType */.LongType.STRING;
};
