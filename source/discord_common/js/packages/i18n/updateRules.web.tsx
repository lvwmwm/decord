// Module ID: 15951
// Function ID: 123223
// Name: updateRules
// Dependencies: [31, 33, 3829, 2]
// Exports: default

// Module 15951 (updateRules)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("t").fileFinishedImporting("../discord_common/js/packages/i18n/updateRules.web.tsx");

export default function updateRules(paragraph) {
  paragraph.heading = require(3829) /* t */.defaultRules.heading;
  paragraph.lheading = require(3829) /* t */.defaultRules.lheading;
  paragraph.list = require(3829) /* t */.defaultRules.list;
  let obj = {};
  let merged = Object.assign(paragraph.paragraph);
  obj["react"] = function react(content, arg1, key) {
    return outer1_2("p", { children: arg1(content.content, key) }, key.key);
  };
  paragraph.paragraph = obj;
  obj = {};
  const merged1 = Object.assign(paragraph.link);
  obj["react"] = function react(context, arg1, key) {
    let obj = {};
    if (null != context.context) {
      if (context.context[context.target]) {
        if (tmp.onClick) {
          ({ onClick: obj.onClick, onContextMenu: obj.onContextMenu } = tmp);
        }
      }
      obj.onClick = context.context[context.target];
    }
    if (null == obj.onClick) {
      let tmp4;
      const sanitizeUrlResult = outer1_0(outer1_1[2]).sanitizeUrl(context.target);
      if (null != sanitizeUrlResult) {
        tmp4 = sanitizeUrlResult;
      }
      obj.href = tmp4;
      obj.target = "_blank";
      const obj2 = outer1_0(outer1_1[2]);
    }
    obj = { title: context.title };
    const merged = Object.assign(obj);
    obj["rel"] = "noreferrer";
    obj["children"] = arg1(context.content, key);
    return outer1_2("a", obj, key.key);
  };
  paragraph.link = obj;
  return paragraph;
};
