// Module ID: 711
// Function ID: 8724
// Name: Hash
// Dependencies: []

// Module 711 (Hash)
class Hash {
  constructor(arg0) {
    self = this;
    num = 0;
    if (null != global) {
      num = global.length;
    }
    clearResult = self.clear();
    for (let num2 = 0; num2 < num; num2 = num2 + 1) {
      tmp2 = global[num2];
      result = self.set(tmp2[0], tmp2[1]);
    }
    return;
  }
}
Hash.prototype.clear = require(dependencyMap[0]);
Hash.prototype.delete = require(dependencyMap[1]);
Hash.prototype.get = require(dependencyMap[2]);
Hash.prototype.has = require(dependencyMap[3]);
Hash.prototype.set = require(dependencyMap[4]);

export default Hash;
