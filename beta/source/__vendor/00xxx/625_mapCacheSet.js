// Module ID: 625
// Function ID: 626
// Name: mapCacheSet
// Dependencies: [621]

// Module 625 (mapCacheSet)
import getMapData from "getMapData" /* 621 */;

let size;


export default function mapCacheSet(arg0, arg1) {
  const self = this;
  const obj = getMapData(this, arg0);
  size = obj.size;
  const result = obj.set(arg0, arg1);
  let num = 1;
  const size2 = this.size;
  if (obj.size == size) {
    num = 0;
  }
  self.size = size2 + num;
  return self;
};
