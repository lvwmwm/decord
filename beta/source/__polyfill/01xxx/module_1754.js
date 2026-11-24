// Module ID: 1754
// Function ID: 1755
// Dependencies: [1710, 1717]
// Exports: createSynchronizable

// Module 1754
import WorkletsModule2 from "WorkletsModule" /* 1710 */;

let tmp3;
const registerCustomSerializable = tmp3(1717);

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
