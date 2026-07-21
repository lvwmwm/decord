// Module ID: 11680
// Function ID: 90618
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 11680 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
const View = arg1(dependencyMap[6]).View;
const jsx = arg1(dependencyMap[7]).jsx;
let obj = { SMALL: "small", MEDIUM: "medium", LARGE: "large" };
let closure_10 = [];
let obj1 = arg1(dependencyMap[8]);
obj = { icon: {}, iconSmall: {}, iconMedium: { "Bool(true)": "337f717407aa04f32bdedf504de7310b", "Bool(true)": "emoji", "Bool(true)": "png" } };
obj = { borderRadius: importDefault(dependencyMap[9]).radii.round };
obj.iconLarge = obj;
obj1 = { backgroundColor: importDefault(dependencyMap[9]).colors.BACKGROUND_BRAND };
obj.textContainer = obj1;
const importAllResult = importAll(dependencyMap[5]);
obj.acronym = { color: importDefault(dependencyMap[9]).unsafe_rawColors.WHITE };
let closure_11 = obj1.createLegacyClassComponentStyles(obj);
const tmp3 = (PureComponent) => {
  class GuildInviteIcon {
    constructor() {
      self = this;
      tmp = closure_3(this, GuildInviteIcon);
      obj = closure_6(GuildInviteIcon);
      tmp2 = closure_5;
      if (closure_12()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_6;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_6(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = GuildInviteIcon;
  callback2(GuildInviteIcon, PureComponent);
  const items = [
    {
      key: "render",
      value() {
        let guild;
        let size;
        let style;
        let textScale;
        const tmp = callback5(this.context);
        const props = this.props;
        ({ style, guild } = props);
        let num = 10;
        ({ size, textScale } = props);
        let obj = GuildInviteIcon(closure_2[10]);
        const getClassResult = obj.getClass(tmp, "icon", size);
        const intl = GuildInviteIcon(closure_2[11]).intl;
        obj = { guildName: guild.name };
        const formatToPlainStringResult = intl.formatToPlainString(GuildInviteIcon(closure_2[11]).t.xm6W9D, obj);
        if (null != guild.icon) {
          obj = {};
          ({ id: obj7.id, icon: obj7.icon } = guild);
          obj.canAnimate = true;
          obj.size = 128;
          const guildIconSource = callback(closure_2[12]).getGuildIconSource(obj);
          const obj1 = { accessibilityRole: "image", accessibilityLabel: formatToPlainStringResult };
          const items = [tmp.icon, getClassResult, style];
          obj1.style = items;
          obj1.source = guildIconSource;
          return callback4(callback(closure_2[13]), obj1);
        } else {
          const acronym = GuildInviteIcon(closure_2[14]).getAcronym(guild.name);
          if (null != closure_10[acronym.length - 1]) {
            num = tmp16;
          }
          const obj2 = { accessibilityLabel: formatToPlainStringResult };
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
          obj2.children = callback4(GuildInviteIcon(closure_2[15]).LegacyText, obj3);
          return callback4(closure_8, obj2);
        }
      }
    }
  ];
  return callback(GuildInviteIcon, items);
}(importAllResult.PureComponent);
tmp3.defaultProps = { size: obj.SMALL, textScale: 1 };
tmp3.Sizes = obj;
tmp3.contextType = arg1(dependencyMap[16]).ThemeContext;
const obj2 = { color: importDefault(dependencyMap[9]).unsafe_rawColors.WHITE };
const result = arg1(dependencyMap[17]).fileFinishedImporting("modules/guild/native/GuildInviteIcon.tsx");

export default tmp3;
