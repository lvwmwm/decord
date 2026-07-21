// Module ID: 5457
// Function ID: 46610
// Name: findLinks
// Dependencies: []
// Exports: TextWithIOSLinkWorkaround

// Module 5457 (findLinks)
function findLinks(children) {
  const Children = React.Children;
  const found = Children.toArray(children).filter(React.isValidElement);
  return found.flatMap((type) => {
    let tmp = type.type === callback(closure_1[4]).I18nLinkComponent;
    if (!tmp) {
      tmp = "link" === type.props.accessibilityRole;
    }
    if (tmp) {
      const items = [type];
      return items;
    } else {
      const props = type.props;
      if (null != props.children) {
        let items1 = callback2(props.children);
      } else {
        items1 = [];
      }
      return items1;
    }
  });
}
let closure_2 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_4, jsxs: closure_5 } = arg1(dependencyMap[2]));
const tmp2 = arg1(dependencyMap[2]);
let closure_6 = arg1(dependencyMap[3]).createStyles({ column: { "Null": true, "Null": "/assets/.cache/intl/bW9kdWxlcy9nb19saXZlL3dlYi9tb2RhbA==" } });
const obj = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/a11y/native/TextWithIOSLinkWorkaround.tsx");

export const TextWithIOSLinkWorkaround = function TextWithIOSLinkWorkaround(children) {
  children = children.children;
  let obj = Object.create(null);
  obj.children = 0;
  const merged = Object.assign(children, obj);
  obj = arg1(dependencyMap[5]);
  const isScreenReaderEnabled = obj.useIsScreenReaderEnabled();
  obj = {};
  const merged1 = Object.assign(merged);
  obj["children"] = children;
  const tmp6 = callback(arg1(dependencyMap[6]).Text, obj);
  const tmp3 = callback3();
  if (obj3.isIOS()) {
    if (isScreenReaderEnabled) {
      const obj1 = { style: tmp3.column };
      const items = [tmp6, findLinks(children)];
      obj1.children = items;
      return callback2(View, obj1);
    }
  }
  return tmp6;
};
