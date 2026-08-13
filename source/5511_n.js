// Module ID: 5511
// Function ID: 5512
// Name: n
// Dependencies: [5498, 5496]

// Module 5511 (n)
const require = arg1;
const module = arg2;
let dependencyMap = arg6;
let obj = {
  createGestureHandler(closure_0, handlerTag, config) {
    const _require = closure_0;
    let closure_1 = handlerTag;
    const dependencyMap = config;
    const result = _require(5498).scheduleOperationToBeFlushed(() => {
      let obj = handlerTag(table[1]);
      obj = table;
      if (!table) {
        obj = {};
      }
      obj.createGestureHandler(closure_0, handlerTag, obj);
    });
  },
  setGestureHandlerConfig(handlerTag, closure_1) {
    const _require = handlerTag;
    let result = _require(5498).scheduleOperationToBeFlushed(() => {
      const result = callback(outer1_2[1]).setGestureHandlerConfig(closure_0, callback);
    });
  },
  updateGestureHandlerConfig: null,
  dropGestureHandler: null,
  configureRelations: null,
  installUIRuntimeBindings: null
};
const fn = function n(arg0, arg1) {
  const result = module(5496).updateGestureHandlerConfig(arg0, arg1);
  const obj = module(5496);
  module(5496).flushOperations();
};
obj = { updateGestureHandlerConfig: require("RNGestureHandlerModule").updateGestureHandlerConfig, flushOperations: require("RNGestureHandlerModule").flushOperations };
fn.__closure = obj;
fn.__workletHash = 12442858879797;
fn.__initData = { code: "function pnpm_NativeProxyTs1(handlerTag,newConfig){const{updateGestureHandlerConfig,flushOperations}=this.__closure;updateGestureHandlerConfig(handlerTag,newConfig);flushOperations();}" };
obj[2] = fn;
obj[3] = function dropGestureHandler(handlerTag) {
  const _require = handlerTag;
  const result = _require(5498).scheduleOperationToBeFlushed(() => {
    outer1_1(outer1_2[1]).dropGestureHandler(closure_0);
  });
};
obj[4] = function configureRelations(arg0, arg1) {
  const _require = arg0;
  let closure_1 = arg1;
  const result = _require(5498).scheduleOperationToBeFlushed(() => {
    callback(outer1_2[1]).configureRelations(closure_0, callback);
  });
};
obj[5] = function installUIRuntimeBindings() {
  return module(5496).installUIRuntimeBindings();
};
arg5.NativeProxy = obj;
