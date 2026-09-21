// Module ID: 1208
// Function ID: 1209
// Name: reflectionScalarDefault
// Dependencies: [1200, 1205, 1194]
// Exports: reflectionScalarDefault

// Module 1208 (reflectionScalarDefault)
import ScalarType from "ScalarType" /* 1200 */;

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
    if (tmp3(1200).ScalarType.UINT64 !== T) {
      if (tmp3(1200).ScalarType.FIXED64 !== T) {
        if (tmp3(1200).ScalarType.INT64 !== T) {
          if (tmp3(1200).ScalarType.SFIXED64 !== T) {
            if (tmp3(1200).ScalarType.SINT64 !== T) {
              if (tmp3(1200).ScalarType.DOUBLE !== T) {
                if (tmp3(1200).ScalarType.FLOAT !== T) {
                  if (tmp3(1200).ScalarType.BYTES === T) {
                    const _Uint8Array = Uint8Array;
                    const uint8Array = new Uint8Array(0);
                    return uint8Array;
                  } else if (tmp3(1200).ScalarType.STRING === T) {
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
        return tmp3(1205).reflectionLongConvert(tmp3(1194).PbLong.ZERO, STRING);
      }
    }
    return tmp3(1205).reflectionLongConvert(tmp3(1194).PbULong.ZERO, STRING);
  }
};
