// Module ID: 1834
// Function ID: 1835
// Name: mappersNative
// Dependencies: [1769, 1705]
// Exports: startMapper, stopMapper

// Module 1834 (mappersNative)
import _mod1705 from "module_1705" /* 1705 */;
import _mod1769 from "module_1769" /* 1769 */;

const require = globalThis.__r;
let _require, c3, dependencyMap, map, set;

let tmp2;
let tmp3;
let items = [{ code: "(function createMapperRegistry_Pnpm_mappersNativeTs1(){let[isSharedValue]=this.__closure;const mappers=new Map();let sortedMappers=[];let processingMappers=false;function updateMappersOrder(){const pre=new Map();mappers.forEach(function(mapper){if(mapper.outputs){for(const output of mapper.outputs){const preMappers=pre.get(output);if(preMappers===undefined){pre.set(output,[mapper]);}else{preMappers.push(mapper);}}}});const visited=new Set();const newOrder=[];function dfs(mapper){visited.add(mapper);for(const input of mapper.inputs){const preMappers=pre.get(input);if(preMappers){for(const preMapper of preMappers){if(!visited.has(preMapper)){dfs(preMapper);}}}}newOrder.push(mapper);}mappers.forEach(function(mapper){if(!visited.has(mapper)){dfs(mapper);}});sortedMappers=newOrder;}let mapperRunFinalizers=[];global.__requestMapperRunFinalizer=function(finalizer){mapperRunFinalizers.push(finalizer);};let isAnyMapperDirty=false;function mapperRun(){if(processingMappers){return;}try{processingMappers=true;if(mappers.size!==sortedMappers.length){updateMappersOrder();}if(isAnyMapperDirty){isAnyMapperDirty=false;for(const mapper of sortedMappers){if(mapper.dirty){mapper.dirty=false;mapper.worklet();}}}}finally{processingMappers=false;const finalizers=mapperRunFinalizers;mapperRunFinalizers=[];for(const finalizer of finalizers){finalizer();}}}const schedulingFunction=globalThis.requestAnimationFrameFinalizer;function scheduledMapperRun(){mapperRun();schedulingFunction(scheduledMapperRun);}schedulingFunction(scheduledMapperRun);global.__mapperRun=mapperRun;function extractInputs(inputs,resultArray){if(Array.isArray(inputs)){for(const input of inputs){if(input){extractInputs(input,resultArray);}}}else if(isSharedValue(inputs)){resultArray.push(inputs);}else if(Object.getPrototypeOf(inputs)===Object.prototype){for(const element of Object.values(inputs)){if(element){extractInputs(element,resultArray);}}}return resultArray;}return{start:function(mapperID,worklet,inputs,outputs){const mapper={id:mapperID,dirty:true,worklet:worklet,inputs:extractInputs(inputs,[]),outputs:outputs};mappers.set(mapper.id,mapper);sortedMappers=[];isAnyMapperDirty=true;for(const sv of mapper.inputs){sv.addListener(mapper.id,function(){mapper.dirty=true;isAnyMapperDirty=true;});}},stop:function(mapperID){const mapper=mappers.get(mapperID);if(mapper){mappers.delete(mapper.id);sortedMappers=[];isAnyMapperDirty=true;for(const sv of mapper.inputs){sv.removeListener(mapper.id);}}}};})" }, _mod1769.isSharedValue];
let c0;
[tmp2, tmp3] = items;
function createMapperRegistry() {
  function updateMappersOrder() {
    function dfs(item) {
      set.add(item);
      const tmp2 = item.inputs[Symbol.iterator]();
      while (tmp2 !== undefined) {
        let value = map.get(tmp3);
        if (value) {
          for (const item10022 of value) {
            let tmp9 = item10022;
            if (!set.has(item10022)) {
              let tmp13 = dfs(tmp9);
            }
            continue;
          }
        }
        continue;
      }
      items.push(item);
    }
    map = new Map();
    const item = map.forEach((outputs) => {
      if (outputs.outputs) {
        outputs = outputs.outputs;
        for (const item10009 of outputs) {
          let obj = map;
          let tmp3 = item10009;
          let value = map.get(item10009);
          let arr = value;
          if (undefined === value) {
            items = [outputs];
            let result = obj.set(tmp3, items);
          } else {
            let arr2 = arr.push(outputs);
          }
          continue;
        }
      }
    });
    set = new Set();
    let items = [];
    const item1 = map.forEach((item) => {
      if (!set.has(item)) {
        dfs(item);
      }
    });
    let closure_1 = items;
  }
  function mapperRun() {
    const tmp = c2;
    if (!tmp) {
      try {
        c2 = true;
        if (map.size !== length.length) {
          updateMappersOrder();
        }
        const tmp6 = c5;
        if (tmp6) {
          c5 = false;
          for (const item10017 of length) {
            let obj = item10017;
            if (item10017.dirty) {
              obj.dirty = false;
              let workletResult = obj.worklet();
            }
            continue;
          }
        }
        c2 = false;
        closure_4 = [];
        for (const item10031 of closure_4) {
          let item10031Result = item10031();
          continue;
        }
      } catch (tmp14) {
        c2 = false;
        closure_4 = [];
        for (const item10042 of closure_4) {
          let item10042Result = item10042();
          continue;
        }
        throw tmp14;
      }
    }
  }
  function extractInputs(arg0, items) {
    if (Array.isArray(arg0)) {
      const iter = arg0[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        if (nextResult) {
          let tmp17 = extractInputs(tmp14, items);
        }
        continue;
      }
    } else if (map(arg0)) {
      items.push(arg0);
    } else {
      const _Object = Object;
      const _Object2 = Object;
      if (Object.getPrototypeOf(arg0) === Object.prototype) {
        const _Object3 = Object;
        const values = Object.values(arg0);
        const iter2 = values[Symbol.iterator]();
        const nextResult1 = iter2.next();
        while (iter2 !== undefined) {
          if (nextResult1) {
            let tmp8 = extractInputs(tmp5, items);
          }
          continue;
        }
      }
    }
    return items;
  }
  map = new Map();
  const length = [];
  let c2 = false;
  let closure_4 = [];
  c0.__requestMapperRunFinalizer = (arg0) => {
    closure_4.push(arg0);
  };
  let c5 = false;
  function scheduledMapperRun() {
    mapperRun();
    requestAnimationFrameFinalizer(scheduledMapperRun);
  }
  const animationFrameFinalizer = requestAnimationFrameFinalizer(scheduledMapperRun);
  c0.__mapperRun = mapperRun;
  let obj = {
    start(id, worklet, arg2, outputs) {
      let items;
      const obj = { id, dirty: true, worklet, inputs: items, outputs };
      items = [];
      extractInputs(arg2, items);
      const result = obj.set(obj.id, obj);
      let closure_1 = [];
      c5 = true;
      const inputs = obj.inputs;
      for (const item10020 of inputs) {
        let addListenerResult = item10020.addListener(obj.id, () => {
          obj.dirty = true;
          c5 = true;
        });
        continue;
      }
    },
    stop(arg0) {
      const value = map.get(arg0);
      const obj = map;
      if (value) {
        obj.delete(value.id);
        let closure_1 = [];
        c5 = true;
        const inputs = value.inputs;
        for (const item10014 of inputs) {
          let removeListenerResult = item10014.removeListener(value.id);
          continue;
        }
      }
    }
  };
  return obj;
}
let items1 = [tmp3];
createMapperRegistry.__closure = items1;
createMapperRegistry.__workletHash = 9099712030889;
createMapperRegistry.__initData = tmp2;
let c4 = 9999;
let closure_5 = { code: "(function pnpm_mappersNativeTs2(){let[createMapperRegistry,mapperID,worklet,inputs,outputs]=this.__closure;let mapperRegistry=global.__mapperRegistry;if(mapperRegistry===undefined){mapperRegistry=global.__mapperRegistry=createMapperRegistry();}mapperRegistry.start(mapperID,worklet,inputs,outputs);})" };
let closure_6 = { code: "(function pnpm_mappersNativeTs3(){let[mapperID]=this.__closure;const mapperRegistry=global.__mapperRegistry;mapperRegistry===null||mapperRegistry===void 0||mapperRegistry.stop(mapperID);})" };

