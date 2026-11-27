// Module ID: 19995
// Function ID: 19996
// Name: GuildSettingsModalIntegrations
// Dependencies: [32, 19, 10048, 19996, 4975, 8575, 1071, 19997, 21, 5043, 575, 1501, 504, 5252, 19998, 19999, 1256, 20000, 19199, 15922, 19925, 8088, 6115, 6140, 6144, 1112, 19070, 19195, 14084, 6178, 5730, 1413, 5050, 7406, 6145, 20001, 5634, 20005, 20006, 20008, 5617, 2]
// Exports: default

// Module 19995 (GuildSettingsModalIntegrations)
import nativeDefault from "native" /* 575 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1256 */;
import ApplicationCommandIndexStore from "ApplicationCommandIndexStore" /* 10048 */;
import ApplicationSubscriptionsActionCreatorsAll from "ApplicationSubscriptionsActionCreators" /* 15922 */;
import WebhooksActionCreatorsDefault from "WebhooksActionCreators" /* 19199 */;
import ApplicationSubscriptionsStore2 from "ApplicationSubscriptionsStore" /* 19996 */;
import IntegrationSettingsConstants from "IntegrationSettingsConstants" /* 19997 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import PermissionStore from "PermissionStore" /* 4975 */;
import GuildSettingsStore from "GuildSettingsStore" /* 8575 */;
import Constants from "Constants" /* 1071 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5043 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const ApplicationSubscriptionsStore = ApplicationSubscriptionsStore2;
let _require, importDefault, set;

let PlatformTypes;
let closure_12;
let closure_15;
let closure_16;
let closure_17;
let map1;
let obj2;
let obj3;
let unpackModuleId;
let _slicedToArray = _slicedToArray_mod;
let useGuildIndexState = ApplicationCommandIndexStore.useGuildIndexState;
const FetchState = ApplicationSubscriptionsStore2.FetchState;
({ AnalyticEvents: unpackModuleId, GuildSettingsSections: closure_12, Permissions: map1, PlatformTypes } = Constants);
let closure_14 = IntegrationSettingsConstants.INTEGRATIONS_SEARCH_MIN_APPS;
({ jsx: closure_15, jsxs: closure_16, Fragment: closure_17 } = Fragment);
let items = [, ];
({ TWITCH: arr[0], YOUTUBE: arr[1] } = PlatformTypes);
let createStyles = createStyles_mod;
let obj = { screenContainer: obj2, screenContent: obj3, platformIcon: { width: 24, height: 24 }, emptyStateText: { textAlign: "center" } };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
createStyles = createStyles.createStyles;
obj3 = { paddingTop: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_12 };
let closure_19 = createStyles(obj);
let result = size.fileFinishedImporting("modules/guild_settings/integrations/native/GuildSettingsModalIntegrations.tsx");

export default function GuildSettingsModalIntegrations(contentContainerStyle) {
  let Stack;
  let Stack3;
  let application;
  let canManageGuild;
  let canManageWebhooks;
  let closure_0;
  let closure_1;
  let closure_4;
  let closure_6;
  let id;
  let intl;
  let intl10;
  let intl11;
  let intl12;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let intl9;
  let items10;
  let items11;
  let items12;
  let items7;
  let items9;
  let obj17;
  let obj8;
  let sections;
  canManageGuild = undefined;
  useGuildIndexState = undefined;
  let id2;
  let closure_8;
  contentContainerStyle = contentContainerStyle.contentContainerStyle;
  const tmp = closure_19();
  _require = tmp;
  let obj = require("useNavigation");
  importDefault = obj.useNavigation();
  let obj2 = require("get initialized");
  items = [GuildSettingsStore];
  const stateFromStores = obj2.useStateFromStores(items, () => GuildSettingsStore.getGuild(), []);
  let obj3 = require("get initialized");
  const items1 = [PermissionStore];
  const stateFromStoresObject = obj3.useStateFromStoresObject(items1, () => {
    let guildPermissionProps;
    if (null == stateFromStores) {
      guildPermissionProps = { canManageWebhooks: false, canManageGuild: false };
    } else {
      guildPermissionProps = PermissionStore.getGuildPermissionProps(tmp);
    }
    return guildPermissionProps;
  });
  ({ canManageWebhooks, canManageGuild } = stateFromStoresObject);
  _slicedToArray = require("useTheme")();
  let obj4 = require("get initialized");
  const items2 = [GuildSettingsStore];
  const stateFromStores1 = obj4.useStateFromStores(items2, () => GuildSettingsStore.getProps().integrations);
  let found;
  if (stateFromStores1 != null) {
    found = stateFromStores1.filter((type) => items.includes(type.type));
  }
  const items3 = [];
  if (canManageGuild) {
    let items4 = stateFromStores1;
    if (stateFromStores1 == null) {
      items4 = [];
    }
    const iter = items4[Symbol.iterator]();
    const tmp6 = items4;
    const nextResult = iter.next();
    while (iter !== undefined) {
      ({ id, application } = nextResult);
      let tmp10 = "discord" === nextResult.type;
      let tmp9 = nextResult;
      if (tmp10) {
        tmp10 = null != application;
      }
      if (tmp10) {
        let obj5 = { integrationId: id, application, integration: tmp9 };
        let arr = items3.push(obj5);
      }
      continue;
    }
  }
  const tmp17 = canManageGuild;
  let id1;
  const tmp18 = require("useConjureServerApplicationIds");
  if (stateFromStores != null) {
    id1 = stateFromStores.id;
  }
  useGuildIndexState = tmp18(id1, items3.map((application) => application.application.id));
  let obj6 = found;
  let arr7 = items3;
  const tmp22 = _slicedToArray(found.useState(""), 2)[1];
  if (items3.length > closure_14) {
    arr7 = tmp16(tmp17[15])(items3, tmp21);
  }
  const found1 = arr7.filter((application) => closure_6.includes(application.application.id));
  const found2 = arr7.filter((application) => !closure_6.includes(application.application.id));
  id2 = undefined;
  if (stateFromStores != null) {
    id2 = stateFromStores.id;
  }
  const result = useGuildIndexState(id2, true).result;
  if (result != null) {
    sections = result.sections;
  }
  const tmp25 = require("useManageableAppWebhooks")(id2);
  closure_8 = tmp25;
  const items5 = [tmp25];
  const memo = obj6.useMemo(() => {
    set = new Set(closure_8.map((application_id) => application_id.application_id));
    return set;
  }, items5);
  const items6 = [id2, canManageGuild];
  const effect = obj6.useEffect(() => {
    const tmp2 = null != id2 && canManageGuild;
    if (tmp2) {
      const obj = WebhooksActionCreatorsDefault;
      const forGuild = obj.fetchForGuild(tmp);
      if (ApplicationSubscriptionsStore.getEntitlementsForGuildFetchState(id2) === FetchState.NOT_FETCHED) {
        const obj2 = ApplicationSubscriptionsActionCreatorsAll;
        const entitlementsForGuild = obj2.fetchEntitlementsForGuild(tmp);
      }
    }
  }, items6);
  let id3;
  const useChannelsAllowedToUnlink = require("useChannelsAllowedToUnlink").useChannelsAllowedToUnlink;
  require("useChannelsAllowedToUnlink");
  if (stateFromStores != null) {
    id3 = stateFromStores.id;
  }
  let tmp38Result6 = useChannelsAllowedToUnlink(id3).length > 0;
  let mapped = canManageGuild;
  if (mapped) {
    let num;
    if (found != null) {
      num = found.length;
    }
    if (num == null) {
      num = 0;
    }
    mapped = num > 0;
  }
  let tmp34 = null;
  if (null != stateFromStores) {
    let tmp36Result4;
    if (canManageWebhooks || tmp38Result6 || mapped) {
      const obj7 = { style: tmp.screenContainer, contentContainerStyle: items7, children: closure_16(Stack, obj8) };
      items7 = [tmp.screenContent, contentContainerStyle];
      const Form = tmp28(tmp17[21]).Form;
      obj8 = { spacing: require("native").space.PX_24, children: items9 };
      Stack = tmp28(tmp17[22]).Stack;
      let tmp36Result = null;
      const tmp37 = closure_17;
      if (canManageWebhooks || tmp38Result6 || mapped) {
        let tmp38Result = canManageWebhooks;
        const TableRowGroup = tmp28(tmp17[23]).TableRowGroup;
        if (canManageWebhooks) {
          const obj9 = {
            label: intl.string(require("intl").t.jp25Id),
            subLabel: intl2.string(require("intl").t.mKIOkI),
            icon: closure_15(require("WebhookIcon").WebhookIcon, {}),
            arrow: true,
            onPress() {
                      return closure_1.push(constants.WEBHOOKS);
                    }
          };
          let TableRow = tmp28(tmp17[24]).TableRow;
          intl = tmp28(tmp17[25]).intl;
          intl2 = tmp28(tmp17[25]).intl;
          tmp38Result = tmp38(TableRow, obj9);
        }
        const items8 = [tmp38Result, , , ];
        if (canManageWebhooks) {
          const obj10 = {
            label: intl3.string(require("intl").t.OrV60r),
            subLabel: intl4.string(require("intl").t.rQREJl),
            icon: closure_15(require("ChannelsFollowedIcon").ChannelsFollowedIcon, {}),
            arrow: true,
            onPress() {
                      return closure_1.push(constants.CHANNELS_FOLLOWED);
                    }
          };
          const TableRow2 = tmp28(tmp17[24]).TableRow;
          intl3 = tmp28(tmp17[25]).intl;
          intl4 = tmp28(tmp17[25]).intl;
          canManageWebhooks = tmp38(TableRow2, obj10);
        }
        items8[1] = canManageWebhooks;
        if (tmp38Result6) {
          const obj11 = {
            label: intl5.string(require("intl").t.tqtDXC),
            subLabel: intl6.string(require("intl").t.v8819e),
            icon: closure_15(require("RefreshIcon").RefreshIcon, {}),
            arrow: true,
            onPress() {
                      return closure_1.push(constants.LOBBIES_LINKED);
                    }
          };
          const TableRow3 = tmp28(tmp17[24]).TableRow;
          intl5 = tmp28(tmp17[25]).intl;
          intl6 = tmp28(tmp17[25]).intl;
          tmp38Result6 = tmp38(TableRow3, obj11);
        }
        items8[2] = tmp38Result6;
        if (mapped) {
          mapped = items.map((item) => {
            let intl;
            let obj4;
            let obj5;
            let obj6;
            let tmp2Result;
            const platformType = item;
            let obj = found;
            let someResult;
            if (found != null) {
              someResult = obj.some((type) => type.type === platformType);
            }
            if (someResult) {
              const obj2 = closure_1(canManageGuild[29]);
              const value = obj2.get(item);
              let tmp6Result = null;
              const tmp2 = closure_1;
              if (null != value) {
                const obj3 = {
                  label: value.name,
                  subLabel: intl.formatToPlainString(platformType(canManageGuild[25]).t.VXU4EU, obj4),
                  icon: closure_1_15(tmp2Result, obj6),
                  arrow: true,
                  onPress() {
                        const obj = { platformType };
                        return closure_1.push(constants.INTEGRATION_PLATFORM, obj);
                      }
                };
                const TableRow = platformType(tmp3[24]).TableRow;
                intl = platformType(tmp3[25]).intl;
                obj4 = { platformName: value.name };
                tmp2Result = tmp2(canManageGuild[30]);
                const makeSource = platformType(canManageGuild[31]).makeSource;
                platformType(canManageGuild[31]);
                const icon = value.icon;
                obj6 = { source: makeSource(obj5.isThemeDark(closure_4) ? icon.darkPNG : icon.lightPNG), style: platformType.platformIcon };
                obj5 = platformType(canManageGuild[32]);
                tmp6Result = tmp6(TableRow, obj3, item);
              }
              return tmp6Result;
            } else {
              return null;
            }
          });
        }
        const obj12 = { hasIcons: true, children: items8 };
        items8[3] = mapped;
        tmp36Result = tmp36(TableRowGroup, obj12);
      }
      items9 = [tmp36Result, , , , , ];
      let tmp38Result7 = null;
      if (items3.length > closure_14) {
        const obj13 = { size: "md", placeholder: intl7.string(require("intl").t["5prvKe"]), accessibilityLabel: intl8.string(require("intl").t["5prvKe"]), onChange: tmp22 };
        const SearchBar = tmp28(tmp17[33]).SearchBar;
        intl7 = tmp28(tmp17[25]).intl;
        intl8 = tmp28(tmp17[25]).intl;
        tmp38Result7 = tmp38(SearchBar, obj13);
      }
      items9[1] = tmp38Result7;
      let tmp36Result3 = null;
      if (canManageGuild) {
        tmp36Result3 = null;
        if (null != stateFromStores1) {
          tmp36Result3 = null;
          if (0 === items3.length) {
            const obj14 = { spacing: require("native").space.PX_8, children: items10 };
            const Stack2 = tmp28(tmp17[22]).Stack;
            const obj15 = { title: intl11.string(require("intl").t.pUBKht) };
            const TableRowGroupTitle = tmp28(tmp17[23]).TableRowGroupTitle;
            intl11 = tmp28(tmp17[25]).intl;
            items10 = [closure_15(TableRowGroupTitle, obj15), ];
            const obj16 = { children: closure_16(Stack3, obj17) };
            const Card = tmp28(tmp17[34]).Card;
            obj17 = { align: "center", spacing: require("native").space.PX_16, children: items11 };
            Stack3 = tmp28(tmp17[22]).Stack;
            items11 = [closure_15(require("AppMagnifierSpotIllustration").AppMagnifierSpotIllustration, { height: 100 }), ];
            const obj18 = { variant: "heading-lg/semibold", style: tmp.emptyStateText, children: intl12.string(require("intl").t.nQQeFM) };
            const Text = tmp28(tmp17[36]).Text;
            intl12 = tmp28(tmp17[25]).intl;
            items11[1] = closure_15(Text, obj18);
            items10[1] = closure_15(Card, obj16);
            tmp36Result3 = tmp36(Stack2, obj14);
          }
        }
      }
      items9[2] = tmp36Result3;
      let tmp38Result8 = null;
      if (items3.length > closure_14) {
        tmp38Result8 = null;
        if (0 === arr7.length) {
          const obj19 = { text: intl9.string(require("intl").t.EVWFNr) };
          const tmp16Result = require("GuildSettingsModalIntegrationEmptyCard");
          intl9 = tmp28(tmp17[25]).intl;
          tmp38Result8 = tmp38(tmp16Result, obj19);
        }
      }
      function openApp(application) {
        let canResult;
        let id;
        application = application.application;
        const obj = { applicationId: application.id };
        closure_1.push(constants.INTEGRATION_APPLICATION, obj);
        const obj2 = { application_id: application.id, guild_id: id, is_admin: canResult };
        id = undefined;
        const track = AnalyticsUtilsDefault.track;
        const APP_MANAGE_CTA_CLICKED = unpackModuleId.APP_MANAGE_CTA_CLICKED;
        AnalyticsUtilsDefault;
        if (stateFromStores != null) {
          id = tmp3.id;
        }
        canResult = undefined;
        if (null != stateFromStores) {
          canResult = PermissionStore.can(map1.ADMINISTRATOR, tmp3);
        }
        track(APP_MANAGE_CTA_CLICKED, obj2);
      }
      items9[3] = tmp38Result8;
      let tmp38Result9 = null;
      if (found2.length > 0) {
        const obj20 = { guildId: stateFromStores.id, title: intl10.string(require("intl").t.pUBKht), apps: found2, commandSections: sections, webhookApplicationIds: memo, onPress: openApp };
        const tmp16Result2 = require("GuildSettingsModalIntegrationsApps");
        intl10 = tmp28(tmp17[25]).intl;
        tmp38Result9 = tmp38(tmp16Result2, obj20);
      }
      items9[4] = tmp38Result9;
      let tmp38Result10 = null;
      if (found1.length > 0) {
        const obj21 = { guildId: stateFromStores.id, apps: found1, commandSections: sections, webhookApplicationIds: memo, onPress: openApp };
        tmp38Result10 = tmp38(tmp16(tmp17[39]), obj21);
      }
      const obj22 = { children: items12 };
      items9[5] = tmp38Result10;
      items12 = [closure_15(Form, obj7), closure_15(require("NavScrim").NavScrim, {})];
      tmp36Result4 = tmp36(tmp37, obj22);
    } else {
      tmp36Result4 = null;
    }
    tmp34 = tmp36Result4;
  }
  return tmp34;
};
export const SUPPORTED_SETTINGS_INTEGRATION_PLATFORMS = items;
