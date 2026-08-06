// Module ID: 16163
// Function ID: 16164
// Name: VoicePanelDrawerToggleButton
// Dependencies: [19, 21, 4285, 712, 16144, 16131, 16145, 5702, 9396, 12760, 2]
// Exports: default

// Module 16163 (VoicePanelDrawerToggleButton)
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
  let obj = require(16144) /* useVoicePanelButtonStyles */;
  const voicePanelButtonStyles = obj.useVoicePanelButtonStyles(wrapperSpecs);
  ({ isDrawerOpen, handlePress, accessibilityLabel } = importDefault(16131)(openTab));
  obj = { onPress: handlePress, props, accessibilityLabel, children: null };
  const tmp5 = importDefault(16131)(openTab);
  const tmp6 = closure_4;
  const items = [tmp.circle, { backgroundColor: voicePanelButtonStyles.iconBg.backgroundColor }];
  const items1 = [callback(importDefault(5702), { style: items }), ];
  obj = { style: tmp.iconContainer, children: null };
  const tmp7 = importDefault(16145);
  if (isDrawerOpen) {
    let ChevronSmallUpIcon = tmp2(9396).ChevronSmallDownIcon;
  } else {
    ChevronSmallUpIcon = tmp2(12760).ChevronSmallUpIcon;
  }
  obj[1] = callback(ChevronSmallUpIcon, { color: voicePanelButtonStyles.iconFill.color });
  items1[1] = callback(importDefault(5702), obj);
  obj[3] = items1;
  return tmp6(tmp7, obj);
};
