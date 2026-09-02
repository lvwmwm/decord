// Module ID: 740
// Function ID: 741
// Name: hashDelete
// Dependencies: []

// Module 740 (hashDelete)

export default function hashDelete(arg0) {
  const self = this;
  const hasItem = this.has(arg0);
  if (hasItem) {
    const __data__ = self.__data__;
    delete tmp[tmp2];
  }
  let num = 0;
  if (hasItem) {
    num = 1;
  }
  self.size = self.size - num;
  return hasItem;
};
