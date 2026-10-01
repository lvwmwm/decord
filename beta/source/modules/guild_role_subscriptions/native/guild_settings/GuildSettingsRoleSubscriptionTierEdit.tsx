// Module ID: 17602
// Function ID: 17603
// Name: GuildSettingsRoleSubscriptionTierEdit
// Dependencies: [32, 19, 17, 4462, 17557, 14750, 1074, 2042, 21, 4836, 576, 1485, 17569, 17565, 6671, 9271, 4832, 5281, 1177, 17603, 6544, 17597, 17595, 17572, 14757, 17552, 11705, 17604, 1115, 14772, 4527, 5936, 6795, 9083, 2029, 17605, 1981, 10088, 10089, 9084, 2]
// Exports: default

// Module 17602 (GuildSettingsRoleSubscriptionTierEdit)
import react2 from "react" /* 19 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import native from "native" /* 1177 */;
import useNavigation from "useNavigation" /* 1485 */;
import dismissible_content from "dismissible_content" /* 2029 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2042 */;
import GuildRoleSubscriptionsStore2 from "GuildRoleSubscriptionsStore" /* 4462 */;
import ToastUtils from "ToastUtils" /* 4527 */;
import Text_Text from "Text/Text" /* 4832 */;
import components_Button_Button from "components/Button/Button" /* 5281 */;
import common_SafeAreaView from "common/SafeAreaView" /* 6544 */;
import CreatorMonetizationRestrictionsHooks from "CreatorMonetizationRestrictionsHooks" /* 6671 */;
import FormHeaderDefault from "FormHeader" /* 9271 */;
import ErrorBlockDefault from "ErrorBlock" /* 11705 */;
import GuildRoleSubscriptionsConstants from "GuildRoleSubscriptionsConstants" /* 14750 */;
import GuildRoleSubscriptionsHooks from "GuildRoleSubscriptionsHooks" /* 14757 */;
import RoleSubscriptionSettingsDisabledContext from "RoleSubscriptionSettingsDisabledContext" /* 17552 */;
import useArchiveOrDeleteDefault from "useArchiveOrDelete" /* 17565 */;
import EditStateContextProvider2 from "EditStateContextProvider" /* 17569 */;
import GuildRoleSubscriptionTierBenefitsModal from "GuildRoleSubscriptionTierBenefitsModal" /* 17572 */;
import GuildRoleSubscriptionTierDesignModal from "GuildRoleSubscriptionTierDesignModal" /* 17595 */;
import GuildRoleSubscriptionTierDetailsModal from "GuildRoleSubscriptionTierDetailsModal" /* 17597 */;
import AssetRegistryDefault from "AssetRegistry" /* 17603 */;
import ActionableNoticeDefault from "ActionableNotice" /* 17604 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_native from "react-native" /* 17 */;
import RoleTierEditStore from "RoleTierEditStore" /* 17557 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const react = react2;
const GuildRoleSubscriptionsStore = GuildRoleSubscriptionsStore2;
let navigation;

let closure_14;
let closure_15;
let closure_16;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let tmp;
const intl4 = tmp(1115);
const DismissibleActionSheet = tmp(10089);
function ArchiveOrDeleteTierSection() {
  let Button;
  let Icon;
  let archiving;
  let buttonText;
  let deleting;
  let descriptionText;
  let editStateId;
  let groupListingId;
  let handleArchiveOrDelete;
  let obj7;
  let obj8;
  let tmp9;
  const tmp = closure_17();
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
  items = [, , ];
  const obj4 = { style: tmp.actionHeader, children: buttonText };
  items[0] = authStore2(FormHeaderDefault, obj4);
  const obj5 = { style: tmp.actionDescription, variant: "text-sm/medium", color: "text-default", children: descriptionText };
  items[1] = authStore2(Text_Text.Text, obj5);
  const obj6 = { style: tmp.actionButton, children: authStore2(Button, obj7) };
  obj7 = { variant: "destructive", grow: true, icon: authStore2(Icon, obj8), onPress: handleArchiveOrDelete, disabled: tmp9, text: buttonText };
  Button = components_Button_Button.Button;
  obj8 = { size: native.Icon.Sizes.SMALL, disableColor: true, source: AssetRegistryDefault };
  Icon = native.Icon;
  tmp9 = !allowSelfRemoveMonetization;
  const tmp5 = authStore3;
  const tmp6 = closure_15;
  const tmp8 = metroRequire;
  if (allowSelfRemoveMonetization) {
    tmp9 = deleting;
  }
  if (!tmp9) {
    tmp9 = archiving;
  }
  const obj9 = { children: items };
  items[2] = authStore2(tmp8, obj6);
  return tmp5(tmp6, obj9);
}
function TabContent(selectedTab) {
  let SafeAreaPaddingView;
  let SafeAreaPaddingView2;
  let obj3;
  let obj4;
  selectedTab = selectedTab.selectedTab;
  const tmp = closure_17();
  if (GuildRoleSubscriptionsTierScenes.DETAILS === selectedTab) {
    const obj2 = { style: tmp.tabContent, children: authStore3(SafeAreaPaddingView2, obj3) };
    obj3 = { bottom: true, children: items };
    SafeAreaPaddingView2 = common_SafeAreaView.SafeAreaPaddingView;
    items = [authStore2(GuildRoleSubscriptionTierDetailsModal.GuildRoleSubscriptionTierDetailsTab, {}), authStore2(ArchiveOrDeleteTierSection, {})];
    return authStore2(metroImportDefault, obj2);
  } else if (GuildRoleSubscriptionsTierScenes.DESIGN === selectedTab) {
    const obj = { style: tmp.tabContent, children: authStore2(SafeAreaPaddingView, obj4) };
    obj4 = { bottom: true, children: authStore2(GuildRoleSubscriptionTierDesignModal.GuildRoleSubscriptionTierDesignTab, {}) };
    SafeAreaPaddingView = common_SafeAreaView.SafeAreaPaddingView;
    return authStore2(metroImportDefault, obj);
  } else if (GuildRoleSubscriptionsTierScenes.BENEFITS === selectedTab) {
    return authStore2(GuildRoleSubscriptionTierBenefitsModal.GuildRoleSubscriptionTierBenefitsTab, {});
  } else {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const self = this;
    const self2 = this;
    const error = new Error("Unsupported scene: " + selectedTab);
    throw error;
  }
}
let _slicedToArray = _slicedToArray_mod;
const forwardRef = react2.forwardRef;
({ View: metroRequire, ScrollView: metroImportDefault } = react_native);
const FetchState = GuildRoleSubscriptionsStore2.FetchState;
const GuildRoleSubscriptionsTierScenes = GuildRoleSubscriptionsConstants.GuildRoleSubscriptionsTierScenes;
const GuildSettingsSections = Constants.GuildSettingsSections;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
({ jsx: closure_14, Fragment: closure_15, jsxs: closure_16 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { flex: 1 }, tabsContainer: obj2, tabsContainerWithDraft: { paddingBottom: 0 }, actionButton: { alignSelf: "stretch", margin: 16, marginTop: 0 }, tabContent: obj3, actionHeader: { marginTop: 24, paddingStart: 16 }, actionDescription: { marginBottom: 16, marginLeft: 16 } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, padding: 16 };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
let closure_17 = createStyles(obj);
let items = [, , ];
({ DETAILS: arr[0], DESIGN: arr[1], BENEFITS: arr[2] } = GuildRoleSubscriptionsTierScenes);
let closure_19 = items.reduce((acc, item, index) => {
  acc[item] = index;
  return acc;
}, {});
let closure_22 = forwardRef((arg0, ref) => {
  let closure_129_0;
  let closure_129_2;
  let closure_129_3;
  let error;
  let groupListingId;
  let intl;
  let intl2;
  let submitting;
  const tmp = require;
  const tmp2 = dependencyMap;
  let obj = EditStateContextProvider2;
  const editStateContext = obj.useEditStateContext();
  ({ guildId: closure_129_0, groupListingId } = editStateContext);
  const editStateId = editStateContext.editStateId;
  const obj2 = GuildRoleSubscriptionsHooks;
  const publishSubscriptionListing = obj2.usePublishSubscriptionListing();
  ({ error, publishSubscriptionListing: closure_129_2, clearError: closure_129_3, submitting } = publishSubscriptionListing);
  const obj3 = GuildRoleSubscriptionsHooks;
  const subscriptionListing = obj3.useSubscriptionListing(editStateId);
  const obj4 = RoleSubscriptionSettingsDisabledContext;
  const roleSubscriptionSettingsDisabled = obj4.useRoleSubscriptionSettingsDisabled();
  const imperativeHandle = react.useImperativeHandle(ref, () => ({ dismissError }));
  let tmp8 = null;
  if (null != groupListingId) {
    tmp8 = null;
    if (null != subscriptionListing) {
      tmp8 = null;
      if (!subscriptionListing.published) {
        let tmp14;
        if (null != error) {
          const obj5 = { children: items };
          items = [authStore2(native.Spacer, { size: 16 }), , ];
          const obj6 = { children: error.getAnyErrorMessage() };
          const tmp13 = ErrorBlockDefault;
          items[1] = authStore2(tmp13, obj6);
          items[2] = authStore2(native.Spacer, { size: 16 });
          tmp14 = authStore3(closure_15, obj5);
        } else {
          const obj7 = {
            message: intl.string(intl4.t.V5mSpz),
            ctaMessage: intl2.string(intl4.t.Lj6R5m),
            onClick() {
                      if (null != groupListingId) {
                        if (null != subscriptionListing) {
                          const obj = { guildId, groupListingId: tmp, listingId: tmp2.id };
                          return closure_1_2(obj);
                        }
                      }
                    },
            submitting,
            disabled: roleSubscriptionSettingsDisabled
          };
          const tmp17 = ActionableNoticeDefault;
          intl = intl4.intl;
          intl2 = intl4.intl;
          tmp14 = authStore2(tmp17, obj7);
        }
        tmp8 = tmp14;
      }
    }
  }
  return tmp8;
});
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
  const f108436 = (currentScene) => {
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
    return guildId(first[36])(first[35], first.paths);
  }
  const initialEditStateId = guildId.initialEditStateId;
  let tmp = closure_17();
  let obj = navigation;
  [editStateId, _slicedToArray] = navigation.useState(initialEditStateId);
  const obj2 = guildId(editStateId[11]);
  navigation = obj2.useNavigation();
  const obj3 = guildId(editStateId[24]);
  const subscriptionListing = obj3.useSubscriptionListing(editStateId);
  const obj4 = onBeforeDispatchNewListing(editStateId[29]);
  const first1 = _slicedToArray(obj4.useName(editStateId), 1)[0];
  let flag;
  if (subscriptionListing != null) {
    flag = subscriptionListing.published;
  }
  if (flag == null) {
    flag = false;
  }
  const tmp9Result = onBeforeDispatchNewListing(editStateId[29]);
  removeEditStateId = tmp9Result.useEditStateIds(groupListingId, guildId).removeEditStateId;
  ref = obj.useRef(null);
  const tmp9Result3 = onBeforeDispatchNewListing(editStateId[29]);
  hasChanges = tmp9Result3.useHasChanges(editStateId);
  const tmp9Result4 = onBeforeDispatchNewListing(editStateId[29]);
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
        const intl = tmp(1115).intl;
        anyErrorMessage = intl.string(tmp(1115).t.R0RpRX);
      }
      presentError(anyErrorMessage);
    }
  }, items1);
  [tmp17, c14] = _slicedToArray(loading.useRoleTierEditStore(f108436), 2);
  const items2 = [navigation, hasChanges, first1, loading, callback];
  _slicedToArray(loading.useRoleTierEditStore(f108436), 2);
  const layoutEffect1 = obj.useLayoutEffect(() => {
    let onPress;
    let title;
    let obj = {
      headerRight: loading ? (() => _undefined(guildId(editStateId[31]).HeaderSubmittingIndicator, {})) : (() => {
        let intl;
        const obj = { text: intl.string(guildId(first[28]).t["R3BPH+"]), onPress, disabled: !hasChanges };
        const HeaderActionButton = guildId(first[32]).HeaderActionButton;
        intl = guildId(first[28]).intl;
        return c14(HeaderActionButton, obj);
      }),
      headerTitle() {
        let intl;
        const obj = { title, subtitle: intl.string(guildId(first[28]).t.t94EHg) };
        const NavigatorHeader = guildId(first[31]).NavigatorHeader;
        intl = guildId(first[28]).intl;
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
  guildId(editStateId[33]);
  ({
    pageWidth: 0,
    defaultIndex: closure_19[tmp17],
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
  let intl = tmp5(tmp6[28]).intl;
  items4 = [intl.string(tmp5(editStateId[28]).t.f7rGug), , ];
  const intl2 = tmp5(tmp6[28]).intl;
  items4[1] = intl2.string(guildId(editStateId[28]).t.YCpDtS);
  const intl3 = tmp5(tmp6[28]).intl;
  items4[2] = intl3.string(guildId(editStateId[28]).t.MpDNxN);
  if (null == editStateId) {
    return null;
  } else {
    let items6;
    if (undefined === subscriptionListing) {
      const items5 = [tmp5(editStateId[34]).DismissibleContent.GUILD_ROLE_SUBSCRIPTION_TIER_TEMPLATES];
      items6 = items5;
    } else {
      items6 = [];
    }
    const obj6 = { guildId, editStateId, groupListingId, children: c14(RoleSubscriptionSettingsDisabledContextProvider, obj7) };
    const EditStateContextProvider = tmp5(tmp6[12]).EditStateContextProvider;
    obj7 = { guildId, children: closure_16(first1, obj8) };
    obj8 = { style: tmp.container, children: items7 };
    RoleSubscriptionSettingsDisabledContextProvider = tmp5(tmp6[25]).RoleSubscriptionSettingsDisabledContextProvider;
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
            tmp3 = authStore2(DismissibleActionSheet.DismissibleActionSheet, obj);
          }
          return tmp3;
        }
    };
    items7 = [c14(groupListingId(editStateId[37]), obj9), , ];
    const items8 = [tmp.tabsContainer, ];
    let prop = null;
    if (!flag) {
      prop = tmp.tabsContainerWithDraft;
    }
    const obj10 = { style: items8, children: items9 };
    items8[1] = prop;
    const obj11 = { state: tmp21 };
    items9 = [c14(tmp5(editStateId[39]).SegmentedControl, obj11), ];
    const obj12 = { ref };
    items9[1] = c14(closure_22, obj12);
    items7[1] = closure_16(first1, obj10);
    const obj13 = { selectedTab: tmp17 };
    items7[2] = c14(TabContent, obj13);
    return c14(EditStateContextProvider, obj6);
  }
};
