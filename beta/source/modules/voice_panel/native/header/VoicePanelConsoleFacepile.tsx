// Module ID: 16949
// Function ID: 16950
// Name: VoicePanelConsoleFacepile
// Dependencies: [19, 1074, 21, 4836, 576, 9258, 1115, 9240, 1370, 5901, 1177, 2]
// Exports: default

// Module 16949 (VoicePanelConsoleFacepile)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import intl5 from "intl" /* 1115 */;
import native from "native" /* 1177 */;
import GlobalUtils from "GlobalUtils" /* 1370 */;
import NativeViewDefault from "NativeView" /* 5901 */;
import useGameConsoleAccountsDefault from "useGameConsoleAccounts" /* 9240 */;
import getConsoleIconDefault from "getConsoleIcon" /* 9258 */;
import react from "react" /* 19 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault;

let obj2;
function getConsoleInfo(type) {
  let intl;
  let intl2;
  let intl3;
  let intl4;
  type = type.type;
  if (PlatformTypes.XBOX === type) {
    const obj2 = { icon: getConsoleIconDefault(type.type), color: nativeDefault.unsafe_rawColors.PLATFORM_XBOX, connectLabel: intl3.string(intl5.t.QN7HXV), connectSublabel: intl4.string(intl5.t["M/Ld86"]) };
    intl3 = intl5.intl;
    intl4 = intl5.intl;
    return obj2;
  } else if (tmp.PLAYSTATION === type) {
    const obj = { icon: getConsoleIconDefault(type.type), color: nativeDefault.unsafe_rawColors.PLATFORM_PLAYSTATION, connectLabel: intl.string(intl5.t["3qLlTS"]), connectSublabel: intl2.string(intl5.t["/uR9x1"]) };
    intl = intl5.intl;
    intl2 = intl5.intl;
    return obj;
  } else {
    return null;
  }
}
const PlatformTypes = Constants.PlatformTypes;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { consoleIconContainer: obj2, consoleIcon: { tintColor: nativeDefault.colors.WHITE } };
obj2 = { borderRadius: nativeDefault.radii.round, padding: 8, margin: -3, borderWidth: 3, borderColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles = createStyles.createStyles;
({ tintColor: nativeDefault.colors.WHITE });
let closure_6 = createStyles(obj);
const result = size.fileFinishedImporting("modules/voice_panel/native/header/VoicePanelConsoleFacepile.tsx");

export default function VoicePanelConsoleFacepile() {
  let closure_0;
  let closure_1;
  const tmp = closure_6();
  _require = tmp;
  const tmp2 = useGameConsoleAccountsDefault();
  importDefault = tmp2;
  let items = [tmp2];
  const items1 = [tmp];
  const items2 = react.useMemo(() => {
    const mapped = closure_1.map(getConsoleInfo);
    return mapped.filter(GlobalUtils.isNotNullish);
  }, items);
  const renderItem = react.useCallback((backgroundColor) => {
    const items = [closure_0.consoleIconContainer, { backgroundColor: backgroundColor.color }];
    ({ style: closure_0.consoleIcon, size: native.Icon.Sizes.MEDIUM, source: backgroundColor.icon });
    NativeViewDefault;
    const Icon = native.Icon;
    return <tmp style={items}>{null}</tmp>;
  }, items1);
  return jsx(require("native").SummarizedIconRow, { items: items2, renderItem, offsetAmount: -3 });
};
export { getConsoleInfo };
