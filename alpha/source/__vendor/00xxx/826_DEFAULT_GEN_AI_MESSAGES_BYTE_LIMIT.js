// Module ID: 826
// Function ID: 827
// Name: DEFAULT_GEN_AI_MESSAGES_BYTE_LIMIT
// Dependencies: []
// Exports: truncateGenAiMessages, truncateGenAiStringInput

// Module 826 (DEFAULT_GEN_AI_MESSAGES_BYTE_LIMIT)
function truncateTextByBytes(content, c0) {
  if (typeof utf8Bytes === "function") {
    const _TextEncoder = TextEncoder;
    const self = this;
    const self2 = this;
    const encoder = new TextEncoder();
    if (encoder.encode(content).length <= c0) {
      return content;
    } else {
      let length = content.length;
      let str = "";
      let num = 0;
      let str2 = "";
      if (0 <= length) {
        const _Math = Math;
        const rounded = Math.floor((num + length) / 2);
        const substr = content.slice(0, rounded);
        let tmp8 = str;
        let sum = num;
        while (typeof utf8Bytes === "function") {
          let diff;
          let _TextEncoder2 = TextEncoder;
          let self3 = this;
          let self4 = this;
          let encoder2 = new TextEncoder();
          if (encoder2.encode(substr).length <= c0) {
            sum = rounded + 1;
            tmp8 = substr;
            diff = length;
          } else {
            diff = rounded - 1;
          }
          str = tmp8;
          length = diff;
          num = sum;
          str2 = tmp8;
        }
        throw new TypeError("Trying to call a non-function");
      }
      return str2;
    }
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}
function getPartText(text) {
  let tmp = text;
  if (typeof text !== "string") {
    let str = "";
    if ("text" in text) {
      str = text.text;
    }
    tmp = str;
  }
  return tmp;
}
function withPartText(str, text) {
  let tmp = text;
  if (typeof str !== "string") {
    const obj = { text };
    const merged = Object.assign(str);
    tmp = obj;
  }
  return tmp;
}
function isContentMedia(source) {
  let tmp = !source;
  if (source) {
    tmp = typeof source !== "object";
  }
  let tmp2 = !tmp;
  if (tmp2) {
    let tmp3 = "type" in source && typeof source.type === "string" && "source" in source && isContentMedia(source.source);
    if (!tmp3) {
      tmp3 = "inlineData" in source && source.inlineData && typeof source.inlineData === "object" && "data" in source.inlineData && typeof source.inlineData.data === "string";
      const tmp5 = "inlineData" in source && source.inlineData && typeof source.inlineData === "object" && "data" in source.inlineData && typeof source.inlineData.data === "string";
    }
    if (!tmp3) {
      tmp3 = "media_type" in source && typeof source.media_type === "string" && "data" in source;
      const tmp6 = "media_type" in source && typeof source.media_type === "string" && "data" in source;
    }
    if (!tmp3) {
      let startsWithResult = "image_url" in source && typeof source.image_url === "string";
      if (startsWithResult) {
        const image_url = source.image_url;
        startsWithResult = image_url.startsWith("data:");
      }
      tmp3 = startsWithResult;
    }
    if (!tmp3) {
      let tmp8 = "type" in source;
      if (tmp8) {
        tmp8 = "blob" === source.type || "base64" === source.type;
        const tmp9 = "blob" === source.type || "base64" === source.type;
      }
      tmp3 = tmp8;
    }
    if (!tmp3) {
      tmp3 = "b64_json" in source;
    }
    if (!tmp3) {
      tmp3 = "type" in source && "result" in source && "image_generation" === source.type;
      const tmp10 = "type" in source && "result" in source && "image_generation" === source.type;
    }
    if (!tmp3) {
      let startsWithResult1 = "uri" in source && typeof source.uri === "string";
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
  return "inlineData" in inlineData && inlineData.inlineData && typeof inlineData.inlineData === "object" && "data" in inlineData.inlineData && typeof inlineData.inlineData.data === "string";
}
function stripInlineMediaFromSingleMessage(source) {
  const obj = {};
  const merged = Object.assign(source);
  if (isContentMedia(obj.source)) {
    obj.source = stripInlineMediaFromSingleMessage(obj.source);
  }
  if (hasInlineData(source)) {
    const obj2 = { data };
    const merged1 = Object.assign(source.inlineData);
    obj.inlineData = obj2;
  }
  for (const item10024 of closure_9) {
    if (typeof obj[item10024] === "string") {
      obj[tmp6] = data;
    }
    continue;
  }
  return obj;
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let c0 = 20000;
function utf8Bytes(arg0) {
  const encoder = new TextEncoder();
  return encoder.encode(arg0).length;
}
function jsonBytes(arg0) {
  if (typeof utf8Bytes === "function") {
    const _TextEncoder = TextEncoder;
    const self = this;
    const self2 = this;
    const encoder = new TextEncoder();
    return encoder.encode(tmp).length;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}
let c8 = "[Filtered]";
let closure_9 = ["image_url", "data", "content", "b64_json", "result", "uri"];

export const DEFAULT_GEN_AI_MESSAGES_BYTE_LIMIT = 20000;
export function truncateGenAiMessages(filteredMessages) {
  let tmp11;
  let tmp15;
  let tmp23;
  function truncatePartsMessage(mapped, c0) {
    const parts = mapped.parts;
    let obj = { parts: mapped };
    mapped = parts.map((item) => {
      let str = "";
      if (typeof item !== "string") {
        const obj = { text: "" };
        const merged = Object.assign(item);
        str = obj;
      }
      return str;
    });
    let merged = Object.assign(mapped);
    const diff = c0 - jsonBytes(obj);
    let diff1 = diff;
    if (diff <= 0) {
      return [];
    } else {
      const items = [];
      for (const item10022 of parts) {
        let items1;
        let tmp6 = item10022;
        let tmp8 = getPartText(item10022);
        let tmp9 = tmp8;
        let tmp11 = utf8Bytes(tmp8);
        if (tmp11 <= diff1) {
          let arr = items.push(tmp6);
          diff1 = diff1 - tmp12;
          continue;
        } else {
          if (0 === items.length) {
            let tmp18 = truncateTextByBytes(tmp9, diff1);
            if (tmp18) {
              let arr2 = items.push(withPartText(tmp6, tmp19));
            }
            obj3.return();
            break;
          } else {
            obj3.return();
            break;
          }
          break;
        }
        if (items.length <= 0) {
          items1 = [];
        } else {
          let obj2 = { parts: items };
          let merged1 = Object.assign(mapped);
          items1 = [obj2];
        }
        return items1;
      }
    }
  }
  const f79157 = (content) => {
    let parts;
    let tmp2;
    const tmp = content && typeof content === "object";
    if (tmp) {
      let tmp9;
      let tmp24;
      let isArray1 = null !== content;
      let isArray = isArray1 && typeof content === "object" && "content" in content;
      if (isArray) {
        const _Array = Array;
        isArray = Array.isArray(content.content);
      }
      if (isArray) {
        const obj2 = { content: content.map(f79157) };
        const merged = Object.assign(content);
        content = content.content;
        tmp9 = obj2;
      } else {
        const tmp7 = "content" in content && isContentMedia(content.content);
        if (tmp7) {
          const obj = { content: stripInlineMediaFromSingleMessage(content.content) };
          const merged1 = Object.assign(content);
          tmp9 = obj;
        }
      }
      if (isArray1) {
        isArray1 = typeof content === "object";
      }
      if (isArray1) {
        isArray1 = "parts" in content;
      }
      if (isArray1) {
        const _Array2 = Array;
        isArray1 = Array.isArray(content.parts);
      }
      if (isArray1) {
        isArray1 = content.parts.length > 0;
      }
      let tmp18 = tmp9;
      if (isArray1) {
        let tmp19 = tmp9;
        if (tmp9 == null) {
          tmp19 = content;
        }
        const obj3 = { parts: parts.map(f79157) };
        const merged2 = Object.assign(tmp19);
        parts = content.parts;
        tmp18 = obj3;
      }
      const tmp23 = isContentMedia;
      if (isContentMedia(tmp18)) {
        tmp24 = stripInlineMediaFromSingleMessage(tmp18);
      } else {
        tmp24 = tmp18;
        if (tmp23(content)) {
          tmp24 = stripInlineMediaFromSingleMessage(content);
        }
      }
      tmp2 = tmp24;
    }
    if (tmp2 == null) {
      tmp2 = content;
    }
    return tmp2;
  };
  let tmp = c0;
  let tmp2 = filteredMessages;
  if (Array.isArray(filteredMessages)) {
    tmp2 = filteredMessages;
    if (0 !== filteredMessages.length) {
      let items = [filteredMessages[filteredMessages.length - 1]];
      let mapped = items.map(f79157);
      const first = mapped[0];
      if (typeof jsonBytes === "function") {
        const _JSON = JSON;
        const tmp3 = utf8Bytes;
        if (typeof utf8Bytes === "function") {
          const _TextEncoder = TextEncoder;
          const self = this;
          const self2 = this;
          const encoder = new TextEncoder();
          if (encoder.encode(tmp4).length > tmp) {
            let items5;
            if (first) {
              if (typeof first === "string") {
                let items2;
                let tmp19 = truncateTextByBytes;
                let tmp20 = truncateTextByBytes(first, tmp);
                if (tmp20) {
                  let items1 = [tmp20];
                  items2 = items1;
                } else {
                  items2 = [];
                }
                items5 = items2;
              } else {
                let items3;
                if (typeof first !== "object") {
                  items3 = [];
                } else {
                  let tmp24 = null;
                  let isArray = null !== first;
                  let tmp6 = isArray && typeof first === "object";
                  if (tmp6) {
                    let str = "content";
                    tmp6 = "content" in first;
                  }
                  if (tmp6) {
                    tmp6 = typeof first.content === "string";
                  }
                  if (tmp6) {
                    let obj = { content: "" };
                    let tmp8 = obj;
                    let tmp9 = first;
                    let merged = Object.assign(first);
                    if (typeof tmp23 === "function") {
                      const _JSON2 = JSON;
                      if (typeof tmp3 === "function") {
                        let items4;
                        const _TextEncoder2 = TextEncoder;
                        const self3 = this;
                        const self4 = this;
                        const encoder2 = new TextEncoder();
                        const tmp12 = encoder2;
                        let diff = tmp - encoder2.encode(tmp11).length;
                        if (diff <= 0) {
                          items4 = [];
                        } else {
                          let tmp14 = truncateTextByBytes;
                          let obj2 = { content: tmp15 };
                          let tmp16 = obj2;
                          let tmp17 = first;
                          tmp15 = truncateTextByBytes(first.content, diff);
                          let merged1 = Object.assign(first);
                          items4 = [obj2];
                        }
                        items3 = items4;
                      } else {
                        throw new TypeError("Trying to call a non-function");
                      }
                    } else {
                      throw new TypeError("Trying to call a non-function");
                    }
                  } else {
                    if (isArray) {
                      isArray = typeof first === "object";
                    }
                    if (isArray) {
                      isArray = "parts" in first;
                    }
                    if (isArray) {
                      let _Array = Array;
                      isArray = Array.isArray(first.parts);
                    }
                    if (isArray) {
                      isArray = first.parts.length > 0;
                    }
                    if (isArray) {
                      items3 = truncatePartsMessage(first, tmp);
                    } else {
                      items3 = [];
                    }
                  }
                }
                items5 = items3;
              }
            } else {
              items5 = [];
            }
            mapped = items5;
          }
          tmp2 = mapped;
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
  }
  return tmp2;
}
export function truncateGenAiStringInput(filteredMessages) {
  return truncateTextByBytes(filteredMessages, c0);
}
