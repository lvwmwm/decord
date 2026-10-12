// Module ID: 1231
// Function ID: 1232
// Name: reflectionScalarDefault
// Dependencies: [1223, 1228, 1217]
// Exports: reflectionScalarDefault

// Module 1231 (reflectionScalarDefault)
import PbULong from "PbULong" /* 1217 */;
import ScalarType from "ScalarType" /* 1223 */;
import reflectionLongConvert from "reflectionLongConvert" /* 1228 */;


export const reflectionScalarDefault = function reflectionScalarDefault(T, L) {
  let STRING = L;
  if (L === undefined) {
    STRING = ScalarType.LongType.STRING;
  }
  if (ScalarType.ScalarType.BOOL === T) {
    return false;
  } else {
    if (ScalarType.ScalarType.UINT64 !== T) {
      if (ScalarType.ScalarType.FIXED64 !== T) {
        if (ScalarType.ScalarType.INT64 !== T) {
          if (ScalarType.ScalarType.SFIXED64 !== T) {
            if (ScalarType.ScalarType.SINT64 !== T) {
              if (ScalarType.ScalarType.DOUBLE !== T) {
                if (ScalarType.ScalarType.FLOAT !== T) {
                  if (ScalarType.ScalarType.BYTES === T) {
                    const _Uint8Array = Uint8Array;
                    const self = this;
                    const self2 = this;
                    const uint8Array = new Uint8Array(0);
                    return uint8Array;
                  } else if (ScalarType.ScalarType.STRING === T) {
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
        const tmp3Result = reflectionLongConvert;
        return tmp3Result.reflectionLongConvert(PbULong.PbLong.ZERO, STRING);
      }
    }
    const tmp3Result2 = reflectionLongConvert;
    return tmp3Result2.reflectionLongConvert(PbULong.PbULong.ZERO, STRING);
  }
};
