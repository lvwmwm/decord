// Module ID: 15132
// Function ID: 115191
// Name: isSectionFooterWithDivider
// Dependencies: [5077, 3759, 5760, 653, 5753, 1841, 2]
// Exports: getSectionFooterConfig, isSectionFooterWithActiveVoiceChannels

// Module 15132 (isSectionFooterWithDivider)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_3 from "_isNativeReflectConstruct";
import { ChannelListGuildActionRow } from "ChannelListGuildActionRow";
import { Permissions } from "ME";

const require = arg1;
function isSectionFooterWithDivider(getGuildActionSection, optInChannelsEnabled, section) {
  if (section === require(5753) /* _superPropGet */.SECTION_INDEX_GUILD_ACTIONS) {
    const guildActionSection = getGuildActionSection.getGuildActionSection();
    const rows = guildActionSection.getRows();
    let isEmptyResult = 1 === rows.length;
    if (isEmptyResult) {
      isEmptyResult = rows[0] === ChannelListGuildActionRow.GUILD_PREMIUM_PROGRESS_BAR;
    }
    if (!isEmptyResult) {
      const guildActionSection1 = getGuildActionSection.getGuildActionSection();
      isEmptyResult = guildActionSection1.isEmpty();
    }
    let tmp = isEmptyResult;
  } else {
    tmp = 0 === getGuildActionSection.getSections(false)[section];
  }
  let tmp4 = !tmp;
  if (tmp4) {
    const tmp7 = section === require(5753) /* _superPropGet */.SECTION_INDEX_GUILD_ACTIONS;
    if (tmp7) {
      tmp4 = tmp7;
    } else {
      if (obj3.isFavoritesGuildId(getGuildActionSection.id)) {
        let tmp12 = section !== getGuildActionSection.getSections(false).length - 1;
      } else {
        tmp12 = section === require(5753) /* _superPropGet */.SECTION_INDEX_FAVORITES;
        if (!tmp12) {
          let tmp15 = !tmp14;
          if (!!optInChannelsEnabled) {
            let tmp18 = section !== require(5753) /* _superPropGet */.SECTION_INDEX_UNCATEGORIZED_CHANNELS;
            if (tmp18) {
              let flag2 = section === getGuildActionSection.recentsSectionNumber;
              if (!flag2) {
                const voiceChannelsSectionNumber = getGuildActionSection.voiceChannelsSectionNumber;
                flag2 = false;
              }
              tmp18 = flag2;
            }
            tmp15 = tmp18;
          }
          tmp12 = tmp15;
        }
      }
      obj3 = require(1841) /* isFavoritesGuildId */;
    }
  }
  return tmp4;
}
function isSectionFooterVoiceSummaryEligible(recentsSectionNumber, section) {
  let tmp = section === require(5753) /* _superPropGet */.SECTION_INDEX_GUILD_ACTIONS;
  if (!tmp) {
    tmp = section === require(5753) /* _superPropGet */.SECTION_INDEX_FAVORITES;
  }
  if (!tmp) {
    tmp = section === require(5753) /* _superPropGet */.SECTION_INDEX_UNCATEGORIZED_CHANNELS;
  }
  if (!tmp) {
    tmp = section === recentsSectionNumber.recentsSectionNumber;
  }
  if (!tmp) {
    tmp = section === recentsSectionNumber.voiceChannelsSectionNumber;
  }
  return !tmp;
}
function getSectionFooterActiveVoiceChannels(arg0) {
  let category;
  let _isNativeReflectConstruct;
  let dependencyMap;
  let require;
  ({ category, voiceStates: require, selectedChannelId: dependencyMap, selectedVoiceChannelId: _isNativeReflectConstruct } = arg0);
  if (true !== collapsed.isCollapsed(category.record.id)) {
    let items = [];
  } else {
    const channelRecords = category.getChannelRecords();
    items = channelRecords.filter((id) => {
      if (outer1_3.can(outer1_5.VIEW_CHANNEL, id)) {
        let items = table[id.id];
        if (null == items) {
          items = [];
        }
        let tmp4 = id.id !== _isNativeReflectConstruct;
        if (tmp4) {
          tmp4 = id.id !== closure_1;
        }
        if (tmp4) {
          tmp4 = items.length > 0;
        }
        return tmp4;
      } else {
        return false;
      }
    });
  }
  return items;
}
const result = require("ChannelListGuildActionRow").fileFinishedImporting("modules/guild_sidebar/SectionFooterHelpers.tsx");

export const getSectionFooterConfig = function getSectionFooterConfig(guildChannels, optInChannelsEnabled, section) {
  return { hasDivider: isSectionFooterWithDivider(guildChannels, optInChannelsEnabled, section), canHaveVoiceSummary: isSectionFooterVoiceSummaryEligible(guildChannels, section) };
};
export { getSectionFooterActiveVoiceChannels };
export const isSectionFooterWithActiveVoiceChannels = function isSectionFooterWithActiveVoiceChannels(category) {
  return getSectionFooterActiveVoiceChannels({ category: category.category, selectedChannelId: category.selectedChannelId, selectedVoiceChannelId: category.selectedVoiceChannelId, voiceStates: category.voiceStates }).length > 0;
};
