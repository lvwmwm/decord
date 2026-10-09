// Module ID: 10579
// Function ID: 10580
// Name: BioText
// Dependencies: [19, 17, 1085, 2114, 21, 5091, 558, 576, 4765, 1265, 5087, 10580, 1382, 2113, 1126, 2]

// Module 10579 (BioText)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import Constants from "Constants" /* 1085 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1265 */;
import PlatformUtils from "PlatformUtils" /* 1382 */;
import isChangelogUserDefault from "isChangelogUser" /* 2113 */;
import ChangelogConstants from "ChangelogConstants" /* 2114 */;
import LinkingDefault from "Linking" /* 4765 */;
import BioMarkupUtils from "BioMarkupUtils" /* 10580 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5091 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c9;
let metroImportAll;
let metroImportDefault;
let tmp;
const Text_Text = tmp(5087);
const Pressable = react_native.Pressable;
const AnalyticEvents = Constants.AnalyticEvents;
const CHANGELOG_URL = ChangelogConstants.CHANGELOG_URL;
({ jsxs: metroImportDefault, jsx: metroImportAll, Fragment: c9 } = Fragment);
let closure_10 = createStyles.createStyles({ text: { alignSelf: "stretch", textAlignVertical: "top", width: "100%", flexGrow: 1, paddingTop: 2, lineHeight: 24 }, span: { alignSelf: "stretch", textAlignVertical: "bottom", width: "100%", flexGrow: 1, display: "flex", paddingBottom: 2 }, link: { alignSelf: "stretch", textAlignVertical: "bottom", width: "100%", flexGrow: 1, bottom: -4, position: "relative" } });
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? (function LinkButton(arg0) {
  let first;
  let items;
  let lineClamp;
  let target;
  let text;
  let obj = react2;
  const cResult = obj.c(8);
  ({ lineClamp, text } = arg0);
  const tmp4 = closure_10();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    function handlePress() {
      const obj = LinkingDefault;
      obj.openURL(target);
      const obj2 = AnalyticsUtilsDefault;
      const obj3 = { cta_type: "profile_bio", target };
      obj2.track(constants.CHANGE_LOG_CTA_CLICKED, obj3);
    }
    cResult[0] = handlePress;
    first = handlePress;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === lineClamp) {
    if (cResult[2] === tmp4.link) {
      let tmp6;
      if (cResult[3] === text) {
        tmp6 = cResult[4];
      }
      if (cResult[5] === tmp4.link) {
        let tmp8;
        if (cResult[6] === tmp6) {
          tmp8 = cResult[7];
        }
        return tmp8;
      }
      let obj2 = { onPress: first, style: tmp4.link, children: tmp6 };
      const tmp11 = metroImportAll(Pressable, obj2);
      cResult[5] = tmp4.link;
      cResult[6] = tmp6;
      cResult[7] = tmp11;
      tmp8 = tmp11;
    }
  }
  let obj3 = { variant: "text-md/normal", color: "text-link", lineClamp, style: tmp4.link, children: items };
  items = ["\n", text];
  const tmp7 = metroImportDefault(Text_Text.Text, obj3);
  cResult[1] = lineClamp;
  cResult[2] = tmp4.link;
  cResult[3] = text;
  cResult[4] = tmp7;
  tmp6 = tmp7;
}) : (function LinkButton(arg0) {
  let items;
  let lineClamp;
  let obj2;
  let target;
  let text;
  ({ lineClamp, text } = arg0);
  const tmp = closure_10();
  let obj = {
    onPress: function handlePress() {
      const obj = LinkingDefault;
      obj.openURL(target);
      const obj2 = AnalyticsUtilsDefault;
      const obj3 = { cta_type: "profile_bio", target };
      obj2.track(constants.CHANGE_LOG_CTA_CLICKED, obj3);
    },
    style: tmp.link,
    children: metroImportDefault(Text_Text.Text, obj2)
  };
  obj2 = { variant: "text-md/normal", color: "text-link", lineClamp, style: tmp.link, children: items };
  items = ["\n", text];
  return metroImportAll(Pressable, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function BioText(arg0) {
  let bio;
  let guildId;
  let items;
  let items1;
  let lineClamp;
  let num;
  let placeholder;
  let textVariant;
  let userId;
  let obj = lineClamp(576);
  const cResult = obj.c(27);
  ({ placeholder, bio, lineClamp } = arg0);
  ({ userId, guildId, textVariant } = arg0);
  let str = "text-md/normal";
  if (undefined !== textVariant) {
    str = textVariant;
  }
  const tmp4 = closure_10();
  if (cResult[0] === bio) {
    if (cResult[1] === guildId) {
      let tmp5;
      if (cResult[2] === str) {
        tmp5 = cResult[3];
      }
      const tmp8 = 0 === bio.length && !isChangelogUserDefault(userId);
      if (isChangelogUserDefault(userId)) {
        let tmp15;
        let str3 = "text-default";
        let str4 = "text-default";
        if (tmp8) {
          str4 = "text-muted";
        }
        const _Symbol = Symbol;
        const text = tmp4.text;
        if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = tmp(1126).intl;
          const stringResult = intl.string(lineClamp(1126).t.OJmNR9);
          cResult[4] = stringResult;
          tmp15 = stringResult;
        } else {
          tmp15 = cResult[4];
        }
        if (cResult[5] === lineClamp) {
          if (cResult[6] === tmp4.text) {
            if (cResult[7] === str4) {
              let tmp17;
              let tmp20;
              if (cResult[8] === str) {
                tmp17 = cResult[9];
              }
              if (tmp8) {
                str3 = "text-muted";
              }
              const span = tmp4.span;
              if (cResult[10] !== lineClamp) {
                const intl2 = tmp(1126).intl;
                const obj2 = {
                  blogHook(text, arg1) {
                                  const obj = { lineClamp, text };
                                  return metroImportAll(closure_11, obj, arg1);
                                }
                };
                const formatResult = intl2.format(lineClamp(1126).t.RCYeBL, obj2);
                cResult[10] = lineClamp;
                cResult[11] = formatResult;
                tmp20 = formatResult;
              } else {
                tmp20 = cResult[11];
              }
              if (cResult[12] === lineClamp) {
                if (cResult[13] === tmp4.span) {
                  if (cResult[14] === tmp20) {
                    if (cResult[15] === str3) {
                      let tmp22;
                      if (cResult[16] === str) {
                        tmp22 = cResult[17];
                      }
                      if (cResult[18] === tmp22) {
                        let tmp25;
                        if (cResult[19] === tmp17) {
                          tmp25 = cResult[20];
                        }
                        return tmp25;
                      }
                      const obj3 = { children: items };
                      items = [tmp17, tmp22];
                      const tmp28 = closure_7(closure_9, obj3);
                      cResult[18] = tmp22;
                      cResult[19] = tmp17;
                      cResult[20] = tmp28;
                      tmp25 = tmp28;
                    }
                  }
                }
              }
              const obj4 = { variant: str, color: str3, lineClamp, style: span, children: tmp20 };
              const tmp24 = closure_8(lineClamp(5087).Text, obj4, "changelog-cta");
              cResult[12] = lineClamp;
              cResult[13] = tmp4.span;
              cResult[14] = tmp20;
              cResult[15] = str3;
              cResult[16] = str;
              cResult[17] = tmp24;
              tmp22 = tmp24;
            }
          }
        }
        const obj5 = { variant: str, color: str4, lineClamp, style: text, children: items1 };
        items1 = [tmp15, "\n"];
        const tmp19 = closure_7(lineClamp(5087).Text, obj5, "changelog-bio");
        cResult[5] = lineClamp;
        cResult[6] = tmp4.text;
        cResult[7] = str4;
        cResult[8] = str;
        cResult[9] = tmp19;
        tmp17 = tmp19;
      } else {
        if (tmp8) {
          if (null == placeholder) {
            return null;
          }
        }
        let str2 = "text-default";
        if (tmp8) {
          str2 = "text-muted";
        }
        if (tmp8) {
          tmp5 = placeholder;
        }
        if (cResult[21] === lineClamp) {
          if (cResult[22] === tmp4.text) {
            if (cResult[23] === str2) {
              if (cResult[24] === tmp5) {
                let tmp11;
                if (cResult[25] === str) {
                  tmp11 = cResult[26];
                }
                return tmp11;
              }
            }
          }
        }
        const obj6 = { variant: str, color: str2, lineClamp, style: tmp4.text, children: tmp5 };
        const tmp13 = closure_8(lineClamp(5087).Text, obj6);
        cResult[21] = lineClamp;
        cResult[22] = tmp4.text;
        cResult[23] = str2;
        cResult[24] = tmp5;
        cResult[25] = str;
        cResult[26] = tmp13;
        tmp11 = tmp13;
      }
    }
  }
  const obj7 = { guildId, linkVariant: str, textVariant: str, customEmojiOffsetY: num };
  const parseBioReact = lineClamp(10580).parseBioReact;
  lineClamp(10580);
  num = undefined;
  const tmpResult2 = lineClamp(1382);
  if (tmpResult2.isAndroid()) {
    num = 3;
  }
  const parseBioReactResult = parseBioReact(bio, undefined, obj7);
  cResult[0] = bio;
  cResult[1] = guildId;
  cResult[2] = str;
  cResult[3] = parseBioReactResult;
  tmp5 = parseBioReactResult;
}) : (function BioText(lineClamp) {
  let bio;
  let guildId;
  let intl2;
  let items1;
  let obj5;
  let placeholder;
  let str2;
  let str4;
  let tmp8Result;
  let userId;
  ({ placeholder, bio } = lineClamp);
  lineClamp = lineClamp.lineClamp;
  ({ userId, guildId } = lineClamp);
  let str = lineClamp.textVariant;
  if (str === undefined) {
    str = "text-md/normal";
  }
  const tmp = closure_10();
  const items = [bio, guildId, str];
  let memo = str.useMemo(() => {
    let num;
    const parseBioReact = BioMarkupUtils.parseBioReact;
    BioMarkupUtils;
    const obj = { guildId, linkVariant: str, textVariant: str, customEmojiOffsetY: num };
    num = undefined;
    const tmp4 = bio;
    const tmpResult = PlatformUtils;
    if (tmpResult.isAndroid()) {
      num = 3;
    }
    return parseBioReact(tmp4, undefined, obj);
  }, items);
  let tmp3 = 0 === bio.length;
  if (tmp3) {
    let tmp4 = lineClamp;
    tmp3 = !lineClamp(guildId[13])(userId);
  }
  if (lineClamp(guildId[13])(userId)) {
    let str3 = "text-default";
    const obj2 = { variant: str, color: str4, lineClamp, style: tmp.text, children: items1 };
    str4 = "text-default";
    const Text2 = bio(tmp6[10]).Text;
    const tmp11 = closure_9;
    if (tmp3) {
      str4 = "text-muted";
    }
    const intl = tmp12(tmp6[14]).intl;
    items1 = [intl.string(bio(guildId[14]).t.OJmNR9), "\n"];
    const items2 = [closure_7(Text2, obj2, "changelog-bio"), ];
    const obj3 = { variant: str, color: str3, lineClamp, style: tmp.span, children: intl2.format(bio(guildId[14]).t.RCYeBL, obj5) };
    const Text3 = tmp12(tmp6[10]).Text;
    const tmp13 = closure_8;
    if (tmp3) {
      str3 = "text-muted";
    }
    const obj4 = { children: items2 };
    intl2 = tmp12(tmp6[14]).intl;
    obj5 = {
      blogHook(text, arg1) {
          const obj = { lineClamp, text };
          return metroImportAll(closure_11, obj, arg1);
        }
    };
    items2[1] = tmp13(Text3, obj3, "changelog-cta");
    tmp8Result = tmp10(tmp11, obj4);
  } else if (!tmp3) {
    let obj = { variant: str, color: str2, lineClamp, style: tmp.text, children: memo };
    str2 = "text-default";
    const Text = bio(tmp6[10]).Text;
    const tmp8 = closure_8;
    if (tmp3) {
      str2 = "text-muted";
    }
    if (tmp3) {
      memo = placeholder;
    }
    tmp8Result = tmp8(Text, obj);
  } else {
    tmp8Result = null;
  }
  return tmp8Result;
});
const result = size.fileFinishedImporting("modules/profile_customization/native/BioText.tsx");

export default tmp3;
