// Module ID: 1826
// Function ID: 1827
// Name: ViewDescriptorsSet
// Dependencies: [1827]
// Exports: makeViewDescriptorsSet

// Module 1826 (ViewDescriptorsSet)
let set;

let closure_2 = { code: "(function pnpm_ViewDescriptorsSetTs1(descriptors){let[item,updater]=this.__closure;var _updater;const index=descriptors.findIndex(function(descriptor){return descriptor.tag===item.tag;});if(index!==-1){descriptors[index]=item;}else{descriptors.push(item);}(_updater=updater)===null||_updater===void 0||_updater(true);return descriptors;})" };
let closure_3 = { code: "(function pnpm_ViewDescriptorsSetTs2(descriptors){let[viewTag]=this.__closure;const index=descriptors.findIndex(function(descriptor){return descriptor.tag===viewTag;});if(index!==-1){descriptors.splice(index,1);}return descriptors;})" };

export function makeViewDescriptorsSet() {
  let mutable;
  const obj = mutable(set[0]);
  mutable = obj.makeMutable([]);
  set = new Set();
  return {
    shareableViewDescriptors: mutable,
    add(tag, current) {
      let tmp3;
      let tmp4;
      let tmp5;
      set.add(tag.tag);
      current = undefined;
      if (current != null) {
        current = current.current;
      }
      const items = [closure_2, tag, current];
      let c0;
      let c1;
      [tmp3, tmp4, tmp5] = items;
      function pnpm_ViewDescriptorsSetTs1(arr) {
        let tag;
        const findIndexResult = arr.findIndex((tag) => tag.tag === tag.tag);
        if (-1 !== findIndexResult) {
          arr[findIndexResult] = c0;
        } else {
          arr.push(c0);
        }
        if (c1 != null) {
          tmp5(true);
        }
        return arr;
      }
      const items1 = [tmp4, tmp5];
      pnpm_ViewDescriptorsSetTs1.__closure = items1;
      pnpm_ViewDescriptorsSetTs1.__workletHash = 7481939312552;
      pnpm_ViewDescriptorsSetTs1.__initData = tmp3;
      mutable.modify(pnpm_ViewDescriptorsSetTs1, false);
    },
    remove(arg0) {
      let tmp2;
      let tmp3;
      set.delete(arg0);
      const items = [closure_3, arg0];
      let c0;
      [tmp2, tmp3] = items;
      function pnpm_ViewDescriptorsSetTs2(arr) {
        const findIndexResult = arr.findIndex((tag) => tag.tag === closure_1_0);
        if (-1 !== findIndexResult) {
          arr.splice(findIndexResult, 1);
        }
        return arr;
      }
      const items1 = [tmp3];
      pnpm_ViewDescriptorsSetTs2.__closure = items1;
      pnpm_ViewDescriptorsSetTs2.__workletHash = 13805714304784;
      pnpm_ViewDescriptorsSetTs2.__initData = tmp2;
      mutable.modify(pnpm_ViewDescriptorsSetTs2, false);
    },
    has(arg0) {
      return set.has(arg0);
    }
  };
}
