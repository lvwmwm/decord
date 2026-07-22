// Module ID: 15833
// Function ID: 121044
// Name: link
// Dependencies: []

// Module 15833 (link)
const link = require(dependencyMap[0]).defaultRules.link;
const text = require(dependencyMap[0]).defaultRules.text;
let obj = { newline: require(dependencyMap[0]).defaultRules.newline, paragraph: require(dependencyMap[0]).defaultRules.paragraph, url: require(dependencyMap[0]).defaultRules.url };
obj = {};
const merged = Object.assign(link);
obj["parse"] = function parse(arg0, arg1, context) {
  const parsed = link.parse(arg0, arg1, context);
  parsed.context = context.context;
  return parsed;
};
obj.link = obj;
obj.strong = require(dependencyMap[0]).defaultRules.strong;
obj.u = require(dependencyMap[0]).defaultRules.u;
obj.br = require(dependencyMap[0]).defaultRules.br;
obj.em = require(dependencyMap[0]).defaultRules.em;
obj.image = require(dependencyMap[0]).defaultRules.image;
obj = { order: text.order };
const _module = require(dependencyMap[0]);
obj.match = _module.inlineRegex(/^\$\[(.*?)\]\((\w+)\)/);
obj.parse = function parse(arg0, arg1, render) {
  return { render: render.context[arg0[2]], content: arg1(arg0[1], render) };
};
obj.react = function react(render, arg1, key) {
  return render.render(arg1(render.content, key), key.key);
};
obj.hook = obj;
const obj1 = { order: text.order };
const _module1 = require(dependencyMap[0]);
obj1.match = _module1.inlineRegex(/^!!(\d+?)!!/);
obj1.parse = function parse(arg0, arg1, arg2) {
  let tmp = str;
  if ("string" !== typeof arg2.unsafeContext[arg0[1]]) {
    let str2 = "";
    if (null != str) {
      str2 = str.toString();
    }
    tmp = str2;
  }
  const obj = { type: "text", content: tmp };
  return obj;
};
obj1.react = function react(content) {
  return content.content;
};
obj.noparse = obj1;
obj.text = text;
const _module2 = require(dependencyMap[1]);
const result = _module2.fileFinishedImporting("../discord_common/js/packages/i18n/markdownRules.tsx");

export const rules = obj;
