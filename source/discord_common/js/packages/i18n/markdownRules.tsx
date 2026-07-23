// Module ID: 15950
// Function ID: 123217
// Name: link
// Dependencies: [3829, 2]

// Module 15950 (link)
import t from "t";
import t from "t";

const link = require("t").defaultRules.link;
const text = require("t").defaultRules.text;
let obj = { newline: require("t").defaultRules.newline, paragraph: require("t").defaultRules.paragraph, url: require("t").defaultRules.url };
obj = {};
const merged = Object.assign(link);
obj["parse"] = function parse(arg0, arg1, context) {
  const parsed = link.parse(arg0, arg1, context);
  parsed.context = context.context;
  return parsed;
};
obj.link = obj;
obj.strong = require("t").defaultRules.strong;
obj.u = require("t").defaultRules.u;
obj.br = require("t").defaultRules.br;
obj.em = require("t").defaultRules.em;
obj.image = require("t").defaultRules.image;
obj = { order: text.order };
obj.match = t.inlineRegex(/^\$\[(.*?)\]\((\w+)\)/);
obj.parse = function parse(arg0, arg1, render) {
  return { render: render.context[arg0[2]], content: arg1(arg0[1], render) };
};
obj.react = function react(render, arg1, key) {
  return render.render(arg1(render.content, key), key.key);
};
obj.hook = obj;
const obj1 = { order: text.order };
obj1.match = t.inlineRegex(/^!!(\d+?)!!/);
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
const result = require("set").fileFinishedImporting("../discord_common/js/packages/i18n/markdownRules.tsx");

export const rules = obj;
