// Module ID: 10761
// Function ID: 83617
// Name: getSpeakerRowHeight
// Dependencies: []
// Exports: default

// Module 10761 (getSpeakerRowHeight)
function getSpeakerRowHeight(arg0, arg1) {
  if (arg0 > 0) {
    return arg1(dependencyMap[6]).SPEAKER_TILE_HEIGHTS.THIRD + 8;
  } else if (1 === arg1) {
    return arg1(dependencyMap[6]).SPEAKER_TILE_HEIGHTS.FULL + 8;
  } else if (2 === arg1) {
    return arg1(dependencyMap[6]).SPEAKER_TILE_HEIGHTS.HALF + 8;
  } else {
    return arg1(dependencyMap[6]).SPEAKER_TILE_HEIGHTS.THIRD + 8;
  }
}
let closure_3 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
({ useActiveSpeakerPillScrollHandler: closure_5, useActiveSpeakerPillState: closure_6 } = arg1(dependencyMap[2]));
const MAX_AUDIENCE_ROW_LIMIT = arg1(dependencyMap[3]).MAX_AUDIENCE_ROW_LIMIT;
const tmp2 = arg1(dependencyMap[2]);
({ jsx: closure_8, jsxs: closure_9 } = arg1(dependencyMap[4]));
const obj = { broadcastStatus: true, broadcastType: "/assets/modules/video_calls/native/images", damping: 18, direction: arg1(dependencyMap[5]).CutoutDirection.RIGHT };
let closure_11 = { STREAM: 0, [0]: "STREAM", SPEAKER: 1, [1]: "SPEAKER", AUDIENCE: 2, [2]: "AUDIENCE" };
let closure_12 = importAllResult.memo((channel) => {
  channel = channel.channel;
  const arg1 = channel;
  const listSections = channel.listSections;
  const importDefault = listSections;
  const rowsBySection = channel.rowsBySection;
  const dependencyMap = rowsBySection;
  const tmp = callback(importAllResult.useState(false), 2);
  const first = tmp[0];
  let callback = first;
  const tmp4 = callback(tmp[1].useState(false), 2);
  const first1 = tmp4[0];
  const tmp6 = tmp4[1];
  const tmp7 = callback(tmp6(), 2);
  const first2 = tmp7[0];
  const MAX_AUDIENCE_ROW_LIMIT = first2;
  const tmp9 = tmp7[1];
  importDefault(dependencyMap[8])(() => () => {
    callback(false);
  });
  const items = [listSections];
  const sections = importAllResult.useMemo(() => {
    let num = 1;
    if (null != listSections[closure_11.STREAM]) {
      num = tmp;
    }
    const items = [Math.max(num, 1), , ];
    let num2 = 1;
    if (null != listSections[closure_11.SPEAKER]) {
      num2 = tmp2;
    }
    items[1] = Math.max(num2, 1);
    items[2] = listSections[closure_11.AUDIENCE];
    return items;
  }, items);
  let obj = arg1(dependencyMap[9]);
  const actualStageSpeakerCount = obj.useActualStageSpeakerCount(channel.id);
  obj = actualStageSpeakerCount;
  const stageParticipantsCount = arg1(dependencyMap[9]).useStageParticipantsCount(channel.id, arg1(dependencyMap[7]).StageChannelParticipantNamedIndex.AUDIENCE);
  let closure_11 = stageParticipantsCount;
  const items1 = [actualStageSpeakerCount, stageParticipantsCount];
  callback = importAllResult.useCallback((arg0) => {
    if (stageParticipantsCount.STREAM === arg0) {
      return 0;
    } else if (stageParticipantsCount.SPEAKER === arg0) {
      let num5 = 48;
      if (0 === actualStageSpeakerCount) {
        num5 = 0;
      }
      return num5;
    } else if (stageParticipantsCount.AUDIENCE === arg0) {
      let num3 = 48;
      if (0 === stageParticipantsCount) {
        num3 = 0;
      }
      return num3;
    } else {
      listSections(rowsBySection[10])(null != arg0, "Section Not Found");
      return 0;
    }
  }, items1);
  let closure_12 = callback;
  const items2 = [callback, rowsBySection, first, first1];
  const itemSize = importAllResult.useCallback((arg0, arg1) => {
    if (null == arg1) {
      return 0;
    } else {
      let num = 0;
      if (0 === arg1) {
        num = callback(arg0);
      }
      if (stageParticipantsCount.STREAM === arg0) {
        let sum = num;
        if (null != rowsBySection[arg0][arg1]) {
          sum = itemSize(0, 1) + num;
        }
        return sum;
      } else if (stageParticipantsCount.SPEAKER === arg0) {
        if (null == rowsBySection[arg0][arg1]) {
          return num;
        } else {
          let sum1 = num;
          if (!first1) {
            sum1 = itemSize(arg1, rowsBySection[arg0][arg1].length) + num;
          }
          return sum1;
        }
      } else if (stageParticipantsCount.AUDIENCE === arg0) {
        let sum2 = num;
        if (!first) {
          sum2 = 102 + num;
        }
        return sum2;
      } else {
        listSections(rowsBySection[10])(null != arg0, "Section Not Found");
        return 0;
      }
    }
  }, items2);
  const getSpeakerRowHeight = itemSize;
  const obj2 = arg1(dependencyMap[9]);
  const stageParticipants = arg1(dependencyMap[9]).useStageParticipants(channel.id, arg1(dependencyMap[7]).StageChannelParticipantNamedIndex.SPEAKER);
  const found = stageParticipants.filter((type) => type.type === channel(rowsBySection[7]).StageChannelParticipantTypes.VOICE);
  const mapped = found.map((user) => user.user);
  const items3 = [tmp[1], first, first1, tmp6, actualStageSpeakerCount, stageParticipantsCount, mapped];
  const callback2 = importAllResult.useCallback((arg0) => {
    if (stageParticipantsCount.STREAM === arg0) {
      return null;
    } else if (stageParticipantsCount.AUDIENCE === arg0) {
      let tmp16 = null;
      if (0 !== stageParticipantsCount) {
        let obj = {};
        const intl = channel(rowsBySection[12]).intl;
        obj.label = intl.string(channel(rowsBySection[12]).t.3foUu5);
        obj.count = stageParticipantsCount;
        obj.onToggleCollapse = function onToggleCollapse() {
          return callback(!closure_3);
        };
        obj.collapsed = first;
        tmp16 = tmp9(listSections(rowsBySection[11]), obj);
        const tmp20 = listSections(rowsBySection[11]);
      }
      return tmp16;
    } else if (stageParticipantsCount.SPEAKER === arg0) {
      let tmp27Result = null;
      if (0 !== actualStageSpeakerCount) {
        obj = {};
        const intl2 = channel(rowsBySection[12]).intl;
        obj.label = intl2.string(channel(rowsBySection[12]).t.CduOkx);
        obj.count = actualStageSpeakerCount;
        obj.onToggleCollapse = function onToggleCollapse() {
          return callback2(!closure_5);
        };
        obj.collapsed = first1;
        let tmp14;
        if (first1) {
          obj = { users: mapped, max: 10, avatarSize: channel(rowsBySection[5]).AvatarSizes.XSMALL_20, cutout: actualStageSpeakerCount };
          tmp14 = tmp9(listSections(rowsBySection[13]), obj);
          const tmp10 = listSections(rowsBySection[13]);
        }
        obj.children = tmp14;
        tmp27Result = tmp9(listSections(rowsBySection[11]), obj);
        const tmp27 = tmp9;
        const tmp30 = listSections(rowsBySection[11]);
      }
      return tmp27Result;
    } else {
      listSections(rowsBySection[10])(null != arg0, "Section Not Found");
      return null;
    }
  }, items3);
  const renderSectionFooter = importAllResult.useCallback((arg0) => {
    if (stageParticipantsCount.SPEAKER !== arg0) {
      if (stageParticipantsCount.AUDIENCE !== arg0) {
        listSections(rowsBySection[10])(null != arg0, "Section Not Found");
        return null;
      }
    }
    return null;
  }, []);
  const items4 = [channel, callback2, rowsBySection, first, first1];
  const sectionFooterSize = importAllResult.useCallback((arg0) => {
    if (stageParticipantsCount.SPEAKER === arg0) {
      return 0;
    } else if (stageParticipantsCount.AUDIENCE === arg0) {
      return 160;
    } else {
      listSections(rowsBySection[10])(null != arg0, "Section Not Found");
      return 0;
    }
  }, []);
  const items5 = [sections, itemSize];
  const renderItem = importAllResult.useCallback((arg0, row) => {
    let tmp = null;
    if (0 === row) {
      tmp = callback2(arg0);
    }
    if (null == rowsBySection[arg0][row]) {
      return tmp;
    } else if (stageParticipantsCount.STREAM === arg0) {
      let obj = {};
      obj = { channel, participants: rowsBySection[arg0][row], row };
      obj.children = tmp9(listSections(rowsBySection[14]), obj);
      const _HermesInternal3 = HermesInternal;
      return tmp9(tmp3.Fragment, obj, "stream-" + arg0 + "-" + row);
    } else if (stageParticipantsCount.SPEAKER === arg0) {
      const obj1 = {};
      const items = [tmp, ];
      let tmp19 = !first1;
      if (tmp19) {
        const obj2 = { channel, participants: rowsBySection[arg0][row], row };
        tmp19 = tmp9(listSections(rowsBySection[14]), obj2);
      }
      items[1] = tmp19;
      obj1.children = items;
      const _HermesInternal2 = HermesInternal;
      return sections(tmp3.Fragment, obj1, "speaker-" + arg0 + "-" + row);
    } else if (stageParticipantsCount.AUDIENCE === arg0) {
      obj = {};
      const items1 = [tmp, ];
      let tmp9 = !first;
      if (tmp9) {
        const obj3 = { channel, participants: rowsBySection[arg0][row] };
        tmp9 = tmp9(listSections(rowsBySection[15]), obj3);
      }
      items1[1] = tmp9;
      obj.children = items1;
      const _HermesInternal = HermesInternal;
      return sections(tmp3.Fragment, obj, "audience-" + arg0 + "-" + row);
    } else {
      listSections(rowsBySection[10])(null != arg0, "Section Not Found");
      return null;
    }
  }, items4);
  const memo1 = importAllResult.useMemo(() => {
    let num = 0;
    if (sections[closure_11.STREAM] > 0) {
      num = itemSize(stageParticipantsCount.STREAM, 0);
    }
    return num;
  }, items5);
  const items6 = [sections, itemSize];
  const memo2 = importAllResult.useMemo(() => {
    let tmp4;
    let num = 0;
    let num2 = 0;
    let num3 = 0;
    if (0 < sections[closure_11.SPEAKER]) {
      do {
        let tmp = closure_13;
        let tmp2 = closure_11;
        num2 = num2 + closure_13(closure_11.SPEAKER, num3);
        num3 = num3 + 1;
        let tmp3 = closure_9;
        num = num2;
        tmp4 = closure_9[closure_11.SPEAKER];
      } while (num3 < tmp4);
    }
    return num;
  }, items6);
  const items7 = [tmp9, first2, memo2, memo1];
  const onScroll = importAllResult.useCallback((nativeEvent) => {
    const y = nativeEvent.nativeEvent.contentOffset.y;
    const diff = memo2 + memo1 - 60;
    if (!first2) {
      if (y > diff) {
        tmp9(true);
      }
    }
    let tmp4 = first2;
    if (first2) {
      tmp4 = y < diff;
    }
    if (tmp4) {
      tmp9(false);
    }
  }, items7);
  return tmp9(importDefault(dependencyMap[16]), { ref: callback(first1(), 1)[0], sections, renderItem, itemSize, renderSectionFooter, sectionFooterSize, onScroll });
});
const tmp3 = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[20]).fileFinishedImporting("modules/stage_channels/native/components/StageChannelCallList.tsx");

