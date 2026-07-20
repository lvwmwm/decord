// Module ID: 11707
// Function ID: 90928
// Name: SkipHeaderButton
// Dependencies: []
// Exports: default

// Module 11707 (SkipHeaderButton)
importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
let obj = arg1(dependencyMap[2]);
obj = {};
obj = { color: importDefault(dependencyMap[3]).colors.INTERACTIVE_TEXT_DEFAULT };
obj.button = obj;
obj.insideNavigatorButton = { paddingRight: 16 };
let closure_3 = obj.createStyles(obj);
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/nuf/native/components/SkipHeaderButton.tsx");

export default function SkipHeaderButton(label) {
  const tmp = callback();
  label = label.label;
  if (null == label) {
    const intl = arg1(dependencyMap[4]).intl;
    label = intl.string(arg1(dependencyMap[4]).t.5Wxrcd);
  }
  const obj = {};
  const merged = Object.assign(label);
  const items = [tmp.button, ];
  let prop;
  if (label.insideNavigator) {
    prop = tmp.insideNavigatorButton;
  }
  items[1] = prop;
  obj["labelStyle"] = items;
  obj["label"] = label;
  obj["accessibilityLabel"] = label;
  return jsx(arg1(dependencyMap[5]).HeaderTextButton, obj);
};
