// Module ID: 13798
// Function ID: 104387
// Name: VideoQuestPlayerControlButton
// Dependencies: [905248768, 905379840, 640876544, 131072, 964296704, 520093696, 452984832, 553648128]

// Module 13798 (VideoQuestPlayerControlButton)
const jsx = arg1(dependencyMap[1]).jsx;
let obj1 = arg1(dependencyMap[2]);
let obj = { disabled: { opacity: 0.5 } };
obj = { borderRadius: importDefault(dependencyMap[3]).radii.round, overflow: "hidden" };
obj.container = obj;
obj1 = {};
const importAllResult = importAll(dependencyMap[0]);
const importDefaultResult = importDefault(dependencyMap[4]);
const importDefaultResultResult = importDefault(dependencyMap[4])(importDefault(dependencyMap[3]).unsafe_rawColors.BLACK);
obj1.backgroundColor = importDefault(dependencyMap[4])(importDefault(dependencyMap[3]).unsafe_rawColors.BLACK).alpha(0.5).hex();
obj1.padding = importDefault(dependencyMap[3]).space.PX_12;
obj.blur = obj1;
let closure_4 = obj1.createStyles(obj);
const alphaResult = importDefault(dependencyMap[4])(importDefault(dependencyMap[3]).unsafe_rawColors.BLACK).alpha(0.5);
const memoResult = importAllResult.memo((arg0) => {
  let children;
  let style;
  ({ style, children } = arg0);
  let obj = Object.create(null);
  obj.style = 0;
  obj.children = 0;
  const merged = Object.assign(arg0, obj);
  const tmp3 = callback();
  obj = {};
  const items = [tmp3.container, , ];
  let disabled = merged.disabled;
  if (disabled) {
    disabled = tmp3.disabled;
  }
  items[1] = disabled;
  items[2] = style;
  obj.style = items;
  const merged1 = Object.assign(merged);
  obj = { "Null": "r", "Null": "application_user_id", "Null": "r", "Null": "isArray", style: tmp3.blur, children };
  obj["children"] = jsx(importDefault(dependencyMap[6]), obj);
  return jsx(arg1(dependencyMap[5]).PressableOpacity, obj);
});
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/quests/native/VideoQuestModal/VideoQuestPlayerControlButton.tsx");

export const VideoQuestPlayerControlButton = memoResult;
