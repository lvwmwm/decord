// Module ID: 11405
// Function ID: 11406
// Name: GuildIconUploader
// Dependencies: [19, 17, 1205, 21, 5090, 587, 4787, 6164, 4929, 11406, 11407, 5086, 1126, 11408, 11409, 6189, 2]

// Module 11405 (GuildIconUploader)
import nativeDefault from "native" /* 587 */;
import intl3 from "intl" /* 1126 */;
import native from "native" /* 4787 */;
import shared from "shared" /* 4929 */;
import FastImageDefault from "FastImage" /* 6164 */;
import Pressables from "Pressables" /* 6189 */;
import AssetRegistryDefault from "AssetRegistry" /* 11408 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 11409 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ThemeStore from "ThemeStore" /* 1205 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5090 */;
import size_mod from "module_2" /* 2 */;

let c3;
let closure_4;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let size;
let size1;
({ View: c3, Image: closure_4 } = react_native);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let obj = { container: { width: 82, height: 82, marginTop: 4 }, guildPlaceholder: obj2, guildIcon: { width: 82, height: 82, borderRadius: 41 }, iconWrapperBorder: { position: "absolute", top: -8, right: -8, width: 40, height: 40, borderRadius: 20, justifyContent: "center", alignItems: "center" }, filledIconWrapper: size, emptyIconWrapper: size1, emptyGuildIcon: obj3, emptyGuildIconText: { textAlign: "center", lineHeight: 16, paddingTop: 4 }, uploadIcon: { height: 16, width: 16 } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
const createLegacyClassComponentStyles = createStyles.createLegacyClassComponentStyles;
size = { width: 32, height: 32, borderRadius: nativeDefault.radii.lg, justifyContent: "center", alignItems: "center", backgroundColor: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE };
size1 = { position: "absolute", top: -4, right: -4, width: 32, height: 32, borderRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.BACKGROUND_BRAND, justifyContent: "center", alignItems: "center" };
obj3 = { borderWidth: 2, borderStyle: "dashed", justifyContent: "center", alignItems: "center", borderColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
const metroImportAll = createLegacyClassComponentStyles(obj);
const PureComponent = react.PureComponent;
class GuildIconUploader extends PureComponent {
  renderIcon() {
    let items;
    let items1;
    let items2;
    let obj3;
    let str;
    let tmp7Result;
    const tmp = closure_8(this.context);
    const icon = this.props.icon;
    if (null != icon) {
      const obj2 = { style: items, source: obj3 };
      items = [, ];
      ({ guildIcon: arr2[0], guildPlaceholder: arr2[1] } = tmp);
      obj3 = { uri: icon };
      tmp7Result = metroRequire(FastImageDefault, obj2);
    } else {
      let tmp14Result;
      const obj4 = { style: items1, children: items2 };
      items1 = [, ];
      ({ guildIcon: arr3[0], emptyGuildIcon: arr3[1] } = tmp);
      const obj6 = shared;
      const tmp10 = React3;
      const tmp7 = metroImportDefault;
      const tmp8 = _false;
      if (obj6.isThemeDark(ThemeStore.theme)) {
        tmp14Result = tmp14(11406);
      } else {
        tmp14Result = tmp14(11407);
      }
      const obj = { source: tmp14Result };
      items2 = [metroRequire(tmp10, obj), ];
      const obj5 = { style: tmp.emptyGuildIconText, variant: "text-xs/bold", color: "text-default", children: str.toUpperCase() };
      const Text = tmp11(5086).Text;
      const intl = tmp11(1126).intl;
      str = intl.string(intl3.t["3UB9ad"]);
      items2[1] = metroRequire(Text, obj5);
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
    const tmp = closure_8(this.context);
    const props = this.props;
    const iconBackgroundColor = props.iconBackgroundColor;
    if (null != props.icon) {
      const obj2 = { style: items, children: metroRequire(_false, obj4) };
      items = [tmp.iconWrapperBorder, ];
      const obj3 = { backgroundColor: iconBackgroundColor };
      items[1] = obj3;
      obj4 = { style: tmp.filledIconWrapper, children: metroRequire(React3, obj5) };
      obj5 = { style: items1, source: AssetRegistryDefault };
      items1 = [tmp.uploadIcon, ];
      const obj6 = { tintColor: iconBackgroundColor };
      items1[1] = obj6;
      obj = obj2;
    } else {
      obj = { style: tmp.emptyIconWrapper, children: metroRequire(React3, obj7) };
      obj7 = { source: AssetRegistryDefault2 };
    }
    return metroRequire(_false, obj);
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
    const tmp = closure_8(this.context);
    ({ style, onPress, icon } = this.props);
    const PressableOpacity = Pressables.PressableOpacity;
    if (null != icon) {
      const intl2 = tmp3(1126).intl;
      stringResult = intl2.string(tmp3(1126).t.VATxfe);
    } else {
      const intl = tmp3(1126).intl;
      stringResult = intl.string(tmp3(1126).t["MsUY/S"]);
    }
    const obj = { accessibilityRole: "button", accessibilityLabel: stringResult, onPress, children: metroImportDefault(_false, obj2) };
    obj2 = { style: items, children: items1 };
    items = [tmp.container, style];
    items1 = [, ];
    const obj3 = { style: tmp.guildIcon, children: self.renderIcon() };
    items1[0] = metroRequire(_false, obj3);
    items1[1] = self.renderUpload();
    return metroRequire(PressableOpacity, obj);
  }
}
const prototype = GuildIconUploader.prototype;
GuildIconUploader.contextType = native.ThemeContext;
size = size_mod;
const result = size.fileFinishedImporting("modules/guild/native/GuildIconUploader.tsx");

export default GuildIconUploader;
