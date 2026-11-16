// Module ID: 1753
// Function ID: 1754
// Dependencies: [1709, 1716]
// Exports: createSynchronizable

// Module 1753
import WorkletsModule2 from "WorkletsModule" /* 1709 */;

let tmp3;
const registerCustomSerializable = tmp3(1716);

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
