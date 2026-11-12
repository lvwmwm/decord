// Module ID: 12452
// Function ID: 12453
// Name: buildConjureProjectLink
// Dependencies: [2]
// Exports: default

// Module 12452 (buildConjureProjectLink)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/share/buildConjureProjectLink.tsx");

export default function buildConjureProjectLink(arg0, str) {
  let tmp = arg2;
  if (arg2 === undefined) {
    tmp = null;
  }
  str = "conjure.city";
  if (RELEASE_CHANNEL.startsWith("staging")) {
    str = "conjure.town";
  }
  const str2 = str.normalize("NFKD");
  const str3 = str2.replace(/[\u0300-\u036f]/g, "");
  const str4 = str3.toLowerCase();
  const replaced = str4.replace(/[^a-z0-9]+/g, "-");
  const str5 = replaced.slice(0, 48);
  const replaced1 = str5.replace(/^-+|-+$/g, "");
  let str6 = "app";
  if ("" !== replaced1) {
    str6 = replaced1;
  }
  const combined = "https://" + str + "/" + arg0 + "/" + str6;
  let combined1 = combined;
  if (null != tmp) {
    const _HermesInternal = HermesInternal;
    combined1 = "" + combined + "/" + tmp;
  }
  return combined1;
};
