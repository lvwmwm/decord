// Module ID: 4268
// Function ID: 37356
// Name: filterParsedVideoCodecs
// Dependencies: []
// Exports: codecNameToPayloadName, filterVideoCodecs, getExperimentCodecs

// Module 4268 (filterParsedVideoCodecs)
function filterParsedVideoCodecs(parseNativeCodecsResult, experimentCodecs, flag) {
  const ExperimentFlags = parseNativeCodecsResult;
  if (flag === undefined) {
    flag = false;
  }
  let items;
  let filterParsedVideoCodecs;
  const combined = experimentCodecs.concat(items);
  items = [];
  const item = combined.forEach((encode) => {
    const found = encode.find((name) => name.name === name.name);
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
    const set = new Set(items.map((name) => name.name));
    filterParsedVideoCodecs = set;
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
const ExperimentFlags = require(dependencyMap[0]).ExperimentFlags;
const items = [{}, { "Bool(false)": "text-md/medium", "Bool(false)": "text-default", "Bool(false)": "\u2022" }];
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("../discord_common/js/packages/media-engine/utils/VideoCodecUtils.tsx");

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
