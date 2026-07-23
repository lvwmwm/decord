// Module ID: 15535
// Function ID: 119809
// Name: _isNativeReflectConstruct
// Dependencies: [29, 6, 7, 15, 17, 18, 31, 27, 33, 4130, 689, 1273, 4126, 10164, 3976, 3842, 2]

// Module 15535 (_isNativeReflectConstruct)
import _objectWithoutProperties from "_objectWithoutProperties";
import result from "result";
import getActivityIndicator from "get ActivityIndicator";
import ManaContext from "ManaContext";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importAllResult from "result";

let closure_10;
let closure_11;
let closure_12;
let closure_13;
const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_3 = ["error"];
({ View: closure_10, Image: closure_11 } = get_ActivityIndicator);
({ jsx: closure_12, jsxs: closure_13 } = jsxProd);
_createForOfIteratorHelperLoose = { wrapper: { alignItems: "center", paddingTop: 26, paddingBottom: 16 } };
_createForOfIteratorHelperLoose = { fontSize: 12, textAlign: "center", alignSelf: "center", marginBottom: 10, color: require("_createForOfIteratorHelperLoose").unsafe_rawColors.RED_400 };
_createForOfIteratorHelperLoose.error = _createForOfIteratorHelperLoose;
let obj1 = { fontSize: 12, marginTop: 20, color: require("_createForOfIteratorHelperLoose").colors.TEXT_SUBTLE };
_createForOfIteratorHelperLoose.label = obj1;
_createForOfIteratorHelperLoose.iconUploaderWrapper = { alignSelf: "stretch", alignItems: "center" };
_createForOfIteratorHelperLoose.text = { marginTop: 9 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createLegacyClassComponentStyles(_createForOfIteratorHelperLoose);
const tmp5 = ((PureComponent) => {
  class IconLabelBlock {
    constructor() {
      self = this;
      tmp = outer1_5(this, IconLabelBlock);
      obj = outer1_8(IconLabelBlock);
      tmp2 = outer1_7;
      if (outer1_15()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_8;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_8(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
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
        tmp3 = outer1_12(IconLabelBlock(outer1_2[11]).LegacyText, obj);
      }
      return tmp3;
    }
  };
  let items = [obj, , , ];
  obj = {
    key: "renderText",
    value() {
      const text = this.props.text;
      let tmp4 = null;
      if (null != text) {
        const obj = { variant: "heading-md/medium", color: "text-default" };
        const items = [tmp.text, tmp2];
        obj.style = items;
        obj.accessibilityRole = tmp3;
        obj.children = text;
        tmp4 = outer1_12(IconLabelBlock(outer1_2[12]).Text, obj);
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
      const tmp = outer1_14(this.context);
      ({ iconProps, source, darkSource, errorProps } = this.props);
      if (null != iconProps) {
        const error = iconProps.error;
        let obj = { style: tmp.iconUploaderWrapper };
        obj = {};
        const tmp11 = outer1_4(iconProps, outer1_3);
        const tmp12 = outer1_13;
        const tmp13 = outer1_10;
        const merged = Object.assign(tmp11);
        const items = [outer1_12(outer1_1(outer1_2[13]), obj), ];
        let tmp20 = null;
        if (null != error) {
          let obj1 = {};
          const items1 = [tmp.error, tmp4];
          obj1.style = items1;
          const merged1 = Object.assign(errorProps);
          obj1["children"] = error;
          tmp20 = outer1_12(IconLabelBlock(outer1_2[11]).LegacyText, obj1);
        }
        items[1] = tmp20;
        obj.children = items;
        return tmp12(tmp13, obj);
      } else {
        obj = {};
        if (null == source) {
          obj1 = IconLabelBlock(outer1_2[14]);
          if (obj1.isThemeLight(this.context.theme)) {
            darkSource = tmp2;
          }
          source = darkSource;
        }
        obj.source = source;
        obj.style = tmp3;
        obj.resizeMode = "contain";
        return outer1_12(outer1_11, obj);
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "render",
    value() {
      const obj = {};
      const items = [outer1_14(this.context).wrapper, this.props.wrapperStyles];
      obj.style = items;
      const items1 = [this.renderIcon(), this.props.children, this.renderLabel(), this.renderText()];
      obj.children = items1;
      return outer1_13(outer1_10, obj);
    }
  };
  return callback(IconLabelBlock, items);
})(require("result").PureComponent);
tmp5.contextType = require("ManaContext").ThemeContext;
let result = require("_defineProperties").fileFinishedImporting("components_native/common/IconLabelBlock.tsx");

export default tmp5;
