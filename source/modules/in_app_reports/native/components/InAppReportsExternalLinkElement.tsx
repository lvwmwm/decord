// Module ID: 12229
// Function ID: 93857
// Name: ExternalLinkItem
// Dependencies: []
// Exports: default

// Module 12229 (ExternalLinkItem)
function ExternalLinkItem(data) {
  data = data.data;
  const require = data.url;
  let tmp3 = null;
  if (data.is_localized) {
    let obj = { label: tmp, subLabel: tmp2 };
    obj = { IconComponent: require(dependencyMap[7]).LinkExternalMediumIcon };
    obj.trailing = callback(require(dependencyMap[6]).TableRowIcon, obj);
    obj.onPress = function onPress() {
      callback(closure_2[8]).openURL(url);
    };
    obj.arrow = false;
    obj.accessibilityRole = "link";
    tmp3 = callback(require(dependencyMap[5]).RowButton, obj);
  }
  return tmp3;
}
const View = require(dependencyMap[0]).View;
const _module = require(dependencyMap[1]);
({ jsx: closure_4, jsxs: closure_5 } = _module);
const _module1 = require(dependencyMap[2]);
let closure_6 = _module1.createStyles({ linksContainer: { "Bool(false)": "LIGHT", "Bool(false)": "DARK", "Bool(false)": "backgroundColor" }, headerText: { marginBottom: 8 } });
const _module2 = require(dependencyMap[9]);
const result = _module2.fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsExternalLinkElement.tsx");

export default function ExternalLinksElement(elements) {
  elements = elements.elements;
  const tmp = callback2();
  if (null != elements) {
    if (0 !== elements.length) {
      if (null != elements.find((data) => data.data.is_localized)) {
        let obj = { style: tmp.linksContainer };
        let tmp5 = !elements.some((data) => data.data.is_header_hidden);
        if (tmp5) {
          obj = { "Null": 180, "Null": 180, "Null": null, "Null": "7d7d766e7ebb30cec66584e69b89634d", style: tmp.headerText };
          const intl = require(dependencyMap[4]).intl;
          obj.children = intl.string(require(dependencyMap[4]).t.hvVgAZ).toUpperCase();
          tmp5 = callback(require(dependencyMap[3]).Text, obj);
          const str = intl.string(require(dependencyMap[4]).t.hvVgAZ);
        }
        const items = [tmp5, elements.map((data) => callback(closure_7, { data: data.data }, "external-link-" + arg1))];
        obj.children = items;
        return closure_5(View, obj);
      }
    }
  }
  return null;
};
