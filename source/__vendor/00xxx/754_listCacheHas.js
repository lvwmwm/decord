// Module ID: 754
// Function ID: 755
// Name: listCacheHas
// Dependencies: [751]

// Module 754 (listCacheHas)
import assocIndexOf from "assocIndexOf" /* 751 */;


export default function listCacheHas(arg0) {
  return assocIndexOf(this.__data__, arg0) > -1;
};
