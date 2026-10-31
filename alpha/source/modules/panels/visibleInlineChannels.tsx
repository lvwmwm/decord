// Module ID: 6891
// Function ID: 6892
// Name: visibleInlineChannels
// Dependencies: [2]
// Exports: isChannelVisibleInline, registerVisibleInlineChannel, unregisterVisibleInlineChannel

// Module 6891 (visibleInlineChannels)
import size from "module_2" /* 2 */;

let set;

const map = new Map();
let result = size.fileFinishedImporting("modules/panels/visibleInlineChannels.tsx");

export function registerVisibleInlineChannel(arg0, arg1) {
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
}
export function unregisterVisibleInlineChannel(arg0, arg1) {
  const value = map.get(arg0);
  const obj = map;
  if (null != value) {
    value.delete(arg1);
    if (0 === value.size) {
      obj.delete(arg0);
    }
  }
}
export function isChannelVisibleInline(channelId, fn) {
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
}
