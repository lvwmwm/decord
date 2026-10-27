// Module ID: 17344
// Function ID: 17345
// Name: ConjureChannelRow
// Dependencies: [19, 1087, 2075, 11895, 21, 5191, 587, 558, 576, 1114, 17345, 13034, 1128, 3883, 12158, 17346, 2]

// Module 17344 (ConjureChannelRow)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1087 */;
import router_utils from "router_utils" /* 1114 */;
import ChannelConstants from "ChannelConstants" /* 2075 */;
import _modDef3883 from "module_3883" /* 3883 */;
import RedesignChannelListConstants from "RedesignChannelListConstants" /* 11895 */;
import BaseChannelItemDefault from "BaseChannelItem" /* 13034 */;
import useConjureGuildUnreadSummaryDefault from "useConjureGuildUnreadSummary" /* 17345 */;
import ChannelBadgeDefault from "ChannelBadge" /* 17346 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5191 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let obj2;
const Routes = Constants.Routes;
const StaticChannelRoute = ChannelConstants.StaticChannelRoute;
const CHANNEL_MARGIN_VERTICAL = RedesignChannelListConstants.CHANNEL_MARGIN_VERTICAL;
const jsx = Fragment.jsx;
let obj = { container: obj2 };
obj2 = { marginVertical: CHANNEL_MARGIN_VERTICAL, marginHorizontal: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.md };
let closure_7 = createStyles.createStyles(obj);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureChannelRow(selected) {
  let SELECTED;
  let badgeCount;
  let hasUnread;
  let id;
  let tmp10;
  let tmp11;
  let tmp13;
  let tmp14;
  let tmp18;
  let tmp5;
  let tmp8;
  let obj = id(576);
  const cResult = obj.c(20);
  selected = selected.selected;
  const guild = selected.guild;
  const tmp4 = closure_7();
  id = guild.id;
  if (cResult[0] !== id) {
    const fn = function s() {
      const obj = router_utils;
      obj.transitionTo(Routes.CHANNEL(id, StaticChannelRoute.CONJURE));
    };
    cResult[0] = id;
    cResult[1] = fn;
    tmp5 = fn;
  } else {
    tmp5 = cResult[1];
  }
  ({ hasUnread, badgeCount } = useConjureGuildUnreadSummaryDefault(id));
  useConjureGuildUnreadSummaryDefault(id);
  if (true === selected) {
    SELECTED = tmp(13034).ChannelModes.SELECTED;
  } else {
    const ChannelModes = tmp(13034).ChannelModes;
    SELECTED = hasUnread ? ChannelModes.UNREAD_IMPORTANT : ChannelModes.DEFAULT;
  }
  const container = tmp4.container;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1128).intl;
    const stringResult = intl.string(_modDef3883.uk6jhJ);
    cResult[2] = stringResult;
    tmp8 = stringResult;
  } else {
    tmp8 = cResult[2];
  }
  if (cResult[3] !== selected) {
    const obj2 = { selected };
    cResult[3] = selected;
    cResult[4] = obj2;
    tmp10 = obj2;
  } else {
    tmp10 = cResult[4];
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = tmp(1128).intl;
    const stringResult1 = intl2.string(_modDef3883.uk6jhJ);
    cResult[5] = stringResult1;
    tmp11 = stringResult1;
  } else {
    tmp11 = cResult[5];
  }
  if (cResult[6] !== SELECTED) {
    const tmp16 = jsx(id(13034).BaseChannelName, { name: tmp11, mode: SELECTED });
    const BaseChannelIcon = tmp(13034).BaseChannelIcon;
    const tmp17 = <BaseChannelIcon mode={SELECTED} IconComponent={id(12158).MagicWandIcon} />;
    cResult[6] = SELECTED;
    cResult[7] = tmp16;
    cResult[8] = tmp17;
    tmp14 = tmp17;
    tmp13 = tmp16;
  } else {
    tmp13 = cResult[7];
    tmp14 = cResult[8];
  }
  if (cResult[9] !== badgeCount) {
    const tmp20 = jsx(ChannelBadgeDefault, { mentionCount: badgeCount, isNewChannel: false });
    cResult[9] = badgeCount;
    cResult[10] = tmp20;
    tmp18 = tmp20;
  } else {
    tmp18 = cResult[10];
  }
  if (cResult[11] === SELECTED) {
    if (cResult[12] === tmp5) {
      if (cResult[13] === hasUnread) {
        if (cResult[14] === tmp4.container) {
          if (cResult[15] === tmp10) {
            if (cResult[16] === tmp13) {
              if (cResult[17] === tmp14) {
                let tmp21;
                if (cResult[18] === tmp18) {
                  tmp21 = cResult[19];
                }
                return tmp21;
              }
            }
          }
        }
      }
    }
  }
  const tmp22 = jsx(BaseChannelItemDefault, { onPress: tmp5, style: container, accessible: true, accessibilityLabel: tmp8, accessibilityState: tmp10, mode: SELECTED, unread: hasUnread, name: tmp13, icon: tmp14, channelInfo: tmp18 });
  cResult[11] = SELECTED;
  cResult[12] = tmp5;
  cResult[13] = hasUnread;
  cResult[14] = tmp4.container;
  cResult[15] = tmp10;
  cResult[16] = tmp13;
  cResult[17] = tmp14;
  cResult[18] = tmp18;
  cResult[19] = tmp22;
  tmp21 = tmp22;
}) : (function ConjureChannelRow(selected) {
  let DEFAULT;
  let intl2;
  let tmp7;
  selected = selected.selected;
  const id = selected.guild.id;
  const items = [id];
  const tmp = closure_7();
  const callback = react.useCallback(() => {
    const obj = router_utils;
    obj.transitionTo(Routes.CHANNEL(id, StaticChannelRoute.CONJURE));
  }, items);
  const tmp5 = useConjureGuildUnreadSummaryDefault(id);
  const hasUnread = tmp5.hasUnread;
  const badgeCount = tmp5.badgeCount;
  if (true === selected) {
    DEFAULT = id(13034).ChannelModes.SELECTED;
    tmp7 = id;
  } else {
    const ChannelModes = id(13034).ChannelModes;
    if (hasUnread) {
      DEFAULT = ChannelModes.UNREAD_IMPORTANT;
      tmp7 = tmp6;
    } else {
      DEFAULT = ChannelModes.DEFAULT;
      tmp7 = tmp6;
    }
  }
  BaseChannelItemDefault;
  const intl = tmp7(1128).intl;
  ({ name: intl2.string(_modDef3883.uk6jhJ), mode: DEFAULT });
  const BaseChannelName = tmp7(13034).BaseChannelName;
  intl2 = tmp7(1128).intl;
  ({ mode: DEFAULT, IconComponent: tmp7(12158).MagicWandIcon });
  const BaseChannelIcon = tmp7(13034).BaseChannelIcon;
  return <tmp3Result onPress={callback} style={tmp.container} accessible accessibilityLabel={intl.string(_modDef3883.uk6jhJ)} accessibilityState={{ selected }} mode={DEFAULT} unread={hasUnread} name={null} icon={null} channelInfo={null} />;
});
const result = size.fileFinishedImporting("modules/conjure/app_channel/native/ConjureChannelRow.tsx");

export default tmp2;
