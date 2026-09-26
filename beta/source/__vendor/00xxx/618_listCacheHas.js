// Module ID: 618
// Function ID: 619
// Name: listCacheHas
// Dependencies: [615]

// Module 618 (listCacheHas)
import assocIndexOf from "assocIndexOf" /* 615 */;


export default function listCacheHas(arg0) {
  return assocIndexOf(this.__data__, arg0) > -1;
};
