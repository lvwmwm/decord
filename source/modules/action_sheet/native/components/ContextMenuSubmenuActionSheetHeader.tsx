// Module ID: 9935
// Function ID: 76879
// Name: ContextMenuSubmenuActionSheetHeader
// Dependencies: []
// Exports: default

// Module 9935 (ContextMenuSubmenuActionSheetHeader)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const jsx = arg1(dependencyMap[2]).jsx;
let closure_4 = arg1(dependencyMap[3]).createStyles({ headerContainer: {} });
const obj = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/action_sheet/native/components/ContextMenuSubmenuActionSheetHeader.tsx");

export default function ContextMenuSubmenuActionSheetHeader(onBack) {
  let fn = onBack.onBack;
  let obj = { style: callback().headerContainer };
  obj = {};
  const intl = arg1(dependencyMap[5]).intl;
  obj.label = intl.string(arg1(dependencyMap[5]).t.13/7kX);
  if (null == fn) {
    fn = () => {

    };
  }
  obj.onPress = fn;
  obj.children = jsx(arg1(dependencyMap[4]).ActionSheetHeaderPressableText, obj);
  return <View {...obj} />;
};
