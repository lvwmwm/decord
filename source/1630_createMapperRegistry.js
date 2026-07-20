// Module ID: 1630
// Function ID: 18218
// Name: createMapperRegistry
// Dependencies: []
// Exports: startMapper, stopMapper

// Module 1630 (createMapperRegistry)
const _module = require(dependencyMap[0]);
let closure_3 = _module.isJest();
let closure_4 = { code: "function createMapperRegistry_Pnpm_mappersTs1(){const{IS_JEST,isSharedValue}=this.__closure;const mappers=new Map();let sortedMappers=[];let runRequested=false;let processingMappers=false;function updateMappersOrder(){const pre=new Map();mappers.forEach(function(mapper){if(mapper.outputs){for(const output of mapper.outputs){const preMappers=pre.get(output);if(preMappers===undefined){pre.set(output,[mapper]);}else{preMappers.push(mapper);}}}});const visited=new Set();const newOrder=[];function dfs(mapper){visited.add(mapper);for(const input of mapper.inputs){const preMappers=pre.get(input);if(preMappers){for(const preMapper of preMappers){if(!visited.has(preMapper)){dfs(preMapper);}}}}newOrder.push(mapper);}mappers.forEach(function(mapper){if(!visited.has(mapper)){dfs(mapper);}});sortedMappers=newOrder;}function mapperRun(){runRequested=false;if(processingMappers){return;}try{processingMappers=true;if(mappers.size!==sortedMappers.length){updateMappersOrder();}for(const mapper of sortedMappers){if(mapper.dirty){mapper.dirty=false;mapper.worklet();}}}finally{processingMappers=false;}}function maybeRequestUpdates(){if(IS_JEST){mapperRun();}else if(!runRequested){if(processingMappers){requestAnimationFrame(mapperRun);}else{queueMicrotask(mapperRun);}runRequested=true;}}function extractInputs(inputs,resultArray){if(Array.isArray(inputs)){for(const input of inputs){input&&extractInputs(input,resultArray);}}else if(isSharedValue(inputs)){resultArray.push(inputs);}else if(Object.getPrototypeOf(inputs)===Object.prototype){for(const element of Object.values(inputs)){element&&extractInputs(element,resultArray);}}return resultArray;}return{start:function(mapperID,worklet,inputs,outputs){const mapper={id:mapperID,dirty:true,worklet:worklet,inputs:extractInputs(inputs,[]),outputs:outputs};mappers.set(mapper.id,mapper);sortedMappers=[];for(const sv of mapper.inputs){sv.addListener(mapper.id,function(){mapper.dirty=true;maybeRequestUpdates();});}maybeRequestUpdates();},stop:function(mapperID){const mapper=mappers.get(mapperID);if(mapper){mappers.delete(mapper.id);sortedMappers=[];for(const sv of mapper.inputs){sv.removeListener(mapper.id);}}}};}" };
let closure_5 = () => {
  function createMapperRegistry() {
    function updateMappersOrder() {
      function dfs(arg0) {
        items.add(arg0);
        for (const item10010 of tmp2) {
          let tmp3 = closure_0;
          let value = closure_0.get(item10010);
          if (value) {
            let tmp6 = value;
            let tmp7 = tmp5;
            for (const item10019 of value) {
              let tmp9 = closure_1;
              let tmp8 = item10019;
              if (!closure_1.has(item10019)) {
                let tmp10 = closure_3;
                let tmp11 = item10019;
                let tmp12 = closure_3(tmp8);
              }
            }
          }
        }
        items.push(arg0);
      }
      const map = new Map();
      const item = map.forEach((outputs) => {
        if (outputs.outputs) {
          outputs = tmp.outputs;
          for (const item10010 of outputs) {
            let tmp5 = closure_0;
            let tmp4 = item10010;
            let value = closure_0.get(item10010);
            let arr = value;
            if (undefined === value) {
              let tmp10 = closure_0;
              let tmp11 = item10010;
              let tmp12 = arg0;
              let items = [tmp];
              let result = closure_0.set(tmp4, items);
            } else {
              let tmp7 = value;
              let tmp8 = arg0;
              arr = arr.push(tmp);
            }
          }
        }
      });
      let closure_1 = new Set();
      const items = [];
      let closure_2 = items;
      const item1 = map.forEach((arg0) => {
        if (!items.has(arg0)) {
          dfs(arg0);
        }
      });
      closure_1 = items;
    }
    function mapperRun() {
      let closure_2 = false;
      if (!closure_3) {
        closure_3 = true;
        if (map.size !== lib.length) {
          updateMappersOrder();
        }
        for (const item10014 of closure_1) {
          let obj = item10014;
          if (item10014.dirty) {
            let tmp7 = item10014;
            obj.dirty = false;
            let workletResult = obj.worklet();
          }
        }
        closure_3 = false;
      }
    }
    function maybeRequestUpdates() {
      if (closure_3) {
        mapperRun();
      } else if (!closure_2) {
        if (closure_3) {
          const _requestAnimationFrame = requestAnimationFrame;
          const animationFrame = requestAnimationFrame(mapperRun);
        } else {
          const _queueMicrotask = queueMicrotask;
          queueMicrotask(mapperRun);
        }
        closure_2 = true;
      }
    }
    function extractInputs(items, arr) {
      if (Array.isArray(items)) {
        for (const item10034 of arg0) {
          if (item10034) {
            let tmp12 = closure_7;
            let tmp13 = item10034;
            let tmp14 = arg1;
            let tmp15 = closure_7(tmp11, arg1);
          }
        }
      } else {
        if (obj.isSharedValue(items)) {
          arr.push(items);
        } else {
          const _Object = Object;
          const _Object2 = Object;
          if (Object.getPrototypeOf(items) === Object.prototype) {
            const _Object3 = Object;
            const values = Object.values(items);
            for (const item10021 of values) {
              if (item10021) {
                let tmp4 = closure_7;
                let tmp5 = item10021;
                let tmp6 = arg1;
                let tmp7 = closure_7(tmp3, arg1);
              }
            }
          }
        }
        const obj = lib(closure_2[1]);
      }
      return arr;
    }
    const map = new Map();
    let closure_1 = [];
    let closure_2 = false;
    let closure_3 = false;
    return {
      start(id, worklet, items, outputs) {
        const obj = { id, dirty: true, worklet, inputs: extractInputs(items, []), outputs };
        const result = obj.set(obj.id, obj);
        let closure_1 = [];
        for (const item10020 of tmp2) {
          let tmp3 = obj;
          let addListenerResult = item10020.addListener(obj.id, () => {
            obj.dirty = true;
            callback();
          });
        }
        maybeRequestUpdates();
      },
      stop(arg0) {
        const value = map.get(arg0);
        if (value) {
          map.delete(tmp2.id);
          let closure_1 = [];
          const inputs = tmp2.inputs;
          for (const item10016 of inputs) {
            let tmp7 = value;
            let removeListenerResult = item10016.removeListener(tmp2.id);
          }
        }
      }
    };
  }
  createMapperRegistry.__closure = { IS_JEST: closure_3, isSharedValue: require(dependencyMap[1]).isSharedValue };
  createMapperRegistry.__workletHash = 4849129099287;
  createMapperRegistry.__initData = closure_4;
  return createMapperRegistry;
}();
let closure_6 = 9999;
let closure_7 = { code: "function pnpm_mappersTs2(){const{createMapperRegistry,mapperID,worklet,inputs,outputs}=this.__closure;let mapperRegistry=global.__mapperRegistry;if(mapperRegistry===undefined){mapperRegistry=global.__mapperRegistry=createMapperRegistry();}mapperRegistry.start(mapperID,worklet,inputs,outputs);}" };
let closure_8 = { code: "function pnpm_mappersTs3(){const{mapperID}=this.__closure;const mapperRegistry=global.__mapperRegistry;mapperRegistry===null||mapperRegistry===void 0||mapperRegistry.stop(mapperID);}" };

