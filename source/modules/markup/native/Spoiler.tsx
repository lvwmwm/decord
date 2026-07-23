// Module ID: 10267
// Function ID: 79324
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 31, 27, 653, 10260, 33, 4130, 477, 689, 1273, 3842, 2]

// Module 10267 (_isNativeReflectConstruct)
import getActivityIndicator from "get ActivityIndicator";
import ME from "ME";
import closure_4 from "set";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import importAllResult from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import { EMOJI_CHAT_SIZE } from "ME";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import set from "set";
import set from "_possibleConstructorReturn";

let closure_8;
let closure_9;
const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function recursiveTextExtraction(arg0, arg1) {
  let closure_0 = arg1;
  const Children = importAllResult.Children;
  return Children.map(arg0, (props) => {
    if (outer1_7.isValidElement(props)) {
      const style = props.props.style;
      const _Array = Array;
      let flattenResult = style;
      if (Array.isArray(style)) {
        flattenResult = outer1_9.flatten(style);
      }
      const obj = { children: outer1_13(props.props.children, spoiler) };
      const items = [flattenResult, spoiler.spoiler];
      obj.style = items;
      obj.onPress = undefined;
      return outer1_7.cloneElement(props, obj);
    } else {
      return props;
    }
  });
}
({ View: closure_8, StyleSheet: closure_9 } = get_ActivityIndicator);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = {};
let str = "transparent";
if (set.isAndroid()) {
  str = "rgba(0,0,0,0.0019607844)";
}
_createForOfIteratorHelperLoose.color = str;
_createForOfIteratorHelperLoose.backgroundColor = require("_createForOfIteratorHelperLoose").colors.SPOILER_HIDDEN_BACKGROUND;
_createForOfIteratorHelperLoose.spoiler = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.placeholder = { width: EMOJI_CHAT_SIZE, height: EMOJI_CHAT_SIZE, backgroundColor: require("_createForOfIteratorHelperLoose").colors.SPOILER_HIDDEN_BACKGROUND };
const obj1 = { width: EMOJI_CHAT_SIZE, height: EMOJI_CHAT_SIZE, backgroundColor: require("_createForOfIteratorHelperLoose").colors.SPOILER_HIDDEN_BACKGROUND };
_createForOfIteratorHelperLoose.spoilerRevealed = { color: require("_createForOfIteratorHelperLoose").colors.TEXT_DEFAULT, backgroundColor: require("_createForOfIteratorHelperLoose").colors.SPOILER_REVEALED_BACKGROUND };
_createForOfIteratorHelperLoose.muted = { opacity: require("hairlineWidth").MUTED_OPACITY_CONTENT };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createLegacyClassComponentStyles(_createForOfIteratorHelperLoose);
const tmp4 = ((PureComponent) => {
  class Spoiler {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = outer1_2(this, apply);
      items1 = [...items];
      obj = outer1_5(apply);
      tmp2 = outer1_4;
      if (outer1_12()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = outer1_5;
        constructResult = Reflect.construct(obj, items1, outer1_5(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      apply = tmp2Result;
      tmp2Result.state = { revealed: false };
      tmp2Result.handleTap = () => {
        let disableReveal = tmp2Result.state.revealed;
        if (!disableReveal) {
          disableReveal = tmp2Result.props.disableReveal;
        }
        if (!disableReveal) {
          const obj = { revealed: !tmp2Result.state.revealed };
          tmp2Result.setState(obj);
        }
      };
      return tmp2Result;
    }
  }
  callback2(Spoiler, PureComponent);
  let items = [
    {
      key: "render",
      value() {
        const self = this;
        const tmp = outer1_11(this.context);
        const Spoiler = tmp;
        const revealed = this.state.revealed;
        const children = this.props.children;
        if (revealed) {
          const items = [tmp.spoilerRevealed, tmp3];
          let items1 = items;
        } else {
          items1 = [tmp.spoiler, tmp2];
        }
        let Children = outer1_7.Children;
        if (0 === Children.count(children)) {
          return null;
        } else {
          Children = outer1_7.Children;
          const mapped = Children.map(children, (type) => {
            if (!outer2_7.isValidElement(type)) {
              return type;
            } else {
              if ("Image" === type.type.displayName) {
                if (!revealed) {
                  const obj = { style: tmp.placeholder };
                  let tmp7 = outer2_10(outer2_8, obj);
                }
              } else {
                const props = type.props;
                let source;
                if (null != props) {
                  source = props.source;
                }
              }
              let tmp9 = type;
              if (null != type.props) {
                tmp9 = type;
                if (!revealed) {
                  tmp9 = outer2_13(type, tmp);
                }
              }
              tmp7 = tmp9;
            }
          });
          let obj = { accessibilityRole: "button" };
          const items2 = [items1, ];
          let muted = self.props.muted;
          if (muted) {
            muted = tmp.muted;
          }
          items2[1] = muted;
          obj.style = items2;
          let handleTap;
          if (!self.props.disableReveal) {
            handleTap = self.handleTap;
          }
          obj.onPress = handleTap;
          obj.children = mapped;
          return outer1_10(Spoiler(outer1_1[13]).LegacyText, obj);
        }
      }
    }
  ];
  return callback(Spoiler, items);
})(importAllResult.PureComponent);
tmp4.contextType = require("ManaContext").ThemeContext;
let result = set.fileFinishedImporting("modules/markup/native/Spoiler.tsx");

export default tmp4;
