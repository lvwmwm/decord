// Module ID: 202
// Function ID: 2876
// Name: SymbolResult1
// Dependencies: []

// Module 202 (SymbolResult1)
const SymbolResult = Symbol("composedPath");
const SymbolResult1 = Symbol("currentTarget");
const SymbolResult2 = Symbol("eventPhase");
const SymbolResult3 = Symbol("inPassiveListenerFlag");
const SymbolResult4 = Symbol("isTrusted");
const SymbolResult5 = Symbol("stopPropagationFlag");
const SymbolResult6 = Symbol("stopPropagationFlag");
const SymbolResult7 = Symbol("target");
arg5.COMPOSED_PATH_KEY = SymbolResult;
arg5.CURRENT_TARGET_KEY = SymbolResult1;
arg5.EVENT_PHASE_KEY = SymbolResult2;
arg5.IN_PASSIVE_LISTENER_FLAG_KEY = SymbolResult3;
arg5.IS_TRUSTED_KEY = SymbolResult4;
arg5.STOP_IMMEDIATE_PROPAGATION_FLAG_KEY = SymbolResult5;
arg5.STOP_PROPAGATION_FLAG_KEY = SymbolResult6;
arg5.TARGET_KEY = SymbolResult7;
arg5.getCurrentTarget = function getCurrentTarget(arg0) {
  return arg0[SymbolResult1];
};
arg5.setCurrentTarget = function setCurrentTarget(arg0, arg1) {
  arg0[SymbolResult1] = arg1;
};
arg5.getComposedPath = function getComposedPath(arg0) {
  return arg0[closure_0];
};
arg5.setComposedPath = function setComposedPath(arg0, items) {
  arg0[closure_0] = items;
};
arg5.getEventPhase = function getEventPhase(arg0) {
  return arg0[SymbolResult2];
};
arg5.setEventPhase = function setEventPhase(arg0, BUBBLING_PHASE) {
  arg0[SymbolResult2] = BUBBLING_PHASE;
};
arg5.getInPassiveListenerFlag = function getInPassiveListenerFlag(self) {
  return self[SymbolResult3];
};
arg5.setInPassiveListenerFlag = function setInPassiveListenerFlag(arg0, arg1) {
  arg0[SymbolResult3] = arg1;
};
arg5.getIsTrusted = function getIsTrusted(arg0) {
  return arg0[SymbolResult4];
};
arg5.setIsTrusted = function setIsTrusted(defaultPrevented, arg1) {
  defaultPrevented[SymbolResult4] = arg1;
};
arg5.getStopImmediatePropagationFlag = function getStopImmediatePropagationFlag(arg0) {
  return arg0[SymbolResult5];
};
arg5.setStopImmediatePropagationFlag = function setStopImmediatePropagationFlag(arg0, arg1) {
  arg0[SymbolResult5] = arg1;
};
arg5.getStopPropagationFlag = function getStopPropagationFlag(arg0) {
  return arg0[SymbolResult6];
};
arg5.setStopPropagationFlag = function setStopPropagationFlag(arg0, arg1) {
  arg0[SymbolResult6] = arg1;
};
arg5.getTarget = function getTarget(arg0) {
  return arg0[SymbolResult7];
};
arg5.setTarget = function setTarget(arg0, arg1) {
  arg0[SymbolResult7] = arg1;
};
