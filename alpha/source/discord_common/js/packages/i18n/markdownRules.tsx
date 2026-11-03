// Module ID: 2073
// Function ID: 2074
// Name: markdownRules
// Dependencies: [2072, 2]

// Module 2073 (markdownRules)
import module_2072_mod from "module_2072" /* 2072 */;
import size from "module_2" /* 2 */;

let module_2072;
let obj2;
let obj3;
let obj4;
const newline = module_2072.defaultRules.newline;
const paragraph = module_2072.defaultRules.paragraph;
const url = module_2072.defaultRules.url;
const link = module_2072.defaultRules.link;
const strong = module_2072.defaultRules.strong;
const u = module_2072.defaultRules.u;
const br = module_2072.defaultRules.br;
const em = module_2072.defaultRules.em;
const image = module_2072.defaultRules.image;
const text = module_2072.defaultRules.text;
let obj = { newline, paragraph, url, link: obj2, strong, u, br, em, image, hook: obj3, noparse: obj4, text };
obj2 = {
  parse(arg0, arg1, context) {
    const parsed = link.parse(arg0, arg1, context);
    parsed.context = context.context;
    return parsed;
  }
};
const merged = Object.assign(link);
obj3 = {
  order: text.order,
  match: module_2072.inlineRegex(/^\$\[(.*?)\]\((\w+)\)/),
  parse(arg0, fn, render) {
    const obj = { render: render.context[arg0[2]], content: fn(arg0[1], render) };
    return obj;
  },
  react(render, fn, key) {
    return render.render(fn(render.content, key), key.key);
  }
};
module_2072 = module_2072_mod;
obj4 = {
  order: text.order,
  match: module_2072.inlineRegex(/^!!(\d+?)!!/),
  parse(arg0, arg1, arg2) {
    let content = str;
    if (typeof arg2.unsafeContext[arg0[1]] !== "string") {
      let str2 = "";
      if (null != arg2.unsafeContext[arg0[1]]) {
        str2 = str.toString();
      }
      content = str2;
    }
    return { type: "text", content };
  },
  react(content) {
    return content.content;
  }
};
module_2072 = module_2072_mod;
const result = size.fileFinishedImporting("../discord_common/js/packages/i18n/markdownRules.tsx");

export const rules = obj;
