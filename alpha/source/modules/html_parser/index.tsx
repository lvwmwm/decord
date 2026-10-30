// Module ID: 9384
// Function ID: 9385
// Name: DEFAULT_MAX_HTML_LENGTH
// Dependencies: [9385, 9386, 9410, 9411, 2]
// Exports: parseHTMLFromText

// Module 9384 (DEFAULT_MAX_HTML_LENGTH)
import _mod9386 from "module_9386" /* 9386 */;
import HTMLParserRunUtils from "HTMLParserRunUtils" /* 9410 */;
import HTMLParserLinkUtils from "HTMLParserLinkUtils" /* 9411 */;
import HTMLParserConstants from "HTMLParserConstants" /* 9385 */;
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
function getBreakStyle(spacingLink) {
  let tmp;
  if (null != spacingLink) {
    const obj = { link: spacingLink };
    const merged = Object.assign(React4);
    tmp = obj;
  } else {
    tmp = React4;
  }
  return tmp;
}
function appendRun(trailingNewlines, repeatResult, breakStyle) {
  let tmp = breakStyle;
  if (breakStyle === undefined) {
    tmp = React4;
  }
  const index = repeatResult.indexOf("\n");
  if (trailingNewlines.trailingNewlines > 0) {
    if (-1 !== index) {
      let num3 = 0;
      let flag = true;
      if (0 < index) {
        while (true) {
          let charCodeAtResult = repeatResult.charCodeAt(num3);
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
  const arr = collapseBlankLines(repeatResult, trailingNewlines.trailingNewlines);
  let substr = arr;
  if (0 === trailingNewlines.runs.length) {
    substr = arr.slice(findTextStart(arr));
  }
  if (0 !== substr.length) {
    const obj = HTMLParserRunUtils;
    obj.mergeRun(trailingNewlines.runs, substr, tmp);
    let diff = substr.length - 1;
    let num5 = 0;
    let num4 = 0;
    if (0 <= diff) {
      while (true) {
        let sum1;
        let tmp11 = metroImportDefault;
        if (substr.charCodeAt(diff) === metroImportDefault.LINE_FEED) {
          sum1 = num5 + 1;
        } else {
          let charCodeAtResult1 = substr.charCodeAt(diff);
          let tmp15 = charCodeAtResult1 === tmp11.SPACE || charCodeAtResult1 === tmp11.TAB || charCodeAtResult1 === tmp11.FORM_FEED;
          sum1 = num5;
          num4 = num5;
          if (!tmp15) {
            break;
          }
        }
        diff = diff - 1;
        num5 = sum1;
        num4 = sum1;
      }
    }
    let bound = num4;
    if (findTextStart(substr) === substr.length) {
      const _Math = Math;
      bound = Math.min(constants.PARAGRAPH, trailingNewlines + num4);
    }
    trailingNewlines.trailingNewlines = bound;
  }
}
function flushSpacing(pendingBreaks) {
  if (0 === pendingBreaks.pendingBreaks) {
    const held = pendingBreaks.held;
    for (const item10026 of held) {
      let tmp11 = appendRun(pendingBreaks, item10026.text, item10026);
      continue;
    }
  } else if (pendingBreaks.runs.length > 0) {
    if (pendingBreaks.trailingNewlines > 0) {
      trimTrailingLineIndentation(pendingBreaks.runs);
    }
    const repeat = "\n".repeat;
    const _Math = Math;
    const repeatResult = "\n".repeat(Math.max(0, pendingBreaks.pendingBreaks - pendingBreaks.trailingNewlines));
    appendRun(pendingBreaks, repeatResult, getBreakStyle(pendingBreaks.spacingLink));
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
    atBoundary.spacingLink = obj.link;
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
function parseMarkupRuns(markup, keepInvalidAnchors) {
  let unfinishedTag;
  let obj = { markup, keepInvalidAnchors: true === keepInvalidAnchors, runs: [], styles: { bold: 0, italic: 0, underline: 0 }, links: [], lists: [], itemDepth: 0, hiddenDepth: 0, ending: true, held: [], pendingBreaks: 0, atBoundary: true, afterMarker: false, trailingNewlines: 0 };
  keepInvalidAnchors = undefined;
  if (keepInvalidAnchors != null) {
    keepInvalidAnchors = keepInvalidAnchors.keepInvalidAnchors;
  }
  const tmp2 = obj;
  const Parser = obj(9386).Parser;
  class tmp4 extends Parser {
    onclosetag(arg0, arg1) {
      const markup = obj.markup;
      const startIndex = this.startIndex;
      const str = markup.slice(arg0, arg1);
      const str2 = str.toLowerCase();
      c1 = undefined;
      super.onclosetag(arg0, arg1);
      const replaced = str2.replace(/\/+$/, "");
      if (obj.hiddenDepth <= 0) {
        if (c1 !== str2) {
          if (!authStore2.has(replaced)) {
            if (!set.has(replaced)) {
              if (!metroImportAll.has(replaced)) {
                const markup1 = tmp.markup;
                const index = markup1.indexOf(">", arg1);
                if (-1 !== index) {
                  const markup2 = tmp.markup;
                  appendText(obj, markup2.slice(startIndex, index + 1));
                }
              }
            }
          }
        }
      }
    }
  }
  const TAG_BEHAVIORS = tmp4;
  constants = tmp4.prototype;
  let obj2 = {
    onopentagname() {
      obj.unfinishedTag = regex.startIndex;
    },
    onopentag(arg0, href) {
      let tmp38;
      obj.unfinishedTag = undefined;
      const value = authStore2.get(arg0);
      if (obj.hiddenDepth <= 0) {
        let hidden;
        if (value != null) {
          hidden = value.hidden;
        }
        if (true !== hidden) {
          if (null != value) {
            let LINE = value.breaks;
            if (null != LINE) {
              if (!obj.afterMarker) {
                const _Math = Math;
                const pendingBreaks = tmp.pendingBreaks;
                if (obj.itemDepth > 0) {
                  LINE = constants.LINE;
                }
                obj.pendingBreaks = max(pendingBreaks, LINE);
              }
              obj.atBoundary = true;
            }
            if (null != value.style) {
              const styles = tmp.styles;
              const style = value.style;
              styles[style] = styles[style] + 1;
            }
            if (true === value.link) {
              const links = tmp.links;
              const push = links.push;
              const obj3 = HTMLParserLinkUtils;
              let link = obj3.getLink(href.href);
              if (link == null) {
                let str;
                if (obj.keepInvalidAnchors) {
                  str = "";
                }
                link = str;
              }
              push(link);
              obj.spacingLink = undefined;
            }
            if (null != value.heading) {
              obj.heading = value.heading;
            }
            if (null != value.list) {
              const lists = tmp.lists;
              const obj2 = { ordered: "ordered" === value.list, index: 0 };
              lists.push(obj2);
            }
            if (true === value.lineBreak) {
              let tmp33;
              flushSpacing(obj);
              const tmp55 = appendRun;
              if (null != obj.heading) {
                let obj6;
                let obj8;
                const obj4 = { bold: tmp38, italic: obj.styles.italic > 0, underline: obj.styles.underline > 0 };
                tmp38 = obj.styles.bold > 0 || null != obj.heading;
                if (null != obj.heading) {
                  obj6 = { heading: obj.heading };
                  const obj5 = { heading: obj.heading };
                } else {
                  obj6 = {};
                }
                const merged = Object.assign(obj6);
                if (null != obj.links[obj.links.length - 1]) {
                  obj8 = { link: obj.links[obj.links.length - 1] };
                  const obj7 = { link: obj.links[obj.links.length - 1] };
                } else {
                  obj8 = {};
                }
                const merged1 = Object.assign(obj8);
                tmp33 = obj4;
              } else if (null != obj.links[obj.links.length - 1]) {
                const obj9 = { link: obj.links[obj.links.length - 1] };
                const merged2 = Object.assign(React4);
                tmp33 = obj9;
              } else {
                tmp33 = React4;
              }
              tmp55(obj, "\n", tmp33);
              obj.atBoundary = true;
              obj.afterMarker = false;
            }
            if (true === value.item) {
              let text;
              flushSpacing(obj);
              let ordered;
              const tmp59 = appendRun;
              if (obj.lists[obj.lists.length - 1] != null) {
                ordered = tmp58.ordered;
              }
              if (true === ordered) {
                const sum = tmp58.index + 1;
                obj.lists[obj.lists.length - 1].index = sum;
                text = `${tmp48}. `;
              } else {
                text = React3;
              }
              tmp59(obj, text);
              obj.itemDepth = obj.itemDepth + 1;
              obj.afterMarker = true;
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
                if (obj.closingTags == null) {
                  const markup2 = tmp.markup;
                  if (markup2.includes("</")) {
                    const markup = tmp.markup;
                    const _Map2 = Map;
                    const self3 = this;
                    const self4 = this;
                    map = new Map();
                    obj = {
                      onclosetag(arg0) {
                                      const startIndex = parser.startIndex;
                                      const str = markup.slice(startIndex, startIndex + arg0.length + 2);
                                      const formatted = str.toLowerCase();
                                      if (formatted === "</" + arg0) {
                                        const result = map.set(arg0, startIndex);
                                      }
                                    }
                    };
                    const self5 = this;
                    const self6 = this;
                    const parser = new _mod9386.Parser(obj, { decodeEntities: true, recognizeSelfClosing: true });
                    parser.end(markup);
                    map1 = map;
                  } else {
                    const _Map = Map;
                    const self = this;
                    const self2 = this;
                    map1 = new Map();
                  }
                  obj.closingTags = map1;
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
              appendText(obj, substr);
            }
          }
        }
      }
      obj.hiddenDepth = obj.hiddenDepth + 1;
    },
    onclosetag(arg0, arg1) {
      const tmp = arg1;
      if (!tmp) {
        c1 = arg0;
      }
      if (!obj.ending) {
        if (obj.hiddenDepth > 0) {
          obj.hiddenDepth = obj.hiddenDepth - 1;
        } else {
          const value = authStore2.get(arg0);
          if (null != value) {
            let LINE = value.breaks;
            if (null != LINE) {
              if (!false) {
                const _Math = Math;
                const pendingBreaks = tmp2.pendingBreaks;
                if (obj.itemDepth > 0) {
                  LINE = constants.LINE;
                }
                obj.pendingBreaks = max(pendingBreaks, LINE);
              }
              obj.atBoundary = true;
              obj.afterMarker = false;
            }
            if (null != value.style) {
              const styles = tmp2.styles;
              const style = value.style;
              styles[style] = styles[style] - 1;
            }
            if (true === value.link) {
              const links = tmp2.links;
              links.pop();
              obj.spacingLink = undefined;
            }
            if (null != value.heading) {
              obj.heading = undefined;
            }
            if (null != value.list) {
              const lists = tmp2.lists;
              lists.pop();
            }
            if (true === value.item) {
              obj.itemDepth = obj.itemDepth - 1;
            }
          }
        }
      }
    },
    oncomment() {
      const markup = obj.markup;
      const substr = markup.slice(regex.startIndex, regex.endIndex + 1);
      let isMatch = 0 === obj.hiddenDepth;
      const tmp = obj;
      if (isMatch) {
        isMatch = regex2.test(substr);
      }
      if (isMatch) {
        appendText(tmp, substr);
      }
    },
    ontext(substr) {
      if (0 === obj.hiddenDepth) {
        appendText(tmp, substr);
      }
    }
  };
  const tmp42 = new tmp4(obj2, { decodeEntities: true, recognizeSelfClosing: true });
  regex = tmp42;
  tmp42.write(markup);
  tmp42.end();
  ({ markup, unfinishedTag } = obj);
  const slice = markup.slice;
  if (unfinishedTag == null) {
    unfinishedTag = tmp42.startIndex;
  }
  let str = slice(unfinishedTag);
  let isMatch = "" === str;
  if (!isMatch) {
    let obj4 = /^<\/?br\/?$/i;
    isMatch = obj4.test(str);
  }
  if (!isMatch) {
    let obj3 = {
      ontext(arg0) {
          appendText(obj, arg0);
        }
    };
    let self = this;
    let self2 = this;
    let parser = new tmp2(9386).Parser(obj3, { decodeEntities: true });
    let str2 = "&lt;";
    parser.end(str.replace(/</g, "&lt;"));
  }
  const runs = obj.runs;
  if (runs.length > 0) {
    let text = tmp11.text;
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
({ BARE_UNKNOWN_TAG: c2, BLOCK_BREAKS: c3, BULLET: closure_4, DEFAULT_MAX_HTML_LENGTH: hasOwnProperty, HIGH_SURROGATE: metroRequire, HTML_WHITESPACE_CODES: metroImportDefault, KNOWN_UNSUPPORTED_HTML_TAGS: metroImportAll, PLAIN_STYLE: c9, SLASH_PREFIXED_MARKER: c10, SLASH_SEPARATED_UNKNOWN_TAG: unpackModuleId, TAG_BEHAVIORS: closure_12, TAG_NAME: map1, VOID_HTML_TAGS: closure_14 } = HTMLParserConstants);
const DEFAULT_MAX_HTML_LENGTH = HTMLParserConstants.DEFAULT_MAX_HTML_LENGTH;
let result = size.fileFinishedImporting("modules/html_parser/index.tsx");

export { DEFAULT_MAX_HTML_LENGTH };
export function parseHTMLFromText(arr, arg1) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  let maxLength = obj.maxLength;
  if (maxLength === undefined) {
    maxLength = hasOwnProperty;
  }
  let flag = obj.parseTextLinks;
  if (flag === undefined) {
    flag = false;
  }
  const hasItem = arr.includes("<") || arr.includes("&");
  if (flag) {
    let items1;
    const _Math3 = Math;
    const _Math4 = Math;
    const bound = Math.max(0, Math.floor(maxLength));
    let diff = bound;
    if (metroRequire.test(arr.charAt(bound - 1))) {
      diff = bound - 1;
    }
    const str7 = arr.slice(0, diff);
    let str9 = str7;
    if (str7.includes("\r")) {
      str9 = str7.replace(/\r\n?/g, "\n");
    }
    if (hasItem) {
      items1 = parseMarkupRuns(str9, { keepInvalidAnchors: true });
    } else {
      let replaced = str9;
      const tmp21 = collapseBlankLines;
      if (str9.includes("\r")) {
        replaced = str9.replace(/\r\n?/g, "\n");
      }
      const tmp21Result = tmp21(replaced, 0);
      const tmp24 = findTextStart(tmp21Result);
      const tmp26 = findTextEnd(tmp21Result, tmp24);
      if (tmp26 > tmp24) {
        const obj2 = { text: tmp21Result.slice(tmp24, tmp26) };
        const merged = Object.assign(React4);
        const items = [obj2];
        items1 = items;
      } else {
        items1 = [];
      }
    }
    const obj4 = HTMLParserLinkUtils;
    return obj4.addTextLinks(items1);
  } else {
    let items3;
    if (hasItem) {
      const _Math = Math;
      const _Math2 = Math;
      const bound1 = Math.max(0, Math.floor(maxLength));
      let diff1 = bound1;
      const tmp11 = parseMarkupRuns;
      if (metroRequire.test(arr.charAt(bound1 - 1))) {
        diff1 = bound1 - 1;
      }
      const str4 = arr.slice(0, diff1);
      let replaced1 = str4;
      if (str4.includes("\r")) {
        replaced1 = str4.replace(/\r\n?/g, "\n");
      }
      items3 = tmp11(replaced1);
    } else {
      let replaced2 = arr;
      const tmp2 = collapseBlankLines;
      if (arr.includes("\r")) {
        replaced2 = arr.replace(/\r\n?/g, "\n");
      }
      const tmp2Result = tmp2(replaced2, 0);
      const tmp5 = findTextStart(tmp2Result);
      const tmp7 = findTextEnd(tmp2Result, tmp5);
      if (tmp7 > tmp5) {
        const obj3 = { text: tmp2Result.slice(tmp5, tmp7) };
        const merged1 = Object.assign(React4);
        const items2 = [obj3];
        items3 = items2;
      } else {
        items3 = [];
      }
    }
    return items3;
  }
}
