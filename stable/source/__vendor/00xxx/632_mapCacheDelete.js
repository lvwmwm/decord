// Module ID: 632
// Function ID: 633
// Name: mapCacheDelete
// Dependencies: [633]

// Module 632 (mapCacheDelete)
import getMapData from "getMapData" /* 633 */;

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
