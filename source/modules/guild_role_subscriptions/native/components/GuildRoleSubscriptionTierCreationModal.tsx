// Module ID: 16318
// Function ID: 125894
// Name: GuildRoleSubscriptionTierCreationModal
// Dependencies: []
// Exports: default

// Module 16318 (GuildRoleSubscriptionTierCreationModal)
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
let closure_6 = importAll(dependencyMap[2]);
let closure_7 = importAll(dependencyMap[3]);
({ GuildRoleSubscriptionsTierScenes: closure_8, GUILD_ROLE_SUBSCRIPTION_TIER_CREATION_KEY: closure_9 } = arg1(dependencyMap[4]));
const jsx = arg1(dependencyMap[5]).jsx;
const tmp2 = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionTierCreationModal.tsx");

export default function GuildRoleSubscriptionTierCreationModal(guildId) {
  let error;
  guildId = guildId.guildId;
  const arg1 = guildId;
  const groupListingId = guildId.groupListingId;
  const importDefault = groupListingId;
  ({ onClose: closure_2, onAfterTierCreation: closure_3 } = guildId);
  let closure_4;
  let callback;
  let React;
  function _handleCreate() {
    // CreateGeneratorClosureLongIndex (0x67)
    const obj = first(tmp);
    const _handleCreate = obj;
    return obj(...arguments);
  }
  const tmp = callback(React.useState(guildId.editStateId), 2);
  const first = tmp[0];
  closure_4 = first;
  callback = tmp[1];
  let obj = importAll(dependencyMap[6]);
  const createOrUpdateListingFromEditState = obj.useCreateOrUpdateListingFromEditState();
  ({ handleCreateOrUpdateFromEditState: closure_6, error } = createOrUpdateListingFromEditState);
  let closure_7 = error;
  const items = [error];
  const layoutEffect = React.useLayoutEffect(() => {
    if (null != error) {
      let anyErrorMessage = error.getAnyErrorMessage();
      if (null == anyErrorMessage) {
        const intl = guildId(closure_3[8]).intl;
        anyErrorMessage = intl.string(guildId(closure_3[8]).t.R0RpRX);
      }
      guildId(closure_3[7]).presentError(anyErrorMessage);
      const obj = guildId(closure_3[7]);
    }
  }, items);
  const memo = React.useMemo(() => {
    const items = [, , , , ];
    ({ DETAILS: arr[0], CHANNEL_BENEFITS: arr[1], INTANGIBLE_BENEFITS: arr[2], DESIGN: arr[3], CONFIRMATION: arr[4] } = _handleCreate);
    return items;
  }, []);
  obj = { guildId, editStateId: first, groupListingId };
  obj = {
    guildId,
    children: jsx(importDefault(dependencyMap[11]), {
      guildId,
      modalKey: closure_9,
      onDone: function handleCreate() {
        return _handleCreate(...arguments);
      },
      steps: memo
    })
  };
  obj.children = jsx(arg1(dependencyMap[10]).RoleSubscriptionSettingsDisabledContextProvider, obj);
  return jsx(arg1(dependencyMap[9]).EditStateContextProvider, obj);
};
