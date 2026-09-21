// Module ID: 614
// Function ID: 615
// Name: hashSet
// Dependencies: [604]

// Module 614 (hashSet)
import _mod604 from "module_604" /* 604 */;


export default function hashSet(arg0, arg1) {
  const self = this;
  ({ __data__, size } = this);
  let num = 1;
  if (this.has(arg0)) {
    num = 0;
  }
  self.size = size + num;
  if (!_mod604) {
    let str = arg1;
  } else {
    str = "__lodash_hash_undefined__";
  }
  __data__[arg0] = str;
  return self;
};
