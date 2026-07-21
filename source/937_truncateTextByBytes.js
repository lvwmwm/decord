// Module ID: 937
// Function ID: 10136
// Name: truncateTextByBytes
// Dependencies: []

// Module 937 (truncateTextByBytes)
function truncateTextByBytes(content, diff) {
  if (utf8Bytes(content) <= diff) {
    return content;
  } else {
    let length = content.length;
    let str = "";
    let num4 = 0;
    let str2 = "";
    if (0 <= length) {
      do {
        let _Math = Math;
        let rounded = Math.floor((num4 + length) / 2);
        let substr = content.slice(0, rounded);
        let tmp4 = closure_0;
        if (closure_0(substr) <= diff) {
          num4 = rounded + 1;
          diff = length;
          str = substr;
        } else {
          diff = rounded - 1;
        }
        length = diff;
        str2 = str;
      } while (num4 <= diff);
    }
    return str2;
  }
}
function getPartText(text) {
  let tmp = text;
  if ("string" !== typeof text) {
    let str2 = "";
    if ("text" in text) {
      str2 = text.text;
    }
    tmp = str2;
  }
  return tmp;
}
function withPartText(arg0, text) {
  let merged = text;
  if ("string" !== typeof arg0) {
    const _Object = Object;
    const obj = { text };
    merged = Object.assign({}, arg0, obj);
  }
  return merged;
}
function isContentMedia(source) {
  let tmp = !source;
  if (!tmp) {
    tmp = "object" !== typeof source;
  }
  let tmp2 = !tmp;
  if (!tmp) {
    let tmp3 = "type" in source;
    if (tmp3) {
      tmp3 = "string" === typeof source.type;
    }
    if (tmp3) {
      tmp3 = "source" in source;
    }
    if (tmp3) {
      tmp3 = isContentMedia(source.source);
    }
    if (!tmp3) {
      tmp3 = hasInlineData(source);
    }
    if (!tmp3) {
      let tmp6 = "media_type" in source;
      if (tmp6) {
        tmp6 = "string" === typeof source.media_type;
      }
      if (tmp6) {
        tmp6 = "data" in source;
      }
      tmp3 = tmp6;
    }
    if (!tmp3) {
      let startsWithResult = "image_url" in source;
      if (startsWithResult) {
        startsWithResult = "string" === typeof source.image_url;
      }
      if (startsWithResult) {
        const image_url = source.image_url;
        startsWithResult = image_url.startsWith("data:");
      }
      tmp3 = startsWithResult;
    }
    if (!tmp3) {
      let tmp8 = "type" in source;
      if (tmp8) {
        let tmp9 = "blob" === source.type;
        if (!tmp9) {
          tmp9 = "base64" === source.type;
        }
        tmp8 = tmp9;
      }
      tmp3 = tmp8;
    }
    if (!tmp3) {
      tmp3 = "b64_json" in source;
    }
    if (!tmp3) {
      let tmp10 = "type" in source;
      if (tmp10) {
        tmp10 = "result" in source;
      }
      if (tmp10) {
        tmp10 = "image_generation" === source.type;
      }
      tmp3 = tmp10;
    }
    if (!tmp3) {
      let startsWithResult1 = "uri" in source;
      if (startsWithResult1) {
        startsWithResult1 = "string" === typeof source.uri;
      }
      if (startsWithResult1) {
        const uri = source.uri;
        startsWithResult1 = uri.startsWith("data:");
      }
      tmp3 = startsWithResult1;
    }
    tmp2 = tmp3;
  }
  return tmp2;
}
function hasInlineData(inlineData) {
  let tmp = "inlineData" in inlineData && inlineData.inlineData;
  if (tmp) {
    tmp = "object" === typeof inlineData.inlineData;
  }
  if (tmp) {
    tmp = "data" in inlineData.inlineData;
  }
  if (tmp) {
    tmp = "string" === typeof inlineData.inlineData.data;
  }
  return tmp;
}
function isPartsMessage(parts) {
  let isArray = null !== parts;
  if (isArray) {
    isArray = "object" === typeof parts;
  }
  if (isArray) {
    isArray = "parts" in parts;
  }
  if (isArray) {
    const _Array = Array;
    isArray = Array.isArray(parts.parts);
  }
  if (isArray) {
    isArray = parts.parts.length > 0;
  }
  return isArray;
}
function truncateSingleMessage(content, arg1) {
  if (content) {
    if ("object" === typeof content) {
      let tmp3 = null !== content && tmp;
      if (tmp3) {
        tmp3 = "content" in content;
      }
      if (tmp3) {
        tmp3 = "string" === typeof content.content;
      }
      if (!tmp3) {
        if (isPartsMessage(content)) {
          let items = function truncatePartsMessage(parts, arg1) {
            parts = parts.parts;
            let obj = { parts: parts.map((arg0) => callback(arg0, "")) };
            const diff = arg1 - callback(Object.assign({}, parts, obj));
            let diff1 = diff;
            if (diff <= 0) {
              return [];
            } else {
              const items = [];
              for (const item10024 of parts) {
                let tmp21 = item10024;
                let tmp22 = closure_5;
                let tmp23 = closure_5(item10024);
                let tmp25 = closure_0;
                let tmp24 = tmp23;
                let tmp26 = closure_0(tmp23);
                let tmp28 = diff1;
                if (tmp26 <= diff1) {
                  let tmp14 = items;
                  let tmp15 = item10024;
                  let arr = items.push(tmp21);
                  let tmp17 = diff1;
                  let tmp18 = tmp26;
                  diff1 = diff1 - tmp27;
                  // continue
                } else {
                  let tmp3 = items;
                  if (0 === items.length) {
                    let tmp4 = closure_4;
                    let tmp5 = tmp23;
                    let tmp6 = diff1;
                    let tmp7 = closure_4(tmp24, diff1);
                    if (tmp7) {
                      let tmp9 = items;
                      let tmp10 = closure_6;
                      let tmp11 = item10024;
                      let tmp12 = tmp7;
                      arr = items.push(closure_6(tmp21, tmp8));
                    }
                    obj3.return();
                    // break
                  } else {
                    obj3.return();
                    // break
                  }
                  break;
                }
                let tmp19 = items;
                if (items.length <= 0) {
                  let items1 = [];
                } else {
                  let _Object = Object;
                  obj = { parts: items };
                  items1 = [Object.assign({}, arg0, obj)];
                }
                return items1;
              }
            }
          }(content, 20000);
        } else {
          items = [];
        }
      }
      const _Object = Object;
      let obj = { content: "" };
      const diff = 20000 - jsonBytes(Object.assign({}, content, obj));
      if (diff <= 0) {
        let items1 = [];
      } else {
        const _Object2 = Object;
        obj = { content: truncateTextByBytes(content.content, diff) };
        items1 = [Object.assign({}, content, obj)];
      }
    }
  }
  return [];
}
function stripInlineMediaFromSingleMessage(source) {
  const merged = Object.assign({}, source);
  if (isContentMedia(merged.source)) {
    tmp2.source = stripInlineMediaFromSingleMessage(tmp2.source);
  }
  if (hasInlineData(source)) {
    const _Object = Object;
    const obj = { data: closure_2 };
    tmp2.inlineData = Object.assign({}, source.inlineData, obj);
  }
  const iter = closure_3[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp9 = merged;
    if ("string" === typeof tmp2[nextResult]) {
      let tmp10 = merged;
      let tmp11 = nextResult;
      let tmp12 = closure_2;
      tmp2[tmp8] = closure_2;
    }
    // continue
  }
  return merged;
}
function stripInlineMediaFromMessages(arr) {
  return arr.map((arg0) => {
    let tmp2 = arg0;
    if (arg0) {
      tmp2 = "object" === typeof tmp;
    }
    if (!tmp2) {
      return tmp;
    } else {
      let isArray = null !== tmp;
      if (isArray) {
        isArray = "object" === typeof tmp;
      }
      if (isArray) {
        isArray = "content" in tmp;
      }
      if (isArray) {
        const _Array = Array;
        isArray = Array.isArray(tmp.content);
      }
      if (isArray) {
        const _Object2 = Object;
        let obj = { content: callback4(tmp.content) };
        let merged = Object.assign({}, tmp, obj);
      } else {
        let tmp6 = "content" in tmp;
        if (tmp6) {
          tmp6 = callback(tmp.content);
        }
        if (tmp6) {
          const _Object = Object;
          obj = { content: callback3(tmp.content) };
          merged = Object.assign({}, tmp, obj);
        }
      }
      let merged1 = merged;
      if (callback2(tmp)) {
        let tmp16 = tmp;
        if (null != merged) {
          tmp16 = merged;
        }
        obj = { parts: callback4(tmp.parts) };
        merged1 = Object.assign({}, tmp16, obj);
      }
      if (callback(merged1)) {
        let tmp20 = callback3(merged1);
      } else {
        tmp20 = merged1;
        if (callback(tmp)) {
          tmp20 = callback3(tmp);
        }
      }
    }
  });
}
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
function utf8Bytes(content) {
  const textEncoder = new TextEncoder();
  return textEncoder.encode(content).length;
}
function jsonBytes(arr) {
  return utf8Bytes(JSON.stringify(arr));
}
let closure_2 = "[Filtered]";
let closure_3 = [true, true, true, true, true, true];
arg5.DEFAULT_GEN_AI_MESSAGES_BYTE_LIMIT = 20000;
arg5.truncateGenAiMessages = function truncateGenAiMessages(arr) {
  let tmp = arr;
  if (Array.isArray(arr)) {
    tmp = arr;
    if (0 !== arr.length) {
      arr = stripInlineMediaFromMessages(arr);
      tmp = arr;
      if (jsonBytes(arr) > 20000) {
        let length = arr.length;
        let diff = arr.length - 1;
        let tmp3 = length;
        let num2 = 0;
        if (diff >= 0) {
          while (true) {
            let tmp2 = tmp13[diff];
            if (!tmp2) {
              let sum = num2;
              if (tmp2) {
                sum = num2 + tmp2;
              }
              let diff1 = diff - 1;
              num2 = sum;
              length = diff;
              tmp3 = diff;
              diff = diff1;
              if (diff1 < 0) {
                break;
              }
            } else {
              tmp3 = length;
              if (num2 + tmp2 > 20000) {
                break;
              }
            }
            break;
          }
        }
        if (tmp3 === arr.length) {
          let substr = truncateSingleMessage(arr[arr.length - 1], 20000);
        } else {
          substr = arr.slice(tmp3);
        }
      }
    }
  }
  return tmp;
};
arg5.truncateGenAiStringInput = function truncateGenAiStringInput(arr) {
  return truncateTextByBytes(arr, 20000);
};
