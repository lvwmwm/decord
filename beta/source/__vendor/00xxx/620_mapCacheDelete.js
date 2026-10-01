// Module ID: 620
// Function ID: 621
// Name: mapCacheDelete
// Dependencies: [621]

// Module 620 (mapCacheDelete)
import getMapData from "getMapData" /* 621 */;

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