export default function StageChannelCallList(channel) {
  channel = channel.channel;
  let obj = arg1(dependencyMap[17]);
  const throttleDurationForChannel = obj.useThrottleDurationForChannel(channel.id);
  const width = importDefault(dependencyMap[18])().width;
  const arg1 = width;
  const isScreenLandscape = arg1(dependencyMap[19]).useIsScreenLandscape();
  const importDefault = isScreenLandscape;
  const items = [width, isScreenLandscape];
  const memo = importAllResult.useMemo(() => {
    const obj = {};
    let num = 3;
    if (isScreenLandscape) {
      const _Math = Math;
      const _Math2 = Math;
      num = Math.max(3, Math.floor(width / width(closure_2[6]).LANDSCAPE_MAX_TILE_WIDTH));
    }
    obj[width(closure_2[7]).StageChannelParticipantNamedIndex.SPEAKER] = num;
    obj[width(closure_2[7]).StageChannelParticipantNamedIndex.AUDIENCE] = closure_7;
    return obj;
  }, items);
  const obj2 = arg1(dependencyMap[19]);
  const tmp4 = callback(arg1(dependencyMap[17]).useStageChannelParticipantsListThrottled(channel.id, memo, throttleDurationForChannel, true), 2);
  obj = { channel, listSections: tmp4[0], rowsBySection: tmp4[1] };
  return callback2(closure_12, obj);
};
