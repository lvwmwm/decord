// Module ID: 15241
// Function ID: 115078
// Name: PollBadge
// Dependencies: [4294967295, 0, 0, 0, 0, 0, 0, 0, 0, 0]
// Exports: default

// Module 15241 (PollBadge)
import { View } from "result";
import result from "result";
import result from "result";
import result from "result";

importAll(dependencyMap[0]);
({ jsx: closure_4, jsxs: closure_5 } = result);
result = {};
result = { "Null": "horizontal", "Null": 4, "Null": "flex-start", "Null": 4, "Null": 16, "Null": 16, borderRadius: require("result").radii.round, backgroundColor: require("result").colors.BACKGROUND_SURFACE_HIGH, color: require("result").colors.TEXT_MUTED };
result.container = result;
result.text = { alignItems: null, justifyContent: "spamRequests" };
result = result.createStyles(result);
result = result.fileFinishedImporting("modules/polls/native/PollBadge.tsx");

export default function PollBadge(style) {
  const tmp = result();
  let obj = { style: items };
  const items = [tmp.container, style.style];
  obj = { size: arg1(dependencyMap[5]).IconSizes.EXTRA_SMALL_10, source: importDefault(dependencyMap[6]) };
  const items1 = [callback(arg1(dependencyMap[5]).Icon, obj), ];
  obj = { style: tmp.text, variant: "text-xs/semibold" };
  const intl = arg1(dependencyMap[8]).intl;
  obj.children = intl.string(arg1(dependencyMap[8]).t.RgIi2B);
  items1[1] = callback(arg1(dependencyMap[7]).Text, obj);
  obj.children = items1;
  return callback2(View, obj);
};
