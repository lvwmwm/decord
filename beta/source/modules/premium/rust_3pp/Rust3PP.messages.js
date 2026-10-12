// Module ID: 3570
// Function ID: 3571
// Dependencies: [1130, 3571, 3572, 3573, 3574, 3575, 3576, 3577, 3578, 3579, 3580, 3581, 3582, 3583, 3584, 3585, 3586, 3587, 3588, 3589, 3590, 1165, 2]

// Module 3570
import AssetJsonUtils from "AssetJsonUtils" /* 1130 */;
import AssetRegistry from "AssetRegistry" /* 3571 */;
import AssetRegistry2 from "AssetRegistry" /* 3572 */;
import AssetRegistry3 from "AssetRegistry" /* 3573 */;
import AssetRegistry4 from "AssetRegistry" /* 3574 */;
import AssetRegistry5 from "AssetRegistry" /* 3575 */;
import AssetRegistry6 from "AssetRegistry" /* 3576 */;
import AssetRegistry7 from "AssetRegistry" /* 3577 */;
import AssetRegistry8 from "AssetRegistry" /* 3578 */;
import AssetRegistry9 from "AssetRegistry" /* 3579 */;
import AssetRegistry10 from "AssetRegistry" /* 3580 */;
import AssetRegistry11 from "AssetRegistry" /* 3581 */;
import AssetRegistry12 from "AssetRegistry" /* 3582 */;
import AssetRegistry13 from "AssetRegistry" /* 3583 */;
import AssetRegistry14 from "AssetRegistry" /* 3584 */;
import AssetRegistry15 from "AssetRegistry" /* 3585 */;
import AssetRegistry16 from "AssetRegistry" /* 3586 */;
import AssetRegistry17 from "AssetRegistry" /* 3587 */;
import AssetRegistry18 from "AssetRegistry" /* 3588 */;
import AssetRegistry19 from "AssetRegistry" /* 3589 */;
import AssetRegistry20 from "AssetRegistry" /* 3590 */;
import module_1165_mod from "module_1165" /* 1165 */;
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
let module_1165 = module_1165_mod;
const loader = module_1165.createLoader(obj, "en-US");
module_1165 = module_1165_mod;
const messagesProxy = module_1165.makeMessagesProxy(loader);
const result = size.fileFinishedImporting("modules/premium/rust_3pp/Rust3PP.messages.js");

export default messagesProxy;
export const messagesLoader = loader;
