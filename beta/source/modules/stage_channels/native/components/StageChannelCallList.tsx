// Module ID: 9504
// Function ID: 9505
// Name: StageChannelCallList
// Dependencies: [32, 19, 9505, 5726, 21, 1177, 9506, 5737, 5298, 5743, 38, 9513, 1115, 9514, 9515, 9527, 6493, 9531, 1479, 5438, 2]
// Exports: default

// Module 9504 (StageChannelCallList)
import _modDef38 from "module_38" /* 38 */;
import intl3 from "intl" /* 1115 */;
import native from "native" /* 1177 */;
import StageChannelsConstants from "StageChannelsConstants" /* 5726 */;
import StageChannelParticipants from "StageChannelParticipants" /* 5737 */;
import SpeakerTile from "SpeakerTile" /* 9506 */;
import StageSectionHeaderDefault from "StageSectionHeader" /* 9513 */;
import StageGridRowDefault from "StageGridRow" /* 9515 */;
import AudienceGridRowDefault from "AudienceGridRow" /* 9527 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import StageChannelListStore from "StageChannelListStore" /* 9505 */;
import Fragment_mod from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let c9;
let hasOwnProperty;
let metroImportAll;
let metroRequire;
let react = react_mod;
({ useActiveSpeakerPillScrollHandler: hasOwnProperty, useActiveSpeakerPillState: metroRequire } = StageChannelListStore);
const MAX_AUDIENCE_ROW_LIMIT = StageChannelsConstants.MAX_AUDIENCE_ROW_LIMIT;
let Fragment = Fragment_mod;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let cutout = { direction: native.CutoutDirection.RIGHT, radius: 13, inset: -6 };
let closure_11 = { STREAM: 0, [0]: "STREAM", SPEAKER: 1, [1]: "SPEAKER", AUDIENCE: 2, [2]: "AUDIENCE" };
let closure_12 = react.memo((channel) => {
  let closure_4;
  channel = channel.channel;
  const listSections = channel.listSections;
  const rowsBySection = channel.rowsBySection;
  let collapsed;
  react = undefined;
  let tmp = collapsed(react.useState(false), 2);
  collapsed = tmp[0];
  let tmp3 = tmp[1];
  react = tmp3;
  let tmp4 = collapsed(react.useState(false), 2);
  const first1 = tmp4[0];
  const tmp6 = tmp4[1];
  let closure_6 = tmp6;
  let tmp7 = collapsed(closure_6(), 2);
  const first2 = tmp7[0];
  let closure_8 = tmp9;
  const ref = collapsed(first1(), 1)[0];
  listSections(rowsBySection[8])(() => () => {
    closure_1_8(false);
  });
  let items = [listSections];
  const sections = react.useMemo(() => {
    let num = listSections[stageParticipantsCount.STREAM];
    const _Math = Math;
    if (num == null) {
      num = 1;
    }
    const items = [max(num, 1), , ];
    let num2 = tmp[tmp2.SPEAKER];
    const _Math2 = Math;
    const max2 = Math.max;
    if (num2 == null) {
      num2 = 1;
    }
    items[1] = max2(num2, 1);
    items[2] = listSections[stageParticipantsCount.AUDIENCE];
    return items;
  }, items);
  let obj = channel(rowsBySection[9]);
  const actualStageSpeakerCount = obj.useActualStageSpeakerCount(channel.id);
  let obj2 = channel(rowsBySection[9]);
  const stageParticipantsCount = obj2.useStageParticipantsCount(channel.id, channel(rowsBySection[7]).StageChannelParticipantNamedIndex.AUDIENCE);
  let items1 = [actualStageSpeakerCount, stageParticipantsCount];
  const callback = react.useCallback((arg0) => {
    if (stageParticipantsCount.STREAM === arg0) {
      return 0;
    } else if (stageParticipantsCount.SPEAKER === arg0) {
      let num4 = 48;
      if (0 === actualStageSpeakerCount) {
        num4 = 0;
      }
      return num4;
    } else if (stageParticipantsCount.AUDIENCE === arg0) {
      let num2 = 48;
      if (0 === stageParticipantsCount) {
        num2 = 0;
      }
      return num2;
    } else {
      _modDef38(null != arg0, "Section Not Found");
      return 0;
    }
  }, items1);
  const items2 = [callback, rowsBySection, collapsed, first1];
  const itemSize = react.useCallback((arg0, arg1) => {
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
          sum = SpeakerTile.SPEAKER_TILE_HEIGHTS.FULL + 8 + num;
        }
        return sum;
      } else if (stageParticipantsCount.SPEAKER === arg0) {
        if (null == rowsBySection[arg0][arg1]) {
          return num;
        } else {
          let sum1;
          if (arg1 > 0) {
            sum1 = SpeakerTile.SPEAKER_TILE_HEIGHTS.THIRD + 8;
          } else if (1 === tmp8[arg0][arg1].length) {
            sum1 = SpeakerTile.SPEAKER_TILE_HEIGHTS.FULL + 8;
          } else if (2 === tmp8[arg0][arg1].length) {
            sum1 = SpeakerTile.SPEAKER_TILE_HEIGHTS.HALF + 8;
          } else {
            sum1 = SpeakerTile.SPEAKER_TILE_HEIGHTS.THIRD + 8;
          }
          let sum2 = num;
          if (!first1) {
            sum2 = sum1 + num;
          }
          return sum2;
        }
      } else if (stageParticipantsCount.AUDIENCE === arg0) {
        let sum3 = num;
        if (!first) {
          sum3 = 102 + num;
        }
        return sum3;
      } else {
        _modDef38(null != arg0, "Section Not Found");
        return 0;
      }
    }
  }, items2);
  let obj3 = channel(rowsBySection[9]);
  const stageParticipants = obj3.useStageParticipants(channel.id, channel(rowsBySection[7]).StageChannelParticipantNamedIndex.SPEAKER);
  const found = stageParticipants.filter((type) => type.type === channel(rowsBySection[7]).StageChannelParticipantTypes.VOICE);
  const mapped = found.map((user) => user.user);
  const items3 = [tmp3, collapsed, first1, tmp6, actualStageSpeakerCount, stageParticipantsCount, mapped];
  const callback2 = react.useCallback((arg0) => {
    let intl;
    let intl2;
    let tmp21Result;
    if (stageParticipantsCount.STREAM === arg0) {
      return null;
    } else if (stageParticipantsCount.AUDIENCE === arg0) {
      let tmp13 = null;
      if (0 !== stageParticipantsCount) {
        const obj2 = {
          label: intl.string(intl3.t["3foUu5"]),
          count: tmp12,
          onToggleCollapse() {
                return closure_1_4(!collapsed);
              },
          collapsed
        };
        const tmp17 = StageSectionHeaderDefault;
        intl = intl3.intl;
        tmp13 = metroImportAll(tmp17, obj2);
      }
      return tmp13;
    } else if (stageParticipantsCount.SPEAKER === arg0) {
      let tmp21Result2 = null;
      if (0 !== actualStageSpeakerCount) {
        const obj3 = {
          label: intl2.string(intl3.t.CduOkx),
          count: tmp6,
          onToggleCollapse() {
                return closure_1_6(!first1);
              },
          collapsed: first1,
          children: tmp21Result
        };
        const tmp24 = StageSectionHeaderDefault;
        intl2 = intl3.intl;
        tmp21Result = undefined;
        const tmp22 = importDefault;
        const tmp25 = require;
        if (first1) {
          cutout = { users: mapped, max: 10, avatarSize: tmp25(1177).AvatarSizes.XSMALL_20, cutout };
          const tmp22Result = tmp22(9514);
          tmp21Result = tmp21(tmp22Result, cutout);
        }
        tmp21Result2 = tmp21(tmp24, obj3);
      }
      return tmp21Result2;
    } else {
      _modDef38(null != arg0, "Section Not Found");
      return null;
    }
  }, items3);
  const renderSectionFooter = react.useCallback((arg0) => {
    if (stageParticipantsCount.SPEAKER !== arg0) {
      if (stageParticipantsCount.AUDIENCE !== arg0) {
        listSections(rowsBySection[10])(null != arg0, "Section Not Found");
        return null;
      }
    }
    return null;
  }, []);
  const items4 = [channel, callback2, rowsBySection, collapsed, first1];
  const sectionFooterSize = react.useCallback((arg0) => {
    if (stageParticipantsCount.SPEAKER === arg0) {
      return 0;
    } else if (tmp.AUDIENCE === arg0) {
      return 160;
    } else {
      listSections(rowsBySection[10])(null != arg0, "Section Not Found");
      return 0;
    }
  }, []);
  const items5 = [sections, itemSize];
  const renderItem = react.useCallback((arg0, row) => {
    let obj3;
    let tmp = null;
    if (0 === row) {
      tmp = callback2(arg0);
    }
    if (null == rowsBySection[arg0][row]) {
      return tmp;
    } else if (stageParticipantsCount.STREAM === arg0) {
      const Fragment3 = react.Fragment;
      const obj2 = { children: metroImportAll(StageGridRowDefault, obj3) };
      const _HermesInternal3 = HermesInternal;
      obj3 = { channel, participants: rowsBySection[arg0][row], row };
      return metroImportAll(Fragment3, obj2, "stream-" + arg0 + "-" + row);
    } else if (stageParticipantsCount.SPEAKER === arg0) {
      const items = [tmp, ];
      let tmp19 = !first1;
      const Fragment2 = react.Fragment;
      const tmp16 = React4;
      if (!first1) {
        const obj4 = { channel, participants: rowsBySection[arg0][row], row };
        tmp19 = metroImportAll(StageGridRowDefault, obj4);
      }
      const obj5 = { children: items };
      items[1] = tmp19;
      const _HermesInternal2 = HermesInternal;
      return tmp16(Fragment2, obj5, "speaker-" + arg0 + "-" + row);
    } else if (stageParticipantsCount.AUDIENCE === arg0) {
      const items1 = [tmp, ];
      let tmp10 = !first;
      const Fragment = react.Fragment;
      const tmp7 = React4;
      if (!first) {
        const obj = { channel, participants: rowsBySection[arg0][row] };
        tmp10 = metroImportAll(AudienceGridRowDefault, obj);
      }
      const obj6 = { children: items1 };
      items1[1] = tmp10;
      const _HermesInternal = HermesInternal;
      return tmp7(Fragment, obj6, "audience-" + arg0 + "-" + row);
    } else {
      _modDef38(null != arg0, "Section Not Found");
      return null;
    }
  }, items4);
  const memo1 = react.useMemo(() => {
    let num = 0;
    if (sections[stageParticipantsCount.STREAM] > 0) {
      num = itemSize(tmp.STREAM, 0);
    }
    return num;
  }, items5);
  const items6 = [sections, itemSize];
  const memo2 = react.useMemo(() => {
    let tmp4;
    let num = 0;
    let num2 = 0;
    let num3 = 0;
    if (0 < sections[stageParticipantsCount.SPEAKER]) {
      do {
        num2 = num2 + itemSize(stageParticipantsCount.SPEAKER, num);
        num = num + 1;
        num3 = num2;
        tmp4 = sections[stageParticipantsCount.SPEAKER];
      } while (num < tmp4);
    }
    return num3;
  }, items6);
  const items7 = [tmp9, first2, memo2, memo1];
  const onScroll = react.useCallback((nativeEvent) => {
    const y = nativeEvent.nativeEvent.contentOffset.y;
    const diff = memo2 + memo1 - 60;
    let tmp2 = first2;
    if (!tmp2) {
      if (y > diff) {
        closure_8(true);
      }
    }
    if (tmp2) {
      tmp2 = y < diff;
    }
    if (tmp2) {
      closure_8(false);
    }
  }, items7);
  return closure_8(listSections(rowsBySection[16]), { ref, sections, renderItem, itemSize, renderSectionFooter, sectionFooterSize, onScroll });
});
const result = size.fileFinishedImporting("modules/stage_channels/native/components/StageChannelCallList.tsx");

