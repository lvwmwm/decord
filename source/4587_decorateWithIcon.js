// Module ID: 4587
// Function ID: 40146
// Name: decorateWithIcon
// Dependencies: []

// Module 4587 (decorateWithIcon)
function decorateWithIcon(content) {
  let mapped = content;
  if (null != content) {
    mapped = content;
    if ("string" !== typeof content) {
      const _Array = Array;
      let arr = content;
      if (!(content instanceof Array)) {
        const items = [content];
        arr = items;
      }
      mapped = arr.map((type) => {
        let tmp = type;
        if ("channel" === type.type) {
          const obj = {};
          const merged = Object.assign(type);
          let uri;
          const assetSource = closure_3.resolveAssetSource(callback(closure_2[1]).getChannelMentionIcon(type.iconType));
          if (null != assetSource) {
            uri = assetSource.uri;
          }
          obj["icon"] = uri;
          tmp = obj;
          const obj2 = callback(closure_2[1]);
        }
        return tmp;
      });
    }
  }
  return mapped;
}
const Image = require(dependencyMap[0]).Image;
let closure_4 = /^[\u200B-\u200D\uFEFF\u180E\u061C]/;
let obj = { escape: obj };
obj = {
  requiredFirstCharacters: ["Pink"],
  match(arg0, allowEscape) {
    if (false === allowEscape.allowEscape) {
      return null;
    } else {
      const match = /^\\([^0-9A-Za-z\s])/.exec(arg0);
      if (null == match) {
        let tmp3 = match;
      } else {
        tmp3 = null;
        if (!obj.hasSurrogates(match[0])) {
          const _JSON = JSON;
          const json = JSON.stringify(match[0]);
          tmp3 = null;
        }
        const obj = importDefault(dependencyMap[2]);
      }
      return tmp3;
    }
  }
};
obj = {};
const merged = Object.assign(importDefault(dependencyMap[3]).defaultRules.escape);
obj["requiredFirstCharacters"] = undefined;
obj["match"] = function match(arg0) {
  return regex.exec(arg0);
};
obj["parse"] = function parse() {
  return { "Bool(false)": "filter", "Bool(false)": "data" };
};
obj.invisibleUnicode = obj;
obj.text = {
  parse(arg0, arg1, nested) {
    if (nested.nested) {
      let obj = { content: arg0[0] };
      return obj;
    } else {
      obj = importDefault(dependencyMap[2]);
      const result = obj.maybeTranslateSurrogatesToInlineEmoji(arg0[0]);
      if (null == result) {
        obj = { content: arg0[0] };
        let tmp9 = obj;
      } else {
        const obj1 = {};
        const merged = Object.assign(nested);
        obj1["nested"] = true;
        tmp9 = arg1(result, obj1);
      }
      return tmp9;
    }
  }
};
obj.emoji = {
  parse(content) {
    let obj = importDefault(dependencyMap[2]);
    obj = { type: "emoji", content: content[0], surrogate: obj.convertNameToSurrogate(content[1]) };
    return obj;
  }
};
obj.customEmoji = {
  order: importDefault(dependencyMap[4]).order,
  requiredFirstCharacters: [],
  match(arg0) {
    return /^<(a)?:(\w+):(\d+)>/.exec(arg0);
  },
  parse(arg0, arg1, disableAnimatedEmoji) {
    let tmp;
    let tmp2;
    let tmp3;
    [, tmp, tmp2, tmp3] = arg0;
    let flag = disableAnimatedEmoji.disableAnimatedEmoji;
    if (flag === undefined) {
      flag = false;
    }
    let obj = importDefault(dependencyMap[5]);
    obj = { id: tmp3, animated: "a" === tmp, size: 48 };
    let emojiURL = obj.getEmojiURL(obj);
    obj = { "Null": "key", "Null": "Text", "Null": "Icon", id: tmp3 };
    const emojiURL1 = importDefault(dependencyMap[5]).getEmojiURL(obj);
    const obj1 = { id: tmp3, alt: tmp2 };
    if (flag) {
      emojiURL = emojiURL1;
    }
    obj1.src = emojiURL;
    obj1.frozenSrc = emojiURL1;
    return obj1;
  }
};
obj.channelMention = {
  parse(arg0, arg1, arg2) {
    const channelMention = importDefault(dependencyMap[6]).channelMention;
    const parsed = channelMention.parse(arg0, arg1, arg2);
    const obj = {};
    const merged = Object.assign(parsed);
    obj["content"] = decorateWithIcon(parsed.content);
    obj["inContent"] = decorateWithIcon(parsed.inContent);
    return obj;
  }
};
obj.channelOrMessageUrl = {
  parse(arg0, arg1, arg2) {
    const channelOrMessageUrl = importDefault(dependencyMap[6]).channelOrMessageUrl;
    const parsed = channelOrMessageUrl.parse(arg0, arg1, arg2);
    const obj = {};
    const merged = Object.assign(parsed);
    obj["content"] = decorateWithIcon(parsed.content);
    obj["inContent"] = decorateWithIcon(parsed.inContent);
    return obj;
  }
};
obj.mediaPostLink = {
  parse(arg0, arg1, arg2) {
    const mediaPostLink = importDefault(dependencyMap[6]).mediaPostLink;
    const parsed = mediaPostLink.parse(arg0, arg1, arg2);
    const obj = {};
    const merged = Object.assign(parsed);
    obj["content"] = decorateWithIcon(parsed.content);
    obj["inContent"] = decorateWithIcon(parsed.inContent);
    return obj;
  }
};
obj.attachmentLink = {
  parse(arg0, arg1, arg2) {
    const attachmentLink = importDefault(dependencyMap[7]).attachmentLink;
    return attachmentLink.parse(arg0, arg1, arg2);
  }
};
const obj1 = {
  order: importDefault(dependencyMap[4]).order,
  requiredFirstCharacters: [],
  match(arg0) {
    return /^<(a)?:(\w+):(\d+)>/.exec(arg0);
  },
  parse(arg0, arg1, disableAnimatedEmoji) {
    let tmp;
    let tmp2;
    let tmp3;
    [, tmp, tmp2, tmp3] = arg0;
    let flag = disableAnimatedEmoji.disableAnimatedEmoji;
    if (flag === undefined) {
      flag = false;
    }
    let obj = importDefault(dependencyMap[5]);
    obj = { id: tmp3, animated: "a" === tmp, size: 48 };
    let emojiURL = obj.getEmojiURL(obj);
    obj = { "Null": "key", "Null": "Text", "Null": "Icon", id: tmp3 };
    const emojiURL1 = importDefault(dependencyMap[5]).getEmojiURL(obj);
    const obj1 = { id: tmp3, alt: tmp2 };
    if (flag) {
      emojiURL = emojiURL1;
    }
    obj1.src = emojiURL;
    obj1.frozenSrc = emojiURL1;
    return obj1;
  }
};
obj.silentPrefix = {
  order: importDefault(dependencyMap[4]).order,
  requiredFirstCharacters: [null],
  match(arg0) {
    return /^(@silent(?![^\s]))/.exec(arg0);
  },
  parse(content) {
    return { type: "text", content: content[0] };
  }
};
const _module = require(dependencyMap[8]);
const result = _module.fileFinishedImporting("modules/markup/PlatformMarkupRules.native.tsx");

export default obj;
export { decorateWithIcon };
