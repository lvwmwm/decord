// Module ID: 8286
// Function ID: 65403
// Dependencies: []

// Module 8286
const _module = require(dependencyMap[0]);
const _module1 = require(dependencyMap[2]);
const result = _module1.fileFinishedImporting("modules/panels/morphable/AppFreezeStore.tsx");

export default _module.create((arg0) => {
  const require = arg0;
  const obj = {
    lockKeys: new Set(),
    requestFreezeLock(arg0) {
      ({ key: closure_0, lockEnabled: closure_1 } = arg0);
      arg0(closure_1[1]).batchUpdates(() => {
        callback((lockKeys) => {
          lockKeys = lockKeys.lockKeys;
          const hasItem = lockKeys.has(closure_0);
          if (closure_1) {
            let tmp12 = lockKeys;
            if (!hasItem) {
              let obj = {};
              const merged = Object.assign(lockKeys);
              const _Set2 = Set;
              const items = [closure_0];
              const _Array = Array;
              HermesBuiltin.arraySpread(Array.from(lockKeys.lockKeys), 1);
              const set = new Set(items);
              obj["lockKeys"] = set;
              tmp12 = obj;
            }
            return tmp12;
          } else if (hasItem) {
            const _Set = Set;
            const set1 = new Set(lockKeys);
            set1.delete(closure_0);
            obj = {};
            const merged1 = Object.assign(lockKeys);
            obj["lockKeys"] = set1;
            return obj;
          } else {
            return lockKeys;
          }
        });
      });
    }
  };
  return obj;
});
