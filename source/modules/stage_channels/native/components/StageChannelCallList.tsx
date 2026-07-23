// Module ID: 10772
// Function ID: 83690
// Name: getSpeakerRowHeight
// Dependencies: [57, 31, 10773, 4947, 33, 1273, 10774, 4957, 4559, 4963, 44, 10781, 1212, 9994, 10782, 10794, 7588, 10798, 1450, 4663, 2]
// Exports: default

// Module 10772 (getSpeakerRowHeight)
import _slicedToArray from "_slicedToArray";
import importAllResult from "result";
import { MAX_AUDIENCE_ROW_LIMIT } from "MAX_STAGE_TOPIC_LENGTH";
import jsxProd from "jsxProd";
import useActiveSpeakerPillScrollHandler from "useActiveSpeakerPillScrollHandler";

let closure_5;
let closure_6;
let closure_8;
let closure_9;
const require = arg1;
function getSpeakerRowHeight(arg0, arg1) {
  if (arg0 > 0) {
    return require(10774) /* getSizeStyle */.SPEAKER_TILE_HEIGHTS.THIRD + 8;
  } else if (1 === arg1) {
    return require(10774) /* getSizeStyle */.SPEAKER_TILE_HEIGHTS.FULL + 8;
  } else if (2 === arg1) {
    return require(10774) /* getSizeStyle */.SPEAKER_TILE_HEIGHTS.HALF + 8;
  } else {
    return require(10774) /* getSizeStyle */.SPEAKER_TILE_HEIGHTS.THIRD + 8;
  }
}
({ useActiveSpeakerPillScrollHandler: closure_5, useActiveSpeakerPillState: closure_6 } = require("useActiveSpeakerPillScrollHandler"));
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
let obj = { direction: require("Button").CutoutDirection.RIGHT, radius: 13, inset: -6 };
let closure_11 = { STREAM: 0, [0]: "STREAM", SPEAKER: 1, [1]: "SPEAKER", AUDIENCE: 2, [2]: "AUDIENCE" };
let closure_12 = importAllResult.memo((channel) => {
  channel = channel.channel;
  const listSections = channel.listSections;
  const rowsBySection = channel.rowsBySection;
  let tmp = first(importAllResult.useState(false), 2);
  first = tmp[0];
  let tmp4 = first(tmp[1].useState(false), 2);
  const first1 = tmp4[0];
  let callback2 = tmp6;
  const tmp7 = first(callback2(), 2);
  const first2 = tmp7[0];
  const callback3 = tmp9;
  listSections(rowsBySection[8])(() => () => {
    outer1_8(false);
  });
  let items = [listSections];
  const sections = importAllResult.useMemo(() => {
    let num = 1;
    if (null != listSections[stageParticipantsCount.STREAM]) {
      num = tmp;
    }
    const items = [Math.max(num, 1), , ];
    let num2 = 1;
    if (null != listSections[stageParticipantsCount.SPEAKER]) {
      num2 = tmp2;
    }
    items[1] = Math.max(num2, 1);
    items[2] = listSections[stageParticipantsCount.AUDIENCE];
    return items;
  }, items);
  const actualStageSpeakerCount = channel(rowsBySection[9]).useActualStageSpeakerCount(channel.id);
  let obj = channel(rowsBySection[9]);
  const stageParticipantsCount = channel(rowsBySection[9]).useStageParticipantsCount(channel.id, channel(rowsBySection[7]).StageChannelParticipantNamedIndex.AUDIENCE);
  let items1 = [actualStageSpeakerCount, stageParticipantsCount];
  const callback = importAllResult.useCallback((arg0) => {
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
  let obj2 = channel(rowsBySection[9]);
  const stageParticipants = channel(rowsBySection[9]).useStageParticipants(channel.id, channel(rowsBySection[7]).StageChannelParticipantNamedIndex.SPEAKER);
  const found = stageParticipants.filter((type) => type.type === channel(rowsBySection[7]).StageChannelParticipantTypes.VOICE);
  const mapped = found.map((user) => user.user);
  const items3 = [tmp[1], first, first1, tmp4[1], actualStageSpeakerCount, stageParticipantsCount, mapped];
  callback2 = importAllResult.useCallback((arg0) => {
    if (stageParticipantsCount.STREAM === arg0) {
      return null;
    } else if (stageParticipantsCount.AUDIENCE === arg0) {
      let tmp16 = null;
      if (0 !== stageParticipantsCount) {
        let obj = {};
        const intl = channel(rowsBySection[12]).intl;
        obj.label = intl.string(channel(rowsBySection[12]).t["3foUu5"]);
        obj.count = stageParticipantsCount;
        obj.onToggleCollapse = function onToggleCollapse() {
          return outer1_4(!outer1_3);
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
          return outer1_6(!outer1_5);
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
      tmp9 = !first;
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
    if (sections[stageParticipantsCount.STREAM] > 0) {
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
    if (0 < sections[stageParticipantsCount.SPEAKER]) {
      do {
        let tmp = itemSize;
        let tmp2 = stageParticipantsCount;
        num2 = num2 + itemSize(stageParticipantsCount.SPEAKER, num3);
        num3 = num3 + 1;
        let tmp3 = sections;
        num = num2;
        tmp4 = sections[stageParticipantsCount.SPEAKER];
      } while (num3 < tmp4);
    }
    return num;
  }, items6);
  const items7 = [tmp7[1], first2, memo2, memo1];
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
  return callback3(listSections(rowsBySection[16]), { ref: first(first1(), 1)[0], sections, renderItem, itemSize, renderSectionFooter, sectionFooterSize, onScroll });
});
const result = require("useActiveSpeakerPillScrollHandler").fileFinishedImporting("modules/stage_channels/native/components/StageChannelCallList.tsx");

export default function StageChannelCallList(channel) {
  channel = channel.channel;
  let obj = width(10798);
  const throttleDurationForChannel = obj.useThrottleDurationForChannel(channel.id);
  width = isScreenLandscape(1450)().width;
  isScreenLandscape = width(4663).useIsScreenLandscape();
  const items = [width, isScreenLandscape];
  const memo = importAllResult.useMemo(() => {
    const obj = {};
    let num = 3;
    if (isScreenLandscape) {
      const _Math = Math;
      const _Math2 = Math;
      num = Math.max(3, Math.floor(width / width(outer1_2[6]).LANDSCAPE_MAX_TILE_WIDTH));
    }
    obj[width(outer1_2[7]).StageChannelParticipantNamedIndex.SPEAKER] = num;
    obj[width(outer1_2[7]).StageChannelParticipantNamedIndex.AUDIENCE] = outer1_7;
    return obj;
  }, items);
  const obj2 = width(4663);
  const tmp4 = callback(width(10798).useStageChannelParticipantsListThrottled(channel.id, memo, throttleDurationForChannel, true), 2);
  obj = { channel, listSections: tmp4[0], rowsBySection: tmp4[1] };
  return callback3(closure_12, obj);
};
