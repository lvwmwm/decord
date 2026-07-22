// Module ID: 15834
// Function ID: 121050
// Name: updateRules
// Dependencies: []
// Exports: default

// Module 15834 (updateRules)
importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
const result = arg1(dependencyMap[3]).fileFinishedImporting("../discord_common/js/packages/i18n/updateRules.web.tsx");

export default function updateRules(paragraph) {
  paragraph.heading = arg1(dependencyMap[2]).defaultRules.heading;
  paragraph.lheading = arg1(dependencyMap[2]).defaultRules.lheading;
  paragraph.list = arg1(dependencyMap[2]).defaultRules.list;
  let obj = {};
  const merged = Object.assign(paragraph.paragraph);
  obj["react"] = function react(content, arg1, key) {
    return callback2("p", { children: arg1(content.content, key) }, key.key);
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
      const sanitizeUrlResult = callback(closure_1[2]).sanitizeUrl(context.target);
      if (null != sanitizeUrlResult) {
        tmp4 = sanitizeUrlResult;
      }
      obj.href = tmp4;
      obj.target = "_blank";
      const obj2 = callback(closure_1[2]);
    }
    obj = { title: context.title };
    const merged = Object.assign(obj);
    obj["rel"] = "noreferrer";
    obj["children"] = arg1(context.content, key);
    return callback2("a", obj, key.key);
  };
  paragraph.link = obj;
  return paragraph;
};
