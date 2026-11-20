// Module ID: 14274
// Function ID: 14275
// Name: CheckpointHeader
// Dependencies: [17, 14255, 6367, 21, 5306, 575, 5544, 6838, 6396, 6397, 1630, 504, 13020, 7432, 14275, 14276, 14262, 1113, 7549, 2]
// Exports: default

// Module 14274 (CheckpointHeader)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 575 */;
import intl3 from "intl" /* 1113 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1630 */;
import HapticUtils from "HapticUtils" /* 5544 */;
import _modDef6396 from "module_6396" /* 6396 */;
import _modDef6397 from "module_6397" /* 6397 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6838 */;
import XSmallIcon from "XSmallIcon" /* 7549 */;
import CheckpointActionCreators from "CheckpointActionCreators" /* 14262 */;
import CheckpointApngPlayerDefault from "CheckpointApngPlayer" /* 14275 */;
import CheckpointHeaderButtonDefault from "CheckpointHeaderButton" /* 14276 */;
import CheckpointStore from "CheckpointStore" /* 14255 */;
import CheckpointConstants from "CheckpointConstants" /* 6367 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5306 */;
import size_mod from "module_2" /* 2 */;

let CHECKPOINT_LOGO_SIZE;
let CHECKPOINT_NAV_HEIGHT;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let rect;
let size;
function handleClose() {
  const obj = HapticUtils;
  const result = obj.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_LIGHT);
  const arr = ModalActionCreatorsDefault;
  arr.pop();
}
const View = react_native.View;
({ CHECKPOINT_LOGO_SIZE, CHECKPOINT_PRIMARY: hasOwnProperty, CHECKPOINT_NAV_HEIGHT } = CheckpointConstants);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { nav: rect, logo: size, headerActions: obj2 };
rect = { position: "absolute", top: 0, left: nativeDefault.space.PX_16, right: nativeDefault.space.PX_16, height: CHECKPOINT_NAV_HEIGHT, flexDirection: "row", alignItems: "center", justifyContent: "space-between" };
createStyles = createStyles.createStyles;
size = { width: CHECKPOINT_LOGO_SIZE + 6, height: CHECKPOINT_LOGO_SIZE + 6, margin: -3 };
obj2 = { flexDirection: "row", gap: nativeDefault.space.PX_12 };
let closure_8 = createStyles(obj);
size = size_mod;
let result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointHeader.tsx");

export default function CheckpointHeader(logoAnimatedUri) {
  let VoiceNormalIcon;
  let intl2;
  let isMuted;
  let items1;
  let items2;
  let items3;
  let string;
  let t;
  logoAnimatedUri = logoAnimatedUri.logoAnimatedUri;
  if (logoAnimatedUri === undefined) {
    logoAnimatedUri = _modDef6396;
  }
  let logoStaticUri = logoAnimatedUri.logoStaticUri;
  if (logoStaticUri === undefined) {
    logoStaticUri = _modDef6397;
  }
  let color = logoAnimatedUri.color;
  if (color === undefined) {
    color = hasOwnProperty;
  }
  const tmp5 = closure_8();
  const rect = useSafeAreaInsetsDefault();
  const items = [CheckpointStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => isMuted.isMuted);
  if (stateFromStores) {
    VoiceNormalIcon = tmp8(13020).VoiceXIcon;
  } else {
    VoiceNormalIcon = tmp8(7432).VoiceNormalIcon;
  }
  const obj2 = { style: items1, children: items2 };
  items1 = [tmp5.nav, { marginTop: rect.top, marginLeft: rect.left, marginRight: rect.right }];
  items2 = [, ];
  const obj3 = { animatedUri: logoAnimatedUri, staticUri: logoStaticUri, style: tmp5.logo };
  items2[0] = metroRequire(CheckpointApngPlayerDefault, obj3);
  const obj4 = { style: tmp5.headerActions, children: items3 };
  const obj5 = { onPress: CheckpointActionCreators.toggleMute, accessibilityLabel: string(stateFromStores ? t.YqAjXy : t.w4m945), color, children: metroRequire(VoiceNormalIcon, { color, size: "xs" }) };
  const tmp6Result = CheckpointHeaderButtonDefault;
  const intl = tmp8(1113).intl;
  string = intl.string;
  t = tmp8(1113).t;
  items3 = [metroRequire(tmp6Result, obj5), ];
  const obj6 = { onPress: handleClose, accessibilityLabel: intl2.string(intl3.t.cpT0Cq), color, children: metroRequire(XSmallIcon.XSmallIcon, { color, size: "xs" }) };
  const tmp6Result2 = CheckpointHeaderButtonDefault;
  intl2 = tmp8(1113).intl;
  items3[1] = metroRequire(tmp6Result2, obj6);
  items2[1] = metroImportDefault(View, obj4);
  return metroImportDefault(View, obj2);
};
