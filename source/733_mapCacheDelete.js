// Module ID: 733
// Function ID: 8771
// Name: mapCacheDelete
// Dependencies: [734]

// Module 733 (mapCacheDelete)

export default function mapCacheDelete(arg0) {
  let num = 0;
  const deleteResult = require(734) /* getMapData */(this, arg0).delete(arg0);
  if (deleteResult) {
    num = 1;
  }
  this.size = this.size - num;
  return deleteResult;
};
