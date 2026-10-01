// Module ID: 14133
// Function ID: 14134
// Name: components_native/ErrorBoundary
// Dependencies: [5, 32, 19, 17, 10969, 21, 4836, 504, 11267, 5281, 1115, 4540, 1231, 573, 1177, 9304, 4832, 2]

// Module 14133 (components_native/ErrorBoundary)
import DispatcherDefault from "Dispatcher" /* 573 */;
import intl4 from "intl" /* 1115 */;
import native from "native" /* 1177 */;
import SentryUtilsDefault from "SentryUtils" /* 1231 */;
import native2 from "native" /* 4540 */;
import Text_Text from "Text/Text" /* 4832 */;
import AppCrash from "AppCrash" /* 9304 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import BuildOverrideStore from "BuildOverrideStore" /* 10969 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let c1, c4, closure_2;

let c10;
let c9;
let metroImportDefault;
let metroRequire;
function MaybeClearBuildOverride() {
  let closure_0;
  let currentBuildOverride;
  let first;
  let intl;
  let obj = function _clearOverride() {
    obj = _asyncToGenerator(async (arg0, value) => {
      let obj2;
      if (c4 === 2) {
        c4 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        let c3;
        try {
          c4 = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              c3 = 1;
              closure_2_0(true);
              c1 = 2;
              c4 = 1;
              const obj5 = { value: obj2.clearBuildOverride(), done: false };
              obj2 = tmp(closure_2[8]);
              return obj5;
            }
          } else {
            if (1 === tmp4) {
              c3 = 0;
              closure_128_0(false);
            } else if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              c4 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              c3 = 0;
            }
            c4 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp13) {
          closure_2 = tmp13;
          if (0 === c3) {
            c4 = 3;
            throw tmp13;
          } else {
            c1 = 1;
          }
        }
      }
    });
    return obj(...arguments);
  };
  [first, _require] = react.useState(false);
  const tmp3 = _require;
  let tmp4 = dependencyMap;
  obj = require("get initialized");
  const items = [BuildOverrideStore];
  if (null == obj.useStateFromStores(items, () => {
    const overrides = currentBuildOverride.getCurrentBuildOverride().overrides;
    let id;
    if (overrides != null) {
      const tmp4 = overrides[closure_0(undefined, dependencyMap[8]).DEVICE_FIELD];
      if (tmp4 != null) {
        id = tmp4.id;
      }
    }
    return id;
  })) {
    return null;
  } else {
    let obj2 = {
      variant: "secondary",
      loading: first,
      text: intl.string(tmp3(1115).t["/Nz9rY"]),
      onPress: function clearOverride() {
          return obj(...arguments);
        }
    };
    const Button = tmp3(5281).Button;
    intl = tmp3(1115).intl;
    return closure_9(Button, obj2);
  }
}
({ NativeModules: metroRequire, View: metroImportDefault } = react_native);
({ jsx: c9, jsxs: c10 } = Fragment);
const unpackModuleId = createStyles.createLegacyClassComponentStyles({ buttons: { position: "absolute", right: 32, bottom: 32, left: 32, gap: 12 }, debugLogsContainer: { position: "absolute", right: 32, top: 64, display: "flex", flexDirection: "row", alignItems: "center", gap: 12 }, error: { marginTop: 24, textAlign: "center" }, text: { textAlign: "center" } });
const PureComponent = react.PureComponent;
class ErrorBoundary extends PureComponent {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    applyArgumentsResult.state = { error: null, info: null };
    applyArgumentsResult.discordErrorsSet = false;
    return applyArgumentsResult;
  }
  componentDidCatch(error, info) {
    this.triggerSoftCrash(error, info);
  }
  triggerSoftCrash(error, info) {
    const obj = { error, info };
    this.setState(obj);
    const obj2 = SentryUtilsDefault;
    const obj3 = { extra: info };
    obj2.captureCrash(error, obj3);
    const obj4 = DispatcherDefault;
    obj4.dispatch({ type: "CLEAR_CACHES", reason: "App Crashed" });
  }
  handleReload() {
    metroRequire = metroRequire.BundleUpdaterManager;
    metroRequire.reload();
  }
  componentDidMount() {
    const self = this;
    if (null == window.DiscordErrors) {
      const _window = window;
      const obj = {
        softCrash(error) {
            self.triggerSoftCrash(error);
          }
      };
      window.DiscordErrors = obj;
      tmp.discordErrorsSet = true;
    }
  }
  componentWillUnmount() {
    if (this.discordErrorsSet) {
      const _window = window;
      window.DiscordErrors = null;
      tmp.discordErrorsSet = false;
    }
  }
  render() {
    let children;
    let intl;
    let intl2;
    let intl3;
    let items;
    let items1;
    let str;
    const self = this;
    const tmp = closure_11(this.context);
    const error = this.state.error;
    if (null !== error) {
      const obj = { Illustration: AppCrash.AppCrash, title: intl.string(intl4.t.tx8CkI), body: intl2.string(intl4.t.CvQlAH), titleStyle: null, bodyStyle: null, children: items };
      const EmptyState = native.EmptyState;
      intl = intl4.intl;
      intl2 = intl4.intl;
      ({ text: obj.titleStyle, text: obj.bodyStyle } = tmp);
      const obj2 = { style: tmp.error, variant: "text-sm/medium", color: "text-muted", children: str };
      str = undefined;
      const Text = Text_Text.Text;
      if (error != null) {
        str = error.message;
      }
      if (str == null) {
        let name;
        if (error != null) {
          name = error.name;
        }
        str = name;
      }
      if (str == null) {
        str = "Unknown Error";
      }
      items = [React4(Text, obj2), , ];
      const obj3 = { style: tmp.buttons, children: items1 };
      items1 = [React4(MaybeClearBuildOverride, {}), ];
      const obj4 = { text: intl3.string(intl4.t["4n8OJn"]), onPress: self.handleReload };
      const Button = tmp3(5281).Button;
      intl3 = tmp3(1115).intl;
      items1[1] = React4(Button, obj4);
      items[1] = authStore(metroImportDefault, obj3);
      items[2] = null;
      children = tmp2(EmptyState, obj);
    } else {
      children = self.props.children;
    }
    return children;
  }
}
const prototype = ErrorBoundary.prototype;
ErrorBoundary.contextType = native2.ThemeContext;
const result = size.fileFinishedImporting("components_native/ErrorBoundary.tsx");

export default ErrorBoundary;
