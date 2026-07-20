// Module ID: 2364
// Function ID: 23189
// Name: messagesProxy
// Dependencies: []

// Module 2364 (messagesProxy)
const _module = require(dependencyMap[32]);
const loader = _module.createLoader({
  bg() {
    const jsonAsset = require(dependencyMap[0]).loadJsonAsset(require(dependencyMap[1]));
    return jsonAsset.then((arg0) => ({ default: arg0 }));
  },
  cs() {
    const jsonAsset = require(dependencyMap[0]).loadJsonAsset(require(dependencyMap[2]));
    return jsonAsset.then((arg0) => ({ default: arg0 }));
  },
  da() {
    const jsonAsset = require(dependencyMap[0]).loadJsonAsset(require(dependencyMap[3]));
    return jsonAsset.then((arg0) => ({ default: arg0 }));
  },
  de() {
    const jsonAsset = require(dependencyMap[0]).loadJsonAsset(require(dependencyMap[4]));
    return jsonAsset.then((arg0) => ({ default: arg0 }));
  },
  el() {
    const jsonAsset = require(dependencyMap[0]).loadJsonAsset(require(dependencyMap[5]));
    return jsonAsset.then((arg0) => ({ default: arg0 }));
  },
  () => {
    const jsonAsset = require(dependencyMap[0]).loadJsonAsset(require(dependencyMap[6]));
    return jsonAsset.then((arg0) => ({ default: arg0 }));
  },
  () => {
    const jsonAsset = require(dependencyMap[0]).loadJsonAsset(require(dependencyMap[7]));
    return jsonAsset.then((arg0) => ({ default: arg0 }));
  },
  () => {
    const jsonAsset = require(dependencyMap[0]).loadJsonAsset(require(dependencyMap[8]));
    return jsonAsset.then((arg0) => ({ default: arg0 }));
  },
  fi() {
    const jsonAsset = require(dependencyMap[0]).loadJsonAsset(require(dependencyMap[9]));
    return jsonAsset.then((arg0) => ({ default: arg0 }));
  },
  fr() {
    const jsonAsset = require(dependencyMap[0]).loadJsonAsset(require(dependencyMap[10]));
    return jsonAsset.then((arg0) => ({ default: arg0 }));
  },
  hi() {
    const jsonAsset = require(dependencyMap[0]).loadJsonAsset(require(dependencyMap[11]));
    return jsonAsset.then((arg0) => ({ default: arg0 }));
  },
  hr() {
    const jsonAsset = require(dependencyMap[0]).loadJsonAsset(require(dependencyMap[12]));
    return jsonAsset.then((arg0) => ({ default: arg0 }));
  },
  hu() {
    const jsonAsset = require(dependencyMap[0]).loadJsonAsset(require(dependencyMap[13]));
    return jsonAsset.then((arg0) => ({ default: arg0 }));
  },
  it() {
    const jsonAsset = require(dependencyMap[0]).loadJsonAsset(require(dependencyMap[14]));
    return jsonAsset.then((arg0) => ({ default: arg0 }));
  },
  ja() {
    const jsonAsset = require(dependencyMap[0]).loadJsonAsset(require(dependencyMap[15]));
    return jsonAsset.then((arg0) => ({ default: arg0 }));
  },
  ko() {
    const jsonAsset = require(dependencyMap[0]).loadJsonAsset(require(dependencyMap[16]));
    return jsonAsset.then((arg0) => ({ default: arg0 }));
  },
  lt() {
    const jsonAsset = require(dependencyMap[0]).loadJsonAsset(require(dependencyMap[17]));
    return jsonAsset.then((arg0) => ({ default: arg0 }));
  },
  nl() {
    const jsonAsset = require(dependencyMap[0]).loadJsonAsset(require(dependencyMap[18]));
    return jsonAsset.then((arg0) => ({ default: arg0 }));
  },
  no() {
    const jsonAsset = require(dependencyMap[0]).loadJsonAsset(require(dependencyMap[19]));
    return jsonAsset.then((arg0) => ({ default: arg0 }));
  },
  pl() {
    const jsonAsset = require(dependencyMap[0]).loadJsonAsset(require(dependencyMap[20]));
    return jsonAsset.then((arg0) => ({ default: arg0 }));
  },
  () => {
    const jsonAsset = require(dependencyMap[0]).loadJsonAsset(require(dependencyMap[21]));
    return jsonAsset.then((arg0) => ({ default: arg0 }));
  },
  ro() {
    const jsonAsset = require(dependencyMap[0]).loadJsonAsset(require(dependencyMap[22]));
    return jsonAsset.then((arg0) => ({ default: arg0 }));
  },
  ru() {
    const jsonAsset = require(dependencyMap[0]).loadJsonAsset(require(dependencyMap[23]));
    return jsonAsset.then((arg0) => ({ default: arg0 }));
  },
  () => {
    const jsonAsset = require(dependencyMap[0]).loadJsonAsset(require(dependencyMap[24]));
    return jsonAsset.then((arg0) => ({ default: arg0 }));
  },
  th() {
    const jsonAsset = require(dependencyMap[0]).loadJsonAsset(require(dependencyMap[25]));
    return jsonAsset.then((arg0) => ({ default: arg0 }));
  },
  tr() {
    const jsonAsset = require(dependencyMap[0]).loadJsonAsset(require(dependencyMap[26]));
    return jsonAsset.then((arg0) => ({ default: arg0 }));
  },
  uk() {
    const jsonAsset = require(dependencyMap[0]).loadJsonAsset(require(dependencyMap[27]));
    return jsonAsset.then((arg0) => ({ default: arg0 }));
  },
  vi() {
    const jsonAsset = require(dependencyMap[0]).loadJsonAsset(require(dependencyMap[28]));
    return jsonAsset.then((arg0) => ({ default: arg0 }));
  },
  () => {
    const jsonAsset = require(dependencyMap[0]).loadJsonAsset(require(dependencyMap[29]));
    return jsonAsset.then((arg0) => ({ default: arg0 }));
  },
  () => {
    const jsonAsset = require(dependencyMap[0]).loadJsonAsset(require(dependencyMap[30]));
    return jsonAsset.then((arg0) => ({ default: arg0 }));
  },
  () => {
    const jsonAsset = require(dependencyMap[0]).loadJsonAsset(require(dependencyMap[31]));
    return jsonAsset.then((arg0) => ({ default: arg0 }));
  }
}, "en-US");
const _module1 = require(dependencyMap[32]);
const messagesProxy = _module1.makeMessagesProxy(loader);
const _module2 = require(dependencyMap[33]);
const result = _module2.fileFinishedImporting("modules/notifications/profile_updates/sender/NotifyFriendsOnProfileUpdate.messages.js");

export default messagesProxy;
export const messagesLoader = loader;
