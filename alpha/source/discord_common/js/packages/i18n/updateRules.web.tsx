// Module ID: 1932
// Function ID: 1933
// Name: i18n/updateRules
// Dependencies: [19, 21, 1930, 2]
// Exports: default

// Module 1932 (i18n/updateRules)
import _mod1930 from "module_1930" /* 1930 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("../discord_common/js/packages/i18n/updateRules.web.tsx");

export default function updateRules(paragraph) {
  paragraph.heading = _mod1930.defaultRules.heading;
  paragraph.lheading = _mod1930.defaultRules.lheading;
  paragraph.list = _mod1930.defaultRules.list;
  let obj = {};
  let merged = Object.assign(paragraph.paragraph);
  obj.react = function react(content, fn, key) {
    return <p key={arg2.key}>{arg1(arg0.content, arg2)}</p>;
  };
  paragraph.paragraph = obj;
  let obj2 = {};
  const merged1 = Object.assign(paragraph.link);
  obj2.react = function react(context, fn, key) {
    const obj = {};
    if (null != context.context) {
      if (context.context[context.target]) {
        if (tmp.onClick) {
          ({ onClick: obj.onClick, onContextMenu: obj.onContextMenu } = tmp);
        }
      }
      obj.onClick = context.context[context.target];
    }
    if (null == obj.onClick) {
      const sanitizeUrlResult = _mod1930.sanitizeUrl(context.target);
      obj.href = sanitizeUrlResult;
      obj.target = "_blank";
    }
    const obj3 = { title: context.title };
    const merged = Object.assign(obj);
    obj3.rel = "noreferrer";
    obj3.children = fn(context.content, key);
    return <a key={arg2.key} title={arg0.title} />;
  };
  paragraph.link = obj2;
  return paragraph;
};
