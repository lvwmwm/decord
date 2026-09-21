// Module ID: 602
// Function ID: 603
// Name: Hash
// Dependencies: [603, 611, 612, 613, 614]

// Module 602 (Hash)
import hashClear from "hashClear" /* 603 */;
import hashDelete from "hashDelete" /* 611 */;
import hashGet from "hashGet" /* 612 */;
import hashHas from "hashHas" /* 613 */;
import hashSet from "hashSet" /* 614 */;

class Hash {
  constructor(arg0) {
    num = 0;
    if (null != global) {
      num = global.length;
    }
    self = this;
    clearResult = this.clear();
    for (let num2 = 0; num2 < num; num2 = num2 + 1) {
      tmp2 = global[num2];
      result = self.set(tmp2[0], tmp2[1]);
    }
    return;
  }
}
Hash.prototype.clear = hashClear;
Hash.prototype.delete = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

export default Hash;
