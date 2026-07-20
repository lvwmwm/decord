// Module ID: 487
// Function ID: 6306
// Name: getLowBits
// Dependencies: []

// Module 487 (getLowBits)
function getLowBits(mod) {
  return mod.mod(4294967296).toJSNumber() | 0;
}
function getHighBits(shiftRight) {
  return shiftRight.shiftRight(32).toJSNumber() | 0;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const tmp2 = () => {
  class IdGenerator {
    constructor() {
      tmp = closure_3(this, IdGenerator);
      this._randomPrefix = Math.floor(4294967296 * Math.random()) | 0;
      tmp2 = closure_1(closure_2[2]);
      this._creationTime = tmp2(Date.now());
      this._sequenceNumber = 0;
      return;
    }
  }
  const arg1 = IdGenerator;
  const items = [
    {
      key: "generate",
      value(arg0) {
        const tmp = callback(closure_2[2])(arg0);
        const tmp2 = +this._sequenceNumber;
        this._sequenceNumber = tmp2 + 1;
        const str = new IdGenerator(closure_2[3]).Buffer(24);
        str.writeInt32LE(callback3(tmp), 0, true);
        str.writeInt32LE(callback4(tmp), 4, true);
        str.writeInt32LE(this._randomPrefix, 8, true);
        str.writeInt32LE(callback3(this._creationTime), 12, true);
        str.writeInt32LE(callback4(this._creationTime), 16, true);
        str.writeInt32LE(tmp2 | 0, 20, true);
        return str.toString("base64");
      }
    }
  ];
  return callback(IdGenerator, items);
}();
const result = arg1(dependencyMap[4]).fileFinishedImporting("../discord_common/js/packages/id-generator/IdGenerator.tsx");

export const IdGenerator = tmp2;
