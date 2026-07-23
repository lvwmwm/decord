// Module ID: 15880
// Function ID: 122668
// Name: VoicePanelDrawerToggleButton
// Dependencies: [31, 33, 4130, 689, 15861, 15848, 15862, 5517, 8525, 12506, 2]
// Exports: default

// Module 15880 (VoicePanelDrawerToggleButton)
import "result";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_3;
let closure_4;
const require = arg1;
({ jsx: closure_3, jsxs: closure_4 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { width: "100%", height: "100%", borderRadius: require("_createForOfIteratorHelperLoose").radii.round };
_createForOfIteratorHelperLoose.circle = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.iconContainer = { position: "absolute", justifyContent: "center", alignItems: "center", width: "100%", height: "100%" };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/voice_panel/native/controls/buttons/VoicePanelDrawerToggleButton.tsx");

export default function VoicePanelDrawerToggleButton(arg0) {
  let accessibilityLabel;
  let handlePress;
  let isDrawerOpen;
  let openTab;
  let props;
  let wrapperSpecs;
  ({ props, openTab, wrapperSpecs } = arg0);
  const tmp = _createForOfIteratorHelperLoose();
  let obj = require(15861) /* useVoicePanelButtonStyles */;
  const voicePanelButtonStyles = obj.useVoicePanelButtonStyles(wrapperSpecs);
  ({ isDrawerOpen, handlePress, accessibilityLabel } = importDefault(15848)(openTab));
  obj = { onPress: handlePress, props, accessibilityLabel };
  const tmp3 = importDefault(15848)(openTab);
  const tmp4 = closure_4;
  const items = [tmp.circle, { backgroundColor: voicePanelButtonStyles.iconBg.backgroundColor }];
  const items1 = [callback(importDefault(5517), { style: items }), ];
  obj = { style: tmp.iconContainer };
  const tmp5 = importDefault(15862);
  if (isDrawerOpen) {
    let ChevronSmallUpIcon = tmp8(8525).ChevronSmallDownIcon;
  } else {
    ChevronSmallUpIcon = tmp8(12506).ChevronSmallUpIcon;
  }
  obj.children = callback(ChevronSmallUpIcon, { color: voicePanelButtonStyles.iconFill.color });
  items1[1] = callback(importDefault(5517), obj);
  obj.children = items1;
  return tmp4(tmp5, obj);
};
