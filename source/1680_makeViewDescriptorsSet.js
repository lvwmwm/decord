// Module ID: 1680
// Function ID: 18616
// Name: makeViewDescriptorsSet
// Dependencies: []

// Module 1680 (makeViewDescriptorsSet)
let closure_2 = { code: "function pnpm_ViewDescriptorsSetTs1(descriptors){const{item,updater}=this.__closure;var _updater;const index=descriptors.findIndex(function(descriptor){return descriptor.tag===item.tag;});if(index!==-1){descriptors[index]=item;}else{descriptors.push(item);}(_updater=updater)===null||_updater===void 0||_updater(true);return descriptors;}" };
let closure_3 = { code: "function pnpm_ViewDescriptorsSetTs2(descriptors){const{viewTag}=this.__closure;const index=descriptors.findIndex(function(descriptor){return descriptor.tag===viewTag;});if(index!==-1){descriptors.splice(index,1);}return descriptors;}" };
arg5.makeViewDescriptorsSet = function makeViewDescriptorsSet() {
  let obj = arg1(arg6[0]);
  const mutable = obj.makeMutable([]);
  const arg1 = mutable;
  const arg6 = new Set();
  obj = {
    shareableViewDescriptors: mutable,
    add(item, current) {
      const mutable = item;
      current.add(item.tag);
      current = undefined;
      if (null != current) {
        current = current.current;
      }
      /* worklet (recovered source) */ function pnpm_ViewDescriptorsSetTs1(descriptors){const{item,updater}=this.__closure;var _updater;const index=descriptors.findIndex(function(descriptor){return descriptor.tag===item.tag;});if(index!==-1){descriptors[index]=item;}else{descriptors.push(item);}(_updater=updater)===null||_updater===void 0||_updater(true);return descriptors;}
      const obj = { item, updater: current };
      pnpm_ViewDescriptorsSetTs1.__closure = obj;
      pnpm_ViewDescriptorsSetTs1.__workletHash = 1368679644593;
      pnpm_ViewDescriptorsSetTs1.__initData = closure_2;
      mutable.modify(pnpm_ViewDescriptorsSetTs1, false);
    },
    remove(viewTag) {
      const mutable = viewTag;
      set.delete(viewTag);
      /* worklet (recovered source) */ function pnpm_ViewDescriptorsSetTs2(descriptors){const{viewTag}=this.__closure;const index=descriptors.findIndex(function(descriptor){return descriptor.tag===viewTag;});if(index!==-1){descriptors.splice(index,1);}return descriptors;}
      pnpm_ViewDescriptorsSetTs2.__closure = { viewTag };
      pnpm_ViewDescriptorsSetTs2.__workletHash = 5508648561577;
      pnpm_ViewDescriptorsSetTs2.__initData = closure_3;
      mutable.modify(pnpm_ViewDescriptorsSetTs2, false);
    },
    has(arg0) {
      return set.has(arg0);
    }
  };
  return obj;
};
