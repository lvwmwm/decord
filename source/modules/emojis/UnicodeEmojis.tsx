// Module ID: 3771
// Function ID: 28960
// Name: _createForOfIteratorHelperLoose
// Dependencies: [6, 7, 3772, 3773, 3774, 3775, 22, 13043, 2]
// Exports: asUnicodeEmoji

// Module 3771 (_createForOfIteratorHelperLoose)
import apply from "apply";
import module_13043 from "module_13043";
import createText from "createText";
import module_917631 from "module_917631";
import module_127988 from "module_127988";

const require = arg1;
function _createForOfIteratorHelperLoose(iterable) {
  let closure_0 = iterable;
  iterable = "undefined" !== typeof Symbol;
  if (iterable) {
    const _Symbol = Symbol;
    iterable = iterable[Symbol.iterator];
  }
  if (!iterable) {
    iterable = iterable[Symbol.iterator];
  }
  if (iterable) {
    const iter = iterable.call(iterable);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = iterable;
    if (!Array.isArray(iterable)) {
      let tmp2;
      if (iterable) {
        if ("string" === typeof iterable) {
          tmp2 = _arrayLikeToArray(iterable, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(iterable).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = iterable.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(iterable, undefined);
              } else {
                let obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(iterable);
          const callResult = toString.call(iterable);
          tmp3 = "Object" === substr && iterable.constructor;
        }
      }
      tmp = tmp2;
      if (!tmp2) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        throw typeError;
      }
    }
    if (tmp) {
      closure_0 = tmp;
    }
    let c1 = 0;
    return () => {
      if (closure_1 >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = length[+closure_1];
      }
      return obj;
    };
  }
}
function _arrayLikeToArray(arg0, arg1) {
  let length;
  if (tmp) {
    length = arg0.length;
  }
  const ArrayResult = Array(length);
  for (let num = 0; num < length; num = num + 1) {
    ArrayResult[num] = arg0[num];
  }
  return ArrayResult;
}
function getEmojiObjectByName(emojiName) {
  const tmp = require(3773).nameToEmoji[emojiName];
  let tmp2 = null;
  if (null != tmp) {
    tmp2 = require(3773).emojis[tmp];
  }
  return tmp2;
}
function getEmojiObjectBySurrogate(surrogate) {
  const tmp = require(3773).surrogateToEmoji[surrogate];
  let tmp2 = null;
  if (null != tmp) {
    tmp2 = require(3773).emojis[tmp];
  }
  return tmp2;
}
function parseRawEmojiObject(value) {
  value = weakMap.get(value);
  if (null != value) {
    return value;
  } else {
    const prototype = tmp4.prototype;
    const tmp6 = new new.target(value);
    const result = weakMap.set(value, tmp6);
    return tmp6;
  }
}
function getByName(emojiName) {
  const tmp = getEmojiObjectByName(emojiName);
  let tmp2 = null;
  if (null != tmp) {
    tmp2 = parseRawEmojiObject(tmp);
  }
  return tmp2;
}
function contentHasUnicodeOrEmoji(text) {
  return regex.test(text);
}
function emojiNameOrUnicodeSequence(surrogate) {
  let first;
  const tmp2 = getEmojiObjectBySurrogate(surrogate);
  if (null != tmp2) {
    first = tmp2.names[0];
  }
  if (null != first) {
    let obj = { type: "emoji", surrogate };
    const _HermesInternal = HermesInternal;
    obj.emojiName = ":" + first + ":";
  } else {
    obj = { type: "text", text: surrogate };
  }
  return obj;
}
function findInlineEmojisFromSurrogates(text, arg1) {
  if (true !== arg1) {
    if (!contentHasUnicodeOrEmoji(text)) {
      const obj = { type: "text", text };
      const items = [obj];
      return items;
    }
  }
  const items1 = [];
  let match = text.match(closure_11);
  if (null == match) {
    match = [];
  }
  let str2 = "";
  let num = 0;
  let str3 = "";
  if (0 < match.length) {
    while (true) {
      let tmp4 = match[num];
      if (null != ``) {
        if ("" !== ``) {
          let tmp10 = module_917631;
          if (tmp4 === module_917631) {
            text = `${tmp4}`;
            let str4 = "";
            let tmp14 = emojiNameOrUnicodeSequence;
            let tmp15 = emojiNameOrUnicodeSequence(`${tmp4}`);
            if (items1.length > 0) {
              let tmp16 = items1[items1.length - 1];
              let tmp3 = tmp16;
              if ("text" === tmp15.type) {
                tmp3 = tmp16;
                if ("text" === tmp16.type) {
                  tmp16.text = tmp16.text + tmp15.text;
                  let sum = str4;
                  let tmp7 = tmp15;
                  let tmp8 = tmp16;
                }
              }
            }
            let arr = items1.push(tmp15);
            tmp8 = tmp3;
            sum = str4;
            tmp7 = tmp15;
          } else {
            let tmp11 = regex2;
            if (regex2.test(tmp4)) {
              sum = str2 + tmp4;
              tmp7 = tmp2;
              tmp8 = tmp3;
            } else {
              let tmp12 = emojiNameOrUnicodeSequence;
              arr = items1.push(emojiNameOrUnicodeSequence(str2));
              str4 = "";
              text = tmp4;
            }
          }
          num = num + 1;
          str2 = sum;
          tmp2 = tmp7;
          tmp3 = tmp8;
          str3 = sum;
          if (num >= match.length) {
            break;
          }
        }
      }
      let tmp5 = module_127988;
      str4 = str2;
      text = tmp4;
      tmp7 = tmp2;
      tmp8 = tmp3;
      sum = tmp4;
    }
  }
  if (tmp18) {
    items1.push(emojiNameOrUnicodeSequence(str3));
  }
  return items1;
}
function convertNameToSurrogate(emojiName) {
  let str = arg1;
  if (arg1 === undefined) {
    str = "";
  }
  const tmp = getEmojiObjectByName(emojiName);
  let surrogates;
  if (null != tmp) {
    surrogates = tmp.surrogates;
  }
  if (null != surrogates) {
    str = surrogates;
  }
  return str;
}
function convertSurrogateToName(name, arg1) {
  let flag = arg1;
  let str = arg2;
  if (arg1 === undefined) {
    flag = true;
  }
  if (str === undefined) {
    str = "";
  }
  const tmp = getEmojiObjectBySurrogate(name);
  let first;
  if (null != tmp) {
    first = tmp.names[0];
  }
  if (null != first) {
    str = first;
  }
  let combined = str;
  if (flag) {
    const _HermesInternal = HermesInternal;
    combined = ":" + str + ":";
  }
  return combined;
}
let c6 = null;
const weakMap = new WeakMap();
let items = ["\u{1F3FB}", "\u{1F3FC}", "\u{1F3FD}", "\u{1F3FE}", "\u{1F3FF}"];
let tmp3 = /^:([^\s:]+?(?:::skin-tone-\d)?):/;
let closure_9 = tmp3;
const re10 = /[\u200d\ud800-\udfff\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff\ufe0e\ufe0f\u270b\u2b50\u2728\u26a1\u26c5\u26c4\u2614\u2615\u26bd\u26be\u26f3\u26f5\u2693\u26fd\u26f2\u26fa\u26ea\u231a\u23f0\u231b\u23f3\u26ce\u2648\u2649\u264a\u264b\u264c\u264d\u264e\u264f\u2650\u2651\u2652\u2653\u270a\u274c\u2b55\u26d4\u2757\u2755\u2753\u2754\u2705\u274e\u267f\u23e9\u23ea\u23eb\u23ec\u2795\u2796\u2797\u27b0\u27bf\u26aa\u26ab\u25fe\u25fd\u2b1b\u2b1c\u26a7]/;
const re11 = /\ud83c[\udffb-\udfff](?=\ud83c[\udffb-\udfff])|(?:[^\ud800-\udfff][\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]?|[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g;
let tmp4 = (() => {
  class Emoji {
    constructor(arg0) {
      tmp = outer1_3(this, Emoji);
      this.emojiObject = arg0;
      this.type = Emoji(outer1_2[4]).EmojiTypes.UNICODE;
      this.uniqueName = arg0.names[0];
      this.surrogates = arg0.surrogates;
      this.diversityChildren = {};
      if (null != arg0.diversityChildren) {
        tmp12 = outer1_17;
        tmp13 = outer1_17(arg0.diversityChildren);
        iter2 = tmp13();
        str = "-";
        num = 3;
        if (!iter2.done) {
          do {
            tmp2 = Emoji;
            tmp3 = outer1_2;
            tmp4 = Emoji(outer1_2[3]).emojis[iter2.value];
            if (null != tmp4.diversity) {
              diversity = tmp4.diversity;
              tmp6 = Emoji;
              prototype = Emoji.prototype;
              tmp7 = new.target;
              tmp8 = new.target;
              tmp9 = tmp4;
              joined = diversity.join("-");
              tmp10 = new Emoji(tmp4);
              tmp11 = tmp10;
              this.diversityChildren[joined] = tmp10;
            }
            iter = tmp13();
            iter2 = iter;
          } while (!iter.done);
        }
      }
      return;
    }
  }
  let obj = {
    key: "names",
    get() {
      return this.emojiObject.names;
    }
  };
  const items = [obj, , , , , , , , , , , , , , ];
  obj = {
    key: "allNamesString",
    get() {
      const self = this;
      if (this.names.length > 1) {
        const names = self.names;
        const _HermesInternal2 = HermesInternal;
        let combined = ":" + names.join(": :") + ":";
      } else {
        const _HermesInternal = HermesInternal;
        combined = ":" + self.uniqueName + ":";
      }
      return combined;
    }
  };
  items[1] = obj;
  obj = {
    key: "unicodeVersion",
    get() {
      const unicodeVersion = this.emojiObject.unicodeVersion;
      let num = 0;
      if (null != unicodeVersion) {
        num = unicodeVersion;
      }
      return num;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "hasDiversity",
    get() {
      return this.emojiObject.hasDiversity;
    }
  };
  items[4] = {
    key: "hasMultiDiversity",
    get() {
      return this.emojiObject.hasMultiDiversity;
    }
  };
  items[5] = {
    key: "hasDiversityParent",
    get() {
      return this.emojiObject.hasDiversityParent;
    }
  };
  items[6] = {
    key: "hasMultiDiversityParent",
    get() {
      return this.emojiObject.hasMultiDiversityParent;
    }
  };
  items[7] = {
    key: "managed",
    get() {
      return true;
    }
  };
  items[8] = {
    key: "animated",
    get() {
      return false;
    }
  };
  items[9] = {
    key: "defaultDiversityChild",
    get() {
      if (this.hasDiversity) {
        if (null != outer1_6) {
          const convert = outer1_5.convert;
          const toCodePointResult = convert.toCodePoint(outer1_6);
          let str = "";
          if (null != toCodePointResult) {
            str = toCodePointResult;
          }
          return tmp.diversityChildren[str];
        }
      }
      return null;
    }
  };
  items[10] = {
    key: "url",
    get() {
      const defaultDiversityChild = this.defaultDiversityChild;
      if (null != defaultDiversityChild) {
        let uRL = outer1_1(outer1_2[5]).getURL(defaultDiversityChild.surrogates);
        const obj2 = outer1_1(outer1_2[5]);
      } else {
        uRL = outer1_1(outer1_2[5]).getURL(tmp.surrogates);
        const obj = outer1_1(outer1_2[5]);
      }
      return uRL;
    }
  };
  items[11] = {
    key: "name",
    get() {
      const self = this;
      if (this.hasDiversity) {
        if (null != outer1_6) {
          const tmp5 = outer1_20(outer1_6);
          let first;
          if (null != tmp5) {
            first = tmp5.names[0];
          }
          const _HermesInternal = HermesInternal;
          let uniqueName = "" + self.uniqueName + "::" + first;
        }
        return uniqueName;
      }
      uniqueName = self.uniqueName;
    }
  };
  items[12] = {
    key: "optionallyDiverseSequence",
    get() {
      const defaultDiversityChild = this.defaultDiversityChild;
      return null != defaultDiversityChild ? defaultDiversityChild.surrogates : this.surrogates;
    }
  };
  items[13] = {
    key: "forEachDiversity",
    value(disambiguateEmoji) {
      if (null != this.diversityChildren) {
        outer1_1(outer1_2[6]).each(tmp.diversityChildren, disambiguateEmoji);
        const obj = outer1_1(outer1_2[6]);
      }
    }
  };
  items[14] = {
    key: "forEachName",
    value(disambiguateEmoji) {
      outer1_1(outer1_2[6]).each(this.names, disambiguateEmoji);
    }
  };
  return callback(Emoji, items);
})();
let closure_12 = tmp4;
const map = new Map();
const re16 = /^(?:\uDB40[\uDC61-\uDC7A])$/;
let obj = {
  getDefaultDiversitySurrogate() {
    return c6;
  },
  setDefaultDiversitySurrogate(value) {
    let tmp = null;
    if (null != value) {
      tmp = null;
      if ("" !== value) {
        tmp = value;
      }
    }
    let c6 = tmp;
  },
  getCategories() {
    return Object.keys(require(3773).emojisByCategory);
  },
  getByName,
  getByCategory(name) {
    let value = map.get(name);
    if (null == value) {
      const tmp4 = require(3773).emojisByCategory[name];
      const emojis = require(3773).emojis;
      const result = importDefault(3775).filterUnsupportedEmojis(emojis.slice(tmp4[0], tmp4[1]));
      const mapped = result.map(parseRawEmojiObject);
      const result1 = map.set(name, mapped);
      value = mapped;
      const obj = importDefault(3775);
    }
    return value;
  },
  contentHasUnicodeOrEmoji,
  translateInlineEmojiToSurrogates(emojiName) {
    return emojiName.replace(closure_9, (arg0, arg1) => outer1_26(arg1, arg0));
  },
  maybeTranslateSurrogatesToInlineEmoji(text) {
    if (contentHasUnicodeOrEmoji(text)) {
      const mapped = findInlineEmojisFromSurrogates(text, true).map((type) => "text" === type.type ? type.text : type.emojiName);
      const joined = mapped.join("");
      let tmp4 = null;
      if (joined !== text) {
        tmp4 = joined;
      }
      return tmp4;
    } else {
      return null;
    }
  },
  findInlineEmojisFromSurrogates,
  translateSurrogatesToInlineEmoji(content) {
    const mapped = findInlineEmojisFromSurrogates(content).map((type) => "text" === type.type ? type.text : type.emojiName);
    return mapped.join("");
  },
  convertNameToSurrogate,
  convertSurrogateToName,
  convertShortcutToName(arg0) {
    let flag = arg1;
    let str = arg2;
    if (arg1 === undefined) {
      flag = true;
    }
    if (str === undefined) {
      str = "";
    }
    if (hasOwnProperty.call(require(13043), arg0)) {
      str = require(13043)[arg0];
    }
    let combined = str;
    if (flag) {
      const _HermesInternal = HermesInternal;
      combined = ":" + str + ":";
    }
    return combined;
  },
  convertSurrogateToBase(surrogates) {
    return getByName(convertSurrogateToName(items.reduce((str) => str.replace(arg1, ""), surrogates), false));
  },
  forEach(arg0) {
    let iter2;
    const tmp = _createForOfIteratorHelperLoose(require(3773).emojis);
    let iter = tmp();
    if (!iter.done) {
      do {
        let value = iter.value;
        let tmp2 = value.hasDiversityParent || value.hasMultiDiversityParent;
        if (!tmp2) {
          let tmp3 = parseRawEmojiObject;
          let tmp4 = arg0(parseRawEmojiObject(value));
        }
        iter2 = tmp();
        iter = iter2;
      } while (!iter2.done);
    }
  },
  numDiversitySprites: require("module_3773").numDiversitySprites,
  numNonDiversitySprites: require("module_3773").numNonDiversitySprites,
  EMOJI_NAME_RE: /^:([^\s:]+?(?:::skin-tone-\d)?):/,
  EMOJI_NAME_AND_DIVERSITY_RE: tmp3,
  EMOJI_SHORTCUT_RE: /^(>:\(|>:\-\(|>=\(|>=\-\(|:"\)|:\-"\)|="\)|=\-"\)|<\/3|<\\3|:\-\\|:\-\/|=\-\\|=\-\/|:'\(|:'\-\(|:,\(|:,\-\(|='\(|='\-\(|=,\(|=,\-\(|:\(|:\-\(|=\(|=\-\(|<3|♡|\]:\(|\]:\-\(|\]=\(|\]=\-\(|o:\)|O:\)|o:\-\)|O:\-\)|0:\)|0:\-\)|o=\)|O=\)|o=\-\)|O=\-\)|0=\)|0=\-\)|:'D|:'\-D|:,D|:,\-D|='D|='\-D|=,D|=,\-D|:\*|:\-\*|=\*|=\-\*|x\-\)|X\-\)|:\||:\-\||=\||=\-\||:o|:\-o|:O|:\-O|=o|=\-o|=O|=\-O|:@|:\-@|=@|=\-@|:D|:\-D|=D|=\-D|:'\)|:'\-\)|:,\)|:,\-\)|='\)|='\-\)|=,\)|=,\-\)|:\)|:\-\)|=\)|=\-\)|\]:\)|\]:\-\)|\]=\)|\]=\-\)|:,'\(|:,'\-\(|;\(|;\-\(|=,'\(|=,'\-\(|:P|:\-P|=P|=\-P|8\-\)|B\-\)|,:\(|,:\-\(|,=\(|,=\-\(|,:\)|,:\-\)|,=\)|,=\-\)|:s|:\-S|:z|:\-Z|:\$|:\-\$|=s|=\-S|=z|=\-Z|=\$|=\-\$|;\)|;\-\))/,
  hasSurrogates(tags) {
    const obj = importDefault(22);
    return importDefault(22).toArray(tags).some((arg0) => null != outer1_0(outer1_2[3]).surrogateToEmoji[arg0]);
  }
};
let result = require("createText").fileFinishedImporting("modules/emojis/UnicodeEmojis.tsx");

export default obj;
export const DIVERSITY_SURROGATES = items;
export const Emoji = tmp4;
export const asUnicodeEmoji = function asUnicodeEmoji(id) {
  let tmp = null;
  if (null == id.id) {
    tmp = null;
    if (null != id.name) {
      tmp = null;
      if (id.name.length > 0) {
        const obj = { name: id.name, id: null };
        tmp = obj;
      }
    }
  }
  return tmp;
};
