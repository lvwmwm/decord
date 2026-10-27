// Module ID: 2209
// Function ID: 2210
// Dependencies: [1132, 2210, 2211, 2212, 2213, 2214, 2215, 2216, 2217, 2218, 2219, 2220, 2221, 2222, 2223, 2224, 2225, 2226, 2227, 2228, 1167, 2]

// Module 2209
import AssetJsonUtils from "AssetJsonUtils" /* 1132 */;
import AssetRegistry from "AssetRegistry" /* 2210 */;
import AssetRegistry2 from "AssetRegistry" /* 2211 */;
import AssetRegistry3 from "AssetRegistry" /* 2212 */;
import AssetRegistry4 from "AssetRegistry" /* 2213 */;
import AssetRegistry5 from "AssetRegistry" /* 2214 */;
import AssetRegistry6 from "AssetRegistry" /* 2215 */;
import AssetRegistry7 from "AssetRegistry" /* 2216 */;
import AssetRegistry8 from "AssetRegistry" /* 2217 */;
import AssetRegistry9 from "AssetRegistry" /* 2218 */;
import AssetRegistry10 from "AssetRegistry" /* 2219 */;
import AssetRegistry11 from "AssetRegistry" /* 2220 */;
import AssetRegistry12 from "AssetRegistry" /* 2221 */;
import AssetRegistry13 from "AssetRegistry" /* 2222 */;
import AssetRegistry14 from "AssetRegistry" /* 2223 */;
import AssetRegistry15 from "AssetRegistry" /* 2224 */;
import AssetRegistry16 from "AssetRegistry" /* 2225 */;
import AssetRegistry17 from "AssetRegistry" /* 2226 */;
import AssetRegistry18 from "AssetRegistry" /* 2227 */;
import AssetRegistry19 from "AssetRegistry" /* 2228 */;
import module_1167_mod from "module_1167" /* 1167 */;
import size from "module_2" /* 2 */;

let obj = {
  da() {
    const obj = AssetJsonUtils;
    const jsonAsset = obj.loadJsonAsset(AssetRegistry);
    return jsonAsset.then((result) => ({ default: result }));
  },
  de() {
    const obj = AssetJsonUtils;
    const jsonAsset = obj.loadJsonAsset(AssetRegistry2);
    return jsonAsset.then((result) => ({ default: result }));
  },
  el() {
    const obj = AssetJsonUtils;
    const jsonAsset = obj.loadJsonAsset(AssetRegistry3);
    return jsonAsset.then((result) => ({ default: result }));
  },
  "es-ES": () => {
    const obj = AssetJsonUtils;
    const jsonAsset = obj.loadJsonAsset(AssetRegistry4);
    return jsonAsset.then((result) => ({ default: result }));
  },
  fr() {
    const obj = AssetJsonUtils;
    const jsonAsset = obj.loadJsonAsset(AssetRegistry5);
    return jsonAsset.then((result) => ({ default: result }));
  },
  it() {
    const obj = AssetJsonUtils;
    const jsonAsset = obj.loadJsonAsset(AssetRegistry6);
    return jsonAsset.then((result) => ({ default: result }));
  },
  ja() {
    const obj = AssetJsonUtils;
    const jsonAsset = obj.loadJsonAsset(AssetRegistry7);
    return jsonAsset.then((result) => ({ default: result }));
  },
  ko() {
    const obj = AssetJsonUtils;
    const jsonAsset = obj.loadJsonAsset(AssetRegistry8);
    return jsonAsset.then((result) => ({ default: result }));
  },
  nl() {
    const obj = AssetJsonUtils;
    const jsonAsset = obj.loadJsonAsset(AssetRegistry9);
    return jsonAsset.then((result) => ({ default: result }));
  },
  pl() {
    const obj = AssetJsonUtils;
    const jsonAsset = obj.loadJsonAsset(AssetRegistry10);
    return jsonAsset.then((result) => ({ default: result }));
  },
  "pt-BR": () => {
    const obj = AssetJsonUtils;
    const jsonAsset = obj.loadJsonAsset(AssetRegistry11);
    return jsonAsset.then((result) => ({ default: result }));
  },
  ru() {
    const obj = AssetJsonUtils;
    const jsonAsset = obj.loadJsonAsset(AssetRegistry12);
    return jsonAsset.then((result) => ({ default: result }));
  },
  "sv-SE": () => {
    const obj = AssetJsonUtils;
    const jsonAsset = obj.loadJsonAsset(AssetRegistry13);
    return jsonAsset.then((result) => ({ default: result }));
  },
  th() {
    const obj = AssetJsonUtils;
    const jsonAsset = obj.loadJsonAsset(AssetRegistry14);
    return jsonAsset.then((result) => ({ default: result }));
  },
  tr() {
    const obj = AssetJsonUtils;
    const jsonAsset = obj.loadJsonAsset(AssetRegistry15);
    return jsonAsset.then((result) => ({ default: result }));
  },
  vi() {
    const obj = AssetJsonUtils;
    const jsonAsset = obj.loadJsonAsset(AssetRegistry16);
    return jsonAsset.then((result) => ({ default: result }));
  },
  "zh-CN": () => {
    const obj = AssetJsonUtils;
    const jsonAsset = obj.loadJsonAsset(AssetRegistry17);
    return jsonAsset.then((result) => ({ default: result }));
  },
  "zh-TW": () => {
    const obj = AssetJsonUtils;
    const jsonAsset = obj.loadJsonAsset(AssetRegistry18);
    return jsonAsset.then((result) => ({ default: result }));
  },
  "en-US": () => {
    const obj = AssetJsonUtils;
    const jsonAsset = obj.loadJsonAsset(AssetRegistry19);
    return jsonAsset.then((result) => ({ default: result }));
  }
};
let module_1167 = module_1167_mod;
const loader = module_1167.createLoader(obj, "en-US");
module_1167 = module_1167_mod;
const messagesProxy = module_1167.makeMessagesProxy(loader);
const result = size.fileFinishedImporting("modules/user_settings/dev_tools/UserSettingsDevTools.messages.js");

export default messagesProxy;
export const messagesLoader = loader;
