// Module ID: 16329
// Function ID: 126015
// Name: ArchiveOrDeleteTierSection
// Dependencies: []
// Exports: default

// Module 16329 (ArchiveOrDeleteTierSection)
function ArchiveOrDeleteTierSection() {
  let archiving;
  let deleting;
  let descriptionText;
  let editStateId;
  let groupListingId;
  let handleArchiveOrDelete;
  const tmp = callback4();
  let obj = arg1(dependencyMap[11]);
  const navigation = obj.useNavigation();
  let obj1 = arg1(dependencyMap[12]);
  const editStateContext = obj1.useEditStateContext();
  const guildId = editStateContext.guildId;
  ({ groupListingId, editStateId } = editStateContext);
  const tmp4 = importDefault(dependencyMap[13])(guildId, groupListingId, editStateId, navigation);
  const buttonText = tmp4.buttonText;
  ({ descriptionText, handleArchiveOrDelete, deleting, archiving } = tmp4);
  let obj2 = arg1(dependencyMap[14]);
  obj = {};
  obj = { style: tmp.actionHeader, children: buttonText };
  const items = [callback2(importDefault(dependencyMap[15]), obj), , ];
  obj1 = { style: tmp.actionDescription, children: descriptionText };
  items[1] = callback2(arg1(dependencyMap[16]).Text, obj1);
  obj2 = { style: tmp.actionButton };
  const obj3 = { 0: null, 0: "cd56776b15e7bd14c7a90ab94f818fde" };
  const obj4 = { size: arg1(dependencyMap[18]).Icon.Sizes.SMALL, disableColor: true, source: importDefault(dependencyMap[19]) };
  obj3.icon = callback2(arg1(dependencyMap[18]).Icon, obj4);
  obj3.onPress = handleArchiveOrDelete;
  obj3.disabled = !obj2.useShouldRestrictUpdatingCreatorMonetizationSettings(guildId).allowSelfRemoveMonetization || deleting || archiving;
  obj3.text = buttonText;
  obj2.children = callback2(arg1(dependencyMap[17]).Button, obj3);
  items[2] = callback2(closure_6, obj2);
  obj.children = items;
  return closure_16(closure_15, obj);
}
function TabContent(selectedTab) {
  selectedTab = selectedTab.selectedTab;
  const tmp = callback4();
  if (GuildRoleSubscriptionsTierScenes.DETAILS === selectedTab) {
    let obj = { style: tmp.tabContent };
    obj = { bottom: true };
    const items = [callback2(arg1(dependencyMap[21]).GuildRoleSubscriptionTierDetailsTab, {}), callback2(ArchiveOrDeleteTierSection, {})];
    obj.children = items;
    obj.children = callback3(arg1(dependencyMap[20]).SafeAreaPaddingView, obj);
    return callback2(closure_7, obj);
  } else if (GuildRoleSubscriptionsTierScenes.DESIGN === selectedTab) {
    obj = { style: tmp.tabContent };
    const obj1 = { bottom: true, children: callback2(arg1(dependencyMap[22]).GuildRoleSubscriptionTierDesignTab, {}) };
    obj.children = callback2(arg1(dependencyMap[20]).SafeAreaPaddingView, obj1);
    return callback2(closure_7, obj);
  } else if (GuildRoleSubscriptionsTierScenes.BENEFITS === selectedTab) {
    return callback2(arg1(dependencyMap[23]).GuildRoleSubscriptionTierBenefitsTab, {});
  } else {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const error = new Error("Unsupported scene: " + selectedTab);
    throw error;
  }
}
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importAll(dependencyMap[1]);
({ View: closure_6, ScrollView: closure_7 } = arg1(dependencyMap[2]));
let closure_8 = importDefault(dependencyMap[3]);
const FetchState = arg1(dependencyMap[3]).FetchState;
let closure_10 = importAll(dependencyMap[4]);
const GuildRoleSubscriptionsTierScenes = arg1(dependencyMap[5]).GuildRoleSubscriptionsTierScenes;
const GuildSettingsSections = arg1(dependencyMap[6]).GuildSettingsSections;
const ContentDismissActionType = arg1(dependencyMap[7]).ContentDismissActionType;
const tmp2 = arg1(dependencyMap[2]);
({ jsx: closure_14, Fragment: closure_15, jsxs: closure_16 } = arg1(dependencyMap[8]));
let obj = arg1(dependencyMap[9]);
obj = { container: { flex: 1 } };
obj = { backgroundColor: importDefault(dependencyMap[10]).colors.BACKGROUND_SURFACE_HIGH, padding: 16 };
obj.tabsContainer = obj;
obj.tabsContainerWithDraft = { paddingBottom: 0 };
obj.actionButton = {};
const tmp3 = arg1(dependencyMap[8]);
obj.tabContent = { backgroundColor: importDefault(dependencyMap[10]).colors.BACKGROUND_BASE_LOW };
obj.actionHeader = {};
obj.actionDescription = { display: "<string:16777479>", flexDirection: "<string:36295491>" };
let closure_17 = obj.createStyles(obj);
const items = [, , ];
({ DETAILS: arr[0], DESIGN: arr[1], BENEFITS: arr[2] } = GuildRoleSubscriptionsTierScenes);
let closure_19 = items.reduce((arg0, arg1, arg2) => {
  arg0[arg1] = arg2;
  return arg0;
}, {});
let closure_20 = arg1(dependencyMap[1]).forwardRef((arg0, arg1) => {
  let error;
  let groupListingId;
  let submitting;
  let obj = arg1(dependencyMap[12]);
  const editStateContext = obj.useEditStateContext();
  ({ guildId: closure_0, groupListingId } = editStateContext);
  const importDefault = groupListingId;
  let obj1 = arg1(dependencyMap[24]);
  const publishSubscriptionListing = obj1.usePublishSubscriptionListing();
  ({ error, publishSubscriptionListing: closure_2, clearError: closure_3, submitting } = publishSubscriptionListing);
  let obj2 = arg1(dependencyMap[24]);
  const subscriptionListing = obj2.useSubscriptionListing(editStateContext.editStateId);
  let closure_4 = subscriptionListing;
  let obj3 = arg1(dependencyMap[25]);
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
          const items = [callback2(arg1(dependencyMap[18]).Spacer, obj), , ];
          obj1 = { children: error.getAnyErrorMessage() };
          items[1] = callback2(importDefault(dependencyMap[26]), obj1);
          obj2 = { size: 16 };
          items[2] = callback2(arg1(dependencyMap[18]).Spacer, obj2);
          obj.children = items;
          let tmp16 = callback3(closure_15, obj);
          const tmp14 = importDefault(dependencyMap[26]);
        } else {
          obj3 = {};
          const intl = arg1(dependencyMap[28]).intl;
          obj3.message = intl.string(arg1(dependencyMap[28]).t.V5mSpz);
          const intl2 = arg1(dependencyMap[28]).intl;
          obj3.ctaMessage = intl2.string(arg1(dependencyMap[28]).t.Lj6R5m);
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
          tmp16 = callback2(importDefault(dependencyMap[27]), obj3);
          const tmp21 = importDefault(dependencyMap[27]);
        }
      }
    }
  }
  return tmp6;
});
const obj1 = { backgroundColor: importDefault(dependencyMap[10]).colors.BACKGROUND_BASE_LOW };
const result = arg1(dependencyMap[40]).fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/GuildSettingsRoleSubscriptionTierEdit.tsx");

