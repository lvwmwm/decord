// Module ID: 17557
// Function ID: 17558
// Name: IconLabelBlock
// Dependencies: [109, 19, 17, 21, 5092, 587, 4827, 1200, 5088, 9639, 6156, 4969, 2]

// Module 17557 (IconLabelBlock)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import native from "native" /* 1200 */;
import native2 from "native" /* 4827 */;
import shared from "shared" /* 4969 */;
import Text_Text from "Text/Text" /* 5088 */;
import FastImageDefault from "FastImage" /* 6156 */;
import IconUploaderDefault from "IconUploader" /* 9639 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5092 */;
import size from "module_2" /* 2 */;

let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let closure_3 = ["error"];
const View = react_native.View;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let obj = { wrapper: { alignItems: "center", paddingTop: 26, paddingBottom: 16 }, error: obj2, label: obj3, iconUploaderWrapper: { alignSelf: "stretch", alignItems: "center" }, text: { marginTop: 9 } };
obj2 = { fontSize: 12, textAlign: "center", alignSelf: "center", marginBottom: 10, color: nativeDefault.unsafe_rawColors.RED_400 };
const createLegacyClassComponentStyles = createStyles.createLegacyClassComponentStyles;
obj3 = { fontSize: 12, marginTop: 20, color: nativeDefault.colors.TEXT_SUBTLE };
const metroImportAll = createLegacyClassComponentStyles(obj);
const PureComponent = react.PureComponent;
class IconLabelBlock extends PureComponent {
  renderLabel() {
    let items;
    const label = this.props.label;
    let tmp3 = null;
    if (null != label) {
      const obj = { style: items, children: label };
      items = [tmp.label, tmp2];
      tmp3 = metroRequire(native.LegacyText, obj);
    }
    return tmp3;
  }
  renderText() {
    let items;
    const text = this.props.text;
    let tmp4 = null;
    if (null != text) {
      const obj = { variant: "heading-md/medium", color: "text-default", style: items, accessibilityRole: tmp3, children: text };
      items = [tmp.text, tmp2];
      tmp4 = metroRequire(Text_Text.Text, obj);
    }
    return tmp4;
  }
  renderIcon() {
    let darkSource;
    let errorProps;
    let iconProps;
    let items;
    let items1;
    let source;
    const tmp = closure_8(this.context);
    ({ iconProps, source, darkSource, errorProps } = this.props);
    if (null != iconProps) {
      const error = iconProps.error;
      const obj2 = { style: tmp.iconUploaderWrapper, children: items };
      const obj3 = {};
      const tmp12 = _objectWithoutProperties(iconProps, closure_3);
      const tmp18 = IconUploaderDefault;
      const merged = Object.assign(tmp12);
      items = [metroRequire(tmp18, obj3), ];
      let tmp15Result = null;
      const tmp13 = metroImportDefault;
      const tmp14 = View;
      const tmp15 = metroRequire;
      if (null != error) {
        const obj4 = { style: items1, children: error };
        items1 = [tmp.error, tmp4];
        const LegacyText = native.LegacyText;
        const merged1 = Object.assign(errorProps);
        tmp15Result = tmp15(LegacyText, obj4);
      }
      items[1] = tmp15Result;
      return tmp13(tmp14, obj2);
    } else {
      const tmp5 = metroRequire;
      const tmp8 = FastImageDefault;
      if (null == source) {
        const obj = shared;
        if (obj.isThemeLight(this.context.theme)) {
          darkSource = tmp2;
        }
        source = darkSource;
      }
      const obj5 = { source, style: tmp3, resizeMode: "contain" };
      return tmp5(tmp8, obj5);
    }
  }
  render() {
    let items;
    let items1;
    const obj = { style: items, children: items1 };
    items = [closure_8(this.context).wrapper, this.props.wrapperStyles];
    items1 = [this.renderIcon(), this.props.children, this.renderLabel(), this.renderText()];
    return metroImportDefault(View, obj);
  }
}
const prototype = IconLabelBlock.prototype;
IconLabelBlock.contextType = native2.ThemeContext;
const result = size.fileFinishedImporting("components_native/common/IconLabelBlock.tsx");

export default IconLabelBlock;
