// Module ID: 10783
// Function ID: 83738
// Name: BlankAudience
// Dependencies: []

// Module 10783 (BlankAudience)
class BlankAudience {
  constructor(arg0) {
    count = global.count;
    items = [];
    for (let num = 0; num < count; num = num + 1) {
      tmp = jsx;
      tmp2 = importDefault;
      tmp3 = dependencyMap;
      arr = items.push(jsx(importDefault(dependencyMap[5]), {}, num));
    }
    return items;
  }
}
const View = arg1(dependencyMap[1]).View;
const MAX_AUDIENCE_ROW_LIMIT = arg1(dependencyMap[2]).MAX_AUDIENCE_ROW_LIMIT;
const importAllResult = importAll(dependencyMap[0]);
({ jsx: closure_4, jsxs: closure_5 } = arg1(dependencyMap[3]));
const tmp2 = arg1(dependencyMap[3]);
let closure_6 = arg1(dependencyMap[4]).createStyles({ rowContainer: {} });
const obj2 = arg1(dependencyMap[4]);
const memoResult = importAllResult.memo((theme) => {
  let participants;
  let renderBlankAudience;
  ({ channel: closure_0, participants, renderBlankAudience } = theme);
  if (renderBlankAudience === undefined) {
    renderBlankAudience = true;
  }
  const dependencyMap = theme.theme;
  let num = 0;
  if (renderBlankAudience) {
    num = MAX_AUDIENCE_ROW_LIMIT - participants.length;
  }
  let obj = {};
  const items = [callback2().rowContainer, ];
  obj = {};
  let str = "center";
  if (renderBlankAudience) {
    str = "space-between";
  }
  obj.justifyContent = str;
  items[1] = obj;
  obj.style = items;
  const items1 = [participants.map((id) => callback2(callback(theme[6]), { theme, channel: callback, participant: id }, id.id)), ];
  let tmp5 = null;
  if (num > 0) {
    obj = { count: num };
    tmp5 = callback(BlankAudience, obj);
  }
  items1[1] = tmp5;
  obj.children = items1;
  return closure_5(View, obj);
});
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/stage_channels/native/components/AudienceGridRow.tsx");

export default memoResult;
export { BlankAudience };
