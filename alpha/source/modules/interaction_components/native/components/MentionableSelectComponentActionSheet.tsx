// Module ID: 11377
// Function ID: 11378
// Name: MentionableSelectComponentActionSheet
// Dependencies: [19, 2087, 21, 558, 576, 6816, 8257, 11378, 11379, 11376, 2]

// Module 11377 (MentionableSelectComponentActionSheet)
import Fragment from "Fragment" /* 21 */;
import SearchableSelectActionComponentUtils from "SearchableSelectActionComponentUtils" /* 8257 */;
import MentionableSelectOptionParts from "MentionableSelectOptionParts" /* 11379 */;
import react from "react" /* 19 */;
import GuildStore_mod from "GuildStore" /* 2087 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let GuildStore = GuildStore_mod;
const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function MentionableSelectComponentActionSheet(selectionActionComponent) {
  let allowEmpty;
  let channelId;
  let closure_4;
  let containerId;
  let guildId;
  let isSelected;
  let labelComponent;
  let onPressOptionItem;
  let onSubmit;
  let options;
  let selectedOptions;
  let setQuery;
  let submitSelection;
  let tmp4;
  let obj = selectionActionComponent(guildId[4]);
  const cResult = obj.c(30);
  selectionActionComponent = selectionActionComponent.selectionActionComponent;
  ({ labelComponent, channelId } = selectionActionComponent);
  guildId = selectionActionComponent.guildId;
  ({ containerId, onSubmit, allowEmpty } = selectionActionComponent);
  if (cResult[0] !== guildId) {
    const guild = GuildStore.getGuild(guildId);
    cResult[0] = guildId;
    cResult[1] = guild;
    tmp4 = guild;
  } else {
    tmp4 = cResult[1];
  }
  let closure_3 = tmp4;
  let id;
  const tmp8 = channelId(guildId[5]);
  if (tmp4 != null) {
    id = tmp4.id;
  }
  const tmp8Result = tmp8(id, selectionActionComponent(guildId[6]).MIN_REREQUEST_TIME);
  GuildStore = tmp8Result;
  if (cResult[2] === channelId) {
    let tmp11;
    if (cResult[3] === selectionActionComponent) {
      tmp11 = cResult[4];
    }
    if (cResult[5] === containerId) {
      if (cResult[6] === guildId) {
        if (cResult[7] === onSubmit) {
          if (cResult[8] === tmp11) {
            let tmp12;
            if (cResult[9] === selectionActionComponent) {
              tmp12 = cResult[10];
            }
            ({ options, selectedOptions, isSelected, onPressOptionItem, submitSelection, setQuery } = channelId(guildId[7])(tmp12));
            channelId(guildId[7])(tmp12);
            if (cResult[11] === tmp4) {
              let tmp14;
              if (cResult[12] === guildId) {
                tmp14 = cResult[13];
              }
              if (cResult[14] === tmp4) {
                if (cResult[17] === allowEmpty) {
                  if (cResult[18] === channelId) {
                    if (cResult[19] === isSelected) {
                      if (cResult[20] === labelComponent) {
                        if (cResult[21] === onPressOptionItem) {
                          if (cResult[22] === options) {
                            if (cResult[23] === tmp14) {
                              if (cResult[24] === tmp15) {
                                if (cResult[25] === selectedOptions) {
                                  if (cResult[26] === selectionActionComponent) {
                                    if (cResult[27] === setQuery) {
                                      let tmp16;
                                      if (cResult[28] === submitSelection) {
                                        tmp16 = cResult[29];
                                      }
                                      return tmp16;
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
                channelId(guildId[9]);
                class E {
                  constructor(type) {
                    const obj = MentionableSelectOptionParts;
                    return obj.renderMentionableOptionIcon(type, closure_3, guildId);
                  }
                }
                const tmp19 = <tmp7Result onPressOptionItem={onPressOptionItem} renderIcon={tmp14} renderDescription={selectionActionComponent(guildId[8]).renderMentionableOptionDescription} renderOptionSuffix={tmp15} selectionActionComponent={null} labelComponent={labelComponent} options={options} selectedCount={selectedOptions.length} selectedOptions={selectedOptions} isSelected={isSelected} submitSelection={submitSelection} onQueryChange={setQuery} itemAccessibilityLabel={selectionActionComponent(guildId[8]).mentionableOptionAccessibilityLabel} channelId={channelId} allowEmpty={allowEmpty} />;
                cResult[17] = allowEmpty;
                cResult[18] = channelId;
                cResult[19] = isSelected;
                cResult[20] = labelComponent;
                cResult[21] = onPressOptionItem;
                cResult[22] = options;
                cResult[23] = tmp14;
                cResult[24] = tmp15;
                cResult[25] = selectedOptions;
                cResult[26] = selectionActionComponent;
                cResult[27] = setQuery;
                cResult[28] = submitSelection;
                cResult[29] = tmp19;
                tmp16 = tmp19;
              }
              function renderOptionSuffix(type) {
                const obj = MentionableSelectOptionParts;
                return obj.renderMentionableOptionSuffix(type, closure_3, closure_4);
              }
              cResult[14] = tmp4;
              cResult[15] = tmp8Result;
              cResult[16] = renderOptionSuffix;
              class E {
                constructor(type) {
                  const obj = MentionableSelectOptionParts;
                  return obj.renderMentionableOptionIcon(type, closure_3, guildId);
                }
              }
            }
            class E {
              constructor(type) {
                const obj = MentionableSelectOptionParts;
                return obj.renderMentionableOptionIcon(type, closure_3, guildId);
              }
            }
            cResult[11] = tmp4;
            cResult[12] = guildId;
            cResult[13] = E;
            tmp14 = E;
          }
        }
      }
    }
    const obj3 = { selectActionComponent: selectionActionComponent, containerId, guildId, queryOptions: tmp11, onSubmit };
    cResult[6] = guildId;
    cResult[7] = onSubmit;
    cResult[8] = tmp11;
    cResult[9] = selectionActionComponent;
    cResult[10] = obj3;
    tmp12 = obj3;
  }
  const fn = function f(query) {
    const obj = SearchableSelectActionComponentUtils;
    return obj.queryMentionables(selectionActionComponent.type, query, channelId);
  };
  cResult[2] = channelId;
  cResult[3] = selectionActionComponent;
  cResult[4] = fn;
  tmp11 = fn;
}) : (function MentionableSelectComponentActionSheet(selectionActionComponent) {
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
  const tmp4 = channelId(guildId[5]);
  if (guild != null) {
    id = guild.id;
  }
  GuildStore = tmp4(id, selectionActionComponent(tmp3[6]).MIN_REREQUEST_TIME);
  const items = [selectionActionComponent, channelId];
  const callback = guild.useCallback((query) => {
    const obj = SearchableSelectActionComponentUtils;
    return obj.queryMentionables(selectionActionComponent.type, query, channelId);
  }, items);
  const tmp7 = channelId(guildId[7])({ selectActionComponent: selectionActionComponent, containerId, guildId, queryOptions: callback, onSubmit });
  const selectedOptions = tmp7.selectedOptions;
  const items1 = [guild, guildId];
  ({ options, isSelected, onPressOptionItem, submitSelection, setQuery } = tmp7);
  const callback1 = guild.useCallback((type) => {
    const obj = MentionableSelectOptionParts;
    return obj.renderMentionableOptionIcon(type, guild, guildId);
  }, items1);
  channelId(guildId[9]);
  return <tmp2Result onPressOptionItem={onPressOptionItem} renderIcon={callback1} renderDescription={selectionActionComponent(guildId[8]).renderMentionableOptionDescription} renderOptionSuffix={function renderOptionSuffix(type) {
    const obj = MentionableSelectOptionParts;
    return obj.renderMentionableOptionSuffix(type, guild, closure_4);
  }} selectionActionComponent={selectionActionComponent} labelComponent={labelComponent} options={options} selectedCount={selectedOptions.length} selectedOptions={selectedOptions} isSelected={isSelected} submitSelection={submitSelection} onQueryChange={setQuery} itemAccessibilityLabel={selectionActionComponent(guildId[8]).mentionableOptionAccessibilityLabel} channelId={channelId} allowEmpty={allowEmpty} />;
});
const result = size.fileFinishedImporting("modules/interaction_components/native/components/MentionableSelectComponentActionSheet.tsx");

export default tmp2;
