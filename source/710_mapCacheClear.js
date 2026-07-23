// Module ID: 710
// Function ID: 8727
// Name: mapCacheClear
// Dependencies: [711, 724, 725]

// Module 710 (mapCacheClear)

export default function mapCacheClear() {
  this.size = 0;
  const obj = {};
  let tmp = require(711) /* Hash */;
  tmp = new tmp();
  obj.hash = tmp;
  let tmp3 = require(724) /* getNative */;
  if (!tmp3) {
    tmp3 = require(725) /* ListCache */;
  }
  tmp3 = new tmp3();
  obj.map = tmp3;
  let tmp7 = require(711) /* Hash */;
  tmp7 = new tmp7();
  obj.string = tmp7;
  this.__data__ = obj;
};
