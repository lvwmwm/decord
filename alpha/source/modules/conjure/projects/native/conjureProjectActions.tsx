// Module ID: 13310
// Function ID: 13311
// Name: conjureProjectActions
// Dependencies: [5, 7365, 7377, 7017, 5162, 13311, 6014, 6274, 1113, 4131, 7943, 6356, 6015, 6033, 13206, 13312, 13207, 7329, 10996, 10994, 7332, 10976, 6035, 13317, 6029, 11629, 10569, 13189, 10939, 12295, 13319, 10553, 13320, 7633, 13321, 6040, 2]
// Exports: canUnpublishConjureUserApp, conjureProjectActions, copyConjureProjectId, copyConjureProjectLink, exportConjureProject, importConjureProject, openConjureAddToAnotherServerSheet

// Module 13310 (conjureProjectActions)
import intl13 from "intl" /* 1113 */;
import _modDef4131 from "module_4131" /* 4131 */;
import ChannelConstants from "ChannelConstants" /* 5162 */;
import ToastUtils from "ToastUtils" /* 6014 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 6015 */;
import CopyIcon from "CopyIcon" /* 6033 */;
import ChannelUtils from "ChannelUtils" /* 6356 */;
import ConjureActionCreators from "ConjureActionCreators" /* 7329 */;
import conjureProjectMute from "conjureProjectMute" /* 7332 */;
import ClipboardUtils from "ClipboardUtils" /* 7943 */;
import conjureRemoveApp from "conjureRemoveApp" /* 13206 */;
import openConjureRemoveAppAlertDefault from "openConjureRemoveAppAlert" /* 13207 */;
import showConjureShareToServerSheetDefault from "showConjureShareToServerSheet" /* 13312 */;
import openConjureMakePersonalAlertDefault from "openConjureMakePersonalAlert" /* 13320 */;
import openConjureUnpublishUserAppAlertDefault from "openConjureUnpublishUserAppAlert" /* 13321 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import ConjureConnectionStore from "ConjureConnectionStore" /* 7365 */;
import ConjurePublishStatusStore from "ConjurePublishStatusStore" /* 7377 */;
import ConjureProjectStore from "ConjureProjectStore" /* 7017 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c1, c3, closure_2, closure_3;

let c9;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
function importIntoProject() {
  return closure_1_11(...arguments);
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
              const obj9 = closure_131_0(closure_131_2[5]);
              closure_4 = obj9.describeConjureArchiveRejection(closure_2);
              if (null == closure_4) {
                const tmp15 = closure_131_0(closure_131_2[7]);
                let tmp17 = closure_131_2;
                const showConfirmModal = tmp15.showConfirmModal;
                const obj7 = {
                  key: "ConjureImportOverwrite",
                  title: intl.formatToPlainString(closure_131_1(closure_131_2[9])["Gm+u1+"], obj8),
                  content: intl2.string(closure_131_1(closure_131_2[9]).M7H3sJ),
                  confirmText: intl3.string(closure_131_1(closure_131_2[9]).gFHykw),
                  onConfirm() {
                              return closure_1_3(...arguments);
                            }
                };
                intl = closure_131_0(closure_131_2[8]).intl;
                obj8 = { name: name.name };
                intl2 = closure_131_0(closure_131_2[8]).intl;
                const tmp24 = closure_131_0;
                intl3 = closure_131_0(closure_131_2[8]).intl;
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
                          const sendConjureArchiveImport = tmp(c2[5]).sendConjureArchiveImport;
                          id = id.id;
                          const tmp17 = tmp(c2[5]);
                          const intl2 = tmp(c2[8]).intl;
                          c1 = 2;
                          c3 = 1;
                          const obj4 = { value: sendConjureArchiveImport(id, closure_2_2, intl2.string(c1(c2[9]).Owerd3)), done: false };
                          return obj4;
                        }
                      } else {
                        if (1 === tmp4) {
                          c2 = 0;
                          const presentError = tmp(c2[6]).presentError;
                          const tmp8 = tmp(c2[6]);
                          const intl = tmp(c2[8]).intl;
                          presentError(intl.string(c1(c2[9])["Q+l4Hv"]));
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
                obj = closure_131_0(closure_131_2[6]);
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
function deleteConjureProject(project, removeTarget) {
  let intl;
  let intl2;
  let intl3;
  let obj3;
  _require = project;
  if (null == removeTarget) {
    const obj2 = {
      key: "ConjureProjectDelete",
      title: intl.formatToPlainString(_modDef4131.CJBhb2, obj3),
      content: intl2.string(_modDef4131["0OmrVn"]),
      confirmText: intl3.string(require("intl").t.oyYWHE),
      onConfirm() {
          obj = ConjureActionCreators;
          const result = obj.deleteProjectInBackground(project.id, () => {
            const presentError = project(closure_1_2[6]).presentError;
            project(closure_1_2[6]);
            const intl = project(closure_1_2[8]).intl;
            return presentError(intl.string(closure_1_1(closure_1_2[9])["0XDHob"]));
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
({ ensureConnection: closure_4, sendUserMessage: hasOwnProperty } = ConjureConnectionStore);
({ canPublishProject: metroImportDefault, canRemixProject: metroImportAll, isProjectOwner: c9 } = ConjureProjectStore);
const StaticChannelRoute = ChannelConstants.StaticChannelRoute;
let result = size.fileFinishedImporting("modules/conjure/projects/native/conjureProjectActions.tsx");

export function exportConjureProject(project, fn) {
  if (fn != null) {
    fn();
  }
  React3(project.id);
  const id = project.id;
  const intl = intl13.intl;
  hasOwnProperty(id, intl.string(_modDef4131.oU20rd));
}
export function importConjureProject(project, arg1) {
  const promise = importIntoProject(project, arg1);
  promise.catch(() => {
    const presentError = project(muted[6]).presentError;
    project(muted[6]);
    const intl = project(muted[8]).intl;
    presentError(intl.string(guildId(muted[9])["Q+l4Hv"]));
  });
}
export function copyConjureProjectLink(project, guild_id) {
  const copy = ClipboardUtils.copy;
  ClipboardUtils;
  obj = ChannelUtils;
  copy(obj.getChannelPermalink(guild_id, StaticChannelRoute.CONJURE, project.id));
  const obj2 = ToastUtils;
  obj2.presentLinkCopied();
}
export function copyConjureProjectId(project) {
  let intl;
  obj = ClipboardUtils;
  obj.copy(project.id);
  const obj2 = { text: intl.string(_modDef4131.CmfaZG), icon: CopyIcon.CopyIcon };
  const open = ToastActionCreatorsDefault.open;
  ToastActionCreatorsDefault;
  intl = intl13.intl;
  open("CONJURE_PROJECT_ID_COPIED", obj2);
}
export function canUnpublishConjureUserApp(project) {
  let result = React4(project);
  if (result) {
    obj = conjureRemoveApp;
    result = obj.isPublishedConjureUserApp(project, ConjurePublishStatusStore.getPublishStatus(project.id));
  }
  return result;
}
export function openConjureAddToAnotherServerSheet(id, guildId) {
  obj = { projectId: id, guildId, publishOptions: null, addingToAnother: true };
  showConjureShareToServerSheetDefault(obj);
}
export { deleteConjureProject };
export function conjureProjectActions(project) {
  let BellSlashIcon;
  let closure_4;
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
  let intl9;
  let obj10;
  let onOpenSettings;
  let s9rCuH;
  let tmp8;
  project = project.project;
  const guildId = project.guildId;
  const muted = project.muted;
  const removeTarget = project.removeTarget;
  ({ openChat: closure_4, onOpenSettings } = project);
  let conjureViewedRemoveTarget;
  const onRemix = project.onRemix;
  const tmp = closure_9;
  const tmp2 = closure_9(project);
  const items = [];
  const push = items.push;
  let intl = project(muted[8]).intl;
  const string = intl.string;
  const tmp6 = guildId(muted[9]);
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
  if (closure_8(project)) {
    let obj2 = { label: intl2.string(tmp8(tmp4[9])["276ll6"]), IconComponent: project(tmp4[21]).PaperPlusIcon, action: onRemix };
    const push2 = items.push;
    intl2 = tmp3(tmp4[8]).intl;
    push2(obj2);
  }
  const push3 = items.push;
  const obj3 = {
    label: intl3.string(tmp8(muted[9]).WsEEP7),
    IconComponent: project(muted[22]).DownloadIcon,
    action() {
      if (closure_4 != null) {
        tmp2();
      }
      React3(project.id);
      const id = tmp.id;
      const intl = intl13.intl;
      hasOwnProperty(id, intl.string(_modDef4131.oU20rd));
    }
  };
  intl3 = tmp3(tmp4[8]).intl;
  push3(obj3);
  if (tmp2) {
    const push4 = items.push;
    const obj4 = {
      label: intl4.string(tmp8(muted[9]).rWGY3e),
      IconComponent: project(muted[23]).FileUpIcon,
      action() {
          const promise = importIntoProject(project, closure_4);
          promise.catch(() => {
            const presentError = project(muted[6]).presentError;
            project(muted[6]);
            const intl = project(muted[8]).intl;
            presentError(intl.string(guildId(muted[9])["Q+l4Hv"]));
          });
        }
    };
    intl4 = tmp3(tmp4[8]).intl;
    push4(obj4);
  }
  const push5 = items.push;
  const obj5 = {
    label: intl5.string(project(muted[8]).t.WqhZss),
    IconComponent: project(muted[24]).LinkIcon,
    action() {
      const copy = ClipboardUtils.copy;
      ClipboardUtils;
      obj = ChannelUtils;
      copy(obj.getChannelPermalink(guildId, StaticChannelRoute.CONJURE, project.id));
      const obj2 = ToastUtils;
      obj2.presentLinkCopied();
    }
  };
  intl5 = tmp3(tmp4[8]).intl;
  push5(obj5);
  const push6 = items.push;
  const obj6 = {
    label: intl6.string(tmp8(muted[9])["nm/zuU"]),
    IconComponent: project(muted[25]).IdIcon,
    action() {
      let intl;
      obj = ClipboardUtils;
      obj.copy(project.id);
      const obj2 = { text: intl.string(_modDef4131.CmfaZG), icon: CopyIcon.CopyIcon };
      const open = ToastActionCreatorsDefault.open;
      ToastActionCreatorsDefault;
      intl = intl13.intl;
      open("CONJURE_PROJECT_ID_COPIED", obj2);
    }
  };
  intl6 = tmp3(tmp4[8]).intl;
  push6(obj6);
  const tmp15 = closure_7(project) && null != onOpenSettings;
  if (tmp15) {
    const push7 = items.push;
    const obj7 = { label: intl7.string(tmp8(muted[9]).FzfmQ8), IconComponent: project(muted[26]).SettingsIcon, action: onOpenSettings };
    intl7 = tmp3(tmp4[8]).intl;
    push7(obj7);
  }
  const tmp3Result = project(muted[27]);
  if (tmp3Result.canAddConjureProjectToAnotherServer(project, removeTarget, "ConjureProjectActions")) {
    const push8 = items.push;
    const obj8 = {
      label: intl8.string(tmp8(muted[9]).RBPj0b),
      IconComponent: project(muted[28]).ServerIcon,
      action() {
          obj = { projectId: project.id, guildId, publishOptions: null, addingToAnother: true };
          showConjureShareToServerSheetDefault(obj);
        }
    };
    intl8 = tmp3(tmp4[8]).intl;
    push8(obj8);
  }
  const tmp3Result5 = project(muted[14]);
  conjureViewedRemoveTarget = tmp3Result5.readConjureViewedRemoveTarget(project, guildId);
  let result = null != conjureViewedRemoveTarget;
  if (result) {
    const tmp3Result6 = project(muted[14]);
    result = tmp3Result6.canRemoveConjureAppFromServer(conjureViewedRemoveTarget, tmp2);
  }
  if (result) {
    const push9 = items.push;
    const obj9 = {
      label: intl9.formatToPlainString(tmp8(muted[9])["3gKG2j"], obj10),
      IconComponent: project(muted[29]).DoorExitIcon,
      destructive: true,
      action() {
          obj = { project, target: conjureViewedRemoveTarget, action: "remove" };
          return openConjureRemoveAppAlertDefault(obj);
        }
    };
    intl9 = tmp3(tmp4[8]).intl;
    obj10 = { server: conjureViewedRemoveTarget.guildName };
    push9(obj9);
  }
  const tmp3Result7 = project(muted[30]);
  const tmp22 = tmp3Result7.canMakeConjureProjectPersonal(project) && !result;
  if (tmp22) {
    const push10 = items.push;
    const obj11 = {
      label: intl10.string(tmp8(muted[9]).jNGawP),
      IconComponent: project(muted[31]).UserIcon,
      destructive: true,
      action() {
          obj = { project };
          return openConjureMakePersonalAlertDefault(obj);
        }
    };
    intl10 = tmp3(tmp4[8]).intl;
    push10(obj11);
  }
  let result1 = tmp(project);
  if (result1) {
    const tmp3Result8 = project(muted[14]);
    result1 = tmp3Result8.isPublishedConjureUserApp(project, ConjurePublishStatusStore.getPublishStatus(project.id));
  }
  if (result1) {
    const push11 = items.push;
    const obj12 = {
      label: intl11.string(tmp8(muted[9]).jYAR58),
      IconComponent: project(muted[33]).EyeSlashIcon,
      destructive: true,
      action() {
          return openConjureUnpublishUserAppAlertDefault(project);
        }
    };
    intl11 = tmp3(tmp4[8]).intl;
    push11(obj12);
  }
  if (tmp2) {
    const push12 = items.push;
    const obj13 = {
      label: intl12.string(project(muted[8]).t.oyYWHE),
      IconComponent: project(muted[35]).TrashIcon,
      destructive: true,
      action() {
          deleteConjureProject(project, removeTarget);
        }
    };
    intl12 = tmp3(tmp4[8]).intl;
    push12(obj13);
  }
  return items;
}
