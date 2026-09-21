// Module ID: 624
// Function ID: 625
// Name: mapCacheDelete
// Dependencies: [625]

// Module 624 (mapCacheDelete)
import _mod625 from "module_625" /* 625 */;


export default function mapCacheDelete(arg0) {
  const deleteResult = _mod625(this, arg0).delete(arg0);
  let num = 0;
  if (deleteResult) {
    num = 1;
  }
  this.size = this.size - num;
  return deleteResult;
};
