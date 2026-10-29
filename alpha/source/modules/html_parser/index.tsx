// Module ID: 9369
// Function ID: 9370
// Name: DEFAULT_MAX_HTML_LENGTH
// Dependencies: [9370, 9371, 2]
// Exports: parseHTMLFromText

// Module 9369 (DEFAULT_MAX_HTML_LENGTH)
import _mod9371 from "module_9371" /* 9371 */;
import HTMLParserConstants from "HTMLParserConstants" /* 9370 */;
import size from "module_2" /* 2 */;

let c1, constants, map, regex;

let c10;
let c2;
let c3;
let c9;
let closure_12;
let closure_14;
let closure_4;
let hasOwnProperty;
let map1;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let unpackModuleId;
function findTextStart(arr) {
  let num = 0;
  if (0 < arr.length) {
    const charCodeAtResult = arr.charCodeAt(0);
    let num3 = 0;
    num = 0;
    const tmp3 = charCodeAtResult === metroImportDefault.SPACE || charCodeAtResult === metroImportDefault.LINE_FEED || charCodeAtResult === metroImportDefault.TAB || charCodeAtResult === metroImportDefault.CARRIAGE_RETURN || charCodeAtResult === metroImportDefault.FORM_FEED;
    if (tmp3) {
      const sum = num3 + 1;
      num = sum;
      while (sum < arr.length) {
        let charCodeAtResult1 = arr.charCodeAt(sum);
        let tmp6 = metroImportDefault;
        let tmp7 = charCodeAtResult1 === metroImportDefault.SPACE || charCodeAtResult1 === tmp6.LINE_FEED || charCodeAtResult1 === tmp6.TAB || charCodeAtResult1 === tmp6.CARRIAGE_RETURN || charCodeAtResult1 === tmp6.FORM_FEED;
        num3 = sum;
        num = sum;
        if (!tmp7) {
          break;
        }
      }
    }
  }
  return num;
}
function findTextEnd(text, textStart) {
  let num = textStart;
  if (textStart === undefined) {
    num = 0;
  }
  let tmp = length;
  if (text.length > num) {
    const charCodeAtResult = text.charCodeAt(text.length - 1);
    let tmp3 = length;
    tmp = length;
    const tmp2 = charCodeAtResult === metroImportDefault.SPACE || charCodeAtResult === metroImportDefault.LINE_FEED || charCodeAtResult === metroImportDefault.TAB || charCodeAtResult === metroImportDefault.CARRIAGE_RETURN || charCodeAtResult === metroImportDefault.FORM_FEED;
    if (tmp2) {
      const diff = tmp3 - 1;
      tmp = diff;
      while (diff > num) {
        let charCodeAtResult1 = text.charCodeAt(diff - 1);
        let tmp6 = metroImportDefault;
        let tmp7 = charCodeAtResult1 === metroImportDefault.SPACE || charCodeAtResult1 === tmp6.LINE_FEED || charCodeAtResult1 === tmp6.TAB || charCodeAtResult1 === tmp6.CARRIAGE_RETURN || charCodeAtResult1 === tmp6.FORM_FEED;
        tmp3 = diff;
        tmp = diff;
        if (!tmp7) {
          break;
        }
      }
    }
  }
  return tmp;
}
function collapseBlankLines(arr, trailingNewlines) {
  let tmp = trailingNewlines;
  let index = arr.indexOf("\n");
  let str = "";
  let num = 0;
  let num2 = 0;
  let str2 = "";
  let num3 = -1;
  if (-1 !== index) {
    while (true) {
      let sum = num3 + 1;
      let tmp8 = sum;
      let flag = true;
      let tmp4 = index;
      if (sum < index) {
        while (true) {
          let charCodeAtResult = arr.charCodeAt(tmp8);
          let tmp10 = metroImportDefault;
          let tmp11 = charCodeAtResult === metroImportDefault.SPACE;
          if (!tmp11) {
            tmp11 = charCodeAtResult === tmp10.TAB;
          }
          if (!tmp11) {
            tmp11 = charCodeAtResult === tmp10.FORM_FEED;
          }
          flag = false;
          if (!tmp11) {
            break;
          } else {
            let sum1 = tmp8 + 1;
            tmp8 = sum1;
            flag = true;
            if (sum1 >= index) {
              break;
            }
          }
        }
      }
      if (tmp > 0) {
        if (flag) {
          let sum2 = str + arr.slice(num, sum);
          let text = sum2;
          if (tmp < constants.PARAGRAPH) {
            text = `${tmp17}
  `;
          }
          let sum3 = index + 1;
          let LINE = tmp + 1;
          let tmp16 = text;
          index = arr.indexOf("\n", index + 1);
          tmp = LINE;
          num = sum3;
          str = tmp16;
          num3 = tmp4;
          num2 = sum3;
          str2 = tmp16;
          if (-1 === index) {
            break;
          }
        }
      }
      LINE = constants.LINE;
      sum3 = num;
      tmp16 = str;
    }
  }
  let sum4 = arr;
  if (0 !== num2) {
    sum4 = str2 + arr.slice(num2);
  }
  return sum4;
}
function trimTrailingLineIndentation(runs) {
  if (runs.length > 0) {
    while (true) {
      let tmp = runs[runs.length - 1];
      let length = tmp.text.length;
      let tmp2 = length;
      if (length > 0) {
        let text2 = tmp.text;
        let charCodeAtResult = text2.charCodeAt(length - 1);
        let tmp11 = metroImportDefault;
        let tmp3 = charCodeAtResult === metroImportDefault.SPACE || charCodeAtResult === tmp11.TAB || charCodeAtResult === tmp11.FORM_FEED;
        let tmp4 = length;
        tmp2 = length;
        if (tmp3) {
          let diff = tmp4 - 1;
          tmp2 = diff;
          while (diff > 0) {
            let text = tmp.text;
            let charCodeAtResult1 = text.charCodeAt(diff - 1);
            let tmp7 = metroImportDefault;
            let tmp8 = charCodeAtResult1 === metroImportDefault.SPACE || charCodeAtResult1 === tmp7.TAB || charCodeAtResult1 === tmp7.FORM_FEED;
            tmp4 = diff;
            tmp2 = diff;
            if (!tmp8) {
              break;
            }
          }
        }
      }
      if (tmp2 === tmp.text.length) {
        break;
      } else {
        if (0 !== tmp2) {
          let text1 = tmp.text;
          tmp.text = text1.slice(0, tmp2);
          break;
        } else {
          let arr = runs.pop();
          if (runs.length > 0) {
            continue;
          } else {
            break;
          }
          break;
        }
        break;
      }
    }
  }
}
function appendRun(trailingNewlines, text, item10025) {
  let tmp = item10025;
  if (item10025 === undefined) {
    tmp = React4;
  }
  const index = text.indexOf("\n");
  if (trailingNewlines.trailingNewlines > 0) {
    if (-1 !== index) {
      let num3 = 0;
      let flag = true;
      if (0 < index) {
        while (true) {
          let charCodeAtResult = text.charCodeAt(num3);
          let tmp4 = metroImportDefault;
          let tmp5 = charCodeAtResult === metroImportDefault.SPACE;
          if (!tmp5) {
            tmp5 = charCodeAtResult === tmp4.TAB;
          }
          if (!tmp5) {
            tmp5 = charCodeAtResult === tmp4.FORM_FEED;
          }
          flag = false;
          if (!tmp5) {
            break;
          } else {
            let sum = num3 + 1;
            num3 = sum;
            flag = true;
            if (sum >= index) {
              break;
            }
          }
        }
      }
      if (flag) {
        trimTrailingLineIndentation(trailingNewlines.runs);
      }
    }
  }
  trailingNewlines = trailingNewlines.trailingNewlines;
  const arr = collapseBlankLines(text, trailingNewlines.trailingNewlines);
  let substr = arr;
  if (0 === trailingNewlines.runs.length) {
    substr = arr.slice(findTextStart(arr));
  }
  if (0 !== substr.length) {
    if (null != trailingNewlines.runs[trailingNewlines.runs.length - 1]) {
      if (trailingNewlines.runs[trailingNewlines.runs.length - 1].bold === tmp.bold) {
        if (trailingNewlines.runs[trailingNewlines.runs.length - 1].italic === tmp.italic) {
          if (trailingNewlines.runs[trailingNewlines.runs.length - 1].underline === tmp.underline) {
            if (trailingNewlines.runs[trailingNewlines.runs.length - 1].heading === tmp.heading) {
              if (trailingNewlines.runs[trailingNewlines.runs.length - 1].link === tmp.link) {
                trailingNewlines.runs[trailingNewlines.runs.length - 1].text = trailingNewlines.runs[trailingNewlines.runs.length - 1].text + substr;
              }
              let diff = substr.length - 1;
              let num4 = 0;
              let num5 = 0;
              if (0 <= diff) {
                while (true) {
                  let sum1;
                  let tmp16 = metroImportDefault;
                  if (substr.charCodeAt(diff) === metroImportDefault.LINE_FEED) {
                    sum1 = num4 + 1;
                  } else {
                    let charCodeAtResult1 = substr.charCodeAt(diff);
                    let tmp20 = charCodeAtResult1 === tmp16.SPACE || charCodeAtResult1 === tmp16.TAB || charCodeAtResult1 === tmp16.FORM_FEED;
                    sum1 = num4;
                    num5 = num4;
                    if (!tmp20) {
                      break;
                    }
                  }
                  diff = diff - 1;
                  num4 = sum1;
                  num5 = sum1;
                }
              }
              let bound = num5;
              if (findTextStart(substr) === substr.length) {
                const _Math = Math;
                bound = Math.min(constants.PARAGRAPH, trailingNewlines + num5);
              }
              trailingNewlines.trailingNewlines = bound;
            }
          }
        }
      }
    }
    const runs = trailingNewlines.runs;
    const push = runs.push;
    const obj = { text: substr };
    const merged = Object.assign(tmp);
    push(obj);
  }
}
function flushSpacing(pendingBreaks) {
  if (0 === pendingBreaks.pendingBreaks) {
    const held = pendingBreaks.held;
    for (const item10025 of held) {
      let tmp9 = appendRun(pendingBreaks, item10025.text, item10025);
      continue;
    }
  } else if (pendingBreaks.runs.length > 0) {
    if (pendingBreaks.trailingNewlines > 0) {
      trimTrailingLineIndentation(pendingBreaks.runs);
    }
    const repeat = "\n".repeat;
    const _Math = Math;
    appendRun(pendingBreaks, "\n".repeat(Math.max(0, pendingBreaks.pendingBreaks - pendingBreaks.trailingNewlines)));
  }
  pendingBreaks.held = [];
  pendingBreaks.pendingBreaks = 0;
}
function appendText(atBoundary, substr) {
  let obj3;
  let obj5;
  let num = 0;
  if (atBoundary.atBoundary) {
    num = findTextStart(substr);
  }
  const tmp2 = findTextEnd(substr, num);
  const obj = { bold: atBoundary.styles.bold > 0 || null != atBoundary.heading, italic: atBoundary.styles.italic > 0, underline: atBoundary.styles.underline > 0 };
  if (null != atBoundary.heading) {
    obj3 = { heading: atBoundary.heading };
    const obj2 = { heading: atBoundary.heading };
  } else {
    obj3 = {};
  }
  const merged = Object.assign(obj3);
  if (null != atBoundary.links[atBoundary.links.length - 1]) {
    obj5 = { link: atBoundary.links[atBoundary.links.length - 1] };
    const obj4 = { link: atBoundary.links[atBoundary.links.length - 1] };
  } else {
    obj5 = {};
  }
  const merged1 = Object.assign(obj5);
  if (tmp2 > num) {
    flushSpacing(atBoundary);
    appendRun(atBoundary, substr.slice(num, tmp2), obj);
    atBoundary.afterMarker = false;
    atBoundary.atBoundary = false;
  }
  if (tmp2 < substr.length) {
    const held = atBoundary.held;
    const push = held.push;
    const obj6 = { text: substr.slice(tmp2) };
    const merged2 = Object.assign(obj);
    push(obj6);
  }
}
({ BARE_UNKNOWN_TAG: c2, BLOCK_BREAKS: c3, BULLET: closure_4, DEFAULT_MAX_HTML_LENGTH: hasOwnProperty, HIGH_SURROGATE: metroRequire, HTML_WHITESPACE_CODES: metroImportDefault, KNOWN_UNSUPPORTED_HTML_TAGS: metroImportAll, PLAIN_STYLE: c9, SLASH_PREFIXED_MARKER: c10, SLASH_SEPARATED_UNKNOWN_TAG: unpackModuleId, TAG_BEHAVIORS: closure_12, TAG_NAME: map1, VOID_HTML_TAGS: closure_14 } = HTMLParserConstants);
const DEFAULT_MAX_HTML_LENGTH = HTMLParserConstants.DEFAULT_MAX_HTML_LENGTH;
let result = size.fileFinishedImporting("modules/html_parser/index.tsx");

