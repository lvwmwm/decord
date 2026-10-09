// Module ID: 11312
// Function ID: 11313
// Name: GuildIconUploader
// Dependencies: [19, 17, 1205, 21, 5091, 587, 4788, 6163, 4930, 11313, 11314, 5087, 1126, 11315, 11316, 6191, 2]

// Module 11312 (GuildIconUploader)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import intl3 from "intl" /* 1126 */;
import native from "native" /* 4788 */;
import shared from "shared" /* 4930 */;
import FastImageDefault from "FastImage" /* 6163 */;
import Pressables from "Pressables" /* 6191 */;
import AssetRegistryDefault from "AssetRegistry" /* 11315 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 11316 */;
import react from "react" /* 19 */;
import ThemeStore from "ThemeStore" /* 1205 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5091 */;
import size_mod from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let size;
let size1;
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let obj = { container: { width: 82, height: 82, marginTop: 4 }, guildPlaceholder: obj2, guildIcon: { width: 82, height: 82, borderRadius: 41 }, iconWrapperBorder: { position: "absolute", top: -8, right: -8, width: 40, height: 40, borderRadius: 20, justifyContent: "center", alignItems: "center" }, filledIconWrapper: size, emptyIconWrapper: size1, emptyGuildIcon: obj3, emptyGuildIconText: { textAlign: "center", lineHeight: 16, paddingTop: 4 }, uploadIcon: { height: 16, width: 16 } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
const createLegacyClassComponentStyles = createStyles.createLegacyClassComponentStyles;
size = { width: 32, height: 32, borderRadius: nativeDefault.radii.lg, justifyContent: "center", alignItems: "center", backgroundColor: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE };
size1 = { position: "absolute", top: -4, right: -4, width: 32, height: 32, borderRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.BACKGROUND_BRAND, justifyContent: "center", alignItems: "center" };
obj3 = { borderWidth: 2, borderStyle: "dashed", justifyContent: "center", alignItems: "center", borderColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
const metroImportDefault = createLegacyClassComponentStyles(obj);
const PureComponent = react.PureComponent;
class GuildIconUploader extends PureComponent {
  renderIcon() {
    let items;
    let items1;
    let items2;
    let obj3;
    let str;
    let tmp7Result;
    const tmp = closure_7(this.context);
    const icon = this.props.icon;
    if (null != icon) {
      const obj2 = { style: items, source: obj3 };
      items = [, ];
      ({ guildIcon: arr2[0], guildPlaceholder: arr2[1] } = tmp);
      obj3 = { uri: icon };
      tmp7Result = hasOwnProperty(FastImageDefault, obj2);
    } else {
      let tmp10Result;
      const obj4 = { style: items1, children: items2 };
      items1 = [, ];
      ({ guildIcon: arr3[0], emptyGuildIcon: arr3[1] } = tmp);
      const tmp12 = FastImageDefault;
      const obj6 = shared;
      const tmp7 = metroRequire;
      const tmp8 = View;
      if (obj6.isThemeDark(ThemeStore.theme)) {
        tmp10Result = tmp10(11313);
      } else {
        tmp10Result = tmp10(11314);
      }
      const obj = { source: tmp10Result };
      items2 = [hasOwnProperty(tmp12, obj), ];
      const obj5 = { style: tmp.emptyGuildIconText, variant: "text-xs/bold", color: "text-default", children: str.toUpperCase() };
      const Text = tmp13(5087).Text;
      const intl = tmp13(1126).intl;
      str = intl.string(intl3.t["3UB9ad"]);
      items2[1] = hasOwnProperty(Text, obj5);
      tmp7Result = tmp7(tmp8, obj4);
    }
    return tmp7Result;
  }
  renderUpload() {
    let items;
    let items1;
    let obj;
    let obj4;
    let obj5;
    let obj7;
    let tmp6;
    let tmp9;
    const tmp = closure_7(this.context);
    const props = this.props;
    const iconBackgroundColor = props.iconBackgroundColor;
    if (null != props.icon) {
      const obj2 = { style: items, children: hasOwnProperty(View, obj4) };
      items = [tmp.iconWrapperBorder, ];
      const obj3 = { backgroundColor: iconBackgroundColor };
      items[1] = obj3;
      obj4 = { style: tmp.filledIconWrapper, children: hasOwnProperty(tmp9, obj5) };
      obj5 = { style: items1, source: AssetRegistryDefault };
      items1 = [tmp.uploadIcon, ];
      const obj6 = { tintColor: iconBackgroundColor };
      items1[1] = obj6;
      obj = obj2;
      tmp9 = FastImageDefault;
    } else {
      obj = { style: tmp.emptyIconWrapper, children: hasOwnProperty(tmp6, obj7) };
      obj7 = { source: AssetRegistryDefault2 };
      tmp6 = FastImageDefault;
    }
    return hasOwnProperty(View, obj);
  }
  render() {
    let icon;
    let items;
    let items1;
    let obj2;
    let onPress;
    let stringResult;
    let style;
    const self = this;
    const tmp = closure_7(this.context);
    ({ style, onPress, icon } = this.props);
    const PressableOpacity = Pressables.PressableOpacity;
    if (null != icon) {
      const intl2 = tmp3(1126).intl;
      stringResult = intl2.string(tmp3(1126).t.VATxfe);
    } else {
      const intl = tmp3(1126).intl;
      stringResult = intl.string(tmp3(1126).t["MsUY/S"]);
    }
    const obj = { accessibilityRole: "button", accessibilityLabel: stringResult, onPress, children: metroRequire(View, obj2) };
    obj2 = { style: items, children: items1 };
    items = [tmp.container, style];
    items1 = [, ];
    const obj3 = { style: tmp.guildIcon, children: self.renderIcon() };
    items1[0] = hasOwnProperty(View, obj3);
    items1[1] = self.renderUpload();
    return hasOwnProperty(PressableOpacity, obj);
  }
}
const prototype = GuildIconUploader.prototype;
GuildIconUploader.contextType = native.ThemeContext;
size = size_mod;
const result = size.fileFinishedImporting("modules/guild/native/GuildIconUploader.tsx");

export default GuildIconUploader;
