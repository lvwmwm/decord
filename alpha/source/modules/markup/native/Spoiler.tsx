// Module ID: 11999
// Function ID: 12000
// Name: Spoiler
// Dependencies: [109, 32, 19, 17, 1084, 11992, 21, 5004, 1381, 587, 571, 558, 576, 570, 5070, 1199, 2]

// Module 11999 (Spoiler)
import Fragment from "Fragment" /* 21 */;
import _mod571 from "module_571" /* 571 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1084 */;
import native from "native" /* 5070 */;
import RedesignChannelListConstants from "RedesignChannelListConstants" /* 11992 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import createStyles from "createStyles" /* 5004 */;
import PlatformUtils from "PlatformUtils" /* 1381 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, set;

let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let size;
let tmp;
const _mod570 = tmp(570);
function createSpoilerStore() {
  let obj = _mod571;
  return obj.createStore()((arg0) => {
    let closure_0 = arg0;
    let obj = {
      revealedIds: set,
      reveal(dependencyMap) {
        closure_0 = dependencyMap;
        closure_0((revealedIds) => {
          const obj = { revealedIds: set.add(closure_0) };
          set = new Set(revealedIds.revealedIds);
          return obj;
        });
      }
    };
    set = new Set();
    return obj;
  });
}
let closure_2 = ["id", "store"];
let closure_3 = ["id"];
({ View: metroImportDefault, StyleSheet: metroImportAll } = react_native);
const EMOJI_CHAT_SIZE = Constants.EMOJI_CHAT_SIZE;
const MUTED_OPACITY_CONTENT = RedesignChannelListConstants.MUTED_OPACITY_CONTENT;
const jsx = Fragment.jsx;
const createLegacyClassComponentStyles = createStyles.createLegacyClassComponentStyles;
let str = "transparent";
if (PlatformUtils.isAndroid()) {
  str = "rgba(0,0,0,0.0019607844)";
}
let obj = { spoiler: obj2, placeholder: size, spoilerRevealed: obj3, muted: { opacity: MUTED_OPACITY_CONTENT } };
obj2 = { color: str, backgroundColor: nativeDefault.colors.SPOILER_HIDDEN_BACKGROUND };
size = { width: EMOJI_CHAT_SIZE, height: EMOJI_CHAT_SIZE, backgroundColor: nativeDefault.colors.SPOILER_HIDDEN_BACKGROUND };
obj3 = { color: nativeDefault.colors.TEXT_DEFAULT, backgroundColor: nativeDefault.colors.SPOILER_REVEALED_BACKGROUND };
const authStore = createLegacyClassComponentStyles(obj);
const redux = react.createContext(null);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function SpoilerRevealProvider(children) {
  const obj = react2;
  const cResult = obj.c(3);
  children = children.children;
  const first = _slicedToArray(react.useState(createSpoilerStore), 1)[0];
  if (cResult[0] === children) {
    let tmp3;
    if (cResult[1] === first) {
      tmp3 = cResult[2];
    }
    return tmp3;
  }
  const tmp4 = <redux.Provider value={first}>{children}</redux.Provider>;
  cResult[0] = children;
  cResult[1] = first;
  cResult[2] = tmp4;
  tmp3 = tmp4;
}) : (function SpoilerRevealProvider(children) {
  return <redux.Provider value={_slicedToArray(react.useState(createSpoilerStore), 1)[0]}>{arg0.children}</redux.Provider>;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? (function SharedSpoiler(id) {
  let tmp10;
  let tmp4;
  let tmp5;
  let tmp6;
  const tmp = require;
  let obj = react2;
  const cResult = obj.c(13);
  if (cResult[0] !== id) {
    id = id.id;
    let closure_0 = id;
    const store = id.store;
    let closure_1 = store;
    const tmp9 = _objectWithoutProperties(id, closure_2);
    cResult[0] = id;
    cResult[1] = id;
    cResult[2] = tmp9;
    cResult[3] = store;
    tmp6 = store;
    tmp5 = tmp9;
    tmp4 = id;
  } else {
    closure_0 = cResult[1];
    tmp5 = cResult[2];
    closure_1 = cResult[3];
  }
  if (cResult[4] !== tmp4) {
    const fn = function c(revealedIds) {
      revealedIds = revealedIds.revealedIds;
      return revealedIds.has(closure_0);
    };
    cResult[4] = tmp4;
    cResult[5] = fn;
    tmp10 = fn;
  } else {
    tmp10 = cResult[5];
  }
  const tmpResult = _mod570;
  const store1 = tmpResult.useStore(tmp6, tmp10);
  if (cResult[6] === tmp4) {
    let tmp12;
    if (cResult[7] === tmp6) {
      tmp12 = cResult[8];
    }
    if (cResult[9] === tmp5) {
      if (cResult[10] === store1) {
        let tmp13;
        if (cResult[11] === tmp12) {
          tmp13 = cResult[12];
        }
        return tmp13;
      }
    }
    let obj2 = { revealed: store1, onReveal: tmp12 };
    const merged = Object.assign(tmp5);
    const tmp19 = <Spoiler revealed={store1} onReveal={tmp12} />;
    cResult[9] = tmp5;
    cResult[10] = store1;
    cResult[11] = tmp12;
    cResult[12] = tmp19;
    tmp13 = tmp19;
  }
  const fn2 = function u() {
    let state;
    state = state.getState();
    return state.reveal(closure_0);
  };
  cResult[6] = tmp4;
  cResult[7] = tmp6;
  cResult[8] = fn2;
  tmp12 = fn2;
}) : (function SharedSpoiler(arg0) {
  let closure_129_0;
  let store;
  ({ id: closure_129_0, store } = arg0);
  const merged = Object.assign(arg0, Object.assign({ id: 0, store: 0 }));
  const obj = _mod570;
  const store1 = obj.useStore(store, (revealedIds) => {
    revealedIds = revealedIds.revealedIds;
    return revealedIds.has(closure_1_0);
  });
  const merged1 = Object.assign(merged);
  return <Spoiler revealed={store1} onReveal={function onReveal() {
    const state = store.getState();
    return state.reveal(closure_1_0);
  }} />;
});
const PureComponent = react.PureComponent;
class Spoiler extends PureComponent {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    applyArgumentsResult.state = { revealed: false };
    applyArgumentsResult.handleTap = function handleTap() {
      let disableReveal = applyArgumentsResult.props.revealed;
      if (disableReveal == null) {
        disableReveal = obj.state.revealed;
      }
      if (!disableReveal) {
        disableReveal = obj.props.disableReveal;
      }
      if (!disableReveal) {
        if (null != applyArgumentsResult.props.onReveal) {
          const props = obj.props;
          props.onReveal();
        } else {
          applyArgumentsResult.setState({ revealed: true });
        }
      }
    };
    return applyArgumentsResult;
  }
  render() {
    let handleTap;
    let items1;
    let placeholder;
    let tmp2;
    const self = this;
    let tmp = closure_10(this.context);
    _require = tmp;
    let revealed = this.props.revealed;
    if (revealed == null) {
      revealed = self.state.revealed;
    }
    const children = self.props.children;
    if (revealed) {
      let items = [tmp.spoilerRevealed, tmp3];
      items1 = items;
    } else {
      items1 = [tmp.spoiler, tmp2];
    }
    let Children = react.Children;
    const tmp4 = react;
    if (0 === Children.count(children)) {
      return null;
    } else {
      const Children1 = tmp4.Children;
      let mapped = Children1.map(children, (type) => {
        let validElement;
        const f113470 = (props) => {
          let Children;
          let cloneElement;
          let items;
          const tmp = validElement;
          if (validElement.isValidElement(props)) {
            const style = props.props.style;
            const _Array = Array;
            let flattenResult = style;
            if (Array.isArray(style)) {
              flattenResult = closure_2_8.flatten(style);
            }
            const obj = { children: Children.map(props.props.children, f113470), style: items, onPress: "r" };
            ({ Children, cloneElement } = tmp);
            items = [flattenResult, spoiler.spoiler];
            return cloneElement(props, obj);
          } else {
            return props;
          }
        };
        let tmp = react;
        let tmp2 = type;
        if (react.isValidElement(type)) {
          let displayName;
          if (typeof type.type !== "string") {
            if ("displayName" in type.type) {
              displayName = type.type.displayName;
            }
          }
          if ("Image" === displayName) {
            let tmp10;
            const tmp6 = revealed;
            if (!tmp6) {
              tmp10 = <metroImportDefault style={placeholder.placeholder} />;
            }
            tmp2 = tmp10;
          } else {
            const props = type.props;
            let source;
            if (props != null) {
              source = props.source;
            }
          }
          let mapped = type;
          if (null != type.props) {
            mapped = type;
            if (!revealed) {
              const Children = tmp.Children;
              mapped = Children.map(type, f113470);
            }
          }
          tmp10 = mapped;
        }
        return tmp2;
      });
      const items2 = [items1, ];
      let muted = self.props.muted;
      const LegacyText = require("native").LegacyText;
      const tmp7 = jsx;
      if (muted) {
        muted = tmp.muted;
      }
      let obj = { accessibilityRole: "button", style: items2, onPress: handleTap, children: mapped };
      items2[1] = muted;
      handleTap = undefined;
      if (!self.props.disableReveal) {
        handleTap = self.handleTap;
      }
      return tmp7(LegacyText, obj);
    }
  }
}
const prototype = Spoiler.prototype;
Spoiler.contextType = native.ThemeContext;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function NativeSpoiler(id) {
  let tmp2;
  let tmp3;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(7);
  if (cResult[0] !== id) {
    id = id.id;
    const tmp6 = _objectWithoutProperties(id, closure_3);
    cResult[0] = id;
    cResult[1] = id;
    cResult[2] = tmp6;
    tmp3 = tmp6;
    tmp2 = id;
  } else {
    tmp2 = cResult[1];
    tmp3 = cResult[2];
  }
  const context = react.useContext(redux);
  if (cResult[3] === tmp2) {
    if (cResult[4] === tmp3) {
      if (cResult[5] === context) {
        tmp8 = cResult[6];
      }
      return tmp8;
    }
  }
  if (null != tmp2) {
    let tmp10;
    if (null != context) {
      const merged = Object.assign(tmp3);
      tmp10 = <closure_13 id={tmp2} store={context} />;
    }
    cResult[3] = tmp2;
    cResult[4] = tmp3;
    cResult[5] = context;
    cResult[6] = tmp10;
    tmp8 = tmp10;
  }
  const merged1 = Object.assign(tmp3);
  tmp10 = <Spoiler />;
}) : (function NativeSpoiler(id) {
  id = id.id;
  const merged = Object.assign(id, Object.assign({ id: 0 }));
  const context = react.useContext(redux);
  if (null != id) {
    let tmp4;
    if (null != context) {
      const merged1 = Object.assign(merged);
      tmp4 = <closure_13 id={id} store={context} />;
    }
    return tmp4;
  }
  const merged2 = Object.assign(merged);
  tmp4 = <Spoiler />;
});
size = size_mod;
const result = size.fileFinishedImporting("modules/markup/native/Spoiler.tsx");

export default tmp5;
export const SpoilerRevealProvider = tmp4;
