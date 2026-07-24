// Module ID: 4592
// Function ID: 40238
// Name: decorateWithIcon
// Dependencies: [27, 4593, 3771, 3829, 4572, 1392, 4573, 4576, 2]

// Module 4592 (decorateWithIcon)
import { Image } from "get ActivityIndicator";

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
          const assetSource = outer1_3.resolveAssetSource(outer1_0(outer1_2[1]).getChannelMentionIcon(type.iconType));
          if (null != assetSource) {
            uri = assetSource.uri;
          }
          obj["icon"] = uri;
          tmp = obj;
          const obj2 = outer1_0(outer1_2[1]);
        }
        return tmp;
      });
    }
  }
  return mapped;
}
const re4 = /^[\u200B-\u200D\uFEFF\u180E\u061C]/;
obj = { escape: obj };
obj = {
  requiredFirstCharacters: ["\\"],
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
        obj = importDefault(3771);
      }
      return tmp3;
    }
  }
};
obj = {};
let merged = Object.assign(require("t").defaultRules.escape);
obj["requiredFirstCharacters"] = undefined;
obj["match"] = function match(arg0) {
  return regex.exec(arg0);
};
obj["parse"] = function parse() {
  return { type: "text", content: "" };
};
obj.invisibleUnicode = obj;
obj.text = {
  parse(arg0, arg1, nested) {
    if (nested.nested) {
      let obj = { content: arg0[0] };
      return obj;
    } else {
      obj = importDefault(3771);
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
    let obj = importDefault(3771);
    obj = { type: "emoji", content: content[0], surrogate: obj.convertNameToSurrogate(content[1]) };
    return obj;
  }
};
obj.customEmoji = {
  order: require("textRegexp").order,
  requiredFirstCharacters: ["<"],
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
    let obj = importDefault(1392);
    obj = { id: tmp3, animated: "a" === tmp, size: 48 };
    let emojiURL = obj.getEmojiURL(obj);
    obj = { id: tmp3, animated: false, size: 48 };
    const emojiURL1 = importDefault(1392).getEmojiURL(obj);
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
    const channelMention = importDefault(4573).channelMention;
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
    const channelOrMessageUrl = importDefault(4573).channelOrMessageUrl;
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
    const mediaPostLink = importDefault(4573).mediaPostLink;
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
    const attachmentLink = importDefault(4576).attachmentLink;
    return attachmentLink.parse(arg0, arg1, arg2);
  }
};
let obj1 = {
  order: require("textRegexp").order,
  requiredFirstCharacters: ["<"],
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
    let obj = importDefault(1392);
    obj = { id: tmp3, animated: "a" === tmp, size: 48 };
    let emojiURL = obj.getEmojiURL(obj);
    obj = { id: tmp3, animated: false, size: 48 };
    const emojiURL1 = importDefault(1392).getEmojiURL(obj);
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
  order: require("textRegexp").order,
  requiredFirstCharacters: ["@"],
  match(arg0) {
    return /^(@silent(?![^\s]))/.exec(arg0);
  },
  parse(content) {
    return { type: "text", content: content[0] };
  }
};
let obj2 = {
  order: require("textRegexp").order,
  requiredFirstCharacters: ["@"],
  match(arg0) {
    return /^(@silent(?![^\s]))/.exec(arg0);
  },
  parse(content) {
    return { type: "text", content: content[0] };
  }
};
let result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/markup/PlatformMarkupRules.native.tsx");

export default obj;
export { decorateWithIcon };