export const startMapper = function startMapper(pnpm_InlinePropManagerTs2, combined, items) {
  const global = pnpm_InlinePropManagerTs2;
  if (arguments.length > 1) {
    if (undefined !== arguments[1]) {
      let items1 = arguments[1];
    }
    const require = items1;
    if (arguments.length > 2) {
      if (undefined !== arguments[2]) {
        items = arguments[2];
      }
      const dependencyMap = items;
      const sum = closure_6 + 1;
      closure_6 = sum;
      let closure_3 = sum;
      let obj = require(dependencyMap[2]);
      /* worklet (recovered source) */ function pnpm_mappersTs2(){const{createMapperRegistry,mapperID,worklet,inputs,outputs}=this.__closure;let mapperRegistry=global.__mapperRegistry;if(mapperRegistry===undefined){mapperRegistry=global.__mapperRegistry=createMapperRegistry();}mapperRegistry.start(mapperID,worklet,inputs,outputs);}
      obj = { createMapperRegistry: closure_5, mapperID: sum, worklet: pnpm_InlinePropManagerTs2, inputs: items1, outputs: items };
      pnpm_mappersTs2.__closure = obj;
      pnpm_mappersTs2.__workletHash = 1517453109481;
      pnpm_mappersTs2.__initData = closure_7;
      obj.runOnUI(pnpm_mappersTs2)();
      return sum;
    }
    items = [];
  }
  items1 = [];
};
export const stopMapper = function stopMapper(_inlinePropsMapperId) {
  const global = _inlinePropsMapperId;
  /* worklet (recovered source) */ function pnpm_mappersTs3(){const{mapperID}=this.__closure;const mapperRegistry=global.__mapperRegistry;mapperRegistry===null||mapperRegistry===void 0||mapperRegistry.stop(mapperID);}
  pnpm_mappersTs3.__closure = { mapperID: _inlinePropsMapperId };
  pnpm_mappersTs3.__workletHash = 1696829263429;
  pnpm_mappersTs3.__initData = closure_8;
  require(dependencyMap[2]).runOnUI(pnpm_mappersTs3)();
};
