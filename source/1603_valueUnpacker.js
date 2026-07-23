// Module ID: 1603
// Function ID: 17828
// Name: valueUnpacker
// Dependencies: []

// Module 1603 (valueUnpacker)
const global = arg0;
let closure_1 = { code: "function valueUnpacker_Pnpm_valueUnpackerTs1(objectToUnpack,category,remoteFunctionName){let workletsCache=global.__workletsCache;let handleCache=global.__handleCache;if(workletsCache===undefined){workletsCache=global.__workletsCache=new Map();handleCache=global.__handleCache=new WeakMap();}const workletHash=objectToUnpack.__workletHash;if(workletHash!==undefined){let workletFun=workletsCache.get(workletHash);if(workletFun===undefined){const initData=objectToUnpack.__initData;if(global.evalWithSourceMap){workletFun=global.evalWithSourceMap('('+initData.code+'\\n)',initData.location,initData.sourceMap);}else if(global.evalWithSourceUrl){workletFun=global.evalWithSourceUrl('('+initData.code+'\\n)',\"worklet_\"+workletHash);}else{workletFun=eval('('+initData.code+'\\n)');}workletsCache.set(workletHash,workletFun);}const functionInstance=workletFun.bind(objectToUnpack);objectToUnpack._recur=functionInstance;return functionInstance;}else if(objectToUnpack.__init!==undefined){let value=handleCache.get(objectToUnpack);if(value===undefined){value=objectToUnpack.__init();handleCache.set(objectToUnpack,value);}return value;}else if(category==='RemoteFunction'){const fun=function(){const label=remoteFunctionName?\"function `\"+remoteFunctionName+\"`\":'anonymous function';throw new Error(\"[Reanimated] Tried to synchronously call a non-worklet \"+label+\" on the UI thread.\\nSee https://docs.swmansion.com/react-native-reanimated/docs/guides/troubleshooting#tried-to-synchronously-call-a-non-worklet-function-on-the-ui-thread for more details.\");};fun.__remoteFunction=objectToUnpack;return fun;}else{throw new Error(\"[Reanimated] Data type in category \\\"\"+category+\"\\\" not recognized by value unpacker: \\\"\"+_toString(objectToUnpack)+\"\\\".\");}}" };
let closure_2 = (() => {
  function valueUnpacker(__workletHash) {
    let __handleCache;
    let __workletsCache;
    let closure_0 = arg2;
    ({ __workletsCache, __handleCache } = outer1_0);
    if (undefined === __workletsCache) {
      const _Map = Map;
      const map = new Map();
      outer1_0.__workletsCache = map;
      const _WeakMap = WeakMap;
      const weakMap = new WeakMap();
      outer1_0.__handleCache = weakMap;
      __workletsCache = map;
      __handleCache = weakMap;
    }
    __workletHash = __workletHash.__workletHash;
    if (undefined !== __workletHash) {
      let value = __workletsCache.get(__workletHash);
      if (undefined !== value) {
        const bindResult = value.bind(__workletHash);
        __workletHash._recur = bindResult;
        return bindResult;
      } else {
        let __initData = __workletHash.__initData;
        if (outer1_0.evalWithSourceMap) {
          let evalWithSourceMapResult = obj2.evalWithSourceMap(`(${__initData.code}
    )`, __initData.location, __initData.sourceMap);
        } else if (obj2.evalWithSourceUrl) {
          const _HermesInternal2 = HermesInternal;
          const text = `(${__initData.code}`;
          evalWithSourceMapResult = outer1_0.evalWithSourceUrl(`${`(${__initData.code}`}
    )`, "worklet_" + __workletHash);
        } else {
          evalWithSourceMapResult = `${"(" + __initData.code}
    )`;
          // DirectEval (0x5e)
        }
        __initData = __workletsCache.set(__workletHash, evalWithSourceMapResult);
      }
    } else if (undefined !== __workletHash.__init) {
      value = __handleCache.get(__workletHash);
      if (undefined === value) {
        const __initResult = __workletHash.__init();
        const result = __handleCache.set(__workletHash, __initResult);
        value = __initResult;
      }
      return value;
    } else if ("RemoteFunction" === arg1) {
      function fun() {
        let str = "anonymous function";
        if (closure_0) {
          const _HermesInternal = HermesInternal;
          str = "function `" + closure_0 + "`";
        }
        const error = new Error("[Reanimated] Tried to synchronously call a non-worklet " + str + " on the UI thread.\nSee https://docs.swmansion.com/react-native-reanimated/docs/guides/troubleshooting#tried-to-synchronously-call-a-non-worklet-function-on-the-ui-thread for more details.");
        throw error;
      }
      fun.__remoteFunction = __workletHash;
      return fun;
    } else {
      const _Error = Error;
      let _HermesInternal = HermesInternal;
      let error = new Error("[Reanimated] Data type in category \"" + arg1 + "\" not recognized by value unpacker: \"" + globalThis._toString(__workletHash) + "\".");
      throw error;
    }
  }
  valueUnpacker.__closure = {};
  valueUnpacker.__workletHash = 7175751357828;
  valueUnpacker.__initData = closure_1;
  return valueUnpacker;
})();
{}.code = "function pnpm_valueUnpackerTs2(){}";
arg5.getValueUnpackerCode = function getValueUnpackerCode() {
  return __initData.__initData.code;
};
