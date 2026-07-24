// Module ID: 5513
// Function ID: 46955
// Name: makeSizeStyle
// Dependencies: [57, 31, 5514, 1391, 653, 33, 4130, 689, 1832, 5122, 5085, 5515, 290, 2]

// Module 5513 (makeSizeStyle)
import _slicedToArray from "_slicedToArray";
import importAllResult from "result";
import { ExpressionSourceGuildRecord as closure_5 } from "_callSuper";
import isGuildOwner from "isGuildOwner";
import { Fonts } from "ME";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let LARGE;
let NORMAL;
let SMALL;
let SMALL_32;
let SMALL_36;
let XLARGE;
let XSMALL;
let XSMALL_20;
let XXLARGE;
let XXSMALL;
let XXSMALL_12;
let XXXSMALL;
let closure_6;
let closure_7;
const require = arg1;
function makeSizeStyle(width) {
  return { width, height: width, borderRadius: width / 3 };
}
function getGuildIconSource(icon, arg1, arg2, uri) {
  if (null != icon) {
    if (null != icon.icon) {
      if (icon instanceof closure_5) {
        let iconSource = icon.getIconSource(obj[arg1], arg2);
      } else {
        iconSource = callback(icon, obj[arg1], arg2);
      }
    }
  }
  let tmp = null;
  if (null != uri) {
    obj = { uri };
    tmp = obj;
  }
  return tmp;
}
function coerceStableAsset(uri) {
  if (Array.isArray(uri)) {
    const first = uri[0];
    uri = undefined;
    if (null != first) {
      uri = first.uri;
    }
    let tmp = uri;
  } else if (null != uri) {
    if ("number" !== typeof uri) {
      uri = uri.uri;
    }
    tmp = uri;
  }
  return tmp;
}
({ getGuildIconSource: closure_6, getGuildAcronym: closure_7 } = isGuildOwner);
let obj = { XXXSMALL: "XXXSMALL", XXSMALL_12: "XXSMALL_12", XXSMALL: "XXSMALL", XSMALL_20: "XSMALL_20", XSMALL: "XSMALL", SMALL: "SMALL", SMALL_32: "SMALL_32", SMALL_36: "SMALL_36", NORMAL: "NORMAL", LARGE: "LARGE", XLARGE: "XLARGE", XXLARGE: "XXLARGE" };
let closure_10 = { [obj.XXXSMALL]: [6, 4, 4, 4, 2, 1], [obj.XXSMALL_12]: [8, 6, 6, 4, 4, 2], [obj.XXSMALL]: [10, 8, 8, 6, 6, 4], [obj.XSMALL_20]: [12, 10, 10, 8, 8, 6], [obj.XSMALL]: [16, 16, 16, 14, 14, 12], [obj.SMALL]: [16, 16, 16, 14, 14, 12], [obj.SMALL_32]: [16, 16, 16, 14, 14, 12], [obj.SMALL_36]: [16, 16, 16, 14, 14, 12], [obj.NORMAL]: [16, 16, 16, 14, 14, 12], [obj.LARGE]: [16, 16, 16, 14, 14, 12], [obj.XLARGE]: [16, 16, 16, 14, 14, 12], [obj.XXLARGE]: [16, 16, 16, 14, 14, 12] };
obj = { [obj.XXXSMALL]: 10, [obj.XXSMALL_12]: 12, [obj.XXSMALL]: 16, [obj.XSMALL_20]: 20, [obj.XSMALL]: 24, [obj.SMALL]: 30, [obj.SMALL_32]: 32, [obj.SMALL_36]: 36, [obj.NORMAL]: 40, [obj.LARGE]: 48, [obj.XLARGE]: 64, [obj.XXLARGE]: 80 };
let obj1 = { guildIcon: { justifyContent: "center", alignItems: "center", overflow: "hidden" }, [XXXSMALL]: require("preload"), [XXSMALL_12]: require("NativeText"), [XXSMALL]: require("module_16"), [XSMALL_20]: require("module_20"), [XSMALL]: require("module_24"), [SMALL]: require("module_30"), [SMALL_32]: require("module_32"), [SMALL_36]: require("module_36"), [NORMAL]: require("module_40"), [LARGE]: require("module_48"), [XLARGE]: require("module_64"), [XXLARGE]: require("module_80") };
({ XXXSMALL, XXSMALL_12, XXSMALL, XSMALL_20, XSMALL, SMALL, SMALL_32, SMALL_36, NORMAL, LARGE, XLARGE, XXLARGE } = obj);
obj1["guildTextContainer"] = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BRAND };
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.MOBILE_GUILDBAR_ICON_BACKGROUND_DEFAULT };
obj1["guildTextContainerInactive"] = _createForOfIteratorHelperLoose;
const obj2 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BRAND };
obj1["guildTextContainerInactiveNested"] = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW };
const obj4 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW };
obj1["guildText"] = { color: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_TEXT_DEFAULT, fontFamily: Fonts.PRIMARY_SEMIBOLD };
const obj5 = { color: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_TEXT_DEFAULT, fontFamily: Fonts.PRIMARY_SEMIBOLD };
obj1["guildTextActive"] = { fontFamily: Fonts.PRIMARY_SEMIBOLD, color: require("_createForOfIteratorHelperLoose").colors.WHITE };
obj1["guildTextContainerInactiveAlt"] = { backgroundColor: "transparent" };
let closure_12 = _createForOfIteratorHelperLoose.createStyles(obj1);
const obj6 = { fontFamily: Fonts.PRIMARY_SEMIBOLD, color: require("_createForOfIteratorHelperLoose").colors.WHITE };
const memoResult = importAllResult.memo(function GuildIconInner(guild) {
  let loadingStyle;
  let size;
  guild = guild.guild;
  let icon = guild.icon;
  if (icon === undefined) {
    icon = null;
  }
  let flag = guild.animate;
  if (flag === undefined) {
    flag = false;
  }
  ({ loadingStyle, size } = guild);
  if (size === undefined) {
    size = ref.NORMAL;
  }
  const selected = guild.selected;
  let flag2 = guild.TABS_altDefaultBackground;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let flag3 = guild.nested;
  if (flag3 === undefined) {
    flag3 = false;
  }
  const textStyle = guild.textStyle;
  const preloadAnimation = guild.preloadAnimation;
  let str = guild.value;
  if (str === undefined) {
    str = "";
  }
  const style = guild.style;
  let c8;
  ref = undefined;
  let table;
  let closure_11;
  let callback2;
  let getGuildIconSource;
  let coerceStableAsset;
  let c15;
  let c16;
  let c17;
  let c18;
  const tmp3 = callback2();
  c8 = tmp3;
  const tmp4 = getGuildIconSource(guild, size, flag, icon);
  ref = selected.useRef(tmp4);
  table = size(selected.useState({}), 2)[1];
  const tmp6 = size(selected.useState(false), 2);
  closure_11 = tmp6[1];
  callback2 = selected.useRef(true);
  let tmp7 = icon(flag[9])(ref);
  const tmp9 = coerceStableAsset(tmp4);
  const tmp10 = coerceStableAsset(tmp7) !== tmp9;
  getGuildIconSource = tmp10;
  let tmp11 = !tmp10;
  if (tmp10) {
    let tmp12 = preloadAnimation;
    if (preloadAnimation) {
      tmp12 = "string" === tmp9;
    }
    tmp11 = tmp12;
  }
  coerceStableAsset = tmp13;
  const effect = selected.useEffect(() => () => {
    outer1_12.current = false;
  }, []);
  let items = [!tmp11, flag, tmp10, guild, icon, preloadAnimation, size];
  const effect1 = selected.useEffect(() => {
    const tmp = _undefined2(guild, size, flag, icon);
    guild = tmp;
    const tmp2 = _undefined3(tmp);
    if (!_undefined3) {
      if (_undefined2) {
        if (preloadAnimation) {
          if ("string" === typeof tmp2) {
            const obj = icon(flag[10]);
            icon(flag[10]).preload(tmp2).then(() => {
              const timerId = setTimeout(() => {
                if (outer2_12.current) {
                  outer2_9.current = outer1_0;
                  outer2_10({});
                }
              }, 0);
            });
            const preloadResult = icon(flag[10]).preload(tmp2);
          }
        }
      }
    }
    if (_undefined2) {
      ref.current = tmp;
    }
  }, items);
  if (!tmp11) {
    tmp7 = tmp4;
  }
  c15 = tmp16;
  let tmp17;
  if (null != tmp7) {
    if (!tmp6[0]) {
      if (null != loadingStyle) {
        tmp17 = loadingStyle;
      }
    }
  }
  c16 = tmp17;
  if (null == tmp7) {
    if (false === selected) {
      if (flag3) {
        let guildTextContainerInactiveNested = tmp3.guildTextContainerInactiveNested;
      } else {
        guildTextContainerInactiveNested = flag2 ? tmp3.guildTextContainerInactiveAlt : tmp3.guildTextContainerInactive;
      }
    }
  }
  c17 = tmp18;
  if (null != guild) {
    let acronym = style(guild);
  } else {
    let obj = guild(flag[8]);
    acronym = obj.getAcronym(str);
  }
  let tmp23;
  if (null == tmp7) {
    let tmp25;
    if (undefined !== acronym) {
      tmp25 = arr3[acronym.length];
    }
    let tmp26 = arr3[arr3.length - 1];
    if (null != tmp25) {
      tmp26 = tmp25;
    }
    tmp23 = tmp26;
  }
  c18 = tmp23;
  let items1 = [style, size, tmp3, tmp17, undefined, tmp23, selected, textStyle, null == tmp7];
  const memo = selected.useMemo(() => {
    const items = [_undefined.guildIcon, _undefined[size], style];
    if (null != c16) {
      items.push(c16);
    }
    if (c15) {
      items.unshift(_undefined.guildTextContainer);
    }
    if (null != c17) {
      items.push(c17);
    }
    let obj = {
      handleLoaded() {
        return outer1_11(true);
      },
      wrapperStyle: items
    };
    if (!c15) {
      obj.textComponentStyle = undefined;
      return obj;
    } else {
      if (false === selected) {
        let guildTextActive = _undefined.guildText;
      } else {
        guildTextActive = _undefined.guildTextActive;
      }
      const items1 = [guildTextActive, , ];
      obj = { fontSize: c18 };
      items1[1] = obj;
      items1[2] = textStyle;
    }
  }, items1);
  const wrapperStyle = memo.wrapperStyle;
  if (null == tmp7) {
    obj = { shouldRasterizeIOS: true, style: wrapperStyle, collapsable: false };
    let tmp31Result = tmp31(tmp32[11]);
    obj = { numberOfLines: 1, ellipsizeMode: "tail", accessible: false, accessibilityRole: "none", accessibilityElementsHidden: true, experimental_useNativeText: true, style: tmp29, children: acronym };
    obj.children = tmp30(guild(tmp32[12]).NativeText, obj);
    let tmp30Result = tmp30(tmp31Result, obj);
  } else {
    const obj1 = { style: wrapperStyle, source: tmp7 };
    let tmp34;
    tmp31Result = tmp31(tmp32[10]);
    if (null != loadingStyle) {
      tmp34 = tmp28;
    }
    obj1.onLoadEnd = tmp34;
    obj1.progressiveRenderingEnabled = true;
    obj1.fade = false;
    tmp30Result = tmp30(tmp31Result, obj1);
  }
  return tmp30Result;
});
const result = require("_callSuper").fileFinishedImporting("modules/guild/native/GuildIcon.tsx");

export default memoResult;
export const GuildIconSizes = obj;
export const ImageSizes = obj;
