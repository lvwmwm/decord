// Module ID: 15746
// Function ID: 120287
// Name: VoicePanelDrawerToggleButton
// Dependencies: []
// Exports: default

// Module 15746 (VoicePanelDrawerToggleButton)
importAll(dependencyMap[0]);
({ jsx: closure_3, jsxs: closure_4 } = arg1(dependencyMap[1]));
let obj = arg1(dependencyMap[2]);
obj = {};
obj = { borderRadius: importDefault(dependencyMap[3]).radii.round };
obj.circle = obj;
obj.iconContainer = {};
let closure_5 = obj.createStyles(obj);
const tmp3 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/voice_panel/native/controls/buttons/VoicePanelDrawerToggleButton.tsx");

export default function VoicePanelDrawerToggleButton(arg0) {
  let accessibilityLabel;
  let handlePress;
  let isDrawerOpen;
  let openTab;
  let props;
  let wrapperSpecs;
  ({ props, openTab, wrapperSpecs } = arg0);
  const tmp = callback2();
  let obj = arg1(dependencyMap[4]);
  const voicePanelButtonStyles = obj.useVoicePanelButtonStyles(wrapperSpecs);
  ({ isDrawerOpen, handlePress, accessibilityLabel } = importDefault(dependencyMap[5])(openTab));
  obj = { onPress: handlePress, props, accessibilityLabel };
  const tmp3 = importDefault(dependencyMap[5])(openTab);
  const tmp4 = closure_4;
  const items = [tmp.circle, { backgroundColor: voicePanelButtonStyles.iconBg.backgroundColor }];
  const items1 = [callback(importDefault(dependencyMap[7]), { style: items }), ];
  obj = { style: tmp.iconContainer };
  const tmp5 = importDefault(dependencyMap[6]);
  if (isDrawerOpen) {
    let ChevronSmallUpIcon = tmp8(tmp9[8]).ChevronSmallDownIcon;
  } else {
    ChevronSmallUpIcon = tmp8(tmp9[9]).ChevronSmallUpIcon;
  }
  obj.children = callback(ChevronSmallUpIcon, { color: voicePanelButtonStyles.iconFill.color });
  items1[1] = callback(importDefault(dependencyMap[7]), obj);
  obj.children = items1;
  return tmp4(tmp5, obj);
};
