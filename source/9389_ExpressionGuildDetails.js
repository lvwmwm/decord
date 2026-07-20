// Module ID: 9389
// Function ID: 73186
// Name: ExpressionGuildDetails
// Dependencies: []

// Module 9389 (ExpressionGuildDetails)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_4 = arg1(dependencyMap[2]).ExpressionSourceGuildRecord;
({ jsx: closure_5, Fragment: closure_6, jsxs: closure_7 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = { guildDetailsContainer: { flexDirection: "column" }, guildDetailsContent: {} };
obj = { backgroundColor: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000949988315572467, accessibilityRole: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008442542560619912, -45001119: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010260545709468735, 1379623171: 9126805510.25, borderRadius: importDefault(dependencyMap[5]).radii.sm };
obj.guildIcon = obj;
obj.guildNameAndOnlineMembers = { flexDirection: "column" };
obj.guildNameWrapper = { lineHeight: 1, paddingTop: 71, flex: null };
obj.guildPartnerIcon = { marginRight: 8 };
obj.guildDescriptionSection = {};
const obj1 = { <string:335545560>: null, <string:603981006>: "\u{1F6B9}", <string:80489728>: 6, <string:81021952>: 1155, <string:80568576>: null, borderRadius: importDefault(dependencyMap[5]).radii.xs, backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_MOD_MUTED };
obj.dotSeparator = obj1;
const obj2 = { "Bool(false)": 131129.30725479132, "Bool(false)": 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002372587744692494, "Bool(false)": true, "Bool(false)": true, "Bool(false)": true, borderRadius: importDefault(dependencyMap[5]).radii.sm, borderColor: importDefault(dependencyMap[5]).colors.BORDER_STRONG };
obj.joinGuildButton = obj2;
let closure_8 = obj.createStyles(obj);
class ExpressionGuildDetails {
  constructor(arg0) {
    guild = global.guild;
    arg1 = guild;
    hasJoinedGuild = global.hasJoinedGuild;
    ({ title, showingJoinGuildCta } = global);
    tmp = closure_8();
    fromGuildType = closure_4.createFromGuildType(guild);
    isDiscoverableResult = fromGuildType.isDiscoverable();
    if (!isDiscoverableResult) {
      if (!hasJoinedGuild) {
        tmp3 = importDefault;
        tmp4 = dependencyMap;
        num = 7;
        obj2 = importDefault(dependencyMap[7]);
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
        tmp7 = jsx(importDefault(dependencyMap[8]), obj1);
      }
      tmp9 = jsxs;
      tmp10 = View;
      obj2 = {};
      obj2.style = tmp.guildDetailsContainer;
      tmp12 = arg1;
      tmp13 = dependencyMap;
      obj16 = 9;
      tmp11 = jsx;
      obj3 = { INTEGRATION_CREATE: "/assets/images/native/premium/illustrations", ConstraintReasonCode: 51 };
      obj3.children = title;
      items = [, ];
      items[0] = jsx(arg1(dependencyMap[9]).Text, obj3);
      obj4 = {};
      obj4.style = tmp.guildDetailsContent;
      items1 = [, ];
      items1[0] = tmp7;
      obj5 = {};
      obj5.style = tmp.guildNameAndOnlineMembers;
      obj6 = {};
      obj6.style = tmp.guildNameWrapper;
      tmp14 = importDefault;
      num4 = 13;
      obj7 = {};
      obj7.guild = guild;
      obj7.style = tmp.guildPartnerIcon;
      num5 = 14;
      tmp15 = importDefault(dependencyMap[13]);
      obj7.size = arg1(dependencyMap[14]).Icon.Sizes.REFRESH_SMALL_16;
      flag2 = true;
      obj7.disableColor = true;
      items2 = [, ];
      items2[0] = jsx(tmp15, obj7);
      obj8 = { INTEGRATION_CREATE: -833552028, ConstraintReasonCode: -314949303 };
      obj8.children = guild.name;
      items2[1] = jsx(arg1(dependencyMap[9]).Text, obj8);
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
          tmp23 = arg1;
          tmp24 = dependencyMap;
          tmp20 = jsxs;
          tmp21 = Fragment;
          obj11 = {};
          num7 = 10;
          intl2 = arg1(dependencyMap[10]).intl;
          obj12 = {};
          obj12.membersOnline = fromGuildType.presenceCount;
          obj11.children = intl2.format(arg1(dependencyMap[10]).t.LC+S+m, obj12);
          items4 = [, , ];
          items4[0] = jsx(arg1(dependencyMap[obj16]).Text, obj11);
          tmp25 = View;
          obj13 = {};
          obj13.style = tmp.dotSeparator;
          items4[1] = jsx(View, obj13);
          if (!hasJoinedGuild) {
            if (!showingJoinGuildCta) {
              tmp26 = jsx;
              tmp27 = arg1;
              tmp28 = dependencyMap;
              num8 = 11;
              obj14 = {};
              obj14.style = tmp.joinGuildButton;
              obj14.onPress = function onPress() {
                return guild(closure_2[12]).handleJoinGuild(guild.id);
              };
              obj15 = {};
              intl3 = arg1(dependencyMap[10]).intl;
              obj15.children = intl3.string(arg1(dependencyMap[10]).t.riu2R5);
              obj14.children = jsx(arg1(dependencyMap[obj16]).Text, obj15);
              tmp29 = jsx(arg1(dependencyMap[11]).PressableOpacity, obj14);
            }
            items4[2] = tmp29;
            obj10.children = items4;
            tmp20Result = tmp20(tmp21, obj10);
          }
          tmp30 = jsx;
          tmp31 = arg1;
          tmp32 = dependencyMap;
          obj16 = {};
          intl4 = arg1(dependencyMap[10]).intl;
          obj16.children = intl4.string(arg1(dependencyMap[10]).t.inyJqO);
          tmp29 = jsx(arg1(dependencyMap[obj16]).Text, obj16);
        }
      }
      tmp17 = jsx;
      tmp18 = arg1;
      tmp19 = dependencyMap;
      obj17 = {};
      num6 = 10;
      intl = arg1(dependencyMap[10]).intl;
      obj17.children = intl.string(arg1(dependencyMap[10]).t.H29mx4);
      obj9.children = jsx(arg1(dependencyMap[obj16]).Text, obj17);
      items3[1] = tmp11(tmp10, obj9);
      obj5.children = items3;
      items1[1] = tmp9(tmp10, obj5);
      obj4.children = items1;
      items[1] = tmp9(tmp10, obj4);
      obj2.children = items;
      return tmp9(tmp10, obj2);
    }
    obj18 = { style: tmp.guildIcon, guild: fromGuildType };
    tmp8 = importDefault(dependencyMap[6]);
    obj18.size = arg1(dependencyMap[6]).GuildIconSizes.XLARGE;
    obj18.animate = true;
    tmp7 = jsx(tmp8, obj18);
    return;
  }
}
const tmp3 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[15]).fileFinishedImporting("modules/messages/native/emoji/ExpressionGuildDetails.tsx");

export default ExpressionGuildDetails;
export { ExpressionGuildDetails };
