// Module ID: 11640
// Function ID: 11641
// Name: FileTypeFiltering
// Dependencies: [32, 19, 2112, 1364, 1115, 504, 5203, 2]
// Exports: getFileTypeFiltering, useFileTypeFiltering, useFileTypesFormattedString

// Module 11640 (FileTypeFiltering)
import intl4 from "intl" /* 1115 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5203 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import LocaleStore from "LocaleStore" /* 2112 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, set;

const f94136 = (item) => item.startsWith(".");
const f94137 = (arr) => arr.slice(1);
const f94140 = () => locale.locale;
const f94142 = (item) => {
  closure_0 = item;
  return closure_0.some((item) => {
    const formatted = closure_0.toLowerCase();
    return formatted.endsWith("." + item);
  });
};
const f94143 = (item) => {
  const hasItem = closure_1_6.includes(item) || closure_1_7.includes(item);
  return hasItem;
};
function fileTypesFormattedStringHelper(arr, locale) {
  if (null != arr) {
    if (0 !== arr.length) {
      const _Intl = Intl;
      const self = this;
      const self2 = this;
      const listFormat = new Intl.ListFormat(locale, { type: "disjunction" });
      const items = [];
      if (arr.includes("image")) {
        const push = items.push;
        const intl = intl4.intl;
        push(intl.string(intl4.t["0r2WwT"]));
      }
      if (arr.includes("video")) {
        const push2 = items.push;
        const intl2 = intl4.intl;
        push2(intl2.string(intl4.t["al+5qH"]));
      }
      if (arr.includes("audio")) {
        const push3 = items.push;
        const intl3 = intl4.intl;
        push3(intl3.string(intl4.t.Kzll3E));
      }
      const push4 = items.push;
      const found = arr.filter((item) => item.startsWith("."));
      const items1 = [];
      HermesBuiltin.arraySpread(items1, found.sort(), 0);
      HermesBuiltin.apply(push4, items1, items);
      let formatResult = null;
      if (0 !== items.length) {
        formatResult = listFormat.format(items);
      }
      return formatResult;
    }
  }
  return null;
}
let closure_6 = ["png", "gif", "jpg", "jpeg", "jfif", "webp", "avif"];
let closure_7 = ["mp4", "mov", "qt", "webm"];
let closure_8 = ["mp3", "m4a", "wav", "ogg", "opus", "flac"];
let closure_9 = { jpg: ["jpeg", "jfif", "heic", "heif"], mov: ["mp4", "qt"] };
let closure_10 = { jpg: ["jpeg", "jfif"], mp4: ["mov", "qt"] };
const result = size.fileFinishedImporting("modules/interactions/FileTypeFiltering.tsx");

export const useFileTypesFormattedString = function useFileTypesFormattedString(fileTypes) {
  _require = fileTypes;
  const items = [LocaleStore];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, f94140);
  const items1 = [fileTypes, stateFromStores];
  return react.useMemo(() => fileTypesFormattedStringHelper(closure_0, stateFromStores), items1);
};
export const getFileTypeFiltering = function getFileTypeFiltering(fileTypes) {
  if (null != fileTypes) {
    let items3;
    if (0 !== fileTypes.length) {
      const found = fileTypes.filter(f94136);
      const mapped = found.map(f94137);
      if (fileTypes.includes("image")) {
        const push = mapped.push;
        const items = [];
        HermesBuiltin.arraySpread(items, closure_6, 0);
        HermesBuiltin.apply(push, items, mapped);
      }
      if (fileTypes.includes("video")) {
        const push2 = mapped.push;
        const items1 = [];
        HermesBuiltin.arraySpread(items1, closure_7, 0);
        HermesBuiltin.apply(push2, items1, mapped);
      }
      if (fileTypes.includes("audio")) {
        const push3 = mapped.push;
        const items2 = [];
        HermesBuiltin.arraySpread(items2, closure_8, 0);
        HermesBuiltin.apply(push3, items2, mapped);
      }
      items3 = (function getExtensionsForOutputs(mapped) {
        const obj = fileTypes(memo1[3]);
        const tmp = obj.isIOS() ? closure_1_9 : closure_1_10;
        set = new Set(mapped);
        const entries = Object.entries(tmp);
        const tmp3 = entries[Symbol.iterator]();
        while (tmp3 !== undefined) {
          let tmp6 = closure_1_3(tmp4, 2);
          let tmp7 = tmp6[1];
          let tmp8 = tmp7;
          if (set.has(tmp6[0])) {
            for (const item10043 of tmp8) {
              let addResult = set.add(item10043);
              continue;
            }
          } else {
            for (const item10035 of tmp8) {
              let deleteResult = set.delete(item10035);
              continue;
            }
          }
          continue;
        }
        return Array.from(set);
      })(mapped);
    }
    const tmp25 = fileTypesFormattedStringHelper(fileTypes, LocaleStore.locale);
    const types = tmp25;
    let obj = {
      allowedExtensions: items3,
      typesFormattedString: tmp25,
      validateFilenames(arr) {
          let closure_0 = items3;
          const everyResult = 0 === items3.length || arr.every(f94142);
          return everyResult;
        },
      showInvalidFileTypeAlert() {
          let intl;
          let intl2;
          let obj2;
          const obj = { title: intl.string(intl4.t.azO1Pe), body: intl2.formatToPlainString(intl4.t["5U9LSo"], obj2) };
          const show = AlertActionCreatorsDefault.show;
          AlertActionCreatorsDefault;
          intl = intl4.intl;
          intl2 = intl4.intl;
          obj2 = { types };
          show(obj);
        },
      mediaFilesAllowed: 0 === items3.length || items3.some(f94143)
    };
    0 === items3.length || items3.some(f94143);
    return obj;
  }
  items3 = [];
};
export const useFileTypeFiltering = function useFileTypeFiltering(fileTypes) {
  let locale;
  let memo1;
  let items = [fileTypes];
  const memo = react.useMemo(() => {
    if (null != fileTypes) {
      if (0 !== fileTypes.length) {
        const found = arr.filter(f94136);
        const mapped = found.map(f94137);
        if (fileTypes.includes("image")) {
          const push = mapped.push;
          const items = [];
          let tmp3 = items;
          HermesBuiltin.arraySpread(items, closure_6, 0);
          let tmp5 = push;
          let tmp6 = items;
          let tmp7 = mapped;
          HermesBuiltin.apply(push, items, mapped);
        }
        if (fileTypes.includes("video")) {
          const push2 = mapped.push;
          let tmp9 = closure_7;
          const items1 = [];
          let tmp10 = items1;
          HermesBuiltin.arraySpread(items1, closure_7, 0);
          let tmp12 = push2;
          let tmp13 = items1;
          HermesBuiltin.apply(push2, items1, mapped);
        }
        if (fileTypes.includes("audio")) {
          const push3 = mapped.push;
          const items2 = [];
          HermesBuiltin.arraySpread(items2, closure_8, 0);
          HermesBuiltin.apply(push3, items2, mapped);
        }
        (function getExtensionsForOutputs(mapped) {
          const obj = fileTypes(memo1[3]);
          const tmp = obj.isIOS() ? closure_1_9 : closure_1_10;
          set = new Set(mapped);
          const entries = Object.entries(tmp);
          const tmp3 = entries[Symbol.iterator]();
          while (tmp3 !== undefined) {
            let tmp6 = closure_1_3(tmp4, 2);
            let tmp7 = tmp6[1];
            let tmp8 = tmp7;
            if (set.has(tmp6[0])) {
              for (const item10043 of tmp8) {
                let addResult = set.add(item10043);
                continue;
              }
            } else {
              for (const item10035 of tmp8) {
                let deleteResult = set.delete(item10035);
                continue;
              }
            }
            continue;
          }
          return Array.from(set);
        })(mapped);
      }
      return [];
    }
  }, items);
  _require = fileTypes;
  let obj = require("get initialized");
  let items1 = [LocaleStore];
  const stateFromStores = obj.useStateFromStores(items1, f94140);
  let items2 = [fileTypes, stateFromStores];
  memo1 = react.useMemo(() => fileTypesFormattedStringHelper(closure_0, stateFromStores), items2);
  const items3 = [memo];
  const items4 = [memo1];
  const callback = react.useCallback((arr) => {
    let closure_0 = memo;
    const everyResult = 0 === memo.length || arr.every(f94142);
    return everyResult;
  }, items3);
  const items5 = [memo];
  const callback1 = react.useCallback(() => {
    let intl;
    let intl2;
    let obj2;
    const obj = { title: intl.string(intl4.t.azO1Pe), body: intl2.formatToPlainString(intl4.t["5U9LSo"], obj2) };
    const show = AlertActionCreatorsDefault.show;
    AlertActionCreatorsDefault;
    intl = intl4.intl;
    intl2 = intl4.intl;
    obj2 = { types: memo1 };
    show(obj);
  }, items4);
  let obj2 = {
    allowedExtensions: memo,
    typesFormattedString: memo1,
    validateFilenames: callback,
    showInvalidFileTypeAlert: callback1,
    mediaFilesAllowed: react.useMemo(() => {
      const tmp = 0 === memo.length || memo.some(f94143);
      return tmp;
    }, items5)
  };
  return obj2;
};
