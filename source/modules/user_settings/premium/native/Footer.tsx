// Module ID: 12304
// Function ID: 94294
// Name: Footer
// Dependencies: []
// Exports: default

// Module 12304 (Footer)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_4, Fragment: closure_5, jsxs: closure_6 } = arg1(dependencyMap[2]));
const tmp3 = arg1(dependencyMap[2]);
let closure_7 = arg1(dependencyMap[3]).createStyles({ container: {}, footerText: { marginBottom: 24 }, button: { marginBottom: 40 }, easterEggSpacing: {} });
const obj = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/user_settings/premium/native/Footer.tsx");

export default function Footer(showSubscribeButton) {
  showSubscribeButton = showSubscribeButton.showSubscribeButton;
  const tmp = callback3();
  importDefault(dependencyMap[4])(importDefault(dependencyMap[5]).PREMIUM_MARKETING_FOOTER);
  let obj = { style: items };
  const items = [tmp.container, showSubscribeButton.style];
  let tmp8 = showSubscribeButton;
  if (showSubscribeButton) {
    obj = {};
    obj = { style: tmp.footerText };
    const intl = arg1(dependencyMap[7]).intl;
    obj.children = intl.string(arg1(dependencyMap[7]).t.2bSPbq);
    const items1 = [callback(arg1(dependencyMap[6]).Text, obj), ];
    const obj1 = { style: tmp.button };
    const obj2 = { -77431875: true, 651579808: "/assets/.cache/intl/bW9kdWxlcy9jb2xsZWN0aWJsZXMvd2Vi", -1437179293: null, 1640527953: "06ce787c33fd0c9cd370f243d3462ef5", 101339451: "lt.messages.06ce787c33fd0c9cd370f243d3462ef5.compiled.messages", text: tmp5, onPress: tmp4 };
    obj1.children = callback(arg1(dependencyMap[8]).Button, obj2);
    items1[1] = callback(View, obj1);
    obj.children = items1;
    tmp8 = callback2(closure_5, obj);
  }
  const items2 = [tmp8, ];
  const obj3 = {};
  let easterEggSpacing = null;
  const tmp15 = callback;
  const tmp2 = importDefault(dependencyMap[4]);
  const tmp6 = callback2;
  const tmp7 = View;
  if (!showSubscribeButton) {
    easterEggSpacing = tmp.easterEggSpacing;
  }
  obj3.style = easterEggSpacing;
  obj3.source = importDefault(dependencyMap[10]);
  items2[1] = tmp15(importDefault(dependencyMap[9]), obj3);
  obj.children = items2;
  return tmp6(tmp7, obj);
};
