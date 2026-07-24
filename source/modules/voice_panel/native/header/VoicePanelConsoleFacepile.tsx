// Module ID: 15854
// Function ID: 122353
// Name: getConsoleInfo
// Dependencies: [31, 653, 33, 4130, 689, 9093, 1212, 8972, 1327, 5515, 1273, 2]
// Exports: default

// Module 15854 (getConsoleInfo)
import result from "result";
import { PlatformTypes } from "ME";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let require = arg1;
function getConsoleInfo(closure_1) {
  const type = closure_1.type;
  if (PlatformTypes.XBOX === type) {
    let obj = { icon: importDefault(9093)(closure_1.type), color: importDefault(689).unsafe_rawColors.PLATFORM_XBOX };
    const intl3 = require(1212) /* getSystemLocale */.intl;
    obj.connectLabel = intl3.string(require(1212) /* getSystemLocale */.t.QN7HXV);
    const intl4 = require(1212) /* getSystemLocale */.intl;
    obj.connectSublabel = intl4.string(require(1212) /* getSystemLocale */.t["M/Ld86"]);
    return obj;
  } else if (PlatformTypes.PLAYSTATION === type) {
    obj = { icon: importDefault(9093)(closure_1.type), color: importDefault(689).unsafe_rawColors.PLATFORM_PLAYSTATION };
    const intl = require(1212) /* getSystemLocale */.intl;
    obj.connectLabel = intl.string(require(1212) /* getSystemLocale */.t["3qLlTS"]);
    const intl2 = require(1212) /* getSystemLocale */.intl;
    obj.connectSublabel = intl2.string(require(1212) /* getSystemLocale */.t["/uR9x1"]);
    return obj;
  } else {
    return null;
  }
}
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { borderRadius: require("_createForOfIteratorHelperLoose").radii.round, padding: 8, margin: -3, borderWidth: 3, borderColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW };
_createForOfIteratorHelperLoose.consoleIconContainer = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.consoleIcon = { tintColor: require("_createForOfIteratorHelperLoose").colors.WHITE };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const obj1 = { tintColor: require("_createForOfIteratorHelperLoose").colors.WHITE };
const result = require("jsxProd").fileFinishedImporting("modules/voice_panel/native/header/VoicePanelConsoleFacepile.tsx");

export default function VoicePanelConsoleFacepile() {
  let tmp = _createForOfIteratorHelperLoose();
  const require = tmp;
  const tmp2 = importDefault(8972)();
  importDefault = tmp2;
  let items = [tmp2];
  const items1 = [tmp];
  items = React.useMemo(() => {
    const mapped = tmp2.map(outer1_7);
    return mapped.filter(tmp(outer1_2[8]).isNotNullish);
  }, items);
  const renderItem = React.useCallback((backgroundColor) => {
    let obj = { style: items };
    items = [tmp.consoleIconContainer, { backgroundColor: backgroundColor.color }];
    tmp = tmp2(outer1_2[9]);
    obj = { style: tmp.consoleIcon, size: tmp(outer1_2[10]).Icon.Sizes.MEDIUM, source: backgroundColor.icon };
    obj.children = outer1_5(tmp(outer1_2[10]).Icon, obj);
    return outer1_5(tmp, obj);
  }, items1);
  return jsx(require(1273) /* Button */.SummarizedIconRow, { items, renderItem, offsetAmount: -3 });
};
export { getConsoleInfo };
