// Module ID: 1049
// Function ID: 1050
// Name: PrimitiveToString
// Dependencies: []
// Exports: PrimitiveToString

// Module 1049 (PrimitiveToString)

export const PrimitiveToString = function PrimitiveToString(arg0) {
  if (null === arg0) {
    return "";
  } else {
    if ("string" !== typeof arg0) {
      if ("boolean" === typeof arg0) {
        let str8 = "False";
        if (1 == arg0) {
          str8 = "True";
        }
        return str8;
      } else {
        if ("number" !== typeof arg0) {
          if ("bigint" !== typeof arg0) {
            if ("undefined" !== typeof arg0) {
              if ("symbol" === typeof arg0) {
                return arg0.toString();
              }
            }
          }
        }
        const _HermesInternal = HermesInternal;
        return "" + arg0;
      }
    }
    return arg0;
  }
};
