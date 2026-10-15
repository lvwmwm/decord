// Module ID: 18883
// Function ID: 18884
// Name: GuildSettingsRoleSubscriptionTierTemplateSelection
// Dependencies: [32, 19, 17, 16175, 18832, 1085, 21, 5151, 587, 558, 576, 5147, 18884, 7034, 573, 16153, 16154, 11957, 18890, 1631, 1503, 1265, 5166, 18840, 9942, 1126, 6421, 1273, 9189, 1200, 18827, 2]

// Module 18883 (GuildSettingsRoleSubscriptionTierTemplateSelection)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1265 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5166 */;
import NavigatorHeader from "NavigatorHeader" /* 6421 */;
import RoleTierEditStore from "RoleTierEditStore" /* 18832 */;
import GuildRoleSubscriptionsActionCreatorExtrasAll from "GuildRoleSubscriptionsActionCreatorExtras" /* 18840 */;
import GuildRoleSubscriptionTierTemplatePreviewCardDefault from "GuildRoleSubscriptionTierTemplatePreviewCard" /* 18884 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import GuildRoleSubscriptionTierTemplatesStore from "GuildRoleSubscriptionTierTemplatesStore" /* 16175 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5151 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let importDefault, navigation, num, tmp2;

let closure_12;
let closure_14;
let map1;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let tmp;
let unpackModuleId;
const GroupListingsFetchContext = tmp(16154);
({ ActivityIndicator: metroRequire, TouchableOpacity: metroImportDefault, View: metroImportAll } = react_native);
const usePriceTiers = RoleTierEditStore.usePriceTiers;
({ AnalyticEvents: unpackModuleId, GuildSettingsSections: closure_12 } = Constants);
({ jsx: map1, jsxs: closure_14 } = Fragment);
let c15 = 16;
let createStyles = createStyles_mod;
let obj = { container: { marginTop: 16 }, title: obj2, text: { marginLeft: 16, marginRight: 16 }, activityIndicator: obj3, editIcon: obj4, startFromScratch: { display: "flex", flexDirection: "row", alignItems: "center", marginRight: 12 } };
obj2 = { color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
createStyles = createStyles.createStyles;
obj3 = { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
obj4 = { color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE, marginRight: 4 };
let closure_16 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_17 = ReactCompilerGating.isReactCompilerEnabled() ? (function TierTemplatesRenderer(groupListingId) {
  let error;
  let guildId;
  let items;
  let templates;
  let tmp6;
  let width;
  let obj = guildId(576);
  const cResult = obj.c(14);
  ({ templates, error, guildId } = groupListingId);
  groupListingId = groupListingId.groupListingId;
  const loading = groupListingId.loading;
  const tmp4 = closure_16();
  const tiers = usePriceTiers(guildId).tiers;
  if (loading) {
    let tmp19;
    if (cResult[0] !== tmp4.activityIndicator.color) {
      const obj2 = { color: tmp4.activityIndicator.color };
      const tmp22 = closure_13(closure_6, obj2);
      cResult[0] = tmp4.activityIndicator.color;
      cResult[1] = tmp22;
      tmp19 = tmp22;
    } else {
      tmp19 = cResult[1];
    }
    tmp6 = tmp19;
  } else if (null != error) {
    let tmp16;
    if (cResult[2] !== error.message) {
      const obj3 = { variant: "text-xs/normal", color: "text-feedback-critical", children: items };
      items = ["Error: ", error.message];
      const tmp18 = closure_14(guildId(5147).Text, obj3);
      cResult[2] = error.message;
      cResult[3] = tmp18;
      tmp16 = tmp18;
    } else {
      tmp16 = cResult[3];
    }
    tmp6 = tmp16;
  } else {
    tmp6 = null;
    if (null != templates) {
      tmp6 = null;
      if (0 !== templates.length) {
        let tmp9;
        let tmp7;
        const _Symbol = Symbol;
        if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
          const obj4 = { paddingLeft: v16, paddingRight: v16 };
          const fn = function u(category) {
            return category.category;
          };
          const fn2 = function p() {
            const obj = { style: size };
            size = { height: "100%", width };
            return closure_1_13(closure_1_8, obj);
          };
          class T {
            constructor(template) {
              const obj = { template: template.item, priceTiers: tiers, guildId, groupListingId, editGroupId: guildId };
              return map1(GuildRoleSubscriptionTierTemplatePreviewCardDefault, obj);
            }
          }
          cResult[4] = obj4;
          cResult[5] = fn;
          cResult[6] = fn2;
          tmp9 = fn2;
          tmp7 = obj4;
        } else {
          tmp7 = cResult[4];
          tmp9 = cResult[6];
        }
        if (cResult[7] === groupListingId) {
          if (cResult[8] === guildId) {
            let tmp11;
            if (cResult[9] === tiers) {
              tmp11 = cResult[10];
            }
            if (cResult[11] === tmp11) {
              let tmp12;
              if (cResult[12] === templates) {
                tmp12 = cResult[13];
              }
              tmp6 = tmp12;
            }
            const obj5 = { data: templates, horizontal: true, contentContainerStyle: tmp7, keyExtractor: null, ItemSeparatorComponent: tmp9, decelerationRate: "fast", snapToInterval: guildId(18884).CARD_WIDTH + v16, renderItem: tmp11 };
            class T {
              constructor(template) {
                const obj = { template: template.item, priceTiers: tiers, guildId, groupListingId, editGroupId: guildId };
                return map1(GuildRoleSubscriptionTierTemplatePreviewCardDefault, obj);
              }
            }
            const FlashList = tmp(7034).FlashList;
            const tmp15 = closure_13(FlashList, obj5);
            cResult[11] = tmp11;
            cResult[12] = templates;
            cResult[13] = tmp15;
            tmp12 = tmp15;
          }
        }
        class T {
          constructor(template) {
            const obj = { template: template.item, priceTiers: tiers, guildId, groupListingId, editGroupId: guildId };
            return map1(GuildRoleSubscriptionTierTemplatePreviewCardDefault, obj);
          }
        }
        cResult[7] = groupListingId;
        cResult[8] = guildId;
        cResult[9] = tiers;
        cResult[10] = T;
        tmp11 = T;
      }
    }
  }
  return tmp6;
}) : (function TierTemplatesRenderer(groupListingId) {
  let error;
  let guildId;
  let items;
  let obj4;
  let templates;
  let tmp3;
  let width;
  ({ templates, error, guildId } = groupListingId);
  groupListingId = groupListingId.groupListingId;
  const loading = groupListingId.loading;
  const tmp = closure_16();
  const tiers = usePriceTiers(guildId).tiers;
  if (loading) {
    const obj2 = { color: tmp.activityIndicator.color };
    tmp3 = closure_13(closure_6, obj2);
  } else if (null != error) {
    let obj = { variant: "text-xs/normal", color: "text-feedback-critical", children: items };
    items = ["Error: ", error.message];
    tmp3 = closure_14(guildId(5147).Text, obj);
  } else {
    tmp3 = null;
    if (null != templates) {
      tmp3 = null;
      if (0 !== templates.length) {
        const obj3 = {
          data: templates,
          horizontal: true,
          contentContainerStyle: obj4,
          keyExtractor(category) {
                  return category.category;
                },
          ItemSeparatorComponent() {
                  const obj = { style: size };
                  size = { height: "100%", width };
                  return closure_1_13(closure_1_8, obj);
                },
          decelerationRate: "fast",
          snapToInterval: guildId(18884).CARD_WIDTH + v16,
          renderItem(template) {
                  const obj = { template: template.item, priceTiers: tiers, guildId, groupListingId, editGroupId: guildId };
                  return map1(GuildRoleSubscriptionTierTemplatePreviewCardDefault, obj);
                }
        };
        obj4 = { paddingLeft: v16, paddingRight: v16 };
        const FlashList = guildId(7034).FlashList;
        tmp3 = closure_13(FlashList, obj3);
      }
    }
  }
  return tmp3;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_18 = ReactCompilerGating.isReactCompilerEnabled() ? (function GuildSettingsRoleSubscriptionTierTemplateSelectionComponent(guildId) {
  let closure_1;
  let error;
  let first;
  let first2;
  let groupListingId;
  let loading;
  let tmp7;
  let tmp = guildId;
  let obj = guildId(groupListingId[10]);
  const cResult = obj.c(62);
  guildId = guildId.guildId;
  groupListingId = guildId.groupListingId;
  importDefault = closure_16();
  const tmp4 = closure_16();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [GuildRoleSubscriptionTierTemplatesStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guildId) {
    class I {
      constructor() {
        return closure_9.getTemplates(guildId);
      }
    }
    cResult[1] = guildId;
    cResult[2] = I;
    tmp7 = I;
  } else {
    class I {
      constructor() {
        return closure_9.getTemplates(guildId);
      }
    }
  }
  const tmpResult = tmp(groupListingId[14]);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp7);
  const tmpResult4 = tmp(groupListingId[15]);
  const first1 = tmpResult4.useGroupListingsForGuild(guildId)[0];
  const tmpResult5 = tmp(groupListingId[16]);
  const groupListingsFetchContext = tmpResult5.useGroupListingsFetchContext();
  if (groupListingId == null) {
    class I {
      constructor() {
        return closure_9.getTemplates(guildId);
      }
    }
    if (first1 != null) {
      class I {
        constructor() {
          return closure_9.getTemplates(guildId);
        }
      }
    }
    groupListingId = tmp11;
  }
  const tmp12 = require("useRequest");
  const tmp13 = first2(tmp12(stateFromStores(groupListingId[18]).getTemplates), 2);
  first2 = tmp13[0];
  ({ loading, error } = tmp13[1]);
  const bottom = require("useSafeAreaInsets")().bottom;
  const tmpResult6 = tmp(groupListingId[20]);
  navigation = tmpResult6.useNavigation();
  if (cResult[3] === first2) {
    class I {
      constructor() {
        return closure_9.getTemplates(guildId);
      }
    }
  }
  class R {
    constructor() {
      tmp = null != closure_2;
      if (tmp) {
        num = 0;
        tmp = 0 !== closure_2.length;
      }
      if (!tmp) {
        tmp2 = closure_4;
        tmp3 = guildId;
        tmp4 = closure_4(guildId);
      }
      return;
    }
  }
  const items1 = [first2, guildId, stateFromStores];
  cResult[3] = first2;
  cResult[4] = guildId;
  cResult[5] = stateFromStores;
  cResult[6] = R;
  cResult[7] = items1;
}) : (function GuildSettingsRoleSubscriptionTierTemplateSelectionComponent(guildId) {
  let closure_1;
  let error;
  let intl;
  let intl2;
  let intl3;
  let items5;
  let items6;
  let items7;
  let loading;
  let obj6;
  let tmp19;
  let tmp20;
  guildId = guildId.guildId;
  let groupListingId;
  let first1;
  navigation = undefined;
  let callback;
  let callback1;
  let tmp = closure_16();
  importDefault = tmp;
  let obj = guildId(groupListingId[14]);
  let items = [GuildRoleSubscriptionTierTemplatesStore];
  const stateFromStores = obj.useStateFromStores(items, () => GuildRoleSubscriptionTierTemplatesStore.getTemplates(guildId));
  let obj2 = guildId(groupListingId[15]);
  const first = obj2.useGroupListingsForGuild(guildId)[0];
  let obj3 = guildId(groupListingId[16]);
  const groupListingsFetchContext = obj3.useGroupListingsFetchContext();
  if (groupListingId == null) {
    let id;
    if (first != null) {
      id = first.id;
    }
    groupListingId = id;
  }
  const tmp8 = require("useRequest");
  const tmp9 = first1(tmp8(stateFromStores(groupListingId[18]).getTemplates), 2);
  first1 = tmp9[0];
  ({ loading, error } = tmp9[1]);
  const bottom = require("useSafeAreaInsets")().bottom;
  const tmp2Result = guildId(groupListingId[20]);
  navigation = tmp2Result.useNavigation();
  const items1 = [first1, guildId, stateFromStores];
  const effect = navigation.useEffect(() => {
    const tmp = null != stateFromStores && 0 !== stateFromStores.length;
    if (!tmp) {
      first1(guildId);
    }
  }, items1);
  const items2 = [guildId];
  callback = navigation.useCallback(() => {
    const track = AnalyticsUtilsDefault.track;
    const ROLE_SUBSCRIPTION_LISTING_TEMPLATE_SELECTOR_EXITED = unpackModuleId.ROLE_SUBSCRIPTION_LISTING_TEMPLATE_SELECTOR_EXITED;
    const obj = { exit_reason: "voluntarily_exit" };
    AnalyticsUtilsDefault;
    const obj2 = AppAnalyticsUtils;
    const merged = Object.assign(obj2.collectGuildAnalyticsMetadata(guildId));
    track(ROLE_SUBSCRIPTION_LISTING_TEMPLATE_SELECTOR_EXITED, obj);
  }, items2);
  const items3 = [guildId, groupListingId, navigation];
  callback1 = navigation.useCallback(() => {
    const track = AnalyticsUtilsDefault.track;
    const ROLE_SUBSCRIPTION_LISTING_TEMPLATE_SELECTOR_EXITED = unpackModuleId.ROLE_SUBSCRIPTION_LISTING_TEMPLATE_SELECTOR_EXITED;
    const obj = { exit_reason: "create_from_scratch" };
    AnalyticsUtilsDefault;
    const obj2 = AppAnalyticsUtils;
    const merged = Object.assign(obj2.collectGuildAnalyticsMetadata(guildId));
    track(ROLE_SUBSCRIPTION_LISTING_TEMPLATE_SELECTOR_EXITED, obj);
    const obj3 = GuildRoleSubscriptionsActionCreatorExtrasAll;
    const obj4 = {
      guildId,
      groupListingId,
      onAfterTierCreation() {
        navigation.navigate(constants.ROLE_SUBSCRIPTIONS_TIERS);
      }
    };
    const result = obj3.openTierCreationModal(obj4);
  }, items3);
  const items4 = [navigation, callback1, callback, tmp];
  const layoutEffect = navigation.useLayoutEffect(() => {
    let obj2;
    let onPress;
    let obj = {
      headerRight() {
        let Text;
        let intl;
        let items;
        let obj3;
        let obj5;
        const obj = { onPress, style: closure_1_1.startFromScratch, activeOpacity: 0.5, children: items };
        const obj2 = { style: closure_1_1.editIcon, children: closure_2_13(guildId(groupListingId[24]).PencilIcon, obj3) };
        obj3 = { color: closure_1_1.editIcon.color, size: "xs" };
        items = [closure_2_13(closure_2_8, obj2), ];
        const obj4 = { children: closure_2_13(Text, obj5) };
        obj5 = { variant: "text-md/medium", color: "interactive-text-active", children: intl.string(guildId(groupListingId[25]).t.WNWtkB) };
        Text = guildId(groupListingId[11]).Text;
        intl = guildId(groupListingId[25]).intl;
        items[1] = closure_2_13(closure_2_8, obj4);
        return closure_2_14(callback1, obj);
      },
      headerTitle() {
        return closure_1_13(closure_1_8, {});
      },
      headerLeft: obj2.getHeaderBackButton(callback)
    };
    const setOptions = navigation.setOptions;
    obj2 = NavigatorHeader;
    setOptions(obj);
  }, items4);
  let obj4 = { type: tmp2(tmp3[27]).ImpressionTypes.PAGE, name: tmp2(tmp3[27]).ImpressionNames.ROLE_SUBSCRIPTION_LISTING_TEMPLATE_SELECTOR, properties: { guild_id: guildId } };
  const tmp16 = require("useTrackImpression");
  tmp16(obj4);
  let obj5 = { guildId, children: tmp19(tmp20, obj6) };
  obj6 = { style: items5, children: items7 };
  items5 = [tmp.container, { paddingBottom: bottom }];
  const RoleSubscriptionSettingsDisabledContextProvider = tmp2(tmp3[30]).RoleSubscriptionSettingsDisabledContextProvider;
  const obj7 = { variant: "heading-xl/semibold", style: items6, children: intl.string(guildId(groupListingId[25]).t.uYFiKr) };
  items6 = [, ];
  ({ title: arr7[0], text: arr7[1] } = tmp);
  let Text = tmp2(tmp3[11]).Text;
  intl = tmp2(tmp3[25]).intl;
  items7 = [closure_13(Text, obj7), closure_13(tmp2(tmp3[29]).Spacer, { size: 8 }), , , , , ];
  const obj8 = { variant: "text-sm/medium", style: tmp.text, children: intl2.string(guildId(groupListingId[25]).t["ne+rg6"]) };
  const Text2 = tmp2(tmp3[11]).Text;
  intl2 = tmp2(tmp3[25]).intl;
  items7[2] = closure_13(Text2, obj8);
  items7[3] = closure_13(guildId(groupListingId[29]).Spacer, { size: 8 });
  const obj9 = { variant: "text-sm/medium", style: tmp.text, children: intl3.format(guildId(groupListingId[25]).t.iQML2g, { creatorPortalUrl: "https://discord.com/creator-portal/learn-from-creators?tab=lightning-lessons" }) };
  const Text3 = tmp2(tmp3[11]).Text;
  intl3 = tmp2(tmp3[25]).intl;
  items7[4] = closure_13(Text3, obj9);
  items7[5] = closure_13(guildId(groupListingId[29]).Spacer, { size: 24 });
  const obj10 = { templates: stateFromStores, loading, error, guildId, groupListingId };
  tmp19 = closure_14;
  tmp20 = closure_8;
  const tmp21 = closure_17;
  if (!loading) {
    loading = !groupListingsFetchContext;
  }
  items7[6] = closure_13(tmp21, obj10);
  return closure_13(RoleSubscriptionSettingsDisabledContextProvider, obj5);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function GuildSettingsRoleSubscriptionTierTemplateSelection(guildId) {
  let tmp4;
  const obj = react2;
  const cResult = obj.c(5);
  if (cResult[0] !== guildId) {
    const obj2 = {};
    const merged = Object.assign(guildId);
    const tmp10 = map1(closure_18, obj2);
    cResult[0] = guildId;
    cResult[1] = tmp10;
    tmp4 = tmp10;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] === guildId.guildId) {
    let tmp11;
    if (cResult[3] === tmp4) {
      tmp11 = cResult[4];
    }
    return tmp11;
  }
  const obj3 = { guildId: guildId.guildId, children: tmp4 };
  const tmp12 = map1(GroupListingsFetchContext.GroupListingsFetchContextProvider, obj3);
  cResult[2] = guildId.guildId;
  cResult[3] = tmp4;
  cResult[4] = tmp12;
  tmp11 = tmp12;
}) : (function GuildSettingsRoleSubscriptionTierTemplateSelection(guildId) {
  let obj2;
  const obj = { guildId: guildId.guildId, children: map1(closure_18, obj2) };
  obj2 = {};
  const GroupListingsFetchContextProvider = GroupListingsFetchContext.GroupListingsFetchContextProvider;
  const merged = Object.assign(guildId);
  return map1(GroupListingsFetchContextProvider, obj);
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/tier_templates/GuildSettingsRoleSubscriptionTierTemplateSelection.tsx");

export default tmp6;
