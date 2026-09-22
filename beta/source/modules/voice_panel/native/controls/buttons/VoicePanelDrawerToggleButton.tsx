// Module ID: 17629
// Function ID: 17630
// Name: VoicePanelDrawerToggleButton
// Dependencies: [19, 21, 4758, 580, 558, 568, 17608, 17594, 5804, 11408, 13839, 17609, 2]

// Module 17629 (VoicePanelDrawerToggleButton)
import c from "c" /* 568 */;
import nativeDefault from "native" /* 580 */;
import NativeViewDefault from "NativeView" /* 5804 */;
import useDrawerToggleDefault from "useDrawerToggle" /* 17594 */;
import VoicePanelStyles from "VoicePanelStyles" /* 17608 */;
import VoicePanelAnimatedButtonWrapperDefault from "VoicePanelAnimatedButtonWrapper" /* 17609 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const createStyles = fn(4758);
let obj2 = { circle: null, iconContainer: null };
let size = { width: "100%", height: "100%", borderRadius: nativeDefault.radii.round };
obj2.circle = size;
obj2.iconContainer = { position: "absolute", justifyContent: "center", alignItems: "center", width: "100%", height: "100%" };
let closure_5 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/controls/buttons/VoicePanelDrawerToggleButton.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((props) => {
  const cResult = c.c(17);
  props = props.props;
  ({ openTab, wrapperSpecs } = props);
  const tmp4 = closure_5();
  const voicePanelButtonStyles = VoicePanelStyles.useVoicePanelButtonStyles(wrapperSpecs);
  const backgroundColor = voicePanelButtonStyles.iconBg.backgroundColor;
  const color = voicePanelButtonStyles.iconFill.color;
  ({ isDrawerOpen, handlePress, accessibilityLabel } = useDrawerToggleDefault(openTab));
  if (cResult[0] !== backgroundColor) {
    const obj3 = { backgroundColor };
    cResult[0] = backgroundColor;
    cResult[1] = obj3;
    let tmp8 = obj3;
  } else {
    tmp8 = cResult[1];
  }
  if (cResult[2] === tmp4.circle) {
    if (cResult[3] === tmp8) {
      let tmp9 = cResult[4];
    }
    if (cResult[5] === color) {
      if (cResult[6] === isDrawerOpen) {
        if (cResult[8] === tmp4.iconContainer) {
          if (cResult[9] === tmp11) {
            let tmp15 = cResult[10];
          }
          if (cResult[11] === accessibilityLabel) {
            if (cResult[12] === handlePress) {
              if (cResult[13] === props) {
                if (cResult[14] === tmp9) {
                  if (cResult[15] === tmp15) {
                    let tmp18 = cResult[16];
                  }
                  return tmp18;
                }
              }
            }
          }
          const element = { onPress: handlePress, props, accessibilityLabel, children: null };
          const items = [tmp9, tmp15];
          element.children = items;
          const tmp20 = React4(tmp6(17609), element);
          cResult[11] = accessibilityLabel;
          cResult[12] = handlePress;
          cResult[13] = props;
          cResult[14] = tmp9;
          cResult[15] = tmp15;
          cResult[16] = tmp20;
          tmp18 = tmp20;
        }
        const obj4 = { style: tmp4.iconContainer, children: cResult[7] };
        const tmp17 = React3(tmp6(5804), obj4);
        cResult[8] = tmp4.iconContainer;
        cResult[9] = cResult[7];
        cResult[10] = tmp17;
        tmp15 = tmp17;
      }
    }
    if (isDrawerOpen) {
      let ChevronSmallUpIcon = tmp(11408).ChevronSmallDownIcon;
    } else {
      ChevronSmallUpIcon = tmp(13839).ChevronSmallUpIcon;
    }
    const obj5 = { color };
    const tmp12Result = React3(ChevronSmallUpIcon, obj5);
    cResult[5] = color;
    cResult[6] = isDrawerOpen;
    cResult[7] = tmp12Result;
  }
  const obj6 = { style: null };
  const items1 = [tmp4.circle, tmp8];
  obj6.style = items1;
  const tmp10 = React3(NativeViewDefault, obj6);
  cResult[2] = tmp4.circle;
  cResult[3] = tmp8;
  cResult[4] = tmp10;
  tmp9 = tmp10;
}) : ((arg0) => {
  ({ props, openTab, wrapperSpecs } = arg0);
  const tmp = closure_5();
  const voicePanelButtonStyles = VoicePanelStyles.useVoicePanelButtonStyles(wrapperSpecs);
  ({ isDrawerOpen, handlePress, accessibilityLabel } = useDrawerToggleDefault(openTab));
  const element = { onPress: handlePress, props, accessibilityLabel, children: null };
  const tmp5 = useDrawerToggleDefault(openTab);
  const tmp6 = React4;
  const obj2 = { style: null };
  const items = [tmp.circle, { backgroundColor: voicePanelButtonStyles.iconBg.backgroundColor }];
  obj2.style = items;
  const items1 = [React3(NativeViewDefault, obj2), ];
  const obj3 = { style: tmp.iconContainer, children: null };
  const tmp7 = VoicePanelAnimatedButtonWrapperDefault;
  if (isDrawerOpen) {
    let ChevronSmallUpIcon = tmp2(11408).ChevronSmallDownIcon;
  } else {
    ChevronSmallUpIcon = tmp2(13839).ChevronSmallUpIcon;
  }
  obj3.children = React3(ChevronSmallUpIcon, { color: voicePanelButtonStyles.iconFill.color });
  items1[1] = React3(NativeViewDefault, obj3);
  element.children = items1;
  return tmp6(tmp7, element);
});
