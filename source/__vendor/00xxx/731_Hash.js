// Module ID: 731
// Function ID: 732
// Name: Hash
// Dependencies: [732, 740, 741, 742, 743]

// Module 731 (Hash)
import hashClear from "hashClear" /* 732 */;
import hashDelete from "hashDelete" /* 740 */;
import hashGet from "hashGet" /* 741 */;
import hashHas from "hashHas" /* 742 */;
import hashSet from "hashSet" /* 743 */;

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
      result = require("hashClear");
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
