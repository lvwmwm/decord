// Module ID: 597
// Function ID: 598
// Name: Hash
// Dependencies: [598, 606, 607, 608, 609]

// Module 597 (Hash)
import hashClear from "hashClear" /* 598 */;
import hashDelete from "hashDelete" /* 606 */;
import hashGet from "hashGet" /* 607 */;
import hashHas from "hashHas" /* 608 */;
import hashSet from "hashSet" /* 609 */;

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
