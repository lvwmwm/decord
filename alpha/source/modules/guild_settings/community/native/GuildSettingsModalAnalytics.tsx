// Module ID: 19844
// Function ID: 19845
// Name: GuildSettingsModalAnalytics
// Dependencies: [5, 19, 17, 2062, 1072, 21, 5014, 575, 504, 19845, 1252, 7503, 7507, 6027, 5624, 1113, 8025, 5634, 19864, 5606, 2]
// Exports: default

// Module 19844 (GuildSettingsModalAnalytics)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import GuildSettingsAnalyticsCardDefault from "GuildSettingsAnalyticsCard" /* 19864 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import LocaleStore from "LocaleStore" /* 2062 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5014 */;
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
  let obj2 = guildId(19845);
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
        return { value: "HermesInternal", done: "HermesInternal" };
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
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } catch (tmp4) {
        guildId = 3;
        throw tmp4;
      }
    }
  }), items1);
  obj4 = { spacing: nativeDefault.space.PX_16, children: items3 };
  Stack = guildId(6027).Stack;
  let obj5 = { variant: "text-sm/medium", color: "text-default", children: str.trim() };
  const Text = guildId(5624).Text;
  const intl = guildId(1113).intl;
  str = intl.string(guildId(1113).t.NIZ60a);
  items3 = [closure_9(Text, obj5), , , , ];
  let tmp9Result = null;
  const tmp10 = ScrollView;
  const tmp8 = closure_11;
  if (null != notice) {
    const obj7 = { type: null, message: null, role: null };
    ({ type: obj6.type, message: obj6.message, role: obj6.role } = notice);
    tmp9Result = tmp9(tmp2(8025).InlineNotice, obj7);
  }
  items3[1] = tmp9Result;
  const obj8 = { variant: "text-sm/medium", color: "text-muted", children: intl2.string(tmp2(1113).t.A5vswv) };
  const Text2 = tmp2(5624).Text;
  intl2 = tmp2(1113).intl;
  items3[2] = closure_9(Text2, obj8);
  const obj9 = { text: intl3.string(tmp2(1113).t.Uskgxx), onPress: callback };
  const Button = tmp2(5634).Button;
  intl3 = tmp2(1113).intl;
  items3[3] = closure_9(Button, obj9);
  let tmp7Result = null;
  if (null != analytics) {
    const obj10 = { spacing: nativeDefault.space.PX_8, children: items4 };
    const Stack2 = tmp2(6027).Stack;
    const obj11 = { metricKey: "visitors", title: intl4.string(tmp2(1113).t.i0NorT), description: intl5.string(tmp2(1113).t.KiRbLJ) };
    const tmp11Result = GuildSettingsAnalyticsCardDefault;
    intl4 = tmp2(1113).intl;
    intl5 = tmp2(1113).intl;
    const tmp2Result = tmp2(19845);
    const merged = Object.assign(tmp2Result.getGuildAnalyticsCardProps(analytics.visitors, analytics.visitorsChange, stateFromStores));
    items4 = [tmp9(tmp11Result, obj11), , , ];
    const obj12 = { metricKey: "communicators", title: intl6.string(tmp2(1113).t.DDAHdQ), description: intl7.string(tmp2(1113).t.HxWUkU) };
    const tmp11Result4 = GuildSettingsAnalyticsCardDefault;
    intl6 = tmp2(1113).intl;
    intl7 = tmp2(1113).intl;
    const tmp2Result4 = tmp2(19845);
    const merged1 = Object.assign(tmp2Result4.getGuildAnalyticsCardProps(analytics.communicators, analytics.communicatorsChange, stateFromStores));
    items4[1] = closure_9(tmp11Result4, obj12);
    const obj13 = { metricKey: "new_members", title: intl8.string(tmp2(1113).t.hYeOqC) };
    const tmp11Result5 = GuildSettingsAnalyticsCardDefault;
    intl8 = tmp2(1113).intl;
    const tmp2Result5 = tmp2(19845);
    const merged2 = Object.assign(tmp2Result5.getGuildAnalyticsCardProps(analytics.newMembers, analytics.newMembersChange, stateFromStores));
    items4[2] = closure_9(tmp11Result5, obj13);
    const obj14 = { metricKey: "new_member_retention", title: intl9.string(tmp2(1113).t.jj7OPw), description: intl10.string(tmp2(1113).t.MQCslz) };
    const tmp11Result6 = GuildSettingsAnalyticsCardDefault;
    intl9 = tmp2(1113).intl;
    intl10 = tmp2(1113).intl;
    const tmp2Result6 = tmp2(19845);
    const merged3 = Object.assign(tmp2Result6.getGuildAnalyticsCardProps(analytics.pctRetained, analytics.pctRetainedChange, stateFromStores, true));
    items4[3] = closure_9(tmp11Result6, obj14);
    tmp7Result = tmp7(Stack2, obj10);
  }
  const obj15 = { children: items5 };
  items3[4] = tmp7Result;
  items5 = [tmp9(tmp10, obj3), tmp9(tmp2(5606).NavScrim, {})];
  return closure_10(tmp8, obj15);
};
