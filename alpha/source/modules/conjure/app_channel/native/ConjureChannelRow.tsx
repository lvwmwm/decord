// Module ID: 17686
// Function ID: 17687
// Name: ConjureChannelRow
// Dependencies: [19, 11954, 21, 4972, 587, 558, 576, 17687, 13290, 1125, 3831, 12174, 17688, 14178, 2]

// Module 17686 (ConjureChannelRow)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import _modDef3831 from "module_3831" /* 3831 */;
import RedesignChannelListConstants from "RedesignChannelListConstants" /* 11954 */;
import MagicWandIcon from "MagicWandIcon" /* 12174 */;
import BaseChannelItem from "BaseChannelItem" /* 13290 */;
import openConjureProjectsSheetDefault from "openConjureProjectsSheet" /* 14178 */;
import useConjureGuildUnreadSummaryDefault from "useConjureGuildUnreadSummary" /* 17687 */;
import ChannelBadgeDefault from "ChannelBadge" /* 17688 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4972 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const BaseChannelItemDefault = BaseChannelItem;

let obj2;
const CHANNEL_MARGIN_VERTICAL = RedesignChannelListConstants.CHANNEL_MARGIN_VERTICAL;
const jsx = Fragment.jsx;
let obj = { container: obj2 };
obj2 = { marginVertical: CHANNEL_MARGIN_VERTICAL, marginHorizontal: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.md };
let closure_4 = createStyles.createStyles(obj);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureChannelRow(selected) {
  let SELECTED;
  let badgeCount;
  let first;
  let hasUnread;
  let tmp10;
  let tmp12;
  let tmp13;
  let tmp17;
  let tmp9;
  const obj = react2;
  const cResult = obj.c(17);
  selected = selected.selected;
  const guild = selected.guild;
  const tmp4 = closure_4();
  ({ hasUnread, badgeCount } = useConjureGuildUnreadSummaryDefault(guild.id));
  useConjureGuildUnreadSummaryDefault(guild.id);
  if (true === selected) {
    SELECTED = tmp(13290).ChannelModes.SELECTED;
  } else {
    const ChannelModes = tmp(13290).ChannelModes;
    SELECTED = hasUnread ? ChannelModes.UNREAD_IMPORTANT : ChannelModes.DEFAULT;
  }
  const container = tmp4.container;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1125).intl;
    const stringResult = intl.string(_modDef3831.uk6jhJ);
    cResult[0] = stringResult;
    first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== selected) {
    const obj2 = { selected };
    cResult[1] = selected;
    cResult[2] = obj2;
    tmp9 = obj2;
  } else {
    tmp9 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = tmp(1125).intl;
    const stringResult1 = intl2.string(_modDef3831.uk6jhJ);
    cResult[3] = stringResult1;
    tmp10 = stringResult1;
  } else {
    tmp10 = cResult[3];
  }
  if (cResult[4] !== SELECTED) {
    const tmp15 = jsx(BaseChannelItem.BaseChannelName, { name: tmp10, mode: SELECTED });
    const BaseChannelIcon = tmp(13290).BaseChannelIcon;
    const tmp16 = <BaseChannelIcon mode={SELECTED} IconComponent={MagicWandIcon.MagicWandIcon} />;
    cResult[4] = SELECTED;
    cResult[5] = tmp15;
    cResult[6] = tmp16;
    tmp13 = tmp16;
    tmp12 = tmp15;
  } else {
    tmp12 = cResult[5];
    tmp13 = cResult[6];
  }
  if (cResult[7] !== badgeCount) {
    const tmp19 = jsx(ChannelBadgeDefault, { mentionCount: badgeCount, isNewChannel: false });
    cResult[7] = badgeCount;
    cResult[8] = tmp19;
    tmp17 = tmp19;
  } else {
    tmp17 = cResult[8];
  }
  if (cResult[9] === SELECTED) {
    if (cResult[10] === hasUnread) {
      if (cResult[11] === tmp4.container) {
        if (cResult[12] === tmp9) {
          if (cResult[13] === tmp12) {
            if (cResult[14] === tmp13) {
              let tmp20;
              if (cResult[15] === tmp17) {
                tmp20 = cResult[16];
              }
              return tmp20;
            }
          }
        }
      }
    }
  }
  BaseChannelItemDefault;
  const tmp22 = <tmp5Result onPress={openConjureProjectsSheetDefault} style={container} accessible accessibilityLabel={first} accessibilityState={tmp9} mode={SELECTED} unread={hasUnread} name={tmp12} icon={tmp13} channelInfo={tmp17} />;
  cResult[9] = SELECTED;
  cResult[10] = hasUnread;
  cResult[11] = tmp4.container;
  cResult[12] = tmp9;
  cResult[13] = tmp12;
  cResult[14] = tmp13;
  cResult[15] = tmp17;
  cResult[16] = tmp22;
  tmp20 = tmp22;
}) : (function ConjureChannelRow(selected) {
  let DEFAULT;
  let intl2;
  let tmp6;
  selected = selected.selected;
  const guild = selected.guild;
  const tmp = closure_4();
  const tmp4 = useConjureGuildUnreadSummaryDefault(guild.id);
  const hasUnread = tmp4.hasUnread;
  const badgeCount = tmp4.badgeCount;
  if (true === selected) {
    DEFAULT = BaseChannelItem.ChannelModes.SELECTED;
    tmp6 = require;
  } else {
    const ChannelModes = BaseChannelItem.ChannelModes;
    if (hasUnread) {
      DEFAULT = ChannelModes.UNREAD_IMPORTANT;
      tmp6 = tmp5;
    } else {
      DEFAULT = ChannelModes.DEFAULT;
      tmp6 = tmp5;
    }
  }
  BaseChannelItemDefault;
  const intl = tmp6(1125).intl;
  ({ name: intl2.string(_modDef3831.uk6jhJ), mode: DEFAULT });
  const BaseChannelName = tmp6(13290).BaseChannelName;
  intl2 = tmp6(1125).intl;
  ({ mode: DEFAULT, IconComponent: tmp6(12174).MagicWandIcon });
  const BaseChannelIcon = tmp6(13290).BaseChannelIcon;
  return <tmp2Result onPress={openConjureProjectsSheetDefault} style={tmp.container} accessible accessibilityLabel={intl.string(_modDef3831.uk6jhJ)} accessibilityState={{ selected }} mode={DEFAULT} unread={hasUnread} name={null} icon={null} channelInfo={null} />;
});
const result = size.fileFinishedImporting("modules/conjure/app_channel/native/ConjureChannelRow.tsx");

export default tmp3;
