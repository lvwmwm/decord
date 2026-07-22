// Module ID: 12051
// Function ID: 93063
// Dependencies: []

// Module 12051
let closure_3 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
({ View: closure_5, ScrollView: closure_6 } = arg1(dependencyMap[2]));
const tmp2 = arg1(dependencyMap[2]);
({ SHARE_ITEMS: closure_7, SHARE_ITEMS_DEFAULT: closure_8 } = arg1(dependencyMap[3]));
const jsx = arg1(dependencyMap[4]).jsx;
const tmp3 = arg1(dependencyMap[3]);
let obj = {};
obj = { padding: importDefault(dependencyMap[6]).space.PX_16, gap: importDefault(dependencyMap[6]).space.PX_12, alignItems: "center" };
obj.contentContainer = obj;
let closure_10 = arg1(dependencyMap[5]).createStyles(obj);
const obj2 = arg1(dependencyMap[5]);
const memoResult = importAllResult.memo(function InstantInviteShareApps(onItemPressed) {
  const arg1 = onItemPressed.onItemPressed;
  let obj = arg1(closure_2[7]);
  let closure_1 = obj.useFontScale();
  const tmp2 = callback(importAllResult.useState(closure_8), 2);
  const first = tmp2[0];
  closure_2 = tmp2[1];
  const gesture = importAllResult.useMemo(() => {
    const Gesture = onItemPressed(closure_2[8]).Gesture;
    return Gesture.Native().disallowInterruption(true);
  }, []);
  const effect = importAllResult.useEffect(() => {
    Promise.all(closure_7.map((isAvailable) => isAvailable.isAvailable)).then((arr) => {
      const items = [];
      const item = arr.forEach((arg0, arg1) => {
        if (arg0) {
          items.push(closure_7[arg1]);
        }
      });
      callback(items);
    });
  }, []);
  obj = { borderRadius: 60, y: 0, x: 0 };
  const items = [callback2().contentContainer, onItemPressed.contentContainerStyle];
  obj.contentContainerStyle = items;
  obj.children = first.map((type) => {
    let IconComponent;
    let fullIcon;
    let getLabel;
    let icon;
    ({ fullIcon, getLabel, icon, IconComponent, onPress: closure_0 } = type);
    let obj = { style: obj };
    obj = { maxWidth: 76 * callback };
    if (null != fullIcon) {
      obj = {
        image: fullIcon,
        label: getLabel(),
        onPress() {
            return callback(callback);
          },
        maxFontSizeMultiplier: 2
      };
      let tmp3Result = callback2(onItemPressed(closure_2[9]).ImageButton, obj);
    } else {
      const obj1 = { variant: "secondary" };
      if (null == IconComponent) {
        if (null == icon) {
          icon = callback(closure_2[11]);
        }
        IconComponent = icon;
      }
      obj1.icon = IconComponent;
      obj1.label = getLabel();
      obj1.onPress = function onPress() {
        return callback(callback);
      };
      obj1.maxFontSizeMultiplier = 2;
      tmp3Result = callback2(onItemPressed(closure_2[10]).IconButton, obj1);
      const tmp3 = callback2;
    }
    obj.children = tmp3Result;
    return callback2(closure_5, obj, type.type);
  });
  const children = <closure_6 {...obj} />;
  return jsx(arg1(closure_2[8]).GestureDetector, { gesture, children });
});
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/instant_invite/native/components/InstantInviteShareApps.tsx");

export default memoResult;
