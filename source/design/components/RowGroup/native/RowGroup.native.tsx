// Module ID: 12871
// Function ID: 98353
// Name: RowGroup
// Dependencies: []
// Exports: RowGroup

// Module 12871 (RowGroup)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_3, jsxs: closure_4 } = arg1(dependencyMap[2]));
let obj = arg1(dependencyMap[3]);
obj = { container: { overflow: "hidden" } };
obj = { backgroundColor: importDefault(dependencyMap[4]).colors.TABLEROW_BACKGROUND_DEFAULT, borderRadius: importDefault(dependencyMap[4]).modules.mobile.TABLE_ROW_BORDER_RADIUS, padding: importDefault(dependencyMap[4]).modules.mobile.TABLE_ROW_PADDING };
obj.content = obj;
let closure_5 = obj.createStyles(obj);
const tmp3 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[7]).fileFinishedImporting("design/components/RowGroup/native/RowGroup.native.tsx");

export const RowGroup = function RowGroup(children) {
  let title;
  let trailing;
  ({ title, trailing } = children);
  const tmp = callback2();
  let obj = { style: tmp.container };
  let tmp5Result = null != title;
  if (!tmp5Result) {
    tmp5Result = null != trailing;
  }
  if (tmp5Result) {
    obj = { <string:2981479191>: null, <string:3838746999>: "\u{1F44A}\u{1F3FC}" };
    let tmp8 = null != title;
    if (tmp8) {
      obj = { title };
      tmp8 = callback(arg1(dependencyMap[6]).TableRowGroupTitle, obj);
    }
    const items = [tmp8, trailing];
    obj.children = items;
    tmp5Result = closure_4(arg1(dependencyMap[5]).Stack, obj);
    const tmp5 = closure_4;
  }
  const items1 = [tmp5Result, callback(View, { style: tmp.content, children: children.children })];
  obj.children = items1;
  return closure_4(View, obj);
};
