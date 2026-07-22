// Module ID: 7763
// Function ID: 61658
// Name: parseWithClassNameExtraction
// Dependencies: []
// Exports: renderChangelogMessageMarkup

// Module 7763 (parseWithClassNameExtraction)
function parseWithClassNameExtraction(transformUpperCase) {
  let flag = transformUpperCase.transformUpperCase;
  if (flag === undefined) {
    flag = false;
  }
  const arg1 = flag;
  return (arg0, arg1, inline) => {
    const match = regex.exec(arg0[1]);
    const str2 = arg0[1].replace(regex, "");
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
    obj.content = callback(closure_2[0]).parseInline(arg1, formatted, inline);
    return obj;
  };
}
function defaultRules(arg0) {
  let obj = {};
  const merged = Object.assign(arg1(dependencyMap[1]).baseRules);
  obj = {};
  const merged1 = Object.assign(image);
  if ("function" === typeof arg1(dependencyMap[1]).customRules.image) {
    const customRules = arg1(dependencyMap[1]).customRules;
    let image = customRules.image(arg0);
  } else {
    image = arg1(dependencyMap[1]).customRules.image;
  }
  const merged2 = Object.assign(image);
  obj["image"] = obj;
  obj = {};
  const merged3 = Object.assign(link);
  if ("function" === typeof arg1(dependencyMap[1]).customRules.link) {
    const customRules2 = arg1(dependencyMap[1]).customRules;
    let link = customRules2.link(arg0);
  } else {
    link = arg1(dependencyMap[1]).customRules.link;
  }
  const merged4 = Object.assign(link);
  obj["link"] = obj;
  const merged5 = Object.assign(list);
  if ("function" === typeof arg1(dependencyMap[1]).customRules.list) {
    const customRules3 = arg1(dependencyMap[1]).customRules;
    let list = customRules3.list(arg0);
  } else {
    list = arg1(dependencyMap[1]).customRules.list;
  }
  const merged6 = Object.assign(list);
  obj["list"] = {};
  obj["interpolation"] = {
    order: importDefault(dependencyMap[2]).order,
    match(arg0) {
      return regex.exec(arg0);
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
  if ("function" === typeof arg1(dependencyMap[1]).customRules.lheading) {
    const customRules4 = arg1(dependencyMap[1]).customRules;
    let lheading = customRules4.lheading(arg0);
  } else {
    lheading = arg1(dependencyMap[1]).customRules.lheading;
  }
  const merged8 = Object.assign(lheading);
  obj["lheading"] = obj3;
  const merged9 = Object.assign(heading);
  if ("function" === typeof arg1(dependencyMap[1]).customRules.heading) {
    const customRules5 = arg1(dependencyMap[1]).customRules;
    let heading = customRules5.heading(arg0);
  } else {
    heading = arg1(dependencyMap[1]).customRules.heading;
  }
  const merged10 = Object.assign(heading);
  obj["heading"] = {};
  const merged11 = Object.assign(blockQuote);
  if ("function" === typeof arg1(dependencyMap[1]).customRules.blockQuote) {
    const customRules6 = arg1(dependencyMap[1]).customRules;
    let blockQuote = customRules6.blockQuote(arg0);
  } else {
    blockQuote = arg1(dependencyMap[1]).customRules.blockQuote;
  }
  const merged12 = Object.assign(blockQuote);
  obj["blockQuote"] = {};
  const merged13 = Object.assign(paragraph);
  if ("function" === typeof arg1(dependencyMap[1]).customRules.paragraph) {
    const customRules7 = arg1(dependencyMap[1]).customRules;
    let paragraph = customRules7.paragraph(arg0);
  } else {
    paragraph = arg1(dependencyMap[1]).customRules.paragraph;
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
  if ("function" === typeof arg1(dependencyMap[1]).customRules.lheading) {
    const customRules = arg1(dependencyMap[1]).customRules;
    let lheading = customRules.lheading(arg0);
  } else {
    lheading = arg1(dependencyMap[1]).customRules.lheading;
  }
  const merged1 = Object.assign(lheading);
  obj.lheading = obj;
  return obj;
}
function messageRules(arg0) {
  let obj = {};
  const merged = Object.assign(defaultRules(arg0));
  obj = {};
  const merged1 = Object.assign(importDefault(dependencyMap[0]).defaultRules.newline);
  obj["newline"] = obj;
  obj["text"] = importDefault(dependencyMap[2]);
  obj["list"] = importDefault(dependencyMap[3]);
  obj["subtext"] = importDefault(dependencyMap[4]);
  return obj;
}
function getDefaultRules(arg0) {
  const merged = Object.assign(defaultRules(arg0));
  return {};
}
const lheading = importDefault(dependencyMap[0]).defaultRules.lheading;
const heading = importDefault(dependencyMap[0]).defaultRules.heading;
const link = importDefault(dependencyMap[0]).defaultRules.link;
const image = importDefault(dependencyMap[0]).defaultRules.image;
const list = importDefault(dependencyMap[0]).defaultRules.list;
const blockQuote = importDefault(dependencyMap[0]).defaultRules.blockQuote;
const paragraph = importDefault(dependencyMap[0]).defaultRules.paragraph;
let closure_10 = /\{(.+?)}/;
let closure_11 = /^\$(\w+?)\$/;
const result = arg1(dependencyMap[6]).fileFinishedImporting("utils/ChangeLogUtils.tsx");

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
  let obj = { st: true, Math: true };
  const obj2 = importDefault(dependencyMap[5]);
  if (null != changeLog) {
    obj = { changeLog };
  } else {
    obj = {};
  }
  obj.content = importDefault(dependencyMap[5]).reactParserFor(getDefaultRules(arg1))(content.content, false, obj);
  return obj;
};
