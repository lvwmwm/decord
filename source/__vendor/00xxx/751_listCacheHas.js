// Module ID: 751
// Function ID: 752
// Name: listCacheHas
// Dependencies: [748]

// Module 751 (listCacheHas)
import assocIndexOf from "assocIndexOf" /* 748 */;


export default function listCacheHas(arg0) {
  return assocIndexOf(this.__data__, arg0) > -1;
};
