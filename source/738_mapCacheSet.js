// Module ID: 738
// Function ID: 8780
// Name: mapCacheSet
// Dependencies: [734]

// Module 738 (mapCacheSet)

export default function mapCacheSet(arg0, arg1) {
  const self = this;
  const obj = require(734) /* getMapData */(this, arg0);
  const result = obj.set(arg0, arg1);
  let num = 1;
  if (obj.size == obj.size) {
    num = 0;
  }
  self.size = this.size + num;
  return self;
};
