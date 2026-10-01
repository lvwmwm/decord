// Module ID: 12156
// Function ID: 12157
// Name: GuildInviteIcon
// Dependencies: [19, 17, 21, 4836, 576, 4540, 12157, 1115, 1397, 5899, 2011, 1177, 2]

// Module 12156 (GuildInviteIcon)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import intl2 from "intl" /* 1115 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1397 */;
import StringUtils from "StringUtils" /* 2011 */;
import native from "native" /* 4540 */;
import FastImageDefault from "FastImage" /* 5899 */;
import StylesheetUtils from "StylesheetUtils" /* 12157 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let obj3;
let obj4;
let size;
const View = react_native.View;
const jsx = Fragment.jsx;
let obj = { SMALL: "small", MEDIUM: "medium", LARGE: "large" };
const hasOwnProperty = [16, 16, 14, 14, 12];
let obj2 = { icon: { justifyContent: "center", alignItems: "center", overflow: "hidden" }, iconSmall: { width: 40, height: 40, borderRadius: 20 }, iconMedium: { width: 80, height: 80, borderRadius: 40 }, iconLarge: size, textContainer: obj3, acronym: obj4 };
size = { width: 128, height: 128, borderRadius: nativeDefault.radii.round };
const createLegacyClassComponentStyles = createStyles.createLegacyClassComponentStyles;
obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
obj4 = { color: nativeDefault.unsafe_rawColors.WHITE };
const metroRequire = createLegacyClassComponentStyles(obj2);
const PureComponent = react.PureComponent;
class GuildInviteIcon extends PureComponent {
  render() {
    let guild;
    let style;
    let textScale;
    const tmp = closure_6(this.context);
    const props = this.props;
    ({ style, guild } = props);
    ({ size, textScale } = props);
    const obj = StylesheetUtils;
    const getClassResult = obj.getClass(tmp, "icon", size);
    const intl = intl2.intl;
    const obj2 = { guildName: guild.name };
    const formatToPlainStringResult = intl.formatToPlainString(intl2.t.xm6W9D, obj2);
    if (null != guild.icon) {
      const obj3 = { id: null, icon: null, canAnimate: true, size: 128 };
      ({ id: obj7.id, icon: obj7.icon } = guild);
      const obj6 = AvatarUtilsDefault;
      const guildIconSource = obj6.getGuildIconSource(obj3);
      const items = [tmp.icon, getClassResult, style];
      return jsx(FastImageDefault, { accessibilityRole: "image", accessibilityLabel: formatToPlainStringResult, style: items, source: guildIconSource });
    } else {
      const tmp2Result = StringUtils;
      const acronym = tmp2Result.getAcronym(guild.name);
      let num = closure_5[acronym.length - 1];
      if (num == null) {
        num = 10;
      }
      const items1 = [, , , ];
      ({ textContainer: arr[0], icon: arr[1] } = tmp);
      items1[2] = getClassResult;
      items1[3] = style;
      const result = num * textScale;
      const items2 = [tmp.acronym, ];
      const obj9 = { fontSize: result };
      items2[1] = obj9;
      return <View accessible accessibilityRole="image" accessibilityLabel={formatToPlainStringResult} style={items1}>{null}</View>;
    }
  }
}
const prototype = GuildInviteIcon.prototype;
GuildInviteIcon.defaultProps = { size: obj.SMALL, textScale: 1 };
GuildInviteIcon.Sizes = obj;
GuildInviteIcon.contextType = native.ThemeContext;
size = size_mod;
let result = size.fileFinishedImporting("modules/guild/native/GuildInviteIcon.tsx");

export default GuildInviteIcon;
