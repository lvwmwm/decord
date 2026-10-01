// Module ID: 598
// Function ID: 599
// Name: Hash
// Dependencies: [599, 607, 608, 609, 610]

// Module 598 (Hash)
import hashClear from "hashClear" /* 599 */;
import hashDelete from "hashDelete" /* 607 */;
import hashGet from "hashGet" /* 608 */;
import hashHas from "hashHas" /* 609 */;
import hashSet from "hashSet" /* 610 */;

class Hash {
  constructor(arg0) {
    let num2;
    let num = 0;
    if (null != arg0) {
      num = arg0.length;
    }
    const self = this;
    this.clear();
    for (let num2 = 0; num2 < num; num2 = num2 + 1) {
      let tmp2 = arg0[num2];
      let result = self.set(tmp2[0], tmp2[1]);
    }
  }
}
Hash.prototype.clear = hashClear;
Hash.prototype.delete = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

export default Hash;
