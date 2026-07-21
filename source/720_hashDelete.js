// Module ID: 720
// Function ID: 8744
// Name: hashDelete
// Dependencies: []

// Module 720 (hashDelete)

export default function hashDelete(arg0) {
  const self = this;
  const hasItem = this.has(arg0);
  if (hasItem) {
    const __data__ = self.__data__;
    delete r1[r3];
  }
  let num = 0;
  if (hasItem) {
    num = 1;
  }
  self.size = self.size - num;
  return hasItem;
};
