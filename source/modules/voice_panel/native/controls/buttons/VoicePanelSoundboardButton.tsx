// Module ID: 16261
// Function ID: 16262
// Name: SoundboardButton
// Dependencies: [19, 21, 4303, 712, 11644, 16247, 16262, 16248, 1236, 5781, 7709, 2]
// Exports: default

// Module 16261 (SoundboardButton)
import noop from "noop";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c4;
let c5;
const require = arg1;
({ jsx: c4, jsxs: c5 } = jsxProd);
createCacheKey = { circle: null, iconContainer: null };
createCacheKey = { width: "100%", height: "100%", borderRadius: require("Themes").radii.round };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { position: "absolute", justifyContent: "center", alignItems: "center", width: "100%", height: "100%" };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("createCacheKey").fileFinishedImporting("modules/voice_panel/native/controls/buttons/VoicePanelSoundboardButton.tsx");

export default function SoundboardButton(arg0) {
  let disabled;
  let handlePress;
  let props;
  let visible;
  let wrapperSpecs;
  ({ props, wrapperSpecs } = arg0);
  const tmp3 = createCacheKey();
  let obj = require(16247) /* useVoicePanelButtonStyles */;
  const voicePanelButtonStyles = obj.useVoicePanelButtonStyles(wrapperSpecs);
  const tmp6 = importDefault(16262);
  ({ disabled, handlePress, visible } = importDefault(16262)(React.useContext(importDefault(11644)).channelId, require(16262) /* useSoundboardConfig */.SoundboardButtonLocation.VOICE_PANEL_CONTROLS));
  if (disabled) {
    let color = tmp(712).colors.ICON_MUTED;
  } else {
    color = voicePanelButtonStyles.iconFill.color;
  }
  let tmp8 = null;
  if (visible) {
    obj = { onPress: null, disabled: null, props: null, accessibilityLabel: null, children: null };
    obj[0] = handlePress;
    obj[1] = disabled;
    obj[2] = props;
    let tmpResult = tmp(16248);
    const intl = tmp4(1236).intl;
    obj[3] = intl.string(tmp4(1236).t["6EJvHt"]);
    obj = { style: null };
    const items = [tmp3.circle, ];
    const obj1 = { backgroundColor: null };
    obj1[0] = voicePanelButtonStyles.iconBg.backgroundColor;
    items[1] = obj1;
    obj[0] = items;
    const items1 = [callback(tmp(5781), obj), ];
    const obj2 = { style: null, children: null };
    obj2[0] = tmp3.iconContainer;
    tmpResult = tmp(5781);
    const obj3 = { color: null };
    obj3[0] = color;
    obj2[1] = callback(tmp4(7709).SoundboardIcon, obj3);
    items1[1] = callback(tmpResult, obj2);
    obj[4] = items1;
    tmp8 = callback2(tmpResult, obj);
  }
  return tmp8;
};
