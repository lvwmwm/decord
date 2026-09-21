// Module ID: 629
// Function ID: 630
// Name: mapCacheSet
// Dependencies: [625]

// Module 629 (mapCacheSet)
import _mod625 from "module_625" /* 625 */;


export default function mapCacheSet(arg0, arg1) {
  const self = this;
  const obj = _mod625(this, arg0);
  const result = obj.set(arg0, arg1);
  let num = 1;
  if (obj.size == obj.size) {
    num = 0;
  }
  self.size = this.size + num;
  return self;
};
