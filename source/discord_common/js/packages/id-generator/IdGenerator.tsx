// Module ID: 487
// Function ID: 6306
// Name: getLowBits
// Dependencies: [6, 7, 24, 488, 2]

// Module 487 (getLowBits)
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";

const require = arg1;
function getLowBits(mod) {
  return mod.mod(4294967296).toJSNumber() | 0;
}
function getHighBits(shiftRight) {
  return shiftRight.shiftRight(32).toJSNumber() | 0;
}
const tmp2 = (() => {
  class IdGenerator {
    constructor() {
      tmp = outer1_3(this, IdGenerator);
      this._randomPrefix = Math.floor(4294967296 * Math.random()) | 0;
      tmp2 = outer1_1(outer1_2[2]);
      this._creationTime = tmp2(Date.now());
      this._sequenceNumber = 0;
      return;
    }
  }
  const items = [
    {
      key: "generate",
      value(arg0) {
        const tmp = outer1_1(outer1_2[2])(arg0);
        this._sequenceNumber = +this._sequenceNumber + 1;
        const str = new IdGenerator(outer1_2[3]).Buffer(24);
        str.writeInt32LE(outer1_5(tmp), 0, true);
        str.writeInt32LE(outer1_6(tmp), 4, true);
        str.writeInt32LE(this._randomPrefix, 8, true);
        str.writeInt32LE(outer1_5(this._creationTime), 12, true);
        str.writeInt32LE(outer1_6(this._creationTime), 16, true);
        str.writeInt32LE(+this._sequenceNumber | 0, 20, true);
        return str.toString("base64");
      }
    }
  ];
  return callback(IdGenerator, items);
})();
const result = require("Integer").fileFinishedImporting("../discord_common/js/packages/id-generator/IdGenerator.tsx");

export const IdGenerator = tmp2;
