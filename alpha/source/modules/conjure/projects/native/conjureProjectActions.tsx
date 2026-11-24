// Module ID: 18429
// Function ID: 18430
// Name: conjureProjectActions
// Dependencies: [5, 1386, 7563, 7576, 6808, 4773, 18430, 5598, 5926, 1112, 4192, 7412, 6675, 5599, 5617, 12293, 18431, 7541, 8456, 11351, 7544, 11303, 5619, 16991, 5613, 10936, 10310, 7162, 18342, 5624, 2]
// Exports: canUnpublishConjureUserApp, conjureProjectActions, copyConjureProjectId, copyConjureProjectLink, exportConjureProject, importConjureProject

// Module 18429 (conjureProjectActions)
import intl10 from "intl" /* 1112 */;
import _modDef4192 from "module_4192" /* 4192 */;
import ChannelConstants from "ChannelConstants" /* 4773 */;
import ToastUtils from "ToastUtils" /* 5598 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5599 */;
import CopyIcon from "CopyIcon" /* 5617 */;
import ChannelUtils from "ChannelUtils" /* 6675 */;
import ClipboardUtils from "ClipboardUtils" /* 7412 */;
import ConjureActionCreators from "ConjureActionCreators" /* 7541 */;
import conjureProjectMute from "conjureProjectMute" /* 7544 */;
import conjureRemoveApp from "conjureRemoveApp" /* 12293 */;
import openConjureUnpublishUserAppAlertDefault from "openConjureUnpublishUserAppAlert" /* 18342 */;
import openConjureRemoveAppAlertDefault from "openConjureRemoveAppAlert" /* 18431 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import UserStore from "UserStore" /* 1386 */;
import ConjureConnectionStore_mod from "ConjureConnectionStore" /* 7563 */;
import ConjurePublishStatusStore from "ConjurePublishStatusStore" /* 7576 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6808 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c1, c3, closure_2, closure_3;

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
          return { value: "HermesInternal", done: null };
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
                      return { value: "HermesInternal", done: null };
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
                        return { value: "HermesInternal", done: null };
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
            return { value: "HermesInternal", done: null };
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
function deleteConjureProject(project, target) {
  let intl;
  let intl2;
  let intl3;
  let obj3;
  _require = project;
  if (null == target) {
    const obj2 = {
      key: "ConjureProjectDelete",
      title: intl.formatToPlainString(_modDef4192.CJBhb2, obj3),
      content: intl2.string(_modDef4192["0OmrVn"]),
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
    obj = { project, target, action: "delete" };
    openConjureRemoveAppAlertDefault(obj);
  }
}
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
  const intl = intl10.intl;
  metroRequire(id, intl.string(_modDef4192.oU20rd));
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
  const obj2 = { text: intl.string(_modDef4192.CmfaZG), icon: CopyIcon.CopyIcon };
  const open = ToastActionCreatorsDefault.open;
  ToastActionCreatorsDefault;
  intl = intl10.intl;
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
export function conjureProjectActions(project) {
  let BellSlashIcon;
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
  let tmp8;
  project = project.project;
  ({ guildId: importDefault, muted } = project);
  ({ removeTarget: _asyncToGenerator, openChat: UserStore, onOpenSettings } = project);
  const onRemix = project.onRemix;
  const tmp = closure_11;
  const tmp2 = closure_11(project);
  const items = [];
  const push = items.push;
  let intl = project(muted[9]).intl;
  const string = intl.string;
  const tmp6 = require("module_4192");
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
      obj = conjureProjectMute;
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
      if (UserStore != null) {
        tmp2();
      }
      hasOwnProperty(project.id);
      const id = tmp.id;
      const intl = intl10.intl;
      metroRequire(id, intl.string(_modDef4192.oU20rd));
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
          const promise = importIntoProject(project, UserStore);
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
      const copy = ClipboardUtils.copy;
      ClipboardUtils;
      obj = ChannelUtils;
      copy(obj.getChannelPermalink(importDefault, StaticChannelRoute.CONJURE_PROJECT, project.id));
      const obj2 = ToastUtils;
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
      obj = ClipboardUtils;
      obj.copy(project.id);
      const obj2 = { text: intl.string(_modDef4192.CmfaZG), icon: CopyIcon.CopyIcon };
      const open = ToastActionCreatorsDefault.open;
      ToastActionCreatorsDefault;
      intl = intl10.intl;
      open("CONJURE_PROJECT_ID_COPIED", obj2);
    }
  };
  intl6 = tmp3(tmp4[9]).intl;
  push6(obj6);
  let tmp15 = closure_9(project) && null != onOpenSettings;
  if (tmp15) {
    const isAccessRefused = ConjureConnectionStore.isAccessRefused;
    let id = project.id;
    const currentUser = UserStore.getCurrentUser();
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
  let result = tmp(project);
  if (result) {
    const tmp3Result = project(muted[15]);
    result = tmp3Result.isPublishedConjureUserApp(project, ConjurePublishStatusStore.getPublishStatus(project.id));
  }
  if (result) {
    const push8 = items.push;
    const obj8 = {
      label: intl8.string(tmp8(muted[10]).jYAR58),
      IconComponent: project(muted[27]).EyeSlashIcon,
      destructive: true,
      action() {
          return openConjureUnpublishUserAppAlertDefault(project);
        }
    };
    intl8 = tmp3(tmp4[9]).intl;
    push8(obj8);
  }
  if (tmp2) {
    const push9 = items.push;
    const obj9 = {
      label: intl9.string(project(muted[9]).t.oyYWHE),
      IconComponent: project(muted[29]).TrashIcon,
      destructive: true,
      action() {
          deleteConjureProject(project, _asyncToGenerator);
        }
    };
    intl9 = tmp3(tmp4[9]).intl;
    push9(obj9);
  }
  return items;
}
