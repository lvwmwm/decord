// Module ID: 15410
// Function ID: 117592
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 15410 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_3 = [null];
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
let closure_6 = importDefault(dependencyMap[2]);
let closure_7 = importDefault(dependencyMap[3]);
let closure_8 = importDefault(dependencyMap[4]);
let closure_9 = importDefault(dependencyMap[5]);
const importAllResult = importAll(dependencyMap[6]);
({ View: closure_10, Image: closure_11 } = arg1(dependencyMap[7]));
const tmp3 = arg1(dependencyMap[7]);
({ jsx: closure_12, jsxs: closure_13 } = arg1(dependencyMap[8]));
let obj = arg1(dependencyMap[9]);
obj = { wrapper: { "Null": "<string:815617>", "Null": "<string:3932160>", "Null": "<string:1627455488>" } };
obj = { color: importDefault(dependencyMap[10]).unsafe_rawColors.RED_400 };
obj.error = obj;
const obj1 = { "Bool(false)": null, "Bool(false)": "\u{1F595}", color: importDefault(dependencyMap[10]).colors.TEXT_SUBTLE };
obj.label = obj1;
obj.iconUploaderWrapper = { 663976015: "handleHeaderLayout", 664037462: "gay-Latn-ID" };
obj.text = { marginTop: 9 };
let closure_14 = obj.createLegacyClassComponentStyles(obj);
const tmp5 = (PureComponent) => {
  class IconLabelBlock {
    constructor() {
      self = this;
      tmp = closure_5(this, IconLabelBlock);
      obj = closure_8(IconLabelBlock);
      tmp2 = closure_7;
      if (closure_15()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_8;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_8(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = IconLabelBlock;
  callback2(IconLabelBlock, PureComponent);
  let obj = {
    key: "renderLabel",
    value() {
      const label = this.props.label;
      let tmp3 = null;
      if (null != label) {
        const obj = {};
        const items = [tmp.label, tmp2];
        obj.style = items;
        obj.children = label;
        tmp3 = callback5(IconLabelBlock(closure_2[11]).LegacyText, obj);
      }
      return tmp3;
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "renderText",
    value() {
      const text = this.props.text;
      let tmp4 = null;
      if (null != text) {
        const obj = { hasMaxConnections: true, isBoostOnlySubscription: "/assets/images/native/icons/voice_calls/dark_theme" };
        const items = [tmp.text, tmp2];
        obj.style = items;
        obj.accessibilityRole = tmp3;
        obj.children = text;
        tmp4 = callback5(IconLabelBlock(closure_2[12]).Text, obj);
      }
      return tmp4;
    }
  };
  items[1] = obj;
  obj = {
    key: "renderIcon",
    value() {
      let darkSource;
      let errorProps;
      let iconProps;
      let source;
      const tmp = callback7(this.context);
      ({ iconProps, source, darkSource, errorProps } = this.props);
      if (null != iconProps) {
        const error = iconProps.error;
        let obj = { style: tmp.iconUploaderWrapper };
        obj = {};
        const tmp11 = callback2(iconProps, closure_3);
        const tmp12 = closure_13;
        const tmp13 = closure_10;
        const merged = Object.assign(tmp11);
        const items = [callback5(callback(closure_2[13]), obj), ];
        let tmp20 = null;
        if (null != error) {
          let obj1 = {};
          const items1 = [tmp.error, tmp4];
          obj1.style = items1;
          const merged1 = Object.assign(errorProps);
          obj1["children"] = error;
          tmp20 = callback5(IconLabelBlock(closure_2[11]).LegacyText, obj1);
        }
        items[1] = tmp20;
        obj.children = items;
        return tmp12(tmp13, obj);
      } else {
        obj = {};
        if (null == source) {
          obj1 = IconLabelBlock(closure_2[14]);
          if (obj1.isThemeLight(this.context.theme)) {
            darkSource = tmp2;
          }
          source = darkSource;
        }
        obj.source = source;
        obj.style = tmp3;
        obj.resizeMode = "contain";
        return callback5(closure_11, obj);
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "render",
    value() {
      const obj = {};
      const items = [callback7(this.context).wrapper, this.props.wrapperStyles];
      obj.style = items;
      const items1 = [this.renderIcon(), this.props.children, this.renderLabel(), this.renderText()];
      obj.children = items1;
      return callback6(closure_10, obj);
    }
  };
  return callback(IconLabelBlock, items);
}(importAllResult.PureComponent);
tmp5.contextType = arg1(dependencyMap[15]).ThemeContext;
const tmp4 = arg1(dependencyMap[8]);
const result = arg1(dependencyMap[16]).fileFinishedImporting("components_native/common/IconLabelBlock.tsx");

export default tmp5;
