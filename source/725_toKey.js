// Module ID: 725
// Function ID: 726
// Name: toKey
// Dependencies: [638]

// Module 725 (toKey)

export default function toKey(str) {
  if (typeof str !== "string") {
    if (!require(638) /* isSymbol */(str)) {
      const text = `${str}`;
      if ("0" !== `${str}`) {
        let str2 = text;
      } else {
        str2 = "-0";
      }
      return str2;
    }
  }
  return str;
};
