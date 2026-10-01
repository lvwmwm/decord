// Module ID: 1932
// Function ID: 1933
// Name: updateRules
// Dependencies: [19, 21, 1930, 2]
// Exports: default

// Module 1932 (updateRules)
import Fragment from "Fragment" /* 21 */;
import _mod1930 from "module_1930" /* 1930 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("../discord_common/js/packages/i18n/updateRules.web.tsx");

export default function updateRules(paragraph) {
  paragraph.heading = _mod1930.defaultRules.heading;
  paragraph.lheading = _mod1930.defaultRules.lheading;
  paragraph.list = _mod1930.defaultRules.list;
  let obj = {
    react(content, fn, key) {
      return <p key={arg2.key}>{arg1(arg0.content, arg2)}</p>;
    }
  };
  let merged = Object.assign(paragraph.paragraph);
  paragraph.paragraph = obj;
  let obj2 = {
    react(context, fn, key) {
      const obj = {};
      if (null != context.context) {
        if (context.context[context.target]) {
          if (context.context[context.target].onClick) {
            ({ onClick: obj.onClick, onContextMenu: obj.onContextMenu } = context.context[context.target]);
          }
        }
        obj.onClick = context.context[context.target];
      }
      if (null == obj.onClick) {
        const obj2 = _mod1930;
        obj.href = obj2.sanitizeUrl(context.target);
        obj.target = "_blank";
        const sanitizeUrlResult = obj2.sanitizeUrl(context.target);
      }
      const merged = Object.assign(obj);
      return <a key={arg2.key} title={arg0.title} rel="noreferrer">{arg1(arg0.content, arg2)}</a>;
    }
  };
  const merged1 = Object.assign(paragraph.link);
  paragraph.link = obj2;
  return paragraph;
};
