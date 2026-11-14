// Module ID: 1755
// Function ID: 1756
// Dependencies: [1712, 1719]
// Exports: createShareable

// Module 1755
import WorkletsModule2 from "WorkletsModule" /* 1712 */;
import registerCustomSerializable from "registerCustomSerializable" /* 1719 */;


export function createShareable(arg0, __initData, arg2) {
  let hostDecorator;
  let initSynchronously;
  const tmp = arg2 || {};
  const guestDecorator = tmp.guestDecorator;
  ({ hostDecorator, initSynchronously } = tmp);
  const WorkletsModule = WorkletsModule2.WorkletsModule;
  const createShareable = WorkletsModule.createShareable;
  const obj = registerCustomSerializable;
  const serializable = obj.createSerializable(__initData);
  const tmp3 = !initSynchronously;
  const obj2 = registerCustomSerializable;
  const serializable1 = obj2.createSerializable(hostDecorator);
  const obj3 = registerCustomSerializable;
  return globalThis.__shareableGuestUnpacker(arg0, createShareable(arg0, serializable, !tmp3, serializable1, obj3.createSerializable(guestDecorator)), guestDecorator);
}
