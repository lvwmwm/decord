// Module ID: 17461
// Function ID: 17462
// Name: GuildSettingsModalCommunityIntro
// Dependencies: [19, 17, 2067, 4469, 9049, 1074, 21, 4836, 576, 9845, 1115, 4832, 16057, 4787, 1485, 504, 573, 9048, 17462, 2111, 5281, 17466, 4527, 6461, 2]
// Exports: default

// Module 17461 (GuildSettingsModalCommunityIntro)
import DispatcherDefault from "Dispatcher" /* 573 */;
import nativeDefault from "native" /* 576 */;
import ToastUtils from "ToastUtils" /* 4527 */;
import Text_Text from "Text/Text" /* 4832 */;
import EnableCommunityModalActionCreatorsDefault from "EnableCommunityModalActionCreators" /* 17466 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import GuildStore from "GuildStore" /* 2067 */;
import PermissionStore from "PermissionStore" /* 4469 */;
import GuildSettingsStore from "GuildSettingsStore" /* 9049 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let navigation;

let c10;
let closure_12;
let closure_14;
let closure_15;
let closure_16;
let closure_4;
let hasOwnProperty;
let map1;
let metroRequire;
let obj2;
let obj3;
let unpackModuleId;
function FeatureCard(arg0) {
  let body;
  let header;
  let icon;
  let items;
  let items1;
  ({ icon, header, body } = arg0);
  const tmp = closure_17();
  const obj = { style: tmp.featureCard, children: items };
  items = [, ];
  const obj2 = { style: tmp.featureIcon, children: icon() };
  items[0] = authStore2(React3, obj2);
  const obj3 = { style: tmp.featureDescription, children: items1 };
  items1 = [authStore2(Text_Text.Heading, { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: header }), authStore2(Text_Text.Text, { variant: "text-sm/medium", color: "text-default", children: body })];
  items[1] = closure_15(React3, obj3);
  return closure_15(React3, obj);
}
({ View: closure_4, Image: hasOwnProperty, ScrollView: metroRequire } = react_native);
({ HelpdeskArticles: c10, GuildFeatures: unpackModuleId, GuildSettingsSections: closure_12, Permissions: map1 } = Constants);
({ jsx: closure_14, jsxs: closure_15, Fragment: closure_16 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { height: "100%" }, contentPadding: { padding: 16 }, header: { textAlign: "center", marginBottom: 8 }, body: { textAlign: "center", marginBottom: 24 }, details: { textAlign: "center", marginTop: 24 }, headerImage: { width: "100%" }, features: { marginTop: 32, marginBottom: 32 }, featureCard: obj2, featureIcon: obj3, featureDescription: { overflow: "hidden", flex: 1 } };
obj2 = { backgroundColor: nativeDefault.colors.CARD_BACKGROUND_DEFAULT, flex: 1, flexDirection: "row", padding: 16, borderRadius: nativeDefault.radii.sm, marginTop: 8, alignItems: "flex-start" };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG, borderRadius: 40, marginRight: 16, padding: 8 };
let closure_17 = createStyles(obj);
const result = size.fileFinishedImporting("modules/guild_settings/community/native/GuildSettingsModalCommunityIntro.tsx");

export default function GuildSettingsModalCommunityIntro(contentContainerStyle) {
  let format;
  let intl;
  let intl10;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let intl9;
  let items4;
  let items5;
  let items6;
  let items7;
  let obj11;
  let obj12;
  let obj17;
  let obj19;
  let onClose;
  let submitting;
  let v52EgsM;
  ({ guildId: require, onClose } = contentContainerStyle);
  navigation = undefined;
  contentContainerStyle = contentContainerStyle.contentContainerStyle;
  let tmp = closure_17();
  let obj = require("useNavigation");
  navigation = obj.useNavigation();
  let obj2 = require("get initialized");
  const items = [GuildStore];
  const stateFromStores = obj2.useStateFromStores(items, () => GuildStore.getGuild(require));
  const items1 = [PermissionStore];
  const obj3 = require("get initialized");
  const stateFromStores1 = obj3.useStateFromStores(items1, () => {
    const canResult = null != stateFromStores && PermissionStore.can(map1.ADMINISTRATOR, tmp);
    return canResult;
  });
  const items2 = [GuildSettingsStore];
  const obj4 = require("get initialized");
  const stateFromStores2 = obj4.useStateFromStores(items2, () => submitting.isSubmitting());
  const items3 = [stateFromStores, stateFromStores2, navigation, onClose];
  const effect = stateFromStores.useEffect(() => {
    let tmp = !stateFromStores2;
    if (tmp) {
      let hasItem;
      if (stateFromStores != null) {
        const features = stateFromStores.features;
        hasItem = features.has(unpackModuleId.COMMUNITY);
      }
      tmp = hasItem;
    }
    if (tmp) {
      let obj = DispatcherDefault;
      obj.wait(() => {
        const obj = onClose(navigation[17]);
        return obj.setSection(constants.COMMUNITY);
      });
      const obj2 = { onClose };
      const replaced = navigation.replace(constants.COMMUNITY, obj2);
    }
  }, items3);
  const obj7 = { style: tmp.container, contentContainerStyle: items4, children: items5 };
  items4 = [tmp.contentPadding, contentContainerStyle];
  const obj6 = { children: items7 };
  items5 = [, , , , , ];
  const obj5 = require("IntroHeader");
  const obj8 = { resizeMode: "contain", source: obj5.useIntroHeaderSource(), style: tmp.headerImage };
  items5[0] = closure_14(stateFromStores2, obj8);
  const obj9 = { style: tmp.header, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: intl.string(require("intl").t["M/gBcA"]) };
  const Heading = require("Text/Text").Heading;
  intl = require("intl").intl;
  items5[1] = closure_14(Heading, obj9);
  const obj10 = { style: tmp.body, variant: "text-md/medium", color: "text-default", children: format(v52EgsM, obj11) };
  const Text = require("Text/Text").Text;
  const intl2 = require("intl").intl;
  format = intl2.format;
  obj11 = { helpdeskArticle: obj12.getArticleURL(constants.FRIEND_COMMUNITY_DISCOVERABLE_GUILD_TYPES) };
  v52EgsM = require("intl").t["52EgsM"];
  obj12 = onClose(navigation[19]);
  items5[2] = closure_14(Text, obj10);
  const obj13 = {
    text: intl3.string(require("intl").t.LhlgY9),
    onPress() {
      const tmp = stateFromStores1;
      if (tmp) {
        const obj2 = EnableCommunityModalActionCreatorsDefault;
        obj2.open();
      } else {
        const obj = ToastUtils;
        obj.communityAdminOnly();
      }
    },
    disabled: !stateFromStores1
  };
  const Button = require("components/Button/Button").Button;
  intl3 = require("intl").intl;
  items5[3] = closure_14(Button, obj13);
  const obj14 = { style: tmp.details, variant: "text-sm/medium", color: "text-default", children: intl4.string(require("intl").t.HgTI2N) };
  const Text2 = require("Text/Text").Text;
  intl4 = require("intl").intl;
  items5[4] = closure_14(Text2, obj14);
  const obj15 = {
    style: tmp.features,
    children: items6.map((item, index) => {
      const obj = {};
      const merged = Object.assign(item);
      return closure_1_14(FeatureCard, obj, index);
    })
  };
  const obj16 = {
    icon() {
      const obj = { color: onClose(navigation[8]).unsafe_rawColors.GREEN_360 };
      const AnalyticsIcon = require("AnalyticsIcon").AnalyticsIcon;
      return closure_1_14(AnalyticsIcon, obj);
    },
    header: intl5.string(require("intl").t.oVQF2y),
    body: intl6.format(require("intl").t.A6G7ak, obj17)
  };
  intl5 = require("intl").intl;
  intl6 = require("intl").intl;
  items6 = [obj16, , ];
  obj17 = {
    featureHook(children, arg1) {
      const obj = { variant: "text-sm/semibold", color: "mobile-text-heading-primary", children };
      return closure_1_14(require("Text/Text").Text, obj, arg1);
    }
  };
  const obj18 = {
    icon() {
      const obj = { color: onClose(navigation[8]).unsafe_rawColors.YELLOW_300 };
      const LightbulbIcon = require("LightbulbIcon").LightbulbIcon;
      return closure_1_14(LightbulbIcon, obj);
    },
    header: intl7.string(require("intl").t["0rJl9y"]),
    body: intl8.format(require("intl").t.XsCNky, obj19)
  };
  intl7 = require("intl").intl;
  intl8 = require("intl").intl;
  obj19 = {
    infoHook() {
      return null;
    },
    featureHook(children, arg1) {
      const obj = { variant: "text-sm/semibold", color: "mobile-text-heading-primary", children };
      return closure_1_14(require("Text/Text").Text, obj, arg1);
    }
  };
  items6[1] = obj18;
  const obj20 = {
    icon() {
      const obj = { color: onClose(navigation[8]).unsafe_rawColors.PLATFORM_PARTNER };
      const CircleInformationIcon = require("CircleInformationIcon").CircleInformationIcon;
      return closure_1_14(CircleInformationIcon, obj);
    },
    header: intl9.string(require("intl").t.W2kLJC),
    body: intl10.string(require("intl").t.hyNkHz)
  };
  intl9 = require("intl").intl;
  intl10 = require("intl").intl;
  items6[2] = obj20;
  items5[5] = closure_14(stateFromStores1, obj15);
  items7 = [closure_15(closure_6, obj7), closure_14(require("NavScrim").NavScrim, {})];
  return closure_15(closure_16, obj6);
};
