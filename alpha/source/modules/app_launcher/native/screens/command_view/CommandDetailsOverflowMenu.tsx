// Module ID: 12146
// Function ID: 12147
// Name: CommandDetailsOverflowMenu
// Dependencies: [109, 19, 21, 558, 576, 4799, 1128, 7285, 5662, 10412, 7959, 9139, 9761, 2]

// Module 12146 (CommandDetailsOverflowMenu)
import Fragment from "Fragment" /* 21 */;
import ToastUtils from "ToastUtils" /* 5662 */;
import ClipboardUtils from "ClipboardUtils" /* 7285 */;
import AssetRegistryDefault from "AssetRegistry" /* 9139 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_3 = ["ref"];
const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function CommandDetailsOverflowMenu(commandId) {
  let tmp = commandId;
  let obj = commandId(576);
  const cResult = obj.c(6);
  commandId = commandId.commandId;
  const DeveloperMode = commandId(4799).DeveloperMode;
  if (null != commandId) {
    if (DeveloperMode.useSetting()) {
      let first;
      let tmp7;
      let tmp8;
      let tmp9;
      const _Symbol = Symbol;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let intl = tmp(1128).intl;
        const stringResult = intl.string(tmp(1128).t.oJ1Muw);
        cResult[0] = stringResult;
        first = stringResult;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== commandId) {
        let obj2 = {
          label: first,
          action() {
                  const obj = ClipboardUtils;
                  obj.copy(commandId);
                  const obj2 = ToastUtils;
                  obj2.presentIdCopied();
                },
          IconComponent: tmp(10412).IdIcon
        };
        const items = [obj2];
        cResult[1] = commandId;
        cResult[2] = items;
        tmp7 = items;
      } else {
        tmp7 = cResult[2];
      }
      const _Symbol2 = Symbol;
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function p(ref) {
          ref = ref.ref;
          const tmp = _objectWithoutProperties(ref, closure_1_3);
          const IconButton = commandId(dependencyMap[10]).IconButton;
          const merged = Object.assign(tmp);
          const intl = commandId(dependencyMap[6]).intl;
          return <IconButton ref={ref} size="sm" variant="secondary-overlay" icon={AssetRegistryDefault} accessibilityLabel={intl.string(commandId(dependencyMap[6]).t.PdRCRg)} maxFontSizeMultiplier={1.5} />;
        };
        cResult[3] = fn;
        tmp8 = fn;
      } else {
        tmp8 = cResult[3];
      }
      if (cResult[4] !== tmp7) {
        const tmp11 = jsx(tmp(9761).ContextMenu, { items: tmp7, children: tmp8 });
        cResult[4] = tmp7;
        cResult[5] = tmp11;
        tmp9 = tmp11;
      } else {
        tmp9 = cResult[5];
      }
      return tmp9;
    }
  }
  return null;
}) : (function CommandDetailsOverflowMenu(commandId) {
  let intl;
  commandId = commandId.commandId;
  const DeveloperMode = commandId(4799).DeveloperMode;
  if (null != commandId) {
    if (DeveloperMode.useSetting()) {
      let obj = {
        label: intl.string(commandId(1128).t.oJ1Muw),
        action() {
              const obj = ClipboardUtils;
              obj.copy(commandId);
              const obj2 = ToastUtils;
              obj2.presentIdCopied();
            },
        IconComponent: commandId(10412).IdIcon
      };
      intl = tmp(1128).intl;
      const items = [obj];
      return jsx(commandId(9761).ContextMenu, {
        items,
        children(ref) {
              ref = ref.ref;
              const merged = Object.assign(ref, Object.assign({ ref: 0 }));
              const IconButton = commandId(dependencyMap[10]).IconButton;
              const merged1 = Object.assign(merged);
              const intl = commandId(dependencyMap[6]).intl;
              return <IconButton ref={ref} size="sm" variant="secondary-overlay" icon={AssetRegistryDefault} accessibilityLabel={intl.string(commandId(dependencyMap[6]).t.PdRCRg)} maxFontSizeMultiplier={1.5} />;
            }
      });
    }
  }
  return null;
});
const result = size.fileFinishedImporting("modules/app_launcher/native/screens/command_view/CommandDetailsOverflowMenu.tsx");

export default tmp3;
