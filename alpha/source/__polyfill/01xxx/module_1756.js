// Module ID: 1756
// Function ID: 1757
// Dependencies: [1712, 1719]
// Exports: createSynchronizable

// Module 1756
import WorkletsModule2 from "WorkletsModule" /* 1712 */;

let tmp3;
const registerCustomSerializable = tmp3(1719);

export function createSynchronizable(__initData, fixedType) {
  fixedType = undefined;
  if (fixedType != null) {
    fixedType = fixedType.fixedType;
  }
  const WorkletsModule = WorkletsModule2.WorkletsModule;
  let serializable = __initData;
  const createSynchronizable = WorkletsModule.createSynchronizable;
  if (!fixedType) {
    const tmp3Result = registerCustomSerializable;
    serializable = tmp3Result.createSerializable(__initData);
  }
  return globalThis.__synchronizableUnpacker(createSynchronizable(serializable, fixedType), fixedType);
}
