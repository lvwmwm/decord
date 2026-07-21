// Module ID: 12591
// Function ID: 96803
// Name: VoiceEmptyState
// Dependencies: []
// Exports: default

// Module 12591 (VoiceEmptyState)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const Fonts = arg1(dependencyMap[2]).Fonts;
({ jsx: closure_4, jsxs: closure_5 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = { container: { justifyContent: "center" }, button: { "Bool(true)": "166185917b52ede00e3e20d3f1f7faeb", "Bool(true)": "CheckmarkSmallIcon" } };
obj = {};
const tmp3 = arg1(dependencyMap[3]);
const merged = Object.assign(importDefault(dependencyMap[5])(Fonts.DISPLAY_EXTRABOLD, importDefault(dependencyMap[6]).colors.MOBILE_TEXT_HEADING_PRIMARY, 18));
obj["textTransform"] = "none";
obj["lineHeight"] = 24;
obj.emptyTitle = obj;
const obj1 = {};
const importDefaultResult = importDefault(dependencyMap[5]);
const merged1 = Object.assign(importDefault(dependencyMap[5])(Fonts.PRIMARY_MEDIUM, importDefault(dependencyMap[6]).colors.TEXT_SUBTLE, 16));
obj1["lineHeight"] = 20;
obj1["fontWeight"] = "600";
obj.emptyBody = obj1;
let closure_6 = obj.createStyles(obj);
const importDefaultResult1 = importDefault(dependencyMap[5]);
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/voice_calls/native/action_sheet/VoiceEmptyState.tsx");

export default function VoiceEmptyState(channel) {
  const tmp = callback3();
  let obj = {};
  const items = [tmp.container, ];
  obj = { paddingBottom: importDefault(dependencyMap[7])().bottom };
  items[1] = obj;
  obj.style = items;
  obj = {};
  const intl = arg1(dependencyMap[9]).intl;
  obj.title = intl.string(arg1(dependencyMap[9]).t./HABZo);
  const intl2 = arg1(dependencyMap[9]).intl;
  obj.body = intl2.string(arg1(dependencyMap[9]).t.5Jy2FY);
  obj.lightSource = importDefault(dependencyMap[10]);
  obj.darkSource = importDefault(dependencyMap[10]);
  ({ emptyTitle: obj3.titleStyle, emptyBody: obj3.bodyStyle } = tmp);
  obj.imageStyle = { "Null": null, "Null": null };
  const items1 = [callback(arg1(dependencyMap[8]).ThemedEmptyState, obj), callback(importDefault(dependencyMap[11]), { channel: channel.channel, style: tmp.button })];
  obj.children = items1;
  return callback2(View, obj);
};
