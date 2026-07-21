// Module ID: 1305
// Function ID: 15229
// Name: reflectionScalarDefault
// Dependencies: []

// Module 1305 (reflectionScalarDefault)
arg5.reflectionScalarDefault = function reflectionScalarDefault(T, L) {
  if (arguments.length > 1) {
    if (undefined !== arguments[1]) {
      let STRING = arguments[1];
    }
    if (L(arg6[0]).ScalarType.BOOL === T) {
      return false;
    } else {
      if (L(arg6[0]).ScalarType.UINT64 !== T) {
        if (L(arg6[0]).ScalarType.FIXED64 !== T) {
          if (L(arg6[0]).ScalarType.INT64 !== T) {
            if (L(arg6[0]).ScalarType.SFIXED64 !== T) {
              if (L(arg6[0]).ScalarType.SINT64 !== T) {
                if (L(arg6[0]).ScalarType.DOUBLE !== T) {
                  if (L(arg6[0]).ScalarType.FLOAT !== T) {
                    if (L(arg6[0]).ScalarType.BYTES === T) {
                      const _Uint8Array = Uint8Array;
                      const uint8Array = new Uint8Array(0);
                      return uint8Array;
                    } else if (L(arg6[0]).ScalarType.STRING === T) {
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
          return L(arg6[1]).reflectionLongConvert(L(arg6[2]).PbLong.ZERO, STRING);
        }
      }
      return L(arg6[1]).reflectionLongConvert(L(arg6[2]).PbULong.ZERO, STRING);
    }
  }
  STRING = L(arg6[0]).LongType.STRING;
};
