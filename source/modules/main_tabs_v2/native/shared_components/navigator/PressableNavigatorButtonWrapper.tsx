// Module ID: 9118
// Function ID: 71428
// Name: PressableNavigatorButtonWrapper
// Dependencies: []
// Exports: default

// Module 9118 (PressableNavigatorButtonWrapper)
const View = require(dependencyMap[0]).View;
const MIN_HEADER_HEIGHT = require(dependencyMap[1]).MIN_HEADER_HEIGHT;
const jsx = require(dependencyMap[2]).jsx;
const _module = require(dependencyMap[3]);
let obj = {};
obj = { padding: importDefault(dependencyMap[4]).space.PX_8, height: MIN_HEADER_HEIGHT, width: MIN_HEADER_HEIGHT };
obj.buttonWrapper = obj;
obj.buttonWrapperModal = { marginLeft: -8 };
let closure_2 = _module.createStyles(obj);
const _module1 = require(dependencyMap[5]);
const result = _module1.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/navigator/PressableNavigatorButtonWrapper.tsx");

export default function PressableNavigatorButtonWrapper(children) {
  let flag = children.isModal;
  if (flag === undefined) {
    flag = false;
  }
  const tmp = callback();
  return <View style={flag ? tmp.buttonWrapperModal : tmp.buttonWrapper}>{arg0.children}</View>;
};
