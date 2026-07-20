// Module ID: 13975
// Function ID: 106282
// Name: FormSeparator
// Dependencies: []
// Exports: default

// Module 13975 (FormSeparator)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const jsx = arg1(dependencyMap[2]).jsx;
let obj = arg1(dependencyMap[3]);
obj = { container: { alignSelf: "stretch" }, margins: { marginTop: 16 } };
obj = { backgroundColor: importDefault(dependencyMap[4]).colors.BORDER_SUBTLE };
obj.separator = obj;
let closure_2 = obj.createStyles(obj);
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/guild_role_subscriptions/native/components/FormSeparator.tsx");

export default function FormSeparator(arg0) {
  let style;
  let withoutMargins;
  ({ style, withoutMargins } = arg0);
  const tmp = callback();
  let obj = {};
  const items = [tmp.container, , ];
  let margins;
  if (!withoutMargins) {
    margins = tmp.margins;
  }
  items[1] = margins;
  items[2] = style;
  obj.style = items;
  obj = { style: tmp.separator };
  obj.children = <View {...obj} />;
  return <View {...obj} />;
};