export default function GuildSettingsRoleSubscriptionTierEdit(guildId) {
  let tmp15;
  guildId = guildId.guildId;
  const arg1 = guildId;
  const groupListingId = guildId.groupListingId;
  const importDefault = groupListingId;
  const onBeforeDispatchNewListing = guildId.onBeforeDispatchNewListing;
  const importAll = onBeforeDispatchNewListing;
  let removeEditStateId;
  let closure_8;
  let FetchState;
  let closure_10;
  let GuildRoleSubscriptionsTierScenes;
  let GuildSettingsSections;
  let ContentDismissActionType;
  let callback2;
  function GuildRoleSubscriptionsTierTemplateSelectedActionSheetImporter() {
    return guildId(first[36])(first[35], first.paths);
  }
  const tmp = callback4();
  const tmp2 = callback(React.useState(guildId.initialEditStateId), 2);
  const first = tmp2[0];
  const dependencyMap = first;
  let callback = tmp2[1];
  let obj = arg1(dependencyMap[11]);
  const navigation = obj.useNavigation();
  const React = navigation;
  let obj1 = arg1(dependencyMap[24]);
  const subscriptionListing = obj1.useSubscriptionListing(first);
  let obj2 = importAll(dependencyMap[29]);
  const first1 = callback(obj2.useName(first), 1)[0];
  let published;
  if (null != subscriptionListing) {
    published = subscriptionListing.published;
  }
  let obj3 = importAll(dependencyMap[29]);
  removeEditStateId = obj3.useEditStateIds(groupListingId, guildId).removeEditStateId;
  const ref = React.useRef(null);
  closure_8 = ref;
  let obj4 = importAll(dependencyMap[29]);
  const hasChanges = obj4.useHasChanges(first);
  FetchState = hasChanges;
  let obj5 = importAll(dependencyMap[29]);
  const createOrUpdateListingFromEditState = obj5.useCreateOrUpdateListingFromEditState();
  const loading = createOrUpdateListingFromEditState.loading;
  closure_10 = loading;
  const handleCreateOrUpdateFromEditState = createOrUpdateListingFromEditState.handleCreateOrUpdateFromEditState;
  GuildRoleSubscriptionsTierScenes = handleCreateOrUpdateFromEditState;
  const error = createOrUpdateListingFromEditState.error;
  GuildSettingsSections = error;
  const items = [guildId, handleCreateOrUpdateFromEditState, first, groupListingId, onBeforeDispatchNewListing, removeEditStateId];
  callback = React.useCallback(() => handleCreateOrUpdateFromEditState({
    guildId,
    editStateId: first,
    groupListingId,
    onBeforeDispatchNewListing,
    onAfterDispatchNewListing(id) {
      callback(id.id);
      callback2(closure_3);
    }
  }), items);
  ContentDismissActionType = callback;
  const items1 = [error];
  const layoutEffect = React.useLayoutEffect(() => {
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
  [tmp15, closure_14] = callback(closure_10.useRoleTierEditStore((currentScene) => {
    let DETAILS = currentScene.currentScene;
    if (null == DETAILS) {
      DETAILS = handleCreateOrUpdateFromEditState.DETAILS;
    }
    const items = [DETAILS, currentScene.setScene];
    return items;
  }), 2);
  const items2 = [navigation, hasChanges, first1, loading, callback];
  const layoutEffect1 = React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: loading ? () => callback2(callback(closure_3[31]).HeaderSubmittingIndicator, {}) : () => {
        const obj = {};
        const intl = callback(closure_3[28]).intl;
        obj.text = intl.string(callback(closure_3[28]).t.R3BPH+);
        obj.onPress = closure_13;
        obj.disabled = !closure_9;
        return callback2(callback(closure_3[32]).HeaderActionButton, obj);
      },
      headerTitle() {
        const obj = { title: closure_6 };
        const intl = callback(closure_3[28]).intl;
        obj.subtitle = intl.string(callback(closure_3[28]).t.t94EHg);
        return callback2(callback(closure_3[31]).NavigatorHeader, obj);
      }
    });
  }, items2);
  const items3 = [navigation, first, guildId];
  const layoutEffect2 = React.useLayoutEffect(() => {
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
      const tmp3 = name !== error.ROLE_SUBSCRIPTIONS_TIER_EDIT || ref.getSubscriptionGroupListingsForGuildFetchState(guildId) === hasChanges.FETCHING;
    }
  }, items3);
  arg1(dependencyMap[33]);
  obj = {
    pageWidth: 0,
    defaultIndex: closure_19[tmp15],
    onSetActiveIndex(arg0) {
      if (null != closure_18[arg0]) {
        _undefined(tmp);
        const current = ref.current;
        if (null != current) {
          current.dismissError();
        }
      }
    }
  };
  const intl = arg1(dependencyMap[28]).intl;
  const items4 = [intl.string(arg1(dependencyMap[28]).t.f7rGug), , ];
  const intl2 = arg1(dependencyMap[28]).intl;
  items4[1] = intl2.string(arg1(dependencyMap[28]).t.YCpDtS);
  const intl3 = arg1(dependencyMap[28]).intl;
  items4[2] = intl3.string(arg1(dependencyMap[28]).t.MpDNxN);
  obj.items = items4.map((id) => ({ id, label: id, page: null }));
  if (null == first) {
    return null;
  } else {
    if (undefined === subscriptionListing) {
      const items5 = [arg1(dependencyMap[34]).DismissibleContent.GUILD_ROLE_SUBSCRIPTION_TIER_TEMPLATES];
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
          const guildId = markAsDismissed.markAsDismissed;
          let tmp = null;
          if (markAsDismissed.visibleContent === guildId(first[34]).DismissibleContent.GUILD_ROLE_SUBSCRIPTION_TIER_TEMPLATES) {
            const obj = {
              markAsDismissed() {
                  return markAsDismissed(constants.UNKNOWN);
                },
              actionSheetKey: "TierTemplateSelected",
              importer: GuildRoleSubscriptionsTierTemplateSelectedActionSheetImporter
            };
            tmp = _undefined(guildId(first[38]).DismissibleActionSheet, obj);
          }
          return tmp;
        }
    };
    const items7 = [callback2(importDefault(dependencyMap[37]), obj3), , ];
    obj4 = {};
    const items8 = [tmp.tabsContainer, ];
    let prop = null;
    if (!tmp8) {
      prop = tmp.tabsContainerWithDraft;
    }
    items8[1] = prop;
    obj4.style = items8;
    obj5 = { state: tmp19 };
    const items9 = [callback2(arg1(dependencyMap[39]).SegmentedControl, obj5), ];
    const obj6 = { ref };
    items9[1] = callback2(closure_20, obj6);
    obj4.children = items9;
    items7[1] = closure_16(first1, obj4);
    const obj7 = { selectedTab: tmp15 };
    items7[2] = callback2(TabContent, obj7);
    obj2.children = items7;
    obj1.children = closure_16(first1, obj2);
    obj.children = callback2(arg1(dependencyMap[25]).RoleSubscriptionSettingsDisabledContextProvider, obj1);
    return callback2(arg1(dependencyMap[12]).EditStateContextProvider, obj);
  }
  const tmp14 = callback(closure_10.useRoleTierEditStore((currentScene) => {
    let DETAILS = currentScene.currentScene;
    if (null == DETAILS) {
      DETAILS = handleCreateOrUpdateFromEditState.DETAILS;
    }
    const items = [DETAILS, currentScene.setScene];
    return items;
  }), 2);
  const tmp8 = null != published && published;
};
