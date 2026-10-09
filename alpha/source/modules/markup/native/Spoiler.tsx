// Module ID: 11720
// Function ID: 11721
// Name: Spoiler
// Dependencies: [19, 17, 1085, 11713, 21, 5091, 1382, 587, 4788, 1200, 2]

// Module 11720 (Spoiler)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import native from "native" /* 4788 */;
import RedesignChannelListConstants from "RedesignChannelListConstants" /* 11713 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import createStyles from "createStyles" /* 5091 */;
import PlatformUtils from "PlatformUtils" /* 1382 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let c3;
let closure_4;
let obj2;
let size;
({ View: c3, StyleSheet: closure_4 } = react_native);
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
const metroRequire = createLegacyClassComponentStyles(obj);
const PureComponent = react.PureComponent;
class Spoiler extends PureComponent {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    applyArgumentsResult.state = { revealed: false };
    applyArgumentsResult.handleTap = function handleTap() {
      const tmp = applyArgumentsResult.state.revealed || applyArgumentsResult.props.disableReveal;
      if (!tmp) {
        const obj2 = { revealed: !applyArgumentsResult.state.revealed };
        applyArgumentsResult.setState(obj2);
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
    let tmp = closure_6(this.context);
    _require = tmp;
    const revealed = this.state.revealed;
    const children = this.props.children;
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
      let tmp9 = _require;
      let mapped = Children1.map(children, (type) => {
        let validElement;
        const f109270 = (props) => {
          let Children;
          let cloneElement;
          let items;
          const tmp = validElement;
          if (validElement.isValidElement(props)) {
            const style = props.props.style;
            const _Array = Array;
            let flattenResult = style;
            if (Array.isArray(style)) {
              flattenResult = closure_2_4.flatten(style);
            }
            const obj = { children: Children.map(props.props.children, f109270), style: items, onPress: "r" };
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
          if ("Image" === type.type.displayName) {
            let tmp9;
            const tmp5 = revealed;
            if (!tmp5) {
              tmp9 = <_false style={placeholder.placeholder} />;
            }
            tmp2 = tmp9;
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
              mapped = Children.map(type, f109270);
            }
          }
          tmp9 = mapped;
        }
        return tmp2;
      });
      const items2 = [items1, ];
      let muted = self.props.muted;
      const LegacyText = require("native").LegacyText;
      const tmp8 = jsx;
      if (muted) {
        muted = tmp.muted;
      }
      let obj = { accessibilityRole: "button", style: items2, onPress: handleTap, children: mapped };
      items2[1] = muted;
      handleTap = undefined;
      if (!self.props.disableReveal) {
        handleTap = self.handleTap;
      }
      return tmp8(LegacyText, obj);
    }
  }
}
const prototype = Spoiler.prototype;
Spoiler.contextType = native.ThemeContext;
size = size_mod;
const result = size.fileFinishedImporting("modules/markup/native/Spoiler.tsx");

export default Spoiler;
