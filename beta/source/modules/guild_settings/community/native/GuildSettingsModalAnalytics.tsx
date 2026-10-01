// Module ID: 17483
// Function ID: 17484
// Name: GuildSettingsModalAnalytics
// Dependencies: [5, 19, 17, 2112, 1074, 21, 4836, 576, 504, 17484, 1241, 6735, 6739, 5279, 4832, 1115, 1177, 5281, 17504, 6461, 2]
// Exports: default

// Module 17483 (GuildSettingsModalAnalytics)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import GuildSettingsAnalyticsCardDefault from "GuildSettingsAnalyticsCard" /* 17504 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import LocaleStore from "LocaleStore" /* 2112 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c1;

let c10;
let c9;
let metroImportAll;
let metroImportDefault;
let obj2;
let unpackModuleId;
const ScrollView = react_native.ScrollView;
({ AnalyticEvents: metroImportDefault, RelativeMarketingURLs: metroImportAll } = Constants);
({ jsx: c9, jsxs: c10, Fragment: unpackModuleId } = Fragment);
let obj = { container: { flex: 1 }, content: obj2 };
obj2 = { padding: nativeDefault.space.PX_16 };
let closure_12 = createStyles.createStyles(obj);
let result = size.fileFinishedImporting("modules/guild_settings/community/native/GuildSettingsModalAnalytics.tsx");

