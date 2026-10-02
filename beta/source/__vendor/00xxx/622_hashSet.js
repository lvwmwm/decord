// Module ID: 622
// Function ID: 623
// Name: hashSet
// Dependencies: [612]

// Module 622 (hashSet)
import getNative from "getNative" /* 612 */;


export default function hashSet(arg0, arg1) {
  let __data__;
  let str;
  const self = this;
  ({ __data__, size } = this);
  let num = 1;
  if (this.has(arg0)) {
    num = 0;
  }
  self.size = size + num;
  if (!getNative) {
    str = arg1;
  } else {
    str = "__lodash_hash_undefined__";
  }
  __data__[arg0] = str;
  return self;
};
