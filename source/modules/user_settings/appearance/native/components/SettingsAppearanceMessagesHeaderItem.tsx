// Module ID: 14066
// Function ID: 106838
// Name: MessagesHeaderItem
// Dependencies: []
// Exports: default

// Module 14066 (MessagesHeaderItem)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const jsx = arg1(dependencyMap[2]).jsx;
let obj = arg1(dependencyMap[3]);
obj = {};
obj = { -2108412530: "text-lg/normal", -266912356: "text-default", 1638363508: true, gap: importDefault(dependencyMap[4]).space.PX_12, marginHorizontal: importDefault(dependencyMap[4]).space.PX_24 };
obj.messagesHeaderContainer = obj;
let closure_4 = obj.createStyles(obj);
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/user_settings/appearance/native/components/SettingsAppearanceMessagesHeaderItem.tsx");

export default function MessagesHeaderItem(animatedStyles) {
  let obj = { style: callback().messagesHeaderContainer };
  obj = { canCreateGuild: true, _hasMore: true, GameDepthTier9LargeBadge: true, style: animatedStyles.animatedStyles.textNormal };
  const intl = arg1(dependencyMap[6]).intl;
  obj.children = intl.string(arg1(dependencyMap[6]).t.OIgYlQ);
  obj.children = jsx(arg1(dependencyMap[5]).Text, obj);
  return <View {...obj} />;
};
