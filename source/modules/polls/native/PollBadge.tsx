// Module ID: 15231
// Function ID: 115020
// Name: PollBadge
// Dependencies: [4294967295, 0, 0, 0, 0, 0, 0, 0, 0, 0]
// Exports: default

// Module 15231 (PollBadge)
import { View } from "result";
import result from "result";
import result from "result";
import result from "result";

importAll(dependencyMap[0]);
({ jsx: closure_4, jsxs: closure_5 } = result);
result = {};
result = { 1659428433: "horizontal", 659680460: 4, -1228119168: "flex-start", -1709354576: 4, 1386894946: 16, 705758733: 16, borderRadius: require("result").radii.round, backgroundColor: require("result").colors.BACKGROUND_SURFACE_HIGH, color: require("result").colors.TEXT_MUTED };
result.container = result;
result.text = { maxWidth: -832290544, position: 1090584577 };
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
