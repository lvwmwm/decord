// Module ID: 12958
// Function ID: 12959
// Name: MobileShopButtonCoachmark
// Dependencies: [19, 2061, 21, 5091, 587, 558, 576, 6163, 1126, 9413, 2]

// Module 12958 (MobileShopButtonCoachmark)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 587 */;
import intl2 from "intl" /* 1126 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2061 */;
import FastImageDefault from "FastImage" /* 6163 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5091 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let dependencyMap;

let size;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
const jsx = Fragment.jsx;
let obj = { image: size };
size = { height: 80, width: 80, marginTop: nativeDefault.space.PX_8, marginBottom: -nativeDefault.space.PX_16 };
let closure_6 = createStyles.createStyles(obj);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function MobileShopButtonCoachmark(arg0) {
  let image;
  let marketing;
  let navigateToShop;
  let onDismiss;
  let stringResult;
  let visible;
  const obj = navigateToShop(576);
  const cResult = obj.c(22);
  const tmp = navigateToShop;
  ({ marketing, navigateToShop } = arg0);
  ({ visible, onDismiss } = arg0);
  const tmp4 = closure_6();
  dependencyMap = tmp4;
  const assetLight = marketing.assetLight;
  let obj2 = assetLight;
  let closure_4 = assetLight.useRef(false);
  if (cResult[0] === navigateToShop) {
    let tmp5;
    let tmp7;
    let tmp11;
    let tmp10;
    if (cResult[1] === onDismiss) {
      tmp5 = cResult[2];
    }
    if (cResult[3] !== onDismiss) {
      class C {
        constructor() {
          closure_4.current = true;
          onDismiss(ContentDismissActionType.USER_DISMISS);
        }
      }
      cResult[3] = onDismiss;
      cResult[4] = C;
    } else {
      class C {
        constructor() {
          closure_4.current = true;
          onDismiss(ContentDismissActionType.USER_DISMISS);
        }
      }
    }
    let closure_5 = obj2.useRef(onDismiss);
    if (cResult[5] !== onDismiss) {
      class T {
        constructor() {
          closure_5.current = onDismiss;
        }
      }
      cResult[5] = onDismiss;
      cResult[6] = T;
      tmp7 = T;
    } else {
      class T {
        constructor() {
          closure_5.current = onDismiss;
        }
      }
    }
    const effect = obj2.useEffect(tmp7);
    const _Symbol = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      class T {
        constructor() {
          closure_5.current = onDismiss;
        }
      }
      const items = [];
      cResult[7] = tmp12;
      cResult[8] = items;
      tmp11 = items;
      tmp10 = tmp12;
    } else {
      class T {
        constructor() {
          closure_5.current = onDismiss;
        }
      }
      tmp11 = cResult[8];
    }
    const effect1 = obj2.useEffect(tmp10, tmp11);
    if (cResult[9] === assetLight) {
      class T {
        constructor() {
          closure_5.current = onDismiss;
        }
      }
      if (cResult[12] !== marketing.buttonLabel) {
        class T {
          constructor() {
            closure_5.current = onDismiss;
          }
        }
        if (stringResult == null) {
          class T {
            constructor() {
              closure_5.current = onDismiss;
            }
          }
          stringResult = obj3.string(tmp(1126).t.fYfGgK);
        }
        cResult[12] = marketing.buttonLabel;
        cResult[13] = stringResult;
      } else {
        class T {
          constructor() {
            closure_5.current = onDismiss;
          }
        }
      }
      if (cResult[14] === tmp5) {
        class T {
          constructor() {
            closure_5.current = onDismiss;
          }
        }
      }
      const obj5 = { title: null, description: null, visible, position: "top", renderImgComponent: tmp14, buttonLabel: tmp15, buttonVariant: "secondary", onButtonPress: tmp5, onDismiss: tmp6 };
      ({ title: obj4.title, body: obj4.description } = marketing);
      class E {
        constructor() {
          const obj2 = { uri: assetLight };
          return jsx(FastImageDefault, { style: image.image, source: obj2 });
        }
      }
      cResult[15] = tmp6;
      cResult[16] = marketing.body;
      cResult[17] = marketing.title;
      cResult[18] = tmp14;
      cResult[19] = tmp15;
      cResult[20] = visible;
      cResult[21] = obj5;
    }
    class E {
      constructor() {
        const obj2 = { uri: assetLight };
        return jsx(FastImageDefault, { style: image.image, source: obj2 });
      }
    }
    cResult[9] = assetLight;
    cResult[10] = tmp4.image;
    cResult[11] = E;
  }
  const fn = function l() {
    closure_4.current = true;
    onDismiss(ContentDismissActionType.TAKE_ACTION);
    navigateToShop();
  };
  cResult[0] = navigateToShop;
  cResult[1] = onDismiss;
  cResult[2] = fn;
  tmp5 = fn;
}) : (function MobileShopButtonCoachmark(marketing) {
  marketing = marketing.marketing;
  const navigateToShop = marketing.navigateToShop;
  const visible = marketing.visible;
  const onDismiss = marketing.onDismiss;
  closure_6 = undefined;
  const shopButtonRef = marketing.shopButtonRef;
  const tmp = closure_6();
  let closure_4 = tmp;
  const assetLight = marketing.assetLight;
  closure_6 = onDismiss.useRef(false);
  const items = [onDismiss, navigateToShop];
  const onButtonPress = onDismiss.useCallback(() => {
    closure_6.current = true;
    onDismiss(ContentDismissActionType.TAKE_ACTION);
    navigateToShop();
  }, items);
  const items1 = [onDismiss];
  const callback1 = onDismiss.useCallback(() => {
    closure_6.current = true;
    onDismiss(ContentDismissActionType.USER_DISMISS);
  }, items1);
  let closure_9 = onDismiss.useRef(onDismiss);
  const effect = onDismiss.useEffect(() => {
    closure_9.current = onDismiss;
  });
  const effect1 = onDismiss.useEffect(() => {
    let ref;
    let ref2;
    return () => {
      if (!ref.current) {
        ref2.current(constants.AUTO_DISMISS);
      }
    };
  }, []);
  const items2 = [, , , , , , , ];
  ({ title: arr3[0], body: arr3[1], buttonLabel: arr3[2] } = marketing);
  items2[3] = visible;
  items2[4] = assetLight;
  items2[5] = tmp.image;
  items2[6] = onButtonPress;
  items2[7] = callback1;
  const memo = onDismiss.useMemo(() => {
    let buttonLabel;
    let image;
    let uri;
    let obj = {
      title: marketing.title,
      description: marketing.body,
      visible,
      position: "top",
      renderImgComponent() {
        let obj2;
        const obj = { style: image.image, source: obj2 };
        obj2 = { uri };
        return assetLight(navigateToShop(visible[7]), obj);
      },
      buttonLabel,
      buttonVariant: "secondary",
      onButtonPress,
      onDismiss: callback1
    };
    buttonLabel = marketing.buttonLabel;
    if (buttonLabel == null) {
      const intl = intl2.intl;
      buttonLabel = intl.string(intl2.t.fYfGgK);
    }
    return obj;
  }, items2);
  let obj = marketing(visible[9]);
  const coachmark = obj.useCoachmark(shopButtonRef, memo);
  return null;
});
size = size_mod;
const result = size.fileFinishedImporting("modules/collectibles/native/MobileShopButtonCoachmark.tsx");

export default tmp2;
