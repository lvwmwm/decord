// Module ID: 16123
// Function ID: 16124
// Name: VoicePanelDrawerToggleButton
// Dependencies: [19, 21, 4255, 712, 16104, 16091, 16105, 5648, 9367, 12723, 2]
// Exports: default

// Module 16123 (VoicePanelDrawerToggleButton)
import "noop";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c3;
let c4;
const require = arg1;
({ jsx: c3, jsxs: c4 } = jsxProd);
createCacheKey = { circle: null, iconContainer: null };
createCacheKey = { width: "100%", height: "100%", borderRadius: require("Themes").radii.round };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { position: "absolute", justifyContent: "center", alignItems: "center", width: "100%", height: "100%" };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("createCacheKey").fileFinishedImporting("modules/voice_panel/native/controls/buttons/VoicePanelDrawerToggleButton.tsx");

export default function VoicePanelDrawerToggleButton(arg0) {
  let accessibilityLabel;
  let handlePress;
  let isDrawerOpen;
  let openTab;
  let props;
  let wrapperSpecs;
  ({ props, openTab, wrapperSpecs } = arg0);
  const tmp = createCacheKey();
  let obj = require(16104) /* useVoicePanelButtonStyles */;
  const voicePanelButtonStyles = obj.useVoicePanelButtonStyles(wrapperSpecs);
  ({ isDrawerOpen, handlePress, accessibilityLabel } = importDefault(16091)(openTab));
  obj = { onPress: handlePress, props, accessibilityLabel, children: null };
  const tmp5 = importDefault(16091)(openTab);
  const tmp6 = closure_4;
  const items = [tmp.circle, { backgroundColor: voicePanelButtonStyles.iconBg.backgroundColor }];
  const items1 = [callback(importDefault(5648), { style: items }), ];
  obj = { style: tmp.iconContainer, children: null };
  const tmp7 = importDefault(16105);
  if (isDrawerOpen) {
    let ChevronSmallUpIcon = tmp2(9367).ChevronSmallDownIcon;
  } else {
    ChevronSmallUpIcon = tmp2(12723).ChevronSmallUpIcon;
  }
  obj[1] = callback(ChevronSmallUpIcon, { color: voicePanelButtonStyles.iconFill.color });
  items1[1] = callback(importDefault(5648), obj);
  obj[3] = items1;
  return tmp6(tmp7, obj);
};
