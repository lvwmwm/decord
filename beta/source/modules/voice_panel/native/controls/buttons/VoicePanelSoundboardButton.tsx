// Module ID: 17621
// Function ID: 17622
// Name: VoicePanelSoundboardButton
// Dependencies: [19, 21, 4758, 580, 558, 568, 12419, 17607, 17622, 17608, 1119, 5804, 12691, 2]

// Module 17621 (VoicePanelSoundboardButton)
import c from "c" /* 568 */;
import nativeDefault from "native" /* 580 */;
import VoicePanelStateContextDefault from "VoicePanelStateContext" /* 12419 */;
import VoicePanelStyles from "VoicePanelStyles" /* 17607 */;
import useSoundboardConfig from "useSoundboardConfig" /* 17622 */;
import noop from "module_19" /* 19 */;

const useSoundboardConfigDefault = useSoundboardConfig;

require = fn;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4758);
let obj2 = { circle: null, iconContainer: null };
let size = { width: "100%", height: "100%", borderRadius: nativeDefault.radii.round };
obj2.circle = size;
obj2.iconContainer = { position: "absolute", justifyContent: "center", alignItems: "center", width: "100%", height: "100%" };
let closure_6 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/controls/buttons/VoicePanelSoundboardButton.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((props) => {
  const cResult = c.c(9);
  props = props.props;
  const tmp5 = closure_6();
  const voicePanelButtonStyles = VoicePanelStyles.useVoicePanelButtonStyles(props.wrapperSpecs);
  const backgroundColor = voicePanelButtonStyles.iconBg.backgroundColor;
  ({ handlePress, disabled, disabledAccessibilityHint, visible } = useSoundboardConfigDefault(noop.useContext(VoicePanelStateContextDefault).channelId, useSoundboardConfig.SoundboardButtonLocation.VOICE_PANEL_CONTROLS));
  if (disabled) {
    let color = tmp4(580).colors.ICON_MUTED;
  } else {
    color = voicePanelButtonStyles.iconFill.color;
  }
  if (cResult[0] === disabled) {
    if (cResult[1] === disabledAccessibilityHint) {
      if (cResult[2] === backgroundColor) {
        if (cResult[3] === handlePress) {
          if (cResult[4] === color) {
            if (cResult[5] === props) {
              if (cResult[6] === tmp5) {
                if (cResult[7] === visible) {
                  let tmp9 = cResult[8];
                }
                return tmp9;
              }
            }
          }
        }
      }
    }
  }
  let tmp10 = null;
  if (visible) {
    const element = { onPress: handlePress, disabled, props, accessibilityLabel: null, accessibilityHint: null, children: null };
    const intl = tmp(1119).intl;
    element.accessibilityLabel = intl.string(tmp(1119).t["6EJvHt"]);
    element.accessibilityHint = disabledAccessibilityHint;
    const obj3 = { style: null };
    const items = [tmp5.circle, ];
    const obj4 = { backgroundColor };
    items[1] = obj4;
    obj3.style = items;
    const items1 = [React4(tmp4(5804), obj3), ];
    const obj5 = { style: tmp5.iconContainer, children: null };
    const tmp4Result = tmp4(17608);
    const obj6 = { color };
    obj5.children = React4(tmp(12691).SoundboardIcon, obj6);
    items1[1] = React4(tmp4(5804), obj5);
    element.children = items1;
    tmp10 = hasOwnProperty(tmp4Result, element);
    const tmp4Result2 = tmp4(5804);
  }
  cResult[0] = disabled;
  cResult[1] = disabledAccessibilityHint;
  cResult[2] = backgroundColor;
  cResult[3] = handlePress;
  cResult[4] = color;
  cResult[5] = props;
  cResult[6] = tmp5;
  cResult[7] = visible;
  cResult[8] = tmp10;
  tmp9 = tmp10;
}) : ((arg0) => {
  ({ props, wrapperSpecs } = arg0);
  const tmp3 = closure_6();
  const voicePanelButtonStyles = VoicePanelStyles.useVoicePanelButtonStyles(wrapperSpecs);
  ({ disabled, handlePress, disabledAccessibilityHint, visible } = useSoundboardConfigDefault(noop.useContext(VoicePanelStateContextDefault).channelId, useSoundboardConfig.SoundboardButtonLocation.VOICE_PANEL_CONTROLS));
  if (disabled) {
    let color = tmp(580).colors.ICON_MUTED;
  } else {
    color = voicePanelButtonStyles.iconFill.color;
  }
  let tmp8 = null;
  if (visible) {
    const element = { onPress: handlePress, disabled, props, accessibilityLabel: null, accessibilityHint: null, children: null };
    const intl = tmp4(1119).intl;
    element.accessibilityLabel = intl.string(tmp4(1119).t["6EJvHt"]);
    element.accessibilityHint = disabledAccessibilityHint;
    const obj2 = { style: null };
    const items = [tmp3.circle, ];
    const obj3 = { backgroundColor: voicePanelButtonStyles.iconBg.backgroundColor };
    items[1] = obj3;
    obj2.style = items;
    const items1 = [React4(tmp(5804), obj2), ];
    const obj4 = { style: tmp3.iconContainer, children: null };
    const tmpResult = tmp(17608);
    const obj5 = { color };
    obj4.children = React4(tmp4(12691).SoundboardIcon, obj5);
    items1[1] = React4(tmp(5804), obj4);
    element.children = items1;
    tmp8 = hasOwnProperty(tmpResult, element);
    const tmpResult2 = tmp(5804);
  }
  return tmp8;
});
