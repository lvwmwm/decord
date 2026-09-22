// Module ID: 1207
// Function ID: 1208
// Name: reflectionScalarDefault
// Dependencies: [1199, 1204, 1193]
// Exports: reflectionScalarDefault

// Module 1207 (reflectionScalarDefault)
import ScalarType from "ScalarType" /* 1199 */;

require = arg1;
const dependencyMap = arg6;

export const reflectionScalarDefault = function reflectionScalarDefault(T, L) {
  let STRING = L;
  if (L === undefined) {
    STRING = ScalarType.LongType.STRING;
  }
  if (ScalarType.ScalarType.BOOL === T) {
    return false;
  } else {
    if (tmp3(1199).ScalarType.UINT64 !== T) {
      if (tmp3(1199).ScalarType.FIXED64 !== T) {
        if (tmp3(1199).ScalarType.INT64 !== T) {
          if (tmp3(1199).ScalarType.SFIXED64 !== T) {
            if (tmp3(1199).ScalarType.SINT64 !== T) {
              if (tmp3(1199).ScalarType.DOUBLE !== T) {
                if (tmp3(1199).ScalarType.FLOAT !== T) {
                  if (tmp3(1199).ScalarType.BYTES === T) {
                    const _Uint8Array = Uint8Array;
                    const uint8Array = new Uint8Array(0);
                    return uint8Array;
                  } else if (tmp3(1199).ScalarType.STRING === T) {
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
        return tmp3(1204).reflectionLongConvert(tmp3(1193).PbLong.ZERO, STRING);
      }
    }
    return tmp3(1204).reflectionLongConvert(tmp3(1193).PbULong.ZERO, STRING);
  }
};