export { DEFAULT_MAX_HTML_LENGTH };
export function parseHTMLFromText(summaryLocalized) {
  let markup;
  let unfinishedTag;
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  let maxLength = obj.maxLength;
  if (maxLength === undefined) {
    maxLength = closure_5;
  }
  if (!summaryLocalized.includes("<")) {
    let str = "&";
    if (!summaryLocalized.includes("&")) {
      let items1;
      let str2 = "\r";
      let tmp = collapseBlankLines;
      let replaced = summaryLocalized;
      if (summaryLocalized.includes("\r")) {
        replaced = summaryLocalized.replace(/\r\n?/g, "\n");
      }
      let num = 0;
      const tmpResult = tmp(replaced, 0);
      let tmp4 = findTextStart(tmpResult);
      const tmp6 = findTextEnd(tmpResult, tmp4);
      if (tmp6 > tmp4) {
        let obj2 = { text: tmpResult.slice(tmp4, tmp6) };
        let merged = Object.assign(closure_9);
        let items = [obj2];
        items1 = items;
      } else {
        items1 = [];
      }
      return items1;
    }
  }
  const bound = Math.max(0, Math.floor(maxLength));
  let diff = bound;
  if (regex2.test(summaryLocalized.charAt(bound - 1))) {
    diff = bound - 1;
  }
  const str4 = summaryLocalized.slice(0, diff);
  let replaced1 = str4;
  if (str4.includes("\r")) {
    replaced1 = str4.replace(/\r\n?/g, "\n");
  }
  let obj3 = { markup: replaced1, runs: [], styles: { bold: 0, italic: 0, underline: 0 }, links: [], lists: [], itemDepth: 0, hiddenDepth: 0, ending: true, held: [], pendingBreaks: 0, atBoundary: true, afterMarker: false, trailingNewlines: 0 };
  const Parser = obj3(9371).Parser;
  const tmp13 = obj3;
  class tmp15 extends Parser {
    onclosetag(arg0, arg1) {
      const markup = obj3.markup;
      const startIndex = this.startIndex;
      const str = markup.slice(arg0, arg1);
      const str2 = str.toLowerCase();
      c1 = undefined;
      super.onclosetag(arg0, arg1);
      const replaced = str2.replace(/\/+$/, "");
      if (obj3.hiddenDepth <= 0) {
        if (c1 !== str2) {
          if (!authStore2.has(replaced)) {
            if (!set.has(replaced)) {
              if (!metroImportAll.has(replaced)) {
                const markup1 = tmp.markup;
                const index = markup1.indexOf(">", arg1);
                if (-1 !== index) {
                  const markup2 = tmp.markup;
                  appendText(obj3, markup2.slice(startIndex, index + 1));
                }
              }
            }
          }
        }
      }
    }
  }
  let closure_4 = tmp15;
  constants = tmp15.prototype;
  let obj4 = {
    onopentagname() {
      obj3.unfinishedTag = regex.startIndex;
    },
    onopentag(arg0, href) {
      let tmp31;
      function getLink(href) {
        if (null != href) {
          try {
            const _URL = URL;
            const self = this;
            const self2 = this;
            const uRL = new URL(href);
            const items = ["http:", "https:", "mailto:"];
            href = undefined;
            const tmp4 = uRL;
            if (items.includes(uRL.protocol)) {
              href = tmp4.href;
            }
            return href;
          } catch (err) {
          }
        }
      }
      obj3.unfinishedTag = undefined;
      const value = authStore2.get(arg0);
      if (obj3.hiddenDepth <= 0) {
        let hidden;
        if (value != null) {
          hidden = value.hidden;
        }
        if (true !== hidden) {
          if (null != value) {
            let LINE = value.breaks;
            if (null != LINE) {
              if (!obj3.afterMarker) {
                const _Math = Math;
                const pendingBreaks = tmp.pendingBreaks;
                if (obj3.itemDepth > 0) {
                  LINE = constants.LINE;
                }
                obj3.pendingBreaks = max(pendingBreaks, LINE);
              }
              obj3.atBoundary = true;
            }
            if (null != value.style) {
              const styles = tmp.styles;
              const style = value.style;
              styles[style] = styles[style] + 1;
            }
            if (true === value.link) {
              const links = tmp.links;
              links.push(getLink(href.href));
            }
            if (null != value.heading) {
              obj3.heading = value.heading;
            }
            if (null != value.list) {
              const lists = tmp.lists;
              let str = "ordered";
              const obj2 = { ordered: "ordered" === value.list, index: 0 };
              lists.push(obj2);
            }
            if (true === value.lineBreak) {
              let tmp29;
              flushSpacing(obj3);
              const tmp48 = appendRun;
              if (null != obj3.heading) {
                let obj5;
                let obj7;
                obj3 = { bold: tmp31, italic: obj3.styles.italic > 0, underline: obj3.styles.underline > 0 };
                tmp31 = obj3.styles.bold > 0 || null != obj3.heading;
                if (null != obj3.heading) {
                  obj5 = { heading: obj3.heading };
                  const obj4 = { heading: obj3.heading };
                } else {
                  obj5 = {};
                }
                const merged = Object.assign(obj5);
                if (null != obj3.links[obj3.links.length - 1]) {
                  obj7 = { link: obj3.links[obj3.links.length - 1] };
                  const obj6 = { link: obj3.links[obj3.links.length - 1] };
                } else {
                  obj7 = {};
                }
                const merged1 = Object.assign(obj7);
                tmp29 = obj3;
              } else {
                tmp29 = React4;
              }
              tmp48(obj3, "\n", tmp29);
              obj3.atBoundary = true;
              obj3.afterMarker = false;
            }
            if (true === value.item) {
              let text;
              flushSpacing(obj3);
              let ordered;
              const tmp52 = appendRun;
              if (obj3.lists[obj3.lists.length - 1] != null) {
                ordered = tmp51.ordered;
              }
              if (true === ordered) {
                const sum = tmp51.index + 1;
                obj3.lists[obj3.lists.length - 1].index = sum;
                text = `${tmp41}. `;
              } else {
                text = React3;
              }
              tmp52(obj3, text);
              obj3.itemDepth = obj3.itemDepth + 1;
              obj3.afterMarker = true;
            }
          } else {
            const markup1 = tmp.markup;
            const substr = markup1.slice(tmp2.startIndex, tmp2.endIndex + 1);
            let isMatch = regex5.test(arg0);
            if (isMatch) {
              const isMatch1 = regex.test(substr);
              let hasItem = !isMatch1 && !unpackModuleId.test(substr) || set.has(arg0) || metroImportAll.has(arg0);
              if (!hasItem) {
                const endIndex = tmp2.endIndex;
                if (obj3.closingTags == null) {
                  const markup2 = tmp.markup;
                  if (markup2.includes("</")) {
                    const markup = tmp.markup;
                    const _Map2 = Map;
                    const self3 = this;
                    const self4 = this;
                    map = new Map();
                    const self5 = this;
                    const self6 = this;
                    const obj = {
                      onclosetag(arg0) {
                                      const startIndex = parser.startIndex;
                                      const str = markup.slice(startIndex, startIndex + arg0.length + 2);
                                      const formatted = str.toLowerCase();
                                      if (formatted === "</" + arg0) {
                                        const result = map.set(arg0, startIndex);
                                      }
                                    }
                    };
                    const parser = new _mod9371.Parser(obj, { decodeEntities: true, recognizeSelfClosing: true });
                    parser.end(markup);
                    map1 = map;
                  } else {
                    const _Map = Map;
                    let self = this;
                    let self2 = this;
                    map1 = new Map();
                  }
                  obj3.closingTags = map1;
                }
                const closingTags = tmp.closingTags;
                let num = closingTags.get(arg0);
                if (num == null) {
                  num = -1;
                }
                hasItem = num > endIndex;
              }
              isMatch = hasItem;
            }
            if (!isMatch) {
              appendText(obj3, substr);
            }
          }
        }
      }
      obj3.hiddenDepth = obj3.hiddenDepth + 1;
    },
    onclosetag(arg0, arg1) {
      const tmp = arg1;
      if (!tmp) {
        c1 = arg0;
      }
      if (!obj3.ending) {
        if (obj3.hiddenDepth > 0) {
          obj3.hiddenDepth = obj3.hiddenDepth - 1;
        } else {
          const value = authStore2.get(arg0);
          if (null != value) {
            let LINE = value.breaks;
            if (null != LINE) {
              if (!false) {
                const _Math = Math;
                const pendingBreaks = tmp2.pendingBreaks;
                if (obj3.itemDepth > 0) {
                  LINE = constants.LINE;
                }
                obj3.pendingBreaks = max(pendingBreaks, LINE);
              }
              obj3.atBoundary = true;
              obj3.afterMarker = false;
            }
            if (null != value.style) {
              const styles = tmp2.styles;
              const style = value.style;
              styles[style] = styles[style] - 1;
            }
            if (true === value.link) {
              const links = tmp2.links;
              links.pop();
            }
            if (null != value.heading) {
              obj3.heading = undefined;
            }
            if (null != value.list) {
              const lists = tmp2.lists;
              lists.pop();
            }
            if (true === value.item) {
              obj3.itemDepth = obj3.itemDepth - 1;
            }
          }
        }
      }
    },
    oncomment() {
      const markup = obj3.markup;
      const substr = markup.slice(regex.startIndex, regex.endIndex + 1);
      let isMatch = 0 === obj3.hiddenDepth;
      const tmp = obj3;
      if (isMatch) {
        isMatch = regex2.test(substr);
      }
      if (isMatch) {
        appendText(tmp, substr);
      }
    },
    ontext(substr) {
      if (0 === obj3.hiddenDepth) {
        appendText(tmp, substr);
      }
    }
  };
  const tmp152 = new tmp15(obj4, { decodeEntities: true, recognizeSelfClosing: true });
  regex = tmp152;
  tmp152.write(obj3.markup);
  tmp152.end();
  ({ markup, unfinishedTag } = obj3);
  const slice = markup.slice;
  if (unfinishedTag == null) {
    unfinishedTag = tmp152.startIndex;
  }
  const str6 = slice(unfinishedTag);
  let isMatch = "" === str6;
  if (!isMatch) {
    let obj6 = /^<\/?br\/?$/i;
    isMatch = obj6.test(str6);
  }
  if (!isMatch) {
    let obj5 = {
      ontext(arg0) {
          appendText(obj3, arg0);
        }
    };
    let self = this;
    let self2 = this;
    let parser = new tmp13(9371).Parser(obj5, { decodeEntities: true });
    parser.end(str6.replace(/</g, "&lt;"));
  }
  const runs = obj3.runs;
  if (runs.length > 0) {
    let text = tmp22.text;
    runs[runs.length - 1].text = text.slice(0, findTextEnd(runs[runs.length - 1].text));
    while (runs[runs.length - 1].text.length <= 0) {
      let arr = runs.pop();
      if (runs.length <= 0) {
        break;
      }
    }
  }
  return runs;
}
