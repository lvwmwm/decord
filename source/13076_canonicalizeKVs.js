// Module ID: 13076
// Function ID: 99368
// Name: canonicalizeKVs
// Dependencies: [0, 0, 0, 0, 0]

// Module 13076 (canonicalizeKVs)
function canonicalizeKVs(arg0) {
  const obj = {};
  const items = [];
  for (let num = 0; num < arg0.length; num = num + 1) {
    let tmp = arg0[num];
    if (!(tmp[0] in obj)) {
      obj[tmp[0]] = 1;
      if (tmp[1]) {
        if ("true" !== tmp[1]) {
          let str2 = tmp[0];
          let items1 = [str2.toLowerCase(), ];
          let str3 = tmp[1];
          items1[1] = str3.toLowerCase();
          let arr = items.push(items1);
        }
      }
      let str = tmp[0];
      let items2 = [str.toLowerCase()];
      arr = items.push(items2);
    }
  }
  return items.sort(compareKV);
}
function compareKV(arg0, arg1) {
  let num = -1;
  if (arg0[0] >= arg1[0]) {
    let num2 = 0;
    if (arg0[0] > arg1[0]) {
      num2 = 1;
    }
    num = num2;
  }
  return num;
}
function compareExtension(type, type2) {
  let num = -1;
  if (type.type >= type2.type) {
    let num2 = 0;
    if (type.type > type2.type) {
      num2 = 1;
    }
    num = num2;
  }
  return num;
}
function mergeVariants(variants, variants2) {
  const __spreadArrayResult = variants2(arg6[0]).__spreadArray([], variants, true);
  for (let num = 0; num < variants2.length; num = num + 1) {
    let tmp = variants2[num];
    if (variants.indexOf(tmp) < 0) {
      let arr = __spreadArrayResult.push(tmp);
    }
  }
  return __spreadArrayResult;
}
function canonicalizeUnicodeLanguageId(lang) {
  let tmp = lang;
  if (lang.variants.length) {
    let variants = lang.variants;
    let num = 0;
    tmp = lang;
    if (0 < variants.length) {
      let obj = { lang: lang.lang };
      const items = [variants[num]];
      obj.variants = items;
      const str = arg1(arg6[1]).languageAlias[closure_0(undefined, closure_1[2]).emitUnicodeLanguageId(undefined, obj)];
      while (!str) {
        num = num + 1;
        tmp = lang;
      }
      obj = {};
      const result = arg1(arg6[3]).parseUnicodeLanguageId(str.split(arg1(arg6[3]).SEPARATOR));
      obj.lang = result.lang;
      obj.script = lang.script || result.script;
      obj.region = lang.region || result.region;
      obj.variants = mergeVariants(lang.variants, result.variants);
      tmp = obj;
    }
  }
  let tmp8 = tmp;
  if (tmp.script) {
    tmp8 = tmp;
    if (tmp.region) {
      obj = {};
      ({ lang: obj3.lang, script: obj3.script, region: obj3.region } = tmp);
      obj.variants = [];
      const str2 = arg1(arg6[1]).languageAlias[closure_0(undefined, closure_1[2]).emitUnicodeLanguageId(undefined, obj)];
      tmp8 = tmp;
      if (str2) {
        const obj1 = {};
        const result1 = arg1(arg6[3]).parseUnicodeLanguageId(str2.split(arg1(arg6[3]).SEPARATOR));
        ({ lang: obj4.lang, script: obj4.script, region: obj4.region } = result1);
        obj1.variants = tmp.variants;
        tmp8 = obj1;
      }
    }
  }
  let tmp14 = tmp8;
  if (tmp8.region) {
    const obj2 = {};
    ({ lang: obj5.lang, region: obj5.region } = tmp8);
    obj2.variants = [];
    const str3 = arg1(arg6[1]).languageAlias[closure_0(undefined, closure_1[2]).emitUnicodeLanguageId(undefined, obj2)];
    tmp14 = tmp8;
    if (str3) {
      const obj3 = {};
      const result2 = arg1(arg6[3]).parseUnicodeLanguageId(str3.split(arg1(arg6[3]).SEPARATOR));
      obj3.lang = result2.lang;
      obj3.script = tmp8.script || result2.script;
      obj3.region = result2.region;
      obj3.variants = tmp8.variants;
      tmp14 = obj3;
    }
  }
  const obj4 = { lang: tmp14.lang, variants: [] };
  const str4 = arg1(arg6[1]).languageAlias[closure_0(undefined, closure_1[2]).emitUnicodeLanguageId(undefined, obj4)];
  let tmp20 = tmp14;
  if (str4) {
    const obj5 = {};
    const result3 = arg1(arg6[3]).parseUnicodeLanguageId(str4.split(arg1(arg6[3]).SEPARATOR));
    obj5.lang = result3.lang;
    obj5.script = tmp14.script || result3.script;
    obj5.region = tmp14.region || result3.region;
    obj5.variants = tmp14.variants;
    tmp20 = obj5;
  }
  if (tmp20.region) {
    const formatted = tmp20.region.toUpperCase();
    const str6 = arg1(arg6[1]).territoryAlias[formatted];
    let tmp27;
    if (str6) {
      const parts = str6.split(" ");
      const first = parts[0];
      const obj6 = {};
      ({ lang: obj9.lang, script: obj9.script } = tmp20);
      obj6.variants = [];
      const str8 = arg1(arg6[4]).likelySubtags[closure_0(undefined, closure_1[2]).emitUnicodeLanguageId(undefined, obj6)];
      tmp27 = first;
      if (str8) {
        const region = arg1(arg6[3]).parseUnicodeLanguageId(str8.split(arg1(arg6[3]).SEPARATOR)).region;
        let tmp33 = region;
        if (region) {
          tmp33 = parts.indexOf(region) > -1;
        }
        tmp27 = first;
        if (tmp33) {
          tmp27 = region;
        }
      }
    }
    if (tmp27) {
      tmp20.region = tmp27;
    }
    tmp20.region = tmp20.region.toUpperCase();
    const str5 = tmp20.region;
    const str9 = tmp20.region;
  }
  if (tmp20.script) {
    const script = tmp20.script;
    const formatted1 = tmp20.script[0].toUpperCase();
    tmp20.script = formatted1 + script.slice(1).toLowerCase();
    if (arg1(arg6[1]).scriptAlias[tmp20.script]) {
      tmp20.script = arg1(arg6[1]).scriptAlias[tmp20.script];
    }
    const str10 = tmp20.script[0];
    const str11 = script.slice(1);
  }
  if (tmp20.variants.length) {
    let num17 = 0;
    if (0 < tmp20.variants.length) {
      do {
        let str12 = tmp20.variants[num17];
        let formatted2 = str12.toLowerCase();
        let tmp40 = closure_0;
        let tmp41 = closure_1;
        if (closure_0(closure_1[1]).variantAlias[formatted2]) {
          let tmp42 = closure_0;
          let tmp43 = closure_1;
          let tmp44 = closure_0(closure_1[1]).variantAlias[formatted2];
          if (closure_0(closure_1[3]).isUnicodeVariantSubtag(tmp44)) {
            tmp20.variants[num17] = tmp44;
            let tmp49 = tmp44;
          } else {
            let tmp45 = closure_0;
            let tmp46 = closure_1;
            let tmp47 = tmp44;
            if (closure_0(closure_1[3]).isUnicodeLanguageSubtag(tmp44)) {
              tmp20.lang = tmp44;
              let tmp48 = tmp44;
            }
          }
        }
        num17 = num17 + 1;
      } while (num17 < tmp20.variants.length);
    }
    variants = tmp20.variants;
    const sorted = variants.sort();
  }
  return tmp20;
}
arg5.canonicalizeUnicodeLanguageId = canonicalizeUnicodeLanguageId;
arg5.CanonicalizeUnicodeLocaleId = function CanonicalizeUnicodeLocaleId(lang) {
  lang.lang = canonicalizeUnicodeLanguageId(lang.lang);
  if (lang.extensions) {
    let extensions = lang.extensions;
    let num = 0;
    if (0 < extensions.length) {
      do {
        let iter = extensions[num];
        let type = iter.type;
        if ("u" === type) {
          let tmp4 = closure_2;
          iter.keywords = closure_2(iter.keywords);
          if (iter.attributes) {
            let attributes = iter.attributes;
            let _Object = Object;
            let keys = Object.keys(attributes.reduce((arg0, str) => {
              arg0[str.toLowerCase()] = 1;
              return arg0;
            }, {}));
            iter.attributes = keys.sort();
          }
        } else if ("t" === type) {
          if (iter.lang) {
            let tmp2 = closure_6;
            iter.lang = closure_6(iter.lang);
          }
          let tmp3 = closure_2;
          iter.fields = closure_2(iter.fields);
        } else {
          let str3 = iter.value;
          iter.value = str3.toLowerCase();
        }
        num = num + 1;
      } while (num < extensions.length);
    }
    extensions = lang.extensions;
    const sorted = extensions.sort(compareExtension);
  }
  return lang;
};
