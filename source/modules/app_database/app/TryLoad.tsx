// Module ID: 1901
// Function ID: 21344
// Name: _tryLoadAsync
// Dependencies: [5, 3, 686, 2]
// Exports: tryLoad, tryLoadAsync, tryLoadOrResetCacheGateway, tryLoadOrResetCacheGatewayAsync

// Module 1901 (_tryLoadAsync)
import asyncGeneratorStep from "asyncGeneratorStep";
import importDefaultResult from "set";

async function _tryLoadAsync(arg0, arg1) {
  return yield arg0();
}
async function _tryLoadOrResetCacheGatewayAsync(arg0, arg1, arg2, arg3) {
  return yield arg1();
}
importDefaultResult = new importDefaultResult("TryLoad");
const result = require("dispatcher").fileFinishedImporting("modules/app_database/app/TryLoad.tsx");

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
