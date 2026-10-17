// Module ID: 4013
// Function ID: 4014
// Dependencies: [1132, 4014, 4015, 4016, 4017, 4018, 4019, 4020, 4021, 4022, 4023, 4024, 4025, 4026, 4027, 4028, 4029, 4030, 4031, 4032, 1167, 2]

// Module 4013
import AssetJsonUtils from "AssetJsonUtils" /* 1132 */;
import AssetRegistry from "AssetRegistry" /* 4014 */;
import AssetRegistry2 from "AssetRegistry" /* 4015 */;
import AssetRegistry3 from "AssetRegistry" /* 4016 */;
import AssetRegistry4 from "AssetRegistry" /* 4017 */;
import AssetRegistry5 from "AssetRegistry" /* 4018 */;
import AssetRegistry6 from "AssetRegistry" /* 4019 */;
import AssetRegistry7 from "AssetRegistry" /* 4020 */;
import AssetRegistry8 from "AssetRegistry" /* 4021 */;
import AssetRegistry9 from "AssetRegistry" /* 4022 */;
import AssetRegistry10 from "AssetRegistry" /* 4023 */;
import AssetRegistry11 from "AssetRegistry" /* 4024 */;
import AssetRegistry12 from "AssetRegistry" /* 4025 */;
import AssetRegistry13 from "AssetRegistry" /* 4026 */;
import AssetRegistry14 from "AssetRegistry" /* 4027 */;
import AssetRegistry15 from "AssetRegistry" /* 4028 */;
import AssetRegistry16 from "AssetRegistry" /* 4029 */;
import AssetRegistry17 from "AssetRegistry" /* 4030 */;
import AssetRegistry18 from "AssetRegistry" /* 4031 */;
import AssetRegistry19 from "AssetRegistry" /* 4032 */;
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
const result = size.fileFinishedImporting("modules/stage_channels/StageChannel.messages.js");

export default messagesProxy;
export const messagesLoader = loader;
