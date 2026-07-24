// Module ID: 16516
// Function ID: 128647
// Name: ArchiveOrDeleteTierSection
// Dependencies: [57, 31, 27, 3752, 16471, 14144, 653, 1345, 33, 4130, 689, 1456, 16483, 16479, 5634, 8521, 4126, 4543, 1273, 16517, 5121, 16511, 16509, 16486, 14151, 16466, 11358, 16518, 1212, 14166, 3830, 5087, 5788, 8404, 1334, 16519, 1934, 9678, 9679, 8799, 2]
// Exports: default

// Module 16516 (ArchiveOrDeleteTierSection)
import _slicedToArray from "_slicedToArray";
import HeaderBackImage from "HeaderBackImage";
import get_ActivityIndicator from "ActionableNotice";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { FetchState } from "_isNativeReflectConstruct";
import closure_10 from "_createForOfIteratorHelperLoose";
import { GuildRoleSubscriptionsTierScenes } from "MAX_SUBSCRIPTION_TIERS";
import { GuildSettingsSections } from "ME";
import { ContentDismissActionType } from "ContentDismissActionType";
import jsxProd from "useSegmentedControlState";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_14;
let closure_15;
let closure_16;
let closure_6;
let closure_7;
const require = arg1;
function ArchiveOrDeleteTierSection() {
  let archiving;
  let deleting;
  let descriptionText;
  let editStateId;
  let groupListingId;
  let handleArchiveOrDelete;
  const tmp = _createForOfIteratorHelperLoose();
  let obj = require(1456) /* useNavigation */;
  const navigation = obj.useNavigation();
  let obj1 = require(16483) /* useEditStateContext */;
  const editStateContext = obj1.useEditStateContext();
  const guildId = editStateContext.guildId;
  ({ groupListingId, editStateId } = editStateContext);
  const tmp4 = importDefault(16479)(guildId, groupListingId, editStateId, navigation);
  const buttonText = tmp4.buttonText;
  ({ descriptionText, handleArchiveOrDelete, deleting, archiving } = tmp4);
  let obj2 = require(5634) /* useCreatorMonetizationRestrictions */;
  obj = {};
  obj = { style: tmp.actionHeader, children: buttonText };
  const items = [callback2(importDefault(8521), obj), , ];
  obj1 = { style: tmp.actionDescription, variant: "text-sm/medium", color: "text-default", children: descriptionText };
  items[1] = callback2(require(4126) /* Text */.Text, obj1);
  obj2 = { style: tmp.actionButton };
  const obj3 = { variant: "destructive", grow: true };
  const obj4 = { size: require(1273) /* Button */.Icon.Sizes.SMALL, disableColor: true, source: importDefault(16517) };
  obj3.icon = callback2(require(1273) /* Button */.Icon, obj4);
  obj3.onPress = handleArchiveOrDelete;
  obj3.disabled = !obj2.useShouldRestrictUpdatingCreatorMonetizationSettings(guildId).allowSelfRemoveMonetization || deleting || archiving;
  obj3.text = buttonText;
  obj2.children = callback2(require(4543) /* Button */.Button, obj3);
  items[2] = callback2(closure_6, obj2);
  obj.children = items;
  return closure_16(closure_15, obj);
}
function TabContent(selectedTab) {
  selectedTab = selectedTab.selectedTab;
  const tmp = _createForOfIteratorHelperLoose();
  if (GuildRoleSubscriptionsTierScenes.DETAILS === selectedTab) {
    let obj = { style: tmp.tabContent };
    obj = { bottom: true };
    const items = [callback2(require(16511) /* Content */.GuildRoleSubscriptionTierDetailsTab, {}), callback2(ArchiveOrDeleteTierSection, {})];
    obj.children = items;
    obj.children = callback3(require(5121) /* SafeAreaPaddingView */.SafeAreaPaddingView, obj);
    return callback2(closure_7, obj);
  } else if (GuildRoleSubscriptionsTierScenes.DESIGN === selectedTab) {
    obj = { style: tmp.tabContent };
    const obj1 = { bottom: true, children: callback2(require(16509) /* MemberPreviews */.GuildRoleSubscriptionTierDesignTab, {}) };
    obj.children = callback2(require(5121) /* SafeAreaPaddingView */.SafeAreaPaddingView, obj1);
    return callback2(closure_7, obj);
  } else if (GuildRoleSubscriptionsTierScenes.BENEFITS === selectedTab) {
    return callback2(require(16486) /* AddBenefitButton */.GuildRoleSubscriptionTierBenefitsTab, {});
  } else {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const error = new Error("Unsupported scene: " + selectedTab);
    throw error;
  }
}
({ View: closure_6, ScrollView: closure_7 } = get_ActivityIndicator);
({ jsx: closure_14, Fragment: closure_15, jsxs: closure_16 } = jsxProd);
_createForOfIteratorHelperLoose = { container: { flex: 1 } };
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH, padding: 16 };
_createForOfIteratorHelperLoose.tabsContainer = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.tabsContainerWithDraft = { paddingBottom: 0 };
_createForOfIteratorHelperLoose.actionButton = { alignSelf: "stretch", margin: 16, marginTop: 0 };
_createForOfIteratorHelperLoose.tabContent = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW };
_createForOfIteratorHelperLoose.actionHeader = { marginTop: 24, paddingStart: 16 };
_createForOfIteratorHelperLoose.actionDescription = { marginBottom: 16, marginLeft: 16 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let items = [, , ];
({ DETAILS: arr[0], DESIGN: arr[1], BENEFITS: arr[2] } = GuildRoleSubscriptionsTierScenes);
let closure_19 = items.reduce((arg0, arg1, arg2) => {
  arg0[arg1] = arg2;
  return arg0;
}, {});
let closure_20 = require("HeaderBackImage").forwardRef((arg0, arg1) => {
  let dependencyMap;
  let error;
  let groupListingId;
  let importAll;
  let require;
  let submitting;
  let obj = require(16483) /* useEditStateContext */;
  const editStateContext = obj.useEditStateContext();
  ({ guildId: require, groupListingId } = editStateContext);
  let obj1 = require(14151) /* _createForOfIteratorHelperLoose */;
  const publishSubscriptionListing = obj1.usePublishSubscriptionListing();
  ({ error, publishSubscriptionListing: importAll, clearError: dependencyMap, submitting } = publishSubscriptionListing);
  let obj2 = require(14151) /* _createForOfIteratorHelperLoose */;
  const subscriptionListing = obj2.useSubscriptionListing(editStateContext.editStateId);
  let obj3 = require(16466) /* useRoleSubscriptionSettingsDisabled */;
  const roleSubscriptionSettingsDisabled = obj3.useRoleSubscriptionSettingsDisabled();
  const imperativeHandle = React.useImperativeHandle(arg1, () => ({ dismissError: closure_3 }));
  let tmp6 = null;
  if (null != groupListingId) {
    tmp6 = null;
    if (null != subscriptionListing) {
      tmp6 = null;
      if (!subscriptionListing.published) {
        if (null != error) {
          obj = {};
          obj = { size: 16 };
          const items = [callback2(require(1273) /* Button */.Spacer, obj), , ];
          obj1 = { children: error.getAnyErrorMessage() };
          items[1] = callback2(groupListingId(11358), obj1);
          obj2 = { size: 16 };
          items[2] = callback2(require(1273) /* Button */.Spacer, obj2);
          obj.children = items;
          let tmp16 = callback3(closure_15, obj);
          const tmp14 = groupListingId(11358);
        } else {
          obj3 = {};
          const intl = require(1212) /* getSystemLocale */.intl;
          obj3.message = intl.string(require(1212) /* getSystemLocale */.t.V5mSpz);
          const intl2 = require(1212) /* getSystemLocale */.intl;
          obj3.ctaMessage = intl2.string(require(1212) /* getSystemLocale */.t.Lj6R5m);
          obj3.onClick = function onClick() {
            if (null != groupListingId) {
              if (null != subscriptionListing) {
                const obj = { guildId: closure_0, groupListingId, listingId: subscriptionListing.id };
                return callback(obj);
              }
            }
          };
          obj3.submitting = submitting;
          obj3.disabled = roleSubscriptionSettingsDisabled;
          tmp16 = callback2(groupListingId(16518), obj3);
          const tmp21 = groupListingId(16518);
        }
      }
    }
  }
  return tmp6;
});
let obj1 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW };
const result = require("get ActivityIndicator").fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/GuildSettingsRoleSubscriptionTierEdit.tsx");

