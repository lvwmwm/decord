// Module ID: 9803
// Function ID: 9804
// Name: ExpressionGuildDetails
// Dependencies: [19, 17, 5897, 21, 4836, 576, 5896, 1397, 5899, 4832, 1115, 5435, 9802, 5902, 1177, 2]

// Module 9803 (ExpressionGuildDetails)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1397 */;
import GuildIconDefault from "GuildIcon" /* 5896 */;
import ExpressionSourceRecord from "ExpressionSourceRecord" /* 5897 */;
import FastImageDefault from "FastImage" /* 5899 */;
import guild_GuildUtils from "guild/GuildUtils" /* 9802 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let size;
let size1;
let tmp8;
const GuildBadgeDefault = tmp8(5902);
const View = react_native.View;
const React3 = ExpressionSourceRecord.ExpressionSourceGuildRecord;
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { guildDetailsContainer: { flexDirection: "column" }, guildDetailsContent: { flexDirection: "row", marginTop: 8, alignItems: "center" }, guildIcon: size, guildNameAndOnlineMembers: { flexDirection: "column" }, guildNameWrapper: { flexDirection: "row", alignItems: "center", marginRight: 32 }, guildPartnerIcon: { marginRight: 8 }, guildDescriptionSection: { flexDirection: "row", alignItems: "center", marginTop: 4 }, dotSeparator: size1, joinGuildButton: obj2 };
size = { width: 40, height: 40, borderRadius: nativeDefault.radii.sm, marginRight: 12 };
createStyles = createStyles.createStyles;
size1 = { width: 4, height: 4, borderRadius: nativeDefault.radii.xs, marginRight: 8, marginLeft: 8, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
obj2 = { borderRadius: nativeDefault.radii.sm, borderColor: nativeDefault.colors.BORDER_STRONG, borderWidth: 1, paddingHorizontal: 4, paddingBottom: 2 };
const metroImportAll = createStyles(obj);
class ExpressionGuildDetails {
  constructor(guild) {
    let Text3;
    let intl;
    let intl2;
    let intl3;
    let intl4;
    let items2;
    let obj14;
    let obj17;
    let showingJoinGuildCta;
    let title;
    guild = guild.guild;
    const hasJoinedGuild = guild.hasJoinedGuild;
    ({ title, showingJoinGuildCta } = guild);
    const tmp = closure_8();
    const fromGuildType = closure_4.createFromGuildType(guild);
    const isDiscoverableResult = fromGuildType.isDiscoverable();
    if (!isDiscoverableResult) {
      let tmp7;
      let tmp9;
      if (!hasJoinedGuild) {
        let obj = { id: null, icon: null, canAnimate: true, size: 32 };
        ({ id: obj3.id, icon: obj3.icon } = guild);
        const obj2 = AvatarUtilsDefault;
        const guildIconSource = obj2.getGuildIconSource(obj);
        const obj4 = { style: tmp.guildIcon, source: guildIconSource };
        tmp7 = closure_5(FastImageDefault, obj4);
        tmp9 = closure_5;
      }
      const obj5 = { style: tmp.guildDetailsContainer, children: null };
      const obj6 = { variant: "eyebrow", color: "text-default", children: title };
      const items = [tmp9(guild(4832).Text, obj6), ];
      const obj7 = { style: tmp.guildDetailsContent, children: null };
      const items1 = [tmp7, ];
      const obj8 = { style: tmp.guildNameAndOnlineMembers, children: null };
      const obj9 = { style: tmp.guildNameWrapper, children: items2 };
      const obj10 = { guild, style: tmp.guildPartnerIcon, size: guild(1177).Icon.Sizes.REFRESH_SMALL_16, disableColor: true };
      const tmp8Result = GuildBadgeDefault;
      items2 = [tmp9(tmp8Result, obj10), ];
      const obj11 = { variant: "text-md/bold", color: "mobile-text-heading-primary", children: guild.name };
      items2[1] = tmp9(guild(4832).Text, obj11);
      const items3 = [closure_7(View, obj9), ];
      const obj12 = { style: tmp.guildDescriptionSection, children: null };
      if (isDiscoverableResult) {
        let tmp9Result1;
        if (null != fromGuildType.presenceCount) {
          const obj13 = { variant: "text-xs/medium", color: "text-default", children: intl2.format(guild(1115).t["LC+S+m"], obj14) };
          const Text2 = tmp13(4832).Text;
          intl2 = tmp13(1115).intl;
          obj14 = { membersOnline: fromGuildType.presenceCount };
          const items4 = [tmp9(Text2, obj13), , ];
          const obj15 = { style: tmp.dotSeparator };
          items4[1] = tmp9(View, obj15);
          const tmp17 = closure_6;
          if (!hasJoinedGuild) {
            let tmp9Result;
            if (!showingJoinGuildCta) {
              const obj16 = {
                style: tmp.joinGuildButton,
                onPress() {
                            const obj = guild_GuildUtils;
                            return obj.handleJoinGuild(guild.id);
                          },
                children: tmp9(Text3, obj17)
              };
              const PressableOpacity = tmp13(5435).PressableOpacity;
              obj17 = { variant: "text-xs/medium", color: "text-default", children: intl3.string(guild(1115).t.riu2R5) };
              Text3 = tmp13(4832).Text;
              intl3 = tmp13(1115).intl;
              tmp9Result = tmp9(PressableOpacity, obj16);
            }
            const obj18 = { children: items4 };
            items4[2] = tmp9Result;
            tmp9Result1 = tmp11(tmp17, obj18);
          }
          const obj19 = { variant: "text-xs/medium", color: "text-default", children: intl4.string(guild(1115).t.inyJqO) };
          const Text4 = tmp13(4832).Text;
          intl4 = tmp13(1115).intl;
          tmp9Result = tmp9(Text4, obj19);
        }
        obj12.children = tmp9Result1;
        items3[1] = tmp9(View, obj12);
        obj8.children = items3;
        items1[1] = closure_7(View, obj8);
        obj7.children = items1;
        items[1] = closure_7(View, obj7);
        obj5.children = items;
        return closure_7(View, obj5);
      }
      const obj20 = { variant: "text-xs/medium", color: "text-default", children: intl.string(guild(1115).t.H29mx4) };
      const Text = tmp13(4832).Text;
      intl = tmp13(1115).intl;
      tmp9Result1 = tmp9(Text, obj20);
    }
    const obj21 = { style: tmp.guildIcon, guild: fromGuildType, size: guild(5896).GuildIconSizes.XLARGE, animate: true };
    const tmp10 = GuildIconDefault;
    tmp7 = closure_5(tmp10, obj21);
    tmp9 = closure_5;
  }
}
size = size_mod;
const result = size.fileFinishedImporting("modules/messages/native/emoji/ExpressionGuildDetails.tsx");

export default ExpressionGuildDetails;
export { ExpressionGuildDetails };
