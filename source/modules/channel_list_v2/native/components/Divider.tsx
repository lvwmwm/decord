// Module ID: 11383
// Function ID: 88500
// Name: Divider
// Dependencies: []
// Exports: default

// Module 11383 (Divider)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const jsx = arg1(dependencyMap[2]).jsx;
let closure_4 = arg1(dependencyMap[3]).createStyles((arg0) => {
  let obj = {};
  obj = {};
  const colors = importDefault(dependencyMap[4]).colors;
  obj.backgroundColor = arg0 ? colors.BORDER_SUBTLE : colors.BORDER_MUTED;
  if (arg0) {
    obj = { marginHorizontal: 16 };
    let obj1 = obj;
  } else {
    obj1 = {};
  }
  const merged = Object.assign(obj1);
  obj.divider = obj;
  return obj;
});
const obj = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/channel_list_v2/native/components/Divider.tsx");

export default function Divider() {
  return <View style={callback(importDefault(dependencyMap[5])("Divider")).divider} />;
};
export const DIVIDER_MARGIN_TOP = 8;
export const DIVIDER_MARGIN_BOTTOM = 8;
export const DIVIDER_HEIGHT = 17;
export const DIVIDER_MARGIN_HORIZONTAL = 16;
