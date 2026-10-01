// Module ID: 10389
// Function ID: 10390
// Name: IconUploader
// Dependencies: [5, 19, 17, 1074, 21, 4836, 5450, 5896, 1397, 10390, 5435, 1115, 2]
// Exports: default

// Module 10389 (IconUploader)
import Constants from "Constants" /* 1074 */;
import intl2 from "intl" /* 1115 */;
import AvatarUtils from "AvatarUtils" /* 1397 */;
import Pressables from "Pressables" /* 5435 */;
import GuildIcon from "GuildIcon" /* 5896 */;
import AssetRegistryDefault from "AssetRegistry" /* 10390 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const GuildIconDefault = GuildIcon;
let c3, dependencyMap, ref;

let c10;
let c9;
let hasOwnProperty;
let metroImportAll;
let metroRequire;
({ View: hasOwnProperty, Image: metroRequire } = react_native);
const UPLOAD_MEDIUM_SIZE = Constants.UPLOAD_MEDIUM_SIZE;
({ jsx: metroImportAll, Fragment: c9, jsxs: c10 } = Fragment);
let closure_11 = createStyles.createStyles({ uploadIcon: { position: "absolute", right: -7, top: -7 }, avatar: { height: 64, width: 64, borderRadius: 32 } });
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
  let tmp7;
  let flag = disabled.disabled;
  if (flag === undefined) {
    flag = false;
  }
  let fn = disabled.makeURL;
  if (fn === undefined) {
    fn = function u(icon) {

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
  const tmp = closure_11();
  dependencyMap = react.useRef(false);
  if (null == icon) {
    fnResult = fn(icon);
  } else {
    obj = /^data:/;
    fnResult = icon;
  }
  if ("guild" === str) {
    const tmp8 = null == icon && null == name;
    if (!tmp8) {
      const tmp9 = closure_8;
      let obj3 = { style: iconStyle, icon: fnResult, value: name, size: GuildIcon.GuildIconSizes.XLARGE, animate: true };
      const tmp12 = GuildIconDefault;
      tmp7 = closure_8(tmp12, obj3);
    }
  } else {
    const tmp3 = require;
    const tmp4 = dependencyMap;
    let obj2 = AvatarUtils;
    let obj4 = { style: items, source: obj2.makeSource(fnResult) };
    items = [tmp.avatar, iconStyle];
    tmp7 = closure_8(closure_6, obj4);
  }
  const items1 = [tmp7, ];
  let tmp16 = null;
  const tmp14 = closure_10;
  const tmp15 = closure_9;
  if (!flag) {
    let obj5 = { style: tmp.uploadIcon, source: AssetRegistryDefault };
    tmp16 = closure_8(closure_6, obj5);
  }
  items1[1] = tmp16;
  const tmp14Result = tmp14(tmp15, { children: items1 });
  let tmp22 = tmp14Result;
  if (!flag) {
    let obj6 = { style, children: closure_8(PressableOpacity, obj7) };
    obj7 = {
      accessibilityRole: "button",
      accessibilityLabel: intl.string(intl2.t["MsUY/S"]),
      onPress: function handleChangeIcon() {
          return obj(...arguments);
        },
      children: tmp14Result
    };
    PressableOpacity = Pressables.PressableOpacity;
    intl = intl2.intl;
    tmp22 = closure_8(closure_5, obj6);
  }
  return tmp22;
};
