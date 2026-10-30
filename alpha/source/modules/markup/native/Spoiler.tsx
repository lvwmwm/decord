// Module ID: 11036
// Function ID: 11037
// Name: Spoiler
// Dependencies: [32, 19, 17, 1072, 11027, 21, 5009, 1376, 575, 561, 560, 5075, 1188, 2]
// Exports: SpoilerRevealProvider, default

// Module 11036 (Spoiler)
import Fragment from "Fragment" /* 21 */;
import _mod560 from "module_560" /* 560 */;
import _mod561 from "module_561" /* 561 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import native from "native" /* 5075 */;
import RedesignChannelListConstants from "RedesignChannelListConstants" /* 11027 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import createStyles from "createStyles" /* 5009 */;
import PlatformUtils from "PlatformUtils" /* 1376 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, revealedIds, set;

let closure_4;
let hasOwnProperty;
let obj2;
let size;
function createSpoilerStore() {
  let obj = _mod561;
  return obj.createStore()((arg0) => {
    let closure_0 = arg0;
    let obj = {
      revealedIds: set,
      reveal(right) {
        closure_0 = right;
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
function SharedSpoiler(arg0) {
  let closure_129_0;
  let store;
  ({ id: closure_129_0, store } = arg0);
  const merged = Object.assign(arg0, Object.assign({ id: 0, store: 0 }));
  const obj = _mod560;
  const store1 = obj.useStore(store, (revealedIds) => {
    revealedIds = revealedIds.revealedIds;
    return revealedIds.has(closure_1_0);
  });
  const merged1 = Object.assign(merged);
  return <Spoiler revealed={store1} onReveal={function onReveal() {
    const state = store.getState();
    return state.reveal(closure_1_0);
  }} />;
}
({ View: closure_4, StyleSheet: hasOwnProperty } = react_native);
const EMOJI_CHAT_SIZE = Constants.EMOJI_CHAT_SIZE;
const MUTED_OPACITY_CONTENT = RedesignChannelListConstants.MUTED_OPACITY_CONTENT;
const jsx = Fragment.jsx;
const createLegacyClassComponentStyles = createStyles.createLegacyClassComponentStyles;
let str = "transparent";
if (PlatformUtils.isAndroid()) {
  str = "rgba(0,0,0,0.0019607844)";
}
let obj = { spoiler: obj2, placeholder: size, spoilerRevealed: { color: nativeDefault.colors.TEXT_DEFAULT, backgroundColor: nativeDefault.colors.SPOILER_REVEALED_BACKGROUND }, muted: { opacity: MUTED_OPACITY_CONTENT } };
obj2 = { color: str, backgroundColor: nativeDefault.colors.SPOILER_HIDDEN_BACKGROUND };
size = { width: EMOJI_CHAT_SIZE, height: EMOJI_CHAT_SIZE, backgroundColor: nativeDefault.colors.SPOILER_HIDDEN_BACKGROUND };
({ color: nativeDefault.colors.TEXT_DEFAULT, backgroundColor: nativeDefault.colors.SPOILER_REVEALED_BACKGROUND });
const metroImportDefault = createLegacyClassComponentStyles(obj);
const redux = react.createContext(null);
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
    let tmp = closure_7(this.context);
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
        const f98411 = (props) => {
          let Children;
          let cloneElement;
          let items;
          const tmp = validElement;
          if (validElement.isValidElement(props)) {
            const style = props.props.style;
            const _Array = Array;
            let flattenResult = style;
            if (Array.isArray(style)) {
              flattenResult = closure_2_5.flatten(style);
            }
            const obj = { children: Children.map(props.props.children, f98411), style: items, onPress: "r" };
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
              tmp10 = <React3 style={placeholder.placeholder} />;
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
              mapped = Children.map(type, f98411);
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
size = size_mod;
const result = size.fileFinishedImporting("modules/markup/native/Spoiler.tsx");

export default function NativeSpoiler(id) {
  id = id.id;
  const merged = Object.assign(id, Object.assign({ id: 0 }));
  const context = react.useContext(redux);
  if (null != id) {
    let tmp4;
    if (null != context) {
      const merged1 = Object.assign(merged);
      tmp4 = <SharedSpoiler id={id} store={context} />;
    }
    return tmp4;
  }
  const merged2 = Object.assign(merged);
  tmp4 = <Spoiler />;
};
export function SpoilerRevealProvider(children) {
  return <redux.Provider value={_slicedToArray(react.useState(createSpoilerStore), 1)[0]}>{arg0.children}</redux.Provider>;
}
