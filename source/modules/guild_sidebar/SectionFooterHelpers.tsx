// Module ID: 14947
// Function ID: 112528
// Name: isSectionFooterWithDivider
// Dependencies: []
// Exports: getSectionFooterConfig, isSectionFooterWithActiveVoiceChannels

// Module 14947 (isSectionFooterWithDivider)
function isSectionFooterWithDivider(getGuildActionSection, optInChannelsEnabled, section) {
  if (section === optInChannelsEnabled(dependencyMap[5]).SECTION_INDEX_GUILD_ACTIONS) {
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
    const tmp7 = section === optInChannelsEnabled(dependencyMap[5]).SECTION_INDEX_GUILD_ACTIONS;
    if (tmp7) {
      tmp4 = tmp7;
    } else if (getGuildActionSection.id === FAVORITES_RAW_GUILD_ID) {
      let tmp11 = section !== getGuildActionSection.getSections(false).length - 1;
    } else {
      tmp11 = section === optInChannelsEnabled(dependencyMap[5]).SECTION_INDEX_FAVORITES;
      if (!tmp11) {
        let tmp14 = !tmp13;
        if (!!optInChannelsEnabled) {
          let tmp17 = section !== optInChannelsEnabled(dependencyMap[5]).SECTION_INDEX_UNCATEGORIZED_CHANNELS;
          if (tmp17) {
            let flag2 = section === getGuildActionSection.recentsSectionNumber;
            if (!flag2) {
              const voiceChannelsSectionNumber = getGuildActionSection.voiceChannelsSectionNumber;
              flag2 = false;
            }
            tmp17 = flag2;
          }
          tmp14 = tmp17;
        }
        tmp11 = tmp14;
      }
    }
  }
  return tmp4;
}
function isSectionFooterVoiceSummaryEligible(recentsSectionNumber, section) {
  let tmp = section === section(dependencyMap[5]).SECTION_INDEX_GUILD_ACTIONS;
  if (!tmp) {
    tmp = section === section(dependencyMap[5]).SECTION_INDEX_FAVORITES;
  }
  if (!tmp) {
    tmp = section === section(dependencyMap[5]).SECTION_INDEX_UNCATEGORIZED_CHANNELS;
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
  ({ category, voiceStates: closure_0, selectedChannelId: closure_1, selectedVoiceChannelId: closure_2 } = arg0);
  if (true !== collapsed.isCollapsed(category.record.id)) {
    let items = [];
  } else {
    const channelRecords = category.getChannelRecords();
    items = channelRecords.filter((id) => {
      if (closure_3.can(constants.VIEW_CHANNEL, id)) {
        let items = closure_0[id.id];
        if (null == items) {
          items = [];
        }
        let tmp4 = id.id !== closure_2;
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
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const ChannelListGuildActionRow = arg1(dependencyMap[2]).ChannelListGuildActionRow;
const Permissions = arg1(dependencyMap[3]).Permissions;
const FAVORITES_RAW_GUILD_ID = arg1(dependencyMap[4]).FAVORITES_RAW_GUILD_ID;
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/guild_sidebar/SectionFooterHelpers.tsx");

export const getSectionFooterConfig = function getSectionFooterConfig(guildChannels, optInChannelsEnabled, section) {
  return { hasDivider: isSectionFooterWithDivider(guildChannels, optInChannelsEnabled, section), canHaveVoiceSummary: isSectionFooterVoiceSummaryEligible(guildChannels, section) };
};
export { getSectionFooterActiveVoiceChannels };
export const isSectionFooterWithActiveVoiceChannels = function isSectionFooterWithActiveVoiceChannels(category) {
  return getSectionFooterActiveVoiceChannels({ category: category.category, selectedChannelId: category.selectedChannelId, selectedVoiceChannelId: category.selectedVoiceChannelId, voiceStates: category.voiceStates }).length > 0;
};
