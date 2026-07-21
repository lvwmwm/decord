// Module ID: 8082
// Function ID: 64086
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 8082 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
importAll(dependencyMap[5]);
const Image = arg1(dependencyMap[6]).Image;
const jsx = arg1(dependencyMap[7]).jsx;
let closure_10 = /\s+/;
const tmp3 = (arg0) => {
  class SvgImage {
    constructor() {
      self = this;
      tmp = closure_3(this, SvgImage);
      obj = closure_6(SvgImage);
      tmp2 = closure_5;
      if (closure_11()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_6;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_6(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = SvgImage;
  callback2(SvgImage, arg0);
  const items = [
    {
      key: "render",
      value: function render() {
        let height;
        let href;
        let preserveAspectRatio;
        let tmp2;
        let tmp3;
        let width;
        let x;
        let y;
        const SvgImage = this;
        const props = this.props;
        ({ preserveAspectRatio, href } = props);
        ({ x, y, width, height } = props);
        if (undefined === href) {
          href = props.xlinkHref;
        }
        if (preserveAspectRatio) {
          let parts = preserveAspectRatio.trim().split(closure_10);
          const str = preserveAspectRatio.trim();
        } else {
          parts = [];
        }
        let obj = { x, y, width, height, onLoad: props.onLoad };
        [tmp2, tmp3] = parts;
        obj.meetOrSlice = SvgImage(closure_2[8]).meetOrSliceTypes[tmp3] || 0;
        const tmp4 = SvgImage(closure_2[8]).meetOrSliceTypes[tmp3] || 0;
        obj.align = SvgImage(closure_2[8]).alignEnum[tmp2] || "xMidYMid";
        let assetSource = null;
        if (href) {
          let tmp8 = href;
          if ("string" === typeof href) {
            obj = { uri: href };
            tmp8 = obj;
          }
          assetSource = closure_8.resolveAssetSource(tmp8);
        }
        obj.src = assetSource;
        obj = {
          ref(arg0) {
            return self.refMethod(arg0);
          }
        };
        const tmp5 = SvgImage(closure_2[8]).alignEnum[tmp2] || "xMidYMid";
        const tmp9 = callback(closure_2[9]);
        return callback4(tmp9, Object.assign(obj, SvgImage(closure_2[10]).withoutXY(this, props), obj));
      }
    }
  ];
  return callback(SvgImage, items);
}(importDefault(dependencyMap[11]));
tmp3.displayName = "Image";
tmp3.defaultProps = { header: "USE_JPEG", exports: "NotificationCenterItems", get: "toString", ml: "isArray", constructor: "isArray" };

export default tmp3;
