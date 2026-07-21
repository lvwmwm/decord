// Module ID: 8114
// Function ID: 64252
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 8114 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_3 = ["pillIcon", "CREATOR_MONETIZATION_OWNERSHIP_TRANSFER_ONBOARD", "trackCtaEvent", "Array", "EXPECTED_ORB_LOTTIE_ANIMATION_DURATION_MS", "r", "WEB", "ICYMI", "GUILD_SETTINGS_TEMPLATE"];
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
let closure_6 = importDefault(dependencyMap[2]);
let closure_7 = importDefault(dependencyMap[3]);
let closure_8 = importDefault(dependencyMap[4]);
let closure_9 = importDefault(dependencyMap[5]);
importAll(dependencyMap[6]);
const jsx = arg1(dependencyMap[7]).jsx;
const tmp3 = (arg0) => {
  class TextPath {
    constructor() {
      self = this;
      tmp = closure_5(this, TextPath);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      combined = items.concat(array);
      obj = closure_8(TextPath);
      tmp3 = closure_7;
      if (closure_11()) {
        if (!combined) {
          combined = [];
        }
        tmp5 = closure_8;
        constructResult = Reflect.construct(obj, combined, closure_8(self).constructor);
      } else {
        constructResult = obj.apply(self, combined);
      }
      tmp3Result = tmp3(self, constructResult);
      TextPath = tmp3Result;
      tmp3Result.setNativeProps = (matrix) => {
        let tmp = !matrix.matrix;
        if (tmp) {
          tmp = callback(closure_2[8])(matrix);
        }
        if (tmp) {
          matrix.matrix = tmp;
        }
        const merged = Object.assign(matrix, tmp3Result(closure_2[9]).pickNotNil(callback(closure_2[10])(matrix, true)));
        if (tmp3Result.root) {
          const root = tmp3Result.root;
          root.setNativeProps(matrix);
        }
      };
      return tmp3Result;
    }
  }
  const arg1 = TextPath;
  callback2(TextPath, arg0);
  const items = [
    {
      key: "render",
      value: function render() {
        let alignmentBaseline;
        let children;
        let href;
        let method;
        let midLine;
        let side;
        let spacing;
        const self = this;
        const props = this.props;
        ({ children, href } = props);
        if (undefined === href) {
          href = props.xlinkHref;
        }
        const startOffset = props.startOffset;
        let num = 0;
        if (undefined !== startOffset) {
          num = startOffset;
        }
        ({ method, spacing, side, alignmentBaseline, midLine } = props);
        let match = href;
        if (href) {
          match = href.match(TextPath(closure_2[9]).idPattern);
        }
        let tmp5 = match;
        if (match) {
          tmp5 = match[1];
        }
        if (tmp5) {
          const withoutXYResult = TextPath(closure_2[11]).withoutXY(self, tmp);
          const _Object = Object;
          let obj = { children };
          obj = { href: tmp5, startOffset: num, method, spacing, side, alignmentBaseline, midLine };
          const merged = Object.assign(withoutXYResult, callback(closure_2[10])(obj, true), obj);
          withoutXYResult.ref = self.refMethod;
          const _Object2 = Object;
          const obj2 = TextPath(closure_2[11]);
          return callback5(callback(closure_2[12]), Object.assign({}, withoutXYResult));
        } else {
          const _console = console;
          console.warn(`Invalid `href` prop for `TextPath` element, expected a href like "#id", but got: "${href}"`);
          obj = { ref: self.refMethod, children };
          return callback5(callback(closure_2[13]), obj);
        }
        const tmp = callback2(props, closure_3);
      }
    }
  ];
  return callback(TextPath, items);
}(importDefault(dependencyMap[14]));
tmp3.displayName = "TextPath";

export default tmp3;
