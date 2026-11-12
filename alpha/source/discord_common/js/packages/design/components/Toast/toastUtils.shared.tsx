// Module ID: 5954
// Function ID: 5955
// Dependencies: [5254, 1259, 2]
// Exports: popToast, showToast

// Module 5954
import module_5254 from "module_5254" /* 5254 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, map, map1, map2;

let c2 = 1;
const useToastStore = module_5254.create(() => {
  const obj = { currentToastMap: new Map(), queuedToastsMap: new Map() };
  new Map();
  new Map();
  return obj;
});
let result = size.fileFinishedImporting("../discord_common/js/packages/design/components/Toast/toastUtils.shared.tsx");

export { useToastStore };
export function showToast(surface) {
  _require = surface;
  let str;
  if (surface != null) {
    str = surface.surface;
  }
  if (str == null) {
    str = "app";
  }
  let obj = { toast: surface, key: null };
  const tmp = +obj;
  obj = tmp + 1;
  obj.key = tmp;
  let obj2 = require("react-native");
  obj2.batchUpdates(() => {
    let toastKey;
    obj.setState(function(currentToastMap) {
      currentToastMap = currentToastMap.currentToastMap;
      const value = currentToastMap.get(str);
      if (null != value) {
        const _Map = Map;
        const self2 = this;
        const self = this;
        map = new Map(currentToastMap.queuedToastsMap);
        let value2 = map.get(tmp);
        if (value2 == null) {
          value2 = [];
        }
        const items = [];
        HermesBuiltin.arraySpread(items, value2, 0);
        let num3 = -1;
        if (null != toastKey.toastKey) {
          num3 = items.findIndex((toast) => toast.toast.toastKey === toastKey.toastKey);
        }
        if (-1 === num3) {
          items.push(closure_1_2);
        } else {
          items[num3] = closure_1_2;
        }
        const result = map.set(tmp, items);
        obj = { queuedToastsMap: map };
        const merged = Object.assign(currentToastMap);
        return obj;
      }
      map1 = new Map(currentToastMap.currentToastMap);
      const result1 = map1.set(tmp, closure_1_2);
      const obj2 = { currentToastMap: map1 };
      const merged1 = Object.assign(currentToastMap);
      return obj2;
    });
  });
}
export function popToast(arg0) {
  let str = arg0;
  if (arg0 === undefined) {
    str = "app";
  }
  let obj = str(1259);
  obj.batchUpdates(() => {
    let obj;
    obj.setState(function(queuedToastsMap) {
      queuedToastsMap = queuedToastsMap.queuedToastsMap;
      let items = queuedToastsMap.get(str);
      if (items == null) {
        items = [];
      }
      if (0 === items.length) {
        const _Map = Map;
        const self = this;
        const self2 = this;
        map = new Map(queuedToastsMap.currentToastMap);
        map.delete(str);
        const obj2 = { currentToastMap: map };
        const merged = Object.assign(queuedToastsMap);
        return obj2;
      } else {
        const _Map2 = Map;
        const self3 = this;
        const self4 = this;
        map1 = new Map(queuedToastsMap.currentToastMap);
        const _Map3 = Map;
        const self5 = this;
        const self6 = this;
        map2 = new Map(queuedToastsMap.queuedToastsMap);
        let value2 = map2.get(tmp);
        if (value2 == null) {
          value2 = [];
        }
        const result = map1.set(tmp, value2[0]);
        const result1 = map2.set(tmp, value2.slice(1));
        const obj = { currentToastMap: map1, queuedToastsMap: map2 };
        const merged1 = Object.assign(queuedToastsMap);
        return obj;
      }
    });
  });
}
