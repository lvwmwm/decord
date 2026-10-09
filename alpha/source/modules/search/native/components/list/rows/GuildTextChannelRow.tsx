// Module ID: 17287
// Function ID: 17288
// Name: GuildTextChannelRow
// Dependencies: [109, 19, 9285, 21, 558, 576, 11, 17275, 11997, 17278, 2]

// Module 17287 (GuildTextChannelRow)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import SearchConstants from "SearchConstants" /* 9285 */;
import SearchUtils from "SearchUtils" /* 11997 */;
import guild_channels_ChannelSubtitle from "guild_channels/ChannelSubtitle" /* 17275 */;
import GuildChannelRowDefault from "GuildChannelRow" /* 17278 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let importDefault, tmp;

let closure_3 = ["channel", "trailing", "lastMessageId", "onPress"];
const layout = SearchConstants.CHANNEL_LIST_SEARCH_LAYOUT;
const jsx = Fragment.jsx;
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function GuildTextChannelRow(channel) {
  let guild_id;
  let id;
  let lastMessageId;
  let onPress;
  let tmp12;
  let tmp5;
  let tmp7;
  let tmp8;
  let trailing;
  const obj = react2;
  const cResult = obj.c(21);
  if (cResult[0] !== channel) {
    channel = channel.channel;
    let _require = channel;
    ({ trailing, lastMessageId, onPress } = channel);
    importDefault = onPress;
    const tmp11 = _objectWithoutProperties(channel, closure_3);
    cResult[0] = channel;
    cResult[1] = channel;
    cResult[2] = lastMessageId;
    cResult[3] = onPress;
    cResult[4] = tmp11;
    cResult[5] = trailing;
    tmp8 = trailing;
    tmp7 = tmp11;
    tmp5 = lastMessageId;
  } else {
    _require = cResult[1];
    tmp5 = cResult[2];
    importDefault = cResult[3];
    tmp7 = cResult[4];
    tmp8 = cResult[5];
  }
  ({ id, guild_id } = tmp4);
  if (cResult[6] !== tmp5) {
    let extractTimestampResult = null;
    if (null != tmp5) {
      const obj2 = SnowflakeUtilsDefault;
      extractTimestampResult = obj2.extractTimestamp(tmp5);
    }
    cResult[6] = tmp5;
    cResult[7] = extractTimestampResult;
    tmp12 = extractTimestampResult;
  } else {
    tmp12 = cResult[7];
  }
  if (cResult[8] === id) {
    if (cResult[9] === guild_id) {
      let tmp15;
      if (cResult[10] === tmp12) {
        tmp15 = cResult[11];
      }
      if (cResult[12] === tmp4.id) {
        let tmp19;
        if (cResult[13] === tmp6) {
          tmp19 = cResult[14];
        }
        if (cResult[15] === tmp4) {
          if (cResult[16] === tmp19) {
            if (cResult[17] === tmp7) {
              if (cResult[18] === tmp15) {
                let tmp20;
                if (cResult[19] === tmp8) {
                  tmp20 = cResult[20];
                }
                return tmp20;
              }
            }
          }
        }
        class A {
          constructor() {
            tmp = closure_1(closure_0.id);
            return;
          }
        }
        GuildChannelRowDefault;
        const merged = Object.assign(tmp7);
        const tmp26 = <tmp22 subtitle={tmp15} channel={tmp4} trailing={tmp8} onPress={tmp19} />;
        cResult[15] = tmp4;
        cResult[16] = tmp19;
        cResult[17] = tmp7;
        cResult[18] = tmp15;
        cResult[19] = tmp8;
        cResult[20] = tmp26;
        tmp20 = tmp26;
      }
      class A {
        constructor() {
          tmp = closure_1(closure_0.id);
          return;
        }
      }
      cResult[12] = tmp4.id;
      cResult[13] = tmp6;
      cResult[14] = A;
      tmp19 = A;
    }
  }
  let channelActiveAgoTimestamp = null;
  const renderChannelSubtitle = tmp(17275).renderChannelSubtitle;
  guild_channels_ChannelSubtitle;
  if (null != tmp12) {
    const tmpResult2 = SearchUtils;
    channelActiveAgoTimestamp = tmpResult2.getChannelActiveAgoTimestamp(tmp12);
  }
  const obj4 = { subtitle: channelActiveAgoTimestamp, layout, channelId: id, guildId: guild_id };
  const result = renderChannelSubtitle(obj4);
  cResult[8] = id;
  cResult[9] = guild_id;
  cResult[10] = tmp12;
  cResult[11] = result;
  tmp15 = result;
}) : (function GuildTextChannelRow(channel) {
  let lastMessageId;
  let onPress;
  channel = channel.channel;
  ({ lastMessageId, onPress } = channel);
  let extractTimestampResult = null;
  const trailing = channel.trailing;
  const merged = Object.assign(channel, Object.assign({ channel: 0, trailing: 0, lastMessageId: 0, onPress: 0 }));
  let c4;
  const id = channel.id;
  const guild_id = channel.guild_id;
  if (null != lastMessageId) {
    const tmp4 = id;
    let obj = onPress(id[6]);
    extractTimestampResult = obj.extractTimestamp(lastMessageId);
  }
  c4 = extractTimestampResult;
  const items = [id, guild_id, extractTimestampResult];
  const items1 = [channel.id, onPress];
  const memo = react.useMemo(() => {
    let channelActiveAgoTimestamp = null;
    const renderChannelSubtitle = guild_channels_ChannelSubtitle.renderChannelSubtitle;
    guild_channels_ChannelSubtitle;
    if (null != c4) {
      const tmpResult = SearchUtils;
      channelActiveAgoTimestamp = tmpResult.getChannelActiveAgoTimestamp(tmp4);
    }
    const obj = { subtitle: channelActiveAgoTimestamp, layout, channelId: id, guildId: guild_id };
    return renderChannelSubtitle(obj);
  }, items);
  const callback = react.useCallback(() => {
    onPress(channel.id);
  }, items1);
  onPress(id[9]);
  const merged1 = Object.assign(merged);
  return <tmp7 subtitle={memo} channel={channel} trailing={trailing} onPress={callback} />;
}));
let result = size.fileFinishedImporting("modules/search/native/components/list/rows/GuildTextChannelRow.tsx");

export default memoResult;
