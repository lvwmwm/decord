// Module ID: 14470
// Function ID: 14471
// Name: ChannelOverflowMenu
// Dependencies: [109, 19, 1084, 21, 558, 576, 7405, 14471, 9710, 1125, 9827, 14472, 2]

// Module 14470 (ChannelOverflowMenu)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import Constants from "Constants" /* 1084 */;
import intl2 from "intl" /* 1125 */;
import ConjureUtils from "ConjureUtils" /* 7405 */;
import MoreHorizontalIcon from "MoreHorizontalIcon" /* 9710 */;
import IconActionButtonDefault from "IconActionButton" /* 14471 */;
import useAppChannelOverflowMenuItemsDefault from "useAppChannelOverflowMenuItems" /* 14472 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp;
const ContextMenu = tmp(9827);
let closure_3 = ["onPress"];
const ChannelTypes = Constants.ChannelTypes;
const jsx = Fragment.jsx;
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useHasChannelOverflowMenu(type, arg1) {
  const obj = react2;
  const cResult = obj.c(3);
  if (cResult[0] === type) {
    let tmp4;
    if (cResult[1] === arg1) {
      tmp4 = cResult[2];
    }
    let tmp9 = null;
    const useIsConjureChannelCandidate = tmp(7405).useIsConjureChannelCandidate;
    ConjureUtils;
    if (tmp4) {
      tmp9 = type;
    }
    if (tmp4) {
      tmp4 = !useIsConjureChannelCandidate(tmp9, "ChannelOverflowMenu");
    }
    return tmp4;
  }
  let tmp5 = type.type === ChannelTypes.GUILD_APP;
  if (tmp5) {
    tmp5 = null != type.application_id && "channel-secondary-view-chat" !== arg1;
    const tmp7 = null != type.application_id && "channel-secondary-view-chat" !== arg1;
  }
  cResult[0] = type;
  cResult[1] = arg1;
  cResult[2] = tmp5;
  tmp4 = tmp5;
}) : (function useHasChannelOverflowMenu(type, arg1) {
  let tmp = type.type === ChannelTypes.GUILD_APP;
  if (tmp) {
    tmp = null != type.application_id && "channel-secondary-view-chat" !== arg1;
    const tmp3 = null != type.application_id && "channel-secondary-view-chat" !== arg1;
  }
  let tmp6 = null;
  const useIsConjureChannelCandidate = ConjureUtils.useIsConjureChannelCandidate;
  ConjureUtils;
  if (tmp) {
    tmp6 = type;
  }
  if (tmp) {
    tmp = !useIsConjureChannelCandidate(tmp6, "ChannelOverflowMenu");
  }
  return tmp;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_7 = ReactCompilerGating.isReactCompilerEnabled() ? (function ChannelOverflowMenuButton(items) {
  let first;
  let tmp5;
  let tmp = require;
  const obj = react2;
  const cResult = obj.c(3);
  items = items.items;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function o(onPress) {
      onPress = onPress.onPress;
      const tmp = _objectWithoutProperties(onPress, closure_1_3);
      IconActionButtonDefault;
      const merged = Object.assign(tmp);
      const intl = intl2.intl;
      return <tmp2 onPress={function onPress(arg0) {
        let tmpResult;
        if (onPress != null) {
          tmpResult = tmp(arg0);
        }
        return tmpResult;
      }} noMargin IconComponent={MoreHorizontalIcon.MoreHorizontalIcon} accessibilityLabel={intl.string(intl2.t.PdRCRg)} />;
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== items) {
    const tmp7 = jsx(ContextMenu.ContextMenu, { items, children: first });
    cResult[1] = items;
    cResult[2] = tmp7;
    tmp5 = tmp7;
  } else {
    tmp5 = cResult[2];
  }
  return tmp5;
}) : (function ChannelOverflowMenuButton(items) {
  return jsx(ContextMenu.ContextMenu, {
    items: items.items,
    children(onPress) {
      onPress = onPress.onPress;
      const merged = Object.assign(onPress, Object.assign({ onPress: 0 }));
      IconActionButtonDefault;
      const merged1 = Object.assign(merged);
      const intl = intl2.intl;
      return <tmp2 onPress={function onPress(arg0) {
        let tmpResult;
        if (onPress != null) {
          tmpResult = tmp(arg0);
        }
        return tmpResult;
      }} noMargin IconComponent={MoreHorizontalIcon.MoreHorizontalIcon} accessibilityLabel={intl.string(intl2.t.PdRCRg)} />;
    }
  });
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_8 = ReactCompilerGating.isReactCompilerEnabled() ? (function AppChannelOverflowMenu(channel) {
  let tmp3;
  const obj = react2;
  const cResult = obj.c(2);
  const tmp2 = useAppChannelOverflowMenuItemsDefault(channel.channel);
  if (cResult[0] !== tmp2) {
    const tmp6 = <closure_7 items={tmp2} />;
    cResult[0] = tmp2;
    cResult[1] = tmp6;
    tmp3 = tmp6;
  } else {
    tmp3 = cResult[1];
  }
  return tmp3;
}) : (function AppChannelOverflowMenu(channel) {
  return <closure_7 items={useAppChannelOverflowMenuItemsDefault(arg0.channel)} />;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function ChannelOverflowMenu(channel) {
  const obj = react2;
  const cResult = obj.c(2);
  channel = channel.channel;
  let tmp2 = null;
  if (channel.type === ChannelTypes.GUILD_APP) {
    let tmp3;
    if (cResult[0] !== channel) {
      const tmp6 = <closure_8 channel={channel} />;
      cResult[0] = channel;
      cResult[1] = tmp6;
      tmp3 = tmp6;
    } else {
      tmp3 = cResult[1];
    }
    tmp2 = tmp3;
  }
  return tmp2;
}) : (function ChannelOverflowMenu(channel) {
  channel = channel.channel;
  let tmp = null;
  if (channel.type === ChannelTypes.GUILD_APP) {
    tmp = <closure_8 channel={channel} />;
  }
  return tmp;
});
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/channel/ChannelOverflowMenu.tsx");

export default tmp4;
export const useHasChannelOverflowMenu = tmp3;