export function startMapper(pnpm_InlinePropManagerTs2, __closure, items2) {
  let _undefined;
  let c1;
  let c2;
  let tmp2;
  let tmp3;
  let tmp4;
  let tmp5;
  let tmp6;
  let tmp7;
  let items = __closure;
  if (__closure === undefined) {
    items = [];
  }
  let items1 = items2;
  if (items2 === undefined) {
    items1 = [];
  }
  const sum = c4 + 1;
  items2 = [closure_5, c3, sum, pnpm_InlinePropManagerTs2, items, items1];
  let c0;
  const obj = require("module_1705");
  _require = undefined;
  dependencyMap = undefined;
  c3 = undefined;
  c4 = undefined;
  [tmp2, tmp3, tmp4, tmp5, tmp6, tmp7] = items2;
  function pnpm_mappersNativeTs2() {
    let __mapperRegistry = global.__mapperRegistry;
    if (undefined === __mapperRegistry) {
      const tmp3 = _undefined();
      tmp.__mapperRegistry = tmp3;
      __mapperRegistry = tmp3;
    }
    __mapperRegistry.start(c1, c2, c3, c4);
  }
  const items3 = [tmp3, tmp4, tmp5, tmp6, tmp7];
  pnpm_mappersNativeTs2.__closure = items3;
  pnpm_mappersNativeTs2.__workletHash = 4992448497009;
  pnpm_mappersNativeTs2.__initData = tmp2;
  obj.scheduleOnUI(pnpm_mappersNativeTs2);
  return sum;
}
export function stopMapper(_inlinePropsMapperId) {
  let tmp;
  let tmp2;
  const items = [closure_6, _inlinePropsMapperId];
  let c0;
  [tmp, tmp2] = items;
  function pnpm_mappersNativeTs3() {
    const __mapperRegistry = global.__mapperRegistry;
    if (__mapperRegistry != null) {
      __mapperRegistry.stop(c0);
    }
  }
  const items1 = [tmp2];
  pnpm_mappersNativeTs3.__closure = items1;
  pnpm_mappersNativeTs3.__workletHash = 1973126588125;
  pnpm_mappersNativeTs3.__initData = tmp;
  const obj = _mod1705;
  obj.scheduleOnUI(pnpm_mappersNativeTs3);
}
