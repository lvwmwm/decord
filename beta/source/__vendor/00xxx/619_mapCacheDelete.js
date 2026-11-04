// Module ID: 619
// Function ID: 620
// Name: mapCacheDelete
// Dependencies: [620]

// Module 619 (mapCacheDelete)
import getMapData from "getMapData" /* 620 */;

let size;


export default function mapCacheDelete(arg0) {
  const obj = getMapData(this, arg0);
  const deleteResult = obj.delete(arg0);
  let num = 0;
  size = this.size;
  if (deleteResult) {
    num = 1;
  }
  this.size = size - num;
  return deleteResult;
};
