// Module ID: 16318
// Function ID: 16319
// Name: LocalSvg
// Dependencies: [5, 32, 19, 17, 21, 1148, 7865, 2]
// Exports: default

// Module 16318 (LocalSvg)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let c2, c3;

const Image = react_native.Image;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/svg/native/LocalSvg.tsx");

export default function LocalSvg(asset) {
  let closure_1;
  let first;
  asset = asset.asset;
  const merged = Object.assign(asset, Object.assign({ asset: 0 }));
  closure_1 = undefined;
  [first, closure_1] = react.useState(null);
  const items = [asset];
  const effect = react.useEffect(() => {
    function load() {
      return obj(...arguments);
    }
    let obj = function _load() {
      obj = _asyncToGenerator(async (arg0, value) => {
        let obj2;
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
            let closure_0;
            c3 = 2;
            if (0 === c2) {
              if (arg0 === 1) {
                c3 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 3;
                const obj4 = { value, done: true };
                return obj4;
              } else {
                closure_0 = undefined;
                c2 = 1;
                c3 = 1;
                const obj5 = { value: obj2.readAsset(closure_2_6.resolveAssetSource(closure_0).uri, "utf8"), done: false };
                obj2 = closure_2_1(closure_2_2[5]);
                return obj5;
              }
            } else if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              closure_0 = value;
              const tmp7 = closure_129_0;
              if (!tmp7) {
                tmp4(closure_0);
              }
              c3 = 3;
              return { value: "HermesInternal", done: null };
            }
          } catch (tmp15) {
            c3 = 3;
            throw tmp15;
          }
        }
      });
      return obj(...arguments);
    };
    let c0 = false;
    const tmp = load();
    return () => {
      c0 = true;
    };
  }, items);
  const SvgXml = asset(7865).SvgXml;
  const merged1 = Object.assign(merged);
  return <SvgXml xml={first} />;
};
