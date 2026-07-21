// Module ID: 1615
// Function ID: 17913
// Name: ReanimatedFlatList
// Dependencies: []

// Module 1615 (ReanimatedFlatList)
let closure_2 = [];
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const useRef = arg1(dependencyMap[1]).useRef;
const jsx = arg1(dependencyMap[3]).jsx;
let closure_7 = arg1(dependencyMap[4]).createAnimatedComponent(arg1(dependencyMap[2]).FlatList);
const obj = arg1(dependencyMap[4]);

export const ReanimatedFlatList = arg1(dependencyMap[7]).componentWithRef(function FlatListForwardRefRender(skipEnteringExitingAnimations, ref) {
  let CellRendererComponentStyle;
  let itemLayoutAnimation;
  ({ itemLayoutAnimation, CellRendererComponentStyle } = skipEnteringExitingAnimations);
  const tmp = callback(skipEnteringExitingAnimations, closure_2);
  if (!("scrollEventThrottle" in tmp)) {
    tmp.scrollEventThrottle = 1;
  }
  const tmp2 = useRef(itemLayoutAnimation);
  ref = tmp2;
  tmp2.current = itemLayoutAnimation;
  const tmp3 = useRef(CellRendererComponentStyle);
  const dependencyMap = tmp3;
  tmp3.current = CellRendererComponentStyle;
  let obj = { ref };
  obj = {
    CellRendererComponent: React.useMemo(() => function createCellRendererComponent(arg0, arg1) {
      return function CellRendererComponent(onLayout) {
        let obj = {};
        let current;
        if (null != onLayout) {
          current = onLayout.current;
        }
        obj.layout = current;
        obj.onLayout = onLayout.onLayout;
        const items = [onLayout.style, ];
        let current1;
        if (null != arg1) {
          current1 = arg1.current;
        }
        if ("function" === typeof current1) {
          let currentResult;
          if (null != arg1) {
            obj = {};
            ({ index: obj2.index, item: obj2.item } = onLayout);
            currentResult = arg1.current(obj);
          }
          current = currentResult;
        } else if (null != arg1) {
          current = arg1.current;
        }
        items[1] = current;
        obj.style = items;
        obj.children = onLayout.children;
        return closure_6(onLayout(arg1[5]).AnimatedView, obj);
      };
    }(tmp2, tmp3), [])
  };
  const tmp4 = <closure_7 {...Object.assign(obj, tmp, obj)} />;
  let tmp5 = tmp4;
  if (undefined !== skipEnteringExitingAnimations.skipEnteringExitingAnimations) {
    obj = { -9223372036854775808: null, -9223372036854775808: null, children: tmp4 };
    tmp5 = jsx(ref(dependencyMap[6]).LayoutAnimationConfig, obj);
  }
  return tmp5;
});
