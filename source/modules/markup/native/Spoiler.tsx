// Module ID: 10254
// Function ID: 79232
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 10254 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function recursiveTextExtraction(arg0, arg1) {
  const Children = importAllResult.Children;
  return Children.map(arg0, (props) => {
    if (closure_7.isValidElement(props)) {
      const style = props.props.style;
      const _Array = Array;
      let flattenResult = style;
      if (Array.isArray(style)) {
        flattenResult = closure_9.flatten(style);
      }
      const obj = { children: callback(props.props.children, arg1) };
      const items = [flattenResult, arg1.spoiler];
      obj.style = items;
      obj.onPress = undefined;
      return closure_7.cloneElement(props, obj);
    } else {
      return props;
    }
  });
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
const importAllResult = importAll(dependencyMap[5]);
({ View: closure_8, StyleSheet: closure_9 } = arg1(dependencyMap[6]));
const EMOJI_CHAT_SIZE = arg1(dependencyMap[7]).EMOJI_CHAT_SIZE;
const jsx = arg1(dependencyMap[9]).jsx;
let obj = arg1(dependencyMap[10]);
obj = {};
obj = {};
const tmp3 = arg1(dependencyMap[6]);
let str = "transparent";
if (obj4.isAndroid()) {
  str = "rgba(0,0,0,0.0019607844)";
}
obj.color = str;
obj.backgroundColor = importDefault(dependencyMap[12]).colors.SPOILER_HIDDEN_BACKGROUND;
obj.spoiler = obj;
const obj4 = arg1(dependencyMap[11]);
obj.placeholder = { width: EMOJI_CHAT_SIZE, height: EMOJI_CHAT_SIZE, backgroundColor: importDefault(dependencyMap[12]).colors.SPOILER_HIDDEN_BACKGROUND };
const obj1 = { width: EMOJI_CHAT_SIZE, height: EMOJI_CHAT_SIZE, backgroundColor: importDefault(dependencyMap[12]).colors.SPOILER_HIDDEN_BACKGROUND };
obj.spoilerRevealed = { color: importDefault(dependencyMap[12]).colors.TEXT_DEFAULT, backgroundColor: importDefault(dependencyMap[12]).colors.SPOILER_REVEALED_BACKGROUND };
obj.muted = { opacity: arg1(dependencyMap[8]).MUTED_OPACITY_CONTENT };
let closure_11 = obj.createLegacyClassComponentStyles(obj);
const tmp4 = (PureComponent) => {
  class Spoiler {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_2(this, Spoiler);
      items1 = [...items];
      obj = closure_5(Spoiler);
      tmp2 = closure_4;
      if (closure_12()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_5;
        constructResult = Reflect.construct(obj, items1, closure_5(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      Spoiler = tmp2Result;
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
  const arg1 = Spoiler;
  callback2(Spoiler, PureComponent);
  const items = [
    {
      key: "render",
      value() {
        const self = this;
        const tmp = callback3(this.context);
        const Spoiler = tmp;
        const revealed = this.state.revealed;
        const children = this.props.children;
        if (revealed) {
          const items = [tmp.spoilerRevealed, tmp3];
          let items1 = items;
        } else {
          items1 = [tmp.spoiler, tmp2];
        }
        let Children = React.Children;
        if (0 === Children.count(children)) {
          return null;
        } else {
          Children = React.Children;
          const mapped = Children.map(children, (type) => {
            if (!validElement.isValidElement(type)) {
              return type;
            } else {
              if ("Image" === type.type.displayName) {
                if (!revealed) {
                  const obj = { style: tmp.placeholder };
                  let tmp7 = callback(closure_8, obj);
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
                  tmp9 = callback2(type, tmp);
                }
              }
              tmp7 = tmp9;
            }
          });
          const obj = { accessibilityRole: "button" };
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
          return closure_10(Spoiler(revealed[13]).LegacyText, obj);
        }
      }
    }
  ];
  return callback(Spoiler, items);
}(importAllResult.PureComponent);
tmp4.contextType = arg1(dependencyMap[14]).ThemeContext;
const obj2 = { color: importDefault(dependencyMap[12]).colors.TEXT_DEFAULT, backgroundColor: importDefault(dependencyMap[12]).colors.SPOILER_REVEALED_BACKGROUND };
const result = arg1(dependencyMap[15]).fileFinishedImporting("modules/markup/native/Spoiler.tsx");

export default tmp4;
