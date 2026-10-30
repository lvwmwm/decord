// Module ID: 606
// Function ID: 607
// Name: hashDelete
// Dependencies: []

// Module 606 (hashDelete)
let size;


export default function hashDelete(arg0) {
  const self = this;
  const hasItem = this.has(arg0);
  const tmp = arg0;
  if (hasItem) {
    delete self.__data__[tmp];
  }
  let num = 0;
  size = self.size;
  if (hasItem) {
    num = 1;
  }
  self.size = size - num;
  return hasItem;
};
