// Module ID: 13497
// Function ID: 13498
// Name: MentionableSelectComponentActionSheet
// Dependencies: [19, 5054, 5013, 21, 7363, 8781, 504, 12732, 13498, 6208, 10644, 12336, 12334, 2]
// Exports: default

// Module 13497 (MentionableSelectComponentActionSheet)
import Fragment from "Fragment" /* 21 */;
import SearchableSelectActionComponentUtils from "SearchableSelectActionComponentUtils" /* 8781 */;
import MentionableSelectOptionParts from "MentionableSelectOptionParts" /* 12336 */;
import react from "react" /* 19 */;
import GuildMemberStore from "GuildMemberStore" /* 5054 */;
import GuildStore_mod from "GuildStore" /* 5013 */;
import size from "module_2" /* 2 */;

let GuildStore = GuildStore_mod;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/interaction_components/native/components/MentionableSelectComponentActionSheet.tsx");

export default function MentionableSelectComponentActionSheet(selectionActionComponent) {
  let allowEmpty;
  let closure_5;
  let containerId;
  let isSelected;
  let labelComponent;
  let onPressOptionItem;
  let onSubmit;
  let setQuery;
  let submitSelection;
  selectionActionComponent = selectionActionComponent.selectionActionComponent;
  const channelId = selectionActionComponent.channelId;
  const guildId = selectionActionComponent.guildId;
  let memberVersion;
  GuildStore = undefined;
  let options;
  ({ labelComponent, containerId, onSubmit, allowEmpty } = selectionActionComponent);
  const guild = GuildStore.getGuild(guildId);
  let id;
  const tmp4 = channelId(guildId[4]);
  if (guild != null) {
    id = guild.id;
  }
  memberVersion = tmp4(id, selectionActionComponent(tmp3[5]).MIN_REREQUEST_TIME);
  let obj = selectionActionComponent(tmp3[6]);
  let items = [memberVersion];
  const stateFromStores = obj.useStateFromStores(items, () => memberVersion.getMemberVersion());
  const tmp7 = channelId(guildId[7])();
  GuildStore = tmp7;
  let items1 = [selectionActionComponent, channelId, stateFromStores, tmp7];
  const callback = guild.useCallback((query) => {
    const type = selectionActionComponent.type;
    const obj = SearchableSelectActionComponentUtils;
    const obj2 = { request: closure_5(query) };
    return obj.queryMentionables(type, query, channelId, obj2);
  }, items1);
  const tmp9 = channelId(guildId[8])({ selectActionComponent: selectionActionComponent, containerId, guildId, queryOptions: callback, onSubmit });
  options = tmp9.options;
  const selectedOptions = tmp9.selectedOptions;
  const items2 = [options];
  ({ isSelected, onPressOptionItem, submitSelection, setQuery } = tmp9);
  const memo = guild.useMemo(() => options.flatMap((type) => {
    let items1;
    if (type.type === selectionActionComponent(guildId[9]).SelectOptionType.USER) {
      const items = [type.value];
      items1 = items;
    } else {
      items1 = [];
    }
    return items1;
  }), items2);
  channelId(guildId[10])(guildId, memo);
  const items3 = [guild, guildId];
  const callback1 = guild.useCallback((type) => {
    const obj = MentionableSelectOptionParts;
    return obj.renderMentionableOptionIcon(type, guild, guildId);
  }, items3);
  let obj2 = {
    onPressOptionItem,
    renderIcon: callback1,
    renderDescription: selectionActionComponent(guildId[11]).renderMentionableOptionDescription,
    renderOptionSuffix(type) {
      const obj = MentionableSelectOptionParts;
      return obj.renderMentionableOptionSuffix(type, guild, memberVersion);
    },
    selectionActionComponent,
    labelComponent,
    options,
    selectedCount: selectedOptions.length,
    selectedOptions,
    isSelected,
    submitSelection,
    onQueryChange: setQuery,
    itemAccessibilityLabel: selectionActionComponent(guildId[11]).mentionableOptionAccessibilityLabel,
    channelId,
    allowEmpty
  };
  const tmp2Result = channelId(guildId[12]);
  return options(tmp2Result, obj2);
};
