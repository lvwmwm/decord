// Module ID: 1950
// Function ID: 1951
// Name: updateRules
// Dependencies: [19, 21, 1948, 2]
// Exports: default

// Module 1950 (updateRules)
import Fragment from "Fragment" /* 21 */;
import _mod1948 from "module_1948" /* 1948 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("../discord_common/js/packages/i18n/updateRules.web.tsx");

export default function updateRules(paragraph) {
  paragraph.heading = _mod1948.defaultRules.heading;
  paragraph.lheading = _mod1948.defaultRules.lheading;
  paragraph.list = _mod1948.defaultRules.list;
  let obj = {
    react: function Paragraph(content, fn, key) {
      return <p key={arg2.key}>{arg1(arg0.content, arg2)}</p>;
    }
  };
  let merged = Object.assign(paragraph.paragraph);
  paragraph.paragraph = obj;
  let obj2 = {
    react: function Link(context, fn, key) {
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
        const obj2 = _mod1948;
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
