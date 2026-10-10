// Module ID: 11819
// Function ID: 11820
// Name: AppDetailsOverflowMenu
// Dependencies: [109, 19, 21, 558, 576, 9246, 10861, 1126, 10609, 2041, 6885, 4808, 10016, 7573, 8771, 9362, 2]

// Module 11819 (AppDetailsOverflowMenu)
import Fragment from "Fragment" /* 21 */;
import ToastUtils from "ToastUtils" /* 4808 */;
import ClipboardUtils from "ClipboardUtils" /* 6885 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let closure_3 = ["ref"];
const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function AppDetailsOverflowMenu(application) {
  let onAddAppMenuClick;
  let tmp10;
  let tmp5;
  let tmp = _require;
  let obj = require("react");
  const cResult = obj.c(18);
  application = application.application;
  onAddAppMenuClick = application.onAddAppMenuClick;
  if (cResult[0] !== application) {
    const tmpResult = tmp(onAddAppMenuClick[5]);
    const installAppProps = tmpResult.getInstallAppProps(application);
    _require = installAppProps;
    const tmpResult2 = tmp(onAddAppMenuClick[6]);
    const result = tmpResult2.canInstallApplication(installAppProps);
    cResult[0] = application;
    cResult[1] = installAppProps;
    cResult[2] = result;
    tmp5 = result;
  } else {
    _require = cResult[1];
    tmp5 = cResult[2];
  }
  if (cResult[3] === application) {
    if (cResult[4] === tmp5) {
      if (cResult[5] === tmp4) {
        let arr;
        if (cResult[6] === onAddAppMenuClick) {
          arr = cResult[7];
        }
        let tmp17 = null;
        if (0 !== arr.length) {
          let tmp18;
          let tmp19;
          const _Symbol3 = Symbol;
          if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
            class I {
              constructor(ref) {
                ref = ref.ref;
                const tmp = _objectWithoutProperties(ref, closure_1_3);
                const IconButton = installAppProps(onAddAppMenuClick[13]).IconButton;
                const merged = Object.assign(tmp);
                const intl = installAppProps(onAddAppMenuClick[7]).intl;
                return <IconButton ref={ref} size="sm" variant="secondary-overlay" icon={application(onAddAppMenuClick[14])} accessibilityLabel={intl.string(installAppProps(onAddAppMenuClick[7]).t.PdRCRg)} maxFontSizeMultiplier={1.5} />;
              }
            }
            cResult[15] = I;
            tmp18 = I;
          } else {
            class I {
              constructor(ref) {
                ref = ref.ref;
                const tmp = _objectWithoutProperties(ref, closure_1_3);
                const IconButton = installAppProps(onAddAppMenuClick[13]).IconButton;
                const merged = Object.assign(tmp);
                const intl = installAppProps(onAddAppMenuClick[7]).intl;
                return <IconButton ref={ref} size="sm" variant="secondary-overlay" icon={application(onAddAppMenuClick[14])} accessibilityLabel={intl.string(installAppProps(onAddAppMenuClick[7]).t.PdRCRg)} maxFontSizeMultiplier={1.5} />;
              }
            }
          }
          if (cResult[16] !== arr) {
            class I {
              constructor(ref) {
                ref = ref.ref;
                const tmp = _objectWithoutProperties(ref, closure_1_3);
                const IconButton = installAppProps(onAddAppMenuClick[13]).IconButton;
                const merged = Object.assign(tmp);
                const intl = installAppProps(onAddAppMenuClick[7]).intl;
                return <IconButton ref={ref} size="sm" variant="secondary-overlay" icon={application(onAddAppMenuClick[14])} accessibilityLabel={intl.string(installAppProps(onAddAppMenuClick[7]).t.PdRCRg)} maxFontSizeMultiplier={1.5} />;
              }
            }
            const tmp20 = jsx(tmp(onAddAppMenuClick[15]).ContextMenu, { items: arr, children: tmp18 });
            cResult[16] = arr;
            cResult[17] = tmp20;
            tmp19 = tmp20;
          } else {
            class I {
              constructor(ref) {
                ref = ref.ref;
                const tmp = _objectWithoutProperties(ref, closure_1_3);
                const IconButton = installAppProps(onAddAppMenuClick[13]).IconButton;
                const merged = Object.assign(tmp);
                const intl = installAppProps(onAddAppMenuClick[7]).intl;
                return <IconButton ref={ref} size="sm" variant="secondary-overlay" icon={application(onAddAppMenuClick[14])} accessibilityLabel={intl.string(installAppProps(onAddAppMenuClick[7]).t.PdRCRg)} maxFontSizeMultiplier={1.5} />;
              }
            }
          }
          tmp17 = tmp19;
        }
        return tmp17;
      }
    }
  }
  const items = [];
  if (tmp5) {
    class I {
      constructor(ref) {
        ref = ref.ref;
        const tmp = _objectWithoutProperties(ref, closure_1_3);
        const IconButton = installAppProps(onAddAppMenuClick[13]).IconButton;
        const merged = Object.assign(tmp);
        const intl = installAppProps(onAddAppMenuClick[7]).intl;
        return <IconButton ref={ref} size="sm" variant="secondary-overlay" icon={application(onAddAppMenuClick[14])} accessibilityLabel={intl.string(installAppProps(onAddAppMenuClick[7]).t.PdRCRg)} maxFontSizeMultiplier={1.5} />;
      }
    }
    if (null != onAddAppMenuClick) {
      let tmp8;
      class I {
        constructor(ref) {
          ref = ref.ref;
          const tmp = _objectWithoutProperties(ref, closure_1_3);
          const IconButton = installAppProps(onAddAppMenuClick[13]).IconButton;
          const merged = Object.assign(tmp);
          const intl = installAppProps(onAddAppMenuClick[7]).intl;
          return <IconButton ref={ref} size="sm" variant="secondary-overlay" icon={application(onAddAppMenuClick[14])} accessibilityLabel={intl.string(installAppProps(onAddAppMenuClick[7]).t.PdRCRg)} maxFontSizeMultiplier={1.5} />;
        }
      }
      const _Symbol2 = Symbol;
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        class I {
          constructor(ref) {
            ref = ref.ref;
            const tmp = _objectWithoutProperties(ref, closure_1_3);
            const IconButton = installAppProps(onAddAppMenuClick[13]).IconButton;
            const merged = Object.assign(tmp);
            const intl = installAppProps(onAddAppMenuClick[7]).intl;
            return <IconButton ref={ref} size="sm" variant="secondary-overlay" icon={application(onAddAppMenuClick[14])} accessibilityLabel={intl.string(installAppProps(onAddAppMenuClick[7]).t.PdRCRg)} maxFontSizeMultiplier={1.5} />;
          }
        }
        const stringResult = obj4.string(tmp(onAddAppMenuClick[7]).t.NgXl3C);
        cResult[8] = stringResult;
        tmp8 = stringResult;
      } else {
        class I {
          constructor(ref) {
            ref = ref.ref;
            const tmp = _objectWithoutProperties(ref, closure_1_3);
            const IconButton = installAppProps(onAddAppMenuClick[13]).IconButton;
            const merged = Object.assign(tmp);
            const intl = installAppProps(onAddAppMenuClick[7]).intl;
            return <IconButton ref={ref} size="sm" variant="secondary-overlay" icon={application(onAddAppMenuClick[14])} accessibilityLabel={intl.string(installAppProps(onAddAppMenuClick[7]).t.PdRCRg)} maxFontSizeMultiplier={1.5} />;
          }
        }
      }
      if (cResult[9] === tmp4) {
        class I {
          constructor(ref) {
            ref = ref.ref;
            const tmp = _objectWithoutProperties(ref, closure_1_3);
            const IconButton = installAppProps(onAddAppMenuClick[13]).IconButton;
            const merged = Object.assign(tmp);
            const intl = installAppProps(onAddAppMenuClick[7]).intl;
            return <IconButton ref={ref} size="sm" variant="secondary-overlay" icon={application(onAddAppMenuClick[14])} accessibilityLabel={intl.string(installAppProps(onAddAppMenuClick[7]).t.PdRCRg)} maxFontSizeMultiplier={1.5} />;
          }
        }
        items.push(tmp10);
      }
      const obj3 = {
        label: tmp8,
        action() {
              const obj = { installAppProps };
              return onAddAppMenuClick(obj);
            },
        IconComponent: tmp(onAddAppMenuClick[8]).CirclePlusIcon
      };
      cResult[9] = tmp4;
      cResult[10] = onAddAppMenuClick;
      cResult[11] = obj3;
      tmp10 = obj3;
    }
  }
  const DeveloperMode = tmp(tmp2[9]).DeveloperMode;
  if (DeveloperMode.getSetting()) {
    let tmp12;
    let tmp14;
    class I {
      constructor(ref) {
        ref = ref.ref;
        const tmp = _objectWithoutProperties(ref, closure_1_3);
        const IconButton = installAppProps(onAddAppMenuClick[13]).IconButton;
        const merged = Object.assign(tmp);
        const intl = installAppProps(onAddAppMenuClick[7]).intl;
        return <IconButton ref={ref} size="sm" variant="secondary-overlay" icon={application(onAddAppMenuClick[14])} accessibilityLabel={intl.string(installAppProps(onAddAppMenuClick[7]).t.PdRCRg)} maxFontSizeMultiplier={1.5} />;
      }
    }
    const _Symbol = Symbol;
    if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
      class I {
        constructor(ref) {
          ref = ref.ref;
          const tmp = _objectWithoutProperties(ref, closure_1_3);
          const IconButton = installAppProps(onAddAppMenuClick[13]).IconButton;
          const merged = Object.assign(tmp);
          const intl = installAppProps(onAddAppMenuClick[7]).intl;
          return <IconButton ref={ref} size="sm" variant="secondary-overlay" icon={application(onAddAppMenuClick[14])} accessibilityLabel={intl.string(installAppProps(onAddAppMenuClick[7]).t.PdRCRg)} maxFontSizeMultiplier={1.5} />;
        }
      }
      const stringResult1 = obj6.string(tmp(onAddAppMenuClick[7]).t["+NP/b2"]);
      cResult[12] = stringResult1;
      tmp12 = stringResult1;
    } else {
      class I {
        constructor(ref) {
          ref = ref.ref;
          const tmp = _objectWithoutProperties(ref, closure_1_3);
          const IconButton = installAppProps(onAddAppMenuClick[13]).IconButton;
          const merged = Object.assign(tmp);
          const intl = installAppProps(onAddAppMenuClick[7]).intl;
          return <IconButton ref={ref} size="sm" variant="secondary-overlay" icon={application(onAddAppMenuClick[14])} accessibilityLabel={intl.string(installAppProps(onAddAppMenuClick[7]).t.PdRCRg)} maxFontSizeMultiplier={1.5} />;
        }
      }
    }
    if (cResult[13] !== application) {
      class I {
        constructor(ref) {
          ref = ref.ref;
          const tmp = _objectWithoutProperties(ref, closure_1_3);
          const IconButton = installAppProps(onAddAppMenuClick[13]).IconButton;
          const merged = Object.assign(tmp);
          const intl = installAppProps(onAddAppMenuClick[7]).intl;
          return <IconButton ref={ref} size="sm" variant="secondary-overlay" icon={application(onAddAppMenuClick[14])} accessibilityLabel={intl.string(installAppProps(onAddAppMenuClick[7]).t.PdRCRg)} maxFontSizeMultiplier={1.5} />;
        }
      }
      tmp15[0] = tmp12;
      tmp15[1] = function action() {
        const obj = ClipboardUtils;
        obj.copy(application.id);
        const obj2 = ToastUtils;
        obj2.presentIdCopied();
      };
      tmp15[2] = tmp(onAddAppMenuClick[12]).IdIcon;
      cResult[13] = application;
      cResult[14] = tmp15;
      tmp14 = tmp15;
    } else {
      class I {
        constructor(ref) {
          ref = ref.ref;
          const tmp = _objectWithoutProperties(ref, closure_1_3);
          const IconButton = installAppProps(onAddAppMenuClick[13]).IconButton;
          const merged = Object.assign(tmp);
          const intl = installAppProps(onAddAppMenuClick[7]).intl;
          return <IconButton ref={ref} size="sm" variant="secondary-overlay" icon={application(onAddAppMenuClick[14])} accessibilityLabel={intl.string(installAppProps(onAddAppMenuClick[7]).t.PdRCRg)} maxFontSizeMultiplier={1.5} />;
        }
      }
    }
    items.push(tmp14);
  }
  cResult[3] = application;
  cResult[4] = tmp5;
  cResult[5] = tmp4;
  cResult[6] = onAddAppMenuClick;
  cResult[7] = items;
  arr = items;
}) : (function AppDetailsOverflowMenu(application) {
  let intl;
  let intl2;
  application = application.application;
  const onAddAppMenuClick = application.onAddAppMenuClick;
  let installAppProps;
  let obj = application(installAppProps[5]);
  installAppProps = obj.getInstallAppProps(application);
  let obj2 = application(installAppProps[6]);
  const result = obj2.canInstallApplication(installAppProps) && null != onAddAppMenuClick;
  const items = [];
  if (result) {
    const push = items.push;
    const obj3 = {
      label: intl.string(application(installAppProps[7]).t.NgXl3C),
      action() {
          const obj = { installAppProps };
          return onAddAppMenuClick(obj);
        },
      IconComponent: application(installAppProps[8]).CirclePlusIcon
    };
    intl = tmp(tmp2[7]).intl;
    push(obj3);
  }
  const DeveloperMode = tmp(tmp2[9]).DeveloperMode;
  if (DeveloperMode.getSetting()) {
    const push2 = items.push;
    const obj4 = {
      label: intl2.string(application(installAppProps[7]).t["+NP/b2"]),
      action() {
          const obj = ClipboardUtils;
          obj.copy(application.id);
          const obj2 = ToastUtils;
          obj2.presentIdCopied();
        },
      IconComponent: application(installAppProps[12]).IdIcon
    };
    intl2 = tmp(tmp2[7]).intl;
    push2(obj4);
  }
  let tmp8 = null;
  if (0 !== items.length) {
    tmp8 = jsx(tmp(tmp2[15]).ContextMenu, {
      items,
      children(ref) {
          ref = ref.ref;
          const merged = Object.assign(ref, Object.assign({ ref: 0 }));
          const IconButton = application(installAppProps[13]).IconButton;
          const merged1 = Object.assign(merged);
          const intl = application(installAppProps[7]).intl;
          return <IconButton ref={ref} size="sm" variant="secondary-overlay" icon={onAddAppMenuClick(installAppProps[14])} accessibilityLabel={intl.string(application(installAppProps[7]).t.PdRCRg)} maxFontSizeMultiplier={1.5} />;
        }
    });
  }
  return tmp8;
});
let result = size.fileFinishedImporting("modules/app_launcher/native/screens/application_view/app/AppDetailsOverflowMenu.tsx");

export default tmp3;
