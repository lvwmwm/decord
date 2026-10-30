// Module ID: 1034
// Function ID: 1035
// Name: PrimitiveToString
// Dependencies: []
// Exports: PrimitiveToString

// Module 1034 (PrimitiveToString)

export function PrimitiveToString(arg0) {
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
}
