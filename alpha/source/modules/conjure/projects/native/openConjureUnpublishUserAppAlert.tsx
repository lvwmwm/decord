// Module ID: 11570
// Function ID: 11571
// Name: openConjureUnpublishUserAppAlert
// Dependencies: [5, 32, 19, 5503, 21, 558, 576, 504, 10975, 1128, 3865, 4868, 5150, 5368, 5364, 2]
// Exports: default

// Module 11570 (openConjureUnpublishUserAppAlert)
import useAlertStore from "useAlertStore" /* 5364 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ApplicationStore from "ApplicationStore" /* 5503 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let app, c2, c3, importDefault;

let c9;
let metroImportAll;
let metroImportDefault;
({ jsx: metroImportDefault, Fragment: metroImportAll, jsxs: c9 } = Fragment);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureUnpublishUserAppAlert(project) {
  let first;
  let intl4;
  let items1;
  let stateFromStores;
  let tmp5;
  let tmp = project;
  let obj = project(stateFromStores[6]);
  const cResult = obj.c(23);
  project = project.project;
  let tmp4 = _slicedToArray(react.useState(null), 2);
  [tmp5, importDefault] = tmp4;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ApplicationStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === project.application_id) {
    let tmp8;
    let tmp9;
    if (cResult[2] === project.name) {
      tmp8 = cResult[3];
      tmp9 = cResult[4];
    }
    const tmpResult = tmp(stateFromStores[7]);
    stateFromStores = tmpResult.useStateFromStores(first, tmp8, tmp9);
    if (cResult[5] === stateFromStores) {
      let tmp11;
      let tmp13;
      let tmp16;
      let tmp19;
      let tmp22;
      let tmp25;
      let tmp28;
      let tmp31;
      if (cResult[6] === project.id) {
        tmp11 = cResult[7];
      }
      if (cResult[8] !== stateFromStores) {
        let intl = tmp(tmp2[9]).intl;
        let obj2 = { app: stateFromStores };
        const formatToPlainStringResult = intl.formatToPlainString(require("module_3865").m8KWic, obj2);
        cResult[8] = stateFromStores;
        cResult[9] = formatToPlainStringResult;
        tmp13 = formatToPlainStringResult;
      } else {
        tmp13 = cResult[9];
      }
      const _Symbol = Symbol;
      if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
        let intl2 = tmp(tmp2[9]).intl;
        const stringResult = intl2.string(require("module_3865").wve4kB);
        cResult[10] = stringResult;
        tmp16 = stringResult;
      } else {
        tmp16 = cResult[10];
      }
      if (cResult[11] !== tmp5) {
        let tmp20;
        if (null != tmp5) {
          let tmp21 = closure_7;
          let obj3 = { variant: "text-sm/medium", color: "text-feedback-critical", children: tmp5 };
          tmp20 = closure_7(tmp(tmp2[12]).Text, obj3);
        }
        cResult[11] = tmp5;
        cResult[12] = tmp20;
        tmp19 = tmp20;
      } else {
        tmp19 = cResult[12];
      }
      const _Symbol2 = Symbol;
      if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
        const intl3 = tmp(tmp2[9]).intl;
        const stringResult1 = intl3.string(require("module_3865").GqcQyH);
        cResult[13] = stringResult1;
        tmp22 = stringResult1;
      } else {
        tmp22 = cResult[13];
      }
      if (cResult[14] !== tmp11) {
        let obj4 = { variant: "destructive", text: tmp22, onPress: tmp11 };
        const tmp27 = closure_7(tmp(stateFromStores[13]).AlertActionButton, obj4);
        cResult[14] = tmp11;
        cResult[15] = tmp27;
        tmp25 = tmp27;
      } else {
        tmp25 = cResult[15];
      }
      const _Symbol3 = Symbol;
      if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
        let obj5 = { variant: "secondary", text: intl4.string(tmp(tmp2[9]).t["ETE/oC"]) };
        const AlertActionButton = tmp(tmp2[13]).AlertActionButton;
        intl4 = tmp(tmp2[9]).intl;
        const tmp30 = closure_7(AlertActionButton, obj5);
        cResult[16] = tmp30;
        tmp28 = tmp30;
      } else {
        tmp28 = cResult[16];
      }
      if (cResult[17] !== tmp25) {
        let obj6 = { children: items1 };
        items1 = [tmp25, tmp28];
        const tmp34 = closure_9(closure_8, obj6);
        cResult[17] = tmp25;
        cResult[18] = tmp34;
        tmp31 = tmp34;
      } else {
        tmp31 = cResult[18];
      }
      if (cResult[19] === tmp31) {
        if (cResult[20] === tmp13) {
          let tmp35;
          if (cResult[21] === tmp19) {
            tmp35 = cResult[22];
          }
          return tmp35;
        }
      }
      let obj7 = { title: tmp13, content: tmp16, extraContent: tmp19, actions: tmp31 };
      const tmp37 = closure_7(tmp(stateFromStores[13]).AlertModal, obj7);
      class A {
        constructor() {
          const application = ApplicationStore.getApplication(project.application_id);
          let name;
          const tmp = project;
          if (application != null) {
            name = application.name;
          }
          if (name == null) {
            name = tmp.name;
          }
          return name;
        }
      }
      cResult[19] = tmp31;
      cResult[20] = tmp13;
      cResult[21] = tmp19;
      cResult[22] = tmp37;
      tmp35 = tmp37;
    }
    let closure_0 = _asyncToGenerator(async function(arg0, value) {
      let closure_1;
      let intl2;
      let obj4;
      let obj7;
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
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let tmp4;
          c3 = 2;
          if (0 === app) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              tmp4 = undefined;
              tmp(null);
              app = 1;
              c3 = 1;
              const obj5 = { value: obj4.unpublishUserApp(tmp4.id), done: false };
              obj4 = tmp4(stateFromStores[8]);
              return obj5;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else if (value) {
            const obj = { text: intl2.formatToPlainString(require("module_3865").b8LN7N, obj7), variant: "success" };
            const open = require("ToastActionCreators").open;
            const tmp21 = require("ToastActionCreators");
            intl2 = tmp4(stateFromStores[9]).intl;
            obj7 = { app };
            open("CONJURE_USER_APP_UNPUBLISHED", obj);
            c3 = 3;
            return { value: "IconComponent", done: null };
          } else {
            const intl = tmp4(stateFromStores[9]).intl;
            tmp4 = intl.string(require("module_3865")["rE/0SD"]);
            tmp(tmp4);
            const _Error = Error;
            const self = this;
            const self2 = this;
            const error = new Error(tmp4);
            throw error;
          }
        } catch (tmp34) {
          c3 = 3;
          throw tmp34;
        }
      }
    });
    function submit() {
      return closure_0(...arguments);
    }
    cResult[5] = stateFromStores;
    cResult[6] = project.id;
    cResult[7] = submit;
    tmp11 = submit;
  }
  class A {
    constructor() {
      const application = ApplicationStore.getApplication(project.application_id);
      let name;
      const tmp = project;
      if (application != null) {
        name = application.name;
      }
      if (name == null) {
        name = tmp.name;
      }
      return name;
    }
  }
  const items2 = [, ];
  ({ application_id: arr2[0], name: arr2[1] } = project);
  ({ application_id: tmp3[1], name: tmp3[2] } = project);
  cResult[3] = A;
  cResult[4] = items2;
  tmp9 = items2;
  tmp8 = A;
}) : (function ConjureUnpublishUserAppAlert(project) {
  let _undefined;
  let c1;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items2;
  let obj4;
  let tmp2;
  let tmp6Result;
  project = project.project;
  importDefault = undefined;
  let stateFromStores;
  let obj = function _submit2() {
    let id;
    obj = _asyncToGenerator(async function(arg0, value) {
      let closure_0;
      let closure_1;
      let intl2;
      let obj7;
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
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let tmp;
          c3 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              tmp = undefined;
              _undefined(null);
              const obj4 = tmp(c2[8]);
              c2 = 1;
              c3 = 1;
              const obj5 = { value: obj4.unpublishUserApp(id.id), done: false };
              return obj5;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else if (value) {
            obj = { text: intl2.formatToPlainString(tmp4(c2[10]).b8LN7N, obj7), variant: "success" };
            const open = tmp4(c2[11]).open;
            const tmp21 = tmp4(c2[11]);
            intl2 = tmp(c2[9]).intl;
            obj7 = { app: closure_129_2 };
            open("CONJURE_USER_APP_UNPUBLISHED", obj);
            c3 = 3;
            return { value: "IconComponent", done: null };
          } else {
            const intl = tmp(c2[9]).intl;
            tmp = intl.string(tmp4(c2[10])["rE/0SD"]);
            closure_129_1(tmp);
            const _Error = Error;
            const self = this;
            const self2 = this;
            const error = new Error(tmp);
            throw error;
          }
        } catch (tmp34) {
          c3 = 3;
          throw tmp34;
        }
      }
    });
    return obj(...arguments);
  };
  let tmp = _slicedToArray(react.useState(null), 2);
  [tmp2, c1] = tmp;
  const tmp3 = project;
  const tmp4 = stateFromStores;
  obj = project(stateFromStores[7]);
  const items = [ApplicationStore];
  const items1 = [, ];
  ({ application_id: arr2[0], name: arr2[1] } = project);
  stateFromStores = obj.useStateFromStores(items, () => {
    const application = ApplicationStore.getApplication(project.application_id);
    let name;
    const tmp = project;
    if (application != null) {
      name = application.name;
    }
    if (name == null) {
      name = tmp.name;
    }
    return name;
  }, items1);
  let obj2 = { title: intl.formatToPlainString(require("module_3865").m8KWic, { app: stateFromStores }), content: intl2.string(require("module_3865").wve4kB), extraContent: tmp6Result, actions: closure_9(closure_8, obj4) };
  const AlertModal = project(stateFromStores[13]).AlertModal;
  intl = project(stateFromStores[9]).intl;
  intl2 = project(stateFromStores[9]).intl;
  tmp6Result = undefined;
  const tmp7 = importDefault;
  if (null != tmp2) {
    let obj3 = { variant: "text-sm/medium", color: "text-feedback-critical", children: tmp2 };
    tmp6Result = tmp6(tmp3(tmp4[12]).Text, obj3);
  }
  obj4 = { children: items2 };
  let obj5 = {
    variant: "destructive",
    text: intl3.string(tmp7(tmp4[10]).GqcQyH),
    onPress: function submit() {
      return obj(...arguments);
    }
  };
  const AlertActionButton = tmp3(tmp4[13]).AlertActionButton;
  intl3 = tmp3(tmp4[9]).intl;
  items2 = [tmp6(AlertActionButton, obj5), ];
  let obj6 = { variant: "secondary", text: intl4.string(tmp3(tmp4[9]).t["ETE/oC"]) };
  const AlertActionButton2 = tmp3(tmp4[13]).AlertActionButton;
  intl4 = tmp3(tmp4[9]).intl;
  items2[1] = closure_7(AlertActionButton2, obj6);
  return closure_7(AlertModal, obj2);
});
const result = size.fileFinishedImporting("modules/conjure/projects/native/openConjureUnpublishUserAppAlert.tsx");

export default function openConjureUnpublishUserAppAlert(project) {
  const obj = useAlertStore;
  const obj2 = { project };
  obj.openAlert("ConjureUnpublishUserApp", metroImportDefault(closure_10, obj2));
};
