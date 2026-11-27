// Module ID: 18473
// Function ID: 18474
// Name: conjureAppChannelName
// Dependencies: [2]
// Exports: default

// Module 18473 (conjureAppChannelName)
import size from "module_2" /* 2 */;

const re0 = /(?:[\0-\x1F\x7F-\x9F\xAD\u034F\u061C\u115F\u1160\u17B4\u180B-\u180E\u200B\u200C\u200E\u200F\u202A-\u202F\u2060-\u206F\u2800\u3164\uFA70-\uFAD9\uFEFF\uFFA0\uFFF0-\uFFFF]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|[\uDB40-\uDB7F][\uDC00-\uDFFF])/g;
const re1 = /[\x20\xa0\u1680\u2000-\u200a\u2028\u2029\u205f\u3000~-]+/g;
const re2 = /[\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g;
const result = size.fileFinishedImporting("modules/conjure/views/conjureAppChannelName.tsx");

export default function conjureAppChannelSlug(str) {
  str = str.replace(re0, "");
  const str2 = str.replace(re1, "-");
  const str3 = str2.replace(/^-+/, "");
  const str4 = str3.replace(/-+$/, "");
  const str5 = str4.replace(re2, "");
  const str6 = str5.toLowerCase();
  let str7 = "";
  const tmp = re1;
  const tmp2 = re2;
  if ("" !== str6) {
    const str8 = str6.replace(tmp, "-");
    const str9 = str8.replace(/^-+/, "");
    const str10 = str9.replace(/-+$/, "");
    const str11 = str10.replace(tmp2, "");
    str7 = str11.toLowerCase();
  }
  return str7;
};
