// Module ID: 19984
// Function ID: 19985
// Name: GuildSettingsRoleSubscriptionTierEdit
// Dependencies: [32, 19, 17, 4939, 19942, 17183, 1072, 4860, 21, 5014, 575, 1497, 19953, 19949, 7427, 7060, 5624, 5634, 5738, 7292, 19980, 19978, 19956, 17190, 19938, 12422, 19985, 1113, 17203, 5711, 6998, 7558, 8980, 4847, 19986, 1994, 10520, 10521, 9214, 2]
// Exports: default

// Module 19984 (GuildSettingsRoleSubscriptionTierEdit)
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import intl4 from "intl" /* 1113 */;
import useNavigation from "useNavigation" /* 1497 */;
import dismissible_content from "dismissible_content" /* 4847 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 4860 */;
import GuildRoleSubscriptionsStore2 from "GuildRoleSubscriptionsStore" /* 4939 */;
import Text_Text from "Text/Text" /* 5624 */;
import components_Button_Button from "components/Button/Button" /* 5634 */;
import ToastUtils from "ToastUtils" /* 5711 */;
import TrashIcon2 from "TrashIcon" /* 5738 */;
import TableRowGroup from "TableRowGroup" /* 7060 */;
import common_SafeAreaView from "common/SafeAreaView" /* 7292 */;
import CreatorMonetizationRestrictionsHooks from "CreatorMonetizationRestrictionsHooks" /* 7427 */;
import ErrorBlockDefault from "ErrorBlock" /* 12422 */;
import GuildRoleSubscriptionsConstants from "GuildRoleSubscriptionsConstants" /* 17183 */;
import GuildRoleSubscriptionsHooks from "GuildRoleSubscriptionsHooks" /* 17190 */;
import RoleSubscriptionSettingsDisabledContext from "RoleSubscriptionSettingsDisabledContext" /* 19938 */;
import useArchiveOrDeleteDefault from "useArchiveOrDelete" /* 19949 */;
import EditStateContextProvider2 from "EditStateContextProvider" /* 19953 */;
import GuildRoleSubscriptionTierBenefitsModal from "GuildRoleSubscriptionTierBenefitsModal" /* 19956 */;
import GuildRoleSubscriptionTierDesignModal from "GuildRoleSubscriptionTierDesignModal" /* 19978 */;
import GuildRoleSubscriptionTierDetailsModal from "GuildRoleSubscriptionTierDetailsModal" /* 19980 */;
import ActionableNoticeDefault from "ActionableNotice" /* 19985 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import RoleTierEditStore from "RoleTierEditStore" /* 19942 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

const GuildRoleSubscriptionsStore = GuildRoleSubscriptionsStore2;
let navigation;

let closure_14;
let closure_15;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let tmp;
const DismissibleActionSheet = tmp(10521);
function ArchiveOrDeleteTierSection() {
  let TrashIcon;
  let archiving;
  let buttonText;
  let deleting;
  let descriptionText;
  let editStateId;
  let groupListingId;
  let handleArchiveOrDelete;
  let items1;
  let obj7;
  let tmp8;
  const tmp = closure_16();
  const obj = useNavigation;
  navigation = obj.useNavigation();
  const obj2 = EditStateContextProvider2;
  const editStateContext = obj2.useEditStateContext();
  const guildId = editStateContext.guildId;
  ({ groupListingId, editStateId } = editStateContext);
  ({ buttonText, descriptionText, handleArchiveOrDelete, deleting, archiving } = useArchiveOrDeleteDefault(guildId, groupListingId, editStateId, navigation));
  useArchiveOrDeleteDefault(guildId, groupListingId, editStateId, navigation);
  const obj3 = CreatorMonetizationRestrictionsHooks;
  const allowSelfRemoveMonetization = obj3.useShouldRestrictUpdatingCreatorMonetizationSettings(guildId).allowSelfRemoveMonetization;
  const obj4 = { style: tmp.actionSection, children: items1 };
  const obj5 = { children: items };
  items = [authStore3(TableRowGroup.TableRowGroupTitle, { title: buttonText }), authStore3(Text_Text.Text, { variant: "text-sm/medium", color: "text-default", children: descriptionText })];
  items1 = [closure_15(metroRequire, obj5), ];
  const obj6 = { variant: "destructive", grow: true, icon: authStore3(TrashIcon, obj7), onPress: handleArchiveOrDelete, disabled: tmp8, text: buttonText };
  const Button = components_Button_Button.Button;
  obj7 = { size: "xs", color: nativeDefault.colors.CONTROL_CRITICAL_PRIMARY_TEXT_DEFAULT };
  TrashIcon = TrashIcon2.TrashIcon;
  tmp8 = !allowSelfRemoveMonetization;
  const tmp5 = closure_15;
  const tmp6 = metroRequire;
  const tmp7 = authStore3;
  if (allowSelfRemoveMonetization) {
    tmp8 = deleting;
  }
  if (!tmp8) {
    tmp8 = archiving;
  }
  items1[1] = tmp7(Button, obj6);
  return tmp5(tmp6, obj4);
}
function TabContent(selectedTab) {
  let SafeAreaPaddingView;
  let SafeAreaPaddingView2;
  let obj3;
  let obj4;
  selectedTab = selectedTab.selectedTab;
  const tmp = closure_16();
  if (GuildRoleSubscriptionsTierScenes.DETAILS === selectedTab) {
    const obj2 = { style: tmp.tabContent, children: closure_15(SafeAreaPaddingView2, obj3) };
    obj3 = { bottom: true, children: items };
    SafeAreaPaddingView2 = common_SafeAreaView.SafeAreaPaddingView;
    items = [authStore3(GuildRoleSubscriptionTierDetailsModal.GuildRoleSubscriptionTierDetailsTab, {}), authStore3(ArchiveOrDeleteTierSection, {})];
    return authStore3(metroImportDefault, obj2);
  } else if (GuildRoleSubscriptionsTierScenes.DESIGN === selectedTab) {
    const obj = { style: tmp.tabContent, children: authStore3(SafeAreaPaddingView, obj4) };
    obj4 = { bottom: true, children: authStore3(GuildRoleSubscriptionTierDesignModal.GuildRoleSubscriptionTierDesignTab, {}) };
    SafeAreaPaddingView = common_SafeAreaView.SafeAreaPaddingView;
    return authStore3(metroImportDefault, obj);
  } else if (GuildRoleSubscriptionsTierScenes.BENEFITS === selectedTab) {
    return authStore3(GuildRoleSubscriptionTierBenefitsModal.GuildRoleSubscriptionTierBenefitsTab, {});
  } else {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const self = this;
    const self2 = this;
    const error = new Error("Unsupported scene: " + selectedTab);
    throw error;
  }
}
function DraftPublishPrompt(ref) {
  let c0;
  let c2;
  let c3;
  let error;
  let groupListingId;
  let intl;
  let intl2;
  let obj6;
  let submitting;
  let tmp14;
  ref = ref.ref;
  const merged = Object.assign(ref, Object.assign({ ref: 0 }));
  c0 = undefined;
  groupListingId = undefined;
  c2 = undefined;
  c3 = undefined;
  const tmp2 = closure_16();
  let obj = EditStateContextProvider2;
  const editStateContext = obj.useEditStateContext();
  ({ guildId: c0, groupListingId } = editStateContext);
  const editStateId = editStateContext.editStateId;
  const obj2 = GuildRoleSubscriptionsHooks;
  const publishSubscriptionListing = obj2.usePublishSubscriptionListing();
  ({ error, publishSubscriptionListing: c2, clearError: c3, submitting } = publishSubscriptionListing);
  const obj3 = GuildRoleSubscriptionsHooks;
  const subscriptionListing = obj3.useSubscriptionListing(editStateId);
  const obj4 = RoleSubscriptionSettingsDisabledContext;
  const roleSubscriptionSettingsDisabled = obj4.useRoleSubscriptionSettingsDisabled();
  const imperativeHandle = react.useImperativeHandle(ref, () => ({ dismissError }));
  let tmp10 = null;
  if (null != groupListingId) {
    tmp10 = null;
    if (null != subscriptionListing) {
      tmp10 = null;
      if (!subscriptionListing.published) {
        let tmp15;
        if (null != error) {
          const obj5 = { style: tmp2.publishError, children: authStore3(tmp14, obj6) };
          obj6 = { children: error.getAnyErrorMessage() };
          tmp14 = ErrorBlockDefault;
          tmp15 = authStore3(metroRequire, obj5);
        } else {
          const obj7 = {
            message: intl.string(intl4.t.V5mSpz),
            ctaMessage: intl2.string(intl4.t.Lj6R5m),
            onClick: function handlePublish() {
                      if (null != groupListingId) {
                        if (null != subscriptionListing) {
                          const obj = { guildId, groupListingId: tmp, listingId: tmp2.id };
                          return _undefined(obj);
                        }
                      }
                    },
            submitting,
            disabled: roleSubscriptionSettingsDisabled
          };
          const tmp18 = ActionableNoticeDefault;
          intl = tmp3(1113).intl;
          intl2 = tmp3(1113).intl;
          tmp15 = authStore3(tmp18, obj7);
        }
        tmp10 = tmp15;
      }
    }
  }
  return tmp10;
}
let _slicedToArray = _slicedToArray_mod;
({ View: metroRequire, ScrollView: metroImportDefault } = react_native);
const FetchState = GuildRoleSubscriptionsStore2.FetchState;
const GuildRoleSubscriptionsTierScenes = GuildRoleSubscriptionsConstants.GuildRoleSubscriptionsTierScenes;
const GuildSettingsSections = Constants.GuildSettingsSections;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
({ jsx: closure_14, jsxs: closure_15 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { flex: 1 }, tabsContainer: obj2, tabsContainerWithDraft: { paddingBottom: 0 }, tabContent: obj3, publishError: obj4, actionSection: obj5 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, padding: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj4 = { paddingVertical: nativeDefault.space.PX_16 };
obj5 = { padding: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_24, gap: nativeDefault.space.PX_16 };
let closure_16 = createStyles(obj);
let items = [, , ];
({ DETAILS: arr[0], DESIGN: arr[1], BENEFITS: arr[2] } = GuildRoleSubscriptionsTierScenes);
let closure_18 = items.reduce((acc, item, index) => {
  acc[item] = index;
  return acc;
}, {});
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/GuildSettingsRoleSubscriptionTierEdit.tsx");

export default function GuildSettingsRoleSubscriptionTierEdit(guildId) {
  let RoleSubscriptionSettingsDisabledContextProvider;
  let _undefined;
  let c14;
  let closure_4;
  let editStateId;
  let items4;
  let items7;
  let items9;
  let obj7;
  let obj8;
  let tmp17;
  const f119120 = (currentScene) => {
    let DETAILS = currentScene.currentScene;
    if (DETAILS == null) {
      DETAILS = handleCreateOrUpdateFromEditState.DETAILS;
    }
    items = [DETAILS, currentScene.setScene];
    return items;
  };
  guildId = guildId.guildId;
  const groupListingId = guildId.groupListingId;
  const onBeforeDispatchNewListing = guildId.onBeforeDispatchNewListing;
  editStateId = undefined;
  _slicedToArray = undefined;
  navigation = undefined;
  let removeEditStateId;
  let ref;
  let hasChanges;
  let loading;
  let handleCreateOrUpdateFromEditState;
  let error;
  let callback;
  c14 = undefined;
  function GuildRoleSubscriptionsTierTemplateSelectedActionSheetImporter() {
    return guildId(first[35])(first[34], first.paths);
  }
  const initialEditStateId = guildId.initialEditStateId;
  let tmp = closure_16();
  let obj = navigation;
  [editStateId, _slicedToArray] = navigation.useState(initialEditStateId);
  const obj2 = guildId(editStateId[11]);
  navigation = obj2.useNavigation();
  const obj3 = guildId(editStateId[23]);
  const subscriptionListing = obj3.useSubscriptionListing(editStateId);
  const obj4 = onBeforeDispatchNewListing(editStateId[28]);
  const first1 = _slicedToArray(obj4.useName(editStateId), 1)[0];
  let flag;
  if (subscriptionListing != null) {
    flag = subscriptionListing.published;
  }
  if (flag == null) {
    flag = false;
  }
  const tmp9Result = onBeforeDispatchNewListing(editStateId[28]);
  removeEditStateId = tmp9Result.useEditStateIds(groupListingId, guildId).removeEditStateId;
  ref = obj.useRef(null);
  const tmp9Result3 = onBeforeDispatchNewListing(editStateId[28]);
  hasChanges = tmp9Result3.useHasChanges(editStateId);
  const tmp9Result4 = onBeforeDispatchNewListing(editStateId[28]);
  const createOrUpdateListingFromEditState = tmp9Result4.useCreateOrUpdateListingFromEditState();
  loading = createOrUpdateListingFromEditState.loading;
  handleCreateOrUpdateFromEditState = createOrUpdateListingFromEditState.handleCreateOrUpdateFromEditState;
  error = createOrUpdateListingFromEditState.error;
  items = [guildId, handleCreateOrUpdateFromEditState, editStateId, groupListingId, onBeforeDispatchNewListing, removeEditStateId];
  callback = obj.useCallback(() => {
    const obj = {
      guildId,
      editStateId,
      groupListingId,
      onBeforeDispatchNewListing,
      onAfterDispatchNewListing(id) {
        closure_1_4(id.id);
        removeEditStateId(editStateId);
      }
    };
    return handleCreateOrUpdateFromEditState(obj);
  }, items);
  const items1 = [error];
  const layoutEffect = obj.useLayoutEffect(() => {
    const obj = error;
    if (null != error) {
      const presentError = ToastUtils.presentError;
      ToastUtils;
      let anyErrorMessage = obj.getAnyErrorMessage();
      if (anyErrorMessage == null) {
        const intl = tmp(1113).intl;
        anyErrorMessage = intl.string(tmp(1113).t.R0RpRX);
      }
      presentError(anyErrorMessage);
    }
  }, items1);
  [tmp17, c14] = _slicedToArray(loading.useRoleTierEditStore(f119120), 2);
  const items2 = [navigation, hasChanges, first1, loading, callback];
  _slicedToArray(loading.useRoleTierEditStore(f119120), 2);
  const layoutEffect1 = obj.useLayoutEffect(() => {
    let onPress;
    let title;
    let obj = {
      headerRight: loading ? (() => _undefined(guildId(editStateId[30]).HeaderSubmittingIndicator, {})) : (() => {
        let intl;
        const obj = { text: intl.string(guildId(first[27]).t["R3BPH+"]), onPress, disabled: !hasChanges };
        const HeaderActionButton = guildId(first[31]).HeaderActionButton;
        intl = guildId(first[27]).intl;
        return c14(HeaderActionButton, obj);
      }),
      headerTitle() {
        let intl;
        const obj = { title, subtitle: intl.string(guildId(first[27]).t.t94EHg) };
        const NavigatorHeader = guildId(first[30]).NavigatorHeader;
        intl = guildId(first[27]).intl;
        return c14(NavigatorHeader, obj);
      }
    };
    navigation.setOptions(obj);
  }, items2);
  const items3 = [navigation, editStateId, guildId];
  const layoutEffect2 = obj.useLayoutEffect(() => {
    if (null == first) {
      const routes = navigation.getState().routes;
      let name;
      const subscriptionGroupListingsForGuildFetchState = GuildRoleSubscriptionsStore.getSubscriptionGroupListingsForGuildFetchState(guildId);
      const FETCHING = FetchState.FETCHING;
      const arr = navigation;
      if (routes[routes.length - 1] != null) {
        name = tmp.name;
      }
      const tmp8 = name !== GuildSettingsSections.ROLE_SUBSCRIPTIONS_TIER_EDIT || subscriptionGroupListingsForGuildFetchState === FETCHING;
      if (!tmp8) {
        arr.pop();
      }
    }
  }, items3);
  guildId(editStateId[32]);
  ({
    pageWidth: 0,
    defaultIndex: closure_18[tmp17],
    onSetActiveIndex(arg0) {
      if (null != items[arg0]) {
        _undefined(items[arg0]);
        const current = ref.current;
        if (current != null) {
          current.dismissError();
        }
      }
    },
    items: items4.map((id) => ({ id, label: id, page: null }))
  });
  let intl = tmp5(tmp6[27]).intl;
  items4 = [intl.string(tmp5(editStateId[27]).t.f7rGug), , ];
  const intl2 = tmp5(tmp6[27]).intl;
  items4[1] = intl2.string(guildId(editStateId[27]).t.YCpDtS);
  const intl3 = tmp5(tmp6[27]).intl;
  items4[2] = intl3.string(guildId(editStateId[27]).t.MpDNxN);
  if (null == editStateId) {
    return null;
  } else {
    let items6;
    if (undefined === subscriptionListing) {
      const items5 = [tmp5(editStateId[33]).DismissibleContent.GUILD_ROLE_SUBSCRIPTION_TIER_TEMPLATES];
      items6 = items5;
    } else {
      items6 = [];
    }
    const obj6 = { guildId, editStateId, groupListingId, children: c14(RoleSubscriptionSettingsDisabledContextProvider, obj7) };
    const EditStateContextProvider = tmp5(tmp6[12]).EditStateContextProvider;
    obj7 = { guildId, children: GuildRoleSubscriptionsTierTemplateSelectedActionSheetImporter(first1, obj8) };
    obj8 = { style: tmp.container, children: items7 };
    RoleSubscriptionSettingsDisabledContextProvider = tmp5(tmp6[24]).RoleSubscriptionSettingsDisabledContextProvider;
    const obj9 = {
      contentTypes: items6,
      children(markAsDismissed) {
          markAsDismissed = markAsDismissed.markAsDismissed;
          let tmp3 = null;
          if (markAsDismissed.visibleContent === dismissible_content.DismissibleContent.GUILD_ROLE_SUBSCRIPTION_TIER_TEMPLATES) {
            const obj = {
              markAsDismissed() {
                  return markAsDismissed(constants.UNKNOWN);
                },
              actionSheetKey: "TierTemplateSelected",
              importer: GuildRoleSubscriptionsTierTemplateSelectedActionSheetImporter
            };
            tmp3 = authStore3(DismissibleActionSheet.DismissibleActionSheet, obj);
          }
          return tmp3;
        }
    };
    items7 = [c14(groupListingId(editStateId[36]), obj9), , ];
    const items8 = [tmp.tabsContainer, ];
    let prop = null;
    if (!flag) {
      prop = tmp.tabsContainerWithDraft;
    }
    const obj10 = { style: items8, children: items9 };
    items8[1] = prop;
    const obj11 = { state: tmp21 };
    items9 = [c14(tmp5(editStateId[38]).SegmentedControl, obj11), ];
    const obj12 = { ref };
    items9[1] = c14(DraftPublishPrompt, obj12);
    items7[1] = GuildRoleSubscriptionsTierTemplateSelectedActionSheetImporter(first1, obj10);
    const obj13 = { selectedTab: tmp17 };
    items7[2] = c14(TabContent, obj13);
    return c14(EditStateContextProvider, obj6);
  }
};
