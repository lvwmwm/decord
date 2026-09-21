// Module ID: 15229
// Function ID: 15230
// Name: ConnectedApplicationIdentity
// Dependencies: [5, 32, 19, 17, 21, 558, 568, 4758, 15230, 1119, 1181, 4754, 10034, 5110, 15208, 5207, 1401, 5190, 9300, 7238, 5186, 5341, 5822, 5903, 7446, 2]

// Module 15229 (ConnectedApplicationIdentity)
import util from "util" /* 1119 */;
import native from "native" /* 1181 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1401 */;
import Text_Text from "Text/Text" /* 4754 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5110 */;
import Icon from "Icon" /* 5190 */;
import common_AlertDefault from "common/Alert" /* 5207 */;
import InfoBoxDefault from "InfoBox" /* 10034 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

const IconDefault = tmp(5190);
require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/connections/native/ConnectedApplicationIdentity.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((identity) => {
  const cResult = require("c").c(49);
  identity = identity.identity;
  _require = identity;
  const token = identity.token;
  let application;
  if (token != null) {
    application = token.application;
  }
  str = undefined;
  if (application != null) {
    str = application.name;
  }
  if (str == null) {
    str = "";
  }
  let obj = require("c");
  const legacyClassComponentStyles = require("createStyles").useLegacyClassComponentStyles(tmp(tmp2[8]).readStyles);
  let profile = identity.profile;
  let flag;
  if (profile != null) {
    flag = profile.connection_visible;
  }
  if (flag == null) {
    flag = false;
  }
  const tmpResult = require("createStyles");
  [tmp8, asyncGeneratorStep] = body(noop.useState(flag), 2);
  if (cResult[0] !== str) {
    let intl = tmp(tmp2[9]).intl;
    let obj2 = { provider: str };
    const formatResult = intl.format(tmp(tmp2[9]).t.VgqIPj, obj2);
    cResult[0] = str;
    cResult[1] = formatResult;
    let tmp9 = formatResult;
  } else {
    tmp9 = cResult[1];
  }
  body = tmp9;
  if (cResult[2] === str) {
    if (cResult[3] === tmp9) {
      if (cResult[4] === token) {
        let tmp11 = cResult[5];
      }
      let icon;
      if (application != null) {
        icon = application.icon;
      }
      if (cResult[6] === icon) {
        if (cResult[7] === identity.application_id) {
          let tmp13 = cResult[8];
        }
        if (cResult[9] === identity.application_id) {
          const profile2 = identity.profile;
          let connection_visible;
          if (profile2 != null) {
            connection_visible = profile2.connection_visible;
          }
          if (cResult[10] === connection_visible) {
            if (cResult[11] === identity.provider_issued_user_id) {
              let tmp19 = cResult[12];
            }
            const profile4 = identity.profile;
            if (null == application) {
              return null;
            } else {
              if (cResult[13] === legacyClassComponentStyles.connectedApplicationIdentityIcon) {
                if (cResult[14] === legacyClassComponentStyles.platformIcon) {
                  let tmp22 = cResult[15];
                }
                if (cResult[16] === application.name) {
                  if (cResult[17] === tmp13) {
                    if (cResult[18] === tmp22) {
                      let tmp23 = cResult[19];
                    }
                    const _Symbol = Symbol;
                    if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
                      let intl2 = tmp(tmp2[9]).intl;
                      const stringResult = intl2.string(tmp(tmp2[9]).t["DT39A+"]);
                      cResult[20] = stringResult;
                      let tmp29 = stringResult;
                    } else {
                      tmp29 = cResult[20];
                    }
                    const _Symbol2 = Symbol;
                    if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
                      const rect = { top: 5, left: 5, bottom: 5, right: 5 };
                      cResult[21] = rect;
                      let tmp31 = rect;
                    } else {
                      tmp31 = cResult[21];
                    }
                    if (cResult[22] !== legacyClassComponentStyles.deleteConnectionIcon) {
                      let obj3 = { style: legacyClassComponentStyles.deleteConnectionIcon, source: token(tmp2[19]) };
                      const tmp37 = closure_7(token(tmp2[17]), obj3);
                      cResult[22] = legacyClassComponentStyles.deleteConnectionIcon;
                      cResult[23] = tmp37;
                      let tmp33 = tmp37;
                      const tmp36 = token(tmp2[17]);
                    } else {
                      tmp33 = cResult[23];
                    }
                    if (cResult[24] === tmp11) {
                      if (cResult[25] === tmp33) {
                        if (cResult[26] === tmp32) {
                          let tmp38 = cResult[27];
                        }
                        if (cResult[28] === application.name) {
                          if (cResult[29] === tmp38) {
                            if (cResult[30] === tmp23) {
                              let tmp43 = cResult[31];
                            }
                            if (cResult[32] === legacyClassComponentStyles.connectedAccountTopContainer) {
                              if (cResult[33] === tmp43) {
                                let tmp46 = cResult[34];
                              }
                              const _Symbol3 = Symbol;
                              if (cResult[35] === Symbol.for("react.memo_cache_sentinel")) {
                                let intl3 = tmp(tmp2[9]).intl;
                                const stringResult1 = intl3.string(tmp(tmp2[9]).t.f7yOAX);
                                cResult[35] = stringResult1;
                                let tmp50 = stringResult1;
                              } else {
                                tmp50 = cResult[35];
                              }
                              if (cResult[36] === tmp19) {
                                if (cResult[37] === tmp8) {
                                  let tmp52 = cResult[38];
                                }
                                if (cResult[39] === legacyClassComponentStyles.connectedAccountContentContainer) {
                                  if (cResult[40] === tmp52) {
                                    let tmp55 = cResult[41];
                                  }
                                  if (cResult[42] === legacyClassComponentStyles.connectedAccountItem) {
                                    if (cResult[43] === tmp46) {
                                      if (cResult[44] === tmp55) {
                                        let tmp59 = cResult[45];
                                      }
                                      if (cResult[46] === legacyClassComponentStyles.container) {
                                        if (cResult[47] === tmp59) {
                                          let tmp63 = cResult[48];
                                        }
                                        return tmp63;
                                      }
                                      let obj5 = { style: tmp41, children: tmp59 };
                                      const tmp66 = closure_7(View, obj5);
                                      cResult[46] = legacyClassComponentStyles.container;
                                      cResult[47] = tmp59;
                                      cResult[48] = tmp66;
                                      tmp63 = tmp66;
                                    }
                                  }
                                  const obj6 = { style: tmp42, children: null };
                                  let items = [tmp46, tmp55];
                                  obj6.children = items;
                                  const tmp62 = closure_8(View, obj6);
                                  cResult[42] = legacyClassComponentStyles.connectedAccountItem;
                                  cResult[43] = tmp46;
                                  cResult[44] = tmp55;
                                  cResult[45] = tmp62;
                                  tmp59 = tmp62;
                                }
                                let obj7 = { style: legacyClassComponentStyles.connectedAccountContentContainer, children: tmp52 };
                                const tmp58 = closure_7(View, obj7);
                                cResult[39] = legacyClassComponentStyles.connectedAccountContentContainer;
                                cResult[40] = tmp52;
                                cResult[41] = tmp58;
                                tmp55 = tmp58;
                              }
                              const obj8 = { hasIcons: false, children: null };
                              const obj9 = { label: tmp50, value: tmp8, onValueChange: tmp19 };
                              obj8.children = closure_7(tmp(tmp2[24]).TableSwitchRow, obj9);
                              const tmp54 = closure_7(tmp(tmp2[23]).TableRowGroup, obj8);
                              cResult[36] = tmp19;
                              cResult[37] = tmp8;
                              cResult[38] = tmp54;
                              tmp52 = tmp54;
                            }
                            const obj10 = { style: legacyClassComponentStyles.connectedAccountTopContainer, children: tmp43 };
                            const tmp49 = closure_7(View, obj10);
                            cResult[32] = legacyClassComponentStyles.connectedAccountTopContainer;
                            cResult[33] = tmp43;
                            cResult[34] = tmp49;
                            tmp46 = tmp49;
                          }
                        }
                        const obj11 = { label: application.name, icon: tmp23, trailing: tmp38 };
                        const tmp45 = closure_7(tmp(tmp2[22]).TableRow, obj11);
                        cResult[28] = application.name;
                        cResult[29] = tmp38;
                        cResult[30] = tmp23;
                        cResult[31] = tmp45;
                        tmp43 = tmp45;
                      }
                    }
                    const obj12 = { spacing: 8, direction: "horizontal", align: "center", children: null };
                    const obj13 = { accessibilityRole: "button", accessibilityLabel: tmp29, onPress: tmp11, hitSlop: tmp31, disabled: null == token, children: tmp33 };
                    obj12.children = closure_7(tmp(tmp2[21]).PressableOpacity, obj13);
                    const tmp40 = closure_7(tmp(tmp2[20]).Stack, obj12);
                    cResult[24] = tmp11;
                    cResult[25] = tmp33;
                    cResult[26] = null == token;
                    cResult[27] = tmp40;
                    tmp38 = tmp40;
                  }
                }
                const obj14 = { accessible: true, accessibilityLabel: application.name, style: tmp22, size: token(tmp2[17]).Sizes.LARGE, source: tmp13, disableColor: true };
                const tmp27 = closure_7(token(tmp2[17]), obj14);
                cResult[16] = application.name;
                cResult[17] = tmp13;
                cResult[18] = tmp22;
                cResult[19] = tmp27;
                tmp23 = tmp27;
                const tmp26 = token(tmp2[17]);
              }
              const items1 = [, ];
              ({ connectedApplicationIdentityIcon: arr[0], platformIcon: arr[1] } = legacyClassComponentStyles);
              cResult[13] = legacyClassComponentStyles.connectedApplicationIdentityIcon;
              cResult[14] = legacyClassComponentStyles.platformIcon;
              cResult[15] = items1;
              tmp22 = items1;
            }
          }
        }
        _require = asyncGeneratorStep(async (connection_visible) => {
          c2 = 0;
          c4 = 0;
          c3 = 0;
          return (async (arg0, value) => {
            closure_1 = tmp3;
            v0(connection_visible);
            v0 = 1;
            await token(str[18]).updateApplicationIdentityConfig(connection_visible.application_id, connection_visible.provider_issued_user_id, { connection_visible });
            if (1 === tmp7) {
              v0 = 0;
              const profile = connection_visible.profile;
              connection_visible = undefined;
              if (profile != null) {
                connection_visible = profile.connection_visible;
              }
              v0(true === connection_visible);
              c4 = 3;
            } else if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 !== 2) {
              v0 = 0;
            }
            v0 = 0;
            return value;
          })();
        });
        ({ application_id: tmp3[9], profile: profile3 } = identity);
        let connection_visible1;
        if (profile3 != null) {
          connection_visible1 = profile3.connection_visible;
        }
        const fn = function() {
          const self = this;
          const apply = closure_0.apply;
          if (typeof apply === "unknown") {
            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
          } else {
            applyArgumentsResult = apply(self, arguments);
          }
          return applyArgumentsResult;
        };
        cResult[10] = connection_visible1;
        cResult[11] = identity.provider_issued_user_id;
        cResult[12] = fn;
        tmp19 = fn;
      }
      const obj15 = { id: identity.application_id, icon: null, size: null, botIconFirst: false };
      let icon1;
      if (application != null) {
        icon1 = application.icon;
      }
      obj15.icon = icon1;
      let obj4 = token(tmp2[16]);
      const tmp14 = token;
      obj15.size = tmp(tmp2[17]).getIconSize(tmp14(tmp2[17]).Sizes.LARGE);
      const applicationIconSource = obj4.getApplicationIconSource(obj15);
      let icon2;
      if (application != null) {
        icon2 = application.icon;
      }
      cResult[6] = icon2;
      cResult[7] = identity.application_id;
      cResult[8] = applicationIconSource;
      tmp13 = applicationIconSource;
      const tmpResult2 = tmp(tmp2[17]);
    }
  }
  class T {
    constructor() {
      obj = { children: null };
      items = [, , , ];
      items[0] = jsx(closure_0(closure_2[10]).Spacer, { size: 8 });
      obj1 = { variant: "text-md/medium", children: null };
      intl = closure_0(closure_2[9]).intl;
      obj9 = { provider: c2 };
      obj1.children = intl.format(closure_0(closure_2[9]).t.VgqIPj, obj9);
      items[1] = jsx(closure_0(closure_2[11]).Text, obj1);
      items[2] = jsx(closure_0(closure_2[10]).Spacer, { size: 16 });
      obj10 = { children: null };
      tmp = closure_1(closure_2[12]);
      intl2 = closure_0(closure_2[9]).intl;
      obj11 = { platformName: c2 };
      obj10.children = intl2.format(closure_0(closure_2[9]).t.COW3Xn, obj11);
      items[3] = jsx(tmp, obj10);
      obj.children = items;
      tmp2 = jsxs(View, obj);
      obj6 = closure_1(closure_2[13]);
      obj12 = { title: null, body: null, cancelText: null, children: null, confirmText: null, onConfirm: null, confirmColor: null };
      intl3 = closure_0(closure_2[9]).intl;
      obj13 = { name: c2 };
      obj12.title = intl3.formatToPlainString(closure_0(closure_2[9]).t.U5x12f, obj13);
      obj12.body = closure_4;
      intl4 = closure_0(closure_2[9]).intl;
      obj12.cancelText = intl4.string(closure_0(closure_2[9]).t["ETE/oC"]);
      obj12.children = tmp2;
      intl5 = closure_0(closure_2[9]).intl;
      obj12.confirmText = intl5.string(closure_0(closure_2[9]).t.ppppRJ);
      obj12.onConfirm = function onConfirm() {
        if (null != token) {
          closure_0(str[14]).handleDeleteApp(tmp);
          const obj = closure_0(str[14]);
        }
      };
      obj12.confirmColor = closure_1(closure_2[15]).Colors.RED;
      showResult = obj6.show(obj12);
      return;
    }
  }
  cResult[2] = str;
  cResult[3] = tmp9;
  cResult[4] = token;
  cResult[5] = T;
  tmp11 = T;
}) : ((identity) => {
  identity = identity.identity;
  _require = identity;
  const token = identity.token;
  let str;
  body = undefined;
  noop = undefined;
  let application;
  if (token != null) {
    application = token.application;
  }
  str = undefined;
  if (application != null) {
    str = application.name;
  }
  if (str == null) {
    str = "";
  }
  const legacyClassComponentStyles = require("createStyles").useLegacyClassComponentStyles(require("ConnectedAccount").readStyles);
  let profile = identity.profile;
  let flag;
  if (profile != null) {
    flag = profile.connection_visible;
  }
  if (flag == null) {
    flag = false;
  }
  let obj = require("createStyles");
  [tmp6, c4] = body(noop.useState(flag), 2);
  let intl = tmp2(tmp3[9]).intl;
  const formatResult = intl.format(require("util").t.VgqIPj, { provider: str });
  noop = formatResult;
  let items = [str, formatResult, token];
  let icon;
  const callback = obj2.useCallback(() => {
    let obj = { children: null };
    const items = [React5(native.Spacer, { size: 8 }), , , ];
    const obj2 = { variant: "text-md/medium", children: null };
    const intl = util.intl;
    obj2.children = intl.format(util.t.VgqIPj, { provider: str });
    items[1] = React5(Text_Text.Text, obj2);
    items[2] = React5(native.Spacer, { size: 16 });
    const obj4 = { children: null };
    const intl2 = util.intl;
    obj4.children = intl2.format(util.t.COW3Xn, { platformName: str });
    items[3] = React5(InfoBoxDefault, obj4);
    obj.children = items;
    const obj3 = { provider: str };
    const obj5 = { platformName: str };
    const tmp2 = closure_2_8(View, obj);
    const obj7 = { title: null, body: null, cancelText: null, children: null, confirmText: null, onConfirm: null, confirmColor: null };
    const intl3 = util.intl;
    obj7.title = intl3.formatToPlainString(util.t.U5x12f, { name: str });
    obj7.body = body;
    const intl4 = util.intl;
    obj7.cancelText = intl4.string(util.t["ETE/oC"]);
    obj7.children = tmp2;
    const intl5 = util.intl;
    obj7.confirmText = intl5.string(util.t.ppppRJ);
    obj7.onConfirm = function onConfirm() {
      if (null != token) {
        closure_0(application[14]).handleDeleteApp(tmp);
        const obj = closure_0(application[14]);
      }
    };
    obj7.confirmColor = common_AlertDefault.Colors.RED;
    AlertActionCreatorsDefault.show(obj7);
  }, items);
  if (application != null) {
    icon = application.icon;
  }
  const items1 = [icon, identity.application_id];
  const memo = obj2.useMemo(() => {
    const obj2 = { id: application_id.application_id, icon: null, size: null, botIconFirst: false };
    let icon;
    if (application != null) {
      icon = application.icon;
    }
    obj2.icon = icon;
    const obj = AvatarUtilsDefault;
    obj2.size = Icon.getIconSize(IconDefault.Sizes.LARGE);
    return obj.getApplicationIconSource(obj2);
  }, items1);
  _require = str((connection_visible) => {
    c2 = 0;
    c4 = 0;
    c3 = 0;
    return (function*(arg0, value) {
      closure_1 = tmp3;
      v3(connection_visible);
      yield token(application[18]).updateApplicationIdentityConfig(connection_visible.application_id, connection_visible.provider_issued_user_id, { connection_visible });
      if (1 === tmp7) {
        c3 = 0;
        const profile = connection_visible.profile;
        connection_visible = undefined;
        if (profile != null) {
          connection_visible = profile.connection_visible;
        }
        v3(true === connection_visible);
        v3 = 3;
      } else if (arg0 === 1) {
        v3 = 3;
        throw value;
      } else if (arg0 !== 2) {
        c3 = 0;
      }
      return value;
    })();
  });
  const profile2 = identity.profile;
  let connection_visible;
  if (profile2 != null) {
    connection_visible = profile2.connection_visible;
  }
  const items2 = [connection_visible, , ];
  ({ provider_issued_user_id: arr3[1], application_id: arr3[2] } = identity);
  if (null == application) {
    return null;
  } else {
    let obj3 = { accessible: true, accessibilityLabel: application.name, style: null, size: null, source: null, disableColor: true };
    const items3 = [, ];
    ({ connectedApplicationIdentityIcon: arr4[0], platformIcon: arr4[1] } = legacyClassComponentStyles);
    obj3.style = items3;
    obj3.size = token(tmp3[17]).Sizes.LARGE;
    obj3.source = memo;
    const tmp15 = token(tmp3[17]);
    let obj4 = { spacing: 8, direction: "horizontal", align: "center", children: null };
    let obj5 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, hitSlop: null, disabled: null, children: null };
    let intl2 = tmp2(tmp3[9]).intl;
    obj5.accessibilityLabel = intl2.string(tmp2(tmp3[9]).t["DT39A+"]);
    obj5.onPress = callback;
    obj5.hitSlop = { top: 5, left: 5, bottom: 5, right: 5 };
    obj5.disabled = null == token;
    const obj6 = { style: legacyClassComponentStyles.deleteConnectionIcon, source: null };
    const tmp16 = closure_7(token(tmp3[17]), obj3);
    obj6.source = token(tmp3[19]);
    obj5.children = closure_7(token(tmp3[17]), obj6);
    obj4.children = closure_7(tmp2(tmp3[21]).PressableOpacity, obj5);
    let obj7 = { style: legacyClassComponentStyles.container, children: null };
    const obj8 = { style: legacyClassComponentStyles.connectedAccountItem, children: null };
    const obj9 = { style: legacyClassComponentStyles.connectedAccountTopContainer, children: null };
    const tmp17 = token(tmp3[17]);
    const obj10 = { label: application.name, icon: tmp16, trailing: closure_7(tmp2(tmp3[20]).Stack, obj4) };
    obj9.children = closure_7(tmp2(tmp3[22]).TableRow, obj10);
    const items4 = [closure_7(View, obj9), ];
    const obj11 = { style: legacyClassComponentStyles.connectedAccountContentContainer, children: null };
    const obj12 = { hasIcons: false, children: null };
    const obj13 = { label: null, value: null, onValueChange: null };
    let intl3 = tmp2(tmp3[9]).intl;
    obj13.label = intl3.string(tmp2(tmp3[9]).t.f7yOAX);
    obj13.value = tmp6;
    obj13.onValueChange = tmp12;
    obj12.children = closure_7(tmp2(tmp3[24]).TableSwitchRow, obj13);
    obj11.children = closure_7(tmp2(tmp3[23]).TableRowGroup, obj12);
    items4[1] = closure_7(View, obj11);
    obj8.children = items4;
    obj7.children = closure_8(View, obj8);
    return closure_7(View, obj7);
  }
  const tmp5 = body(noop.useState(flag), 2);
});
