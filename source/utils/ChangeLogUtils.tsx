// Module ID: 7862
// Function ID: 62022
// Name: parseWithClassNameExtraction
// Dependencies: [3829, 7863, 4572, 4590, 4591, 4120, 2]
// Exports: renderChangelogMessageMarkup

// Module 7862 (parseWithClassNameExtraction)
const require = arg1;
function parseWithClassNameExtraction(transformUpperCase) {
  let flag = transformUpperCase.transformUpperCase;
  if (flag === undefined) {
    flag = false;
  }
  return (arg0, arg1, inline) => {
    const match = outer1_10.exec(arg0[1]);
    const str2 = arg0[1].replace(outer1_10, "");
    let formatted = str2;
    if (flag) {
      formatted = str2.toUpperCase();
    }
    const obj = {};
    let tmp3 = null;
    if (null != match) {
      tmp3 = match[1];
    }
    obj.className = tmp3;
    let num = 2;
    if ("=" === arg0[2]) {
      num = 1;
    }
    obj.level = num;
    obj.content = outer1_1(outer1_2[0]).parseInline(arg1, formatted, inline);
    return obj;
  };
}
function defaultRules(arg0) {
  let obj = {};
  const merged = Object.assign(require(7863) /* ChangeLogLink */.baseRules);
  obj = {};
  const merged1 = Object.assign(image);
  if ("function" === typeof require(7863) /* ChangeLogLink */.customRules.image) {
    const customRules = require(7863) /* ChangeLogLink */.customRules;
    image = customRules.image(arg0);
  } else {
    image = require(7863) /* ChangeLogLink */.customRules.image;
  }
  const merged2 = Object.assign(image);
  obj["image"] = obj;
  obj = {};
  const merged3 = Object.assign(link);
  if ("function" === typeof require(7863) /* ChangeLogLink */.customRules.link) {
    const customRules2 = require(7863) /* ChangeLogLink */.customRules;
    link = customRules2.link(arg0);
  } else {
    link = require(7863) /* ChangeLogLink */.customRules.link;
  }
  const merged4 = Object.assign(link);
  obj["link"] = obj;
  const merged5 = Object.assign(list);
  if ("function" === typeof require(7863) /* ChangeLogLink */.customRules.list) {
    const customRules3 = require(7863) /* ChangeLogLink */.customRules;
    list = customRules3.list(arg0);
  } else {
    list = require(7863) /* ChangeLogLink */.customRules.list;
  }
  const merged6 = Object.assign(list);
  obj["list"] = {};
  obj["interpolation"] = {
    order: importDefault(4572).order,
    match(arg0) {
      return outer1_11.exec(arg0);
    },
    parse(arg0, arg1, arg2) {
      if (null == arg2.interpolations[arg0[1]]) {
        let obj = { type: "text", content: arg0[0] };
      } else {
        obj = { type: "interpolation", renderer: tmp };
      }
      return obj;
    },
    react(renderer) {
      return renderer.renderer();
    }
  };
  const obj3 = {};
  const merged7 = Object.assign(lheading);
  obj3["parse"] = parseWithClassNameExtraction({ transformUpperCase: true });
  if ("function" === typeof require(7863) /* ChangeLogLink */.customRules.lheading) {
    const customRules4 = require(7863) /* ChangeLogLink */.customRules;
    lheading = customRules4.lheading(arg0);
  } else {
    lheading = require(7863) /* ChangeLogLink */.customRules.lheading;
  }
  const merged8 = Object.assign(lheading);
  obj["lheading"] = obj3;
  const merged9 = Object.assign(heading);
  if ("function" === typeof require(7863) /* ChangeLogLink */.customRules.heading) {
    const customRules5 = require(7863) /* ChangeLogLink */.customRules;
    heading = customRules5.heading(arg0);
  } else {
    heading = require(7863) /* ChangeLogLink */.customRules.heading;
  }
  const merged10 = Object.assign(heading);
  obj["heading"] = {};
  const merged11 = Object.assign(blockQuote);
  if ("function" === typeof require(7863) /* ChangeLogLink */.customRules.blockQuote) {
    const customRules6 = require(7863) /* ChangeLogLink */.customRules;
    blockQuote = customRules6.blockQuote(arg0);
  } else {
    blockQuote = require(7863) /* ChangeLogLink */.customRules.blockQuote;
  }
  const merged12 = Object.assign(blockQuote);
  obj["blockQuote"] = {};
  const merged13 = Object.assign(paragraph);
  if ("function" === typeof require(7863) /* ChangeLogLink */.customRules.paragraph) {
    const customRules7 = require(7863) /* ChangeLogLink */.customRules;
    paragraph = customRules7.paragraph(arg0);
  } else {
    paragraph = require(7863) /* ChangeLogLink */.customRules.paragraph;
  }
  const merged14 = Object.assign(paragraph);
  obj["paragraph"] = {};
  return obj;
}
function specialRules(arg0) {
  let obj = {};
  obj = {};
  const merged = Object.assign(lheading);
  obj["parse"] = parseWithClassNameExtraction({ transformUpperCase: false });
  if ("function" === typeof require(7863) /* ChangeLogLink */.customRules.lheading) {
    const customRules = require(7863) /* ChangeLogLink */.customRules;
    lheading = customRules.lheading(arg0);
  } else {
    lheading = require(7863) /* ChangeLogLink */.customRules.lheading;
  }
  const merged1 = Object.assign(lheading);
  obj.lheading = obj;
  return obj;
}
function messageRules(arg0) {
  let obj = {};
  const merged = Object.assign(defaultRules(arg0));
  obj = {};
  const merged1 = Object.assign(importDefault(3829).defaultRules.newline);
  obj["newline"] = obj;
  obj["text"] = importDefault(4572);
  obj["list"] = importDefault(4590);
  obj["subtext"] = importDefault(4591);
  return obj;
}
function getDefaultRules(arg0) {
  const merged = Object.assign(defaultRules(arg0));
  return {};
}
let lheading = require("t").defaultRules.lheading;
let heading = require("t").defaultRules.heading;
let link = require("t").defaultRules.link;
let image = require("t").defaultRules.image;
let list = require("t").defaultRules.list;
let blockQuote = require("t").defaultRules.blockQuote;
let paragraph = require("t").defaultRules.paragraph;
const re10 = /\{(.+?)}/;
const re11 = /^\$(\w+?)\$/;
const result = require("textRegexp").fileFinishedImporting("utils/ChangeLogUtils.tsx");

export default {
  getDefaultRules,
  getSpecialRules(arg0) {
    const merged = Object.assign(defaultRules(arg0));
    const merged1 = Object.assign(specialRules(arg0));
    return {};
  },
  getMessageRules(arg0) {
    const merged = Object.assign(messageRules(arg0));
    return {};
  }
};
export const renderChangelogMessageMarkup = function renderChangelogMessageMarkup(content, arg1, changeLog) {
  let obj = { hasSpoilerEmbeds: false, hasBailedAst: false };
  const obj2 = importDefault(4120);
  if (null != changeLog) {
    obj = { changeLog };
  } else {
    obj = {};
  }
  obj.content = importDefault(4120).reactParserFor(getDefaultRules(arg1))(content.content, false, obj);
  return obj;
};
