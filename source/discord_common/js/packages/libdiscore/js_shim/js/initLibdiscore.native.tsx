// Module ID: 1847
// Function ID: 20260
// Name: _initLibdiscore
// Dependencies: []
// Exports: initLibdiscore, isLibdiscoreInitialized

// Module 1847 (_initLibdiscore)
async function _initLibdiscore() {
  return obj ? obj.resume() : undefined;
}
let closure_0 = importDefault(dependencyMap[0]);
const NativeModules = arg1(dependencyMap[1]).NativeModules;
const result = importAll(dependencyMap[2]).registerTimerPolyfills();
const importAllResult = importAll(dependencyMap[2]);
const result1 = arg1(dependencyMap[3]).fileFinishedImporting("../discord_common/js/packages/libdiscore/js_shim/js/initLibdiscore.native.tsx");

export const isLibdiscoreInitialized = function isLibdiscoreInitialized() {
  return undefined !== NativeModules.LibDiscoreModule;
};
export const initLibdiscore = function initLibdiscore() {
  return _initLibdiscore(...arguments);
};
