// Module ID: 629
// Function ID: 630
// Name: listCacheHas
// Dependencies: [626]

// Module 629 (listCacheHas)
import assocIndexOf from "assocIndexOf" /* 626 */;


export default function listCacheHas(arg0) {
  return assocIndexOf(this.__data__, arg0) > -1;
};
