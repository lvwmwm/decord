// Module ID: 4272
// Function ID: 37389
// Name: filterParsedVideoCodecs
// Dependencies: [4191, 2]
// Exports: codecNameToPayloadName, filterVideoCodecs, getExperimentCodecs

// Module 4272 (filterParsedVideoCodecs)
import { ExperimentFlags } from "DesktopSources";

function filterParsedVideoCodecs(parseNativeCodecsResult, experimentCodecs, flag) {
  let closure_0 = parseNativeCodecsResult;
  if (flag === undefined) {
    flag = false;
  }
  let items;
  let set;
  const combined = experimentCodecs.concat(items);
  items = [];
  const item = combined.forEach((encode) => {
    const found = encode.find((name) => encode.name === name.name);
    if (null != found) {
      const obj = {};
      ({ name: obj.name, encode } = found);
      if (encode) {
        encode = encode.encode;
      }
      obj.encode = encode;
      obj.decode = found.decode && encode.decode;
      items.push(obj);
    }
  });
  if (flag) {
    const _Set = Set;
    set = new Set(items.map((name) => name.name));
    const item1 = parseNativeCodecsResult.forEach((name) => {
      if (!set.has(name.name)) {
        const obj = { name: name.name, encode: false, decode: name.decode };
        items.push(obj);
      }
    });
  }
  return items;
}
function parseNativeCodecs(arg0) {
  const parsed = JSON.parse(arg0);
  return parsed.map((codec) => {
    const obj = {};
    codec = codec.codec;
    let str = "AV1";
    if ("AV1X" !== codec) {
      str = codec;
    }
    obj.name = str;
    ({ encode: obj.encode, decode: obj.decode } = codec);
    return obj;
  });
}
let items = [{ name: "H264", encode: true, decode: true }, { name: "VP8", encode: true, decode: true }];
const result = require("set").fileFinishedImporting("../discord_common/js/packages/media-engine/utils/VideoCodecUtils.tsx");

export { filterParsedVideoCodecs };
export const getExperimentCodecs = function getExperimentCodecs(experimentFlags) {
  const items = [];
  const hasItem = experimentFlags.has(ExperimentFlags.SIGNAL_AV1_ENCODE);
  const hasItem1 = experimentFlags.has(ExperimentFlags.SIGNAL_AV1_DECODE);
  let tmp3 = hasItem;
  if (!hasItem) {
    tmp3 = hasItem1;
  }
  if (tmp3) {
    let obj = { name: "AV1", encode: hasItem, decode: hasItem1 };
    items.push(obj);
  }
  let hasItem2 = null != experimentFlags;
  if (hasItem2) {
    hasItem2 = experimentFlags.has(ExperimentFlags.H265_HARDWARE_ONLY);
  }
  let tmp8 = !hasItem2;
  if (!tmp8) {
    let hasItem3;
    if (null != experimentFlags) {
      hasItem3 = experimentFlags.has(ExperimentFlags.H265_HARDWARE_DECODE_AVAILABLE);
    }
    tmp8 = hasItem3;
  }
  obj = { name: "H265", encode: !experimentFlags.has(ExperimentFlags.H265_DISABLE_ENCODE), decode: tmp8 };
  items.push(obj);
  return items;
};
export const filterVideoCodecs = function filterVideoCodecs(arg0, experimentCodecs, flag) {
  if (flag === undefined) {
    flag = false;
  }
  return filterParsedVideoCodecs(parseNativeCodecs(arg0), experimentCodecs, flag);
};
export { parseNativeCodecs };
export function codecNameToPayloadName(name) {
  let str = "AV1X";
  if ("AV1" !== name) {
    str = name;
  }
  return str;
}
