// Module ID: 622
// Function ID: 623
// Name: listCacheHas
// Dependencies: [619]

// Module 622 (listCacheHas)
import assocIndexOf from "assocIndexOf" /* 619 */;


export default function listCacheHas(arg0) {
  return assocIndexOf(this.__data__, arg0) > -1;
};
