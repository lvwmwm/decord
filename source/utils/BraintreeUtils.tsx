// Module ID: 3827
// Function ID: 29669
// Name: getBraintreeSDK
// Dependencies: [3828, 653, 3829, 3832, 1935, 3832, 2]
// Exports: collectDeviceData

// Module 3827 (getBraintreeSDK)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { PaymentSettings } from "ME";

const require = arg1;
function getBraintreeSDK() {
  let obj = require(3829);
  obj = {
    createPromise() {
      return outer1_0(outer1_1[4])(outer1_1[3], outer1_1.paths);
    },
    webpackId: 3832
  };
  return obj.importWithRetry(obj).then((arg0) => arg0.default);
}
function getDeviceData(arg0) {
  let closure_0 = arg0;
  return getBraintreeSDK().then((dataCollector) => {
    dataCollector = dataCollector.dataCollector;
    let obj = { client: closure_0 };
    obj = dataCollector.create(obj);
    return obj.then((deviceData) => deviceData.deviceData).catch(() => null);
  });
}
const result = require("module_3829").fileFinishedImporting("utils/BraintreeUtils.tsx");

export { getBraintreeSDK };
export const collectDeviceData = function collectDeviceData() {
  client = client.getClient();
  if (null == client) {
    let nextPromise = getBraintreeSDK().then((client) => {
      client = client.client;
      let obj = { authorization: outer1_3.BRAINTREE.KEY };
      obj = client.create(obj);
      return obj.then((arg0) => outer2_5(arg0)).catch(() => null);
    });
    const promise = getBraintreeSDK();
  } else {
    nextPromise = getDeviceData(client);
  }
  return nextPromise;
};
