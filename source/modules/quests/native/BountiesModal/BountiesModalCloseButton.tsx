// Module ID: 13830
// Function ID: 104553
// Name: BountiesModalCloseButton
// Dependencies: []
// Exports: default

// Module 13830 (BountiesModalCloseButton)
importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
let closure_4 = arg1(dependencyMap[2]).createStyles(() => {
  let obj = {};
  obj = { "Null": null, "Null": null, backgroundColor: importDefault(dependencyMap[3]).colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT, borderRadius: importDefault(dependencyMap[3]).radii.round, width: importDefault(dependencyMap[3]).space.PX_32, height: importDefault(dependencyMap[3]).space.PX_32 };
  obj.closeButton = obj;
  return obj;
});
const obj = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/quests/native/BountiesModal/BountiesModalCloseButton.tsx");

export default function BountiesModalCloseButton(onPress) {
  let obj = {};
  const intl = arg1(dependencyMap[5]).intl;
  obj.accessibilityLabel = intl.string(arg1(dependencyMap[5]).t.cpT0Cq);
  obj.onPress = onPress.onPress;
  obj.style = callback().closeButton;
  obj = { size: "sm", color: importDefault(dependencyMap[3]).colors.CONTROL_OVERLAY_SECONDARY_TEXT_DEFAULT };
  obj.children = jsx(arg1(dependencyMap[6]).XSmallIcon, obj);
  return jsx(arg1(dependencyMap[4]).PressableOpacity, obj);
};
