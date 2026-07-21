// Module ID: 15238
// Function ID: 115044
// Name: PollBadge
// Dependencies: [4294967295, 0, 0, 0, 0, 0, 0, 0, 0, 0]
// Exports: default

// Module 15238 (PollBadge)
import { View } from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";

importAll(dependencyMap[0]);
({ jsx: closure_4, jsxs: closure_5 } = __exportStarResult1);
__exportStarResult1 = {};
__exportStarResult1 = { bannerAdjustment: "horizontal", replayOnNavigationFocus: 4, minHeight: "flex-start", position: 4, top: 16, maxWidth: 16, borderRadius: require("__exportStarResult1").radii.round, backgroundColor: require("__exportStarResult1").colors.BACKGROUND_SURFACE_HIGH, color: require("__exportStarResult1").colors.TEXT_MUTED };
__exportStarResult1.container = __exportStarResult1;
__exportStarResult1.text = { position: "custom", top: "viewAll" };
__exportStarResult1 = __exportStarResult1.createStyles(__exportStarResult1);
const result = __exportStarResult1.fileFinishedImporting("modules/polls/native/PollBadge.tsx");

export default function PollBadge(style) {
  const tmp = __exportStarResult1();
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
