// Module ID: 11691
// Function ID: 90692
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 31, 27, 33, 4130, 689, 11692, 1212, 1392, 5085, 1832, 1273, 3842, 2]

// Module 11691 (_isNativeReflectConstruct)
import getActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import Button from "Button";
import set from "set";
import _inherits from "_inherits";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importAllResult from "result";

const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let obj = { SMALL: "small", MEDIUM: "medium", LARGE: "large" };
let closure_10 = [16, 16, 14, 14, 12];
obj = { icon: { justifyContent: "center", alignItems: "center", overflow: "hidden" }, iconSmall: { width: 40, height: 40, borderRadius: 20 }, iconMedium: { width: 80, height: 80, borderRadius: 40 } };
obj = { width: 128, height: 128, borderRadius: require("_createForOfIteratorHelperLoose").radii.round };
obj.iconLarge = obj;
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BRAND };
obj.textContainer = _createForOfIteratorHelperLoose;
obj.acronym = { color: require("_createForOfIteratorHelperLoose").unsafe_rawColors.WHITE };
let closure_11 = _createForOfIteratorHelperLoose.createLegacyClassComponentStyles(obj);
const tmp3 = ((PureComponent) => {
  class GuildInviteIcon {
    constructor() {
      self = this;
      tmp = outer1_3(this, GuildInviteIcon);
      obj = outer1_6(GuildInviteIcon);
      tmp2 = outer1_5;
      if (outer1_12()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_6;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_6(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(GuildInviteIcon, PureComponent);
  let items = [
    {
      key: "render",
      value() {
        let guild;
        let size;
        let style;
        let textScale;
        const tmp = outer1_11(this.context);
        const props = this.props;
        ({ style, guild } = props);
        let num = 10;
        ({ size, textScale } = props);
        let obj = GuildInviteIcon(outer1_2[10]);
        const getClassResult = obj.getClass(tmp, "icon", size);
        const intl = GuildInviteIcon(outer1_2[11]).intl;
        obj = { guildName: guild.name };
        const formatToPlainStringResult = intl.formatToPlainString(GuildInviteIcon(outer1_2[11]).t.xm6W9D, obj);
        if (null != guild.icon) {
          obj = {};
          ({ id: obj7.id, icon: obj7.icon } = guild);
          obj.canAnimate = true;
          obj.size = 128;
          const guildIconSource = outer1_1(outer1_2[12]).getGuildIconSource(obj);
          const obj1 = { accessibilityRole: "image", accessibilityLabel: formatToPlainStringResult };
          const items = [tmp.icon, getClassResult, style];
          obj1.style = items;
          obj1.source = guildIconSource;
          return outer1_9(outer1_1(outer1_2[13]), obj1);
        } else {
          const acronym = GuildInviteIcon(outer1_2[14]).getAcronym(guild.name);
          if (null != outer1_10[acronym.length - 1]) {
            num = tmp16;
          }
          const obj2 = { accessible: true, accessibilityRole: "image", accessibilityLabel: formatToPlainStringResult };
          const items1 = [, , , ];
          ({ textContainer: arr[0], icon: arr[1] } = tmp);
          items1[2] = getClassResult;
          items1[3] = style;
          obj2.style = items1;
          const result = num * textScale;
          const obj3 = { numberOfLines: 1 };
          const items2 = [tmp.acronym, ];
          const obj4 = { fontSize: result };
          items2[1] = obj4;
          obj3.style = items2;
          obj3.children = acronym;
          obj2.children = outer1_9(GuildInviteIcon(outer1_2[15]).LegacyText, obj3);
          return outer1_9(outer1_8, obj2);
        }
      }
    }
  ];
  return callback(GuildInviteIcon, items);
})(importAllResult.PureComponent);
tmp3.defaultProps = { size: obj.SMALL, textScale: 1 };
tmp3.Sizes = obj;
tmp3.contextType = require("ManaContext").ThemeContext;
let obj2 = { color: require("_createForOfIteratorHelperLoose").unsafe_rawColors.WHITE };
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/guild/native/GuildInviteIcon.tsx");

export default tmp3;
