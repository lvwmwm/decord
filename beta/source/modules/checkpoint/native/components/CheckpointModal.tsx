// Module ID: 15965
// Function ID: 15966
// Name: CheckpointModal
// Dependencies: [32, 19, 17, 5015, 1089, 21, 4790, 580, 558, 568, 1616, 15966, 15967, 4993, 10280, 5353, 15970, 15971, 15973, 15988, 15989, 1119, 15990, 5878, 15991, 4503, 2]

// Module 15965 (CheckpointModal)
import nativeDefault from "native" /* 580 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4993 */;
import CheckpointFlows from "CheckpointFlows" /* 15966 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
let View = fn(17).View;
const CheckpointConstants = fn(5015);
({ CHECKPOINT_PRIMARY: metroRequire, CHECKPOINT_LOGO_SIZE, CHECKPOINT_NAV_HEIGHT } = CheckpointConstants);
const ThemeTypes = fn(1089).ThemeTypes;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4790);
let obj2 = { container: { height: "100%" }, layer: { position: "absolute", width: "100%", height: "100%" }, coveredCharacterLayer: { opacity: 0 }, nav: null, logo: null, headerActions: null };
let rect = { position: "absolute", top: 0, left: nativeDefault.space.PX_16, right: nativeDefault.space.PX_16, height: CHECKPOINT_NAV_HEIGHT, flexDirection: "row", alignItems: "center", justifyContent: "space-between" };
obj2.nav = rect;
obj2.logo = { width: CHECKPOINT_LOGO_SIZE, height: CHECKPOINT_LOGO_SIZE };
obj2.headerActions = { flexDirection: "row", gap: nativeDefault.space.PX_12 };
let closure_10 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { flexDirection: "row", gap: nativeDefault.space.PX_12 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointModal.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((didPlayerShareDataWithDiscord) => {
  const cResult = require("c").c(68);
  didPlayerShareDataWithDiscord = didPlayerShareDataWithDiscord.didPlayerShareDataWithDiscord;
  const tmp5 = closure_10();
  first(1616)();
  if (cResult[0] !== (undefined === didPlayerShareDataWithDiscord || didPlayerShareDataWithDiscord)) {
    const checkpointFlow = tmp(15966).getCheckpointFlow(tmp4);
    cResult[0] = tmp4;
    cResult[1] = checkpointFlow;
    let tmp8 = checkpointFlow;
    const tmpResult = tmp(15966);
  } else {
    tmp8 = cResult[1];
  }
  _require = tmp8;
  [first, dependencyMap] = noop.useState(require("CheckpointNavigation").CheckpointRoute.HOME);
  let obj = require("c");
  const tmp6 = first;
  [tmp13, _slicedToArray] = noop.useState(false);
  noop = noop.useRef(0);
  if (cResult[2] === first) {
    if (cResult[3] === tmp8) {
      let tmp14 = cResult[4];
    }
    View = tmp14;
    if (cResult[5] !== tmp14) {
      class O {
        constructor() {
          return closure_5(-1);
        }
      }
      cResult[5] = tmp14;
      cResult[6] = O;
    } else {
      class O {
        constructor() {
          return closure_5(-1);
        }
      }
    }
    if (cResult[7] !== tmp14) {
      class D {
        constructor() {
          return closure_5(1);
        }
      }
      cResult[7] = tmp14;
      cResult[8] = D;
    } else {
      class D {
        constructor() {
          return closure_5(1);
        }
      }
    }
    if (tmp13) {
      class D {
        constructor() {
          return closure_5(1);
        }
      }
    } else {
      class D {
        constructor() {
          return closure_5(1);
        }
      }
    }
    if (cResult[9] === first) {
      class D {
        constructor() {
          return closure_5(1);
        }
      }
      if (cResult[12] !== first) {
        class D {
          constructor() {
            return closure_5(1);
          }
        }
        const checkpointRoutePresentation = obj4.getCheckpointRoutePresentation(first);
        cResult[12] = first;
        cResult[13] = checkpointRoutePresentation;
        const tmp21 = checkpointRoutePresentation;
      } else {
        class D {
          constructor() {
            return closure_5(1);
          }
        }
      }
      ({ characterStage, statsScreen } = tmp21);
      const tmp23 = first === tmp(15967).CheckpointRoute.HOME || null != statsScreen;
      const container = tmp5.container;
      if (tmp23) {
        class D {
          constructor() {
            return closure_5(1);
          }
        }
      }
      if (cResult[14] === tmp5.layer) {
        class D {
          constructor() {
            return closure_5(1);
          }
        }
        if (tmp23) {
          class D {
            constructor() {
              return closure_5(1);
            }
          }
        }
        if (tmp23) {
          class D {
            constructor() {
              return closure_5(1);
            }
          }
        }
        if (cResult[17] !== characterStage) {
          class D {
            constructor() {
              return closure_5(1);
            }
          }
          const obj2 = { stage: characterStage };
          const tmp27 = closure_8(tmp6(15970), obj2);
          cResult[17] = characterStage;
          cResult[18] = tmp27;
        } else {
          class D {
            constructor() {
              return closure_5(1);
            }
          }
        }
        if (cResult[19] === tmp23) {
          class D {
            constructor() {
              return closure_5(1);
            }
          }
        }
        const obj3 = { style: tmp25, pointerEvents: "auto", accessibilityElementsHidden: tmp23, importantForAccessibility: "auto", children: tmp26 };
        const tmp31 = closure_8(View, obj3);
        cResult[19] = tmp23;
        cResult[20] = tmp25;
        cResult[21] = "auto";
        cResult[22] = "auto";
        cResult[23] = tmp26;
        cResult[24] = tmp31;
      }
      const items = [tmp5.layer, tmp23];
      cResult[14] = tmp5.layer;
      cResult[15] = tmp23;
      cResult[16] = items;
    }
    let adjacentCheckpointRoute = tmp(15966).getAdjacentCheckpointRoute(tmp8, first, 1);
    cResult[9] = first;
    cResult[10] = tmp8;
    cResult[11] = adjacentCheckpointRoute;
    const tmpResult2 = tmp(15966);
  }
  class R {
    constructor(arg0) {
      timestamp = Date.now();
      if (closure_4.current + 500 <= timestamp) {
        tmp3 = didPlayerShareDataWithDiscord;
        tmp4 = closure_0;
        tmp5 = closure_2;
        obj = closure_0(closure_2[11]);
        tmp6 = closure_0;
        tmp7 = closure_1;
        adjacentCheckpointRoute = obj.getAdjacentCheckpointRoute(closure_0, closure_1, didPlayerShareDataWithDiscord);
        tmp9 = null;
        if (null != adjacentCheckpointRoute) {
          tmp2.current = timestamp;
          tmp12 = closure_2;
          tmp13 = closure_2(adjacentCheckpointRoute);
        } else {
          num = 1;
          if (1 === didPlayerShareDataWithDiscord) {
            tmp10 = closure_1;
            arr = closure_1(tmp5[13]);
            arr1 = arr.pop();
          }
        }
      }
      return;
    }
  }
  cResult[2] = first;
  cResult[3] = tmp8;
  cResult[4] = R;
  tmp14 = R;
}) : ((didPlayerShareDataWithDiscord) => {
  let flag = didPlayerShareDataWithDiscord.didPlayerShareDataWithDiscord;
  if (flag === undefined) {
    flag = true;
  }
  let checkpointFlow;
  route = undefined;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  noop = undefined;
  const tmp = closure_10();
  const rect = route(1616)();
  checkpointFlow = checkpointFlow(15966).getCheckpointFlow(flag);
  [route, dependencyMap] = noop.useState(checkpointFlow(15967).CheckpointRoute.HOME);
  let obj = checkpointFlow(15966);
  [tmp9, c3] = noop.useState(false);
  noop = noop.useRef(0);
  const items = [route, checkpointFlow];
  const callback = noop.useCallback((arg0) => {
    const timestamp = Date.now();
    if (ref.current + 500 <= timestamp) {
      const adjacentCheckpointRoute = CheckpointFlows.getAdjacentCheckpointRoute(checkpointFlow, first, arg0);
      if (null != adjacentCheckpointRoute) {
        tmp2.current = timestamp;
        closure_2(adjacentCheckpointRoute);
      } else if (1 === arg0) {
        ModalActionCreatorsDefault.pop();
      }
    }
  }, items);
  const items1 = [callback];
  const items2 = [callback];
  const callback1 = noop.useCallback(() => callback(-1), items1);
  const callback2 = noop.useCallback(() => callback(1), items2);
  if (tmp9) {
    let VoiceNormalIcon = tmp4(10280).VoiceXIcon;
  } else {
    VoiceNormalIcon = tmp4(5353).VoiceNormalIcon;
  }
  const tmp8 = _slicedToArray(noop.useState(false), 2);
  const tmp4Result = checkpointFlow(15966);
  const tmp13 = null == checkpointFlow(15966).getAdjacentCheckpointRoute(checkpointFlow, route, 1);
  const checkpointRoutePresentation = checkpointFlow(15967).getCheckpointRoutePresentation(route);
  ({ characterStage, statsScreen } = checkpointRoutePresentation);
  let tmp16Result2 = route === tmp4(15967).CheckpointRoute.HOME || null != statsScreen;
  const obj2 = { theme: ThemeTypes.DARK, children: null };
  const obj3 = { style: tmp.container, children: null };
  const items3 = [tmp.layer, ];
  let coveredCharacterLayer = tmp16Result2;
  if (tmp16Result2) {
    coveredCharacterLayer = tmp.coveredCharacterLayer;
  }
  const obj4 = { style: items3, pointerEvents: null, accessibilityElementsHidden: null, importantForAccessibility: null, children: null };
  items3[1] = coveredCharacterLayer;
  let str = "auto";
  let str2 = "auto";
  if (tmp16Result2) {
    str2 = "none";
  }
  obj4.pointerEvents = str2;
  obj4.accessibilityElementsHidden = tmp16Result2;
  if (tmp16Result2) {
    str = "no-hide-descendants";
  }
  obj4.importantForAccessibility = str;
  obj4.children = closure_8(route(15970), { stage: characterStage });
  const items4 = [closure_8(callback, obj4), , , , ];
  let tmp16Result = tmp16Result2;
  if (tmp16Result2) {
    tmp16Result = tmp16(tmp2(15971), {});
  }
  items4[1] = tmp16Result;
  if (tmp16Result2) {
    const obj5 = { style: tmp.layer, children: null };
    const obj6 = { route };
    obj5.children = tmp16(tmp2(15973), obj6);
    tmp16Result2 = tmp16(tmp18, obj5);
  }
  items4[2] = tmp16Result2;
  const obj7 = { style: null, children: null };
  const items5 = [tmp.nav, { marginTop: rect.top, marginLeft: rect.left, marginRight: rect.right }];
  obj7.style = items5;
  const obj8 = { uri: null, style: null };
  const tmp4Result2 = checkpointFlow(15967);
  obj8.uri = route(15989);
  obj8.style = tmp.logo;
  const items6 = [closure_8(route(15988), obj8), ];
  const obj9 = { style: tmp.headerActions, children: null };
  const obj10 = {
    onPress() {
      return _undefined((arg0) => !arg0);
    },
    accessibilityLabel: null,
    children: null
  };
  const tmp2Result = route(15988);
  const intl = tmp4(1119).intl;
  const t = tmp4(1119).t;
  const tmp2Result3 = route(15990);
  obj10.accessibilityLabel = intl.string(tmp9 ? t.YqAjXy : t.w4m945);
  obj10.children = closure_8(VoiceNormalIcon, { color, size: "xs" });
  const items7 = [closure_8(tmp2Result3, obj10), ];
  const obj12 = { onPress: null, accessibilityLabel: null, children: null };
  const obj11 = { color, size: "xs" };
  const tmp22 = route === checkpointFlow(15967).CheckpointRoute.HOME;
  obj12.onPress = route(4993).pop;
  const intl2 = tmp4(1119).intl;
  obj12.accessibilityLabel = intl2.string(checkpointFlow(1119).t.cpT0Cq);
  obj12.children = closure_8(checkpointFlow(5878).XSmallIcon, { color, size: "xs" });
  items7[1] = closure_8(route(15990), obj12);
  obj9.children = items7;
  items6[1] = closure_9(callback, obj9);
  obj7.children = items6;
  items4[3] = closure_9(callback, obj7);
  items4[4] = closure_8(route(15991), { onBack: callback1, onNext: callback2, isTerminal: tmp13, isHome: tmp22 });
  obj3.children = items4;
  obj2.children = closure_9(callback, obj3);
  return closure_8(checkpointFlow(4503).ThemeContextProvider, obj2);
});
