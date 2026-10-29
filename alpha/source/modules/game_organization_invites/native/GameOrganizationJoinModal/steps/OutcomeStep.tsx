// Module ID: 13010
// Function ID: 13011
// Name: OutcomeStep
// Dependencies: [32, 19, 4879, 11122, 13000, 21, 5005, 1125, 2404, 558, 576, 13002, 504, 7508, 13003, 5271, 7959, 6015, 587, 13007, 5281, 7958, 2]

// Module 13010 (OutcomeStep)
import intl15 from "intl" /* 1125 */;
import _modDef2404 from "module_2404" /* 2404 */;
import transitionToGuild from "transitionToGuild" /* 7508 */;
import GameOrganizationJoinModalConstants from "GameOrganizationJoinModalConstants" /* 13000 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 4879 */;
import GameOrganizationInviteConstants from "GameOrganizationInviteConstants" /* 11122 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5005 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let dependencyMap, num;

let c10;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let unpackModuleId;
function getOutcomeContent(arg0, arg1, arg2, noun, onGoToServer) {
  let characterName;
  let formatToPlainStringResult1;
  let intl;
  let intl10;
  let intl11;
  let intl12;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let noun2;
  let obj16;
  let obj19;
  let obj5;
  let obj7;
  let obj9;
  let orgName;
  onGoToServer = onGoToServer.onGoToServer;
  noun = noun.noun;
  const obj = { text: intl.string(intl15.t.cpT0Cq), onPress: onClose };
  onClose = onGoToServer.onClose;
  intl = intl15.intl;
  let tmp3 = obj;
  if (null != onGoToServer) {
    const obj2 = { text: intl2.string(_modDef2404.H1wMHV), onPress: onGoToServer };
    intl2 = tmp(1125).intl;
    tmp3 = obj2;
  }
  if (arg0 === metroImportDefault.JOINED) {
    ({ noun: noun2, orgName, characterName } = noun);
    const intl9 = tmp(1125).intl;
    const obj3 = { noun: noun2 };
    const formatToPlainStringResult = intl9.formatToPlainString(_modDef2404["w/spGp"], obj3);
    if (metroImportAll.NEW_MEMBER !== arg2) {
      let obj8;
      if (metroImportAll.ALREADY_MEMBER !== arg2) {
        if (metroImportAll.PENDING_VERIFICATION === arg2) {
          const obj4 = { title: formatToPlainStringResult, subtitle: intl12.formatToPlainString(_modDef2404["9K7Jdt"], obj5), cta: tmp3 };
          intl12 = tmp(1125).intl;
          obj8 = obj4;
          obj5 = { noun: noun2, orgName };
        } else if (metroImportAll.APPLICATION === arg2) {
          const obj6 = { title: formatToPlainStringResult, subtitle: intl11.formatToPlainString(_modDef2404.ODHuua, obj7), cta: obj };
          intl11 = tmp(1125).intl;
          obj8 = obj6;
          obj7 = { noun: noun2, orgName };
        } else {
          const FAILED = tmp12.FAILED;
          obj8 = { title: formatToPlainStringResult, subtitle: intl10.formatToPlainString(_modDef2404.Qo94hd, obj9), cta: obj };
          intl10 = tmp(1125).intl;
          obj9 = { noun: noun2, orgName };
        }
      }
      return obj8;
    }
    const obj10 = { title: formatToPlainStringResult, subtitle: formatToPlainStringResult1, cta: tmp3 };
    if (null != characterName) {
      const intl14 = tmp(1125).intl;
      const obj11 = { noun: noun2, orgName, characterName };
      formatToPlainStringResult1 = intl14.formatToPlainString(tmp10(2404).PLA9Om, obj11);
    } else {
      const intl13 = tmp(1125).intl;
      const obj12 = { noun: noun2, orgName };
      formatToPlainStringResult1 = intl13.formatToPlainString(tmp10(2404).WF9Qgb, obj12);
    }
    obj8 = obj10;
  } else if (metroRequire.ALREADY_JOINED === arg1) {
    const obj13 = { title: intl8.formatToPlainString(_modDef2404["1PMPYk"], obj14), cta: tmp3 };
    intl8 = tmp(1125).intl;
    return obj13;
  } else if (metroRequire.IN_ANOTHER_ORGANIZATION === arg1) {
    const obj15 = { title: intl6.formatToPlainString(_modDef2404.vSlR1j, obj16), subtitle: intl7.formatToPlainString(_modDef2404.kvDHqp, obj17), cta: obj };
    intl6 = tmp(1125).intl;
    obj16 = { noun };
    intl7 = tmp(1125).intl;
    return obj15;
  } else if (metroRequire.GUILD_FULL === arg1) {
    const obj18 = { title: intl4.formatToPlainString(_modDef2404["/7Gy4g"], obj19), subtitle: intl5.string(_modDef2404["8TGo9L"]), cta: obj };
    intl4 = tmp(1125).intl;
    obj19 = { noun };
    intl5 = tmp(1125).intl;
    return obj18;
  } else {
    const OTHER = tmp15.OTHER;
    const obj20 = { title: intl3.string(_modDef2404.sXbaMb), cta: obj };
    intl3 = tmp(1125).intl;
    return obj20;
  }
}
let _slicedToArray = _slicedToArray_mod;
({ GameOrganizationInviteAcceptFailureReason: metroRequire, GameOrganizationInviteAcceptStatus: metroImportDefault, GameOrganizationLinkedGuildJoinStatus: metroImportAll } = GameOrganizationInviteConstants);
let onClose = GameOrganizationJoinModalConstants.closeGameOrganizationJoinModal;
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let closure_12 = createStyles.createStyles({ text: { textAlign: "center" } });
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function OutcomeStep(code) {
  let characterName;
  let closure_3;
  let failureReason;
  let first;
  let guildId;
  let guildJoinStatus;
  let joinStatus;
  let obj4;
  let stateFromStores;
  let tmp10;
  let tmp13;
  let tmp19;
  let tmp = guildId;
  let tmp2 = dependencyMap;
  let obj = guildId(576);
  const cResult = obj.c(40);
  ({ joinStatus, failureReason, guildJoinStatus, characterName } = code);
  code = code.code;
  closure_12();
  const tmp6 = stateFromStores(13002)(code);
  guildId = undefined;
  const tmp5 = stateFromStores;
  if (tmp6 != null) {
    guildId = tmp6.guildId;
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guildId) {
    const fn = function u() {
      const tmp2 = null != guildId && null != GuildStore.getGuild(tmp);
      return tmp2;
    };
    cResult[1] = guildId;
    cResult[2] = fn;
    tmp10 = fn;
  } else {
    tmp10 = cResult[2];
  }
  const tmpResult = tmp(504);
  stateFromStores = tmpResult.useStateFromStores(first, tmp10);
  [tmp13, dependencyMap] = react.useState(false);
  _slicedToArray(react.useState(false), 2);
  const obj3 = react;
  if (cResult[3] === guildJoinStatus) {
    if (cResult[4] === tmp13) {
      if (cResult[5] === stateFromStores) {
        let tmp14;
        let tmp17;
        let tmp16;
        if (cResult[6] === joinStatus) {
          tmp14 = cResult[7];
        }
        _slicedToArray = tmp14;
        if (cResult[8] !== tmp14) {
          class R {
            constructor() {
              if (closure_3) {
                tmp = globalThis;
                _setTimeout = setTimeout;
                num = 5000;
                closure_0 = setTimeout(() => closure_1_2(true), 5000);
                return () => clearTimeout(closure_0);
              } else {
                return;
              }
            }
          }
          const items1 = [tmp14];
          cResult[8] = tmp14;
          cResult[9] = R;
          cResult[10] = items1;
          tmp17 = items1;
          tmp16 = R;
        } else {
          class R {
            constructor() {
              if (closure_3) {
                tmp = globalThis;
                _setTimeout = setTimeout;
                num = 5000;
                closure_0 = setTimeout(() => closure_1_2(true), 5000);
                return () => clearTimeout(closure_0);
              } else {
                return;
              }
            }
          }
          tmp17 = cResult[10];
        }
        const effect = obj3.useEffect(tmp16, tmp17);
        if (cResult[11] === guildId) {
          class R {
            constructor() {
              if (closure_3) {
                tmp = globalThis;
                _setTimeout = setTimeout;
                num = 5000;
                closure_0 = setTimeout(() => closure_1_2(true), 5000);
                return () => clearTimeout(closure_0);
              } else {
                return;
              }
            }
          }
          if (cResult[14] === characterName) {
            class R {
              constructor() {
                if (closure_3) {
                  tmp = globalThis;
                  _setTimeout = setTimeout;
                  num = 5000;
                  closure_0 = setTimeout(() => closure_1_2(true), 5000);
                  return () => clearTimeout(closure_0);
                } else {
                  return;
                }
              }
            }
          }
          const tmp21 = getOutcomeContent;
          const tmp5Result = tmp5(13003);
          if (tmp6 != null) {
            class R {
              constructor() {
                if (closure_3) {
                  tmp = globalThis;
                  _setTimeout = setTimeout;
                  num = 5000;
                  closure_0 = setTimeout(() => closure_1_2(true), 5000);
                  return () => clearTimeout(closure_0);
                } else {
                  return;
                }
              }
            }
          }
          if (undefined == null) {
            class R {
              constructor() {
                if (closure_3) {
                  tmp = globalThis;
                  _setTimeout = setTimeout;
                  num = 5000;
                  closure_0 = setTimeout(() => closure_1_2(true), 5000);
                  return () => clearTimeout(closure_0);
                } else {
                  return;
                }
              }
            }
          }
          const obj2 = { noun: tmp5Result(obj4), orgName: undefined, characterName };
          obj4 = { displayNoun: undefined, lowercase: true };
          if (tmp6 != null) {
            class R {
              constructor() {
                if (closure_3) {
                  tmp = globalThis;
                  _setTimeout = setTimeout;
                  num = 5000;
                  closure_0 = setTimeout(() => closure_1_2(true), 5000);
                  return () => clearTimeout(closure_0);
                } else {
                  return;
                }
              }
            }
          }
          if (undefined == null) {
            class R {
              constructor() {
                if (closure_3) {
                  tmp = globalThis;
                  _setTimeout = setTimeout;
                  num = 5000;
                  closure_0 = setTimeout(() => closure_1_2(true), 5000);
                  return () => clearTimeout(closure_0);
                } else {
                  return;
                }
              }
            }
          }
          const obj5 = { onClose, onGoToServer: tmp26 };
          if (stateFromStores) {
            class R {
              constructor() {
                if (closure_3) {
                  tmp = globalThis;
                  _setTimeout = setTimeout;
                  num = 5000;
                  closure_0 = setTimeout(() => closure_1_2(true), 5000);
                  return () => clearTimeout(closure_0);
                } else {
                  return;
                }
              }
            }
          } else {
            class R {
              constructor() {
                if (closure_3) {
                  tmp = globalThis;
                  _setTimeout = setTimeout;
                  num = 5000;
                  closure_0 = setTimeout(() => closure_1_2(true), 5000);
                  return () => clearTimeout(closure_0);
                } else {
                  return;
                }
              }
            }
          }
          cResult[14] = characterName;
          cResult[15] = failureReason;
          cResult[16] = guildJoinStatus;
          cResult[17] = tmp19;
          cResult[18] = stateFromStores;
          const tmp21Result = tmp21(joinStatus, failureReason, guildJoinStatus, obj2, obj5);
          if (tmp6 != null) {
            class R {
              constructor() {
                if (closure_3) {
                  tmp = globalThis;
                  _setTimeout = setTimeout;
                  num = 5000;
                  closure_0 = setTimeout(() => closure_1_2(true), 5000);
                  return () => clearTimeout(closure_0);
                } else {
                  return;
                }
              }
            }
          }
          cResult[19] = undefined;
          if (tmp6 != null) {
            class R {
              constructor() {
                if (closure_3) {
                  tmp = globalThis;
                  _setTimeout = setTimeout;
                  num = 5000;
                  closure_0 = setTimeout(() => closure_1_2(true), 5000);
                  return () => clearTimeout(closure_0);
                } else {
                  return;
                }
              }
            }
          }
          cResult[20] = undefined;
          cResult[21] = tmp14;
          cResult[22] = joinStatus;
          cResult[23] = tmp21Result;
        }
        const fn2 = function z() {
          let tmp2 = null != guildId;
          const tmp = guildId;
          if (tmp2) {
            tmp2 = stateFromStores;
          }
          if (tmp2) {
            onClose();
            const obj = transitionToGuild;
            obj.transitionToGuild(tmp);
          }
        };
        cResult[11] = guildId;
        cResult[12] = stateFromStores;
        cResult[13] = fn2;
        tmp19 = fn2;
      }
    }
  }
  let tmp15 = !stateFromStores && !tmp13;
  if (tmp15) {
    class R {
      constructor() {
        if (closure_3) {
          tmp = globalThis;
          _setTimeout = setTimeout;
          num = 5000;
          closure_0 = setTimeout(() => closure_1_2(true), 5000);
          return () => clearTimeout(closure_0);
        } else {
          return;
        }
      }
    }
    let flag = false;
    if (joinStatus === constants2.JOINED) {
      class R {
        constructor() {
          if (closure_3) {
            tmp = globalThis;
            _setTimeout = setTimeout;
            num = 5000;
            closure_0 = setTimeout(() => closure_1_2(true), 5000);
            return () => clearTimeout(closure_0);
          } else {
            return;
          }
        }
      }
      if (constants3.NEW_MEMBER !== guildJoinStatus) {
        class R {
          constructor() {
            if (closure_3) {
              tmp = globalThis;
              _setTimeout = setTimeout;
              num = 5000;
              closure_0 = setTimeout(() => closure_1_2(true), 5000);
              return () => clearTimeout(closure_0);
            } else {
              return;
            }
          }
        }
      }
      flag = true;
    }
    tmp15 = flag;
  }
  cResult[3] = guildJoinStatus;
  cResult[4] = tmp13;
  cResult[5] = stateFromStores;
  cResult[6] = joinStatus;
  cResult[7] = tmp15;
  tmp14 = tmp15;
}) : (function OutcomeStep(arg0) {
  let characterName;
  let closure_2;
  let code;
  let cta;
  let failureReason;
  let guildJoinStatus;
  let items3;
  let items4;
  let joinStatus;
  let obj11;
  let str;
  let subtitle;
  let tmp17;
  ({ joinStatus, failureReason, guildJoinStatus } = arg0);
  let stateFromStores;
  dependencyMap = undefined;
  let flag;
  ({ code, characterName } = arg0);
  let tmp = closure_12();
  let tmp2 = stateFromStores;
  const tmp4 = stateFromStores(13002)(code);
  let guildId;
  if (tmp4 != null) {
    guildId = tmp4.guildId;
  }
  let obj = guildId(504);
  const items = [GuildStore];
  stateFromStores = obj.useStateFromStores(items, () => {
    const tmp2 = null != guildId && null != GuildStore.getGuild(tmp);
    return tmp2;
  });
  const tmp8 = flag(react.useState(false), 2);
  dependencyMap = tmp8[1];
  let tmp9 = !stateFromStores && !tmp8[0];
  if (tmp9) {
    flag = false;
    if (joinStatus === constants2.JOINED) {
      if (constants3.NEW_MEMBER !== guildJoinStatus) {
        if (constants3.ALREADY_MEMBER !== guildJoinStatus) {
          flag = false;
        }
      }
      flag = true;
    }
    tmp9 = flag;
  }
  flag = tmp9;
  const items1 = [tmp9];
  const effect = obj2.useEffect(() => {
    let closure_0;
    if (flag) {
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => closure_1_2(true), 5000);
      return () => clearTimeout(closure_0);
    }
  }, items1);
  const items2 = [guildId, stateFromStores];
  const callback = obj2.useCallback(() => {
    let tmp2 = null != guildId;
    const tmp = guildId;
    if (tmp2) {
      tmp2 = stateFromStores;
    }
    if (tmp2) {
      onClose();
      const obj = transitionToGuild;
      obj.transitionToGuild(tmp);
    }
  }, items2);
  let displayNoun;
  const tmp14 = getOutcomeContent;
  const tmp2Result = tmp2(13003);
  if (tmp4 != null) {
    displayNoun = tmp4.displayNoun;
  }
  if (displayNoun == null) {
    displayNoun = null;
  }
  const obj3 = { noun: tmp2Result({ displayNoun, lowercase: true }), orgName: str, characterName };
  str = undefined;
  if (tmp4 != null) {
    str = tmp4.organization.name;
  }
  if (str == null) {
    str = "";
  }
  const obj4 = { onClose, onGoToServer: tmp17 };
  if (stateFromStores) {
    tmp17 = callback;
  } else {
    tmp17 = null;
  }
  const tmp14Result = tmp14(joinStatus, failureReason, guildJoinStatus, obj3, obj4);
  ({ subtitle, cta } = tmp14Result);
  const title = tmp14Result.title;
  const ModalScreen = tmp6(7958).ModalScreen;
  const ModalContent = tmp6(7959).ModalContent;
  const obj5 = { spacing: tmp2(587).space.PX_8, children: items3 };
  const Stack = tmp6(6015).Stack;
  items3 = [, ];
  const obj6 = { variant: "heading-xl/semibold", style: tmp.text, accessibilityRole: "header", children: title };
  items3[0] = closure_10(guildId(5271).Text, obj6);
  let tmp20Result = null != subtitle;
  if (tmp20Result) {
    const obj7 = { variant: "text-md/normal", color: "text-muted", style: tmp.text, children: subtitle };
    tmp20Result = tmp20(tmp6(5271).Text, obj7);
  }
  const obj8 = { children: items4 };
  items3[1] = tmp20Result;
  items4 = [, ];
  const obj9 = { children: closure_11(Stack, obj5) };
  items4[0] = closure_10(ModalContent, obj9);
  const obj10 = { children: closure_10(guildId(5281).Button, obj11) };
  const ModalFooter = tmp6(13007).ModalFooter;
  obj11 = { text: cta.text, size: "lg", onPress: cta.onPress, disabled: tmp9 };
  items4[1] = closure_10(ModalFooter, obj10);
  return closure_11(ModalScreen, obj8);
});
const result = size.fileFinishedImporting("modules/game_organization_invites/native/GameOrganizationJoinModal/steps/OutcomeStep.tsx");

export const OutcomeStep = tmp4;
