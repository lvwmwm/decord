// Module ID: 710
// Function ID: 8722
// Name: mapCacheClear
// Dependencies: [49479680, 49545216, 49610752]

// Module 710 (mapCacheClear)

export default function mapCacheClear() {
  this.size = 0;
  const obj = {};
  let tmp = require(dependencyMap[0]);
  tmp = new tmp();
  obj.hash = tmp;
  let tmp3 = require(dependencyMap[1]);
  if (!tmp3) {
    tmp3 = require(dependencyMap[2]);
  }
  tmp3 = new tmp3();
  obj.map = tmp3;
  let tmp7 = require(dependencyMap[0]);
  tmp7 = new tmp7();
  obj.string = tmp7;
  this.__data__ = obj;
};
