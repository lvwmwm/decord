// Module ID: 203
// Function ID: 2893
// Name: SymbolResult1
// Dependencies: [202]

// Module 203 (SymbolResult1)
const require = arg1;
const dependencyMap = arg6;
const SymbolResult1 = Symbol("EventTarget[dispatch]");
arg5.EVENT_TARGET_GET_THE_PARENT_KEY = Symbol("EventTarget[get the parent]");
arg5.INTERNAL_DISPATCH_METHOD_KEY = SymbolResult1;
arg5.dispatchTrustedEvent = function dispatchTrustedEvent(self, defaultPrevented) {
  require(202) /* SymbolResult1 */.setIsTrusted(defaultPrevented, true);
  return self[SymbolResult1](defaultPrevented);
};
