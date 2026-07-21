// Module ID: 15042
// Function ID: 113263
// Name: ForYouSuggestedFriendsSectionHeader
// Dependencies: []
// Exports: default

// Module 15042 (ForYouSuggestedFriendsSectionHeader)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const jsx = arg1(dependencyMap[2]).jsx;
let obj = arg1(dependencyMap[3]);
obj = {};
obj = { borderTopColor: importDefault(dependencyMap[4]).colors.BORDER_SUBTLE };
obj.container = obj;
obj.noDivider = { "Null": -536870861, "Null": -299892737 };
obj.text = { marginTop: importDefault(dependencyMap[4]).space.PX_16 };
let closure_4 = obj.createStyles(obj);
const obj1 = { marginTop: importDefault(dependencyMap[4]).space.PX_16 };
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/notification_center/native/ForYouSuggestedFriendsSectionHeader.tsx");

export default function ForYouSuggestedFriendsSectionHeader(showDivider) {
  const tmp = callback();
  let obj = {};
  const items = [tmp.container, ];
  let noDivider = !showDivider.showDivider;
  if (noDivider) {
    noDivider = tmp.noDivider;
  }
  items[1] = noDivider;
  obj.style = items;
  obj = { "Bool(true)": true, "Bool(true)": true, "Bool(true)": true, style: tmp.text };
  const intl = arg1(dependencyMap[6]).intl;
  obj.children = intl.string(arg1(dependencyMap[6]).t.1uAmCw);
  obj.children = jsx(arg1(dependencyMap[5]).Text, obj);
  return <View {...obj} />;
};
