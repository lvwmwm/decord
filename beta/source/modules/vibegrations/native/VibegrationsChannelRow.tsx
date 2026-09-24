// Module ID: 16565
// Function ID: 16566
// Name: VibegrationsChannelRow
// Dependencies: [19, 1078, 2052, 12249, 21, 4790, 580, 558, 568, 1105, 12563, 1119, 3714, 13020, 2]

// Module 16565 (VibegrationsChannelRow)
import nativeDefault from "native" /* 580 */;
import router_utils from "router_utils" /* 1105 */;
import _modDef3714 from "module_3714" /* 3714 */;
import BaseChannelItemDefault from "BaseChannelItem" /* 12563 */;
import noop from "module_19" /* 19 */;

require = fn;
const Routes = fn(1078).Routes;
const StaticChannelRoute = fn(2052).StaticChannelRoute;
const jsx = fn(21).jsx;
const createStyles = fn(4790);
let obj2 = { container: { marginVertical: fn(12249).CHANNEL_MARGIN_VERTICAL, marginHorizontal: 8, borderRadius: nativeDefault.radii.md } };
let closure_7 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { marginVertical: fn(12249).CHANNEL_MARGIN_VERTICAL, marginHorizontal: 8, borderRadius: nativeDefault.radii.md };
const size = fn(2);
const result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsChannelRow.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((selected) => {
  const cResult = id(568).c(16);
  selected = selected.selected;
  const tmp4 = closure_7();
  id = selected.guild.id;
  if (cResult[0] !== id) {
    const fn = function s() {
      router_utils.transitionTo(Routes.CHANNEL(id, StaticChannelRoute.VIBEGRATIONS));
    };
    cResult[0] = id;
    cResult[1] = fn;
    let tmp5 = fn;
  } else {
    tmp5 = cResult[1];
  }
  if (true === selected) {
    let DEFAULT = tmp(12563).ChannelModes.SELECTED;
  } else {
    DEFAULT = tmp(12563).ChannelModes.DEFAULT;
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1119).intl;
    const stringResult = intl.string(_modDef3714.Xmvb23);
    cResult[2] = stringResult;
    let tmp6 = stringResult;
  } else {
    tmp6 = cResult[2];
  }
  if (cResult[3] !== selected) {
    const obj2 = { selected };
    cResult[3] = selected;
    cResult[4] = obj2;
    let tmp9 = obj2;
  } else {
    tmp9 = cResult[4];
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = tmp(1119).intl;
    const stringResult1 = intl2.string(_modDef3714.Xmvb23);
    cResult[5] = stringResult1;
    let tmp10 = stringResult1;
  } else {
    tmp10 = cResult[5];
  }
  if (cResult[6] !== DEFAULT) {
    const obj3 = { name: tmp10, mode: DEFAULT };
    const tmp16 = jsx(tmp(12563).BaseChannelName, { name: tmp10, mode: DEFAULT });
    const obj4 = { mode: DEFAULT, IconComponent: tmp(13020).MagicWandIcon };
    const tmp17 = jsx(tmp(12563).BaseChannelIcon, { mode: DEFAULT, IconComponent: tmp(13020).MagicWandIcon });
    cResult[6] = DEFAULT;
    cResult[7] = tmp16;
    cResult[8] = tmp17;
    let tmp14 = tmp17;
    let tmp13 = tmp16;
  } else {
    tmp13 = cResult[7];
    tmp14 = cResult[8];
  }
  if (cResult[9] === DEFAULT) {
    if (cResult[10] === tmp5) {
      if (cResult[11] === tmp4.container) {
        if (cResult[12] === tmp9) {
          if (cResult[13] === tmp13) {
            if (cResult[14] === tmp14) {
              let tmp18 = cResult[15];
            }
            return tmp18;
          }
        }
      }
    }
  }
  const tmp19 = jsx(BaseChannelItemDefault, { onPress: tmp5, style: tmp4.container, accessible: true, accessibilityLabel: tmp6, accessibilityState: tmp9, mode: DEFAULT, name: tmp13, icon: tmp14 });
  cResult[9] = DEFAULT;
  cResult[10] = tmp5;
  cResult[11] = tmp4.container;
  cResult[12] = tmp9;
  cResult[13] = tmp13;
  cResult[14] = tmp14;
  cResult[15] = tmp19;
  tmp18 = tmp19;
}) : ((selected) => {
  selected = selected.selected;
  const id = selected.guild.id;
  const items = [id];
  const callback = noop.useCallback(() => {
    router_utils.transitionTo(Routes.CHANNEL(id, StaticChannelRoute.VIBEGRATIONS));
  }, items);
  if (true === selected) {
    let DEFAULT = id(12563).ChannelModes.SELECTED;
    let tmp5 = id;
  } else {
    DEFAULT = id(12563).ChannelModes.DEFAULT;
    tmp5 = id;
  }
  const obj = { onPress: callback, style: closure_7().container, accessible: true, accessibilityLabel: null, accessibilityState: null, mode: null, name: null, icon: null };
  const tmp = closure_7();
  const intl = tmp5(1119).intl;
  obj.accessibilityLabel = intl.string(_modDef3714.Xmvb23);
  obj.accessibilityState = { selected };
  obj.mode = DEFAULT;
  const obj2 = { name: null, mode: null };
  const intl2 = tmp5(1119).intl;
  obj2.name = intl2.string(_modDef3714.Xmvb23);
  obj2.mode = DEFAULT;
  obj.name = jsx(tmp5(12563).BaseChannelName, { name: null, mode: null });
  obj.icon = jsx(tmp5(12563).BaseChannelIcon, { mode: DEFAULT, IconComponent: tmp5(13020).MagicWandIcon });
  return <tmp8 onPress={callback} style={closure_7().container} accessible accessibilityLabel={null} accessibilityState={null} mode={null} name={null} icon={null} />;
});
