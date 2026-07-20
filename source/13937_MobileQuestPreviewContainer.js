// Module ID: 13937
// Function ID: 105935
// Name: MobileQuestPreviewContainer
// Dependencies: []
// Exports: default

// Module 13937 (MobileQuestPreviewContainer)
const View = require(dependencyMap[0]).View;
const _module = require(dependencyMap[1]);
({ jsx: closure_3, jsxs: closure_4 } = _module);
const _module1 = require(dependencyMap[2]);
let obj = {};
obj = { marginTop: importDefault(dependencyMap[3]).space.PX_12, paddingHorizontal: importDefault(dependencyMap[3]).space.PX_16 };
obj.container = obj;
obj.title = { marginBottom: importDefault(dependencyMap[3]).space.PX_16 };
let closure_5 = _module1.createStyles(obj);
const _module2 = require(dependencyMap[5]);
const result = _module2.fileFinishedImporting("modules/user_settings/quests/native/MobileQuestPreviewContainer.tsx");

export default function MobileQuestPreviewContainer(title) {
  title = title.title;
  const tmp = callback2();
  let obj = { style: tmp.container };
  let tmp4 = null != title;
  if (tmp4) {
    obj = { INTEGRATION_CREATE: null, ConstraintReasonCode: null, style: tmp.title, children: title };
    tmp4 = callback(require(dependencyMap[4]).Text, obj);
  }
  const items = [tmp4, title.children];
  obj.children = items;
  return closure_4(View, obj);
};
