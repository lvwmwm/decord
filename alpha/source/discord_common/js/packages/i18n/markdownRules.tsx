// Module ID: 1952
// Function ID: 1953
// Name: markdownRules
// Dependencies: [1951, 2]

// Module 1952 (markdownRules)
import module_1951_mod from "module_1951" /* 1951 */;
import size from "module_2" /* 2 */;

let module_1951;
let obj2;
let obj3;
let obj4;
const newline = module_1951.defaultRules.newline;
const paragraph = module_1951.defaultRules.paragraph;
const url = module_1951.defaultRules.url;
const link = module_1951.defaultRules.link;
const strong = module_1951.defaultRules.strong;
const u = module_1951.defaultRules.u;
const br = module_1951.defaultRules.br;
const em = module_1951.defaultRules.em;
const image = module_1951.defaultRules.image;
const text = module_1951.defaultRules.text;
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
  match: module_1951.inlineRegex(/^\$\[(.*?)\]\((\w+)\)/),
  parse(arg0, fn, render) {
    const obj = { render: render.context[arg0[2]], content: fn(arg0[1], render) };
    return obj;
  },
  react(render, fn, key) {
    return render.render(fn(render.content, key), key.key);
  }
};
module_1951 = module_1951_mod;
obj4 = {
  order: text.order,
  match: module_1951.inlineRegex(/^!!(\d+?)!!/),
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
module_1951 = module_1951_mod;
const result = size.fileFinishedImporting("../discord_common/js/packages/i18n/markdownRules.tsx");

export const rules = obj;
