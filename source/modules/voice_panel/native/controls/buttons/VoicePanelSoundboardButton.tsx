// Module ID: 15875
// Function ID: 122655
// Name: SoundboardButton
// Dependencies: [31, 33, 4130, 689, 10014, 15861, 15876, 15862, 1212, 5517, 11561, 2]
// Exports: default

// Module 15875 (SoundboardButton)
import result from "result";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
const require = arg1;
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { width: "100%", height: "100%", borderRadius: require("_createForOfIteratorHelperLoose").radii.round };
_createForOfIteratorHelperLoose.circle = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.iconContainer = { position: "absolute", justifyContent: "center", alignItems: "center", width: "100%", height: "100%" };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/voice_panel/native/controls/buttons/VoicePanelSoundboardButton.tsx");

export default function SoundboardButton(arg0) {
  let disabled;
  let handlePress;
  let props;
  let visible;
  let wrapperSpecs;
  ({ props, wrapperSpecs } = arg0);
  const tmp = _createForOfIteratorHelperLoose();
  let obj = require(15861) /* useVoicePanelButtonStyles */;
  const voicePanelButtonStyles = obj.useVoicePanelButtonStyles(wrapperSpecs);
  const tmp3 = importDefault(15876);
  ({ disabled, handlePress, visible } = importDefault(15876)(React.useContext(importDefault(10014)).channelId, require(15876) /* useSoundboardConfig */.SoundboardButtonLocation.VOICE_PANEL_CONTROLS));
  if (disabled) {
    let color = importDefault(689).colors.ICON_MUTED;
  } else {
    color = voicePanelButtonStyles.iconFill.color;
  }
  let tmp7 = null;
  if (visible) {
    obj = { onPress: handlePress, disabled, props };
    const intl = require(1212) /* getSystemLocale */.intl;
    obj.accessibilityLabel = intl.string(require(1212) /* getSystemLocale */.t["6EJvHt"]);
    obj = {};
    const items = [tmp.circle, ];
    const obj1 = { backgroundColor: voicePanelButtonStyles.iconBg.backgroundColor };
    items[1] = obj1;
    obj.style = items;
    const items1 = [callback(importDefault(5517), obj), ];
    const obj2 = { style: tmp.iconContainer };
    const tmp11 = importDefault(15862);
    const obj3 = { color };
    obj2.children = callback(require(11561) /* SoundboardIcon */.SoundboardIcon, obj3);
    items1[1] = callback(importDefault(5517), obj2);
    obj.children = items1;
    tmp7 = callback2(tmp11, obj);
    const tmp14 = importDefault(5517);
  }
  return tmp7;
};
