// Module ID: 15927
// Function ID: 122990
// Name: VoicePanelDrawerToggleButton
// Dependencies: [31, 33, 4130, 689, 15908, 15895, 15909, 5515, 8570, 12559, 2]
// Exports: default

// Module 15927 (VoicePanelDrawerToggleButton)
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
  let obj = require(15908) /* useVoicePanelButtonStyles */;
  const voicePanelButtonStyles = obj.useVoicePanelButtonStyles(wrapperSpecs);
  ({ isDrawerOpen, handlePress, accessibilityLabel } = importDefault(15895)(openTab));
  obj = { onPress: handlePress, props, accessibilityLabel };
  const tmp3 = importDefault(15895)(openTab);
  const tmp4 = closure_4;
  const items = [tmp.circle, { backgroundColor: voicePanelButtonStyles.iconBg.backgroundColor }];
  const items1 = [callback(importDefault(5515), { style: items }), ];
  obj = { style: tmp.iconContainer };
  const tmp5 = importDefault(15909);
  if (isDrawerOpen) {
    let ChevronSmallUpIcon = tmp8(8570).ChevronSmallDownIcon;
  } else {
    ChevronSmallUpIcon = tmp8(12559).ChevronSmallUpIcon;
  }
  obj.children = callback(ChevronSmallUpIcon, { color: voicePanelButtonStyles.iconFill.color });
  items1[1] = callback(importDefault(5515), obj);
  obj.children = items1;
  return tmp4(tmp5, obj);
};
