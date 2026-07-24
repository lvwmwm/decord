// Module ID: 712
// Function ID: 8732
// Name: hashClear
// Dependencies: [713]

// Module 712 (hashClear)

export default function hashClear() {
  const self = this;
  if (require(713) /* getNative */) {
    let obj = require(713) /* getNative */(null);
  } else {
    obj = {};
  }
  self.__data__ = obj;
  self.size = 0;
};
