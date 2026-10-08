// Module ID: 8513
// Function ID: 8514
// Name: EditGuildEventModalNavbar
// Dependencies: [32, 19, 17, 21, 5090, 8495, 1387, 558, 576, 6654, 6803, 5086, 1126, 7079, 5009, 2]

// Module 8513 (EditGuildEventModalNavbar)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import intl3 from "intl" /* 1126 */;
import GlobalUtils from "GlobalUtils" /* 1387 */;
import AssetRegistryDefault from "AssetRegistry" /* 5009 */;
import useTypeConsolidationTextTransform from "useTypeConsolidationTextTransform" /* 6654 */;
import EditGuildEventUtils from "EditGuildEventUtils" /* 8495 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5090 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let closure_7 = createStyles.createStyles({ header: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 4, paddingVertical: 8 }, headerTitle: { lineHeight: 28, textTransform: "uppercase" }, buttonContainer: { width: 60 }, rightButton: { marginLeft: 12 } });
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function EditGuildEventModalNavbar(arg0) {
  let flag;
  let items;
  let items1;
  let onClose;
  let screen;
  let str;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp15;
  let tmp16;
  let tmp17;
  let tmp6;
  let tmp7;
  let tmp8;
  let tmp9;
  const obj = react2;
  const cResult = obj.c(40);
  ({ screen, onClose } = arg0);
  const tmp4 = closure_7();
  const obj2 = useTypeConsolidationTextTransform;
  const typeConsolidationEyebrow = obj2.useTypeConsolidationEyebrow("EditGuildEventModalNavbar", "text-xs/bold");
  if (cResult[0] === typeConsolidationEyebrow.style) {
    if (cResult[1] === typeConsolidationEyebrow.variant) {
      if (cResult[2] === screen) {
        if (cResult[3] === tmp4.buttonContainer) {
          if (cResult[4] === tmp4.header) {
            if (cResult[5] === tmp4.headerTitle) {
              tmp6 = cResult[6];
              tmp7 = cResult[7];
              tmp8 = cResult[8];
              tmp9 = cResult[9];
              str = cResult[10];
              tmp10 = cResult[11];
              flag = cResult[12];
              tmp11 = cResult[13];
              tmp12 = cResult[14];
            }
            if (cResult[20] === tmp6) {
              if (cResult[21] === tmp8) {
                if (cResult[22] === tmp9) {
                  if (cResult[23] === str) {
                    let tmp23;
                    let tmp27;
                    if (cResult[24] === tmp10) {
                      tmp23 = cResult[25];
                    }
                    const _Symbol = Symbol;
                    const buttonContainer = tmp4.buttonContainer;
                    if (cResult[26] === Symbol.for("react.memo_cache_sentinel")) {
                      const intl2 = tmp(1126).intl;
                      const stringResult = intl2.string(intl3.t.cpT0Cq);
                      cResult[26] = stringResult;
                      tmp27 = stringResult;
                    } else {
                      tmp27 = cResult[26];
                    }
                    if (cResult[27] === onClose) {
                      let tmp29;
                      if (cResult[28] === tmp4.rightButton) {
                        tmp29 = cResult[29];
                      }
                      if (cResult[30] === tmp4.buttonContainer) {
                        let tmp33;
                        if (cResult[31] === tmp29) {
                          tmp33 = cResult[32];
                        }
                        if (cResult[33] === tmp7) {
                          if (cResult[34] === tmp33) {
                            if (cResult[35] === flag) {
                              if (cResult[36] === tmp11) {
                                if (cResult[37] === tmp12) {
                                  let tmp37;
                                  if (cResult[38] === tmp23) {
                                    tmp37 = cResult[39];
                                  }
                                  return tmp37;
                                }
                              }
                            }
                          }
                        }
                        const obj3 = { top: flag, style: tmp11, children: items };
                        items = [tmp12, tmp23, tmp33];
                        const tmp39 = metroRequire(tmp7, obj3);
                        cResult[33] = tmp7;
                        cResult[34] = tmp33;
                        cResult[35] = flag;
                        cResult[36] = tmp11;
                        cResult[37] = tmp12;
                        cResult[38] = tmp23;
                        cResult[39] = tmp39;
                        tmp37 = tmp39;
                      }
                      const obj4 = { style: buttonContainer, children: tmp29 };
                      const tmp36 = hasOwnProperty(View, obj4);
                      cResult[30] = tmp4.buttonContainer;
                      cResult[31] = tmp29;
                      cResult[32] = tmp36;
                      tmp33 = tmp36;
                    }
                    const obj5 = { accessibilityLabel: tmp27, onPress: onClose, source: AssetRegistryDefault, style: tmp4.rightButton };
                    const HeaderActionButton = tmp(7079).HeaderActionButton;
                    const tmp32 = hasOwnProperty(HeaderActionButton, obj5);
                    cResult[27] = onClose;
                    cResult[28] = tmp4.rightButton;
                    cResult[29] = tmp32;
                    tmp29 = tmp32;
                  }
                }
              }
            }
            const obj6 = { style: tmp8, variant: tmp9, color: str, children: tmp10 };
            const tmp25 = hasOwnProperty(tmp6, obj6);
            cResult[20] = tmp6;
            cResult[21] = tmp8;
            cResult[22] = tmp9;
            cResult[23] = str;
            cResult[24] = tmp10;
            cResult[25] = tmp25;
            tmp23 = tmp25;
          }
        }
      }
    }
  }
  if (EditGuildEventUtils.EditGuildEventScreens.CHANNEL_SELECTOR === screen) {
    items1 = [1, 3];
  } else if (EditGuildEventUtils.EditGuildEventScreens.DETAILS === screen) {
    items1 = [2, 3];
  } else if (EditGuildEventUtils.EditGuildEventScreens.PREVIEW === screen) {
    items1 = [3, 3];
  } else {
    const tmpResult = GlobalUtils;
    tmpResult.assertNever(screen);
  }
  [tmp15, tmp16] = items1;
  _slicedToArray(items1, 2);
  const SafeAreaPaddingView = tmp(6803).SafeAreaPaddingView;
  const header = tmp4.header;
  if (cResult[15] !== tmp4.buttonContainer) {
    const obj7 = { style: tmp4.buttonContainer };
    const tmp20 = hasOwnProperty(View, obj7);
    cResult[15] = tmp4.buttonContainer;
    cResult[16] = tmp20;
    tmp17 = tmp20;
  } else {
    tmp17 = cResult[16];
  }
  const Text = tmp(5086).Text;
  if (cResult[17] === typeConsolidationEyebrow.style) {
    let tmp21;
    if (cResult[18] === tmp4.headerTitle) {
      tmp21 = cResult[19];
    }
    const variant = typeConsolidationEyebrow.variant;
    const intl = tmp(1126).intl;
    const obj8 = { step: tmp15, total: tmp16 };
    const formatResult = intl.format(intl3.t["42HaFY"], obj8);
    cResult[0] = typeConsolidationEyebrow.style;
    cResult[1] = typeConsolidationEyebrow.variant;
    cResult[2] = screen;
    cResult[3] = tmp4.buttonContainer;
    cResult[4] = tmp4.header;
    cResult[5] = tmp4.headerTitle;
    cResult[6] = Text;
    cResult[7] = SafeAreaPaddingView;
    cResult[8] = tmp21;
    cResult[9] = variant;
    cResult[10] = "text-default";
    cResult[11] = formatResult;
    cResult[12] = true;
    cResult[13] = header;
    cResult[14] = tmp17;
    tmp8 = tmp21;
    tmp12 = tmp17;
    tmp11 = header;
    flag = true;
    tmp10 = formatResult;
    str = "text-default";
    tmp9 = variant;
    tmp7 = SafeAreaPaddingView;
    tmp6 = Text;
  }
  const items2 = [tmp4.headerTitle, typeConsolidationEyebrow.style];
  cResult[17] = typeConsolidationEyebrow.style;
  cResult[18] = tmp4.headerTitle;
  cResult[19] = items2;
  tmp21 = items2;
}) : (function EditGuildEventModalNavbar(screen) {
  let HeaderActionButton;
  let intl;
  let intl2;
  let items;
  let items1;
  let items2;
  let obj6;
  let tmp7;
  let tmp8;
  screen = screen.screen;
  const onClose = screen.onClose;
  const tmp = closure_7();
  const obj = useTypeConsolidationTextTransform;
  const typeConsolidationEyebrow = obj.useTypeConsolidationEyebrow("EditGuildEventModalNavbar", "text-xs/bold");
  if (EditGuildEventUtils.EditGuildEventScreens.CHANNEL_SELECTOR === screen) {
    items = [1, 3];
  } else if (EditGuildEventUtils.EditGuildEventScreens.DETAILS === screen) {
    items = [2, 3];
  } else if (EditGuildEventUtils.EditGuildEventScreens.PREVIEW === screen) {
    items = [3, 3];
  } else {
    const tmp2Result = GlobalUtils;
    tmp2Result.assertNever(screen);
  }
  [tmp7, tmp8] = items;
  const obj2 = { top: true, style: tmp.header, children: items1 };
  const obj3 = { style: tmp.buttonContainer };
  _slicedToArray(items, 2);
  const SafeAreaPaddingView = tmp2(6803).SafeAreaPaddingView;
  items1 = [hasOwnProperty(View, obj3), , ];
  const obj4 = { style: items2, variant: typeConsolidationEyebrow.variant, color: "text-default", children: intl.format(intl3.t["42HaFY"], { step: tmp7, total: tmp8 }) };
  items2 = [tmp.headerTitle, typeConsolidationEyebrow.style];
  const Text = tmp2(5086).Text;
  intl = tmp2(1126).intl;
  items1[1] = hasOwnProperty(Text, obj4);
  const obj5 = { style: tmp.buttonContainer, children: hasOwnProperty(HeaderActionButton, obj6) };
  obj6 = { accessibilityLabel: intl2.string(intl3.t.cpT0Cq), onPress: onClose, source: AssetRegistryDefault, style: tmp.rightButton };
  HeaderActionButton = tmp2(7079).HeaderActionButton;
  intl2 = tmp2(1126).intl;
  items1[2] = hasOwnProperty(View, obj5);
  return metroRequire(SafeAreaPaddingView, obj2);
});
const result = size.fileFinishedImporting("modules/guild_scheduled_events/native/components/EditGuildEventModalNavbar.tsx");

export default tmp4;
