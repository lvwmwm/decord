// Module ID: 5493
// Function ID: 46874
// Name: addListener
// Dependencies: []
// Exports: addListener, removeAllListeners

// Module 5493 (addListener)
const _module = require(dependencyMap[0]);
const TurboModuleRegistry = _module.TurboModuleRegistry;
const enforcing = TurboModuleRegistry.getEnforcing("RNCClipboard");
const nativeEventEmitter = new _module.NativeEventEmitter(enforcing);
const listenerCount = nativeEventEmitter.listenerCount;
let listenerCount2 = listenerCount;
if (listenerCount) {
  const listenerCount3 = nativeEventEmitter.listenerCount;
  listenerCount2 = listenerCount3.bind(nativeEventEmitter);
} else {
  listenerCount2 = function listenerCount(arg0) {
    return nativeEventEmitter.listeners(arg0).length;
  };
}

export default enforcing;
export const addListener = function addListener(arg0) {
  if (0 === listenerCount2("RNCClipboard_TEXT_CHANGED")) {
    enforcing.setListener();
  }
  const addListenerResult = nativeEventEmitter.addListener("RNCClipboard_TEXT_CHANGED", arg0);
  addListenerResult._remove = addListenerResult.remove;
  addListenerResult.remove = function() {
    this._remove();
    if (0 === callback("RNCClipboard_TEXT_CHANGED")) {
      closure_0.removeListener();
    }
  };
  return addListenerResult;
};
export const removeAllListeners = function removeAllListeners() {
  nativeEventEmitter.removeAllListeners("RNCClipboard_TEXT_CHANGED");
  enforcing.removeListener();
};
