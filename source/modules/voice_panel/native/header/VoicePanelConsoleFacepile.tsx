// Module ID: 15690
// Function ID: 119858
// Name: getConsoleInfo
// Dependencies: []
// Exports: default

// Module 15690 (getConsoleInfo)
function getConsoleInfo(type) {
  type = type.type;
  if (PlatformTypes.XBOX === type) {
    let obj = { icon: importDefault(dependencyMap[5])(type.type), color: importDefault(dependencyMap[4]).unsafe_rawColors.PLATFORM_XBOX };
    const intl3 = arg1(dependencyMap[6]).intl;
    obj.connectLabel = intl3.string(arg1(dependencyMap[6]).t.QN7HXV);
    const intl4 = arg1(dependencyMap[6]).intl;
    obj.connectSublabel = intl4.string(arg1(dependencyMap[6]).t.M/Ld86);
    return obj;
  } else if (PlatformTypes.PLAYSTATION === type) {
    obj = { icon: importDefault(dependencyMap[5])(type.type), color: importDefault(dependencyMap[4]).unsafe_rawColors.PLATFORM_PLAYSTATION };
    const intl = arg1(dependencyMap[6]).intl;
    obj.connectLabel = intl.string(arg1(dependencyMap[6]).t.3qLlTS);
    const intl2 = arg1(dependencyMap[6]).intl;
    obj.connectSublabel = intl2.string(arg1(dependencyMap[6]).t./uR9x1);
    return obj;
  } else {
    return null;
  }
}
let closure_3 = importAll(dependencyMap[0]);
const PlatformTypes = arg1(dependencyMap[1]).PlatformTypes;
const jsx = arg1(dependencyMap[2]).jsx;
let obj = arg1(dependencyMap[3]);
obj = {};
obj = { borderRadius: importDefault(dependencyMap[4]).radii.round, borderColor: importDefault(dependencyMap[4]).colors.BACKGROUND_BASE_LOW };
obj.consoleIconContainer = obj;
obj.consoleIcon = { tintColor: importDefault(dependencyMap[4]).colors.WHITE };
let closure_6 = obj.createStyles(obj);
const obj1 = { tintColor: importDefault(dependencyMap[4]).colors.WHITE };
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/voice_panel/native/header/VoicePanelConsoleFacepile.tsx");

export default function VoicePanelConsoleFacepile() {
  const tmp = callback();
  const arg1 = tmp;
  const tmp2 = importDefault(dependencyMap[7])();
  const importDefault = tmp2;
  let items = [tmp2];
  const items1 = [tmp];
  items = React.useMemo(() => {
    const mapped = tmp2.map(closure_7);
    return mapped.filter(tmp(closure_2[8]).isNotNullish);
  }, items);
  const renderItem = React.useCallback((backgroundColor) => {
    let obj = { style: items };
    const items = [tmp.consoleIconContainer, { backgroundColor: backgroundColor.color }];
    const tmp = tmp2(closure_2[9]);
    obj = { style: tmp.consoleIcon, size: tmp(closure_2[10]).Icon.Sizes.MEDIUM, source: backgroundColor.icon };
    obj.children = callback(tmp(closure_2[10]).Icon, obj);
    return callback(tmp, obj);
  }, items1);
  return jsx(arg1(dependencyMap[10]).SummarizedIconRow, { items, renderItem, offsetAmount: -3 });
};
export { getConsoleInfo };
