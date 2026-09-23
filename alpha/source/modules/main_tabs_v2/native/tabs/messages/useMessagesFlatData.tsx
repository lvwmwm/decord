// Module ID: 16459
// Function ID: 16460
// Name: useMessagesFlatData
// Dependencies: [19, 16448, 16460, 16497, 16498, 2]
// Exports: default

// Module 16459 (useMessagesFlatData)
import useMessagesData from "useMessagesData" /* 16448 */;
import noop from "module_19" /* 19 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/useMessagesFlatData.tsx");

export default function useMessagesFlatData(channels, listItemHeight) {
  listItemHeight = listItemHeight.listItemHeight;
  channels = undefined;
  channels = channels.channels;
  const channelFavorites = channels.channelFavorites;
  const renderHeader = channels.renderHeader;
  const sections = channels.sections;
  const items = [channels, channelFavorites, renderHeader, sections, listItemHeight];
  return channelFavorites.useMemo(() => {
    if (renderHeader === useMessagesData.MessagesDataHeader.HappeningNow) {
      let listHeaderHeight = tmp2(16460).getMessagesItemHappeningNowHeight();
      const tmp2Result = tmp2(16460);
    } else {
      listHeaderHeight = 0;
      if (renderHeader === tmp2(16448).MessagesDataHeader.EmptyState) {
        listHeaderHeight = tmp2(16497).MESSAGES_ITEM_EMPTY_STATE_HEIGHT;
      }
    }
    const listData = [];
    const tmp4 = sections[useMessagesData.MessagesDataSections.FavoriteChannels];
    let num2 = 0;
    let sum = listHeaderHeight;
    let tmp6 = listHeaderHeight;
    if (0 < tmp4) {
      do {
        let obj = { kind: "favorite", channelId: null, row: null };
        obj.channelId = channelFavorites[num2].channelId;
        obj.row = num2;
        let arr = listData.push(obj);
        sum = sum + listItemHeight;
        num2 = num2 + 1;
        tmp6 = sum;
      } while (num2 < tmp4);
    }
    const tmp10 = sections[useMessagesData.MessagesDataSections.Channels];
    let sum1 = tmp6;
    let num3 = 0;
    let tmp12 = tmp6;
    if (0 < tmp10) {
      do {
        let obj2 = { kind: "channel", channelId: null, row: null };
        obj2.channelId = channels[num3].channelId;
        obj2.row = num3;
        let arr7 = listData.push(obj2);
        sum1 = sum1 + listItemHeight;
        num3 = num3 + 1;
        tmp12 = sum1;
      } while (num3 < tmp10);
    }
    let sum2 = tmp12;
    if (sections[useMessagesData.MessagesDataSections.Separator] > 0) {
      listData.push({ kind: "separator" });
      sum2 = tmp12 + tmp17(16498).MESSAGES_ITEM_SEPERATOR_HEIGHT;
    }
    const tmp21 = sections[useMessagesData.MessagesDataSections.SuggestedFriends];
    let friendsHeaderOffset;
    let friendsHeaderIndex;
    if (tmp21 > 0) {
      listData.push({ kind: "friendsHeader" });
      let num4 = 0;
      friendsHeaderOffset = sum2;
      friendsHeaderIndex = length;
      if (0 < tmp21) {
        do {
          let obj3 = { kind: "suggestedFriend", row: num4 };
          let arr10 = listData.push(obj3);
          num4 = num4 + 1;
          friendsHeaderOffset = sum2;
          friendsHeaderIndex = length;
        } while (num4 < tmp21);
      }
    }
    for (let num5 = 0; num5 < tmp26; num5 = num5 + 1) {
      let obj4 = { kind: "placeholder", row: num5 };
      let arr11 = listData.push(obj4);
    }
    return { listData, friendsHeaderIndex, friendsHeaderOffset, listHeaderHeight };
  }, items);
};
