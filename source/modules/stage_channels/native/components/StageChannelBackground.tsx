// Module ID: 10761
// Function ID: 83639
// Name: StageChannelBackground
// Dependencies: []
// Exports: default

// Module 10761 (StageChannelBackground)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const jsx = arg1(dependencyMap[2]).jsx;
let obj = arg1(dependencyMap[3]);
obj = {};
obj = { flex: 1, backgroundColor: importDefault(dependencyMap[4]).colors.BLACK };
obj.container = obj;
let closure_2 = obj.createStyles(obj);
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/stage_channels/native/components/StageChannelBackground.tsx");

export default function StageChannelBackground(children) {
  return <View style={callback().container}>{arg0.children}</View>;
};
