// Module ID: 14056
// Function ID: 106766
// Name: MessagesHeaderItem
// Dependencies: []
// Exports: default

// Module 14056 (MessagesHeaderItem)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const jsx = arg1(dependencyMap[2]).jsx;
let obj = arg1(dependencyMap[3]);
obj = {};
obj = { x: null, "Null": null, "Null": null, gap: importDefault(dependencyMap[4]).space.PX_12, marginHorizontal: importDefault(dependencyMap[4]).space.PX_24 };
obj.messagesHeaderContainer = obj;
let closure_4 = obj.createStyles(obj);
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/user_settings/appearance/native/components/SettingsAppearanceMessagesHeaderItem.tsx");

export default function MessagesHeaderItem(animatedStyles) {
  let obj = { style: callback().messagesHeaderContainer };
  obj = { style: animatedStyles.animatedStyles.textNormal };
  const intl = arg1(dependencyMap[6]).intl;
  obj.children = intl.string(arg1(dependencyMap[6]).t.OIgYlQ);
  obj.children = jsx(arg1(dependencyMap[5]).Text, obj);
  return <View {...obj} />;
};
