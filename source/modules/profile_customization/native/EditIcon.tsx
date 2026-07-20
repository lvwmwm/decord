// Module ID: 13453
// Function ID: 102178
// Name: EditIcon
// Dependencies: []
// Exports: default

// Module 13453 (EditIcon)
let closure_2 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const jsx = arg1(dependencyMap[2]).jsx;
let obj = arg1(dependencyMap[3]);
obj = {};
obj = { backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_SURFACE_HIGH };
obj.editIcon = obj;
const obj1 = { aze: false, azj: false, borderRadius: importDefault(dependencyMap[4]).radii.md };
obj.xs = obj1;
const obj2 = { aze: "boolean", azj: "string", borderRadius: importDefault(dependencyMap[4]).radii.lg };
obj.sm = obj2;
let closure_5 = obj.createStyles(obj);
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/profile_customization/native/EditIcon.tsx");

export default function EditIcon(style) {
  style = style.style;
  const arg1 = style;
  let str = style.size;
  if (str === undefined) {
    str = "xs";
  }
  const dependencyMap = str;
  let React;
  const tmp = callback();
  React = tmp;
  const items = [tmp, style, str];
  let obj = {
    style: React.useMemo(() => {
      const obj = {};
      const items = [tmp.editIcon, , ];
      if ("sm" === str) {
        let xs = tmp.sm;
      } else {
        xs = tmp.xs;
      }
      items[1] = xs;
      items[2] = style;
      obj.iconContainerStyle = items;
      return obj;
    }, items).iconContainerStyle,
    children: jsx(arg1(dependencyMap[5]).PencilIcon, obj)
  };
  obj = { size: str };
  return <View {...obj} />;
};
