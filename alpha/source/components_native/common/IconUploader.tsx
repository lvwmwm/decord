// Module ID: 10127
// Function ID: 10128
// Name: IconUploader
// Dependencies: [5, 19, 17, 1072, 21, 5009, 8212, 6951, 1410, 5712, 10128, 6974, 1114, 2]
// Exports: default

// Module 10127 (IconUploader)
import react_native from "react-native" /* 17 */;
import Constants from "Constants" /* 1072 */;
import intl2 from "intl" /* 1114 */;
import AvatarUtils from "AvatarUtils" /* 1410 */;
import FastImageDefault from "FastImage" /* 5712 */;
import GuildIcon from "GuildIcon" /* 6951 */;
import Pressables from "Pressables" /* 6974 */;
import AssetRegistryDefault from "AssetRegistry" /* 10128 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

const GuildIconDefault = GuildIcon;
let c3, dependencyMap, ref;

let c9;
let metroImportAll;
let metroImportDefault;
const View = react_native.View;
const UPLOAD_MEDIUM_SIZE = Constants.UPLOAD_MEDIUM_SIZE;
({ jsx: metroImportDefault, Fragment: metroImportAll, jsxs: c9 } = Fragment);
let closure_10 = createStyles.createStyles({ uploadIcon: { position: "absolute", right: -7, top: -7 }, avatar: { height: 64, width: 64, borderRadius: 32 } });
const result = size.fileFinishedImporting("components_native/common/IconUploader.tsx");

export default function IconUploader(disabled) {
  let PressableOpacity;
  let closure_2;
  let fnResult;
  let icon;
  let iconStyle;
  let intl;
  let items;
  let name;
  let obj7;
  let tmp8;
  let flag = disabled.disabled;
  if (flag === undefined) {
    flag = false;
  }
  let fn = disabled.makeURL;
  if (fn === undefined) {
    fn = function y(icon) {

    };
  }
  let str = disabled.type;
  if (str === undefined) {
    str = "avatar";
  }
  ({ name, icon, onUpload: require, iconStyle, onChangeIconPress: importDefault } = disabled);
  let obj = function _handleChangeIcon() {
    obj = _asyncToGenerator(async (arg0, value) => {
      let c2;
      let closure_1;
      if (c3 === 2) {
        c3 = 3;
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
        try {
          let base64;
          c3 = 2;
          if (0 === ref) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              let closure_0 = tmp;
              base64 = undefined;
              if (importDefault != null) {
                importDefault();
              }
              if (!ref.current) {
                ref.current = true;
                const obj5 = { size };
                const obj2 = tmp4(ref[6]);
                ref = 1;
                c3 = 1;
                const obj6 = { value: obj2.openImagePicker(obj5), done: false };
                return obj6;
              }
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            base64 = value.base64;
            if (null != base64) {
              if (closure_129_0 != null) {
                tmp9(base64);
              }
            }
            closure_129_2.current = false;
          }
          c3 = 3;
          return { value: "HermesInternal", done: null };
        } catch (tmp21) {
          c3 = 3;
          throw tmp21;
        }
      }
    });
    return obj(...arguments);
  };
  const style = disabled.style;
  const tmp = closure_10();
  dependencyMap = react.useRef(false);
  if (null == icon) {
    fnResult = fn(icon);
  } else {
    obj = /^data:/;
    fnResult = icon;
  }
  if ("guild" === str) {
    const tmp9 = null == icon && null == name;
    if (!tmp9) {
      let obj3 = { style: iconStyle, icon: fnResult, value: name, size: GuildIcon.GuildIconSizes.XLARGE, animate: true };
      const tmp13 = GuildIconDefault;
      tmp8 = closure_7(tmp13, obj3);
    }
  } else {
    const tmp3 = require;
    const tmp4 = dependencyMap;
    let obj2 = AvatarUtils;
    const source = obj2.makeSource(fnResult);
    let obj4 = { style: items, source };
    items = [tmp.avatar, iconStyle];
    tmp8 = closure_7(FastImageDefault, obj4);
  }
  const items1 = [tmp8, ];
  let tmp17 = null;
  const tmp15 = closure_9;
  const tmp16 = closure_8;
  if (!flag) {
    let obj5 = { style: tmp.uploadIcon, source: AssetRegistryDefault };
    const tmp21 = FastImageDefault;
    tmp17 = closure_7(tmp21, obj5);
  }
  items1[1] = tmp17;
  const tmp15Result = tmp15(tmp16, { children: items1 });
  let tmp23 = tmp15Result;
  if (!flag) {
    let obj6 = { style, children: closure_7(PressableOpacity, obj7) };
    obj7 = {
      accessibilityRole: "button",
      accessibilityLabel: intl.string(intl2.t["MsUY/S"]),
      onPress: function handleChangeIcon() {
          return obj(...arguments);
        },
      children: tmp15Result
    };
    PressableOpacity = Pressables.PressableOpacity;
    intl = intl2.intl;
    tmp23 = closure_7(View, obj6);
  }
  return tmp23;
};
