// Module ID: 1755
// Function ID: 1756
// Dependencies: [1711, 1718]
// Exports: createSynchronizable

// Module 1755
import WorkletsModule2 from "WorkletsModule" /* 1711 */;

let tmp3;
const registerCustomSerializable = tmp3(1718);

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
