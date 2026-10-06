// Module ID: 630
// Function ID: 631
// Name: listCacheHas
// Dependencies: [627]

// Module 630 (listCacheHas)
import assocIndexOf from "assocIndexOf" /* 627 */;


export default function listCacheHas(arg0) {
  return assocIndexOf(this.__data__, arg0) > -1;
};
