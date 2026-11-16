// Module ID: 1715
// Function ID: 1716
// Name: installSynchronizableUnpacker
// Dependencies: [1716]
// Exports: installSynchronizableUnpacker

// Module 1715 (installSynchronizableUnpacker)
import registerCustomSerializable from "registerCustomSerializable" /* 1716 */;

const require = globalThis.__r;

let tmp2;
const items = [{ code: "(function installSynchronizableUnpacker_Pnpm_synchronizableUnpackerNativeTs1(){const serializer=globalThis.__RUNTIME_KIND===1||globalThis._WORKLETS_BUNDLE_MODE_ENABLED?require('./serializable').createSerializable:function(value){return globalThis.__serializer(value);};function synchronizableUnpacker(synchronizableRef,isFixed){const synchronizable=synchronizableRef;const proxy=globalThis.__workletsModuleProxy;synchronizable.__synchronizableRef=true;synchronizable.getDirty=function(){return proxy.synchronizableGetDirty(synchronizable);};synchronizable.getBlocking=function(){return proxy.synchronizableGetBlocking(synchronizable);};const setBlockingValue=function(newValue){proxy.synchronizableSetBlocking(synchronizable,isFixed?newValue:serializer(newValue));};synchronizable.setBlocking=function(valueOrFunction){if(typeof valueOrFunction==='function'){const func=valueOrFunction;synchronizable.lock();if(__DEV__){try{const prev=synchronizable.getBlocking();setBlockingValue(func(prev));}finally{synchronizable.unlock();}}else{const prev=synchronizable.getBlocking();setBlockingValue(func(prev));synchronizable.unlock();}}else{setBlockingValue(valueOrFunction);}};synchronizable.lock=function(){proxy.synchronizableLock(synchronizable);};synchronizable.unlock=function(){proxy.synchronizableUnlock(synchronizable);};if(isFixed){synchronizable.setDirty=function(value){proxy.synchronizableSetDirty(synchronizable,value);};}return synchronizable;}globalThis.__synchronizableUnpacker=synchronizableUnpacker;})" }];
[tmp2] = items;
function installSynchronizableUnpacker() {
  if (1 !== globalThis.__RUNTIME_KIND) {
    const _globalThis = globalThis;
    if (!globalThis._WORKLETS_BUNDLE_MODE_ENABLED) {
      let fn = (arg0) => globalThis.__serializer(arg0);
    }
    const _globalThis2 = globalThis;
    globalThis.__synchronizableUnpacker = function synchronizableUnpacker(arg0, arg1) {
      let closure_0 = arg1;
      let closure_1 = arg0;
      arg0.__synchronizableRef = true;
      arg0.getDirty = () => __workletsModuleProxy.synchronizableGetDirty(closure_1);
      arg0.getBlocking = () => __workletsModuleProxy.synchronizableGetBlocking(closure_1);
      function setBlockingValue(arg0) {

      }
      arg0.setBlocking = (fn) => {
        if (typeof fn === "function") {
          closure_1.lock();
          const tmp9 = fn(closure_1.getBlocking());
          if (typeof setBlockingValue === "function") {
            let tmp12 = tmp9;
            const synchronizableSetBlocking2 = __workletsModuleProxy.synchronizableSetBlocking;
            if (!closure_0) {
              tmp12 = fn(tmp9);
            }
            const result = synchronizableSetBlocking2(obj, tmp12);
            closure_1.unlock();
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        } else if (typeof setBlockingValue === "function") {
          let tmp4 = fn;
          const synchronizableSetBlocking = __workletsModuleProxy.synchronizableSetBlocking;
          const tmp2 = closure_1;
          if (!closure_0) {
            tmp4 = fn(fn);
          }
          const result1 = synchronizableSetBlocking(tmp2, tmp4);
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      };
      arg0.lock = () => {
        __workletsModuleProxy.synchronizableLock(closure_1);
      };
      arg0.unlock = () => {
        __workletsModuleProxy.synchronizableUnlock(closure_1);
      };
      if (arg1) {
        arg0.setDirty = (arg0) => {
          const result = __workletsModuleProxy.synchronizableSetDirty(closure_1, arg0);
        };
      }
      return arg0;
    };
  }
  fn = registerCustomSerializable.createSerializable;
}
installSynchronizableUnpacker.__workletHash = 12690540999576;
installSynchronizableUnpacker.__initData = tmp2;

export { installSynchronizableUnpacker };
