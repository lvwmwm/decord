// Module ID: 17449
// Function ID: 17450
// Name: GuildSettingsModalAnalytics
// Dependencies: [5, 19, 17, 2111, 1074, 21, 4829, 576, 504, 17450, 1241, 6730, 6734, 5272, 4825, 1115, 1177, 5274, 17470, 6456, 2]
// Exports: default

// Module 17449 (GuildSettingsModalAnalytics)
import nativeDefault from "native" /* 576 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import LocaleStore from "LocaleStore" /* 2111 */;

const require = fn;
const ScrollView = fn(17).ScrollView;
const Constants = fn(1074);
({ AnalyticEvents: closure_7, RelativeMarketingURLs: closure_8 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10, Fragment: closure_11 } = jsxProd);
const createStyles = fn(4829);
let obj2 = { container: { flex: 1 }, content: { padding: nativeDefault.space.PX_16 } };
let closure_12 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_settings/community/native/GuildSettingsModalAnalytics.tsx");

export default function GuildSettingsModalAnalytics(guildId) {
  guildId = guildId.guildId;
  const tmp = closure_12();
  const items = [LocaleStore];
  const stateFromStores = guildId(504).useStateFromStores(items, () => locale.locale);
  let obj = guildId(504);
  const guildAnalyticsOverview = guildId(17450).useGuildAnalyticsOverview(guildId);
  ({ analytics, notice } = guildAnalyticsOverview);
  const items1 = [guildId];
  let obj3 = { style: tmp.container, contentContainerStyle: null, children: null };
  const items2 = [tmp.content, guildId.contentContainerStyle];
  obj3.contentContainerStyle = items2;
  const callback = noop.useCallback(asyncGeneratorStep(async (arg0, value) => {
    if (v3 === 2) {
      v3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
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
        v3 = 2;
        if (0 === v1) {
          if (arg0 === 1) {
            v3 = 3;
            throw value;
          } else if (arg0 === 2) {
            v3 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            const obj4 = { guild_id: guildId };
            v1(1241).track(constants.GUILD_INSIGHTS_SETTINGS_CTA_CLICKED, obj4);
            const obj5 = v1(1241);
            const result = closure_1_8.DEVELOPER_PORTAL_GUILD_ANALYTICS(guildId);
            v1 = 1;
            v3 = 1;
            const obj6 = { value: v1(6730).redirectDeveloperPortalWithHandoffToken(result, v3(6734).LoginHandoffSource.GUILD_ANALYTICS_SETTING), done: false };
            return obj6;
          }
        } else if (arg0 === 1) {
          v3 = 3;
          throw value;
        } else if (arg0 === 2) {
          v3 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          v3 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp5) {
        v3 = tmp;
        throw tmp5;
      }
    }
  }), items1);
  let obj4 = { spacing: nativeDefault.space.PX_16, children: null };
  let obj5 = { variant: "text-sm/medium", color: "text-default", children: null };
  const intl = guildId(1115).intl;
  let obj2 = guildId(17450);
  const tmp10 = ScrollView;
  const tmp8 = closure_11;
  obj5.children = intl.string(guildId(1115).t.NIZ60a).trim();
  const items3 = [closure_9(guildId(4825).Text, obj5), , , , ];
  if (null == notice) {
    items3[1] = null;
    let obj6 = { variant: "text-sm/medium", color: "text-muted", children: null };
    const intl2 = tmp2(1115).intl;
    obj6.children = intl2.string(tmp2(1115).t.A5vswv);
    items3[2] = tmp9(tmp2(4825).Text, obj6);
    const obj7 = { text: null, onPress: null };
    const intl3 = tmp2(1115).intl;
    obj7.text = intl3.string(tmp2(1115).t.Uskgxx);
    obj7.onPress = callback;
    items3[3] = tmp9(tmp2(5274).Button, obj7);
    let tmp7Result = null;
    if (null != analytics) {
      const obj8 = { spacing: tmp11(576).space.PX_8, children: null };
      const obj9 = { metricKey: "visitors", title: null, description: null };
      const intl4 = tmp2(1115).intl;
      obj9.title = intl4.string(tmp2(1115).t.i0NorT);
      const intl5 = tmp2(1115).intl;
      obj9.description = intl5.string(tmp2(1115).t.KiRbLJ);
      const tmp11Result = tmp11(17470);
      const merged = Object.assign(tmp2(17450).getGuildAnalyticsCardProps(analytics.visitors, analytics.visitorsChange, stateFromStores));
      const items4 = [tmp9(tmp11Result, obj9), , , ];
      const obj10 = { metricKey: "communicators", title: null, description: null };
      const tmp2Result = tmp2(17450);
      const intl6 = tmp2(1115).intl;
      obj10.title = intl6.string(tmp2(1115).t.DDAHdQ);
      const intl7 = tmp2(1115).intl;
      obj10.description = intl7.string(tmp2(1115).t.HxWUkU);
      const tmp11Result4 = tmp11(17470);
      const merged1 = Object.assign(tmp2(17450).getGuildAnalyticsCardProps(analytics.communicators, analytics.communicatorsChange, stateFromStores));
      items4[1] = tmp9(tmp11Result4, obj10);
      const obj11 = { metricKey: "new_members", title: null };
      const tmp2Result4 = tmp2(17450);
      const intl8 = tmp2(1115).intl;
      obj11.title = intl8.string(tmp2(1115).t.hYeOqC);
      const tmp11Result5 = tmp11(17470);
      const merged2 = Object.assign(tmp2(17450).getGuildAnalyticsCardProps(analytics.newMembers, analytics.newMembersChange, stateFromStores));
      items4[2] = tmp9(tmp11Result5, obj11);
      const obj12 = { metricKey: "new_member_retention", title: null, description: null };
      const tmp2Result5 = tmp2(17450);
      const intl9 = tmp2(1115).intl;
      obj12.title = intl9.string(tmp2(1115).t.jj7OPw);
      const intl10 = tmp2(1115).intl;
      obj12.description = intl10.string(tmp2(1115).t.MQCslz);
      const tmp2Result6 = tmp2(17450);
      const merged3 = Object.assign(tmp2Result6.getGuildAnalyticsCardProps(analytics.pctRetained, analytics.pctRetainedChange, stateFromStores, true));
      items4[3] = tmp9(tmp11(17470), obj12);
      obj8.children = items4;
      tmp7Result = tmp7(tmp2(5272).Stack, obj8);
      const tmp11Result6 = tmp11(17470);
    }
    const obj13 = { children: null };
    items3[4] = tmp7Result;
    obj4.children = items3;
    obj3.children = tmp7(guildId(5272).Stack, obj4);
    const items5 = [tmp9(tmp10, obj3), tmp9(tmp2(6456).NavScrim, {})];
    obj13.children = items5;
    return tmp7(tmp8, obj13);
  } else {
    if ("critical" === notice.type) {
      let INFO = tmp2(1177).HelpMessageTypes.ERROR;
    } else {
      INFO = tmp2(1177).HelpMessageTypes.INFO;
    }
    const obj14 = { messageType: INFO, children: null };
    notice = notice.message;
    obj14.children = notice;
    tmp9(tmp2(1177).HelpMessage, obj14);
  }
};
