// Module ID: 702
// Function ID: 8709
// Name: toKey
// Dependencies: [576]

// Module 702 (toKey)

export default function toKey(arg0) {
  if ("string" !== typeof arg0) {
    if (!require(576) /* isSymbol */(arg0)) {
      const text = `${arg0}`;
      if ("0" !== `${arg0}`) {
        let str2 = text;
      } else {
        str2 = "-0";
      }
      return str2;
    }
  }
  return arg0;
};