export default function StageChannelCallList(channel) {
  channel = channel.channel;
  let width;
  let isScreenLandscape;
  let obj = width(9531);
  const throttleDurationForChannel = obj.useThrottleDurationForChannel(channel.id);
  width = isScreenLandscape(1479)().width;
  const obj2 = width(5438);
  isScreenLandscape = obj2.useIsScreenLandscape();
  const items = [width, isScreenLandscape];
  const memo = react.useMemo(() => {
    let num = 3;
    const SPEAKER = StageChannelParticipants.StageChannelParticipantNamedIndex.SPEAKER;
    const tmp = width;
    if (isScreenLandscape) {
      const _Math = Math;
      const _Math2 = Math;
      num = Math.max(3, Math.floor(tmp / tmp2(9506).LANDSCAPE_MAX_TILE_WIDTH));
    }
    const obj = {};
    obj[SPEAKER] = num;
    obj[StageChannelParticipants.StageChannelParticipantNamedIndex.AUDIENCE] = MAX_AUDIENCE_ROW_LIMIT;
    return obj;
  }, items);
  const obj3 = width(9531);
  const tmp4 = _slicedToArray(obj3.useStageChannelParticipantsListThrottled(channel.id, memo, throttleDurationForChannel, true), 2);
  const obj4 = { channel, listSections: tmp4[0], rowsBySection: tmp4[1] };
  return closure_8(closure_12, obj4);
};
