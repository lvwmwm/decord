// Module ID: 12547
// Function ID: 12548
// Name: conjureComposerPills
// Dependencies: [32, 17, 1392, 11861, 11864, 5057, 12390, 1128, 3862, 12548, 2]
// Exports: conjureFilePillIcon, conjurePillNodes, conjurePillText, conjureUserPillLabel, decodeConjurePills, encodeConjurePills

// Module 12547 (conjureComposerPills)
import react_native from "react-native" /* 17 */;
import intl2 from "intl" /* 1128 */;
import _modDef3862 from "module_3862" /* 3862 */;
import UserUtils from "UserUtils" /* 5057 */;
import AssetRegistryDefault from "AssetRegistry" /* 11864 */;
import ChatInputParser from "ChatInputParser" /* 12548 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import UserStore from "UserStore" /* 1392 */;
import ConjureStoredAttachmentStore from "ConjureStoredAttachmentStore" /* 11861 */;
import size from "module_2" /* 2 */;

let map, set;

const Image = react_native.Image;
let result = size.fileFinishedImporting("modules/conjure/chat/native/conjureComposerPills.tsx");

export const conjureFilePillIcon = function conjureFilePillIcon() {
  return Image.resolveAssetSource(AssetRegistryDefault).uri;
};
export const conjurePillText = function conjurePillText(current, name, combined) {
  combined = "\u2060" + name;
  let tmp2 = combined;
  if (current.has(combined)) {
    const value = current.get(combined);
    let raw;
    if (value != null) {
      raw = value.raw;
    }
    let tmp7 = combined;
    tmp2 = combined;
    if (raw !== combined) {
      const _HermesInternal = HermesInternal;
      const combined1 = "\u2060" + tmp7;
      tmp2 = combined1;
      while (current.has(combined1)) {
        let value2 = current.get(combined1);
        let raw1;
        if (value2 != null) {
          raw1 = value2.raw;
        }
        tmp7 = combined1;
        tmp2 = combined1;
        if (raw1 === combined) {
          break;
        }
      }
    }
  }
  return tmp2;
};
export const conjureUserPillLabel = function conjureUserPillLabel(id) {
  const user = UserStore.getUser(id);
  let name = id;
  if (null != user) {
    const obj = UserUtils;
    name = obj.getName(user);
  }
  return "@" + name;
};
export const decodeConjurePills = function decodeConjurePills(draft) {
  map = new Map();
  let obj = {
    text: draft.replace(map(12390).CONJURE_ANY_MENTION, (raw, arg1, arg2) => {
      let combined;
      let uri;
      if (null != arg1) {
        const user = UserStore.getUser(arg1);
        let name = arg1;
        if (null != user) {
          const obj = UserUtils;
          name = obj.getName(user);
        }
        const _HermesInternal = HermesInternal;
        combined = "@" + name;
      } else {
        const attachment = ConjureStoredAttachmentStore.getAttachment(arg2);
        combined = undefined;
        if (attachment != null) {
          combined = attachment.name;
        }
        if (combined == null) {
          const intl = intl2.intl;
          combined = intl.string(_modDef3862.ff9Q4C);
        }
      }
      const combined1 = "\u2060" + combined;
      let tmp16 = combined1;
      if (map.has(combined1)) {
        const value = obj2.get(combined1);
        raw = undefined;
        if (value != null) {
          raw = value.raw;
        }
        let tmp19 = combined1;
        tmp16 = combined1;
        if (raw !== raw) {
          const _HermesInternal2 = HermesInternal;
          const combined2 = "\u2060" + tmp19;
          tmp16 = combined2;
          while (map.has(combined2)) {
            let value2 = obj2.get(combined2);
            let raw1;
            if (value2 != null) {
              raw1 = value2.raw;
            }
            tmp19 = combined2;
            tmp16 = combined2;
            if (raw1 === raw) {
              break;
            }
          }
        }
      }
      const obj3 = { raw, icon: uri };
      uri = null;
      set = map.set;
      if (null == arg1) {
        uri = Image.resolveAssetSource(AssetRegistryDefault).uri;
      }
      const result = set(tmp16, obj3);
      return tmp16;
    }),
    pills: map
  };
  return obj;
};
export const encodeConjurePills = function encodeConjurePills(chat, current) {
  const items = [...current.keys()];
  const sorted = items.sort((arg0, arg1) => arg1.length - arg0.length);
  return sorted.reduce((acc, item) => {
    const parts = acc.split(item);
    const join = parts.join;
    const value = current.get(item);
    let raw;
    if (value != null) {
      raw = value.raw;
    }
    if (raw == null) {
      raw = item;
    }
    return join(raw);
  }, chat);
};
export const conjurePillNodes = function conjurePillNodes(arr, current2, style) {
  let first;
  let index1;
  let tmp6;
  const items = [];
  const tmp = current2[Symbol.iterator]();
  while (tmp !== undefined) {
    [first, tmp6] = tmp2;
    let arr2 = first;
    let index = arr.indexOf(first);
    let tmp8 = index;
    if (-1 !== index) {
      do {
        if ("\u2060" !== arr[tmp8 - 1]) {
          let obj;
          let obj2 = { type: ChatInputParser.ChatInputNodeType.USER_HIGHLIGHT, location: tmp8, length: arr2.length, style, deleteNodeOnBackspace: true, editDisabled: true };
          let push = items.push;
          if (null != tmp6.icon) {
            let obj3 = { icon: tmp6.icon, iconSize: 16, iconCornerRadius: 4, iconSpacing: 4 };
            obj = obj3;
          } else {
            obj = {};
          }
          let merged = Object.assign(obj);
          arr = push(obj2);
        }
        index1 = arr.indexOf(arr2, tmp8 + 1);
        tmp8 = index1;
      } while (-1 !== index1);
    }
    continue;
  }
  return items;
};
