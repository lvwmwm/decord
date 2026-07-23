// Module ID: 1615
// Function ID: 17919
// Name: ReanimatedFlatList
// Dependencies: [29, 31, 27, 33, 1616, 1722, 1720, 1721]

// Module 1615 (ReanimatedFlatList)
import _objectWithoutProperties from "_objectWithoutProperties";
import result from "result";
import { useRef } from "result";
import { jsx } from "jsxProd";
import createAnimatedComponent from "createAnimatedComponent";
import getCurrentReactOwner from "getCurrentReactOwner";

let require = arg1;
let closure_2 = ["itemLayoutAnimation", "skipEnteringExitingAnimations", "CellRendererComponentStyle"];
let closure_7 = createAnimatedComponent.createAnimatedComponent(require("get ActivityIndicator").FlatList);

export const ReanimatedFlatList = getCurrentReactOwner.componentWithRef(function FlatListForwardRefRender(skipEnteringExitingAnimations, ref) {
  let CellRendererComponentStyle;
  let itemLayoutAnimation;
  ({ itemLayoutAnimation, CellRendererComponentStyle } = skipEnteringExitingAnimations);
  const tmp = callback(skipEnteringExitingAnimations, closure_2);
  if (!("scrollEventThrottle" in tmp)) {
    tmp.scrollEventThrottle = 1;
  }
  const tmp2 = useRef(itemLayoutAnimation);
  const require = tmp2;
  tmp2.current = itemLayoutAnimation;
  const tmp3 = useRef(CellRendererComponentStyle);
  const dependencyMap = tmp3;
  tmp3.current = CellRendererComponentStyle;
  let obj = { ref };
  obj = {
    CellRendererComponent: React.useMemo(() => (function createCellRendererComponent(closure_0, closure_1) {
      return function CellRendererComponent(onLayout) {
        let obj = {};
        let current;
        if (null != ref) {
          current = ref.current;
        }
        obj.layout = current;
        obj.onLayout = onLayout.onLayout;
        const items = [onLayout.style, ];
        let current1;
        if (null != ref2) {
          current1 = ref2.current;
        }
        if ("function" === typeof current1) {
          let currentResult;
          if (null != ref2) {
            obj = {};
            ({ index: obj2.index, item: obj2.item } = onLayout);
            currentResult = ref2.current(obj);
          }
          current = currentResult;
        } else if (null != ref2) {
          current = ref2.current;
        }
        items[1] = current;
        obj.style = items;
        obj.children = onLayout.children;
        return outer3_6(ref(ref2[5]).AnimatedView, obj);
      };
    })(closure_0, closure_1), [])
  };
  const tmp4 = <closure_7 {...Object.assign(obj, tmp, obj)} />;
  let tmp5 = tmp4;
  if (undefined !== skipEnteringExitingAnimations.skipEnteringExitingAnimations) {
    obj = { skipEntering: true, skipExiting: true, children: tmp4 };
    tmp5 = jsx(require(1720) /* _isNativeReflectConstruct */.LayoutAnimationConfig, { skipEntering: true, skipExiting: true, children: tmp4 });
  }
  return tmp5;
});
