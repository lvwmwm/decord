// Module ID: 7786
// Function ID: 62145
// Name: nodeToText
// Dependencies: [2]

// Module 7786 (nodeToText)
function nodeToText(content) {
  let str = "";
  if (null != content) {
    if ("string" === typeof content) {
      str = content;
    } else {
      const _Array = Array;
      if (Array.isArray(content)) {
        const mapped = content.map(nodeToText);
        let str3 = mapped.join("");
      } else if ("string" === typeof content.content) {
        str3 = content.content;
      } else {
        str3 = "";
        if (null != content.content) {
          str3 = nodeToText(content.content);
        }
      }
    }
  }
  return str;
}
const result = require("set").fileFinishedImporting("modules/messages/native/renderer/redactRestrictedContent.tsx");
function redactRestrictedContent(content) {
  if (null != content) {
    if ("string" !== typeof content) {
      const _Array = Array;
      if (Array.isArray(content)) {
        return content.map(redactRestrictedContent);
      } else {
        if ("link" !== content.type) {
          if ("attachmentLink" !== content.type) {
            if ("customEmoji" === content.type) {
              let obj = { type: "text" };
              const _HermesInternal = HermesInternal;
              obj.content = ":" + content.alt + ":";
              return obj;
            } else {
              let tmp = content;
              if (null != content.content) {
                obj = {};
                const merged = Object.assign(content);
                obj["content"] = redactRestrictedContent(content.content);
                tmp = obj;
              }
              let tmp6 = tmp;
              if (null != content.items) {
                obj = {};
                const merged1 = Object.assign(tmp);
                obj["items"] = redactRestrictedContent(content.items);
                tmp6 = obj;
              }
              return tmp6;
            }
          }
        }
        const obj1 = { type: "inlineCode", content: nodeToText(content.content) };
        return obj1;
      }
    }
  }
  return content;
}

export default redactRestrictedContent;
