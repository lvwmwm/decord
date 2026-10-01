// Module ID: 15245
// Function ID: 15246
// Name: CheckpointModal
// Dependencies: [32, 19, 17, 15246, 5061, 1085, 21, 4836, 576, 1613, 15247, 15248, 504, 15251, 15252, 15253, 15241, 5039, 9443, 5415, 4540, 15255, 15256, 15258, 15274, 15275, 15276, 1115, 5992, 15277, 2]
// Exports: default

// Module 15245 (CheckpointModal)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1085 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5039 */;
import CheckpointStore2 from "CheckpointStore" /* 15246 */;
import CheckpointFlows from "CheckpointFlows" /* 15247 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import CheckpointConstants from "CheckpointConstants" /* 5061 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const CheckpointStore = CheckpointStore2;
let dependencyMap;

let CHECKPOINT_LOGO_SIZE;
let CHECKPOINT_NAV_HEIGHT;
let c10;
let metroImportAll;
let obj2;
let rect;
let unpackModuleId;
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
const View = react_native.View;
const CheckpointFetchStates = CheckpointStore2.CheckpointFetchStates;
({ CHECKPOINT_PRIMARY: metroImportAll, CHECKPOINT_LOGO_SIZE, CHECKPOINT_NAV_HEIGHT } = CheckpointConstants);
const ThemeTypes = Constants.ThemeTypes;
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { height: "100%" }, layer: { position: "absolute", width: "100%", height: "100%" }, coveredCharacterLayer: { opacity: 0 }, nav: rect, logo: { width: CHECKPOINT_LOGO_SIZE, height: CHECKPOINT_LOGO_SIZE }, headerActions: obj2 };
rect = { position: "absolute", top: 0, left: nativeDefault.space.PX_16, right: nativeDefault.space.PX_16, height: CHECKPOINT_NAV_HEIGHT, flexDirection: "row", alignItems: "center", justifyContent: "space-between" };
createStyles = createStyles.createStyles;
obj2 = { flexDirection: "row", gap: nativeDefault.space.PX_12 };
let closure_12 = createStyles(obj);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointModal.tsx");

export default function CheckpointModal(didPlayerShareDataWithDiscord) {
  let VoiceNormalIcon;
  let characterStage;
  let closure_2;
  let closure_4;
  let intl2;
  let items5;
  let items6;
  let items7;
  let items8;
  let obj12;
  let obj14;
  let obj4;
  let obj7;
  let ref;
  let route;
  let statsScreen;
  let str;
  let str2;
  let string;
  let t;
  let flag = didPlayerShareDataWithDiscord.didPlayerShareDataWithDiscord;
  if (flag === undefined) {
    flag = true;
  }
  let checkpointFlow;
  route = undefined;
  dependencyMap = undefined;
  react = undefined;
  let tmp = closure_12();
  const tmp2 = route;
  const rect = route(1613)();
  let obj = checkpointFlow(15247);
  checkpointFlow = obj.getCheckpointFlow(flag);
  [route, dependencyMap] = react.useState(checkpointFlow(15248).CheckpointRoute.HOME);
  const items = [CheckpointStore];
  const obj2 = checkpointFlow(504);
  const stateFromStores = obj2.useStateFromStores(items, () => CheckpointStore.isMuted);
  _slicedToArray = react.useRef(0);
  const tmp9 = route(15251);
  const tmp9Result = tmp9(route(15252));
  react = tmp9Result;
  route(15253)();
  const effect = react.useEffect(() => {
    const fetchState = CheckpointStore.fetchState;
    const tmp = fetchState !== constants.INIT && fetchState !== constants.ERROR;
    if (!tmp) {
      const obj = checkpointFlow(closure_2[16]);
      const checkpointData = obj.fetchCheckpointData();
    }
  }, []);
  const items1 = [route, checkpointFlow, tmp9Result];
  const callback = react.useCallback((arg0) => {
    const timestamp = Date.now();
    if (ref.current + 500 <= timestamp) {
      const obj = CheckpointFlows;
      const adjacentCheckpointRoute = obj.getAdjacentCheckpointRoute(checkpointFlow, first, arg0);
      if (null != adjacentCheckpointRoute) {
        tmp2.current = timestamp;
        closure_4();
        closure_2(adjacentCheckpointRoute);
      } else if (1 === arg0) {
        const arr = ModalActionCreatorsDefault;
        arr.pop();
      }
    }
  }, items1);
  const items2 = [callback];
  const items3 = [callback];
  const callback1 = react.useCallback(() => callback(-1), items2);
  const callback2 = react.useCallback(() => callback(1), items3);
  if (stateFromStores) {
    VoiceNormalIcon = tmp4(9443).VoiceXIcon;
  } else {
    VoiceNormalIcon = tmp4(5415).VoiceNormalIcon;
  }
  const HOME = tmp4(15248).CheckpointRoute.HOME;
  const tmp4Result = checkpointFlow(15247);
  const tmp16 = null == tmp4Result.getAdjacentCheckpointRoute(checkpointFlow, route, 1);
  const tmp4Result2 = checkpointFlow(15248);
  const checkpointRoutePresentation = tmp4Result2.getCheckpointRoutePresentation(route);
  ({ characterStage, statsScreen } = checkpointRoutePresentation);
  let tmp19Result = route === tmp4(15248).CheckpointRoute.HOME || null != statsScreen;
  const obj3 = { theme: ThemeTypes.DARK, children: closure_11(callback, obj4) };
  const items4 = [tmp.layer, ];
  let coveredCharacterLayer = tmp19Result;
  obj4 = { style: tmp.container, children: items5 };
  const ThemeContextProvider = tmp4(4540).ThemeContextProvider;
  if (tmp19Result) {
    coveredCharacterLayer = tmp.coveredCharacterLayer;
  }
  items4[1] = coveredCharacterLayer;
  const obj5 = { style: items4, pointerEvents: str2, accessibilityElementsHidden: tmp19Result, importantForAccessibility: str, children: closure_10(tmp2(15255), { stage: characterStage }) };
  str = "auto";
  str2 = "auto";
  if (tmp19Result) {
    str2 = "none";
  }
  if (tmp19Result) {
    str = "no-hide-descendants";
  }
  items5 = [closure_10(callback, obj5), tmp19Result && closure_10(tmp2(15256), {}), , , ];
  tmp19Result && closure_10(tmp2(15256), {});
  if (tmp19Result) {
    const obj6 = { style: tmp.layer, children: closure_10(tmp2(15258), obj7) };
    obj7 = { route };
    tmp19Result = tmp19(tmp21, obj6);
  }
  items5[2] = tmp19Result;
  const obj8 = { style: items6, children: items7 };
  items6 = [tmp.nav, { marginTop: rect.top, marginLeft: rect.left, marginRight: rect.right }];
  const obj9 = { uri: tmp2(15275), style: tmp.logo };
  const tmp2Result = tmp2(15274);
  items7 = [closure_10(tmp2Result, obj9), ];
  const obj10 = { style: tmp.headerActions, children: items8 };
  const obj11 = { onPress: checkpointFlow(15241).toggleMute, accessibilityLabel: string(stateFromStores ? t.YqAjXy : t.w4m945), children: closure_10(VoiceNormalIcon, obj12) };
  const tmp2Result3 = tmp2(15276);
  const intl = tmp4(1115).intl;
  string = intl.string;
  t = tmp4(1115).t;
  obj12 = { color, size: "xs" };
  const tmp25 = route === HOME;
  items8 = [closure_10(tmp2Result3, obj11), ];
  const obj13 = { onPress: tmp2(5039).pop, accessibilityLabel: intl2.string(checkpointFlow(1115).t.cpT0Cq), children: closure_10(checkpointFlow(5992).XSmallIcon, obj14) };
  const tmp2Result4 = tmp2(15276);
  intl2 = tmp4(1115).intl;
  obj14 = { color, size: "xs" };
  items8[1] = closure_10(tmp2Result4, obj13);
  items7[1] = closure_11(callback, obj10);
  items5[3] = closure_11(callback, obj8);
  items5[4] = closure_10(tmp2(15277), { onBack: callback1, onNext: callback2, isTerminal: tmp16, isHome: tmp25 });
  return closure_10(ThemeContextProvider, obj3);
};
