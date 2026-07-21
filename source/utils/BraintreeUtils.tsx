// Module ID: 3790
// Function ID: 29549
// Name: getBraintreeSDK
// Dependencies: []
// Exports: collectDeviceData

// Module 3790 (getBraintreeSDK)
function getBraintreeSDK() {
  let obj = arg1(dependencyMap[2]);
  obj = {
    createPromise() {
      return callback(paths[4])(paths[3], paths.paths);
    },
    webpackId: dependencyMap[5]
  };
  return obj.importWithRetry(obj).then((arg0) => arg0.default);
}
function getDeviceData(arg0) {
  const arg1 = arg0;
  return getBraintreeSDK().then((dataCollector) => {
    dataCollector = dataCollector.dataCollector;
    let obj = { client: dataCollector };
    obj = dataCollector.create(obj);
    return obj.then((deviceData) => deviceData.deviceData).catch(() => null);
  });
}
let closure_2 = importDefault(dependencyMap[0]);
const PaymentSettings = arg1(dependencyMap[1]).PaymentSettings;
const result = arg1(dependencyMap[6]).fileFinishedImporting("utils/BraintreeUtils.tsx");

export { getBraintreeSDK };
export const collectDeviceData = function collectDeviceData() {
  const client = client.getClient();
  if (null == client) {
    let nextPromise = getBraintreeSDK().then((client) => {
      client = client.client;
      let obj = { authorization: constants.BRAINTREE.KEY };
      obj = client.create(obj);
      return obj.then((arg0) => callback(arg0)).catch(() => null);
    });
    const promise = getBraintreeSDK();
  } else {
    nextPromise = getDeviceData(client);
  }
  return nextPromise;
};
