// Module ID: 18605
// Function ID: 18606
// Name: conjureProjectActions
// Dependencies: [5, 1387, 7693, 7706, 6934, 4899, 18606, 5724, 6052, 1112, 4245, 7538, 6801, 5725, 5743, 12508, 18607, 7667, 8597, 11497, 7670, 11448, 5745, 12427, 5739, 11081, 10454, 7288, 18517, 18598, 5750, 2]
// Exports: canUnpublishConjureUserApp, copyConjureProjectId, copyConjureProjectLink, exportConjureProject, importConjureProject, loadConjureProjectActions

// Module 18605 (conjureProjectActions)
import intl11 from "intl" /* 1112 */;
import _modDef4245 from "module_4245" /* 4245 */;
import ChannelConstants from "ChannelConstants" /* 4899 */;
import ToastUtils from "ToastUtils" /* 5724 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5725 */;
import CopyIcon from "CopyIcon" /* 5743 */;
import ChannelUtils from "ChannelUtils" /* 6801 */;
import ClipboardUtils from "ClipboardUtils" /* 7538 */;
import ConjureActionCreators from "ConjureActionCreators" /* 7667 */;
import conjureRemoveApp from "conjureRemoveApp" /* 12508 */;
import openConjureRemoveAppAlertDefault from "openConjureRemoveAppAlert" /* 18607 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import UserStore from "UserStore" /* 1387 */;
import ConjureConnectionStore_mod from "ConjureConnectionStore" /* 7693 */;
import ConjurePublishStatusStore from "ConjurePublishStatusStore" /* 7706 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6934 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c1, closure_2, closure_3, currentUser, isAccessRefused;

let c10;
let c9;
let hasOwnProperty;
let metroRequire;
let unpackModuleId;
function importIntoProject() {
  return closure_1_13(...arguments);
}
let obj = function _importIntoProject() {
  obj = _asyncToGenerator(async (arg0, arg1) => {
    const name = arg0;
    let closure_1 = arg1;
    let c4 = 0;
    let c5 = 0;
    return (async (arg0, value) => {
      let intl;
      let intl2;
      let intl3;
      let obj5;
      let obj8;
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: "+95" };
        }
      } else {
        try {
          let closure_4;
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              let obj3 = { value, done: true };
              return obj3;
            } else {
              closure_2 = undefined;
              closure_3 = undefined;
              closure_4 = undefined;
              c4 = 1;
              c5 = 1;
              let obj4 = { value: obj5.pickConjureArchive(), done: false };
              obj5 = require("ConjureArchivePicker");
              return obj4;
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            return { value, done: true };
          } else {
            closure_2 = value;
            if (null != closure_2) {
              const obj9 = closure_131_0(closure_131_2[6]);
              closure_4 = obj9.describeConjureArchiveRejection(closure_2);
              if (null == closure_4) {
                const tmp15 = closure_131_0(closure_131_2[8]);
                let tmp17 = closure_131_2;
                const showConfirmModal = tmp15.showConfirmModal;
                const obj7 = {
                  key: "ConjureImportOverwrite",
                  title: intl.formatToPlainString(closure_131_1(closure_131_2[10])["Gm+u1+"], obj8),
                  content: intl2.string(closure_131_1(closure_131_2[10]).M7H3sJ),
                  confirmText: intl3.string(closure_131_1(closure_131_2[10]).gFHykw),
                  onConfirm() {
                              return closure_1_3(...arguments);
                            }
                };
                intl = closure_131_0(closure_131_2[9]).intl;
                obj8 = { name: name.name };
                intl2 = closure_131_0(closure_131_2[9]).intl;
                const tmp24 = closure_131_0;
                intl3 = closure_131_0(closure_131_2[9]).intl;
                closure_3 = closure_131_3(async (arg0, value) => {
                  let closure_0;
                  let v1;
                  if (c3 === 2) {
                    c3 = 3;
                    throw new TypeError("Generator functions may not be called on executing generators");
                  } else if (tmp3 === 3) {
                    if (arg0 === 1) {
                      throw value;
                    } else if (arg0 === 2) {
                      const obj2 = { value, done: true };
                      return obj2;
                    } else {
                      return { value: "HermesInternal", done: "+95" };
                    }
                  } else {
                    let c2;
                    try {
                      c3 = 2;
                      if (0 === c1) {
                        if (arg0 === 1) {
                          c3 = 3;
                          throw value;
                        } else if (arg0 === 2) {
                          c3 = 3;
                          const obj3 = { value, done: true };
                          return obj3;
                        } else {
                          if (closure_2_1 != null) {
                            closure_2_1();
                          }
                          c2 = 1;
                          const sendConjureArchiveImport = tmp(c2[6]).sendConjureArchiveImport;
                          id = id.id;
                          const tmp17 = tmp(c2[6]);
                          const intl2 = tmp(c2[9]).intl;
                          c1 = 2;
                          c3 = 1;
                          const obj4 = { value: sendConjureArchiveImport(id, closure_2_2, intl2.string(c1(c2[10]).Owerd3)), done: false };
                          return obj4;
                        }
                      } else {
                        if (1 === tmp4) {
                          c2 = 0;
                          const presentError = tmp(c2[7]).presentError;
                          const tmp8 = tmp(c2[7]);
                          const intl = tmp(c2[9]).intl;
                          presentError(intl.string(c1(c2[10])["Q+l4Hv"]));
                        } else if (arg0 === 1) {
                          c3 = 3;
                          throw value;
                        } else if (arg0 === 2) {
                          c2 = 0;
                          c3 = 3;
                          obj = { value, done: true };
                          return obj;
                        } else {
                          c2 = 0;
                        }
                        c3 = 3;
                        return { value: "HermesInternal", done: "+95" };
                      }
                    } catch (tmp24) {
                      if (0 === c2) {
                        c3 = 3;
                        throw tmp24;
                      } else {
                        c1 = 1;
                      }
                    }
                  }
                });
                showConfirmModal(obj7);
              } else {
                let tmp8 = closure_131_2;
                obj = closure_131_0(closure_131_2[7]);
                obj.presentError(closure_4);
              }
            }
            c5 = 3;
            return { value: "HermesInternal", done: "+95" };
          }
        } catch (tmp33) {
          c5 = 3;
          throw tmp33;
        }
      }
    })();
  });
  return obj(...arguments);
};
function deleteConjureProject(project, removeTarget) {
  let intl;
  let intl2;
  let intl3;
  let obj3;
  _require = project;
  if (null == removeTarget) {
    const obj2 = {
      key: "ConjureProjectDelete",
      title: intl.formatToPlainString(_modDef4245.CJBhb2, obj3),
      content: intl2.string(_modDef4245["0OmrVn"]),
      confirmText: intl3.string(require("intl").t.oyYWHE),
      onConfirm() {
          obj = ConjureActionCreators;
          const result = obj.deleteProjectInBackground(project.id, () => {
            const presentError = project(closure_1_2[7]).presentError;
            project(closure_1_2[7]);
            const intl = project(closure_1_2[9]).intl;
            return presentError(intl.string(closure_1_1(closure_1_2[10])["0XDHob"]));
          });
        }
    };
    const showConfirmModal = require("AlertModal").showConfirmModal;
    require("AlertModal");
    intl = require("intl").intl;
    obj3 = { name: project.name };
    intl2 = require("intl").intl;
    intl3 = require("intl").intl;
    showConfirmModal(obj2);
  } else {
    obj = { project, target: removeTarget, action: "delete" };
    openConjureRemoveAppAlertDefault(obj);
  }
}
obj = function _loadConjureProjectActions() {
  obj = _asyncToGenerator(async (arg0) => {
    let c3;
    let c4;
    let closure_1;
    let obj2;
    function conjureProjectActions(project) {
      let BellSlashIcon;
      let closure_4;
      let intl10;
      let intl2;
      let intl3;
      let intl4;
      let intl5;
      let intl6;
      let intl7;
      let intl8;
      let intl9;
      let muted;
      let onOpenSettings;
      let s9rCuH;
      let target;
      let tmp8;
      project = project.project;
      ({ guildId: closure_1, muted } = project);
      const removeTarget = project.removeTarget;
      ({ openChat: closure_4, onOpenSettings } = project);
      let c5;
      const onRemix = project.onRemix;
      const tmp = closure_11;
      const tmp2 = closure_11(project);
      const items = [];
      const push = items.push;
      let intl = project(muted[9]).intl;
      const string = intl.string;
      const tmp6 = closure_1(muted[10]);
      if (muted) {
        s9rCuH = tmp6.s9rCuH;
        tmp8 = tmp5;
      } else {
        s9rCuH = tmp6["a+i/As"];
        tmp8 = tmp5;
      }
      obj = {
        label: string(s9rCuH),
        IconComponent: BellSlashIcon,
        action() {
          obj = closure_2_0(closure_2_2[20]);
          return obj.setConjureProjectMuted(project.id, !muted);
        }
      };
      if (muted) {
        BellSlashIcon = tmp3(tmp4[18]).BellIcon;
      } else {
        BellSlashIcon = tmp3(tmp4[19]).BellSlashIcon;
      }
      push(obj);
      if (closure_10(project)) {
        let obj2 = { label: intl2.string(tmp8(tmp4[10]).XWgAfc), IconComponent: project(tmp4[21]).PaperPlusIcon, action: onRemix };
        const push2 = items.push;
        intl2 = tmp3(tmp4[9]).intl;
        push2(obj2);
      }
      const push3 = items.push;
      const obj3 = {
        label: intl3.string(tmp8(muted[10]).WsEEP7),
        IconComponent: project(muted[22]).DownloadIcon,
        action() {
          if (currentUser != null) {
            tmp2();
          }
          closure_2_5(project.id);
          const id = tmp.id;
          const intl = closure_2_0(closure_2_2[9]).intl;
          closure_2_6(id, intl.string(closure_2_1(closure_2_2[10]).oU20rd));
        }
      };
      intl3 = tmp3(tmp4[9]).intl;
      push3(obj3);
      if (tmp2) {
        const push4 = items.push;
        const obj4 = {
          label: intl4.string(tmp8(muted[10]).rWGY3e),
          IconComponent: project(muted[23]).FileUpIcon,
          action() {
              const promise = importIntoProject(project, currentUser);
              promise.catch(() => {
                const presentError = project(muted[7]).presentError;
                project(muted[7]);
                const intl = project(muted[9]).intl;
                presentError(intl.string(closure_1_1(muted[10])["Q+l4Hv"]));
              });
            }
        };
        intl4 = tmp3(tmp4[9]).intl;
        push4(obj4);
      }
      const push5 = items.push;
      const obj5 = {
        label: intl5.string(project(muted[9]).t.WqhZss),
        IconComponent: project(muted[24]).LinkIcon,
        action() {
          const copy = closure_2_0(closure_2_2[11]).copy;
          closure_2_0(closure_2_2[11]);
          obj = closure_2_0(closure_2_2[12]);
          copy(obj.getChannelPermalink(closure_1, constants.CONJURE_PROJECT, project.id));
          const obj2 = closure_2_0(closure_2_2[7]);
          obj2.presentLinkCopied();
        }
      };
      intl5 = tmp3(tmp4[9]).intl;
      push5(obj5);
      const push6 = items.push;
      const obj6 = {
        label: intl6.string(tmp8(muted[10])["nm/zuU"]),
        IconComponent: project(muted[25]).IdIcon,
        action() {
          let intl;
          obj = closure_2_0(closure_2_2[11]);
          obj.copy(project.id);
          const obj2 = { text: intl.string(closure_2_1(closure_2_2[10]).CmfaZG), icon: closure_2_0(closure_2_2[14]).CopyIcon };
          const open = closure_2_1(closure_2_2[13]).open;
          closure_2_1(closure_2_2[13]);
          intl = closure_2_0(closure_2_2[9]).intl;
          open("CONJURE_PROJECT_ID_COPIED", obj2);
        }
      };
      intl6 = tmp3(tmp4[9]).intl;
      push6(obj6);
      let tmp15 = closure_9(project) && null != onOpenSettings;
      if (tmp15) {
        isAccessRefused = isAccessRefused.isAccessRefused;
        let id = project.id;
        currentUser = currentUser.getCurrentUser();
        let id1;
        if (currentUser != null) {
          id1 = currentUser.id;
        }
        tmp15 = !isAccessRefused(id, id1);
      }
      if (tmp15) {
        const push7 = items.push;
        const obj7 = { label: intl7.string(tmp8(muted[10]).FzfmQ8), IconComponent: project(muted[26]).SettingsIcon, action: onOpenSettings };
        intl7 = tmp3(tmp4[9]).intl;
        push7(obj7);
      }
      let result1 = tmp(project);
      if (result1) {
        const tmp3Result = project(muted[15]);
        result1 = tmp3Result.isPublishedConjureUserApp(project, publishStatus.getPublishStatus(project.id));
      }
      if (result1) {
        const push8 = items.push;
        const obj8 = {
          label: intl8.string(tmp8(muted[10]).jYAR58),
          IconComponent: project(muted[27]).EyeSlashIcon,
          destructive: true,
          action() {
              return closure_2_1(closure_2_2[28])(project);
            }
        };
        intl8 = tmp3(tmp4[9]).intl;
        push8(obj8);
      }
      const tmp3Result2 = project(muted[29]);
      const result = tmp3Result2.conjureAdminUnpublishTarget(project, removeTarget);
      c5 = result;
      if (null != result) {
        const push9 = items.push;
        const obj9 = {
          label: intl9.string(tmp8(muted[10]).mS61Dm),
          IconComponent: project(muted[27]).EyeSlashIcon,
          destructive: true,
          action() {
              obj = { project, target, action: "remove" };
              return closure_2_1(closure_2_2[16])(obj);
            }
        };
        intl9 = tmp3(tmp4[9]).intl;
        push9(obj9);
      }
      if (tmp2) {
        const push10 = items.push;
        const obj10 = {
          label: intl10.string(project(muted[9]).t.oyYWHE),
          IconComponent: project(muted[30]).TrashIcon,
          destructive: true,
          action() {
              closure_2_14(project, removeTarget);
            }
        };
        intl10 = tmp3(tmp4[9]).intl;
        push10(obj10);
      }
      return items;
    }
    let closure_0 = arg0;
    let c2 = 0;
    let obj5 = require("conjureAdminUnpublish");
    await obj5.loadConjureAdminUnpublishLookup(closure_0.project);
    obj = { removeTarget: obj2.readConjureRemoveTarget(closure_0.project) };
    const merged = Object.assign(closure_0);
    obj2 = closure_130_0(closure_130_2[15]);
    return conjureProjectActions(obj);
  });
  return obj(...arguments);
};
let ConjureConnectionStore = ConjureConnectionStore_mod;
({ ensureConnection: hasOwnProperty, sendUserMessage: metroRequire } = ConjureConnectionStore);
ConjureConnectionStore = ConjureConnectionStore_mod;
({ canPublishProject: c9, canRemixProject: c10, isProjectOwner: unpackModuleId } = ConjureProjectStore);
const StaticChannelRoute = ChannelConstants.StaticChannelRoute;
let result = size.fileFinishedImporting("modules/conjure/projects/native/conjureProjectActions.tsx");

export function exportConjureProject(project, fn) {
  if (fn != null) {
    fn();
  }
  hasOwnProperty(project.id);
  const id = project.id;
  const intl = intl11.intl;
  metroRequire(id, intl.string(_modDef4245.oU20rd));
}
export function importConjureProject(project, arg1) {
  const promise = importIntoProject(project, arg1);
  promise.catch(() => {
    const presentError = project(muted[7]).presentError;
    project(muted[7]);
    const intl = project(muted[9]).intl;
    presentError(intl.string(closure_1_1(muted[10])["Q+l4Hv"]));
  });
}
export function copyConjureProjectLink(project, guild_id) {
  const copy = ClipboardUtils.copy;
  ClipboardUtils;
  obj = ChannelUtils;
  copy(obj.getChannelPermalink(guild_id, StaticChannelRoute.CONJURE_PROJECT, project.id));
  const obj2 = ToastUtils;
  obj2.presentLinkCopied();
}
export function copyConjureProjectId(project) {
  let intl;
  obj = ClipboardUtils;
  obj.copy(project.id);
  const obj2 = { text: intl.string(_modDef4245.CmfaZG), icon: CopyIcon.CopyIcon };
  const open = ToastActionCreatorsDefault.open;
  ToastActionCreatorsDefault;
  intl = intl11.intl;
  open("CONJURE_PROJECT_ID_COPIED", obj2);
}
export function canUnpublishConjureUserApp(project) {
  let result = unpackModuleId(project);
  if (result) {
    obj = conjureRemoveApp;
    result = obj.isPublishedConjureUserApp(project, ConjurePublishStatusStore.getPublishStatus(project.id));
  }
  return result;
}
export { deleteConjureProject };
export function loadConjureProjectActions() {
  return obj(...arguments);
}
