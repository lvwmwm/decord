// Module ID: 1212
// Function ID: 1213
// Name: reflectionScalarDefault
// Dependencies: [1204, 1209, 1198]
// Exports: reflectionScalarDefault

// Module 1212 (reflectionScalarDefault)
import ScalarType from "ScalarType" /* 1204 */;

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
    if (tmp3(1204).ScalarType.UINT64 !== T) {
      if (tmp3(1204).ScalarType.FIXED64 !== T) {
        if (tmp3(1204).ScalarType.INT64 !== T) {
          if (tmp3(1204).ScalarType.SFIXED64 !== T) {
            if (tmp3(1204).ScalarType.SINT64 !== T) {
              if (tmp3(1204).ScalarType.DOUBLE !== T) {
                if (tmp3(1204).ScalarType.FLOAT !== T) {
                  if (tmp3(1204).ScalarType.BYTES === T) {
                    const _Uint8Array = Uint8Array;
                    const uint8Array = new Uint8Array(0);
                    return uint8Array;
                  } else if (tmp3(1204).ScalarType.STRING === T) {
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
        return tmp3(1209).reflectionLongConvert(tmp3(1198).PbLong.ZERO, STRING);
      }
    }
    return tmp3(1209).reflectionLongConvert(tmp3(1198).PbULong.ZERO, STRING);
  }
};
