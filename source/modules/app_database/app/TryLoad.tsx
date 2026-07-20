// Module ID: 1901
// Function ID: 21337
// Name: _tryLoadAsync
// Dependencies: []
// Exports: tryLoad, tryLoadAsync, tryLoadOrResetCacheGateway, tryLoadOrResetCacheGatewayAsync

// Module 1901 (_tryLoadAsync)
async function _tryLoadAsync(arg0, arg1) {
  return yield arg0();
}
async function _tryLoadOrResetCacheGatewayAsync(arg0, arg1, arg2, arg3) {
  return yield arg1();
}
let closure_2 = importDefault(dependencyMap[0]);
let importDefaultResult = importDefault(dependencyMap[1]);
importDefaultResult = new importDefaultResult("TryLoad");
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/app_database/app/TryLoad.tsx");

export const tryLoad = function tryLoad(arg0) {
  return arg0();
};
export const tryLoadAsync = function tryLoadAsync(arg0) {
  return _tryLoadAsync(...arguments);
};
export const tryLoadOrResetCacheGateway = function tryLoadOrResetCacheGateway(arg0, arg1, ensureGuildLoaded) {
  return arg1();
};
export const tryLoadOrResetCacheGatewayAsync = function tryLoadOrResetCacheGatewayAsync(loadChannels, arg1) {
  return _tryLoadOrResetCacheGatewayAsync(...arguments);
};