export default function GuildSettingsRoleSubscriptionTierEdit(guildId) {
  let c14;
  let tmp15;
  guildId = guildId.guildId;
  const groupListingId = guildId.groupListingId;
  const onBeforeDispatchNewListing = guildId.onBeforeDispatchNewListing;
  let removeEditStateId;
  let ref;
  let hasChanges;
  let loading;
  let handleCreateOrUpdateFromEditState;
  let error;
  let callback;
  let callback2;
  function GuildRoleSubscriptionsTierTemplateSelectedActionSheetImporter() {
    return guildId(first[36])(first[35], first.paths);
  }
  let tmp = _createForOfIteratorHelperLoose();
  const tmp2 = callback(navigation.useState(guildId.initialEditStateId), 2);
  const first = tmp2[0];
  callback = tmp2[1];
  let obj = guildId(first[11]);
  navigation = obj.useNavigation();
  let obj1 = guildId(first[24]);
  const subscriptionListing = obj1.useSubscriptionListing(first);
  let obj2 = onBeforeDispatchNewListing(first[29]);
  const first1 = callback(obj2.useName(first), 1)[0];
  let published;
  if (null != subscriptionListing) {
    published = subscriptionListing.published;
  }
  let obj3 = onBeforeDispatchNewListing(first[29]);
  removeEditStateId = obj3.useEditStateIds(groupListingId, guildId).removeEditStateId;
  ref = navigation.useRef(null);
  let obj4 = onBeforeDispatchNewListing(first[29]);
  hasChanges = obj4.useHasChanges(first);
  let obj5 = onBeforeDispatchNewListing(first[29]);
  const createOrUpdateListingFromEditState = obj5.useCreateOrUpdateListingFromEditState();
  loading = createOrUpdateListingFromEditState.loading;
  handleCreateOrUpdateFromEditState = createOrUpdateListingFromEditState.handleCreateOrUpdateFromEditState;
  error = createOrUpdateListingFromEditState.error;
  let items = [guildId, handleCreateOrUpdateFromEditState, first, groupListingId, onBeforeDispatchNewListing, removeEditStateId];
  callback = navigation.useCallback(() => handleCreateOrUpdateFromEditState({
    guildId,
    editStateId: first,
    groupListingId,
    onBeforeDispatchNewListing,
    onAfterDispatchNewListing(id) {
      outer1_4(id.id);
      outer1_7(outer1_3);
    }
  }), items);
  const items1 = [error];
  const layoutEffect = navigation.useLayoutEffect(() => {
    if (null != error) {
      let anyErrorMessage = error.getAnyErrorMessage();
      if (null == anyErrorMessage) {
        const intl = guildId(first[28]).intl;
        anyErrorMessage = intl.string(guildId(first[28]).t.R0RpRX);
      }
      guildId(first[30]).presentError(anyErrorMessage);
      const obj = guildId(first[30]);
    }
  }, items1);
  [tmp15, c14] = callback(loading.useRoleTierEditStore((currentScene) => {
    let DETAILS = currentScene.currentScene;
    if (null == DETAILS) {
      DETAILS = handleCreateOrUpdateFromEditState.DETAILS;
    }
    const items = [DETAILS, currentScene.setScene];
    return items;
  }), 2);
  const items2 = [navigation, hasChanges, first1, loading, callback];
  const layoutEffect1 = navigation.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: loading ? (() => callback(guildId(first[31]).HeaderSubmittingIndicator, {})) : (() => {
        const obj = {};
        const intl = guildId(first[28]).intl;
        obj.text = intl.string(guildId(first[28]).t["R3BPH+"]);
        obj.onPress = outer1_13;
        obj.disabled = !outer1_9;
        return callback(guildId(first[32]).HeaderActionButton, obj);
      }),
      headerTitle() {
        const obj = { title: outer1_6 };
        const intl = guildId(first[28]).intl;
        obj.subtitle = intl.string(guildId(first[28]).t.t94EHg);
        return callback(guildId(first[31]).NavigatorHeader, obj);
      }
    });
  }, items2);
  const items3 = [navigation, first, guildId];
  const layoutEffect2 = navigation.useLayoutEffect(() => {
    if (null == first) {
      const routes = navigation.getState().routes;
      let name;
      if (null != routes[routes.length - 1]) {
        name = tmp7.name;
      }
      const tmp11 = ref.getSubscriptionGroupListingsForGuildFetchState(guildId) === hasChanges.FETCHING;
      if (!tmp3) {
        navigation.pop();
      }
      tmp3 = name !== error.ROLE_SUBSCRIPTIONS_TIER_EDIT || ref.getSubscriptionGroupListingsForGuildFetchState(guildId) === hasChanges.FETCHING;
    }
  }, items3);
  guildId(first[33]);
  obj = {
    pageWidth: 0,
    defaultIndex: table[tmp15],
    onSetActiveIndex(arg0) {
      if (null != outer1_18[arg0]) {
        _undefined(tmp);
        const current = ref.current;
        if (null != current) {
          current.dismissError();
        }
      }
    }
  };
  let intl = guildId(first[28]).intl;
  const items4 = [intl.string(guildId(first[28]).t.f7rGug), , ];
  const intl2 = guildId(first[28]).intl;
  items4[1] = intl2.string(guildId(first[28]).t.YCpDtS);
  const intl3 = guildId(first[28]).intl;
  items4[2] = intl3.string(guildId(first[28]).t.MpDNxN);
  obj.items = items4.map((id) => ({ id, label: id, page: null }));
  if (null == first) {
    return null;
  } else {
    if (undefined === subscriptionListing) {
      const items5 = [guildId(first[34]).DismissibleContent.GUILD_ROLE_SUBSCRIPTION_TIER_TEMPLATES];
      let items6 = items5;
    } else {
      items6 = [];
    }
    obj = { guildId, editStateId: first, groupListingId };
    obj1 = { guildId };
    obj2 = { style: tmp.container };
    obj3 = {
      contentTypes: items6,
      children(markAsDismissed) {
          markAsDismissed = markAsDismissed.markAsDismissed;
          let tmp = null;
          if (markAsDismissed.visibleContent === guildId(first[34]).DismissibleContent.GUILD_ROLE_SUBSCRIPTION_TIER_TEMPLATES) {
            const obj = {
              markAsDismissed() {
                  return markAsDismissed(callback.UNKNOWN);
                },
              actionSheetKey: "TierTemplateSelected",
              importer: GuildRoleSubscriptionsTierTemplateSelectedActionSheetImporter
            };
            tmp = _undefined(guildId(first[38]).DismissibleActionSheet, obj);
          }
          return tmp;
        }
    };
    const items7 = [callback2(groupListingId(first[37]), obj3), , ];
    obj4 = {};
    const items8 = [tmp.tabsContainer, ];
    let prop = null;
    if (!tmp8) {
      prop = tmp.tabsContainerWithDraft;
    }
    items8[1] = prop;
    obj4.style = items8;
    obj5 = { state: tmp19 };
    const items9 = [callback2(guildId(first[39]).SegmentedControl, obj5), ];
    const obj6 = { ref };
    items9[1] = callback2(closure_20, obj6);
    obj4.children = items9;
    items7[1] = closure_16(first1, obj4);
    const obj7 = { selectedTab: tmp15 };
    items7[2] = callback2(TabContent, obj7);
    obj2.children = items7;
    obj1.children = closure_16(first1, obj2);
    obj.children = callback2(guildId(first[25]).RoleSubscriptionSettingsDisabledContextProvider, obj1);
    return callback2(guildId(first[12]).EditStateContextProvider, obj);
  }
  const tmp14 = callback(loading.useRoleTierEditStore((currentScene) => {
    let DETAILS = currentScene.currentScene;
    if (null == DETAILS) {
      DETAILS = handleCreateOrUpdateFromEditState.DETAILS;
    }
    const items = [DETAILS, currentScene.setScene];
    return items;
  }), 2);
  tmp8 = null != published && published;
};
