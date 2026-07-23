// Module ID: 3829
// Function ID: 31811
// Name: t
// Dependencies: []

// Module 3829 (t)
const self = this;
const fn = function t() {
  const re7 = /\r\n?/g;
  const re8 = /\t/g;
  const re9 = /\f/g;
  function preprocess(str) {
    str = str.replace(closure_7, "\n");
    return str.replace(closure_7, "\n").replace(closure_9, "").replace(closure_8, "    ");
  }
  function populateInitialState(arg0, obj) {
    obj = arg0;
    if (!arg0) {
      obj = {};
    }
    if (null != obj) {
      for (const key10006 in arg1) {
        let tmp3 = key10006;
        let _Object = Object;
        if (!hasOwnProperty.call(arg1, key10006)) {
          continue;
        } else {
          obj[key10006] = arg1[key10006];
          continue;
        }
        continue;
      }
    }
    return obj;
  }
  function parserFor(rules) {
    let closure_0 = rules;
    let closure_1 = arg1;
    const keys = Object.keys(rules);
    const found = keys.filter((arg0) => {
      if (null != dependencyMap[arg0]) {
        if (null != str.match) {
          const order = str.order;
          let isFiniteResult = "number" === typeof order;
          if (isFiniteResult) {
            const _isFinite = isFinite;
            isFiniteResult = isFinite(order);
          }
          if (!isFiniteResult) {
            const _console = console;
            isFiniteResult = "undefined" === typeof console;
          }
          if (!isFiniteResult) {
            const _console2 = console;
            const _String = String;
            const text = `simple-markdown: Invalid order for rule \`${arg0}`;
            console.warn(`${`simple-markdown: Invalid order for rule \`${arg0}`}\`: ${String(order)}`);
          }
          return true;
        }
      }
      return false;
    });
    const sorted = found.sort((arg0, arg1) => {
      const order = tmp.order;
      const order2 = tmp2.order;
      if (order !== order2) {
        return order - order2;
      } else {
        let num2 = 1;
        if (tmp.quality) {
          num2 = 0;
        }
        let num3 = 1;
        if (tmp2.quality) {
          num3 = 0;
        }
        if (num2 !== num3) {
          let num4 = num2 - num3;
        } else {
          num4 = -1;
          if (arg0 >= arg1) {
            let num5 = 0;
            if (arg0 > arg1) {
              num5 = 1;
            }
            num4 = num5;
          }
        }
        return num4;
      }
    });
    const map = new Map();
    let items = [];
    for (let num = 0; num < found.length; num = num + 1) {
      let tmp3 = found[num];
      let parseTableRow = tmp3;
      let prop = rules[tmp3].requiredFirstCharacters;
      if (null == prop) {
        let arr = items.push(tmp3);
      } else {
        let mapped = prop.map((str) => {
          const charCodeAtResult = str.charCodeAt(0);
          if (!map.has(charCodeAtResult)) {
            const result = map.set(charCodeAtResult, []);
          }
          const value = map.get(charCodeAtResult);
          value.push(closure_6);
        });
      }
    }
    function nestedParse(content, closure_3) {
      let tmp = closure_3;
      const items = [];
      if (!closure_3) {
        tmp = merged;
      }
      merged = tmp;
      const _parseDepth = tmp._parseDepth;
      let num = 0;
      if (null != _parseDepth) {
        num = _parseDepth;
      }
      const sum = num + 1;
      if (sum > 1000) {
        if (content) {
          let obj = { type: "text", content };
          items.push(obj);
        }
        return items;
      } else {
        const _Object = Object;
        obj = { _parseDepth: sum };
        merged = Object.assign({}, tmp, obj);
        let str3 = content;
        if (content) {
          while (true) {
            let tmp3 = map;
            let items1 = [map.get(str3.charCodeAt(0)), ];
            let tmp4 = items;
            items1[1] = items;
            let tmp5 = str3;
            let num2 = tmp18;
            let tmp6 = tmp19;
            let tmp7 = tmp20;
            let tmp8 = tmp21;
            let tmp9 = tmp22;
            let tmp10 = tmp23;
            let tmp11 = tmp24;
            let tmp12 = null;
            let tmp13 = null;
            let tmp14 = null;
            let num3 = -100000;
            let num4 = 100000;
            let num5 = 0;
            let tmp15 = null;
            let tmp16 = null;
            let tmp17 = null;
            if (0 < items1.length) {
              do {
                let arr3 = items1[num5];
                let tmp25 = tmp12;
                let tmp26 = tmp13;
                let tmp27 = tmp14;
                let tmp28 = num3;
                let tmp29 = num4;
                let tmp30 = tmp6;
                let tmp31 = tmp7;
                let tmp32 = tmp8;
                let tmp33 = tmp9;
                let tmp34 = tmp10;
                let tmp35 = tmp11;
                if (null != arr3) {
                  let tmp47 = tmp12;
                  let tmp48 = tmp13;
                  let tmp49 = tmp14;
                  let tmp50 = num3;
                  let tmp51 = num4;
                  let num7 = 0;
                  let tmp52 = tmp9;
                  let tmp53 = tmp10;
                  let tmp46 = tmp11;
                  tmp25 = tmp12;
                  tmp26 = tmp13;
                  tmp27 = tmp14;
                  tmp28 = num3;
                  tmp29 = num4;
                  num2 = 0;
                  tmp30 = tmp6;
                  tmp31 = tmp7;
                  tmp32 = tmp8;
                  tmp33 = tmp9;
                  tmp34 = tmp10;
                  tmp35 = tmp11;
                  if (0 < arr3.length) {
                    let tmp36 = arr3[num7];
                    let tmp37 = dependencyMap;
                    let str = dependencyMap[tmp36];
                    let order = str.order;
                    tmp33 = tmp52;
                    tmp34 = tmp53;
                    tmp25 = tmp47;
                    tmp26 = tmp48;
                    tmp27 = tmp49;
                    tmp28 = tmp50;
                    num2 = num7;
                    tmp30 = tmp36;
                    tmp31 = str;
                    tmp32 = order;
                    tmp35 = tmp46;
                    tmp29 = tmp51;
                    while (order <= tmp51) {
                      let str2 = "";
                      if (null != merged.prevCapture) {
                        str2 = merged.prevCapture[0];
                      }
                      let match = str.match(str3, merged, str2);
                      let tmp39 = str2;
                      let tmp40 = tmp47;
                      let tmp41 = tmp48;
                      let tmp42 = tmp49;
                      let tmp43 = tmp50;
                      let tmp44 = tmp51;
                      if (match) {
                        let num6 = 0;
                        if (str.quality) {
                          num6 = str.quality(match, merged, str2);
                        }
                        let tmp45 = order < tmp51 || num6 > tmp50;
                        tmp40 = tmp47;
                        tmp41 = tmp48;
                        tmp42 = tmp49;
                        tmp43 = tmp50;
                        tmp44 = tmp51;
                        tmp46 = num6;
                        if (tmp45) {
                          tmp40 = tmp36;
                          tmp41 = str;
                          tmp42 = match;
                          tmp43 = num6;
                          tmp44 = order;
                          tmp46 = num6;
                        }
                      }
                      num7 = num7 + 1;
                      tmp47 = tmp40;
                      tmp48 = tmp41;
                      tmp49 = tmp42;
                      tmp50 = tmp43;
                      tmp51 = tmp44;
                      tmp52 = str2;
                      tmp53 = match;
                      tmp25 = tmp40;
                      tmp26 = tmp41;
                      tmp27 = tmp42;
                      tmp28 = tmp43;
                      tmp29 = tmp44;
                      tmp30 = tmp36;
                      tmp31 = str;
                      tmp32 = order;
                      tmp33 = str2;
                      tmp34 = match;
                      tmp35 = tmp46;
                      num2 = num7;
                      if (num7 >= arr3.length) {
                        break;
                      }
                    }
                  }
                }
                num5 = num5 + 1;
                tmp12 = tmp25;
                tmp13 = tmp26;
                tmp14 = tmp27;
                num3 = tmp28;
                num4 = tmp29;
                tmp6 = tmp30;
                tmp7 = tmp31;
                tmp8 = tmp32;
                tmp9 = tmp33;
                tmp10 = tmp34;
                tmp11 = tmp35;
                tmp15 = tmp25;
                tmp16 = tmp26;
                tmp17 = tmp27;
                let tmp54 = arr3;
                tmp18 = num2;
                tmp19 = tmp30;
                tmp20 = tmp31;
                tmp21 = tmp32;
                tmp22 = tmp33;
                tmp23 = tmp34;
                tmp24 = tmp35;
              } while (num5 < items1.length);
            }
            if (null == tmp16) {
              break;
            } else if (null == tmp17) {
              break;
            } else if (tmp17.index) {
              let _Error = Error;
              let tmp59 = new.target;
              let str4 = "`match` must return a capture starting at index 0 (the current parse index). Did you forget a ^ at the start of the RegExp?";
              let tmp60 = new.target;
              let error = new Error("`match` must return a capture starting at index 0 (the current parse index). Did you forget a ^ at the start of the RegExp?");
              let tmp62 = error;
              throw error;
            } else {
              let tmp55 = nestedParse;
              let parsed = tmp16.parse(tmp17, nestedParse, merged);
              let _Array = Array;
              if (Array.isArray(parsed)) {
                let _Array2 = Array;
                let applyResult = push.apply(items, parsed);
              } else {
                if (null == parsed.type) {
                  parsed.type = tmp15;
                }
                let arr = items.push(parsed);
              }
              merged.prevCapture = tmp17;
              str3 = str3.substring(merged.prevCapture[0].length);
            }
          }
          const _Error2 = Error;
          const error1 = new Error("Could not find a matching rule for the below content. The rule with highest `order` should always match content provided to it. Check the definition of `match` for '" + found[found.length - 1] + "'. It seems to not match the following source:\n" + str3);
          throw error1;
        }
        return items;
      }
    }
    function outerParse(arg0, arg1) {
      const tmp = outer1_11(arg1, closure_1);
      let disableAutoBlockNewlines = tmp.inline;
      if (!disableAutoBlockNewlines) {
        disableAutoBlockNewlines = obj.disableAutoBlockNewlines;
      }
      let text = arg0;
      if (!disableAutoBlockNewlines) {
        text = `${arg0}

      `;
      }
      tmp.prevCapture = null;
      return nestedParse(outer1_10(text), tmp);
    }
    nestedParse.rules = rules;
    outerParse.rules = rules;
    return outerParse;
  }
  function inlineRegex(_RegExp5) {
    let closure_0 = _RegExp5;
    function match(arg0, inline) {
      let match = null;
      if (inline.inline) {
        match = regex.exec(arg0);
      }
      return match;
    }
    match.regex = _RegExp5;
    return match;
  }
  function blockRegex(NPTABLE_REGEX) {
    let closure_0 = NPTABLE_REGEX;
    function match(arg0, inline) {
      let match = null;
      if (!inline.inline) {
        match = NPTABLE_REGEX.exec(arg0);
      }
      return match;
    }
    match.regex = NPTABLE_REGEX;
    return match;
  }
  function anyScopeRegex(MARKDOWN_SPOILER_REGEXP) {
    let closure_0 = MARKDOWN_SPOILER_REGEXP;
    function match(arg0, arg1) {
      return MARKDOWN_SPOILER_REGEXP.exec(arg0);
    }
    match.regex = MARKDOWN_SPOILER_REGEXP;
    return match;
  }
  let _for = "function" === typeof Symbol;
  if (_for) {
    const _Symbol = Symbol;
    _for = Symbol.for;
  }
  if (_for) {
    const _Symbol2 = Symbol;
    _for = Symbol.for("react.transitional.element");
  }
  let num = _for;
  if (!_for) {
    num = 60103;
  }
  function reactElement(code, key, closure_15) {
    const obj = { $$typeof: num, type: code };
    let tmp;
    if (null != key) {
      tmp = key;
    }
    obj.key = tmp;
    obj.ref = null;
    obj.props = closure_15;
    obj._owner = null;
    return obj;
  }
  function htmlTag(code, joined, arg2, arg3) {
    let obj = arg2;
    if (!arg2) {
      obj = {};
    }
    let str = "";
    let str2 = "";
    const keys = Object.keys();
    if (keys !== undefined) {
      str2 = str;
      while (keys[tmp] !== undefined) {
        let tmp13 = tmp5;
        let tmp14 = obj[tmp5];
        let _Object = Object;
        let tmp6 = hasOwnProperty.call(obj, tmp5) && tmp14;
        if (!tmp6) {
          continue;
        } else {
          let tmp7 = sanitizeText;
          let tmp9 = sanitizeText;
          let text = ` ${sanitizeText(tmp5)}`;
          str = `${tmp4}${` ${sanitizeText(tmp5)}`}="${sanitizeText(tmp14)}"`;
          continue;
        }
        continue;
      }
    }
    const text1 = `${"<" + code + str2}>`;
    let text2 = text1;
    if (tmp2) {
      text2 = `${`${"<" + code + str2}>` + joined + "</" + code}>`;
    }
    return text2;
  }
  let closure_15 = {};
  function sanitizeUrl(target) {
    if (null == target) {
      return null;
    } else {
      const _URL = URL;
      const uRL = new URL(tmp, "https://localhost");
      const protocol = uRL.protocol;
      if (0 !== protocol.indexOf("javascript:")) {
        if (0 !== arr2.indexOf("vbscript:")) {
          if (0 !== arr2.indexOf("data:")) {
            return target;
          }
        }
      }
      return null;
    }
  }
  const re17 = /[<>&"']/g;
  let closure_18 = { "<": "&lt;", ">": "&gt;", "&": "&amp;", "\"": "&quot;", "'": "&#x27;", "/": "&#x2F;", "`": "&#96;" };
  function sanitizeText(content) {
    return String(content).replace(closure_17, (arg0) => outer1_18[arg0]);
  }
  const re20 = /\\([^0-9A-Za-z\s])/g;
  function unescapeUrl(str) {
    return str.replace(closure_20, "$1");
  }
  function parseInline(arg0, formatted, inline) {
    inline.inline = true;
    inline.inline = inline.inline || false;
    return arg0(formatted, inline);
  }
  function parseCaptureInline(arg0, arg1, inline) {
    return { content: parseInline(arg1, arg0[1], inline) };
  }
  function ignoreCapture() {
    return {};
  }
  let regExp = new RegExp("^( *)((?:[*+-]|\\d+\\.)) +");
  const regExp1 = new RegExp("( *)((?:[*+-]|\\d+\\.)) +[^\\n]*(?:\\n(?!\\1(?:[*+-]|\\d+\\.) )[^\\n]*)*(\n|$)", "gm");
  let tmp3 = /\n{2,}$/;
  let closure_25 = tmp3;
  const re26 = /^ (?= *`)|(` *) $/g;
  let closure_27 = tmp3;
  const re28 = / *\n+$/;
  const regExp2 = new RegExp("^( *)((?:[*+-]|\\d+\\.)) [\\s\\S]+?(?:\n{2,}(?! )(?!\\1(?:[*+-]|\\d+\\.) )\\n*|\\s*\n*$)");
  const re30 = /(?:^|\n)( *)$/;
  const re0 = /^ *\| *| *\| *$/g;
  const re1 = / *$/;
  const re2 = /^ *-+: *$/;
  const re3 = /^ *:-+: *$/;
  const re4 = /^ *:-+ *$/;
  function parseTableAlignCapture(arg0) {
    let str = "right";
    if (!regex.test(arg0)) {
      let str2 = "center";
      if (!regex2.test(arg0)) {
        let str3 = null;
        if (regex3.test(arg0)) {
          str3 = "left";
        }
        str2 = str3;
      }
      str = str2;
    }
    return str;
  }
  function parseTableRow(str, arg1, inTable) {
    let closure_0 = arg3;
    inTable.inTable = true;
    let arr = arg1(str.trim(), inTable);
    inTable.inTable = inTable.inTable;
    const items = [[]];
    const item = arr.forEach((type) => {
      if ("tableSeparator" === type.type) {
        let tmp10 = !closure_0;
        if (!tmp10) {
          let tmp11 = 0 !== arg1;
          if (tmp11) {
            tmp11 = arg1 !== arr.length - 1;
          }
          tmp10 = tmp11;
        }
        if (tmp10) {
          arr = items.push([]);
        }
      } else {
        let tmp5 = "text" !== type.type;
        if (!tmp5) {
          let tmp3 = null != arr[arg1 + 1];
          if (tmp3) {
            tmp3 = "tableSeparator" !== arr[arg1 + 1].type;
          }
          tmp5 = tmp3;
        }
        if (!tmp5) {
          type.content = type.content.replace(arr, "");
          const str = type.content;
        }
        arr = items[items.length - 1];
        arr = arr.push(type);
      }
    });
    return items;
  }
  let obj = { parseTable: parseTable(true), parseNpTable: parseTable(false), TABLE_REGEX: /^ *(\|.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/, NPTABLE_REGEX: /^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/ };
  parseTable = function parseTable(arg0) {
    let closure_0 = arg0;
    return (arg0, arg1, arg2) => {
      arg2.inline = true;
      let str2 = str;
      if (closure_0) {
        str2 = str.replace(closure_0, "");
      }
      const tmp = closure_0;
      const tmp2 = outer1_6(arg0[1], arg1, arg2, closure_0);
      let parts = str2.trim().split("|");
      const mapped = parts.map(outer1_5);
      arg2.inline = false;
      const str4 = str2.trim();
      return {
        type: "table",
        header: tmp2,
        align: mapped,
        cells: (function parseTableCells(str, arg1, arg2, arg3) {
          let closure_0 = arg1;
          let closure_1 = arg2;
          let closure_2 = arg3;
          const parts = str.trim().split("\n");
          return parts.map((arg0) => outer3_6(arg0, closure_0, closure_1, closure_2));
        })(arg0[3], arg1, arg2, tmp)
      };
    };
  };
  const re31 = /mailto:/i;
  function parseRef(alt, _defs, arg2) {
    let str = alt[2];
    if (!str) {
      str = alt[1];
    }
    const formatted = str.replace(/\s+/g, " ").toLowerCase();
    if (_defs._defs) {
      if (_defs._defs[formatted]) {
        ({ target: arg2.target, title: arg2.title } = _defs._defs[formatted]);
      }
    }
    _defs._refs = _defs._refs || {};
    let items = _defs._refs[formatted];
    if (!items) {
      items = [];
    }
    _defs._refs[formatted] = items;
    _defs._refs[formatted].push(arg2);
    return arg2;
  }
  const regExp3 = new RegExp("(?<=a)");
  const regExp4 = new RegExp("(?<!a)");
  while (true) {
    let num2 = 0;
    let num3 = 0;
    obj = {};
    obj = {
      react(arg0, arg1, key) {
          const items = [];
          let num = 0;
          let num2 = 0;
          if (0 < arg0.length) {
            do {
              key.key = "" + num2;
              let tmp = arg0[num2];
              let tmp2 = num2;
              let tmp3 = tmp;
              if ("text" === tmp.type) {
                let obj = { type: "text", content: tmp.content };
                tmp2 = num2;
                tmp3 = obj;
                if (num2 + 1 < arg0.length) {
                  let tmp4 = num2;
                  tmp2 = num2;
                  tmp3 = obj;
                  if ("text" === arg0[num2 + 1].type) {
                    obj.content = obj.content + arg0[tmp4 + 1].content;
                    let sum = tmp4 + 1;
                    tmp2 = sum;
                    tmp3 = obj;
                    while (sum + 1 < arg0.length) {
                      tmp4 = sum;
                      tmp2 = sum;
                      tmp3 = obj;
                      if ("text" !== arg0[sum + 1].type) {
                        break;
                      }
                    }
                  }
                }
              }
              let arr = items.push(arg1(tmp3, key));
              num2 = tmp2 + 1;
              num = num + 1;
            } while (num2 < arg0.length);
          }
          key.key = key.key;
          return items;
        },
      html(arg0, arg1, arg2) {
          let num = 0;
          let str = "";
          let str2 = "";
          if (0 < arg0.length) {
            do {
              let tmp = arg0[num];
              let tmp2 = num;
              let tmp3 = tmp;
              if ("text" === tmp.type) {
                let obj = { type: "text", content: tmp.content };
                tmp2 = num;
                tmp3 = obj;
                if (num + 1 < arg0.length) {
                  let tmp4 = num;
                  tmp2 = num;
                  tmp3 = obj;
                  if ("text" === arg0[num + 1].type) {
                    obj.content = obj.content + arg0[tmp4 + 1].content;
                    let sum = tmp4 + 1;
                    tmp2 = sum;
                    tmp3 = obj;
                    while (sum + 1 < arg0.length) {
                      tmp4 = sum;
                      tmp2 = sum;
                      tmp3 = obj;
                      if ("text" !== arg0[sum + 1].type) {
                        break;
                      }
                    }
                  }
                }
              }
              str = str + arg1(tmp3, arg2);
              num = tmp2 + 1;
              str2 = str;
            } while (num < arg0.length);
          }
          return str2;
        }
    };
    obj.Array = obj;
    let obj1 = {};
    let num4 = 1;
    obj1.order = 0;
    let tmp7 = blockRegex;
    obj1.match = blockRegex(/^ *(#{1,6})([^\n]+?)#* *(?:\n *)+\n/);
    obj1.parse = function parse(level, arg1, inline) {
      return { level: level[1].length, content: parseInline(arg1, str.trim(), inline) };
    };
    obj1.react = function react(content, arg1, key) {
      return reactElement(`h${content.level}`, key.key, { children: arg1(content.content, key) });
    };
    obj1.html = function html(content) {
      return htmlTag(`h${content.level}`, arg1(content.content, arg2));
    };
    obj.heading = obj1;
    let obj2 = { order: 1, match: null, parse: null, react: null, html: null };
    let num5 = 2;
    obj2.match = blockRegex(obj.NPTABLE_REGEX);
    obj2.parse = obj.parseNpTable;
    obj.nptable = obj2;
    let obj3 = { order: 2, match: null, parse: null, react: null, html: null };
    let num6 = 3;
    let num7 = 3;
    obj3.match = blockRegex(/^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/);
    obj3.parse = function parse(arg0, arg1, inline) {
      const obj = { type: "heading" };
      let num = 2;
      if ("=" === arg0[2]) {
        num = 1;
      }
      obj.level = num;
      obj.content = parseInline(arg1, arg0[1], inline);
      return obj;
    };
    obj.lheading = obj3;
    let obj4 = {};
    let num8 = 4;
    let num9 = 4;
    obj4.order = 3;
    obj4.match = blockRegex(/^( *[-*_]){3,} *(?:\n *)+\n/);
    let tmp8 = ignoreCapture;
    obj4.parse = ignoreCapture;
    obj4.react = function react(arg0, arg1, key) {
      return reactElement("hr", key.key, closure_15);
    };
    obj4.html = function html(arg0, arg1, arg2) {
      return "<hr>";
    };
    obj.hr = obj4;
    let obj5 = {};
    let num10 = 5;
    obj5.order = 4;
    obj5.match = blockRegex(/^(?:    [^\n]+\n*)+(?:\n *)+\n/);
    obj5.parse = function parse(arg0, arg1, arg2) {
      const obj = { lang: undefined, content: arg0[0].replace(/^    /gm, "").replace(/\n+$/, "") };
      return obj;
    };
    obj5.react = function react(lang, arg1, key) {
      let text;
      if (lang.lang) {
        text = `markdown-code-${lang.lang}`;
      }
      obj = { children: reactElement("code", null, obj) };
      obj = { className: text, children: lang.content };
      return reactElement("pre", key.key, obj);
    };
    obj5.html = function html(lang) {
      let text;
      if (lang.lang) {
        text = `markdown-code-${lang.lang}`;
      }
      const obj = { class: text };
      return htmlTag("pre", htmlTag("code", sanitizeText(lang.content), obj));
    };
    obj.codeBlock = obj5;
    let obj6 = { order: 5, match: null, parse: null, react: null, html: null };
    let num11 = 6;
    let num12 = 6;
    obj6.match = blockRegex(/^ *(`{3,}|~{3,}) *(?:(\S+) *)?\n([\s\S]+?)\n?\1 *(?:\n *)+\n/);
    obj6.parse = function parse(content) {
      return { type: "codeBlock", lang: tmp, content: content[3] };
    };
    obj.fence = obj6;
    let obj7 = {};
    let num13 = 7;
    let num14 = 7;
    obj7.order = 6;
    obj7.match = blockRegex(/^( *>[^\n]+(\n[^\n]+)*\n*)+\n{2,}/);
    obj7.parse = function parse(arg0, arg1, arg2) {
      return { content: arg1(str.replace(/^ *> ?/gm, ""), arg2) };
    };
    obj7.react = function react(content, arg1, key) {
      return reactElement("blockquote", key.key, { children: arg1(content.content, key) });
    };
    obj7.html = function html(content) {
      return htmlTag("blockquote", arg1(content.content, arg2));
    };
    obj.blockQuote = obj7;
    let obj8 = {};
    let num15 = 8;
    let num16 = 8;
    obj8.order = 7;
    obj8.match = function match(arg0, prevCapture) {
      let str = "";
      if (null != prevCapture.prevCapture) {
        str = prevCapture.prevCapture[0];
      }
      const match = regex4.exec(str);
      let match1 = null;
      if (match) {
        match1 = null;
        if (tmp2) {
          match1 = regExp2.exec(match[1] + arg0);
        }
      }
      return match1;
    };
    obj8.parse = function parse(arg0, arg1, arg2) {
      let closure_0 = arg1;
      let closure_1 = arg2;
      let tmp2;
      if (arg0[2].length > 1) {
        tmp2 = +arr;
      }
      let match = arg0[0].replace(closure_27, "\n").match(regExp1);
      let c3 = false;
      const obj = {
        ordered: arg0[2].length > 1,
        start: tmp2,
        items: match.map((str) => {
          let _list;
          let inline;
          const match = outer1_23.exec(str);
          let num = 0;
          if (match) {
            num = match[0].length;
          }
          const regExp = new RegExp("^ {1," + num + "}", "gm");
          const replaced = str.replace(regExp, "").replace(outer1_23, "");
          let tmp3 = arg1 === match.length - 1;
          let tmp4 = -1 !== replaced.indexOf("\n\n");
          if (!tmp4) {
            if (tmp3) {
              tmp3 = c3;
            }
            tmp4 = tmp3;
          }
          c3 = tmp4;
          closure_1._list = true;
          ({ inline, _list } = closure_1);
          if (tmp4) {
            tmp5.inline = false;
            let replaced1 = replaced.replace(outer1_28, "\n\n");
          } else {
            tmp5.inline = true;
            replaced1 = replaced.replace(outer1_28, "");
          }
          closure_1.inline = inline;
          closure_1._list = _list;
          return callback(replaced1, closure_1);
        })
      };
      return obj;
    };
    obj8.react = function react(ordered, arg1, key) {
      let closure_0 = arg1;
      let closure_1 = key;
      let str = "ul";
      if (ordered.ordered) {
        str = "ol";
      }
      const items = ordered.items;
      return reactElement(str, key.key, { start: ordered.start, children: items.map((arg0, arg1) => outer1_13("li", `${arg1}`, { children: callback(arg0, closure_1) })) });
    };
    obj8.html = function html(items) {
      let closure_0 = arg1;
      let closure_1 = arg2;
      items = items.items;
      const mapped = items.map((arg0) => outer1_14("li", callback(arg0, closure_1)));
      let str = "ul";
      const joined = mapped.join("");
      if (items.ordered) {
        str = "ol";
      }
      return htmlTag(str, joined, { start: items.start });
    };
    obj.list = obj8;
    let obj9 = {};
    let num17 = 9;
    let num18 = 9;
    obj9.order = 8;
    obj9.match = blockRegex(/^ *\[([^\]]+)\]: *<?([^\s>]*)>?(?: +["(]([^\n]+)[")])? *\n(?: *\n)*/);
    obj9.parse = function parse(arg0, arg1, _refs) {
      const def = arg0[1].replace(/\s+/g, " ").toLowerCase();
      const target = arg0[2];
      const title = arg0[3];
      if (tmp4) {
        const item = _refs._refs[def].forEach((arg0) => {
          arg0.target = target;
          arg0.title = title;
        });
        const arr = _refs._refs[def];
      }
      _refs._defs = _refs._defs || {};
      _refs._defs[def] = { target, title };
      return { def, target, title };
    };
    obj9.react = function react() {
      return null;
    };
    obj9.html = function html() {
      return "";
    };
    obj.def = obj9;
    let obj10 = {};
    let num19 = 10;
    let num20 = 10;
    obj10.order = 9;
    obj10.match = blockRegex(obj.TABLE_REGEX);
    obj10.parse = obj.parseTable;
    obj10.react = function react(arg0, arg1, key) {
      let cells;
      let header;
      let closure_0 = arg0;
      let closure_1 = arg1;
      let closure_2 = key;
      function getStyle(arg0) {
        if (null == closure_0.align[arg0]) {
          let obj = {};
        } else {
          obj = { textAlign: closure_0.align[arg0] };
        }
        return obj;
      }
      ({ header, cells } = arg0);
      const mapped = header.map((arg0, arg1) => outer1_13("th", `${arg1}`, { style: getStyle(arg1), scope: "col", children: callback(arg0, closure_2) }));
      let obj = {};
      obj = {};
      const mapped1 = cells.map((arr) => outer1_13("tr", `${arg1}`, { children: arr.map((arg0, arg1) => outer2_13("td", `${arg1}`, { style: outer1_3(arg1), children: outer1_1(arg0, outer1_2) })) }));
      obj.children = reactElement("tr", null, { children: mapped });
      const items = [reactElement("thead", "thead", obj), reactElement("tbody", "tbody", { children: mapped1 })];
      obj.children = items;
      return reactElement("table", key.key, obj);
    };
    obj10.html = function html(header) {
      let closure_0 = header;
      let closure_1 = arg1;
      let closure_2 = arg2;
      function getStyle(arg0) {
        let str = "";
        if (null != header.align[arg0]) {
          str = `${"text-align:" + closure_0.align[arg0]};`;
        }
        return str;
      }
      header = header.header;
      let mapped = header.map((arg0, arg1) => {
        const obj = { style: getStyle(arg1), scope: "col" };
        return outer1_14("th", callback(arg0, closure_2), obj);
      });
      const cells = header.cells;
      const joined = mapped.join("");
      const mapped1 = cells.map((arr) => {
        const mapped = arr.map((arg0, arg1) => {
          const obj = { style: outer1_3(arg1) };
          return outer2_14("td", outer1_1(arg0, outer1_2), obj);
        });
        return outer1_14("tr", mapped.join(""));
      });
      const joined1 = mapped1.join("");
      return htmlTag("table", htmlTag("thead", htmlTag("tr", joined)) + htmlTag("tbody", joined1));
    };
    obj.table = obj10;
    let obj11 = {};
    let num21 = 11;
    let num22 = 11;
    obj11.order = 10;
    obj11.requiredFirstCharacters = ["\n"];
    obj11.match = blockRegex(/^(?:\n *)*\n/);
    obj11.parse = ignoreCapture;
    obj11.react = function react(arg0, arg1, arg2) {
      return "\n";
    };
    obj11.html = function html(arg0, arg1, arg2) {
      return "\n";
    };
    obj.newline = obj11;
    let obj12 = {};
    let num23 = 12;
    obj12.order = 11;
    obj12.match = blockRegex(/^((?:[^\n]|\n(?! *\n))+)(?:\n *)+\n/);
    let tmp9 = parseCaptureInline;
    obj12.parse = parseCaptureInline;
    obj12.react = function react(content, arg1, key) {
      return reactElement("div", key.key, { className: "paragraph", children: arg1(content.content, key) });
    };
    obj12.html = function html(content) {
      return htmlTag("div", arg1(content.content, arg2), { class: "paragraph" });
    };
    obj.paragraph = obj12;
    let obj13 = { order: 12, requiredFirstCharacters: null, match: null, parse: null, react: null, html: null };
    let num24 = 13;
    let num25 = 13;
    obj13.requiredFirstCharacters = ["\\"];
    let tmp10 = inlineRegex;
    obj13.match = inlineRegex(/^\\([^0-9A-Za-z\s])/);
    obj13.parse = function parse(content) {
      return { type: "text", content: content[1] };
    };
    obj.escape = obj13;
    let obj14 = {};
    let num26 = 14;
    obj14.order = 13;
    obj14.match = function match(arg0, inTable) {
      let match = null;
      if (inTable.inTable) {
        match = /^ *\| */.exec(arg0);
        const obj = /^ *\| */;
      }
      return match;
    };
    obj14.parse = function parse() {
      return { type: "tableSeparator" };
    };
    obj14.react = function react() {
      return " | ";
    };
    obj14.html = function html() {
      return " &vert; ";
    };
    obj.tableSeparator = obj14;
    let obj15 = { order: 14, requiredFirstCharacters: null, match: null, parse: null, react: null, html: null };
    let num27 = 15;
    obj15.requiredFirstCharacters = ["<"];
    obj15.match = inlineRegex(/^<([^: >]+:\/[^ >]+)>/);
    obj15.parse = function parse(content) {
      let obj = { type: "link", content: items, target: content[1] };
      obj = { type: "text", content: content[1] };
      items = [obj];
      return obj;
    };
    obj.autolink = obj15;
    let obj16 = { order: 15, match: null, parse: null, react: null, html: null };
    let num28 = 16;
    obj16.match = inlineRegex(/^<([^ >]+@[^ >]+)>/);
    obj16.parse = function parse(content) {
      let text = tmp;
      if (!regex5.test(content[1])) {
        text = `mailto:${tmp}`;
      }
      const obj = { type: "link", content: items };
      items = [{ type: "text", content: content[1] }];
      obj.target = text;
      return obj;
    };
    obj.mailto = obj16;
    let obj17 = { order: 16, requiredFirstCharacters: null, match: null, parse: null, react: null, html: null };
    let num29 = 17;
    let num30 = 17;
    obj17.requiredFirstCharacters = ["h"];
    obj17.match = inlineRegex(/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/);
    obj17.parse = function parse(content) {
      let obj = { type: "link", content: items, target: content[1], title: undefined };
      obj = { type: "text", content: content[1] };
      items = [obj];
      return obj;
    };
    obj.url = obj17;
    let obj18 = {};
    let num31 = 18;
    let num32 = 18;
    obj18.order = 17;
    obj18.requiredFirstCharacters = ["["];
    let _RegExp = RegExp;
    let tmp11 = new.target;
    let str2 = "^\\[((?:\\[[^\\]]*\\]|[^\\[\\]]|\\](?=[^\\[]*\\]))*)\\]\\(\\s*<?((?:\\([^)]*\\)|[^\\s\\\\]|\\\\.)*?)>?(?:\\s+['\"]([\\s\\S]*?)['\"])?\\s*\\)";
    let tmp12 = new.target;
    let regExp5 = new RegExp("^\\[((?:\\[[^\\]]*\\]|[^\\[\\]]|\\](?=[^\\[]*\\]))*)\\]\\(\\s*<?((?:\\([^)]*\\)|[^\\s\\\\]|\\\\.)*?)>?(?:\\s+['\"]([\\s\\S]*?)['\"])?\\s*\\)");
    let tmp14 = regExp5;
    obj18.match = inlineRegex(regExp5);
    obj18.parse = function parse(title) {
      return { content: arg1(title[1], arg2), target: unescapeUrl(title[2]), title: title[3] };
    };
    obj18.react = function react(target, arg1, key) {
      return reactElement("a", key.key, { href: sanitizeUrl(target.target), title: target.title, children: arg1(target.content, key) });
    };
    obj18.html = function html(target) {
      return htmlTag("a", arg1(target.content, arg2), { href: sanitizeUrl(target.target), title: target.title });
    };
    obj.link = obj18;
    let obj19 = {};
    let num33 = 19;
    obj19.order = 18;
    let _RegExp2 = RegExp;
    let tmp15 = new.target;
    let str3 = "^!\\[((?:\\[[^\\]]*\\]|[^\\[\\]]|\\](?=[^\\[]*\\]))*)\\]\\(\\s*<?((?:\\([^)]*\\)|[^\\s\\\\]|\\\\.)*?)>?(?:\\s+['\"]([\\s\\S]*?)['\"])?\\s*\\)";
    let tmp16 = new.target;
    let regExp6 = new RegExp("^!\\[((?:\\[[^\\]]*\\]|[^\\[\\]]|\\](?=[^\\[]*\\]))*)\\]\\(\\s*<?((?:\\([^)]*\\)|[^\\s\\\\]|\\\\.)*?)>?(?:\\s+['\"]([\\s\\S]*?)['\"])?\\s*\\)");
    let tmp18 = regExp6;
    obj19.match = inlineRegex(regExp6);
    obj19.parse = function parse(alt) {
      return { alt: alt[1], target: unescapeUrl(alt[2]), title: alt[3] };
    };
    obj19.react = function react(alt, arg1, key) {
      return reactElement("img", key.key, { src: sanitizeUrl(alt.target), alt: alt.alt, title: alt.title });
    };
    obj19.html = function html(alt) {
      return htmlTag("img", "", { src: sanitizeUrl(alt.target), alt: alt.alt, title: alt.title }, false);
    };
    obj.image = obj19;
    let obj20 = { order: 19, match: null, parse: null, react: null, html: null };
    let num34 = 20;
    let _RegExp3 = RegExp;
    let tmp19 = new.target;
    let str4 = "^\\[((?:\\[[^\\]]*\\]|[^\\[\\]]|\\](?=[^\\[]*\\]))*)\\]\\s*\\[([^\\]]*)\\]";
    let tmp20 = new.target;
    let regExp7 = new RegExp("^\\[((?:\\[[^\\]]*\\]|[^\\[\\]]|\\](?=[^\\[]*\\]))*)\\]\\s*\\[([^\\]]*)\\]");
    let tmp22 = regExp7;
    obj20.match = inlineRegex(regExp7);
    obj20.parse = function parse(alt, arg1, _defs) {
      return parseRef(alt, _defs, { type: "link", content: arg1(alt[1], _defs) });
    };
    obj.reflink = obj20;
    let obj21 = { order: 20, match: null, parse: null, react: null, html: null };
    let num35 = 21;
    let num36 = 21;
    let _RegExp4 = RegExp;
    let tmp23 = new.target;
    let str5 = "^!\\[((?:\\[[^\\]]*\\]|[^\\[\\]]|\\](?=[^\\[]*\\]))*)\\]\\s*\\[([^\\]]*)\\]";
    let tmp24 = new.target;
    let regExp8 = new RegExp("^!\\[((?:\\[[^\\]]*\\]|[^\\[\\]]|\\](?=[^\\[]*\\]))*)\\]\\s*\\[([^\\]]*)\\]");
    let tmp26 = regExp8;
    obj21.match = inlineRegex(regExp8);
    obj21.parse = function parse(alt, arg1, _defs) {
      return parseRef(alt, _defs, { type: "image", alt: alt[1] });
    };
    obj.refimage = obj21;
    let obj22 = { order: 21 };
    let _RegExp5 = RegExp;
    let str6 = "^\\b_((?:__|\\\\[\\s\\S]|[^\\\\_])+?)_\\b";
    break;
    let prototype5 = _RegExp5.prototype;
    let tmp27 = new.target;
    let str7 = "|^\\*(?=\\S)((?:\\*\\*|\\\\[\\s\\S]|\\s+(?:\\\\[\\s\\S]|[^\\s\\*\\\\]|\\*\\*)|[^\\s\\*\\\\])+?)\\*(?!\\*)";
    let tmp28 = new.target;
    _RegExp5 = new _RegExp5(str6 + "|^\\*(?=\\S)((?:\\*\\*|\\\\[\\s\\S]|\\s+(?:\\\\[\\s\\S]|[^\\s\\*\\\\]|\\*\\*)|[^\\s\\*\\\\])+?)\\*(?!\\*)");
    let tmp30 = _RegExp5;
    obj22.match = inlineRegex(_RegExp5);
    obj22.quality = function quality(arg0) {
      return arg0[0].length + 0.2;
    };
    obj22.parse = function parse(arg0, arg1, arg2) {
      const obj = {};
      let tmp = arg0[2];
      if (!tmp) {
        tmp = arg0[1];
      }
      obj.content = arg1(tmp, arg2);
      return obj;
    };
    obj22.react = function react(content, arg1, key) {
      return reactElement("em", key.key, { children: arg1(content.content, key) });
    };
    obj22.html = function html(content) {
      return htmlTag("em", arg1(content.content, arg2));
    };
    obj.em = obj22;
    let obj23 = {};
    let num37 = 21;
    obj23.order = num36;
    obj23.requiredFirstCharacters = ["*"];
    obj23.match = inlineRegex(/^\*\*((?:\\[\s\S]|[^\\])+?)\*\*(?!\*)/);
    obj23.quality = function quality(arg0) {
      return arg0[0].length + 0.1;
    };
    obj23.parse = parseCaptureInline;
    obj23.react = function react(content, arg1, key) {
      return reactElement("strong", key.key, { children: arg1(content.content, key) });
    };
    obj23.html = function html(content) {
      return htmlTag("strong", arg1(content.content, arg2));
    };
    obj.strong = obj23;
    let obj24 = {};
    let tmp31 = +num36;
    let sum = tmp31 + 1;
    let tmp33 = sum;
    obj24.order = tmp31;
    obj24.requiredFirstCharacters = ["_"];
    obj24.match = inlineRegex(/^__((?:\\[\s\S]|[^\\])+?)__(?!_)/);
    obj24.quality = function quality(arg0) {
      return arg0[0].length;
    };
    obj24.parse = parseCaptureInline;
    obj24.react = function react(content, arg1, key) {
      return reactElement("u", key.key, { children: arg1(content.content, key) });
    };
    obj24.html = function html(content) {
      return htmlTag("u", arg1(content.content, arg2));
    };
    obj.u = obj24;
    let obj25 = {};
    let tmp34 = +sum;
    let sum1 = tmp34 + 1;
    let tmp36 = sum1;
    obj25.order = tmp34;
    obj25.requiredFirstCharacters = ["~"];
    obj25.match = inlineRegex(/^~~(?=\S)((?:\\[\s\S]|~(?!~)|[^\s~]|\s(?!~~))+?)~~/);
    obj25.parse = parseCaptureInline;
    obj25.react = function react(content, arg1, key) {
      return reactElement("del", key.key, { children: arg1(content.content, key) });
    };
    obj25.html = function html(content) {
      return htmlTag("del", arg1(content.content, arg2));
    };
    obj.del = obj25;
    let obj26 = {};
    let tmp37 = +sum1;
    let sum2 = tmp37 + 1;
    let tmp39 = sum2;
    obj26.order = tmp37;
    obj26.requiredFirstCharacters = ["`"];
    obj26.match = inlineRegex(/^(`+)([\s\S]*?[^`])\1(?!`)/);
    obj26.parse = function parse(arg0, arg1, arg2) {
      return { content: str.replace(closure_26, "$1") };
    };
    obj26.react = function react(children, arg1, key) {
      return reactElement("code", key.key, { children: children.content });
    };
    obj26.html = function html(content) {
      return htmlTag("code", sanitizeText(content.content));
    };
    obj.inlineCode = obj26;
    let obj27 = {};
    let tmp40 = +sum2;
    let sum3 = tmp40 + 1;
    let tmp42 = sum3;
    obj27.order = tmp40;
    obj27.requiredFirstCharacters = [" "];
    let tmp43 = anyScopeRegex;
    obj27.match = anyScopeRegex(/^ {2,}\n/);
    obj27.parse = ignoreCapture;
    obj27.react = function react(arg0, arg1, key) {
      return reactElement("br", key.key, closure_15);
    };
    obj27.html = function html(arg0, arg1, arg2) {
      return "<br>";
    };
    obj.br = obj27;
    let obj28 = {};
    let tmp44 = +sum3;
    let sum4 = tmp44 + 1;
    obj28.order = tmp44;
    obj28.match = anyScopeRegex(/^[\s\S]+?(?=[^0-9A-Za-z\s\u00c0-\uffff]|\n\n| {2,}\n|\w+:\S|$)/);
    obj28.parse = function parse(content) {
      return { content: content[0] };
    };
    obj28.react = function react(content) {
      return content.content;
    };
    obj28.html = function html(content) {
      return sanitizeText(content.content);
    };
    obj.text = obj28;
    function outputFor(Array, html) {
      let closure_0 = Array;
      let closure_1 = html;
      let closure_2 = arg2;
      if (html) {
        let _Array = Array.Array;
        if (!_Array) {
          _Array = obj.Array;
        }
        if (_Array[html]) {
          let closure_4 = tmp7;
          function nestedOutput(arg0, arg1) {
            let tmp = arg1;
            if (!arg1) {
              tmp = closure_3;
            }
            closure_3 = tmp;
            if (Array.isArray(arg0)) {
              let tmp6 = tmp7(arg0, nestedOutput, tmp);
            } else {
              tmp6 = _Array[arg0.type][closure_1](arg0, nestedOutput, tmp);
              const tmp3 = _Array[arg0.type];
            }
            return tmp6;
          }
          return function outerOutput(arg0, arg1) {
            const tmp = outer1_11(arg1, closure_2);
            let closure_3 = tmp;
            return nestedOutput(arg0, tmp);
          };
        } else {
          const _Error2 = Error;
          const error = new Error("simple-markdown: outputFor: to join nodes of type `" + html + "` you must provide an `Array:` joiner rule with that type, Please see the docs for details on specifying an Array rule.");
          throw error;
        }
      } else {
        const _Error = Error;
        const error1 = new Error("simple-markdown: outputFor: `property` must be defined. if you just upgraded, you probably need to replace `outputFor` with `reactFor`");
        throw error1;
      }
    }
    let tmp46 = parserFor;
    let parserForResult = parserFor(obj);
    function defaultBlockParse(source, arg1) {
      let obj = arg1;
      if (!arg1) {
        obj = {};
      }
      obj.inline = false;
      return parserForResult(source, obj);
    }
    function defaultImplicitParse(arg0, arg1) {
      let obj = arg1;
      const isMatch = tmp3.test(arg0);
      if (!arg1) {
        obj = {};
      }
      obj.inline = !isMatch;
      return parserForResult(arg0, obj);
    }
    let str8 = "react";
    let outputForResult = outputFor(obj, "react");
    let str9 = "html";
    let outputForResult1 = outputFor(obj, "html");
    function markdownToReact(source) {
      return outputForResult(defaultBlockParse(source, arg1), arg1);
    }
    let obj29 = {
      defaultRules: obj,
      parserFor,
      outputFor,
      inlineRegex,
      blockRegex,
      anyScopeRegex,
      parseInline,
      parseBlock(arg0, arg1, inline) {
          inline.inline = false;
          inline.inline = inline.inline || false;
          return arg0(arg1 + "\n\n", inline);
        },
      markdownToReact,
      markdownToHtml(source) {
          return outputForResult1(defaultBlockParse(source, arg1), arg1);
        },
      ReactMarkdown(obj) {
          obj = {};
          for (const key10006 in arg0) {
            let tmp2 = key10006;
            let callResult = "source" !== key10006;
            if (callResult) {
              let _Object = Object;
              callResult = hasOwnProperty.call(arg0, key10006);
            }
            if (!callResult) {
              continue;
            } else {
              obj[key10006] = arg0[key10006];
              continue;
            }
            continue;
          }
          obj.children = markdownToReact(obj.source);
          return reactElement("div", null, obj);
        },
      defaultBlockParse,
      defaultInlineParse(arg0, arg1) {
          let obj = arg1;
          if (!arg1) {
            obj = {};
          }
          obj.inline = true;
          return parserForResult(arg0, obj);
        },
      defaultImplicitParse,
      defaultReactOutput: outputForResult,
      defaultHtmlOutput: outputForResult1,
      preprocess,
      sanitizeText,
      sanitizeUrl,
      unescapeUrl,
      htmlTag,
      reactElement,
      defaultRawParse: parserForResult,
      ruleOutput(closure_2, react) {
          let tmp = react;
          let closure_0 = closure_2;
          let closure_1 = react;
          if (!react) {
            const _console = console;
            tmp = "undefined" === typeof console;
          }
          if (!tmp) {
            const _console2 = console;
            console.warn("simple-markdown ruleOutput should take 'react' or 'html' as the second argument.");
          }
          return function nestedRuleOutput(arg0, arg1, arg2) {
            return table[arg0.type][closure_1](arg0, arg1, arg2);
          };
        },
      reactFor(arg0) {
          let closure_0 = arg0;
          function nestedOutput(arg0, arg1) {
            let obj = arg1;
            if (!arg1) {
              obj = {};
            }
            if (Array.isArray(arg0)) {
              const items = [];
              let num = 0;
              let tmp3 = null;
              if (0 < arg0.length) {
                while (true) {
                  obj.key = "" + num;
                  let tmp4 = nestedOutput;
                  let tmp5 = nestedOutput(arg0[num], obj);
                  if ("string" === typeof tmp5) {
                    if ("string" === typeof tmp3) {
                      let sum = tmp3 + tmp5;
                      items[items.length - 1] = sum;
                      let tmp7 = sum;
                      num = num + 1;
                      tmp3 = tmp7;
                      if (num >= arg0.length) {
                        break;
                      }
                    }
                  }
                  let arr = items.push(tmp5);
                  tmp7 = tmp5;
                }
              }
              obj.key = obj.key;
              return items;
            } else {
              return callback(arg0, nestedOutput, obj);
            }
          }
          return nestedOutput;
        },
      htmlFor(arg0) {
          let closure_0 = arg0;
          function nestedOutput(arr) {
            let obj = arg1;
            obj = arg1;
            if (!arg1) {
              obj = {};
            }
            if (Array.isArray(arr)) {
              const mapped = arr.map((arg0) => outer1_1(arg0, obj));
              let joined = mapped.join("");
            } else {
              joined = obj(arr, nestedOutput, obj);
            }
            return joined;
          }
          return nestedOutput;
        },
      defaultParse() {
          if ("undefined" !== typeof console) {
            const _console = console;
            console.warn("defaultParse is deprecated, please use `defaultImplicitParse`");
          }
          return defaultImplicitParse(...arguments);
        },
      defaultOutput() {
          if ("undefined" !== typeof console) {
            const _console = console;
            console.warn("defaultOutput is deprecated, please use `defaultReactOutput`");
          }
          return outputForResult(...arguments);
        }
    };
    return obj29;
  }
};
if ("object" === typeof exports) {
  if (undefined !== module) {
    module.exports = fn();
  }
}
if ("function" === typeof globalThis.define) {
  if (globalThis.define.amd) {
    globalThis.define(fn);
  }
}
self.SimpleMarkdown = fn();