export default function GuildSettingsModalAnalytics(guildId) {
  let Stack;
  let analytics;
  let intl10;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let intl9;
  let items2;
  let items3;
  let items4;
  let items5;
  let locale;
  let notice;
  let obj4;
  let str;
  guildId = guildId.guildId;
  const contentContainerStyle = guildId.contentContainerStyle;
  const tmp = closure_12();
  const tmp2 = guildId;
  let obj = guildId(504);
  const items = [LocaleStore];
  const stateFromStores = obj.useStateFromStores(items, () => locale.locale);
  let obj2 = guildId(17484);
  const guildAnalyticsOverview = obj2.useGuildAnalyticsOverview(guildId);
  ({ analytics, notice } = guildAnalyticsOverview);
  const items1 = [guildId];
  let obj3 = { style: tmp.container, contentContainerStyle: items2, children: tmp7(Stack, obj4) };
  items2 = [tmp.content, contentContainerStyle];
  const callback = react.useCallback(_asyncToGenerator(async (arg0, value) => {
    let v1;
    let v3;
    if (guildId === 2) {
      guildId = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        guildId = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            guildId = 3;
            throw value;
          } else if (arg0 === 2) {
            guildId = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            const obj4 = { guild_id: guildId };
            const obj5 = c1(dependencyMap[10]);
            obj5.track(constants.GUILD_INSIGHTS_SETTINGS_CTA_CLICKED, obj4);
            const redirectDeveloperPortalWithHandoffToken = c1(dependencyMap[11]).redirectDeveloperPortalWithHandoffToken;
            const tmp13 = c1(dependencyMap[11]);
            const result = closure_1_8.DEVELOPER_PORTAL_GUILD_ANALYTICS(guildId);
            c1 = 1;
            guildId = 1;
            const obj6 = { value: redirectDeveloperPortalWithHandoffToken(result, guildId(dependencyMap[12]).LoginHandoffSource.GUILD_ANALYTICS_SETTING), done: false };
            return obj6;
          }
        } else if (arg0 === 1) {
          guildId = 3;
          throw value;
        } else if (arg0 === 2) {
          guildId = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          guildId = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp4) {
        guildId = 3;
        throw tmp4;
      }
    }
  }), items1);
  obj4 = { spacing: nativeDefault.space.PX_16, children: items3 };
  Stack = guildId(5279).Stack;
  let obj5 = { variant: "text-sm/medium", color: "text-default", children: str.trim() };
  const Text = guildId(4832).Text;
  const intl = guildId(1115).intl;
  str = intl.string(guildId(1115).t.NIZ60a);
  items3 = [closure_9(Text, obj5), , , , ];
  let tmp9Result = null;
  const tmp10 = ScrollView;
  const tmp8 = closure_11;
  if (null != notice) {
    let INFO;
    const HelpMessage = tmp2(1177).HelpMessage;
    if ("critical" === notice.type) {
      INFO = tmp2(1177).HelpMessageTypes.ERROR;
    } else {
      INFO = tmp2(1177).HelpMessageTypes.INFO;
    }
    let obj6 = { messageType: INFO, children: notice.message };
    tmp9Result = tmp9(HelpMessage, obj6);
  }
  items3[1] = tmp9Result;
  const obj7 = { variant: "text-sm/medium", color: "text-muted", children: intl2.string(tmp2(1115).t.A5vswv) };
  const Text2 = tmp2(4832).Text;
  intl2 = tmp2(1115).intl;
  items3[2] = closure_9(Text2, obj7);
  const obj8 = { text: intl3.string(tmp2(1115).t.Uskgxx), onPress: callback };
  const Button = tmp2(5281).Button;
  intl3 = tmp2(1115).intl;
  items3[3] = closure_9(Button, obj8);
  let tmp7Result = null;
  if (null != analytics) {
    const obj9 = { spacing: nativeDefault.space.PX_8, children: items4 };
    const Stack2 = tmp2(5279).Stack;
    const obj10 = { metricKey: "visitors", title: intl4.string(tmp2(1115).t.i0NorT), description: intl5.string(tmp2(1115).t.KiRbLJ) };
    const tmp11Result = GuildSettingsAnalyticsCardDefault;
    intl4 = tmp2(1115).intl;
    intl5 = tmp2(1115).intl;
    const tmp2Result = tmp2(17484);
    const merged = Object.assign(tmp2Result.getGuildAnalyticsCardProps(analytics.visitors, analytics.visitorsChange, stateFromStores));
    items4 = [tmp9(tmp11Result, obj10), , , ];
    const obj11 = { metricKey: "communicators", title: intl6.string(tmp2(1115).t.DDAHdQ), description: intl7.string(tmp2(1115).t.HxWUkU) };
    const tmp11Result4 = GuildSettingsAnalyticsCardDefault;
    intl6 = tmp2(1115).intl;
    intl7 = tmp2(1115).intl;
    const tmp2Result4 = tmp2(17484);
    const merged1 = Object.assign(tmp2Result4.getGuildAnalyticsCardProps(analytics.communicators, analytics.communicatorsChange, stateFromStores));
    items4[1] = closure_9(tmp11Result4, obj11);
    const obj12 = { metricKey: "new_members", title: intl8.string(tmp2(1115).t.hYeOqC) };
    const tmp11Result5 = GuildSettingsAnalyticsCardDefault;
    intl8 = tmp2(1115).intl;
    const tmp2Result5 = tmp2(17484);
    const merged2 = Object.assign(tmp2Result5.getGuildAnalyticsCardProps(analytics.newMembers, analytics.newMembersChange, stateFromStores));
    items4[2] = closure_9(tmp11Result5, obj12);
    const obj13 = { metricKey: "new_member_retention", title: intl9.string(tmp2(1115).t.jj7OPw), description: intl10.string(tmp2(1115).t.MQCslz) };
    const tmp11Result6 = GuildSettingsAnalyticsCardDefault;
    intl9 = tmp2(1115).intl;
    intl10 = tmp2(1115).intl;
    const tmp2Result6 = tmp2(17484);
    const merged3 = Object.assign(tmp2Result6.getGuildAnalyticsCardProps(analytics.pctRetained, analytics.pctRetainedChange, stateFromStores, true));
    items4[3] = closure_9(tmp11Result6, obj13);
    tmp7Result = tmp7(Stack2, obj9);
  }
  const obj14 = { children: items5 };
  items3[4] = tmp7Result;
  items5 = [tmp9(tmp10, obj3), tmp9(tmp2(6461).NavScrim, {})];
  return closure_10(tmp8, obj14);
};
