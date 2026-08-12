// Module ID: 4023
// Function ID: 4024
// Name: getBraintreeSDK
// Dependencies: [4024, 676, 4025, 4028, 2007, 4028, 2]
// Exports: collectDeviceData, getBraintreeSDK

// Module 4023 (getBraintreeSDK)
import getClient from "getClient";
import { PaymentSettings } from "ME";

const require = arg1;
const result = require("module_4025").fileFinishedImporting("utils/BraintreeUtils.tsx");

export const getBraintreeSDK = function getBraintreeSDK() {
  let obj = require(4025);
  obj = {
    createPromise() {
      return callback(paths[4])(paths[3], paths.paths);
    },
    webpackId: 4028
  };
  return obj.importWithRetry(obj).then((arg0) => arg0.default);
};
export const collectDeviceData = function collectDeviceData() {
  client = client.getClient();
  if (null == client) {
    let obj = { createPromise: null, webpackId: null };
    obj[0] = function createPromise() {
      return callback(paths[4])(paths[3], paths.paths);
    };
    obj[1] = 4028;
    const obj3 = client(4025);
    let importWithRetryResult = client(4025).importWithRetry(obj);
    let nextPromise1 = client(4025).importWithRetry(obj).then((arg0) => arg0.default).then((client) => {
      client = client.client;
      let obj = { authorization: constants.BRAINTREE.KEY };
      obj = client.create(obj);
      return obj.then((arg0) => {
        const callback = arg0;
        let obj = callback(4025);
        obj = {
          createPromise() {
            return callback(paths[4])(paths[3], paths.paths);
          },
          webpackId: 4028
        };
        const importWithRetryResult = obj.importWithRetry(obj);
        return obj.importWithRetry(obj).then((arg0) => arg0.default).then((dataCollector) => {
          dataCollector = dataCollector.dataCollector;
          let obj = { client: closure_0 };
          obj = dataCollector.create(obj);
          return obj.then((deviceData) => deviceData.deviceData).catch(() => null);
        });
      }).catch(() => null);
    });
    const nextPromise = client(4025).importWithRetry(obj).then((arg0) => arg0.default);
  } else {
    obj = client(4025);
    obj = { createPromise: null, webpackId: null };
    obj[0] = function createPromise() {
      return callback(paths[4])(paths[3], paths.paths);
    };
    obj[1] = 4028;
    const importWithRetryResult1 = obj.importWithRetry(obj);
    nextPromise1 = obj.importWithRetry(obj).then((arg0) => arg0.default).then((dataCollector) => {
      dataCollector = dataCollector.dataCollector;
      let obj = { client: closure_0 };
      obj = dataCollector.create(obj);
      return obj.then((deviceData) => deviceData.deviceData).catch(() => null);
    });
    const nextPromise2 = obj.importWithRetry(obj).then((arg0) => arg0.default);
  }
  return nextPromise1;
};
