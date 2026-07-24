// Module ID: 9437
// Function ID: 73474
// Name: ExpressionGuildDetails
// Dependencies: [31, 27, 5514, 33, 4130, 689, 5513, 1392, 5085, 4126, 1212, 4660, 9436, 9207, 1273, 2]

// Module 9437 (ExpressionGuildDetails)
import "result";
import { View } from "get ActivityIndicator";
import { ExpressionSourceGuildRecord as closure_4 } from "_callSuper";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
let closure_7;
const require = arg1;
({ jsx: closure_5, Fragment: closure_6, jsxs: closure_7 } = jsxProd);
_createForOfIteratorHelperLoose = { guildDetailsContainer: { flexDirection: "column" }, guildDetailsContent: { flexDirection: "row", marginTop: 8, alignItems: "center" } };
_createForOfIteratorHelperLoose = { width: 40, height: 40, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, marginRight: 12 };
_createForOfIteratorHelperLoose.guildIcon = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.guildNameAndOnlineMembers = { flexDirection: "column" };
_createForOfIteratorHelperLoose.guildNameWrapper = { flexDirection: "row", alignItems: "center", marginRight: 32 };
_createForOfIteratorHelperLoose.guildPartnerIcon = { marginRight: 8 };
_createForOfIteratorHelperLoose.guildDescriptionSection = { flexDirection: "row", alignItems: "center", marginTop: 4 };
let obj1 = { width: 4, height: 4, borderRadius: require("_createForOfIteratorHelperLoose").radii.xs, marginRight: 8, marginLeft: 8, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_MUTED };
_createForOfIteratorHelperLoose.dotSeparator = obj1;
let obj2 = { borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, borderColor: require("_createForOfIteratorHelperLoose").colors.BORDER_STRONG, borderWidth: 1, paddingHorizontal: 4, paddingBottom: 2 };
_createForOfIteratorHelperLoose.joinGuildButton = obj2;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
class ExpressionGuildDetails {
  constructor(arg0) {
    guild = global.guild;
    hasJoinedGuild = global.hasJoinedGuild;
    ({ title, showingJoinGuildCta } = global);
    tmp = c8();
    fromGuildType = c4.createFromGuildType(guild);
    isDiscoverableResult = fromGuildType.isDiscoverable();
    if (!isDiscoverableResult) {
      if (!hasJoinedGuild) {
        tmp3 = closure_1;
        tmp4 = closure_2;
        num = 7;
        obj2 = require("getAvatarURL");
        obj = {};
        ({ id: obj3.id, icon: obj3.icon } = guild);
        flag = true;
        obj.canAnimate = true;
        num2 = 32;
        obj.size = 32;
        tmp6 = jsx;
        num3 = 8;
        guildIconSource = obj2.getGuildIconSource(obj);
        obj1 = {};
        obj1.style = tmp.guildIcon;
        obj1.source = guildIconSource;
        tmp7 = jsx(require("preload"), obj1);
      }
      tmp9 = jsxs;
      tmp10 = View;
      obj2 = {};
      obj2.style = tmp.guildDetailsContainer;
      tmp12 = guild;
      tmp13 = closure_2;
      obj16 = 9;
      tmp11 = jsx;
      obj3 = { variant: "eyebrow", color: "text-default" };
      obj3.children = title;
      items = [, ];
      items[0] = jsx(require("Text").Text, obj3);
      obj4 = {};
      obj4.style = tmp.guildDetailsContent;
      items1 = [, ];
      items1[0] = tmp7;
      obj5 = {};
      obj5.style = tmp.guildNameAndOnlineMembers;
      obj6 = {};
      obj6.style = tmp.guildNameWrapper;
      tmp14 = closure_1;
      num4 = 13;
      obj7 = {};
      obj7.guild = guild;
      obj7.style = tmp.guildPartnerIcon;
      num5 = 14;
      tmp15 = require("checkGuildForFeature");
      obj7.size = require("Button").Icon.Sizes.REFRESH_SMALL_16;
      flag2 = true;
      obj7.disableColor = true;
      items2 = [, ];
      items2[0] = jsx(tmp15, obj7);
      obj8 = { variant: "text-md/bold", color: "mobile-text-heading-primary" };
      obj8.children = guild.name;
      items2[1] = jsx(require("Text").Text, obj8);
      obj6.children = items2;
      items3 = [, ];
      items3[0] = jsxs(View, obj6);
      obj9 = {};
      obj9.style = tmp.guildDescriptionSection;
      if (isDiscoverableResult) {
        tmp16 = null;
        if (null != fromGuildType.presenceCount) {
          obj10 = {};
          tmp22 = jsx;
          tmp23 = guild;
          tmp24 = closure_2;
          tmp20 = jsxs;
          tmp21 = Fragment;
          obj11 = { variant: "text-xs/medium", color: "text-default" };
          num7 = 10;
          intl2 = require("getSystemLocale").intl;
          obj12 = {};
          obj12.membersOnline = fromGuildType.presenceCount;
          obj11.children = intl2.format(require("getSystemLocale").t["LC+S+m"], obj12);
          items4 = [, , ];
          items4[0] = jsx(guild(closure_2[obj16]).Text, obj11);
          tmp25 = View;
          obj13 = {};
          obj13.style = tmp.dotSeparator;
          items4[1] = jsx(View, obj13);
          if (!hasJoinedGuild) {
            if (!showingJoinGuildCta) {
              tmp26 = jsx;
              tmp27 = guild;
              tmp28 = closure_2;
              num8 = 11;
              obj14 = {};
              obj14.style = tmp.joinGuildButton;
              obj14.onPress = function onPress() {
                return guild(outer1_2[12]).handleJoinGuild(guild.id);
              };
              obj15 = { variant: "text-xs/medium", color: "text-default" };
              intl3 = require("getSystemLocale").intl;
              obj15.children = intl3.string(require("getSystemLocale").t.riu2R5);
              obj14.children = jsx(guild(closure_2[obj16]).Text, obj15);
              tmp29 = jsx(require("PressableBase").PressableOpacity, obj14);
            }
            items4[2] = tmp29;
            obj10.children = items4;
            tmp20Result = tmp20(tmp21, obj10);
          }
          tmp30 = jsx;
          tmp31 = guild;
          tmp32 = closure_2;
          obj16 = { variant: "text-xs/medium", color: "text-default" };
          intl4 = require("getSystemLocale").intl;
          obj16.children = intl4.string(require("getSystemLocale").t.inyJqO);
          tmp29 = jsx(guild(closure_2[obj16]).Text, obj16);
        }
      }
      tmp17 = jsx;
      tmp18 = guild;
      tmp19 = closure_2;
      obj17 = { variant: "text-xs/medium", color: "text-default" };
      num6 = 10;
      intl = require("getSystemLocale").intl;
      obj17.children = intl.string(require("getSystemLocale").t.H29mx4);
      obj9.children = jsx(guild(closure_2[obj16]).Text, obj17);
      items3[1] = tmp11(tmp10, obj9);
      obj5.children = items3;
      items1[1] = tmp9(tmp10, obj5);
      obj4.children = items1;
      items[1] = tmp9(tmp10, obj4);
      obj2.children = items;
      return tmp9(tmp10, obj2);
    }
    obj18 = { style: tmp.guildIcon, guild: fromGuildType };
    tmp8 = require("makeSizeStyle");
    obj18.size = require("makeSizeStyle").GuildIconSizes.XLARGE;
    obj18.animate = true;
    tmp7 = jsx(tmp8, obj18);
    return;
  }
}
const result = require("_callSuper").fileFinishedImporting("modules/messages/native/emoji/ExpressionGuildDetails.tsx");

export default ExpressionGuildDetails;
export { ExpressionGuildDetails };
