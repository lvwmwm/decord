// Module ID: 16351
// Function ID: 127655
// Name: FeatureCard
// Dependencies: [31, 27, 1838, 3758, 8439, 653, 33, 4130, 689, 9597, 1212, 4126, 15147, 4086, 1456, 566, 686, 8438, 16352, 5459, 1920, 4543, 16356, 3830, 5448, 2]
// Exports: default

// Module 16351 (FeatureCard)
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import closure_7 from "_createForOfIteratorHelperLoose";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import ME from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_12;
let closure_13;
let closure_14;
let closure_15;
let closure_16;
let closure_4;
let closure_5;
let closure_6;
const require = arg1;
function FeatureCard(arg0) {
  let body;
  let header;
  let icon;
  ({ icon, header, body } = arg0);
  const tmp = _createForOfIteratorHelperLoose();
  let obj = { style: tmp.featureCard };
  obj = { style: tmp.featureIcon, children: icon() };
  const items = [callback(closure_4, obj), ];
  obj = { style: tmp.featureDescription };
  const obj1 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: header };
  const items1 = [callback(require(4126) /* Text */.Heading, obj1), ];
  const obj2 = { variant: "text-sm/medium", color: "text-default", children: body };
  items1[1] = callback(require(4126) /* Text */.Text, obj2);
  obj.children = items1;
  items[1] = callback2(closure_4, obj);
  obj.children = items;
  return callback2(closure_4, obj);
}
({ View: closure_4, Image: closure_5, ScrollView: closure_6 } = get_ActivityIndicator);
({ HelpdeskArticles: closure_10, GuildFeatures: closure_11, GuildSettingsSections: closure_12, Permissions: closure_13 } = ME);
({ jsx: closure_14, jsxs: closure_15, Fragment: closure_16 } = jsxProd);
_createForOfIteratorHelperLoose = { container: { height: "100%" }, contentPadding: { padding: 16 }, header: { textAlign: "center", marginBottom: 8 }, body: { textAlign: "center", marginBottom: 24 }, details: { textAlign: "center", marginTop: 24 }, headerImage: { width: "100%" }, features: { marginTop: 32, marginBottom: 32 } };
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.CARD_BACKGROUND_DEFAULT, flex: 1, flexDirection: "row", padding: 16, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, marginTop: 8, alignItems: "flex-start" };
_createForOfIteratorHelperLoose.featureCard = _createForOfIteratorHelperLoose;
let obj1 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_STRONG, borderRadius: 40, marginRight: 16, padding: 8 };
_createForOfIteratorHelperLoose.featureIcon = obj1;
_createForOfIteratorHelperLoose.featureDescription = { overflow: "hidden", flex: 1 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/guild_settings/community/native/GuildSettingsModalCommunityIntro.tsx");

export default function GuildSettingsModalCommunityIntro(contentContainerStyle) {
  let onClose;
  let require;
  ({ guildId: require, onClose } = contentContainerStyle);
  const tmp = _createForOfIteratorHelperLoose();
  let obj = require(navigation[14]);
  navigation = obj.useNavigation();
  let obj1 = require(navigation[15]);
  const items = [closure_7];
  const stateFromStores = obj1.useStateFromStores(items, () => outer1_7.getGuild(closure_0));
  let obj2 = require(navigation[15]);
  const items1 = [_isNativeReflectConstruct];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => {
    let canResult = null != stateFromStores;
    if (canResult) {
      canResult = outer1_8.can(outer1_13.ADMINISTRATOR, stateFromStores);
    }
    return canResult;
  });
  let obj3 = require(navigation[15]);
  const items2 = [closure_9];
  const stateFromStores2 = obj3.useStateFromStores(items2, () => outer1_9.isSubmitting());
  const items3 = [stateFromStores, stateFromStores2, navigation, onClose];
  const effect = stateFromStores.useEffect(() => {
    let hasItem = !stateFromStores2;
    if (hasItem) {
      hasItem = null != stateFromStores;
    }
    if (hasItem) {
      const features = stateFromStores.features;
      hasItem = features.has(outer1_11.COMMUNITY);
    }
    if (hasItem) {
      let obj = onClose(navigation[16]);
      obj.wait(() => onClose(navigation[17]).setSection(outer2_12.COMMUNITY));
      obj = { onClose };
      const replaced = navigation.replace(outer1_12.COMMUNITY, obj);
    }
  }, items3);
  let obj4 = require(navigation[18]);
  obj = {};
  obj = { style: tmp.container, contentContainerStyle: items4 };
  items4 = [tmp.contentPadding, contentContainerStyle.contentContainerStyle];
  obj1 = { resizeMode: "contain", source: obj4.useIntroHeaderSource(), style: tmp.headerImage };
  const items5 = [callback(stateFromStores2, obj1), , , , , ];
  obj2 = { style: tmp.header, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary" };
  const intl = require(navigation[10]).intl;
  obj2.children = intl.string(require(navigation[10]).t["M/gBcA"]);
  items5[1] = callback(require(navigation[11]).Heading, obj2);
  obj3 = { style: tmp.body, variant: "text-md/medium", color: "text-default" };
  const intl2 = require(navigation[10]).intl;
  obj4 = {};
  let obj11 = onClose(navigation[20]);
  obj4.helpdeskArticle = obj11.getArticleURL(constants.FRIEND_COMMUNITY_DISCOVERABLE_GUILD_TYPES);
  obj3.children = intl2.format(require(navigation[10]).t["52EgsM"], obj4);
  items5[2] = callback(require(navigation[19]).TextWithIOSLinkWorkaround, obj3);
  const obj5 = {};
  const intl3 = require(navigation[10]).intl;
  obj5.text = intl3.string(require(navigation[10]).t.LhlgY9);
  obj5.onPress = function onPress() {
    if (stateFromStores1) {
      onClose(navigation[22]).open();
      const obj2 = onClose(navigation[22]);
    } else {
      outer1_0(navigation[23]).communityAdminOnly();
      const obj = outer1_0(navigation[23]);
    }
  };
  obj5.disabled = !stateFromStores1;
  items5[3] = callback(require(navigation[21]).Button, obj5);
  const obj6 = { style: tmp.details, variant: "text-sm/medium", color: "text-default" };
  const intl4 = require(navigation[10]).intl;
  obj6.children = intl4.string(require(navigation[10]).t.HgTI2N);
  items5[4] = callback(require(navigation[11]).Text, obj6);
  const obj7 = { style: tmp.features };
  const obj8 = {
    icon() {
      const obj = { color: onClose(navigation[8]).unsafe_rawColors.GREEN_360 };
      return outer1_14(outer1_0(navigation[9]).AnalyticsIcon, obj);
    }
  };
  const intl5 = require(navigation[10]).intl;
  obj8.header = intl5.string(require(navigation[10]).t.oVQF2y);
  const intl6 = require(navigation[10]).intl;
  obj8.body = intl6.format(require(navigation[10]).t.A6G7ak, {
    featureHook(children) {
      const obj = { variant: "text-sm/semibold", color: "mobile-text-heading-primary", children };
      return outer1_14(outer1_0(navigation[11]).Text, obj, arg1);
    }
  });
  const items6 = [obj8, , ];
  const obj10 = {
    icon() {
      const obj = { color: onClose(navigation[8]).unsafe_rawColors.YELLOW_300 };
      return outer1_14(outer1_0(navigation[12]).LightbulbIcon, obj);
    }
  };
  const intl7 = require(navigation[10]).intl;
  obj10.header = intl7.string(require(navigation[10]).t["0rJl9y"]);
  const intl8 = require(navigation[10]).intl;
  obj11 = {
    infoHook() {
      return null;
    },
    featureHook(children) {
      const obj = { variant: "text-sm/semibold", color: "mobile-text-heading-primary", children };
      return outer1_14(outer1_0(navigation[11]).Text, obj, arg1);
    }
  };
  obj10.body = intl8.format(require(navigation[10]).t.XsCNky, obj11);
  items6[1] = obj10;
  const obj12 = {
    icon() {
      const obj = { color: onClose(navigation[8]).unsafe_rawColors.PLATFORM_PARTNER };
      return outer1_14(outer1_0(navigation[13]).CircleInformationIcon, obj);
    }
  };
  const intl9 = require(navigation[10]).intl;
  obj12.header = intl9.string(require(navigation[10]).t.W2kLJC);
  const intl10 = require(navigation[10]).intl;
  obj12.body = intl10.string(require(navigation[10]).t.hyNkHz);
  items6[2] = obj12;
  obj7.children = items6.map((arg0, arg1) => {
    const merged = Object.assign(arg0);
    return outer1_14(outer1_18, {}, arg1);
  });
  items5[5] = callback(stateFromStores1, obj7);
  obj.children = items5;
  const items7 = [callback2(closure_6, obj), callback(require(navigation[24]).NavScrim, {})];
  obj.children = items7;
  return callback2(closure_16, obj);
};
