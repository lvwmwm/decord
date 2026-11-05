// Module ID: 13098
// Function ID: 13099
// Dependencies: [13099, 13100, 13101, 13102]

// Module 13098
import _mod13100 from "module_13100" /* 13100 */;
import module_13099_mod from "module_13099" /* 13099 */;
import module_13101 from "module_13101" /* 13101 */;
import size_mod from "module_13102" /* 13102 */;

let module_13099;
let obj5;
let size;
function patchDictionary(descriptors, descriptors1) {
  const obj = {};
  for (const key10004 in descriptors) {
    let syntax = descriptors[key10004].syntax || descriptors[key10004];
    obj[key10004] = syntax;
    continue;
  }
  for (const key10011 in descriptors1) {
    let syntax3 = descriptors1[key10011].syntax;
    if (key10011 in descriptors) {
      if (syntax3) {
        let syntax2;
        if (re0.test(descriptors1[key10011].syntax)) {
          let str2 = descriptors1[key10011].syntax;
          let text = `${obj[key10011]} `;
          syntax2 = `${obj[key10011]} ${str2.trim()}`;
        } else {
          syntax2 = descriptors1[key10011].syntax;
        }
        obj[key10011] = syntax2;
        continue;
      } else {
        delete obj[tmp5];
        continue;
      }
      continue;
    } else {
      if (!syntax3) {
        continue;
      } else {
        let str = descriptors1[key10011].syntax;
        obj[key10011] = str.replace(re0, "");
        continue;
      }
      continue;
    }
    continue;
  }
  return obj;
}
const re0 = /^\s*\|\s*/;
let obj = { types: patchDictionary(module_13099, _mod13100.syntaxes), atrules: obj5, properties: patchDictionary(size, _mod13100.properties) };
module_13099 = module_13099_mod;
const obj2 = Object.create(null);
for (const key10022 in module_13101) {
  let tmp23 = module_13101[key10022];
  let tmp7 = null;
  if (tmp23.descriptors) {
    let _Object = Object;
    let obj3 = Object.create(null);
    tmp7 = obj3;
    let keys = Object.keys();
    if (keys !== undefined) {
      tmp7 = obj3;
      let tmp9 = keys[tmp2];
      while (tmp9 !== undefined) {
        obj3[tmp9] = tmp23.descriptors[tmp9].syntax;
        continue;
      }
    }
  }
  let str = tmp23.syntax;
  let substr = key10022.substr(1);
  let str2 = str.trim();
  let str3 = str2.match(/^@\S+\s+([^;\{]*)/)[1];
  let trimmed = str3.trim() || null;
  let obj4 = { prelude: trimmed, descriptors: tmp7 };
  obj2[substr] = obj4;
  continue;
}
const atrules = _mod13100.atrules;
obj5 = {};
for (const key10049 in obj2) {
  let descriptors1 = atrules[key10049] && atrules[key10049].descriptors || null;
  if (key10049 in atrules) {
    if ("prelude" in atrules[key10049]) {
      let patchDictionaryResult;
      let obj6 = { prelude: atrules[key10049].prelude, descriptors: patchDictionaryResult };
      if (obj2[key10049].descriptors) {
        let descriptors = obj2[key10049].descriptors;
        if (!descriptors1) {
          descriptors1 = {};
        }
        patchDictionaryResult = patchDictionary(descriptors, descriptors1);
      } else {
        patchDictionaryResult = descriptors1;
        if (patchDictionaryResult) {
          let obj7 = {};
          patchDictionaryResult = obj7;
          let keys1 = Object.keys();
          if (keys1 !== undefined) {
            patchDictionaryResult = obj7;
            let tmp16 = keys1[tmp];
            while (tmp16 !== undefined) {
              obj7[tmp16] = descriptors1[tmp16].syntax;
              continue;
            }
          }
        }
      }
      obj5[key10049] = obj6;
      continue;
    }
  }
  let prelude = obj2[key10049].prelude || null;
}
for (const key10070 in atrules) {
  if (globalThis.hasOwnProperty.call(obj2, key10070)) {
    continue;
  } else {
    let prelude1 = atrules[key10070].prelude || null;
    let obj8 = { prelude: prelude1, descriptors: descriptors2 };
    let descriptors2 = atrules[key10070].descriptors;
    if (descriptors2) {
      let descriptors3 = atrules[key10070].descriptors;
      let obj16 = {};
      descriptors2 = obj16;
      let keys2 = Object.keys();
      if (keys2 !== undefined) {
        descriptors2 = obj16;
        let tmp20 = keys2[tmp];
        while (tmp20 !== undefined) {
          obj16[tmp20] = descriptors3[tmp20].syntax;
          continue;
        }
      }
    }
    obj5[key10070] = obj8;
    continue;
  }
  continue;
}
size = size_mod;

export default obj;
