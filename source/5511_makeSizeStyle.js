// Module ID: 5511
// Function ID: 46877
// Name: makeSizeStyle
// Dependencies: []

// Module 5511 (makeSizeStyle)
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
function makeSizeStyle(width) {
  return { width, height: width, borderRadius: width / 3 };
}
function getGuildIconSource(icon, arg1, arg2, uri) {
  if (null != icon) {
    if (null != icon.icon) {
      if (icon instanceof closure_5) {
        let iconSource = icon.getIconSource(obj[arg1], arg2);
      } else {
        iconSource = callback2(icon, obj[arg1], arg2);
      }
    }
  }
  let tmp = null;
  if (null != uri) {
    const obj = { uri };
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
let closure_3 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
let closure_5 = arg1(dependencyMap[2]).ExpressionSourceGuildRecord;
({ getGuildIconSource: closure_6, getGuildAcronym: closure_7 } = arg1(dependencyMap[3]));
const Fonts = arg1(dependencyMap[4]).Fonts;
const jsx = arg1(dependencyMap[5]).jsx;
let obj = { XXXSMALL: "XXXSMALL", XXSMALL_12: "XXSMALL_12", XXSMALL: "XXSMALL", XSMALL_20: "XSMALL_20", XSMALL: "XSMALL", SMALL: "SMALL", SMALL_32: "SMALL_32", SMALL_36: "SMALL_36", NORMAL: "NORMAL", LARGE: "LARGE", XLARGE: "XLARGE", XXLARGE: "XXLARGE" };
let closure_10 = { [obj.XXXSMALL]: ["<string:2576980378>", "<string:1071225241>", "<string:3435973837>", "<string:1072483532>", "<string:1369111633>", "<string:375562467>"], [obj.XXSMALL_12]: [null, null, null, null, null, null], [obj.XXSMALL]: [true, true, true, true, true, true], [obj.XSMALL_20]: [], [obj.XSMALL]: [], [obj.SMALL]: [], [obj.SMALL_32]: [], [obj.SMALL_36]: [], [obj.NORMAL]: [], [obj.LARGE]: [], [obj.XLARGE]: [], [obj.XXLARGE]: [] };
obj = { [obj.XXXSMALL]: 10, [obj.XXSMALL_12]: 12, [obj.XXSMALL]: 16, [obj.XSMALL_20]: 20, [obj.XSMALL]: 24, [obj.SMALL]: 30, [obj.SMALL_32]: 32, [obj.SMALL_36]: 36, [obj.NORMAL]: 40, [obj.LARGE]: 48, [obj.XLARGE]: 64, [obj.XXLARGE]: 80 };
let obj3 = arg1(dependencyMap[6]);
const obj1 = { guildIcon: {}, [XXXSMALL]: require("module_10"), [XXSMALL_12]: require("module_12"), [XXSMALL]: require("module_16"), [XSMALL_20]: require("module_20"), [XSMALL]: require("module_24"), [SMALL]: require("module_30"), [SMALL_32]: require("module_32"), [SMALL_36]: require("module_36"), [NORMAL]: require("module_40"), [LARGE]: require("module_48"), [XLARGE]: require("module_64"), [XXLARGE]: require("module_80") };
({ XXXSMALL, XXSMALL_12, XXSMALL, XSMALL_20, XSMALL, SMALL, SMALL_32, SMALL_36, NORMAL, LARGE, XLARGE, XXLARGE } = obj);
const tmp2 = arg1(dependencyMap[3]);
obj1["guildTextContainer"] = { backgroundColor: importDefault(dependencyMap[7]).colors.BACKGROUND_BRAND };
obj3 = { backgroundColor: importDefault(dependencyMap[7]).colors.MOBILE_GUILDBAR_ICON_BACKGROUND_DEFAULT };
obj1["guildTextContainerInactive"] = obj3;
const obj2 = { backgroundColor: importDefault(dependencyMap[7]).colors.BACKGROUND_BRAND };
obj1["guildTextContainerInactiveNested"] = { backgroundColor: importDefault(dependencyMap[7]).colors.BACKGROUND_BASE_LOW };
const obj4 = { backgroundColor: importDefault(dependencyMap[7]).colors.BACKGROUND_BASE_LOW };
obj1["guildText"] = { color: importDefault(dependencyMap[7]).colors.INTERACTIVE_TEXT_DEFAULT, fontFamily: Fonts.PRIMARY_SEMIBOLD };
const obj5 = { color: importDefault(dependencyMap[7]).colors.INTERACTIVE_TEXT_DEFAULT, fontFamily: Fonts.PRIMARY_SEMIBOLD };
obj1["guildTextActive"] = { fontFamily: Fonts.PRIMARY_SEMIBOLD, color: importDefault(dependencyMap[7]).colors.WHITE };
obj1["guildTextContainerInactiveAlt"] = { backgroundColor: "transparent" };
let closure_12 = obj3.createStyles(obj1);
const obj6 = { fontFamily: Fonts.PRIMARY_SEMIBOLD, color: importDefault(dependencyMap[7]).colors.WHITE };
const memoResult = importAllResult.memo(function GuildIconInner(guild) {
  let loadingStyle;
  let size;
  guild = guild.guild;
  const arg1 = guild;
  let icon = guild.icon;
  if (icon === undefined) {
    icon = null;
  }
  const importDefault = icon;
  let flag = guild.animate;
  if (flag === undefined) {
    flag = false;
  }
  const dependencyMap = flag;
  ({ loadingStyle, size } = guild);
  if (size === undefined) {
    size = obj.NORMAL;
  }
  const callback = size;
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
  let closure_5 = textStyle;
  const preloadAnimation = guild.preloadAnimation;
  let str = guild.value;
  if (str === undefined) {
    str = "";
  }
  const style = guild.style;
  let jsx;
  let obj;
  let closure_10;
  let closure_11;
  let callback3;
  let getGuildIconSource;
  let coerceStableAsset;
  let tmp16;
  let tmp17;
  let tmp18;
  let tmp23;
  const tmp3 = callback3();
  jsx = tmp3;
  const tmp4 = getGuildIconSource(guild, size, flag, icon);
  const ref = selected.useRef(tmp4);
  obj = ref;
  closure_10 = callback(importAllResult.useState({}), 2)[1];
  const tmp6 = callback(selected.useState(false), 2);
  closure_11 = tmp6[1];
  callback3 = importAllResult.useRef(true);
  let tmp7 = importDefault(dependencyMap[9])(ref);
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
  const effect = importAllResult.useEffect(() => () => {
    closure_12.current = false;
  }, []);
  const items = [!tmp11, flag, tmp10, guild, icon, preloadAnimation, size];
  const effect1 = importAllResult.useEffect(() => {
    const tmp = tmp10(guild, size, flag, icon);
    const guild = tmp;
    const tmp2 = tmp13(tmp);
    if (!tmp13) {
      if (tmp10) {
        if (preloadAnimation) {
          if ("string" === typeof tmp2) {
            const obj = icon(flag[10]);
            icon(flag[10]).preload(tmp2).then(() => {
              const timerId = setTimeout(() => {
                if (ref.current) {
                  closure_9.current = closure_0;
                  callback({});
                }
              }, 0);
            });
            const preloadResult = icon(flag[10]).preload(tmp2);
          }
        }
      }
    }
    if (tmp10) {
      ref.current = tmp;
    }
  }, items);
  if (!tmp11) {
    tmp7 = tmp4;
  }
  tmp16 = null == tmp7;
  tmp17 = undefined;
  if (!tmp16) {
    if (!tmp6[0]) {
      if (null != loadingStyle) {
        tmp17 = loadingStyle;
      }
    }
  }
  tmp18 = undefined;
  if (tmp16) {
    if (false === selected) {
      if (flag3) {
        let guildTextContainerInactiveNested = tmp3.guildTextContainerInactiveNested;
      } else {
        guildTextContainerInactiveNested = flag2 ? tmp3.guildTextContainerInactiveAlt : tmp3.guildTextContainerInactive;
      }
    }
  }
  if (null != guild) {
    let acronym = style(guild);
  } else {
    obj = arg1(dependencyMap[8]);
    acronym = obj.getAcronym(str);
  }
  tmp23 = undefined;
  if (tmp16) {
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
  const items1 = [style, size, tmp3, tmp17, tmp18, tmp23, selected, textStyle, tmp16];
  const memo = importAllResult.useMemo(() => {
    const items = [tmp3.guildIcon, tmp3[closure_3], style];
    if (null != tmp17) {
      items.push(tmp17);
    }
    if (tmp16) {
      items.unshift(tmp3.guildTextContainer);
    }
    if (null != tmp18) {
      items.push(tmp18);
    }
    let obj = {
      handleLoaded() {
        return callback(true);
      },
      wrapperStyle: items
    };
    if (!tmp16) {
      obj.textComponentStyle = undefined;
      return obj;
    } else {
      if (false === selected) {
        let guildTextActive = tmp3.guildText;
      } else {
        guildTextActive = tmp3.guildTextActive;
      }
      const items1 = [guildTextActive, , ];
      obj = { fontSize: tmp23 };
      items1[1] = obj;
      items1[2] = textStyle;
    }
  }, items1);
  const wrapperStyle = memo.wrapperStyle;
  if (tmp16) {
    obj = { 1499681941: null, 2005497740: null, 2013427348: null, style: wrapperStyle };
    let tmp31Result = tmp31(tmp32[11]);
    obj = { 0: "image", 9223372036854775807: "number", 9223372036854775807: "number", 9223372036854775807: "number", 9223372036854775807: "color", 9223372036854775807: "color", style: tmp29, children: acronym };
    obj.children = tmp30(arg1(tmp32[12]).NativeText, obj);
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
const result = arg1(dependencyMap[13]).fileFinishedImporting("modules/guild/native/GuildIcon.tsx");

export default memoResult;
export const GuildIconSizes = obj;
export const ImageSizes = obj;
