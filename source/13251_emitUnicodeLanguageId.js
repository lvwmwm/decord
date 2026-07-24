// Module ID: 13251
// Function ID: 101901
// Name: emitUnicodeLanguageId
// Dependencies: [1257]

// Module 13251 (emitUnicodeLanguageId)
const require = arg1;
const dependencyMap = arg6;
function emitUnicodeLanguageId(lang) {
  let variants;
  let str = "";
  if (lang) {
    const items = [, , ];
    ({ lang: arr[0], script: arr[1], region: arr[2], variants } = lang);
    if (!variants) {
      variants = [];
    }
    const obj = require(1257) /* createExporter */;
    const _Boolean = Boolean;
    const found = require(1257) /* createExporter */.__spreadArray(items, variants, true).filter(Boolean);
    str = found.join("-");
    const __spreadArrayResult = require(1257) /* createExporter */.__spreadArray(items, variants, true);
  }
  return str;
}
arg5.emitUnicodeLanguageId = emitUnicodeLanguageId;
arg5.emitUnicodeLocaleId = function emitUnicodeLocaleId(parseUnicodeLocaleIdResult) {
  const extensions = parseUnicodeLocaleIdResult.extensions;
  const items = [emitUnicodeLanguageId(parseUnicodeLocaleIdResult.lang)];
  for (let num = 0; num < extensions.length; num = num + 1) {
    let iter = extensions[num];
    let arr = items.push(iter.type);
    let type = iter.type;
    if ("u" === type) {
      let push2 = items.push;
      let tmp7 = require;
      let tmp8 = dependencyMap;
      let obj2 = require(1257) /* createExporter */;
      let obj3 = require(1257) /* createExporter */;
      let keywords = iter.keywords;
      let __spreadArrayResult = obj3.__spreadArray([], iter.attributes, false);
      let applyResult = push2.apply(items, obj2.__spreadArray(__spreadArrayResult, keywords.reduce((arr) => arr.concat(arg1), []), false));
    } else if ("t" === type) {
      let push = items.push;
      let tmp3 = require;
      let tmp4 = dependencyMap;
      let obj = require(1257) /* createExporter */;
      let tmp5 = emitUnicodeLanguageId;
      let items1 = [emitUnicodeLanguageId(iter.lang)];
      let fields = iter.fields;
      let applyResult1 = push.apply(items, obj.__spreadArray(items1, fields.reduce((arr) => arr.concat(arg1), []), false));
    } else {
      arr = items.push(iter.value);
    }
  }
  const found = items.filter(Boolean);
  return found.join("-");
};
