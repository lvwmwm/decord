// Module ID: 15277
// Function ID: 15278
// Name: CheckpointNavigationControls
// Dependencies: [17, 5061, 1074, 21, 4836, 576, 1613, 15278, 7722, 1115, 15262, 3037, 4525, 2111, 5940, 15279, 15280, 2]
// Exports: default

// Module 15277 (CheckpointNavigationControls)
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1613 */;
import _modDef3037 from "module_3037" /* 3037 */;
import CheckpointConstants from "CheckpointConstants" /* 5061 */;
import CheckpointTextDefault from "CheckpointText" /* 15262 */;
import CheckpointButtonDefault from "CheckpointButton" /* 15278 */;
import CheckpointPressableDefault from "CheckpointPressable" /* 15279 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let c3;
let closure_4;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let rect;
({ Pressable: c3, View: closure_4 } = react_native);
const CHECKPOINT_PRIMARY = CheckpointConstants.CHECKPOINT_PRIMARY;
const HelpdeskArticles = Constants.HelpdeskArticles;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: rect, homeContainer: obj2, link: { textDecorationLine: "underline" }, routeControls: { flexDirection: "row", alignItems: "center", justifyContent: "space-between" }, control: { width: 48, height: 48, alignItems: "center", justifyContent: "center" }, nextControl: obj3 };
rect = { position: "absolute", left: nativeDefault.space.PX_24, right: nativeDefault.space.PX_24, bottom: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj2 = { gap: nativeDefault.space.PX_24 };
obj3 = { borderWidth: 2, borderColor: CHECKPOINT_PRIMARY, backgroundColor: nativeDefault.colors.BLACK };
let closure_9 = createStyles(obj);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointNavigationControls.tsx");

export default function CheckpointNavigationControls(onNext) {
  let intl;
  let intl3;
  let intl4;
  let isHome;
  let isTerminal;
  let items4;
  let link;
  let obj4;
  let obj6;
  let obj8;
  let onBack;
  let string;
  let t;
  let tmp11;
  onNext = onNext.onNext;
  ({ onBack, isTerminal, isHome } = onNext);
  const tmp = closure_9();
  _require = tmp;
  const rect = useSafeAreaInsetsDefault();
  const items = [tmp.container, { marginLeft: rect.left, marginRight: rect.right, marginBottom: rect.bottom }];
  let obj = { style: null, children: null };
  const items1 = [items, ];
  const tmp4 = closure_8;
  const tmp5 = closure_4;
  if (isHome) {
    items1[1] = tmp.homeContainer;
    obj.style = items1;
    const obj2 = { Icon: require("PlayIcon").PlayIcon, label: intl3.string(require("intl").t.I0v0Qv), onPress: onNext };
    const tmp2Result = CheckpointButtonDefault;
    intl3 = require("intl").intl;
    const items2 = [closure_7(tmp2Result, obj2), ];
    const obj3 = { variant: "text-sm/medium", children: intl4.format(_modDef3037.hcNhyq, obj4) };
    const tmp2Result3 = CheckpointTextDefault;
    intl4 = require("intl").intl;
    obj4 = {
      learnMoreHook(children, arg1) {
          let obj = {
            variant: "text-sm/medium",
            style: link.link,
            onPress() {
              const openURL = closure_1_1(closure_1_2[12]).openURL;
              closure_1_1(closure_1_2[12]);
              const obj = closure_1_1(closure_1_2[13]);
              return openURL(obj.getArticleURL(constants.CHECKPOINT));
            },
            accessibilityRole: "link",
            children
          };
          return metroImportDefault(CheckpointTextDefault, obj, arg1);
        }
    };
    items2[1] = closure_7(tmp2Result3, obj3);
    obj.children = items2;
    tmp11 = obj;
  } else {
    items1[1] = tmp.routeControls;
    obj.style = items1;
    const obj5 = { style: tmp.control, onPress: onBack, accessibilityRole: "button", accessibilityLabel: intl.string(require("intl").t["13/7kX"]), children: closure_7(require("ArrowLargeLeftIcon").ArrowLargeLeftIcon, obj6) };
    intl = require("intl").intl;
    obj6 = { color: CHECKPOINT_PRIMARY };
    const items3 = [closure_7(closure_3, obj5), ];
    const obj7 = { style: items4, onPress: onNext, accessibilityRole: "button", accessibilityLabel: string(isTerminal ? t.i4jeWR : t.PDTjLN), children: closure_7(require("ArrowLargeRightIcon").ArrowLargeRightIcon, obj8) };
    items4 = [, ];
    ({ control: arr4[0], nextControl: arr4[1] } = tmp);
    const tmp2Result4 = CheckpointPressableDefault;
    const intl2 = require("intl").intl;
    string = intl2.string;
    t = require("intl").t;
    obj8 = { color: CHECKPOINT_PRIMARY };
    items3[1] = closure_7(tmp2Result4, obj7);
    obj.children = items3;
    tmp11 = obj;
  }
  return tmp4(tmp5, tmp11);
};
