// Module ID: 15217
// Function ID: 15218
// Name: button
// Dependencies: [19, 21, 558, 576, 5282, 2]

// Module 15217 (button)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp;
const components_Button_Button = tmp(5282);
const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let tmp4;
  const obj = react2;
  const cResult = obj.c(2);
  if (cResult[0] !== arg0) {
    const Button = components_Button_Button.Button;
    const merged = Object.assign(arg0);
    const tmp9 = <Button size="lg" />;
    cResult[0] = arg0;
    cResult[1] = tmp9;
    tmp4 = tmp9;
  } else {
    tmp4 = cResult[1];
  }
  return tmp4;
}) : ((arg0) => {
  const Button = components_Button_Button.Button;
  const merged = Object.assign(arg0);
  return <Button size="lg" />;
});
const result = size.fileFinishedImporting("modules/mfa/native/components/button.tsx");

export default tmp3;
