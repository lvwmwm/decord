// Module ID: 2296
// Function ID: 22998
// Name: messagesProxy
// Dependencies: []

// Module 2296 (messagesProxy)
const _module = require(dependencyMap[2]);
const loader = _module.createLoader({
  () => {
    const jsonAsset = require(dependencyMap[0]).loadJsonAsset(require(dependencyMap[1]));
    return jsonAsset.then((arg0) => ({ default: arg0 }));
  }
}, "en-US");
const _module1 = require(dependencyMap[2]);
const messagesProxy = _module1.makeMessagesProxy(loader);
const _module2 = require(dependencyMap[3]);
const result = _module2.fileFinishedImporting("modules/premium/gifting/GiftingBadgeTier.messages.js");

export default messagesProxy;
export const messagesLoader = loader;
