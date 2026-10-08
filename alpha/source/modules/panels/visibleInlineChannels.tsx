// Module ID: 6087
// Function ID: 6088
// Name: visibleInlineChannels
// Dependencies: [2]
// Exports: isChannelVisibleInline, registerVisibleInlineChannel, unregisterVisibleInlineChannel

// Module 6087 (visibleInlineChannels)
import size from "module_2" /* 2 */;

let set;

const map = new Map();
let result = size.fileFinishedImporting("modules/panels/visibleInlineChannels.tsx");

export const registerVisibleInlineChannel = function registerVisibleInlineChannel(arg0, arg1) {
  let value = map.get(arg0);
  const obj = map;
  if (null == value) {
    const _Set = Set;
    const self = this;
    const self2 = this;
    set = new Set();
    const result = obj.set(arg0, set);
    value = set;
  }
  value.add(arg1);
};
export const unregisterVisibleInlineChannel = function unregisterVisibleInlineChannel(arg0, arg1) {
  const value = map.get(arg0);
  const obj = map;
  if (null != value) {
    value.delete(arg1);
    if (0 === value.size) {
      obj.delete(arg0);
    }
  }
};
export const isChannelVisibleInline = function isChannelVisibleInline(channelId, fn) {
  const value = map.get(channelId);
  if (null == value) {
    return false;
  } else {
    for (const item10010 of value) {
      if (fn(item10010)) {
        obj.return();
        let flag = true;
        return true;
      }
    }
    return false;
  }
};
