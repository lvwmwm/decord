// Module ID: 15847
// Function ID: 15848
// Name: VibegrationsChannelRow
// Dependencies: [19, 1086, 2058, 11441, 21, 4837, 588, 558, 576, 1113, 11761, 1127, 3718, 12246, 2]

// Module 15847 (VibegrationsChannelRow)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 588 */;
import Constants from "Constants" /* 1086 */;
import router_utils from "router_utils" /* 1113 */;
import ChannelConstants from "ChannelConstants" /* 2058 */;
import _modDef3718 from "module_3718" /* 3718 */;
import RedesignChannelListConstants from "RedesignChannelListConstants" /* 11441 */;
import BaseChannelItemDefault from "BaseChannelItem" /* 11761 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4837 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let selected;

let obj2;
const Routes = Constants.Routes;
const StaticChannelRoute = ChannelConstants.StaticChannelRoute;
const CHANNEL_MARGIN_VERTICAL = RedesignChannelListConstants.CHANNEL_MARGIN_VERTICAL;
const jsx = Fragment.jsx;
let obj = { container: obj2 };
obj2 = { marginVertical: CHANNEL_MARGIN_VERTICAL, marginHorizontal: 8, borderRadius: nativeDefault.radii.md };
let closure_7 = createStyles.createStyles(obj);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((selected) => {
  let DEFAULT;
  let id;
  let tmp10;
  let tmp13;
  let tmp14;
  let tmp5;
  let tmp6;
  let tmp9;
  let obj = id(576);
  const cResult = obj.c(16);
  selected = selected.selected;
  const guild = selected.guild;
  const tmp4 = closure_7();
  id = guild.id;
  if (cResult[0] !== id) {
    const fn = function s() {
      const obj = router_utils;
      obj.transitionTo(Routes.CHANNEL(id, StaticChannelRoute.VIBEGRATIONS));
    };
    cResult[0] = id;
    cResult[1] = fn;
    tmp5 = fn;
  } else {
    tmp5 = cResult[1];
  }
  if (true === selected) {
    DEFAULT = tmp(11761).ChannelModes.SELECTED;
  } else {
    DEFAULT = tmp(11761).ChannelModes.DEFAULT;
  }
  const container = tmp4.container;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1127).intl;
    const stringResult = intl.string(_modDef3718.Xmvb23);
    cResult[2] = stringResult;
    tmp6 = stringResult;
  } else {
    tmp6 = cResult[2];
  }
  if (cResult[3] !== selected) {
    const obj2 = { selected };
    cResult[3] = selected;
    cResult[4] = obj2;
    tmp9 = obj2;
  } else {
    tmp9 = cResult[4];
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = tmp(1127).intl;
    const stringResult1 = intl2.string(_modDef3718.Xmvb23);
    cResult[5] = stringResult1;
    tmp10 = stringResult1;
  } else {
    tmp10 = cResult[5];
  }
  if (cResult[6] !== DEFAULT) {
    const tmp16 = jsx(id(11761).BaseChannelName, { name: tmp10, mode: DEFAULT });
    const BaseChannelIcon = tmp(11761).BaseChannelIcon;
    const tmp17 = <BaseChannelIcon mode={DEFAULT} IconComponent={id(12246).MagicWandIcon} />;
    cResult[6] = DEFAULT;
    cResult[7] = tmp16;
    cResult[8] = tmp17;
    tmp14 = tmp17;
    tmp13 = tmp16;
  } else {
    tmp13 = cResult[7];
    tmp14 = cResult[8];
  }
  if (cResult[9] === DEFAULT) {
    if (cResult[10] === tmp5) {
      if (cResult[11] === tmp4.container) {
        if (cResult[12] === tmp9) {
          if (cResult[13] === tmp13) {
            let tmp18;
            if (cResult[14] === tmp14) {
              tmp18 = cResult[15];
            }
            return tmp18;
          }
        }
      }
    }
  }
  const tmp19 = jsx(BaseChannelItemDefault, { onPress: tmp5, style: container, accessible: true, accessibilityLabel: tmp6, accessibilityState: tmp9, mode: DEFAULT, name: tmp13, icon: tmp14 });
  cResult[9] = DEFAULT;
  cResult[10] = tmp5;
  cResult[11] = tmp4.container;
  cResult[12] = tmp9;
  cResult[13] = tmp13;
  cResult[14] = tmp14;
  cResult[15] = tmp19;
  tmp18 = tmp19;
}) : ((selected) => {
  let DEFAULT;
  let intl2;
  let tmp5;
  selected = selected.selected;
  const id = selected.guild.id;
  const items = [id];
  const tmp = closure_7();
  const callback = react.useCallback(() => {
    const obj = router_utils;
    obj.transitionTo(Routes.CHANNEL(id, StaticChannelRoute.VIBEGRATIONS));
  }, items);
  if (true === selected) {
    DEFAULT = id(11761).ChannelModes.SELECTED;
    tmp5 = id;
  } else {
    DEFAULT = id(11761).ChannelModes.DEFAULT;
    tmp5 = id;
  }
  BaseChannelItemDefault;
  const intl = tmp5(1127).intl;
  ({ name: intl2.string(_modDef3718.Xmvb23), mode: DEFAULT });
  const BaseChannelName = tmp5(11761).BaseChannelName;
  intl2 = tmp5(1127).intl;
  ({ mode: DEFAULT, IconComponent: tmp5(12246).MagicWandIcon });
  const BaseChannelIcon = tmp5(11761).BaseChannelIcon;
  return <tmp8 onPress={callback} style={tmp.container} accessible accessibilityLabel={intl.string(_modDef3718.Xmvb23)} accessibilityState={{ selected }} mode={DEFAULT} name={null} icon={null} />;
});
const result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsChannelRow.tsx");

export default tmp2;
