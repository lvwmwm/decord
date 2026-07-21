// Module ID: 13080
// Function ID: 99399
// Name: isUnicodeLanguageSubtag
// Dependencies: []

// Module 13080 (isUnicodeLanguageSubtag)
function isUnicodeLanguageSubtag(GetOptionResult) {
  return regex10.test(GetOptionResult);
}
function isUnicodeRegionSubtag(GetOptionResult2) {
  return regex8.test(GetOptionResult2);
}
function isUnicodeScriptSubtag(GetOptionResult1) {
  return regex6.test(GetOptionResult1);
}
function isUnicodeVariantSubtag(arg0) {
  return regex9.test(arg0);
}
function parseUnicodeLanguageId(locale) {
  let parts = locale;
  if ("string" === typeof locale) {
    parts = locale.split(arg5.SEPARATOR);
  }
  let arr = parts.shift();
  if (arr) {
    if ("root" === arr) {
      let obj = { lang: "root", variants: [] };
      return obj;
    } else if (isUnicodeLanguageSubtag(arr)) {
      let length = parts.length;
      if (length) {
        length = isUnicodeScriptSubtag(parts[0]);
      }
      arr = undefined;
      if (length) {
        arr = parts.shift();
      }
      let length2 = parts.length;
      if (length2) {
        length2 = isUnicodeRegionSubtag(parts[0]);
      }
      let arr1;
      if (length2) {
        arr1 = parts.shift();
      }
      obj = {};
      if (parts.length) {
        if (isUnicodeVariantSubtag(parts[0])) {
          const arr2 = parts.shift();
          while (!(arr2 in obj)) {
            obj[arr2] = 1;
            if (parts.length) {
              let tmp19 = isUnicodeVariantSubtag;
            }
          }
          const _RangeError3 = RangeError;
          const concat = "Duplicate variant \"".concat;
          const rangeError = new RangeError("Duplicate variant \"".concat(arr2, "\""));
          throw rangeError;
        }
      }
      obj = { lang: arr, script: arr, region: arr1 };
      const _Object = Object;
      obj.variants = Object.keys(obj);
      return obj;
    } else {
      const _RangeError2 = RangeError;
      const rangeError1 = new RangeError("Malformed unicode_language_subtag");
      throw rangeError1;
    }
  } else {
    const _RangeError = RangeError;
    const rangeError2 = new RangeError("Missing unicode_language_subtag");
    throw rangeError2;
  }
}
function parseUnicodeExtension(parts) {
  const items = [];
  if (parts.length) {
    let tmp2 = parseKeyword(parts);
    if (tmp2) {
      items.push(tmp2);
      while (parts.length) {
        let tmp4 = parseKeyword;
        tmp2 = parseKeyword(parts);
        if (!tmp2) {
          break;
        }
      }
    }
  }
  const items1 = [];
  if (items.length) {
    let obj = { type: "u", keywords: items, attributes: items1 };
    return obj;
  } else {
    if (parts.length) {
      if (regex3.test(parts[0])) {
        items1.push(parts.shift());
        while (parts.length) {
          let tmp7 = regex3;
          if (!regex3.test(parts[0])) {
            break;
          }
        }
      }
    }
    if (parts.length) {
      let tmp9 = parseKeyword(parts);
      if (tmp9) {
        items.push(tmp9);
        while (parts.length) {
          let tmp11 = parseKeyword;
          tmp9 = parseKeyword(parts);
          if (!tmp9) {
            break;
          }
        }
      }
    }
    if (!items.length) {
      if (!items1.length) {
        const _RangeError = RangeError;
        const rangeError = new RangeError("Malformed unicode_extension");
        throw rangeError;
      }
    }
    obj = { type: "u", attributes: items1, keywords: items };
    return obj;
  }
}
function parseKeyword(arr) {
  if (regex4.test(arr[0])) {
    const items = [];
    arr = arr.shift();
    if (arr.length) {
      if (regex5.test(arr[0])) {
        arr = items.push(arr.shift());
        while (arr.length) {
          let tmp4 = regex5;
          if (!regex5.test(arr[0])) {
            break;
          }
        }
      }
    }
    let str = "";
    if (items.length) {
      str = items.join(arg5.SEPARATOR);
    }
    const items1 = [arr, str];
    return items1;
  }
}
function parseTransformedExtension(parts) {
  while (true) {
    let items = [];
    let tmp2 = parts;
    if (!parts.length) {
      break;
    } else {
      let tmp3 = regex11;
      let tmp4 = parts;
      let num = 0;
      if (!regex11.test(parts[0])) {
        break;
      } else {
        while (true) {
          let tmp5 = parts;
          let arr = parts.shift();
          let items1 = [];
          if (parts.length) {
            let tmp7 = regex3;
            let tmp8 = parts;
            if (regex3.test(parts[0])) {
              let tmp9 = items1;
              let tmp10 = parts;
              arr = items1.push(parts.shift());
              while (parts.length) {
                let tmp12 = regex3;
                let tmp13 = parts;
                if (!regex3.test(parts[0])) {
                  break;
                }
              }
            }
          }
          let tmp14 = items1;
          if (!items1.length) {
            break;
          } else {
            let tmp21 = items;
            let tmp22 = arr;
            let items2 = [arr, ];
            let tmp23 = items1;
            let tmp24 = arg5;
            items2[1] = items1.join(arg5.SEPARATOR);
            let arr1 = items.push(items2);
            let tmp26 = parts;
            if (!parts.length) {
              break label0;
            } else {
              let tmp27 = regex11;
              let tmp28 = parts;
              if (regex11.test(parts[0])) {
                continue;
              } else {
                break label0;
              }
              break label0;
            }
            break label0;
          }
        }
        let tmp15 = globalThis;
        let _RangeError = RangeError;
        let str = "Missing tvalue for tkey \"";
        let concat = "Missing tvalue for tkey \"".concat;
        let tmp16 = arr;
        let str2 = "\"";
        let tmp17 = new.target;
        let tmp18 = new.target;
        let rangeError = new RangeError("Missing tvalue for tkey \"".concat(arr, "\""));
        let tmp20 = rangeError;
        throw rangeError;
      }
    }
    let tmp29 = items;
    if (items.length) {
      let obj = {};
      let str4 = "t";
      obj.type = "t";
      obj.fields = items;
      obj.lang = tmp;
      return obj;
    } else {
      let tmp30 = globalThis;
      let _RangeError2 = RangeError;
      let tmp31 = new.target;
      let str3 = "Malformed transformed_extension";
      let tmp32 = new.target;
      let rangeError1 = new RangeError("Malformed transformed_extension");
      let tmp34 = rangeError1;
      throw rangeError1;
    }
  }
}
function parsePuExtension(parts) {
  const items = [];
  if (parts.length) {
    if (regex.test(parts[0])) {
      items.push(parts.shift());
      while (parts.length) {
        let tmp3 = regex;
        if (!regex.test(parts[0])) {
          break;
        }
      }
    }
  }
  if (items.length) {
    const obj = { type: "x", value: items.join(arg5.SEPARATOR) };
    return obj;
  } else {
    const _RangeError = RangeError;
    const rangeError = new RangeError("Malformed private_use_extension");
    throw rangeError;
  }
}
function parseOtherExtensionValue(parts) {
  const items = [];
  if (parts.length) {
    if (regex2.test(parts[0])) {
      items.push(parts.shift());
      while (parts.length) {
        let tmp3 = regex2;
        if (!regex2.test(parts[0])) {
          break;
        }
      }
    }
  }
  let str = "";
  if (items.length) {
    str = items.join(arg5.SEPARATOR);
  }
  return str;
}
arg5.SEPARATOR = undefined;
arg5.isUnicodeLanguageSubtag = isUnicodeLanguageSubtag;
arg5.isStructurallyValidLanguageTag = function isStructurallyValidLanguageTag(locale) {
  parseUnicodeLanguageId(locale.split(arg5.SEPARATOR));
  return true;
};
arg5.isUnicodeRegionSubtag = isUnicodeRegionSubtag;
arg5.isUnicodeScriptSubtag = isUnicodeScriptSubtag;
arg5.isUnicodeVariantSubtag = isUnicodeVariantSubtag;
arg5.parseUnicodeLanguageId = parseUnicodeLanguageId;
arg5.parseUnicodeLocaleId = function parseUnicodeLocaleId(locale) {
  let arr;
  const parts = locale.split(arg5.SEPARATOR);
  const lang = parseUnicodeLanguageId(parts);
  let obj = arg1(arg6[0]);
  const items = [];
  if (parts.length) {
    obj = {};
    while (true) {
      arr = parts.shift();
      if ("u" !== arr) {
        if ("U" !== arr) {
          if ("t" !== arr) {
            if ("T" !== arr) {
              if ("x" !== arr) {
                if ("X" !== arr) {
                  let tmp45 = regex7;
                  if (regex7.test(arr)) {
                    if (arr in obj) {
                      break;
                    } else {
                      obj = { type: arr };
                      let tmp11 = parseOtherExtensionValue;
                      obj.value = parseOtherExtensionValue(parts);
                      obj[obj.type] = obj;
                      arr = items.push(obj);
                      let tmp13 = tmp2;
                      let tmp14 = tmp3;
                      let tmp15 = tmp4;
                    }
                  } else {
                    let tmp6 = globalThis;
                    let _RangeError = RangeError;
                    let tmp7 = new.target;
                    let str7 = "Malformed extension type";
                    let tmp8 = new.target;
                    let rangeError = new RangeError("Malformed extension type");
                    let tmp10 = rangeError;
                    throw rangeError;
                  }
                }
              }
              if (tmp4) {
                let tmp24 = globalThis;
                let _RangeError3 = RangeError;
                let tmp25 = new.target;
                let str10 = "There can only be 1 -x- extension";
                let tmp26 = new.target;
                let rangeError1 = new RangeError("There can only be 1 -x- extension");
                let tmp28 = rangeError1;
                throw rangeError1;
              } else {
                let tmp21 = parsePuExtension;
                let tmp22 = parsePuExtension(parts);
                let arr1 = items.push(tmp22);
                tmp13 = tmp2;
                tmp14 = tmp3;
                tmp15 = tmp22;
              }
            }
          }
          if (tmp3) {
            let tmp32 = globalThis;
            let _RangeError4 = RangeError;
            let tmp33 = new.target;
            let str11 = "There can only be 1 -t- extension";
            let tmp34 = new.target;
            let rangeError2 = new RangeError("There can only be 1 -t- extension");
            let tmp36 = rangeError2;
            throw rangeError2;
          } else {
            let tmp29 = parseTransformedExtension;
            let tmp30 = parseTransformedExtension(parts);
            let arr2 = items.push(tmp30);
            tmp13 = tmp2;
            tmp14 = tmp30;
            tmp15 = tmp4;
          }
        }
        let tmp2 = tmp13;
        let tmp3 = tmp14;
        let tmp4 = tmp15;
        if (parts.length) {
          continue;
        } else {
          let obj1 = { extensions: items };
          let obj2 = obj1;
        }
      }
      if (tmp2) {
        let tmp40 = globalThis;
        let _RangeError5 = RangeError;
        let tmp41 = new.target;
        let str12 = "There can only be 1 -u- extension";
        let tmp42 = new.target;
        let rangeError3 = new RangeError("There can only be 1 -u- extension");
        let tmp44 = rangeError3;
        throw rangeError3;
      } else {
        let tmp37 = parseUnicodeExtension;
        let tmp38 = parseUnicodeExtension(parts);
        let arr3 = items.push(tmp38);
        tmp13 = tmp38;
        tmp14 = tmp3;
        tmp15 = tmp4;
      }
    }
    const _RangeError2 = RangeError;
    const concat = "There can only be 1 -".concat;
    const rangeError4 = new RangeError("There can only be 1 -".concat(arr, "- extension"));
    throw rangeError4;
  } else {
    obj2 = { extensions: items };
  }
  return obj.__assign({ lang }, obj2);
};
let closure_3 = /^[a-z0-9]{1,8}$/i;
let closure_4 = /^[a-z0-9]{2,8}$/i;
let closure_5 = /^[a-z0-9]{3,8}$/i;
let closure_6 = /^[a-z0-9][a-z]$/i;
let closure_7 = /^[a-z0-9]{3,8}$/i;
let closure_8 = /^[a-z]{4}$/i;
let closure_9 = /^[0-9a-svwyz]$/i;
let closure_10 = /^([a-z]{2}|[0-9]{3})$/i;
let closure_11 = /^([a-z0-9]{5,8}|[0-9][a-z0-9]{3})$/i;
let closure_12 = /^([a-z]{2,3}|[a-z]{5,8})$/i;
let closure_13 = /^[a-z][0-9]$/i;
arg5.SEPARATOR = "-";
