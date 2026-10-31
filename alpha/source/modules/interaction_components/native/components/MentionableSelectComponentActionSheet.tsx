// Module ID: 13236
// Function ID: 13237
// Name: MentionableSelectComponentActionSheet
// Dependencies: [19, 4885, 21, 7297, 8704, 13237, 12496, 12497, 2]
// Exports: default

// Module 13236 (MentionableSelectComponentActionSheet)
import Fragment from "Fragment" /* 21 */;
import SearchableSelectActionComponentUtils from "SearchableSelectActionComponentUtils" /* 8704 */;
import MentionableSelectOptionParts from "MentionableSelectOptionParts" /* 12496 */;
import react from "react" /* 19 */;
import GuildStore_mod from "GuildStore" /* 4885 */;
import size from "module_2" /* 2 */;

let GuildStore = GuildStore_mod;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/interaction_components/native/components/MentionableSelectComponentActionSheet.tsx");

export default function MentionableSelectComponentActionSheet(selectionActionComponent) {
  let allowEmpty;
  let closure_4;
  let containerId;
  let isSelected;
  let labelComponent;
  let onPressOptionItem;
  let onSubmit;
  let options;
  let setQuery;
  let submitSelection;
  selectionActionComponent = selectionActionComponent.selectionActionComponent;
  const channelId = selectionActionComponent.channelId;
  const guildId = selectionActionComponent.guildId;
  GuildStore = undefined;
  ({ labelComponent, containerId, onSubmit, allowEmpty } = selectionActionComponent);
  const guild = GuildStore.getGuild(guildId);
  let id;
  const tmp4 = channelId(guildId[3]);
  if (guild != null) {
    id = guild.id;
  }
  GuildStore = tmp4(id, selectionActionComponent(tmp3[4]).MIN_REREQUEST_TIME);
  const items = [selectionActionComponent, channelId];
  const callback = guild.useCallback((query) => {
    const obj = SearchableSelectActionComponentUtils;
    return obj.queryMentionables(selectionActionComponent.type, query, channelId);
  }, items);
  const tmp7 = channelId(guildId[5])({ selectActionComponent: selectionActionComponent, containerId, guildId, queryOptions: callback, onSubmit });
  const selectedOptions = tmp7.selectedOptions;
  const items1 = [guild, guildId];
  ({ options, isSelected, onPressOptionItem, submitSelection, setQuery } = tmp7);
  const callback1 = guild.useCallback((type) => {
    const obj = MentionableSelectOptionParts;
    return obj.renderMentionableOptionIcon(type, guild, guildId);
  }, items1);
  channelId(guildId[7]);
  return <tmp2Result onPressOptionItem={onPressOptionItem} renderIcon={callback1} renderDescription={selectionActionComponent(guildId[6]).renderMentionableOptionDescription} renderOptionSuffix={function renderOptionSuffix(type) {
    const obj = MentionableSelectOptionParts;
    return obj.renderMentionableOptionSuffix(type, guild, closure_4);
  }} selectionActionComponent={selectionActionComponent} labelComponent={labelComponent} options={options} selectedCount={selectedOptions.length} selectedOptions={selectedOptions} isSelected={isSelected} submitSelection={submitSelection} onQueryChange={setQuery} itemAccessibilityLabel={selectionActionComponent(guildId[6]).mentionableOptionAccessibilityLabel} channelId={channelId} allowEmpty={allowEmpty} />;
};
