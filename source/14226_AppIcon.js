// Module ID: 14226
// Function ID: 107544
// Name: AppIcon
// Dependencies: []
// Exports: default

// Module 14226 (AppIcon)
importAll(dependencyMap[0]);
({ Image: closure_3, View: closure_4 } = arg1(dependencyMap[1]));
const getIconById = arg1(dependencyMap[2]).getIconById;
const jsx = arg1(dependencyMap[3]).jsx;
let obj = arg1(dependencyMap[4]);
obj = {};
obj = { overflow: "hidden", borderColor: importDefault(dependencyMap[5]).colors.BACKGROUND_BASE_LOWEST };
obj.container = obj;
obj.image = {};
let closure_7 = obj.createStyles(obj);
const tmp3 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/app_icons/native/AppIcon.tsx");

export default function AppIcon(size) {
  let num = size.size;
  if (num === undefined) {
    num = 56;
  }
  const tmp = callback();
  const tmp2 = importDefault(dependencyMap[6])();
  let obj = arg1(dependencyMap[7]);
  let num2 = 1;
  if (obj.isThemeDark(tmp2)) {
    num2 = 0;
  }
  obj = { style: items, children: <closure_3 {...obj1} /> };
  const items = [tmp.container, , ];
  obj = { width: num, height: num, borderWidth: num2 };
  items[1] = obj;
  items[2] = size.style;
  const tmp3 = getIconById(size.id);
  return <closure_4 {...obj} />;
};
