// Module ID: 2265
// Function ID: 2266
// Dependencies: [1117, 2266, 2267, 2268, 2269, 2270, 2271, 2272, 2273, 2274, 2275, 2276, 2277, 2278, 2279, 2280, 2281, 2282, 2283, 2284, 2285, 1152, 2]

// Module 2265
import AssetJsonUtils from "AssetJsonUtils" /* 1117 */;
import AssetRegistry from "AssetRegistry" /* 2266 */;
import AssetRegistry2 from "AssetRegistry" /* 2267 */;
import AssetRegistry3 from "AssetRegistry" /* 2268 */;
import AssetRegistry4 from "AssetRegistry" /* 2269 */;
import AssetRegistry5 from "AssetRegistry" /* 2270 */;
import AssetRegistry6 from "AssetRegistry" /* 2271 */;
import AssetRegistry7 from "AssetRegistry" /* 2272 */;
import AssetRegistry8 from "AssetRegistry" /* 2273 */;
import AssetRegistry9 from "AssetRegistry" /* 2274 */;
import AssetRegistry10 from "AssetRegistry" /* 2275 */;
import AssetRegistry11 from "AssetRegistry" /* 2276 */;
import AssetRegistry12 from "AssetRegistry" /* 2277 */;
import AssetRegistry13 from "AssetRegistry" /* 2278 */;
import AssetRegistry14 from "AssetRegistry" /* 2279 */;
import AssetRegistry15 from "AssetRegistry" /* 2280 */;
import AssetRegistry16 from "AssetRegistry" /* 2281 */;
import AssetRegistry17 from "AssetRegistry" /* 2282 */;
import AssetRegistry18 from "AssetRegistry" /* 2283 */;
import AssetRegistry19 from "AssetRegistry" /* 2284 */;
import AssetRegistry20 from "AssetRegistry" /* 2285 */;
import module_1152_mod from "module_1152" /* 1152 */;
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
  "es-419": () => {
    const obj = AssetJsonUtils;
    const jsonAsset = obj.loadJsonAsset(AssetRegistry4);
    return jsonAsset.then((result) => ({ default: result }));
  },
  "es-ES": () => {
    const obj = AssetJsonUtils;
    const jsonAsset = obj.loadJsonAsset(AssetRegistry5);
    return jsonAsset.then((result) => ({ default: result }));
  },
  fr() {
    const obj = AssetJsonUtils;
    const jsonAsset = obj.loadJsonAsset(AssetRegistry6);
    return jsonAsset.then((result) => ({ default: result }));
  },
  it() {
    const obj = AssetJsonUtils;
    const jsonAsset = obj.loadJsonAsset(AssetRegistry7);
    return jsonAsset.then((result) => ({ default: result }));
  },
  ja() {
    const obj = AssetJsonUtils;
    const jsonAsset = obj.loadJsonAsset(AssetRegistry8);
    return jsonAsset.then((result) => ({ default: result }));
  },
  ko() {
    const obj = AssetJsonUtils;
    const jsonAsset = obj.loadJsonAsset(AssetRegistry9);
    return jsonAsset.then((result) => ({ default: result }));
  },
  nl() {
    const obj = AssetJsonUtils;
    const jsonAsset = obj.loadJsonAsset(AssetRegistry10);
    return jsonAsset.then((result) => ({ default: result }));
  },
  pl() {
    const obj = AssetJsonUtils;
    const jsonAsset = obj.loadJsonAsset(AssetRegistry11);
    return jsonAsset.then((result) => ({ default: result }));
  },
  "pt-BR": () => {
    const obj = AssetJsonUtils;
    const jsonAsset = obj.loadJsonAsset(AssetRegistry12);
    return jsonAsset.then((result) => ({ default: result }));
  },
  ru() {
    const obj = AssetJsonUtils;
    const jsonAsset = obj.loadJsonAsset(AssetRegistry13);
    return jsonAsset.then((result) => ({ default: result }));
  },
  "sv-SE": () => {
    const obj = AssetJsonUtils;
    const jsonAsset = obj.loadJsonAsset(AssetRegistry14);
    return jsonAsset.then((result) => ({ default: result }));
  },
  th() {
    const obj = AssetJsonUtils;
    const jsonAsset = obj.loadJsonAsset(AssetRegistry15);
    return jsonAsset.then((result) => ({ default: result }));
  },
  tr() {
    const obj = AssetJsonUtils;
    const jsonAsset = obj.loadJsonAsset(AssetRegistry16);
    return jsonAsset.then((result) => ({ default: result }));
  },
  vi() {
    const obj = AssetJsonUtils;
    const jsonAsset = obj.loadJsonAsset(AssetRegistry17);
    return jsonAsset.then((result) => ({ default: result }));
  },
  "zh-CN": () => {
    const obj = AssetJsonUtils;
    const jsonAsset = obj.loadJsonAsset(AssetRegistry18);
    return jsonAsset.then((result) => ({ default: result }));
  },
  "zh-TW": () => {
    const obj = AssetJsonUtils;
    const jsonAsset = obj.loadJsonAsset(AssetRegistry19);
    return jsonAsset.then((result) => ({ default: result }));
  },
  "en-US": () => {
    const obj = AssetJsonUtils;
    const jsonAsset = obj.loadJsonAsset(AssetRegistry20);
    return jsonAsset.then((result) => ({ default: result }));
  }
};
let module_1152 = module_1152_mod;
const loader = module_1152.createLoader(obj, "en-US");
module_1152 = module_1152_mod;
const messagesProxy = module_1152.makeMessagesProxy(loader);
const result = size.fileFinishedImporting("modules/user_settings/authorized_apps/AuthorizedApps.messages.js");

export default messagesProxy;
export const messagesLoader = loader;
